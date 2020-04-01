import React from "react";
import { NextPage, NextPageContext } from "next";
import styled from "styled-components";
import { ApolloError } from "apollo-client";

import { NextPageStaticVariableProps } from "../../typings/types";
import { getLayout } from "../../components/layout.v2";
import { Text } from "../../components/primitives/styled-rebass";
import withApollo from "../../lib/with-apollo";
import { useMeQuery, MeQuery } from "../../lib/queries/me.graphql";

import ChangePassword from "../../components/profile/change-password";

interface ProfileProps extends Partial<NextPageContext> {}

const Profile: NextPage<ProfileProps> & NextPageStaticVariableProps = () => {
  const { data, error, loading } = useMeQuery();

  return (
    <div>
      {data && data.me && data.me.profileImageUri ? (
        <img
          src={data.me.profileImageUri}
          alt="Avatar"
          style={{
            maxWidth: "200px",
            borderRadius: "0.5rem"
          }}
        />
      ) : null}

      <RenderH1 data={data} error={error} loading={loading} renderKey="name" />

      <RenderText
        data={data}
        error={error}
        loading={loading}
        renderKey="email"
      />

      <RenderText data={data} error={error} loading={loading} renderKey="id" />
      <ChangePassword />
    </div>
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

interface RenderH1Props {
  data: MeQuery | undefined;
  error: ApolloError | undefined;
  loading: boolean;
  renderKey:
    | "name"
    | "email"
    | "id"
    | "firstName"
    | "lastName"
    | "profileImageUri";
}

const RenderH1: React.FC<RenderH1Props> = ({
  data,
  error,
  loading,
  renderKey
}) => {
  const StyledH1 = styled["h1"]``;
  if (error) {
    return <StyledH1>Error!</StyledH1>;
  }
  return (
    <StyledH1>{loading ? <LoadingSpan /> : data?.me?.[renderKey]}</StyledH1>
  );
};

interface RenderTextProps {
  data: MeQuery | undefined;
  error: ApolloError | undefined;
  loading: boolean;
  renderKey:
    | "name"
    | "email"
    | "id"
    | "firstName"
    | "lastName"
    | "profileImageUri";
}

const RenderText: React.FC<RenderTextProps> = ({
  data,
  error,
  loading,
  renderKey
}) => {
  if (error) {
    return <Text>Error!</Text>;
  }
  return (
    <Text mb={2}>{loading ? <LoadingSpan /> : data?.me?.[renderKey]}</Text>
  );
};

const LoadingSpan = styled.span`
  &&:empty {
    background-image: linear-gradient(#ccc, #ccc);
    background-size: 190px, 20px;
    background-repeat: no-repeat;
  }
`;

// const LoadingSvg = () => (
//   <svg
//     width="100%"
//     height="100%"
//     viewBox="0 0 300 70"
//     xmlns="http://www.w3.org/2000/svg"
//     xmlnsXlink="http://www.w3.org/1999/xlink"
//     xmlSpace="preserve"
//     style={{
//       fillRule: "evenodd",
//       clipRule: "evenodd",
//       strokeLinejoin: "round"
//       // strokeMiterlimit: "1.41421"
//     }}
//   >
//     <defs>
//       <mask id="mask-element">
//         <path
//           fill="#777"
//           d="M283,18.75c0,-0.69 -0.56,-1.25 -1.25,-1.25l-183.5,0c-0.69,0 -1.25,0.56 -1.25,1.25l0,2.5c0,0.69 0.56,1.25 1.25,1.25l183.5,0c0.69,0 1.25,-0.56 1.25,-1.25l0,-2.5Z"
//         />

//         <path
//           fill="#777"
//           d="M283,28.75c0,-0.69 -0.56,-1.25 -1.25,-1.25l-183.5,0c-0.69,0 -1.25,0.56 -1.25,1.25l0,2.5c0,0.69 0.56,1.25 1.25,1.25l183.5,0c0.69,0 1.25,-0.56 1.25,-1.25l0,-2.5Z"
//         />

//         <path
//           fill="#777"
//           d="M254,38.75c0,-0.69 -0.56,-1.25 -1.25,-1.25l-154.5,0c-0.69,0 -1.25,0.56 -1.25,1.25l0,2.5c0,0.69 0.56,1.25 1.25,1.25l154.5,0c0.69,0 1.25,-0.56 1.25,-1.25l0,-2.5Z"
//         />

//         <path
//           fill="#777"
//           d="M281.75,48.75c0,-0.69 -0.56,-1.25 -1.25,-1.25l-182.25,0c-0.69,0 -1.25,0.56 -1.25,1.25l0,2.5c0,0.69 0.56,1.25 1.25,1.25l182.25,0c0.69,0 1.25,-0.56 1.25,-1.25l0,-2.5Z"
//         />

//         <path
//           id="qube"
//           fill="#777"
//           d="M92,20.87c0,-1.86 -1.51,-3.37 -3.37,-3.37l-28.26,0c-1.86,0 -3.37,1.51 -3.37,3.37l0,28.26c0,1.86 1.51,3.37 3.37,3.37l28.26,0c1.86,0 3.37,-1.51 3.37,-3.37l0,-28.26Z"
//         />

//         <path
//           fill="hsla(200,0%,10%,.6)"
//           id="mask"
//           d="M52,17.5l0,35l-40,0l20,-35l20,0Z"
//         />
//       </mask>
//     </defs>

//     <path
//       mask="url(#mask-element)"
//       d="M283,18.75c0,-0.69 -0.56,-1.25 -1.25,-1.25l-183.5,0c-0.69,0 -1.25,0.56 -1.25,1.25l0,2.5c0,0.69 0.56,1.25 1.25,1.25l183.5,0c0.69,0 1.25,-0.56 1.25,-1.25l0,-2.5Z"
//       fill="#dadada"
//     />

//     {/* <path mask="url(#mask-element)" d="M283,28.75c0,-0.69 -0.56,-1.25 -1.25,-1.25l-183.5,0c-0.69,0 -1.25,0.56 -1.25,1.25l0,2.5c0,0.69 0.56,1.25 1.25,1.25l183.5,0c0.69,0 1.25,-0.56 1.25,-1.25l0,-2.5Z" fill="#dadada"/>

// 	<path mask="url(#mask-element)" d="M254,38.75c0,-0.69 -0.56,-1.25 -1.25,-1.25l-154.5,0c-0.69,0 -1.25,0.56 -1.25,1.25l0,2.5c0,0.69 0.56,1.25 1.25,1.25l154.5,0c0.69,0 1.25,-0.56 1.25,-1.25l0,-2.5Z" fill="#dadada"/>

// 	<path mask="url(#mask-element)" d="M281.75,48.75c0,-0.69 -0.56,-1.25 -1.25,-1.25l-182.25,0c-0.69,0 -1.25,0.56 -1.25,1.25l0,2.5c0,0.69 0.56,1.25 1.25,1.25l182.25,0c0.69,0 1.25,-0.56 1.25,-1.25l0,-2.5Z" fill="#dadada"/>

// 	<path mask="url(#mask-element)" id="qube" d="M92,20.87c0,-1.86 -1.51,-3.37 -3.37,-3.37l-28.26,0c-1.86,0 -3.37,1.51 -3.37,3.37l0,28.26c0,1.86 1.51,3.37 3.37,3.37l28.26,0c1.86,0 3.37,-1.51 3.37,-3.37l0,-28.26Z" fill="#dadada"/> */}
//   </svg>
// );
