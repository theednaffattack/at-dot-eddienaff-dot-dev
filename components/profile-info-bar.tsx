import React from "react";
import { Flex, Text } from "./primitives/styled-rebass";

interface InfoBarProps {}

export const ProfileInfoBar: React.FC<InfoBarProps> = ({}) => {
  const infoBarHeightPx = 65;
  return (
    <Flex
      minHeight={`${infoBarHeightPx}px`}
      justifyContent="center"
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0 - infoBarHeightPx / 2,
        zIndex: 15,
      }}
    >
      <Flex
        bg="#f2f2f2"
        width={0.8}
        sx={{
          borderRadius: "10px",
          boxShadow: "0px 20px 33px 0px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width={1 / 3}
          sx={{}}
        >
          <Text color="#444">7k</Text>
          <Text
            color="#222"
            fontSize="10px"
            sx={{ textTransform: "uppercase" }}
          >
            followers
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width={1 / 3}
          sx={{}}
        >
          <Text color="#444">1.7k</Text>
          <Text
            color="#222"
            fontSize="10px"
            sx={{ textTransform: "uppercase" }}
          >
            following
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width={1 / 3}
          sx={{}}
        >
          <Text color="#444">48</Text>
          <Text
            color="#222"
            fontSize="10px"
            sx={{ textTransform: "uppercase" }}
          >
            trips
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
