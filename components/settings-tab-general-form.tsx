import { Formik, Form } from "formik";

import {
  GeneralSettingsFormikValues,
  SettingsTabGeneral,
} from "./settings-tab-general";

interface SettingsTabsFormGeneralProps {
  label: string;
}

export const SettingsTabsGeneralForm: React.FC<SettingsTabsFormGeneralProps> = () => {
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
