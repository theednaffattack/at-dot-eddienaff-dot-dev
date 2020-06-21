import React from "react";

import { Flex } from "./primitives/styled-rebass";

export interface GeneralSettingsFormikValues {
  explore_search: boolean;
  main_fonts: string;
  night_mode: boolean;
  new_message_notification: boolean;
  push_notifications: boolean;
  theme: "light" | "dark";
}

interface BookingsTabTripsProps {
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}

export const BookingsTabTrips: React.FC<BookingsTabTripsProps> = (
  {
    // handleChange,
  }
) => {
  return (
    <Flex flexDirection="column" bg="#eee" flex={1} p={4}>
      {/* START - THEME SETTING (SELECT PULLDOWN) */}
      TRIPS
    </Flex>
  );
};
