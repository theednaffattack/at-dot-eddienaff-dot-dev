import React from "react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";
import { useRouter } from "next/router";
import { CardProps } from "rebass/styled-components";
import Head from "next/head";
import dynamic from "next/dynamic";

const MapViewModal = dynamic(() => import("./map-view-modal"));
const DayPlansModal = dynamic(() => import("./day-plans-modal_v1"));

import { AbFlex, Flex } from "./primitives/styled-rebass";
import { MeQuery } from "../lib/queries/me.graphql";
import { useLockBodyScroll } from "./use-lock-body-scroll";
import { AuthenticatedViewHotelModalHeader } from "./authenticated-view-hotel-modal-header";
import { HotelViewLeftLane } from "./hotel-view-left-lane";
import { HotelViewRightLane } from "./hotel-view-right-lane";
// @ts-ignore
import { useParam, useParams, ParsedUrlQueryValue } from "../hooks/use-params";

interface HotelViewModalProps {
  userInfo?: MeQuery["me"] | undefined;
  viewState: "isOpen" | "isClosed";
  teamId?: string;
}

export interface HotelViewCardProps {
  bg?: CardProps["bg"];
  p?: CardProps["p"];
  width?: CardProps["width"];
}

const cardWidths = [1, 1, 1, 1, 1, 1, "800px"];

export type FlyOverMenuStatuses = "isOpen" | "isClosed";

interface HotelDataInterface {
  coordinates: number[][] | null;
  name: ParsedUrlQueryValue;
  price: number | null;
}

export type OverlayModalsActions =
  | { type: "openDayPlansSidebar" }
  | { type: "closeDayPlansSidebar" }
  | {
      type: "openMapViewOverlay";
      data: HotelDataInterface;
    }
  | { type: "closeMapViewOverlay" }
  | { type: "openShareMenu" }
  | { type: "closeShareMenu" }
  | { type: "openMoreMenu" }
  | { type: "closeMoreMenu" };

const hotelCardPadding = [3, 3, 3, 3, 3, 3, 3];

const laneWidths = [1, 1, 1, 1, 1 / 2, 1 / 2, 1 / 2];

const laneMarginTops = [1, 1, 1, 1, 4, 4, 4];

const imageMarginRight = [0, 0, 0, 0, 3, 3, 3];

function overlayModalsActionsReducer(
  state: OverlayModalsStateInterface,
  action: OverlayModalsActions
): OverlayModalsStateInterface {
  switch (action.type) {
    case "openDayPlansSidebar":
      return {
        dayPlansSidebar: "isOpen",
        mapViewOverlay: state.mapViewOverlay,
        moreMenu: state.moreMenu,
        shareMenu: state.shareMenu,
      };
    case "closeDayPlansSidebar":
      return {
        dayPlansSidebar: "isClosed",
        mapViewOverlay: state.mapViewOverlay,
        moreMenu: state.moreMenu,
        shareMenu: state.shareMenu,
      };

    case "openMapViewOverlay":
      return {
        dayPlansSidebar: state.dayPlansSidebar,
        mapViewOverlay: {
          status: "isOpen",
          hotelData: {
            coordinates: action.data.coordinates,
            name: action.data.name,
            price: action.data.price,
          },
        },
        moreMenu: state.moreMenu,
        shareMenu: state.shareMenu,
      };
    case "closeMapViewOverlay":
      return {
        dayPlansSidebar: state.dayPlansSidebar,
        mapViewOverlay: {
          status: "isClosed",
          hotelData: { coordinates: null, name: undefined, price: null },
        },
        moreMenu: state.moreMenu,
        shareMenu: state.shareMenu,
      };

    case "closeMoreMenu":
      return {
        dayPlansSidebar: state.dayPlansSidebar,
        mapViewOverlay: state.mapViewOverlay,
        moreMenu: "isClosed",
        shareMenu: state.shareMenu,
      };
    case "openMoreMenu":
      return {
        dayPlansSidebar: state.dayPlansSidebar,
        mapViewOverlay: state.mapViewOverlay,
        moreMenu: "isOpen",
        shareMenu: state.shareMenu,
      };
    case "openShareMenu":
      return {
        dayPlansSidebar: state.dayPlansSidebar,
        mapViewOverlay: state.mapViewOverlay,
        moreMenu: state.moreMenu,
        shareMenu: "isOpen",
      };
    case "closeShareMenu":
      return {
        dayPlansSidebar: state.dayPlansSidebar,
        mapViewOverlay: state.mapViewOverlay,
        moreMenu: state.moreMenu,
        shareMenu: "isClosed",
      };

    default:
      return {
        dayPlansSidebar: "isClosed",
        mapViewOverlay: {
          status: "isClosed",
          hotelData: {
            coordinates: null,
            name: undefined,
            price: null,
          },
        },
        shareMenu: "isClosed",
        moreMenu: "isClosed",
      };
  }
}

export interface OverlayModalsStateInterface {
  dayPlansSidebar: FlyOverMenuStatuses;
  mapViewOverlay: {
    status: FlyOverMenuStatuses;
    hotelData: HotelDataInterface;
  };
  shareMenu: FlyOverMenuStatuses;
  moreMenu: FlyOverMenuStatuses;
}

