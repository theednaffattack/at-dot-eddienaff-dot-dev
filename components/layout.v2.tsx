import React, { ReactElement } from "react";
import Head from "next/head";

import { Flex } from "./primitives/styled-rebass";
import Header from "./header";
import { TApolloClient } from "../lib/with-apollo";

interface LayoutProps {
  title?: string;
  apolloClient?: TApolloClient;
}

export const breakWidths = [1, 1, 1, "960px"];

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  title = "This is the default title"
}) => {
  return (
    <Flex m={[0]} minHeight="100vh" flexDirection="column" width={1}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Flex justifyContent="center" alignItems="center">
        <Header />
      </Flex>
      <Flex width={1} flexDirection="column" alignItems="center">
        {children}
      </Flex>
    </Flex>
  );
};

type Page = ReactElement;

export const getLayout = (page: Page) => {
  return <Layout title={page.props.title}>{page}</Layout>;
};

export default Layout;
