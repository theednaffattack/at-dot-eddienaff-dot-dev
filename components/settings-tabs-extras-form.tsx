import { Formik, Form } from "formik";

import {
  ExtrasSettingsFormikValues,
  SettingsTabExtras,
} from "./settings-tab-extras";

interface SettingsTabsExtrasFormProps {
  label: string;
}

export const SettingsTabsExtrasForm: React.FC<SettingsTabsExtrasFormProps> = () => {
  const initialValues: ExtrasSettingsFormikValues = {
    free_money: false,
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
            <SettingsTabExtras handleChange={handleChange} values={values} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SettingsTabsExtrasForm;
