/**
 * Secure Setup: four ordered questions, and two things that do not finish.
 *
 * This replaced a six-step lifecycle — decide, configure, verify, record,
 * monitor, take it back — published verbatim from this module's own header
 * comment. Four of those are genuinely ordered: you settle what is permitted
 * before you build a boundary, and you check a result before you can record
 * what was checked. The last two are not steps five and six. The old step six
 * said the way back is "worth having tried once before you need them", which
 * is a thing you provision while granting access, not the sixth thing you do;
 * and monitoring only exists for work that runs unattended. Both rendered as
 * dead ends, and the page then spent 130 of its 358 words arguing that not all
 * six applied — structure that claimed an order it did not have, followed by
 * prose apologising for it.
 *
 * So the numbered list carries what is ordered, and the two continuing
 * concerns follow it with real destinations, assembled from the pages that
 * already own the parts. Neither needed a new route.
 *
 * The grammar is the one `/data-flows` shipped in slice 4: reader questions as
 * block names, each destination link carrying the child's own title. The
 * second block reuses that hub's card markup rather than inventing a shape.
 *
 * How much of any of it a task needs follows from the consequence of a
 * mistake. That belongs in the lead, where it decides how the rest is read;
 * `checking-the-result` owns the full version, because it is the page that
 * turns the principle into something to do.
 */
import type { SiteLocale } from "../../i18n/ui";

interface Question {
  name: string;
  meaning: string;
  paths: { label: string; href: string }[];
}

interface Concern {
  name: string;
  body: string[];
  /** `job` names the sub-job this destination answers, because one page can
   *  answer more than one of them and the label alone would not say which. */
  paths: { label: string; href: string; job: string }[];
}

export interface ControlLifecycleContent {
  title: string;
  description: string;
  heading: string;
  intro: string;
  questionsHeading: string;
  questions: Question[];
  concernsHeading: string;
  concerns: Concern[];
}

const en: ControlLifecycleContent = {
  title: "How do you set limits that hold — and check what happened?",
  description:
    "How much checking a task needs follows from the consequence of a mistake, not from the tool. What to settle first, how a boundary holds, what to check, and what to keep.",
  // \u00A0 keeps the dash on the first line, as on the homepage: without it the
  // two-line break at 1280 and above starts line two with the dash.
  heading: "How do you set limits that hold\u00A0— and check what happened?",
  intro:
    "How much of this a task needs follows from what happens if the result is wrong — not from which tool produced it. A draft you write alone needs the first question and a look at what came back. Something consequential that acts in another system without you watching may need all of it.",
  questionsHeading: "In the order they come up",
  questions: [
    {
      name: "What am I allowed to do with this material?",
      meaning:
        "What the law and your organisation allow, for this particular material. The tool works either way, which is why this is the one that gets skipped.",
      paths: [
        { label: "Can I enter this data into an AI tool?", href: "/law/what-may-go-in" },
        {
          label: "Which legal question are you asking?",
          href: "/law/four-separate-questions",
        },
      ],
    },
    {
      name: "How do I make a boundary that holds without me?",
      meaning:
        "The settings, accounts and permissions that carry the decision when nobody is thinking about it. A boundary in the configuration survives a busy Tuesday; a sentence in a prompt does not.",
      paths: [
        {
          label: "Before you give an AI agent access",
          href: "/secure-setup/before-you-grant-access",
        },
      ],
    },
    {
      name: "What do I check before I rely on it?",
      meaning:
        "What you check changes with how far the result already went: an answer on your screen, a change waiting in your files, or something that already happened somewhere else.",
      paths: [
        { label: "Checking the result", href: "/secure-setup/checking-the-result" },
      ],
    },
    {
      name: "What do I keep so I can explain it later?",
      meaning:
        "The question arrives months later, from someone who was not there. What you wrote down at the time is usually the only thing that answers it.",
      paths: [{ label: "Keeping a record", href: "/secure-setup/keeping-a-record" }],
    },
  ],
  concernsHeading: "Once it is set up",
  concerns: [
    {
      name: "It runs without me watching — what changes?",
      body: [
        "A setup can change while it keeps running: permissions can outlive their purpose, product behaviour or defaults can change, and repeated work can fail without anyone reading every run.",
        "How far to go follows the rule above. For a low-consequence setup, going back through it on a schedule may be enough. If a failure has to be noticed while it is happening, you need an operating or detection capability this site does not currently cover.",
      ],
      paths: [
        {
          label: "Before you give an AI agent access",
          href: "/secure-setup/before-you-grant-access",
          job: "for access and integrations that outlived their reason",
        },
        {
          label: "Checking the result",
          href: "/secure-setup/checking-the-result",
          job: "for work that repeats without anyone reading every run",
        },
      ],
    },
    {
      name: "How do I get out again?",
      body: [
        "Three questions live inside that one. Stopping future access is the part you arrange yourself: remove the permission in the target system, disable the connector, revoke the credential, switch off the automation. Reconstructing what already happened rests on what was written down at the time, and on what the system it acted in kept.",
        "Reversing an action is neither of those. Whether something can be undone belongs to the system it happened in and to the action itself — a version history, an undo, a restore from backup, where those exist. Find out which of them you have before you let something act.",
      ],
      paths: [
        {
          label: "Before you give an AI agent access",
          href: "/secure-setup/before-you-grant-access",
          job: "for stopping future access",
        },
        {
          label: "Keeping a record",
          href: "/secure-setup/keeping-a-record",
          job: "for reconstructing what already happened",
        },
      ],
    },
  ],
};

