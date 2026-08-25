/**
 * How an AI product is connected to another system, and what that connection
 * can then do.
 *
 * The page answers its own title before it answers anything else. It used to
 * open on whether to connect at all and spend roughly half its height on
 * boundary, control loop and verification without ever saying what happens when
 * someone clicks Connect. Capability and mechanism now come first; the boundary
 * material that remains is only what a reader decides *while* connecting.
 *
 * Three things are deliberately not stated as universal rules, because they are
 * not true of every connection:
 *
 *   - that a connection authenticates with OAuth. Some do; others carry an API
 *     key, a service identity or another credential held by whoever set the
 *     connection up. The worked example uses OAuth and says that it is the
 *     example's mechanism.
 *   - that every call is recorded by the target system. Recording is the target
 *     system's design decision, so the page tells a reader to ask rather than
 *     describing an architecture it cannot verify.
 *   - that a connection runs as the human user. It runs as an identity the
 *     target system accepts, which may or may not be a person's.
 *
 * The layer figure lives on the `/data-flows` hub, which owns the mechanism
 * explanation (`.ai/decisions.md`, 2026-08-24). This page owns the procedure:
 * an anatomy and a sequence are different objects, and publishing both here was
 * the duplication the ownership decision exists to remove.
 *
 * The control loop, the revocation and recovery question, the verification
 * checklist and the OWASP evidence that went with them were removed in slice 4
 * and belong to `/secure-setup` — see `.ai/state.md` for the handoff and the
 * commit the prose is recoverable from. `/start` owns forms of collaboration,
 * so the tool-using-system versus agent comparison is gone from here too.
 */
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-10";

export const sources = {
  architecture:
    "https://modelcontextprotocol.io/specification/2026-07-28/architecture",
  authorization:
    "https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization",
} as const;

interface Opportunity {
  title: string;
  outcome: string;
  simplerWhen: string;
}

interface Step {
  title: string;
  body: string;
}

interface BoundaryQuestion {
  title: string;
  question: string;
  reason: string;
}

interface GlossaryLink {
  slug: string;
  label: string;
  description: string;
}

export interface ConnectAiToolsDataContent {
  title: string;
  description: string;
  answer: string;
  lead: string;
  fit: string;
  checkedLabel: string;
  capabilityHeading: string;
  capabilityLead: string;
  opportunities: Opportunity[];
  outcomeLabel: string;
  simplerLabel: string;
  howHeading: string;
  howLead: string;
  howSteps: Step[];
  architectureEvidence: string;
  architectureSource: string;
  exampleHeading: string;
  exampleLead: string;
  exampleBeats: Step[];
  exampleNote: string;
  exampleLink: { label: string; href: string };
  decidesHeading: string;
  decidesParagraphs: string[];
  decidesLink: { label: string; href: string };
  boundaryHeading: string;
  boundaryLead: string;
  boundaryQuestions: BoundaryQuestion[];
  authorizationEvidence: string;
  authorizationSource: string;
  boundaryClose: string;
  unsafeDescription: string;
  unsafeAlternative: string;
  glossaryLead: string;
  glossaryLinks: GlossaryLink[];
  nextTitle: string;
  nextDescription: string;
}

