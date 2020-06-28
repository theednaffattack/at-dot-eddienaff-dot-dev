import React, { ReactElement } from "react";

import { SavedCardProps } from "./helpers";
import { Flex, Text, Heading, GridAuto } from "./primitives/styled-rebass";
import Icon from "./icon";
import { NewIconProps } from "./icon-types";

interface SavedCardListProps {
  data: SavedCardProps[];
}

export const SavedCardList: React.FC<SavedCardListProps> = ({ data }) => {
  return (
    <GridAuto gridGap={3}>
      {data.map((item, index) => {
        return (
          <Flex
            as="li"
            key={index + "-" + item.label}
            flexDirection="column"
            width={1}
            pb={3}
          >
            <Flex
              alignItems="center"
              sx={{
                px: 4,
                py: 6,
                backgroundImage: `url(${item.image.uri})`,
                backgroundSize: "cover",
                borderRadius: 20,
                color: "white",
                bg: "gray",
                boxShadow: "0px 60px 80px 0px rgba(0, 0, 0, 0.09)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Flex
                flexDirection="column"
                sx={{
                  backgroundImage: `linear-gradient(to top right,rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.6) 35%,rgba(0,0,0,0) 100%)`,
                  position: "absolute",
                  bottom: 0,
                  top: 0,
                  left: 0,
                  right: 0,
                }}
              ></Flex>

              <DisplayCardInformationBar
                commentsCount={item.commentsCount}
                likesCount={item.likesCount}
                weather={item.weather}
              >
                <HeadingPriceAndDistance
                  label={item.label}
                  price={item.price}
                  kmAway={item.kmAway}
                />
              </DisplayCardInformationBar>
            </Flex>
          </Flex>
        );
      })}
    </GridAuto>
  );
};

interface DisplayCardInformationBarProps {
  children?: React.ReactChildren | React.ReactChild;
  commentsCount: SavedCardProps["commentsCount"];
  likesCount: SavedCardProps["likesCount"];
  weather: SavedCardProps["weather"];
}

function DisplayCardInformationBar({
  children,
  commentsCount,
  likesCount,
  weather,
}: DisplayCardInformationBarProps): JSX.Element {
  return (
    <Flex
      flexDirection="column"
      width={1}
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Flex flexDirection="column" p={4}>
        {children ? children : null}
        <Flex mt={3} flexDirection="column" px={2} width={1}>
          <Flex>
            <WeatherBlock weather={weather} />

            <Flex alignItems="center">
              <DisplayCounts iconName="love">
                <Text>{likesCount}</Text>
              </DisplayCounts>
              <DisplayCounts iconName="comment">
                <Text>{commentsCount}</Text>
              </DisplayCounts>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

interface DisplayCountsProps {
  children: React.ReactChild | React.ReactChildren;
  iconName: NewIconProps["name"];
}

function DisplayCounts({
  children,
  iconName,
}: DisplayCountsProps): ReactElement {
  return (
    <>
      <Flex mx={2}>
        <Icon active={false} fill="#fff" name={iconName} size="20px" />
      </Flex>
      <Flex>{children}</Flex>
    </>
  );
}

interface HeadingPriceAndDistanceProps {
  kmAway: SavedCardProps["kmAway"];
  label: SavedCardProps["label"];
  price: SavedCardProps["price"];
}
function HeadingPriceAndDistance({
  kmAway,
  label,
  price,
}: HeadingPriceAndDistanceProps): ReactElement {
  return (
    <Flex flexDirection="column" bg="transparent">
      <Heading
        fontSize={[5, 5]}
        fontFamily="monty"
        fontWeight="400"
        color="white"
        sx={{
          textShadow: "0px 7px 7px rgba(0, 0, 0, 0.15)",
        }}
      >
        {label}
      </Heading>

      <Flex color="#fff">
        <Text>{price}</Text>
        <Flex mx={2} alignItems="center" justifyContent="center">
          <Icon
            active={false}
            fill="rgba(255,255,255,0.7)"
            name="dot"
            size="5px"
            mb="4px"
          />
        </Flex>
        <Text>{kmAway} Km away</Text>
        <Flex ml="auto" pt={2} pr={1}>
          <Icon active={false} fill="#fff" name="more_vertical" size="16px" />
        </Flex>
      </Flex>
    </Flex>
  );
}

interface WeatherBlockProps {
  weather: SavedCardProps["weather"];
}

function WeatherBlock({ weather }: WeatherBlockProps) {
  return (
    <>
      <Flex mr={2}>
        <Icon
          active={false}
          fill="#fff"
          name={weather.label === "Sunny" ? "weather_sunny" : "weather_rainy"}
          size="40px"
        />
      </Flex>
      <Flex flexDirection="column" mr="auto">
        <Text fontSize={3}>{weather.temperature}°</Text>
        <Text fontSize="12px">{weather.label}</Text>
      </Flex>
    </>
  );
}
