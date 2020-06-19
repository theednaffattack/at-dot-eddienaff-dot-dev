import React from "react";
import { BaseControl, BaseControlProps } from "react-map-gl";

import { Flex, Text, Button } from "./primitives/styled-rebass";
import { RequestDataInterface } from "./temp.request.data";
import Icon from "./icon";

interface DisplayDirectionsProps {
  distance: RequestDataInterface["data"]["routes"][0]["legs"][0]["distance"];
  duration: RequestDataInterface["data"]["routes"][0]["legs"][0]["duration"];
  steps: RequestDataInterface["data"]["routes"][0]["legs"][0]["steps"];
}

export const DisplayDirections: React.FC<DisplayDirectionsProps> = ({
  distance,
  duration,
  steps,
}) => {
  const [directionsShowing, setDirectionsShowing] = React.useState<
    "directionsAreHidden" | "directionsAreShowing"
  >("directionsAreHidden");
  if (directionsShowing === "directionsAreShowing") {
    return (
      <Flex
        bg="#eee"
        flex={1}
        flexDirection="column"
        p={3}
        sx={{
          position: "relative",
          overflowY: "auto",
          height: "200px",
          outline: "2px rebeccapurple dashed",
          //   top: 75,
          //   left: 20,
          //   bottom: 90,
          //   display: "flex",
          //   overflowY: "auto",
          //   zIndex: 10005,
        }}
      >
        <Button
          type="button"
          bg="transparent"
          p={0}
          height="20px"
          width="20px"
          borderRadius="50%"
          onClick={() => setDirectionsShowing("directionsAreHidden")}
          sx={{
            border: "2px solid #aaa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: 0,
            top: 0,
          }}
        >
          <Icon active={false} name="close" fill="#aaa" size="10px" />
        </Button>
        <Text>Directions</Text>
        <Text>
          Distance: {Math.round(distance * 0.000621371192 * 100) / 100} miles
        </Text>
        <Text>Duration: {Math.round(duration / 60)} minutes</Text>
        <Text>Steps: {steps.length}</Text>
        <ol style={{ padding: 0, margin: 0, listStyle: "none" }}>
          {steps.map((step, index) => (
            <li
              key={index + "-steps"}
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Flex
                px={3}
                alignItems="center"
                justifyContent="center"
                sx={{ outline: "2px pink dashed" }}
              >
                <Text key={index + "-steps"}>{index}</Text>
              </Flex>
              <Flex flexDirection="column">
                <Flex sx={{ outline: "2px limegreen dashed" }}>
                  <Flex>
                    <Text key={index + "-steps"}>
                      {step.maneuver?.type ?? "no type"}
                    </Text>
                  </Flex>
                  <Flex>
                    <Text>
                      {step.maneuver?.instruction ?? "no instruction"}
                    </Text>
                  </Flex>
                </Flex>

                <Flex flexDirection="column">
                  <Text ml="auto">
                    {Math.round(step.distance * 0.000621371192 * 100) / 100} mi
                  </Text>
                </Flex>
              </Flex>
            </li>
          ))}
        </ol>
      </Flex>
    );
  } else {
    return (
      <Button
        type="button"
        onClick={() => setDirectionsShowing("directionsAreShowing")}
      >
        <Icon active={false} name="menu" fill="#aaa" size="20px" />
      </Button>
    );
  }
};

// interface CustomMarkerProps extends BaseControlProps {
//   latitude: number;
//   longitude: number;
//   children?: React.PropsWithChildren<{ latitude: number; longitude: number }>;
// }

type CustomMarkerProps = React.PropsWithChildren<{
  latitude: number;
  longitude: number;
}> &
  BaseControlProps;

export class CustomMarker extends BaseControl<
  CustomMarkerProps,
  HTMLDivElement
> {
  _render() {
    const { longitude, latitude } = this.props;
    // console.log(this._context.viewport?.);
    const [x, y] = this._context.viewport?.project([longitude, latitude]) ?? [
      "not_defined",
      "not_defined",
    ];

    const markerStyle: React.CSSProperties = {
      position: "absolute",
      background: "transparent",
      left: x,
      top: y,
    };

    return (
      <div ref={this._containerRef} style={markerStyle}>
        {/* ({longitude}, {latitude}) */}
        {this.props.children}
      </div>
    );
  }
}

type CustomWrapperProps = React.PropsWithChildren<{
  x: number;
  y: number;
}> &
  BaseControlProps;

export class CustomWrapper extends BaseControl<
  CustomWrapperProps,
  HTMLDivElement
> {
  _render() {
    const { x, y } = this.props;

    const markerStyle: React.CSSProperties = {
      position: "absolute",
      background: "transparent",
      left: x,
      top: y,
    };

    return (
      <div ref={this._containerRef} style={markerStyle}>
        {/* ({longitude}, {latitude}) */}
        {this.props.children}
      </div>
    );
  }
}
