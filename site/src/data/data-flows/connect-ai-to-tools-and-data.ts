/**
 * The first complete product path built with the page-primitives system.
 *
 * MCP is the technical example, not the reader's goal. The page starts with
 * the outcome, preserves the read/action distinction all the way through, and
 * ends with checks a reader can perform before broadening access.
 */
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-10";

export const sources = {
  architecture:
    "https://modelcontextprotocol.io/specification/2026-07-28/architecture",
  authorization:
    "https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization",
  mcpSecurity:
    "https://cheatsheetseries.owasp.org/cheatsheets/MCP_Security_Cheat_Sheet.html",
} as const;

interface Opportunity {
  title: string;
  outcome: string;
  simplerWhen: string;
}

interface CollaborationForm {
  title: string;
  system: string;
  human: string;
  fit: string;
}

interface ConnectionNode {
  label: string;
  role: string;
  boundary: string;
}

interface BoundaryQuestion {
  title: string;
  question: string;
  reason: string;
}

interface ControlStep {
  title: string;
  action: string;
  expected: string;
  verification: string;
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
  possibilityLabel: string;
  possibilityHeading: string;
  possibilityLead: string;
  opportunities: Opportunity[];
  outcomeLabel: string;
  simplerLabel: string;
  noConnectionDescription: string;
  noConnectionAlternative: string;
  collaborationLabel: string;
  collaborationHeading: string;
  collaborationLead: string;
  collaborationForms: CollaborationForm[];
  systemLabel: string;
  humanLabel: string;
  fitLabel: string;
  reachLabel: string;
  reachHeading: string;
  reachLead: string;
  connectionNodes: ConnectionNode[];
  connectionCaption: string;
  architectureEvidence: string;
  architectureSource: string;
  boundaryHeading: string;
  boundaryLead: string;
  boundaryQuestions: BoundaryQuestion[];
  authorizationEvidence: string;
  authorizationSource: string;
  unsafeDescription: string;
  unsafeAlternative: string;
  controlLabel: string;
  controlHeading: string;
  controlLead: string;
  controlSteps: ControlStep[];
  securityEvidence: string;
  securitySource: string;
  verificationHeading: string;
  verificationLead: string;
  verificationChecks: string[];
  referenceLabel: string;
  referenceHeading: string;
  referenceLead: string;
  glossaryLinks: GlossaryLink[];
  nextTitle: string;
  nextDescription: string;
}

