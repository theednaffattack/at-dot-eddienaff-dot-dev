import React from "react";
import { NextPage, NextPageContext } from "next";

import { getLayout } from "../components/layout-authorized";
import { NextPageStaticVariableProps } from "../typings/types";
import { withApollo } from "../lib/with-apollo_v2";
import { ClonedChildrenFromAuthLayout } from "../pages/traveling";
import { BookingsPageComponent } from "../components/bookings-page-component";

interface BookingsPageProps
  extends NextPageContext,
    ClonedChildrenFromAuthLayout {}

const Bookings: NextPage<BookingsPageProps, {}> &
  NextPageStaticVariableProps = ({
  modalOverlayDispatch,
  modalOverlayState,
}) => {
  return (
    <BookingsPageComponent
      modalOverlayDispatch={modalOverlayDispatch}
      modalOverlayState={modalOverlayState}
    />
  );
};

Bookings.displayName = `BookingsPage`;

Bookings.getInitialProps = async ({ query, pathname }) => {
  return {
    query,
    pathname,
  };
};

Bookings.getLayout = getLayout;

Bookings.title = "Bookings";

export default withApollo()(Bookings);
