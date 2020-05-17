import React from "react";

import { Flex, Text } from "./primitives/styled-rebass";
import { FilterRoomGuestsSelectSpinner } from "./filter-room-guests-select-spinner";
import { FilterRoomGuestsSpinnerController } from "./filter-room-guests-spinner-controller";

interface FilterRoomGuestsProps {}

export interface RoomGuestsState {
  adults: number;
  minors: number;
}

export type RoomGuestsDispatch = React.Dispatch<
  React.SetStateAction<RoomGuestsState>
>;

export const FilterRoomGuests: React.FC<FilterRoomGuestsProps> = ({}) => {
  const [roomGuests, setRoomGuests] = React.useState<RoomGuestsState>({
    minors: 0,
    adults: 2,
  });
  return (
    <Flex flexDirection="column" width={1}>
      <Text pt={3} pl={3} fontSize={3}>
        Room
      </Text>
      <Flex pt={3} width={1}>
        <Flex flexDirection="column" width={1 / 2}>
          <Text color="#888" fontSize={1} pl={3}>
            ADULTS
          </Text>
          {/* spinner thing */}
          <Flex>
            <FilterRoomGuestsSelectSpinner
              useKey="adults"
              roomGuests={roomGuests}
              setRoomGuests={setRoomGuests}
            />
            {/* BEG - control buttons */}
            <FilterRoomGuestsSpinnerController
              useKey="adults"
              roomGuests={roomGuests}
              setRoomGuests={setRoomGuests}
            />

            {/* END - control buttons */}
          </Flex>
        </Flex>

        <Flex flexDirection="column" width={1 / 2}>
          <Text color="#888" fontSize={1}>
            MINORS
          </Text>
          {/* spinner thing */}
          <Flex>
            <FilterRoomGuestsSelectSpinner
              useKey="minors"
              roomGuests={roomGuests}
              setRoomGuests={setRoomGuests}
            />
            {/* BEG - control buttons */}
            <FilterRoomGuestsSpinnerController
              useKey="minors"
              roomGuests={roomGuests}
              setRoomGuests={setRoomGuests}
            />

            {/* END - control buttons */}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
