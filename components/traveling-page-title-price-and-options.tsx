import React from "react";

import { Flex, Text } from "./primitives/styled-rebass";
import Icon from "./icon";
// import Link from "next/link";
import { HotelInterface } from "./traveling-page-component";
import { ClonedChildrenFromAuthLayout } from "../pages/traveling";

interface TravelingPageTitlePriceAndOptionsProps
  extends Partial<HotelInterface>,
    Partial<ClonedChildrenFromAuthLayout> {
  asPath: string;
  href: string;
}

export const TravelingPageTitlePriceAndOptions: React.FC<TravelingPageTitlePriceAndOptionsProps> = ({
  // asPath,
  coordinates,
  // href,
  // referer,
  modalOverlayDispatch,
  // modalOverlayState,
  name,
  original_price,
  price,
}) => {
  return (
    <Flex mb="auto" alignItems="center">
      <Flex mr="auto" flexDirection="column">
        <Text as="h1" fontSize={4}>
          {/* <Link
            href={`${href}?referer=${referer}&viewHotelModal=isOpen&coordinates=${coordinates}&price=${price}&name=${name}`}
            as={asPath}
          > */}
          <a
            href="#"
            style={{ textDecoration: "none" }}
            onClick={(event) => {
              event.preventDefault();
              if (modalOverlayDispatch && coordinates && name && price) {
                modalOverlayDispatch({
                  action: "overlayModalOpen",
                  type: "hotelViewerModalOpen",
                  data: { coordinates, name, price },
                });
              }
            }}
          >
            {name}
          </a>
          {/* </Link> */}
        </Text>
        <Flex>
          <Text>{price}</Text>
          <Text
            ml={2}
            sx={{
              textDecoration: "line-through",
            }}
          >
            {original_price}
          </Text>
        </Flex>
      </Flex>
      <Icon active={false} name="more_vertical" size="17px" fill="#aaa" />
    </Flex>
  );
};
