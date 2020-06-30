import React from "react";

import { Button, Flex, Text } from "./primitives/styled-rebass";
import { HotelViewDayPlansListItem } from "./hotel-view-day-plans-list-item";
import { DayPlansInterface } from "./helpers";
import Icon from "./icon";

interface RenderDayPlansList {
  dayPlansData: DayPlansInterface[];
}

export function RenderDayPlansList({ dayPlansData }: RenderDayPlansList) {
  return (
    <>
      {/* START - HEADER */}
      <Flex
        width={1}
        alignItems="center"
        justifyContent="center"
        mt={[3, 3, 3, 3, 3, 3, 4]}
        pb={3}
      >
        <Flex
          width={1}
          alignItems="center"
          sx={{ position: "absolute", left: -18 }}
        >
          <Button
            type="button"
            borderRadius="50%"
            height="40px"
            width="40px"
            bg="grey"
            p={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0px 20px 27px 0px rgba(0, 0, 0, 0.07)",
            }}
            onClick={() => {
              console.log("meow");
              // overlayModalDispatch({ type: "closeDayPlansSidebar" });
            }}
          >
            <Icon
              mt="2px"
              name="close"
              fill="#aaa"
              size="13px"
              active={false}
            />
          </Button>
        </Flex>
        <Text>Day Plans</Text>
      </Flex>
      {/* END - HEADER */}

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
    </>
  );
}
