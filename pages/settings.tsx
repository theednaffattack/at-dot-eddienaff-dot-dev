import React from "react";
import { NextPage, NextPageContext } from "next";

import { getLayout } from "../components/layout-authorized";
import { NextPageStaticVariableProps } from "../typings/types";
import { withApollo } from "../lib/with-apollo_v2";
import { ClonedChildrenFromAuthLayout } from "../pages/traveling";
import { SettingsPageComponent } from "../components/settings-page-component";

interface SettingsPageProps
  extends NextPageContext,
    ClonedChildrenFromAuthLayout {}

const Settings: NextPage<SettingsPageProps, {}> &
  NextPageStaticVariableProps = ({
  modalOverlayDispatch,
  modalOverlayState,
}) => {
  return (
    <SettingsPageComponent
      modalOverlayDispatch={modalOverlayDispatch}
      modalOverlayState={modalOverlayState}
    />
  );
};

Settings.displayName = `SettingsPage`;

Settings.getInitialProps = async ({ query, pathname }) => {
  return {
    query,
    pathname,
  };
};

Settings.getLayout = getLayout;

Settings.title = "Settings";

export default withApollo()(Settings);
