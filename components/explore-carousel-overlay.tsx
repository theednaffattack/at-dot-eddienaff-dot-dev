import React from "react";

import { Flex, Text } from "./primitives/styled-rebass";

interface ExploreCarouselOverlayProps {
  price: string;
  location: string;
  tagline: string;
}

export const ExploreCarouselOverlay: React.FC<ExploreCarouselOverlayProps> = ({
  children,
  location,
  price,
  tagline,
}) => {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        bg="rgba(0,0,0,0.3)"
        sx={{
          position: "absolute",
          zIndex: 20,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      ></Flex>
      <Flex
        // alignItems="center"
        color="#fff"
        justifyContent="center"
        flexDirection="column"
        p={3}
        sx={{
          position: "absolute",
          zIndex: 30,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Flex>
          <Text>{price}</Text>
          <Text>•</Text>
          <Text>{location}</Text>
        </Flex>
        <Text as="h1">{tagline}</Text>
        {children}
      </Flex>
    </>
  );
};
