import { Component } from "react";
import ReactMapGL from "react-map-gl";

export class Map extends Component {
  state = {
    viewport: {
      width: "100%",
      height: "100%",
      latitude: 41.5868,
      longitude: -93.625,
      zoom: 13,
    },
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={process.env.MAPBOX_KEY}
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      />
    );
  }
}
