/**
 * The six ways of working with an AI system.
 *
 * The hub answers "how do you want to work with AI?", so each entry is named
 * for the situation a reader would recognise rather than for a product
 * category. The six distinctions are unchanged; what changed is that they are
 * no longer labelled with this project's internal collaboration model — Chat,
 * Assistant, Workspace assistant, Tool-using system, Agent, Automated
 * operation — which was the "Forms of collaboration" table in
 * `docs/website-product-brief.md` reproduced verbatim as the page's spine.
 * Those words still appear where a reader would use them, in a destination
 * label or inside an explanation, and no longer as the visible taxonomy.
 *
 * Card 1 and card 2 are separated by the shape of the work, not by what a
 * product retains: in the first the conversation is the work, in the second a
 * deliverable is steered and handed back. Saved memory, projects and uploaded
 * reference files are product behaviour that changes without notice, so they
 * cannot carry the boundary.
 *
 * Each card carries what it is good for and one clause of what stays the
 * reader's — nothing else. The two fields the cards used to carry, "what it
 * can reach or do" and "what to check", are owned by `/data-flows` and
 * `/secure-setup`; repeating six abbreviated versions here taught a governance
 * matrix instead of helping anyone choose. Where reach actually separates two
 * of the six it stays, inside the sentence that draws the distinction.
 *
 * The order is not a sequence of stages, and something stays the reader's in
 * all six. That claim belongs to the page rather than to each card, which is
 * what the invariants below say once.
 *
 * The prerequisite questions come before the choice. Whether a reader may use
 * AI at work, and where someone responsible for other people's use should
 * start, are not two of the six ways of working — they are what has to be
 * settled before choosing one is worth doing.
 *
 * The last card went without a path onward while nothing on the site continued
 * an automated operation. `/secure-setup` now does: its `Once it is set up`
 * block answers what changes when something runs unwatched, routes the parts
 * that have owners, and says plainly that noticing a failure as it happens is
 * not covered here. That is an honest destination rather than one invented for
 * grid symmetry, so the card points at it.
 */
import type { SiteLocale } from "../../i18n/ui";

interface WorkingForm {
  /** The situation a reader recognises, not a product category. */
  name: string;
  /** Draws the boundary against the neighbouring forms; carries reach only
   *  where reach is what separates them. */
  description: string;
  /** What useful work this shape of working enables. */
  goodFor: string;
  /** One clause. What stays the reader's changes shape here; it never goes. */
  ownership: string;
  /** Omitted where no current page continues this particular way of working. */
  path?: { label: string; href: string };
}

interface Prerequisite {
  question: string;
  href: string;
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
  bridge: string;
  bridgeLink: { label: string; href: string };
  prerequisiteHeading: string;
  prerequisites: Prerequisite[];
  formsHeading: string;
  goodForLabel: string;
  ownershipLabel: string;
  forms: WorkingForm[];
  commonHeading: string;
  invariants: Invariant[];
}

