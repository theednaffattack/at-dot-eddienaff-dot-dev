import React from "react";

import { AbFlex, Box, Button, Flex } from "./primitives/styled-rebass";
import { HeaderIcons as Icon } from "./header-icons";
import { FlyOverMenuStatuses, OverlayModalsActions } from "./hotel-view-modal";
// import { ParsedUrlQueryValue } from "../hooks/use-params";
import {
  AuthorizedLayoutModalOverlayState,
  AuthorizedLayoutModalOverlayActions,
} from "./layout-authorized";

interface AuthenticatedViewHotelModalHeaderProps {
  bg?: string;
  mt?: string | number;
  title: string;
  layoutModalState: AuthorizedLayoutModalOverlayState;
  layoutModalDispatch: React.Dispatch<AuthorizedLayoutModalOverlayActions>;
  sidebarViewStatus: FlyOverMenuStatuses;
  setSidebarViewStatus: React.Dispatch<OverlayModalsActions>;
}

export const AuthenticatedViewHotelModalHeader: React.FC<AuthenticatedViewHotelModalHeaderProps> = ({
  // referer,
  // router,
  layoutModalDispatch,
  setSidebarViewStatus,
}) => {
  // const tab = useParam("tab", "string");
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
        onClick={() => {
          layoutModalDispatch({
            action: "overlayModalClosed",
            type: "hotelViewerModalClosed",
            data: { coordinates: [[0, 0]], name: "", price: "-1" },
          });
          // href={`${href}?referer=${referer}&viewHotelModal=isOpen&
          // coordinates=${coordinates}&price=${price}&name=${name}`}

          // if (tab) {
          //   router.push(
          //     `${referer ? `${referer}?tab=${tab}` : "/index"}`,
          //     referer
          //   );
          // } else {
          //   router.push(`${referer ? referer : "/index"}`, `${referer}`);
          // }
        }}
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
