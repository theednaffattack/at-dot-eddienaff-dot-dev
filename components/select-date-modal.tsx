import React from "react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";
import dynamic from "next/dynamic";

import { AbFlex, Card, Button, Flex, Text } from "./primitives/styled-rebass";
import { MeQuery } from "../lib/queries/me.graphql";
import {
  AuthorizedLayoutModalOverlayActions,
  AuthorizedLayoutModalOverlayState,
} from "./layout-authorized";
import Icon from "./icon";
const Calendar = dynamic(() => import("./calendar"));

// select date, settings, activity, sidelist

interface SelectDateModalProps {
  userInfo?: MeQuery["me"] | undefined;
  modalState: AuthorizedLayoutModalOverlayState["selectDate"];
  modalDispatch: React.Dispatch<AuthorizedLayoutModalOverlayActions>;
}

export const SelectDateModal: React.FunctionComponent<SelectDateModalProps> = ({
  modalDispatch,
  modalState,
  // userInfo,
}) => {
  const [calendarShowing, setCalendarShowing] = React.useState<
    "check-in" | "check-out"
  >("check-in");
  return (
    <>
      {modalState === "isOpen" ? (
        <UniversalPortal selector="#overlay_modal">
          <AbFlex
            position="absolute"
            bg="rgba(0, 0, 0, 0.7)"
            top={0}
            width={1}
            left={0}
            right={0}
            bottom={0}
            zIndex={16}
            alignItems="center"
            justifyContent="center"
          >
            <Card p={0} pb={3} width={1} mx={3} sx={{ borderRadius: "20px" }}>
              <Flex
                p={2}
                mb={2}
                alignItems="center"
                sx={{
                  position: "relative",
                }}
              >
                <Button
                  type="button"
                  p={0}
                  mt={2}
                  ml={2}
                  bg="transparent"
                  height="25px"
                  width="25px"
                  borderRadius="50%"
                  onClick={() =>
                    modalDispatch({
                      action: "overlayModalClosed",
                      type: "selectDateClosed",
                    })
                  }
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #aaa",
                    justifyContent: "center",
                  }}
                >
                  <Icon active={false} fill="#aaa" name="close" size="12px" />
                </Button>
                <Flex
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Text>Select {calendarShowing} Date</Text>
                </Flex>
              </Flex>
              <Calendar
                selecting={calendarShowing}
                setSelection={setCalendarShowing}
              />
            </Card>
          </AbFlex>
        </UniversalPortal>
      ) : (
        ""
      )}
    </>
  );
};

export default SelectDateModal;
