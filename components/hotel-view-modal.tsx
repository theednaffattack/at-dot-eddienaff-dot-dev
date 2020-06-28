import React from "react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";
import { CardProps } from "rebass/styled-components";
import Head from "next/head";
import dynamic from "next/dynamic";

const MapViewModal = dynamic(() => import("./map-view-modal"));
const DayPlansModal = dynamic(() => import("./day-plans-modal_v1"));
const ReviewsModal = dynamic(() => import("./reviews-modal"));

import { AbFlex, Flex } from "./primitives/styled-rebass";
import { MeQuery } from "../lib/queries/me.graphql";
import { useLockBodyScroll } from "./use-lock-body-scroll";
import { AuthenticatedViewHotelModalHeader } from "./authenticated-view-hotel-modal-header";
import { HotelViewLeftLane } from "./hotel-view-left-lane";
import { HotelViewRightLane } from "./hotel-view-right-lane";
// @ts-ignore
import { useParam, useParams, ParsedUrlQueryValue } from "../hooks/use-params";
import {
  AuthorizedLayoutModalOverlayState,
  AuthorizedLayoutModalOverlayActions,
} from "./layout-authorized";

interface HotelViewModalProps {
  userInfo?: MeQuery["me"] | undefined;
  viewState: "isOpen" | "isClosed";
  teamId?: string;
  layoutModalState: AuthorizedLayoutModalOverlayState;
  layoutModalDispatch: React.Dispatch<AuthorizedLayoutModalOverlayActions>;
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
  | { type: "closeMoreMenu" }
  | { type: "reviewsOpen" }
  | { type: "reviewsClosed" };

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
        reviews: state.reviews,
      };
    case "closeDayPlansSidebar":
      return {
        dayPlansSidebar: "isClosed",
        mapViewOverlay: state.mapViewOverlay,
        moreMenu: state.moreMenu,
        shareMenu: state.shareMenu,
        reviews: state.reviews,
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
        reviews: state.reviews,
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
        reviews: state.reviews,
      };

    case "closeMoreMenu":
      return {
        dayPlansSidebar: state.dayPlansSidebar,
        mapViewOverlay: state.mapViewOverlay,
        moreMenu: "isClosed",
        shareMenu: state.shareMenu,
        reviews: state.reviews,
      };
    case "openMoreMenu":
      return {
        dayPlansSidebar: state.dayPlansSidebar,
        mapViewOverlay: state.mapViewOverlay,
        moreMenu: "isOpen",
        shareMenu: state.shareMenu,
        reviews: state.reviews,
      };
    case "openShareMenu":
      return {
        dayPlansSidebar: state.dayPlansSidebar,
        mapViewOverlay: state.mapViewOverlay,
        moreMenu: state.moreMenu,
        shareMenu: "isOpen",
        reviews: state.reviews,
      };
    case "closeShareMenu":
      return {
        dayPlansSidebar: state.dayPlansSidebar,
        mapViewOverlay: state.mapViewOverlay,
        moreMenu: state.moreMenu,
        shareMenu: "isClosed",
        reviews: state.reviews,
      };
    case "reviewsClosed":
      return {
        dayPlansSidebar: state.dayPlansSidebar,
        mapViewOverlay: state.mapViewOverlay,
        moreMenu: state.moreMenu,
        shareMenu: state.shareMenu,
        reviews: "isClosed",
      };
    case "reviewsOpen":
      return {
        dayPlansSidebar: state.dayPlansSidebar,
        mapViewOverlay: state.mapViewOverlay,
        moreMenu: state.moreMenu,
        shareMenu: state.shareMenu,
        reviews: "isOpen",
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
        reviews: "isClosed",
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
  reviews: FlyOverMenuStatuses;
}

const initialOverlayModalsState: OverlayModalsStateInterface = {
  dayPlansSidebar: "isClosed",
  mapViewOverlay: {
    status: "isClosed",
    hotelData: { coordinates: null, name: undefined, price: null },
  },
  shareMenu: "isClosed",
  moreMenu: "isClosed",
  reviews: "isClosed",
};

const HotelViewModal: React.FunctionComponent<HotelViewModalProps> = ({
  layoutModalDispatch,
  layoutModalState,
  viewState,
}) => {
  const [overlayModalsState, overlayModalsDispatch] = React.useReducer(
    overlayModalsActionsReducer,
    initialOverlayModalsState
  );
  useLockBodyScroll();

  return (
    <>
      <Head>
        <title>View Hotel</title>
      </Head>
      {viewState === "isOpen" ? (
        <UniversalPortal selector="#modal">
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
                layoutModalDispatch={layoutModalDispatch}
                layoutModalState={layoutModalState}
                // sidebarViewStatus={overlayModalsState.dayPlansSidebar}
                // overlayModalDispatch={overlayModalsDispatch}
                // viewState={overlayModalsState.dayPlansSidebar}
              />
            ) : null}

            {overlayModalsState.reviews === "isOpen" ? (
              <ReviewsModal
                modalState={overlayModalsState.reviews}
                modalDispatch={overlayModalsDispatch}
              />
            ) : null}
            <AbFlex position="absolute" left={0} right={0} zIndex={9000}>
              <AuthenticatedViewHotelModalHeader
                sidebarViewStatus={overlayModalsState.dayPlansSidebar}
                setSidebarViewStatus={overlayModalsDispatch}
                layoutModalDispatch={layoutModalDispatch}
                layoutModalState={layoutModalState}
                bg="#eee"
                mt={0}
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
                  coordinates={layoutModalState.hotelViewer.data.coordinates}
                  hotelCardPadding={hotelCardPadding}
                  laneMarginTops={laneMarginTops}
                  laneWidths={laneWidths}
                  overlayModalsDispatch={overlayModalsDispatch}
                  overlayModalsState={overlayModalsState}
                  layoutModalDispatch={layoutModalDispatch}
                  layoutModalState={layoutModalState}
                  name={name}
                  price={
                    typeof layoutModalState.hotelViewer.data.price === "string"
                      ? parseFloat(layoutModalState.hotelViewer.data.price)
                      : Array.isArray(layoutModalState.hotelViewer.data.price)
                      ? Number(layoutModalState.hotelViewer.data.price[0])
                      : -1
                  }
                  // router={router}
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

// export function convertLngLatNumerals(lngLat: number[]): number[] {
//   // type ParsedUrlQueryValue = string | string[] | undefined,
//   // so we do checks...
//   if (lngLat === undefined) throw new Error("Expecting lngLat to be defined.");

//   // if it's a string lngLat should look like: "-93.23432, 45.940004"
//   // so split on the comma
//   // if (typeof lngLat === "string") {
//   //   const lngLatAsArray = lngLat.split(",");
//   //   const numeralCoorindates = lngLatAsArray.map((coordinate) =>
//   //     parseFloat(coordinate)
//   //   );
//   //   return numeralCoorindates;
//   // }
//   // if it's already an array of strings (["-93.23432", "45.940004"]) convert to numbers.
//   // if (Array.isArray(lngLat)) {
//   let numberCoordinates: number[] = [];
//   for (const coordinate of lngLat) {
//     numberCoordinates = [...numberCoordinates, parseFloat(coordinate)];
//   }
//   return numberCoordinates;
//   // return lngLat.map((string) => parseFloat(string));
//   // }
// }