const en: ConnectAiToolsDataContent = {
  title: "Connect AI to tools and data",
  description:
    "How an AI product is connected to another system, what the connection can then see and do, and where the boundary sits. With one worked example.",
  answer:
    "The model itself does not log into another system. The product, application or agent host around it provides the connection: a defined set of operations, running under an identity the target system recognises. What the AI can do is what all three allow — what the product supports, what the connection offers, and what that identity is permitted to do.",
  lead: "A connection can let an assistant search current knowledge, prepare work in another system or carry out a defined action. It also turns content from that system into model input, and model output into a possible action path.",
  fit: "The same task recurs, the source changes too often to paste safely, or the result must be returned to a system through a controlled operation.",
  checkedLabel: "Sources checked",
  capabilityHeading: "What becomes useful once something is connected",
  capabilityLead:
    "Live access is useful when it removes a real hand-off. It is unnecessary infrastructure when a person can supply the small amount of context the task needs — a selected excerpt or a read-only export often answers the question without a connection.",
  opportunities: [
    {
      title: "Find current knowledge",
      outcome:
        "Search approved documentation, tickets or a knowledge system without copying each item into the conversation.",
      simplerWhen:
        "The answer depends on one short, non-sensitive document that a person can select and provide directly.",
    },
    {
      title: "Answer from several systems at once",
      outcome:
        "Bring the ticket, the document and the message that belong to the same question into one answer, instead of opening three tools to find them.",
      simplerWhen:
        "Everything the question needs sits in one system, or you already know which few items to look at.",
    },
    {
      title: "Prepare work where it belongs",
      outcome:
        "Draft an issue, query, message or change with the right fields and current system context already available.",
      simplerWhen:
        "The output is a one-off draft that a person can copy into the destination without losing important context.",
    },
    {
      title: "Perform a bounded action",
      outcome:
        "Create a ticket, update one record or run a known command after the request and parameters have been checked.",
      simplerWhen:
        "The action is rare, difficult to undo or easier to perform correctly in the system's own interface.",
    },
    {
      title: "Coordinate several steps",
      outcome:
        "Let an agent choose among approved tools while a person owns the goal, checkpoints and acceptance of the result.",
      simplerWhen:
        "The order is predictable. A fixed workflow will be easier to test, cheaper to run and clearer to audit.",
    },
  ],
  outcomeLabel: "What it enables",
  simplerLabel: "Keep it manual when",
  howHeading: "How a connection is made",
  howLead:
    "Products differ in the details, and the labels on the buttons differ more. Underneath, these four steps are what a connection consists of.",
  howSteps: [
    {
      title: "Something provides the connection",
      body: "The product, application or agent host offers a way into a target system. That may be a built-in integration, a connector someone installs, a small program such as an MCP server, or another implementation altogether. Which one it is matters less to you than what they have in common: each offers a defined set of operations rather than open access.",
    },
    {
      title: "The connection gets an identity the target system accepts",
      body: "Sometimes that is your own login, passed on to the product through a consent step. Sometimes it is an API key, a service identity or another credential held by whoever set the connection up. Which of them it is decides whose rights the connection works with, and that is worth settling before the first call rather than after it.",
    },
    {
      title: "The connection offers a set of operations",
      body: "Search, read, create, update, send, delete — named, and limited to what the connection was built for. The target system then checks which of them the identity in use is actually allowed to perform. Reading and acting are usually separate grants, and worth keeping separate.",
    },
    {
      title: "Using one is a real call",
      body: "When the AI uses an operation, the connection makes an actual request to the target system, which applies its own rules to it. What that system records about the request, and under whose name, is its own design decision — worth asking about the system you are connecting, because the answer is not the same everywhere.",
    },
  ],
  architectureEvidence:
    "The MCP specification assigns connection permission, security policy, consent and user authorization to the host. A client communicates with one server; servers expose focused resources, tools and prompts.",
  architectureSource: "MCP specification — architecture, revision 2026-07-28",
  exampleHeading: "One connection, end to end",
  exampleLead:
    "One example, with one concrete set of choices. Another connection to another system may sign in differently and record differently; what carries over is the shape of the decisions.",
  exampleBeats: [
    {
      title: "What you want",
      body: "Every Monday you go through the tickets your team closed last week and write a short summary for the people who asked. Finding them takes longer than writing it.",
    },
    {
      title: "What gets connected",
      body: "Your AI product offers a connection to your ticket system — here, the product's own integration for it. What the AI ends up with is a fixed list of named operations: search tickets, read a ticket, add a comment.",
    },
    {
      title: "How this connection signs in",
      body: "In this example the connection uses OAuth, so the ticket system's own sign-in and consent page opens. You type your password there, not into the AI product, and the ticket system issues the product a credential that stands for you — one you can withdraw again in the ticket system's own settings.",
    },
    {
      title: "What you allow",
      body: "The consent page names the operations. You allow search and read. You leave comment switched off for now.",
    },
    {
      title: "What it can see",
      body: "At most what the connected identity can see in the ticket system — and less than that, because the connection was granted only search and read. The project you are not a member of stays out of reach: the ticket system applies its own rules to every call, whoever is making it.",
    },
    {
      title: "What it can do",
      body: "Nothing yet. It can answer from what it read. Switch comment on later and it can add a comment to a ticket — and still cannot close one, reassign one or delete anything, because those operations were never exposed to it or granted.",
    },
    {
      title: "What stays outside",
      body: "Your mail, your files, the other systems you use. A connection to one system is a connection to one system. Whether anything from it is used for model training, and how long the product keeps it, are separate questions with their own answers.",
    },
    {
      title: "What you see",
      body: "A summary with the ticket numbers it rests on, which you can open and check. In this example the ticket system also records the search and the reads in its own activity log, under the connected identity, so the work can be traced back later.",
    },
  ],
  exampleNote:
    "Two things here are properties of this system and this connection rather than rules: that it signs in with OAuth, and that it records the calls under the connected identity. Another system may work with a service credential and keep nothing you can look at.",
  exampleLink: {
    label: "Are your chats used for model training?",
    href: "/data-flows/training-and-retention",
  },
  decidesHeading: "What decides what it can do",
  decidesParagraphs: [
    "The useful question is not whether a product supports MCP or connectors, but what this particular connection is allowed to see and do.",
    "Three places have to allow it: the product has to offer the mechanism, the connection has to expose the operation, and the identity has to be permitted to use it in the target system. Widening one of them does not widen the others.",
  ],
  decidesLink: {
    label: "Where the access comes from",
    href: "/data-flows",
  },
  boundaryHeading: "Decide the boundary before connecting",
  boundaryLead:
    "The consent screen is too late to invent the policy. Three answers first; they decide the identity, the operations and the approval you need.",
  boundaryQuestions: [
    {
      title: "Read and action",
      question:
        "What may be read, and which operations may change or trigger something?",
      reason:
        "Reading and acting have different consequences and should not inherit one blanket permission.",
    },
    {
      title: "Identity",
      question:
        "Whose authority does the connection use, and how narrow can that identity be?",
      reason:
        "The target system enforces the rights carried by the identity it sees — a delegated login, a service identity or a token issued for one purpose.",
    },
    {
      title: "Consequence",
      question: "Which calls require approval, and what must the approver see?",
      reason:
        "A useful confirmation shows the operation, destination and full parameters before execution.",
    },
  ],
  authorizationEvidence:
    "For HTTP connections, the MCP authorization specification uses protected-resource metadata and OAuth. It tells clients to request only the scopes needed for the current operation and requires servers to accept only tokens intended for that server.",
  authorizationSource: "MCP specification — authorization, revision 2026-07-28",
  boundaryClose:
    "Whatever you decide, the first version can be read-only. If the task still works with no write capability at all, you have learned something a successful demonstration could not tell you.",
  unsafeDescription:
    "Do not let a connection both ingest untrusted external content and perform sensitive actions without a separate policy check. An email, document or tool result can contain instructions that steer a model away from the user's request.",
  unsafeAlternative:
    "Separate reading from acting, keep the first deployment read-only, and require a human or deterministic policy to approve sensitive calls against the original task.",
  glossaryLead: "The words that come up while deciding this, defined once:",
  glossaryLinks: [
    {
      slug: "mcp",
      label: "MCP",
      description: "The shared format used in the example.",
    },
    {
      slug: "connectors",
      label: "Connectors",
      description: "Product integrations, often with similar plumbing underneath.",
    },
    {
      slug: "oauth",
      label: "OAuth",
      description: "How a delegated login is commonly passed on.",
    },
    {
      slug: "scope",
      label: "Scope",
      description: "What an issued credential is allowed to do.",
    },
  ],
  nextTitle: "Before you give an AI agent access",
  nextDescription:
    "Turn the connection boundary into a concrete access decision before adding more tools or autonomy.",
};

