import React from "react";

import { Flex } from "./primitives/styled-rebass";

interface BackgroundSetterProps {
  bgImage?: string;
  children: React.ReactChildren | React.ReactChild;
  opacity: number;
}

export function BackgroundSetter({
  bgImage,
  children,
  opacity,
}: BackgroundSetterProps) {
  return (
    <Flex
      sx={{
        backgroundImage: `linear-gradient( 75deg, rgba(210,48,120, ${opacity}) 6%, rgba(254,97,97, ${opacity}) 74%, rgba(255,121,85, ${opacity}) 100%)`,

        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
      minHeight="100%"
    >
      <Flex
        flexDirection="column"
        sx={{
          backgroundImage: bgImage
            ? bgImage
            : `url(https://eddie-atlas-travel.s3-us-west-2.amazonaws.com/images/splash-bg-transparency.png)`,
          backgroundSize: "cover",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        overflowY="auto"
      >
        {children}
      </Flex>
    </Flex>
  );
}
