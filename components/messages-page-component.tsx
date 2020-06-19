import React from "react";
import { NextSeo } from "next-seo";

import { Flex } from "../components/primitives/styled-rebass";
import {
  MessagePageComponentThreadsPane,
  Message,
} from "../components/messages-page-component-threads-pane";
import { MessagesPageComponentSingleMessageThreadPane } from "../components/messages-page-component-single-message-thread-pane";
import { LayoutAuthorizedHeader } from "../components/layout-authorized-header";
import { MessagesInput } from "../components/messages-input";
import { users, fakeThreadsData } from "../components/helpers";
import { User } from "*/add-new-message.graphql";
import { ClonedChildrenFromAuthLayout } from "../pages/traveling";

interface MessagePageComponentProps extends ClonedChildrenFromAuthLayout {
  // pathname: NextContext["pathname"];
  // query: NextContext["query"];
}

export interface Thread {
  id: string;
  invitees: User[];
  messages: Message[];
  last_message: string;
  last_messenger: User;
  updatedAt: string;
}

export interface MessageThreadsState<T> {
  data: T | null;
  error: string | undefined;
  loading: boolean;
}

export type MessageThreadAction<T> =
  | { type: "isLoading"; payload: true }
  | { type: "hasLoaded"; payload: false }
  | { type: "setData"; payload: T }
  | { type: "isError"; payload: string }
  | { type: "selectThread"; payload: number }
  | { type: "reset"; payload: MessageThreadsState<Thread[]> };

// @ts-ignore
const initialMessageThreadsState: MessageThreadsState<Thread[]> = {
  data: null,
  error: undefined,
  loading: true,
};

const initialDataMessageThreadsState: MessageThreadsState<Thread[]> = {
  data: fakeThreadsData,
  error: undefined,
  loading: false,
};

function initThreads(
  initialState: MessageThreadsState<Thread[]>
): MessageThreadsState<Thread[]> {
  return {
    data: initialState["data"],
    error: initialState["error"],
    loading: initialState["loading"],
  };
}

function messageThreadsReducer(
  // @ts-ignore
  state: MessageThreadsState<Thread[]> | null,
  action: MessageThreadAction<Thread[]>
): MessageThreadsState<Thread[]> {
  switch (action.type) {
    case "isLoading":
      return { data: null, error: undefined, loading: false };
    case "setData":
      return { data: action.payload, error: undefined, loading: false };
    case "isError":
      return {
        data: null,
        error: "Error loading Thread data",
        loading: false,
      };
    case "reset":
      return initThreads(action.payload);
    default:
      throw new Error("Reducer error");
  }
}

export const MessagePageComponent: React.FC<MessagePageComponentProps> = ({
  modalOverlayDispatch,
  modalOverlayState,
}) => {
  // @ts-ignore
  const [messageThreadsState, messageThreadsDispatch] = React.useReducer(
    messageThreadsReducer,
    initialDataMessageThreadsState,
    initThreads
  );
  const [selectedThreadIndex, setSelectedThreadIndex] = React.useState<
    number | null
  >(null);

  const [selectedThreadId, setSelectedThreadId] = React.useState<string | null>(
    null
  );

  return (
    <React.Fragment>
      <NextSeo
        title="Messages"
        description="A messages page, nothing more."
        canonical="https://at.eddienaff.dev/"
        openGraph={{
          url: "https://at.eddienaff.dev/messages",
          title: "Messages",
          description: "A beautiful messages page.",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
          site_name: "SiteName",
        }}
      />
      <Flex
        bg=""
        flexDirection="column"
        height="100%"
        width={1}
        overflowY="hidden"
      >
        <LayoutAuthorizedHeader
          modalOverlayDispatch={modalOverlayDispatch}
          modalOverlayState={modalOverlayState}
        />
        <Flex flex={1} width={1} height="100%" overflowY="hidden">
          {/* LEFT (MESSAGE THREADS) PANE */}
          <MessagePageComponentThreadsPane
            messageThreads={messageThreadsState}
            selectedThreadIndex={selectedThreadIndex}
            setSelectedThreadIndex={setSelectedThreadIndex}
            setSelectedThreadId={setSelectedThreadId}
            selectedThreadId={selectedThreadId}
          />
          {/* RIGHT ( SINGLE MESSAGE THREAD) PANE */}
          <MessagesPageComponentSingleMessageThreadPane
            invitees={users}
            messageThreads={messageThreadsState}
            selectedThreadIndex={selectedThreadIndex}
            selectedThreadId={selectedThreadId}
          >
            <MessagesInput />
          </MessagesPageComponentSingleMessageThreadPane>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};
