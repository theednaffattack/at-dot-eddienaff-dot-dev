import React from "react";

import { Button, Flex, Image, Text } from "./primitives/styled-rebass";
import { ReviewCardProps } from "./helpers";
import Icon from "./icon";

export function ReviewCard({
  averageRating,
  createdAt,
  user,
  likeCount,
}: ReviewCardProps) {
  const prepAverageRating = {
    stars: Array.from(Array(Math.round(averageRating))).map((_, starIndex) => (
      <Icon
        key={"stars" + starIndex}
        active={false}
        fill="orange"
        name="star"
        size="13px"
        mx={1}
      />
    )),
  };
  return (
    <Flex p={4} variant="customCard">
      <Flex width={1}>
        <ReviewAvatar
          image={{
            src: "https://source.unsplash.com/random/1024x768?kitten",
            srcSet: [""],
          }}
        />
        <Flex ml={2} borderBottom="2px solid #aaa" width={1}>
          <Flex flexDirection="column">
            <Text>
              {user.firstName} {user.lastName}
            </Text>
            <Flex>
              {prepAverageRating.stars}
              <Text>{likeCount} votes</Text>
            </Flex>
          </Flex>

          <Flex ml="auto">
            <Text>{createdAt}</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex width={1}>
        <Flex>
          <Flex minWidth="48px"></Flex>
          <Flex pl={2} mt={3} flexDirection="column">
            <Text pb={2}>Another Dimension!</Text>
            <Text color="muted_text">
              Nunc justo eros, vehicula vel vehicula ut, lacinia a erat. Nam
              fringilla eros...
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex mt={3} width={1}>
        <Flex width={1}>
          <Flex minWidth="48px"></Flex>
          <Flex pl={2} alignItems="center">
            <Icon fill="#aaa" name="love" size="1em" mr={1} />
            <Text color="#888888">271</Text>
          </Flex>
          <Flex ml="auto" mr={1} alignItems="center">
            <Button type="button" bg="transparent">
              <Icon fill="#aaa" name="more_horizontal" size="20px" mr={1} />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

interface ReviewAvatarProps {
  image: {
    src: string;
    srcSet: string[];
  };
}

function ReviewAvatar(props: ReviewAvatarProps) {
  return (
    <Image
      src={props.image.src}
      sx={{
        width: 55,
        height: 55,
        borderRadius: "18px",
      }}
    />
  );
}
