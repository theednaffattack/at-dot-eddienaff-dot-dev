import { ProfileSettingsFormikValues } from "./settings-tab-profile";
import { Formik, Form } from "formik";
import { SettingsTabProfile } from "./settings-tab-profile";

interface SettingsTabsProfileFormProps {
  label: string;
}

export const SettingsTabsProfileForm: React.FC<SettingsTabsProfileFormProps> = () => {
  const initialValues: ProfileSettingsFormikValues = {
    show_photos: false,
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
            <SettingsTabProfile handleChange={handleChange} values={values} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SettingsTabsProfileForm;
