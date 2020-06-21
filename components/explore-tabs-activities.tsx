import React from "react";

import { Flex, Text } from "./primitives/styled-rebass";
import { ExploreTabsProps } from "./explore-page-component";
import Icon from "./icon";

export const ExploreTabActivities: React.FC<ExploreTabsProps> = ({}) => {
  return (
    <Flex px={3} width={1}>
      {/* START DIRECTION WRAPPER */}
      <Flex width={1} flexWrap="wrap">
        <ActivityCard
          minHeight="220px"
          gradientOpacity={0.5}
          bgGradient="linear-gradient( 45deg, rgba(235,57,155,0.9) 0%, rgba(254,123,93,0.9) 100%)"
          bgImage="url('https://source.unsplash.com/random/1024x768?city&black+and+white')"
        >
          <Icon
            active={false}
            fill="white"
            name="nature"
            size="40px"
            mb="60px"
          />
          <Text>Nature's Light</Text>
          <Text>480 spots</Text>
        </ActivityCard>

        {/* START LEFT LANE */}

        <Flex flexDirection="column" width={1 / 2} pr={2}>
          <ActivityCard
            minHeight="220px"
            gradientOpacity={0.5}
            bgGradient="linear-gradient( 45deg, rgba(190,60,218, 0.9) 0%, rgba(239,62,150, 0.9) 100%)"
            bgImage="url('https://source.unsplash.com/random/1024x768?nature&black+and+white')"
          >
            <Icon
              active={false}
              fill="white"
              name="commedy_tragedy"
              size="40px"
              mb="60px"
            />
            <Text>Cultural</Text>
            <Text>257 spots</Text>
          </ActivityCard>

          <ActivityCard
            minHeight="220px"
            gradientOpacity={0.5}
            bgGradient="linear-gradient( 45deg, rgba(190,60,218, 0.9) 0%, rgba(239,62,150, 0.9) 100%)"
            bgImage="url('https://source.unsplash.com/random/1024x768?nature&black+and+white')"
          >
            <Icon
              active={false}
              fill="white"
              name="odd_chess_piece"
              size="40px"
              mb="60px"
            />
            <Text>Popularity</Text>
            <Text>357 spots</Text>
          </ActivityCard>
        </Flex>
        {/* END LEFT LANE */}
        {/* START RIGHT LANE */}
        <Flex flexDirection="column" width={1 / 2} pl={2}>
          {/* <Flex flexDirection="column"> */}
          <ActivityCard
            minHeight="220px"
            gradientOpacity={0.5}
            bgGradient="linear-gradient( 45deg, rgba(190,60,218, 0.9) 0%, rgba(239,62,150, 0.9) 100%)"
            bgImage="url('https://source.unsplash.com/random/1024x768?nature&black+and+white')"
          >
            <Icon
              active={false}
              fill="white"
              name="architecture"
              size="40px"
              mb="60px"
            />
            <Text>Modern Life</Text>
            <Text>480 spots</Text>
          </ActivityCard>
          {/* </Flex> */}

          {/* <Flex flexDirection="column"> */}
          <ActivityCard
            minHeight="220px"
            gradientOpacity={0.5}
            bgGradient="linear-gradient( 45deg, rgba(190,60,218, 0.9) 0%, rgba(239,62,150, 0.9) 100%)"
            bgImage="url('https://source.unsplash.com/random/1024x768?nature&black+and+white')"
          >
            <Icon
              active={false}
              fill="white"
              name="sun_sparkle"
              size="40px"
              mb="60px"
            />
            <Text>Sun & Sand</Text>
            <Text>480 spots</Text>
          </ActivityCard>
          {/* </Flex> */}
        </Flex>
        {/* END RIGHT LANE */}
      </Flex>
      {/* END DIRECTION WRAPPER */}
    </Flex>
  );
};

export default ExploreTabActivities;

interface ActivityCardProps {
  bgImage?: React.CSSProperties["backgroundImage"];
  bgGradient?: React.CSSProperties["backgroundImage"];
  gradientOpacity?: number;

  minHeight?:
    | string
    | number
    | (string | number | null)[]
    | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
      }
    | null
    | undefined;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  bgImage,
  bgGradient,
  children,
  // gradientOpacity = 0.8,
  minHeight,
}) => {
  return (
    <Flex
      bg="transparent"
      width={1}
      my={2}
      p={3}
      borderRadius="25px"
      minHeight={minHeight}
      flexDirection="column"
      color="white"
      sx={{
        position: "relative",
        overflow: "hidden",

        backgroundImage: bgImage,
      }}
    >
      <Flex
        sx={{
          backgroundImage: bgGradient,
          // opacity: gradientOpacity,
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 4,
        }}
      ></Flex>
      <Flex
        flexDirection="column"
        p={4}
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 5,
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
};
