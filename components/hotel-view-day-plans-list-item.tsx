import React from "react";
import styled from "styled-components";

import {
  Box,
  // Card,
  Flex,
  Heading,
  // Image,
  Text,
} from "./primitives/styled-rebass";
// @ts-ignore
import { HotelViewDayPlansListItemHeader } from "./hotel-view-day-plans-list-view-header";
import Link from "next/link";
import Icon from "./icon";

interface HotelViewDayPlansListItemProps {
  index?: number;
  link: string;
  time: string;
  title: string;
  // as: string;
}

export const HotelViewDayPlansListItem: React.FC<HotelViewDayPlansListItemProps> = ({
  // index,
  link,
  time,
  title,
}) => {
  // @ts-ignore
  const [imageLoadState, setImageLoadState] = React.useState("notLoaded");
  return (
    <Flex flexDirection="column">
      <HotelViewDayPlansListItemHeader time={time} />
      <Flex pl={2} pr={2} mb={3} flexDirection="column">
        <Flex mt={2} alignItems="center">
          <Link href={link}>
            <A>
              <Heading fontFamily="main" color="#444">
                {title}
              </Heading>
            </A>
          </Link>
          <Box>
            <Icon name="share_arrow" fill="#888" size="16px" active={false} />
          </Box>
        </Flex>
        <Text pt={2} color="#888">
          Aliquam interdum ipsum et tempor. Phasellus odiofelis, sceler.
        </Text>
      </Flex>

      <Box
        m={0}
        pr={2}
        minHeight="160px"
        width={1}
        sx={{
          backgroundImage:
            "url(https://source.unsplash.com/random/1024x768?sky)",
          backgroundSize: "cover",
          borderRadius: 16,
        }}
      >
        {/* {imageLoadState === "hasLoaded" ? ( */}
        {/* <Image
    src="https://source.unsplash.com/random/1024x768?sky"
    onError={() => setImageLoadState("errorLoading")}
    onLoad={() => setImageLoadState("hasLoaded")}
  /> */}
      </Box>
    </Flex>
  );
};

const A = styled.a`
  text-decoration: none;
`;
