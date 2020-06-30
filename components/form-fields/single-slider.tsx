import React, { Component } from "react";
import { Slider, Rail, Handles, Tracks } from "react-compound-slider";

import {
  SliderRail,
  HandleKm as Handle,
  Track,
} from "./compound-slider-components";
import { Flex } from "../primitives/styled-rebass";

const sliderStyle = {
  position: "relative" as "relative",
  // margin: "5%",
  marginTop: "20px",
  width: "100%",
  touchAction: "none",
};

const domain = [100, 500];
const defaultValues = [150];

export class SingleSlider extends Component<{ minHeight?: string }> {
  state = {
    values: defaultValues.slice(),
    update: defaultValues.slice(),
  };

  onUpdate = (update: ReadonlyArray<number>) => {
    this.setState({ update });
  };

  onChange = (values: ReadonlyArray<number>) => {
    this.setState({ values });
  };

  render() {
    const {
      // @ts-ignore
      state: { values, update },
      props,
    } = this;

    return (
      <Flex
        width={1}
        minHeight={props.minHeight ? props.minHeight : undefined}
        justifyContent="flex-end"
      >
        <Slider
          mode={1}
          step={1}
          domain={domain}
          rootStyle={sliderStyle}
          onUpdate={this.onUpdate}
          onChange={this.onChange}
          values={values}
        >
          <Rail>
            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
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
          <Tracks right={false}>
            {({ tracks, getTrackProps }) => (
              <Flex width={1} className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </Flex>
            )}
          </Tracks>
        </Slider>
      </Flex>
    );
  }
}
