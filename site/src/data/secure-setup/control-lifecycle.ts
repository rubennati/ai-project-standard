/**
 * The control lifecycle: decide, configure, verify, record, monitor, take back.
 *
 * The hub used to list one article about day-one settings, which is step two of
 * six and the only one most people ever perform. The steps after the work —
 * checking the result, being able to explain the decision later, taking an
 * access back — are where the effort goes missing, and the hub now names them.
 *
 * Order matters here, unlike the six ways of working: you decide before you
 * configure and you verify before you can record. So this is deliberately a
 * numbered sequence rather than a grid — the one place on the site where a
 * sequence is the honest shape.
 *
 * Monitoring has no path onward. Nothing on the site continues it yet, and the
 * intro says which steps a task actually needs so the list does not read as six
 * obligations for every draft.
 */
import type { SiteLocale } from "../../i18n/ui";

interface Stage {
  name: string;
  meaning: string;
  /** Omitted where no current page continues this step. */
  paths?: { label: string; href: string }[];
}

export interface ControlLifecycleContent {
  title: string;
  description: string;
  heading: string;
  intro: string;
  note: string;
  stagesHeading: string;
  stages: Stage[];
}

const en: ControlLifecycleContent = {
  title: "How do you secure this, and how do you check the result?",
  description:
    "Six steps that keep an AI decision holding: decide what is allowed, configure it, check the result, record it, watch it, and be able to take it back.",
  heading: "How do you secure this, and how do you check the result?",
  intro:
    "Setting something up safely is one step of six, and it is the one people do. The others decide what happens after: whether anyone checks the result, whether the decision can still be explained in six months, and whether an access you granted can be taken back. Having those in place is what lets you use this on work someone else depends on.",
  note:
    "Not all six apply to every task. A draft you write alone needs the first three, and the third is a glance at what came back. Something that acts in another system, on its own, needs all six — and the difference is the consequence of a mistake, not the tool.",
  stagesHeading: "Six steps, in the order they happen",
  stages: [
    {
      name: "Decide",
      meaning:
        "What is allowed here at all: by law, by your organisation, and for this particular material. This is the step that is skipped, because the tool works either way.",
      paths: [
        { label: "Can I enter this data into an AI tool?", href: "/law/what-may-go-in" },
        {
          label: "Four questions that are not the same question",
          href: "/law/four-separate-questions",
        },
      ],
    },
    {
      name: "Configure",
      meaning:
        "The settings, accounts and permissions that make the decision hold without anyone having to remember it. A boundary in the configuration survives a busy Tuesday; a sentence in a prompt does not.",
      paths: [
        {
          label: "Before you give an AI agent access",
          href: "/secure-setup/before-you-grant-access",
        },
      ],
    },
    {
      name: "Verify",
      meaning:
        "Check what came back, and what was done. What you check changes with how far the result already travelled — an answer, a change waiting in your files, or an action that already happened elsewhere.",
      paths: [
        { label: "Checking the result", href: "/secure-setup/checking-the-result" },
      ],
    },
    {
      name: "Record",
      meaning:
        "What you write down so the decision can still be explained when the question arrives months later, from someone who was not there.",
      paths: [{ label: "Keeping a record", href: "/secure-setup/keeping-a-record" }],
    },
    {
      name: "Monitor",
      meaning:
        "Once something runs without you watching each time, someone has to notice when it stops being right. A setup that was correct in March is not evidence about September.",
    },
    {
      name: "Take it back",
      meaning:
        "Every access you grant needs a way back: removing the access itself, and restoring what it changed. Both are worth having tried once before you need them.",
      paths: [
        {
          label: "Connect AI to tools and data",
          href: "/data-flows/connect-ai-to-tools-and-data",
        },
      ],
    },
  ],
};

