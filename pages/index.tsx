import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

import { getLayout } from "../components/entry-layout";
import { withApollo } from "../lib/with-apollo_v2";
import { NextPageStaticVariableProps } from "../typings/types";
import { Button, Flex, Text } from "../components/primitives/styled-rebass";
import { BackgroundSetter } from "../components/background-setter";

interface IndexProps {}

const Index: NextPage<IndexProps, {}> & NextPageStaticVariableProps = ({}) => {
  const router = useRouter();
  return (
    <BackgroundSetter
      bgImage="url(https://eddie-atlas-travel.s3-us-west-2.amazonaws.com/images/splash-bg-transparency.png)"
      opacity={1}
    >
      <Flex
        flex={1}
        width={1}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ position: "relative" }}
      >
        <Flex
          flex={1}
          width={1}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{ position: "relative" }}
        >
          <Link href="/login" as="/login">
            <a>Login</a>
          </Link>
          <Button
            onClick={() => router.push("/?loginModal=isOpen", "/login")}
            width={[4 / 5, "250px", "250px", "250px"]}
            borderRadius={20}
          >
            <Text>Login</Text>
          </Button>
          <Flex
            width={[4 / 5, "250px", "250px", "250px"]}
            my={3}
            flexDirection="row"
            alignItems="center"
          >
            <Flex width={2 / 5} flexDirection="row" border="primary"></Flex>
            <Flex
              width={1 / 5}
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
            >
              <Text>OR</Text>
            </Flex>

            <Flex width={2 / 5} flexDirection="row" border="primary"></Flex>
          </Flex>
          <Button
            onClick={() => {
              router.push("/register", "/register");
            }}
            width={[4 / 5, "250px", "250px", "250px"]}
            borderRadius={20}
          >
            <Text>Create an account</Text>
          </Button>
        </Flex>
      </Flex>
    </BackgroundSetter>
  );
};

Index.getInitialProps = ({ pathname, query }: NextPageContext) => {
  return { pathname, query };
};

Index.getLayout = getLayout;

Index.displayName = "Index_page";

Index.title = "Home page";

export default withApollo()(Index);