const en: ConnectAiToolsDataContent = {
  title: "Connect AI to tools and data",
  description:
    "Decide when an AI connection is useful, what it can reach, and how to keep permissions, actions and recovery under control. MCP is the technical example.",
  answer:
    "Connect AI only when the task needs live context or a bounded action. Start read-only, grant one identity the smallest useful scope, and keep consequential calls behind a visible approval and a recoverable log.",
  lead: "A connection can let an assistant search current knowledge, prepare work in another system or carry out a defined action. It also turns content from that system into model input and model output into a possible action path. The useful question is therefore not whether a product supports MCP or connectors, but what this particular connection is allowed to see and do.",
  fit: "The same task recurs, the source changes too often to paste safely, or the result must be returned to a system through a controlled operation.",
  checkedLabel: "Sources checked",
  possibilityLabel: "Possibility",
  possibilityHeading: "What a connection changes",
  possibilityLead:
    "Live access is useful when it removes a real hand-off. It is unnecessary infrastructure when a person can supply the small amount of context the task needs.",
  opportunities: [
    {
      title: "Find current knowledge",
      outcome:
        "Search approved documentation, tickets or a knowledge system without copying each item into the conversation.",
      simplerWhen:
        "The answer depends on one short, non-sensitive document that a person can select and provide directly.",
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
  noConnectionDescription:
    "Do not add a live connection when the task needs one small piece of context, happens rarely, or has no safe way to undo a wrong action.",
  noConnectionAlternative:
    "Supply a selected excerpt, use a read-only export, or keep the final action in the target system's own interface.",
  collaborationLabel: "Collaboration",
  collaborationHeading: "Choose an operation, not a sophistication level",
  collaborationLead:
    "A tool-using system and an agent may call the same tool. The difference is how much of the route to the result is decided in advance.",
  collaborationForms: [
    {
      title: "Tool-using system",
      system:
        "Carries out one selected operation with defined inputs: search, read, create or update.",
      human:
        "Chooses the operation, checks its parameters and accepts the returned result.",
      fit: "The required action is known and the consequence of each call can be reviewed on its own.",
    },
    {
      title: "Agent",
      system:
        "Chooses and sequences several permitted operations while working towards a stated goal.",
      human:
        "Owns the goal, tool boundary, checkpoints, stop conditions and final acceptance.",
      fit: "The route cannot be fixed beforehand, but the permitted actions and points of human control can.",
    },
  ],
  systemLabel: "System",
  humanLabel: "Human",
  fitLabel: "Fits when",
  reachLabel: "Reach",
  reachHeading: "See the whole connection",
  reachLead:
    "MCP standardises the middle of this path. It does not decide which server is trustworthy, which target-system account is used, or whether a proposed action should be approved.",
  connectionNodes: [
    {
      label: "Human and task",
      role: "States the outcome and decides which actions may cross the boundary.",
      boundary: "Intent, responsibility and approval",
    },
    {
      label: "AI host and MCP client",
      role: "Makes selected capabilities available to the model and routes requests to one connected server.",
      boundary: "Connection policy, consent and context",
    },
    {
      label: "MCP server or connector",
      role: "Offers named resources and tools and translates a request into the target system's interface.",
      boundary: "Tool schema, validation and credentials",
    },
    {
      label: "Target system",
      role: "Enforces what the connected account or token may read, change or trigger.",
      boundary: "Account, API scope and system log",
    },
  ],
  connectionCaption:
    "The model does not connect straight to the mailbox, repository or CRM. Each layer adds a separate decision and a separate place to verify the boundary.",
  architectureEvidence:
    "The MCP specification assigns connection permission, security policy, consent and user authorization to the host. A client communicates with one server; servers expose focused resources, tools and prompts.",
  architectureSource: "MCP specification — architecture, revision 2026-07-28",
  boundaryHeading: "Decide the boundary before connecting",
  boundaryLead:
    "The consent screen is too late to invent the policy. Write down these five answers first; they determine the account, scopes, approval UI and evidence you need.",
  boundaryQuestions: [
    {
      title: "Need",
      question:
        "Which outcome requires live access rather than selected context?",
      reason:
        "A connection without a named outcome becomes permanent reach looking for a use.",
    },
    {
      title: "Read and action",
      question:
        "What may be read, and which operations may change or trigger something?",
      reason:
        "Resources and tools have different consequences and should not inherit one blanket permission.",
    },
    {
      title: "Identity",
      question:
        "Whose authority does the connection use, and how narrow can that account be?",
      reason:
        "The target system ultimately enforces the rights carried by its account or token.",
    },
    {
      title: "Consequence",
      question: "Which calls require approval, and what must the approver see?",
      reason:
        "A useful confirmation shows the operation, destination and full parameters before execution.",
    },
    {
      title: "Recovery",
      question:
        "How will you revoke access, undo an action and reconstruct the call?",
      reason:
        "A stop button without a tested revocation and recovery path is only a promise.",
    },
  ],
  authorizationEvidence:
    "For HTTP connections, the MCP authorization specification uses protected-resource metadata and OAuth. It tells clients to request only the scopes needed for the current operation and requires servers to accept only tokens intended for that server.",
  authorizationSource: "MCP specification — authorization, revision 2026-07-28",
  unsafeDescription:
    "Do not let a connection both ingest untrusted external content and perform sensitive actions without a separate policy check. An email, document or tool result can contain instructions that steer a model away from the user's request.",
  unsafeAlternative:
    "Separate reading from acting, keep the first deployment read-only, and require a human or deterministic policy to approve sensitive calls against the original task.",
  controlLabel: "Control",
  controlHeading: "Build a control loop, not just a connection",
  controlLead:
    "The implementation is complete only when access can be narrowed, calls can be checked and the connection can be removed without guessing what remains.",
  controlSteps: [
    {
      title: "Name one task and its manual baseline",
      action:
        "Write the outcome, the current manual route and the exact hand-off the connection should remove. Keep the first test to one source and one operation.",
      expected:
        "A bounded use case whose value can be compared with doing the task without a connection.",
      verification:
        "A reviewer can state the allowed outcome in one sentence and can identify when the manual route is still preferable.",
    },
    {
      title: "Separate resources from tools",
      action:
        "List read capabilities independently from create, update, send, delete and execute capabilities. Enable only what the first task needs.",
      expected:
        "The model can obtain the required context without receiving unrelated write or execution rights.",
      verification:
        "Attempt an out-of-scope read and an unapproved write; both are refused by the system boundary, not merely by the prompt.",
    },
    {
      title: "Use a narrow identity",
      action:
        "Give the server a dedicated account or token with the smallest available scope and lifetime. Keep credentials out of model context and logs.",
      expected:
        "A compromised call cannot inherit an administrator's or developer's full authority.",
      verification:
        "Inspect the target system's grant, token audience and expiry; revoke it and confirm the next call fails.",
    },
    {
      title: "Put consequence behind approval",
      action:
        "Require confirmation for data sharing, external messages, destructive changes and other high-impact calls. Show the tool, destination and full parameters.",
      expected:
        "The person approves a concrete operation rather than a reassuring natural-language summary.",
      verification:
        "Change a parameter after the proposal and confirm that the prior approval no longer authorizes the call.",
    },
    {
      title: "Log, stop and recover",
      action:
        "Record the user intent, tool name, parameters, result, approver and time without recording secrets. Define retry limits, revocation and undo procedures.",
      expected:
        "An operator can stop the path and later explain what was requested, executed and returned.",
      verification:
        "Run one successful call, one refused call and one recovery exercise; reconstruct all three from the retained evidence.",
    },
  ],
  securityEvidence:
    "OWASP's MCP security guidance recommends least privilege per server and tool, scoped credentials, visible approval for sensitive calls, input and output validation, and central logging. It treats tool descriptions and returned content as possible injection surfaces.",
  securitySource: "OWASP MCP Security Cheat Sheet",
  verificationHeading: "Before you widen access",
  verificationLead:
    "A successful demo proves that the path works. These checks show whether the boundary works when the request, content or connection is wrong.",
  verificationChecks: [
    "The task still works with read-only access before any write capability is enabled.",
    "A resource outside the approved collection, folder or account is denied.",
    "A write with changed parameters requires a new approval.",
    "Instructions inside an email, document or tool result cannot authorize another tool call.",
    "Revoking the token or disconnecting the server stops the next call.",
    "The log identifies intent, operation, parameters, result and approver without exposing credentials or unnecessary content.",
    "A failed or duplicated call has a documented recovery route and a retry limit.",
  ],
  referenceLabel: "Reference",
  referenceHeading: "The terms behind the decision",
  referenceLead:
    "Use these definitions when you need technical precision. None of them replaces the boundary decision above.",
  glossaryLinks: [
    {
      slug: "mcp",
      label: "MCP",
      description: "The shared protocol used in this example.",
    },
    {
      slug: "mcp-client",
      label: "MCP Client",
      description: "The application side of one server connection.",
    },
    {
      slug: "mcp-server",
      label: "MCP Server",
      description: "The service that offers resources and tools.",
    },
    {
      slug: "connectors",
      label: "Connectors",
      description: "Product integrations that may hide similar plumbing.",
    },
    {
      slug: "tool-use",
      label: "Tool Use",
      description: "How a model requests a named operation.",
    },
    {
      slug: "oauth",
      label: "OAuth",
      description: "How delegated authorization is commonly granted.",
    },
    {
      slug: "scope",
      label: "Scope",
      description: "What an issued token is allowed to do.",
    },
    {
      slug: "revocation",
      label: "Revocation",
      description: "How granted access is withdrawn.",
    },
    {
      slug: "prompt-injection",
      label: "Prompt Injection",
      description: "How untrusted content can steer model behaviour.",
    },
  ],
  nextTitle: "Before you give an AI agent access",
  nextDescription:
    "Turn the connection boundary into a concrete access decision before adding more tools or autonomy.",
};

const de: ConnectAiToolsDataContent = {
  title: "KI mit Tools und Daten verbinden",
  description:
    "Wann eine KI-Anbindung nützt, was sie erreichen kann und wie Berechtigungen, Aktionen und Rückweg beherrschbar bleiben. MCP dient als technisches Beispiel.",
  answer:
    "Verbinde KI nur dann live, wenn die Aufgabe aktuelle Daten oder eine klar begrenzte Aktion braucht. Beginne mit Lesezugriff, verwende eine eigene Identität mit engem Scope und lass folgenreiche Aufrufe erst nach sichtbarer Freigabe und mit nachvollziehbarem Rückweg zu.",
  lead: "Eine Verbindung kann Wissen durchsuchen, Arbeit in einem anderen System vorbereiten oder dort eine festgelegte Aktion ausführen. Damit werden Inhalte aus diesem System aber auch zu Modellinput — und Modellausgaben können Handlungen auslösen. Entscheidend ist deshalb nicht, ob ein Produkt MCP oder Connectoren anbietet, sondern was genau diese Verbindung sehen und tun darf.",
  fit: "Die Aufgabe wiederholt sich, die Quelle ändert sich zu oft für sicheres Kopieren oder das Ergebnis muss über einen kontrollierten Vorgang in ein System zurück.",
  checkedLabel: "Quellen geprüft",
  possibilityLabel: "Möglichkeit",
  possibilityHeading: "Was eine Verbindung verändert",
  possibilityLead:
    "Live-Zugriff lohnt sich, wenn dadurch eine echte Übergabe entfällt. Kann ein Mensch den kleinen nötigen Kontext gezielt bereitstellen, ist die Verbindung nur zusätzliche Infrastruktur.",
  opportunities: [
    {
      title: "Aktuelles Wissen finden",
      outcome:
        "Freigegebene Dokumentation, Tickets oder eine Wissensquelle durchsuchen, ohne jeden Inhalt ins Gespräch zu kopieren.",
      simplerWhen:
        "Die Antwort hängt an einem kurzen, nicht sensiblen Dokument, das jemand gezielt auswählen kann.",
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
  noConnectionDescription:
    "Baue keine Live-Verbindung, wenn die Aufgabe nur wenig Kontext braucht, selten vorkommt oder eine falsche Aktion nicht verlässlich rückgängig gemacht werden kann.",
  noConnectionAlternative:
    "Gib einen ausgewählten Ausschnitt weiter, arbeite mit einem Nur-Lese-Export oder führe den letzten Schritt direkt im Zielsystem aus.",
  collaborationLabel: "Zusammenarbeit",
  collaborationHeading:
    "Wähle eine Arbeitsform, keine vermeintliche Entwicklungsstufe",
  collaborationLead:
    "Ein Tool-nutzendes System und ein Agent können dasselbe Tool aufrufen. Der Unterschied liegt darin, wie viel vom Weg zum Ergebnis vorher feststeht.",
  collaborationForms: [
    {
      title: "Tool-nutzendes System",
      system:
        "Führt einen ausgewählten Vorgang mit definierten Eingaben aus: suchen, lesen, anlegen oder ändern.",
      human:
        "Wählt den Vorgang, prüft seine Parameter und nimmt das zurückgelieferte Ergebnis ab.",
      fit: "Die benötigte Aktion feststeht und sich die Folge jedes Aufrufs einzeln prüfen lässt.",
    },
    {
      title: "Agent",
      system:
        "Wählt und ordnet mehrere erlaubte Vorgänge, um auf ein genanntes Ziel hinzuarbeiten.",
      human:
        "Verantwortet Ziel, Tool-Grenze, Haltepunkte, Abbruchbedingungen und die endgültige Abnahme.",
      fit: "Der Weg nicht vorher festgelegt werden kann, wohl aber die erlaubten Handlungen und menschlichen Kontrollpunkte.",
    },
  ],
  systemLabel: "System",
  humanLabel: "Mensch",
  fitLabel: "Passt, wenn",
  reachLabel: "Reichweite",
  reachHeading: "Betrachte die ganze Verbindung",
  reachLead:
    "MCP vereinheitlicht den mittleren Teil dieses Wegs. Das Protokoll entscheidet weder, welchem Server du vertrauen solltest, noch welches Konto im Zielsystem verwendet wird oder ob eine vorgeschlagene Aktion freigegeben werden darf.",
  connectionNodes: [
    {
      label: "Mensch und Aufgabe",
      role: "Nennt das Ergebnis und entscheidet, welche Handlungen die Grenze überschreiten dürfen.",
      boundary: "Absicht, Verantwortung und Freigabe",
    },
    {
      label: "KI-Host und MCP-Client",
      role: "Stellt dem Modell ausgewählte Fähigkeiten bereit und leitet Anfragen an jeweils einen verbundenen Server.",
      boundary: "Verbindungsregeln, Zustimmung und Kontext",
    },
    {
      label: "MCP-Server oder Connector",
      role: "Bietet benannte Resources und Tools an und übersetzt Anfragen für die Schnittstelle des Zielsystems.",
      boundary: "Tool-Schema, Validierung und Zugangsdaten",
    },
    {
      label: "Zielsystem",
      role: "Erzwingt, was das verbundene Konto oder Token lesen, verändern oder auslösen darf.",
      boundary: "Konto, API-Scope und Systemprotokoll",
    },
  ],
  connectionCaption:
    "Das Modell verbindet sich nicht direkt mit Postfach, Repository oder CRM. Jede Schicht bringt eine eigene Entscheidung und eine eigene Stelle mit, an der sich die Grenze prüfen lässt.",
  architectureEvidence:
    "Die MCP-Spezifikation ordnet Verbindungsfreigabe, Sicherheitsregeln, Zustimmung und Benutzerautorisierung dem Host zu. Ein Client spricht mit genau einem Server; Server bieten eng gefasste Resources, Tools und Prompts an.",
  architectureSource: "MCP-Spezifikation — Architektur, Revision 2026-07-28",
  boundaryHeading: "Lege die Grenze vor dem Verbinden fest",
  boundaryLead:
    "Der Zustimmungsdialog kommt zu spät, um darin erst die Regeln zu erfinden. Beantworte diese Fragen vorher; daraus folgen Konto, Scopes, Freigabeoberfläche und nötige Nachweise.",
  boundaryQuestions: [
    {
      title: "Bedarf",
      question:
        "Welches Ergebnis braucht Live-Zugriff statt ausgewähltem Kontext?",
      reason:
        "Eine Verbindung ohne benanntes Ergebnis wird zu dauerhafter Reichweite auf der Suche nach einem Zweck.",
    },
    {
      title: "Lesen und handeln",
      question:
        "Was darf gelesen werden, und welche Vorgänge dürfen etwas verändern oder auslösen?",
      reason:
        "Resources und Tools haben unterschiedliche Folgen und sollten keine gemeinsame Pauschalerlaubnis erben.",
    },
    {
      title: "Identität",
      question:
        "Mit wessen Rechten arbeitet die Verbindung, und wie eng kann dieses Konto sein?",
      reason:
        "Am Ende erzwingt das Zielsystem die Rechte des dort verwendeten Kontos oder Tokens.",
    },
    {
      title: "Folge",
      question:
        "Welche Aufrufe brauchen Freigabe, und was muss die freigebende Person sehen?",
      reason:
        "Eine brauchbare Bestätigung zeigt Vorgang, Ziel und vollständige Parameter vor der Ausführung.",
    },
    {
      title: "Rückweg",
      question:
        "Wie entziehst du den Zugriff, machst eine Aktion rückgängig und rekonstruierst den Aufruf?",
      reason:
        "Ein Stoppschalter ohne getesteten Entzug und Wiederherstellungsweg bleibt ein Versprechen.",
    },
  ],
  authorizationEvidence:
    "Für HTTP-Verbindungen verwendet die MCP-Autorisierung Protected Resource Metadata und OAuth. Clients sollen nur die für den aktuellen Vorgang nötigen Scopes anfordern; Server dürfen nur Tokens akzeptieren, die für genau diesen Server bestimmt sind.",
  authorizationSource: "MCP-Spezifikation — Autorisierung, Revision 2026-07-28",
  unsafeDescription:
    "Lass eine Verbindung nicht zugleich fremde Inhalte aufnehmen und sensible Handlungen ausführen, ohne dazwischen eine eigene Regelprüfung zu setzen. Mail, Dokument oder Tool-Ergebnis können Anweisungen enthalten, die das Modell vom Auftrag des Menschen weglenken.",
  unsafeAlternative:
    "Trenne Lesen und Handeln, beginne mit Nur-Lese-Zugriff und lass sensible Aufrufe durch einen Menschen oder eine deterministische Regel gegen den ursprünglichen Auftrag prüfen.",
  controlLabel: "Kontrolle",
  controlHeading: "Baue einen Kontrollkreis, nicht nur eine Verbindung",
  controlLead:
    "Die Umsetzung ist erst fertig, wenn sich der Zugriff begrenzen, jeder Aufruf prüfen und die Verbindung entfernen lässt, ohne raten zu müssen, was zurückbleibt.",
  controlSteps: [
    {
      title: "Eine Aufgabe und ihren manuellen Ausgangspunkt benennen",
      action:
        "Schreibe Ergebnis, bisherigen manuellen Weg und genau die Übergabe auf, die entfallen soll. Begrenze den ersten Test auf eine Quelle und einen Vorgang.",
      expected:
        "Ein enger Anwendungsfall, dessen Nutzen sich mit der Arbeit ohne Verbindung vergleichen lässt.",
      verification:
        "Eine prüfende Person kann das erlaubte Ergebnis in einem Satz nennen und erkennt, wann der manuelle Weg besser bleibt.",
    },
    {
      title: "Resources und Tools trennen",
      action:
        "Liste Lesefähigkeiten getrennt von Anlegen, Ändern, Senden, Löschen und Ausführen. Aktiviere nur, was die erste Aufgabe benötigt.",
      expected:
        "Das Modell erhält den nötigen Kontext ohne unbeteiligte Schreib- oder Ausführungsrechte.",
      verification:
        "Versuche einen nicht freigegebenen Lesezugriff und eine unerlaubte Änderung; beides wird an der Systemgrenze abgewiesen, nicht bloß durch einen Prompt.",
    },
    {
      title: "Eine enge Identität verwenden",
      action:
        "Gib dem Server ein eigenes Konto oder Token mit kleinstmöglichem Scope und kurzer Laufzeit. Halte Zugangsdaten aus Modellkontext und Logs heraus.",
      expected:
        "Ein missbrauchter Aufruf erbt nicht sämtliche Rechte eines Administrators oder Entwicklers.",
      verification:
        "Prüfe im Zielsystem Freigabe, Token-Ziel und Ablaufzeit; entziehe das Token und bestätige, dass der nächste Aufruf scheitert.",
    },
    {
      title: "Folgen vor die Freigabe stellen",
      action:
        "Verlange Bestätigung für Datenweitergabe, externe Nachrichten, zerstörerische Änderungen und andere folgenreiche Aufrufe. Zeige Tool, Ziel und alle Parameter.",
      expected:
        "Der Mensch genehmigt einen konkreten Vorgang statt einer beruhigenden Zusammenfassung in natürlicher Sprache.",
      verification:
        "Ändere nach dem Vorschlag einen Parameter und bestätige, dass die frühere Freigabe den Aufruf nicht mehr erlaubt.",
    },
    {
      title: "Protokollieren, stoppen und wiederherstellen",
      action:
        "Halte Auftrag, Tool-Name, Parameter, Ergebnis, Freigabe und Zeitpunkt fest, ohne Geheimnisse zu protokollieren. Lege Wiederholungsgrenzen, Entzug und Rückweg fest.",
      expected:
        "Der Betrieb kann den Weg stoppen und später erklären, was angefordert, ausgeführt und zurückgegeben wurde.",
      verification:
        "Führe einen erfolgreichen, einen abgewiesenen und einen rückgängig gemachten Aufruf durch; rekonstruiere alle drei aus den aufbewahrten Nachweisen.",
    },
  ],
  securityEvidence:
    "Die OWASP-Leitlinie zu MCP empfiehlt minimale Rechte je Server und Tool, getrennte Zugangsdaten, sichtbare Freigabe sensibler Aufrufe, Ein- und Ausgabevalidierung sowie zentrale Protokollierung. Auch Tool-Beschreibungen und zurückgelieferte Inhalte gelten als mögliche Injection-Flächen.",
  securitySource: "OWASP MCP Security Cheat Sheet",
  verificationHeading: "Bevor du den Zugriff erweiterst",
  verificationLead:
    "Eine gelungene Demo zeigt, dass der Weg funktioniert. Diese Prüfungen zeigen, ob die Grenze auch bei falschem Auftrag, problematischem Inhalt oder kaputter Verbindung hält.",
  verificationChecks: [
    "Die Aufgabe funktioniert zuerst mit Nur-Lese-Zugriff, bevor eine Schreibfähigkeit aktiviert wird.",
    "Eine Resource außerhalb der freigegebenen Sammlung, des Ordners oder Kontos wird abgewiesen.",
    "Eine Änderung mit abweichenden Parametern braucht eine neue Freigabe.",
    "Anweisungen in Mail, Dokument oder Tool-Ergebnis können keinen weiteren Tool-Aufruf autorisieren.",
    "Token-Entzug oder Trennen des Servers stoppt den nächsten Aufruf.",
    "Das Log nennt Auftrag, Vorgang, Parameter, Ergebnis und Freigabe, ohne Zugangsdaten oder unnötige Inhalte preiszugeben.",
    "Für fehlgeschlagene oder doppelte Aufrufe gibt es einen dokumentierten Rückweg und eine Wiederholungsgrenze.",
  ],
  referenceLabel: "Nachschlagen",
  referenceHeading: "Die Begriffe hinter der Entscheidung",
  referenceLead:
    "Diese Definitionen liefern technische Genauigkeit. Keine davon ersetzt die Entscheidung über die Grenze.",
  glossaryLinks: [
    {
      slug: "mcp",
      label: "MCP",
      description: "Das gemeinsame Protokoll in diesem Beispiel.",
    },
    {
      slug: "mcp-client",
      label: "MCP-Client",
      description: "Die Anwendungsseite einer Serververbindung.",
    },
    {
      slug: "mcp-server",
      label: "MCP-Server",
      description: "Der Dienst, der Resources und Tools anbietet.",
    },
    {
      slug: "connectors",
      label: "Connectoren",
      description: "Produktintegrationen mit oft ähnlicher Technik darunter.",
    },
    {
      slug: "tool-use",
      label: "Tool Use",
      description: "Wie ein Modell einen benannten Vorgang anfordert.",
    },
    {
      slug: "oauth",
      label: "OAuth",
      description: "Wie delegierte Autorisierung häufig erteilt wird.",
    },
    {
      slug: "scope",
      label: "Scope",
      description: "Was ein ausgegebenes Token tun darf.",
    },
    {
      slug: "revocation",
      label: "Entzug",
      description: "Wie eine erteilte Berechtigung zurückgenommen wird.",
    },
    {
      slug: "prompt-injection",
      label: "Prompt Injection",
      description:
        "Wie fremde Inhalte das Modellverhalten beeinflussen können.",
    },
  ],
  nextTitle: "Bevor du einem KI-Agenten Zugriff gibst",
  nextDescription:
    "Mach aus der Verbindungsgrenze eine konkrete Zugriffsentscheidung, bevor weitere Tools oder mehr Autonomie dazukommen.",
};

const content: Record<SiteLocale, ConnectAiToolsDataContent> = { en, de };

export const getConnectAiToolsData = (locale: SiteLocale) => content[locale];
