/**
 * First blog post: the journey a sentence takes.
 *
 * The opening is a measurement made for this post rather than a claim taken
 * from documentation: eleven characters were typed into a search field and
 * Enter was never pressed, and the network log shows the complete phrase
 * leaving the machine anyway. Setup, date and the exact request are stated so
 * anyone can repeat it in their own browser in about a minute.
 *
 * The rest is deliberately narrative and mostly assessment. How a request
 * moves through a distributed system is well understood; what a specific
 * vendor does inside its own pipeline is not something this site can verify,
 * and the post says so rather than inventing detail for the sake of the story.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-04";
export const PUBLISHED = "2026-08-04";

const en: Article = {
  title: "Before you press Enter",
  description:
    "I typed eleven characters into a search box and never pressed Enter. The phrase had already left the machine. What follows a prompt, told as the journey it is.",
  lead: "You have a thought, you type it, you send it. Three steps, and the first two are not what you think they are.",
  sections: [
    {
      heading: "The measurement that started this",
      level: "measured",
      checked: CHECKED,
      paragraphs: [
        "I opened a search engine in a fresh browser, clicked into the field, and typed eleven characters: wetter wien. I did not press Enter. I did not click search. I stopped, and looked at what the browser had already sent.",
        "The last entry in the network log was a request to /ac/ — autocomplete — carrying q=wetter+wien. The whole phrase. Server answered 200. Nothing about that is a scandal: it is how every suggestion box has worked for twenty years, and the engine in question is the one that markets itself on privacy and is open about it.",
        "That is exactly why it is worth showing. The most privacy-conscious mainstream option, doing the ordinary thing, and the words were on someone else's computer before I had decided whether to send them. Repeat it yourself: open the developer tools, go to the network tab, type into any search field, and read.",
      ],
      list: [
        "Setup: desktop Chrome, no extensions, no account, no login.",
        "Typed: 11 characters. Enter: never pressed.",
        "Observed: GET /ac/?q=wetter+wien&kl=wt-wt&vertical=homepage → 200",
        "Date: 4 August 2026.",
      ],
    },
    {
      heading: "So what is a chat window doing while you type?",
      paragraphs: [
        "Honest answer: I do not know, and neither does anyone who has not measured it for the specific tool and the specific day. It is not a mystery, though — it is one minute of work with the network tab open. Type, do not send, read the log.",
        "Which is the whole point of this post. The question is not deep. It is just never asked, and the answer changes per tool and per release. So ask it about the box you use, rather than trusting either the reassuring or the alarming version.",
      ],
    },
    {
      heading: "What Enter actually starts",
      paragraphs: [
        "Now the interesting part. You press Enter, and your sentence stops being text on your screen and becomes a package with an address.",
        "First it does not go anywhere at all: it goes to your operating system, which hands it to the network stack, which wraps it in layers like a parcel in a parcel in a parcel. Your machine asks a name server where this service lives, and gets back a number. Then it opens an encrypted connection — the padlock in the address bar — and that encryption is genuinely good: nobody between you and the other end reads along.",
        "Between you and the other end. That is the sentence people hear as “nobody reads it”, and it does not say that. It says nobody in the corridor. It says nothing about the room at the end of the corridor, and the room at the end of the corridor is the whole subject.",
      ],
    },
    {
      heading: "The corridor is longer than the picture in your head",
      paragraphs: [
        "You imagine two boxes: you, and the AI. There are more, and most of them belong to somebody else.",
        "There is usually a network in front — the layer that keeps the service reachable and fends off attacks — and it terminates your encryption, reads the request, and opens a fresh one onward. There are load balancers deciding which machine takes you. There are caches. Somewhere at the end, a machine holds your text in memory long enough to produce an answer.",
        "Each of those hops is a place where the text exists in readable form, however briefly. Not because anyone is being sinister — because that is how a request gets processed at all. You cannot compute on something you cannot read.",
      ],
      figure: {
        kind: "journey",
        caption:
          "A simplified path. The exact stations differ per provider, and a provider may add or remove one without telling anybody — which is itself part of the point.",
        markIndex: 4,
        markLabel: "reads it",
        stops: [
          { label: "Your keyboard", detail: "The last moment the sentence is only yours." },
          { label: "The app or browser", detail: "May send as you type. Measurable in one minute — see above." },
          { label: "Your operating system", detail: "Wraps the text in layers and asks a name server where the service lives." },
          { label: "The encrypted connection", detail: "Real protection against anyone in between. Not against either end." },
          { label: "The edge network in front", detail: "Terminates your encryption, reads the request, opens a fresh one onward." },
          { label: "Load balancers and caches", detail: "Decide which machine takes you. Each one holds the request briefly." },
          { label: "The machine that answers", detail: "Your text sits in memory long enough to produce a reply." },
          { label: "Stored conversation", detail: "The reply comes back — and both halves stay, because you would miss them." },
          { label: "Logs and backups", detail: "Anything that went wrong on the way was written down somewhere else." },
        ],
      },
    },
    {
      heading: "And when something goes wrong, it gets written down",
      paragraphs: [
        "This is the part almost nobody pictures. Systems fail. When they do, they record what they were holding at the time, because otherwise nobody could fix them.",
        "An error log is not a sinister archive. It is a diagnostic tool, and it is also a place your sentence can land, in a system with its own retention period, its own access rules and its own backups — which nobody thought of as a place your sentence would land.",
        "The chat window shows you one conversation in one place. The reality is a request that touched several systems, any of which may have had a bad moment while holding your words.",
      ],
    },
    {
      heading: "Where the room actually is",
      level: "assessment",
      paragraphs: [
        "The machine at the end stands somewhere physical, in some country, run by a company registered in some jurisdiction. Those are three different questions and people collapse them into one.",
        "A service can run on servers in Frankfurt and belong to a company in Delaware. The location answers who has physical custody. The company's home answers who can compel disclosure. The European supervisory authorities have been explicit that those come apart — which is the single most useful thing to know when someone tells you their service is EU-hosted.",
      ],
      links: [{ label: "Getting it back out", href: "/data-flows/getting-it-back-out" }],
    },
    {
      heading: "The way back, and what stays",
      paragraphs: [
        "The answer comes back the same way, through the same hops. And then something quietly different happens: it stops.",
        "Your conversation is now a stored object. Not because anything went wrong, but because you would be annoyed if it were not there tomorrow. That convenience is a decision about storage that you made without being asked.",
        "Which means the housekeeping is yours. Leave the conversation there and it stays for as long as the retention window runs. Delete it and you have removed the copy you can see — the one place where deleting costs you nothing and is entirely within your control.",
      ],
    },
    {
      heading: "What “delete” can and cannot reach",
      level: "assessment",
      paragraphs: [
        "Deleting the conversation removes the conversation. It does not reach backups that have not yet rotated, and it does not reach anything that was already used to train a model — vendors are clear that switching training off stops future runs, not past ones.",
        "Archiving reaches even less. It is a filing decision, not a deletion decision, and it is worth not confusing the two.",
      ],
      figure: {
        kind: "reach",
        caption:
          "Deleting is worth doing precisely because it is the one column you control. It is not worth mistaking for the whole picture.",
        rows: [
          { target: "The conversation you see", state: "Reached", reached: "yes", note: "gone from the interface, and from the account behind it." },
          { target: "Backups already written", state: "Not immediately", reached: "partial", note: "they fall out when the retention window rotates, not when you click." },
          { target: "A model already trained", state: "Not reached", reached: "no", note: "switching training off governs future runs, not ones that already happened." },
          { target: "Archiving", state: "Reaches nothing", reached: "no", note: "it is a filing decision. The material stays exactly where it was." },
        ],
      },
    },
    {
      heading: "So what do you actually do",
      level: "advice",
      paragraphs: [
        "Nothing in here is an argument for not using these tools. It is an argument for knowing which of the steps is yours.",
      ],
      list: [
        "The keystroke is yours. Once it is sent, it is not.",
        "Spend one minute with the network tab on the tool you use most. You will never again wonder in the abstract.",
        "Delete conversations that held someone else's material. It is free and it is the only copy you control.",
        "Check the training switch — at some vendors it is also the retention switch.",
        "Ask who the contracting party is, not only where the servers stand.",
      ],
      links: [
        { label: "Does the tool train on what you type?", href: "/data-flows/training-and-retention" },
        { label: "What may go into an AI tool?", href: "/law/what-may-go-in" },
      ],
    },
  ],
};

const de: Article = {
  title: "Bevor du Enter drückst",
  description:
    "Ich habe elf Zeichen in ein Suchfeld getippt und nie Enter gedrückt. Der Satz hatte den Rechner längst verlassen. Was nach einem Prompt passiert — als Reise erzählt.",
  lead: "Du hast einen Gedanken, tippst ihn, schickst ihn ab. Drei Schritte — und die ersten beiden sind nicht das, wofür du sie hältst.",
  sections: [
    {
      heading: "Die Messung, mit der das anfing",
      level: "measured",
      checked: CHECKED,
      paragraphs: [
        "Ich habe eine Suchmaschine in einem frischen Browser geöffnet, ins Feld geklickt und elf Zeichen getippt: wetter wien. Ich habe kein Enter gedrückt. Ich habe nicht auf Suchen geklickt. Ich habe aufgehört und nachgesehen, was der Browser bereits verschickt hatte.",
        "Der letzte Eintrag im Netzwerkprotokoll war eine Anfrage an /ac/ — Autocomplete — mit q=wetter+wien. Der ganze Satz. Server antwortet 200. Nichts daran ist ein Skandal: So arbeiten Vorschlagsfelder seit zwanzig Jahren, und die betreffende Suchmaschine ist ausgerechnet die, die mit Privatsphäre wirbt und offen darüber schreibt.",
        "Genau deshalb lohnt es sich zu zeigen. Die datenschutzbewussteste verbreitete Option, beim ganz Gewöhnlichen — und die Wörter lagen auf einem fremden Rechner, bevor ich entschieden hatte, ob ich sie abschicke. Mach es nach: Entwicklerwerkzeuge öffnen, Reiter Netzwerk, in irgendein Suchfeld tippen, lesen.",
      ],
      list: [
        "Aufbau: Chrome am Desktop, keine Erweiterungen, kein Konto, keine Anmeldung.",
        "Getippt: 11 Zeichen. Enter: nie gedrückt.",
        "Beobachtet: GET /ac/?q=wetter+wien&kl=wt-wt&vertical=homepage → 200",
        "Datum: 4. August 2026.",
      ],
    },
    {
      heading: "Und was tut ein Chatfenster, während du tippst?",
      paragraphs: [
        "Ehrliche Antwort: Ich weiß es nicht — und niemand weiß es, der es nicht für das konkrete Werkzeug an einem konkreten Tag gemessen hat. Ein Rätsel ist es aber nicht: Es ist eine Minute Arbeit mit offenem Netzwerk-Reiter. Tippen, nicht absenden, Protokoll lesen.",
        "Und das ist der ganze Punkt dieses Beitrags. Die Frage ist nicht tief. Sie wird nur nie gestellt, und die Antwort ändert sich je Werkzeug und je Version. Also stell sie für das Feld, in das du tippst — statt der beruhigenden oder der alarmierenden Fassung zu glauben.",
      ],
    },
    {
      heading: "Was Enter tatsächlich auslöst",
      paragraphs: [
        "Jetzt der interessante Teil. Du drückst Enter, und dein Satz hört auf, Text auf deinem Bildschirm zu sein, und wird ein Paket mit einer Adresse.",
        "Zuerst geht er nirgendwohin: Er geht an dein Betriebssystem, das ihn an den Netzwerk-Stapel übergibt, der ihn in Schichten wickelt wie ein Paket in einem Paket in einem Paket. Dein Rechner fragt einen Namensserver, wo dieser Dienst wohnt, und bekommt eine Nummer zurück. Dann öffnet er eine verschlüsselte Verbindung — das Schloss in der Adresszeile — und diese Verschlüsselung ist wirklich gut: Niemand zwischen dir und dem anderen Ende liest mit.",
        "Zwischen dir und dem anderen Ende. Diesen Satz hören die meisten als „niemand liest mit“, und das steht dort nicht. Dort steht: niemand im Gang. Über den Raum am Ende des Gangs steht dort nichts — und der Raum am Ende des Gangs ist das ganze Thema.",
      ],
    },
    {
      heading: "Der Gang ist länger als das Bild im Kopf",
      paragraphs: [
        "Du stellst dir zwei Kästchen vor: dich und die KI. Es sind mehr, und die meisten gehören jemand anderem.",
        "Meist liegt ein Netzwerk davor — die Schicht, die den Dienst erreichbar hält und Angriffe abwehrt. Sie beendet deine Verschlüsselung, liest die Anfrage und öffnet eine neue nach hinten. Dann Lastverteiler, die entscheiden, welche Maschine dich nimmt. Caches. Und irgendwo am Ende hält eine Maschine deinen Text im Arbeitsspeicher, lange genug, um eine Antwort zu erzeugen.",
        "Jede dieser Stationen ist ein Ort, an dem der Text lesbar vorliegt, und sei es kurz. Nicht aus Hinterhältigkeit — sondern weil eine Anfrage sonst gar nicht verarbeitet werden könnte. Man kann nicht mit etwas rechnen, das man nicht lesen kann.",
      ],
      figure: {
        kind: "journey",
        caption:
          "Ein vereinfachter Weg. Die genauen Stationen unterscheiden sich je Anbieter — und ein Anbieter kann eine hinzufügen oder entfernen, ohne es jemandem zu sagen. Auch das gehört zum Punkt.",
        markIndex: 4,
        markLabel: "liest mit",
        stops: [
          { label: "Deine Tastatur", detail: "Der letzte Moment, in dem der Satz nur dir gehört." },
          { label: "App oder Browser", detail: "Sendet womöglich schon beim Tippen. In einer Minute messbar — siehe oben." },
          { label: "Dein Betriebssystem", detail: "Wickelt den Text in Schichten und fragt einen Namensserver, wo der Dienst wohnt." },
          { label: "Die verschlüsselte Verbindung", detail: "Echter Schutz vor allen dazwischen. Nicht vor den beiden Enden." },
          { label: "Das vorgelagerte Netzwerk", detail: "Beendet deine Verschlüsselung, liest die Anfrage, öffnet eine neue nach hinten." },
          { label: "Lastverteiler und Caches", detail: "Entscheiden, welche Maschine dich nimmt. Jede hält die Anfrage kurz." },
          { label: "Die antwortende Maschine", detail: "Dein Text liegt im Arbeitsspeicher, lange genug für eine Antwort." },
          { label: "Gespeicherte Unterhaltung", detail: "Die Antwort kommt zurück — und beide Hälften bleiben, weil du sie vermissen würdest." },
          { label: "Protokolle und Sicherungen", detail: "Was unterwegs schiefging, wurde anderswo mitgeschrieben." },
        ],
      },
    },
    {
      heading: "Und wenn etwas schiefgeht, wird es aufgeschrieben",
      paragraphs: [
        "Das ist der Teil, den sich fast niemand vorstellt. Systeme fallen aus. Und wenn sie das tun, halten sie fest, was sie gerade in der Hand hatten — sonst könnte sie niemand reparieren.",
        "Ein Fehlerprotokoll ist kein finsteres Archiv. Es ist ein Diagnosewerkzeug. Es ist zugleich ein Ort, an dem dein Satz landen kann, in einem System mit eigener Aufbewahrungsfrist, eigenen Zugriffsregeln und eigenen Sicherungen — an das niemand als Ort für deinen Satz gedacht hat.",
        "Das Chatfenster zeigt dir eine Unterhaltung an einem Ort. Tatsächlich war es eine Anfrage durch mehrere Systeme, von denen jedes einen schlechten Moment gehabt haben kann, während es deine Wörter hielt.",
      ],
    },
    {
      heading: "Wo der Raum wirklich steht",
      level: "assessment",
      paragraphs: [
        "Die Maschine am Ende steht irgendwo physisch, in irgendeinem Land, betrieben von einem Unternehmen mit Sitz in irgendeiner Rechtsordnung. Das sind drei verschiedene Fragen, und sie werden regelmäßig zu einer zusammengezogen.",
        "Ein Dienst kann auf Servern in Frankfurt laufen und einem Unternehmen in Delaware gehören. Der Standort beantwortet, wer die physische Obhut hat. Der Unternehmenssitz beantwortet, wer Herausgabe erzwingen kann. Die europäischen Aufsichtsbehörden haben ausdrücklich festgehalten, dass beides auseinanderfällt — und das ist das Nützlichste, was man wissen kann, wenn jemand sagt, sein Dienst sei EU-gehostet.",
      ],
      links: [{ label: "Wieder herausbekommen", href: "/de/data-flows/getting-it-back-out" }],
    },
    {
      heading: "Der Rückweg — und was bleibt",
      paragraphs: [
        "Die Antwort kommt denselben Weg zurück, über dieselben Stationen. Und dann passiert etwas leise Anderes: Sie bleibt liegen.",
        "Deine Unterhaltung ist jetzt ein gespeichertes Objekt. Nicht weil etwas schiefging, sondern weil du dich ärgern würdest, wenn sie morgen weg wäre. Diese Bequemlichkeit ist eine Entscheidung über Speicherung, die du getroffen hast, ohne gefragt worden zu sein.",
        "Also gehört dir auch das Aufräumen. Lässt du die Unterhaltung stehen, bleibt sie, solange die Aufbewahrungsfrist läuft. Löschst du sie, hast du die Kopie entfernt, die du sehen kannst — die eine Stelle, an der Löschen nichts kostet und vollständig in deiner Hand liegt.",
      ],
    },
    {
      heading: "Was „löschen“ erreicht und was nicht",
      level: "assessment",
      paragraphs: [
        "Die Unterhaltung zu löschen entfernt die Unterhaltung. Es erreicht keine Sicherungen, die noch nicht rotiert sind, und es erreicht nichts, was bereits in ein Modelltraining eingeflossen ist — die Anbieter sagen deutlich, dass das Abschalten künftige Läufe verhindert, nicht vergangene.",
        "Archivieren erreicht noch weniger. Es ist eine Ablage-Entscheidung, keine Lösch-Entscheidung, und die beiden sollte man nicht verwechseln.",
      ],
      figure: {
        kind: "reach",
        caption:
          "Löschen lohnt sich genau deshalb, weil es die eine Spalte ist, die du kontrollierst. Es lohnt sich nicht, es für das ganze Bild zu halten.",
        rows: [
          { target: "Die sichtbare Unterhaltung", state: "Erreicht", reached: "yes", note: "weg aus der Oberfläche und aus dem Konto dahinter." },
          { target: "Bereits geschriebene Sicherungen", state: "Nicht sofort", reached: "partial", note: "sie fallen heraus, wenn die Aufbewahrungsfrist rotiert, nicht beim Klick." },
          { target: "Ein bereits trainiertes Modell", state: "Nicht erreicht", reached: "no", note: "der Trainingsschalter regelt künftige Läufe, nicht bereits erfolgte." },
          { target: "Archivieren", state: "Erreicht nichts", reached: "no", note: "es ist eine Ablage-Entscheidung. Das Material bleibt genau dort, wo es war." },
        ],
      },
    },
    {
      heading: "Und was tut man nun",
      level: "advice",
      paragraphs: [
        "Nichts hiervon spricht dagegen, diese Werkzeuge zu benutzen. Es spricht dafür, zu wissen, welcher der Schritte dir gehört.",
      ],
      list: [
        "Der Tastendruck gehört dir. Ab dem Absenden nicht mehr.",
        "Verbring eine Minute mit dem Netzwerk-Reiter bei dem Werkzeug, das du am meisten nutzt. Danach rätselst du nie wieder im Abstrakten.",
        "Lösch Unterhaltungen, die fremdes Material enthielten. Kostet nichts und ist die einzige Kopie, die du kontrollierst.",
        "Prüf den Trainingsschalter — bei manchen Anbietern ist er zugleich der Aufbewahrungsschalter.",
        "Frag, wer der Vertragspartner ist, nicht nur, wo die Server stehen.",
      ],
      links: [
        {
          label: "Trainiert das Werkzeug mit dem, was du eingibst?",
          href: "/de/data-flows/training-and-retention",
        },
        { label: "Was darf in ein KI-Werkzeug hinein?", href: "/de/law/what-may-go-in" },
      ],
    },
  ],
};

export const getBeforeYouPressEnter = (locale: SiteLocale): Article =>
  locale === "de" ? de : en;