const de: ControlLifecycleContent = {
  title: "Wie sicherst du das ab, und wie prüfst du das Ergebnis?",
  description:
    "Sechs Schritte, damit eine Entscheidung hält: festlegen, was erlaubt ist, es einrichten, das Ergebnis prüfen, es festhalten, es beobachten und es zurücknehmen können.",
  heading: "Wie sicherst du das ab, und wie prüfst du das Ergebnis?",
  intro:
    "Etwas sicher einzurichten ist einer von sechs Schritten — und der, den die meisten tun. Die anderen entscheiden, was danach passiert: ob jemand das Ergebnis prüft, ob sich die Entscheidung in einem halben Jahr noch erklären lässt und ob ein erteilter Zugriff wieder zurückgenommen werden kann. Das zu haben, ist die Voraussetzung dafür, KI für Arbeit einzusetzen, auf die sich jemand anderes verlässt.",
  note:
    "Nicht alle sechs gelten für jede Aufgabe. Ein Entwurf, den du allein schreibst, braucht die ersten drei — und der dritte ist ein Blick auf das, was zurückkam. Etwas, das von sich aus in einem anderen System handelt, braucht alle sechs; den Unterschied macht die Folge eines Fehlers, nicht das Tool.",
  stagesHeading: "Sechs Schritte, in der Reihenfolge, in der sie anfallen",
  stages: [
    {
      name: "Festlegen",
      meaning:
        "Was hier überhaupt erlaubt ist: rechtlich, in deiner Organisation und für genau dieses Material. Das ist der Schritt, der übersprungen wird, weil das Tool so oder so funktioniert.",
      paths: [
        { label: "Welche Daten darf ich in ein KI-Tool eingeben?", href: "/de/law/what-may-go-in" },
        {
          label: "Vier Fragen, die nicht dieselbe Frage sind",
          href: "/de/law/four-separate-questions",
        },
      ],
    },
    {
      name: "Einrichten",
      meaning:
        "Die Einstellungen, Konten und Rechte, die die Entscheidung tragen, ohne dass jemand daran denken muss. Eine Grenze in der Konfiguration übersteht einen vollen Dienstag, ein Satz im Prompt nicht.",
      paths: [
        {
          label: "Bevor ein KI-Agent auf Dateien und Systeme zugreift",
          href: "/de/secure-setup/before-you-grant-access",
        },
      ],
    },
    {
      name: "Prüfen",
      meaning:
        "Nachsehen, was zurückkam und was getan wurde. Was du prüfst, hängt davon ab, wie weit das Ergebnis schon gelaufen ist: eine Antwort, eine Änderung, die in deinen Dateien wartet, oder eine Handlung, die anderswo schon passiert ist.",
      paths: [
        { label: "Das Ergebnis prüfen", href: "/de/secure-setup/checking-the-result" },
      ],
    },
    {
      name: "Festhalten",
      meaning:
        "Was du notierst, damit sich die Entscheidung noch erklären lässt, wenn die Frage Monate später kommt — von jemandem, der nicht dabei war.",
      paths: [
        { label: "Die Entscheidung festhalten", href: "/de/secure-setup/keeping-a-record" },
      ],
    },
    {
      name: "Beobachten",
      meaning:
        "Sobald etwas läuft, ohne dass du jedes Mal zusiehst, muss jemand merken, wenn es nicht mehr stimmt. Ein Aufbau, der im März richtig war, belegt nichts über den September.",
    },
    {
      name: "Zurücknehmen",
      meaning:
        "Zu jedem erteilten Zugriff gehört ein Weg zurück: den Zugriff selbst entfernen und wiederherstellen, was er verändert hat. Beides sollte man einmal ausprobiert haben, bevor man es braucht.",
      paths: [
        {
          label: "KI mit Tools und Daten verbinden",
          href: "/de/data-flows/connect-ai-to-tools-and-data",
        },
      ],
    },
  ],
};

export const getControlLifecycle = (locale: SiteLocale): ControlLifecycleContent =>
  locale === "de" ? de : en;
