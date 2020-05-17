import React from "react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";
import Head from "next/head";

import { AbFlex, Card, Flex } from "./primitives/styled-rebass";
import { useLockBodyScroll } from "./use-lock-body-scroll";
import { useRouter } from "next/router";
import { AuthenticatedModalHeader } from "./authenticated-modal-header";

type ModalStates = "isOpen" | "isClosed";

interface MapViewModalProps {
  viewState: ModalStates;
}

const MapViewModal: React.FunctionComponent<MapViewModalProps> = ({
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
        <title>Map View</title>
      </Head>
      {viewState === "isOpen" ? (
        <UniversalPortal selector="#modal">
          <AbFlex
            position="absolute"
            bg="rgba(0, 0, 0, 0.7)"
            flexDirection="column"
            top={0}
            width={1}
            // left={150}
            right={0}
            bottom={0}
            zIndex={9}
          >
            <AuthenticatedModalHeader
              bg="#eee"
              referer={referer}
              router={router}
              title="Map View"
              mt={5}
            />
            <Flex flex={1}>
              <Card p={0} pb={3} width={1}>
                MAP VIEW
              </Card>
            </Flex>
          </AbFlex>
        </UniversalPortal>
      ) : (
        ""
      )}
    </>
  );
};

export default MapViewModal;
