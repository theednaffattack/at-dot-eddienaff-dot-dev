import React, { ReactElement } from "react";
import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps } from "styled-system";

import {
  Flex,
  FlexMinHeightBordersProps,
  Button,
} from "./primitives/styled-rebass";

interface DlAccordionProps {
  activeIndex: number | null;

  children: React.ReactChildren | React.ReactChild;
  minHeight?: string;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export function DlAccordionExample({}: DlAccordionProps) {
  return (
    <dl className="accordion">
      <dt className="accordion-trigger">
        <a href="#" title="show more">
          Some content
        </a>
      </dt>
      <dd className="accordion-content">Lorem ipsum dolor ...</dd>
      <dt className="accordion-trigger">
        <a href="#" title="show more">
          Some content
        </a>
      </dt>
      <dd className="accordion-content">Lorem ipsum dolor ...</dd>
      <dt className="accordion-trigger">
        <a href="#" title="show more">
          Some content
        </a>
      </dt>
      <dd className="accordion-content">Lorem ipsum dolor ...</dd>
      <dt className="accordion-trigger">
        <a href="#" title="show more">
          Some content
        </a>
      </dt>
      <dd className="accordion-content">Lorem ipsum dolor ...</dd>
    </dl>
  );
}
export function DlAccordion({
  activeIndex,
  children,
  minHeight,
  setActiveIndex,
}: DlAccordionProps) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      m={0}
      minHeight={
        activeIndex !== null
          ? minHeight !== undefined
            ? minHeight
            : "auto"
          : 0
      }
    >
      {children}

      <AccordionItem
        index={1}
        key="button-key-accordion-guts"
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
      >
        <ContentWrapper
          width={1}
          height={activeIndex !== null ? "auto" : 0}
          id="content-wrapper"
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="center"
          sx={{
            opacity: activeIndex !== null ? 1 : 0,
          }}
        >
          <Button type="button">submit</Button>
        </ContentWrapper>
      </AccordionItem>
    </Flex>
  );
}

{
  /* <ContentWrapper
status={index === activeIndex ? "isOpen" : "isClosed"}
>
<SingleSlider minHeight="75px" />
</ContentWrapper> */
}

export const ContentWrapper = styled(Flex)<FlexMinHeightBordersProps>`
  /* css animation */

  /* overflow: hidden; */

  /* add browser prefixes */
  transition: all 0.3s ease;
  overflow: hidden;
`;

interface AccordionItemProps {
  children: React.ReactChildren | React.ReactChild;
  index: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  activeIndex: number | null;
}

export function AccordionItem({
  children,
}: // activeIndex,
// index,
// setActiveIndex,
AccordionItemProps): ReactElement {
  return (
    <React.Fragment>
      {/* <AccordionTrigger
        status={index === activeIndex ? "isOpen" : "isClosed"}
        onClick={() => {
          if (index === activeIndex) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        }}
      >
        <AnchorTrigger href="#" title="show more">
          <AccordionText>Some content</AccordionText>
        </AnchorTrigger>
      </AccordionTrigger> */}
      {children}
    </React.Fragment>
  );
}

// const AccordionText = styled.span`
//   display: table-cell;
//   padding: 14px 20px;
//   padding: 0.77778rem 1.11111rem;
// `;

// const AnchorTrigger = styled.a`
//   display: table;
//   width: 100%;
//   background: #3fa80a;
//   font-weight: 700;
//   text-decoration: none;
//   border: none;
//   color: white;
//   margin-top: 2px;
//   /* margin-top: 1.11111rem; */
//   &:hover {
//     color: white;
//   }
// `;

const Accordion = styled.div<LayoutProps & SpaceProps>`
  ${layout}
  ${space}
`;

// const AccordionTrigger = styled.dt<{ status: "isOpen" | "isClosed" }>`
//   padding: ${({ status }) => (status === "isOpen" ? "15px 20px" : "0 1px")};
//   max-height: ${({ status }) => (status === "isOpen" ? "500px" : "0")};
//   opacity: ${({ status }) => (status === "isOpen" ? 1 : 0)};
// `;

// const AccordionContent = styled.dd<{ status: "isOpen" | "isClosed" }>`
//   /* css animation */
//   overflow: hidden;
//   padding: ${({ status }) => (status === "isOpen" ? "15px 20px" : "0 1px")};
//   max-height: ${({ status }) => (status === "isOpen" ? "500px" : "0")};
//   opacity: ${({ status }) => (status === "isOpen" ? 1 : 0)};
//   margin: 0;
//   /* add browser prefixes */
//   transition: all 0.3s ease;
// `;

// const ContentOpen = styled.dd`
//   max-height: 500px;
//   opacity: 1;
//   padding: 15px 20px;
// `;
