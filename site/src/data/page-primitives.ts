import type { SiteLocale } from "../i18n/ui";

/**
 * The job a page performs for the reader, independent of its route family.
 *
 * Structural only. It types `PageIntroduction`'s prop and the `data-page-job`
 * attribute; it is deliberately not rendered. "Decision path" told a reader
 * how this project files its own material, which is not something they can
 * learn from the page or act on — see issue #145.
 */
export type PageJob =
  | "decision"
  | "explanation"
  | "implementation"
  | "reference"
  | "editorial";

interface PagePrimitiveCopy {
  shortAnswer: string;
  fitsWhen: string;
  evidence: string;
  source: string;
  stopCondition: string;
  saferAlternative: string;
  expectedResult: string;
  verification: string;
  copyableArtifact: string;
  nextStep: string;
  opensInNewWindow: string;
}

const copy: Record<SiteLocale, PagePrimitiveCopy> = {
  en: {
    shortAnswer: "Short answer",
    fitsWhen: "Fits when",
    evidence: "Evidence",
    source: "Source",
    stopCondition: "Stop condition",
    saferAlternative: "Safer alternative",
    expectedResult: "Expected result",
    verification: "Verify",
    copyableArtifact: "Copyable artifact",
    nextStep: "Next step",
    opensInNewWindow: "opens in a new window",
  },
  de: {
    shortAnswer: "Kurzantwort",
    fitsWhen: "Passt, wenn",
    evidence: "Nachweis",
    source: "Quelle",
    stopCondition: "Stoppbedingung",
    saferAlternative: "Sicherere Alternative",
    expectedResult: "Erwartetes Ergebnis",
    verification: "Prüfen",
    copyableArtifact: "Zum Übernehmen",
    nextStep: "Nächster Schritt",
    opensInNewWindow: "öffnet in einem neuen Fenster",
  },
};

export const getPagePrimitiveCopy = (locale: SiteLocale): PagePrimitiveCopy => copy[locale];
