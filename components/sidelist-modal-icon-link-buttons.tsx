import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { primarySidebarLinks, secondarySidebarLinks } from "./helpers";
import Icon from "./icon";
import { Flex, Text } from "./primitives/styled-rebass";

const Divider = styled.hr`
  margin-right: 20px;
  margin-left: 20px;

  border: 0;
  height: 0;
  border-top: 1px solid #ddd;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.3); */
`;

const Anchor = styled.a`
  text-decoration: none;
`;

interface SidelistModalIconLinkButtonsProps {}

export const SidelistModalIconLinkButtons: React.FC<SidelistModalIconLinkButtonsProps> = ({}) => {
  return (
    <Flex flexDirection="column" bg="#f2f2f2" flex={1} width={1}>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          paddingRight: "16px",
        }}
      >
        {primarySidebarLinks.map((link, linkIndex) => (
          <li key={linkIndex + "-links-" + link.name}>
            <Link href={link.href} as={link.asPath}>
              <Anchor>
                <Flex alignItems="center" py={3} pl={[2, 2, 2, 2, 4, 4, 4]}>
                  <Icon
                    active={false}
                    fill="#aaa"
                    name={link.iconName}
                    size="18px"
                    ml={3}
                  />
                  <Text pl={4} color="#222">
                    {link.label}
                  </Text>
                </Flex>
              </Anchor>
            </Link>
          </li>
        ))}
      </ul>
      <Divider />
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {secondarySidebarLinks.map((link, linkIndex) => (
          <li key={linkIndex + "-links-" + link.name}>
            <Link href={link.href} as={link.asPath}>
              <Anchor>
                <Flex py={3} pl={4}>
                  <Icon
                    active={false}
                    fill="#aaa"
                    name={link.iconName}
                    size="18px"
                    ml={3}
                  />
                  <Text pl={4} color="#222">
                    {link.label}
                  </Text>
                </Flex>
              </Anchor>
            </Link>
          </li>
        ))}
      </ul>
    </Flex>
  );
};
