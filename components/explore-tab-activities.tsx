import React from "react";

import { Flex, Text } from "./primitives/styled-rebass";
import { ExploreTabsProps } from "./explore-page-component";

export const ExploreTabActivities: React.FC<ExploreTabsProps> = ({ label }) => {
  return (
    <Flex px={3}>
      <Text>{label}</Text>
    </Flex>
  );
};

export default ExploreTabActivities;
