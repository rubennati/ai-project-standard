/**
 * Data sovereignty as a matrix, not a location.
 *
 * The page exists because two phrases end conversations that should continue.
 * "Public AI" suggests a cloud service makes data public, which it does not.
 * "EU-hosted" suggests a location settles the question, which it does not
 * either. Both are single answers to something with several independent axes.
 *
 * Nothing here is a vendor claim. The operating models and the questions are a
 * framework for asking, and the page says so rather than implying measurement.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-09";

const GDPR_ART_28 = "https://eur-lex.europa.eu/eli/reg/2016/679/art_28/oj/eng";
const GDPR_ART_32 = "https://eur-lex.europa.eu/eli/reg/2016/679/art_32/oj/eng";
const GDPR_CHAPTER_V = "https://eur-lex.europa.eu/eli/reg/2016/679/art_44/oj/eng";

const en: Article = {
  title: "Where your data is, and who can reach it",
  subtitle: "Why \"EU-hosted\" and \"public AI\" are single answers to a question with several axes.",
  description:
    "Data sovereignty is not one question with one answer. The five operating models, the axes they differ on, and the fourteen things a hosting location does not tell you.",
  lead: "Two phrases end this conversation prematurely. \"It's public AI\" suggests a cloud service makes your data public. \"It's EU-hosted\" suggests a location settles the matter. Neither is true, and both are used to skip the part where you find out what is happening.",
  sections: [
    {
      heading: "\"Public AI\" describes nothing",
      level: "assessment",
      paragraphs: [
        "Cloud does not mean public. A consumer chat service and an enterprise agreement with the same vendor can differ on training, retention, administrative access and audit rights — and the difference is contractual, not architectural.",
        "The term also flatters the alternative. A self-hosted system administered by nobody in particular is not more sovereign than a governed service; it is less observed. Where something runs is one axis among several, and the good and bad cases are spread across all of them.",
      ],
    },
    {
      heading: "Five operating models, not two",
      level: "assessment",
      paragraphs: [
        "The useful split is not cloud against local. It is five positions, each with a different answer to who can see what, who can change the terms, and who carries the operational burden.",
      ],
      list: [
        "Consumer AI service — an individual account under standard terms. Cheapest, least negotiable, and the tier where training defaults most often differ",
        "Business or enterprise service — the same technology under a contract, usually with a processing agreement, administrative controls and audit provisions",
        "Private cloud — dedicated infrastructure operated by a provider for you, which moves the boundary without removing the provider",
        "On-premises — running on infrastructure you control, which transfers the whole operational burden to you along with the control",
        "Local or on-device — nothing leaves the machine, at the cost of smaller models and a device that has to be capable enough",
      ],
    },
    {
      heading: "The axes are independent of each other",
      level: "assessment",
      paragraphs: [
        "This is why a single word cannot answer it. A service can sit anywhere on each of these, and the combinations do not follow from the operating model:",
      ],
      list: [
        "Storage location — where content sits at rest",
        "Processing location — where it is computed on, which can differ from storage",
        "Administrative access — who can reach it for support, and from where",
        "Training use — whether content improves a model, and under which tier",
        "Retention — how long it exists, and what deletion removes",
        "Key management — whether encryption keys are held by you or by the provider",
        "Sub-processors — who else is involved, and where each of them sits",
        "Legal reach — which jurisdictions can compel disclosure from the operator",
      ],
    },
    {
      heading: "What \"EU-hosted\" does and does not answer",
      level: "assessment",
      paragraphs: [
        "An EU data centre answers the first axis and part of the second. It is worth having. Read as an answer to the whole question, it hides the rest.",
      ],
      figure: {
        kind: "reach",
        caption: "What the phrase \"hosted in the EU\" settles, on its own",
        rows: [
          { target: "Storage location", state: "answered", reached: "yes", note: "Content at rest is in the stated region" },
          { target: "Processing location", state: "usually answered", reached: "partial", note: "Often the same region; worth confirming rather than assuming, as inference can run elsewhere" },
          { target: "Sub-processors", state: "not answered", reached: "no", note: "A provider in the EU may use others outside it; the list is normally published and rarely read" },
          { target: "Administrative access", state: "not answered", reached: "no", note: "Support and operations staff may reach the system from anywhere the provider operates" },
          { target: "Backups", state: "not answered", reached: "no", note: "Disaster-recovery copies have their own locations and their own lifetimes" },
          { target: "Logs and metadata", state: "not answered", reached: "no", note: "Frequently held separately from content, and often for longer" },
          { target: "Training use", state: "not answered", reached: "no", note: "A contractual question, unrelated to geography" },
          { target: "Retention and deletion", state: "not answered", reached: "no", note: "Including what happens to derived copies such as search indexes" },
          { target: "Key management", state: "not answered", reached: "no", note: "Encryption at rest protects little if the operator holds the keys" },
          { target: "Legal reach", state: "not answered", reached: "no", note: "Determined by who operates the service and where they are established, not by the location of a rack" },
        ],
      },
    },
    {
      heading: "A local folder does not mean the data stays local",
      level: "assessment",
      paragraphs: [
        "The clearest case of the axes coming apart. An assistant working in a folder on your machine reads those files — and if the model runs in a provider's data centre, the contents of the files travel there to be read.",
        "The folder is the access boundary. It is not the data path. Local storage plus a hosted model is a hosted data path with a local starting point, and the only arrangement where nothing leaves is one where the model runs on the device too.",
      ],
    },
    {
      heading: "Four data paths run at the same time",
      level: "assessment",
      paragraphs: [
        "One more reason a single answer fails: a working system moves data along several paths at once, and they have different properties.",
      ],
      list: [
        "The content path — what you send and what comes back",
        "The index path — what was read, split and stored so it can be found later, which outlives the conversation",
        "The operational path — logs, telemetry and error reports, usually retained separately",
        "The action path — what the system reaches when it does something, which can leave the platform entirely",
      ],
    },
    {
      heading: "Where the law attaches to this",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Three anchors, restated rather than applied. Art. 28 GDPR governs processing carried out on your instructions and requires that you use only processors providing sufficient guarantees for appropriate technical and organisational measures. Art. 32 requires security appropriate to the risk, naming encryption and pseudonymisation among the measures to consider, and it names accidental alteration and loss alongside unlawful processing.",
        "Chapter V governs transfers outside the EU, and it is a separate question from the location of a server: a provider established outside the EU may process on EU infrastructure, and that arrangement still has to be assessed under Chapter V.",
      ],
      links: [
        { label: "Art. 28 GDPR — processor obligations", href: GDPR_ART_28 },
        { label: "Art. 32 GDPR — security of processing", href: GDPR_ART_32 },
        { label: "Chapter V GDPR — transfers to third countries", href: GDPR_CHAPTER_V },
        { label: "Does a US-hosted AI tool break the GDPR?", href: "/law/us-cloud-and-the-gdpr" },
      ],
    },
    {
      heading: "What to ask instead",
      level: "advice",
      paragraphs: [
        "Replace \"where is it hosted\" with a short list. Every one of these has a published answer for any serious provider, and the ones without an answer are themselves the finding.",
      ],
      list: [
        "Which tier am I on, and what does it change about training and retention",
        "Who are the sub-processors, and where is each established",
        "Who can reach my content for support, and is that access logged",
        "What is retained, for how long, and what does deletion actually remove",
        "Who holds the encryption keys",
        "Is the provider established outside the EU, and if so under which Chapter V route",
        "What would I do if that route stopped being available",
      ],
      links: [{ label: "Connect AI to tools and data", href: "/data-flows/connect-ai-to-tools-and-data" }],
    },
    {
      heading: "Limits of this page",
      level: "assessment",
      paragraphs: [
        "This is a framework, not a measurement. No vendor is assessed here, and nothing on this page tells you whether a particular service is suitable — the axes tell you which questions to put to it.",
        "Nor is any position on the list better than another. On-premises is not automatically more sovereign than a governed service, and a consumer account is not automatically reckless. What matters is whether the answers on each axis are ones you know, rather than ones you assumed.",
      ],
    },
  ],
};

const de: Article = {
  title: "Wo deine Daten liegen und wer herankommt",
  subtitle: "Warum „EU-Hosting“ und „öffentliche KI“ einzelne Antworten auf eine Frage mit mehreren Achsen sind.",
  description:
    "Datensouveränität ist nicht eine Frage mit einer Antwort. Die fünf Betriebsmodelle, die Achsen, auf denen sie sich unterscheiden, und die vierzehn Dinge, die ein Standort nicht verrät.",
  lead: "Zwei Formulierungen beenden dieses Gespräch zu früh. „Das ist öffentliche KI“ legt nahe, ein Cloud-Dienst mache Daten öffentlich. „Das ist EU-gehostet“ legt nahe, ein Standort erledige die Sache. Beides stimmt nicht, und beides überspringt den Teil, in dem man herausfindet, was tatsächlich geschieht.",
  sections: [
    {
      heading: "„Öffentliche KI“ beschreibt nichts",
      level: "assessment",
      paragraphs: [
        "Cloud heißt nicht öffentlich. Ein Verbraucher-Chatdienst und ein Unternehmensvertrag beim selben Anbieter können sich bei Training, Aufbewahrung, Administrationszugriff und Prüfrechten unterscheiden — und der Unterschied ist vertraglich, nicht architektonisch.",
        "Der Begriff schmeichelt zugleich der Alternative. Ein selbst betriebenes System, um das sich niemand richtig kümmert, ist nicht souveräner als ein gut geführter Dienst; es wird nur weniger beobachtet. Wo etwas läuft, ist eine Achse von mehreren, und die guten wie die schlechten Fälle verteilen sich über alle.",
      ],
    },
    {
      heading: "Fünf Betriebsmodelle, nicht zwei",
      level: "assessment",
      paragraphs: [
        "Die nützliche Aufteilung ist nicht Cloud gegen lokal. Es sind fünf Positionen, jede mit einer anderen Antwort darauf, wer was sehen kann, wer die Bedingungen ändern kann und wer den Betriebsaufwand trägt.",
      ],
      list: [
        "Verbraucherdienst — ein Einzelkonto zu Standardbedingungen. Am günstigsten, am wenigsten verhandelbar, und die Stufe, auf der die Trainings-Voreinstellungen am häufigsten abweichen",
        "Business- oder Enterprise-Dienst — dieselbe Technik unter Vertrag, meist mit Auftragsverarbeitungsvertrag, Administrationssteuerung und Prüfregelungen",
        "Private Cloud — dedizierte Infrastruktur, die ein Anbieter für dich betreibt; das verschiebt die Grenze, ohne den Anbieter zu entfernen",
        "On-Premises — Betrieb auf selbst kontrollierter Infrastruktur, was mit der Kontrolle den gesamten Betriebsaufwand übernimmt",
        "Lokal oder auf dem Gerät — nichts verlässt die Maschine, um den Preis kleinerer Modelle und eines ausreichend leistungsfähigen Geräts",
      ],
    },
    {
      heading: "Die Achsen sind voneinander unabhängig",
      level: "assessment",
      paragraphs: [
        "Deshalb kann ein einzelnes Wort die Frage nicht beantworten. Ein Dienst kann auf jeder dieser Achsen irgendwo stehen, und die Kombinationen folgen nicht aus dem Betriebsmodell:",
      ],
      list: [
        "Speicherort — wo Inhalte ruhen",
        "Verarbeitungsort — wo gerechnet wird, was vom Speicherort abweichen kann",
        "Administrationszugriff — wer für den Support herankommt, und von wo",
        "Trainingsnutzung — ob Inhalte ein Modell verbessern, und unter welcher Stufe",
        "Aufbewahrung — wie lange etwas existiert und was eine Löschung entfernt",
        "Schlüsselverwaltung — ob die Schlüssel bei dir oder beim Anbieter liegen",
        "Unterauftragsverarbeiter — wer sonst beteiligt ist und wo jeder davon sitzt",
        "Rechtlicher Zugriff — welche Rechtsordnungen den Betreiber zur Herausgabe zwingen können",
      ],
    },
    {
      heading: "Was „EU-Hosting“ beantwortet und was nicht",
      level: "assessment",
      paragraphs: [
        "Ein Rechenzentrum in der EU beantwortet die erste Achse und einen Teil der zweiten. Das ist etwas wert. Als Antwort auf die ganze Frage gelesen, verdeckt es den Rest.",
      ],
      figure: {
        kind: "reach",
        caption: "Was die Formulierung „in der EU gehostet“ für sich genommen klärt",
        rows: [
          { target: "Speicherort", state: "beantwortet", reached: "yes", note: "Ruhende Inhalte liegen in der genannten Region" },
          { target: "Verarbeitungsort", state: "meist beantwortet", reached: "partial", note: "Oft dieselbe Region; nachfragen statt annehmen, denn die Inferenz kann anderswo laufen" },
          { target: "Unterauftragsverarbeiter", state: "nicht beantwortet", reached: "no", note: "Ein Anbieter in der EU kann andere außerhalb einsetzen; die Liste ist meist veröffentlicht und wird selten gelesen" },
          { target: "Administrationszugriff", state: "nicht beantwortet", reached: "no", note: "Support und Betrieb können von überall dort zugreifen, wo der Anbieter tätig ist" },
          { target: "Sicherungen", state: "nicht beantwortet", reached: "no", note: "Notfallkopien haben eigene Orte und eigene Lebensdauern" },
          { target: "Protokolle und Metadaten", state: "nicht beantwortet", reached: "no", note: "Häufig getrennt vom Inhalt gehalten, und oft länger" },
          { target: "Trainingsnutzung", state: "nicht beantwortet", reached: "no", note: "Eine vertragliche Frage, unabhängig von der Geografie" },
          { target: "Aufbewahrung und Löschung", state: "nicht beantwortet", reached: "no", note: "Einschließlich dessen, was mit abgeleiteten Kopien wie Suchindizes geschieht" },
          { target: "Schlüsselverwaltung", state: "nicht beantwortet", reached: "no", note: "Verschlüsselung im Ruhezustand schützt wenig, wenn der Betreiber die Schlüssel hält" },
          { target: "Rechtlicher Zugriff", state: "nicht beantwortet", reached: "no", note: "Bestimmt sich danach, wer den Dienst betreibt und wo er niedergelassen ist, nicht nach dem Standort eines Racks" },
        ],
      },
    },
    {
      heading: "Ein lokaler Ordner heißt nicht, dass die Daten lokal bleiben",
      level: "assessment",
      paragraphs: [
        "Der klarste Fall, in dem die Achsen auseinanderfallen. Eine Assistenz, die in einem Ordner auf deiner Maschine arbeitet, liest diese Dateien — und wenn das Modell im Rechenzentrum eines Anbieters läuft, reisen die Inhalte dorthin, um gelesen zu werden.",
        "Der Ordner ist die Zugriffsgrenze. Er ist nicht der Datenweg. Lokale Speicherung plus gehostetes Modell ist ein gehosteter Datenweg mit lokalem Ausgangspunkt, und die einzige Anordnung, bei der nichts hinausgeht, ist die, bei der auch das Modell auf dem Gerät läuft.",
      ],
    },
    {
      heading: "Vier Datenwege laufen gleichzeitig",
      level: "assessment",
      paragraphs: [
        "Noch ein Grund, warum eine einzelne Antwort scheitert: Ein arbeitendes System bewegt Daten auf mehreren Wegen zugleich, und die haben verschiedene Eigenschaften.",
      ],
      list: [
        "Der Inhaltsweg — was du sendest und was zurückkommt",
        "Der Indexweg — was gelesen, zerlegt und gespeichert wurde, um später auffindbar zu sein, und was das Gespräch überdauert",
        "Der Betriebsweg — Protokolle, Telemetrie und Fehlerberichte, meist getrennt aufbewahrt",
        "Der Aktionsweg — was das System erreicht, wenn es etwas tut, und was die Plattform ganz verlassen kann",
      ],
    },
    {
      heading: "Wo das Recht daran ansetzt",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Drei Anker, wiedergegeben und nicht angewendet. Art. 28 DSGVO regelt die weisungsgebundene Verarbeitung und verlangt, nur Auftragsverarbeiter einzusetzen, die hinreichende Garantien für geeignete technische und organisatorische Maßnahmen bieten. Art. 32 verlangt ein dem Risiko angemessenes Schutzniveau, nennt Verschlüsselung und Pseudonymisierung unter den zu erwägenden Maßnahmen und führt die unbeabsichtigte Veränderung und den Verlust neben der unrechtmäßigen Verarbeitung auf.",
        "Kapitel V regelt Übermittlungen aus der EU heraus und ist eine vom Serverstandort getrennte Frage: Ein außerhalb der EU niedergelassener Anbieter kann auf EU-Infrastruktur verarbeiten, und diese Konstellation ist dennoch nach Kapitel V zu prüfen.",
      ],
      links: [
        { label: "Art. 28 DSGVO — Auftragsverarbeiter", href: GDPR_ART_28 },
        { label: "Art. 32 DSGVO — Sicherheit der Verarbeitung", href: GDPR_ART_32 },
        { label: "Kapitel V DSGVO — Übermittlungen an Drittländer", href: GDPR_CHAPTER_V },
        { label: "Verstößt ein KI-Dienst mit US-Hosting gegen die DSGVO?", href: "/de/law/us-cloud-and-the-gdpr" },
      ],
    },
    {
      heading: "Was man stattdessen fragt",
      level: "advice",
      paragraphs: [
        "Ersetze „wo wird das gehostet“ durch eine kurze Liste. Für jeden ernsthaften Anbieter gibt es zu jedem dieser Punkte eine veröffentlichte Antwort — und die Punkte ohne Antwort sind selbst schon das Ergebnis.",
      ],
      list: [
        "Auf welcher Stufe bin ich, und was ändert das an Training und Aufbewahrung",
        "Wer sind die Unterauftragsverarbeiter, und wo ist jeder niedergelassen",
        "Wer kann für den Support an meine Inhalte, und wird dieser Zugriff protokolliert",
        "Was wird wie lange aufbewahrt, und was entfernt eine Löschung tatsächlich",
        "Wer hält die Verschlüsselungsschlüssel",
        "Ist der Anbieter außerhalb der EU niedergelassen, und wenn ja, über welchen Weg nach Kapitel V",
        "Was täte ich, wenn dieser Weg wegfiele",
      ],
      links: [{ label: "KI mit Tools und Daten verbinden", href: "/de/data-flows/connect-ai-to-tools-and-data" }],
    },
    {
      heading: "Grenzen dieser Seite",
      level: "assessment",
      paragraphs: [
        "Das ist ein Gerüst, keine Messung. Hier wird kein Anbieter bewertet, und nichts auf dieser Seite sagt dir, ob ein bestimmter Dienst geeignet ist — die Achsen sagen dir, welche Fragen du ihm stellst.",
        "Und keine Position auf der Liste ist besser als eine andere. On-Premises ist nicht automatisch souveräner als ein gut geführter Dienst, und ein Verbraucherkonto ist nicht automatisch fahrlässig. Entscheidend ist, ob die Antworten auf jeder Achse solche sind, die du kennst — und nicht solche, die du angenommen hast.",
      ],
    },
  ],
};

export const getDataSovereignty = (locale: SiteLocale): Article => (locale === "de" ? de : en);
