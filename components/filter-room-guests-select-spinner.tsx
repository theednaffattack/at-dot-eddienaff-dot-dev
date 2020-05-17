import React from "react";

import { Flex, Button, Text } from "./primitives/styled-rebass";
import { RoomGuestsState, RoomGuestsDispatch } from "./filter-room-guests";

export interface FilterRoomGuestsSelectSpinnerProps {
  roomGuests: RoomGuestsState;
  setRoomGuests: RoomGuestsDispatch;
  useKey: keyof RoomGuestsState;
}

export const FilterRoomGuestsSelectSpinner: React.FC<FilterRoomGuestsSelectSpinnerProps> = ({
  useKey,
  roomGuests,
  setRoomGuests,
}) => {
  return (
    <Flex flexDirection="column" px={4} width={1}>
      <Flex
        borderBottom="2px #aaa solid"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          bg="transparent"
          p={0}
          disabled={roomGuests[useKey] > 1}
          onClick={() => {
            if (roomGuests[useKey] > 1) {
              setRoomGuests({
                adults: roomGuests[useKey] - 1,
                minors: roomGuests[useKey === "adults" ? "minors" : "adults"],
              });
            }
          }}
        >
          <Text
            color={roomGuests[useKey] - 1 >= 1 ? "#888" : "transparent"}
            fontSize={4}
            py={1}
          >
            {roomGuests[useKey] - 1}
          </Text>
        </Button>
      </Flex>
      <Flex
        borderBottom="2px #aaa solid"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="#444" fontSize={4} py={1}>
          {roomGuests[useKey]}
        </Text>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Button
          bg="transparent"
          p={0}
          disabled={roomGuests[useKey] >= 3}
          onClick={() => {
            if (roomGuests[useKey] < 4) {
              setRoomGuests({
                adults: roomGuests[useKey] + 1,
                minors: roomGuests[useKey === "adults" ? "minors" : "adults"],
              });
            }
          }}
        >
          <Text
            color={roomGuests[useKey] + 1 < 4 ? "#888" : "transparent"}
            fontSize={4}
            py={1}
          >
            {roomGuests[useKey] + 1}
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};
