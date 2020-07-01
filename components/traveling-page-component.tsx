import React from "react";

// import {
//   LayoutAuthorizedHeader,
//   // @ts-ignore
//   authLayoutWidths,
// } from "./layout-authorized-header";
import { Flex } from "./primitives/styled-rebass";
import { TravelingPageListingItem } from "./traveling-page-listing-item";
// import { TravelingPageInfoAndFilterButton } from "./traveling-page-info-and-filter-button";
// import { size } from "./styles/theme";
import { Hotels } from "./helpers";
import { ClonedChildrenFromAuthLayout } from "../pages/traveling";
import { SubAuthHeaderTravelingPageLayout } from "./helper-comps-traveling-page-layout";
// import {
//   initTravelingPageFiltersState,
//   travelingPageFiltersReducer,
//   TravelingPageFiltersStateInterface,
// } from "./travelilng-filter-state-functions";
// import { NearMeFilterDistanceSlider } from "./form-fields/single-slider";
// import { ExploreFeatureCardList } from "./explore-feature-card-list";
// import { RenderDayPlansList } from "./near-me-render-dayplans-list";

interface TravelingPageComponentProps extends ClonedChildrenFromAuthLayout {
  // pathname: NextContext["pathname"];
  // query: NextContext["query"];
  title: string;
}

// const initialFiltersState: TravelingPageFiltersStateInterface = {
//   distance: 267,
//   features: null,
//   price: 996,
//   room: { adults: 2, minors: 0 },
//   time: { from: new Date(), to: new Date() },
// };

export const TravelingPageComponent: React.FC<TravelingPageComponentProps> = ({
  modalOverlayDispatch,
  modalOverlayState,
  title,
}) => {
  const asPath = "/traveling";
  const href = "/traveling";
  const referer = "/traveling";
  return (
    <SubAuthHeaderTravelingPageLayout
      // accordionContent={<NearMeFilterDistanceSlider units="km" />}
      accordionMinHeight="auto"
      modalOverlayDispatch={modalOverlayDispatch}
      modalOverlayState={modalOverlayState}
      title={title}
    >
      <React.Fragment>
        {/* <Flex
          alignItems="center"
          justifyContent="space-evenly"
          border="crimson"
        >
          <Badge>Time</Badge> <Badge>Price</Badge>
          <Badge>Features</Badge> <Badge>Room</Badge> <Badge>Distance</Badge>
        </Flex> */}
        <Flex width={1} flex={1} mx="auto" overflowY="auto" flexWrap="wrap">
          {Hotels.map((hotel) => (
            <TravelingPageListingItem
              asPath={asPath}
              city={hotel.city}
              comments={hotel.comments}
              coordinates={hotel.coordinates}
              href={href}
              id={hotel.id}
              images={hotel.images}
              key={hotel.id}
              likes={hotel.likes}
              modalOverlayDispatch={modalOverlayDispatch}
              modalOverlayState={modalOverlayState}
              name={hotel.name}
              original_price={hotel.original_price}
              price={hotel.price}
              referer={referer}
            />
          ))}
        </Flex>
      </React.Fragment>
    </SubAuthHeaderTravelingPageLayout>
  );
};

interface ImageInterface {
  id: string;
  uri: string;
  sx?: any;
}

export interface HotelInterface {
  city: string;
  comments: string;
  id: string;
  images?: ImageInterface[];
  likes: string;
  name: string;
  original_price?: string;
  price: string;
  coordinates: number[][];
  referer?: string;
}

// function Badge({
//   iconName,
//   children,
// }: {
//   iconName?: string;
//   children: React.ReactChildren | React.ReactChild;
// }): ReactElement {
//   return (
//     <Flex
//       alignItems="center"
//       justifyContent="center"
//       flexWrap="nowrap"
//       sx={{
//         // display: "inline-block",
//         color: "white",
//         bg: "blue",
//         px: 2,
//         py: 1,
//         borderLeft: "1px white solid",
//         // borderRadius: 99999,
//       }}
//     >
//       {iconName}
//       <Text
//         fontSize="13px"
//         sx={{
//           whiteSpace: "nowrap",
//         }}
//       >
//         {children}
//       </Text>
//     </Flex>
//   );
// }
