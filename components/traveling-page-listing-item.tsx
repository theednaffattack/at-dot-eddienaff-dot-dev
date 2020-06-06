import React from "react";

import { Flex, Image } from "./primitives/styled-rebass";
import { TravelingPageTitlePriceAndOptions } from "./traveling-page-title-price-and-options";
import { TravelingPageLocationLikesAndComments } from "./traveling-page-location-like-and-comments";
import { HotelInterface } from "./traveling-page-component";

interface TravelingPageListingItemProps extends HotelInterface {}

export const TravelingPageListingItem: React.FC<TravelingPageListingItemProps> = ({
  city,
  comments,
  // id,
  images,
  likes,
  name,
  price,
  original_price,
}) => {
  return (
    <Flex width={[1, 1, 1, 1, 1 / 2, 1 / 2, 1 / 2]} pl={4} pb={3} pr={4}>
      <Flex
        borderRadius="10px"
        bg="#fff"
        minHeight="150px"
        maxHeight="175px"
        p={3}
        sx={{
          boxShadow: "0px 10px 27px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Flex width={1 / 3}>
          {images
            ? images.map((image) => (
                <Image src={image.uri} sx={image.sx ? image.sx : null} />
              ))
            : null}
        </Flex>
        <Flex width={2 / 3} pl={3} flexDirection="column">
          <TravelingPageTitlePriceAndOptions
            name={name}
            price={price}
            original_price={original_price ?? ""}
          />
          <TravelingPageLocationLikesAndComments
            city={city}
            comments={comments}
            likes={likes}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
