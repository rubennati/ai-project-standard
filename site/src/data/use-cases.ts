/**
 * The outcome map.
 *
 * The hub answers "what are you trying to get done?", so the entries are kinds
 * of work rather than products, features or artifacts. Each card carries the
 * three things a reader needs to choose between them — a concrete example, the
 * limit that matters, and where the decision continues — and nothing else.
 *
 * The order is deliberately not a ramp of increasing capability: deciding
 * against AI sits sixth as an ordinary outcome, and the software and
 * automation entries follow it rather than crowning the set.
 *
 * Card six has no path onward. No page on the site continues "I decided not to
 * use AI for this task", and inventing one to make the grid symmetrical would
 * send a reader somewhere that does not answer their question.
 */
import type { SiteLocale } from "../i18n/ui";

interface Outcome {
  label: string;
  example: string;
  limit: string;
  /** Omitted where no current page continues this particular decision. */
  path?: { label: string; href: string };
}

export interface UseCasesContent {
  title: string;
  description: string;
  heading: string;
  intro: string;
  exampleLabel: string;
  limitLabel: string;
  outcomes: Outcome[];
}

const en: UseCasesContent = {
  title: "What are you trying to get done?",
  description:
    "Six kinds of work, what AI can do for each of them, and where it stops. Deciding to do something without AI is one of the answers.",
  heading: "What are you trying to get done?",
  intro:
    "Start from the result you want, not from a product. Pick the one closest to your work: each says what AI can do there and where it stops. Sometimes the answer is to do it without AI.",
  exampleLabel: "For example",
  limitLabel: "Where it stops",
  outcomes: [
    {
      label: "Write, rewrite and explain",
      example:
        "Turn the bullet points from a meeting into the email the customer gets.",
      limit:
        "It does not know whether the claim underneath is true, and it will write it just as fluently either way.",
      path: { label: "What you may put in", href: "/law/what-may-go-in" },
    },
    {
      label: "Research and decide",
      example:
        "Pull the terms out of three published offers and lay the trade-offs side by side.",
      limit: "It cannot show you what it did not read.",
      path: {
        label: "Do you need a different tool — or a better setup?",
        href: "/start/what-it-is-doing",
      },
    },
    {
      label: "Work with what your organisation knows",
      example:
        "Ask your own contracts, tickets or handbook a question instead of opening each one.",
      limit:
        "It answers from what it was given, whether or not that is current, and it will not tell you which parts are out of date.",
      path: {
        label: "Which of your systems can be a knowledge source",
        href: "/data-flows/where-knowledge-lives",
      },
    },
    {
      label: "Build and maintain software",
      example:
        "Get from an idea to something running, and leave it so someone else can read and change it.",
      limit:
        "It will produce more code than you have read, and the part you skipped is still yours to maintain.",
      path: {
        label: "How far vibe coding takes you",
        href: "/start/vibe-coding",
      },
    },
    {
      label: "Connect tools and automate work",
      example:
        "Let an incoming invoice be filed in your accounting system without you opening either one.",
      limit: "Every system you connect is one more place a mistake can land.",
      path: {
        label: "Connect AI to tools and data",
        href: "/data-flows/connect-ai-to-tools-and-data",
      },
    },
    {
      label: "Decide not to use AI",
      example:
        "A two-line reply to a client whose file you know by heart — briefing the model takes longer than writing it.",
      limit:
        "This is a decision about one task, not a position. When the task changes, you make it again.",
    },
  ],
};

const de: UseCasesContent = {
  title: "Was willst du erreichen?",
  description:
    "Sechs Arten von Arbeit, was KI dabei leisten kann und wo sie aufhört. Etwas ohne KI zu erledigen ist eine der Antworten.",
  heading: "Was willst du erreichen?",
  intro:
    "Fang beim Ergebnis an, nicht beim Produkt. Nimm das, was deiner Arbeit am nächsten kommt: Dort steht, was KI dafür leisten kann und wo sie nicht mehr weiterhilft. Manchmal lautet die Antwort: ohne KI.",
  exampleLabel: "Zum Beispiel",
  limitLabel: "Wo es aufhört",
  outcomes: [
    {
      label: "Schreiben, überarbeiten und erklären",
      example:
        "Aus den Stichpunkten einer Besprechung die E-Mail machen, die der Kunde am Ende bekommt.",
      limit:
        "Ob die Behauptung darunter stimmt, weiß sie nicht — sie formuliert sie so oder so flüssig.",
      path: { label: "Was hinein darf", href: "/de/law/what-may-go-in" },
    },
    {
      label: "Recherchieren und entscheiden",
      example:
        "Aus drei veröffentlichten Angeboten die Bedingungen herausziehen und nebeneinanderlegen.",
      limit: "Was sie nicht gelesen hat, kann sie dir nicht zeigen.",
      path: {
        label: "Brauchst du ein anderes Tool – oder ein besseres Setup?",
        href: "/de/start/what-it-is-doing",
      },
    },
    {
      label: "Mit dem Wissen deiner Organisation arbeiten",
      example:
        "Deine Verträge, Tickets oder das Handbuch etwas fragen, statt jede Datei einzeln zu öffnen.",
      limit:
        "Sie antwortet aus dem, was sie bekommen hat — egal wie aktuell das ist. Was davon veraltet ist, sagt sie dir nicht.",
      path: {
        label: "Welche deiner Systeme als Wissensquelle taugen",
        href: "/de/data-flows/where-knowledge-lives",
      },
    },
    {
      label: "Software entwickeln und pflegen",
      example:
        "Von der Idee zu etwas Lauffähigem — und so hinterlassen, dass jemand anderes es lesen und ändern kann.",
      limit:
        "Sie liefert mehr Code, als du gelesen hast. Was du übersprungen hast, musst du trotzdem pflegen.",
      path: {
        label: "Wie weit Vibe Coding trägt",
        href: "/de/start/vibe-coding",
      },
    },
    {
      label: "Tools verbinden und Abläufe automatisieren",
      example:
        "Eine eingehende Rechnung in der Buchhaltung ablegen lassen, ohne dass du beide Programme öffnest.",
      limit:
        "Jedes System, das du anschließt, ist eine Stelle mehr, an der ein Fehler ankommt.",
      path: {
        label: "KI mit Tools und Daten verbinden",
        href: "/de/data-flows/connect-ai-to-tools-and-data",
      },
    },
    {
      label: "Dich gegen KI entscheiden",
      example:
        "Eine Zwei-Zeilen-Antwort an einen Kunden, dessen Akte du auswendig kennst — das Briefing dauert länger als das Schreiben.",
      limit:
        "Das gilt für diese eine Aufgabe, nicht als Haltung. Ändert sich die Aufgabe, entscheidest du neu.",
    },
  ],
};

export const getUseCases = (locale: SiteLocale): UseCasesContent =>
  locale === "de" ? de : en;
