import React from "react";

import { Flex, Text, Button } from "./primitives/styled-rebass";
import Icon from "./icon";
import { Hotels } from "./helpers";
import { TravelingPageListingItem } from "./traveling-page-listing-item";
import { ExploreNewsletterSignup } from "./explore-newsletter-signup";
import { ExplorePlacesToVisitLargeCard } from "./explore-places-to-vist-large-card";

interface ExplorePlacesToVisitProps {}

export const ExplorePlacesToVisit: React.FC<ExplorePlacesToVisitProps> = ({}) => {
  const asPath = "/explore";
  const href = "/explore";
  const referer = "/explore&tab=Explore";
  return (
    <Flex flexDirection="column" sx={{ position: "relative" }}>
      <Flex p={3}>
        <Text as="h2" mr="auto">
          Places to Visit
        </Text>
      </Flex>
      {/* START - PLACES TO VISIT LARGE CARD */}
      <ExplorePlacesToVisitLargeCard />
      {/* END - PLACES TO VISIT LARGE CARD */}
      <Flex
        px={3}
        as="ul"
        m={0}
        flexDirection="column"
        sx={{ position: "relative" }}
      >
        {Hotels.map((hotel) => (
          <TravelingPageListingItem
            key={hotel.id}
            asPath={asPath}
            city={hotel.city}
            comments={hotel.comments}
            coordinates={hotel.coordinates}
            href={href}
            id={hotel.id}
            images={hotel.images}
            likes={hotel.likes}
            name={hotel.name}
            original_price={hotel.original_price}
            price={hotel.price}
            referer={referer}
          />
        ))}
      </Flex>

      <Flex
        flexDirection="column"
        minHeight="250px"
        width={1}
        sx={{
          position: "relative",
          // bottom: 0,
          // left: 0,
          // right: 0,
        }}
      >
        <Flex flexDirection="column" alignItems="center" my={3}>
          <Button
            type="button"
            width={1 / 3}
            borderRadius="25px"
            onClick={() =>
              console.log("ALL TRIPS CLICKED - PLACES TO VISIT (EXPLORE PAGE)")
            }
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            All Trips{" "}
            <Icon
              active={false}
              name="arrow_right"
              fill="rgba(255,255,255,0.5)"
              size="15px"
            />
          </Button>
        </Flex>
        <ExploreNewsletterSignup />
      </Flex>
    </Flex>
  );
};
