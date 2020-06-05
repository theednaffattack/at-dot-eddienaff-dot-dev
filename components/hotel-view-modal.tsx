import React from "react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";
import { useRouter } from "next/router";
import { CardProps, Button } from "rebass/styled-components";
import Head from "next/head";

// @ts-ignore
import { AbFlex, Box, Flex, Image } from "./primitives/styled-rebass";
import { MeQuery } from "../lib/queries/me.graphql";
import { useLockBodyScroll } from "./use-lock-body-scroll";
import { HotelViewTitleCard } from "./hotel-view-title-card";
import { HotelViewInfoCard } from "./hotel-view-info-card";
import { HotelViewFeaturesCard } from "./hotel-view-features-card";
import { HotelViewMapViewCard } from "./hotel-view-map-view-card";
import { HotelViewListCard } from "./hotel-view-list-card";
import { AuthenticatedViewHotelModalHeader } from "./authenticated-view-hotel-modal-header";
// @ts-ignore
import DayPlansModal from "./day-plans-modal_v1";
import Icon from "./icon";
// import { HotelViewDayPlansSidebar } from "./hotel-view-day-plans-sidebar";

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

// type FlyOverMenuActions = {
//   type:
//     | "openDayPlansSidebar"
//     | "closeDayPlansSidebar"
//     | "openShareMenu"
//     | "closeShareMenu"
//     | "openMoreMenu"
//     | "closeMoreMenu";
// };

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
            // overflow="hidden"
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
                // setSidebarViewStatus={() => {}}
                bg="#eee"
                referer={referer}
                mt={0}
                router={router}
                title="View Hotel"
              />
            </AbFlex>
            {/* <HotelViewDayPlansSidebar
              sidebarViewStatus={hotelViewHeaderState.dayPlansSidebar}
              setSidebarViewStatus={hotelViewHeaderDispatch}
            /> */}
            <Flex
              bg="#eee"
              flexDirection="column"
              flex="1 1 auto"
              border="purp"
              overflowX="auto"
            >
              <Flex
                // minHeight="100%"
                // flex={1}
                alignItems="flex-start"
                style={{ position: "relative" }}
                flexWrap="wrap"
              >
                {/* BEG: LEFT LANE */}
                <Flex
                  flexDirection="column"
                  pr={imageMarginRight}
                  width={laneWidths}
                  border="lime"
                  sx={{ position: "relative" }}
                >
                  {/* <Box
                    width={[1, 1, 1, 1, 1, 1, "800px"]}
                    sx={{ position: "relative" }}
                    border="crimson" 
                  >*/}
                  <Image
                    src="https://images.unsplash.com/photo-1587148987975-47786588f0e0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixlib=rb-1.2.1&q=80&w=800"
                    srcSet=""
                  />
                  <Button
                    height="50px"
                    width="50px"
                    bg="#fff"
                    sx={{
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "absolute",
                      bottom: [0, 0, 3, 0, 0, 0, 60],
                      right: [0, 0, 3, 0, 0, 0, 60],
                    }}
                  >
                    <Icon
                      name="bookmarkOutline"
                      fill="fuchsia"
                      size="20px"
                      active={false}
                    />
                  </Button>
                  {/* </Box> */}
                </Flex>
                {/* END: LEFT LANE */}

                {/* BEG: RIGHT LANE */}
                <Flex
                  mt={laneMarginTops}
                  // pr={5}
                  px={4}
                  flexDirection="column"
                  width={laneWidths}
                  border="crimson"
                >
                  <HotelViewTitleCard
                    p={hotelCardPadding}
                    bg="transparent"
                    width={cardWidths}
                  />

                  <HotelViewInfoCard
                    p={hotelCardPadding}
                    bg="#fff"
                    width={cardWidths}
                  />
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
