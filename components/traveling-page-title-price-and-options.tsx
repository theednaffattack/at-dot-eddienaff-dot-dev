import React from "react";

import { Flex, Text } from "./primitives/styled-rebass";
import Icon from "./icon";
import Link from "next/link";

interface TravelingPageTitlePriceAndOptionsProps {
  name: string;
  original_price: string;
  price: string;
}

export const TravelingPageTitlePriceAndOptions: React.FC<TravelingPageTitlePriceAndOptionsProps> = ({
  name,
  original_price,
  price,
}) => {
  return (
    <Flex mb="auto" alignItems="center">
      <Flex mr="auto" flexDirection="column">
        <Text as="h1" fontSize={4}>
          <Link
            href="/traveling?viewHotelModal=isOpen&referer=/traveling"
            as="/traveling"
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
      <Icon active={false} name="more" size="17px" fill="#aaa" />
    </Flex>
  );
};