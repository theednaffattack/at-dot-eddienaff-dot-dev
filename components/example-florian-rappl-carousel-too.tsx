// adapted from: https://github.com/FlorianRappl/react-carousel-hook-example/blob/master/src/DemoCarousel.tsx
import * as React from "react";
import styled from "styled-components";

import { useCarousel } from "./use-carousel";
import { CustomButton } from "./primitives/styled-rebass";
import Icon from "./icon";
// import { CustomButton } from "./primitives/styled-rebass";
// import Icon from "./icon";

const Carousel = styled.div`
  position: relative;
  overflow: hidden;
  /* outline: 2px pink solid; */
`;

const CarouselIndicators = styled.ol`
  position: absolute;
  right: 0;
  bottom: 20px;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  padding-left: 0;
  list-style: none;
  margin: 0 auto;
`;

const CarouselIndicatorSingle = styled.div<{
  active: "isActive" | "isNotActive";
}>`
  position: relative;
  flex: 0 1 auto;
  width: 10px;
  height: 10px;
  margin: 0 0.3em;
  border-radius: 50%;
  background: ${({ active }) =>
    active === "isActive" ? "rgba(255,255,255,1)" : "rgba(255,255,255,.5)"};
  cursor: ${({ active }) => (active === "isActive" ? "pointer" : "default")};
  &:hover {
    background: rgba(255, 192, 203, 0.5);
  }
`;

const CarouselContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  height: auto;
  /* height: 500px; */
`;

const CarouselItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
`;

function makeIndices(start: number, delta: number, num: number) {
  const indices: Array<number> = [];

  while (indices.length < num) {
    indices.push(start);
    start += delta;
  }

  return indices;
}

export interface CarouselContainerProps {
  interval?: number;
  slidesPresented?: number;
}

export const CarouselContainer: React.FC<CarouselContainerProps> = ({
  children,
  slidesPresented = 1,
  interval = 5000,
}) => {
  const slides = React.Children.toArray(children);
  const length = slides.length;
  const numActive = Math.min(length, slidesPresented);
  const [active, setActive, handlers, style] = useCarousel(length, interval, {
    slidesPresented: numActive,
  });
  const beforeIndices = makeIndices(slides.length - 1, -1, numActive);
  const afterIndices = makeIndices(0, +1, numActive);

  // console.log({ slides, length, numActive, active });
  if (length > 0) {
    return (
      <Carousel>
        <CarouselIndicators>
          {slides.map((_, index) => (
            <CarouselIndicatorSingle
              onClick={() => setActive(index)}
              key={index}
              active={active === index ? "isActive" : "isNotActive"}
            />
          ))}
        </CarouselIndicators>
        <CarouselContent {...handlers} style={style}>
          {beforeIndices.map((i) => (
            <CarouselChild key={i + "-before"}>{slides[i]}</CarouselChild>
          ))}
          {slides.map((slide, index) => (
            <CarouselChild key={index + "-slide-child"}>{slide}</CarouselChild>
          ))}
          {afterIndices.map((i) => (
            <CarouselChild key={i + "-after"}>{slides[i]}</CarouselChild>
          ))}
        </CarouselContent>

        <CustomButton
          width="50px"
          height="50px"
          borderRadius="50%"
          alignSelf="center"
          bg="#fff"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            zIndex: 9000,
            // right: 30,
            // bottom: 30,
            bottom: [3, 3, 3, 3, 3, 3, 3],
            right: [3, 3, 3, 3, 3, 3, 3],
          }}
        >
          <Icon
            name="bookmarkOutline"
            fill="fuchsia"
            size="20px"
            active={false}
          />
        </CustomButton>
      </Carousel>
    );
  }
  return <div>NO SLIDES</div>;
};

export interface CarouselChildProps {}

export const CarouselChild: React.FC<CarouselChildProps> = ({ children }) => (
  <CarouselItem>{children}</CarouselItem>
);
