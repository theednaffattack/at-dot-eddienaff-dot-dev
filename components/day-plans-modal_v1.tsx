import React from "react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";
// import { useRouter } from "next/router";
import Head from "next/head";

import {
  AbFlex,
  Button,
  Flex,
  Text,
  // Card,
  // Image,
  // Heading,
  // Box,
} from "./primitives/styled-rebass";
import { MeQuery } from "../lib/queries/me.graphql";
import { useLockBodyScroll } from "./use-lock-body-scroll";
import Icon from "./icon";
import { FlyOverMenuStatuses, OverlayModalsActions } from "./hotel-view-modal";
import { HotelViewDayPlansListItem } from "./hotel-view-day-plans-list-item";
// import { HotelViewDayPlansListItem } from "./hotel-view-day-plans-list-item";
// import { AuthenticatedModalHeader } from "./authenticated-modal-header";

interface DayPlansModalProps {
  viewState: "isOpen" | "isClosed";
  teamId?: string;
  userInfo?: MeQuery["me"] | undefined;
  sidebarViewStatus: FlyOverMenuStatuses;
  // setSidebarViewStatus: React.Dispatch<FlyOverMenuActions>;
  overlayModalDispatch: React.Dispatch<OverlayModalsActions>;
}

const DayPlansModal: React.FunctionComponent<DayPlansModalProps> = ({
  // modalState,
  // teamId,
  // userInfo,
  overlayModalDispatch,
  sidebarViewStatus,
  // viewState,
}) => {
  useLockBodyScroll();
  // const router = useRouter();

  // const {
  //   query: { referer: refererBase },
  // } = router;
  // const referer =
  //   typeof refererBase === "string" ? refererBase : refererBase[0];
  return (
    <>
      <Head>
        <title>Day Plans</title>
      </Head>
      {sidebarViewStatus === "isOpen" ? (
        <UniversalPortal selector="#modal">
          <AbFlex
            position="fixed"
            // bg="transparent"
            bg="rgba(0, 0, 0, 0.7)" // "#eee" //
            color="#444"
            // flexDirection="column"
            top={0}
            width={1}
            left={0}
            right={0}
            bottom={0}
            zIndex={9}
          >
            <Flex
              p={2}
              bg="#eee"
              // width={sidebarViewStatus === "isOpen" ? "400px" : 0}
              flexDirection="column"
              // alignItems="center"
              overflowY="scroll"
              overflowX="hidden"
              sx={{
                position: "relative",
                transition: "1s",
                width:
                  sidebarViewStatus === "isOpen"
                    ? [
                        "300px",
                        "300px",
                        "300px",
                        "300px",
                        "400px",
                        "400px",
                        "400px",
                      ]
                    : "0",
              }}
            >
              {/* HEADER */}
              <Flex
                width={1}
                alignItems="center"
                justifyContent="center"
                mt={[3, 3, 3, 3, 3, 3, 4]}
                pb={3}
              >
                <Flex
                  width={1}
                  alignItems="center"
                  sx={{ position: "absolute", left: 8 }}
                >
                  <Button
                    type="button"
                    borderRadius="50%"
                    height="40px"
                    width="40px"
                    bg="#fff"
                    p={0}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0px 20px 27px 0px rgba(0, 0, 0, 0.07)",
                    }}
                    onClick={() => {
                      overlayModalDispatch({ type: "closeDayPlansSidebar" });
                    }}
                  >
                    <Icon name="close" fill="#aaa" size="13px" active={false} />
                  </Button>
                </Flex>
                <Text>Day Plans</Text>
              </Flex>

              <Flex
                as="ul"
                ml="19px"
                pl={3}
                flex={1}
                flexDirection="column"
                borderLeft="2px rgba(34,34,34,0.1) solid"
                style={{
                  listStyle: "none",
                }}
              >
                {[
                  {
                    time: "9:00 AM",
                    title: "Breakfast",
                    link: "https://www.google.com",
                    id: "0-dayPlan",
                  },
                  {
                    time: "11:00 AM",
                    title: "Camel Riding",
                    link: "https://www.google.com",
                    id: "1-dayPlan",
                  },
                  {
                    time: "12:00 AM",
                    title: "Paragliding",
                    link: "https://www.google.com",
                    id: "2-dayPlan",
                  },
                  {
                    time: "9:00 AM",
                    title: "Breakfast",
                    link: "https://www.google.com",
                    id: "0-dayPlan",
                  },
                  {
                    time: "11:00 AM",
                    title: "Camel Riding",
                    link: "https://www.google.com",
                    id: "1-dayPlan",
                  },
                  {
                    time: "12:00 AM",
                    title: "Paragliding",
                    link: "https://www.google.com",
                    id: "2-dayPlan",
                  },
                  {
                    time: "12:00 AM",
                    title: "Paragliding",
                    link: "https://www.google.com",
                    id: "2-dayPlan",
                  },
                  {
                    time: "12:00 AM",
                    title: "Paragliding",
                    link: "https://www.google.com",
                    id: "2-dayPlan",
                  },
                  {
                    time: "12:00 AM",
                    title: "Paragliding",
                    link: "https://www.google.com",
                    id: "2-dayPlan",
                  },
                  {
                    time: "12:00 AM",
                    title: "Paragliding",
                    link: "https://www.google.com",
                    id: "2-dayPlan",
                  },
                  {
                    time: "12:00 AM",
                    title: "Paragliding",
                    link: "https://www.google.com",
                    id: "2-dayPlan",
                  },
                  {
                    time: "12:00 AM",
                    title: "Paragliding",
                    link: "https://www.google.com",
                    id: "2-dayPlan",
                  },
                  {
                    time: "12:00 AM",
                    title: "Paragliding",
                    link: "https://www.google.com",
                    id: "2-dayPlan",
                  },
                  {
                    time: "12:00 AM",
                    title: "Paragliding",
                    link: "https://www.google.com",
                    id: "2-dayPlan",
                  },
                ].map((item, index) => {
                  return (
                    <li key={`${index}-random`}>
                      <HotelViewDayPlansListItem
                        time={item.time}
                        index={index}
                        key={item.id}
                        title={item.title}
                        link={item.link}
                      />
                    </li>
                  );
                })}
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

export default DayPlansModal;
