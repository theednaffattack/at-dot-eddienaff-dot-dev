import React from "react";
// import { CardProps } from "rebass/styled-components";

import { Card } from "./primitives/styled-rebass";
import { HotelViewCardProps } from "./hotel-view-modal";

// interface HotelViewInfoCardProps {
//   bg?: CardProps["bg"];
// }

export const HotelViewInfoCard: React.FC<HotelViewCardProps> = ({
  bg,
  p,
  width,
}) => {
  return (
    <Card
      width={width}
      bg={bg}
      my={1}
      p={p}
      sx={{
        boxShadow: "0px 13px 13px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      INFO (weather, reviews, etc)
    </Card>
  );
};
