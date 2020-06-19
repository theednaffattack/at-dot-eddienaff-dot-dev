import { Field } from "formik";
import React from "react";

import { Flex, Text } from "./primitives/styled-rebass";
import { ToggleCheckboxBetter } from "./form-fields/checkbox-custom";
import { Checkbox } from "./form-fields/rebass-forms";

export interface GeneralSettingsFormikValues {
  explore_search: boolean;
  main_fonts: string;
  night_mode: boolean;
  new_message_notification: boolean;
  push_notifications: boolean;
  theme: "light" | "dark";
}

interface SettingsTabGeneralProps {
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };

  values: GeneralSettingsFormikValues;
}

export const SettingsTabGeneral: React.FC<SettingsTabGeneralProps> = ({
  handleChange,
  values,
}) => {
  return (
    <Flex flexDirection="column" bg="#eee" flex={1} p={4}>
      {/* START - THEME SETTING (SELECT PULLDOWN) */}

      <Flex mb={3}>
        <Flex mr="auto" flexDirection="column">
          <Text as="label" htmlFor="cars">
            Interface theme
          </Text>

          <select
            name="theme"
            id="theme"
            value={values.theme}
            onChange={handleChange}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </Flex>
        <Flex></Flex>
      </Flex>
      {/* END - THEME SETTING (SELECT PULLDOWN)*/}

      {/* START - EXPLORE SETTING (SWITCH) */}
      <Flex mb={3}>
        <Flex mr="auto" flexDirection="column">
          <Text>Explore search</Text>
          <Text fontSize="12px" sx={{ textTransform: "uppercase" }}>
            {values.explore_search ? "enabled" : "disabled"}
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Field
            // autoComplete="explore"
            label="explore search"
            id="explore_search"
            name="explore_search"
            type="checkbox"
            key="explore_search"
            component={ToggleCheckboxBetter}
          />
        </Flex>
      </Flex>
      {/* END - EXPLORE SETTING (SWITCH)*/}

      {/* START - NIGHT MODE (SWITCH) */}
      <Flex mb={3}>
        <Flex flexDirection="column" mr="auto">
          <Text>Night mode</Text>
          <Text fontSize="12px" sx={{ textTransform: "uppercase" }}>
            {values.night_mode === false ? "disabled" : "enabled"}
          </Text>
        </Flex>
        <Flex alignItems="center">
          <label htmlFor="night_mode">
            <Field
              id="night_mode"
              name="night_mode"
              type="checkbox"
              component={ToggleCheckboxBetter}
            />
          </label>
        </Flex>
      </Flex>
      {/* END - NIGHT MODE (SWITCH)*/}

      {/* START - MAIN FONTS (SWITCH) */}
      <Flex mb={3}>
        <Flex mr="auto" flexDirection="column">
          <Text as="label" htmlFor="cars">
            Main fonts
          </Text>

          <select
            name="main_fonts"
            id="main_fonts"
            value={values.main_fonts}
            onChange={handleChange}
          >
            <option value="modern">Modern</option>
            <option value="fake_font">Fake font</option>
          </select>
        </Flex>
        <Flex></Flex>
      </Flex>
      {/* END - MAIN FONTS (SWITCH)*/}

      {/* START - PUSH NOTIFICATIONS (SWITCH) */}
      <Flex mb={3}>
        <Flex flexDirection="column" mr="auto">
          <Text>Push notifications</Text>
          <Text fontSize="12px" sx={{ textTransform: "uppercase" }}>
            {values.push_notifications === false ? "disabled" : "enabled"}
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <label htmlFor="push_notifications">
            <Field
              id="push_notifications"
              name="push_notifications"
              type="checkbox"
              component={Checkbox}
            />
          </label>
        </Flex>
      </Flex>
      {/* END - PUSH NOTIFICATIONS (SWITCH)*/}

      {/* START - NEW MESSAGE NOTIFICATION (SWITCH) */}
      <Flex mb={3}>
        <Flex flexDirection="column" mr="auto">
          <Text>New message notification</Text>
          <Text fontSize="12px" sx={{ textTransform: "uppercase" }}>
            {values.new_message_notification === false ? "disabled" : "enabled"}
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <label htmlFor="new_message_notification">
            <Field
              id="new_message_notification"
              name="new_message_notification"
              type="checkbox"
              component={Checkbox}
            />
          </label>
        </Flex>
      </Flex>
      {/* END - NEW MESSAGE NOTIFICATION (SWITCH)*/}
    </Flex>
  );
};
