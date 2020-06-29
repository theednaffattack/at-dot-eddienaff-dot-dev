import React, { ReactElement } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const FilterModal = dynamic(() => import("./filter-modal"));
const HotelViewModal = dynamic(() => import("./hotel-view-modal"));
const ProfileModal = dynamic(() => import("./profile-modal"));
const SelectDateModal = dynamic(() => import("./select-date-modal"));
const SidelistModal = dynamic(() => import("./sidelist-modal"));

import { Flex } from "./primitives/styled-rebass";
import { useRouter } from "next/router";
import { ModalViewStates } from "./entry-layout";
import { users } from "./helpers";
import ActivityModal from "./activity-modal";

interface ProfileModalStates {
  mode: "view" | "edit" | "inactive";
  status: ModalViewStates;
}

interface HotelViewerStates {
  status: string;
  data: { coordinates: number[][]; name: string | null; price: string };
}

export interface AuthorizedLayoutModalOverlayState {
  activity: ModalViewStates;
  filterModal: ModalViewStates;
  hotelViewer: HotelViewerStates;
  profile: ProfileModalStates;
  selectDate: ModalViewStates;
  sidebar: ModalViewStates;
}

interface ProfileModalActions {
  setMode: ProfileModalStates["mode"];
  setStatus: ProfileModalStates["status"];
}

export type AuthorizedLayoutModalOverlayActions =
  | { type: "activityOpen"; action: "setOpen" }
  | { type: "activityClosed"; action: "setClosed" }
  | { type: "filterModalOpen"; action: "overlayModalOpen" }
  | { type: "filterModalClosed"; action: "overlayModalClosed" }
  | {
      type: "hotelViewerModalOpen";
      action: "overlayModalOpen";
      data: { coordinates: number[][]; price: string; name: string | null };
    }
  | {
      type: "hotelViewerModalClosed";
      action: "overlayModalClosed";
      data: { coordinates: number[][]; price: string; name: string | null };
    }
  | { type: "openProfileFromSidebar"; action: ProfileModalActions }
  | { type: "profileOpen"; action: ProfileModalActions }
  | { type: "profileClosed"; action: ProfileModalActions }
  | { type: "selectDateOpen"; action: "overlayModalOpen" }
  | { type: "selectDateClosed"; action: "overlayModalClosed" }
  | { type: "sidebarOpen"; action: "overlayModalOpen" }
  | { type: "sidebarClosed"; action: "overlayModalClosed" };

