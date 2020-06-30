export type FeatureTypes =
  | "bar / nightclub"
  | "hotel"
  | "parking"
  | "restaurant"
  | "swimming"
  | "wifi";

export interface TravelingPageFiltersStateInterface {
  distance: number;
  features: FeatureTypes[] | null;
  price: number;
  room: {
    adults: number;
    minors: number;
  };
  time: { from: Date; to: Date };
}

interface TimeFilterType {
  from: Date;
  to: Date;
}

export type TravelingPageFiltersActions =
  | { description: "udpateDistanceValue"; data: number; type: "distance" }
  | {
      description: "updateFeaturesValue";
      data: FeatureTypes[] | null;
      type: "features";
    }
  | { description: "updatePriceValue"; data: number; type: "price" }
  | {
      description: "updatePriceValue";
      data: { adults: number; minors: number };
      type: "room";
    }
  | { description: "updateTimeValue"; data: TimeFilterType; type: "time" };

export function travelingPageFiltersReducer(
  state: TravelingPageFiltersStateInterface,
  action: TravelingPageFiltersActions
) {
  switch (action.type) {
    case "distance":
      return {
        distance: action.data,
        features: state.features,
        price: state.price,
        room: state.room,
        time: state.time,
      };
    case "features":
      return {
        distance: state.distance,
        features: action.data,
        price: state.price,
        room: state.room,
        time: state.time,
      };
    case "price":
      return {
        distance: state.distance,
        features: state.features,
        price: action.data,
        room: state.room,
        time: state.time,
      };
    case "room":
      return {
        distance: state.distance,
        features: state.features,
        price: state.price,
        room: action.data,
        time: state.time,
      };
    case "time":
      return {
        distance: state.distance,
        features: state.features,
        price: state.price,
        room: state.room,
        time: action.data, // { from: action.data.from, to: action.data.to },
      };

    default:
      return {
        distance: state.distance,
        features: state.features,
        price: state.price,
        room: state.room,
        time: state.time,
      };
  }
}

export function initTravelingPageFiltersState(
  initialState: TravelingPageFiltersStateInterface
): TravelingPageFiltersStateInterface {
  return initialState;
}
