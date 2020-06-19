import React from "react";

import { Flex, Text } from "./primitives/styled-rebass";
import Icon from "./icon";

interface ExplorePlacesToVisitLargeCardProps {}

export const ExplorePlacesToVisitLargeCard: React.FC<ExplorePlacesToVisitLargeCardProps> = ({}) => {
  return (
    <Flex p={3} minHeight="300px" width={1} color="#fff">
      <Flex
        borderRadius="20px"
        bg="#F4327F"
        width={1}
        sx={{
          position: "relative",
          overflow: "hidden",
          boxShadow: "0px 20px 80px 0px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Flex
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.85,
            backgroundImage:
              "linear-gradient( 15deg, rgb(210,48,120) 26%, rgb(254,97,97) 74%, rgb(255,121,85) 100%)",
            zIndex: 5,
          }}
        ></Flex>
        <Flex
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // opacity: 0.85,
            backgroundImage:
              "url('https://source.unsplash.com/random/1024x768?sky')",
            zIndex: 4,
          }}
        ></Flex>
        <Flex
          flexDirection="column"
          pb={3}
          px={3}
          sx={{
            position: "absolute",
            top: "40%",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 6,
          }}
        >
          <Flex flexDirection="column" mb="auto">
            <Text fontSize={4}>Mexico City</Text>
            <Text>
              Morbi urna elit, porta vitae convallis non, bibendum nec diam.{" "}
            </Text>
          </Flex>
          <Flex
            width={1 / 3}
            pt={2}
            borderTop="2px solid rgba(255,255,255,0.3)"
          >
            <Icon
              active={false}
              fill="rgba(255,255,255,0.5)"
              name="weather_sunny"
              size="25px"
            />
            <Flex pl={3} flexDirection="column">
              <Text>22°</Text>
              <Text>Sunny</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
