import React from "react";

import { Flex, Text, Button } from "./primitives/styled-rebass";
import { Formik } from "formik";
import { SettingsTabGeneral } from "./settings-tab-general";

interface SettingsNavigationTabsProps {}

interface FormikInitialValues {
  explore_search: boolean;
  theme: "light" | "dark";
}

export const SettingsNavigationTabs: React.FC<SettingsNavigationTabsProps> = ({}) => {
  const myInitialValues: FormikInitialValues = {
    explore_search: false,
    theme: "light",
  };
  // const [currentTabIndex, setCurrentTabIndex] = React.useState<number>(0);
  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={async (data, { setErrors }) => {
        console.log("DATA SUBMITTED", { data, setErrors });
      }}
      initialValues={myInitialValues}
    >
      {({ handleChange, values }) => {
        return (
          <Flex flexDirection="column" flex={1}>
            {/* START - SETTINGS */}
            <SettingsTabGeneral handleChange={handleChange} values={values} />

            {/* END - SETTINGS */}
          </Flex>
        );
      }}
    </Formik>
  );
};
