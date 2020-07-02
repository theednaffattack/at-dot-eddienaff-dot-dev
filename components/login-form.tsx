import { Field, Formik } from "formik";
import Router from "next/router";

import { InputField } from "../components/form-fields/input-field";
import {
  CustomButton,
  Flex,
  Form,
  Text,
} from "../components/primitives/styled-rebass";
import { useLoginMutation } from "../lib/mutations/login.graphql";
import { ToggleCheckbox } from "./form-fields/checkbox-custom";

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const [loginFunc] = useLoginMutation();

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={async (data, { setErrors }) => {
        let response;

        try {
        } catch (error) {
          console.error(error);
        }
        try {
          response = await loginFunc({
            variables: {
              email: data.email,
              password: data.password,
            },
            // update: (_, { data }) => {
            //   if (!data || !data.login) {
            //     console.log("!DATA || !DATA.LOGIN");

            //     return;
            //   }

            //   // cache.writeQuery<MeQuery>({
            //   //   query: ME_QUERY,
            //   //   data: {
            //   //     __typename: "Query",
            //   //     me: data.login
            //   //   }
            //   // });
            //   // console.log("AFTER WRITEQUERY");
            // }
          });
          // Router.push("/login");
        } catch (error) {
          const displayErrors: { [key: string]: string } = {};

          let myErrors = error.graphQLErrors; //.extensions.exception.validationErrors;
          console.log("myErrors", JSON.stringify(myErrors, null, 2));
          myErrors.forEach((errorThing: any) => {
            displayErrors[errorThing.path[0]] = errorThing.message;
          });

          myErrors.forEach((validationError: any) => {
            Object.values(validationError.constraints).forEach(
              (message: any) => {
                displayErrors[validationError.property] = message;
              }
            );
          });

          return setErrors(displayErrors);

          // return setErrors({
          //   email: "invalid login"
          // });
        }

        if (response && response.data && !response.data.login) {
          setErrors({
            email: "invalid login",
          });
          return;
        }

        // if the user comes to login and wants to continue
        // on their intended path...
        if (
          response &&
          response.data &&
          response.data.login &&
          response.data.login.name
        ) {
          Router.push("/user/profile", "/user/profile");
          return;
        }
      }}
      initialValues={{
        email: "",
        password: "",
        keepMeSignedIn: false,
      }}
    >
      {({ handleSubmit }) => (
        <Form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            color: "#444444",
          }}
        >
          <Flex alignItems="center" justifyContent="center">
            <Text fontSize={4}>Sign in</Text>
          </Flex>

          <Field
            autoComplete="email"
            label="email"
            id="email"
            name="email"
            placeholder="input email"
            type="text"
            component={InputField}
          />
          <Field
            autoComplete="current_password"
            label="password"
            id="password"
            name="password"
            placeholder="input password"
            type="password"
            component={InputField}
          />

          <Flex my={2}>
            <Flex mr="auto">
              <Text htmlFor="keepMeSignedIn" fontFamily="main">
                Keep me logged in
              </Text>
            </Flex>
            <Flex
              mr={2}
              style={{
                position: "relative",
              }}
            >
              <Field
                id="keepMeSignedIn"
                name="keepMeSignedIn"
                type="checkbox"
                shadow="0px 10px 27px 0px rgba(0, 0, 0, 0.1)"
                component={ToggleCheckbox}
              />
            </Flex>
          </Flex>

          <Flex justifyContent="center">
            <CustomButton
              backgroundColor="#d23078"
              backgroundImage="linear-gradient(
                                0deg,
                                rgba(210, 48, 120, 0.2),
                                rgba(254, 97, 97, 0.2),
                                rgba(255, 121, 85, 0.2)
                                )"
              boxShadow="0px 10px 27px 0px rgba(0, 0, 0, 0.1)"
              borderRadius="23px"
              mt={2}
              width="340px"
              height="47px"
              type="submit"
              sx={{
                borderRadius: "30px",
              }}
            >
              <Text>Login</Text>
            </CustomButton>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};
