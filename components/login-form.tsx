import { Field, Formik } from "formik";
import Router from "next/router";

import { InputField } from "../components/form-fields/input-field";
import {
  Button,
  CustomButton,
  Flex,
  Form,
  Text,
} from "../components/primitives/styled-rebass";
import { useLoginMutation } from "../lib/mutations/login.graphql";
import { ToggleCheckbox } from "./form-fields/checkbox-custom";

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const [loginFunc, { data }] = useLoginMutation();

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

        // let pathname =
        //   referer && referer.length > 0 ? referer : "/welcome";
        console.log("IS THIS SUBMITTING?", response);
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
          {data ? JSON.stringify(data, null, 2) : null}
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
                // component={Checkbox}
              />
            </Flex>
            {/* <ToggleCheckbox /> */}
          </Flex>

          <Flex justifyContent="center">
            <CustomButton
              mt={2}
              width="340px"
              height="47px"
              type="submit"
              sx={{
                borderRadius: "30px",
              }}
            >
              <Text fontFamily="montserrat">Login</Text>
            </CustomButton>
            {/* <Button
              mt={2}
              width="340px"
              height="47px"
              type="submit"
              sx={{
                borderRadius: "30px",
                FlexShadow: "0px 10px 27px 0px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Text fontFamily="montserrat">Login</Text>
            </Button> */}
          </Flex>
        </Form>
      )}
    </Formik>
  );
};
