import React from "react";
import { NextPage, NextPageContext } from "next";

import { getLayout } from "../components/layout-authorized";
import { NextPageStaticVariableProps } from "../typings/types";
import { withApollo } from "../lib/with-apollo_v2";
import { ClonedChildrenFromAuthLayout } from "../pages/traveling";
import { ExplorePageComponent } from "../components/explore-page-component";

interface ExplorePageProps
  extends NextPageContext,
    ClonedChildrenFromAuthLayout {}

const Explore: NextPage<ExplorePageProps, {}> & NextPageStaticVariableProps = ({
  modalOverlayDispatch,
  modalOverlayState,
}) => {
  return (
    <ExplorePageComponent
      modalOverlayDispatch={modalOverlayDispatch}
      modalOverlayState={modalOverlayState}
    />
  );
};

Explore.displayName = `ExplorePage`;

Explore.getInitialProps = async ({ query, pathname }) => {
  return {
    query,
    pathname,
  };
};

Explore.getLayout = getLayout;

Explore.title = "Explore";

export default withApollo()(Explore);
