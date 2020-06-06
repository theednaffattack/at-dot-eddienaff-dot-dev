import React from "react";

interface CalculatedPathProps {
  /**css color value or svg filter name */
  fill: string;
  fillOpacity?: string;
  /** units in pixes */
  unitsToAdd: number;
}

const newBaseA = 70; // was 170
const newBaseB = 86.666; // 186.666
const newBaseC = 79.205; // 179.205

export const CalculatedPath: React.FC<CalculatedPathProps> = ({
  fillOpacity,
  fill = "rgb(244, 50, 127)",
  unitsToAdd,
}) => {
  return (
    <path
      fillRule="evenodd"
      fill={fill}
      fillOpacity={fillOpacity ? fillOpacity : "100%"}
      d={`M263.000,${newBaseB + unitsToAdd} L59.333,${newBaseB +
        unitsToAdd} C50.128,${newBaseB + unitsToAdd} 42.667,${newBaseC +
        unitsToAdd} 42.667,${newBaseA +
        unitsToAdd} L42.667,71.333 L42.667,53.666 L42.667,39.609 C42.227,36.361 40.870,33.609 39.006,31.979 L34.489,27.285 L34.495,27.267 C33.616,26.472 33.052,25.328 33.052,24.041 C33.052,21.667 34.939,19.744 37.279,19.705 L37.283,19.696 L42.844,19.684 L42.844,19.666 L59.333,19.666 L66.729,19.666 L263.000,19.666 C272.205,19.666 279.667,27.128 279.667,36.333 L279.667,53.666 L279.667,71.333 L279.667,${newBaseA +
        unitsToAdd} C279.667,${newBaseC + unitsToAdd} 272.205,${newBaseB +
        unitsToAdd} 263.000,${newBaseB + unitsToAdd} Z`}
    />
  );
};

// values to
// 42.667

// 71.333