function authorizedLayoutModalOverlayReducer(
  // @ts-ignore
  state: AuthorizedLayoutModalOverlayState,
  action: AuthorizedLayoutModalOverlayActions
): AuthorizedLayoutModalOverlayState {
  switch (action.type) {
    case "activityOpen":
      return {
        activity: "isOpen",
        filterModal: "isClosed",
        hotelViewer: state.hotelViewer,
        profile: { status: "isClosed", mode: "inactive" },
        selectDate: state.selectDate,
        sidebar: state.sidebar,
      };
    case "activityClosed":
      return {
        activity: "isClosed",
        filterModal: state.filterModal,
        hotelViewer: state.hotelViewer,
        profile: state.profile,
        selectDate: state.selectDate,
        sidebar: state.sidebar,
      };
    case "filterModalOpen":
      return {
        activity: state.activity,
        filterModal: "isOpen",
        hotelViewer: state.hotelViewer,
        profile: { status: "isClosed", mode: "inactive" },
        selectDate: state.selectDate,
        sidebar: state.sidebar,
      };
    case "filterModalClosed":
      return {
        activity: state.activity,
        filterModal: "isClosed",
        hotelViewer: state.hotelViewer,
        profile: state.profile,
        selectDate: state.selectDate,
        sidebar: state.sidebar,
      };
    case "hotelViewerModalClosed":
      return {
        activity: state.activity,
        filterModal: state.filterModal,
        hotelViewer: {
          status: "isClosed",
          data: { coordinates: [[-1, -1]], name: null, price: "-1" },
        },
        profile: state.profile,
        selectDate: state.selectDate,
        sidebar: state.sidebar,
      };
    case "hotelViewerModalOpen":
      return {
        activity: state.activity,
        filterModal: state.filterModal,
        hotelViewer: {
          status: "isOpen",
          data: {
            coordinates: action.data.coordinates,
            name: action.data.name,
            price: action.data.price,
          },
        },
        profile: state.profile,
        selectDate: state.selectDate,
        sidebar: state.sidebar,
      };
    case "openProfileFromSidebar":
      return {
        activity: state.activity,
        filterModal: state.filterModal,
        hotelViewer: state.hotelViewer,
        profile: {
          status: action.action.setStatus,
          mode: action.action.setMode,
        },
        selectDate: state.selectDate,
        sidebar: "isClosed",
      };

    case "profileOpen":
      return {
        sidebar: state.sidebar,
        filterModal: state.filterModal,
        hotelViewer: state.hotelViewer,
        profile: { status: "isOpen", mode: "view" },
        selectDate: state.selectDate,
        activity: state.activity,
      };
    case "profileClosed":
      return {
        activity: state.activity,
        filterModal: state.filterModal,
        hotelViewer: state.hotelViewer,
        profile: {
          status: action.action.setStatus,
          mode: action.action.setMode,
        },
        selectDate: state.selectDate,
        sidebar: state.sidebar,
      };
    case "selectDateClosed":
      return {
        activity: state.activity,
        filterModal: state.filterModal,
        hotelViewer: state.hotelViewer,
        profile: state.profile,
        selectDate: "isClosed",
        sidebar: state.sidebar,
      };
    case "selectDateOpen":
      return {
        activity: state.activity,
        filterModal: state.filterModal,
        hotelViewer: state.hotelViewer,
        profile: { status: "isClosed", mode: "inactive" },
        selectDate: "isOpen",
        sidebar: state.sidebar,
      };
    case "sidebarOpen":
      return {
        activity: state.activity,
        filterModal: state.filterModal,
        hotelViewer: state.hotelViewer,
        profile: { status: "isClosed", mode: "inactive" },
        selectDate: state.selectDate,
        sidebar: "isOpen",
      };
    case "sidebarClosed":
      return {
        activity: state.activity,
        filterModal: state.filterModal,
        hotelViewer: state.hotelViewer,
        profile: state.profile,
        selectDate: state.selectDate,
        sidebar: "isClosed",
      };
    default:
      return {
        activity: "isClosed",
        filterModal: "isClosed",
        hotelViewer: state.hotelViewer,
        profile: { status: "isClosed", mode: "inactive" },
        selectDate: state.selectDate,
        sidebar: "isClosed",
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
      activity: "isClosed",
      filterModal: "isClosed",
      hotelViewer: {
        status: "isClosed",
        data: { coordinates: [[0, 0]], name: null, price: "-1" },
      },
      profile: { status: "isClosed", mode: "inactive" },
      selectDate: "isClosed",
      sidebar: "isClosed",
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
          overflow: children.title === "Messages" ? "hidden" : undefined,
        }}
      >
        {newChildren}
      </Flex>
      {/* START - ROUTE BASED MODALS */}
      {viewHotelModalViewController === "isOpen" ? (
        <HotelViewModal
          layoutModalState={modalOverlayState}
          layoutModalDispatch={modalOverlayDispatch}
          viewState="isOpen"
        />
      ) : null}
      {/* END - ROUTE BASED MODALS */}

      {modalOverlayState.activity === "isOpen" ? (
        <ActivityModal
          modalState={modalOverlayState.activity}
          modalDispatch={modalOverlayDispatch}
          userInfo={users[0]}
        />
      ) : null}

      {modalOverlayState.filterModal === "isOpen" ? (
        <FilterModal
          viewState={modalOverlayState}
          modalDispatch={modalOverlayDispatch}
        />
      ) : null}

      {modalOverlayState.hotelViewer.status === "isOpen" ? (
        <HotelViewModal
          layoutModalState={modalOverlayState}
          layoutModalDispatch={modalOverlayDispatch}
          viewState="isOpen"
        />
      ) : null}
      {modalOverlayState.profile.status === "isOpen" ? (
        <ProfileModal
          modalState={modalOverlayState.profile}
          modalDispatch={modalOverlayDispatch}
          userInfo={users[0]}
        />
      ) : null}
      {modalOverlayState.selectDate === "isOpen" ? (
        <SelectDateModal
          modalState={modalOverlayState.selectDate}
          modalDispatch={modalOverlayDispatch}
          userInfo={users[0]}
        />
      ) : null}
      {modalOverlayState.sidebar === "isOpen" ? (
        <SidelistModal
          modalState={modalOverlayState.sidebar}
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
