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
  subtitle: "What happens to your prompt after you submit it",
  lead: "There are more stations between your keyboard and the answer than the interface shows. Some of them can be measured; for the rest, the honest answer is that it depends on how the particular service is built.",
  sections: [
    {
      heading: "The measurement that started this",
      level: "measured",
      checked: CHECKED,
      paragraphs: [
        "I typed “wetter wien” into a search field and stopped before pressing Enter. By that point the browser had already sent the complete phrase as an autocomplete request: a call to /ac/ carrying q=wetter+wien. The server answered with HTTP status 200.",
        "That is not a scandal. Suggestion boxes have worked this way for twenty years, and the engine in question documents it openly. What is worth noticing is something else: this was the most privacy-conscious mainstream option, and the phrase was still on someone else's server before I had decided whether to send it.",
        "It does not follow that every AI chat behaves the same way. What it shows is how cheap the question is to answer: open the developer tools, go to the network tab, type into the field and watch whether requests go out while you type.",
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
        "Which is the point of this post. The question is cheap to answer technically and rarely asked, and the answer changes per product and per release. So check it for the field you type into, rather than trusting either the reassuring or the alarming version.",
      ],
    },
    {
      heading: "What pressing Enter sets in motion",
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
        "For a service to process your request, it has to be decrypted somewhere. Depending on how the service is built, that happens at the provider itself or at a component in front of it: a CDN, a reverse proxy, a load balancer. Another layer usually decides which server handles it, and at the end a machine holds your text in memory long enough to produce an answer.",
        "Anywhere a request is decrypted or processed, it can exist briefly in readable form. Not because anyone is being sinister — that is the precondition for computing on it at all. How many such places there are, and who operates them, depends on the service.",
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
          { label: "Where decryption happens", detail: "The provider, or a component in front of it — CDN, reverse proxy, load balancer." },
          { label: "Load balancers and caches", detail: "Decide which machine takes you. Each one holds the request briefly." },
          { label: "The machine that answers", detail: "Your text sits in memory long enough to produce a reply." },
          { label: "Stored conversation", detail: "The reply comes back — and both halves stay, because you would miss them." },
          { label: "Logs and backups", detail: "Depending on configuration, what happened on the way is recorded elsewhere." },
        ],
      },
    },
    {
      heading: "And when something goes wrong, it gets written down",
      paragraphs: [
        "This is the part almost nobody pictures. Systems fail. When they do, they record what they were holding at the time, because otherwise nobody could fix them.",
        "An error log is not a sinister archive, it is a diagnostic tool. It is also a system with its own retention period, its own access rules and its own backups — and nobody designed it as a resting place for your input.",
        "Whether your input actually ends up in logs, traces or backups depends on the architecture and configuration of the particular service. The chat window shows you one conversation in one place; several systems processed it.",
      ],
    },
    {
      heading: "Location, operator and jurisdiction",
      level: "assessment",
      paragraphs: [
        "The machine at the end stands somewhere physical, in some country, run by a company registered in some jurisdiction. Those are three different questions and people collapse them into one.",
        "A service can run on servers in Frankfurt and belong to a company in Delaware. The location answers who has physical custody. The company's home answers who can compel disclosure. The European supervisory authorities have been explicit that those come apart — which is the single most useful thing to know when someone tells you their service is EU-hosted.",
      ],
      links: [{ label: "Where your data is, and who can reach it", href: "/data-flows/data-sovereignty" }],
    },
    {
      heading: "The way back, and what stays",
      paragraphs: [
        "The answer comes back the same way, through the same hops. And then something quietly different happens: it stops.",
        "Your conversation is now a stored object — kept because you would be annoyed to find it gone tomorrow. That convenience is a decision about storage, made on your behalf without being put to you as one.",
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
      links: [{ label: "Deleting chats and data: what goes and what stays", href: "/data-flows/getting-it-back-out" }],
    },
    {
      heading: "What to take from this in practice",
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
        { label: "Are your chats used for model training?", href: "/data-flows/training-and-retention" },
        { label: "Can I enter this data into an AI tool?", href: "/law/what-may-go-in" },
      ],
    },
  ],
};

