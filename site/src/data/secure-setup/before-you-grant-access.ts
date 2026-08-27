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
 *
 * Slice 5 reordered this page around its own central idea. "Enforce it, do not
 * instruct it" used to be section seven of eight, four screens down on mobile,
 * with the actions that follow from it in section eight; it now sits second,
 * because everything after it is an application of it. The three account
 * switches that used to open the page are facts three `/data-flows` pages keep
 * current, and this page compressed them into three sentences without linking
 * any of them — rendered review after the first pass found the page had grown
 * to 9+ mobile screens on material that belonged elsewhere. The switches are
 * cut rather than compressed further: they are not this page's concept, and
 * where a chat-only reader should meet them is unsettled and left for slice
 * 6/7 — see `.ai/state.md`. A closing recap section was cut for the same
 * reason: by the second pass every action in it was already attached to the
 * section that owns it, so the recap said nothing the page had not just said.
 *
 * Three sections arrived from Connect AI's removed control loop: whose rights
 * it acts with, what an approval has to show, and taking the access back. The
 * recovered verification steps are attached to the claim each one proves
 * rather than collected into a checklist, because a boundary you have not
 * tried is the thing this page is about.
 *
 * Two absolutes are deliberately avoided. Enforcement is not the target
 * system's monopoly — it can sit in the connection, the credential, the
 * exposed operations, the target system or a required approval, and the
 * conceptual claim is only that it is enforced outside the model. And
 * revoking an access does not delete copies already made: an index or a cache
 * built while the access existed *may* still hold the material, which is a
 * question to ask about a product rather than a property of all of them.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-03";

const OWASP_SKILLS = "https://owasp.org/www-project-agentic-skills-top-10/";
const OWASP_LLM = "https://genai.owasp.org/";

interface NextStepContent {
  label: string;
  description: string;
}

const nextStep: Record<SiteLocale, NextStepContent> = {
  en: {
    label: "Checking the result",
    description:
      "The boundary decides what it may do. Checking decides whether what came back, or what it did, is any good.",
  },
  de: {
    label: "Das Ergebnis prüfen",
    description:
      "Die Grenze entscheidet, was passieren darf. Die Prüfung entscheidet, ob das, was zurückkam oder getan wurde, etwas taugt.",
  },
};

export const getBeforeYouGrantAccessNextStep = (locale: SiteLocale): NextStepContent =>
  nextStep[locale];

