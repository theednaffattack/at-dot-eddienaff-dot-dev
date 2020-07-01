import React from "react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";

import {
  AbFlex,
  Card,
  Button,
  Flex,
  Image,
  Text,
} from "./primitives/styled-rebass";
import { MeQuery } from "../lib/queries/me.graphql";
import {
  AuthorizedLayoutModalOverlayState,
  AuthorizedLayoutModalOverlayActions,
} from "./layout-authorized";
import { ProfileBasicInfo } from "./profile-basic-info";
import Icon from "./icon";
// @ts-ignore
// import { useLockBodyScroll } from "./use-lock-body-scroll";

interface ProfileModalProps {
  modalDispatch: React.Dispatch<AuthorizedLayoutModalOverlayActions>;
  modalState: AuthorizedLayoutModalOverlayState["profile"];
  userInfo?: MeQuery["me"] | undefined;
}

export const ProfileModal: React.FunctionComponent<ProfileModalProps> = ({
  modalDispatch,
  modalState,
  userInfo,
}) => {
  // useLockBodyScroll();
  return (
    <>
      {modalState.status === "isOpen" ? (
        <UniversalPortal selector="#modal">
          <AbFlex
            position="absolute"
            bg="rgba(0, 0, 0, 0.7)"
            width={1}
            minHeight="100%"
            // top={0}
            // left={150}
            // right={0}
            // bottom={0}
            zIndex={39}
            flexDirection="column"
            alignItems="center"
            overflowY="auto"
            onClick={(event) => {
              event.preventDefault();
              if (event.target === event.currentTarget) {
                modalDispatch({
                  type: "profileClosed",
                  action: { setMode: "inactive", setStatus: "isClosed" },
                });
              }
            }}
          >
            <Flex
              bg="transparent"
              flexDirection="column"
              pt={4}
              width="370px"
              minHeight="100%"
              overflowY="auto"
              overflowX="hidden"
              // overflow="hidden"
              sx={{
                position: "relative",
              }}
            >
              <Card
                p={0}
                pb={3}
                bg="#f2f2f2"
                // mt={5}
                minHeight="100%"
                sx={{
                  borderRadius: "22px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Flex
                  bg="transparent"
                  height="100%"
                  flexDirection="column"
                  // overflowY="auto"
                >
                  {/* START CLOSE BUTTON */}

                  <Button
                    type="button"
                    bg="transparent"
                    p={0}
                    onClick={() =>
                      modalDispatch({
                        type: "profileClosed",
                        action: { setMode: "inactive", setStatus: "isClosed" },
                      })
                    }
                    height="25px"
                    width="25px"
                    borderRadius="50%"
                    sx={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      zIndex: 400,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      active={false}
                      fill="rgba(255,255,255,.75)"
                      name="close"
                      size="13px"
                    />
                  </Button>
                  {/* END CLOSE BUTTON  */}

                  <ProfileBasicInfo
                    modalDispatch={modalDispatch}
                    modalState={modalState.status}
                    userInfo={userInfo}
                  />
                  {/* START PROFILE EXTRA INFO */}
                  <ProfileLowerSection>
                    <Flex px={3} my={3} flexDirection="column">
                      <Text>My Photos</Text>
                      <ul style={{ listStyle: "none" }}>
                        {[1, 2, 3].map((item, index) => (
                          <li key={`${item}-${index}`}>
                            <Image src="https://source.unsplash.com/random/1024x768?sky" />
                          </li>
                        ))}
                      </ul>
                    </Flex>
                  </ProfileLowerSection>
                </Flex>
              </Card>
            </Flex>
          </AbFlex>
        </UniversalPortal>
      ) : (
        ""
      )}
    </>
  );
};

export default ProfileModal;

interface ProfileLowerSectionProps {}

export const ProfileLowerSection: React.FC<ProfileLowerSectionProps> = ({
  children,
}) => {
  return (
    <Flex
      flex={1}
      pt={4}
      px={2}
      flexDirection="column"
      alignItems="center"
      // justifyContent="center"
    >
      <Flex px={3} my={3} flexDirection="column">
        <Text
          fontSize="12px"
          fontWeight="bold"
          sx={{ textTransform: "uppercase" }}
          color="#222"
        >
          About Me
        </Text>
        <Text mt={2} color="#888">
          Nunc justo eros, vehicula vel vehicula ut, lacinia a erat. Nam
          fringilla eros... Nullam aliquam interdum
        </Text>
        <Flex alignItems="center">
          <Icon active={false} name="location" fill="" size="70px" />
          <Flex flexDirection="column">
            <Text fontSize={3}>Switzerland</Text>
            <Text fontSize={1} color="#888">
              227 km away
            </Text>
          </Flex>
          <Flex ml="auto">
            <Icon active={false} name="arrow_right" fill="#aaa" size="20px" />
          </Flex>
        </Flex>
      </Flex>
      {children}
    </Flex>
  );
};
