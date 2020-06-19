import React from "react";

import { getLayout } from "../components/layout-authorized";
import { NextPageStaticVariableProps } from "../typings/types";
import { withApollo } from "../lib/with-apollo_v2";
import { NextPage, NextPageContext } from "next";
import { ClonedChildrenFromAuthLayout } from "../pages/traveling";
import { MessagePageComponent } from "../components/messages-page-component";

interface MessagesPageProps
  extends NextPageContext,
    ClonedChildrenFromAuthLayout {}

const Messages: NextPage<MessagesPageProps, {}> &
  NextPageStaticVariableProps = ({
  modalOverlayDispatch,
  modalOverlayState,
}) => {
  return (
    <MessagePageComponent
      modalOverlayDispatch={modalOverlayDispatch}
      modalOverlayState={modalOverlayState}
    />
  );
};

Messages.displayName = `MessagesPage`;

Messages.getInitialProps = async ({ query, pathname }) => {
  return {
    query,
    pathname,
    hello: "hello",
  };
};

Messages.getLayout = getLayout;

Messages.title = "Messages";

export default withApollo()(Messages);
