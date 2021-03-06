import React from "react";

import { Flex, CustomButton, Text, Heading } from "./primitives/styled-rebass";
import Icon from "./icon";
import {
  AuthorizedLayoutModalOverlayState,
  AuthorizedLayoutModalOverlayActions,
} from "./layout-authorized";

interface SavedPageInfoAndFilterButtonProps {
  activeIndex: number | null;
  children?: React.ReactChildren | React.ReactChild;
  count: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  title: string;
}

export const StandardPageInfoAndFilterButton: React.FC<SavedPageInfoAndFilterButtonProps> = ({
  activeIndex,
  children,
  count,
  setActiveIndex,
  title,
}) => {
  // const [activeIndex, setActiveIndex] = React.useState<null | number>(null);

  return (
    <Flex width={1} flexDirection="column" mx="auto">
      <Flex height="auto" width={1}>
        <Flex flexDirection="column" mr="auto">
          <Heading
            fontSize={[4, 4, 4, 4, 4, 4, 5]}
            fontFamily="monty"
            fontWeight="400"
            color="text"
          >
            {title}
          </Heading>

          <Text fontFamily="main" fontSize={2}>
            {count} spots
          </Text>
        </Flex>

        <CustomButton
          mb={3}
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
          onClick={() => {
            if (activeIndex === null) {
              setActiveIndex(0);
            } else {
              setActiveIndex(null);
            }
          }}
        >
          <Flex alignItems="center" justifyContent="center">
            <Icon
              active={false}
              name={activeIndex !== null ? "minus" : "plus_skinny"}
              size="15px"
              fill="#fff"
            />
            <Text ml={1}>Filters</Text>
          </Flex>
        </CustomButton>
      </Flex>
      {children}
    </Flex>
  );
};

interface TravelingPageFilterButtonProps {
  children?: React.ReactChildren | React.ReactChild;
  count: number;
  modalOverlayDispatch: React.Dispatch<AuthorizedLayoutModalOverlayActions>;
  modalOverlayState: AuthorizedLayoutModalOverlayState;
  title: string;
}

export const TravelingPageInfoAndFilterButton: React.FC<TravelingPageFilterButtonProps> = ({
  children,
  count,
  modalOverlayDispatch,
  modalOverlayState,
  title,
}) => {
  return (
    <Flex width={1} flexDirection="column" mx="auto">
      <Flex height="auto" width={1}>
        <Flex flexDirection="column" mr="auto">
          <Heading
            fontSize={[4, 4, 4, 4, 4, 4, 5]}
            fontFamily="monty"
            fontWeight="400"
            color="text"
          >
            {title}
          </Heading>

          <Text fontFamily="main" fontSize={2}>
            {count} spots
          </Text>
        </Flex>

        <CustomButton
          mb={3}
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
          onClick={() => {
            if (modalOverlayState.filterModal === "isClosed") {
              modalOverlayDispatch({
                type: "filterModalOpen",
                action: "overlayModalOpen",
              });
            }
            if (modalOverlayState.filterModal === "isOpen") {
              modalOverlayDispatch({
                type: "filterModalClosed",
                action: "overlayModalClosed",
              });
            }
          }}
        >
          <Flex alignItems="center" justifyContent="center">
            <Icon
              active={false}
              name={
                modalOverlayState.filterModal === "isOpen"
                  ? "minus"
                  : "plus_skinny"
              }
              size="15px"
              fill="#fff"
            />
            <Text ml={1}>Filters</Text>
          </Flex>
        </CustomButton>
      </Flex>
      {children}
    </Flex>
  );
};
