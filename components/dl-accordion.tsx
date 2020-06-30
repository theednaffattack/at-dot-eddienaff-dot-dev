import React, { ReactElement } from "react";
import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps } from "styled-system";

import { SingleSlider } from "./form-fields/single-slider";
import { Flex, FlexMinHeightBordersProps } from "./primitives/styled-rebass";

interface DlAccordionProps {
  activeIndex: number | null;
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
export function DlAccordion({ activeIndex, setActiveIndex }: DlAccordionProps) {
  return (
    <Flex
      justifyContent="center"
      m={0}
      minHeight={activeIndex !== null ? "118px" : 0}
    >
      {[1].map((_, index) => (
        <AccordionItem
          index={index}
          key={index ? index + "-accordion-guts" : "xx-accordion-guts"}
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
        >
          <ContentWrapper
            bg="peachpuff"
            width={1}
            minHeight={index === activeIndex ? "88px" : 0}
            padding={
              activeIndex && index === activeIndex
                ? "15px 20px 15px 20px"
                : "0 1px"
            }
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              opacity: index === activeIndex ? 1 : 0,
            }}
          >
            <SingleSlider />
          </ContentWrapper>
        </AccordionItem>
      ))}
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

const ContentWrapper = styled(Flex)<FlexMinHeightBordersProps>`
  /* css animation */

  /* overflow: hidden; */

  /* add browser prefixes */
  transition: all 0.3s ease;
`;

interface AccordionItemProps {
  children: React.ReactChildren | React.ReactChild;
  index: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  activeIndex: number | null;
}

function AccordionItem({
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
