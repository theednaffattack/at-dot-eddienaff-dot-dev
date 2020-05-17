import React from "react";

import { AbFlex, Flex, Text } from "./primitives/styled-rebass";
import Icon from "./icon";

interface AuthenticatedModalHeaderProps {
  bg?: string;
  mt?: string | number;
  referer?: string;
  router: any;
  title: string;
}

export const AuthenticatedModalHeader: React.FC<AuthenticatedModalHeaderProps> = ({
  bg,
  mt = 4,
  referer,
  router,
  title,
}) => {
  return (
    <Flex
      pt={mt}
      p={2}
      bg={bg}
      width={1}
      // flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={{ position: "relative" }}
    >
      <AbFlex
        position="absolute"
        pl={4}
        left={0}
        onClick={() =>
          router.push(`${referer ? referer : "/index"}`, `${referer}`)
        }
      >
        <Icon active={false} name="close" fill="#444" size="20px" />
      </AbFlex>
      <Text>{title}</Text>
    </Flex>
  );
};
