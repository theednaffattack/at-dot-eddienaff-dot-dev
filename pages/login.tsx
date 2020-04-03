import React from "react";
import { NextPage, NextPageContext } from "next";
import styled from "styled-components";

import { LoginForm } from "../components/login-form";
import { NextPageStaticVariableProps } from "../typings/types";
import { withApollo } from "../lib/with-apollo_v2";
import { getLayout } from "../components/layout.v2";

interface LoginProps extends Partial<NextPageContext> {}

const LoginWrapper = styled.div`
  max-width: 340px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Login: NextPage<LoginProps> & NextPageStaticVariableProps = () => {
  return (
    <LoginWrapper>
      <LoginForm />
    </LoginWrapper>
  );
};

Login.getInitialProps = ({ pathname, query }: NextPageContext) => {
  return { pathname, query };
};

Login.displayName = "LoginPage";
Login.getLayout = getLayout;
Login.title = "Login";

export default withApollo()(Login);
