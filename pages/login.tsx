import React from "react";
import { NextPage, NextPageContext } from "next";
import Link from "next/link";

import { LoginForm } from "../components/login-form";
import { NextPageStaticVariableProps } from "../typings/types";
import { withApollo } from "../lib/with-apollo_v2";
import {
  Flex,
  Text,
  UnAuthenticatedAnchor,
} from "../components/primitives/styled-rebass";
import {
  getLayout,
  ModalViewActions,
  ModalStateInterface,
} from "../components/entry-layout";
import { BackgroundSetter } from "../components/background-setter";

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
    <BackgroundSetter
      opacity={1}
      bgImage="url(https://eddie-atlas-travel.s3-us-west-2.amazonaws.com/images/login-bg-transparency.png)"
    >
      <Flex
        width={1}
        minHeight="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        px={4}
      >
        <Flex
          width={[
            "320px",
            "320px",
            "320px",
            "320px",
            "400px",
            "400px",
            "400px",
          ]}
          border="1px solid #ccc"
          borderRadius="8px"
          bg="#f2f2f2"
          p={4}
        >
          <LoginForm />
        </Flex>
        <Flex mt={5} justifyContent="center" alignItems="center" width={1}>
          <LoginFooter />
        </Flex>
      </Flex>
    </BackgroundSetter>
  );
};

interface LoginFooterProps {}

function LoginFooter({}: LoginFooterProps) {
  return (
    <Text color="rgba(255,255,255,0.6)">
      Not a user?{" "}
      <Link href="/register" as="/register" passHref={true}>
        <UnAuthenticatedAnchor>Sign up</UnAuthenticatedAnchor>
      </Link>
    </Text>
  );
}
