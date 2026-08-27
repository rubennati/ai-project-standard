/**
 * How claims are checked — the site's trust page.
 *
 * The five levels and their meanings stay in `evidence.ts`, which both the
 * labels and the legend already read from. This module carries everything the
 * method page owns around them: the source ranking, what a check date does
 * and does not do, the limits of a source's authority, and what to do when a
 * claim here is wrong. That material lived on About until 2026-08-27; About
 * keeps a short bridge and this page keeps the method — one owner per fact.
 *
 * The page lives under About (`/about/how-claims-are-checked`), not the
 * glossary: it is trust content about how this site works, not a term a
 * reader meets in prose. See `.ai/decisions.md`, 2026-08-27.
 */
import type { SiteLocale } from "../i18n/ui";

interface MethodSection {
  heading: string;
  paragraphs: string[];
}

interface EvidenceMethodContent {
  levelsHeading: string;
  sourcesHeading: string;
  sourcesLead: string;
  sources: string[];
  /** The ranking applied once: the error it has already caught here. */
  sourcesNote: string;
  sections: MethodSection[];
  nextStep: { label: string; description: string };
}

const en: EvidenceMethodContent = {
  levelsHeading: "The five levels",
  sourcesHeading: "How sources are ranked",
  sourcesLead:
    "Sources are primary or they are not used. Where two disagree about the same question, the higher one decides what is published.",
  sources: [
    "Consolidated legal text, or the Official Journal.",
    "Official guidance from the Commission or a supervisory authority.",
    "A vendor's published terms and documentation — authoritative for what that vendor has said about itself, and nothing beyond it.",
    "Technical primary documentation, such as a protocol specification.",
    "Anything written about them.",
  ],
  sourcesNote:
    "That ranking has already caught an error here: an EU regulation was described as a provisional agreement because a Commission FAQ still said so, when the act had been in force for a week.",
  sections: [
    {
      heading: "What a check date does",
      paragraphs: [
        "Dates do a narrower job than a check date is often credited with. They do not make a claim true or lasting; they fix which state of a changing world it was checked against. Vendor defaults move without announcement, which is why every factual and measured claim here carries one.",
        "A claim without a date is not automatically suspect — a durable rule is checkable whenever you read it. It is the claims about changeable things that need one.",
      ],
    },
    {
      heading: "Being the source is not being right",
      paragraphs: [
        "A vendor is authoritative for what it has published about itself and for nothing beyond that: its documentation states its terms, it does not audit its systems. So a page here says the vendor states something, rather than asserting the behaviour outright, and the difference is not pedantry — it is the difference between a commitment you could hold someone to and a fact you have verified.",
        "The same line runs through the legal pages. Restating a norm and applying it to your situation are different acts needing different competence: the first is labelled Law, and the moment a sentence reaches a conclusion about a real case it is labelled Assessment, whoever wrote it.",
      ],
    },
    {
      heading: "When something here is wrong",
      paragraphs: [
        "Corrections are welcome and they are not a favour. Every page, this one included, ends with a Report a problem link that opens an issue with the page and its URL already filled in. If something here is wrong, that link is the fastest way to make it right, and the correction gets recorded rather than quietly patched.",
      ],
    },
  ],
  nextStep: {
    label: "Who is behind this site",
    description:
      "Why AI Standard exists, the position it argues from, what it is not, and who writes it.",
  },
};

const de: EvidenceMethodContent = {
  levelsHeading: "Die fünf Stufen",
  sourcesHeading: "Wie Quellen gewichtet werden",
  sourcesLead:
    "Quellen sind primär oder werden nicht verwendet. Widersprechen sich zwei zur selben Frage, entscheidet die höhere darüber, was veröffentlicht wird.",
  sources: [
    "Konsolidierter Rechtstext oder das Amtsblatt.",
    "Offizielle Leitlinien der Kommission oder einer Aufsichtsbehörde.",
    "Die veröffentlichten Bedingungen und die Dokumentation eines Anbieters — maßgeblich dafür, was dieser Anbieter über sich selbst sagt, und für nichts darüber hinaus.",
    "Technische Primärdokumentation, etwa eine Protokollspezifikation.",
    "Alles, was darüber geschrieben wurde.",
  ],
  sourcesNote:
    "Diese Rangfolge hat hier schon einmal einen Fehler aufgedeckt: Eine EU-Verordnung wurde als vorläufige Einigung beschrieben, weil eine Kommissions-FAQ das noch so sagte, während der Rechtsakt seit einer Woche in Kraft war.",
  sections: [
    {
      heading: "Was ein Prüfdatum leistet",
      paragraphs: [
        "Prüfdaten leisten weniger, als ihnen oft zugeschrieben wird. Sie machen eine Aussage nicht wahr und nicht dauerhaft; sie halten fest, gegen welchen Stand einer veränderlichen Welt sie geprüft wurde. Voreinstellungen der Anbieter ändern sich ohne Ankündigung — deshalb trägt hier jede Tatsachen- und jede Messaussage eines.",
        "Eine Aussage ohne Datum ist nicht automatisch verdächtig — eine beständige Regel lässt sich jederzeit nachprüfen. Ein Datum brauchen die Aussagen über Dinge, die sich ändern.",
      ],
    },
    {
      heading: "Quelle zu sein heißt nicht, recht zu haben",
      paragraphs: [
        "Ein Anbieter ist maßgeblich für das, was er über sich selbst veröffentlicht hat, und für nichts darüber hinaus: Seine Dokumentation gibt seine Bedingungen wieder, sie prüft nicht seine Systeme. Deshalb steht hier, dass der Anbieter etwas angibt, statt das Verhalten schlicht zu behaupten — und das ist keine Wortklauberei, sondern der Unterschied zwischen einer Zusage, bei der man jemanden beim Wort nehmen kann, und einer Tatsache, die man überprüft hat.",
        "Dieselbe Linie läuft durch die Rechtsseiten. Eine Norm wiederzugeben und sie auf deine Lage anzuwenden sind zwei verschiedene Handlungen, die verschiedene Fachkunde verlangen: Das Erste trägt die Kennzeichnung Rechtslage, und sobald ein Satz zu einem Schluss über einen konkreten Fall kommt, trägt er Einschätzung — gleich, wer ihn geschrieben hat.",
      ],
    },
    {
      heading: "Wenn hier etwas falsch ist",
      paragraphs: [
        "Korrekturen sind willkommen und kein Gefallen. Jede Seite — auch diese — endet mit einem Link „Problem melden“, der ein Issue öffnet, in dem Seite und URL schon eingetragen sind. Wenn hier etwas falsch ist, ist das der schnellste Weg, es richtigzustellen — und die Korrektur wird festgehalten statt still nachgebessert.",
      ],
    },
  ],
  nextStep: {
    label: "Wer hinter dieser Seite steht",
    description:
      "Warum es AI Standard gibt, aus welcher Position argumentiert wird, was die Seite nicht ist und wer schreibt.",
  },
};

export const getEvidenceMethod = (locale: SiteLocale): EvidenceMethodContent =>
  locale === "de" ? de : en;
