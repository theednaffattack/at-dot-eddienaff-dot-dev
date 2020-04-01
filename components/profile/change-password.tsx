import { Field, Formik, FormikErrors } from "formik";
import React from "react";

import { InputField } from "../form-fields/input-field";
import { Button } from "../primitives/styled-rebass";
import { useChangePasswordFromContextUseridMutation } from "../../lib/mutations/change-password-from-context-userId.graphql";

interface ChangePasswordProps {}

const ChangePassword: React.FC<ChangePasswordProps> = () => {
  const [
    changePasswordFunc,
    { data }
  ] = useChangePasswordFromContextUseridMutation();

  return (
    <Formik
      onSubmit={async (data, { setErrors }) => {
        try {
          const response = await changePasswordFunc({
            variables: {
              data: {
                password: data.password
              }
            }
          });

          console.log({ response });

          // Router.push("/profile");
        } catch (error) {
          const displayErrors: { [key: string]: string } = {};

          let myErrors =
            error.graphQLErrors[0].extensions.exception.validationErrors;

          myErrors.forEach((validationError: any) => {
            Object.values(validationError.constraints).forEach(
              (message: any) => {
                displayErrors[validationError.property] = message;
              }
            );
          });
          return setErrors(displayErrors);

          // const errors: { [key: string]: string } = {};
          // err.graphQLErrors[0].validationErrors.forEach(
          //   (validationErr: any) => {
          //     Object.values(validationErr.constraints).forEach(
          //       (message: any) => {
          //         errors[validationErr.property] = message;
          //       }
          //     );
          //   }
          // );
          // setErrors(errors);
        }
      }}
      initialValues={{
        password: ""
      }}
    >
      {({ errors, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {data ? (
            <DisplayResponseData data={data}>
              Let's see the data!!!
            </DisplayResponseData>
          ) : null}
          <Field
            name="password"
            type="password"
            placeholder="change password"
            component={InputField}
          />
          {errors ? (
            <DisplaySubmitErrors
              errors={errors}
              errorKey="password"
            ></DisplaySubmitErrors>
          ) : null}
          <Button bg="blue" type="submit">
            change password
          </Button>
        </form>
      )}
    </Formik>
    // )}
    // </HelloWorldComponent>
  );
};

export default ChangePassword;

interface DisplayResponseDataProps {
  data: any;
}

export const DisplayResponseData: React.FC<DisplayResponseDataProps> = ({
  children,
  data
}) => {
  return (
    <div>
      {children}
      {JSON.stringify(data, null, 2)}
    </div>
  );
};

interface DisplaySubmitErrorsProps {
  errors: FormikErrors<{
    [key: string]: string;
  }>;
  errorKey: keyof FormikErrors<{ [key: string]: string }>;
}

export const DisplaySubmitErrors: React.FC<DisplaySubmitErrorsProps> = ({
  errors,
  errorKey
}) => {
  return <div>{errors[errorKey]}</div>;
};
