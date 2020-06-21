import React from "react";
import { Flex } from "./primitives/styled-rebass";
import { HotelViewTitleCard } from "./hotel-view-title-card";
import { HotelViewInfoCard } from "./hotel-view-info-card";
import { HotelViewFeaturesCard } from "./hotel-view-features-card";
import { HotelViewMapViewCard } from "./hotel-view-map-view-card";
import { HotelViewListCard } from "./hotel-view-list-card";
import { NextRouter } from "next/router";
import {
  OverlayModalsActions,
  OverlayModalsStateInterface,
} from "./hotel-view-modal";
import { ParsedUrlQueryValue } from "../hooks/use-params";

interface HotelViewRightLaneProps {
  cardWidths: (string | number)[];
  coordinates: number[][];
  hotelCardPadding: number[];
  laneWidths: number[];
  laneMarginTops: number[];
  name: ParsedUrlQueryValue;
  overlayModalsDispatch: React.Dispatch<OverlayModalsActions>;
  overlayModalsState: OverlayModalsStateInterface;
  price: number;
  router: NextRouter;
}

export const HotelViewRightLane: React.FC<HotelViewRightLaneProps> = ({
  cardWidths,
  coordinates,
  hotelCardPadding,
  laneMarginTops,
  laneWidths,
  name,
  overlayModalsDispatch,
  overlayModalsState,
  price,
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
        coordinates={coordinates}
        name={name}
        overlayModalsDispatch={overlayModalsDispatch}
        overlayModalsState={overlayModalsState}
        price={price}
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
