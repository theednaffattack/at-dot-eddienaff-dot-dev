import React from "react";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

import { ClonedChildrenFromAuthLayout } from "../pages/traveling";
import { Flex } from "./primitives/styled-rebass";
import { LayoutAuthorizedHeaderSettings } from "./layout-authorized-header-settings";
import { SettingsTabs } from "./settings-tabs";
import { Formik, Form } from "formik";
import {
  SettingsTabGeneral,
  GeneralSettingsFormikValues,
} from "./settings-tab-general";
import SettingsTabsExtrasForm from "./settings-tabs-extras-form";

const SettingsTabsProfileForm = dynamic(() =>
  import("./settings-tabs-profile-form")
);

interface SettingsPageComponentProps extends ClonedChildrenFromAuthLayout {
  // pathname: NextContext["pathname"];
  // query: NextContext["query"];
}

export const SettingsPageComponent: React.FC<SettingsPageComponentProps> = ({
  modalOverlayDispatch,
  modalOverlayState,
}) => {
  console.log("SETTINGS PAGE COMPONENT JUST DITCHING THE ERROR MESSAGE", {
    modalOverlayDispatch,
    modalOverlayState,
  });
  return (
    <>
      <NextSeo
        title="Settings"
        description="Control and edit various application settings."
        canonical="https://at.eddienaff.dev/"
        openGraph={{
          url: "https://at.eddienaff.dev/settings",
          title: "Settings",
          description: "Control and edit various application settings.",
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
        <LayoutAuthorizedHeaderSettings
          modalOverlayDispatch={modalOverlayDispatch}
          modalOverlayState={modalOverlayState}
          title="Settings"
        />

        <SettingsTabs>
          <SettingsTabsForm label="General" />
          <SettingsTabsProfileForm label="Profile" />
          <SettingsTabsExtrasForm label="Extras" />
        </SettingsTabs>
      </Flex>
    </>
  );
};

interface SettingsTabsFormProps {
  label: string;
}

const SettingsTabsForm: React.FC<SettingsTabsFormProps> = () => {
  const initialValues: GeneralSettingsFormikValues = {
    explore_search: false,
    main_fonts: "modern",
    new_message_notification: false,
    night_mode: false,
    push_notifications: false,
    theme: "light",
  };
  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={async (data, { setErrors }) => {
        console.log("DATA SUBMITTED", { data, setErrors });
      }}
      initialValues={initialValues}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <Form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              width: "100%",
              color: "#444444",
            }}
          >
            <SettingsTabGeneral handleChange={handleChange} values={values} />
          </Form>
        );
      }}
    </Formik>
  );
};
