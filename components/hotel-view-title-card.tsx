import React from "react";
import { CardProps } from "rebass/styled-components";

import { Card } from "./primitives/styled-rebass";

interface HotelViewTitleCardProps {
  bg?: CardProps["bg"];
}

export const HotelViewTitleCard: React.FC<HotelViewTitleCardProps> = ({
  bg,
}) => {
  return <Card bg={bg}>ONE</Card>;
};
