import React from "react";

import { Flex, Button, Text } from "./primitives/styled-rebass";
import { Booking } from "./helpers";
import Icon from "./icon";

export const ExploreCard: React.FC<Booking> = ({
  origin,
  destination,
  dateOfTravel,
  timeOfTravel,
  travelCarrier,
  travelType,
}) => {
  return (
    <Flex
      as="li"
      minHeight="120px"
      bg="#fff"
      borderRadius="18px"
      height="auto"
      my={2}
      p={3}
      pl={1}
      sx={{
        boxShadow: "0px 40px 100px 0px rgba(0, 0, 0, 0.10)",
        listStyle: "none",
      }}
    >
      {/* START ICON - ROW ITEM 1 */}
      <Flex alignItems="center" justifyContent="center" px={3}>
        <Flex height="70px" width="70px">
          <Icon active={false} name={travelType} size="70" fill="fuchsia" />
        </Flex>
      </Flex>
      {/* END ICON - ROW ITEM 1 */}
      {/* START BOOKING INFO - ROW ITEM 2 */}
      <Flex flexDirection="column" width={1}>
        {/* START OD ROW */}

        <Flex py={1}>
          <Text>{origin}</Text>

          <Flex mx={2} height="20px" width="20px">
            <Icon
              active={false}
              name="arrow_right_stick"
              size="20"
              fill="#000022"
            />
          </Flex>
          <Text>{destination}</Text>
        </Flex>
        {/* END OD ROW */}
        {/* START DATE & TIME OF TRAVEL ROW */}
        <Flex py={1}>
          <Text>{dateOfTravel}</Text>
          <Flex mx={2} height="20px" width="20px">
            <Icon active={false} name="horizontal_line" size="20" fill="#222" />
          </Flex>
          <Text>{timeOfTravel}</Text>
        </Flex>
        {/* END DATE & TIME OF TRAVEL ROW */}
        {/* START CARRIER NAME ROW */}
        <Flex py={1}>
          <Text>{travelCarrier}</Text>
        </Flex>
        {/* END CARRIER NAME ROW */}
      </Flex>
      {/* END BOOKING INFO - ROW ITEM 2 */}
      {/* START MORE ICON - ROW ITEM 2 */}
      <Flex width="45px" pt={2} ml="auto">
        <Button
          bg="transparent"
          p={0}
          sx={{
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => console.log("MORE MENU CLICKED")}
        >
          <Icon active={false} name="more_vertical" size="18px" fill="#aaa" />
        </Button>
      </Flex>
      {/* END MORE ICON - ROW ITEM 2 */}
    </Flex>
  );
};
