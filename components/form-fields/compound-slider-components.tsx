import React from "react";
import {
  SliderItem,
  GetEventData,
  GetHandleProps,
  GetRailProps,
  GetTrackProps,
} from "react-compound-slider";

// import { AbFlex } from "../primitives/styled-rebass";
import { SliderPointer, Arrow } from "./slider-pointer";
import { SliderPointerKm } from "./slider-pointer-km";

// *******************************************************
// RAIL
// *******************************************************
const railOuterStyle = {
  position: "absolute" as "absolute",
  width: "100%",
  height: 42,
  transform: "translate(0%, -50%)",
  borderRadius: 7,
  cursor: "pointer",
};

const railInnerStyle = {
  position: "absolute" as "absolute",
  width: "100%",
  height: 14,
  transform: "translate(0%, -50%)",
  borderRadius: 7,
  pointerEvents: "none" as "none",
  backgroundColor: "rgb(155,155,155)",
};

interface SliderRailProps {
  getRailProps: GetRailProps;
}

export const SliderRail: React.FC<SliderRailProps> = ({ getRailProps }) => {
  return (
    <>
      <div style={railOuterStyle} {...getRailProps()} />
      <div style={railInnerStyle} />
    </>
  );
};

// *******************************************************
// HANDLE COMPONENT
// *******************************************************
interface IHandleProps {
  domain: number[];
  handle: SliderItem;
  getHandleProps: GetHandleProps;
}

export const HandleDollars: React.SFC<IHandleProps> = ({
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps,
}) => (
  <>
    {/* <AbFlex
      position="absolute"
      left={`${percent}%`}
      ml={-2}
      bottom={30}
      bg="pink"
    >
      ${value}
    </AbFlex> */}
    <Arrow percent={percent} value={value} />
    <SliderPointer percent={percent} value={value} />

    {/* <div
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      style={{
        left: `${percent}%`,
        bottom: 30,
        position: "absolute",
        marginLeft: "-11px",
        marginTop: "-6px",
        zIndex: 2,
        width: 60,
        height: 24,
        cursor: "pointer",
        // borderRadius: "50%",
        boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#34568f",
      }}
      {...getHandleProps(id)}
    >
      ${value}
    </div> */}
    <div
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      style={{
        left: `${percent}%`,
        position: "absolute",
        marginLeft: "-11px",
        marginTop: "-6px",
        zIndex: 2,
        transform: "translate(0%, -25%)",
        width: 24,
        height: 24,
        cursor: "pointer",
        borderRadius: "50%",
        boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.2)",
        // backgroundColor: "#34568f",
        backgroundColor: "#d23078",
        backgroundImage:
          "linear-gradient(0deg, rgba(210, 48, 120, .2) 6%, rgba(254, 97, 97, .2) 74%, rgba(255, 121, 85, .2) 100%)",
      }}
      {...getHandleProps(id)}
    />
  </>
);

export const HandleKm: React.SFC<IHandleProps> = ({
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps,
}) => (
  <>
    {/* <AbFlex
      position="absolute"
      left={`${percent}%`}
      ml={-2}
      bottom={30}
      bg="pink"
    >
      ${value}
    </AbFlex> */}
    <Arrow percent={percent} value={value} />
    <SliderPointerKm percent={percent} value={value} />

    {/* <div
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      style={{
        left: `${percent}%`,
        bottom: 30,
        position: "absolute",
        marginLeft: "-11px",
        marginTop: "-6px",
        zIndex: 2,
        width: 60,
        height: 24,
        cursor: "pointer",
        // borderRadius: "50%",
        boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#34568f",
      }}
      {...getHandleProps(id)}
    >
      ${value}
    </div> */}
    <div
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      style={{
        left: `${percent}%`,
        position: "absolute",
        marginLeft: "-11px",
        marginTop: "-6px",
        zIndex: 2,
        transform: "translate(0%, -25%)",
        width: 24,
        height: 24,
        cursor: "pointer",
        borderRadius: "50%",
        boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.2)",
        // backgroundColor: "#34568f",
        backgroundColor: "#d23078",
        backgroundImage:
          "linear-gradient(0deg, rgba(210, 48, 120, .2) 6%, rgba(254, 97, 97, .2) 74%, rgba(255, 121, 85, .2) 100%)",
      }}
      {...getHandleProps(id)}
    />
  </>
);

