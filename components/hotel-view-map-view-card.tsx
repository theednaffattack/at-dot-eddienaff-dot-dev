import React from "react";
import { Card } from "rebass/styled-components";

import { CustomButton } from "./primitives/styled-rebass";
import { HotelViewCardProps } from "./hotel-view-modal";

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
