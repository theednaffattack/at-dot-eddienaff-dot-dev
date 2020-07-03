import React from "react";
import Link from "next/link";

import { RegisterForm } from "./register-form";
import { Flex, Text } from "./primitives/styled-rebass";
import { BackgroundSetter } from "./background-setter";
import styled from "styled-components";

interface RegisterGutsProps {}

export const RegisterGuts: React.FC<RegisterGutsProps> = () => {
  return (
    <BackgroundSetter
      bgImage="url(https://eddie-atlas-travel.s3-us-west-2.amazonaws.com/images/register-transparency.png)"
      opacity={1}
    >
      <Flex
        width={1}
        flex={1}
        minHeight="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py={3}
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
          <RegisterForm />
        </Flex>
        <Flex
          mt={5}
          pt={3}
          borderTop="faded"
          width="340px"
          justifyContent="center"
          alignItems="center"
        >
          <RegisterFooter />
        </Flex>
      </Flex>
    </BackgroundSetter>
  );
};

interface RegisterFooterProps {}

function RegisterFooter({}: RegisterFooterProps) {
  return (
    <Text color="rgba(255,255,255,0.6)">
      Already a member?{" "}
      <Link href="/login" as="/login" passHref={true}>
        <Anchor>Sign in</Anchor>
      </Link>
    </Text>
  );
}
const Anchor = styled.a`
  color: #fff;
  text-decoration: none;
  position: relative;
  :after {
    content: "";

    width: 100%;
    position: absolute;
    left: 0;
    bottom: -4px;

    border-color: rgba(255, 255, 255, 0.4);
    border-width: 0 0 2px;
    border-style: solid;
  }
`;