const en: StartHubContent = {
  title: "How do you want to work with AI?",
  description:
    "Six ways of working with AI, from asking a question to something that starts without you. What each one is good for, and what stays yours in every one of them.",
  heading: "How do you want to work with AI?",
  intro:
    "The ways below differ in how much of the work you hand over — from asking a question to something that starts without you.",
  bridge:
    "One product can support several of them. Not sure yet what you want AI to do?",
  bridgeLink: { label: "What are you trying to get done?", href: "/use-cases" },

  prerequisiteHeading: "Before you choose a way of working",
  prerequisites: [
    { question: "Can I use AI at work?", href: "/start/employee" },
    {
      question: "I am responsible for AI use by others — where do I start?",
      href: "/start/decision-maker",
    },
  ],

  formsHeading: "Ways of working",
  goodForLabel: "Good for",
  ownershipLabel: "What stays yours",
  forms: [
    {
      name: "Ask a question",
      description:
        "The conversation is the work: you ask, supply what is needed, and judge the answer. Nothing outside it changes.",
      goodFor:
        "Understanding something, checking a claim, or thinking a problem through before you commit to it.",
      ownership: "Whether the answer is true.",
      path: {
        label: "What happens to what you send",
        href: "/data-flows/training-and-retention",
      },
    },
    {
      name: "Work on a draft together",
      description:
        "You steer a deliverable over several rounds. It drafts and revises with you and hands the result back to you, not into your files.",
      goodFor:
        "Getting a real draft of something you have to hand in — a text, an analysis, a structure — and improving it round by round.",
      ownership: "The result, and the subject knowledge to judge it.",
      path: {
        label: "Which of your systems can be a knowledge source",
        href: "/data-flows/where-knowledge-lives",
      },
    },
    {
      name: "Let it work in your files",
      description:
        "It works on the originals in a folder or repository. Nothing lands there because it was suggested — you decide which changes are accepted.",
      goodFor:
        "Changing a set of files that already exist: a codebase, a folder of notes, a set of documents.",
      ownership: "Which changes are accepted.",
      path: { label: "How far vibe coding takes you", href: "/start/vibe-coding" },
    },
    {
      name: "Let it work in another system",
      description:
        "It reaches into a system you already use — to look something up there, or to carry out one operation.",
      goodFor:
        "Getting an answer out of a system you already use, or carrying out one operation there without switching windows.",
      ownership: "Which operations it may carry out, and whether to use the result.",
      path: {
        label: "Connect AI to tools and data",
        href: "/data-flows/connect-ai-to-tools-and-data",
      },
    },
    {
      name: "Give it a goal and let it choose the steps",
      description:
        "You set the goal and the actions it may take. Which steps it takes, and in what order, it decides itself.",
      goodFor:
        "Work whose steps you cannot list in advance — finding out where something went wrong, or pulling one result out of several systems.",
      ownership: "The goal, the allowed actions, and where it stops to ask.",
      path: {
        label: "Before you give an AI agent access",
        href: "/secure-setup/before-you-grant-access",
      },
    },
    {
      name: "Let it run without you",
      description:
        "It starts on a schedule or on an event, and nobody watches every run.",
      goodFor:
        "Work that repeats on a schedule or on an event and is not worth a person's attention each time.",
      ownership:
        "That it runs at all: who is called when it goes wrong, and what may change while it is live.",
      path: {
        label: "How do you set limits that hold — and check what happened?",
        href: "/secure-setup",
      },
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
        "Not an account that was never connected, not a folder that was never opened. Access is granted — by you or for you — never assumed.",
    },
    {
      title: "Something has to be checked.",
      detail:
        "What changes is whether you are checking an answer, a change, or an action that has already happened.",
    },
  ],
};

