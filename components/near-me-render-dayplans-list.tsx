import React from "react";

import { Flex } from "./primitives/styled-rebass";
import { HotelViewDayPlansListItem } from "./hotel-view-day-plans-list-item";
import { DayPlansInterface } from "./helpers";

interface RenderDayPlansList {
  dayPlansData: DayPlansInterface[];
}

export function RenderDayPlansList({ dayPlansData }: RenderDayPlansList) {
  return (
    <Flex
      as="ul"
      // ml="19px"
      pl={3}
      flex={1}
      flexDirection="column"
      borderLeft="2px rgba(34,34,34,0.1) solid"
      style={{
        listStyle: "none",
      }}
    >
      {dayPlansData.map((item, index) => {
        return (
          <li key={`${index}-random`}>
            <HotelViewDayPlansListItem
              time={item.time}
              index={index}
              key={item.id}
              title={item.title}
              link={item.link}
            />
          </li>
        );
      })}
    </Flex>
  );
}
