import React from "react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";
import Head from "next/head";
import dynamic from "next/dynamic";

import { AbFlex, Button, Flex, Box } from "./primitives/styled-rebass";
import { useLockBodyScroll } from "./use-lock-body-scroll";
import { AuthenticatedModalHeader } from "./authenticated-modal-header";
// import { MapCardPopover } from "./map-card-popover";
import Icon from "./icon";
import { IconProps } from "./icon-types";
import { ViewportActions, ViewportState } from "./map";
import { OverlayModalsActions } from "./hotel-view-modal";
import {
  AuthorizedLayoutModalOverlayState,
  AuthorizedLayoutModalOverlayActions,
} from "./layout-authorized";
const MapNoSSR = dynamic(() => import("./map"), {
  ssr: false,
});

type ModalStates = "isOpen" | "isClosed";

interface MapViewModalProps {
  overlayModalsDispatch: React.Dispatch<OverlayModalsActions>;
  viewState: ModalStates;

  layoutModalState: AuthorizedLayoutModalOverlayState;
  layoutModalDispatch: React.Dispatch<AuthorizedLayoutModalOverlayActions>;
}

const contentRef = React.createRef<HTMLDivElement>();

const MapViewModal: React.FunctionComponent<MapViewModalProps> = ({
  // layoutModalDispatch,
  layoutModalState,
  overlayModalsDispatch,
  viewState,
}) => {
  useLockBodyScroll();
  // const router = useRouter();

  // // const contentRect = useRect(contentRef);

  // const {
  //   query: {
  //     referer: refererBase,
  //     coordinates,
  //     name: nameBase,
  //     price: priceBase,
  //   },
  // } = router;

  // const referer =
  //   typeof refererBase === "string" ? refererBase : refererBase[0];
  // const name = typeof nameBase === "string" ? nameBase : nameBase[0];
  // const price = typeof priceBase === "string" ? priceBase : priceBase[0];

  // const asNumbers = convertLngLatNumerals(coordinates);

  return (
    <>
      <Head>
        <title>Map View</title>
      </Head>
      {viewState === "isOpen" ? (
        <UniversalPortal selector="#map_modal">
          <AbFlex
            position="fixed"
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
              closeFunc={() =>
                overlayModalsDispatch({ type: "closeMapViewOverlay" })
              }
              viewState={viewState}
              // referer={referer}
              // router={router}
              title="Map View"
              mt={5}
            />
            <Flex
              flex={1}
              bg="transparent"
              sx={{ position: "relative" }}
              ref={contentRef}
            >
              <MapNoSSR
                lngLat={layoutModalState.hotelViewer.data.coordinates[0]}
                name={layoutModalState.hotelViewer.data.name}
                price={layoutModalState.hotelViewer.data.price}
              />
              {/* <MapCardPopover /> */}
              {/* <MapViewZoomButtonContainer /> */}
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

interface MapViewZoomButtonContainerProps {
  viewportDispatch: React.Dispatch<ViewportActions>;
  viewportState: ViewportState;
}

export const MapViewZoomButtonContainer: React.FC<MapViewZoomButtonContainerProps> = ({
  viewportDispatch,
  viewportState,
}) => {
  return (
    <AbFlex
      bottom={[4]}
      left={[3, 3, 3, 3, 3, 3, 4]}
      position="absolute"
      // ml={[2, 2, 2, 2, 2, 2, 3]}
    >
      <Box mr={2}>
        <MapViewZoomButton
          buttonText="minus"
          onClick={() => {
            viewportDispatch({
              type: "zoom",
              value: viewportState.zoom - 2,
            });
          }}
        />
      </Box>
      <Box ml={2}>
        <MapViewZoomButton
          buttonText="plus"
          onClick={() => {
            viewportDispatch({
              type: "zoom",
              value: viewportState.zoom + 2,
            });
          }}
        />
      </Box>
    </AbFlex>
  );
};
