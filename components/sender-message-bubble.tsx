import React from "react";

interface SenderMessageBubbleProps {}

export const SenderMessageBubble: React.FC<SenderMessageBubbleProps> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="313px"
      height="174px"
    >
      <defs>
        <filter
          filterUnits="userSpaceOnUse"
          id="Filter_0"
          x="0px"
          y="0px"
          width="313px"
          height="174px"
        >
          <feOffset in="SourceAlpha" dx="0" dy="20" />
          <feGaussianBlur result="blurOut" stdDeviation="5.745" />
          <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
          <feComposite operator="atop" in="floodOut" in2="blurOut" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.05" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#Filter_0)">
        <path
          fill-rule="evenodd"
          fill="rgb(250, 250, 250)"
          d="M277.502,19.610 L277.511,19.634 L272.988,24.348 C270.797,26.274 269.294,29.748 269.180,33.766 C269.175,33.931 269.173,34.096 269.173,34.264 C269.173,35.041 269.231,35.768 269.333,36.453 L269.333,104.000 C269.333,113.205 261.871,120.667 252.667,120.667 L48.667,120.667 C39.462,120.667 32.000,113.205 32.000,104.000 L32.000,28.667 C32.000,19.462 39.462,12.000 48.667,12.000 L245.271,12.000 L252.667,12.000 L259.898,12.000 L259.894,11.997 C259.917,11.997 259.939,12.000 259.962,12.000 L263.188,12.000 L263.186,11.996 L265.245,12.000 L269.156,12.000 L269.156,12.008 L274.718,12.020 L274.721,12.028 C277.061,12.067 278.948,13.994 278.948,16.375 C278.948,17.666 278.383,18.813 277.502,19.610 Z"
        />
      </g>
    </svg>
  );
};
