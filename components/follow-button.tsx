import React from "react";

import { Button, Flex } from "./primitives/styled-rebass";
import Icon from "./icon";

interface FollowButtonProps {}

export const FollowButton: React.FC<FollowButtonProps> = ({}) => {
  return (
    <Button
      type="button"
      bg="#f4327f"
      p={0}
      height="38px"
      width="38px"
      borderRadius="50%"
      sx={{
        position: "absolute",
        right: 0,
        overflow: "hidden",
      }}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundImage:
            "linear-gradient( 0deg, rgb(210,48,120) 6%, rgb(254,97,97) 74%, rgb(255,121,85) 100%)",
          boxShadow: "0px 30px 80px 0px rgba(0, 0, 0, 0.1)",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          opacity: 0.5,
          zIndex: 25,
        }}
      ></Flex>
      <Flex
        sx={{
          position: "absolute",
          top: "calc(50% - 10px)",
          left: "calc(50% - 10px)",
          opacity: 0.85,
          zIndex: 35,
        }}
      >
        <Icon active={false} fill="#fff" name="follow" size="20px" />
      </Flex>
    </Button>
  );
};
