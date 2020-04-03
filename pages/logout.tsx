import React from "react";
import { NextPage, NextPageContext } from "next";

import {
  NextPageStaticVariableProps,
  NextPageContextApollo
} from "../typings/types";
import { withApollo } from "../lib/with-apollo_v2";
import { getLayout } from "../components/layout.v2";
import { LogoutDocument } from "../lib/mutations/logout.graphql";
import redirect from "../utils/redirect";

interface LogoutProps extends Partial<NextPageContext> {}

const Logout: NextPage<LogoutProps> & NextPageStaticVariableProps = () => {
  return (
    <>
      <div>Logout</div>
    </>
  );
};

Logout.getInitialProps = async (ctx: NextPageContextApollo) => {
  // logout();

  if (ctx.apolloClient) {
    let processLogout = await ctx.apolloClient.mutate({
      mutation: LogoutDocument
    });

    // await apolloClient.resetStore();
    await ctx.apolloClient.clearStore();

    // const fullUrl = "http://192.168.1.6:3000/login";
    const targetUrl = "/login?message=You have successfully logged out.";

    if (
      processLogout &&
      processLogout.data &&
      processLogout.data.logout === true
    ) {
      console.log("BEFORE REDIRECT");
      redirect(ctx, targetUrl, { asPath: "/login" });
    }
    return { query: ctx.query };
  } else {
    throw Error("No apolloClient");
  }
};

Logout.displayName = "LogoutPage";
Logout.getLayout = getLayout;
Logout.title = "Logout";

export default withApollo()(Logout);
