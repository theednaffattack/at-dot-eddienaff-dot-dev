import React from "react";

import { Card, Flex, Text, Image } from "./primitives/styled-rebass";
import { HotelViewCardProps } from "./hotel-view-modal";
import Icon from "./icon";
import { users } from "../pages/messages";

export const HotelViewInfoCard: React.FC<HotelViewCardProps> = ({
  bg,
  p,
  width,
}) => {
  return (
    <Card
      width={width}
      bg={bg}
      my={1}
      p={p}
      sx={{
        boxShadow: "0px 13px 13px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Flex>
        <Flex borderRight="2px #aaa solid">
          <Flex mr={3}>
            <Icon active={false} name="sun" size="30px" fill="#aaa" />
          </Flex>
          <Flex flexDirection="column" pr={3}>
            <Text fontWeight="bold" fontSize={3}>
              22°
            </Text>
            <Text color="#aaa">Sunny</Text>
          </Flex>
        </Flex>

        <Flex flexDirection="column" justifyContent="center" pl={3}>
          <Flex mr={3} alignItems="baseline">
            <Text fontWeight="bold" fontSize={3} pr={3}>
              8.4
            </Text>{" "}
            <Text color="#aaa">+6k Votes</Text>
          </Flex>
          <Flex>
            {Array.from(Array(5), () => (
              <Icon
                key={`${index}-amenity`}
                active={false}
                name="star"
                size="15px"
                fill="rgba(227,171,83,1)"
              />
            ))}
          </Flex>
        </Flex>
        <Flex alignItems="center" sx={{ position: "relative" }}>
          {users.map((user, index) => (
            <ImageCircle
              key={`${index}-${user.userId}`}
              imgUri={user.profilePicUri}
              index={index}
            />
          ))}
        </Flex>
      </Flex>
    </Card>
  );
};

interface ImageCircleProps {
  imgUri?: string;
  index: number;
}

const ImageCircle: React.FC<ImageCircleProps> = ({ imgUri, index }) => {
  const positioning = index === 0 ? 0 : index * 20;
  return (
    <Flex
      bg="#ccc"
      height="40px"
      width="40px"
      alignItems="center"
      justifyContent="center"
      border="1.5px #fff solid"
      sx={{
        borderRadius: "50%",
        position: "absolute",
        overflow: "hidden",
        left: positioning,
        zIndex: 1000 - index,
      }}
    >
      {imgUri ? <Image src={imgUri} /> : null}
    </Flex>
  );
};
