import React from "react";
import styled from "styled-components";

import {
  calculateWordWidths,
  calculateNumberOfLines,
} from "../components/helpers";
import { CalculatedPath } from "./calculated-path";
import { Flex } from "../components/primitives/styled-rebass";
// import { MessageBubbleError } from "./message-bubble-error";

interface MessageBubbleProps {
  setScrollIndicator?: () => void | undefined;
  capHeight: number;
  fontSize: string;
  index: number;
  leftPad: number;
  lineHeight: number;
  setWrapperHeight: React.Dispatch<React.SetStateAction<number | null>>;
  wrapperHeight: number | null;
  text: string;
  timestamp: string;
  topPad: number;
  width: number;
  x: number;
  y: number;
}

// const textConfig: SvgTextProps = {
//   capHeight: 0.71,
//   leftPad: 0,
//   lineHeight: 1,
//   topPad: 0,
//   width: 0,
//   x: 0,
//   y: 0
// };

const MessageBubbleBase = styled.div`
  position: relative;
  background: #00aabb;
  border-radius: 0.4em;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 23px solid transparent;
    border-right-color: #00aabb;
    border-left: 0;
    border-top: 0;
    margin-top: -11.5px;
    margin-left: -23px;
  }
`;

const bubbleWidth = 246.62;

export const MessageBubbleCss: React.FC<{}> = ({ children }) => {
  return <MessageBubbleBase>{children}</MessageBubbleBase>;
};

export const MessageBubbleSvg: React.FC<MessageBubbleProps> = ({
  index,
  fontSize,
  leftPad,
  lineHeight,
  setScrollIndicator,
  setWrapperHeight,
  text,
  timestamp,
  topPad,
  width,
  wrapperHeight,
}) => {
  const [hasMounted, setHasMounted] = React.useState<
    "isMounted" | "isNotMounted"
  >("isNotMounted");

  const [calculatedWordLines, setCalculatedWordLines] = React.useState<
    string[] | null
  >(null);

  // const [timestampState, setTimestampState] = React.useState<string | null>(
  //   null
  // );

  const [textBoxHeight, setTextBoxHeight] = React.useState<number | null>(null);

  const [svgHeight, setSvgHeight] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (setScrollIndicator) {
      setScrollIndicator();
    }
  }, [setScrollIndicator]);

  React.useEffect(() => {
    setHasMounted("isMounted");

    if (text) {
      const { spaceWidth, wordsWithComputedWidth } = calculateWordWidths({
        style: { fontSize: "15px" },
        wordsBase: text,
      });

      const lines = calculateNumberOfLines(
        wordsWithComputedWidth,
        spaceWidth,
        bubbleWidth - leftPad
      );

      setCalculatedWordLines(lines);
      setSvgHeight(lines.length * lineHeight + lineHeight + 48);
      setTextBoxHeight(lines.length * lineHeight);
      setWrapperHeight(lines.length * lineHeight + lineHeight);
    }
  }, [text]);

  if (hasMounted === "isNotMounted") {
    return null;
  }

  // React.useEffect(() => {
  //   if (svgHeight === null) {
  //     setSvgHeight(300);
  //   }
  // }, []);

  // if (svgHeight === null) {
  //   return <span>loading...</span>;
  // }

  // const unitsToAdd = 0;
  if (
    hasMounted === "isMounted" &&
    wrapperHeight &&
    textBoxHeight &&
    svgHeight
  ) {
    const shadowSpacing = 12;
    const flexSvgFilterHeights = svgHeight + lineHeight + shadowSpacing;

    return (
      <Flex
        mt={index === 0 ? 5 : 0}
        flexDirection="column"
        minHeight={`${flexSvgFilterHeights}px`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={`${width}px`}
          height={`${flexSvgFilterHeights}px`}
        >
          <defs>
            {/* from: https://stackoverflow.com/a/6094674/9448010 */}

            <filter
              filterUnits="userSpaceOnUse"
              id="Filter_0"
              x="0px"
              y="0px"
              width={`${width + 10}px`}
              height={`${wrapperHeight + 110}px`}
            >
              <feOffset in="SourceAlpha" dx="0" dy="13" />
              <feGaussianBlur result="blurOut" stdDeviation="5.745" />
              <feFlood floodColor="rgb(0, 0, 0)" result="floodOut" />
              <feComposite operator="atop" in="floodOut" in2="blurOut" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.1" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="PSgrad_0" x1="0%" x2="0%" y1="100%" y2="0%">
              <stop
                offset="6%"
                stopColor="rgb(210,48,120)"
                stopOpacity="0.75"
              />
              <stop
                offset="74%"
                stopColor="rgb(254,97,97)"
                stopOpacity="0.75"
              />
              <stop
                offset="100%"
                stopColor="rgb(255,121,85)"
                stopOpacity="0.75"
              />
            </linearGradient>
          </defs>
          <g filter="url(#Filter_0)">
            <CalculatedPath
              fill="rgb(244, 50, 127)"
              fillOpacity="100%"
              unitsToAdd={textBoxHeight}
            />
          </g>

          <CalculatedPath
            fill="url(#PSgrad_0)"
            fillOpacity="50%"
            unitsToAdd={textBoxHeight}
          />

          <text
            kerning="auto"
            fontFamily="AdobeArabic"
            fill="rgb(0, 0, 0)"
            // transform="matrix( 0.49313725490196, 0, 0, 0.49313724040985,62.3615367647059, 40.8015526184436)"
            fontSize="15px" // "24.334px"
          >
            {calculatedWordLines ? (
              calculatedWordLines.map((word, index) => (
                <tspan
                  fontSize={fontSize}
                  fontFamily="Montserrat"
                  fill="#FFFFFF"
                  key={index + "-" + word}
                  x={leftPad}
                  y={topPad}
                  dy={`${index * lineHeight}px`}
                >
                  {word}
                </tspan>
              ))
            ) : (
              <tspan
                fontSize={fontSize}
                fontFamily="Montserrat"
                fill="#FFFFFF"
                key={index + "-" + "no-word"}
                x={leftPad}
                y={topPad}
              >
                loading...
              </tspan>
            )}
            {calculatedWordLines ? (
              <tspan
                fontSize={fontSize + 2}
                fontWeight="bold"
                fontFamily="Montserrat"
                fill="#FFFFFF"
                key={index + "-stamp-" + timestamp}
                x={leftPad}
                y={topPad}
                dy={`${calculatedWordLines.length * (lineHeight + 2)}px`}
              >
                {timestamp}
              </tspan>
            ) : null}
          </text>
        </svg>
      </Flex>
    );
  }
  return <span>IMPOSSIBLE STATE</span>;
};