const de: ConnectAiToolsDataContent = {
  title: "KI mit Tools und Daten verbinden",
  description:
    "Wie ein KI-Produkt an ein anderes System angebunden wird, was die Anbindung dann sehen und tun kann und wo die Grenze liegt. Mit einem vollständigen Beispiel.",
  answer:
    "Das Modell selbst meldet sich nirgends an. Die Anbindung stellt das Produkt, die Anwendung oder der Agent-Host darum herum bereit: eine festgelegte Menge an Vorgängen, ausgeführt unter einer Identität, die das Zielsystem kennt. Was die KI tatsächlich tun kann, müssen alle drei zulassen — das Produkt, die Anbindung und diese Identität.",
  lead: "Eine Anbindung kann Wissen durchsuchen, Arbeit in einem anderen System vorbereiten oder dort eine festgelegte Aktion ausführen. Damit werden Inhalte aus diesem System aber auch zu Modellinput — und Modellausgaben können Handlungen auslösen.",
  fit: "Die Aufgabe wiederholt sich, die Quelle ändert sich zu oft für sicheres Kopieren oder das Ergebnis muss über einen kontrollierten Vorgang in ein System zurück.",
  checkedLabel: "Quellen geprüft",
  capabilityHeading: "Was möglich wird, sobald etwas angebunden ist",
  capabilityLead:
    "Live-Zugriff lohnt sich, wenn dadurch eine echte Übergabe entfällt. Kann ein Mensch den kleinen nötigen Kontext gezielt bereitstellen, ist die Anbindung nur zusätzliche Infrastruktur — oft genügt ein ausgewählter Ausschnitt oder ein Nur-Lese-Export.",
  opportunities: [
    {
      title: "Aktuelles Wissen finden",
      outcome:
        "Freigegebene Dokumentation, Tickets oder eine Wissensquelle durchsuchen, ohne jeden Inhalt ins Gespräch zu kopieren.",
      simplerWhen:
        "Die Antwort hängt an einem kurzen, nicht sensiblen Dokument, das jemand gezielt auswählen kann.",
    },
    {
      title: "Aus mehreren Systemen zugleich antworten",
      outcome:
        "Ticket, Dokument und Nachricht, die zur selben Frage gehören, in einer Antwort zusammenführen, statt drei Tools zu öffnen.",
      simplerWhen:
        "Alles Nötige in einem System liegt oder du ohnehin weißt, welche wenigen Stellen du ansehen musst.",
    },
    {
      title: "Arbeit am richtigen Ort vorbereiten",
      outcome:
        "Issue, Abfrage, Nachricht oder Änderung mit den passenden Feldern und dem aktuellen Systemkontext entwerfen.",
      simplerWhen:
        "Ein einmaliger Entwurf genügt und lässt sich ohne wichtigen Kontextverlust ins Zielsystem übernehmen.",
    },
    {
      title: "Eine begrenzte Aktion ausführen",
      outcome:
        "Nach Prüfung von Auftrag und Parametern ein Ticket anlegen, einen Datensatz ändern oder einen bekannten Befehl starten.",
      simplerWhen:
        "Die Aktion selten vorkommt, schwer rückgängig zu machen ist oder in der Oberfläche des Zielsystems sicherer gelingt.",
    },
    {
      title: "Mehrere Schritte koordinieren",
      outcome:
        "Einen Agenten zwischen freigegebenen Tools wählen lassen, während ein Mensch Ziel, Haltepunkte und Abnahme verantwortet.",
      simplerWhen:
        "Die Reihenfolge vorhersehbar ist. Ein fester Workflow lässt sich leichter testen, kostet weniger und bleibt besser prüfbar.",
    },
  ],
  outcomeLabel: "Was es ermöglicht",
  simplerLabel: "Manuell bleiben, wenn",
  howHeading: "Wie eine Anbindung zustande kommt",
  howLead:
    "Die Produkte unterscheiden sich im Detail, die Beschriftungen der Schaltflächen noch mehr. Darunter besteht eine Anbindung aus diesen vier Schritten.",
  howSteps: [
    {
      title: "Etwas stellt die Anbindung bereit",
      body: "Das Produkt, die Anwendung oder der Agent-Host bietet einen Weg in ein Zielsystem an. Das kann eine eingebaute Integration sein, ein Connector, den jemand installiert, ein kleines Programm wie ein MCP-Server oder eine ganz andere Umsetzung. Welche davon es ist, zählt für dich weniger als das, was sie gemeinsam haben: Jede bietet eine festgelegte Menge an Vorgängen an und keinen offenen Zugang.",
    },
    {
      title: "Die Anbindung bekommt eine Identität, die das Zielsystem akzeptiert",
      body: "Manchmal ist das deine eigene Anmeldung, die du dem Produkt über einen Zustimmungsschritt weiterreichst. Manchmal ein API-Schlüssel, eine Dienst-Identität oder ein anderes Zugangsmittel, das bei der Einrichtung hinterlegt wurde. Welche davon es ist, entscheidet, mit wessen Rechten die Anbindung arbeitet — und das gehört vor den ersten Aufruf geklärt, nicht danach.",
    },
    {
      title: "Die Anbindung bietet eine Menge von Vorgängen an",
      body: "Suchen, lesen, anlegen, ändern, senden, löschen — benannt und begrenzt auf das, wofür die Anbindung gebaut wurde. Das Zielsystem prüft dann, welche dieser Vorgänge die verwendete Identität tatsächlich ausführen darf. Lesen und Handeln sind meist getrennte Erlaubnisse, und es lohnt sich, sie getrennt zu halten.",
    },
    {
      title: "Eine Nutzung ist ein echter Aufruf",
      body: "Nutzt die KI einen Vorgang, stellt die Anbindung eine tatsächliche Anfrage an das Zielsystem, das darauf seine eigenen Regeln anwendet. Was dieses System über die Anfrage festhält und unter welchem Namen, ist seine eigene Entscheidung — eine Frage, die man dem System stellt, das man anbindet, denn die Antwort fällt nicht überall gleich aus.",
    },
  ],
  architectureEvidence:
    "Die MCP-Spezifikation ordnet Verbindungsfreigabe, Sicherheitsregeln, Zustimmung und Benutzerautorisierung dem Host zu. Ein Client spricht mit genau einem Server; Server bieten eng gefasste Resources, Tools und Prompts an.",
  architectureSource: "MCP-Spezifikation — Architektur, Revision 2026-07-28",
  exampleHeading: "Eine Anbindung, von Anfang bis Ende",
  exampleLead:
    "Ein Beispiel mit einer konkreten Auswahl. Eine andere Anbindung an ein anderes System kann sich anders anmelden und anders protokollieren; übertragbar ist die Form der Entscheidungen.",
  exampleBeats: [
    {
      title: "Was du erreichen willst",
      body: "Jeden Montag gehst du die Tickets durch, die dein Team letzte Woche geschlossen hat, und schreibst denen, die gefragt haben, eine kurze Zusammenfassung. Das Zusammensuchen dauert länger als das Schreiben.",
    },
    {
      title: "Was verbunden wird",
      body: "Dein KI-Produkt bietet eine Anbindung an euer Ticketsystem an — hier die eingebaute Integration des Produkts dafür. Was bei der KI ankommt, ist eine feste Liste benannter Vorgänge: Tickets suchen, ein Ticket lesen, einen Kommentar schreiben.",
    },
    {
      title: "Wie sich diese Anbindung anmeldet",
      body: "In diesem Beispiel läuft die Anmeldung über OAuth, also öffnet sich die Anmelde- und Zustimmungsseite des Ticketsystems selbst. Dein Passwort tippst du dort ein, nicht im KI-Produkt, und das Ticketsystem stellt dem Produkt ein Zugangsmittel aus, das für dich steht — eines, das du in den Einstellungen des Ticketsystems auch wieder zurücknehmen kannst.",
    },
    {
      title: "Was du freigibst",
      body: "Die Zustimmungsseite nennt die Vorgänge. Du gibst Suchen und Lesen frei. Kommentieren lässt du vorerst aus.",
    },
    {
      title: "Was es sehen kann",
      body: "Höchstens das, was die verbundene Identität im Ticketsystem sieht — und weniger als das, weil die Anbindung nur Suchen und Lesen bekommen hat. Das Projekt, in dem du nicht Mitglied bist, bleibt unerreichbar: Das Ticketsystem wendet seine eigenen Regeln auf jeden Aufruf an, ganz gleich, wer ihn stellt.",
    },
    {
      title: "Was es tun kann",
      body: "Vorerst nichts. Es kann aus dem antworten, was es gelesen hat. Schaltest du später Kommentieren dazu, kann es einen Kommentar an ein Ticket hängen — und immer noch keines schließen, zuweisen oder löschen, weil diese Vorgänge ihm nie angeboten oder freigegeben wurden.",
    },
    {
      title: "Was draußen bleibt",
      body: "Deine Mail, deine Dateien, die anderen Systeme, die ihr benutzt. Eine Anbindung an ein System ist eine Anbindung an ein System. Ob etwas davon ins Modelltraining geht und wie lange das Produkt es aufbewahrt, sind eigene Fragen mit eigenen Antworten.",
    },
    {
      title: "Was du siehst",
      body: "Eine Zusammenfassung mit den Ticketnummern, auf die sie sich stützt und die du öffnen und prüfen kannst. In diesem Beispiel hält das Ticketsystem die Suche und die Lesezugriffe außerdem in seinem eigenen Aktivitätsprotokoll fest, unter der verbundenen Identität — die Arbeit lässt sich später also zurückverfolgen.",
    },
  ],
  exampleNote:
    "Zwei Dinge sind hier Eigenschaften dieses Systems und dieser Anbindung, keine Regeln: dass die Anmeldung über OAuth läuft und dass die Aufrufe unter der verbundenen Identität festgehalten werden. Ein anderes System kann mit einem Dienst-Zugangsmittel arbeiten und nichts aufbewahren, was du dir ansehen kannst.",
  exampleLink: {
    label: "Werden deine Eingaben für das Modelltraining verwendet?",
    href: "/de/data-flows/training-and-retention",
  },
  decidesHeading: "Was darüber entscheidet, was es kann",
  decidesParagraphs: [
    "Entscheidend ist nicht, ob ein Produkt MCP oder Connectors anbietet, sondern was genau diese Anbindung sehen und tun darf.",
    "Drei Stellen müssen es zulassen: Das Produkt muss den Mechanismus anbieten, die Anbindung muss den Vorgang bereitstellen, und die Identität muss ihn im Zielsystem verwenden dürfen. Eine davon zu erweitern erweitert die anderen nicht.",
  ],
  decidesLink: {
    label: "Woher der Zugriff kommt",
    href: "/de/data-flows",
  },
  boundaryHeading: "Lege die Grenze vor dem Verbinden fest",
  boundaryLead:
    "Der Zustimmungsdialog kommt zu spät, um darin erst die Regeln zu erfinden. Drei Antworten vorher; daraus folgen Identität, Vorgänge und nötige Freigaben.",
  boundaryQuestions: [
    {
      title: "Lesen und handeln",
      question:
        "Was darf gelesen werden, und welche Vorgänge dürfen etwas verändern oder auslösen?",
      reason:
        "Lesen und Handeln haben unterschiedliche Folgen und sollten keine gemeinsame Pauschalerlaubnis erben.",
    },
    {
      title: "Identität",
      question:
        "Mit wessen Rechten arbeitet die Anbindung, und wie eng kann diese Identität sein?",
      reason:
        "Das Zielsystem erzwingt die Rechte der Identität, die es sieht — eine delegierte Anmeldung, eine Dienst-Identität oder ein Token für genau einen Zweck.",
    },
    {
      title: "Folge",
      question:
        "Welche Aufrufe brauchen Freigabe, und was muss die freigebende Person sehen?",
      reason:
        "Eine brauchbare Bestätigung zeigt Vorgang, Ziel und vollständige Parameter vor der Ausführung.",
    },
  ],
  authorizationEvidence:
    "Für HTTP-Verbindungen verwendet die MCP-Autorisierung Protected Resource Metadata und OAuth. Clients sollen nur die für den aktuellen Vorgang nötigen Scopes anfordern; Server dürfen nur Tokens akzeptieren, die für genau diesen Server bestimmt sind.",
  authorizationSource: "MCP-Spezifikation — Autorisierung, Revision 2026-07-28",
  boundaryClose:
    "Was immer du entscheidest — die erste Fassung kann nur lesen. Funktioniert die Aufgabe auch ganz ohne Schreibfähigkeit, hast du etwas erfahren, was eine gelungene Vorführung nicht zeigen konnte.",
  unsafeDescription:
    "Lass eine Verbindung nicht zugleich fremde Inhalte aufnehmen und sensible Handlungen ausführen, ohne dazwischen eine eigene Regelprüfung zu setzen. Mail, Dokument oder Tool-Ergebnis können Anweisungen enthalten, die das Modell vom Auftrag des Menschen weglenken.",
  unsafeAlternative:
    "Trenne Lesen und Handeln, beginne mit Nur-Lese-Zugriff und lass sensible Aufrufe durch einen Menschen oder eine deterministische Regel gegen den ursprünglichen Auftrag prüfen.",
  glossaryLead: "Die Begriffe, die dabei auftauchen — einmal definiert:",
  glossaryLinks: [
    {
      slug: "mcp",
      label: "MCP",
      description: "Das gemeinsame Format im Beispiel.",
    },
    {
      slug: "connectors",
      label: "Connectors",
      description: "Produktintegrationen mit oft ähnlicher Technik darunter.",
    },
    {
      slug: "oauth",
      label: "OAuth",
      description: "Wie eine delegierte Anmeldung üblicherweise weitergereicht wird.",
    },
    {
      slug: "scope",
      label: "Scope",
      description: "Was ein ausgegebenes Zugangsmittel tun darf.",
    },
  ],
  nextTitle: "Bevor du einem KI-Agenten Zugriff gibst",
  nextDescription:
    "Mach aus der Verbindungsgrenze eine konkrete Zugriffsentscheidung, bevor weitere Tools oder mehr Autonomie dazukommen.",
};

const content: Record<SiteLocale, ConnectAiToolsDataContent> = { en, de };

export const getConnectAiToolsData = (locale: SiteLocale) => content[locale];
