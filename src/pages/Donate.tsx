import React from "react";

import { ThinContainer } from "@/components/layout/ThinContainer";
import { Heading1 } from "@/components/utils/Text";
import { PageTitle } from "@/pages/parts/util/PageTitle";
import { conf } from "@/setup/config";

import { SubPageLayout } from "./layouts/SubPageLayout";

export function shouldHaveDmcaPage() {
  return !!conf().DMCA_EMAIL;
}

export function DonatePage() {

  return (
    <SubPageLayout>
      <PageTitle subpage k="global.pages.dmca" />
      <ThinContainer>
        <Heading1>Donate</Heading1>
      </ThinContainer>
    </SubPageLayout>
  );
}
