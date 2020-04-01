import React from "react";
import { NextPage, NextPageContext } from "next";

import { NextPageStaticVariableProps } from "../typings/types";
import { getLayout } from "../components/layout.v2";
import withApollo from "../lib/with-apollo";

interface ProfileProps extends Partial<NextPageContext> {}

const Profile: NextPage<ProfileProps> & NextPageStaticVariableProps = () => {
  return (
    <>
      {/* <img src={avatarUrl} alt="Avatar" /> */}
      <h1>Fake Name</h1>

      <p>Fake bio</p>

      <style jsx>{`
        img {
          max-width: 200px;
          border-radius: 0.5rem;
        }
        h1 {
          margin-bottom: 0;
        }
        .lead {
          margin-top: 0;
          font-size: 1.5rem;
          font-weight: 300;
          color: #666;
        }
        p {
          color: #6a737d;
        }
      `}</style>
    </>
  );
};

Profile.getInitialProps = async ({ query, pathname }: NextPageContext) => {
  return {
    query,
    pathname
  };
};

Profile.displayName = "ProfilePage";

Profile.getLayout = getLayout;

Profile.title = "Profile";

export default withApollo(Profile);
