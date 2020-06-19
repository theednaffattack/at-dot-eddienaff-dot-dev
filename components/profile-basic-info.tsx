import React from "react";

import { CustomButton, Flex, Text } from "./primitives/styled-rebass";
import Icon from "./icon";
import { AuthorizedLayoutModalOverlayActions } from "./layout-authorized";
import { MeQuery } from "*/me.graphql";
import { ProfileInfoBar } from "./profile-info-bar";

interface ProfileBasicInfoProps {
  modalDispatch: React.Dispatch<AuthorizedLayoutModalOverlayActions>;
  modalState: "isOpen" | "isClosed";
  userInfo?: MeQuery["me"] | undefined;
}

export const ProfileBasicInfo: React.FC<ProfileBasicInfoProps> = ({
  modalDispatch,
  // modalState,
  userInfo,
}) => {
  console.log({ modalDispatch, userInfo });
  return (
    <Flex
      bg="#ebebeb"
      pt={4}
      pb={3}
      width={1}
      px={2}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="275px"
      sx={{
        position: "relative",
        backgroundImage:
          "url('https://source.unsplash.com/random/1024x768?sky')",
        backgroundSize: "cover",
      }}
    >
      {/* START - INFO BAR */}
      <ProfileInfoBar />
      {/* END - INFO BAR */}
      {/* START - BACKGROUND IMAGE */}
      <Flex
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10,
          backgroundImage:
            "linear-gradient( 90deg, rgb(226,42,111) 0%, rgb(254,102,102) 100%)",
          opacity: 0.75,
        }}
      ></Flex>
      {/* END - BACKGROUND IMAGE */}
      {/* START - PROFILE INFO */}
      <Flex
        bg="transparent"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 12,
        }}
      >
        <Flex
          bg="transparent"
          pt={4}
          width={1}
          px={2}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="225px"
          sx={{
            position: "relative",
          }}
        >
          {/* START PROFILE PHOTO */}

          <Flex
            sx={{
              position: "relative",
              boxShadow: "0px 20px 33px 0px rgba(0, 0, 0, 0.15)",
            }}
          >
            <CustomButton
              type="button"
              p={0}
              width="22px"
              height="22px"
              onClick={() => {
                console.log("WAIT WHY IS THIS  A BUTTON?");
              }}
              bg="#fff"
              borderRadius="50%"
              sx={{
                overflow: "hidden",
                position: "absolute",
                right: -11,
                bottom: 10,
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
                <Icon
                  active={false}
                  name="check_mark"
                  size="11px"
                  fill="#f74b72"
                />
              </Flex>
              <Flex
                sx={{
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
              height="80px"
              width="80px"
              bg="#ebebeb"
              borderRadius="20px"
              sx={{
                // backgroundImage: userInfo && userInfo.profileImageUri,
                // backgroundImage: `url(${users[2].profileImageUri})`,
                backgroundImage:
                  userInfo && userInfo.profileImageUri
                    ? `url(${userInfo.profileImageUri})`
                    : undefined,
                backgroundSize: "cover",
                boxShadow: "0px 13px 27px 0px rgba(0, 0, 0, 0.15)",
              }}
            >
              {/* {userInfo && userInfo.profileImageUri ? null : (
      <AvatarPlaceholder />
    )} */}
            </Flex>
          </Flex>
          <Flex my={3} flexDirection="column" color="#fff">
            <Text>{userInfo ? userInfo.name : ""}</Text>
            <Text>{userInfo?.email}</Text>
          </Flex>
          <Flex pb={3} mb={4}>
            <CustomButton
              type="button"
              width="85px"
              height="31px"
              onClick={() => {
                modalDispatch({
                  action: "overlayModalClosed",
                  type: "sidebarClosed",
                });
                modalDispatch({
                  action: { setMode: "view", setStatus: "isOpen" },
                  type: "profileOpen",
                });
                console.log("PLACEHOLDER ROUTE.PUSH TO EDIT PROFILE ROUTE");
              }}
              bg="rgba(0, 0, 0, 0.2)"
              borderRadius="15px"
              sx={{
                overflow: "hidden",
                position: "relative",
                border: "2px solid rgba(255, 255, 255, 0.5)",
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
                <Icon
                  active={false}
                  fill="rgba(255,255,255,0.5)"
                  name="plus"
                  size="10px"
                  mr={1}
                />
                <Text>follow</Text>
              </Flex>
            </CustomButton>
          </Flex>

          {/* END PASTE */}
        </Flex>
      </Flex>
      {/* END - PROFILE INFO */}
    </Flex>
  );
};
