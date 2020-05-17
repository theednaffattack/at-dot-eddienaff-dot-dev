import React from "react";
import { Card } from "../primitives/styled-rebass";
import styled from "styled-components";

interface SliderPointerProps {
  value: number;
  percent: number;
}

export const SliderPointer: React.FC<SliderPointerProps> = ({
  percent,
  value,
}) => {
  return (
    <Card
      height="auto"
      width="60px"
      ml="-30px"
      bg="rgb(68, 68, 68)"
      color="#fff"
      sx={{
        zIndex: 1578,
        borderRadius: "12px",
        position: "absolute",
        left: `${percent}%`,
        bottom: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      ${value}
    </Card>
  );
};

const ArrowBase = styled.div<{ percent: number }>`
  background-color: rgb(68, 68, 68);
  border-radius: 4px;
  position: absolute;
  bottom: 28px;
  left: ${({ percent }) => `${percent}%`};
  margin-left: -12.5px;
  /* top: 0; */
  width: 25px;
  height: 25px;
  z-index: 1570;
  transform: rotate(45deg);
`;

export const Arrow: React.FC<SliderPointerProps> = ({ percent }) => {
  return <ArrowBase percent={percent}>.</ArrowBase>;
};

// .base {
//   border-radius: 12px;
//   background-color: rgb(68, 68, 68);
//   position: absolute;
//   left: 561px;
//   top: 1987px;
//   width: 75px;
//   height: 40px;
//   z-index: 1578;
// }
// .arrow {
//   background-color: rgb(68, 68, 68);
//   position: absolute;
//   left: 584px;
//   top: 2017px;
//   width: 29px;
//   height: 15px;
//   z-index: 1577;
// }

// .pointer_1 {
//   position: absolute;
//   left: 0px;
//   top: 0px;
//   width: 4310px;
//   height: 7176px;
//   z-index: 1580;
// }
// ._702k {
//   font-size: 36px;
//   font-family: "Montserrat";
//   color: rgb(255, 255, 255);
//   font-weight: bold;
//   line-height: 2.889;
//   text-align: left;
//   text-shadow: 0px 13px 27px rgba(0, 0, 0, 0.15);
//   -moz-transform: matrix( 0.33333333333333,0,0,0.33333333333333,0,0);
//   -webkit-transform: matrix( 0.33333333333333,0,0,0.33333333333333,0,0);
//   -ms-transform: matrix( 0.33333333333333,0,0,0.33333333333333,0,0);
//   position: absolute;
//   left: 528.343px;
//   top: 2066.099px;
//   z-index: 1579;
// }
