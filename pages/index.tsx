import { NextPage, NextPageContext } from "next";

import { getLayout } from "../components/layout.v2";
import withApollo from "../lib/with-apollo";
import { NextPageStaticVariableProps } from "../typings/types";
import { useHelloWorldQuery } from "../lib/queries/hello.graphql";

interface IndexProps extends Partial<NextPageContext> {}

const Index: NextPage<IndexProps> & NextPageStaticVariableProps = ({
  query,
  req
}) => {
  const { data } = useHelloWorldQuery();
  console.log("PROPS", { query, req, reqKeys: Object.keys(req ? req : {}) });
  if (data) {
    const { helloWorld } = data;
    return (
      <>
        It's time to say it!!!
        {helloWorld}
      </>
    );
  }
  console.log("HEY WHAT'S GOING ON?", { data });
  return <div>... View: {JSON.stringify(data)}</div>;
};

Index.getInitialProps = ({ pathname, query }) => {
  return { pathname, query };
};

Index.getLayout = getLayout;

Index.displayName = "Index_page";

Index.title = "Home page";

export default withApollo(Index);
