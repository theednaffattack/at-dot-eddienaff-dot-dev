// adapted from: https://codesandbox.io/s/react-compound-slider-typescript-range-slider-c31i1?file=/src/components.tsx:97-119

import React from "react";
import { Slider, Rail, Handles, Tracks } from "react-compound-slider";

import {
  HandleDollars as Handle,
  Track,
  TooltipRail,
} from "./compound-slider-components"; // example render components
import { Flex, Text } from "../primitives/styled-rebass";

const sliderStyle: React.CSSProperties = {
  margin: "5%",
  position: "relative",
  width: "90%",
};

// const railStyle: React.CSSProperties = {
//   position: "absolute",
//   width: "100%",
//   height: 14,
//   borderRadius: 7,
//   cursor: "pointer",
//   backgroundColor: "rgb(155,155,155)",
// };

const domain: number[] = [100, 500];

interface CompoundSliderProps {}

const onChange = (
  values: readonly number[],
  setValues: React.Dispatch<React.SetStateAction<number[]>>
) => {
  const newValues = [...values];
  setValues(newValues);
};

export const CompoundSlider: React.FC<CompoundSliderProps> = () => {
  const [values, setValues] = React.useState([150, 300]);
  return (
    <Flex width={1} flexDirection="column">
      <Flex width={1} alignItems="flex-end">
        <Text>0</Text>
        <Slider
          mode={2}
          step={1}
          domain={domain}
          rootStyle={sliderStyle}
          onChange={(values) => onChange(values, setValues)}
          values={values}
        >
          <Rail>
            {(railProps) => <TooltipRail values={values} {...railProps} />}
          </Rail>

          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map((handle) => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
        </Slider>

        <Text>5k</Text>
      </Flex>
    </Flex>
  );
};

// OLD RAIL

// {({ getRailProps }) => <div style={railStyle} {...getRailProps()} />}
