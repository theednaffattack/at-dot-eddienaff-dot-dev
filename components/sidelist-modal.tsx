import React from "react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";
import Link from "next/link";

import { AbFlex, Flex, Text, CustomButton } from "./primitives/styled-rebass";
import { MeQuery } from "../lib/queries/me.graphql";
// @ts-ignore
import AvatarPlaceholder from "./avatar-placeholder";
import { AuthorizedLayoutModalOverlayActions } from "./layout-authorized";
import Icon from "./icon";
import { NewIconProps } from "./icon-types";
import styled from "styled-components";
import { useLockBodyScroll } from "./use-lock-body-scroll";
import { users } from "./helpers";
// import { ModalViewActions, ModalStateInterface } from "./entry-layout",

// type ModalStates = "isOpen" | "isClosed",

// from: https://css-tricks.com/examples/hrs/
const Divider = styled.hr`
  margin-right: 20px;
  margin-left: 20px;

  border: 0;
  height: 0;
  border-top: 1px solid #ddd;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.3); */
`;

const Anchor = styled.a`
  text-decoration: none;
`;
// solid rgba(0, 0, 0, 0.1);
interface SideListModalProps {
  userInfo?: MeQuery["me"] | undefined;
  // sideListModalState: ModalStates,
  // setSideListModalState: React.Dispatch<React.SetStateAction<ModalStates>>,
  teamId?: string;
  modalState: "isOpen" | "isClosed";
  modalDispatch: React.Dispatch<AuthorizedLayoutModalOverlayActions>;
  // modalState: ModalStateInterface,
  // modalDispatch: React.Dispatch<ModalViewActions>,
}

export const SideListModal: React.FunctionComponent<SideListModalProps> = ({
  modalDispatch,
  modalState,
  userInfo,
}) => {
  useLockBodyScroll();
  return (
    <>
      {modalState === "isOpen" ? (
        <UniversalPortal selector="#modal">
          <AbFlex
            position="absolute"
            bg="rgba(0, 0, 0, 0.7)"
            width={1}
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={9}
            onClick={(event) => {
              event.preventDefault();
              if (event.target === event.currentTarget) {
                modalDispatch({
                  type: "sidebarClosed",
                  action: "overlayModalClosed",
                });
              }
            }}
          >
            <Flex
              bg="#f2f2f2"
              px={2}
              p={0}
              pb={3}
              width={[2 / 3, 2 / 3, 2 / 3, 2 / 3, "350px", "350px", "350px"]}
              flexDirection="column"
              alignItems="center"
              overflowY="auto"
            >
              {/* START - PROFILE VIEW */}

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
                      <Icon
                        active={false}
                        name="check_mark"
                        size="15px"
                        fill="#fff"
                      />
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
                        action: "overlayModalClosed",
                        type: "sidebarClosed",
                      });
                      console.log(
                        "PLACEHOLDER ROUTE.PUSH TO EDIT PROFILE ROUTE"
                      );
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
              {/* END - PROFILE VIEW */}

              {/* START - LINK BUTTONS */}
              <Flex flexDirection="column" bg="#f2f2f2" flex={1} width={1}>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    paddingRight: "16px",
                  }}
                >
                  {primarySidebarLinks.map((link, linkIndex) => (
                    <li key={linkIndex + "-links-" + link.name}>
                      <Link href={link.href} as={link.asPath}>
                        <Anchor>
                          <Flex
                            alignItems="center"
                            py={3}
                            pl={[2, 2, 2, 2, 4, 4, 4]}
                            // sx={{
                            //   outline: "2px limegreen dashed",
                            // }}
                          >
                            <Icon
                              active={false}
                              fill="#aaa"
                              name={link.iconName}
                              size="18px"
                              ml={3}
                            />
                            <Text pl={4} color="#222">
                              {link.label}
                            </Text>
                          </Flex>
                        </Anchor>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Divider />
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {secondarySidebarLinks.map((link, linkIndex) => (
                    <li key={linkIndex + "-links-" + link.name}>
                      <Link href={link.href} as={link.asPath}>
                        <Anchor>
                          <Flex py={3} pl={4}>
                            <Icon
                              active={false}
                              fill="#aaa"
                              name={link.iconName}
                              size="18px"
                              ml={3}
                            />
                            <Text pl={4} color="#222">
                              {link.label}
                            </Text>
                          </Flex>
                        </Anchor>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Flex>
              {/* END - LINK BUTTONS */}
            </Flex>
          </AbFlex>
        </UniversalPortal>
      ) : (
        ""
      )}
    </>
  );
};

export default SideListModal;

interface SidebarLinkInterface {
  label: string;
  href: string;
  asPath: string;
  name: string;
  iconName: NewIconProps["name"];
}

const primarySidebarLinks: SidebarLinkInterface[] = [
  {
    asPath: "/discover",
    href: "/discover",
    iconName: "discover",
    name: "discover",
    label: "Discover",
  },
  {
    asPath: "/near-me",
    href: "/near-me",
    iconName: "nearMe",
    label: "Near me",
    name: "nearMe",
  },
  {
    asPath: "/activities",
    href: "/activities",
    iconName: "activities",
    label: "Activities",
    name: "activities",
  },
  {
    asPath: "/map",
    href: "/map",
    iconName: "mapPin",
    label: "Map",
    name: "map",
  },
  {
    asPath: "/bookings",
    href: "/bookings",
    iconName: "bookings",
    label: "Bookings",
    name: "bookings",
  },
  {
    asPath: "/subscription",
    href: "/subscription",
    iconName: "subscription",
    label: "Subscription",
    name: "subscription",
  },
];

const secondarySidebarLinks: SidebarLinkInterface[] = [
  {
    asPath: "/settings",
    href: "/settings",
    iconName: "settings",
    label: "Settings",
    name: "settings",
  },
  {
    asPath: "/logout",
    href: "/logout",
    iconName: "logout",
    label: "Logout",
    name: "logout",
  },
];
