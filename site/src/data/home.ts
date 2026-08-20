/**
 * The homepage: the whole product in one screen, then the way in.
 *
 * It used to open on where your data goes and offer three doors into data, law
 * and settings. That is the third quarter of the story — the content audit said
 * so — and it left the two journeys the product opens with, what AI is for and
 * how much the system should do, unreachable from the front page.
 *
 * The four questions here name each journey and give one thing that
 * distinguishes it. They deliberately do not reproduce the hub models: six
 * outcomes, six ways of working, four capabilities and six steps belong to
 * their hubs, and repeating them here would make the homepage a fifth copy that
 * drifts.
 *
 * The security-desk voice stays. It is what the site argues from, and the
 * stance paragraph is kept word for word; what changed is what the page leads
 * with, not the position it takes.
 */
import type { SiteLocale } from "../i18n/ui";

interface Question {
  heading: string;
  body: string;
  link: { label: string; href: string };
}

export interface HomeContent {
  title: string;
  description: string;
  heading: string;
  lead: string;
  stance: string;
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
  questionsHeading: string;
  questions: Question[];
  trustHeading: string;
  trustBody: string;
  trustLink: { href: string };
  repoHeading: string;
  repoBody: string;
  repoDocsLink: string;
  repoExternalLink: string;
  glossaryAside: string;
}

const en: HomeContent = {
  title: "AI Standard",
  description:
    "What AI is good for at work, how much the system should do, what it can get to, and how you check the result. Written from a security desk, with sources and check dates.",
  heading: "Do real work with AI, and still be able to explain it afterwards.",
  lead: "Written from a security desk, and organised around four questions rather than four topics: what AI is good for here, how much the system should do, what it can get to and do, and how you check what came back.",
  stance:
    "The answers are not always the comfortable ones. “EU-hosted” is not the same as “safer” — a small team sharing admin rights, without an ISMS or an audit trail, can expose you more than a large provider where you are one anonymous number among millions.",
  primaryAction: { label: "Where AI fits", href: "/use-cases" },
  secondaryAction: { label: "Ways of working", href: "/start" },

  questionsHeading: "Four questions, in the order they come up",
  questions: [
    {
      heading: "What can AI help you get done?",
      body: "Six kinds of work, from turning the notes of a meeting into the email a customer gets, to deciding that this one is faster without AI. Each says where it stops.",
      link: { label: "Where AI fits", href: "/use-cases" },
    },
    {
      heading: "How much should the system do?",
      body: "Six ways of working, from asking a question to something that runs without you. They are not stages, and the last one is not the goal.",
      link: { label: "Ways of working", href: "/start" },
    },
    {
      heading: "What can it get to, and what can it do?",
      body: "Reading something is not keeping it, keeping a copy is not being able to change the original, and changing one record is not permission to start the next.",
      link: { label: "Access & actions", href: "/data-flows" },
    },
    {
      heading: "How do you make that hold, and check the result?",
      body: "Six steps: decide, configure, verify, record, monitor, take it back. Which of them a task needs follows from what a mistake would cost, not from the tool.",
      link: { label: "Secure & verify", href: "/secure-setup" },
    },
  ],

  trustHeading: "How to read this site",
  trustBody:
    "Every section says what kind of claim it is making, and claims about the outside world carry a source and the date they were checked. Vendor defaults change without notice, so a claim without a date is worth less than one with it.",
  trustLink: { href: "/glossary/evidence-method" },

  repoHeading: "There is a repository underneath this",
  repoBody:
    "The site is built directly from a public repository, so anything here can be read at its source, copied or adopted. If you do not write software, nothing on this site requires it.",
  repoDocsLink: "Read the source documents",
  repoExternalLink: "The repository on GitHub",
  glossaryAside:
    "Terms are explained as they come up. If you need to look one up on its own, the glossary is in the footer of every page.",
};

