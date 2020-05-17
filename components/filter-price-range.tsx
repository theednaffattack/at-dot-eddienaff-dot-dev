import React from "react";

import { Flex, Text } from "./primitives/styled-rebass";
import { CompoundSlider } from "./form-fields/compound-slider";

interface FilterPriceRangeProps {}

export const FilterPriceRange: React.FC<FilterPriceRangeProps> = ({}) => {
  return (
    <Flex width={1} flexDirection="column">
      <Text pt={3} pl={3} fontSize={3}>
        Price Range
      </Text>
      <Flex pt={5} mb={3} alignItems="center">
        <CompoundSlider />
      </Flex>
    </Flex>
  );
};
