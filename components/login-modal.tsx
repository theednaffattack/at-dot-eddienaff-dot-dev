import React from "react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";

import { AbFlex, Button } from "./primitives/styled-rebass";
import { MeQuery } from "../lib/queries/me.graphql";
import { LoginGuts } from "../pages/login";
import { ModalViewActions, ModalStateInterface } from "./entry-layout";
import { useRouter } from "next/router";

interface LoginModalProps {
  userInfo?: MeQuery["me"] | undefined;
  teamId?: string;

  modalDispatch: React.Dispatch<ModalViewActions>;
  modalState: ModalStateInterface;
}

const LoginModal: React.FunctionComponent<LoginModalProps> = ({
  modalDispatch,
  modalState,
  // userInfo,
}) => {
  const router = useRouter();

  return (
    <>
      {modalState.loginModal === "isOpen" ? (
        <UniversalPortal selector="#modal">
          <AbFlex
            position="fixed"
            flexDirection="column"
            bg="rgba(0, 0, 0, 0.7)"
            width={1}
            top={0}
            left={0}
            right={0}
            bottom={0}
            border="lime"
          >
            <Button onClick={() => router.push("/")}>Close Modal</Button>
            <LoginGuts modalDispatch={modalDispatch} modalState={modalState} />
          </AbFlex>
        </UniversalPortal>
      ) : (
        ""
      )}
    </>
  );
};

export default LoginModal;
