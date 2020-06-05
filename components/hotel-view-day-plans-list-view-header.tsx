import React from "react";

import { AbFlex, Flex, Text } from "./primitives/styled-rebass";

interface HotelViewDayPlansListItemHeaderProps {
  time: string;
}

export const HotelViewDayPlansListItemHeader: React.FC<HotelViewDayPlansListItemHeaderProps> = ({
  time,
}) => {
  return (
    <Flex mt={4} alignItems="center" sx={{ position: "relative" }}>
      <AbFlex
        position="absolute"
        left={-30}
        height="25px"
        width="25px"
        borderRadius="50%"
        color="transparent"
        alignItems="center"
        justifyContent="center"
        bg="#eee"
      >
        <Flex bg="#bbb" height="12px" width="12px" borderRadius="50%">
          .
        </Flex>
      </AbFlex>
      <TimeStamp time={time} />
    </Flex>
  );
};

interface TimeStampProps {
  time: string;
}

const TimeStamp: React.FC<TimeStampProps> = ({ time }) => {
  return (
    <Flex pl={2} flexDirection="column" sx={{ position: "relative" }}>
      <Text>{time}</Text>
    </Flex>
  );
};