const de: Article = {
  title: "Bevor du Enter drückst",
  description:
    "Ich habe elf Zeichen in ein Suchfeld getippt und nie Enter gedrückt. Der Satz hatte den Rechner längst verlassen. Was nach einem Prompt passiert — als Reise erzählt.",
  subtitle: "Was mit deinem Prompt passiert, sobald du ihn abschickst",
  lead: "Zwischen Tippen und Antwort liegen mehr Stationen, als die Oberfläche zeigt. Ein Teil davon lässt sich messen — beim Rest hängt es von der Architektur des jeweiligen Dienstes ab, und das sollte man dazusagen.",
  sections: [
    {
      heading: "Der Test hinter diesem Beitrag",
      level: "measured",
      checked: CHECKED,
      paragraphs: [
        "Ich habe „wetter wien“ in ein Suchfeld getippt und vor dem Enter aufgehört. Der Browser hatte die vollständige Eingabe zu diesem Zeitpunkt bereits für die Autovervollständigung übertragen: eine Anfrage an /ac/ mit dem Parameter q=wetter+wien. Der Server antwortete mit HTTP-Status 200.",
        "Ein Skandal ist das nicht. Vorschlagsfelder arbeiten seit zwanzig Jahren so, und die betreffende Suchmaschine beschreibt es offen. Bemerkenswert ist etwas anderes: Es war die datenschutzfreundlichste der gängigen Optionen — und die Eingabe lag trotzdem auf einem fremden Server, bevor ich entschieden hatte, ob ich sie abschicke.",
        "Daraus folgt nicht, dass jeder KI-Chat genauso arbeitet. Es zeigt aber, wie einfach sich die Frage prüfen lässt: Entwicklertools öffnen, Reiter Netzwerk, in das Eingabefeld tippen und nachsehen, ob dabei schon Anfragen hinausgehen.",
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
        "Ehrliche Antwort: Ich weiß es nicht — und niemand weiß es, der es nicht für das konkrete Tool an einem konkreten Tag gemessen hat. Ein Rätsel ist es aber nicht: Es ist eine Minute Arbeit mit offenem Netzwerk-Reiter. Tippen, nicht absenden, Protokoll lesen.",
        "Und das ist der Punkt dieses Beitrags. Die Frage lässt sich technisch leicht prüfen, sie wird nur selten gestellt — und die Antwort ändert sich je Produkt und je Version. Prüf sie für das Feld, in das du tippst, statt der beruhigenden oder der alarmierenden Fassung zu glauben.",
      ],
    },
    {
      heading: "Was das Absenden in Gang setzt",
      paragraphs: [
        "Jetzt der interessante Teil. Du drückst Enter, und dein Satz hört auf, Text auf deinem Bildschirm zu sein, und wird ein Paket mit einer Adresse.",
        "Zuerst geht er nirgendwohin: Er geht an dein Betriebssystem, das ihn den Netzwerkprotokollen übergibt, die ihn in mehrere Schichten verpacken. Dein Rechner fragt einen Namensserver, wo dieser Dienst wohnt, und bekommt eine Nummer zurück. Dann öffnet er eine verschlüsselte Verbindung — das Schloss in der Adresszeile — und diese Verschlüsselung ist wirklich gut: Niemand zwischen dir und dem anderen Ende liest mit.",
        "Zwischen dir und dem anderen Ende. Diesen Satz hören die meisten als „niemand liest mit“, und das steht dort nicht. Dort steht: niemand im Gang. Über den Raum am Ende des Gangs steht dort nichts — und der Raum am Ende des Gangs ist das ganze Thema.",
      ],
    },
    {
      heading: "Der Gang ist länger als das Bild im Kopf",
      paragraphs: [
        "Du stellst dir zwei Kästchen vor: dich und die KI. Es sind mehr, und die meisten gehören jemand anderem.",
        "Damit ein Dienst die Anfrage verarbeiten kann, muss sie an einem Endpunkt entschlüsselt werden. Je nach Architektur übernimmt das der Anbieter selbst oder eine vorgeschaltete Komponente: ein CDN, ein Reverse Proxy, ein Load Balancer. Danach entscheidet meist eine weitere Schicht, welcher Server die Anfrage bearbeitet, und am Ende liegt dein Text im Arbeitsspeicher einer Maschine — lange genug für eine Antwort.",
        "An jeder Stelle, an der eine Anfrage entschlüsselt oder verarbeitet wird, kann sie kurzzeitig im Klartext vorliegen. Das ist keine Hinterhältigkeit, sondern die Voraussetzung dafür, dass überhaupt gerechnet werden kann. Wie viele solcher Stellen es gibt und wer sie betreibt, hängt vom jeweiligen Dienst ab.",
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
          { label: "Der Punkt der Entschlüsselung", detail: "Anbieter oder vorgeschaltete Komponente — CDN, Reverse Proxy, Load Balancer." },
          { label: "Lastverteiler und Caches", detail: "Entscheiden, welcher Server die Anfrage bearbeitet. Jede Stelle hält sie kurz." },
          { label: "Die antwortende Maschine", detail: "Dein Text liegt im Arbeitsspeicher, lange genug für eine Antwort." },
          { label: "Gespeicherte Unterhaltung", detail: "Die Antwort kommt zurück — und beide Hälften bleiben, weil du sie vermissen würdest." },
          { label: "Protokolle und Sicherungen", detail: "Je nach Konfiguration wird festgehalten, was unterwegs passiert ist." },
        ],
      },
    },
    {
      heading: "Und wenn etwas schiefgeht, wird es aufgeschrieben",
      paragraphs: [
        "Das ist der Teil, den sich fast niemand vorstellt. Systeme fallen aus. Und wenn sie das tun, halten sie fest, was sie gerade in der Hand hatten — sonst könnte sie niemand reparieren.",
        "Ein Fehlerprotokoll ist kein finsteres Archiv, sondern ein Diagnosewerkzeug. Es ist zugleich ein System mit eigener Aufbewahrungsfrist, eigenen Zugriffsregeln und eigenen Sicherungen — und niemand hat es als Ablageort für deine Eingaben geplant.",
        "Ob eine Eingabe tatsächlich in Protokollen, Traces oder Sicherungen landet, hängt von der Architektur und Konfiguration des jeweiligen Dienstes ab. Das Chatfenster zeigt dir eine Unterhaltung an einem Ort; verarbeitet wurde sie von mehreren Systemen.",
      ],
    },
    {
      heading: "Standort, Betreiber und Rechtsraum",
      level: "assessment",
      paragraphs: [
        "Die Maschine am Ende steht irgendwo physisch, in irgendeinem Land, betrieben von einem Unternehmen mit Sitz in irgendeiner Rechtsordnung. Das sind drei verschiedene Fragen, und sie werden regelmäßig zu einer zusammengezogen.",
        "Ein Dienst kann auf Servern in Frankfurt laufen und einem Unternehmen in Delaware gehören. Der Standort beantwortet, wer die physische Obhut hat. Der Unternehmenssitz beantwortet, wer Herausgabe erzwingen kann. Die europäischen Aufsichtsbehörden haben ausdrücklich festgehalten, dass beides auseinanderfällt — und das ist das Nützlichste, was man wissen kann, wenn jemand sagt, sein Dienst sei EU-gehostet.",
      ],
      links: [{ label: "Wo deine Daten liegen und wer herankommt", href: "/de/data-flows/data-sovereignty" }],
    },
    {
      heading: "Der Rückweg — und was bleibt",
      paragraphs: [
        "Die Antwort kommt denselben Weg zurück, über dieselben Stationen. Und dann passiert etwas leise anderes: Sie bleibt liegen.",
        "Deine Unterhaltung ist jetzt ein gespeichertes Objekt. Nicht weil etwas schiefging, sondern weil du dich ärgern würdest, wenn sie morgen weg wäre. Diese Bequemlichkeit ist eine Entscheidung über Speicherung, die jemand für dich getroffen hat, ohne sie dir als Entscheidung vorzulegen.",
        "Den sichtbaren Chatverlauf kannst du selbst verwalten. Lässt du die Unterhaltung stehen, bleibt sie, solange die Aufbewahrungsfrist läuft. Löschst du sie, entfernst du die Kopie, die du sehen kannst — die einzige Stelle, die du unmittelbar selbst erreichst.",
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
          "Den sichtbaren Chat zu löschen lohnt sich, weil es die eine Stelle ist, die du unmittelbar selbst erreichst. Für das vollständige Bild sollte man es nicht halten.",
        rows: [
          { target: "Die sichtbare Unterhaltung", state: "Erreicht", reached: "yes", note: "weg aus der Oberfläche und aus dem Konto dahinter." },
          { target: "Bereits geschriebene Sicherungen", state: "Nicht sofort", reached: "partial", note: "sie fallen heraus, wenn die Aufbewahrungsfrist rotiert, nicht beim Klick." },
          { target: "Ein bereits trainiertes Modell", state: "Nicht erreicht", reached: "no", note: "der Trainingsschalter regelt künftige Läufe, nicht bereits erfolgte." },
          { target: "Archivieren", state: "Erreicht nichts", reached: "no", note: "es ist eine Ablage-Entscheidung. Das Material bleibt genau dort, wo es war." },
        ],
      },
      links: [{ label: "Chats und Daten löschen: Was entfernt wird und was bleibt", href: "/de/data-flows/getting-it-back-out" }],
    },
    {
      heading: "Was du daraus praktisch ableiten kannst",
      level: "advice",
      paragraphs: [
        "Nichts hiervon spricht dagegen, diese Tools zu benutzen. Es spricht dafür, zu wissen, welcher der Schritte dir gehört.",
      ],
      list: [
        "Der Tastendruck gehört dir. Ab dem Absenden nicht mehr.",
        "Verbring eine Minute mit dem Netzwerk-Reiter bei dem Tool, das du am meisten nutzt. Danach rätselst du nie wieder im Abstrakten.",
        "Lösch Unterhaltungen, die fremdes Material enthielten. Kostet nichts und ist die einzige Kopie, die du kontrollierst.",
        "Prüf den Trainingsschalter — bei manchen Anbietern ist er zugleich der Aufbewahrungsschalter.",
        "Frag, wer der Vertragspartner ist, nicht nur, wo die Server stehen.",
      ],
      links: [
        {
          label: "Werden deine Eingaben für das Modelltraining verwendet?",
          href: "/de/data-flows/training-and-retention",
        },
        { label: "Welche Daten darf ich in ein KI-Tool eingeben?", href: "/de/law/what-may-go-in" },
      ],
    },
  ],
};

export const getBeforeYouPressEnter = (locale: SiteLocale): Article =>
  locale === "de" ? de : en;
