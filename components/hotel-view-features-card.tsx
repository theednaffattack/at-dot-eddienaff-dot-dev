import React from "react";
import { CardProps } from "rebass/styled-components";

import { Card } from "./primitives/styled-rebass";

interface HotelViewFeaturesCardProps {
  bg?: CardProps["bg"];
}

export const HotelViewFeaturesCard: React.FC<HotelViewFeaturesCardProps> = ({}) => {
  return (
    <Card
      my={1}
      sx={{
        boxShadow: "0px 13px 13px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      FEATURES / AMENITIES
    </Card>
  );
};
