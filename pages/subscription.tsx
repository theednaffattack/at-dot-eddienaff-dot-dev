import React from "react";
import { NextPage, NextPageContext } from "next";
import { NextSeo } from "next-seo";

import { getLayout } from "../components/layout-authorized";
import { NextPageStaticVariableProps } from "../typings/types";
import { withApollo } from "../lib/with-apollo_v2";
import { ClonedChildrenFromAuthLayout } from "../pages/traveling";
import { SubscriptionPageComponent } from "../components/subscription-page-component";

interface SubscriptionPageProps
  extends NextPageContext,
    ClonedChildrenFromAuthLayout {}

const Subscription: NextPage<SubscriptionPageProps, {}> &
  NextPageStaticVariableProps = ({
  modalOverlayDispatch,
  modalOverlayState,
}) => {
  return (
    <>
      <NextSeo
        title="Subscription"
        description="See sights and attractions near your current location."
        canonical="https://at.eddienaff.dev/"
        openGraph={{
          url: "https://at.eddienaff.dev/near-me",
          title: "Subscription",
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
      <SubscriptionPageComponent
        modalOverlayDispatch={modalOverlayDispatch}
        modalOverlayState={modalOverlayState}
        title="Subscription"
      />
    </>
  );
};

Subscription.displayName = `SubscriptionPage`;

Subscription.getInitialProps = async ({ query, pathname }) => {
  return {
    query,
    pathname,
  };
};

Subscription.getLayout = getLayout;

Subscription.title = "Subscription";

export default withApollo()(Subscription);
