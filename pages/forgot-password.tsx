import { Field, Formik } from "formik";
import React from "react";
import Router from "next/router";
import { NextPageContext, NextPage } from "next";

import { Button } from "../components/primitives/styled-rebass";
import { getLayout } from "../components/layout.v2";
import { InputField } from "../components/form-fields/input-field";
import { useForgotPasswordMutation } from "../__generated__/__intermediate__/lib/mutations/forgot-password.graphql-45fb3cb153db88a8356083d0e021e7e13bbf348f";
import { DisplayResponseData } from "./user/change-password/[token]";
import withApollo from "../lib/with-apollo";
import { NextPageStaticVariableProps } from "../typings/types";

interface ForgotPasswordProps extends Partial<NextPageContext> {}

const ForgotPassword: NextPage<ForgotPasswordProps> &
  NextPageStaticVariableProps = () => {
  const [
    forgotPasswordFunc,
    { data: returnData }
  ] = useForgotPasswordMutation();
  return (
    <Formik
      // validateOnBlur={false}
      // validateOnChange={false}
      onSubmit={async (data, { setErrors }) => {
        try {
          let forgotResponse = await forgotPasswordFunc({
            variables: {
              email: data.email
            }
          });

          console.log("forgotResponse", forgotResponse);

          Router.push("/check-email");
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
        email: ""
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="email" placeholder="email" component={InputField} />
          <Button bg="blue" type="submit">
            submit
          </Button>

          <DisplayResponseData data={returnData}>
            Let's see the data!!!
          </DisplayResponseData>
          {returnData && returnData.forgotPassword === true
            ? "email sent"
            : null}
        </form>
      )}
    </Formik>
  );
};

ForgotPassword.displayName = "Forgot password";
ForgotPassword.getLayout = getLayout;
ForgotPassword.title = "Forgot password";

export default withApollo(ForgotPassword);
