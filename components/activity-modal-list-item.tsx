import React from "react";

import { Flex, Text } from "./primitives/styled-rebass";
import { ActivityListItem } from "./helpers";

interface ActivityModalListItemProps extends ActivityListItem {
  index?: number;
}

export const ActivityModalListItem: React.FC<ActivityModalListItemProps> = ({
  // id,
  // index,
  event,
  eventInfo,
  timeSinceEvent,
}) => {
  // @ts-ignore
  // const [imageLoadState, setImageLoadState] = React.useState("notLoaded");
  return (
    <Flex px={2} py={4} flexDirection="column" borderBottom="1px solid #e2e2e2">
      <Text>{timeSinceEvent}</Text>
      {event}
      {eventInfo}
    </Flex>
  );
};
