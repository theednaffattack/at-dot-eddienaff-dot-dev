import React from "react";
// import { CardProps } from "rebass/styled-components";

import { Card, CustomButton } from "./primitives/styled-rebass";
import { HotelViewCardProps } from "./hotel-view-modal";

interface HotelViewListCardProps extends HotelViewCardProps {
  router: any;
}

export const HotelViewListCard: React.FC<HotelViewListCardProps> = ({
  bg,
  p,
  width,
}) => {
  return (
    <Card
      width={width}
      p={p}
      bg={bg}
      my={1}
      sx={{
        boxShadow: "0px 13px 13px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      LIST / BEFORE YOU GO
      <CustomButton>Book a Room</CustomButton>
    </Card>
  );
};
