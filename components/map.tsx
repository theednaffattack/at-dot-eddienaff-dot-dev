import React from "react";
import ReactMapGL, { Popup, ViewportProps } from "react-map-gl";
import dynamic from "next/dynamic";
import axios from "axios";

import { MapViewZoomButtonContainer } from "./map-view-modal";
import { Pins } from "./pins";
import { RequestDataInterface } from "./temp.request.data";
import { PolylineOverlay } from "./polyline-overlay";
import {
  DisplayDirections,
  CustomMarker,
  CustomWrapper,
} from "./display-directions";
import { DirectionsLoading } from "./directions-loading";
import Icon from "./icon";

const MapCardPopoverNoSSR = dynamic(() => import("./map-card-popover"), {
  ssr: false,
});

export interface ViewportState {
  width: string;
  height: string;
  latitude: number;
  longitude: number;
  zoom: number;
}

export type ViewportActions =
  | {
      type: "latLong";
      value: { latitude: number; longitude: number };
    }
  | {
      type: "zoom";
      value: number;
    };

function viewportReducer(
  state: ViewportState,
  action: ViewportActions
): ViewportState {
  switch (action.type) {
    case "latLong":
      return {
        width: state.width,
        height: state.height,
        latitude: action.value.latitude,
        longitude: action.value.longitude,
        zoom: state.zoom,
      };
    case "zoom":
      return {
        width: state.width,
        height: state.height,
        latitude: state.latitude,
        longitude: state.longitude,
        zoom: action.value,
      };
    default:
      throw new Error("Unkown error trying to update state.");
  }
}

function viewportInit(initialViewport: ViewportState) {
  return {
    width: initialViewport.width,
    height: initialViewport.height,
    latitude: initialViewport.latitude,
    longitude: initialViewport.longitude,
    zoom: initialViewport.zoom,
  };
}

function buildUri({
  origin,
  destination,
}: {
  origin: [number, number];
  destination: [number, number];
}): string {
  const uri = `https://api.mapbox.com/directions/v5/mapbox/driving/${origin[0]},${origin[1]};${destination[0]},${destination[1]}?geometries=geojson&steps=true&access_token=${process.env.MAPBOX_KEY}`;
  return uri;
}

interface HooksMapProps {
  lngLat: number[];
  name: string | null;
  price: string;
  initPopup?: boolean;
}

export const HooksMap: React.FC<HooksMapProps> = ({
  initPopup = true,
  lngLat,
  name,
  price,
}) => {
  const [viewportState, viewportDispatch] = React.useReducer(
    viewportReducer,
    {
      width: "100%",
      height: "100%",
      latitude: lngLat[1],
      longitude: lngLat[0],
      zoom: 13,
    },
    viewportInit
  );

  // for the Mapbox Directions request
  const [directionsData, setDirectionsData] = React.useState<
    RequestDataInterface["data"] | null
  >(null);

  const [requestData, setRequestData] = React.useState<
    "init" | "isRequesting" | "hasRequested"
  >("init");

  // to get the origin based on click
  const [originData, setOriginData] = React.useState<[number, number] | null>(
    null
  );

  // // to get the destination based on click
  // const [destinationData, setDestinationData] = React.useState<
  //   [number, number] | null
  // >(null);

  // data for the Marker click Popup element
  const [popupVisible, setPopupVisible] = React.useState<
    "isHidden" | "isVisible"
  >(initPopup && initPopup === true ? "isVisible" : "isHidden");

  // run Mapbox requests based on directionsData(requesat URI set onClick)
  React.useEffect(() => {
    if (requestData === "isRequesting") {
      navigator.geolocation.getCurrentPosition(function(position) {
        setOriginData([position.coords.longitude, position.coords.latitude]);

        const theUri = buildUri({
          origin: [position.coords.longitude, position.coords.latitude],
          // origin: [-122.1470994, 38.0464928],
          destination: [lngLat[0], lngLat[1]],
        });
        axios
          .get(theUri)
          .then((data) => {
            setDirectionsData(data.data);
            return data;
          })
          .catch((error) => console.error(error));
        setRequestData("init");
      });
    }
    // return () => {
    //   cleanup;
    // };
  }, [requestData]);

  // NEEDED FOR QUERY PARAMS DATA PASSING
  // const router = useRouter();

  // const {
  //   query: { referer: refererBase, coordinates },
  // } = router;
  // const referer =
  //   typeof refererBase === "string"
  //     ? refererBase
  //     : Array.isArray(refererBase)
  //     ? refererBase[0]
  //     : "none";
  // const asNumbers = convertNumerals(coordinates);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/light-v9"
      mapboxApiAccessToken={process.env.MAPBOX_KEY}
      onViewportChange={(viewport: ViewportProps) => {
        viewportDispatch({
          type: "zoom",
          value: viewport.zoom,
        });
        viewportDispatch({
          type: "latLong",
          value: { latitude: viewport.latitude, longitude: viewport.longitude },
        });
      }}
      {...viewportState}
    >
      {requestData === "isRequesting" ? <DirectionsLoading /> : null}
      {directionsData ? (
        <>
          <PolylineOverlay
            color="fuchsia"
            renderWhileDragging={true}
            lineWidth={3}
            points={directionsData?.routes[0].geometry.coordinates}
          />
          <CustomWrapper
            x={20}
            y={90}
            captureScroll={true}
            captureClick={true}
            captureDoubleClick={true}
            captureDrag={true}
          >
            <DisplayDirections
              distance={directionsData.routes[0].distance}
              duration={directionsData.routes[0].duration}
              steps={directionsData.routes[0].legs[0].steps}
            />
          </CustomWrapper>
        </>
      ) : null}

      {popupVisible === "isVisible" ? (
        <Popup
          anchor="left"
          closeButton={false}
          closeOnClick={false}
          dynamicPosition={true}
          // onClose={() => setPopupInfo(null)}
          // longitude={popupInfo.coordinates?.Y}
          // latitude={popupInfo.coordinates?.X}
          longitude={lngLat[0]}
          latitude={lngLat[1]}
          offsetLeft={55}
          tipSize={8}
        >
          <MapCardPopoverNoSSR
            setPopupVisible={setPopupVisible}
            getDirections={setRequestData}
            info={{
              address: "1001 Blah Blah St",
              averageRating: 4.5,
              city: "Benicia",
              distanceKm: "3",
              state: "CA",
              name: name ? name : "",
              id: "fake=id",
              price: parseInt(price),
              reviewCount: 600,
              zipCode: "94105",
            }}
          />
        </Popup>
      ) : null}
      {originData ? (
        <CustomMarker
          key="user-pin"
          longitude={originData[0]}
          latitude={originData[1]}
        >
          <Icon active={false} name="user_map_pointer" size="50px" fill="" />
        </CustomMarker>
      ) : null}

      {name && price && lngLat[0] && lngLat[1] ? (
        <Pins
          data={[
            {
              name,
              price: parseInt(price),
              reviewCount: 600,
              id: "123",
              averageRating: 5,
              coordinates: { X: lngLat[1], Y: lngLat[0] },
            },
          ]}
          onClick={() => setPopupVisible("isVisible")}
        />
      ) : null}

      <MapViewZoomButtonContainer
        viewportDispatch={viewportDispatch}
        viewportState={viewportState}
      />
    </ReactMapGL>
  );
};

export default HooksMap;
