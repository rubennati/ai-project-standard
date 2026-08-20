/**
 * What an AI setup can get to, and what it can do there.
 *
 * The hub answers "what can it access, and what can it do?", so the entries are
 * capabilities rather than subject areas. The four are deliberately separate:
 * reading something is not keeping it, keeping a copy is not being able to
 * change the original, and changing one record is not permission to start the
 * next action. Each is granted on its own, and the hub says so before the cards
 * rather than leaving a reader to infer it.
 *
 * The four system layers come after the capabilities, not before. They are
 * explanatory depth for where access comes from — a sentence like "the model
 * can read my files" names one thing and describes four — and the page links to
 * the connect path rather than restating it. Architecture is not the product.
 *
 * The article family below is unchanged. Every dated vendor claim, source and
 * check date stays on the page that owns it; this hub only routes to them.
 */
import type { SiteLocale } from "../../i18n/ui";

interface Capability {
  name: string;
  body: string;
  paths: { label: string; href: string }[];
}

interface SystemLayer {
  label: string;
  role: string;
  boundary: string;
}

export interface ReachModelContent {
  title: string;
  description: string;
  heading: string;
  intro: string;
  note: string;
  capabilitiesHeading: string;
  capabilities: Capability[];
  layersHeading: string;
  layersLead: string;
  layers: SystemLayer[];
  layersCaption: string;
  layersPath: { label: string; href: string };
}

const en: ReachModelContent = {
  title: "What can it access, and what can it do?",
  description:
    "Four things worth separating when an AI system is connected to something: what it can read, what stays stored, what it can change, and what it can set off.",
  heading: "What can it access, and what can it do?",
  intro:
    "Four things are worth separating: what a system can read, what stays stored afterwards, what it can change, and what it can set off elsewhere. Which of them apply depends on the account you are signed into and on what you connected — not on which product you chose.",
  note:
    "The four are independent of each other. Being able to read your mailbox does not mean anything is kept; keeping a copy does not mean the original can be touched; changing one record does not mean the next action can be started. Each is granted on its own.",
  capabilitiesHeading: "Four things worth separating",
  capabilities: [
    {
      name: "What it can read",
      body:
        "Which of your material is handed to it, and which systems it was pointed at. Being able to read something is not the same as keeping it.",
      paths: [
        {
          label: "Which of your systems can be a knowledge source",
          href: "/data-flows/where-knowledge-lives",
        },
        {
          label: "Where your data is, and who can reach it",
          href: "/data-flows/data-sovereignty",
        },
      ],
    },
    {
      name: "What stays stored afterwards",
      body:
        "What remains once the conversation ends, for how long, and under which plan. A kept copy says nothing about whether the original can be touched.",
      paths: [
        {
          label: "Are your chats used for model training?",
          href: "/data-flows/training-and-retention",
        },
        {
          label: "What changes when you allow model training",
          href: "/data-flows/what-you-agree-to",
        },
        {
          label: "Deleting chats and data: what goes and what stays",
          href: "/data-flows/getting-it-back-out",
        },
      ],
    },
    {
      name: "What it can change",
      body:
        "Whether it can write back to a file, a record or a ticket, or only hand you a result. Changing one thing is not permission to start the next.",
      paths: [
        {
          label: "Connect AI to tools and data",
          href: "/data-flows/connect-ai-to-tools-and-data",
        },
      ],
    },
    {
      name: "What it can set off",
      body:
        "Whether one action leads to further actions, and who is watching when it does. This is the part that keeps running after you close the window.",
      paths: [
        {
          label: "Before you give an AI agent access",
          href: "/secure-setup/before-you-grant-access",
        },
      ],
    },
  ],
  layersHeading: "Where the access comes from",
  layersLead:
    "A sentence like “the model can read my files” names one thing and describes four. Each of them is a separate decision, and only the last one grants anything.",
  layers: [
    {
      label: "The model",
      role: "Computes on the text it is handed. It has no connection to your disk, your mail or any other system.",
      boundary: "On its own: nothing",
    },
    {
      label: "The product you use",
      role: "Decides what to hand over: the conversation, an uploaded file, a search result, a saved note.",
      boundary: "What you sent, and what it stores",
    },
    {
      label: "A connector or integration",
      role: "Turns a request into a call on another system, using a credential someone connected.",
      boundary: "Which operations it offers",
    },
    {
      label: "The target system",
      role: "Decides what that account may read, change or start.",
      boundary: "The account and its permissions",
    },
  ],
  layersCaption:
    "“It has access to X” is usually a statement about the fourth box.",
  layersPath: {
    label: "The full path, with MCP as the example",
    href: "/data-flows/connect-ai-to-tools-and-data",
  },
};

