import React from "react";

import {
  Card,
  CustomButton,
  Text,
  Flex,
  Box,
} from "./primitives/styled-rebass";
import {
  HotelViewCardProps,
  OverlayModalsActions,
  OverlayModalsStateInterface,
} from "./hotel-view-modal";
import Icon from "./icon";
import { ParsedUrlQueryValue } from "../hooks/use-params";

interface HotelViewMapViewCardProps extends HotelViewCardProps {
  coordinates: number[][];
  name: ParsedUrlQueryValue;
  overlayModalsDispatch: React.Dispatch<OverlayModalsActions>;
  overlayModalsState: OverlayModalsStateInterface;
  price: number;
}

export const HotelViewMapViewCard: React.FC<HotelViewMapViewCardProps> = ({
  bg,
  coordinates,
  name,
  overlayModalsDispatch,
  // overlayModalsState,
  price,
  p,
  // router,
  width,
}) => {
  return (
    <Card
      width={width}
      my={1}
      p={p}
      bg={bg}
      sx={{
        boxShadow: "0px 13px 13px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Flex flexDirection="column">
        <Text pb={3} fontWeight="bold">
          Where is that
        </Text>

        <Flex>
          <Flex>
            <Icon active={false} fill="" name="mapDot" size="50px" />
          </Flex>
          <Flex flexDirection="column">
            <Text
              fontWeight="bold"
              fontSize={2}
              sx={{ textTransform: "uppercase" }}
            >
              address
            </Text>
            <Box pb={3} color="rgba(34,34,34,.5)">
              <Text>1529 Taylor Street, New York NYC</Text>
              <Text>10011, United States</Text>
            </Box>
            <CustomButton
              backgroundColor="#d23078"
              backgroundImage="linear-gradient(
                        0deg,
                        rgba(210, 48, 120, 0.2),
                        rgba(254, 97, 97, 0.2),
                        rgba(255, 121, 85, 0.2)
                      )"
              boxShadow="0px 10px 27px 0px rgba(0, 0, 0, 0.1)"
              borderRadius="23px"
              width="auto"
              height="40px"
              type="submit"
              onClick={
                () =>
                  overlayModalsDispatch({
                    type: "openMapViewOverlay",
                    data: { coordinates, name, price },
                  })
                // router.push(
                //   `/traveling?mapViewModal=isOpen&referer=/traveling&coordinates=${coordinates[0]}&name=${name}&price=${price}`,
                //   "/traveling"
                // )
              }
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text fontFamily="main" mr={2}>
                Check it
              </Text>
              <Icon
                fill="rgba(255,255,255,0.5"
                size="15px"
                name="arrow_right"
                active={false}
              />
            </CustomButton>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};
