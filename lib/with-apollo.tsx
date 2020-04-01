import { NextPageContext } from "next";
import React from "react";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
// import { ApolloProvider } from "react-apollo";
import { WebSocketLink } from "apollo-link-ws";
import { split } from "apollo-link";
import { ApolloClient } from "apollo-client";
import { getMainDefinition } from "apollo-utilities";
// import { IntrospectionFragmentMatcher } from "apollo-cache-inmemory";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import fetch from "isomorphic-unfetch";
import { setContext } from "apollo-link-context";
import cookie from "cookie";
import Router from "next/router";

import { isBrowser } from "../utils/isBrowser";

export type TApolloClient = ApolloClient<NormalizedCacheObject>;

type InitialProps = {
  apolloClient: TApolloClient;
  apolloState: any;
} & Record<string, any>;

type WithApolloPageContext = {
  apolloClient: TApolloClient;
} & NextPageContext;

let globalApolloClient: TApolloClient;

// import introspectionQueryResultData from "../modules/gql-gen/generated/fragmentTypes";

// const fragmentMatcher = new IntrospectionFragmentMatcher({
//   introspectionQueryResultData
// });

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 */
export default function withApollo(
  PageComponent: any, // NextPage & { token?: string | undefined },
  { ssr = true } = {}
) {
  const WithApollo = ({
    apolloClient,
    apolloState,
    ...pageProps
  }: InitialProps) => {
    const client = apolloClient || initApolloClient(apolloState);

    return (
      <ApolloProvider client={client}>
        {PageComponent.getLayout ? (
          PageComponent.getLayout(<PageComponent {...pageProps} />)
        ) : (
          <PageComponent {...pageProps} />
        )}
      </ApolloProvider>
    );
  };

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== "production") {
    const displayName =
      PageComponent.displayName || PageComponent.name || "Component";

    const title = PageComponent.title || "PageComponent.title missing";

    if (displayName === "App") {
      console.warn("This withApollo HOC only works with PageComponents.");
    }

    WithApollo.displayName = `withApollo(${displayName})`;
    // transfer title prop to withApollo so that it can be picked
    // up by our getLayout functions
    WithApollo.title = title;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (ctx: WithApolloPageContext) => {
      const { AppTree } = ctx;

      // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProp`.
      const apolloClient = (ctx.apolloClient = initApolloClient({}, ctx.req));

      // Run wrapped getInitialProps methods
      let pageProps = {};
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      }

      // Only on the server:
      if (typeof window === "undefined") {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        }

        // Only if ssr is enabled
        if (ssr) {
          try {
            // Run all GraphQL queries
            const { getDataFromTree } = await import("@apollo/react-ssr");
            await getDataFromTree(
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient
                }}
              />
            );
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error("Error while running `getDataFromTree`", error);
          }

          // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually
          Head.rewind();
        }
      }

      // Extract query data from the Apollo store
      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,
        apolloState
      };
    };
  }

  return WithApollo;
}

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */
function initApolloClient(initialState?: any, req?: NextPageContext["req"]) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return createApolloClient(initialState, req);
  }

  // Reuse client on the client-side
  if (!globalApolloClient) {
    globalApolloClient = createApolloClient(initialState, req);
  }

  return globalApolloClient;
}

function parseCookies(req?: NextPageContext["req"], options = {}) {
  return cookie.parse(
    req && req.headers ? req.headers.cookie || "" : document.cookie,
    options
  );
}

/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */
function createApolloClient(initialState = {}, req?: NextPageContext["req"]) {
  const ssrMode = !isBrowser;
  const cache = new InMemoryCache().restore(initialState || {});

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode, // Disables forceFetch on the server (so queries are only run once)
    link: createIsomorphLink(req),
    cache
  });
}

function createIsomorphLink(req?: NextPageContext["req"]) {
  // on the server we refer to a locally generated schema
  // this should be faster
  // if (!isBrowser) {
  //   const { SchemaLink } = require("apollo-link-schema");
  //   const schema = require("./schema").default;
  //   return new SchemaLink({ schema });
  // } else {
  // on the client we ping the API server

  const gqlUri = process.env.GRAPHQL_URL;

  const httpLink = new HttpLink({
    uri: gqlUri, // Server URL (must be absolute)
    credentials: "include", // Additional fetch() options like `credentials` or `headers`
    fetch
  });

  // Create a WebSocket link:
  const wsLink = isBrowser
    ? new WebSocketLink({
        uri: process.env.WEBSOCKET_URL!,
        options: {
          reconnect: true
        }
      })
    : null;

  const splitLink = isBrowser
    ? split(
        // split based on operation type
        ({ query }) => {
          const definition = getMainDefinition(query);
          console.log("LOOK AT DEFINITIONS", { definition });
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wsLink!,
        httpLink
      )
    : httpLink;

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) => {
        let authErrorMessage = "Not authenticated";
        if (isBrowser && message.includes(authErrorMessage)) {
          Router.replace(`/login?message=${authErrorMessage}`);
        } else {
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
              locations,
              null,
              2
            )}, Path: ${path}`
          );
        }
      });
    if (networkError) {
      console.log(`[Network Error]: ${networkError}`);
    }
  });

  const authLink = setContext((_, { headers }) => {
    const token = parseCookies(req).atg;

    const authLinkToReturn = {
      headers: {
        ...headers,
        cookie: token ? `atg=${token}` : ""
      }
    };

    return authLinkToReturn;
  });

  return errorLink.concat(authLink.concat(splitLink));
}
