import React from "react";
import { Card, CardProps } from "rebass/styled-components";

import { CustomButton } from "./primitives/styled-rebass";

interface HotelViewMapViewCardProps {
  bg: CardProps["bg"];
  router: any;
}

export const HotelViewMapViewCard: React.FC<HotelViewMapViewCardProps> = ({
  bg,
  router,
}) => {
  return (
    <Card
      my={1}
      bg={bg}
      sx={{
        boxShadow: "0px 13px 13px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <CustomButton
        type="button"
        onClick={() =>
          router.push("/test?mapViewModal=isOpen&referer=/test", "/test")
        }
      >
        Check it >
      </CustomButton>
    </Card>
  );
};
