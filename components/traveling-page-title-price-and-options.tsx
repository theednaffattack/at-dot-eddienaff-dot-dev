import React from "react";

import { Flex, Text } from "./primitives/styled-rebass";
import Icon from "./icon";
import Link from "next/link";
import { HotelInterface } from "./traveling-page-component";

interface TravelingPageTitlePriceAndOptionsProps
  extends Partial<HotelInterface> {
  asPath: string;
  href: string;
}

export const TravelingPageTitlePriceAndOptions: React.FC<TravelingPageTitlePriceAndOptionsProps> = ({
  asPath,
  coordinates,
  href,
  name,
  original_price,
  price,
  referer,
}) => {
  return (
    <Flex mb="auto" alignItems="center">
      <Flex mr="auto" flexDirection="column">
        <Text as="h1" fontSize={4}>
          <Link
            href={`${href}?referer=${referer}&viewHotelModal=isOpen&coordinates=${coordinates}&price=${price}&name=${name}`}
            as={asPath}
          >
            <a style={{ textDecoration: "none" }}>{name}</a>
          </Link>
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
