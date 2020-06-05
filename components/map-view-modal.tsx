import React from "react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";
import Head from "next/head";

import { AbFlex, Button, Flex, Box } from "./primitives/styled-rebass";
import { useLockBodyScroll } from "./use-lock-body-scroll";
import { useRouter } from "next/router";
import { AuthenticatedModalHeader } from "./authenticated-modal-header";
import { MapCardPopover } from "./map-card-popover";
import Icon, { IconProps } from "./icon";

type ModalStates = "isOpen" | "isClosed";

interface MapViewModalProps {
  viewState: ModalStates;
}

const contentRef = React.createRef<HTMLDivElement>();

const MapViewModal: React.FunctionComponent<MapViewModalProps> = ({
  viewState,
}) => {
  useLockBodyScroll();
  const router = useRouter();

  // const contentRect = useRect(contentRef);

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
            width={1}
            top={0}
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
            <Flex
              flex={1}
              bg="transparent"
              sx={{ position: "relative" }}
              ref={contentRef}
            >
              <MapCardPopover />
              <MapViewZoomButtonContainer />
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

interface MapViewZoomButtonProps {
  buttonText: IconProps["name"];
  onClick: () => void;
}

const MapViewZoomButton: React.FC<MapViewZoomButtonProps> = ({
  buttonText,
  onClick,
}) => {
  return (
    <Button
      bg="#fafafa"
      type="button"
      borderRadius="50%"
      height="50px"
      width="50px"
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 20px 33px 0px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Icon name={buttonText} size="15px" fill="#444" active={false} />
    </Button>
  );
};

interface MapViewZoomButtonContainerProps {}

const MapViewZoomButtonContainer: React.FC<MapViewZoomButtonContainerProps> = ({}) => {
  return (
    <AbFlex
      bottom={[3, 3, 3, 3, 3, 3, 4]}
      left={[3, 3, 3, 3, 3, 3, 4]}
      position="absolute"
      // ml={[2, 2, 2, 2, 2, 2, 3]}
    >
      <Box mr={2}>
        <MapViewZoomButton
          buttonText="minus"
          onClick={() => alert("minus clicked")}
        />
      </Box>
      <Box ml={2}>
        <MapViewZoomButton
          buttonText="plus"
          onClick={() => alert("plus clicked")}
        />
      </Box>
    </AbFlex>
  );
};
