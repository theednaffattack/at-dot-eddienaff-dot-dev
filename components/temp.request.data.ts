export interface RequestDataInterface {
  data: {
    routes: {
      weight_name: string;
      legs: {
        summary: string;
        steps: any[];
        distance: number;
        duration: number;
        weight: number;
      }[];
      geometry: {
        coordinates: number[][];
        type: string;
      };
      distance: number;
      duration: number;
      weight: number;
    }[];
    waypoints: {
      distance: number;
      name: string;
      location: number[];
    }[];
    code: string;
    uuid: string;
  };
  status: number;
  statusText: string;
  headers: {
    "cache-control": string;
    "content-length": string;
    "content-type": string;
    expires: string;
    pragma: string;
  };
  config: {
    url: string;
    method: string;
    headers: {
      Accept: string;
    };
    transformRequest: null[];
    transformResponse: null[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
  };
}

export const requestDataReturnExample = {
  data: {
    routes: [
      {
        weight_name: "routability",
        legs: [
          {
            summary: "Grand Avenue, Martin Luther King Jr Parkway",
            steps: [],
            distance: 4910.069,
            duration: 644.658,
            weight: 644.658,
          },
        ],
        geometry: {
          coordinates: [
            [-93.682335, 41.588089],
            [-93.681694, 41.588089],
            [-93.681679, 41.584759],
            [-93.680527, 41.584839],
            [-93.679207, 41.584549],
            [-93.652092, 41.584404],
            [-93.652077, 41.585701],
            [-93.644852, 41.585724],
            [-93.644943, 41.580143],
            [-93.644943, 41.580013],
            [-93.644737, 41.580017],
            [-93.644653, 41.585548],
          ],
          type: "LineString",
        },
        distance: 4910.069,
        duration: 644.658,
        weight: 644.658,
      },
    ],
    waypoints: [
      {
        distance: 39.917,
        name: "Woodland Avenue",
        location: [-93.682335, 41.588089],
      },
      {
        distance: 6.987,
        name: "Martin Luther King Jr Parkway",
        location: [-93.644653, 41.585548],
      },
    ],
    code: "Ok",
    uuid: "0YHW__etLvOutJRB5F4pneBrNv9Qmap5ykb5Y5gVrw7B2lkPe27AXw==",
  },
  status: 200,
  statusText: "OK",
  headers: {
    "cache-control": "private, no-cache, no-store, must-revalidate",
    "content-length": "820",
    "content-type": "application/json; charset=utf-8",
    expires: "-1",
    pragma: "no-cache",
  },
  config: {
    url:
      "https://api.mapbox.com/directions/v5/mapbox/driving/-93.68233489990189,41.587730851989015;-93.64474105834914,41.585548143404914?geometries=geojson&amp;access_token=pk.eyJ1IjoiZWRkaWVuYWZmIiwiYSI6ImNqd2g5YjJveTA2eXc0YW12aTF1c2RyZGYifQ.KZtDDtSmzlfUKhPrHpPuFQ",
    method: "get",
    headers: {
      Accept: "application/json, text/plain, */*",
    },
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
  },
  request: {},
};
