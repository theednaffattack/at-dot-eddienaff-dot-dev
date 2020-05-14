import React from "react";
import { NextPage, NextPageContext } from "next";
import Link from "next/link";

import { LoginForm } from "../components/login-form";
import { NextPageStaticVariableProps } from "../typings/types";
import { withApollo } from "../lib/with-apollo_v2";
import { Flex } from "../components/primitives/styled-rebass";
import {
  getLayout,
  ModalViewActions,
  ModalStateInterface,
} from "../components/entry-layout";

interface LoginProps {
  modalDispatch: React.Dispatch<ModalViewActions>;
  modalState: ModalStateInterface;
}

const Login: NextPage<LoginProps, {}> & NextPageStaticVariableProps = ({
  modalDispatch,
  modalState,
}) => {
  return <LoginGuts modalDispatch={modalDispatch} modalState={modalState} />;
};

Login.getInitialProps = ({ pathname, query }: NextPageContext) => {
  return { pathname, query };
};

Login.displayName = "LoginPage";
Login.getLayout = getLayout;
Login.title = "Login";

export default withApollo()(Login);

interface LoginGutsProps {
  modalDispatch: React.Dispatch<ModalViewActions>;
  modalState: ModalStateInterface;
}

export const LoginGuts: React.FC<LoginGutsProps> = ({}) => {
  return (
    <Flex
      width={1}
      minHeight="100vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={4}
    >
      <Flex
        width={["320px", "320px", "320px", "320px", "400px", "400px", "400px"]}
        border="1px solid #ccc"
        borderRadius="8px"
        bg="#f2f2f2"
        p={4}
      >
        <LoginForm />
      </Flex>
      <Flex mt={5} justifyContent="center" alignItems="center" width={1}>
        Not a user?{" "}
        <Link href="/register">
          <a>Sign up</a>
        </Link>
      </Flex>
    </Flex>
  );
};
