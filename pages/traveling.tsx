import React from "react";
import { NextPage, NextPageContext } from "next";

import {
  getLayout,
  AuthorizedLayoutModalOverlayActions,
  AuthorizedLayoutModalOverlayState,
} from "../components/layout-authorized";
import { NextPageStaticVariableProps } from "../typings/types";
import { withApollo } from "../lib/with-apollo_v2";
import { TravelingPageComponent } from "../components/traveling-page-component";

export interface ClonedChildrenFromAuthLayout {
  modalOverlayState: AuthorizedLayoutModalOverlayState;
  modalOverlayDispatch: React.Dispatch<AuthorizedLayoutModalOverlayActions>;
}

interface TravelingPageProps
  extends NextPageContext,
    ClonedChildrenFromAuthLayout {}

const Traveling: NextPage<TravelingPageProps, {}> &
  NextPageStaticVariableProps = ({
  modalOverlayDispatch,
  modalOverlayState,
}) => {
  return (
    <TravelingPageComponent
      modalOverlayDispatch={modalOverlayDispatch}
      modalOverlayState={modalOverlayState}
    />
  );
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
