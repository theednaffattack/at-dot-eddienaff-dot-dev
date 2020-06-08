import { NextSeo } from "next-seo";
import React from "react";

import {
  LayoutAuthorizedHeader,
  // @ts-ignore
  authLayoutWidths,
} from "./layout-authorized-header";
import { Flex } from "./primitives/styled-rebass";
import { TravelingPageListingItem } from "./traveling-page-listing-item";
import { TravelingPageInfoAndFilterButton } from "./traveling-page-info-and-filter-button";
import { size } from "./styles/theme";

interface TravelingPageComponent {
  // pathname: NextContext["pathname"];
  // query: NextContext["query"];
}

const localLayoutWidths = [
  size.mobileS,
  size.mobileM,
  size.mobileL,
  size.tablet,
  size.laptop,
  size.laptop,
  size.laptopL,
];

export const TravelingPageComponent: React.FC<TravelingPageComponent> = ({}) => {
  return (
    <React.Fragment>
      <NextSeo
        title="Traveling"
        description="A traveling page, nothing more."
        canonical="https://at.eddienaff.dev/"
        openGraph={{
          url: "https://at.eddienaff.dev/traveling",
          title: "Traveling",
          description: "A beautiful traveling page.",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
          site_name: "SiteName",
        }}
      />
      <Flex
        // mb={[2, 2, 2, 2, 2, 2, 4]}
        justifyContent="center"
        width={1}
        // px={[0, 0, 0, 0, 4, 4, 0]}
      >
        <Flex
          width={localLayoutWidths}
          borderBottom="2px rgba(170, 170, 170, 0.6) solid"
          alignItems="center"
          pb={[3, 3, 3, 3, 0, 0, 0]}
          flexDirection="column"
        >
          <LayoutAuthorizedHeader />
          <TravelingPageInfoAndFilterButton />

          <Flex width={1} flex={1} mx="auto" overflowY="auto" flexWrap="wrap">
            {Hotels.map((hotel) => (
              <TravelingPageListingItem
                key={hotel.id}
                city={hotel.city}
                comments={hotel.comments}
                id={hotel.id}
                images={hotel.images}
                likes={hotel.likes}
                name={hotel.name}
                original_price={hotel.original_price}
                price={hotel.price}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </React.Fragment>
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
}

// @ts-ignore
const Hotels: HotelInterface[] = [
  {
    city: "Chicago",
    comments: "766",
    id: "1-hotel",
    images: [
      {
        id: "1-image",
        uri: "https://source.unsplash.com/random/1024x768?sky",
        sx: {
          borderRadius: "10px",
          boxShadow: "0px 13px 33px 0px rgba(0, 0, 0, 0.075)",
        },
      },
    ],
    likes: "4k",
    name: "Hotel Corazon",
    original_price: "$554",
    price: "$334",
  },
  {
    city: "Chicago",
    comments: "766",
    id: "2-hotel",
    images: [
      {
        id: "2-image",
        uri: "https://source.unsplash.com/random/1024x768?sky",
        sx: {
          borderRadius: "10px",
          boxShadow: "0px 13px 33px 0px rgba(0, 0, 0, 0.075)",
        },
      },
    ],
    likes: "4k",
    name: "Hotel Corazon",
    original_price: "$554",
    price: "$334",
  },
  {
    city: "Chicago",
    comments: "766",
    id: "3-hotel",
    images: [
      {
        id: "3-image",
        uri: "https://source.unsplash.com/random/1024x768?sky",
        sx: {
          borderRadius: "10px",
          boxShadow: "0px 13px 33px 0px rgba(0, 0, 0, 0.075)",
        },
      },
    ],
    likes: "4k",
    name: "Hotel Corazon",
    original_price: "$554",
    price: "$334",
  },
  {
    city: "Chicago",
    comments: "766",
    id: "4-hotel",
    images: [
      {
        id: "4-image",
        uri: "https://source.unsplash.com/random/1024x768?sky",
        sx: {
          borderRadius: "10px",
          boxShadow: "0px 13px 33px 0px rgba(0, 0, 0, 0.075)",
        },
      },
    ],
    likes: "4k",
    name: "Hotel Corazon",
    original_price: "$554",
    price: "$334",
  },
  {
    city: "Chicago",
    comments: "766",
    id: "5-hotel",
    images: [
      {
        id: "5-image",
        uri: "https://source.unsplash.com/random/1024x768?sky",
        sx: {
          borderRadius: "10px",
          boxShadow: "0px 13px 33px 0px rgba(0, 0, 0, 0.075)",
        },
      },
    ],
    likes: "4k",
    name: "Hotel Corazon",
    original_price: "$554",
    price: "$334",
  },
  {
    city: "Chicago",
    comments: "766",
    id: "6-hotel",
    images: [
      {
        id: "6-image",
        uri: "https://source.unsplash.com/random/1024x768?sky",
        sx: {
          borderRadius: "10px",
          boxShadow: "0px 13px 33px 0px rgba(0, 0, 0, 0.075)",
        },
      },
    ],
    likes: "4k",
    name: "Hotel Corazon",
    original_price: "$554",
    price: "$334",
  },
  {
    city: "Chicago",
    comments: "766",
    id: "7-hotel",
    images: [
      {
        id: "7-image",
        uri: "https://source.unsplash.com/random/1024x768?sky",
        sx: {
          borderRadius: "10px",
          boxShadow: "0px 13px 33px 0px rgba(0, 0, 0, 0.075)",
        },
      },
    ],
    likes: "4k",
    name: "Hotel Corazon",
    original_price: "$554",
    price: "$334",
  },
];
