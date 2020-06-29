import React from "react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";

import { AbFlex, Flex, GridAuto } from "./primitives/styled-rebass";
import { useMeQuery } from "../lib/queries/me.graphql";
import { AuthenticatedModalHeader } from "./authenticated-modal-header";
import {
  OverlayModalsActions,
  OverlayModalsStateInterface,
} from "./hotel-view-modal";
import { fauxReviewCards } from "./helpers";
import { ReviewCard } from "./reviews-review-card";

interface ReviewsModalProps {
  modalDispatch: React.Dispatch<OverlayModalsActions>;
  modalState: OverlayModalsStateInterface["reviews"];
}

export function ReviewsModal({ modalDispatch, modalState }: ReviewsModalProps) {
  let { error, loading } = useMeQuery();

  return (
    <>
      {modalState === "isOpen" ? (
        <UniversalPortal selector="#map_modal">
          <AbFlex
            position="fixed"
            bg="rgba(0, 0, 0, 0.7)"
            top={0}
            width={1}
            right={0}
            bottom={0}
            zIndex={34}
          >
            <Flex bg="#eee" flexDirection="column" flex={1} width={1}>
              <AuthenticatedModalHeader
                closeFunc={() =>
                  modalDispatch({
                    type: "reviewsClosed",
                  })
                }
                title="Reviews"
                viewState={modalState}
              />
              {error ? JSON.stringify(error, null, 2) : null}
              {loading === true ? JSON.stringify(loading, null, 2) : null}

              <GridAuto gridGap={3} p={3}>
                {fauxReviewCards.map((item) => {
                  return (
                    <ReviewCard
                      key={item + "review-card"}
                      averageRating={4}
                      createdAt="52 mins ago"
                      likeCount={33}
                      reviewText="Faaaaaaaaaaaaaaake review text"
                      user={{
                        id: "01",
                        firstName: "Woodruff",
                        lastName: "Onagonye",
                      }}
                    />
                  );
                })}
              </GridAuto>
            </Flex>
          </AbFlex>
        </UniversalPortal>
      ) : (
        ""
      )}
    </>
  );
}

export default ReviewsModal;