const en: Article = {
  title: "Before you give an AI agent access",
  description:
    "What to decide before an agent gets a folder, why a boundary has to be enforced outside the model, what a useful approval shows, and how to take an access back.",
  lead: "The same security principles apply to AI agents as to any other software: as few permissions as possible, clearly bounded access, traceable actions. What is new is how easily far-reaching permissions can now be granted, and by whom.",
  sections: [
    {
      heading: "Before you hand an agent a folder",
      level: "advice",
      paragraphs: [
        "Look in it first. This sounds too obvious to write down, and it is the step people skip. A working directory accumulates things nobody meant to leave there: a dump with real data, an old key file, a client export from a project that ended two years ago.",
        "Then consider what the agent could do to it, not only what it could read. An agent that can write can also overwrite, and one that can run commands can delete. Work on a branch, have a backup you have actually restored once, and prefer giving access to a narrow directory over the parent that happens to contain it.",
      ],
    },
    {
      heading: "Enforce it, do not instruct it",
      level: "assessment",
      paragraphs: [
        "Telling a model what it must not do is a request. The model may follow that instruction, but following it is not an enforceable boundary. If the only thing stopping an action is text the model read, what you have is guidance.",
        "A boundary is enforced outside the model: it refuses the same operation whether or not the model chose to comply, and whether or not it ever read your instruction. It can sit in more than one place — a server that exposes four operations rather than a database, a credential scoped to one folder rather than a shared one, an allow-list of commands rather than a shell, the permissions the target system applies to the identity it sees, or an approval that has to happen before the call goes out. What they have in common is that the model does not decide.",
        "You can find out which of the two you have. Ask for a file outside the folder you granted, and ask for a change you did not approve. Both should fail because something refused them, not because the model decided not to.",
      ],
    },
    {
      heading: "Whose rights it acts with",
      level: "assessment",
      paragraphs: [
        "Least privilege, need to know and separation of duties were not retired because the interface became conversational. An agent is software acting with credentials somebody handed it, and it should hold fewer rights than you do rather than the same ones. The failure mode is specific: people grant broad access because narrowing it is fiddly and the tool works better with more — a trade made silently and never revisited, which is precisely how standing over-permission accumulates in any system.",
        "Where the system allows it, narrowing means an identity of its own rather than yours: its own account or token, the smallest scope that still does the job, and a limited lifetime where one is offered. Keep the credential out of the model's context and out of anything it writes.",
      ],
      links: [{ label: "Scope, defined", href: "/glossary/scope" }],
    },
    {
      heading: "What an approval has to show you",
      level: "assessment",
      paragraphs: [
        "A bare “continue?” is not enough. To approve something you have to be able to see it: which operation, on which system, and the values that decide what it actually does. A summary in the assistant's own words alone is not enough either — it is written by the party asking for the permission.",
        "Approving and checking are two jobs at two moments: before it runs, no is still available; afterwards you are only working out what happened. One test tells you whether an approval is real — change a value that matters after the proposal, then see whether the earlier approval still covers the call. It should not.",
      ],
    },
    {
      heading: "Prompt injection: when content itself contains instructions",
      level: "assessment",
      paragraphs: [
        "An agent that reads a document, a web page or a ticket is reading text that someone else may have written. If it acts on what it reads, then whoever wrote that text has a channel to it. This is prompt injection, and it is not exotic — it is the ordinary consequence of a system that cannot fully separate instructions from data.",
        "The consequence scales with reach, not with cleverness. A voice assistant in a medical practice that can only offer appointment slots has a small blast radius. The same assistant wired to a patient record system is a different proposition, and the difference is entirely in what it was allowed to touch.",
        "What helps is not a better prompt: asking a model to ignore instructions it finds is another sentence in the same stream those instructions arrive in. What helps is a separation — content nobody on your side wrote should not be able to authorise something consequential on its own, and where one path has to both read and act, the consequential half needs an approval or a boundary outside the model. You can check that harmlessly: put a plain instruction into a document the system reads, something you would notice and would not want, and confirm the next consequential call still comes back to you.",
      ],
      links: [{ label: "Prompt injection, defined", href: "/glossary/prompt-injection" }],
    },
    {
      heading: "Skills and connectors widen the attack surface",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Installing a skill or connector is a supply chain decision, and it is treated like installing a browser extension. OWASP maintains a top ten for exactly this layer, and the categories read like a list of the things people assume cannot happen: over-privileged skills, supply chain compromise, weak isolation, untrusted external instructions, and reuse of the same skill across platforms.",
        "The compounding is the part to understand. Each skill you add widens what an agent can reach, and they share the same session. One compromised skill does not endanger only its own function — it sits inside a context that may hold your keys, your files and your other tools.",
      ],
      links: [
        { label: "Connectors, defined", href: "/glossary/connectors" },
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
        "Do not guess whether you pasted one — chat history, shell history and a secret scanner over the repository answer it in minutes. Rotate what turns up: passwords, API keys, access tokens, session cookies, private keys, recovery codes, connection strings.",
      ],
    },
    {
      heading: "Taking the access back",
      level: "advice",
      paragraphs: [
        "A stop button without a tested revocation and recovery path is only a promise. Find the way back before you need it, and use it once while nothing is wrong.",
      ],
      list: [
        "Remove the permission in the target system — the layer that decides what the identity may do there.",
        "Disable the connector or integration, and remove the ones you no longer use. Each is standing access you granted and stopped thinking about.",
        "Revoke the credential it was using, then confirm the next call fails. Until you have seen that, you know the button exists, not that it works.",
        "Switch off the automation itself where something starts on a schedule or an event, rather than only taking away what it reaches.",
      ],
    },
    {
      heading: "What withdrawing an access does not do",
      level: "assessment",
      paragraphs: [
        "Withdrawing an access stops what would have happened next. It does not follow that every copy goes with it: an index, a cache or an export created while the access existed may still hold the material afterwards. Whether any of those exist is a property of the product, and a fair question to ask before you connect something.",
        "Undoing what already happened is a separate question, and the answer is not yours to give — it belongs to the system the action happened in and to the action itself, where a version history, an undo or a restore from backup exists. Reconstructing what happened is a third job again, and it rests on what was written down at the time.",
      ],
      links: [{ label: "Keeping a record", href: "/secure-setup/keeping-a-record" }],
    },
  ],
};

