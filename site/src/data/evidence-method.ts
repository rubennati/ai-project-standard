/**
 * The evidence method as a reference page.
 *
 * The five levels and their meanings stay in `evidence.ts`, which both the
 * labels and the legend already read from — this module adds only what the
 * reference page needs around them: the section headings and the source
 * ranking the project decided on 2026-08-04 and had not yet published.
 */
import type { SiteLocale } from "../i18n/ui";

interface EvidenceMethodContent {
  levelsHeading: string;
  sourcesHeading: string;
  sourcesLead: string;
  sources: string[];
}

const en: EvidenceMethodContent = {
  levelsHeading: "The five levels",
  sourcesHeading: "How sources are ranked",
  sourcesLead:
    "Where two sources disagree about the same question, the higher one decides what is published.",
  sources: [
    "Consolidated legal text, or the Official Journal.",
    "Official guidance from the Commission or a supervisory authority.",
    "A vendor's published terms and documentation — authoritative for what that vendor has said about itself, and nothing beyond it.",
    "Technical primary documentation, such as a protocol specification.",
    "Anything written about them.",
  ],
};

const de: EvidenceMethodContent = {
  levelsHeading: "Die fünf Stufen",
  sourcesHeading: "Wie Quellen gewichtet werden",
  sourcesLead:
    "Widersprechen sich zwei Quellen zur selben Frage, entscheidet die höhere darüber, was veröffentlicht wird.",
  sources: [
    "Konsolidierter Rechtstext oder das Amtsblatt.",
    "Offizielle Leitlinien der Kommission oder einer Aufsichtsbehörde.",
    "Die veröffentlichten Bedingungen und die Dokumentation eines Anbieters — maßgeblich dafür, was dieser Anbieter über sich selbst sagt, und für nichts darüber hinaus.",
    "Technische Primärdokumentation, etwa eine Protokollspezifikation.",
    "Alles, was darüber geschrieben wurde.",
  ],
};

export const getEvidenceMethod = (locale: SiteLocale): EvidenceMethodContent =>
  locale === "de" ? de : en;
