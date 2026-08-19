/**
 * The six forms of working with an AI system.
 *
 * The hub answers "how do you want to work with AI?", so the entries are ways
 * of working rather than product categories. The same product supports several
 * of them; what separates them is how a person works with it and what it is
 * allowed to do.
 *
 * Chat and Assistant are separated by the shape of the collaboration, not by
 * what a product retains: in a chat the conversation is the work, while an
 * assistant is steered towards a deliverable and hands it back. Saved memory,
 * projects and uploaded reference files are product behaviour that changes
 * without notice, so they cannot carry the boundary.
 *
 * The order is not a sequence of stages. Every card carries the same three
 * fields in the same order, none is numbered or ranked, and what the human
 * owns is stated first in all six — it changes shape across the forms and
 * never shrinks.
 *
 * The last card has no path onward. Nothing on the site continues an automated
 * operation yet, and inventing a destination for grid symmetry would send a
 * reader somewhere that does not answer the question.
 */
import type { SiteLocale } from "../../i18n/ui";

interface CollaborationForm {
  name: string;
  /** Carries the boundary against the neighbouring forms; no separate field. */
  description: string;
  ownership: string;
  access: string;
  verification: string;
  /** Omitted where no current page continues this particular way of working. */
  path?: { label: string; href: string };
}

interface Invariant {
  title: string;
  detail: string;
}

export interface StartHubContent {
  title: string;
  description: string;
  heading: string;
  intro: string;
  note: string;
  bridge: string;
  bridgeLink: { label: string; href: string };
  formsHeading: string;
  ownershipLabel: string;
  accessLabel: string;
  verificationLabel: string;
  forms: CollaborationForm[];
  commonHeading: string;
  invariants: Invariant[];
  elsewhereHeading: string;
  elsewhere: { label: string; href: string }[];
}

const en: StartHubContent = {
  title: "How do you want to work with AI?",
  description:
    "Six ways of working with AI, from asking a question to something that runs without you. What stays yours, what the system can reach or do, and what to check in each.",
  heading: "How do you want to work with AI?",
  intro:
    "Six ways of working, from asking a question to something that runs without you. They are not stages and the last is not the goal. Which one fits depends on the task: how much you can decide in advance, what the system needs access to, and what you need to check afterwards.",
  note:
    "The same product can support several of these. The difference is how you work with it and what it is allowed to do.",
  bridge: "Not sure what you want AI to do yet? Start from the result.",
  bridgeLink: { label: "What are you trying to get done?", href: "/use-cases" },
  formsHeading: "Six ways of working",
  ownershipLabel: "What stays yours",
  accessLabel: "What it can reach or do",
  verificationLabel: "What to check",
  forms: [
    {
      name: "Chat",
      description:
        "The conversation is the work: you ask, supply what is needed, and judge the answer.",
      ownership: "What you put in, and whether the answer is true.",
      access: "What you send in this conversation, plus what the product adds around it.",
      verification: "The claim, against a source. Nothing has been changed yet.",
      path: {
        label: "What happens to what you send",
        href: "/data-flows/training-and-retention",
      },
    },
    {
      name: "Assistant",
      description:
        "You steer a deliverable over several rounds. It drafts and revises with you, then hands the result back.",
      ownership: "The result, and the subject knowledge to judge it.",
      access: "The material you handed it. It writes back to you, not into your files.",
      verification: "The work against the result you wanted, rather than turn by turn.",
      path: {
        label: "Which of your systems can be a knowledge source",
        href: "/data-flows/where-knowledge-lives",
      },
    },
    {
      name: "Workspace assistant",
      description:
        "It works on the originals inside a folder or repository. You decide which changes are accepted.",
      ownership: "Which changes are accepted. Nothing lands because it was suggested.",
      access: "The files in that place, and usually commands run there.",
      verification: "The change itself, and whatever proves the thing still works.",
      path: { label: "How far vibe coding takes you", href: "/start/vibe-coding" },
    },
    {
      name: "Tool-using system",
      description:
        "It uses an account you connected to look something up or carry out one operation in another system.",
      ownership: "Which operations are permitted, under which account, and the acceptance.",
      access:
        "That system, with exactly the permissions of the account or token you connected.",
      verification:
        "That the right operation ran with the right values, and the target system recorded it.",
      path: {
        label: "Connect AI to tools and data",
        href: "/data-flows/connect-ai-to-tools-and-data",
      },
    },
    {
      name: "Agent",
      description:
        "You give it a goal and the actions it may take. It chooses the steps and their order.",
      ownership: "The goal, the allowed actions, where it stops to ask, and the acceptance.",
      access: "Several tools and systems, in an order nobody wrote down beforehand.",
      verification:
        "What it did, not only what it produced: the record of the actions, and a way back.",
      path: {
        label: "Before you give an AI agent access",
        href: "/secure-setup/before-you-grant-access",
      },
    },
    {
      name: "Automated operation",
      description:
        "It runs on a schedule or on an event, and nobody watches every run.",
      ownership:
        "That it runs at all: who is called when it goes wrong, and what may change while it is live.",
      access:
        "Whatever it was given, on every run, including after the situation around it has changed.",
      verification:
        "Samples rather than every run, an alert when it fails, and a switch that stops it.",
    },
  ],
  commonHeading: "What every one of them has in common",
  invariants: [
    {
      title: "Something stays yours.",
      detail:
        "None of these hands over responsibility for the result. What you own changes shape; it does not disappear.",
    },
    {
      title: "It reaches what it was given.",
      detail:
        "Not the account you did not connect, not the folder you did not open. Access is granted, never assumed.",
    },
    {
      title: "Something has to be checked.",
      detail:
        "What changes is whether you are checking an answer, a change, or an action that has already happened.",
    },
  ],
  elsewhereHeading: "Three questions this page does not answer",
  elsewhere: [
    { label: "What is an AI tool doing when you use it?", href: "/start/what-it-is-doing" },
    { label: "Can I use AI at work?", href: "/start/employee" },
    { label: "I decide for others — where do I start?", href: "/start/decision-maker" },
  ],
};

