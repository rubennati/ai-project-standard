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

/**
 * A blueprint's canonical status, as the repository defines it in
 * `docs/blueprints.md`: `draft` has complete payload and has never been run
 * against a real project; `stable` has. `planned` is deliberately absent —
 * it has no `files/` directory, so there is nothing to offer a reader.
 *
 * The site stores the key, not the word. Rendering the bare word "draft" told
 * a reader that the text was unfinished, which is not what it means here, and
 * gave them no way to find out. `check-conformance.sh` asserts the key still
 * matches `blueprints/<id>/blueprint.yml`; the site does not read that file,
 * so the website stays buildable on its own.
 */
export type ArtifactStatus = "draft" | "stable";

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
  artifactStatus: Record<ArtifactStatus, string>;
  nextStep: string;
  opensInNewWindow: string;
}

const copy: Record<SiteLocale, PagePrimitiveCopy> = {
  en: {
    shortAnswer: "Short answer",
    fitsWhen: "Fits when",
    evidence: "Evidence",
    source: "Source",
    stopCondition: "When to stop",
    saferAlternative: "Safer alternative",
    expectedResult: "Expected result",
    verification: "Verify",
    copyableArtifact: "Copy this",
    artifactStatus: {
      draft: "not yet used on a real project",
      stable: "used on a real project",
    },
    nextStep: "Next step",
    opensInNewWindow: "opens in a new window",
  },
  de: {
    shortAnswer: "Kurzantwort",
    fitsWhen: "Passt, wenn",
    evidence: "Nachweis",
    source: "Quelle",
    stopCondition: "Wann aufhören",
    saferAlternative: "Sicherere Alternative",
    expectedResult: "Erwartetes Ergebnis",
    verification: "Prüfen",
    copyableArtifact: "Zum Übernehmen",
    artifactStatus: {
      draft: "noch nicht in einem echten Projekt eingesetzt",
      stable: "in einem echten Projekt eingesetzt",
    },
    nextStep: "Nächster Schritt",
    opensInNewWindow: "öffnet in einem neuen Fenster",
  },
};

export const getPagePrimitiveCopy = (locale: SiteLocale): PagePrimitiveCopy => copy[locale];
