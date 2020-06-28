import React from "react";
import { NextPage, NextPageContext } from "next";
import { NextSeo } from "next-seo";

import { getLayout } from "../components/layout-authorized";
import { NextPageStaticVariableProps } from "../typings/types";
import { withApollo } from "../lib/with-apollo_v2";
import { ClonedChildrenFromAuthLayout } from "../pages/traveling";
import { Flex } from "../components/primitives/styled-rebass";
import { LayoutAuthorizedHeader } from "../components/layout-authorized-header";
import { size } from "../components/styles/theme";
import { SavedCardList } from "../components/saved-card-list";
import { fauxSavedCards } from "../components/helpers";
import { SavedPageInfoAndFilterButton } from "../components/saved-page-info-and-filter-button";

interface SavedPageProps
  extends NextPageContext,
    ClonedChildrenFromAuthLayout {}

const Saved: NextPage<SavedPageProps, {}> & NextPageStaticVariableProps = ({
  modalOverlayDispatch,
  modalOverlayState,
}) => {
  return (
    <SavedPageComponent
      modalOverlayDispatch={modalOverlayDispatch}
      modalOverlayState={modalOverlayState}
    />
  );
};

Saved.displayName = `SavedPage`;

Saved.getInitialProps = async ({ query, pathname }) => {
  return {
    query,
    pathname,
  };
};

Saved.getLayout = getLayout;

Saved.title = "Saved";

export default withApollo()(Saved);

function SavedPageComponent({
  modalOverlayDispatch,
  modalOverlayState,
}: ClonedChildrenFromAuthLayout) {
  return (
    <>
      <NextSeo
        title="Saved"
        description="View saved trips and hotels."
        canonical="https://at.eddienaff.dev/"
        openGraph={{
          url: "https://at.eddienaff.dev/saved",
          title: "Saved",
          description: "Control and edit various application Saved.",
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
      <Flex flexDirection="column" alignItems="center" flex={1}>
        <LayoutAuthorizedHeader
          modalOverlayDispatch={modalOverlayDispatch}
          modalOverlayState={modalOverlayState}
          title="Saved"
        />
        <Flex
          flexDirection="column"
          // mt={[3, 3, 3, 3, 3, 3, 4]}
          width={[
            size.mobileS,
            size.mobileS,
            size.mobileS,
            size.mobileL,
            size.tablet,
            size.laptop,
            size.laptopL,
          ]}
          px={[2, 2, 2, 2, 4, 4, 0]}
        >
          <SavedPageInfoAndFilterButton
            modalOverlayDispatch={modalOverlayDispatch}
            count={fauxSavedCards.length}
          />
          <SavedCardList data={fauxSavedCards} />
        </Flex>
      </Flex>
    </>
  );
}
