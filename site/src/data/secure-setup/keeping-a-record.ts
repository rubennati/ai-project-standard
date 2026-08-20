/**
 * What to keep so the work can still be explained later.
 *
 * Question 9 of the product brief, and the half of the destination in
 * `docs/purpose.md` that no page owned: "later explain what the system could
 * reach, what it did, why, on whose decision and what was checked".
 *
 * The page deliberately does not give retention periods or say what any law
 * requires. Those are dated legal claims that belong to the law and data-flow
 * pages, and this page links to them rather than restating them at a level it
 * cannot keep current.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const REVIEWED = "2026-08-20";

const en: Article = {
  title: "Keeping a record",
  subtitle:
    "What to write down so you can still say later what happened, on whose decision, and what was checked.",
  description:
    "Why a chat history is not a record of a decision, the four things worth writing down when AI did part of the work, and where they belong.",
  lead: "The question rarely arrives while the work is fresh. It arrives months later, from a client, an auditor or the colleague who inherited the thing — and it is usually not “did you use AI” but “who decided this, and what did anyone check”. That is answerable only if somebody wrote it down at the time.",
  sections: [
    {
      heading: "The question arrives later, and from someone else",
      level: "assessment",
      paragraphs: [
        "While you are working, everything is obvious: you know what you asked, what came back and what you changed. None of that survives the week, and none of it is visible to the next person at all.",
        "What gets asked later is narrow and specific. Where did this figure come from. Who approved sending it. Was this reviewed by someone who understands it. Could that system have reached the client folder at the time. Those are answerable or they are not, and which one it is was decided months earlier.",
      ],
    },
    {
      heading: "A chat history is not a record",
      level: "assessment",
      paragraphs: [
        "It is tempting to treat the conversation as the record, since it is already there and it is complete. It is a transcript, which is a different thing: it shows what was said, not what was decided or why one option was taken over another.",
        "It is also the least durable copy you have. It can be deleted, it can expire on a retention setting, it may live in a personal account that leaves with the person, and on some plans it is not exportable in a form anyone else can read.",
      ],
      links: [
        {
          label: "Deleting chats and data: what goes and what stays",
          href: "/data-flows/getting-it-back-out",
        },
      ],
    },
    {
      heading: "Four things worth writing down",
      level: "advice",
      paragraphs: [
        "Not a form and not a log. Four short answers, written where the work is, and only where the work has consequence for someone else.",
      ],
      list: [
        "What was decided, and what was rejected. The alternative not taken is what makes a decision legible later; without it a record reads as the only thing anyone considered.",
        "Who decided. A person, not a tool. “The assistant suggested it” is not an owner, and the question that arrives later is always about a person.",
        "What the system could reach at the time. Access changes, and a record written now is the only thing that says what was true then.",
        "What was checked, and by whom. Including the honest version: which parts nobody checked.",
      ],
    },
    {
      heading: "Put it where the work is",
      level: "advice",
      paragraphs: [
        "A separate record that nobody reads is a cost with no return, and it is the first thing to fall away when a week gets busy. The durable place is the one the work already has: the ticket, the commit message, the document header, the email thread that carried the decision.",
        "Two lines in the place someone will look anyway beat a complete register nobody opens. The test is simple — if the next person would find it without being told it exists, it is in the right place.",
      ],
    },
    {
      heading: "A log says what happened, not that it was allowed",
      level: "assessment",
      paragraphs: [
        "Where a system acted on another system, that system's log is the strongest evidence you have of what happened, and it is worth knowing it exists before you need it.",
        "It answers a narrower question than people expect. It shows that a call was made, by which account, and what it changed. It does not show that anyone was permitted to make it, that a human approved it, or that the result was correct. Those are your record, not the log's.",
      ],
      links: [
        {
          label: "Connect AI to tools and data",
          href: "/data-flows/connect-ai-to-tools-and-data",
        },
      ],
    },
    {
      heading: "Limits of this page",
      level: "assessment",
      paragraphs: [
        "This is a working practice, not a compliance instruction. It says nothing about how long anything must be kept, which records a law requires you to hold, or what has to be disclosed to whom — those depend on your jurisdiction, your sector and the data involved, and they change.",
        "Where a record is legally required, the requirement decides the shape and this page does not.",
      ],
      links: [
        {
          label: "Four questions that are not the same question",
          href: "/law/four-separate-questions",
        },
      ],
    },
  ],
};

const de: Article = {
  title: "Die Entscheidung festhalten",
  subtitle:
    "Was du notierst, damit du später noch sagen kannst, was passiert ist, auf wessen Entscheidung und was geprüft wurde.",
  description:
    "Warum ein Chatverlauf keine Aufzeichnung einer Entscheidung ist, welche vier Dinge festzuhalten sich lohnt, wenn KI einen Teil der Arbeit gemacht hat, und wohin sie gehören.",
  lead: "Die Frage kommt selten, solange die Arbeit noch frisch ist. Sie kommt Monate später, von einer Kundin, einer Prüferin oder der Kollegin, die die Sache geerbt hat — und sie lautet meist nicht „habt ihr KI benutzt“, sondern „wer hat das entschieden, und was hat jemand geprüft“. Beantwortbar ist das nur, wenn es damals jemand aufgeschrieben hat.",
  sections: [
    {
      heading: "Die Frage kommt später, und von jemand anderem",
      level: "assessment",
      paragraphs: [
        "Während du arbeitest, ist alles offensichtlich: Du weißt, was du gefragt hast, was zurückkam und was du geändert hast. Nichts davon übersteht die Woche, und für die nächste Person ist davon überhaupt nichts sichtbar.",
        "Was später gefragt wird, ist eng und konkret. Woher diese Zahl kommt. Wer freigegeben hat, dass sie rausgeht. Ob das jemand geprüft hat, der es versteht. Ob dieses System damals an den Kundenordner konnte. Das lässt sich beantworten oder nicht, und welches von beidem zutrifft, hat sich Monate vorher entschieden.",
      ],
    },
    {
      heading: "Ein Chatverlauf ist keine Aufzeichnung",
      level: "assessment",
      paragraphs: [
        "Es liegt nahe, das Gespräch als Aufzeichnung zu nehmen — es ist schon da und es ist vollständig. Es ist eine Mitschrift, und das ist etwas anderes: Sie zeigt, was gesagt wurde, nicht was entschieden wurde und warum die eine Möglichkeit der anderen vorgezogen wurde.",
        "Sie ist außerdem die am wenigsten haltbare Kopie, die du hast. Sie kann gelöscht werden, sie kann über eine Aufbewahrungseinstellung ablaufen, sie liegt womöglich in einem Privatkonto, das mit der Person geht — und je nach Tarif lässt sie sich nicht so ausleiten, dass jemand anderes sie lesen kann.",
      ],
      links: [
        {
          label: "Chats und Daten löschen: Was entfernt wird und was bleibt",
          href: "/de/data-flows/getting-it-back-out",
        },
      ],
    },
    {
      heading: "Vier Dinge, die sich festzuhalten lohnen",
      level: "advice",
      paragraphs: [
        "Kein Formular und kein Protokoll. Vier kurze Antworten, notiert dort, wo die Arbeit ist, und nur dort, wo die Arbeit für jemand anderen Folgen hat.",
      ],
      list: [
        "Was entschieden wurde und was verworfen. Erst die verworfene Möglichkeit macht eine Entscheidung später nachvollziehbar; ohne sie liest sich die Notiz, als hätte nie jemand etwas anderes erwogen.",
        "Wer entschieden hat. Eine Person, kein Tool. „Der Assistent hat das vorgeschlagen“ benennt niemanden, und die spätere Frage zielt immer auf einen Menschen.",
        "Worauf das System damals zugreifen konnte. Zugriffe ändern sich, und eine Notiz von heute ist das Einzige, was später sagt, was damals galt.",
        "Was geprüft wurde und von wem. Einschließlich der ehrlichen Fassung: welche Teile niemand geprüft hat.",
      ],
    },
    {
      heading: "Dorthin, wo die Arbeit liegt",
      level: "advice",
      paragraphs: [
        "Eine separate Aufzeichnung, die niemand liest, macht Arbeit und bringt nichts ein — und sie fällt als Erstes weg, wenn eine Woche eng wird. Haltbar ist der Ort, den die Arbeit ohnehin hat: das Ticket, die Commit-Nachricht, der Kopf des Dokuments, der Mailverlauf, in dem die Entscheidung gefallen ist.",
        "Zwei Zeilen an der Stelle, an der jemand ohnehin nachsieht, schlagen ein vollständiges Verzeichnis, das niemand öffnet. Der Test ist einfach: Findet die nächste Person es, ohne dass man ihr sagt, dass es existiert, liegt es richtig.",
      ],
    },
    {
      heading: "Ein Protokoll sagt, was geschah — nicht, dass es erlaubt war",
      level: "assessment",
      paragraphs: [
        "Wo ein System in einem anderen System gehandelt hat, ist dessen Protokoll der stärkste Beleg dafür, was passiert ist — und es lohnt sich zu wissen, dass es existiert, bevor du es brauchst.",
        "Es beantwortet eine engere Frage, als man erwartet. Es zeigt, dass ein Aufruf stattfand, unter welchem Konto und was er geändert hat. Es zeigt nicht, dass jemand ihn machen durfte, dass ein Mensch zugestimmt hat oder dass das Ergebnis stimmte. Dafür ist deine Aufzeichnung da, nicht das Protokoll.",
      ],
      links: [
        {
          label: "KI mit Tools und Daten verbinden",
          href: "/de/data-flows/connect-ai-to-tools-and-data",
        },
      ],
    },
    {
      heading: "Grenzen dieser Seite",
      level: "assessment",
      paragraphs: [
        "Das ist eine Arbeitspraxis, keine Compliance-Anweisung. Sie sagt nichts darüber, wie lange etwas aufbewahrt werden muss, welche Aufzeichnungen ein Gesetz von dir verlangt oder was wem offenzulegen ist — das hängt von Rechtsraum, Branche und den betroffenen Daten ab und ändert sich.",
        "Wo eine Aufzeichnung rechtlich verlangt ist, bestimmt die Anforderung die Form, und nicht diese Seite.",
      ],
      links: [
        {
          label: "Vier Fragen, die nicht dieselbe Frage sind",
          href: "/de/law/four-separate-questions",
        },
      ],
    },
  ],
};

export const getKeepingARecord = (locale: SiteLocale): Article =>
  locale === "de" ? de : en;
