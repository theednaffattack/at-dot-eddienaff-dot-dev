import { Field, Formik } from "formik";
import Router from "next/router";
import Link from "next/link";

import { InputField } from "../components/form-fields/input-field";
import { Checkbox } from "../components/form-fields/rebass-forms";
import {
  CustomButton,
  Flex,
  Form,
  Text,
} from "../components/primitives/styled-rebass";
import { useRegisterMutation } from "../lib/mutations/register.graphql";

interface RegisterFormProps {}

export const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
  // @ts-ignore
  const [registerFunc, { data }] = useRegisterMutation();

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
          response = await registerFunc({
            variables: {
              data: {
                firstName: "",
                lastName: "",
                email: data.email,
                password: data.password,
              },
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

        if (response && response.data && !response.data.register) {
          setErrors({
            email: "invalid login",
          });
          return;
        }

        if (
          response &&
          response.data &&
          response.data.register &&
          response.data.register.name
        ) {
          Router.push("/user/profile", "/user/profile");
          return;
        }
      }}
      initialValues={{
        email: "",
        password: "",
        confirm_password: "",
        termsAndStuff: true,
        username: "",
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
          <Flex alignItems="center" justifyContent="center" mb={3}>
            <Text fontSize={4}>Join us</Text>
          </Flex>

          <Field
            label="username"
            id="username"
            name="username"
            placeholder="Username"
            type="text"
            component={InputField}
          />
          <Field
            autoComplete="new_password"
            label="password"
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            component={InputField}
          />
          <Field
            autoComplete="new_password"
            label="repeat password"
            id="confirm_password"
            name="confirm_password"
            placeholder="Repeat password"
            type="password"
            component={InputField}
          />
          <Field
            autoComplete="email"
            label="email address"
            id="email"
            name="email"
            placeholder="Email Address"
            type="email"
            component={InputField}
          />

          <Flex my={2} alignItems="center" justifyContent="center">
            <Flex mr={2}>
              <label>
                <Field
                  id="termsAndStuff"
                  name="termsAndStuff"
                  type="checkbox"
                  shadow="0px 10px 27px 0px rgba(0, 0, 0, 0.1)"
                  component={Checkbox}
                />
              </label>
            </Flex>
            <Flex>
              <Text htmlFor="keepMeSignedIn" fontFamily="main" fontSize={[1]}>
                Agreee to our{" "}
                <Link href="terms_and_conditions">
                  <a>Terms & Stuff</a>
                </Link>
              </Text>
            </Flex>
          </Flex>

          <Flex mt={3} justifyContent="center">
            <CustomButton p="12px" width="340px">
              <Text fontFamily="montserrat">Sign up</Text>
            </CustomButton>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};
