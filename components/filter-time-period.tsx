import React from "react";
import { Flex, Text, CustomButton } from "./primitives/styled-rebass";

interface FilterTimePeriodProps {}

export const FilterTimePeriod: React.FC<FilterTimePeriodProps> = ({}) => {
  const [fromDate, setFromDate] = React.useState<number | null>(null);
  const [toDate, setToDate] = React.useState<number | null>(null);
  return (
    <Flex flexDirection="column">
      <Text
        pt={3}
        pl={3}
        color="rgba(34,34,34,0.5)"
        fontSize={1}
        sx={{
          textTransform: "uppercase",
        }}
      >
        From
      </Text>
      <FromCalendar fromDate={fromDate} setFromDate={setFromDate} />
      <Flex flexDirection="column" alignItems="center" width={1}>
        <Flex my={3} width={9 / 10} borderBottom="2px #aaa solid"></Flex>
      </Flex>
      <Text
        pl={3}
        color="rgba(34,34,34,0.5)"
        fontSize={1}
        sx={{
          textTransform: "uppercase",
        }}
      >
        To
      </Text>
      <ToCalendar toDate={toDate} setToDate={setToDate} />
    </Flex>
  );
};

interface FromCalendarProps {
  fromDate: number | null;
  setFromDate: React.Dispatch<React.SetStateAction<number | null>>;
}

export const FromCalendar: React.FC<FromCalendarProps> = ({
  fromDate,
  setFromDate,
}) => {
  return (
    <Flex
      overflowX="auto"
      sx={{
        WebkitOverflowScrolling: "touch",
      }}
    >
      {fromDates.map((date) => {
        let bgColor;
        if (typeof date.numeralDate === "number") {
          bgColor = fromDate === date.numeralDate ? "#f4327f" : "transparent";
        } else {
          bgColor =
            fromDate === parseInt(date.numeralDate, 10)
              ? "#f4327f"
              : "transparent";
        }
        return (
          <Flex
            key={`${date.dayOfTheWeek}-${date.id}`}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={3}
            px={4}
            // mx={2}
          >
            <Text py={3} color="rgba(34,34,34,0.50)">
              {date.dayOfTheWeek.slice(0, 1)}
            </Text>
            <CustomButton
              height="50px"
              width="50px"
              p={0}
              mb={3}
              onClick={() => {
                const getNumeralDate =
                  typeof date.numeralDate === "number"
                    ? date.numeralDate
                    : parseInt(date.numeralDate, 10);

                setFromDate(getNumeralDate);
              }}
              backgroundColor={bgColor}
              backgroundImage={
                bgColor === "#f4327f"
                  ? `linear-gradient(
                0deg,
                rgba(210, 48, 120, 0.2),
                rgba(254, 97, 97, 0.2),
                rgba(255, 121, 85, 0.2)
                )`
                  : null
              }
              boxShadow="0px 10px 27px 0px rgba(0, 0, 0, 0.1)"
              borderRadius="50%"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border:
                  bgColor === "#f4327f"
                    ? "2px transparent solid"
                    : "2px #ccc solid",
              }}
            >
              <Text
                fontFamily="montserrat"
                color={bgColor === "#f4327f" ? "#fff" : "rgba(34,34,34,0.50)"}
              >
                {date.numeralDate}
              </Text>
            </CustomButton>
          </Flex>
        );
      })}
    </Flex>
  );
};

interface ToCalendarProps {
  toDate: number | null;
  setToDate: React.Dispatch<React.SetStateAction<number | null>>;
}

