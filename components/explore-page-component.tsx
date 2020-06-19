import React from "react";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

import { ClonedChildrenFromAuthLayout } from "../pages/traveling";
import { Flex } from "./primitives/styled-rebass";
import { LayoutAuthorizedHeaderBookings } from "./layout-authorized-header-bookings";
import { ExploreTabs } from "./explore-tabs";
import { ExploreTabDiscover } from "./explore-tabs-discover";
const ExploreTabActivities = dynamic(() => import("./explore-tab-activities"));

interface ExplorePageComponentProps extends ClonedChildrenFromAuthLayout {
  // pathname: NextContext["pathname"];
  // query: NextContext["query"];
}

export const ExplorePageComponent: React.FC<ExplorePageComponentProps> = ({
  modalOverlayDispatch,
  modalOverlayState,
}) => {
  return (
    <>
      <NextSeo
        title="Explore"
        description="Control and edit various application Explore."
        canonical="https://at.eddienaff.dev/"
        openGraph={{
          url: "https://at.eddienaff.dev/Explore",
          title: "Explore",
          description: "Control and edit various application Explore.",
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
      <Flex flexDirection="column" flex={1} overflowY="auto">
        <LayoutAuthorizedHeaderBookings
          modalOverlayDispatch={modalOverlayDispatch}
          modalOverlayState={modalOverlayState}
          title="Explore"
        />

        <ExploreTabs>
          <ExploreTabDiscover label="Discover" />
          <ExploreTabActivities label="Activities" />
        </ExploreTabs>
      </Flex>
    </>
  );
};

export interface ExploreTabsProps {
  label: string;
}
