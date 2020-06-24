import React from "react";
// import {
//   disableBodyScroll,
//   enableBodyScroll,
//   clearAllBodyScrollLocks,
// } from "body-scroll-lock";

import { AbFlex, Button, Flex, Text } from "./primitives/styled-rebass";
import Icon from "./icon";
import { HotelViewDayPlansListItem } from "./hotel-view-day-plans-list-item";
import { useLockBodyScroll } from "./use-lock-body-scroll";
import { OverlayModalsActions } from "./hotel-view-modal";

type SidebarStatuses = "isClosed" | "isOpen";

interface HotelViewDayPlansSidebarProps {
  sidebarViewStatus: SidebarStatuses;
  setSidebarViewStatus: React.Dispatch<OverlayModalsActions>;
}

const sidebarWidths = [
  "300px",
  "300px",
  "300px",
  "400px",
  "400px",
  "400px",
  "400px",
];

export const HotelViewDayPlansSidebar: React.FC<HotelViewDayPlansSidebarProps> = ({
  setSidebarViewStatus,
  sidebarViewStatus = "isClosed",
}) => {
  useLockBodyScroll();
  return (
    <AbFlex
      position="absolute"
      top={0}
      left={0}
      bottom={0}
      zIndex={9900}
      flexDirection="column"
      bg="#f2f2f2"
      sx={{
        width: sidebarViewStatus === "isOpen" ? sidebarWidths : 0,
        display: sidebarViewStatus === "isOpen" ? "flex" : "none",
        transition: "width .25s",
        // overflow: "hidden",

        overflowY: "auto",
      }}
    >
      <Flex
        alignItems="center"
        // mt={2}
        justifyContent="center"
        height="70px"
        sx={{
          position: "relative",
        }}
      >
        <AbFlex
          position="absolute"
          left={[30]}
          height="50px"
          width="50px"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            type="button"
            height="50px"
            width="50px"
            p={0}
            bg="#fff"
            sx={{
              display: sidebarViewStatus === "isOpen" ? "flex" : "none",
              transition: sidebarViewStatus === "isOpen" ? ".5s" : ".1s",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              boxShadow: "0px 20px 17px 0px rgba(0, 0, 0, 0.055)",
            }}
            onClick={() => {
              setSidebarViewStatus({ type: "closeDayPlansSidebar" });
            }}
          >
            <Icon name="close" fill="#222" size="18px" active={false} />
          </Button>
        </AbFlex>
        <Text
          fontSize={2}
          sx={{
            color: sidebarViewStatus === "isOpen" ? "text" : "transparent",
            transition: sidebarViewStatus === "isOpen" ? ".5s" : ".1s",
          }}
        >
          Day Plans
        </Text>
      </Flex>
      <nav style={{ height: "100%", border: "2px crimson dashed" }}>
        <Flex
          as="ul"
          ml="55px"
          flex={1}
          flexDirection="column"
          borderLeft="2px rgba(34,34,34,0.1) solid"
        >
          {[
            {
              link: "https://www.google.com",
              id: "0-dayPlan",
              time: "9:00 AM",
              title: "Breakfast",
            },
            {
              link: "https://www.google.com",
              id: "1-dayPlan",
              time: "9:25 AM",
              title: "Camel Riding",
            },
            {
              link: "https://www.google.com",
              id: "2-dayPlan",
              time: "10:00 AM",
              title: "Paragliding",
            },
          ].map((item) => {
            return (
              <HotelViewDayPlansListItem
                time={item.time}
                key={item.id}
                title={item.title}
                link={item.link}
              />
            );
          })}
        </Flex>
      </nav>
    </AbFlex>
  );
};
