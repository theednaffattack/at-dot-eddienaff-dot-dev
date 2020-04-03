import { NextPage, NextPageContext } from "next";

import { getLayout } from "../components/layout.v2";
import { withApollo } from "../lib/with-apollo_v2";
import { NextPageStaticVariableProps } from "../typings/types";
import { useHelloWorldQuery } from "../lib/queries/hello.graphql";

interface IndexProps extends Partial<NextPageContext> {}

const Index: NextPage<IndexProps> & NextPageStaticVariableProps = (
  {
    // pathname,
    // query
  }
) => {
  const { data, error, loading } = useHelloWorldQuery();
  if (data) {
    const { helloWorld } = data;
    return (
      <div>
        It's time to say it!!!
        {helloWorld}
      </div>
    );
  }

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Error {JSON.stringify(error, null, 2)}</div>;
  }

  return <div>IMPOSSIBLE STATE?</div>;
};

Index.getInitialProps = ({ pathname, query }) => {
  return { pathname, query };
};

Index.getLayout = getLayout;

Index.displayName = "Index_page";

Index.title = "Home page";

export default withApollo()(Index);
