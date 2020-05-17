import React from "react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";
import { useRouter } from "next/router";

// @ts-ignore
import {
  AbFlex,
  Box,
  Flex,
  Image,
  StyledHr,
  Text,
} from "./primitives/styled-rebass";
import { MeQuery } from "../lib/queries/me.graphql";
import { AuthenticatedModalHeader } from "./authenticated-modal-header";
import { useLockBodyScroll } from "./use-lock-body-scroll";
import { HotelViewTitleCard } from "./hotel-view-title-card";
import { HotelViewInfoCard } from "./hotel-view-info-card";
import { HotelViewFeaturesCard } from "./hotel-view-features-card";
import { HotelViewMapViewCard } from "./hotel-view-map-view-card";
import { HotelViewListCard } from "./hotel-view-list-card";
import Head from "next/head";

interface HotelViewModalProps {
  userInfo?: MeQuery["me"] | undefined;
  viewState: "isOpen" | "isClosed";
  teamId?: string;
}

const HotelViewModal: React.FunctionComponent<HotelViewModalProps> = ({
  viewState,
}) => {
  useLockBodyScroll();
  const router = useRouter();

  const {
    query: { referer: refererBase },
  } = router;
  const referer =
    typeof refererBase === "string" ? refererBase : refererBase[0];
  return (
    <>
      <Head>
        <title>View Hotel</title>
      </Head>
      {viewState === "isOpen" ? (
        <UniversalPortal selector="#modal">
          <AbFlex
            position="absolute"
            flexDirection="column"
            bg="rgba(0, 0, 0, 0.7)"
            top={0}
            width={1}
            right={0}
            bottom={0}
            zIndex={9}
          >
            <AbFlex position="absolute" left={0} right={0} zIndex={9000}>
              <AuthenticatedModalHeader
                bg="pink"
                referer={referer}
                mt={0}
                router={router}
                title="View Hotel"
              />
            </AbFlex>
            <Flex
              bg="#eee"
              border="lime"
              style={{ position: "relative" }}
              flexWrap="wrap"
            >
              <Flex
                pr={[1, 4]}
                width={[1, 1, 1, 1, 1, 1, 1 / 2]}
                border="crimson"
              >
                <Box>
                  <Image
                    src="https://images.unsplash.com/photo-1587148987975-47786588f0e0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixlib=rb-1.2.1&q=80&w=800"
                    srcSet=""
                  />
                  <StyledHr />
                  <Text>Some text</Text>
                </Box>
              </Flex>
              <Flex
                mt={[1, 5]}
                flexDirection="column"
                width={[1, 1, 1, 1, 1, 1, 1 / 2]}
                border="lime"
              >
                <HotelViewTitleCard bg="transparent" />
                <HotelViewInfoCard bg="#fff" />
                <HotelViewFeaturesCard bg="#fff" />
                <HotelViewMapViewCard bg="#fff" router={router} />
                <HotelViewListCard bg="#fff" router={router} />
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

export default HotelViewModal;
