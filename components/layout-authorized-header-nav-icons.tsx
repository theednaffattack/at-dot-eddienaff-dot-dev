import React from "react";
import Link from "next/link";

import {
  AuthorizedLayoutModalOverlayActions,
  AuthorizedLayoutModalOverlayState,
} from "./layout-authorized";
import { useRouter } from "next/router";
import { icons } from "./helpers";
import { Anchor, FlexMain, FlexHover, Text } from "./primitives/styled-rebass";
import Icon from "./icon";

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

// const FlexSmallScreensVisible = styled(Flex)`
//   @media ${device.tabletMax} {
//     display: flex;
//   }

//   @media ${device.laptop} {
//     display: none;
//   }
// `;

interface HoveringState {
  indexHovering: number | null;
  status: "noneHovering" | "isDefHovering";
}

type HoveringStateActions =
  | {
      type: "startHovering";
      action: { indexHovering: number };
    }
  | {
      type: "stopHovering";
      action: { indexHovering: number | null };
    };

function navIconHoveringReducer(
  // @ts-ignore
  state: HoveringState,
  action: HoveringStateActions
): HoveringState {
  switch (action.type) {
    case "startHovering":
      return {
        indexHovering: action.action.indexHovering,
        status: "isDefHovering",
      };
    case "stopHovering":
      return {
        indexHovering: null,
        status: "noneHovering",
      };

    default:
      return {
        indexHovering: 0,
        status: "isDefHovering",
      };
  }
}

function initHovering(initialHoveringState: HoveringState): HoveringState {
  return initialHoveringState;
}

const initialHoveringState: HoveringState = {
  indexHovering: null,
  status: "noneHovering",
};

export const NavIcons: React.FC<NavIconsProps> = ({
  modalOverlayDispatch,
  modalState,
}) => {
  // const [navBarHovering, setNavBarHovering] = React.useState<
  //   "isNotHovering" | "isDefHovering"
  // >("isNotHovering");

  const [navIconHoveringState, navIconHoveringDispatch] = React.useReducer<
    (state: HoveringState, action: HoveringStateActions) => HoveringState,
    HoveringState
  >(navIconHoveringReducer, initialHoveringState, initHovering);

  const router = useRouter();
  return (
    <FlexMain
      mx="auto"
      width={navBarWidths}
      justifyContent="center"
      flexWrap="nowrap"
    >
      {icons.map((icon, iconIndex) => {
        if (icon.name === "profile") {
          return (
            // RETURN HERE
            <FlexHover
              active={icon.href.includes(router.pathname)}
              reduceBottom={icon.href.includes("traveling")}
              key={icon.name}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              width={1}
              pb={3}
              sx={{
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={() => {
                navIconHoveringDispatch({
                  type: "startHovering",
                  action: { indexHovering: iconIndex },
                });
              }}
              onMouseLeave={() => {
                navIconHoveringDispatch({
                  type: "stopHovering",
                  action: { indexHovering: null },
                });
              }}
            >
              {/* <Button
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
              > */}
              <Anchor
                p={0}
                bg="transparent"
                width={1}
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
              >
                <Icon
                  name={icon["name"]}
                  size={
                    icon.href === "/traveling" ? "40px" : standardNavIconSize
                  }
                  fill="#aaa"
                  active={
                    icon.href.includes(router.pathname) ||
                    (navIconHoveringState.status === "isDefHovering" &&
                      iconIndex === navIconHoveringState.indexHovering)
                  }
                />
                <Text
                  color={
                    icon.href.includes(router.pathname) ||
                    (navIconHoveringState.status === "isDefHovering" &&
                      iconIndex === navIconHoveringState.indexHovering)
                      ? "#e9486d"
                      : "#aaa"
                  }
                  pt={2}
                >
                  {icon.label}
                </Text>
              </Anchor>
            </FlexHover>
          );
        } else {
          return (
            <FlexHover
              active={icon.href.includes(router.pathname)}
              reduceBottom={icon.href.includes("traveling")}
              key={icon.name}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              width={1}
              pb={3}
              sx={{
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={() => {
                navIconHoveringDispatch({
                  type: "startHovering",
                  action: { indexHovering: iconIndex },
                });
              }}
              onMouseLeave={() => {
                navIconHoveringDispatch({
                  type: "stopHovering",
                  action: { indexHovering: null },
                });
              }}
            >
              <Link href={icon.href} as={icon.asPath}>
                <Anchor>
                  <Icon
                    name={icon["name"]}
                    size={
                      icon.href === "/traveling" ? "40px" : standardNavIconSize
                    }
                    fill="#aaa"
                    active={
                      icon.href.includes(router.pathname) ||
                      (navIconHoveringState.status === "isDefHovering" &&
                        iconIndex === navIconHoveringState.indexHovering)
                    }
                  />
                  <Text
                    color={
                      icon.href.includes(router.pathname) ||
                      (navIconHoveringState.status === "isDefHovering" &&
                        iconIndex === navIconHoveringState.indexHovering)
                        ? "#e9486d"
                        : "#aaa"
                    }
                    pt={2}
                  >
                    {icon.label}
                  </Text>
                </Anchor>
              </Link>
            </FlexHover>
          );
        }
      })}
    </FlexMain>
  );
};
