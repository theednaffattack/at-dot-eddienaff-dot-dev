import React from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";

import { getLayout } from "../components/layout-authorized";
import { NextContext } from "../typings/types";
import { withApollo } from "../lib/with-apollo_v2";
import { Flex } from "../components/primitives/styled-rebass";
// import { HotelSimpleViewCarousel } from "../components/hotel-view-rename-carousel";
// import {
//   FakeSlide,
//   HotelViewHooksCarousel,
// } from "../components/hotel-view-hooks-carousel";
import {
  CarouselContainer,
  CarouselChild,
} from "../components/example-florian-rappl-carousel-too";
import styled from "styled-components";

interface PageProps extends NextContext {}

// const slides: FakeSlide[] = [
//   {
//     title: "numero uno",
//     message: "yep the first one",
//     id: "1-blerg",
//   },
//   {
//     title: "the second",
//     message: "and another one",
//     id: "2-fang",
//   },
//   {
//     title: "a third post of sublime purity",
//     message: "once again it's the incredible",
//     id: "3-burp",
//   },
// ];

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

const Slide = styled.div<{ bgImage?: string }>`
  height: 500px;
  max-height: 70vh;
  background-color: black;
  background-image: ${({ bgImage }) => (bgImage ? bgImage : null)};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: 2px limegreen solid;
`;

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
        {/* <HotelViewHooksCarousel slides={slides} interval={3000} /> */}
      </Flex>
      <Link href="/test?filterModal=isOpen&referer=/test" as="/test">
        <a>open filter modal</a>
      </Link>
      <Link href="/test?viewHotelModal=isOpen&referer=/test" as="/test">
        <a>open hotel view modal</a>
      </Link>
      {/* <HotelSimpleViewCarousel /> */}
      <CarouselContainer>
        <CarouselChild>
          ONE
          {/* <Slide bgImage="url(https://via.placeholder.com/900x150/0000FF/808080?Text=First" /> */}
        </CarouselChild>
        <CarouselChild>
          TWO
          <img src="https://via.placeholder.com/900x150/0000FF/808080?Text=Second" />
          <Slide bgImage="url(https://via.placeholder.com/900x150/0000FF/808080?Text=Second" />
        </CarouselChild>
        <CarouselChild>
          <Slide bgImage="url(https://via.placeholder.com/900x150/0000FF/808080?Text=Third" />
        </CarouselChild>
      </CarouselContainer>
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
