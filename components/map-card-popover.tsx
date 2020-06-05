import React from "react";
import {
  AbFlex,
  Card,
  CustomButton,
  Box,
  Button,
  Image,
  StyledHr,
  Text,
} from "./primitives/styled-rebass";

import Icon from "./icon";

interface MapCardPopoverProps {}

export const MapCardPopover: React.FC<MapCardPopoverProps> = ({}) => {
  return (
    <AbFlex
      position="absolute"
      right={0}
      bottom={160}
      mr={[3, 3, 3, 3, 3, 3, 6]}
      flexDirection="column"
      width={[1 / 2, 1 / 2, 1 / 2, 1 / 2, "600px", "600px"]}
    >
      <Card
        bg="#f2f2f2"
        p={0}
        sx={{
          position: "relative",
          boxShadow: "0px 27px 53px 0px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <AbFlex
            position="absolute"
            borderRadius="3px"
            bottom={-7.5}
            left={-7.5}
            height="15px"
            width="15px"
            bg="#f2f2f2"
            sx={{
              transform: "rotate(45deg)",
            }}
          >
            {" "}
          </AbFlex>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1587148987975-47786588f0e0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=800"
              srcSet=""
              tabIndex={1}
            />
          </Box>
          <Box
            borderRadius="50%"
            bg="#fff"
            height="50px"
            width="50px"
            sx={{
              position: "absolute",
              right: [0, 0, 0, 0, 50],
              bottom: -25,
              boxShadow: "0px 20px 33px 0px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Button
              borderRadius="50%"
              bg="#fff"
              height="50px"
              width="50px"
              type="button"
              onClick={() => {}}
              sx={{
                alignContent: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Icon
                active={false}
                name="call_button"
                size="30px"
                fill="#f4327f"
              />
            </Button>
          </Box>
        </Box>
        <Box p={[2, 2, 2, 2, 2, 2, 4]}>
          <Box>
            <Text fontSize={3}>Mt. Catlin Hotel</Text>
            <Text>1.2 Km Away</Text>
          </Box>
          <StyledHr width="100%" />
          <Box>
            <Text sx={{ textTransform: "uppercase" }}>Address</Text>
            <Text>1529 Taylor Street, New York NYC</Text>
            <Text>10011, United States</Text>
          </Box>
        </Box>
        <AbFlex
          position="absolute"
          bottom={-17.5}
          width={1}
          justifyContent="center"
          alignItems="center"
        >
          <CustomButton
            width="200px"
            height="35px"
            borderRadius="18px"
            alignSelf="center"
            backgroundColor="#d23078"
            backgroundImage="linear-gradient(
      0deg,
      rgba(210, 48, 120, 0.2),
      rgba(254, 97, 97, 0.2),
      rgba(255, 121, 85, 0.2)
    )"
          >
            <Text>Get Directions</Text>
          </CustomButton>
        </AbFlex>
      </Card>
    </AbFlex>
  );
};
