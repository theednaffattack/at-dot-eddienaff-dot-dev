import { NextSeo } from "next-seo";
import React from "react";
import Router from "next/router";

import { LayoutAuthorizedHeader } from "./layout-authorized-header";
import { CustomButton, Flex, Image, Text } from "./primitives/styled-rebass";
import Icon from "./icon";

interface TravelingPageComponent {
  // pathname: NextContext["pathname"];
  // query: NextContext["query"];
}

export const TravelingPageComponent: React.FC<TravelingPageComponent> = ({}) => {
  return (
    <React.Fragment>
      <NextSeo
        title="Traveling"
        description="A traveling page, nothing more."
        canonical="https://at.eddienaff.dev/"
        openGraph={{
          url: "https://at.eddienaff.dev/traveling",
          title: "Traveling",
          description: "A beautiful traveling page.",
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
      <Flex
        flex={1}
        flexDirection="column"
        width={1}
        bg="#eee"
        overflowY="hidden"
      >
        <LayoutAuthorizedHeader />
        <Flex
          width={1}
          alignItems="center"
          // height="100%"
          overflowY="hidden"
          mx="auto"
        >
          <Flex flexDirection="column" mr="auto">
            <Text as="h1" fontFamily="main" fontSize={4}>
              Featured
            </Text>
            <Text as="h1" fontFamily="main" fontSize={4}>
              XXXX spots
            </Text>
          </Flex>

          <CustomButton
            backgroundColor="#d23078"
            backgroundImage="linear-gradient(
                        0deg,
                        rgba(210, 48, 120, 0.2),
                        rgba(254, 97, 97, 0.2),
                        rgba(255, 121, 85, 0.2)
                      )"
            boxShadow="0px 10px 27px 0px rgba(0, 0, 0, 0.1)"
            borderRadius="23px"
            width="105px"
            height="40px"
            type="submit"
            onClick={() =>
              Router.push(
                "/traveling?filterModal=isOpen&referer=/traveling",
                "/traveling"
              )
            }
          >
            <Flex alignItems="center" justifyContent="center">
              <Icon active={false} name="plus_skinny" size="15px" fill="#fff" />
              <Text ml={1}>Filters</Text>
            </Flex>
          </CustomButton>
        </Flex>

        <Flex
          // width={authLayoutWidths}
          width={1}
          flex={1}
          // alignItems="start"
          mx="auto"
          overflowY="auto"
          flexWrap="wrap"
        >
          {[1, 2, 3, 4, 5, 6, 7].map(() => (
            <ListingItem />
          ))}
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

const ListingItem = () => {
  return (
    <Flex width={[1, 1, 1, 1, 1 / 2, 1 / 2, 1 / 2]} pb={3} pr={4}>
      <Flex
        borderRadius="10px"
        // width={1}
        bg="#fff"
        minHeight="150px"
        maxHeight="175px"
        p={3}
        sx={{
          boxShadow: "0px 10px 27px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Flex width={1 / 3}>
          <Image
            src="https://source.unsplash.com/random/1024x768?sky"
            sx={{ borderRadius: "10px" }}
          />
        </Flex>
        <Flex width={2 / 3} pl={3} flexDirection="column">
          <TitlePriceAndOptions />
          <LocationLikesAndComments />
        </Flex>
      </Flex>
    </Flex>
  );
};

const TitlePriceAndOptions = () => {
  return (
    <Flex mb="auto" alignItems="center">
      <Flex mr="auto" flexDirection="column">
        <Text as="h1" fontSize={4}>
          Hotel Blue Lagoon
        </Text>
        <Text>$234</Text>
      </Flex>
      <Icon active={false} name="more" size="17px" fill="#aaa" />
    </Flex>
  );
};

const LocationLikesAndComments = () => {
  return (
    <Flex alignItems="center">
      <Flex alignItems="center" mr="auto">
        <Icon active={false} fill="#aaa" name="mapPin" size="14px" />
        <Text ml={1}>Chicago</Text>
      </Flex>
      <Flex alignItems="center" mr={3}>
        <Icon active={false} fill="#aaa" name="love" size="14px" />
        <Text ml={1}>4k</Text>
      </Flex>
      <Flex alignItems="center" mr={4}>
        <Icon active={false} fill="#aaa" name="comment" size="14px" />
        <Text ml={1}>766</Text>
      </Flex>
    </Flex>
  );
};
