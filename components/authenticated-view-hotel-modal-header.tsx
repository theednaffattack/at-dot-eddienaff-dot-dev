import React from "react";

import { AbFlex, Box, Button, Flex } from "./primitives/styled-rebass";
import { HeaderIcons as Icon } from "./header-icons";
import { FlyOverMenuStatuses, OverlayModalsActions } from "./hotel-view-modal";

interface AuthenticatedViewHotelModalHeaderProps {
  bg?: string;
  mt?: string | number;
  referer?: string;
  router: any;
  title: string;

  sidebarViewStatus: FlyOverMenuStatuses;
  setSidebarViewStatus: React.Dispatch<OverlayModalsActions>;
}

export const AuthenticatedViewHotelModalHeader: React.FC<AuthenticatedViewHotelModalHeaderProps> = ({
  // bg,
  // mt = 4,
  referer,
  router,
  setSidebarViewStatus,
  // sidebarViewStatus,
  // title,
}) => {
  return (
    <Flex
      // pt={mt}\
      mt={[3, 3, 3, 3, 4, 4, 4]}
      p={2}
      // bg={bg}
      width={1}
      // flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={{ position: "relative" }}
    >
      <AbFlex
        position="absolute"
        pl={4}
        left={0}
        onClick={() =>
          router.push(`${referer ? referer : "/index"}`, `${referer}`)
        }
      >
        <Icon name="close" fill="#fff" size="17px" />
      </AbFlex>
      {/* <Text>{title}</Text> */}
      <AbFlex position="absolute" pr={[2, 2, 2, 2, 4, 4, 4]} right={0}>
        <Box pr={2}>
          <Button
            type="button"
            p={0}
            bg="transparent"
            onClick={(e) => {
              e.preventDefault();
              setSidebarViewStatus({ type: "openDayPlansSidebar" });
            }}
          >
            <Icon name="dayPlans" fill="#aaaaaa" size="20px" />
          </Button>
        </Box>
        <Box pr={2}>
          <Button
            type="button"
            p={0}
            bg="transparent"
            onClick={(e) => {
              e.preventDefault();
              setSidebarViewStatus({ type: "openDayPlansSidebar" });
            }}
          >
            <Icon name="share" fill="#aaaaaa" size="20px" />
          </Button>
        </Box>
        <Box pr={[3, 3, 3, 3, 0, 0, 4]}>
          <Button
            type="button"
            p={0}
            bg="transparent"
            onClick={(e) => {
              e.preventDefault();
              setSidebarViewStatus({ type: "openDayPlansSidebar" });
            }}
          >
            <Icon name="more_vertical" fill="#aaaaaa" size="20px" />
          </Button>
        </Box>
      </AbFlex>
    </Flex>
  );
};
