import React from "react";

import { Flex, Image } from "./primitives/styled-rebass";
import { TravelingPageTitlePriceAndOptions } from "./traveling-page-title-price-and-options";
import { TravelingPageLocationLikesAndComments } from "./traveling-page-location-like-and-comments";
import { HotelInterface } from "./traveling-page-component";
import { ClonedChildrenFromAuthLayout } from "../pages/traveling";

interface TravelingPageListingItemProps
  extends HotelInterface,
    Partial<ClonedChildrenFromAuthLayout> {
  asPath: string;
  href: string;
}

export const TravelingPageListingItem: React.FC<TravelingPageListingItemProps> = ({
  asPath,
  city,
  comments,
  coordinates,
  href,
  images,
  likes,
  modalOverlayDispatch,
  modalOverlayState,
  name,
  price,
  original_price,
  referer,
}) => {
  return (
    <Flex
      width={[1, 1, 1, 1, 1 / 2, 1 / 2, 1 / 2]}
      px={[0, 0, 0, 0, 3, 3, 4]}
      pb={3}
    >
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
                <Image
                  key={image.id}
                  src={image.uri}
                  sx={image.sx ? image.sx : null}
                />
              ))
            : null}
        </Flex>
        <Flex width={2 / 3} pl={3} flexDirection="column">
          <TravelingPageTitlePriceAndOptions
            asPath={asPath}
            href={href}
            modalOverlayDispatch={modalOverlayDispatch}
            modalOverlayState={modalOverlayState}
            name={name}
            price={price}
            original_price={original_price ?? ""}
            coordinates={coordinates}
            referer={referer}
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
