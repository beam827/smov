import classNames from "classnames";
import { useTranslation } from "react-i18next";

import { ThinContainer } from "@/components/layout/ThinContainer";
import { Ol } from "@/components/utils/Ol";
import { Heading1, Heading2, Paragraph } from "@/components/utils/Text";
import { PageTitle } from "@/pages/parts/util/PageTitle";

import { SubPageLayout } from "./layouts/SubPageLayout";

function Question(props: { title: string; children: React.ReactNode }) {
  return (
    <>
      <p className="text-white mb-2 font-medium">{props.title}</p>
      <div className="text-type-text">{props.children}</div>
    </>
  );
}

export function Button(props: {
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      className={classNames(
        "font-bold rounded h-10 w-40 scale-90 hover:scale-95 transition-all duration-200",
        props.className,
      )}
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <SubPageLayout>
      <PageTitle subpage k="global.pages.about" />
      <ThinContainer>
        <Heading1>{t("about.title")}</Heading1>
        <Paragraph>{t("about.description")}</Paragraph>
        <Heading2>{t("about.faqTitle")}</Heading2>
        <Ol
          items={[
            <Question title={t("about.q1.title")}>
              {t("about.q1.body")}
            </Question>,
            <Question title={t("about.q2.title")}>
              {t("about.q2.body")}
            </Question>,
            <Question title={t("about.q3.title")}>
              {t("about.q3.body")}
            </Question>,
            <Question title={t("about.q4.title")}>
              {t("about.q4.body")}
            </Question>,
            <Question title={t("about.q5.title")}>
              {t("about.q5.body")}
            </Question>,
            <Question title={t("about.q6.title")}>
              {t("about.q6.body")}
            </Question>,
          ]}
        />
      </ThinContainer>
    </SubPageLayout>
  );
}
