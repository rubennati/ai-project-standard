/**
 * Which of your systems can serve as a knowledge source, and which cannot.
 *
 * The page exists because "connect it to everything" is offered as an answer,
 * and the systems being connected have very different shapes. Mail is an event
 * stream; a workspace is a set of objects; a folder is files. Connecting all
 * three is easy and treating all three as the same is the mistake.
 *
 * No vendor is assessed. The comparison is about the shape of the data, which
 * does not change when a product name does.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-09";

const en: Article = {
  title: "Which of your systems can be a knowledge source",
  subtitle: "Mail, a workspace and a folder can all be connected. They cannot all be relied on the same way.",
  description:
    "Why mail is a poor place to keep what you know, what each kind of system is good at, and why \"we are introducing this\" means four different things to four people.",
  lead: "Connecting an AI tool to your systems is now easy enough that the question has shifted. Not which of them can be connected — nearly all of them can — but which of them holds knowledge in a shape that survives being retrieved.",
  sections: [
    {
      heading: "Mail is an event stream, not a knowledge base",
      level: "assessment",
      paragraphs: [
        "Both a mailbox and a workspace can be attached through an interface. What they hold is not alike.",
        "A workspace page has a title, content, properties, an owner and a last-edited date. It is an object that represents the current state of something. A message has a sender, a timestamp, a subject and a thread — it represents what someone said at a moment, and the next message may contradict it.",
        "The knowledge in a thread is usually \"we went with option B\", buried three replies down, next to two proposals that were rejected and one that was withdrawn. A retrieval system that finds the second message and not the fifth will answer with a decision nobody took.",
        "That does not make mail useless. It makes it a source rather than a store: something reads it, recognises the decision, and writes that decision somewhere it can be maintained.",
      ],
    },
    {
      heading: "Three shapes, three strengths",
      level: "assessment",
      paragraphs: [
        "Worth matching to the job rather than picking a favourite.",
      ],
      figure: {
        kind: "reach",
        caption: "What each kind of system is suited to",
        rows: [
          { target: "Workspace or wiki", state: "good as a store", reached: "yes", note: "Structured pages with owners and dates. Made for maintaining what is currently true" },
          { target: "Folder of files", state: "good for material", reached: "yes", note: "Anything of any format, readable without the tool that made it, easy to keep and to move" },
          { target: "Mail", state: "good as a source", reached: "partial", note: "Time-ordered and person-bound. Read it to extract; do not treat it as the canonical answer" },
          { target: "Chat history", state: "not a store", reached: "no", note: "What was said, not what was concluded, and rarely visible to anyone else" },
          { target: "Document system", state: "holds originals", reached: "partial", note: "The authoritative copy of a document is not the same thing as knowledge about it" },
        ],
      },
    },
    {
      heading: "Reading a mailbox and acting in one are different risks",
      level: "assessment",
      paragraphs: [
        "Worth separating before granting access, because the consent screen usually does not.",
        "Reading mail to answer a question is comparatively contained: the risk is that something is read which should not have been. Replying, forwarding, sending or deleting reaches people outside your organisation and cannot be taken back.",
        "If a tool offers both under one permission, that is a finding about the tool. Where it can be split, split it — and keep sending behind an explicit confirmation rather than a general grant.",
      ],
    },
    {
      heading: "Four shapes a setup can take",
      level: "assessment",
      paragraphs: [
        "Most real arrangements are one of these, and the differences that matter are effort and how much of the data path you control — not capability.",
      ],
      list: [
        "Quick document chat — upload something, ask about it, move on. Low effort; what happens to the file depends entirely on the tier you are on",
        "Search across a collection — material is indexed once and looked up per question, with citations. Medium to high effort; sovereignty depends on where the index and the model sit",
        "A maintained knowledge base — pages someone owns and keeps current, which a tool reads and proposes changes to. Medium effort, and the cost is ongoing rather than upfront",
        "An assistant working in your systems — reading and acting across a workspace, mail or a folder. Highest usefulness and the only one where a mistake reaches other people",
      ],
    },
    {
      heading: "\"We are introducing this\" means four different things",
      level: "assessment",
      paragraphs: [
        "The same project looks unlike itself depending on who is describing it, which is why these conversations go in circles.",
      ],
      figure: {
        kind: "reach",
        caption: "What each role sees in the same system",
        rows: [
          { target: "The person using it", state: "a chat box and answers", reached: "yes", note: "Judges it on whether the answer was right and whether the source was shown" },
          { target: "The person building it", state: "a dozen moving parts", reached: "yes", note: "Retrieval, indexes, interfaces, models — each one its own failure" },
          { target: "The person administering it", state: "accounts and connectors", reached: "yes", note: "Who has access, which systems are attached, what the logs show" },
          { target: "The person accountable for the data", state: "new processing", reached: "yes", note: "Permissions, data paths, retention, contracts, audit — several new operations to assess" },
        ],
      },
    },
    {
      heading: "What decides the outcome",
      level: "advice",
      paragraphs: [
        "Not the model. In practice the things that decide whether this works are which data it can reach, whose permissions apply, how current the material is, and who keeps it that way.",
        "Two practical consequences. Point a tool at the system that holds current, owned, structured material rather than at everything you have. And where knowledge is worth relying on, give it somewhere to live that is not a thread.",
      ],
      links: [
        { label: "Where your data is, and who can reach it", href: "/data-flows/data-sovereignty" },
        { label: "Can I enter this data into an AI tool?", href: "/law/what-may-go-in" },
      ],
    },
  ],
};

const de: Article = {
  title: "Welche deiner Systeme als Wissensquelle taugen",
  subtitle: "Mail, ein Workspace und ein Ordner lassen sich alle anbinden. Verlassen kann man sich nicht auf alle gleich.",
  description:
    "Warum Mail ein schlechter Ort für Wissen ist, wofür jede Art von System taugt, und warum „wir führen das ein“ für vier Personen vier verschiedene Dinge bedeutet.",
  lead: "Ein KI-Tool an die eigenen Systeme anzubinden ist inzwischen einfach genug, dass sich die Frage verschoben hat. Nicht welche sich anbinden lassen — fast alle —, sondern welche Wissen in einer Form halten, die das Wiederfinden übersteht.",
  sections: [
    {
      heading: "Mail ist ein Ereignisstrom, keine Wissensbasis",
      level: "assessment",
      paragraphs: [
        "Ein Postfach und ein Workspace lassen sich beide über eine Schnittstelle anbinden. Was sie enthalten, ist nicht dasselbe.",
        "Eine Workspace-Seite hat Titel, Inhalt, Eigenschaften, eine verantwortliche Person und ein Änderungsdatum. Sie ist ein Objekt, das den aktuellen Stand einer Sache abbildet. Eine Nachricht hat Absender, Zeitstempel, Betreff und einen Verlauf — sie bildet ab, was jemand in einem Moment gesagt hat, und die nächste Nachricht kann das Gegenteil sagen.",
        "Das Wissen in einem Verlauf lautet meist „wir haben uns für Variante B entschieden“, drei Antworten tief vergraben, daneben zwei abgelehnte Vorschläge und einer, der zurückgezogen wurde. Ein Retrieval, das die zweite Nachricht findet und nicht die fünfte, antwortet mit einer Entscheidung, die niemand getroffen hat.",
        "Damit ist Mail nicht nutzlos. Sie ist eine Quelle statt eines Speichers: Etwas liest sie, erkennt die Entscheidung und schreibt sie dorthin, wo sie gepflegt werden kann.",
      ],
    },
    {
      heading: "Drei Formen, drei Stärken",
      level: "assessment",
      paragraphs: [
        "Der Aufgabe zuordnen statt einen Favoriten wählen.",
      ],
      figure: {
        kind: "reach",
        caption: "Wofür jede Art von System taugt",
        rows: [
          { target: "Workspace oder Wiki", state: "gut als Speicher", reached: "yes", note: "Strukturierte Seiten mit Verantwortlichen und Daten. Gebaut, um Aktuelles zu pflegen" },
          { target: "Dateiordner", state: "gut für Material", reached: "yes", note: "Alles in jedem Format, lesbar ohne das erzeugende Tool, leicht zu behalten und zu bewegen" },
          { target: "Mail", state: "gut als Quelle", reached: "partial", note: "Zeitlich geordnet und personengebunden. Zum Auslesen, nicht als maßgebliche Antwort" },
          { target: "Chatverlauf", state: "kein Speicher", reached: "no", note: "Was gesagt wurde, nicht was geschlossen wurde — und für andere selten sichtbar" },
          { target: "Dokumentensystem", state: "hält Originale", reached: "partial", note: "Die maßgebliche Fassung eines Dokuments ist nicht dasselbe wie Wissen darüber" },
        ],
      },
    },
    {
      heading: "Ein Postfach lesen und darin handeln sind verschiedene Risiken",
      level: "assessment",
      paragraphs: [
        "Vor der Freigabe zu trennen, denn der Zustimmungsdialog tut es meist nicht.",
        "Mail zu lesen, um eine Frage zu beantworten, ist vergleichsweise eingegrenzt: Das Risiko ist, dass etwas gelesen wird, was nicht hätte gelesen werden dürfen. Antworten, weiterleiten, senden oder löschen erreicht Menschen außerhalb der Organisation und lässt sich nicht zurücknehmen.",
        "Bietet ein Tool beides unter einer Berechtigung an, ist das ein Befund über das Tool. Wo es sich trennen lässt, trenne es — und halte das Senden hinter einer ausdrücklichen Bestätigung statt hinter einer allgemeinen Freigabe.",
      ],
    },
    {
      heading: "Vier Formen, die ein Aufbau annehmen kann",
      level: "assessment",
      paragraphs: [
        "Die meisten realen Anordnungen sind eine davon, und die entscheidenden Unterschiede sind Aufwand und wie viel vom Datenweg du kontrollierst — nicht die Leistungsfähigkeit.",
      ],
      list: [
        "Schneller Dokumenten-Chat — etwas hochladen, danach fragen, weitermachen. Wenig Aufwand; was mit der Datei geschieht, hängt allein von deiner Stufe ab",
        "Suche über eine Sammlung — Material wird einmal indiziert und je Frage nachgeschlagen, mit Quellenangabe. Mittlerer bis hoher Aufwand; die Souveränität hängt davon ab, wo Index und Modell sitzen",
        "Eine gepflegte Wissensbasis — Seiten mit Verantwortlichen, aktuell gehalten, die ein Tool liest und für die es Änderungen vorschlägt. Mittlerer Aufwand, und die Kosten laufen mit statt vorab",
        "Eine Assistenz, die in deinen Systemen arbeitet — liest und handelt über Workspace, Mail oder Ordner hinweg. Am nützlichsten, und die einzige Form, bei der ein Fehler andere Menschen erreicht",
      ],
    },
    {
      heading: "„Wir führen das ein“ bedeutet vier verschiedene Dinge",
      level: "assessment",
      paragraphs: [
        "Dasselbe Vorhaben sieht je nach Beschreibendem anders aus — deshalb drehen sich diese Gespräche im Kreis.",
      ],
      figure: {
        kind: "reach",
        caption: "Was jede Rolle im selben System sieht",
        rows: [
          { target: "Wer es benutzt", state: "ein Chatfenster und Antworten", reached: "yes", note: "Beurteilt es danach, ob die Antwort stimmte und die Quelle sichtbar war" },
          { target: "Wer es baut", state: "ein Dutzend bewegliche Teile", reached: "yes", note: "Retrieval, Indizes, Schnittstellen, Modelle — jedes mit eigenem Fehlerbild" },
          { target: "Wer es verwaltet", state: "Konten und Anbindungen", reached: "yes", note: "Wer Zugriff hat, welche Systeme hängen dran, was die Protokolle zeigen" },
          { target: "Wer für die Daten geradesteht", state: "neue Verarbeitungen", reached: "yes", note: "Rechte, Datenwege, Aufbewahrung, Verträge, Prüfung — mehrere neue Vorgänge zu bewerten" },
        ],
      },
    },
    {
      heading: "Was über das Ergebnis entscheidet",
      level: "advice",
      paragraphs: [
        "Nicht das Modell. In der Praxis entscheiden darüber, ob das funktioniert: an welche Daten es kommt, wessen Rechte gelten, wie aktuell das Material ist und wer es aktuell hält.",
        "Zwei praktische Folgen. Richte ein Tool auf das System, das aktuelles, verantwortetes, strukturiertes Material hält — statt auf alles, was du hast. Und wo Wissen belastbar sein soll, gib ihm einen Ort, der kein Mailverlauf ist.",
      ],
      links: [
        { label: "Wo deine Daten liegen und wer herankommt", href: "/de/data-flows/data-sovereignty" },
        { label: "Darf ich diese Daten in ein KI-Tool geben?", href: "/de/law/what-may-go-in" },
      ],
    },
  ],
};

export const getWhereKnowledgeLives = (locale: SiteLocale): Article => (locale === "de" ? de : en);
