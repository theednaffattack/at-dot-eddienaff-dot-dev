import React from "react";

import { Card, CustomButton, Box, Text } from "./primitives/styled-rebass";
import { HotelViewCardProps } from "./hotel-view-modal";
import {
  AuthorizedLayoutModalOverlayState,
  AuthorizedLayoutModalOverlayActions,
} from "./layout-authorized";

interface HotelViewListCardProps extends HotelViewCardProps {
  modalState: AuthorizedLayoutModalOverlayState["selectDate"];
  modalDispatch: React.Dispatch<AuthorizedLayoutModalOverlayActions>;
}

const roomRules = [
  "Payment at checkout",
  "Wi-Fi network is off by 12:00pm",
  "No swimming after 10:00pm",
  "No more than 2 bags of luggage",
  "No singing while showering",
  "No refunds",
];

export const HotelViewListCard: React.FC<HotelViewListCardProps> = ({
  bg,
  modalDispatch,
  // modalState,
  p,
  // router,
  width,
}) => {
  return (
    <Card
      width={width}
      p={p}
      bg={bg}
      mt={1}
      mb={4}
      sx={{
        boxShadow: "0px 13px 13px 0px rgba(0, 0, 0, 0.05)",
        position: "relative",
      }}
    >
      <Text fontWeight="bold">Before you go</Text>
      <ul
        color="#888"
        style={{
          listStyle: "url(/images/horizontal-line.svg)",
        }}
      >
        {roomRules.map((rule, rulesIndex) => (
          <li key={rulesIndex + "-" + rule}>{rule}</li>
        ))}
      </ul>
      <Box
        width="100%"
        sx={{
          position: "relative",
          bottom: -30,
          // left: 0,
          // right: 0,
          // outline: "2px limegreen solid",
        }}
      >
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
          width="100%"
          height="40px"
          type="submit"
          onClick={() =>
            modalDispatch({
              action: "overlayModalOpen",
              type: "selectDateOpen",
            })
          }
        >
          <Text fontFamily="main"> Book a Room</Text>
        </CustomButton>
      </Box>
    </Card>
  );
};
