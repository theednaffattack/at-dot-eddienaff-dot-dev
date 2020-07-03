import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";

import { getLayout } from "../components/entry-layout";
import { withApollo } from "../lib/with-apollo_v2";
import { NextPageStaticVariableProps } from "../typings/types";
import {
  Button,
  Flex,
  Image,
  Text,
  Box,
} from "../components/primitives/styled-rebass";
import { BackgroundSetter } from "../components/background-setter";
import { Logo } from "../components/logo";

interface IndexProps {}

const Index: NextPage<IndexProps, {}> & NextPageStaticVariableProps = ({}) => {
  const router = useRouter();
  const buttonWidths = [
    4 / 5,
    4 / 5,
    4 / 5,
    "320px",
    "320px",
    "320px",
    "320px",
  ];
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
        <Box height="70px" width="70px">
          <Logo />
        </Box>
        <Box my={3} color="#fff">
          <Text fontSize={5} fontWeight={600} letterSpacing={15}>
            ATLAS
          </Text>
        </Box>
        <Box>
          <Image src="https://eddie-atlas-travel.s3-us-west-2.amazonaws.com/images/blissful_travel.png" />
        </Box>
        <Box mt={3} mb={6} borderBottom="6px solid #fff" width="45px"></Box>
        <Flex
          width={1}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{ position: "relative" }}
        >
          <Button
            onClick={() => router.push("/login", "/login")}
            width={buttonWidths}
            height="47px"
            borderRadius={23}
            sx={{
              backgroundColor: "rgb(238, 238, 238)",
              boxShadow: "0px 13px 27px 0px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Text color="#e9486d" fontFamily="main">
              Login
            </Text>
          </Button>
          <Flex
            width={[4 / 5, "250px", "250px", "250px"]}
            my={3}
            flexDirection="row"
            alignItems="center"
          >
            <Flex
              width={2 / 5}
              flexDirection="row"
              border="1px solid rgba(255,255,255,0.25)"
            ></Flex>
            <Flex
              width={1 / 5}
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              color="#fff"
            >
              <Text textAlign="center" fontSize={1} letterSpacing={1.8}>
                OR
              </Text>
            </Flex>

            <Flex
              width={2 / 5}
              flexDirection="row"
              border="1px solid rgba(255,255,255,0.25)"
            ></Flex>
          </Flex>
          <Button
            onClick={() => {
              router.push("/register", "/register");
            }}
            width={buttonWidths}
            height="47px"
            borderRadius={23}
            sx={{
              backgroundColor: "transparent",
              border: "2px solid rgba(255,255,255,0.5)",
            }}
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
