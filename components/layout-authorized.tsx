import React, { ReactElement } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const FilterModal = dynamic(() => import("./filter-modal"));
const HotelViewModal = dynamic(() => import("./hotel-view-modal"));
const MapViewModal = dynamic(() => import("./map-view-modal"));

import { Flex } from "./primitives/styled-rebass";
import { useRouter } from "next/router";

const AuthorizedLayout = ({ children, title }: any) => {
  const { children: subChildren } = children;

  const router = useRouter();
  const filterModalViewController =
    router.query && router.query.filterModal ? "isOpen" : "isClosed";

  const viewHotelModalViewController =
    router.query && router.query.viewHotelModal ? "isOpen" : "isClosed";

  const mapViewModalViewController =
    router.query && router.query.mapViewModal ? "isOpen" : "isClosed";

  return (
    <>
      <Head>
        <title>{children && children.title ? children.title : title}</title>
      </Head>
      <Flex m={[0]} minHeight="100vh" flexDirection="column" width={1}>
        {subChildren}
      </Flex>
      {filterModalViewController === "isOpen" ? (
        <FilterModal viewState={filterModalViewController} />
      ) : null}
      {viewHotelModalViewController === "isOpen" ? (
        <HotelViewModal viewState={"isOpen"} />
      ) : null}
      {mapViewModalViewController === "isOpen" ? (
        <MapViewModal viewState={"isOpen"} />
      ) : null}
    </>
  );
};

type Page = ReactElement;

export const getLayout = (page: Page) => {
  return <AuthorizedLayout>{page}</AuthorizedLayout>;
};

export default AuthorizedLayout;
