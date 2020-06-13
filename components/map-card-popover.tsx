import React from "react";
import {
  AbFlex,
  CustomButton,
  Box,
  Button,
  Image,
  StyledHr,
  Text,
} from "./primitives/styled-rebass";
import { Hotel } from "../__generated__/__intermediate__/lib/subscriptions/new-message.graphql-e9d1ecf649bc813fdb2afa757add0dc67efddc8f";
import Icon from "./icon";

interface MapCardPopoverProps {
  getDirections: React.Dispatch<
    React.SetStateAction<"init" | "isRequesting" | "hasRequested">
  >;
  info: Hotel;
  setPopupVisible: React.Dispatch<
    React.SetStateAction<"isHidden" | "isVisible">
  >;
}

export const MapCardPopover: React.FC<MapCardPopoverProps> = ({
  getDirections,
  info,
  setPopupVisible,
}) => {
  return (
    <React.Fragment>
      <Button
        type="button"
        onClick={() => setPopupVisible("isHidden")}
        p={0}
        bg="white"
        height="40px"
        width="40px"
        sx={{
          alignItems: "center",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          right: -20,
          top: -20,
          zIndex: 200,
        }}
      >
        <Icon active={false} name="close" fill="#aaa" size="15px" />
      </Button>
      <Box
        width={["150px", "150px", "200px", "300px", "400px", "400px"]}
        sx={{
          position: "relative",
        }}
      >
        {/* <AbFlex
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
        </AbFlex> */}
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
            boxShadow: "0px 10px 13px 0px rgba(0, 0, 0, 0.15)",
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
          <Text fontSize={[3, 3, 3, 3, 4, 4, 4]}>{info.name}</Text>
          <Text>{info.distanceKm} Km Away</Text>
        </Box>
        <StyledHr width="100%" />
        <Box>
          <Text
            fontSize={2}
            fontWeight="bold"
            my={2}
            sx={{ textTransform: "uppercase" }}
          >
            Address
          </Text>
          <Text>
            {info.address} {info.city}, {info.state}
          </Text>
          <Text>{info.zipCode}, United States</Text>
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
          onClick={() => getDirections("isRequesting")}
        >
          <Text>Get Directions</Text>
        </CustomButton>
      </AbFlex>
    </React.Fragment>
  );
};

export default MapCardPopover;
