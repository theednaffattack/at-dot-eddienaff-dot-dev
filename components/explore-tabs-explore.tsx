import React from "react";

import { ExploreTabsProps } from "./explore-page-component";
import {
  CarouselContainerWithoutFavoriteButton,
  CarouselChild,
} from "./example-florian-rappl-carousel-too";
import { ExploreCarouselOverlay } from "./explore-carousel-overlay";
import Icon from "./icon";
import { Button, Flex, Image, Text } from "./primitives/styled-rebass";
import { ExploreFeatureCardList } from "./explore-feature-card-list";
import { fauxFeatureCards } from "./helpers";
import { ExplorePlacesToVisit } from "./explore-places-to-visit";

export const ExploreTabExplore: React.FC<ExploreTabsProps> = ({}) => {
  // const laneWidths = [1, 1, 1, 1, 1 / 2, 1 / 2, 1 / 2];

  // const imageMarginRight = [0, 0, 0, 0, 3, 3, 3];

  // const laneMarginTops = [1, 1, 1, 1, 4, 4, 4];

  return (
    <Flex
      width={1}
      mt={2}
      height="100%"
      flexDirection="column"
      bg="#eee"
      // flex={1}
    >
      <Flex
        // flexDirection="column"
        // pb={5}
        // pr={imageMarginRight}
        // width={laneWidths}
        // minHeight="300px"
        overflow="hidden"
        sx={{ position: "relative" }}
      >
        <CarouselContainerWithoutFavoriteButton>
          <CarouselChild>
            <ExploreCarouselOverlay
              price="$967"
              location="Rhode Island"
              tagline="Some tagline"
            >
              <Button
                type="button"
                width="150px"
                color="black"
                bg="#f2f2f2"
                borderRadius="20px"
                mt={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={(event) =>
                  console.log("carousel slide button clicked", {
                    target: event.target,
                    currentTarget: event.currentTarget,
                  })
                }
              >
                <Text> Get 'em</Text>&nbsp;
                <Icon
                  active={false}
                  fill="rgba(58,58,58,0.5)"
                  name="arrow_right"
                  size="12px"
                />
              </Button>
            </ExploreCarouselOverlay>
            <Image
              src="https://source.unsplash.com/random/1024x768?boat"
              srcSet=""
            />
          </CarouselChild>
          <CarouselChild>
            <ExploreCarouselOverlay
              price="$90"
              location="Downtown Bakersfield"
              tagline="Adventure awaits... I guess"
            />
            <Image src="https://source.unsplash.com/random/1024x768?sky" />
          </CarouselChild>
          <CarouselChild>
            <Image
              src="https://source.unsplash.com/random/1024x768?train"
              srcSet=""
            />
          </CarouselChild>
        </CarouselContainerWithoutFavoriteButton>
      </Flex>
      <Flex p={3} minHeight="70px">
        <Text as="h2" mr="auto">
          Featured
        </Text>
        <Button
          type="button"
          width="120px"
          borderRadius="20px"
          onClick={() => console.log("SEE ALL (FEATURED), CLICKED")}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text mr={1}>See all</Text>
          <Icon
            active={false}
            fill="rgba(255,255,255,0.5)"
            name="arrow_right"
            size="15px"
          />
        </Button>
      </Flex>
      {/* START - FEATURE CARDS */}

      <ExploreFeatureCardList data={fauxFeatureCards} />
      {/* END - FEATURE CARDS */}
      {/* START - PLACES TO VISIT SECTION */}
      <ExplorePlacesToVisit />
      {/* END - PLACES TO VISIT SECTION */}
    </Flex>
  );
};

export default ExploreTabExplore;
