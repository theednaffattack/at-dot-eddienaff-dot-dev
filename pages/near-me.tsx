import React from "react";
import { NextPage, NextPageContext } from "next";
import { NextSeo } from "next-seo";

import { getLayout } from "../components/layout-authorized";
import { NextPageStaticVariableProps } from "../typings/types";
import { withApollo } from "../lib/with-apollo_v2";
import { ClonedChildrenFromAuthLayout } from "../pages/traveling";
import { NearMePageComponent } from "../components/near-me-page-component";

interface NearMePageProps
  extends NextPageContext,
    ClonedChildrenFromAuthLayout {}

const NearMe: NextPage<NearMePageProps, {}> & NextPageStaticVariableProps = ({
  modalOverlayDispatch,
  modalOverlayState,
}) => {
  return (
    <>
      <NextSeo
        title="Near Me"
        description="See sights and attractions near your current location."
        canonical="https://at.eddienaff.dev/"
        openGraph={{
          url: "https://at.eddienaff.dev/near-me",
          title: "Near Me",
          description: "See sights and attractions near your current location.",
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
          site_name: "Atlas Travel",
        }}
      />
      <NearMePageComponent
        modalOverlayDispatch={modalOverlayDispatch}
        modalOverlayState={modalOverlayState}
        title="Near Me"
      />
    </>
  );
};

NearMe.displayName = `NearMePage`;

NearMe.getInitialProps = async ({ query, pathname }) => {
  return {
    query,
    pathname,
  };
};

NearMe.getLayout = getLayout;

NearMe.title = "NearMe";

export default withApollo()(NearMe);
