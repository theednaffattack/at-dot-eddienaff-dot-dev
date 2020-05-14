import React from "react";
import Link from "next/link";

import { RegisterForm } from "./register-form";
import { Flex, Text } from "./primitives/styled-rebass";

interface RegisterGutsProps {}

export const RegisterGuts: React.FC<RegisterGutsProps> = () => {
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
        <RegisterForm />
      </Flex>
      <Flex
        mt={5}
        pt={2}
        borderTop="faded"
        width="340px"
        justifyContent="center"
        alignItems="center"
      >
        <Text>
          Not a user?{" "}
          <Link href="/register">
            <a>Sign up</a>
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
};
