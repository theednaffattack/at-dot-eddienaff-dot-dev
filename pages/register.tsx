import React from "react";
import { NextPage, NextPageContext } from "next";

import { NextPageStaticVariableProps } from "../typings/types";
import { withApollo } from "../lib/with-apollo_v2";
import { getLayout } from "../components/entry-layout";
import { RegisterGuts } from "../components/register-guts";

interface LoginProps extends Partial<NextPageContext> {}

const Login: NextPage<LoginProps> & NextPageStaticVariableProps = () => {
  return <RegisterGuts />;
};

Login.getInitialProps = ({ pathname, query }: NextPageContext) => {
  return { pathname, query };
};

Login.displayName = "LoginPage";
Login.getLayout = getLayout;
Login.title = "Login";

export default withApollo()(Login);
