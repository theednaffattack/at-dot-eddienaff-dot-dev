import React, { ReactElement } from "react";
import Head from "next/head";

import { Flex } from "./primitives/styled-rebass";
import Header from "./header";
// import { TApolloClient } from "../lib/with-apollo_v2";

// interface LayoutProps {
//   title?: string;
//   apolloClient?: TApolloClient;
// }

export const breakWidths = [1, 1, 1, "960px"];

const Layout = ({ children, title }: any) => {
  const { children: subChildren } = children;
  console.log("BEING CALLED?");
  return (
    <>
      <Head>
        <title>{children && children.title ? children.title : title}</title>
      </Head>
      <Flex m={[0]} minHeight="100vh" flexDirection="column" width={1}>
        <Flex justifyContent="center" alignItems="center">
          <Header />
        </Flex>
        <Flex width={1} flexDirection="column" alignItems="center">
          {subChildren ? subChildren : children}
        </Flex>
      </Flex>
    </>
  );
};

type Page = ReactElement;

// type Page = JSX.Element;

export const getLayout = (page: Page) => {
  return <Layout>{page}</Layout>;
};

export default Layout;
