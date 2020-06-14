import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { Flex, Text, Button } from "./primitives/styled-rebass";
import { size, device } from "./styles/theme";
import { icons } from "./helpers";
import Icon from "./icon";
import Link from "next/link";

import { ClonedChildrenFromAuthLayout } from "../pages/traveling";

interface LayoutAuthorizedHeaderProps extends ClonedChildrenFromAuthLayout {}

export const authLayoutWidths = [
  size.mobileS,
  size.mobileM,
  size.mobileS,
  size.tablet,
  size.laptop,
  size.laptop,
  size.laptopL,
];

export const LayoutAuthorizedHeader: React.FC<LayoutAuthorizedHeaderProps> = ({
  modalOverlayDispatch,
  modalOverlayState,
}) => {
  return (
    <Flex
      mt={[3, 3, 3, 3, 3, 3, 4]}
      // mb={[2, 2, 2, 2, 2, 2, 4]}
      justifyContent="center"
      width={1}
      px={[2, 2, 2, 2, 4, 4, 0]}
    >
      <Flex
        width={authLayoutWidths}
        borderBottom="2px rgba(170, 170, 170, 0.6) solid"
        alignItems="center"
        pb={[3, 3, 3, 3, 0, 0, 0]}
      >
        <MenuButton
          modalOverlayDispatch={modalOverlayDispatch}
          modalOverlayState={modalOverlayState}
        />
        <NavIcons />
        <ActivityAndSearchIcons />
      </Flex>
    </Flex>
  );
};

interface ActivityAndSearchIconsProps {}

const ActivityAndSearchIcons: React.FC<ActivityAndSearchIconsProps> = () => {
  return (
    <Flex>
      <Flex flexDirection="column" justifyContent="flex-start">
        <Flex alignItems="center" justifyContent="center">
          <Icon name="activity" size="20px" fill="#aaa" active={false} />
        </Flex>
        <Flex pt={2} alignItems="center" justifyContent="center">
          <Icon name="dot" size="6px" fill="#e9486d" active={false} />
        </Flex>
      </Flex>
      <Flex ml={[2, 2, 2, 2, 2, 3, 3]}>
        <Icon name="search" size="20px" fill="#aaa" active={false} />
      </Flex>
    </Flex>
  );
};

interface MenuButtonProps extends ClonedChildrenFromAuthLayout {}

const MenuButton: React.FC<MenuButtonProps> = ({
  modalOverlayDispatch,
  modalOverlayState,
}) => {
  return (
    <FlexMenuButton alignItems="center" justifyContent="center">
      <Flex>
        <Button
          type="button"
          bg="transparent"
          onClick={() => {
            console.log("dispatching", modalOverlayState);
            if (modalOverlayState.sidebar === "isClosed") {
              modalOverlayDispatch({
                type: "sidebarOpen",
                action: "overlayModalOpen",
              });
            }
            if (modalOverlayState.sidebar === "isOpen") {
              modalOverlayDispatch({
                type: "sidebarClosed",
                action: "overlayModalClosed",
              });
            }
          }}
        >
          <Icon name="menu" size="20px" fill="#aaa" />
        </Button>
      </Flex>
      <Flex ml={2} alignItems="center" justifyContent="center">
        <Text color="#aaa">Menu</Text>
      </Flex>
    </FlexMenuButton>
  );
};

interface NavIconsProps {}

const standardNavIconSize = "30px";

const navBarWidths = [
  "200px",
  "200px",
  "300px",
  "500px",
  "500px",
  "700px",
  "700px",
];

const FlexMenuButton = styled(Flex)`
  @media ${device.tabletMax} {
    margin-right: auto;
  }
`;

const FlexMain = styled(Flex)`
  @media ${device.tabletMax} {
    display: none;
  }

  @media ${device.laptop} {
    display: flex;
  }
`;

const NavIcons: React.FC<NavIconsProps> = () => {
  const router = useRouter();
  return (
    <FlexMain
      mx="auto"
      width={navBarWidths}
      justifyContent="center"
      flexWrap="nowrap"
    >
      {icons.map((icon) => (
        <Flex
          key={icon.name}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          borderBottom={
            router.pathname === icon.route
              ? "2px #e9486d solid"
              : "2px transparent solid"
          }
          width={1 / 5}
          pb={3}
        >
          <Link href={icon.route}>
            <a
              style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Icon
                name={icon["name"]}
                size={
                  icon.route === "/traveling" ? "40px" : standardNavIconSize
                }
                fill="#aaa"
                active={router.pathname === icon.route}
              />
              <Text
                color={router.pathname === icon.route ? "#e9486d" : "#aaa"}
                pt={2}
              >
                {icon.label}
              </Text>
            </a>
          </Link>
        </Flex>
      ))}
    </FlexMain>
  );
};
