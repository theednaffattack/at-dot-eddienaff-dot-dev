import React from "react";
import styled from "styled-components";

import {
  CarouselContainerWithFavoriteButton,
  CarouselChild,
} from "./example-florian-rappl-carousel-too";
import { Flex, Image } from "./primitives/styled-rebass";

interface HotelViewLeftLaneProps {
  imageMarginRight: number[];
  laneWidths: number[];
}

// @ts-ignore
const Slide = styled.div<{ bgImage?: string }>`
  height: 500px;
  max-height: 70vh;
  background-color: black;
  background-image: ${({ bgImage }) => (bgImage ? bgImage : null)};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: 2px limegreen solid;
`;

export const HotelViewLeftLane: React.FC<HotelViewLeftLaneProps> = ({
  imageMarginRight,
  laneWidths,
}) => {
  return (
    <Flex
      flexDirection="column"
      pr={imageMarginRight}
      width={laneWidths}
      sx={{ position: "relative" }}
    >
      <CarouselContainerWithFavoriteButton>
        <CarouselChild>
          <Image
            src="https://source.unsplash.com/random/1024x768?boat"
            srcSet=""
          />
        </CarouselChild>
        <CarouselChild>
          <Image src="https://source.unsplash.com/random/1024x768?sky" />
        </CarouselChild>
        <CarouselChild>
          <Image
            src="https://source.unsplash.com/random/1024x768?train"
            srcSet=""
          />
        </CarouselChild>
      </CarouselContainerWithFavoriteButton>
    </Flex>
  );
};
