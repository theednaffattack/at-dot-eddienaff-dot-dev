import React from "react";

import { Flex, CustomButton, Text, Heading } from "./primitives/styled-rebass";
import Icon from "./icon";
import { AuthorizedLayoutModalOverlayActions } from "./layout-authorized";

interface SavedPageInfoAndFilterButtonProps {
  count: number;
  modalOverlayDispatch: React.Dispatch<AuthorizedLayoutModalOverlayActions>;
}

export const SavedPageInfoAndFilterButton: React.FC<SavedPageInfoAndFilterButtonProps> = ({
  count,
  modalOverlayDispatch,
}) => {
  return (
    <Flex my={4} width={1} alignItems="center" overflowY="hidden" mx="auto">
      <Flex flexDirection="column" mr="auto">
        <Heading
          fontSize={[4, 4, 4, 4, 4, 4, 5]}
          fontFamily="monty"
          fontWeight="400"
          color="text"
        >
          Saved
        </Heading>

        <Text fontFamily="main" fontSize={2}>
          {count} spots
        </Text>
      </Flex>

      <CustomButton
        my={4}
        mr={1}
        backgroundColor="#d23078"
        backgroundImage="linear-gradient(
                0deg,
                rgba(210, 48, 120, 0.2),
                rgba(254, 97, 97, 0.2),
                rgba(255, 121, 85, 0.2)
              )"
        boxShadow="0px 10px 27px 0px rgba(0, 0, 0, 0.1)"
        borderRadius="23px"
        width="105px"
        height="40px"
        type="submit"
        onClick={() =>
          modalOverlayDispatch({
            action: "overlayModalOpen",
            type: "filterModalOpen",
          })
        }
      >
        <Flex alignItems="center" justifyContent="center">
          <Icon active={false} name="plus_skinny" size="15px" fill="#fff" />
          <Text ml={1}>Filters</Text>
        </Flex>
      </CustomButton>
    </Flex>
  );
};
