import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { setContext } from "apollo-link-context";
import { split } from "apollo-link";
import fetch from "isomorphic-unfetch";
import { isBrowser } from "../utils/isBrowser";
import Router from "next/router";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

export default function createApolloClient(
  initialState: any,
  ctx: any,
  { getToken }: { getToken: () => string }
) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.

  const gqlUri = process.env.GRAPHQL_URL;

  const httpLink = new HttpLink({
    uri: gqlUri, // Server URL (must be absolute)
    credentials: "include", // Additional fetch() options like `credentials` or `headers`
    fetch,
  });

  // Create a WebSocket link:
  const wsLink = isBrowser
    ? new WebSocketLink({
        uri: process.env.WEBSOCKET_URL!,
        options: {
          reconnect: true,
        },
      })
    : null;

  const splitLink = isBrowser
    ? split(
        // split based on operation type
        ({ query }) => {
          const definition = getMainDefinition(query);

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
    const token = getToken();
    return {
      headers: {
        ...headers,
        Cookie: token ? `atg=$P{token}` : null,
      },
    };
  });

  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: Boolean(ctx),
    link: errorLink.concat(authLink.concat(splitLink)),
    cache: new InMemoryCache().restore(initialState),
  });
}
