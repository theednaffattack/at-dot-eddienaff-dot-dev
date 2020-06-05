import React from "react";

import { AbFlex, Box, Flex } from "./primitives/styled-rebass";
import Icon from "./icon";
import Link from "next/link";
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
        <Icon active={false} name="close" fill="#888" size="17px" />
      </AbFlex>
      {/* <Text>{title}</Text> */}
      <AbFlex position="absolute" pr={[2, 2, 2, 2, 4, 4, 4]} right={0}>
        <Box pr={2}>
          {/* <Link
            href="/test?dayPlansModal=isOpen&referer=/test?viewHotelModal=isOpen"
            as="/test"
          > */}
          <a
            onClick={(e) => {
              e.preventDefault();
              setSidebarViewStatus({ type: "openDayPlansSidebar" });
            }}
          >
            <Icon active={false} name="dayPlans" fill="#aaaaaa" size="20px" />
          </a>
          {/* </Link> */}
        </Box>
        <Box pr={2}>
          <Link
            href="/test?shareModal=isOpen&referer=/test?viewHotelModal=isOpen"
            as="/test"
          >
            <a>
              <Icon active={false} name="share" fill="#aaaaaa" size="20px" />
            </a>
          </Link>
        </Box>
        <Box>
          <Link
            href="/test?moreModal=isOpen&referer=/test?viewHotelModal=isOpen"
            as="/test"
          >
            <a>
              <Icon active={false} name="more" fill="#aaaaaa" size="20px" />
            </a>
          </Link>
        </Box>
      </AbFlex>
    </Flex>
  );
};