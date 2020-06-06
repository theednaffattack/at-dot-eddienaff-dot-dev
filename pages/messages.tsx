import React from "react";
import { NextSeo } from "next-seo";

import { getLayout } from "../components/layout-authorized";
import { NextPageStaticVariableProps } from "../typings/types";
import { withApollo } from "../lib/with-apollo_v2";
import { Flex } from "../components/primitives/styled-rebass";
import { NextPage, NextPageContext } from "next";
import {
  MessagePageComponentThreadsPane,
  User,
  Message,
} from "../components/messages-page-component-threads-pane";
import { MessagesPageComponentSingleMessageThreadPane } from "../components/messages-page-component-single-message-thread-pane";
import { LayoutAuthorizedHeader } from "../components/layout-authorized-header";
import { MessagesInput } from "../components/messages-input";

interface MessagesPageProps extends NextPageContext {}

interface MessagePageComponent {
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

const users: User[] = [
  {
    userId: "user-1",
    name: "Ryu Ruggins",
    profilePicUri:
      "https://images.unsplash.com/photo-1544435253-f0ead49638fa?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;w=1000&amp;q=80",
  },
  {
    userId: "user-2",
    name: "Barbora Polednova",
    profilePicUri:
      "https://images.unsplash.com/photo-1546422401-68b415cbf8de?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;w=1000&amp;q=80",
  },
  {
    userId: "user-3",
    name: "Diana Palmer",
    profilePicUri:
      "https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;w=1000&amp;q=80",
  },
  {
    userId: "user-4",
    name: "Juliana Sousa",
    profilePicUri:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80",
  },
];

const setDataMessageThreadsState: MessageThreadsState<Thread[]> = {
  data: [
    {
      id: "thread-1",
      invitees: [
        {
          userId: "user-2",
          name: "Barbora Polednova",
          profilePicUri:
            "https://images.unsplash.com/photo-1546422401-68b415cbf8de?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;w=1000&amp;q=80",
        },
      ],
      last_messenger: users[1],
      last_message: "What a cool photo",
      messages: [
        {
          id: "message-1",
          createdAt: "52 min ago",
          updatedAt: "",
          message: "Here's the photo from blah blah client",
          sentBy: users[1],
          user: users[0],
        },
        {
          id: "message-2",
          createdAt: "10 min ago",
          updatedAt: "",
          message: "What a cool photo",
          sentBy: users[1],
          user: users[0],
        },
      ],
      updatedAt: "33 min ago",
    },
    {
      id: "thread-2",
      invitees: [users[3], users[0]],
      last_messenger: users[3],
      last_message: "Doesn't matter I guess",
      messages: [
        {
          id: "message-1",
          createdAt: "4 hours ago",
          updatedAt: "",
          message: "Hey what, why?",
          sentBy: users[3],
          user: users[3],
        },
        {
          id: "message-2",
          createdAt: "2 hours ago",
          updatedAt: "",
          message: "Make it make sense",
          sentBy: users[3],
          user: users[3],
        },
        {
          id: "message-3",
          createdAt: "2 hours ago",
          updatedAt: "",
          message: "The hell",
          sentBy: users[3],
          user: users[3],
        },
        {
          id: "message-4",
          createdAt: "2 hours ago",
          updatedAt: "",
          message: "Another message",
          sentBy: users[3],
          user: users[3],
        },
        {
          id: "message-5",
          createdAt: "2 hours ago",
          updatedAt: "",
          message: "Doesn't matter I guess",
          sentBy: users[3],
          user: users[3],
        },
      ],
      updatedAt: "33 min ago",
    },
    {
      id: "thread-3",
      invitees: [users[2], users[3]],
      last_messenger: users[2],
      last_message: "So special",
      messages: [
        {
          id: "message-1",
          createdAt: "4 hours ago",
          updatedAt: "",
          message: "How special is this?",
          sentBy: users[3],
          user: users[3],
        },
        {
          id: "message-2",
          createdAt: "2 hours ago",
          updatedAt: "",
          message: "So special",
          sentBy: users[2],
          user: users[3],
        },
      ],
      updatedAt: "33 min ago",
    },
  ],
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

const MessagePageComponent: React.FC<MessagePageComponent> = ({}) => {
  // @ts-ignore
  const [messageThreadsState, messageThreadsDispatch] = React.useReducer(
    messageThreadsReducer,
    setDataMessageThreadsState,
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
        <LayoutAuthorizedHeader />
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

const Messages: NextPage<MessagesPageProps, {}> &
  NextPageStaticVariableProps = ({}) => {
  return <MessagePageComponent />;
};

Messages.displayName = `MessagesPage`;

Messages.getInitialProps = async ({ query, pathname }) => {
  return {
    query,
    pathname,
    hello: "hello",
  };
};

Messages.getLayout = getLayout;

Messages.title = "Messages";

export default withApollo()(Messages);
