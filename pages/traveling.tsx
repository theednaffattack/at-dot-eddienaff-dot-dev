import React from "react";
import { NextPage, NextPageContext } from "next";

import { getLayout } from "../components/layout-authorized";
import { NextPageStaticVariableProps } from "../typings/types";
import { withApollo } from "../lib/with-apollo_v2";
import { TravelingPageComponent } from "../components/traveling-page-component";

interface TravelingPageProps extends NextPageContext {}

const Traveling: NextPage<TravelingPageProps, {}> &
  NextPageStaticVariableProps = ({}) => {
  return <TravelingPageComponent />;
};

Traveling.displayName = `TravelingPage`;

Traveling.getInitialProps = async ({ query, pathname }) => {
  return {
    query,
    pathname,
    hello: "hello",
  };
};

Traveling.getLayout = getLayout;

Traveling.title = "Traveling";

export default withApollo()(Traveling);
