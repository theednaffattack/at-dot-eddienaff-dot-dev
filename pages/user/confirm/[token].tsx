import React from "react";
import { NextPage } from "next";

import { getLayout } from "../../../components/layout.v2";
import withApollo from "../../../lib/with-apollo";
import redirect from "../../../utils/redirect";
import {
  ConfirmUserDocument,
  ConfirmUserMutation,
  ConfirmUserMutationVariables
} from "../../../lib/mutations/confirm-user.graphql";
import { NextPageContextApollo } from "../../../typings/types";
import { FetchResult } from "apollo-link";

interface Context extends NextPageContextApollo {
  // token: string;
}

// These are NextJS page typings when NOT returning from
// .getInitialProps  and with static methods
// type TConfirmPage<Props> = NextPage<Props, {}> & {
//   title: string;
//   displayName: string;
//   getLayout: (page: any) => JSX.Element;
// };

const Confirm: NextPage<{ token: string }, {}> & {
  title: string;
  displayName: string;
  getLayout: (page: any) => JSX.Element;
} = ({ token }) => {
  return (
    <div>
      Instantly deploy your Next.js site to a public URL with ZEIT Now.
      <p>{token}</p>
    </div>
  );
};

Confirm.getInitialProps = async (ctx: Context) => {
  const { apolloClient, query } = ctx;
  const { token: tokenBase } = query;
  const token = typeof tokenBase === "string" ? tokenBase : tokenBase[0];

  let validateToken: void | FetchResult<
    ConfirmUserMutation,
    Record<string, any>,
    Record<string, any>
  >;

  if (apolloClient) {
    console.log("ATTEMPTING TO VALIDATE", {
      token,
      ConfirmUserDocument
    });
    validateToken = await apolloClient
      .mutate<ConfirmUserMutation, ConfirmUserMutationVariables>({
        mutation: ConfirmUserDocument,
        variables: {
          token
        }
      })
      .then(data => {
        console.log("CAN I SEE CONFIRM USER SUBMISSION DATA¿", { data });
        return data;
      })
      .catch(error => {
        console.error(error);
      });
  }
  if (
    validateToken &&
    validateToken.data &&
    validateToken.data.confirmUser === true &&
    ctx
  ) {
    console.log("FOUND A VALID TOKEN!", validateToken);
    redirect(ctx, "/test", {
      asPath: "/test"
    });
  } else {
    throw Error("soemthing went wrong, confirmation mutation");
  }

  return {};

  // return {
  //   pathname,
  //   query,
  //   token
  // };
};

Confirm.displayName = `${Confirm.title}Page`;

Confirm.getLayout = getLayout;

Confirm.title = "Confirm";

export default withApollo(Confirm);
