/**
 * Setting an AI tool up before you let it near anything.
 *
 * The security principles that applied before AI did not stop applying. What
 * changed is who is now in a position to ignore them: the tools are operated
 * through ordinary language, so the person granting an agent access to a
 * folder is often not the person who used to think about least privilege.
 *
 * Mapped to OWASP's agentic skills categories rather than inventing a
 * taxonomy. Checked 2026-08-03.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-03";

const OWASP_SKILLS = "https://owasp.org/www-project-agentic-skills-top-10/";
const OWASP_LLM = "https://genai.owasp.org/";

const en: Article = {
  title: "Before you grant access",
  description:
    "What to change on day one, what to check before an agent gets a folder, and why installed skills are the part most likely to hurt you.",
  lead: "Nothing here is new security thinking. What is new is that the tools are driven in plain language, so the decision to hand something broad access is now made by people who were never asked to think about it.",
  sections: [
    {
      heading: "The switches worth changing on day one",
      level: "advice",
      paragraphs: [
        "Three settings, once per tool, and you are past the majority of the avoidable exposure.",
      ],
      list: [
        "Training. Find it, decide deliberately, and know that on consumer plans the default is usually not the one you would pick for work.",
        "Memory or persistent context. Convenient, and it means a detail from one conversation can surface in another — including one you have with someone else in the room.",
        "History. Decide whether conversations are kept at all, and delete the ones that held material belonging to someone else.",
      ],
    },
    {
      heading: "Before you hand an agent a folder",
      level: "advice",
      paragraphs: [
        "Look in it first. This sounds too obvious to write down, and it is the step people skip. A working directory accumulates things nobody meant to leave there: a dump with real data, an old key file, a client export from a project that ended two years ago.",
        "Then consider what the agent could do to it, not only what it could read. An agent that can write can also overwrite, and one that can run commands can delete. Work on a branch, have a backup you have actually restored once, and prefer giving access to a narrow directory over the parent that happens to contain it.",
      ],
    },
    {
      heading: "The old principles did not stop applying",
      level: "assessment",
      paragraphs: [
        "Least privilege, need to know, separation of duties, logging. None of this was retired because the interface became conversational. An agent is a piece of software acting with your credentials, and it should hold fewer rights than you do, not the same ones.",
        "The failure mode is specific: people grant an agent broad access because narrowing it is fiddly and the tool works better with more. That trade is made silently and never revisited, which is precisely how standing over-permission accumulates in any system.",
      ],
    },
    {
      heading: "Skills and connectors are where it multiplies",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Installing a skill or connector is a supply chain decision, and it is treated like installing a browser extension. OWASP maintains a top ten for exactly this layer, and the categories read like a list of the things people assume cannot happen: over-privileged skills, supply chain compromise, weak isolation, untrusted external instructions, and reuse of the same skill across platforms.",
        "The compounding is the part to understand. Each skill you add widens what an agent can reach, and they share the same session. One compromised skill does not endanger only its own function — it sits inside a context that may hold your keys, your files and your other tools.",
      ],
      links: [
        { label: "OWASP Agentic Skills Top 10", href: OWASP_SKILLS },
        { label: "OWASP GenAI security project", href: OWASP_LLM },
      ],
    },
    {
      heading: "A key pasted into a chat is a leaked key",
      level: "advice",
      paragraphs: [
        "Treat it as disclosed the moment you send it, and rotate it. Not because anything is known to have gone wrong, but because you no longer control where the copy lives, how long it is kept, or whether it ends up in an error log.",
        "The same applies to configuration you paste for debugging. Connection strings and tokens hide in the middle of files people share whole because trimming them takes a minute.",
      ],
    },
    {
      heading: "Instructions can arrive inside the content",
      level: "assessment",
      paragraphs: [
        "An agent that reads a document, a web page or a ticket is reading text that someone else may have written. If it acts on what it reads, then whoever wrote that text has a channel to it. This is prompt injection, and it is not exotic — it is the ordinary consequence of a system that cannot fully separate instructions from data.",
        "The consequence scales with reach, not with cleverness. A voice assistant in a medical practice that can only offer appointment slots has a small blast radius. The same assistant wired to a patient record system is a different proposition, and the difference is entirely in what it was allowed to touch.",
      ],
    },
    {
      heading: "Enforce it, do not instruct it",
      level: "assessment",
      paragraphs: [
        "Telling a model what it must not do is a request. It will usually comply, and usually is not a security property. Anything that actually matters belongs behind something that cannot be talked out of it.",
        "In practice that means the boundary sits in the layer between the model and the system: a server that exposes four operations rather than a database, scoped credentials rather than shared ones, an allow-list of commands rather than a shell. It logs what was called, and it refuses what is not on the list — regardless of how the request was phrased.",
      ],
    },
    {
      heading: "What to do",
      level: "advice",
      paragraphs: [
        "Go through the three switches for every tool you use, once. It is the highest return on the least effort of anything on this page.",
        "Look inside a directory before granting access to it, and grant access to the narrowest one that works.",
        "Review the skills and connectors you have installed and remove what you no longer use. Each one is standing access you granted and forgot.",
        "Rotate anything you have ever pasted into a chat. If you are unsure whether you did, you did.",
        "Where the consequence of a mistake is real, put a technical boundary in the path rather than a sentence in a prompt.",
      ],
    },
  ],
};

const de: Article = {
  title: "Bevor du Zugriff gibst",
  description:
    "Was du am ersten Tag umstellst, was du vor dem Ordnerzugriff prüfst, und warum installierte Skills am ehesten schaden.",
  lead: "Nichts davon ist neues Sicherheitsdenken. Neu ist, dass diese Werkzeuge in normaler Sprache bedient werden — die Entscheidung, etwas breit zugreifen zu lassen, treffen jetzt Leute, die nie danach gefragt wurden.",
  sections: [
    {
      heading: "Die Schalter, die am ersten Tag gehören",
      level: "advice",
      paragraphs: [
        "Drei Einstellungen, einmal je Werkzeug, und der größte Teil der vermeidbaren Angriffsfläche ist weg.",
      ],
      list: [
        "Training. Finden, bewusst entscheiden — und wissen, dass die Voreinstellung in Verbrauchertarifen meist nicht die ist, die du für Arbeit wählen würdest.",
        "Memory beziehungsweise dauerhafter Kontext. Bequem — und es bedeutet, dass ein Detail aus einer Unterhaltung in einer anderen auftauchen kann, auch in einer, die du mit jemandem im Raum führst.",
        "Verlauf. Entscheide, ob Unterhaltungen überhaupt aufbewahrt werden, und lösch die, die fremdes Material enthielten.",
      ],
    },
    {
      heading: "Bevor du einem Agenten einen Ordner gibst",
      level: "advice",
      paragraphs: [
        "Schau vorher hinein. Das klingt zu offensichtlich, um es aufzuschreiben, und genau dieser Schritt wird übersprungen. In einem Arbeitsverzeichnis sammelt sich, was niemand dort lassen wollte: ein Dump mit echten Daten, eine alte Schlüsseldatei, ein Kundenexport aus einem Projekt, das vor zwei Jahren endete.",
        "Dann überleg, was der Agent damit tun könnte, nicht nur, was er lesen kann. Wer schreiben darf, kann überschreiben; wer Befehle ausführen darf, kann löschen. Arbeite auf einem Branch, halte eine Sicherung bereit, die du einmal wirklich zurückgespielt hast, und gib lieber Zugriff auf ein enges Verzeichnis als auf das übergeordnete, in dem es zufällig liegt.",
      ],
    },
    {
      heading: "Die alten Prinzipien gelten weiter",
      level: "assessment",
      paragraphs: [
        "Least Privilege, Need-to-know, Funktionstrennung, Protokollierung. Nichts davon wurde außer Kraft gesetzt, weil die Oberfläche jetzt ein Gespräch ist. Ein Agent ist Software, die mit deinen Berechtigungen handelt, und er sollte weniger Rechte haben als du, nicht dieselben.",
        "Das Versagensmuster ist konkret: Man gibt einem Agenten breiten Zugriff, weil das Einschränken mühsam ist und das Werkzeug mit mehr Rechten besser läuft. Dieser Handel wird stillschweigend geschlossen und nie überprüft — genau so entstehen in jedem System dauerhaft zu weite Berechtigungen.",
      ],
    },
    {
      heading: "Bei Skills und Connectors vervielfacht es sich",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Einen Skill oder Connector zu installieren ist eine Lieferkettenentscheidung — behandelt wird sie wie das Installieren einer Browser-Erweiterung. OWASP pflegt für genau diese Schicht eine Top-Ten-Liste, und ihre Kategorien lesen sich wie eine Aufzählung dessen, was Leute für unmöglich halten: überprivilegierte Skills, kompromittierte Lieferkette, schwache Isolation, nicht vertrauenswürdige externe Anweisungen, und die Wiederverwendung desselben Skills über Plattformen hinweg.",
        "Entscheidend ist die Verstärkung. Jeder zusätzliche Skill erweitert, was ein Agent erreichen kann, und alle teilen sich dieselbe Sitzung. Ein kompromittierter Skill gefährdet nicht nur seine eigene Funktion — er sitzt in einem Kontext, in dem deine Schlüssel, deine Dateien und deine übrigen Werkzeuge liegen können.",
      ],
      links: [
        { label: "OWASP Agentic Skills Top 10", href: OWASP_SKILLS },
        { label: "OWASP GenAI Security Project", href: OWASP_LLM },
      ],
    },
    {
      heading: "Ein Schlüssel im Chat ist ein offengelegter Schlüssel",
      level: "advice",
      paragraphs: [
        "Betrachte ihn ab dem Absenden als offengelegt und tausch ihn aus. Nicht weil bekannt wäre, dass etwas schiefging, sondern weil du nicht mehr kontrollierst, wo die Kopie liegt, wie lange sie bleibt, und ob sie in einem Fehlerprotokoll landet.",
        "Dasselbe gilt für Konfiguration, die man zum Debuggen hineinkopiert. Verbindungszeichenfolgen und Tokens stecken mitten in Dateien, die im Ganzen geteilt werden, weil das Kürzen eine Minute dauern würde.",
      ],
    },
    {
      heading: "Anweisungen können im Inhalt ankommen",
      level: "assessment",
      paragraphs: [
        "Ein Agent, der ein Dokument, eine Webseite oder ein Ticket liest, liest Text, den möglicherweise jemand anderes geschrieben hat. Handelt er danach, hat dieser Jemand einen Kanal zu ihm. Das ist Prompt Injection, und daran ist nichts Exotisches — es ist die gewöhnliche Folge eines Systems, das Anweisung und Daten nicht vollständig trennen kann.",
        "Die Folge skaliert mit der Reichweite, nicht mit der Raffinesse. Ein Sprachassistent in einer Arztpraxis, der nur Termine anbieten kann, hat einen kleinen Wirkungsbereich. Derselbe Assistent an einem Patientensystem ist etwas völlig anderes — und der Unterschied liegt ausschließlich darin, worauf er zugreifen durfte.",
      ],
    },
    {
      heading: "Erzwingen statt anweisen",
      level: "assessment",
      paragraphs: [
        "Einem Modell zu sagen, was es nicht tun darf, ist eine Bitte. Es hält sich meistens daran, und „meistens“ ist keine Sicherheitseigenschaft. Was wirklich zählt, gehört hinter etwas, das sich nicht überreden lässt.",
        "Praktisch heißt das: Die Grenze liegt in der Schicht zwischen Modell und System. Ein Server, der vier Operationen anbietet statt einer Datenbank. Zugeschnittene Zugangsdaten statt geteilter. Eine Positivliste von Befehlen statt einer Shell. Er protokolliert, was aufgerufen wurde, und verweigert, was nicht auf der Liste steht — unabhängig davon, wie die Anfrage formuliert war.",
      ],
    },
    {
      heading: "Was zu tun ist",
      level: "advice",
      paragraphs: [
        "Geh die drei Schalter für jedes Werkzeug einmal durch. Das ist der größte Ertrag für den geringsten Aufwand auf dieser Seite.",
        "Schau in ein Verzeichnis hinein, bevor du Zugriff darauf gibst — und gib Zugriff auf das engste, das funktioniert.",
        "Sieh deine installierten Skills und Connectors durch und entferne, was du nicht mehr nutzt. Jeder davon ist dauerhafter Zugriff, den du erteilt und vergessen hast.",
        "Tausch alles aus, was du je in einen Chat kopiert hast. Wenn du unsicher bist, ob du es getan hast, hast du es.",
        "Wo ein Fehler echte Folgen hätte, gehört eine technische Grenze in den Weg — kein Satz im Prompt.",
      ],
    },
  ],
};

export const getBeforeYouGrantAccess = (locale: SiteLocale): Article =>
  locale === "de" ? de : en;
