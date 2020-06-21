import React from "react";
import { NextSeo } from "next-seo";

import { ClonedChildrenFromAuthLayout } from "../pages/traveling";
import { Flex, Text } from "./primitives/styled-rebass";
import { LayoutAuthorizedHeaderBookings } from "./layout-authorized-header-bookings";
import { BookingsTabs } from "./bookings-tabs";
import { BookingsCard } from "./bookings-card";
import { bookings } from "./helpers";

interface BookingsPageComponentProps extends ClonedChildrenFromAuthLayout {
  // pathname: NextContext["pathname"];
  // query: NextContext["query"];
}

export const BookingsPageComponent: React.FC<BookingsPageComponentProps> = ({
  modalOverlayDispatch,
  modalOverlayState,
}) => {
  console.log("Bookings PAGE COMPONENT JUST DITCHING THE ERROR MESSAGE", {
    modalOverlayDispatch,
    modalOverlayState,
  });
  return (
    <>
      <NextSeo
        title="Bookings"
        description="Control and edit various application Bookings."
        canonical="https://at.eddienaff.dev/"
        openGraph={{
          url: "https://at.eddienaff.dev/Bookings",
          title: "Bookings",
          description: "Control and edit various application Bookings.",
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
          site_name: "Atlas Travel",
        }}
      />
      <Flex flexDirection="column" flex={1}>
        <LayoutAuthorizedHeaderBookings
          modalOverlayDispatch={modalOverlayDispatch}
          modalOverlayState={modalOverlayState}
          title="Bookings"
        />

        <BookingsTabs>
          <BookingsTabHotels label="Hotels" />
          <BookingsTabTrips label="Trips" />
        </BookingsTabs>
      </Flex>
    </>
  );
};

interface BookingsTabsProps {
  label: string;
}

const BookingsTabHotels: React.FC<BookingsTabsProps> = ({ label }) => {
  return (
    <Flex flexDirection="column" p={3} bg="#eee" flex={1}>
      <Text>{label}</Text>
    </Flex>
  );
};

const BookingsTabTrips: React.FC<BookingsTabsProps> = ({}) => {
  return (
    <Flex px={3}>
      <Flex
        as="ol"
        flex={1}
        flexDirection="column"
        p={0}
        m={0}
        sx={{ listStyle: "none" }}
      >
        {bookings.map((item, index) => (
          <BookingsCard
            key={index + "-" + item.origin + "-" + item.destination}
            origin={item.origin}
            dateOfTravel={item.dateOfTravel}
            destination={item.destination}
            timeOfTravel={item.timeOfTravel}
            travelCarrier={item.travelCarrier}
            travelType={item.travelType}
          />
        ))}
      </Flex>
    </Flex>
  );
};
