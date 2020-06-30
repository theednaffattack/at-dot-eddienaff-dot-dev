import React, { ReactElement } from "react";

import { ClonedChildrenFromAuthLayout } from "../pages/traveling";
import { SubAuthHeaderPageLayout } from "./helper-comps-standard-page-layout";
import { Flex, Text, Image } from "./primitives/styled-rebass";
import { User } from "../__generated__/__intermediate__/lib/subscriptions/new-message.graphql-e9d1ecf649bc813fdb2afa757add0dc67efddc8f";
import { Image as ImageType } from "*/add-new-message.graphql";

interface SubscriptionPageComponentProps extends ClonedChildrenFromAuthLayout {
  title: string;
}

export function SubscriptionPageComponent({
  modalOverlayDispatch,
  modalOverlayState,
  title,
}: SubscriptionPageComponentProps): ReactElement {
  return (
    <SubAuthHeaderPageLayout
      accordionContent={<Flex>please work</Flex>}
      accordionMinHeight="auto"
      modalOverlayDispatch={modalOverlayDispatch}
      modalOverlayState={modalOverlayState}
      title={title}
    >
      <Flex flexDirection="column">
        <RenderSubscriptionList data={fauxSubscriptionList} />
      </Flex>
    </SubAuthHeaderPageLayout>
  );
}

interface RenderSubscriptionListProps {
  data: SubscriptionAttributes[];
}

function RenderSubscriptionList({ data }: RenderSubscriptionListProps) {
  return (
    <>
      {data.map((dataItem, dataIndex) => (
        <Flex
          key={dataIndex + "-temp-data-key-for-prototyping"}
          flexDirection="column"
          py={3}
          borderBottom="1px #eee solid"
        >
          <Flex alignItems="center">
            <Flex height="50px" width="50px" flexDirection="column">
              <Image src={dataItem.image.uri} sx={{ borderRadius: "12px" }} />
            </Flex>
            <Flex flexDirection="column" pl={2} flex={1}>
              <Text>{dataItem.from.name}</Text>
              <Text>{dataItem.notice}</Text>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </>
  );
}

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

interface SubscriptionAttributes {
  type: "follow" | "updates" | "pulse";
  notice: ReactElement | string;
  from: Partial<User>;
  image: RecursivePartial<ImageType>;
}

const fauxSubscriptionList: SubscriptionAttributes[] = [
  {
    from: { name: "Fake Person" },
    type: "follow",
    notice: <span>Fake Person posted an update.</span>,
    image: {
      id: "1",
      uri: "https://source.unsplash.com/random/50x50?nature&black+and+white",
      user: { name: "Fake Person" },
    },
  },
  {
    from: { name: "Soso Fake Person" },
    type: "follow",
    notice: <span>Another fake person got married!</span>,
    image: {
      id: "1",
      uri: "https://source.unsplash.com/random/50x50?city&black+and+white",
      user: { name: "Fake Person" },
    },
  },
  {
    from: { name: "Fun Nightclub" },
    type: "pulse",
    notice: <span>Is hosting Madlib!</span>,
    image: {
      id: "1",
      uri: "https://source.unsplash.com/random/50x50?whale&black+and+white",
      user: { name: "Fake Person" },
    },
  },
  {
    from: { name: "Fun Nightclub" },
    type: "updates",
    notice: <span>Is closed until further notice due to Covid-19.</span>,
    image: {
      id: "1",
      uri:
        "https://source.unsplash.com/random/50x50?countryside&black+and+white",
      user: { name: "Fake Person" },
    },
  },
];
