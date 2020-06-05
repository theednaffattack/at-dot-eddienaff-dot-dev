import React from "react";

import { useCarousel } from "./example-florian-rappl-carousel";

export interface FakeSlide {
  title: string;
  message: string;
  id: string;
}

interface HotelViewHooksCarouselProps {
  slides: FakeSlide[];
  interval: number;
}

export const HotelViewHooksCarousel: React.FC<HotelViewHooksCarouselProps> = ({
  slides,
  interval = 5000,
}) => {
  const length = slides.length;
  const [active, setActive, handlers, style] = useCarousel(length, interval);
  if (length > 0) {
    return (
      <div
        className="carousel"
        style={{
          border: "2px pink dashed",
          overflow: "hidden",
          width: "100%",
          display: "flex",
        }}
      >
        <ol
          className="carousel-indicators"
          style={{ border: "2px limegreen dashed", position: "absolute" }}
        >
          {slides.map((_, index) => (
            <li
              onClick={() => setActive(index)}
              key={index}
              className={`${active === index ? "active" : ""}`}
            />
          ))}
        </ol>
        <div
          className="carousel-content"
          {...handlers}
          style={{ ...style, display: "flex" }}
        >
          <div
            className="carousel-item"
            style={{ border: "2px crimson solid" }}
            key={slides[slides.length - 1].id}
          >
            {slides[slides.length - 1].title}
          </div>
          {slides.map((slide) => (
            <div className="carousel-item" key={slide.id}>
              {slide.title}
            </div>
          ))}
          <div
            className="carousel-item"
            style={{ border: "2px crimson solid" }}
          >
            {slides[0].title}
          </div>
        </div>
      </div>
    );
  }
  return <div>no slides</div>;
};
