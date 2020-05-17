import React from "react";
import { CardProps } from "rebass/styled-components";

import { Card, CustomButton } from "./primitives/styled-rebass";

interface HotelViewListCardProps {
  bg: CardProps["bg"];
  router: any;
}

export const HotelViewListCard: React.FC<HotelViewListCardProps> = ({ bg }) => {
  return (
    <Card
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
