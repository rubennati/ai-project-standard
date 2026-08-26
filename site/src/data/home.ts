/**
 * The homepage: what AI Standard is, one way in, and who makes it.
 *
 * The previous version explained the site's own information architecture — four
 * questions mirroring the four header journeys, a section teaching readers how
 * to read the site, and a section about the repository underneath it. All of
 * that is a maintainer's view of the product. A first-time visitor needs to know
 * what this is, why it might help, and where to start.
 *
 * Three blocks, deliberately. The header already carries the durable product
 * navigation and the footer already carries reference, law, about, the evidence
 * method and the project utilities; repeating either here is what made the old
 * page a directory of itself.
 *
 * The direct entries are questions, not categories, and each one links to the
 * page that answers it — one verbatim, two as the declarative-to-interrogative
 * turn `.ai/decisions.md` (2026-08-24) names as correct. That is why they carry
 * no supporting line: the link already promises the reader job the destination
 * delivers. They are not a fifth copy of the four journeys and must not grow
 * into one.
 *
 * The lead opens with the sentence in `identity.ts` and the description is the
 * summary there, rather than repeating either. Only the sentence after the
 * interpolation is homepage copy.
 *
 * The heading leads with capability. It previously asserted a quality with no
 * criterion — `Use AI well at work` / `KI sinnvoll im Arbeitsalltag einsetzen` —
 * and neither `well` nor `sinnvoll` said useful by what measure. Naming what AI
 * can do and how to work with it is checkable where an adjective was not, and
 * it keeps limits where they change a decision rather than making them the
 * product's defining promise. `sinnvoll` stays in the header label for
 * `/use-cases`, where a `Wo`-clause makes it the question under examination
 * rather than a promise, and where the destination answers it in both
 * directions.
 *
 * `example` is illustrative homepage copy, not a canonical inventory. It names
 * three kinds of work that span the distance the site covers — a draft, your own
 * material, a connected system — so the lead's "through concrete tasks" has a
 * referent on the page. `/use-cases` owns the real set; this sentence must not
 * grow into a list, acquire links or turn into categories.
 */
import { getIdentity } from "./identity";
import type { SiteLocale } from "../i18n/ui";

interface DirectEntry {
  /** The reader's question, used as the link text. No separate path label. */
  question: string;
  href: string;
}

export interface HomeContent {
  title: string;
  description: string;
  heading: string;
  lead: string;
  /** One quiet line of concrete work, closing the hero. Never a list. */
  example: string;
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
  entriesHeading: string;
  entries: DirectEntry[];
  openHeading: string;
  openBody: string;
  openAction: string;
}

const en: HomeContent = {
  title: "AI Standard",
  description: getIdentity("en").summary,
  // \u00A0 keeps the dash on the first line: without it the balanced two-line
  // break at 1280 and above starts line two with the dash. Same height either way.
  heading: "What AI can do at work\u00A0— and how to work with it",
  lead: `${getIdentity("en").identity} It shows, through concrete tasks, what AI can help with, which way of working fits, and what changes when data, tools, or other systems come into play.`,
  example:
    "For example: turn notes into a draft, find answers in your own material, or connect AI to an existing system.",
  primaryAction: { label: "What AI can help with", href: "/use-cases" },
  secondaryAction: { label: "Compare the ways of working", href: "/start" },

  entriesHeading: "Start with a question",
  entries: [
    { question: "Can I use AI at work?", href: "/start/employee" },
    {
      question: "How far does vibe coding take you?",
      href: "/start/vibe-coding",
    },
    {
      question: "How do I connect AI to tools and data?",
      href: "/data-flows/connect-ai-to-tools-and-data",
    },
  ],

  openHeading: "Developed in the open",
  openBody:
    "Changes are visible on GitHub. Where a claim can go out of date, the page names its source and the date it was last checked.",
  openAction: "The project on GitHub",
};

const de: HomeContent = {
  title: "AI Standard",
  description: getIdentity("de").summary,
  heading: "Was KI bei der Arbeit kann\u00A0— und wie du damit arbeitest",
  lead: `${getIdentity("de").identity} Sie zeigt an konkreten Aufgaben, wobei KI helfen kann, welche Arbeitsweise dazu passt und was sich ändert, sobald Daten, Tools oder andere Systeme ins Spiel kommen.`,
  example:
    "Zum Beispiel: aus Notizen einen Entwurf machen, Wissen in eigenen Unterlagen finden oder KI mit einem bestehenden System verbinden.",
  primaryAction: { label: "Wobei KI helfen kann", href: "/de/use-cases" },
  secondaryAction: { label: "Arbeitsweisen vergleichen", href: "/de/start" },

  entriesHeading: "Mit einer Frage starten",
  entries: [
    { question: "Darf ich KI im Job verwenden?", href: "/de/start/employee" },
    {
      question: "Wie weit trägt Vibe Coding?",
      href: "/de/start/vibe-coding",
    },
    {
      question: "Wie verbinde ich KI mit Tools und Daten?",
      href: "/de/data-flows/connect-ai-to-tools-and-data",
    },
  ],

  openHeading: "Offen entwickelt",
  openBody:
    "Änderungen sind auf GitHub nachvollziehbar. Wo eine Aussage veralten kann, stehen Quelle und Datum der letzten Prüfung dabei.",
  openAction: "Projekt auf GitHub",
};

export const getHome = (locale: SiteLocale): HomeContent =>
  locale === "de" ? de : en;
