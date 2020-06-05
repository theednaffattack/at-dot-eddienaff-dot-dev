import React from "react";
import styled, { keyframes } from "styled-components";
import { Flex } from "./primitives/styled-rebass";

interface HotelViewSimpleCarouselProps {}

const SlideItems = ["one", "two", "three"];

export const HotelSimpleViewCarousel: React.FC<HotelViewSimpleCarouselProps> = ({}) => {
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  return (
    <SlideshowContainer>
      {/* <MySlides>
        <NumberText>1 / 3</NumberText>
        <img
          src="https://source.unsplash.com/random/1024x768?sky"
          style={{ width: "100%" }}
        />
        <CaptionText>Caption text</CaptionText>
      </MySlides> */}
      {SlideItems.map((thing, index) => {
        const getImage = "https://source.unsplash.com/random/1024x768?sky";
        return (
          <MySlides currentSlide={currentSlide} index={index} key={thing}>
            <NumberText>
              {currentSlide + 1} / {SlideItems.length}
            </NumberText>
            <img src={getImage} style={{ width: "100%" }} />
            <CaptionText>caption {thing}</CaptionText>
          </MySlides>
        );
      })}
      <Prev
        onClick={() => {
          if (currentSlide === 0) {
            setCurrentSlide(SlideItems.length - 1);
            return;
          }
          setCurrentSlide(currentSlide - 1);
        }}
      >
        &#10094;
      </Prev>
      <Next
        onClick={() => {
          if (currentSlide + 1 === SlideItems.length) {
            setCurrentSlide(0);
            return;
          }
          setCurrentSlide(currentSlide + 1);
        }}
      >
        &#10095;
      </Next>
      <Flex
        width={1}
        alignItems="center"
        justifyContent="center"
        sx={{ position: "absolute", bottom: 20, textAlign: "center" }}
        border="lime"
      >
        {SlideItems.map((_, index) => (
          <Dot
            active={currentSlide === index}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </Flex>
    </SlideshowContainer>
  );
};

const fade = keyframes`
  from {opacity: .4}
  to {opacity: 1}
`;

const SlideshowContainer = styled.div`
  max-width: 1000px;
  position: relative;
  /* margin: auto; */
  border: 2px pink solid;
`;

const MySlides = styled.div<{ currentSlide: number; index: number }>`
  display: ${({ currentSlide, index }) =>
    currentSlide === index ? "block" : "none"};
  animation: ${fade} 1.5s;
`;

const Next = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;

  right: 0;
  border-radius: 3px 0 0 3px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const CaptionText = styled.div`
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
`;

const NumberText = styled.div`
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
`;

const Prev = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const Dot = styled.span<{ active: boolean }>`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: ${({ active }) => (active ? "#717171" : "#bbb")};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  &:hover {
    background-color: #717171;
  }
`;

// /* Slideshow container */
// .slideshow-container {
//   max-width: 1000px;
//   position: relative;
//   margin: auto;
// }

// /* Hide the images by default */
// .mySlides {
//   display: none;
// }

// /* Next & previous buttons */
// .prev, .next {
//   cursor: pointer;
//   position: absolute;
//   top: 50%;
//   width: auto;
//   margin-top: -22px;
//   padding: 16px;
//   color: white;
//   font-weight: bold;
//   font-size: 18px;
//   transition: 0.6s ease;
//   border-radius: 0 3px 3px 0;
//   user-select: none;
// }

// /* Position the "next button" to the right */
// .next {
//   right: 0;
//   border-radius: 3px 0 0 3px;
// }

// /* On hover, add a black background color with a little bit see-through */
// .prev:hover, .next:hover {
//   background-color: rgba(0,0,0,0.8);
// }

// /* Caption text */
// .text {
//   color: #f2f2f2;
//   font-size: 15px;
//   padding: 8px 12px;
//   position: absolute;
//   bottom: 8px;
//   width: 100%;
//   text-align: center;
// }

// /* Number text (1/3 etc) */
// .numbertext {
//   color: #f2f2f2;
//   font-size: 12px;
//   padding: 8px 12px;
//   position: absolute;
//   top: 0;
// }

// /* The dots/bullets/indicators */
// .dot {
//   cursor: pointer;
//   height: 15px;
//   width: 15px;
//   margin: 0 2px;
//   background-color: #bbb;
//   border-radius: 50%;
//   display: inline-block;
//   transition: background-color 0.6s ease;
// }

// .active, .dot:hover {
//   background-color: #717171;
// }

// /* Fading animation */
// .fade {
//   -webkit-animation-name: fade;
//   -webkit-animation-duration: 1.5s;
//   animation-name: fade;
//   animation-duration: 1.5s;
// }

// @-webkit-keyframes fade {
//   from {opacity: .4}
//   to {opacity: 1}
// }

// @keyframes fade {
//   from {opacity: .4}
//   to {opacity: 1}
// }
