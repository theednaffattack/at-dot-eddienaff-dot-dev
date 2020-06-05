// adapted from: https://github.com/FlorianRappl/react-carousel-hook-example/blob/master/src/DemoCarousel.tsx
import * as React from "react";
import styled from "styled-components";

import { useCarousel } from "./use-carousel";

const Carousel = styled.div`
  position: relative;
  border: 2px pink dashed;
  overflow: hidden;
`;

const CarouselIndicators = styled.ol`
  position: absolute;
  right: 0;
  bottom: 0.5em;
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
  width: 1.5em;
  height: 0.3em;
  margin: 0 0.3em;
  background: ${({ active }) =>
    active === "isActive" ? "pink" : "rgba(0,0,0,0.3)"};
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
  height: 500px;
  border: 2px crimson solid;
`;

const CarouselItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  border: 2px limegreen dashed;
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

  console.log({ slides, length, numActive, active });
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
            <CarouselChild key={i}>{slides[i]}</CarouselChild>
          ))}
          {slides.map((slide, index) => (
            <CarouselChild key={index}>{slide}</CarouselChild>
          ))}
          {afterIndices.map((i) => (
            <CarouselChild key={i}>{slides[i]}</CarouselChild>
          ))}
        </CarouselContent>
      </Carousel>
    );
  }
  return <div>NO SLIDES</div>;
};

export interface CarouselChildProps {}

export const CarouselChild: React.FC<CarouselChildProps> = ({ children }) => (
  <CarouselItem>{children}</CarouselItem>
);
