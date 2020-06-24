import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { Flex, Text, Button } from "./primitives/styled-rebass";
import { size, device } from "./styles/theme";
import { icons } from "./helpers";
import Icon from "./icon";
import Link from "next/link";

import { ClonedChildrenFromAuthLayout } from "../pages/traveling";
import {
  AuthorizedLayoutModalOverlayActions,
  AuthorizedLayoutModalOverlayState,
} from "./layout-authorized";

interface LayoutAuthorizedHeaderSettingsProps
  extends ClonedChildrenFromAuthLayout {
  title?: string;
}

export const authLayoutWidths = [
  size.mobileS,
  size.mobileM,
  size.mobileS,
  size.tablet,
  size.laptop,
  size.laptop,
  size.laptopL,
];

export const LayoutAuthorizedHeaderSettings: React.FC<LayoutAuthorizedHeaderSettingsProps> = ({
  modalOverlayDispatch,
  modalOverlayState,
  title,
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
        alignItems="center"
        pb={[2, 2, 2, 2, 0, 0, 0]}
      >
        <MenuButton
          modalOverlayDispatch={modalOverlayDispatch}
          modalOverlayState={modalOverlayState}
        />

        {title === "Settings" ? (
          <Text mx="auto" fontSize={[3, 3, 3, 3, 3, 4, 4]}>
            {title}
          </Text>
        ) : null}
        {title === "Settings" ? null : (
          <NavIcons
            modalOverlayDispatch={modalOverlayDispatch}
            modalState={modalOverlayState.profile}
          />
        )}
        <ActivityAndSearchIcons
          modalDispatch={modalOverlayDispatch}
          modalState={modalOverlayState.activity}
        />
      </Flex>
    </Flex>
  );
};

interface ActivityAndSearchIconsProps {
  modalDispatch: React.Dispatch<AuthorizedLayoutModalOverlayActions>;
  modalState: AuthorizedLayoutModalOverlayState["activity"];
}

const ActivityAndSearchIcons: React.FC<ActivityAndSearchIconsProps> = ({
  modalDispatch,
}) => {
  return (
    <Flex>
      <Flex flexDirection="column" justifyContent="flex-start">
        <Flex alignItems="center" justifyContent="center">
          <Button
            type="button"
            bg="transparent"
            p={0}
            onClick={() =>
              modalDispatch({ type: "activityOpen", action: "setOpen" })
            }
            height="30px"
            width="30px"
            borderRadius="50%"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="activity" size="20px" fill="#aaa" active={false} />
          </Button>
        </Flex>
        <Flex pt={2} alignItems="center" justifyContent="center">
          <Icon name="dot" size="6px" fill="#e9486d" active={false} />
        </Flex>
      </Flex>
      <Flex ml={[2, 2, 2, 2, 2, 3, 3]}>
        <Button
          type="button"
          bg="transparent"
          p={0}
          onClick={() =>
            modalDispatch({ type: "activityOpen", action: "setOpen" })
          }
          height="30px"
          width="30px"
          borderRadius="50%"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="search" size="20px" fill="#aaa" active={false} />
        </Button>
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
      <FlexMain ml={2} alignItems="center" justifyContent="center">
        <Text color="#aaa">Menu</Text>
      </FlexMain>
    </FlexMenuButton>
  );
};

interface NavIconsProps {
  modalOverlayDispatch: React.Dispatch<AuthorizedLayoutModalOverlayActions>;
  modalState: AuthorizedLayoutModalOverlayState["profile"];
}

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

// const FlexSmallScreensVisible = styled(Flex)`
//   @media ${device.tabletMax} {
//     display: flex;
//   }

//   @media ${device.laptop} {
//     display: none;
//   }
// `;

const NavIcons: React.FC<NavIconsProps> = ({
  modalOverlayDispatch,
  modalState,
}) => {
  const router = useRouter();
  return (
    <FlexMain
      mx="auto"
      width={navBarWidths}
      justifyContent="center"
      flexWrap="nowrap"
    >
      {icons.map((icon) => {
        if (icon.name === "profile") {
          return (
            <Flex
              key={icon.name}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              borderBottom={
                router.pathname === icon.href
                  ? "2px #e9486d solid"
                  : "2px transparent solid"
              }
              width={1 / 5}
              pb={3}
            >
              <Button
                p={0}
                bg="transparent"
                onClick={(event) => {
                  event.preventDefault();
                  if (modalState.status === "isClosed") {
                    modalOverlayDispatch({
                      type: "profileOpen",
                      action: { setMode: "view", setStatus: "isOpen" },
                    });
                  }
                  //
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Icon
                  name={icon["name"]}
                  size={
                    icon.href === "/traveling" ? "40px" : standardNavIconSize
                  }
                  fill="#aaa"
                  active={router.pathname === icon.href}
                />
                <Text
                  color={router.pathname === icon.href ? "#e9486d" : "#aaa"}
                  pt={2}
                >
                  {icon.label}
                </Text>
              </Button>
            </Flex>
          );
        } else {
          return (
            <Flex
              key={icon.name}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              borderBottom={
                router.pathname === icon.href
                  ? "2px #e9486d solid"
                  : "2px transparent solid"
              }
              width={1 / 5}
              pb={3}
            >
              <Link href={icon.href}>
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
                      icon.href === "/traveling" ? "40px" : standardNavIconSize
                    }
                    fill="#aaa"
                    active={router.pathname === icon.href}
                  />
                  <Text
                    color={router.pathname === icon.href ? "#e9486d" : "#aaa"}
                    pt={2}
                  >
                    {icon.label}
                  </Text>
                </a>
              </Link>
            </Flex>
          );
        }
      })}
    </FlexMain>
  );
};
