import React from "react";

import { AbFlex, Flex, Text } from "./primitives/styled-rebass";
import Icon from "./icon";

type ModalStates = "isOpen" | "isClosed";

interface AuthenticatedModalHeaderProps {
  bg?: string;
  mt?: string | number;
  closeFunc: () => void;
  title: string;
  viewState: ModalStates;
}

export const AuthenticatedModalHeader: React.FC<AuthenticatedModalHeaderProps> = ({
  bg,
  mt = 4,
  closeFunc,
  // referer,
  // router,
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
        onClick={
          closeFunc
          // router.push(`${referer ? referer : "/index"}`, `${referer}`)
        }
      >
        <Icon active={false} name="close" fill="#444" size="20px" />
      </AbFlex>
      <Text fontSize={3}>{title}</Text>
    </Flex>
  );
};