export const ToCalendar: React.FC<ToCalendarProps> = ({
  toDate,
  setToDate,
}) => {
  return (
    <Flex
      overflowX="auto"
      sx={{
        WebkitOverflowScrolling: "touch",
      }}
    >
      {toDates.map((date) => {
        let bgColor;
        if (typeof date.numeralDate === "number") {
          bgColor = toDate === date.numeralDate ? "#f4327f" : "transparent";
        } else {
          bgColor =
            toDate === parseInt(date.numeralDate, 10)
              ? "#f4327f"
              : "transparent";
        }
        return (
          <Flex
            key={`${date.dayOfTheWeek}-${date.id}`}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={3}
            px={4}
            // mx={2}
          >
            <Text py={3} color="rgba(34,34,34,0.50)">
              {date.dayOfTheWeek.slice(0, 1)}
            </Text>

            <CustomButton
              height="50px"
              width="50px"
              p={0}
              mb={3}
              onClick={() => {
                const getNumeralDate =
                  typeof date.numeralDate === "number"
                    ? date.numeralDate
                    : parseInt(date.numeralDate, 10);

                setToDate(getNumeralDate);
              }}
              backgroundColor={bgColor}
              backgroundImage={
                bgColor === "#f4327f"
                  ? `linear-gradient(
                0deg,
                rgba(210, 48, 120, 0.2),
                rgba(254, 97, 97, 0.2),
                rgba(255, 121, 85, 0.2)
                )`
                  : null
              }
              boxShadow="0px 10px 27px 0px rgba(0, 0, 0, 0.1)"
              borderRadius="50%"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border:
                  bgColor === "#f4327f"
                    ? "2px transparent solid"
                    : "2px #ccc solid",
              }}
            >
              <Text
                fontFamily="montserrat"
                color={bgColor === "#f4327f" ? "#fff" : "rgba(34,34,34,0.50)"}
              >
                {date.numeralDate}
              </Text>
            </CustomButton>
          </Flex>
        );
      })}
    </Flex>
  );
};

interface FromToDatesProps {
  dayOfTheWeek: string;
  numeralDate: string | number;
  id: string;
}

export const fromDates: FromToDatesProps[] = [
  {
    id: "0",
    dayOfTheWeek: "Sunday",
    numeralDate: "11",
  },
  {
    id: "1",
    dayOfTheWeek: "Sunday",
    numeralDate: "12",
  },
  {
    id: "2",
    dayOfTheWeek: "Sunday",
    numeralDate: "13",
  },
  {
    id: "4",
    dayOfTheWeek: "Sunday",
    numeralDate: "14",
  },
  {
    id: "5",
    dayOfTheWeek: "Sunday",
    numeralDate: "15",
  },
  {
    id: "6",
    dayOfTheWeek: "Sunday",
    numeralDate: "16",
  },
  {
    id: "7",
    dayOfTheWeek: "Sunday",
    numeralDate: "17",
  },
  {
    id: "8",
    dayOfTheWeek: "Sunday",
    numeralDate: "18",
  },
  {
    id: "9",
    dayOfTheWeek: "Sunday",
    numeralDate: "19",
  },
  {
    id: "10",
    dayOfTheWeek: "Sunday",
    numeralDate: "20",
  },
  {
    id: "11",
    dayOfTheWeek: "Sunday",
    numeralDate: "21",
  },
];

export const toDates: FromToDatesProps[] = [
  {
    id: "0",
    dayOfTheWeek: "Sunday",
    numeralDate: "22",
  },
  {
    id: "1",
    dayOfTheWeek: "Sunday",
    numeralDate: "23",
  },
  {
    id: "2",
    dayOfTheWeek: "Sunday",
    numeralDate: "24",
  },
  {
    id: "4",
    dayOfTheWeek: "Sunday",
    numeralDate: "25",
  },
  {
    id: "5",
    dayOfTheWeek: "Sunday",
    numeralDate: "26",
  },
  {
    id: "6",
    dayOfTheWeek: "Sunday",
    numeralDate: "27",
  },
  {
    id: "7",
    dayOfTheWeek: "Sunday",
    numeralDate: "28",
  },
  {
    id: "8",
    dayOfTheWeek: "Sunday",
    numeralDate: "29",
  },
  {
    id: "9",
    dayOfTheWeek: "Sunday",
    numeralDate: "30",
  },
  {
    id: "10",
    dayOfTheWeek: "Sunday",
    numeralDate: "31",
  },
  {
    id: "11",
    dayOfTheWeek: "Sunday",
    numeralDate: "1",
  },
];
