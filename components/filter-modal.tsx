import React from "react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";
import { useRouter } from "next/router";
import Head from "next/head";

import {
  AbFlex,
  Card,
  Flex,
  Text,
  CustomButton,
} from "./primitives/styled-rebass";
import { MeQuery } from "../lib/queries/me.graphql";
import { Formik, Field, Form } from "formik";
import { Checkbox } from "./form-fields/rebass-forms";
import { submitFuction } from "./filter-modal-submit-function";
import { FilterTimePeriod } from "./filter-time-period";
import { FilterPriceRange } from "./filter-price-range";
import { FilterFeatures } from "./filter-features";
import { FilterDistance } from "./filter-distance";
import { FilterRoomGuests } from "./filter-room-guests";
import { useLockBodyScroll } from "./use-lock-body-scroll";
import { AuthenticatedModalHeader } from "./authenticated-modal-header";
import {
  AuthorizedLayoutModalOverlayState,
  AuthorizedLayoutModalOverlayActions,
} from "./layout-authorized";

interface FilterModalProps {
  modalDispatch: React.Dispatch<AuthorizedLayoutModalOverlayActions>;
  viewState: AuthorizedLayoutModalOverlayState;
  teamId?: string;
  userInfo?: MeQuery["me"] | undefined;
}

const cardWidths = [1, 1, 1, 1, 0.47, 0.3, 0.3];

const FilterModal: React.FunctionComponent<FilterModalProps> = ({
  // modalState,
  // teamId,
  // userInfo,
  modalDispatch,
  viewState,
}) => {
  useLockBodyScroll();
  const router = useRouter();

  // const {
  //   query: { referer: refererBase },
  // } = router;
  // const referer =
  //   typeof refererBase === "string" ? refererBase : refererBase[0];
  return (
    <>
      <Head>
        <title>Filters</title>
      </Head>
      {viewState.filterModal === "isOpen" ? (
        <UniversalPortal selector="#modal">
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={async (data, errors) =>
              submitFuction(
                data,
                errors,
                () => new Promise((resolve) => resolve(console.log("JUMANJI")))
              )
            }
            initialValues={{
              email: "",
              password: "",
              keepMeSignedIn: false,
            }}
          >
            {({ handleSubmit }) => (
              <AbFlex
                position="absolute"
                // bg="transparent"
                bg="rgba(239,239,239,0.90)" // "#eee" // "rgba(0, 0, 0, 0.7)"
                color="#444"
                flexDirection="column"
                top={0}
                width={1}
                left={0}
                right={0}
                bottom={0}
                zIndex={9}
                overflowY="auto"
              >
                <Form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    color: "#444444",
                  }}
                >
                  <AuthenticatedModalHeader
                    closeFunc={() =>
                      modalDispatch({
                        type: "filterModalClosed",
                        action: "overlayModalClosed",
                      })
                    }
                    viewState="isOpen"
                    referer={""}
                    router={router}
                    title="Filters"
                  />

                  <Flex
                    mt={4}
                    p={2}
                    width={1}
                    flexDirection="column"
                    alignItems="center"
                    style={{ position: "relative" }}
                    flex={1}
                    height="auto"
                  >
                    <Flex
                      width={6 / 7}
                      flexWrap="wrap"
                      justifyContent="space-evenly"
                    >
                      <Card
                        width={cardWidths}
                        mx={2}
                        bg="#f2f2f2"
                        sx={{
                          boxShadow: "0px 13px 13px 0px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        <Text pl={3} pt={3} fontSize={3}>
                          Time Period
                        </Text>
                        <FilterTimePeriod />
                      </Card>

                      <Flex flexDirection="column" width={cardWidths}>
                        <Card
                          m={2}
                          p={3}
                          bg="#f2f2f2"
                          sx={{
                            boxShadow: "0px 13px 13px 0px rgba(0, 0, 0, 0.25)",
                          }}
                        >
                          <FilterPriceRange />
                        </Card>
                        <Card
                          m={2}
                          p={3}
                          bg="#f2f2f2"
                          sx={{
                            boxShadow: "0px 13px 13px 0px rgba(0, 0, 0, 0.25)",
                          }}
                        >
                          <FilterFeatures />
                        </Card>
                      </Flex>
                      <Flex flexDirection="column" width={cardWidths}>
                        <Card
                          m={2}
                          p={3}
                          bg="#f2f2f2"
                          sx={{
                            boxShadow: "0px 13px 13px 0px rgba(0, 0, 0, 0.25)",
                          }}
                        >
                          <FilterRoomGuests />
                        </Card>
                        <Card
                          m={2}
                          pb={4}
                          pt={3}
                          pl={3}
                          pr={3}
                          bg="#f2f2f2"
                          sx={{
                            boxShadow: "0px 13px 13px 0px rgba(0, 0, 0, 0.25)",
                          }}
                        >
                          <Flex width={1}>
                            <FilterDistance />
                          </Flex>
                        </Card>
                      </Flex>

                      <Flex
                        pt={3}
                        width={6 / 7}
                        alignItems="center"
                        flexWrap="wrap"
                      >
                        <label>
                          <Field
                            id="termsAndStuff"
                            name="termsAndStuff"
                            type="checkbox"
                            shadow="0px 10px 27px 0px rgba(0, 0, 0, 0.1)"
                            component={Checkbox}
                          />
                        </label>
                        <Flex mr="auto">I'm going on a business trip</Flex>
                        <Flex my={3}>
                          <CustomButton
                            backgroundColor="#d23078"
                            backgroundImage="linear-gradient(
                        0deg,
                        rgba(210, 48, 120, 0.2),
                        rgba(254, 97, 97, 0.2),
                        rgba(255, 121, 85, 0.2)
                      )"
                            boxShadow="0px 10px 27px 0px rgba(0, 0, 0, 0.1)"
                            borderRadius="23px"
                            width="400px"
                            height="40px"
                            type="submit"
                            onClick={() => handleSubmit()}
                          >
                            Filter
                          </CustomButton>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Form>
              </AbFlex>
            )}
          </Formik>
        </UniversalPortal>
      ) : (
        ""
      )}
    </>
  );
};

export default FilterModal;
