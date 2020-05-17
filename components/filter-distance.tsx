import React from "react";

import { Flex, Text } from "./primitives/styled-rebass";
import { SingleSlider } from "./form-fields/single-slider";

interface FilterDistanceProps {}

export const FilterDistance: React.FC<FilterDistanceProps> = ({}) => {
  return (
    <Flex flexDirection="column" width={1}>
      <Text pt={3} pl={3} fontSize={3}>
        Distance from you
      </Text>
      <Flex width={1} pt={5} alignItems="center" justifyContent="flex-end">
        <SingleSlider />
      </Flex>
    </Flex>
  );
};
