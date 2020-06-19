import React, { ReactElement } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const FilterModal = dynamic(() => import("./filter-modal"));
const HotelViewModal = dynamic(() => import("./hotel-view-modal"));
const SidelistModal = dynamic(() => import("./sidelist-modal"));
const ProfileModal = dynamic(() => import("./profile-modal"));

import { Flex } from "./primitives/styled-rebass";
import { useRouter } from "next/router";
import { ModalViewStates } from "./entry-layout";
import { users } from "./helpers";
import ActivityModal from "./activity-modal";

interface ProfileModalStates {
  mode: "view" | "edit" | "inactive";
  status: ModalViewStates;
}

export interface AuthorizedLayoutModalOverlayState {
  sidebar: ModalViewStates;
  profile: ProfileModalStates;
  activity: ModalViewStates;
  filterModal: ModalViewStates;
}

interface ProfileModalActions {
  setMode: ProfileModalStates["mode"];
  setStatus: ProfileModalStates["status"];
}

export type AuthorizedLayoutModalOverlayActions =
  | { type: "sidebarOpen"; action: "overlayModalOpen" }
  | { type: "sidebarClosed"; action: "overlayModalClosed" }
  | { type: "filterModalOpen"; action: "overlayModalOpen" }
  | { type: "filterModalClosed"; action: "overlayModalClosed" }
  | { type: "activityOpen"; action: "setOpen" }
  | { type: "activityClosed"; action: "setClosed" }
  | { type: "profileOpen"; action: ProfileModalActions }
  | { type: "profileClosed"; action: ProfileModalActions }
  | { type: "openProfileFromSidebar"; action: ProfileModalActions };

function authorizedLayoutModalOverlayReducer(
  // @ts-ignore
  state: AuthorizedLayoutModalOverlayState,
  action: AuthorizedLayoutModalOverlayActions
): AuthorizedLayoutModalOverlayState {
  switch (action.type) {
    case "sidebarOpen":
      return {
        sidebar: "isOpen",
        filterModal: state.filterModal,
        profile: { status: "isClosed", mode: "inactive" },
        activity: state.activity,
      };
    case "sidebarClosed":
      return {
        sidebar: "isClosed",
        filterModal: state.filterModal,
        profile: state.profile,
        activity: state.activity,
      };
    case "filterModalOpen":
      return {
        sidebar: state.sidebar,
        filterModal: "isOpen",
        profile: { status: "isClosed", mode: "inactive" },
        activity: state.activity,
      };
    case "filterModalClosed":
      return {
        sidebar: state.sidebar,
        filterModal: "isClosed",
        profile: state.profile,
        activity: state.activity,
      };
    case "profileOpen":
      return {
        sidebar: state.sidebar,
        filterModal: state.filterModal,
        profile: { status: "isOpen", mode: "view" },
        activity: state.activity,
      };
    case "profileClosed":
      return {
        sidebar: state.sidebar,
        filterModal: state.filterModal,
        profile: {
          status: action.action.setStatus,
          mode: action.action.setMode,
        },
        activity: state.activity,
      };
    case "openProfileFromSidebar":
      return {
        sidebar: "isClosed",
        filterModal: state.filterModal,
        profile: {
          status: action.action.setStatus,
          mode: action.action.setMode,
        },
        activity: state.activity,
      };
    case "activityOpen":
      return {
        sidebar: state.sidebar,
        filterModal: "isClosed",
        profile: { status: "isClosed", mode: "inactive" },
        activity: "isOpen",
      };
    case "activityClosed":
      return {
        sidebar: state.sidebar,
        filterModal: state.filterModal,
        profile: state.profile,
        activity: "isClosed",
      };

    default:
      return {
        sidebar: "isClosed",
        filterModal: "isClosed",
        profile: { status: "isClosed", mode: "inactive" },
        activity: "isClosed",
      };
  }
}

function initAuthorizedLayoutModalOverlay(
  initialState: AuthorizedLayoutModalOverlayState
): AuthorizedLayoutModalOverlayState {
  return initialState;
}

const AuthorizedLayout = ({ children, title }: any) => {
  const { children: subChildren } = children;

  const [modalOverlayState, modalOverlayDispatch] = React.useReducer<
    (
      state: AuthorizedLayoutModalOverlayState,
      action: AuthorizedLayoutModalOverlayActions
    ) => AuthorizedLayoutModalOverlayState,
    AuthorizedLayoutModalOverlayState
  >(
    authorizedLayoutModalOverlayReducer,
    {
      sidebar: "isClosed",
      filterModal: "isClosed",
      profile: { status: "isClosed", mode: "inactive" },
      activity: "isClosed",
    },
    initAuthorizedLayoutModalOverlay
  );

  const newChildren = React.cloneElement(subChildren, {
    modalOverlayState,
    modalOverlayDispatch,
  });

  const router = useRouter();

  const viewHotelModalViewController =
    router.query && router.query.viewHotelModal ? "isOpen" : "isClosed";

  return (
    <>
      <Head>
        <title>{children && children.title ? children.title : title}</title>
      </Head>
      <Flex
        m={[0]}
        flexDirection="column"
        width={1}
        sx={{
          position: children.title === "Messages" ? "absolute" : "relative",
          top: children.title === "Messages" ? 0 : undefined,
          right: children.title === "Messages" ? 0 : undefined,
          bottom: children.title === "Messages" ? 0 : undefined,
          left: children.title === "Messages" ? 0 : undefined,
          overflow: children.title === "Messages" ? "hidden" : "auto",
        }}
      >
        {newChildren}
      </Flex>

      {viewHotelModalViewController === "isOpen" ? (
        <HotelViewModal viewState="isOpen" />
      ) : null}
      {modalOverlayState.filterModal === "isOpen" ? (
        <FilterModal
          viewState={modalOverlayState}
          modalDispatch={modalOverlayDispatch}
        />
      ) : null}
      {modalOverlayState.sidebar === "isOpen" ? (
        <SidelistModal
          modalState={modalOverlayState.sidebar}
          modalDispatch={modalOverlayDispatch}
          userInfo={users[0]}
        />
      ) : null}
      {modalOverlayState.profile.status === "isOpen" ? (
        <ProfileModal
          modalState={modalOverlayState.profile}
          modalDispatch={modalOverlayDispatch}
          userInfo={users[0]}
        />
      ) : null}
      {modalOverlayState.activity === "isOpen" ? (
        <ActivityModal
          modalState={modalOverlayState.activity}
          modalDispatch={modalOverlayDispatch}
          userInfo={users[0]}
        />
      ) : null}
      {/* {mapViewModalViewController === "isOpen" ? (
        <MapViewModal viewState="isOpen" />
      ) : null} */}
    </>
  );
};

type Page = ReactElement;

export const getLayout = (page: Page) => {
  return <AuthorizedLayout>{page}</AuthorizedLayout>;
};

export default AuthorizedLayout;
