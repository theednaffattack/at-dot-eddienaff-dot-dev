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

interface SelectionDatesError {
  message: string;
}

export interface SelectionDatesState {
  from: Date | null;
  to: Date | null;
  validationErrors: SelectionDatesError[];
}

export type SelectionDatesActions =
  | {
      type: "setFromDate";
      setFrom: Date;
    }
  | {
      type: "setToDate";
      setTo: Date;
    }
  | {
      type: "validationErrorCheckOutCannotOccurBeforeCheckIn";
    }
  | { type: "validationErrorCheckInCannotOccurBeforeTodaysDate" };

function selectionDatesReducer(
  state: SelectionDatesState,
  action: SelectionDatesActions
): SelectionDatesState {
  switch (action.type) {
    case "setFromDate":
      return {
        from: action.setFrom,
        to: state.to,
        validationErrors: state.validationErrors,
      };

    case "setToDate":
      return {
        from: state.from,
        to: action.setTo,
        validationErrors: state.validationErrors,
      };

    case "validationErrorCheckOutCannotOccurBeforeCheckIn":
      return {
        from: state.from,
        to: state.to,
        validationErrors: [
          ...state.validationErrors,
          {
            message:
              "The check-out date cannot be on or before the check-in date. Please try again.",
          },
        ],
      };

    case "validationErrorCheckInCannotOccurBeforeTodaysDate":
      return {
        from: state.from,
        to: state.to,
        validationErrors: [
          ...state.validationErrors,
          {
            message:
              "The check-in date cannot be on or before today's date. Please try again.",
          },
        ],
      };

    default:
      return { from: null, to: null, validationErrors: [] };
  }
}

const initSelectionDates = { from: null, to: null };

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
  const [selectionDatesState, selectionDatesDispatch] = React.useReducer<
    (
      state: SelectionDatesState,
      action: SelectionDatesActions
    ) => SelectionDatesState,
    {
      from: Date | null;
      to: Date | null;
    }
  >(selectionDatesReducer, initSelectionDates, (initialState) => {
    return {
      from: initialState.from,
      to: initialState.to,
      validationErrors: [],
    };
  });

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
            flexDirection="column"
          >
            {selectionDatesState.validationErrors &&
            selectionDatesState.validationErrors.length > 0 ? (
              <Flex>
                {selectionDatesState.validationErrors.map((error) => (
                  <Text color="#fff" key={error.message}>
                    {error.message}
                  </Text>
                ))}
              </Flex>
            ) : null}
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
                calendarShowing={calendarShowing}
                setCalendarShowing={setCalendarShowing}
                selectionDates={selectionDatesState}
                selectionDatesDispatch={selectionDatesDispatch}
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
