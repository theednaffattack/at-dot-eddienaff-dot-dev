import React from "react";
// import styled from "styled-components";

// import { device } from "./styles/theme";
import { Button, Card, Flex, Text } from "./primitives/styled-rebass";
import Icon from "./icon";
import { User } from "*/add-new-message.graphql";
import { MessageThreadsState, Thread } from "./messages-page-component";

interface MessagePageComponentThreadsPaneProps {
  messageThreads: MessageThreadsState<Thread[]>;
  selectedThreadIndex: number | null;
  setSelectedThreadIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setSelectedThreadId: React.Dispatch<React.SetStateAction<string | null>>;
  selectedThreadId: string | null;
}

// export interface User {
//   userId: string;
//   name?: string;
//   profilePicUri?: string;
// }

export const messageThreadListPadding = [3, 3, 3, 3, 4, 4, 4];
const messageThreadsPaneWidths = [1, 1, 1, 1, 0.4, 0.4, 0.4];
const messagesCardWidths = [0, 0, 0, 0, "375px", "375px", "375px"];

// const FlexMain = styled(Flex)`
//   @media ${device.tabletMax} {
//     display: none;
//   }

//   @media ${device.laptop} {
//     display: flex;
//   }
// `;

export const MessagePageComponentThreadsPane: React.FC<MessagePageComponentThreadsPaneProps> = ({
  messageThreads,
  selectedThreadIndex,
  setSelectedThreadIndex,
  selectedThreadId,
  setSelectedThreadId,
}) => {
  return (
    <Flex
      flexDirection="column"
      flexGrow={1}
      width={messageThreadsPaneWidths}
      alignItems="center"
      pb="25px"
      height="100%"
      sx={{ display: ["none", "none", "none", "none", "flex", "flex", "flex"] }}
    >
      <Card
        width={messagesCardWidths}
        px={0}
        bg="#fafafa"
        height="100%"
        sx={{
          borderRadius: "25px",
          overflow: "hidden",
          flex: 1,
          boxShadow: "0px 27px 40px 0px rgba(0, 0, 0, 0.15)",
          height: "100%",
          position: "relative",
        }}
      >
        <Button
          type="button"
          onClick={() => console.log("PLUS HAS BEEN CLICKED")}
          height="50px"
          width="50px"
          bg="#f4327f"
          sx={{
            borderRadius: "50%",
            p: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 10px 27px 0px rgba(0, 0, 0, 0.1)",
            position: "absolute",
            left: "calc(50% - 40px)",
            bottom: 20,
            overflow: "hidden",
          }}
        >
          <Flex
            sx={{
              position: "absolute",
              left: 0,
              bottom: 0,
              right: 0,
              top: 0,
              zIndex: 9000,
            }}
            alignItems="center"
            justifyContent="center"
          >
            <Icon active={false} fill="#fff" name="plus_skinny" size="17px" />
          </Flex>
          <Flex
            sx={{
              position: "absolute",
              left: 0,
              bottom: 0,
              right: 0,
              top: 0,
              opacity: 0.4,
              backgroundImage:
                "linear-gradient( 87deg, rgb(210,48,120) 6%, rgb(254,97,97) 74%, rgb(255,121,85) 100%);",
            }}
          ></Flex>
        </Button>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          overflowY="auto"
          height="100%"
          sx={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          <Flex
            mx={messageThreadListPadding}
            mt={3}
            pb={2}
            borderBottom="1px #ddd solid"
          >
            <Text fontSize={5} color="#444">
              Messages
            </Text>
          </Flex>
          <Flex flexDirection="column" height="auto">
            <MessageThreadsActiveNowList
              selectedThreadIndex={selectedThreadIndex}
              setSelectedThreadIndex={setSelectedThreadIndex}
              selectedThreadId={selectedThreadId}
              setSelectedThreadId={setSelectedThreadId}
              threads={messageThreads.data}
            />
            <MessageThreadsArchivesList
              selectedThreadIndex={selectedThreadIndex}
              setSelectedThreadIndex={setSelectedThreadIndex}
              selectedThreadId={selectedThreadId}
              setSelectedThreadId={setSelectedThreadId}
              threads={messageThreads.data}
            />
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

export interface Message {
  id: string;
  createdAt: string;
  updatedAt: string;
  message: string;
  sentBy: User;
  user: User;
}

interface MessageThreadList {
  threads: Thread[] | null;
  selectedThreadIndex: number | null;
  setSelectedThreadIndex: React.Dispatch<React.SetStateAction<number | null>>;
  selectedThreadId: string | null;
  setSelectedThreadId: React.Dispatch<React.SetStateAction<string | null>>;
}

interface MessageThreadsListItemProps {
  index: number;
  item: Thread;
  listLength: number;
  setSelectedThreadIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setSelectedThreadId: React.Dispatch<React.SetStateAction<string | null>>;
  selectedThreadId: string | null;
}

const MessageThreadsListItem: React.FC<MessageThreadsListItemProps> = ({
  index,
  item,
  listLength,
  setSelectedThreadIndex,
  setSelectedThreadId,
  selectedThreadId,
}) => {
  return (
    <li>
      <Flex
        py={3}
        pl={[3, 3, 3, 3, 3, 4, 4]}
        bg={selectedThreadId === item.id ? "#eee" : "transparent"}
        alignItems="center"
      >
        <Flex
          height="40px"
          width="40px"
          bg="green"
          sx={{
            borderRadius: "10px",
            backgroundImage: `url(${item.last_messenger.profileImageUri})`,
            backgroundSize: "cover",
          }}
        ></Flex>
        <Flex
          flex={1}
          onClick={() => {
            setSelectedThreadIndex(index);
            // if (selectedThreadId !== item.id) {
            setSelectedThreadId(item.id);
            // }
          }}
        >
          <Flex width={1} flexDirection="column" pl={2}>
            <Text color="#222">{item.last_messenger.name}</Text>
            <Text fontSize={1} color="#888">
              {item.last_message}
            </Text>
          </Flex>
          <Flex flexWrap="nowrap">
            <Text color="#888" fontSize={1}>
              52 MIN AGO
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        mx={4}
        alignItems="center"
        borderBottom={
          listLength - 1 !== index ? "1px #e8e8e8 solid" : "transparent"
        }
      ></Flex>
    </li>
  );
};

const MessageThreadsActiveNowList: React.FC<MessageThreadList> = ({
  threads,
  selectedThreadId,
  setSelectedThreadId,
  setSelectedThreadIndex,
}) => {
  return (
    <Flex flexDirection="column">
      <Text
        fontSize={1}
        py={3}
        pl={messageThreadListPadding}
        color="rgba(68, 68, 68, 0.5)"
        sx={{
          textTransform: "uppercase",
          // outline: "2px limegreen solid",
        }}
      >
        Active Now
      </Text>
      {threads ? (
        <ol style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
          {threads?.map((item, index, threadArr) => (
            <MessageThreadsListItem
              key={item.id}
              listLength={threadArr.length}
              index={index}
              item={item}
              setSelectedThreadIndex={setSelectedThreadIndex}
              selectedThreadId={selectedThreadId}
              setSelectedThreadId={setSelectedThreadId}
              // selectThreadFunc={selectThreadFunc}
            />
          ))}
        </ol>
      ) : null}
    </Flex>
  );
};

const MessageThreadsArchivesList: React.FC<MessageThreadList> = ({
  selectedThreadId,
  setSelectedThreadId,
  setSelectedThreadIndex,
  threads,
}) => {
  return (
    <Flex flexDirection="column">
      <Text
        fontSize={1}
        py={3}
        pl={messageThreadListPadding}
        color="rgba(68, 68, 68, 0.5)"
        sx={{
          textTransform: "uppercase",
          // outline: "2px limegreen solid",
        }}
      >
        Archives
      </Text>
      {threads !== null ? (
        <ol style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
          {threads?.map((item, index, threadArr) => (
            <MessageThreadsListItem
              key={item.id}
              index={index}
              listLength={threadArr.length}
              item={item}
              selectedThreadId={selectedThreadId}
              setSelectedThreadId={setSelectedThreadId}
              setSelectedThreadIndex={setSelectedThreadIndex}
            />
          ))}
        </ol>
      ) : null}
    </Flex>
  );
};
