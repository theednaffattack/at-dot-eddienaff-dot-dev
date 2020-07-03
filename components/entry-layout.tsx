import React, { ReactElement } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const LoginModal = dynamic(() => import("./login-modal"));
const RegisterModal = dynamic(() => import("./register-modal"));

import { Flex } from "./primitives/styled-rebass";
import { useRouter } from "next/router";

export const breakWidths = [1, 1, 1, "960px"];

export type ModalViewStates = "isOpen" | "isClosed";

export type ModalViewActions =
  | "openLoginModal"
  | "closeLoginModal"
  | "openProfileModal"
  | "closeProfileModal"
  | "openRegisterModal"
  | "closeRegisterModal"
  | "reset";

export interface ModalStateInterface {
  loginModal: ModalViewStates;
  profileModal: ModalViewStates;
  registerModal: ModalViewStates;
  confirmationModal: ModalViewStates;
}

const initialModalState: ModalStateInterface = {
  confirmationModal: "isClosed",
  loginModal: "isClosed",
  registerModal: "isClosed",
  profileModal: "isClosed",
};

function modalReducer(
  state: ModalStateInterface,
  action: ModalViewActions
): ModalStateInterface {
  switch (action) {
    case "openLoginModal":
      return {
        loginModal: "isOpen",
        confirmationModal: state.confirmationModal,
        profileModal: state.profileModal,
        registerModal: state.registerModal,
      };
    case "closeLoginModal":
      return {
        loginModal: "isClosed",
        confirmationModal: state.confirmationModal,
        profileModal: state.profileModal,
        registerModal: state.registerModal,
      };
    case "openRegisterModal":
      return {
        confirmationModal: state.confirmationModal,
        loginModal: state.loginModal,
        profileModal: state.profileModal,
        registerModal: "isOpen",
      };
    case "closeRegisterModal":
      return {
        confirmationModal: state.confirmationModal,
        loginModal: state.loginModal,
        profileModal: state.profileModal,
        registerModal: "isClosed",
      };
    case "reset":
      return initModal(initialModalState);
    default:
      return initModal(initialModalState);
  }
}

function initModal(initialModalState: ModalStateInterface) {
  return initialModalState;
}

const Layout = ({ children, title }: any) => {
  // const [profileModalState, setProfileModalState] = React.useState<
  //   "isOpen" | "isClosed"
  // >("isClosed");

  const [modalState, modalDispatch] = React.useReducer(
    modalReducer,
    initialModalState
    // initModal
  );

  const { children: subChildren } = children;
  let newChildren;
  if (!subChildren) {
    newChildren = React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        // setProfileModalState: setProfileModalState,
        // profileModalState,
        modalDispatch,
        modalState,
      });
    });
  } else {
    newChildren = React.Children.map(subChildren, (child) => {
      return React.cloneElement(child, {
        // setProfileModalState: setProfileModalState,
        // profileModalState,
        modalDispatch,
        modalState,
      });
    });
  }

  const router = useRouter();
  // console.log("WHAT IS ROUTER? :: LAYOUT", router);
  return (
    <>
      <Head>
        <title>{children && children.title ? children.title : title}</title>
      </Head>
      <Flex
        m={[0]}
        minHeight="100%"
        flexDirection="column"
        width={1}
        sx={{ position: "relative" }}
      >
        {newChildren}
      </Flex>

      <LoginModal
        modalDispatch={modalDispatch}
        modalState={{
          confirmationModal: "isClosed",
          loginModal:
            router.query &&
            router.query.loginModal &&
            router.query.loginModal === "isOpen"
              ? "isOpen"
              : "isClosed",
          profileModal: "isClosed",
          registerModal: "isClosed",
        }}
      />
      <RegisterModal
        modalState={{
          confirmationModal: "isClosed",
          registerModal:
            router.query &&
            router.query.registerModal &&
            router.query.registerModal === "isOpen"
              ? "isOpen"
              : "isClosed",
          loginModal: "isClosed",
          profileModal: "isClosed",
        }}
      />
      {/* <ProfileModal
        modalDispatch={modalDispatch}
        modalState={modalState}
        profileModalState={profileModalState}
        setProfileModalState={setProfileModalState}
      /> */}
    </>
  );
};

type Page = ReactElement;

export const getLayout = (page: Page) => {
  return <Layout>{page}</Layout>;
};

export default Layout;
