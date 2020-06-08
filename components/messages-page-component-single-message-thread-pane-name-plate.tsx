import React from "react";

import { Button, Flex, Text } from "./primitives/styled-rebass";
import { IconProps } from "./icon-types";
import Icon from "./icon";
import { User } from "./messages-page-component-threads-pane";

interface NamePlateProps {
  invitees: User[];
}

const iconKeys: IconProps["name"][] = [
  "favorite",
  "profile_icon",
  "more_horizontal",
];

export const MessagesPageComponentSingleMessageThreadPaneNamePlate: React.FC<NamePlateProps> = ({
  invitees,
}) => {
  return (
    <Flex
      bg="rgba(255,255,255,0.65)"
      borderBottom="2px #ccc solid"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backdropFilter: "blur(3px)",
      }}
    >
      <Flex py={2} mr="auto" width={1} alignItems="center">
        <Text
          width={1 / 2}
          mr="auto"
          fontSize={[3, 3, 3, 3, 3, 4, 4]}
          key={invitees[0].userId}
        >
          {invitees[0].name}
        </Text>

        <Flex width="auto" justifyContent="flex-end">
          {iconKeys.map((icon) => (
            <Button
              type="button"
              key={icon}
              bg="rgba(0,0,0,0.15)"
              mx={2}
              p={0}
              height="30px"
              width="30px"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
            >
              <Icon
                fill="rgb(136, 136, 136)"
                name={icon}
                size="17px"
                active={false}
              />
            </Button>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
