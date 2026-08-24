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
 * page that answers it — `/start/employee` is titled "Darf ich KI im Job
 * verwenden?" word for word. That is why they carry no supporting line: the
 * link already promises exactly what the destination delivers. They are not a
 * fifth copy of the four journeys and must not grow into one.
 */
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
  description:
    "Independent guidance for using AI at work, with practical examples, clear explanations, and sources you can inspect.",
  heading: "Use AI well at work",
  lead: "AI Standard is an independent site for using AI at work. It starts from the task at hand and shows where AI is useful, how to work with it, and what to pay attention to.",
  primaryAction: { label: "See the use cases", href: "/use-cases" },
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
    "Changes are visible on GitHub. Claims that can change include their source and the date they were last checked.",
  openAction: "The project on GitHub",
};

const de: HomeContent = {
  title: "AI Standard",
  description:
    "Unabhängige Orientierung für den Einsatz von KI bei der Arbeit – mit konkreten Aufgaben, verständlichen Erklärungen und nachvollziehbaren Quellen.",
  heading: "KI sinnvoll im Arbeitsalltag einsetzen",
  lead: "AI Standard ist eine unabhängige Seite für den Einsatz von KI bei der Arbeit. An konkreten Aufgaben zeigt sie, wofür sich KI eignet, wie du damit arbeitest und worauf du dabei achten solltest.",
  primaryAction: { label: "Einsatzmöglichkeiten ansehen", href: "/de/use-cases" },
  secondaryAction: { label: "Arbeitsweisen vergleichen", href: "/de/start" },

  entriesHeading: "Direkt einsteigen",
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
    "Änderungen sind auf GitHub nachvollziehbar. Bei Angaben, die sich ändern können, stehen Quelle und Datum der letzten Prüfung dabei.",
  openAction: "Projekt auf GitHub",
};

export const getHome = (locale: SiteLocale): HomeContent =>
  locale === "de" ? de : en;
