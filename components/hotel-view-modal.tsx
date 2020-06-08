import React from "react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";
import { useRouter } from "next/router";
import { CardProps } from "rebass/styled-components";
import Head from "next/head";

import { AbFlex, Flex } from "./primitives/styled-rebass";
import { MeQuery } from "../lib/queries/me.graphql";
import { useLockBodyScroll } from "./use-lock-body-scroll";
import { AuthenticatedViewHotelModalHeader } from "./authenticated-view-hotel-modal-header";
import DayPlansModal from "./day-plans-modal_v1";
import { HotelViewLeftLane } from "./hotel-view-left-lane";
import { HotelViewRightLane } from "./hotel-view-right-lane";

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

export type OverlayModalsActions =
  | { type: "openDayPlansSidebar" }
  | { type: "closeDayPlansSidebar" }
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
        moreMenu: state.moreMenu,
        shareMenu: state.shareMenu,
      };
    case "closeDayPlansSidebar":
      return {
        dayPlansSidebar: "isClosed",
        moreMenu: state.moreMenu,
        shareMenu: state.shareMenu,
      };
    case "closeMoreMenu":
      return {
        dayPlansSidebar: state.dayPlansSidebar,
        moreMenu: "isClosed",
        shareMenu: state.shareMenu,
      };
    case "openMoreMenu":
      return {
        dayPlansSidebar: state.dayPlansSidebar,
        moreMenu: "isOpen",
        shareMenu: state.shareMenu,
      };
    case "openShareMenu":
      return {
        dayPlansSidebar: state.dayPlansSidebar,
        moreMenu: state.moreMenu,
        shareMenu: "isOpen",
      };
    case "closeShareMenu":
      return {
        dayPlansSidebar: state.dayPlansSidebar,
        moreMenu: state.moreMenu,
        shareMenu: "isClosed",
      };

    default:
      return {
        dayPlansSidebar: "isClosed",
        shareMenu: "isClosed",
        moreMenu: "isClosed",
      };
  }
}

interface OverlayModalsStateInterface {
  dayPlansSidebar: FlyOverMenuStatuses;
  shareMenu: FlyOverMenuStatuses;
  moreMenu: FlyOverMenuStatuses;
}

const initialOverlayModalsState: OverlayModalsStateInterface = {
  dayPlansSidebar: "isClosed",
  shareMenu: "isClosed",
  moreMenu: "isClosed",
};

const HotelViewModal: React.FunctionComponent<HotelViewModalProps> = ({
  viewState,
}) => {
  // @ts-ignore
  const [overlayModalsState, overlayModalsDispatch] = React.useReducer(
    overlayModalsActionsReducer,
    initialOverlayModalsState
  );
  useLockBodyScroll();
  const router = useRouter();

  const {
    query: { referer: refererBase },
  } = router;
  const referer =
    typeof refererBase === "string"
      ? refererBase
      : Array.isArray(refererBase)
      ? refererBase[0]
      : "none";
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
                  hotelCardPadding={hotelCardPadding}
                  laneMarginTops={laneMarginTops}
                  laneWidths={laneWidths}
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
