import { Field } from "formik";
import React from "react";

import { Flex, Text } from "./primitives/styled-rebass";
import { ToggleCheckboxBetter } from "./form-fields/checkbox-custom";

export interface ProfileSettingsFormikValues {
  show_photos: boolean;
}

interface SettingsTabProfileProps {
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };

  values: ProfileSettingsFormikValues;
}

export const SettingsTabProfile: React.FC<SettingsTabProfileProps> = ({
  // handleChange,
  values,
}) => {
  return (
    <Flex flexDirection="column" bg="#eee" flex={1} p={4}>
      {/* START - THEME SETTING (SELECT PULLDOWN) */}

      <Flex mb={3}>
        <Flex flexDirection="column" mr="auto">
          <Text>Night mode</Text>
          <Text fontSize="12px" sx={{ textTransform: "uppercase" }}>
            {values.show_photos === false ? "disabled" : "enabled"}
          </Text>
        </Flex>
        <Flex alignItems="center">
          <label htmlFor="show_photos">
            <Field
              id="show_photos"
              name="show_photos"
              type="checkbox"
              component={ToggleCheckboxBetter}
            />
          </label>
        </Flex>
      </Flex>
      {/* END - THEME SETTING (SELECT PULLDOWN)*/}
    </Flex>
  );
};
