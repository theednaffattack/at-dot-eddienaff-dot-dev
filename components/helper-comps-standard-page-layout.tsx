import React, { ReactElement } from "react";

import { Flex } from "./primitives/styled-rebass";
import {
  authLayoutWidths,
  LayoutAuthorizedHeader,
} from "./layout-authorized-header";
import { ClonedChildrenFromAuthLayout } from "../pages/traveling";
import { StandardPageInfoAndFilterButton } from "./helper-comps-standard-page-info-and-filter-button";

interface LazyPageSectionSizerProps extends ClonedChildrenFromAuthLayout {
  children: React.ReactChild | React.ReactChildren;
  title: string;
}

export function SubAuthHeaderPageLayout({
  children,
  modalOverlayDispatch,
  modalOverlayState,
  title,
}: LazyPageSectionSizerProps): ReactElement {
  return (
    <Flex id="near-me" flexDirection="column" flex={1}>
      <LayoutAuthorizedHeader
        modalOverlayDispatch={modalOverlayDispatch}
        modalOverlayState={modalOverlayState}
        title="Explore"
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
          sx={{
            position: "relative",
          }}
        >
          <Flex flexDirection="column">
            <StandardPageInfoAndFilterButton count={50} title={title} />
          </Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
