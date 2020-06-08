import React from "react";
import styled from "styled-components";

import { device } from "./styles/theme";
import { FlexMinHeightBordersProps, Flex } from "./primitives/styled-rebass";
import { PathKeyArgsType } from "./icon-types";

const Svg = styled.svg``;

const Path = styled.path<{ fill?: string }>`
  @media ${device.tabletMax} {
    fill: ${({ fill }) => (fill ? fill : "#fff")};
  }

  @media ${device.laptop} {
    fill: ${({ fill }) => (fill ? fill : "#aaa")};
  }
`;

const viewBoxes = {
  close: "0 0 43 43",
  dayPlans: "0 0 52 52",
  more_vertical: "0 0 9 47",
  more_horizontal: "0 0 15 3",
  share: "0 0 48 56",
};

const pathObj = {
  close: ({ fill }: PathKeyArgsType) => {
    return (
      <Path
        fillRule="evenodd"
        fillOpacity="1"
        fill={fill}
        d="M25.037,21.001 L41.179,37.143 C42.293,38.257 42.293,40.064 41.179,41.179 C40.064,42.293 38.258,42.293 37.143,41.179 L21.001,25.036 L4.858,41.179 C3.744,42.293 1.937,42.293 0.823,41.179 C-0.292,40.064 -0.292,38.257 0.823,37.143 L16.965,21.001 L0.823,4.858 C-0.292,3.744 -0.292,1.937 0.823,0.822 C1.937,-0.292 3.744,-0.292 4.858,0.822 L21.001,16.965 L37.143,0.822 C38.258,-0.292 40.064,-0.292 41.179,0.822 C42.293,1.937 42.293,3.744 41.179,4.858 L25.037,21.001 Z"
      />
    );
  },
  dayPlans: ({}: PathKeyArgsType) => {
    return (
      <Path
        fillRule="evenodd"
        // fill={fill}
        d="M48.001,52.001 L46.584,52.001 L5.416,52.001 L3.999,52.001 C1.790,52.001 -0.001,50.210 -0.001,48.001 L-0.001,45.500 L-0.001,19.500 L-0.001,16.999 C-0.001,14.791 1.790,12.999 3.999,12.999 L5.416,12.999 L46.584,12.999 L48.001,12.999 C50.210,12.999 52.001,14.791 52.001,16.999 L52.001,19.500 L52.001,45.500 L52.001,48.001 C52.001,50.210 50.210,52.001 48.001,52.001 ZM6.499,19.500 L6.499,45.500 L45.501,45.500 L45.501,19.500 L6.499,19.500 ZM19.667,34.668 L15.000,34.668 C13.895,34.668 12.999,33.772 12.999,32.667 L12.999,28.000 C12.999,26.896 13.895,26.000 15.000,26.000 L19.667,26.000 C20.771,26.000 21.666,26.896 21.666,28.000 L21.666,32.667 C21.666,33.772 20.771,34.668 19.667,34.668 ZM49.751,6.499 L2.249,6.499 C1.006,6.499 -0.001,5.491 -0.001,4.250 L-0.001,2.249 C-0.001,1.007 1.006,-0.001 2.249,-0.001 L49.751,-0.001 C50.994,-0.001 52.001,1.007 52.001,2.249 L52.001,4.250 C52.001,5.491 50.994,6.499 49.751,6.499 Z"
      />
    );
  },
  more_horizontal: ({}: PathKeyArgsType) => {
    return (
      <Path
        fillRule="evenodd"
        d="M14.333,3.000 L14.000,3.000 C13.264,3.000 12.667,2.403 12.667,1.667 L12.667,1.333 C12.667,0.597 13.264,0.000 14.000,0.000 L14.333,0.000 C15.070,0.000 15.667,0.597 15.667,1.333 L15.667,1.667 C15.667,2.403 15.070,3.000 14.333,3.000 ZM8.000,3.000 L7.667,3.000 C6.930,3.000 6.333,2.403 6.333,1.667 L6.333,1.333 C6.333,0.597 6.930,0.000 7.667,0.000 L8.000,0.000 C8.737,0.000 9.333,0.597 9.333,1.333 L9.333,1.667 C9.333,2.403 8.737,3.000 8.000,3.000 ZM1.667,3.000 L1.333,3.000 C0.597,3.000 -0.000,2.403 -0.000,1.667 L-0.000,1.333 C-0.000,0.597 0.597,0.000 1.333,0.000 L1.667,0.000 C2.403,0.000 3.000,0.597 3.000,1.333 L3.000,1.667 C3.000,2.403 2.403,3.000 1.667,3.000 Z"
      />
    );
  },
  more_vertical: ({}: PathKeyArgsType) => {
    return (
      <Path
        fillRule="evenodd"
        d="M5.000,47.001 L4.000,47.001 C1.791,47.001 -0.000,45.209 -0.000,43.000 L-0.000,42.000 C-0.000,39.791 1.791,38.000 4.000,38.000 L5.000,38.000 C7.209,38.000 9.000,39.791 9.000,42.000 L9.000,43.000 C9.000,45.209 7.209,47.001 5.000,47.001 ZM5.000,28.000 L4.000,28.000 C1.791,28.000 -0.000,26.209 -0.000,24.000 L-0.000,23.000 C-0.000,20.791 1.791,19.000 4.000,19.000 L5.000,19.000 C7.209,19.000 9.000,20.791 9.000,23.000 L9.000,24.000 C9.000,26.209 7.209,28.000 5.000,28.000 ZM5.000,9.000 L4.000,9.000 C1.791,9.000 -0.000,7.210 -0.000,5.000 L-0.000,4.000 C-0.000,1.791 1.791,-0.000 4.000,-0.000 L5.000,-0.000 C7.209,-0.000 9.000,1.791 9.000,4.000 L9.000,5.000 C9.000,7.210 7.209,9.000 5.000,9.000 Z"
      />
    );
  },
  share: ({}: PathKeyArgsType) => {
    return (
      <Path
        fillRule="evenodd"
        d="M37.725,21.001 C34.804,21.001 32.175,19.749 30.304,17.750 L19.815,24.117 C20.285,25.319 20.550,26.627 20.550,28.000 C20.550,29.568 20.204,31.050 19.602,32.386 L30.038,38.550 C31.920,36.377 34.662,35.000 37.725,35.000 C43.400,35.000 48.000,39.701 48.000,45.500 C48.000,51.299 43.400,56.000 37.725,56.000 C32.050,56.000 27.450,51.299 27.450,45.500 C27.450,45.031 27.490,44.572 27.549,44.119 L15.522,37.016 C13.985,37.953 12.195,38.501 10.275,38.501 C4.600,38.501 0.000,33.799 0.000,28.000 C0.000,22.201 4.600,17.500 10.275,17.500 C12.365,17.500 14.306,18.141 15.929,19.236 L27.590,12.158 C27.506,11.617 27.450,11.066 27.450,10.500 C27.450,4.701 32.050,-0.000 37.725,-0.000 C43.400,-0.000 48.000,4.701 48.000,10.500 C48.000,16.299 43.400,21.001 37.725,21.001 ZM37.710,50.147 C40.229,50.147 42.270,48.066 42.270,45.500 C42.270,42.933 40.229,40.853 37.710,40.853 C35.192,40.853 33.150,42.933 33.150,45.500 C33.150,48.066 35.192,50.147 37.710,50.147 ZM10.290,23.354 C7.772,23.354 5.730,25.434 5.730,28.000 C5.730,30.567 7.772,32.647 10.290,32.647 C12.808,32.647 14.850,30.567 14.850,28.000 C14.850,25.434 12.808,23.354 10.290,23.354 ZM37.710,5.854 C35.192,5.854 33.150,7.934 33.150,10.500 C33.150,13.067 35.192,15.147 37.710,15.147 C40.229,15.147 42.270,13.067 42.270,10.500 C42.270,7.934 40.229,5.854 37.710,5.854 Z"
      />
    );
  },
};

type NameTypes =
  | "close"
  | "dayPlans"
  | "more_horizontal"
  | "more_vertical"
  | "share";

export interface HeaderIconsProps extends FlexMinHeightBordersProps {
  fill: string;
  name: NameTypes;
  size: string | number;
}

export const HeaderIcons: React.FC<HeaderIconsProps> = ({
  fill,
  height,
  width,
  name,
  size,
  ...props
}) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      sx={{
        width: width ? width : size,
        height: height ? height : size,
      }}
      {...props}
    >
      <Svg height="100%" width="100%" viewBox={viewBoxes[name]}>
        {pathObj[name]({ fill })}
      </Svg>
    </Flex>
  );
};
