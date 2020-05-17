import React from "react";
import { NextPage, NextPageContext } from "next";

import { NextPageStaticVariableProps } from "../typings/types";
import { withApollo } from "../lib/with-apollo_v2";
import { getLayout } from "../components/entry-layout";
import {
  Card,
  Flex,
  Text,
  AbFlex,
  CustomButton,
} from "../components/primitives/styled-rebass";
import Icon from "../components/icon";
import { useRouter } from "next/router";

interface LoginProps extends Partial<NextPageContext> {}

const Login: NextPage<LoginProps> & NextPageStaticVariableProps = () => {
  const router = useRouter();
  return (
    <Flex
      bg="rgba(0, 0, 0, 0.5)"
      minHeight="100vh"
      width={1}
      justifyContent="center"
      alignItems="center"
    >
      <Card
        bg="#f2f2f2"
        color="#444"
        // p={4}
        p={0}
        width={[1, 1 / 2, 1 / 2, "400px", "400px", "400px", "400px"]}
        sx={{ borderRadius: "12px", position: "relative" }}
      >
        <AbFlex position="absolute" top={4} left={4}>
          <span onClick={() => router.push("/", "/")}>
            <Icon active={false} name="close" fill="#aaa" size="17px" />
          </span>
        </AbFlex>
        <AbFlex
          alignItems="center"
          justifyContent="center"
          position="absolute"
          bottom={-16}
          width={1}
        >
          <span onClick={() => router.push("/", "/")}>
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
              minHeight="16px"
              width="200px"
            >
              Got it!
            </CustomButton>
          </span>
        </AbFlex>

        <Icon
          // mt={4}
          fill="rgb(94, 104, 112)"
          mt={5}
          mb={3}
          mx="auto"
          active={false}
          name="email"
          size="75px"
        />
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          px={4}
        >
          <Text fontSize={3} fontWeight="bold" mb={3}>
            We sent you an email!
          </Text>
          <Text mb={5}>
            Nunc justo eros, vehicula vel vehicula ut, lacinia a erat. Nam
            fringilla eros. aliquam interdum ipsum et tempor.
          </Text>
        </Flex>
      </Card>
    </Flex>
  );
};

Login.getInitialProps = ({ pathname, query }: NextPageContext) => {
  return { pathname, query };
};

Login.displayName = "LoginPage";
Login.getLayout = getLayout;
Login.title = "Login";

export default withApollo()(Login);
