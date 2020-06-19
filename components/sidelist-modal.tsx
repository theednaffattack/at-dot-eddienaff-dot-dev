import React from "react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";

import { AbFlex, Flex } from "./primitives/styled-rebass";
import { MeQuery } from "../lib/queries/me.graphql";
import { AuthorizedLayoutModalOverlayActions } from "./layout-authorized";
import { useLockBodyScroll } from "./use-lock-body-scroll";
import { SidelistModalIconLinkButtons } from "./sidelist-modal-icon-link-buttons";
import { SidebarProfileBasicInfo } from "./sidebar-profile-basic-info";

// from: https://css-tricks.com/examples/hrs/
// solid rgba(0, 0, 0, 0.1);
interface SideListModalProps {
  userInfo?: MeQuery["me"] | undefined;
  teamId?: string;
  modalState: "isOpen" | "isClosed";
  modalDispatch: React.Dispatch<AuthorizedLayoutModalOverlayActions>;
}

export const SideListModal: React.FunctionComponent<SideListModalProps> = ({
  modalDispatch,
  modalState,
  userInfo,
}) => {
  useLockBodyScroll();
  return (
    <>
      {modalState === "isOpen" ? (
        <UniversalPortal selector="#modal">
          <AbFlex
            position="absolute"
            bg="rgba(0, 0, 0, 0.7)"
            width={1}
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={9}
            onClick={(event) => {
              event.preventDefault();
              if (event.target === event.currentTarget) {
                modalDispatch({
                  type: "sidebarClosed",
                  action: "overlayModalClosed",
                });
              }
            }}
          >
            <Flex
              bg="#f2f2f2"
              px={2}
              p={0}
              pb={3}
              width={[2 / 3, 2 / 3, 2 / 3, 2 / 3, "350px", "350px", "350px"]}
              flexDirection="column"
              alignItems="center"
              overflowY="auto"
            >
              {/* START - PROFILE VIEW */}
              <SidebarProfileBasicInfo
                modalDispatch={modalDispatch}
                modalState={modalState}
                userInfo={userInfo}
              />
              {/* END - PROFILE VIEW */}

              {/* START - LINK BUTTONS */}
              <SidelistModalIconLinkButtons />
              {/* END - LINK BUTTONS */}
            </Flex>
          </AbFlex>
        </UniversalPortal>
      ) : (
        ""
      )}
    </>
  );
};

export default SideListModal;
