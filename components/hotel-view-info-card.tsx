import React from "react";
import { CardProps } from "rebass/styled-components";

import { Card } from "./primitives/styled-rebass";

interface HotelViewInfoCardProps {
  bg?: CardProps["bg"];
}

export const HotelViewInfoCard: React.FC<HotelViewInfoCardProps> = ({ bg }) => {
  return (
    <Card
      bg={bg}
      my={1}
      sx={{
        boxShadow: "0px 13px 13px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      INFO (weather, reviews, etc)
    </Card>
  );
};
