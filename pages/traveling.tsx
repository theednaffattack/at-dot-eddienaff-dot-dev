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
import { NextSeo } from "next-seo";

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
    <>
      <NextSeo
        title="Traveling"
        description="A traveling page, nothing more."
        canonical="https://at.eddienaff.dev/"
        openGraph={{
          url: "https://at.eddienaff.dev/traveling",
          title: "Traveling",
          description: "A beautiful traveling page.",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
          site_name: "SiteName",
        }}
      />
      <TravelingPageComponent
        title="Traveling"
        modalOverlayDispatch={modalOverlayDispatch}
        modalOverlayState={modalOverlayState}
      />
    </>
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
