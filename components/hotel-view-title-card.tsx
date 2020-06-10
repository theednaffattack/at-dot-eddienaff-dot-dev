import React from "react";

import {
  Card,
  Flex,
  Heading,
  Text,
  StyledHr,
} from "./primitives/styled-rebass";
import { HotelViewCardProps } from "./hotel-view-modal";

export const HotelViewTitleCard: React.FC<HotelViewCardProps> = ({
  bg,
  p,
  width,
}) => {
  return (
    <Card width={width} p={p} bg={bg}>
      <Heading as="h1" fontFamily="main">
        Mt. Catlin Hotel
      </Heading>
      <Flex alignItems="center">
        <Text>$967</Text>
        <Text fontSize={5}>•</Text>
        <Text>New York</Text>
      </Flex>
      <StyledHr width="100%" />
      <Flex flexDirection="column">
        <Text>About Mt. Catlin</Text>
        <Text>
          Nunc justo eros, vehicula vel vehicula ut, lacinia a erat. Nam
          fringilla eros... Nullam aliquam interdum ipsum et tempor. Phasellus
          odio felis, scelerisque eu purus quis.
        </Text>
      </Flex>
    </Card>
  );
};
