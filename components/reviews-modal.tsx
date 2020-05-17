import React from "react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";
import Link from "next/link";

import {
  AbFlex,
  Card,
  Button,
  Flex,
  StyledHr,
  Text,
} from "./primitives/styled-rebass";
import { MeQuery } from "../lib/queries/me.graphql";
import AvatarPlaceholder from "./avatar-placeholder";
import { ModalViewActions, ModalStateInterface } from "./entry-layout";

type ModalStates = "isOpen" | "isClosed";

interface ReviewsModalProps {
  userInfo?: MeQuery["me"] | undefined;
  reviewsModalState: ModalStates;
  setReviewsModalState: React.Dispatch<React.SetStateAction<ModalStates>>;
  teamId?: string;
  modalState: ModalStateInterface;
  modalDispatch: React.Dispatch<ModalViewActions>;
}

export const ReviewsModal: React.FunctionComponent<ReviewsModalProps> = ({
  reviewsModalState,
  setReviewsModalState,
  teamId,
  userInfo,
}) => {
  return (
    <>
      {reviewsModalState === "isOpen" ? (
        <UniversalPortal selector="#modal">
          <AbFlex
            position="absolute"
            bg="rgba(0, 0, 0, 0.7)"
            top={0}
            width={1}
            // left={150}
            right={0}
            bottom={0}
            zIndex={9}
          >
            <Card p={0} pb={3} width={1}>
              <Flex
                p={2}
                mb={2}
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                style={{ position: "relative" }}
              >
                <Text>Reviews</Text>
              </Flex>
              <StyledHr my={0} />
              <Flex
                px={2}
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <AvatarPlaceholder />
                <Flex my={3} flexDirection="column">
                  <Text>{userInfo ? userInfo.name : ""}</Text>
                  <Text>{userInfo?.email}</Text>
                </Flex>
                <Flex my={3} flexDirection="column">
                  <Text>TEAM ID</Text>

                  {teamId ? teamId : "no team ID"}
                </Flex>
                {/* <Button type="button" onClick={()=>}>Logout</Button> */}
                <Link href="/logout" passHref={true}>
                  <a>logout</a>
                </Link>

                <Button
                  type="button"
                  onClick={() => setReviewsModalState("isClosed")}
                >
                  Close
                </Button>
              </Flex>
            </Card>
          </AbFlex>
        </UniversalPortal>
      ) : (
        ""
      )}
    </>
  );
};
