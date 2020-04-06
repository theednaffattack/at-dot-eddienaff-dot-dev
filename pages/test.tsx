import React from "react";
import { NextSeo } from "next-seo";

import { getLayout } from "../components/layout.v2";
import { NextContext } from "../typings/types";

interface PageProps extends NextContext {}

interface TestPageProps {
  ({ pathname, query }: PageProps): JSX.Element;

  getInitialProps: ({
    pathname,
    query
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
              alt: "Og Image Alt"
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second"
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" }
          ],
          site_name: "SiteName"
        }}
      />
      <div style={{ border: "1px rebeccapurple solid" }}>
        Quick route diagnosis (getInitialProps):
        <p>path: </p>
        <pre>{JSON.stringify(pathname)}</pre>
        <p>query: </p>
        <pre>{JSON.stringify(query)}</pre>
        <p>Other props</p>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
    </React.Fragment>
  );
};

const Test: TestPageProps = ({ pathname, query }) => {
  return <DisplayPagePropInformation pathname={pathname} query={query} />;
};

Test.displayName = `TestPage`;

Test.getInitialProps = async ({ query, pathname }) => {
  console.log("is initial props running?");
  return {
    query,
    pathname,
    hello: "hello"
  };
};

Test.getLayout = getLayout;

Test.title = "Test";

export default Test;
