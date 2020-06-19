import React from "react";
import { NextSeo } from "next-seo";
// import dynamic from "next/dynamic";

import { ClonedChildrenFromAuthLayout } from "../pages/traveling";
import { Flex, Text, Button } from "./primitives/styled-rebass";
import { LayoutAuthorizedHeaderBookings } from "./layout-authorized-header-bookings";
import { BookingsTabs } from "./bookings-tabs";
import Icon from "./icon";
import { Booking, bookings } from "./helpers";

// const BookingsTabsProfileForm = dynamic(() =>
//   import("./Bookings-tabs-profile-form")
// );

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
      <Flex flexDirection="column" flex={1} overflowY="auto">
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

const BookingsTabHotels: React.FC<BookingsTabsProps> = ({}) => {
  return (
    <Flex flexDirection="column" p={3} bg="#eee" flex={1}>
      <Flex flexDirection="column" as="ul" p={0} m={0}>
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

const BookingsTabTrips: React.FC<BookingsTabsProps> = ({ label }) => {
  return (
    <Flex px={3}>
      <Text>{label}</Text>
    </Flex>
  );
};

export const BookingsCard: React.FC<Booking> = ({
  origin,
  destination,
  dateOfTravel,
  timeOfTravel,
  travelCarrier,
  travelType,
}) => {
  return (
    <Flex
      as="li"
      minHeight="120px"
      bg="#fff"
      borderRadius="18px"
      height="auto"
      my={2}
      p={3}
      pl={1}
      sx={{
        boxShadow: "0px 40px 100px 0px rgba(0, 0, 0, 0.10)",
        listStyle: "none",
      }}
    >
      {/* START ICON - ROW ITEM 1 */}
      <Flex alignItems="center" justifyContent="center" px={3}>
        <Flex height="70px" width="70px">
          <Icon active={false} name={travelType} size="70" fill="fuchsia" />
        </Flex>
      </Flex>
      {/* END ICON - ROW ITEM 1 */}
      {/* START BOOKING INFO - ROW ITEM 2 */}
      <Flex flexDirection="column" width={1}>
        {/* START OD ROW */}

        <Flex py={1}>
          <Text>{origin}</Text>

          <Flex mx={2} height="20px" width="20px">
            <Icon
              active={false}
              name="arrow_right_stick"
              size="20"
              fill="#000022"
            />
          </Flex>
          <Text>{destination}</Text>
        </Flex>
        {/* END OD ROW */}
        {/* START DATE & TIME OF TRAVEL ROW */}
        <Flex py={1}>
          <Text>{dateOfTravel}</Text>
          <Flex mx={2} height="20px" width="20px">
            <Icon active={false} name="horizontal_line" size="20" fill="#222" />
          </Flex>
          <Text>{timeOfTravel}</Text>
        </Flex>
        {/* END DATE & TIME OF TRAVEL ROW */}
        {/* START CARRIER NAME ROW */}
        <Flex py={1}>
          <Text>{travelCarrier}</Text>
        </Flex>
        {/* END CARRIER NAME ROW */}
      </Flex>
      {/* END BOOKING INFO - ROW ITEM 2 */}
      {/* START MORE ICON - ROW ITEM 2 */}
      <Flex width="45px" pt={2}>
        <Button
          bg="transparent"
          p={0}
          sx={{
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => console.log("MORE MENU CLICKED")}
        >
          <Icon active={false} name="more_vertical" size="18px" fill="#aaa" />
        </Button>
      </Flex>
      {/* END MORE ICON - ROW ITEM 2 */}
    </Flex>
  );
};
