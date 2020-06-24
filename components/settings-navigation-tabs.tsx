import React from "react";
import { Formik } from "formik";

import { Flex } from "./primitives/styled-rebass";
import {
  SettingsTabGeneral,
  GeneralSettingsFormikValues,
} from "./settings-tab-general";

interface SettingsNavigationTabsProps {}

interface FormikInitialValues extends GeneralSettingsFormikValues {}

export const SettingsNavigationTabs: React.FC<SettingsNavigationTabsProps> = ({}) => {
  const myInitialValues: FormikInitialValues = {
    explore_search: false,
    theme: "light",
    main_fonts: "text",
    night_mode: false,
    new_message_notification: false,
    push_notifications: false,
  };

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