const de: HomeContent = {
  title: "AI Standard",
  description:
    "Wofür KI im Arbeitsalltag taugt, wie viel das System übernehmen soll, worauf es zugreifen kann und wie du das Ergebnis prüfst. Aus der Security-Praxis, mit Quellen und Prüfdaten.",
  heading: "Mit KI echte Arbeit erledigen — und sie hinterher noch erklären können.",
  lead: "Geschrieben aus der Security-Praxis und entlang von vier Fragen aufgebaut, nicht entlang von Themen: wofür KI hier taugt, wie viel das System übernehmen soll, worauf es zugreifen und was es tun kann, und wie du prüfst, was zurückkommt.",
  stance:
    "Die Antworten sind nicht immer die bequemen. „In der EU gehostet“ heißt nicht „sicherer“ — ein kleines Team, das sich Admin-Rechte teilt, ohne ISMS und ohne Nachvollziehbarkeit, kann dich stärker exponieren als ein großer Anbieter, bei dem du eine anonyme Nummer unter Millionen bist.",
  primaryAction: { label: "Wo KI sinnvoll ist", href: "/de/use-cases" },
  secondaryAction: { label: "Arbeitsweisen", href: "/de/start" },

  questionsHeading: "Vier Fragen, in der Reihenfolge, in der sie auftauchen",
  questions: [
    {
      heading: "Wofür kann KI dir helfen?",
      body: "Sechs Arten von Arbeit — von den Stichpunkten einer Besprechung zur E-Mail, die der Kunde bekommt, bis zu der Entscheidung, dass es diesmal ohne schneller geht. Bei jeder steht, wo sie aufhört.",
      link: { label: "Wo KI sinnvoll ist", href: "/de/use-cases" },
    },
    {
      heading: "Wie viel soll das System übernehmen?",
      body: "Sechs Arbeitsweisen — von einer Frage bis zu einem Ablauf, der ohne dich startet. Das sind keine Stufen, und die letzte ist nicht das Ziel.",
      link: { label: "Arbeitsweisen", href: "/de/start" },
    },
    {
      heading: "Worauf kann es zugreifen, und was kann es tun?",
      body: "Etwas lesen zu können heißt nicht, es zu behalten; eine Kopie zu behalten heißt nicht, das Original ändern zu können; und einen Datensatz zu ändern heißt nicht, dass die nächste Handlung starten darf.",
      link: { label: "Zugriff & Aktionen", href: "/de/data-flows" },
    },
    {
      heading: "Wie sorgst du dafür, dass das hält — und wie prüfst du das Ergebnis?",
      body: "Sechs Schritte: festlegen, einrichten, prüfen, festhalten, beobachten, zurücknehmen. Welche davon eine Aufgabe braucht, ergibt sich daraus, was ein Fehler kosten würde, nicht aus dem Tool.",
      link: { label: "Absichern & prüfen", href: "/de/secure-setup" },
    },
  ],

  trustHeading: "Wie diese Seite zu lesen ist",
  trustBody:
    "Jeder Abschnitt sagt, welche Art von Aussage er macht, und Aussagen über die Außenwelt tragen eine Quelle und das Datum ihrer Prüfung. Voreinstellungen der Anbieter ändern sich ohne Ankündigung — eine Aussage ohne Datum ist deshalb weniger wert als eine mit.",
  trustLink: { href: "/de/glossary/evidence-method" },

  repoHeading: "Darunter liegt ein Repository",
  repoBody:
    "Die Seite wird direkt aus einem öffentlichen Repository gebaut. Alles hier lässt sich also an der Quelle nachlesen, kopieren oder übernehmen. Wer keine Software schreibt, braucht davon nichts.",
  repoDocsLink: "Die Quelldokumente lesen",
  repoExternalLink: "Das Repository auf GitHub",
  glossaryAside:
    "Begriffe werden dort erklärt, wo sie vorkommen. Wenn du einen einzeln nachschlagen willst: Das Glossar steht im Footer jeder Seite.",
};

export const getHome = (locale: SiteLocale): HomeContent =>
  locale === "de" ? de : en;
