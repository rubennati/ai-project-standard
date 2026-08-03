/**
 * Entry point: you work for someone else.
 *
 * The audience nobody writes for. Almost everything published about AI at
 * work addresses decision-makers, while the person actually typing into the
 * box has no authority, a real deadline, and no idea whom to ask.
 *
 * Checked 2026-08-03.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-03";

const en: Article = {
  title: "I am employed — may I use AI at work?",
  description:
    "What to find out before you paste work material into an AI tool, whom to ask, and what to do when nobody in the company has decided yet.",
  lead: "You are not the one who gets to decide this, and that is the useful starting point rather than a limitation.",
  sections: [
    {
      heading: "The first question is not a technical one",
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
        "You decide how you work: whether a model helps you draft, structure, review or explain something. That is your craft and nobody needs to approve it.",
        "You do not decide whether material belonging to your employer or their clients may leave the company. That decision belongs to whoever carries the liability, and it stays theirs even when they have not made it yet.",
        "The distinction is worth holding on to, because it means using AI is not the risky part. Choosing what goes into it is.",
      ],
    },
    {
      heading: "The account is the thing, not the tool",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "This catches out more people than anything else on this page. Your private account runs on consumer terms even when you are doing work with it — and on consumer plans, training on your input is generally the default rather than the exception.",
        "It applies to developer tools too. A coding assistant used from a personal account inherits that account's terms, not the professional character of the work.",
      ],
      links: [
        {
          label: "Does the tool train on what you type?",
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
        "Use it for material that is yours: your drafts, your notes, general questions, your own learning.",
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
      links: [{ label: "Getting it back out", href: "/data-flows/getting-it-back-out" }],
    },
    {
      heading: "Ask yourself before the next prompt",
      level: "advice",
      paragraphs: ["If any answer is no or unclear, that is the thing to resolve first."],
      list: [
        "Do I know whether my employer has approved a tool?",
        "Am I logged into a work account or a private one right now?",
        "Does what I am about to send belong to me?",
        "Would I be comfortable if my manager read this conversation?",
        "If someone asked me to delete it in six months, could I?",
      ],
    },
  ],
};

const de: Article = {
  title: "Ich bin angestellt — darf ich KI bei der Arbeit verwenden?",
  description:
    "Was du klären solltest, bevor du Arbeitsmaterial in ein KI-Werkzeug gibst, wen du fragst, und was du tust, wenn im Unternehmen noch niemand entschieden hat.",
  lead: "Du bist nicht derjenige, der das entscheidet — und genau das ist der nützliche Ausgangspunkt, keine Einschränkung.",
  sections: [
    {
      heading: "Die erste Frage ist keine technische",
      level: "assessment",
      paragraphs: [
        "Sie lautet: Hat mein Arbeitgeber ein Werkzeug freigegeben, und wofür. Die meisten fragen nie — entweder weil sie annehmen, die Antwort sei nein, oder weil sie annehmen, es störe niemanden. Beides sind Vermutungen über etwas, das eine echte Antwort hat.",
        "Die Chance ist gut, dass die Antwort längst existiert und dir niemand Bescheid gesagt hat. Firmen kaufen einen Geschäftstarif und kündigen ihn dann nicht an, also arbeiten die Leute weiter mit ihrem privaten Konto neben einem bezahlten, das in Ordnung gewesen wäre.",
      ],
    },
    {
      heading: "Wen du fragst, und was",
      level: "advice",
      paragraphs: [
        "IT, deine Datenschutz-Ansprechperson oder deine Führungskraft — je nachdem, was es gibt. Eine kurze Nachricht genügt, und schriftlich zu fragen ist Absicht: Es schiebt die Entscheidung zu der Person, der sie gehört.",
      ],
      list: [
        "Gibt es ein freigegebenes KI-Werkzeug, und haben wir dafür einen Geschäfts- oder Teamtarif?",
        "Darf ich es für Arbeitsmaterial nutzen, und gibt es etwas, das ich keinesfalls hineingeben darf?",
        "Gibt es eine Richtlinie oder eine Schulung, die ich hätte sehen sollen?",
        "Falls es noch nichts gibt — wen frage ich in einem Monat noch einmal?",
      ],
    },
    {
      heading: "Was deine Entscheidung ist, und was nicht",
      level: "assessment",
      paragraphs: [
        "Du entscheidest, wie du arbeitest: ob dir ein Modell beim Entwerfen, Strukturieren, Prüfen oder Erklären hilft. Das ist dein Handwerk, dafür braucht es keine Freigabe.",
        "Du entscheidest nicht, ob Material deines Arbeitgebers oder seiner Kunden das Unternehmen verlassen darf. Diese Entscheidung gehört dem, der die Haftung trägt — und sie bleibt seine, auch wenn er sie noch nicht getroffen hat.",
        "Diese Unterscheidung lohnt sich, denn sie heißt: KI zu benutzen ist nicht der riskante Teil. Auszuwählen, was hineinkommt, schon.",
      ],
    },
    {
      heading: "Es geht ums Konto, nicht ums Werkzeug",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Daran scheitern mehr Leute als an allem anderen auf dieser Seite. Dein privates Konto läuft auf Verbraucherbedingungen, auch wenn du damit arbeitest — und in Verbrauchertarifen ist Training mit deiner Eingabe im Regelfall die Voreinstellung, nicht die Ausnahme.",
        "Für Entwicklerwerkzeuge gilt dasselbe. Ein Coding-Assistent aus einem privaten Konto erbt dessen Bedingungen, nicht den beruflichen Charakter der Arbeit.",
      ],
      links: [
        {
          label: "Trainiert das Werkzeug mit dem, was du eingibst?",
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
        "Nutz es für Material, das dir gehört: deine Entwürfe, deine Notizen, allgemeine Fragen, deine eigene Einarbeitung.",
        "Halt Kundendaten, Personalangelegenheiten, Verträge, Zugangsdaten und alles unter NDA vollständig heraus.",
        "Wenn du Hilfe bei etwas Vertraulichem brauchst, beschreib das Problem abstrakt, statt das Dokument einzufügen.",
        "Verwende kein privates Konto für Firmenmaterial, auch nicht kurz. Das ist der Schritt, der sich schlecht rückgängig machen lässt.",
      ],
    },
    {
      heading: "Falls du es längst getan hast",
      level: "advice",
      paragraphs: [
        "Sehr wahrscheinlich hast du, denn die meisten haben, bevor irgendwer darüber nachgedacht hat. Es zählt, was du jetzt tust, nicht der Rückblick.",
        "Lösch die Unterhaltungen, die es enthielten. Tausch alles aus, was einem Schlüssel oder Passwort ähnelte. Und sag Bescheid — der IT, deiner Führungskraft. Ein Unternehmen, das es jetzt erfährt, kann entscheiden; eines, das es in einem halben Jahr von anderer Seite erfährt, nicht mehr.",
      ],
      links: [{ label: "Wieder herausbekommen", href: "/de/data-flows/getting-it-back-out" }],
    },
    {
      heading: "Frag dich das vor dem nächsten Prompt",
      level: "advice",
      paragraphs: ["Ist eine Antwort nein oder unklar, ist das der Punkt, den du zuerst klärst."],
      list: [
        "Weiß ich, ob mein Arbeitgeber ein Werkzeug freigegeben hat?",
        "Bin ich gerade in einem Arbeitskonto angemeldet oder in einem privaten?",
        "Gehört mir, was ich gleich absende?",
        "Wäre es mir recht, wenn meine Führungskraft diese Unterhaltung liest?",
        "Könnte ich sie löschen, wenn mich in einem halben Jahr jemand darum bittet?",
      ],
    },
  ],
};

export const getEmployeeStart = (locale: SiteLocale): Article => (locale === "de" ? de : en);
