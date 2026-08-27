/**
 * Entry point: you work for someone else.
 *
 * The audience nobody writes for. Almost everything published about AI at
 * work addresses decision-makers, while the person actually typing into the
 * box has no authority, a real deadline, and no idea whom to ask.
 *
 * The page answered permission well and then stopped. Every section was
 * permission, restriction or incident handling, and the only two content links
 * went to risk pages, so a reader who had just resolved whether they may use a
 * tool was left without a word about what to use it for. The last section is
 * still the pre-prompt check, but it now closes the permission half rather
 * than the page: what it can help you get done comes after it, and the onward
 * step goes to the use cases rather than to another boundary.
 *
 * The capability section is not new material. "Whether a model helps you
 * draft, structure, review or explain something" was already on the page, one
 * clause deep inside a section about what is yours to decide. It is the same
 * five kinds of work, given room.
 *
 * Checked 2026-08-03.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-03";

export interface StartNextStep {
  label: string;
  description: string;
}

const nextStep: Record<SiteLocale, StartNextStep> = {
  en: {
    label: "What are you trying to get done?",
    description:
      "Six kinds of work, what AI can do for each of them, and where it stops.",
  },
  de: {
    label: "Was willst du erreichen?",
    description:
      "Sechs Arten von Arbeit, was KI dabei leisten kann und wo sie aufhört.",
  },
};

export const getEmployeeNextStep = (locale: SiteLocale): StartNextStep =>
  nextStep[locale];

const en: Article = {
  title: "Can I use AI at work?",
  description:
    "What to find out before pasting work material into an AI tool, whom to ask, and what to do when nobody has decided yet.",
  lead: "Which services you may use and what you may put into them is set by your employer. Knowing where that line runs is what lets you use these tools without having to guess.",
  sections: [
    {
      heading: "The first question is organisational, not technical",
      level: "assessment",
      paragraphs: [
        "It is: has my employer approved a tool, and for what. Most people never ask, either because they assume the answer is no, or because they assume nobody minds. Both assumptions are guesses about something that has a real answer.",
        "There is a good chance the answer already exists and nobody told you. Companies buy a business plan and then fail to announce it, so people keep using their private account beside a paid one that would have been fine.",
      ],
    },
    {
      heading: "Whom to ask, and what to ask",
      level: "advice",
      paragraphs: [
        "IT, your data protection contact, or your manager — whichever exists. One short message covers it, and asking in writing is deliberate: it moves the decision to the person whose decision it is.",
      ],
      list: [
        "Is there an approved AI tool, and do we have a business or team plan for it?",
        "May I use it for work material, and is there anything I must not put in?",
        "Is there a policy or a training I should have seen?",
        "If there is nothing yet — whom should I ask again in a month?",
      ],
    },
    {
      heading: "What is yours to decide, and what is not",
      level: "assessment",
      paragraphs: [
        "Within the ways of working your employer has approved, you decide how you work: whether a model helps you draft, structure, review or explain something. Which services you may use for that, and what may go into them, is set by your employer.",
        "You do not decide whether material belonging to your employer or their clients may leave the company. That decision belongs to whoever carries the liability, and it stays theirs even when they have not made it yet.",
        "The distinction is worth holding on to, because it means using AI is not the risky part. Choosing what goes into it is.",
      ],
    },
    {
      heading: "The applicable terms depend on the account, not the product",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "This catches out more people than anything else on this page. Your private account runs on consumer terms even when you are doing work with it — and on consumer plans, training on your input is generally the default rather than the exception.",
        "It applies to developer tools too. A coding assistant used from a personal account inherits that account's terms, not the professional character of the work.",
      ],
      links: [
        {
          label: "Are your chats used for model training?",
          href: "/data-flows/training-and-retention",
        },
      ],
    },
    {
      heading: "When nobody has decided yet",
      level: "advice",
      paragraphs: [
        "This is the common case, and waiting indefinitely is not a realistic answer. A workable middle position holds until someone decides.",
      ],
      list: [
        "Use it for your own work: your drafts, your notes, general questions, your own learning.",
        "Keep client data, personnel matters, contracts, credentials and anything under an NDA out of it entirely.",
        "Where you need help with something confidential, describe the problem in the abstract instead of pasting the document.",
        "Do not use a personal account for company material, even briefly. That is the step that is hard to undo.",
      ],
    },
    {
      heading: "If you have already done it",
      level: "advice",
      paragraphs: [
        "Very likely you have, because most people did before anyone thought about it. What matters is what you do now, not the retrospective.",
        "Delete the conversations that contained it. Rotate anything that resembled a key or a password. And say something — to IT, to your manager — because a company that learns about it now can decide, whereas one that learns in six months from somewhere else cannot.",
      ],
      links: [{ label: "Deleting chats and data: what goes and what stays", href: "/data-flows/getting-it-back-out" }],
    },
    {
      heading: "Ask yourself before the next prompt",
      level: "advice",
      paragraphs: ["If any answer is no or unclear, that is the thing to resolve first."],
      list: [
        "Do I know whether my employer has approved a tool?",
        "Am I logged into a work account or a private one right now?",
        "Am I allowed to use this material here?",
        "Would I be comfortable if my manager read this conversation?",
        "If someone asked me to delete it in six months, could I?",
      ],
    },
    {
      heading: "What it can help you get done",
      level: "advice",
      paragraphs: [
        "Once it is clear which tool you may use and what may go into it, the next question is what it can help you get done. Start with work you are already allowed to do, and with material you are allowed to use for it.",
      ],
      list: [
        "Drafting — a first version of the email, the summary, the outline.",
        "Structuring — putting what you wrote into a shape someone else can follow.",
        "Reviewing — your own text, read back for gaps, contradictions and unstated assumptions.",
        "Explaining — getting an unfamiliar document, error message or process into language you can work with.",
        "Researching, where you can check the source — it lays the arguments out; whether they hold is yours to confirm.",
      ],
    },
  ],
};

const de: Article = {
  title: "Darf ich KI im Job verwenden?",
  description:
    "Was du vor dem Einfügen von Arbeitsmaterial klärst, wen du fragst, und was du tust, wenn niemand entschieden hat.",
  lead: "Welche Dienste du verwenden darfst und was du dort eingeben darfst, legt dein Arbeitgeber fest. Wer weiß, wo diese Grenze verläuft, kann diese Tools nutzen, ohne raten zu müssen.",
  sections: [
    {
      heading: "Die erste Frage ist keine technische, sondern eine organisatorische",
      level: "assessment",
      paragraphs: [
        "Sie lautet: Hat mein Arbeitgeber ein Tool freigegeben, und wofür. Die meisten fragen nie — entweder weil sie annehmen, die Antwort sei nein, oder weil sie annehmen, es störe niemanden. Beides sind Vermutungen über etwas, das eine echte Antwort hat.",
        "Gut möglich, dass die Antwort längst existiert und dir nur niemand Bescheid gesagt hat. Firmen kaufen einen Business-Tarif und sagen es dann niemandem, also arbeiten die Leute weiter mit ihrem privaten Konto neben einem bezahlten, das in Ordnung gewesen wäre.",
      ],
    },
    {
      heading: "Wen du fragst — und was genau",
      level: "advice",
      paragraphs: [
        "IT, deine Datenschutz-Ansprechperson oder deine Führungskraft — je nachdem, was es gibt. Eine kurze Nachricht genügt, und schriftlich zu fragen ist Absicht: Es schiebt die Entscheidung zu der Person, der sie gehört.",
      ],
      list: [
        "Gibt es ein freigegebenes KI-Tool, und haben wir dafür einen Business- oder Teamtarif?",
        "Darf ich es für Arbeitsmaterial nutzen, und gibt es etwas, das ich keinesfalls hineingeben darf?",
        "Gibt es eine Richtlinie oder eine Schulung, die ich hätte sehen sollen?",
        "Falls es noch nichts gibt — wen frage ich in einem Monat noch einmal?",
      ],
    },
    {
      heading: "Was deine Entscheidung ist, und was nicht",
      level: "assessment",
      paragraphs: [
        "Innerhalb der Arbeitsweisen, die dein Arbeitgeber freigegeben hat, entscheidest du, wie du arbeitest: ob dir ein Modell beim Entwerfen, Strukturieren, Prüfen oder Erklären hilft. Welche Dienste du dafür nutzen darfst und was dort hineingehen darf, legt dein Arbeitgeber fest.",
        "Du entscheidest nicht, ob Material deines Arbeitgebers oder seiner Kunden das Unternehmen verlassen darf. Diese Entscheidung gehört dem, der die Haftung trägt — und sie bleibt seine, auch wenn er sie noch nicht getroffen hat.",
        "Diese Unterscheidung lohnt sich, denn sie bedeutet: KI zu benutzen ist nicht der riskante Teil. Auszuwählen, was hineinkommt, schon.",
      ],
    },
    {
      heading: "Welche Bedingungen gelten, hängt vom Konto ab, nicht vom Produkt",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Daran scheitern mehr Leute als an allem anderen auf dieser Seite. Dein Privatkonto läuft auf einem Privatkundentarif, auch wenn du damit arbeitest — und dort ist Modelltraining mit deiner Eingabe im Regelfall die Voreinstellung, nicht die Ausnahme.",
        "Für Entwicklerwerkzeuge gilt dasselbe. Ein Coding-Assistent aus einem privaten Konto erbt dessen Bedingungen, nicht den beruflichen Charakter der Arbeit.",
      ],
      links: [
        {
          label: "Werden deine Eingaben für das Modelltraining verwendet?",
          href: "/de/data-flows/training-and-retention",
        },
      ],
    },
    {
      heading: "Wenn noch niemand entschieden hat",
      level: "advice",
      paragraphs: [
        "Das ist der Normalfall, und unbegrenzt zu warten ist keine realistische Antwort. Eine tragfähige Zwischenposition hält, bis jemand entscheidet.",
      ],
      list: [
        "Nutz es für deine eigene Arbeit: deine Entwürfe, deine Notizen, allgemeine Fragen, deine eigene Einarbeitung.",
        "Lass Kundendaten, Personalangelegenheiten, Verträge, Zugangsdaten und alles unter NDA ganz draußen.",
        "Wenn du Hilfe bei etwas Vertraulichem brauchst, beschreib das Problem abstrakt, statt das Dokument einzufügen.",
        "Verwende kein Privatkonto für Firmenmaterial, auch nicht kurz. Das ist der Schritt, der sich schlecht rückgängig machen lässt.",
      ],
    },
    {
      heading: "Falls du es längst getan hast",
      level: "advice",
      paragraphs: [
        "Sehr wahrscheinlich hast du das — wie die meisten, bevor irgendwer darüber nachgedacht hat. Es zählt, was du jetzt tust, nicht der Rückblick.",
        "Lösch die Unterhaltungen, die es enthielten. Tausch alles aus, was einem Schlüssel oder Passwort ähnelte. Und sag Bescheid — der IT, deiner Führungskraft. Ein Unternehmen, das es jetzt erfährt, kann entscheiden; eines, das es in einem halben Jahr von anderer Seite erfährt, nicht mehr.",
      ],
      links: [{ label: "Chats und Daten löschen: Was entfernt wird und was bleibt", href: "/de/data-flows/getting-it-back-out" }],
    },
    {
      heading: "Frag dich das vor dem nächsten Prompt",
      level: "advice",
      paragraphs: ["Ist eine Antwort nein oder unklar, ist das der Punkt, den du zuerst klärst."],
      list: [
        "Weiß ich, ob mein Arbeitgeber ein Tool freigegeben hat?",
        "Bin ich gerade in einem Arbeitskonto angemeldet oder in einem privaten?",
        "Darf ich dieses Material hier verwenden?",
        "Wäre es mir recht, wenn meine Führungskraft diese Unterhaltung liest?",
        "Könnte ich sie löschen, wenn mich in einem halben Jahr jemand darum bittet?",
      ],
    },
    {
      heading: "Wobei KI dir helfen kann",
      level: "advice",
      paragraphs: [
        "Sobald klar ist, welches Tool du verwenden darfst und was hineingehen darf, geht es um die eigentliche Arbeit: Wobei soll dir KI helfen? Fang mit Aufgaben und Material an, die du bearbeiten und dafür verwenden darfst.",
      ],
      list: [
        "Entwerfen — eine erste Fassung der Mail, der Zusammenfassung, der Gliederung.",
        "Strukturieren — Geschriebenes in eine Form bringen, der jemand anders folgen kann.",
        "Prüfen — den eigenen Text auf Lücken, Widersprüche und unausgesprochene Annahmen durchgehen.",
        "Erklären — ein fremdes Dokument, eine Fehlermeldung oder einen Ablauf in eine Sprache bringen, mit der du arbeiten kannst.",
        "Recherchieren, wo du die Quelle nachprüfen kannst — es trägt die Argumente zusammen; ob sie tragen, bestätigst du.",
      ],
    },
  ],
};

export const getEmployeeStart = (locale: SiteLocale): Article => (locale === "de" ? de : en);
