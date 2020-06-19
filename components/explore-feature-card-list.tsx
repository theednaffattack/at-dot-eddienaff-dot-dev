import React from "react";

import { FeatureCardProps } from "./helpers";
import { Box, Flex, Image, Text } from "./primitives/styled-rebass";
import Icon from "./icon";

interface ExploreFeatureCardListProps {
  data: FeatureCardProps[];
}

export const ExploreFeatureCardList: React.FC<ExploreFeatureCardListProps> = ({
  data,
}) => {
  return (
    <Flex flexDirection="row" flexWrap="wrap" as="ul" p={3} m={0}>
      {data.map((item, index) => {
        console.log(`MODULUS ${index} -`, index % 2 === 0);
        return (
          <Flex
            as="li"
            key={index + "-" + item.label}
            flexDirection="column"
            pr={index % 2 === 0 ? 2 : undefined}
            pl={index % 2 !== 0 ? 2 : undefined}
            width={1 / 2}
            pb={3}
            // border="crimson"
          >
            <Flex
              flex={1}
              bg="#fff"
              flexDirection="column"
              p={2}
              borderRadius="20px"
              sx={{ boxShadow: "0px 60px 80px 0px rgba(0, 0, 0, 0.09)" }}
            >
              <Box borderRadius="13px" overflow="hidden">
                <Image src={item.image.uri} />
              </Box>
              <Flex>
                <Text>{item.label}</Text>
                <Flex ml="auto" pt={2} pr={1}>
                  <Icon
                    active={false}
                    fill="#aaa"
                    name="more_vertical"
                    size="16px"
                  />
                </Flex>
              </Flex>
              <Flex mt="auto" alignItems="center">
                <Flex mr={2}>
                  <Icon
                    active={false}
                    fill="#aaa"
                    name={
                      item.weather.label === "Sunny"
                        ? "weather_sunny"
                        : "weather_rainy"
                    }
                    size="20px"
                  />
                </Flex>
                <Flex flexDirection="column">
                  <Text>{item.weather.temperature}°</Text>
                  <Text fontSize="12px">{item.weather.label}</Text>
                </Flex>
                <Flex mx={2}>
                  <Icon active={false} fill="#aaa" name="love" size="20px" />
                </Flex>
                <Flex>
                  <Text>4k</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};
