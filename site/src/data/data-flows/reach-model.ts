/**
 * What an AI setup can get to, and what it can do there.
 *
 * The hub explains the mechanism before it routes. A reader arrives asking what
 * a tool can reach; the honest answer is that reach is assembled, so the figure
 * comes first and the four reader questions follow it as routing rather than as
 * a model to memorise. The words "four layers" appear nowhere public: the
 * figure is an explanation of one situation, not a taxonomy any other page
 * refers back to.
 *
 * Scope matters in the wording. The figure describes what happens when a
 * product reaches into *another system*. A product has plenty of capability
 * without any connector at all, so the caption states an intersection for the
 * connected case rather than a universal rule about every capability. The page
 * previously carried the opposite error twice — that capability depends on the
 * account and the connection "not on which product you chose", and that access
 * claims are "usually a statement about the fourth box". Both are gone.
 *
 * Node four is an identity, not an account. A connection may run under a
 * signed-in person's delegated access, under an application's own identity, or
 * under another credential the target system accepts; what holds across all of
 * them is that the target system decides what that identity may do.
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
  capabilitiesHeading: string;
  capabilities: Capability[];
  layersHeading: string;
  layersLead: string;
  layers: SystemLayer[];
  layersCaption: string;
  /** The two paragraphs that survived the mechanism reconciliation from
   *  `/start/what-it-is-doing`. They earn their place after the figure because
   *  they say what the figure is for. */
  mechanismNotes: string[];
}

const en: ReachModelContent = {
  title: "What can it access, and what can it do?",
  description:
    "What an AI tool can reach in another system, where that reach comes from, and where reading, storage, changes and actions are each answered.",
  heading: "What can it access, and what can it do?",
  intro:
    "A model on its own reaches nothing outside the request it is handed. What an AI tool can do in another system comes from the software around the model: the product, the connection someone set up, and what the identity in that system is allowed to do.",
  layersHeading: "Where the access comes from",
  layersLead:
    "“The model can read my files” names one thing and describes several. Once a product reaches into another system, what it can do there is built from what the product supports, what the connection offers, and what the identity in that system is permitted to do.",
  layers: [
    {
      label: "The model",
      role: "Computes on the text it is handed. By itself it has no wire to your disk, your mail or any other system, and it does not sign in anywhere.",
      boundary: "On its own: nothing outside the request",
    },
    {
      label: "The product around it",
      role: "Decides what the model gets to see and which mechanisms exist at all: an upload, a search, a saved note, a connection to another system. Two products built on the same model do not offer the same things, which is why the product you choose matters.",
      boundary: "Which capabilities exist at all",
    },
    {
      label: "The connection that was added",
      role: "Turns a request into a call on another system and offers a defined set of operations for it. Someone set it up — you, an administrator, or whoever built the integration into the product.",
      boundary: "Which operations are offered",
    },
    {
      label: "The identity and permissions in the target system",
      role: "The connection works under an identity the target system recognises: a signed-in person's delegated access, an application's own identity, or another credential accepted there. What that identity may do is decided by the target system, not by the AI.",
      boundary: "What that identity is allowed to do",
    },
  ],
  layersCaption:
    "For a connected system, what is possible is the overlap of three things: what the product supports, what the connection offers, and what the target identity is allowed to do.",
  mechanismNotes: [
    "Almost the whole field follows from this. Retrieval, connectors, memory, agents — all of them are answers to the same question: what should we hand over this time?",
    "It is also why “which model is better” and “which product is better” are different questions, and for most practical work the second one is decided by the orchestration rather than by the model.",
  ],
  capabilitiesHeading: "Where each question is answered",
  capabilities: [
    {
      name: "What can it see?",
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
      name: "What stays stored?",
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
      name: "What can it change?",
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
      name: "What can it set off?",
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
};

const de: ReachModelContent = {
  title: "Worauf kann es zugreifen, und was kann es tun?",
  description:
    "Worauf ein KI-Tool in einem anderen System zugreifen kann, woher dieser Zugriff kommt und wo Lesen, Speichern, Ändern und Auslösen jeweils beantwortet werden.",
  heading: "Worauf kann es zugreifen, und was kann es tun?",
  intro:
    "Ein Modell für sich erreicht nichts außerhalb der Anfrage, die es bekommt. Was ein KI-Tool in einem anderen System tun kann, kommt von der Software drumherum: vom Produkt, von der Anbindung, die jemand eingerichtet hat, und davon, was die Identität in diesem System darf.",
  layersHeading: "Woher der Zugriff kommt",
  layersLead:
    "„Das Modell kann meine Dateien lesen“ benennt eine Sache und beschreibt mehrere. Sobald ein Produkt in ein anderes System hineinreicht, entsteht das, was es dort tun kann, aus dem, was das Produkt unterstützt, was die Anbindung anbietet und was die Identität in diesem System darf.",
  layers: [
    {
      label: "Das Modell",
      role: "Rechnet auf dem Text, den es bekommt. Von sich aus führt keine Leitung zu deiner Festplatte, deiner Mail oder irgendeinem anderen System, und es meldet sich nirgends an.",
      boundary: "Für sich genommen: nichts außerhalb der Anfrage",
    },
    {
      label: "Das Produkt darum herum",
      role: "Entscheidet, was das Modell zu sehen bekommt und welche Mechanismen es überhaupt gibt: einen Upload, eine Suche, eine gespeicherte Notiz, eine Anbindung an ein anderes System. Zwei Produkte auf demselben Modell bieten nicht dasselbe an — deshalb ist die Produktwahl nicht gleichgültig.",
      boundary: "Welche Fähigkeiten es überhaupt gibt",
    },
    {
      label: "Die eingerichtete Anbindung",
      role: "Macht aus einer Anfrage einen Aufruf in einem anderen System und bietet dafür eine festgelegte Menge an Vorgängen an. Eingerichtet hat sie jemand — du, eine Administration oder wer die Integration im Produkt gebaut hat.",
      boundary: "Welche Vorgänge angeboten werden",
    },
    {
      label: "Die Identität und Rechte im Zielsystem",
      role: "Die Anbindung arbeitet unter einer Identität, die das Zielsystem kennt: dem delegierten Zugriff einer angemeldeten Person, der eigenen Identität einer Anwendung oder einem anderen dort akzeptierten Zugangsmittel. Was diese Identität darf, entscheidet das Zielsystem — nicht die KI.",
      boundary: "Was diese Identität tun darf",
    },
  ],
  layersCaption:
    "Bei einem angebundenen System entsteht das Mögliche als Schnittmenge aus dreien: was das Produkt unterstützt, was die Anbindung anbietet und was die Identität im Zielsystem darf.",
  mechanismNotes: [
    "Fast das ganze Feld folgt daraus. Retrieval, Connectors, Memory, Agenten — alle sind Antworten auf dieselbe Frage: Was legen wir diesmal vor?",
    "Deshalb sind auch „welches Modell ist besser“ und „welches Produkt ist besser“ verschiedene Fragen — und für die meiste praktische Arbeit entscheidet sich die zweite an der Orchestrierung, nicht am Modell.",
  ],
  capabilitiesHeading: "Wo die einzelnen Fragen beantwortet werden",
  capabilities: [
    {
      name: "Was kann es sehen?",
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
      name: "Was bleibt gespeichert?",
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
      name: "Was kann es ändern?",
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
      name: "Was kann es auslösen?",
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
};

export const getReachModel = (locale: SiteLocale): ReachModelContent =>
  locale === "de" ? de : en;
