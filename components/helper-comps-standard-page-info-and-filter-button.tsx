import React from "react";

import { Flex, CustomButton, Text, Heading } from "./primitives/styled-rebass";
import Icon from "./icon";
import { DlAccordion } from "./dl-accordion";

interface SavedPageInfoAndFilterButtonProps {
  count: number;
  title: string;
}

export const StandardPageInfoAndFilterButton: React.FC<SavedPageInfoAndFilterButtonProps> = ({
  count,
  title,
}) => {
  const [activeIndex, setActiveIndex] = React.useState<null | number>(null);

  return (
    <Flex width={1} flexDirection="column" mx="auto">
      <Flex
        height="auto"
        width={1}
        // overflowY="hidden"
      >
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
      <DlAccordion activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </Flex>
  );
};