const initialOverlayModalsState: OverlayModalsStateInterface = {
  dayPlansSidebar: "isClosed",
  mapViewOverlay: {
    status: "isClosed",
    hotelData: { coordinates: null, name: undefined, price: null },
  },
  shareMenu: "isClosed",
  moreMenu: "isClosed",
};

const HotelViewModal: React.FunctionComponent<HotelViewModalProps> = ({
  viewState,
}) => {
  const [overlayModalsState, overlayModalsDispatch] = React.useReducer(
    overlayModalsActionsReducer,
    initialOverlayModalsState
  );
  useLockBodyScroll();
  // const referer = useParam("referer", "string");
  const { coordinates, name, price, referer } = useParams();
  const router = useRouter();

  console.log("VIEW REFERERS - HotelViewModal - ", {
    coordinates,
    name,
    price,
    referer,
    router,
  });

  // const {
  //   query: {
  //     // referer: refererBase,
  //     coordinates,
  //     name: nameBase,
  //     price: priceBase,
  //   },
  // } = router;
  // const referer =
  //   typeof refererBase === "string"
  //     ? refererBase
  //     : Array.isArray(refererBase)
  //     ? refererBase[0]
  //     : "none";
  const asNumbers = convertLngLatNumerals(coordinates);
  // const name = typeof nameBase === "string" ? nameBase : nameBase[0];
  // const price = typeof priceBase === "string" ? priceBase : priceBase[0];
  // const numeralCoorindates = coordinates[0].map((lngLat) => parseFloat(lngLat));
  return (
    <>
      <Head>
        <title>View Hotel</title>
      </Head>
      {viewState === "isOpen" ? (
        <UniversalPortal selector="#map_modal">
          <AbFlex
            position="fixed"
            flexDirection="column"
            bg="rgba(0, 0, 0, 0.7)"
            top={0}
            width={1}
            right={0}
            bottom={0}
            zIndex={9}
          >
            {overlayModalsState.dayPlansSidebar === "isOpen" ? (
              <DayPlansModal
                sidebarViewStatus={overlayModalsState.dayPlansSidebar}
                overlayModalDispatch={overlayModalsDispatch}
                viewState={overlayModalsState.dayPlansSidebar}
              />
            ) : null}
            {overlayModalsState &&
            overlayModalsState.mapViewOverlay &&
            overlayModalsState.mapViewOverlay.status === "isOpen" ? (
              <MapViewModal
                viewState={overlayModalsState.mapViewOverlay.status}
                overlayModalsDispatch={overlayModalsDispatch}
                // sidebarViewStatus={overlayModalsState.dayPlansSidebar}
                // overlayModalDispatch={overlayModalsDispatch}
                // viewState={overlayModalsState.dayPlansSidebar}
              />
            ) : null}
            <AbFlex position="absolute" left={0} right={0} zIndex={9000}>
              <AuthenticatedViewHotelModalHeader
                sidebarViewStatus={overlayModalsState.dayPlansSidebar}
                setSidebarViewStatus={overlayModalsDispatch}
                bg="#eee"
                referer={referer}
                mt={0}
                router={router}
                title="View Hotel"
              />
            </AbFlex>

            <Flex
              bg="#eee"
              flexDirection="column"
              flex="1 1 auto"
              overflowY="auto"
            >
              <Flex
                alignItems="flex-start"
                style={{ position: "relative" }}
                flexWrap="wrap"
              >
                {/* BEG: LEFT LANE */}
                <HotelViewLeftLane
                  imageMarginRight={imageMarginRight}
                  laneWidths={laneWidths}
                />
                {/* END: LEFT LANE */}

                {/* BEG: RIGHT LANE */}
                <HotelViewRightLane
                  cardWidths={cardWidths}
                  coordinates={[asNumbers]}
                  hotelCardPadding={hotelCardPadding}
                  laneMarginTops={laneMarginTops}
                  laneWidths={laneWidths}
                  overlayModalsDispatch={overlayModalsDispatch}
                  overlayModalsState={overlayModalsState}
                  name={name}
                  price={
                    typeof price === "string"
                      ? parseFloat(price)
                      : Array.isArray(price)
                      ? Number(price[0])
                      : -1
                  }
                  router={router}
                />
                {/* END: RIGHT LANE */}
              </Flex>
            </Flex>
          </AbFlex>
        </UniversalPortal>
      ) : (
        ""
      )}
    </>
  );
};

export default HotelViewModal;

export function convertLngLatNumerals(lngLat: ParsedUrlQueryValue): number[] {
  // type ParsedUrlQueryValue = string | string[] | undefined,
  // so we do checks...
  if (lngLat === undefined) throw new Error("Expecting lngLat to be defined.");

  // if it's a string lngLat should look like: "-93.23432, 45.940004"
  // so split on the comma
  if (typeof lngLat === "string") {
    const lngLatAsArray = lngLat.split(",");
    const numeralCoorindates = lngLatAsArray.map((coordinate) =>
      parseFloat(coordinate)
    );
    return numeralCoorindates;
  }
  // if it's already an array of strings (["-93.23432", "45.940004"]) convert to numbers.
  // if (Array.isArray(lngLat)) {
  let numberCoordinates: number[] = [];
  for (const coordinate of lngLat) {
    numberCoordinates = [...numberCoordinates, parseFloat(coordinate)];
  }
  return numberCoordinates;
  // return lngLat.map((string) => parseFloat(string));
  // }
}
