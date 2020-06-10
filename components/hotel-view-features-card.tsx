import React from "react";
// import { CardProps } from "rebass/styled-components";

import { Card, Flex, Text } from "./primitives/styled-rebass";
import { HotelViewCardProps } from "./hotel-view-modal";
import { featureList } from "./filter-features";
import Icon from "./icon";

export const HotelViewFeaturesCard: React.FC<HotelViewCardProps> = ({
  p,
  width,
}) => {
  return (
    <Card
      width={width}
      my={1}
      p={p}
      sx={{
        boxShadow: "0px 13px 13px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Flex alignItems="center" justifyContent="space-around" flexWrap="wrap">
        {featureList.map((feature) => (
          <Flex
            key={feature.name}
            flexDirection="column"
            alignItems="center"
            p={3}
          >
            <Flex
              bg="rgba(94,104,112,.1)"
              height="50px"
              width="50px"
              alignItems="center"
              justifyContent="center"
              pt={feature.name === "wifi" ? 3 : null}
              sx={{
                borderRadius: "50%",
              }}
            >
              <Icon
                key={feature.name}
                active={false}
                fill="rgba(94,104,112,1)"
                name={feature.name}
                size={feature.pixelSize}
              />
            </Flex>
            <Text>{feature.label}</Text>
          </Flex>
        ))}
      </Flex>
    </Card>
  );
};
