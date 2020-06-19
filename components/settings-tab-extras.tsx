import { Field } from "formik";
import React from "react";

import { Flex, Text } from "./primitives/styled-rebass";
import { ToggleCheckboxBetter } from "./form-fields/checkbox-custom";

export interface ExtrasSettingsFormikValues {
  free_money: boolean;
}

interface SettingsTabExtrasProps {
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };

  values: ExtrasSettingsFormikValues;
}

export const SettingsTabExtras: React.FC<SettingsTabExtrasProps> = ({
  // handleChange,
  values,
}) => {
  return (
    <Flex flexDirection="column" bg="#eee" flex={1} p={4}>
      {/* START - SHOW PHOTOS (TOGGLE) */}

      <Flex mb={3}>
        <Flex flexDirection="column" mr="auto">
          <Text>Free Moneyyyyyy!!!</Text>
          <Text fontSize="12px" sx={{ textTransform: "uppercase" }}>
            {values.free_money === false ? "disabled" : "enabled"}
          </Text>
        </Flex>
        <Flex alignItems="center">
          <label htmlFor="free_money">
            <Field
              id="free_money"
              name="free_money"
              type="checkbox"
              component={ToggleCheckboxBetter}
            />
          </label>
        </Flex>
      </Flex>
      {/* END - SHOW PHOTOS (TOGGLE)*/}
    </Flex>
  );
};
