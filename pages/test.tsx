import React from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";

import { getLayout } from "../components/layout-authorized";
import { NextContext } from "../typings/types";
import { withApollo } from "../lib/with-apollo_v2";
import { Flex } from "../components/primitives/styled-rebass";

interface PageProps extends NextContext {}

interface TestPageProps {
  ({ pathname, query }: PageProps): JSX.Element;

  getInitialProps: ({
    pathname,
    query,
  }: NextContext) => Promise<{
    pathname: NextContext["pathname"];
    query: NextContext["query"];
  }>;

  getLayout: (page: any) => JSX.Element;

  title: string;
  displayName?: string;
}

interface DisplayPagePropInformationProps {
  pathname: NextContext["pathname"];
  query: NextContext["query"];
}

const DisplayPagePropInformation: React.FC<DisplayPagePropInformationProps> = ({
  pathname,
  query,
  ...props
}) => {
  return (
    <React.Fragment>
      <NextSeo
        title="Test"
        description="A test page, nothing more."
        canonical="https://at.eddienaff.dev/"
        openGraph={{
          url: "https://at.eddienaff.dev/test",
          title: "Test",
          description: "A beautiful test page.",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
          site_name: "SiteName",
        }}
      />
      <Flex flexDirection="column" width={1} border="purp">
        Quick route diagnosis (getInitialProps):
        <p>path: </p>
        <pre>{JSON.stringify(pathname)}</pre>
        <p>query: </p>
        <pre>{JSON.stringify(query)}</pre>
        <p>Other props</p>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Flex>
      <Link href="/test?filterModal=isOpen&referer=/test" as="/test">
        <a>open filter modal</a>
      </Link>
      <Link href="/test?viewHotelModal=isOpen&referer=/test" as="/test">
        <a>open hotel view modal</a>
      </Link>
    </React.Fragment>
  );
};

const Test: TestPageProps = ({ pathname, query }) => {
  return <DisplayPagePropInformation pathname={pathname} query={query} />;
};

Test.displayName = `TestPage`;

Test.getInitialProps = async ({ query, pathname }) => {
  return {
    query,
    pathname,
    hello: "hello",
  };
};

Test.getLayout = getLayout;

Test.title = "Test";

export default withApollo()(Test);
