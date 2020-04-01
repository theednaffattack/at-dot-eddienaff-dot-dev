import React from "react";
import Router from "next/router";

import { getLayout } from "../components/layout.v2";
import { Button, Flex, Text } from "../components/primitives/styled-rebass";
import { NextPageContext, NextPage } from "next";
import { NextPageStaticVariableProps } from "../typings/types";

function handleDismiss() {
  console.log("dismiss button clicked");
  Router.push("/login", "/login");
}

interface ForgotPasswordProps extends Partial<NextPageContext> {}

const CheckEmail: NextPage<ForgotPasswordProps> &
  NextPageStaticVariableProps = () => {
  return (
    <>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Flex width="100px">
          <span role="img" aria-label="Close">
            EMAIL ICON
            {/* <Icon name="email" fill="rgb(94, 104, 112)" size="2em" /> */}
          </span>
        </Flex>
        <Text mb={3} fontSize={[3]} fontWeight={600} fontFamily="montserrat">
          We sent you an email!
        </Text>
        <Text fontFamily="montserrat">
          Please check your email to confirm your account.
        </Text>
        <Button mt={5} onClick={handleDismiss}>
          Got it!
        </Button>
      </Flex>
    </>
  );
};

CheckEmail.displayName = "Check email";
CheckEmail.getLayout = getLayout;
CheckEmail.title = "Check email";

export default CheckEmail;
