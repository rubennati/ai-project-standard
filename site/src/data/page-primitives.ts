import type { SiteLocale } from "../i18n/ui";

/** The job a page performs for the reader, independent of its route family. */
export type PageJob =
  | "decision"
  | "explanation"
  | "implementation"
  | "reference"
  | "editorial";

/** The product-spine stage a related next step continues into. */
export type ProductStage =
  | "possibility"
  | "collaboration"
  | "reach"
  | "control"
  | "reference";

interface PagePrimitiveCopy {
  pageJobs: Record<PageJob, string>;
  productStages: Record<ProductStage, string>;
  shortAnswer: string;
  fitsWhen: string;
  evidence: string;
  source: string;
  doNotUseWhen: string;
  saferAlternative: string;
  expectedResult: string;
  verification: string;
  copyableArtifact: string;
  nextStep: string;
  opensInNewWindow: string;
}

const copy: Record<SiteLocale, PagePrimitiveCopy> = {
  en: {
    pageJobs: {
      decision: "Decision path",
      explanation: "Explanation",
      implementation: "Implementation guide",
      reference: "Reference",
      editorial: "Editorial perspective",
    },
    productStages: {
      possibility: "Possibility",
      collaboration: "Collaboration",
      reach: "Reach",
      control: "Control",
      reference: "Reference",
    },
    shortAnswer: "Short answer",
    fitsWhen: "Fits when",
    evidence: "Evidence",
    source: "Source",
    doNotUseWhen: "Do not use this when",
    saferAlternative: "Safer alternative",
    expectedResult: "Expected result",
    verification: "Verify",
    copyableArtifact: "Copyable artifact",
    nextStep: "Next step",
    opensInNewWindow: "opens in a new window",
  },
  de: {
    pageJobs: {
      decision: "Entscheidungsweg",
      explanation: "Erklärung",
      implementation: "Umsetzung",
      reference: "Referenz",
      editorial: "Redaktionelle Perspektive",
    },
    productStages: {
      possibility: "Möglichkeit",
      collaboration: "Zusammenarbeit",
      reach: "Reichweite",
      control: "Kontrolle",
      reference: "Nachschlagen",
    },
    shortAnswer: "Kurzantwort",
    fitsWhen: "Passt, wenn",
    evidence: "Nachweis",
    source: "Quelle",
    doNotUseWhen: "Nicht verwenden, wenn",
    saferAlternative: "Sicherere Alternative",
    expectedResult: "Erwartetes Ergebnis",
    verification: "Prüfen",
    copyableArtifact: "Zum Übernehmen",
    nextStep: "Nächster Schritt",
    opensInNewWindow: "öffnet in einem neuen Fenster",
  },
};

export const getPagePrimitiveCopy = (locale: SiteLocale): PagePrimitiveCopy => copy[locale];
