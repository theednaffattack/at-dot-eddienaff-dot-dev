import React, { ReactElement } from "react";

import { ClonedChildrenFromAuthLayout } from "../pages/traveling";
import { SubAuthHeaderPageLayout } from "./helper-comps-standard-page-layout";
import { RenderDayPlansList } from "./near-me-render-dayplans-list";
import { fauxDayPlans, fauxFeatureCards } from "./helpers";
import { ExploreFeatureCardList } from "./explore-feature-card-list";
import { Flex } from "./primitives/styled-rebass";

interface NearMePageComponentProps extends ClonedChildrenFromAuthLayout {
  title: string;
}

export function NearMePageComponent({
  modalOverlayDispatch,
  modalOverlayState,
  title,
}: NearMePageComponentProps): ReactElement {
  return (
    <SubAuthHeaderPageLayout
      modalOverlayDispatch={modalOverlayDispatch}
      modalOverlayState={modalOverlayState}
      title={title}
    >
      <Flex flexDirection="column">
        <ExploreFeatureCardList data={fauxFeatureCards} />
        <RenderDayPlansList dayPlansData={fauxDayPlans} />
      </Flex>
    </SubAuthHeaderPageLayout>
  );
}
