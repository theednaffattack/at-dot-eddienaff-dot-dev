import React from "react";

import { Flex, Text } from "./primitives/styled-rebass";
import { MessageBubbleSvg } from "./message-bubble";
import { MessagesPageComponentSingleMessageThreadPaneNamePlate } from "./messages-page-component-single-message-thread-pane-name-plate";
import { useLockBodyScroll } from "./use-lock-body-scroll";
import { User } from "*/add-new-message.graphql";
import { MessageThreadsState, Thread } from "./messages-page-component";

interface MessagesPageComponentSingleMessageThreadPaneProps {
  invitees: User[];
  messageThreads: MessageThreadsState<Thread[]>;
  selectedThreadIndex: number | null;
  selectedThreadId: string | null;
}

export const singleMessageThreadWidths = [1, 1, 1, 1, 0.6, 0.6, 0.6];

export const MessagesPageComponentSingleMessageThreadPane: React.FC<MessagesPageComponentSingleMessageThreadPaneProps> = ({
  children,
  invitees,
  messageThreads,
  selectedThreadIndex,
  // selectedThreadId,
}) => {
  useLockBodyScroll();
  // @ts-ignore
  const [hasMounted, setHasMounted] = React.useState<
    "isMounted" | "isNotMounted"
  >("isNotMounted");

  React.useEffect(() => {
    setHasMounted("isMounted");
  }, []);

  const [wrapperHeight, setWrapperHeight] = React.useState<number | null>(null);
  return (
    <Flex
      width={singleMessageThreadWidths}
      px={4}
      sx={{
        height: "100%",
      }}
    >
      <Flex
        flexDirection="column"
        width={[1, 1, 1, 1, "850px", "850px", "850px"]}
        // width={singleMessageThreadWidths}
        overflow="hidden"
        height="100%"
        sx={{
          position: "relative",
        }}
      >
        <MessagesPageComponentSingleMessageThreadPaneNamePlate
          invitees={invitees}
        />
        <MessageList
          messageThreads={messageThreads}
          selectedThreadIndex={selectedThreadIndex}
          setWrapperHeight={setWrapperHeight}
          wrapperHeight={wrapperHeight}
        />

        {children}
      </Flex>
    </Flex>
  );
};

interface MessageListProps
  extends Partial<MessagesPageComponentSingleMessageThreadPaneProps> {
  // selectedThreadIndex: number | null;
  // messageThreads: Thread[];
  wrapperHeight: number | null;
  setWrapperHeight: React.Dispatch<React.SetStateAction<number | null>>;
}

const MessageList: React.FC<MessageListProps> = ({
  messageThreads,
  selectedThreadIndex,
  setWrapperHeight,
  wrapperHeight,
}) => {
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  // I send this into Message Bubble, which is probably dumb
  // Isn't this a callback? I should probably make useCallback
  // in message bubble but I'm not sure about dependencies
  const [readyToScroll, setReadyToScroll] = React.useState<
    "init" | "ready" | "notReady"
  >("init");

  // FOR SINGLE MESSAGE THREAD PANE
  const scrollToBottom = () => {
    if (readyToScroll === "ready") {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  React.useEffect(() => {
    console.log("readyToScroll", readyToScroll);
    setReadyToScroll("init");
  }, [selectedThreadIndex]);

  React.useEffect(scrollToBottom, [
    messageThreads,
    selectedThreadIndex,
    readyToScroll,
  ]);
  return (
    <Flex
      flexDirection="column"
      overflowY="auto"
      overflowX="hidden"
      justifyContent="end"
      flex={1}
    >
      {selectedThreadIndex !== null &&
      selectedThreadIndex !== undefined &&
      selectedThreadIndex !== null &&
      messageThreads ? (
        messageThreads.data?.[selectedThreadIndex].messages.map(
          (item, index, itemArr) => {
            return (
              <MessageBubbleSvg
                key={item.id + "-list"}
                index={index}
                wrapperHeight={wrapperHeight}
                setScrollIndicator={() => {
                  if (index === itemArr.length - 1) {
                    setReadyToScroll("ready");
                  }
                }}
                setWrapperHeight={setWrapperHeight}
                text={item.message}
                timestamp={item.createdAt}
                capHeight={1}
                fontSize="15px"
                leftPad={60}
                lineHeight={24}
                topPad={50}
                width={290}
                x={0}
                y={0}
              />
            );
          }
        )
      ) : (
        <Text>NOTHING SELECTED</Text>
      )}
      <div
        ref={messagesEndRef}
        style={{
          minHeight: "70px",
          width: "100%",
        }}
      ></div>
    </Flex>
  );
};
