import React from "react";
import { Flex, Text } from "./primitives/styled-rebass";

interface DirectionsLoadingProps {}

export const DirectionsLoading: React.FC<DirectionsLoadingProps> = ({}) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      bg="rgba(255,255,255,0.4)"
      sx={{
        zIndex: 11010,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Text fontSize={4}>loading...</Text>
    </Flex>
  );
};
