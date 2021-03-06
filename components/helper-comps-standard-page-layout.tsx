import React, { ReactElement } from "react";

import { Flex } from "./primitives/styled-rebass";
import {
  authLayoutWidths,
  LayoutAuthorizedHeader,
} from "./layout-authorized-header";
import { ClonedChildrenFromAuthLayout } from "../pages/traveling";
import { StandardPageInfoAndFilterButton } from "./helper-comps-standard-page-info-and-filter-button";
import { DlAccordion, AccordionItem, ContentWrapper } from "./dl-accordion";

interface LazyPageSectionSizerProps extends ClonedChildrenFromAuthLayout {
  accordionContent?: ReactElement;
  accordionMinHeight: string;
  children: React.ReactChild | React.ReactChildren;
  title: string;
}

export function SubAuthHeaderPageLayout({
  accordionContent,
  accordionMinHeight,
  children,
  modalOverlayDispatch,
  modalOverlayState,
  title,
}: LazyPageSectionSizerProps): ReactElement {
  const [activeIndex, setActiveIndex] = React.useState<null | number>(null);
  return (
    <Flex
      flexDirection="column"
      flex={1}
      sx={{
        position: "relative",
      }}
    >
      <LayoutAuthorizedHeader
        modalOverlayDispatch={modalOverlayDispatch}
        modalOverlayState={modalOverlayState}
        title={title}
      />
      <Flex
        mt={[3, 3, 3, 3, 3, 3, 4]}
        // mb={[2, 2, 2, 2, 2, 2, 4]}
        justifyContent="center"
        width={1}
        px={[2, 2, 2, 2, 4, 4, 0]}
      >
        <Flex
          flexDirection="column"
          width={authLayoutWidths}
          // alignItems="center"
          pb={[2, 2, 2, 2, 0, 0, 0]}
        >
          <Flex flexDirection="column">
            <StandardPageInfoAndFilterButton
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              count={50}
              title={title}
            >
              {accordionContent ? (
                <DlAccordion
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                >
                  <>
                    <AccordionItem
                      index={0}
                      key={"0-accordion-guts"}
                      setActiveIndex={setActiveIndex}
                      activeIndex={activeIndex}
                    >
                      <ContentWrapper
                        bg="#eee"
                        width={1}
                        border="1px #aaa solid"
                        minHeight={
                          activeIndex === 0
                            ? accordionMinHeight
                              ? accordionMinHeight
                              : "auto"
                            : 0
                        }
                        padding={
                          activeIndex === 0 ? "15px 20px 15px 20px" : "0 1px"
                        }
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                          opacity: activeIndex === 0 ? 1 : 0,
                        }}
                      >
                        {accordionContent}
                      </ContentWrapper>
                    </AccordionItem>
                  </>
                </DlAccordion>
              ) : (
                undefined
              )}
            </StandardPageInfoAndFilterButton>
          </Flex>
        </Flex>
      </Flex>
      {children}
    </Flex>
  );
}
