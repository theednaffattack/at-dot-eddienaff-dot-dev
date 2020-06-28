import React from "react";

import { Card, Flex, Text, Image } from "./primitives/styled-rebass";
import {
  HotelViewCardProps,
  OverlayModalsActions,
  OverlayModalsStateInterface,
} from "./hotel-view-modal";
import Icon from "./icon";
import { users } from "./helpers";

interface HotelViewInfoCardProps extends HotelViewCardProps {
  modalDispatch: React.Dispatch<OverlayModalsActions>;
  modalState: OverlayModalsStateInterface["reviews"];
}

export const HotelViewInfoCard: React.FC<HotelViewInfoCardProps> = ({
  bg,
  modalDispatch,
  p,
  width,
}) => {
  const slicedUsers = users.slice(0, 3);
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
      <Flex sx={{ position: "relative" }}>
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
            {Array.from(Array(5), (_, index) => (
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

        <Flex
          ml={3}
          alignItems="center"
          sx={{ position: "relative" }}
          width={(slicedUsers.length - 1) * 40 + "px"}
          onClick={() => {
            modalDispatch({ type: "reviewsOpen" });
          }}
        >
          {slicedUsers.map((user, index) => (
            <ImageCircle
              key={`${index}-${user.id}`}
              imgUri={user.profileImageUri}
              index={index}
            />
          ))}
        </Flex>
      </Flex>
    </Card>
  );
};

interface ImageCircleProps {
  imgUri?: string | null | undefined;
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
