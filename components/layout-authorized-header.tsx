import React from "react";

import {
  Flex,
  Text,
  Button,
  FlexMain,
  FlexMenuButton,
} from "./primitives/styled-rebass";
import { size } from "./styles/theme";
import Icon from "./icon";
import { ClonedChildrenFromAuthLayout } from "../pages/traveling";
import {
  AuthorizedLayoutModalOverlayActions,
  AuthorizedLayoutModalOverlayState,
} from "./layout-authorized";
import { NavIcons, navBarWidths } from "./layout-authorized-header-nav-icons";
import { Input } from "./form-fields/rebass-forms";
import { Form, Formik, Field } from "formik";

interface LayoutAuthorizedHeaderProps extends ClonedChildrenFromAuthLayout {
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

export const LayoutAuthorizedHeader: React.FC<LayoutAuthorizedHeaderProps> = ({
  modalOverlayDispatch,
  modalOverlayState,
  title,
}) => {
  return (
    <Flex
      mt={[3, 3, 3, 3, 3, 3, 4]}
      // mb={[2, 2, 2, 2, 2, 2, 4]}
      flexDirection="column"
      justifyContent="center"
      width={1}
      px={[2, 2, 2, 2, 4, 4, 0]}
    >
      <Flex
        width={authLayoutWidths}
        alignItems="center"
        pb={[2, 2, 2, 2, 0, 0, 0]}
        borderBottom="2px rgba(170, 170, 170, 0.6) solid"
        sx={{
          position: "relative",
        }}
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
          modalState={modalOverlayState}
        />
      </Flex>

      <Formik
        initialValues={{ search: "" }}
        onSubmit={(data) => console.log("SEARCH FORM SUBMITTED", data)}
      >
        {({ handleSubmit, resetForm }) => {
          return (
            <Flex justifyContent="center">
              <Flex
                width={navBarWidths}
                style={{
                  height:
                    modalOverlayState.search.mode !== "closed" ? "auto" : 0,
                  display:
                    modalOverlayState.search.mode === "closed"
                      ? "none"
                      : undefined,
                }}
              >
                <Form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", width: "100%" }}
                >
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      position: "relative",
                    }}
                  >
                    <Field
                      id="search"
                      name="search"
                      type="text"
                      placeholder="search"
                      shadow="0px 10px 27px 0px rgba(0, 0, 0, 0.1)"
                      component={Input}
                    />

                    <Button
                      type="button"
                      p={0}
                      bg="#aaa"
                      height="15px"
                      width="15px"
                      borderRadius="50%"
                      sx={{
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // top: 0,
                        right: "5px",
                        // width: "16px",
                        // height: "16px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        resetForm({ values: { search: "" }, errors: {} });
                      }}
                    >
                      <Icon
                        active={false}
                        name="close"
                        fill="#fff"
                        size="7px"
                      />
                    </Button>
                  </Flex>
                  <Flex ml="auto">
                    <Button
                      type="submit"
                      onClick={() =>
                        modalOverlayDispatch({
                          type: "isSearching",
                          action: { setMode: "searching", setStatus: "isOpen" },
                        })
                      }
                    >
                      search
                    </Button>
                    <Button
                      type="button"
                      onClick={() =>
                        modalOverlayDispatch({
                          type: "searchClosed",
                          action: { setMode: "closed", setStatus: "isClosed" },
                        })
                      }
                    >
                      close
                    </Button>
                  </Flex>
                </Form>
              </Flex>
            </Flex>
          );
        }}
      </Formik>
    </Flex>
  );
};

interface ActivityAndSearchIconsProps {
  modalDispatch: React.Dispatch<AuthorizedLayoutModalOverlayActions>;
  modalState: AuthorizedLayoutModalOverlayState;
}

const ActivityAndSearchIcons: React.FC<ActivityAndSearchIconsProps> = ({
  modalDispatch,
  modalState,
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
            modalDispatch({
              type:
                modalState.search.mode === "open"
                  ? "searchClosed"
                  : "searchOpen",
              action:
                modalState.search.mode === "open"
                  ? { setMode: "closed", setStatus: "isClosed" }
                  : { setMode: "open", setStatus: "isOpen" },
            })
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
