import React from "react";

import { Flex, CustomButton, Text } from "./primitives/styled-rebass";
import { FilterRoomGuestsSelectSpinnerProps } from "./filter-room-guests-select-spinner";

interface FilterRoomGuestsSpinnerControllerProps
  extends FilterRoomGuestsSelectSpinnerProps {}

export const FilterRoomGuestsSpinnerController: React.FC<FilterRoomGuestsSpinnerControllerProps> = ({
  roomGuests,
  setRoomGuests,
  useKey,
}) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Flex
        flexDirection="column"
        flex={1}
        bg="rgba(0,0,0,0.15)"
        alignItems="center"
        justifyContent="space-between"
        py={2}
        borderRadius="25px"
        height="87px"
        width="55px"
      >
        <Flex mb={1} alignItems="center" justifyContent="center">
          <CustomButton
            height="25px"
            width="25px"
            type="button"
            p={0}
            // mb={2}
            disabled={roomGuests[useKey] >= 3}
            onClick={() => {
              let adultsPrimaryKeyedObj = {
                adults: roomGuests["adults"] + 1,
                minors: roomGuests["minors"],
              };
              let minorsPrimaryKeyedObj = {
                adults: roomGuests["adults"],
                minors: roomGuests["minors"] + 1,
              };

              if (useKey === "minors" && roomGuests.minors < 3) {
                setRoomGuests(minorsPrimaryKeyedObj);
              }
              if (useKey === "adults" && roomGuests.adults < 3) {
                setRoomGuests(adultsPrimaryKeyedObj);
              }
              return;
            }}
            backgroundColor="#f4327f"
            backgroundImage="linear-gradient( 0deg,rgba(210, 48, 120, 0.2),rgba(254, 97, 97, 0.2),rgba(255, 121, 85, 0.2))"
            boxShadow="0px 10px 27px 0px rgba(0, 0, 0, 0.1)"
            borderRadius="50%"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text p={0} fontFamily="montserrat" color="#fff" fontSize="22px">
              +
            </Text>
          </CustomButton>
        </Flex>
        <Flex mb={1} alignItems="center" justifyContent="center">
          <CustomButton
            height="25px"
            width="25px"
            type="button"
            p={0}
            m={0}
            disabled={
              useKey === "minors"
                ? roomGuests.minors < 1
                : roomGuests.adults < 2
            }
            onClick={() => {
              let adultsPrimaryKeyedObj = {
                adults: roomGuests["adults"] - 1,
                minors: roomGuests["minors"],
              };
              let minorsPrimaryKeyedObj = {
                adults: roomGuests["adults"],
                minors: roomGuests["minors"] - 1,
              };

              if (useKey === "minors" && roomGuests.minors > 0) {
                setRoomGuests(minorsPrimaryKeyedObj);
              }
              if (useKey === "adults" && roomGuests.adults > 1) {
                setRoomGuests(adultsPrimaryKeyedObj);
              }
              return;
            }}
            backgroundColor="#fff"
            boxShadow="0px 10px 27px 0px rgba(0, 0, 0, 0.1)"
            borderRadius="50%"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              p={0}
              fontFamily="montserrat"
              color="#444"
              fontSize="30px"
              lineHeight="10px"
            >
              -
            </Text>
          </CustomButton>
        </Flex>
      </Flex>
    </Flex>
  );
};