const de: StartHubContent = {
  title: "Wie willst du mit KI arbeiten?",
  description:
    "Sechs Arbeitsweisen mit KI – von einer Frage bis zu einem Ablauf, der ohne dich startet. Was bei dir bleibt, worauf das System zugreift und was jeweils zu prüfen ist.",
  heading: "Wie willst du mit KI arbeiten?",
  intro:
    "Sechs Arbeitsweisen – von einer Frage bis zu einem Ablauf, der ohne dich startet. Das sind keine Stufen, und die letzte ist nicht das Ziel. Welche passt, entscheidet die Aufgabe: wie viel du vorher festlegen kannst, worauf das System zugreifen muss und was du anschließend prüfen musst.",
  note:
    "Dasselbe Produkt kann mehrere dieser Arbeitsweisen unterstützen. Der Unterschied liegt darin, wie du damit arbeitest und was es tun darf.",
  bridge: "Noch unklar, wofür du KI einsetzen willst? Fang beim Ergebnis an.",
  bridgeLink: { label: "Was willst du erreichen?", href: "/de/use-cases" },
  formsHeading: "Sechs Arbeitsweisen",
  ownershipLabel: "Was bei dir bleibt",
  accessLabel: "Worauf es zugreift und was es tun kann",
  verificationLabel: "Was du prüfst",
  forms: [
    {
      name: "Chat",
      description:
        "Das Gespräch ist die Arbeit: Du fragst, lieferst das Nötige und beurteilst die Antwort.",
      ownership: "Was du hineingibst – und ob die Antwort stimmt.",
      access: "Was du in diesem Gespräch schickst, dazu das, was das Produkt drumherum ergänzt.",
      verification: "Die Aussage gegen eine Quelle. Verändert wurde noch nichts.",
      path: {
        label: "Was mit deiner Eingabe geschieht",
        href: "/de/data-flows/training-and-retention",
      },
    },
    {
      name: "Assistent",
      description:
        "Du steuerst ein Ergebnis über mehrere Runden. Er entwirft und überarbeitet mit dir und gibt das Ergebnis zurück.",
      ownership: "Das Ergebnis – und das Fachwissen, um es zu beurteilen.",
      access: "Das Material, das du ihm gegeben hast. Er schreibt an dich zurück, nicht in deine Dateien.",
      verification: "Die Arbeit gegen das Ergebnis, das du wolltest, statt Runde für Runde.",
      path: {
        label: "Welche deiner Systeme als Wissensquelle taugen",
        href: "/de/data-flows/where-knowledge-lives",
      },
    },
    {
      name: "Workspace-Assistent",
      description:
        "Er arbeitet an den Originalen in einem Ordner oder Repository. Du entscheidest, welche Änderungen übernommen werden.",
      ownership: "Welche Änderungen übernommen werden. Nichts landet dort, nur weil es vorgeschlagen wurde.",
      access: "Die Dateien an diesem Ort – und meist Befehle, die dort laufen.",
      verification: "Die Änderung selbst, dazu das, was belegt, dass alles weiter funktioniert.",
      path: { label: "Wie weit Vibe Coding trägt", href: "/de/start/vibe-coding" },
    },
    {
      name: "Tool-nutzendes System",
      description:
        "Es nutzt ein Konto, das du verbunden hast, um in einem anderen System nachzusehen oder einen Vorgang auszuführen.",
      ownership: "Welche Vorgänge erlaubt sind, unter welchem Konto – und die Abnahme.",
      access: "Dieses System, genau mit den Rechten des Kontos oder Tokens, das du verbunden hast.",
      verification:
        "Ob der richtige Vorgang mit den richtigen Werten lief und ob das Zielsystem ihn protokolliert hat.",
      path: {
        label: "KI mit Tools und Daten verbinden",
        href: "/de/data-flows/connect-ai-to-tools-and-data",
      },
    },
    {
      name: "Agent",
      description:
        "Du gibst ihm ein Ziel und die erlaubten Handlungen. Die Schritte und ihre Reihenfolge wählt er selbst.",
      ownership: "Das Ziel, die erlaubten Handlungen, die Stellen zum Innehalten und die Abnahme.",
      access: "Mehrere Tools und Systeme, in einer Reihenfolge, die vorher niemand aufgeschrieben hat.",
      verification:
        "Was er getan hat, nicht nur was dabei herauskam: die Aufzeichnung der Handlungen und einen Weg zurück.",
      path: {
        label: "Bevor ein KI-Agent auf Dateien und Systeme zugreift",
        href: "/de/secure-setup/before-you-grant-access",
      },
    },
    {
      name: "Automatisierter Ablauf",
      description:
        "Er startet nach Zeitplan oder auf ein Ereignis hin, und niemand sieht jedem Lauf zu.",
      ownership:
        "Dass er überhaupt läuft: wer gerufen wird, wenn etwas schiefgeht, und was im laufenden Betrieb geändert werden darf.",
      access:
        "Was du ihm gegeben hast – bei jedem Lauf, auch nachdem sich die Lage drumherum geändert hat.",
      verification:
        "Nicht jeden Lauf, sondern Stichproben – dazu eine Meldung im Fehlerfall und einen Schalter, der ihn anhält.",
    },
  ],
  commonHeading: "Was für alle sechs gilt",
  invariants: [
    {
      title: "Etwas bleibt bei dir.",
      detail:
        "Keine dieser Arbeitsweisen übernimmt die Verantwortung für das Ergebnis. Was bei dir bleibt, ändert die Form – es verschwindet nicht.",
    },
    {
      title: "Es erreicht das, was du ihm gegeben hast.",
      detail:
        "Nicht das Konto, das du nicht verbunden hast, nicht den Ordner, den du nicht geöffnet hast. Zugriff wird erteilt, nicht vorausgesetzt.",
    },
    {
      title: "Etwas muss geprüft werden.",
      detail:
        "Es ändert sich nur, ob du eine Antwort prüfst, eine Änderung oder eine Handlung, die schon passiert ist.",
    },
  ],
  elsewhereHeading: "Drei Fragen, die diese Seite nicht beantwortet",
  elsewhere: [
    { label: "Was tut ein KI-Tool, während du es benutzt?", href: "/de/start/what-it-is-doing" },
    { label: "Darf ich KI im Job verwenden?", href: "/de/start/employee" },
    {
      label: "Ich bin für den KI-Einsatz verantwortlich — wo fange ich an?",
      href: "/de/start/decision-maker",
    },
  ],
};

export const getStartHub = (locale: SiteLocale): StartHubContent =>
  locale === "de" ? de : en;
