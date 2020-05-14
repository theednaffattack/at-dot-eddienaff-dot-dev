import React from "react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";

import { AbFlex, Button } from "./primitives/styled-rebass";
import { MeQuery } from "../lib/queries/me.graphql";
import { ModalStateInterface } from "./entry-layout";
import { RegisterGuts } from "./register-guts";
import { useRouter } from "next/router";

interface RegisterModalProps {
  userInfo?: MeQuery["me"] | undefined;
  teamId?: string;
  modalState: ModalStateInterface;
}

const RegisterModal: React.FunctionComponent<RegisterModalProps> = ({
  modalState,
}) => {
  const router = useRouter();
  return (
    <>
      {modalState.registerModal === "isOpen" ? (
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
            {/* <LoginGuts modalDispatch={modalDispatch} modalState={modalState} /> */}
            <RegisterGuts />
          </AbFlex>
        </UniversalPortal>
      ) : (
        ""
      )}
    </>
  );
};

export default RegisterModal;
