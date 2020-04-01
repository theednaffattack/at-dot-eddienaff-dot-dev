import { ApolloClient } from "apollo-client";
import { NormalizedCacheObject } from "apollo-cache-inmemory";
import { NextPageContext } from "next";
import { TApolloClient } from "../lib/with-apollo";

export interface NextContext extends NextPageContext {
  apolloClient?: ApolloClient<NormalizedCacheObject>;
  referer?: string;
  userAgent?: string;
  // token?: string;
}

/**
 * Any modifications to the default context w/Apollo,
 * e.g. query, pathname, apolloClient...
 * should go here.
 */
export interface NextPageContextApollo extends NextPageContext {
  // Apollo Cllient added to default context
  apolloClient: TApolloClient;
}

export type NextPageStaticVariableProps = {
  title: string;
  displayName: string;
  getLayout: (page: any) => JSX.Element;
};
