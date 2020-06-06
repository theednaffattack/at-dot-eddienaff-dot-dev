import React from "react";

import { Flex, Text } from "./primitives/styled-rebass";
import Icon from "./icon";

interface TravelingPageLocationLikesAndCommentsProps {
  city: string;
  comments: string;
  likes: string;
}

export const TravelingPageLocationLikesAndComments: React.FC<TravelingPageLocationLikesAndCommentsProps> = ({
  city,
  comments,
  likes,
}) => {
  return (
    <Flex alignItems="center">
      <Flex alignItems="center" mr="auto">
        <Icon active={false} fill="#aaa" name="mapPin" size="14px" />
        <Text ml={1}>{city}</Text>
      </Flex>
      <Flex alignItems="center" mr={3}>
        <Icon active={false} fill="#aaa" name="love" size="14px" />
        <Text ml={1}>{likes}</Text>
      </Flex>
      <Flex alignItems="center" mr={4}>
        <Icon active={false} fill="#aaa" name="comment" size="14px" />
        <Text ml={1}>{comments}</Text>
      </Flex>
    </Flex>
  );
};
