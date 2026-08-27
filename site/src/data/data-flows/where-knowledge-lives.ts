/**
 * By what route a tool comes to know about your material, and which of your
 * systems is worth pointing it at.
 *
 * The page exists because "connect it to everything" is offered as an answer,
 * and the systems being connected have very different shapes. Mail is an event
 * stream; a workspace is a set of objects; a folder is files. Connecting all
 * three is easy and treating all three as the same is the mistake.
 *
 * Slice 4 made it the canonical owner of the routes as well as the sources. It
 * received the request-size explanation and the three ways a tool can learn
 * about your material from `/start/what-it-is-doing`, together with the figure
 * that compares them (`.ai/decisions.md`, 2026-08-24). Those replaced this
 * page's own `Four shapes a setup can take`, which named the same axis a second
 * time: uploading, indexed lookup and a maintained base are the same three
 * routes with effort added. The fourth of its shapes — a tool reading and
 * acting inside your systems — survives as the opening of the read-versus-act
 * section, where it belongs.
 *
 * Slice 6 added the vendor-claim decoder — "trained on our data" can name any
 * of the three routes — from `what-you-agree-to`, which had been carrying a
 * second copy of this page's distinction (`.ai/decisions.md`, 2026-08-27).
 *
 * The layer figure stays on the `/data-flows` hub. This page explains how
 * material travels; it does not draw a second anatomy of a connection.
 *
 * No vendor is assessed. The comparison is about the shape of the data, which
 * does not change when a product name does.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-09";

export interface DataFlowsNextStep {
  label: string;
  description: string;
}

const nextStep: Record<SiteLocale, DataFlowsNextStep> = {
  en: {
    label: "Connect AI to tools and data",
    description:
      "How a connection to another system is made, what it can then see and do, and where the boundary sits.",
  },
  de: {
    label: "KI mit Tools und Daten verbinden",
    description:
      "Wie eine Anbindung an ein anderes System zustande kommt, was sie dann sehen und tun kann und wo die Grenze liegt.",
  },
};

export const getWhereKnowledgeLivesNextStep = (
  locale: SiteLocale,
): DataFlowsNextStep => nextStep[locale];

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
      heading: "What each kind of system is good at",
      level: "assessment",
      paragraphs: [
        "Worth matching to the job rather than picking a favourite.",
      ],
      figure: {
        kind: "reach",
        caption: "Store, material or source — and what cannot be relied on",
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
      heading: "How much fits in one request, and what that decides",
      level: "assessment",
      paragraphs: [
        "Each request is computed from scratch. What feels like memory is the application resending earlier parts of the conversation, or storing notes and reinserting them later.",
        "There is a limit to how much can be sent, which is why a long conversation starts to drift: something has to be dropped, summarised or reordered. Nothing is broken when this happens. It is the mechanism working at its edge.",
        "The same limit is smaller than any real document collection. A system with a million documents does not put a million documents in front of the model. It selects a handful.",
        "So the interesting engineering is selection: what goes in, what stays out, in what order, how much conversation history, which tool results. Retrieval is one way of doing that selection. So is memory. So is deciding which parts of a file to include.",
        "The practical consequence for you: a precise question usually beats a large upload, because it makes the selection easier for the system rather than harder.",
      ],
    },
    {
      heading: "Three ways a tool can know about your material",
      level: "assessment",
      paragraphs: [
        "They are often discussed as though they were rivals. They are answers to different problems.",
      ],
      list: [
        "Put it in the request — upload a file or paste text. Immediate, exact, limited by how much fits, and gone when the conversation ends unless the product keeps it",
        "Look it up when needed — the system searches your material and includes the relevant parts. Handles collections far larger than one request, and can cite where an answer came from. This is what \"RAG\" names",
        "Train it in — adjust a model on your material. Changes how the model writes and behaves rather than what it can cite, is expensive to repeat, and a new document means doing it again",
      ],
      figure: {
        kind: "reach",
        caption: "Which approach answers which problem",
        rows: [
          { target: "One document, right now", state: "put it in the request", reached: "yes", note: "Nothing to build; the limit is how much fits" },
          { target: "A collection that keeps growing", state: "look it up when needed", reached: "yes", note: "New material is added to an index rather than to a model" },
          { target: "Answers that cite a source", state: "look it up when needed", reached: "yes", note: "Only this route knows which passage an answer rested on" },
          { target: "A particular tone or format", state: "train it in", reached: "partial", note: "Changes behaviour, not knowledge. Often a well-written instruction does the same job" },
          { target: "Facts that change weekly", state: "train it in", reached: "no", note: "Retraining for each change is the expensive way to do lookup" },
        ],
      },
      links: [{ label: "RAG, defined", href: "/glossary/rag" }],
    },
    {
      heading: "\u201cTrained on our data\u201d can mean any of these",
      level: "assessment",
      paragraphs: [
        "\u201cSpecialised for law\u201d or \u201cfor medicine\u201d describes the product, not which of these routes built it. Behind the phrase can sit a fine-tuned model, retrieval over a curated collection, rule-based checks on top of a general model, a system prompt — or several of those at once. All of them can make a perfectly good product, and the marketing rarely distinguishes them.",
        "It is worth asking which one you are buying, because the answers differ in the ways that matter to you: what it cost to build, where your material ends up, and what happens when the underlying model is replaced. The words to ask with are fine-tuning and retrieval — and asking is usually enough to find out.",
      ],
      links: [
        { label: "Fine-tuning, defined", href: "/glossary/fine-tuning" },
        { label: "Retrieval, defined", href: "/glossary/retrieval" },
      ],
    },
    {
      heading: "Reading a mailbox and acting in one are different risks",
      level: "assessment",
      paragraphs: [
        "A fourth arrangement sits on top of the three: a tool that reads and acts inside your systems rather than answering about them. It is the most useful of them, and the only one where a mistake reaches other people.",
        "Worth separating before granting access, because the consent screen usually does not.",
        "Reading mail to answer a question is comparatively contained: the risk is that something is read which should not have been. Replying, forwarding, sending or deleting reaches people outside your organisation and cannot be taken back.",
        "If a tool offers both under one permission, that is a finding about the tool. Where it can be split, split it — and keep sending behind an explicit confirmation rather than a general grant.",
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
      heading: "Wofür jede Art von System taugt",
      level: "assessment",
      paragraphs: [
        "Der Aufgabe zuordnen statt einen Favoriten wählen.",
      ],
      figure: {
        kind: "reach",
        caption: "Speicher, Material oder Quelle — und worauf kein Verlass ist",
        rows: [
          { target: "Workspace oder Wiki", state: "gut als Speicher", reached: "yes", note: "Strukturierte Seiten mit Verantwortlichen und Daten. Gebaut, um Aktuelles zu pflegen" },
          { target: "Dateiordner", state: "gut für Material", reached: "yes", note: "Alles in jedem Format, lesbar ohne das erzeugende Tool, leicht zu behalten und zu bewegen" },
          { target: "Mail", state: "gut als Quelle", reached: "partial", note: "Zeitlich geordnet und personengebunden. Zum Auslesen, nicht als maßgebliche Antwort" },
          { target: "Chatverlauf", state: "kein Speicher", reached: "no", note: "Was gesagt wurde, nicht was am Ende beschlossen wurde — und für andere selten sichtbar" },
          { target: "Dokumentensystem", state: "hält Originale", reached: "partial", note: "Die maßgebliche Fassung eines Dokuments ist nicht dasselbe wie Wissen darüber" },
        ],
      },
    },
    {
      heading: "Wie viel in eine Anfrage passt — und was daraus folgt",
      level: "assessment",
      paragraphs: [
        "Jede Anfrage beginnt bei null. Was sich wie Erinnerung anfühlt, ist die Anwendung, die frühere Teile des Gesprächs erneut mitschickt oder Notizen speichert und später wieder einfügt.",
        "Es passt nur eine begrenzte Menge hinein, und deshalb driftet ein langes Gespräch irgendwann: Etwas muss wegfallen, zusammengefasst oder umsortiert werden. Dabei ist nichts kaputt. Der Mechanismus arbeitet an seiner Grenze.",
        "Dieselbe Grenze ist kleiner als jede reale Dokumentensammlung. Ein System mit einer Million Dokumente legt dem Modell nicht eine Million Dokumente vor. Es wählt eine Handvoll aus.",
        "Die interessante Ingenieursarbeit ist deshalb die Auswahl: Was kommt hinein, was bleibt draußen, in welcher Reihenfolge, wie viel Gesprächsverlauf, welche Tool-Ergebnisse. Retrieval ist eine Art, diese Auswahl zu treffen. Memory auch. Und die Entscheidung, welche Teile einer Datei mitgehen, ebenso.",
        "Die praktische Folge für dich: Eine präzise Frage schlägt meist einen großen Upload, weil sie die Auswahl erleichtert statt sie zu erschweren.",
      ],
    },
    {
      heading: "Drei Wege, wie ein Tool von deinem Material erfährt",
      level: "assessment",
      paragraphs: [
        "Sie werden oft als Rivalen behandelt. Sie sind Antworten auf verschiedene Probleme.",
      ],
      list: [
        "In die Anfrage legen — eine Datei hochladen oder Text einfügen. Sofort, exakt, begrenzt durch das, was hineinpasst, und mit dem Gespräch vorbei, sofern das Produkt es nicht aufbewahrt",
        "Bei Bedarf nachschlagen — das System durchsucht dein Material und nimmt die passenden Teile auf. Funktioniert für Sammlungen, die weit größer sind, als in eine Anfrage passt, und kann belegen, woher eine Antwort stammt. Das meint „RAG“",
        "Eintrainieren — ein Modell mit deinem Material feinabstimmen. Ändert, wie das Modell schreibt und sich verhält, nicht was es belegen kann; ist teuer zu wiederholen, und ein neues Dokument heißt: noch einmal",
      ],
      figure: {
        kind: "reach",
        caption: "Welcher Weg welches Problem löst",
        rows: [
          { target: "Ein Dokument, jetzt sofort", state: "in die Anfrage legen", reached: "yes", note: "Nichts zu bauen; die Grenze ist, was hineinpasst" },
          { target: "Eine wachsende Sammlung", state: "bei Bedarf nachschlagen", reached: "yes", note: "Neues Material kommt in einen Index, nicht in ein Modell" },
          { target: "Antworten mit Quellenangabe", state: "bei Bedarf nachschlagen", reached: "yes", note: "Nur dieser Weg weiß, auf welcher Passage eine Antwort ruhte" },
          { target: "Ein bestimmter Ton oder ein Format", state: "eintrainieren", reached: "partial", note: "Ändert Verhalten, nicht Wissen. Oft leistet eine gute Anweisung dasselbe" },
          { target: "Fakten, die sich wöchentlich ändern", state: "eintrainieren", reached: "no", note: "Für jede Änderung neu trainieren ist die teure Art nachzuschlagen" },
        ],
      },
      links: [{ label: "RAG, erklärt", href: "/de/glossary/rag" }],
    },
    {
      heading: "\u201eMit unseren Daten trainiert\u201c kann jeden dieser Wege meinen",
      level: "assessment",
      paragraphs: [
        "\u201eSpezialisiert auf Recht\u201c oder \u201eauf Medizin\u201c beschreibt das Produkt, nicht welcher dieser Wege dahintersteckt. Hinter der Formulierung kann ein feinabgestimmtes Modell stehen, ein Abruf über eine kuratierte Sammlung, regelbasierte Prüfungen über einem allgemeinen Modell, ein System-Prompt — oder mehreres davon zugleich. Alles davon kann ein gutes Produkt ergeben, und das Marketing unterscheidet es selten.",
        "Die Frage, was davon du kaufst, lohnt sich, denn die Antworten unterscheiden sich genau in dem, was dich betrifft: was der Aufbau gekostet hat, wo dein Material landet, und was geschieht, wenn das zugrunde liegende Modell ausgetauscht wird. Die Wörter, mit denen du fragst, sind Fine-Tuning und Retrieval — und Fragen genügt meist, um es zu erfahren.",
      ],
      links: [
        { label: "Fine-Tuning, erklärt", href: "/de/glossary/fine-tuning" },
        { label: "Retrieval, erklärt", href: "/de/glossary/retrieval" },
      ],
    },
    {
      heading: "Ein Postfach lesen und darin handeln sind verschiedene Risiken",
      level: "assessment",
      paragraphs: [
        "Über den dreien liegt eine vierte Konstellation: ein Tool, das in deinen Systemen liest und handelt, statt nur über sie zu antworten. Sie ist die nützlichste — und die einzige, bei der ein Fehler andere Menschen erreicht.",
        "Das gehört vor der Freigabe getrennt, denn der Zustimmungsdialog trennt es meist nicht.",
        "Mail zu lesen, um eine Frage zu beantworten, ist vergleichsweise eingegrenzt: Das Risiko ist, dass etwas gelesen wird, was nicht hätte gelesen werden dürfen. Antworten, weiterleiten, senden oder löschen erreicht Menschen außerhalb der Organisation und lässt sich nicht zurücknehmen.",
        "Bietet ein Tool beides unter einer Berechtigung an, ist das ein Befund über das Tool. Wo es sich trennen lässt, trenne es — und halte das Senden hinter einer ausdrücklichen Bestätigung statt hinter einer allgemeinen Freigabe.",
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
