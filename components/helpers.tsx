import React, { CSSProperties, ReactChild } from "react";

import { IconProps, NewIconProps } from "./icon-types";
import { HotelInterface } from "./traveling-page-component";
import { Hotel, User } from "*/add-new-message.graphql";

import { Flex, Image, Text, Box } from "./primitives/styled-rebass";
import { FollowButton } from "./follow-button";

interface IconsInterface {
  name: IconProps["name"];
  label?: string;
  fill: string;
  size: string;
  route: string;
  active: boolean;
}
// ================================================
// nav icons - BEG
// ================================================

export const icons: IconsInterface[] = [
  {
    active: false,
    fill: "#aaa",
    name: "traveling",
    label: "Traveling",
    route: "/traveling",
    size: "20px",
  },
  {
    active: false,
    fill: "#aaa",
    label: "Explore",
    name: "explore",
    route: "/explore",
    size: "20px",
  },
  {
    active: false,
    fill: "#aaa",
    name: "saved",
    label: "Saved",
    size: "20px",
    route: "/saved",
  },
  {
    active: false,
    fill: "#aaa",
    label: "Chat",
    name: "chat",
    route: "/messages",
    size: "20px",
  },
  {
    active: false,
    fill: "#aaa",
    label: "Profile",
    name: "profile",
    route: "/profile",
    size: "20px",
  },
];

// ================================================
// nav icons - END
// ================================================

// faux hotel - BEG

export const OtherHotels: Hotel[] = [
  {
    address: "1529 Taylor Street",
    averageRating: 3.4,
    city: "SF",
    commentCount: 766,
    coordinates: { X: 41.5868, Y: -63.625 },
    distanceKm: "2.2",
    id: "1-hotel",
    photos: [
      {
        id: "1-image",
        uri: "https://source.unsplash.com/random/1024x768?sky",
        name: "fake",
        description: "",
        isPublished: true,
      },
    ],
    name: "Hotel Corazon",
    price: 334,
    reviewCount: 100,
    state: "CA",
    zipCode: "10011",
  },
];

