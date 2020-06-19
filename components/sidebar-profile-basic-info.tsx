import React from "react";

import { CustomButton, Flex, Text } from "./primitives/styled-rebass";
import Icon from "./icon";
import { users } from "./helpers";
import { AuthorizedLayoutModalOverlayActions } from "./layout-authorized";
import { MeQuery } from "*/me.graphql";

interface SidebarProfileBasicInfoProps {
  modalDispatch: React.Dispatch<AuthorizedLayoutModalOverlayActions>;
  modalState: "isOpen" | "isClosed";
  userInfo?: MeQuery["me"] | undefined;
}

export const SidebarProfileBasicInfo: React.FC<SidebarProfileBasicInfoProps> = ({
  modalDispatch,
  // modalState,
  userInfo,
}) => {
  return (
    <Flex
      bg="#ebebeb"
      pt={4}
      width={1}
      px={2}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Flex sx={{ position: "relative" }}>
        <CustomButton
          type="button"
          width="30px"
          height="30px"
          onClick={() => {
            console.log("WAIT WHY IS THIS  A BUTTON?");
          }}
          bg="#f4327f"
          borderRadius="50%"
          sx={{
            overflow: "hidden",
            position: "absolute",
            right: -15,
            bottom: 20,
          }}
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 35,
            }}
          >
            <Icon active={false} name="check_mark" size="15px" fill="#fff" />
          </Flex>
          <Flex
            sx={{
              backgroundImage:
                "linear-gradient( 0deg, rgb(210,48,120) 6%, rgb(254,97,97) 74%, rgb(255,121,85) 100%)",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              opacity: 0.3,
              zIndex: 30,
            }}
          ></Flex>
        </CustomButton>

        <Flex
          height="120px"
          width="120px"
          bg="#ebebeb"
          sx={{
            borderRadius: "30px",
            // backgroundImage: userInfo && userInfo.profileImageUri,
            backgroundImage: `url(${users[2].profileImageUri})`,
            backgroundSize: "cover",
            boxShadow: "0px 13px 27px 0px rgba(0, 0, 0, 0.15)",
          }}
        >
          {/* {userInfo && userInfo.profileImageUri ? null : (
      <AvatarPlaceholder />
    )} */}
        </Flex>
      </Flex>
      <Flex my={3} flexDirection="column">
        <Text>{userInfo ? userInfo.name : ""}</Text>
        <Text>{userInfo?.email}</Text>
      </Flex>
      <Flex pb={3}>
        <CustomButton
          type="button"
          width="85px"
          height="31px"
          onClick={() => {
            modalDispatch({
              action: { setMode: "view", setStatus: "isOpen" },
              type: "openProfileFromSidebar",
            });
            console.log("PLACEHOLDER ROUTE.PUSH TO EDIT PROFILE ROUTE");
          }}
          bg="#f4327f"
          borderRadius="15px"
          sx={{
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 35,
            }}
          >
            edit
          </Flex>
          <Flex
            sx={{
              backgroundImage:
                "linear-gradient( 0deg, rgb(210,48,120) 6%, rgb(254,97,97) 74%, rgb(255,121,85) 100%)",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              opacity: 0.3,
              zIndex: 30,
            }}
          ></Flex>
        </CustomButton>
      </Flex>
    </Flex>
  );
};
