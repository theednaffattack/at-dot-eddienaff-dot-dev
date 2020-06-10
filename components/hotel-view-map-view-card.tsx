import React from "react";

import {
  Card,
  CustomButton,
  Text,
  Flex,
  Box,
} from "./primitives/styled-rebass";
import { HotelViewCardProps } from "./hotel-view-modal";
import Icon from "./icon";

interface HotelViewMapViewCardProps extends HotelViewCardProps {
  router: any;
}

export const HotelViewMapViewCard: React.FC<HotelViewMapViewCardProps> = ({
  bg,
  p,
  router,
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
              onClick={() =>
                router.push(
                  "/traveling?mapViewModal=isOpen&referer=/traveling",
                  "/traveling"
                )
              }
            >
              Check it >
            </CustomButton>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};
