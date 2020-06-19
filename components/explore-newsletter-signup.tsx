import React from "react";

import { Button, Flex, Text } from "./primitives/styled-rebass";
import { Input } from "./form-fields/rebass-forms";
import Icon from "./icon";

interface ExploreNewsletterSignupProps {}

export const ExploreNewsletterSignup: React.FC<ExploreNewsletterSignupProps> = ({}) => {
  return (
    <Flex
      color="#fff"
      flex={1}
      flexDirection="column"
      pb={6}
      sx={{ position: "relative" }}
    >
      <Flex
        flexDirection="column"
        sx={{ position: "absolute", zIndex: 6 }}
        width={1}
        p={3}
      >
        <Text
          fontSize={3}
          pb={2}
          sx={{ textShadow: "0px 40px 80px rgba(0, 0, 0, 0.15)" }}
        >
          Newsletter
        </Text>
        <Text pb={3} color="rgba(255,255,255,0.75)">
          Sed semper at ante spendisse blandit laoreet elit et mattis. Nulla
          facilisi.{" "}
        </Text>
        <Flex pl={3} as="label" htmlFor="email">
          email
        </Flex>
        <Flex
          flex={1}
          width={1}
          flexDirection="column"
          sx={{
            position: "relative",
          }}
        >
          <Input
            height="40px"
            id="email"
            name="email"
            placeholder="Email address"
            bg="rgba(255,255,255,0.25)"
            autoComplete="off"
            color="rgba(255,255,255,1)"
            css={{
              borderRadius: "30px",
              border: 0,

              transition: "all 0.17s ease-in-out",
              ":focus": {
                // boxShadow: "0 0 5px rgba(81, 203, 238, 1)",

                outline: 0,
                boxShadow: "0 0 0 3px rgba(0, 123, 255, 0.35)",
                // boxShadow: "0 0 5px limegreen",
              },
              "::placeholder": {
                // background: 'highlight',
                // backgroundColor: 'highlight',
                // textShadow: 'none',
                color: "white",
                opacity: 0.5,
              },
            }}
          />
          <Button
            type="button"
            bg="#fff"
            onClick={() => console.log("SUBMIT FIRED!!! (NEWSLETTER)")}
            height="50px"
            width="50px"
            borderRadius="50%"
            p={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: "-4px",
              right: "-3px",

              // backgroundImage:
              //   "linear-gradient( 90deg, rgba(0,0,0, 0.3) 0%, rgba(255,255,255,1) 100%)",
              boxShadow: "0px 60px 80px 0px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Icon active={false} fill="#ea4973" name="send" size="17px" />
          </Button>
        </Flex>
      </Flex>
      <Flex
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "linear-gradient( 15deg, rgb(210,48,120) 26%, rgb(254,97,97) 74%, rgb(255,121,85) 100%)",
          zIndex: 5,
        }}
      ></Flex>
    </Flex>
  );
};
