import React from "react";

import { Flex, Text } from "./primitives/styled-rebass";
import { RequestDataInterface } from "./temp.request.data";

interface DisplayDirectionsProps {
  distance: RequestDataInterface["data"]["routes"][0]["legs"][0]["distance"];
  duration: RequestDataInterface["data"]["routes"][0]["legs"][0]["duration"];
  steps: RequestDataInterface["data"]["routes"][0]["legs"][0]["steps"];
}

export const DisplayDirections: React.FC<DisplayDirectionsProps> = ({
  distance,
  duration,
  steps,
}) => {
  return (
    <Flex
      bg="#ccc"
      flex={1}
      flexDirection="column"
      sx={{
        position: "absolute",
        top: 75,
        left: 20,
        bottom: 90,
        display: "flex",
        overflowY: "auto",
        zIndex: 10005,
      }}
    >
      <Text>Directions</Text>
      <Text>Distance: {distance}</Text>
      <Text>Duration: {duration}</Text>
      <Text>Steps: {steps.length}</Text>
      <ol>
        {steps.map((step, index) => (
          <li key={index + "-steps"}>
            <Flex sx={{ outline: "fuchsia" }}>
              <Text key={index + "-steps"}>
                {step.maneuver?.type ?? "no type"}
              </Text>
            </Flex>
            <Flex>
              <Text>{step.maneuver?.instruction ?? "no instruction"}</Text>
            </Flex>
          </li>
        ))}
      </ol>
    </Flex>
  );
};