const de: ReachModelContent = {
  title: "Worauf kann es zugreifen, und was kann es tun?",
  description:
    "Vier Dinge, die man trennen sollte, sobald ein KI-System angebunden ist: was es lesen kann, was gespeichert bleibt, was es ändern kann und was es auslöst.",
  heading: "Worauf kann es zugreifen, und was kann es tun?",
  intro:
    "Vier Dinge lohnt es sich zu trennen: was ein System lesen kann, was danach gespeichert bleibt, was es ändern kann und was es anderswo auslöst. Welche davon gelten, hängt vom Konto ab, in dem du angemeldet bist, und davon, was du verbunden hast — nicht davon, welches Produkt du gewählt hast.",
  note:
    "Die vier sind voneinander unabhängig. Dein Postfach lesen zu dürfen heißt nicht, dass etwas gespeichert wird; eine Kopie zu behalten heißt nicht, dass das Original angefasst werden kann; einen Datensatz zu ändern heißt nicht, dass die nächste Handlung starten darf. Jedes wird einzeln erteilt.",
  capabilitiesHeading: "Vier Dinge, die man trennen sollte",
  capabilities: [
    {
      name: "Was es lesen kann",
      body:
        "Welches Material ihm übergeben wird und auf welche Systeme es gerichtet wurde. Etwas lesen zu können heißt nicht, es zu behalten.",
      paths: [
        {
          label: "Welche deiner Systeme als Wissensquelle taugen",
          href: "/de/data-flows/where-knowledge-lives",
        },
        {
          label: "Wo deine Daten liegen und wer herankommt",
          href: "/de/data-flows/data-sovereignty",
        },
      ],
    },
    {
      name: "Was danach gespeichert bleibt",
      body:
        "Was nach dem Gespräch bestehen bleibt, wie lange und in welchem Tarif. Eine gespeicherte Kopie sagt nichts darüber, ob das Original angefasst werden kann.",
      paths: [
        {
          label: "Werden deine Eingaben für das Modelltraining verwendet?",
          href: "/de/data-flows/training-and-retention",
        },
        {
          label: "Was sich ändert, wenn du Modelltraining erlaubst",
          href: "/de/data-flows/what-you-agree-to",
        },
        {
          label: "Chats und Daten löschen: Was entfernt wird und was bleibt",
          href: "/de/data-flows/getting-it-back-out",
        },
      ],
    },
    {
      name: "Was es ändern kann",
      body:
        "Ob es in eine Datei, einen Datensatz oder ein Ticket zurückschreiben darf oder dir nur ein Ergebnis gibt. Eine Änderung ist keine Erlaubnis, das Nächste zu starten.",
      paths: [
        {
          label: "KI mit Tools und Daten verbinden",
          href: "/de/data-flows/connect-ai-to-tools-and-data",
        },
      ],
    },
    {
      name: "Was es auslösen kann",
      body:
        "Ob eine Handlung weitere nach sich zieht und wer dabei zusieht. Das ist der Teil, der weiterläuft, wenn du das Fenster schließt.",
      paths: [
        {
          label: "Bevor ein KI-Agent auf Dateien und Systeme zugreift",
          href: "/de/secure-setup/before-you-grant-access",
        },
      ],
    },
  ],
  layersHeading: "Woher der Zugriff kommt",
  layersLead:
    "Ein Satz wie „das Modell kann meine Dateien lesen“ benennt eine Sache und beschreibt vier. Jede davon ist eine eigene Entscheidung, und nur die letzte erteilt etwas.",
  layers: [
    {
      label: "Das Modell",
      role: "Rechnet auf dem Text, den es bekommt. Zu deiner Festplatte, deiner Mail oder irgendeinem anderen System hat es keine Verbindung.",
      boundary: "Für sich genommen: nichts",
    },
    {
      label: "Das Produkt, das du benutzt",
      role: "Entscheidet, was übergeben wird: das Gespräch, eine hochgeladene Datei, ein Suchtreffer, eine gespeicherte Notiz.",
      boundary: "Was du geschickt hast, und was es speichert",
    },
    {
      label: "Ein Connector oder eine Integration",
      role: "Macht aus einer Anfrage einen Aufruf in einem anderen System, mit Zugangsdaten, die jemand hinterlegt hat.",
      boundary: "Welche Vorgänge er anbietet",
    },
    {
      label: "Das Zielsystem",
      role: "Entscheidet, was dieses Konto lesen, ändern oder starten darf.",
      boundary: "Das Konto und seine Rechte",
    },
  ],
  layersCaption:
    "„Es hat Zugriff auf X“ meint meistens den vierten Kasten.",
  layersPath: {
    label: "Der ganze Weg, am Beispiel MCP",
    href: "/de/data-flows/connect-ai-to-tools-and-data",
  },
};

export const getReachModel = (locale: SiteLocale): ReachModelContent =>
  locale === "de" ? de : en;