const de: Article = {
  title: "Bevor ein KI-Agent auf Dateien und Systeme zugreift",
  description:
    "Was du entscheidest, bevor ein Agent einen Ordner bekommt, warum eine Grenze außerhalb des Modells durchgesetzt werden muss, was eine brauchbare Freigabe zeigt und wie du einen Zugriff zurücknimmst.",
  lead: "Für KI-Agenten gelten dieselben Sicherheitsprinzipien wie für andere Software: möglichst wenige Rechte, klar begrenzte Zugriffe, nachvollziehbare Aktionen. Neu ist vor allem, wie einfach sich weitreichende Berechtigungen heute vergeben lassen — und von wem.",
  sections: [
    {
      heading: "Bevor du einem Agenten einen Ordner freigibst",
      level: "advice",
      paragraphs: [
        "Schau vorher hinein. Das klingt zu offensichtlich, um es aufzuschreiben, und genau dieser Schritt wird übersprungen. In einem Arbeitsverzeichnis sammelt sich, was niemand dort lassen wollte: ein Dump mit echten Daten, eine alte Schlüsseldatei, ein Kundenexport aus einem Projekt, das vor zwei Jahren endete.",
        "Dann überleg, was der Agent damit tun könnte, nicht nur, was er lesen kann. Wer schreiben darf, kann überschreiben; wer Befehle ausführen darf, kann löschen. Arbeite auf einem Branch, halte eine Sicherung bereit, die du einmal wirklich zurückgespielt hast, und gib lieber Zugriff auf ein enges Verzeichnis als auf das übergeordnete, in dem es zufällig liegt.",
      ],
    },
    {
      heading: "Erzwingen statt anweisen",
      level: "assessment",
      paragraphs: [
        "Einem Modell zu sagen, was es nicht tun darf, ist eine Bitte. Das Modell hält sich vielleicht daran, aber das macht daraus keine durchsetzbare Grenze. Wenn das Einzige, was eine Handlung aufhält, ein Text ist, den das Modell gelesen hat, hast du eine Leitlinie.",
        "Eine Grenze wird außerhalb des Modells durchgesetzt: Sie weist denselben Vorgang ab, ob das Modell sich daran halten wollte oder nicht — und ob es deine Anweisung je gelesen hat oder nicht. Sie kann an mehreren Stellen liegen: ein Server, der vier Operationen anbietet statt einer Datenbank; ein Zugangsmittel, das auf einen Ordner zugeschnitten ist statt geteilt; eine Positivliste von Befehlen statt einer Shell; die Rechte, die das Zielsystem der Identität zugesteht, die es sieht; oder eine Freigabe, die vor dem Aufruf erfolgen muss. Gemeinsam ist ihnen, dass nicht das Modell entscheidet.",
        "Du kannst herausfinden, was von beidem du hast. Verlang eine Datei außerhalb des freigegebenen Verzeichnisses und eine Änderung, die du nicht freigegeben hast. Beides sollte scheitern, weil etwas es abgewiesen hat — nicht, weil das Modell sich dagegen entschieden hat.",
      ],
    },
    {
      heading: "Mit wessen Rechten es handelt",
      level: "assessment",
      paragraphs: [
        "Least Privilege, Need-to-know und Funktionstrennung wurden nicht außer Kraft gesetzt, weil die Oberfläche jetzt ein Gespräch ist. Ein Agent ist Software, die mit einem Zugangsmittel handelt, das ihm jemand gegeben hat, und er sollte weniger Rechte haben als du, nicht dieselben. Das Versagensmuster ist konkret: Man gibt breiten Zugriff, weil das Einschränken mühsam ist und das Tool mit mehr Rechten besser läuft — ein Handel, der stillschweigend geschlossen und nie überprüft wird, und genau so entstehen in jedem System dauerhaft zu weite Berechtigungen.",
        "Wo das System es zulässt, heißt Einschränken: eine eigene Identität statt deiner — ein eigenes Konto oder Token, der kleinste Zuschnitt, der für die Aufgabe noch reicht, und eine begrenzte Laufzeit, sofern es eine gibt. Halte das Geheimnis selbst aus dem Kontext des Modells heraus und aus allem, was es schreibt.",
      ],
      links: [{ label: "Scope, erklärt", href: "/de/glossary/scope" }],
    },
    {
      heading: "Was eine Freigabe zeigen muss",
      level: "assessment",
      paragraphs: [
        "Ein bloßes „weiter?“ reicht nicht. Um etwas freizugeben, musst du es sehen können: welcher Vorgang, in welchem System, und die Werte, die darüber entscheiden, was er tatsächlich tut. Eine Zusammenfassung in den Worten des Assistenten allein reicht ebenfalls nicht — sie stammt von der Seite, die um die Erlaubnis bittet.",
        "Freigeben und Prüfen sind zwei Aufgaben zu zwei Zeitpunkten: Vorher steht Nein noch zur Verfügung, hinterher findest du nur noch heraus, was passiert ist. Eine Probe zeigt, ob eine Freigabe echt ist — ändere nach dem Vorschlag einen Wert, auf den es ankommt, und sieh nach, ob die frühere Freigabe den Aufruf noch deckt. Sie sollte es nicht.",
      ],
    },
    {
      heading: "Prompt Injection: wenn Inhalte selbst Anweisungen enthalten",
      level: "assessment",
      paragraphs: [
        "Ein Agent, der ein Dokument, eine Webseite oder ein Ticket liest, liest Text, den möglicherweise jemand anderes geschrieben hat. Handelt er danach, hat dieser Jemand einen Kanal zu ihm. Das ist Prompt Injection, und daran ist nichts Exotisches — es ist die gewöhnliche Folge eines Systems, das Anweisung und Daten nicht vollständig trennen kann.",
        "Die Folge skaliert mit der Reichweite, nicht mit der Raffinesse. Ein Sprachassistent in einer Arztpraxis, der nur Termine anbieten kann, hat einen kleinen Wirkungsbereich. Derselbe Assistent an einem Patientensystem ist etwas völlig anderes — und der Unterschied liegt ausschließlich darin, worauf er zugreifen durfte.",
        "Was hilft, ist kein besserer Prompt: Ein Modell zu bitten, gefundene Anweisungen zu ignorieren, ist ein weiterer Satz in demselben Strom, in dem diese Anweisungen ankommen. Was hilft, ist eine Trennung — Inhalt, den niemand auf deiner Seite geschrieben hat, sollte für sich genommen nichts Folgenreiches freigeben können, und wo ein Weg lesen und handeln muss, braucht die folgenreiche Hälfte eine Freigabe oder eine Grenze außerhalb des Modells. Harmlos prüfen lässt sich das so: Schreib in ein Dokument, das das System liest, eine schlichte Anweisung, die dir auffallen würde und die du nicht willst, und sieh nach, ob der nächste folgenreiche Aufruf weiterhin bei dir landet.",
      ],
      links: [{ label: "Prompt Injection, erklärt", href: "/de/glossary/prompt-injection" }],
    },
    {
      heading: "Skills und Connectors vergrößern die Angriffsfläche",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Einen Skill oder Connector zu installieren ist eine Lieferkettenentscheidung — behandelt wird sie wie das Installieren einer Browser-Erweiterung. OWASP pflegt für genau diese Schicht eine Top-Ten-Liste, und ihre Kategorien lesen sich wie eine Aufzählung dessen, was Leute für unmöglich halten: überprivilegierte Skills, kompromittierte Lieferkette, schwache Isolation, nicht vertrauenswürdige externe Anweisungen und die Wiederverwendung desselben Skills über Plattformen hinweg.",
        "Entscheidend ist die Verstärkung. Jeder zusätzliche Skill erweitert, was ein Agent erreichen kann, und alle teilen sich dieselbe Sitzung. Ein kompromittierter Skill gefährdet nicht nur seine eigene Funktion — er sitzt in einem Kontext, in dem deine Schlüssel, deine Dateien und deine übrigen Tools liegen können.",
      ],
      links: [
        { label: "Connectors, erklärt", href: "/de/glossary/connectors" },
        { label: "OWASP Agentic Skills Top 10", href: OWASP_SKILLS },
        { label: "OWASP GenAI Security Project", href: OWASP_LLM },
      ],
    },
    {
      heading: "Ein Schlüssel im Chat ist ein offengelegter Schlüssel",
      level: "advice",
      paragraphs: [
        "Betrachte ihn ab dem Absenden als offengelegt und tausch ihn aus. Nicht weil bekannt wäre, dass etwas schiefging, sondern weil du nicht mehr kontrollierst, wo die Kopie liegt, wie lange sie bleibt und ob sie in einem Fehlerprotokoll landet.",
        "Dasselbe gilt für Konfiguration, die du zum Debuggen hineinkopierst. Verbindungszeichenfolgen und Tokens stecken mitten in Dateien, die im Ganzen geteilt werden, weil das Kürzen eine Minute dauern würde.",
        "Rate nicht, ob du eines hineinkopiert hast — Chatverlauf, Shell-History und ein Secret-Scanner über das Repository beantworten das in wenigen Minuten. Tausch aus, was dabei auftaucht: Passwörter, API-Schlüssel, Zugriffstoken, Sitzungs-Cookies, private Schlüssel, Wiederherstellungscodes, Verbindungszeichenfolgen.",
      ],
    },
    {
      heading: "Den Zugriff zurücknehmen",
      level: "advice",
      paragraphs: [
        "Ein Stoppschalter ohne getesteten Entzug und Rückweg bleibt ein Versprechen. Finde den Rückweg, bevor du ihn brauchst, und geh ihn einmal, solange nichts schiefgelaufen ist.",
      ],
      list: [
        "Das Recht im Zielsystem entfernen — die Ebene, die entscheidet, was die Identität dort darf.",
        "Die Anbindung abschalten und die entfernen, die du nicht mehr nutzt. Jede davon ist dauerhafter Zugriff, den du erteilt und aus dem Blick verloren hast.",
        "Das verwendete Zugangsmittel entziehen und danach nachsehen, ob der nächste Aufruf scheitert. Bis du das gesehen hast, weißt du, dass es den Schalter gibt, nicht, dass er wirkt.",
        "Die Automatisierung selbst ausschalten, wenn etwas nach Zeitplan oder auf ein Ereignis hin startet, statt nur wegzunehmen, worauf sie zugreift.",
      ],
    },
    {
      heading: "Was ein Entzug nicht leistet",
      level: "assessment",
      paragraphs: [
        "Einen Zugriff zu entziehen, stoppt das, was danach gekommen wäre. Daraus folgt nicht, dass jede Kopie mit verschwindet: Ein Index, ein Zwischenspeicher oder ein Export, der während des Zugriffs entstanden ist, kann das Material danach weiterhin enthalten. Ob es so etwas gibt, ist eine Eigenschaft des Produkts — und eine faire Frage, bevor du etwas anbindest.",
        "Rückgängig zu machen, was schon passiert ist, ist eine eigene Frage, und die Antwort liegt nicht bei dir: Sie gehört dem System, in dem gehandelt wurde, und der Handlung selbst — Versionsverlauf, ein Rückgängig, eine Rücksicherung, sofern es sie gibt. Zu rekonstruieren, was passiert ist, ist noch einmal eine eigene Aufgabe, und sie hängt davon ab, was damals notiert wurde.",
      ],
      links: [{ label: "Die Entscheidung festhalten", href: "/de/secure-setup/keeping-a-record" }],
    },
  ],
};

export const getBeforeYouGrantAccess = (locale: SiteLocale): Article =>
  locale === "de" ? de : en;