const de: StartHubContent = {
  title: "Wie willst du mit KI arbeiten?",
  description:
    "Sechs Arbeitsweisen mit KI – von einer einzelnen Frage bis zu einem Ablauf, der ohne dich startet. Wofür sich jede eignet und was bei dir bleibt.",
  heading: "Wie willst du mit KI arbeiten?",
  intro:
    "Die Arbeitsweisen unten unterscheiden sich darin, wie viel Arbeit du abgibst — von einer einzelnen Frage bis zu einem Ablauf, der ohne dich startet.",
  bridge:
    "Ein Produkt kann mehrere davon unterstützen. Noch unklar, wofür du KI einsetzen willst?",
  bridgeLink: { label: "Was willst du erreichen?", href: "/de/use-cases" },

  prerequisiteHeading: "Bevor du eine Arbeitsweise wählst",
  prerequisites: [
    { question: "Darf ich KI im Job verwenden?", href: "/de/start/employee" },
    {
      question: "Ich bin für den KI-Einsatz verantwortlich — wo fange ich an?",
      href: "/de/start/decision-maker",
    },
  ],

  formsHeading: "Arbeitsweisen",
  goodForLabel: "Gut für",
  ownershipLabel: "Was bei dir bleibt",
  forms: [
    {
      name: "Etwas fragen",
      description:
        "Das Gespräch ist die Arbeit: Du fragst, lieferst das Nötige und beurteilst die Antwort. Außerhalb davon ändert sich nichts.",
      goodFor:
        "Etwas verstehen, eine Behauptung prüfen oder ein Problem durchdenken, bevor du dich festlegst.",
      ownership: "Ob die Antwort stimmt.",
      path: {
        label: "Was mit deiner Eingabe geschieht",
        href: "/de/data-flows/training-and-retention",
      },
    },
    {
      name: "Gemeinsam an einem Entwurf arbeiten",
      description:
        "Du steuerst ein Ergebnis über mehrere Runden. Entworfen und überarbeitet wird gemeinsam, zurück kommt das Ergebnis — nicht eine Änderung in deinen Dateien.",
      goodFor:
        "Einen belastbaren Entwurf für etwas, das du abgeben musst: einen Text, eine Analyse, eine Gliederung — Runde für Runde besser.",
      ownership: "Das Ergebnis — und das Fachwissen, um es zu beurteilen.",
      path: {
        label: "Welche deiner Systeme als Wissensquelle taugen",
        href: "/de/data-flows/where-knowledge-lives",
      },
    },
    {
      name: "In deinen Dateien arbeiten lassen",
      description:
        "Gearbeitet wird an den Originalen in einem Ordner oder Repository. Nichts landet dort, nur weil es vorgeschlagen wurde — du entscheidest, was übernommen wird.",
      goodFor:
        "Einen vorhandenen Satz Dateien ändern: eine Codebasis, einen Ordner Notizen, eine Sammlung Dokumente.",
      ownership: "Welche Änderungen übernommen werden.",
      path: { label: "Wie weit Vibe Coding trägt", href: "/de/start/vibe-coding" },
    },
    {
      name: "In einem anderen System arbeiten lassen",
      description:
        "Es greift in ein System, das du ohnehin nutzt — um dort nachzusehen oder einen einzelnen Vorgang auszuführen.",
      goodFor:
        "Eine Auskunft aus einem System holen, das du ohnehin nutzt, oder dort einen Vorgang ausführen, ohne das Fenster zu wechseln.",
      ownership: "Welche Vorgänge es ausführen darf — und ob du das Ergebnis übernimmst.",
      path: {
        label: "KI mit Tools und Daten verbinden",
        href: "/de/data-flows/connect-ai-to-tools-and-data",
      },
    },
    {
      name: "Ein Ziel vorgeben, die Schritte überlassen",
      description:
        "Du gibst das Ziel vor und die Handlungen, die erlaubt sind. Welche Schritte es geht und in welcher Reihenfolge, entscheidet es selbst.",
      goodFor:
        "Arbeit, deren Schritte du vorher nicht aufzählen kannst: herausfinden, wo etwas schiefgegangen ist, oder ein Ergebnis aus mehreren Systemen zusammentragen.",
      ownership: "Das Ziel, die erlaubten Handlungen und die Stellen, an denen es innehält und fragt.",
      path: {
        label: "Bevor ein KI-Agent auf Dateien und Systeme zugreift",
        href: "/de/secure-setup/before-you-grant-access",
      },
    },
    {
      name: "Ohne dich laufen lassen",
      description:
        "Der Ablauf startet nach Zeitplan oder auf ein Ereignis hin, und niemand sieht jedem Lauf zu.",
      goodFor:
        "Arbeit, die sich nach Zeitplan oder auf ein Ereignis hin wiederholt und nicht jedes Mal die Zeit eines Menschen kosten sollte.",
      ownership:
        "Dass er überhaupt läuft: wer gerufen wird, wenn etwas schiefgeht, und was im laufenden Betrieb geändert werden darf.",
      path: {
        label: "Wie setzt du Grenzen, die halten — und prüfst, was passiert ist?",
        href: "/de/secure-setup",
      },
    },
  ],

  commonHeading: "Was für alle gilt",
  invariants: [
    {
      title: "Etwas bleibt bei dir.",
      detail:
        "Keine dieser Arbeitsweisen übernimmt die Verantwortung für das Ergebnis. Was bei dir bleibt, wechselt die Form — es verschwindet nicht.",
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
};

export const getStartHub = (locale: SiteLocale): StartHubContent =>
  locale === "de" ? de : en;