// *******************************************************
// TRACK COMPONENT
// *******************************************************
interface ITrackProps {
  source: SliderItem;
  target: SliderItem;
  getTrackProps: GetTrackProps;
}

export const Track: React.SFC<ITrackProps> = ({
  source,
  target,
  getTrackProps,
}) => (
  <div
    id="track"
    style={{
      position: "absolute",
      top: 0,
      height: 14,
      zIndex: 1,
      transform: "translate(0%, -50%)",
      // backgroundColor: "#f0536d",
      backgroundColor: "#d23078",
      backgroundImage:
        "linear-gradient(0deg, rgba(210, 48, 120, .2) 6%, rgba(254, 97, 97, .2) 74%, rgba(255, 121, 85, .2) 100%)",
      borderRadius: 7,
      cursor: "pointer",
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`,
    }}
    {...getTrackProps()}
  />
);

// *******************************************************
// TICK COMPONENT
// *******************************************************
interface ITickProps {
  key: string;
  tick: SliderItem;
  count: number;
}

export const Tick: React.SFC<ITickProps> = ({ tick, count }) => (
  <div>
    <div
      style={{
        position: "absolute",
        marginTop: 14,
        width: 1,
        height: 5,
        backgroundColor: "rgb(200,200,200)",
        left: `${tick.percent}%`,
      }}
    />
    <div
      style={{
        position: "absolute",
        marginTop: 22,
        fontSize: 10,
        textAlign: "center",
        marginLeft: `${-(100 / count) / 2}%`,
        width: `${100 / count}%`,
        left: `${tick.percent}%`,
      }}
    >
      {tick.value}
    </div>
  </div>
);

// *******************************************************
// TOOLTIP RAIL
// *******************************************************
// const railStyle = {
//   position: "absolute" as "absolute",
//   width: "100%",
//   transform: "translate(0%, -50%)",
//   height: 40,
//   cursor: "pointer",
//   zIndex: 300,
// };

const railCenterStyle = {
  position: "absolute" as "absolute",
  width: "100%",
  transform: "translate(0%, -50%)",
  height: "14px",
  borderRadius: 7,
  cursor: "pointer",
  pointerEvents: "none" as "none",
  backgroundColor: "rgb(155,155,155)",
};

interface TooltipRailProps {
  activeHandleID: string;
  getRailProps: GetRailProps;
  getEventData: GetEventData;
  values: any[];
}

export class TooltipRail extends React.Component<TooltipRailProps> {
  state = {
    value: null,
    percent: null,
  };

  onMouseEnter = () => {
    document.addEventListener("mousemove", this.onMouseMove);
  };

  onMouseLeave = () => {
    this.setState({ value: null, percent: null });
    document.removeEventListener("mousemove", this.onMouseMove);
  };

  onMouseMove = (e: MouseEvent) => {
    const { activeHandleID, getEventData } = this.props;
    if (activeHandleID) {
      this.setState({ value: null, percent: null });
    } else {
      this.setState(getEventData(e));
    }
  };

  render() {
    // const { value, percent } = this.state;
    // const { getRailProps } = this.props;
    // const what = getRailProps();
    return (
      <React.Fragment>
        {/* {value ? (
          <div
            style={{
              left: `${percent}%`,
              position: "absolute",
              marginLeft: "-11px",
              marginTop: "-35px",
              // height: "14px",
            }}
          >
            <div className="tooltip">
              <span className="tooltiptext">Value: {value}</span>
            </div>
          </div>
        ) : null} */}
        {/* <div
          // style={railStyle}
          {...getRailProps({
            // onMouseEnter: this.onMouseEnter,
            // onMouseLeave: this.onMouseLeave,
          })}
        /> */}
        <div id="rail-style" style={railCenterStyle} />
      </React.Fragment>
    );
  }
}