export const Hotels: HotelInterface[] = [
  {
    city: "Chicago",
    comments: "766",
    coordinates: [[-122.1597943, 38.0691839]],
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
    coordinates: [[-122.1597943, 38.0691839]],
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
    coordinates: [[-122.1597943, 38.0691839]],
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
    coordinates: [[-122.1597943, 38.0691839]],
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
    coordinates: [[-122.1597943, 38.0691839]],
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
    coordinates: [[-122.1597943, 38.0691839]],
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
    coordinates: [[-122.1597943, 38.0691839]],
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

// faux hotels - END

// ================================================
//  /messages route, word bubbles - BEG
// ================================================

// functions to just-in-time measure words entered
// to generate svg created word bubbles of varying
// heights

interface WordsWithComputedWidthInterface {
  word: string;
  width: number;
}

export function calculateWordWidths({
  style,
  wordsBase,
}: {
  style: CSSProperties;
  wordsBase: string;
}): {
  wordsWithComputedWidth: WordsWithComputedWidthInterface[];
  spaceWidth: number;
} {
  // Calculate length of each word to be used to determine number of words per line
  const words = wordsBase.split(/\s+/);
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  Object.assign(text.style, style);
  text.setAttributeNS("style", "font-family", "Montserrat");
  svg.appendChild(text);
  document.body.appendChild(svg);

  const wordsWithComputedWidth = words.map((word) => {
    text.textContent = word;
    return { word, width: text.getComputedTextLength() };
  });

  text.textContent = "\u00A0"; // Unicode space
  const spaceWidth = text.getComputedTextLength();

  document.body.removeChild(svg);

  return { wordsWithComputedWidth, spaceWidth };
}

export function calculateNumberOfLines(
  wordsWithComputedWidth: WordsWithComputedWidthInterface[],
  spaceWidth: number,
  lineWidth: number
) {
  // The challenge to figuring out the width management if to
  // figure out how these values are derived.
  // Currently the lineWidth is too wide 271 vs 247
  // For some reason the x shift does not reset either but continues from the current position

  const wordsByLines = wordsWithComputedWidth.reduce<
    {
      words: string[];
      width: number;
    }[]
  >((result, { word, width }) => {
    const lastLine = result[result.length - 1] || { words: [], width: 0 };

    if (lastLine.words.length === 0) {
      // First word on line
      const newLine = { words: [word], width };

      result.push(newLine);
    } else if (
      lastLine.width + width + lastLine.words.length * spaceWidth <
      lineWidth
    ) {
      // Word can be added to an existing line
      lastLine.words.push(word);
      lastLine.width += width;
    } else {
      // Word too long to fit on existing line
      const newLine = { words: [word], width };
      result.push(newLine);
    }

    return result;
  }, []);

  return wordsByLines.map((line) => line.words.join(" "));
}

// ================================================
//  /messages route, word bubbles - END
// ================================================

// ================================================
//  message bubble, children checking - BEG
// ================================================

interface NamedChildrenSlots {
  timestamp: ReactChild;
  text: string;
}

export const isString = (word: any) => typeof word === "string";

export const isObject = <T extends object>(value: any): value is T =>
  typeof value === "object" &&
  typeof value !== "function" &&
  value != undefined;

export const isNamedChildrenSlot = (
  children: any
  // matcher: string
): children is NamedChildrenSlots => isObject(children); // && matcher in children;
// ================================================
//  message bubble, children checking - END
// ================================================

//
// START - FAKE USERS
//

export const users: User[] = [
  {
    id: "user-1",
    name: "Ryu Ruggins",
    images: [],
    profileImageUri:
      "https://images.unsplash.com/photo-1544435253-f0ead49638fa?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;w=1000&amp;q=80",
  },
  {
    id: "user-2",
    name: "Barbora Polednova",
    images: [],
    profileImageUri:
      "https://images.unsplash.com/photo-1546422401-68b415cbf8de?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;w=1000&amp;q=80",
  },
  {
    id: "user-3",
    name: "Diana Palmer",
    images: [],
    profileImageUri:
      "https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;w=1000&amp;q=80",
  },
  {
    id: "user-4",
    name: "Juliana Sousa",
    images: [],
    profileImageUri:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80",
  },
];

//
// END - FAKE USERS
//

//
// SIDEBAR ICONS
//

interface SidebarLinkInterface {
  label: string;
  href: string;
  asPath: string;
  name: string;
  iconName: NewIconProps["name"];
}

//
// START - PRIMARY SIDEBAR LINKS DATA
//

export const primarySidebarLinks: SidebarLinkInterface[] = [
  {
    asPath: "/discover",
    href: "/discover",
    iconName: "discover",
    name: "discover",
    label: "Discover",
  },
  {
    asPath: "/near-me",
    href: "/near-me",
    iconName: "nearMe",
    label: "Near me",
    name: "nearMe",
  },
  {
    asPath: "/explore",
    href: "/explore?tab=Activities",
    iconName: "activities",
    label: "Activities",
    name: "activities",
  },
  {
    asPath: "/map",
    href: "/map",
    iconName: "mapPin",
    label: "Map",
    name: "map",
  },
  {
    asPath: "/bookings",
    href: "/bookings",
    iconName: "bookings",
    label: "Bookings",
    name: "bookings",
  },
  {
    asPath: "/subscription",
    href: "/subscription",
    iconName: "subscription",
    label: "Subscription",
    name: "subscription",
  },
];

//
// END - PRIMARY SIDEBAR LINKS DATA
//

//
// START - SECONDARY SIDEBAR LINKS DATA
//

export const secondarySidebarLinks: SidebarLinkInterface[] = [
  {
    asPath: "/settings",
    href: "/settings",
    iconName: "settings",
    label: "Settings",
    name: "settings",
  },
  {
    asPath: "/logout",
    href: "/logout",
    iconName: "logout",
    label: "Logout",
    name: "logout",
  },
];

//
// END - SECONDARY SIDEBAR LINKS DATA
//

//
// START - FAKE THREADS DATA
//

export const fakeThreadsData = [
  {
    id: "thread-1",
    invitees: [
      {
        id: "user-2",
        name: "Barbora Polednova",
        images: [],
        profileImageUri:
          "https://images.unsplash.com/photo-1546422401-68b415cbf8de?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;w=1000&amp;q=80",
      },
    ],
    last_messenger: users[1],
    last_message: "What a cool photo",
    messages: [
      {
        id: "message-1",
        createdAt: "52 min ago",
        updatedAt: "",
        message: "Here's the photo from blah blah client",
        sentBy: users[1],
        user: users[0],
      },
      {
        id: "message-2",
        createdAt: "10 min ago",
        updatedAt: "",
        message: "What a cool photo",
        sentBy: users[1],
        user: users[0],
      },
    ],
    updatedAt: "33 min ago",
  },
  {
    id: "thread-2",
    invitees: [users[3], users[0]],
    last_messenger: users[3],
    last_message: "Doesn't matter I guess",
    messages: [
      {
        id: "message-1",
        createdAt: "4 hours ago",
        updatedAt: "",
        message: "Hey what, why?",
        sentBy: users[3],
        user: users[3],
      },
      {
        id: "message-2",
        createdAt: "2 hours ago",
        updatedAt: "",
        message: "Make it make sense",
        sentBy: users[3],
        user: users[3],
      },
      {
        id: "message-3",
        createdAt: "2 hours ago",
        updatedAt: "",
        message: "The hell",
        sentBy: users[3],
        user: users[3],
      },
      {
        id: "message-4",
        createdAt: "2 hours ago",
        updatedAt: "",
        message: "Another message",
        sentBy: users[3],
        user: users[3],
      },
      {
        id: "message-5",
        createdAt: "2 hours ago",
        updatedAt: "",
        message: "Doesn't matter I guess",
        sentBy: users[3],
        user: users[3],
      },
    ],
    updatedAt: "33 min ago",
  },
  {
    id: "thread-3",
    invitees: [users[2], users[3]],
    last_messenger: users[2],
    last_message: "So special",
    messages: [
      {
        id: "message-1",
        createdAt: "4 hours ago",
        updatedAt: "",
        message: "How special is this?",
        sentBy: users[3],
        user: users[3],
      },
      {
        id: "message-2",
        createdAt: "2 hours ago",
        updatedAt: "",
        message: "So special",
        sentBy: users[2],
        user: users[3],
      },
    ],
    updatedAt: "33 min ago",
  },
];

//
// END - FAKE THREADS DATA
//

//
// START - ACTIVITY LIST ITEMS
//

export interface ActivityListItem {
  timeSinceEvent: string;
  event: JSX.Element;
  eventInfo: JSX.Element | null;
  id: string;
}
// link: string;
// title: string;

const GenericAvatar = ({ uri }: { uri: string }) => {
  return (
    <Flex
      height="40px"
      width="40px"
      borderRadius="50%"
      sx={{
        position: "absolute",
        left: -45,
        top: "-50%",
        overflow: "hidden",
      }}
    >
      <Image src={uri} />
    </Flex>
  );
};

export const activityListItems: ActivityListItem[] = [
  {
    timeSinceEvent: "52 min. ago",
    event: (
      <Flex
        flexWrap="wrap"
        alignItems="center"
        sx={{
          position: "relative",
        }}
      >
        <Text
          fontWeight="bold"
          fontSize={["12px", "12px", "12px", "12px", 2, 2, 2]}
        >
          Ben Burnley
        </Text>
        &nbsp;
        <Text fontSize={["12px", "12px", "12px", "12px", 2, 2, 2]}>
          followed you
        </Text>
        {users && users[1] && users[1].profileImageUri ? (
          <GenericAvatar uri={users[1].profileImageUri} />
        ) : null}
        <FollowButton />
      </Flex>
    ),
    eventInfo: null,
    id: "0-activityList",
  },
  {
    timeSinceEvent: "1 hour ago",
    event: (
      <Flex flexWrap="wrap" alignItems="center" sx={{ position: "relative" }}>
        <Text
          fontWeight="bold"
          fontSize={["12px", "12px", "12px", "12px", 2, 2, 2]}
        >
          Ramon Chathums
        </Text>
        &nbsp;
        <Text fontSize={["12px", "12px", "12px", "12px", 2, 2, 2]}>
          liked your review
        </Text>
        {users && users[2] && users[2].profileImageUri ? (
          <GenericAvatar uri={users[2].profileImageUri} />
        ) : null}
        <FollowButton />
      </Flex>
    ),
    eventInfo: null,
    id: "1-activityList",
  },
  {
    timeSinceEvent: "2 hour ago",
    event: (
      <Flex flexWrap="wrap" alignItems="center" sx={{ position: "relative" }}>
        <Text
          fontWeight="bold"
          fontSize={["12px", "12px", "12px", "12px", 2, 2, 2]}
        >
          Arturo Forman
        </Text>
        &nbsp;
        <Text fontSize={["12px", "12px", "12px", "12px", 2, 2, 2]}>
          followed you
        </Text>
        {users && users[0] && users[0].profileImageUri ? (
          <GenericAvatar uri={users[0].profileImageUri} />
        ) : null}
        <FollowButton />
      </Flex>
    ),
    eventInfo: (
      <Box
        m={0}
        mt={3}
        pr={2}
        minHeight="160px"
        width={1}
        sx={{
          backgroundImage:
            "url(https://source.unsplash.com/random/1024x768?sky)",
          backgroundSize: "cover",
          borderRadius: 16,
        }}
      ></Box>
    ),
    id: "2-activityList",
  },
  {
    timeSinceEvent: "2 hour ago",
    event: (
      <Flex flexWrap="wrap" alignItems="center" sx={{ position: "relative" }}>
        <Text
          fontWeight="bold"
          fontSize={["12px", "12px", "12px", "12px", 2, 2, 2]}
        >
          Simone Byers
        </Text>
        &nbsp;
        <Text fontSize={["12px", "12px", "12px", "12px", 2, 2, 2]}>
          liked your review
        </Text>
        {users && users[4] && users[4].profileImageUri ? (
          <GenericAvatar uri={users[4].profileImageUri} />
        ) : null}
        <FollowButton />
      </Flex>
    ),
    eventInfo: null,
    id: "0-activityList",
  },
  {
    timeSinceEvent: "2 hour ago",
    event: (
      <Flex flexWrap="wrap" alignItems="center" sx={{ position: "relative" }}>
        <Text
          fontWeight="bold"
          fontSize={["12px", "12px", "12px", "12px", 2, 2, 2]}
        >
          Shia Lovegood
        </Text>{" "}
        &nbsp;
        <Text fontSize={["12px", "12px", "12px", "12px", 2, 2, 2]}>
          commented on your review
        </Text>
        {users && users[3] && users[3].profileImageUri ? (
          <GenericAvatar uri={users[3].profileImageUri} />
        ) : null}
        <FollowButton />
      </Flex>
    ),
    eventInfo: (
      <Box
        m={0}
        mt={3}
        pr={2}
        minHeight="160px"
        width={1}
        sx={{
          backgroundImage:
            "url(https://source.unsplash.com/random/1024x768?sky)",
          backgroundSize: "cover",
          borderRadius: 16,
        }}
      ></Box>
    ),
    id: "1-activityList",
  },
  {
    timeSinceEvent: "2 hour ago",
    event: (
      <Flex flexWrap="wrap" alignItems="center" sx={{ position: "relative" }}>
        <Text
          fontWeight="bold"
          fontSize={["12px", "12px", "12px", "12px", 2, 2, 2]}
        >
          Anthony Hitchens
        </Text>{" "}
        &nbsp;
        <Text fontSize={["12px", "12px", "12px", "12px", 2, 2, 2]}>
          sent you a message
        </Text>
        {users && users[2] && users[2].profileImageUri ? (
          <GenericAvatar uri={users[2].profileImageUri} />
        ) : null}
        <FollowButton />
      </Flex>
    ),
    eventInfo: null,
    id: "2-activityList",
  },
  {
    timeSinceEvent: "2 hour ago",
    event: (
      <Flex flexWrap="wrap" alignItems="center" sx={{ position: "relative" }}>
        <Text
          fontWeight="bold"
          fontSize={["12px", "12px", "12px", "12px", 2, 2, 2]}
        >
          Ryu Ruggins
        </Text>{" "}
        &nbsp;
        <Text fontSize={["12px", "12px", "12px", "12px", 2, 2, 2]}>
          posted a new review
        </Text>
        {users && users[6] && users[6].profileImageUri ? (
          <GenericAvatar uri={users[6].profileImageUri} />
        ) : null}
        <FollowButton />
      </Flex>
    ),
    eventInfo: null,
    id: "2-activityList",
  },
  {
    timeSinceEvent: "3 hour ago",
    event: (
      <Flex flexWrap="wrap" alignItems="center" sx={{ position: "relative" }}>
        <Text
          fontWeight="bold"
          fontSize={["12px", "12px", "12px", "12px", 2, 2, 2]}
        >
          Ben Burnley
        </Text>{" "}
        &nbsp;
        <Text fontSize={["12px", "12px", "12px", "12px", 2, 2, 2]}>
          liked your review
        </Text>
        {users && users[7] && users[7].profileImageUri ? (
          <GenericAvatar uri={users[7].profileImageUri} />
        ) : null}
        <FollowButton />
      </Flex>
    ),
    eventInfo: null,
    id: "2-activityList",
  },
];
//
// END -ACTIVITY LIST ITMES
//

//
// START - FAKE BOOKINGS - TRIPS
//

export interface Booking {
  origin: string;
  destination: string;
  dateOfTravel: string;
  timeOfTravel: string;
  travelCarrier: string;
  travelType: NewIconProps["name"]; // "plane" | "bus" | "train" | "ship";
}

export const bookings: Booking[] = [
  {
    origin: "Hawaii",
    destination: "Sevilla",
    dateOfTravel: "28 Oct 2018",
    timeOfTravel: "11:00 AM",
    travelCarrier: "Emirates Airways",
    travelType: "plane",
  },
  {
    origin: "Sevilla",
    destination: "Monaco",
    dateOfTravel: "28 Oct 2018",
    timeOfTravel: "11:00 AM",
    travelCarrier: "Emirates Airways",
    travelType: "bus",
  },
  {
    origin: "Atlanta",
    destination: "Marrakech",
    dateOfTravel: "28 Oct 2018",
    timeOfTravel: "11:00 AM",
    travelCarrier: "Emirates Airways",
    travelType: "plane",
  },
  {
    origin: "Geneva",
    destination: "Mexico City",
    dateOfTravel: "28 Oct 2018",
    timeOfTravel: "11:00 AM",
    travelCarrier: "Emirates Airways",
    travelType: "plane",
  },
  {
    origin: "Reykjavik",
    destination: "Sevilla",
    dateOfTravel: "28 Oct 2018",
    timeOfTravel: "11:00 AM",
    travelCarrier: "Emirates Airways",
    travelType: "ship",
  },
  {
    origin: "Hawaii",
    destination: "Sevilla",
    dateOfTravel: "28 Oct 2018",
    timeOfTravel: "11:00 AM",
    travelCarrier: "Emirates Airways",
    travelType: "plane",
  },
  {
    origin: "Sevilla",
    destination: "Monaco",
    dateOfTravel: "28 Oct 2018",
    timeOfTravel: "11:00 AM",
    travelCarrier: "Emirates Airways",
    travelType: "bus",
  },
  {
    origin: "Atlanta",
    destination: "Marrakech",
    dateOfTravel: "28 Oct 2018",
    timeOfTravel: "11:00 AM",
    travelCarrier: "Emirates Airways",
    travelType: "plane",
  },
  {
    origin: "Geneva",
    destination: "Mexico City",
    dateOfTravel: "28 Oct 2018",
    timeOfTravel: "11:00 AM",
    travelCarrier: "Emirates Airways",
    travelType: "plane",
  },
  {
    origin: "Reykjavik",
    destination: "Sevilla",
    dateOfTravel: "28 Oct 2018",
    timeOfTravel: "11:00 AM",
    travelCarrier: "Emirates Airways",
    travelType: "ship",
  },
];

//
// END - FAKE BOOKINGS - TRIPS
//

//
// START - EXPLORE PAGE, DISCOVER TAB, FEATURE CARDS
//

interface ImageInterface {
  uri: string;
  alt: string;
  caption: string;
}

export interface FeatureCardProps {
  type:
    | "entertainment-local"
    | "entertainment-regional"
    | "entertainment-worldwide"
    | "vacation";
  category: string;
  label: string;
  price: string;
  city: string;
  image: ImageInterface;
  likes: string;
  weather: {
    label: string;
    name: "weather_sunny" | "weather_rainy";
    temperature: number;
    temperatureUnits: string;
  };
}

export const fauxFeatureCards: FeatureCardProps[] = [
  {
    type: "entertainment-local",
    category: "dance",
    image: {
      uri: "https://source.unsplash.com/random/1024x768?city",
      alt: "",
      caption: "",
    },
    label: "Red Ballet",
    price: "$967",
    city: "New York",
    likes: "4k",
    weather: {
      name: "weather_sunny",
      label: "Sunny",
      temperature: 25,
      temperatureUnits: "celsius",
    },
  },
  {
    type: "entertainment-worldwide",
    category: "dance",
    image: {
      uri: "https://source.unsplash.com/random/1024x768?city",
      alt: "",
      caption: "",
    },
    label: "Mexico City Festival",
    price: "$967",
    city: "New York",
    likes: "4k",
    weather: {
      name: "weather_sunny",
      label: "Sunny",
      temperature: 25,
      temperatureUnits: "celsius",
    },
  },
  {
    type: "vacation",
    category: "resort / spa",
    image: {
      uri: "https://source.unsplash.com/random/1024x768?city",
      alt: "",
      caption: "",
    },
    label: "Green Lands Hotel & Spa",
    price: "$967",
    city: "Philly",
    likes: "4k",
    weather: {
      name: "weather_sunny",
      label: "Sunny",
      temperature: 25,
      temperatureUnits: "celsius",
    },
  },
  {
    type: "entertainment-local",
    category: "music venue",
    image: {
      uri: "https://source.unsplash.com/random/1024x768?city",
      alt: "",
      caption: "",
    },
    label: "Ella's Live",
    price: "$123",
    city: "Oakland",
    likes: "4k",
    weather: {
      name: "weather_rainy",
      label: "Rainy",
      temperature: 18,
      temperatureUnits: "celsius",
    },
  },
  {
    type: "entertainment-local",
    category: "dance",
    image: {
      uri: "https://source.unsplash.com/random/1024x768?city",
      alt: "",
      caption: "",
    },
    label: "Red Ballet",
    price: "$967",
    city: "New York",
    likes: "4k",
    weather: {
      name: "weather_sunny",
      label: "Sunny",
      temperature: 25,
      temperatureUnits: "celsius",
    },
  },
  {
    type: "entertainment-worldwide",
    category: "dance",
    image: {
      uri: "https://source.unsplash.com/random/1024x768?city",
      alt: "",
      caption: "",
    },
    label: "Mexico City Festival",
    price: "$967",
    city: "New York",
    likes: "4k",
    weather: {
      name: "weather_sunny",
      label: "Sunny",
      temperature: 25,
      temperatureUnits: "celsius",
    },
  },
  {
    type: "vacation",
    category: "resort / spa",
    image: {
      uri: "https://source.unsplash.com/random/1024x768?city",
      alt: "",
      caption: "",
    },
    label: "Green Lands Hotel & Spa",
    price: "$967",
    city: "Philly",
    likes: "4k",
    weather: {
      name: "weather_sunny",
      label: "Sunny",
      temperature: 25,
      temperatureUnits: "celsius",
    },
  },
  {
    type: "entertainment-local",
    category: "music venue",
    image: {
      uri: "https://source.unsplash.com/random/1024x768?city",
      alt: "",
      caption: "",
    },
    label: "Ella's Live",
    price: "$123",
    city: "Oakland",
    likes: "4k",
    weather: {
      name: "weather_rainy",
      label: "Rainy",
      temperature: 18,
      temperatureUnits: "celsius",
    },
  },
];

//
// END - EXPLORE PAGE, DISCOVER TAB, FEATURE CARDS
//
