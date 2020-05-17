import { FormikHelpers } from "formik";
import Router from "next/router";

interface FilterVariables {
  variables: {
    email: string;
    password: string;
  };
}

export const submitFuction = async (
  data: {
    email: string;
    password: string;
    keepMeSignedIn: boolean;
  },
  {
    setErrors,
  }: FormikHelpers<{
    email: string;
    password: string;
    keepMeSignedIn: boolean;
  }>,
  loginFunc: (vars: FilterVariables) => Promise<any>
) =>
  // FormikErrors<{
  //   email: string;
  //   password: string;
  //   keepMeSignedIn: boolean;
  // }>
  {
    let response;

    setErrors({
      email: "invalid login",
    });
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
        Object.values(validationError.constraints).forEach((message: any) => {
          displayErrors[validationError.property] = message;
        });
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
  };