const de: ControlLifecycleContent = {
  title: "Wie setzt du Grenzen, die halten — und prüfst, was passiert ist?",
  description:
    "Wie gründlich eine Aufgabe geprüft gehört, ergibt sich aus den Folgen eines Fehlers, nicht aus dem Tool. Was vorher zu klären ist, wie eine Grenze hält, was du prüfst und was du festhältst.",
  heading: "Wie setzt du Grenzen, die halten\u00A0— und prüfst, was passiert ist?",
  intro:
    "Wie viel davon eine Aufgabe braucht, hängt davon ab, was passiert, wenn das Ergebnis falsch ist — nicht davon, welches Tool es erzeugt hat. Für einen Entwurf, den du allein schreibst, reichen die erste Frage und ein Blick auf das, was zurückkam. Etwas mit spürbaren Folgen, das ohne dich in einem anderen System handelt, kann all das brauchen.",
  questionsHeading: "In der Reihenfolge, in der sie sich stellen",
  questions: [
    {
      name: "Was darf ich mit diesem Material überhaupt tun?",
      meaning:
        "Was Gesetz und Organisation für genau dieses Material erlauben. Das Tool funktioniert so oder so — deshalb bleibt gerade diese Frage liegen.",
      paths: [
        { label: "Welche Daten darf ich in ein KI-Tool eingeben?", href: "/de/law/what-may-go-in" },
        {
          label: "Welche rechtliche Frage stellst du gerade?",
          href: "/de/law/four-separate-questions",
        },
      ],
    },
    {
      name: "Wie ziehe ich eine Grenze, die auch ohne mich hält?",
      meaning:
        "Die Einstellungen, Konten und Rechte, die die Entscheidung tragen, wenn gerade niemand daran denkt. Eine Grenze in der Konfiguration übersteht einen vollen Dienstag, ein Satz im Prompt nicht.",
      paths: [
        {
          label: "Bevor ein KI-Agent auf Dateien und Systeme zugreift",
          href: "/de/secure-setup/before-you-grant-access",
        },
      ],
    },
    {
      name: "Was prüfe ich, bevor ich mich darauf verlasse?",
      meaning:
        "Was du prüfst, hängt davon ab, wie weit das Ergebnis schon gekommen ist: eine Antwort auf dem Bildschirm, eine Änderung, die in deinen Dateien wartet, oder etwas, das anderswo schon geschehen ist.",
      paths: [
        { label: "Das Ergebnis prüfen", href: "/de/secure-setup/checking-the-result" },
      ],
    },
    {
      name: "Was halte ich fest, um es später erklären zu können?",
      meaning:
        "Die Frage kommt Monate später, von jemandem, der nicht dabei war. Was damals notiert wurde, ist meist das Einzige, was sie dann beantwortet.",
      paths: [
        { label: "Die Entscheidung festhalten", href: "/de/secure-setup/keeping-a-record" },
      ],
    },
  ],
  concernsHeading: "Wenn es eingerichtet ist",
  concerns: [
    {
      name: "Es läuft, ohne dass ich zusehe — was ändert sich?",
      body: [
        "Ein Aufbau kann sich verändern, während er weiterläuft: Rechte können ihren Grund überleben, das Verhalten oder die Voreinstellungen des Produkts können sich ändern, und wiederkehrende Arbeit kann scheitern, ohne dass jemand jeden Durchlauf liest.",
        "Wie weit du gehst, richtet sich nach der Regel oben. Wo ein Fehler wenig kostet, kann es reichen, das Ganze in festen Abständen durchzugehen. Muss ein Fehler auffallen, während er passiert, brauchst du laufende Überwachung, die das erkennt — und die deckt diese Website bisher nicht ab.",
      ],
      paths: [
        {
          label: "Bevor ein KI-Agent auf Dateien und Systeme zugreift",
          href: "/de/secure-setup/before-you-grant-access",
          job: "für Zugriffe und Anbindungen, deren Grund weggefallen ist",
        },
        {
          label: "Das Ergebnis prüfen",
          href: "/de/secure-setup/checking-the-result",
          job: "für Arbeit, die sich wiederholt, ohne dass jemand jeden Durchlauf liest",
        },
      ],
    },
    {
      name: "Wie komme ich wieder heraus?",
      body: [
        "Darin stecken drei Fragen. Künftige Zugriffe zu stoppen, ist der Teil, den du selbst in der Hand hast: das Recht im Zielsystem entfernen, die Anbindung abschalten, das Zugangsmittel entziehen, die Automatisierung ausschalten. Zu rekonstruieren, was bereits passiert ist, hängt davon ab, was damals notiert wurde und was das System aufbewahrt hat, in dem gehandelt wurde.",
        "Eine Handlung rückgängig zu machen, ist keines von beidem. Ob sich etwas zurückholen lässt, entscheiden das System, in dem es passiert ist, und die Handlung selbst: Versionsverlauf, ein Rückgängig, eine Rücksicherung — sofern es sie gibt. Finde heraus, was davon dir zur Verfügung steht, bevor du etwas handeln lässt.",
      ],
      paths: [
        {
          label: "Bevor ein KI-Agent auf Dateien und Systeme zugreift",
          href: "/de/secure-setup/before-you-grant-access",
          job: "um künftige Zugriffe zu stoppen",
        },
        {
          label: "Die Entscheidung festhalten",
          href: "/de/secure-setup/keeping-a-record",
          job: "um zu rekonstruieren, was bereits passiert ist",
        },
      ],
    },
  ],
};

export const getControlLifecycle = (locale: SiteLocale): ControlLifecycleContent =>
  locale === "de" ? de : en;
