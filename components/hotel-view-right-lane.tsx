import React from "react";
import { Flex } from "./primitives/styled-rebass";
import { HotelViewTitleCard } from "./hotel-view-title-card";
import { HotelViewInfoCard } from "./hotel-view-info-card";
import { HotelViewFeaturesCard } from "./hotel-view-features-card";
import { HotelViewMapViewCard } from "./hotel-view-map-view-card";
import { HotelViewListCard } from "./hotel-view-list-card";
import { NextRouter } from "next/router";

interface HotelViewRightLaneProps {
  cardWidths: (string | number)[];
  hotelCardPadding: number[];
  laneWidths: number[];
  laneMarginTops: number[];
  router: NextRouter;
}

export const HotelViewRightLane: React.FC<HotelViewRightLaneProps> = ({
  cardWidths,
  hotelCardPadding,
  laneMarginTops,
  laneWidths,
  router,
}) => {
  return (
    <Flex
      mt={laneMarginTops}
      px={4}
      flexDirection="column"
      width={laneWidths}
      // border="crimson"
    >
      <HotelViewTitleCard
        p={hotelCardPadding}
        bg="transparent"
        width={cardWidths}
      />

      <HotelViewInfoCard p={hotelCardPadding} bg="#fff" width={cardWidths} />
      <HotelViewFeaturesCard
        p={hotelCardPadding}
        bg="#fff"
        width={cardWidths}
      />
      <HotelViewMapViewCard
        p={hotelCardPadding}
        bg="#fff"
        router={router}
        width={cardWidths}
      />
      <HotelViewListCard
        p={hotelCardPadding}
        bg="#fff"
        router={router}
        width={cardWidths}
      />
    </Flex>
  );
};
