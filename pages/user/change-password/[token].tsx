import { Field, Formik, FormikErrors } from "formik";
import React from "react";
import { NextPage, NextPageContext } from "next";

import { InputField } from "../../../components/form-fields/input-field";
import { getLayout } from "../../../components/layout.v2";
import { Button } from "../../../components/primitives/styled-rebass";
import { NextPageStaticVariableProps } from "../../../typings/types";
import { useChangePasswordFromTokenMutation } from "../../../lib/mutations/change-password-from-token.graphql";
import withApollo from "../../../lib/with-apollo";

interface ChangePasswordProps extends Partial<NextPageContext> {
  token: string;
}

const ChangePassword: NextPage<ChangePasswordProps> &
  NextPageStaticVariableProps = ({ token }) => {
  const [changePasswordFunc, { data }] = useChangePasswordFromTokenMutation();
  if (!token || token.length === 0) {
    return <div>Error! No token.</div>;
  } else {
    return (
      <Formik
        onSubmit={async (data, { setErrors }) => {
          try {
            const response = await changePasswordFunc({
              variables: {
                data: {
                  password: data.password,
                  token
                }
              }
            });

            console.log({ response });
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
  }
};

ChangePassword.getInitialProps = ({ pathname, query }) => {
  console.log("OH NOOOOOO!", { query });

  if (query && query.token && query.token.constructor === Array) {
    const { token } = query;
    return { pathname, query, token: token[0] };
  }
  if (query && query.token && typeof query.token === "string") {
    const { token } = query;
    return { pathname, query, token };
  } else {
    console.log("OH NOOOOOO!");
    return { pathname, query, token: "" };
  }
};

ChangePassword.displayName = "Change Password";
ChangePassword.getLayout = getLayout;
ChangePassword.title = "Change password";

export default withApollo(ChangePassword);

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
