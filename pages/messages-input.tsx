import React from "react";

import { Flex, Button, Box } from "../components/primitives/styled-rebass";
import Icon from "../components/icon";
import { Input } from "../components/form-fields/rebass-forms";
// import { singleMessageThreadWidths } from "../components/messages-page-component-single-message-thread-pane";

interface MessagesInputProps {}

export const MessagesInput: React.FC<MessagesInputProps> = ({}) => {
  return (
    <Flex
      flexDirection="column"
      width={1}
      // width={singleMessageThreadWidths}
      px={2}
      sx={{
        position: "absolute",
        bottom: 25,
        right: 0,
      }}
    >
      <Flex
        // flexDirection="column"
        bg="#fafafa"
        color="#ccc"
        width={1}
        alignItems="center"
        borderRadius="35px"
        sx={{
          position: "relative",
          boxShadow: "0px 7px 10px 0px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Flex pl={2} width="50px" alignItems="center" justifyContent="center">
          <Button
            bg="transparent"
            height="40px"
            width="40px"
            p={0}
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "50%",
              justifyContent: "center",
              right: 0,
            }}
          >
            <Icon size="25px" name="emoji" fill="#aaa" active={false} />
          </Button>
        </Flex>
        <Input
          // border="transparent"
          width={1}
          placeholder="Type something..."
          // height="20px"
          border={0}
          sx={{
            mr: "40px",
          }}
        />
        <Flex width="50px" alignItems="center" justifyContent="center">
          <Button
            bg="transparent"
            height="40px"
            width="40px"
            p={0}
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "50%",
              justifyContent: "center",
              right: 0,
            }}
          >
            <Icon
              size="20px"
              name="image_attached"
              fill="#aaa"
              active={false}
            />
          </Button>
        </Flex>
        <Box mx={2} width="60px"></Box>
        <Button
          bg="#f4327f"
          height="60px"
          width="60px"
          p={0}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "50%",
            justifyContent: "center",
            position: "absolute",
            right: 0,
          }}
        >
          <Icon size="18px" name="send" fill="#fff" active={false} />
        </Button>
      </Flex>
    </Flex>
  );
};
