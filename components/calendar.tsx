import React, { useState } from "react";
import {
  addDays,
  addMonths,
  compareAsc,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";

import { Button, Flex, Text } from "./primitives/styled-rebass";
import styled from "styled-components";
import Icon from "./icon";
import {
  SelectionDatesActions,
  SelectionDatesState,
} from "./select-date-modal";

const flexButtonConfig = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

interface CalendarProps {
  calendarShowing: "check-in" | "check-out";
  setCalendarShowing: React.Dispatch<
    React.SetStateAction<"check-in" | "check-out">
  >;
  selectionDatesDispatch: React.Dispatch<SelectionDatesActions>;
  selectionDates: SelectionDatesState;
}

export const Calendar: React.FC<CalendarProps> = ({
  calendarShowing,
  selectionDates,
  selectionDatesDispatch,
  setCalendarShowing,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const days = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(currentDate);
    for (let i = 0; i < 7; i++) {
      days.push(
        <Flex
          // flexBasis={0}
          // flexGrow={1}
          key={i}
          alignItems="center"
          justifyContent="center"
        >
          <Text sx={{ textTransform: "uppercase" }}>
            {format(addDays(startDate, i), dateFormat)}
          </Text>
        </Flex>
      );
    }
    return (
      <Flex width={1} justifyContent="space-around">
        {days}
      </Flex>
    );
  };

  // className="days row"

  const cells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];
    let days: JSX.Element[] = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;

        days = [
          ...days,
          <BorderRightFlex
            width={1}
            alignItems="center"
            justifyContent="center"
            key={day.toISOString()}
            // borderRight="1px solid lightgray"
          >
            <Button
              type="button"
              width="100%"
              borderRadius={0}
              bg={
                isSameDay(cloneDay, selectedDate)
                  ? "pink"
                  : isSameDay(cloneDay, new Date())
                  ? "lightgoldenrodyellow"
                  : "transparent"
              }
              p={0}
              onClick={() => {
                // onDateClick(parse(cloneDay, dateFormat, new Date()))
                onDateClick(cloneDay);
              }}
              sx={flexButtonConfig}
            >
              <Text
                color={!isSameMonth(day, monthStart) ? "#aaa" : "text"}
                lineHeight="2em"
                fontSize="1em"
              >
                {formattedDate}
              </Text>
            </Button>
            {/* <span className="bg">{formattedDate}</span> */}
          </BorderRightFlex>,
        ];

        day = addDays(day, 1);
      }
      rows.push(
        <Flex key={day.toISOString()} borderBottom="1px solid lightgray">
          {" "}
          {days}{" "}
        </Flex>
      );
      days = [];
    }
    return (
      <Flex flexDirection="column" id="body" border="1px solid lightgray">
        {rows}
      </Flex>
    );
  };

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const onDateClick = (day: Date) => {
    setSelectedDate(day);
    if (calendarShowing === "check-in" && compareAsc(day, new Date()) === -1) {
      selectionDatesDispatch({
        type: "validationErrorCheckInCannotOccurBeforeTodaysDate",
      });
    }
    if (calendarShowing === "check-in" && compareAsc(day, new Date()) !== -1) {
      selectionDatesDispatch({ type: "setFromDate", setFrom: day });
    }
    if (
      calendarShowing === "check-out" &&
      selectionDates.from &&
      compareAsc(selectionDates.from, day) === 0
    ) {
      selectionDatesDispatch({
        type: "validationErrorCheckOutCannotOccurBeforeCheckIn",
      });
    }
    if (
      calendarShowing === "check-out" &&
      selectionDates.from &&
      compareAsc(selectionDates.from, day) < 1
    ) {
      console.log("COMPARE THE DATES ", compareAsc(selectionDates.from, day));
      selectionDatesDispatch({ type: "setToDate", setTo: day });
    }

    // selectionDatesDispatch({ type: "setFromDate", setFrom: day });
  };

  const dateFormat = "MMMM yyyy";
  return (
    <Flex flexDirection="column">
      {/* START HEADER */}
      <Flex width={1} alignItems="center">
        <Button type="button" bg="transparent" onClick={prevMonth}>
          <Icon active={false} fill="#aaa" name="arrow_left" size="20px" />
        </Button>
        <Text mx="auto">
          <span>{format(currentDate, dateFormat)}</span>
        </Text>
        <Button
          type="button"
          bg="transparent"
          onClick={nextMonth}
          sx={flexButtonConfig}
        >
          <Icon active={false} fill="#aaa" name="arrow_right" size="20px" />
        </Button>
      </Flex>
      {/* END HEADER */}

      <Flex my={2} width={1}>
        {days()}
      </Flex>
      <div id="cells-container">{cells()}</div>
      <Flex mt={3} alignItems="center" justifyContent="center">
        <a
          href="#"
          onClick={() => {
            console.log("go to check out date selected");
            setCalendarShowing(
              calendarShowing === "check-in" ? "check-out" : "check-in"
            );
          }}
          style={{
            display: "flex",

            alignItems: "center",
          }}
        >
          {calendarShowing === "check-out" ? (
            <Icon active={false} fill="#aaa" name="arrow_left" size="15px" />
          ) : null}
          <Text>
            select {calendarShowing === "check-in" ? "check-out" : "check-in"}{" "}
            date
          </Text>
          {calendarShowing === "check-in" ? (
            <Icon active={false} fill="#aaa" name="arrow_right" size="15px" />
          ) : null}{" "}
        </a>
        {calendarShowing === "check-out" ? (
          <>
            <Text>or </Text> <Button type="button">done</Button>
          </>
        ) : null}
      </Flex>

      <Flex flexDirection="column" px={3}>
        <Flex py={2}>
          <Flex minWidth="100px">
            <Text>Check-in:</Text>
          </Flex>
          <Text>
            {selectionDates.from
              ? format(selectionDates.from, "EEE, MMMM do, yyyy")
              : "none selected"}
          </Text>
        </Flex>

        <Flex py={2}>
          <Flex minWidth="100px">
            <Text>Check-out:</Text>
          </Flex>
          <Text>
            {selectionDates.to
              ? format(selectionDates.to, "EEE, MMMM do, yyyy")
              : "none selected"}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Calendar;

const BorderRightFlex = styled(Flex)`
  border-right: 1px solid lightgray;
  &:last-child {
    border-right: none;
  }
`;
