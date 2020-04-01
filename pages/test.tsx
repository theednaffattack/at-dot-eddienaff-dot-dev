import React from "react";

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
    <div style={{ border: "1px rebeccapurple solid" }}>
      Quick route diagnosis (getInitialProps):
      <p>path: </p>
      <pre>{JSON.stringify(pathname)}</pre>
      <p>query: </p>
      <pre>{JSON.stringify(query)}</pre>
      <p>Other props</p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
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
