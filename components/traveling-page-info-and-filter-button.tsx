import Router from "next/router";

import { Flex, CustomButton, Text } from "./primitives/styled-rebass";
import Icon from "./icon";

interface TravelingPageInfoAndFilterButtonProps {}

export const TravelingPageInfoAndFilterButton: React.FC<TravelingPageInfoAndFilterButtonProps> = () => {
  return (
    <Flex my={4} width={1} alignItems="center" overflowY="hidden" mx="auto">
      <Flex flexDirection="column" mr="auto">
        <Text as="h1" fontFamily="main" fontSize={4}>
          Featured
        </Text>
        <Text fontFamily="main" fontSize={2}>
          XXXX spots
        </Text>
      </Flex>

      <CustomButton
        my={4}
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
          Router.push(
            "/traveling?filterModal=isOpen&referer=/traveling",
            "/traveling"
          )
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
