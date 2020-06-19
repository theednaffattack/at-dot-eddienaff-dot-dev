import React from "react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";

import { AbFlex, Button, Flex, Text } from "./primitives/styled-rebass";
import { MeQuery } from "../lib/queries/me.graphql";
import {
  AuthorizedLayoutModalOverlayState,
  AuthorizedLayoutModalOverlayActions,
} from "./layout-authorized";
import Icon from "./icon";
import { useLockBodyScroll } from "./use-lock-body-scroll";
import Head from "next/head";
import { ActivityModalListItem } from "./activity-modal-list-item";
import { activityListItems } from "./helpers";

interface ActivityModalProps {
  modalDispatch: React.Dispatch<AuthorizedLayoutModalOverlayActions>;
  modalState: AuthorizedLayoutModalOverlayState["activity"];
  userInfo?: MeQuery["me"] | undefined;
}

const ActivityModal: React.FunctionComponent<ActivityModalProps> = ({
  modalDispatch,
  modalState,
}) => {
  useLockBodyScroll();

  return (
    <>
      <Head>
        <title>Recent Activity</title>
      </Head>
      {modalState === "isOpen" ? (
        <UniversalPortal selector="#modal">
          <AbFlex
            position="fixed"
            bg="rgba(0, 0, 0, 0.7)"
            color="#444"
            top={0}
            width={1}
            left={0}
            right={0}
            bottom={0}
            zIndex={19}
            onClick={(event) => {
              event.preventDefault();
              if (event.target === event.currentTarget) {
                modalDispatch({ type: "activityClosed", action: "setClosed" });
              }
            }}
          >
            <Flex
              p={3}
              ml="auto"
              bg="#eee"
              flexDirection="column"
              overflowY="scroll"
              overflowX="hidden"
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                transition: "width 1s",
                width:
                  modalState === "isOpen"
                    ? ["100%", "100%", "100%", "100%", "66%", "66%", "30%"]
                    : "0",
              }}
            >
              {/* START - HEADER */}
              <Flex
                width={1}
                alignItems="center"
                justifyContent="center"
                mt={[3, 3, 3, 3, 3, 3, 4]}
                pb={3}
                pl={3}
              >
                <Flex
                  width={1}
                  alignItems="center"
                  sx={{ position: "absolute", left: 8 }}
                >
                  <Button
                    type="button"
                    borderRadius="50%"
                    height="40px"
                    width="40px"
                    bg="#fff"
                    p={0}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0px 20px 27px 0px rgba(0, 0, 0, 0.07)",
                    }}
                    onClick={() => {
                      modalDispatch({
                        type: "activityClosed",
                        action: "setClosed",
                      });
                    }}
                  >
                    <Icon name="close" fill="#aaa" size="13px" active={false} />
                  </Button>
                </Flex>
                <Text>Activity</Text>
              </Flex>

              {/* END - HEADER */}

              <Flex
                as="ul"
                ml="19px"
                pl={3}
                flex={1}
                flexDirection="column"
                borderLeft="2px rgba(34,34,34,0.1) solid"
                style={{
                  listStyle: "none",
                }}
              >
                {activityListItems.map((item, index) => {
                  return (
                    <li key={`${index}-activity-random`}>
                      <ActivityModalListItem
                        event={item.event}
                        eventInfo={item.eventInfo}
                        id={item.id}
                        index={index}
                        timeSinceEvent={item.timeSinceEvent}
                      />
                    </li>
                  );
                })}
              </Flex>
            </Flex>
          </AbFlex>
        </UniversalPortal>
      ) : (
        ""
      )}
    </>
  );
};

export default ActivityModal;
