/**
 * Deletion and data sovereignty.
 *
 * Sending data into an AI tool takes a second. Getting it out again, and being
 * able to show that it is gone, is a different problem — and it is the one
 * people discover only when a client withdraws consent.
 *
 * Legal claims checked against the primary texts and the EDPB/EDPS joint
 * response on 2026-08-03.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-03";

const GDPR_ART_17 = "https://gdpr-info.eu/art-17-gdpr/";
const EDPB_CLOUD_ACT =
  "https://www.edpb.europa.eu/our-work-tools/our-documents/letters/edpb-edps-joint-response-libe-committee-impact-us-cloud-act_en";

const en: Article = {
  title: "Deleting chats and data: what goes and what stays",
  description:
    "What deleting a chat actually removes, which deletion duties exist, why EU hosting is not EU jurisdiction, and where local models fit.",
  lead: "Deleting a conversation removes what you can see. What remains in backups, logs or a model that was already trained is a different question — and one you should be able to answer before someone asks you to delete something.",
  sections: [
    {
      heading: "Deletion requests arrive from two different directions",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "A client asking you to remove their material is a contractual matter. It rests on what you agreed with them, and it applies whether or not a single personal detail is involved — an architecture document with no names in it can still be theirs to withdraw.",
        "Art. 17 GDPR is a different thing. It is the right of a data subject to have their own personal data erased, it applies only where one of the listed grounds is met, and Art. 17(3) carves out cases where it does not apply at all. The person exercising it need not be your client: it may be someone merely named in the client's material, which is the case people fail to anticipate.",
        "Confusing the two produces bad answers in both directions — promising erasure where a retention duty applies, or refusing a contractual request because it does not meet a GDPR ground it never had to meet.",
        "What both have in common is the practical demand. You have to know which conversations held the material, whether the tool still retains them, and whether anything went into a training run. Where it did, deleting the conversation does not remove it from a model that has already been trained — vendors say as much: turning the setting off stops future runs, it does not undo the past.",
      ],
      links: [{ label: "Art. 17 GDPR — right to erasure", href: GDPR_ART_17 }],
    },
    {
      heading: "It is stored somewhere, and not only where you think",
      level: "assessment",
      paragraphs: [
        "Chat history is the obvious copy: leave the conversation in place and the content stays with the vendor for as long as their retention window runs. Deleting the conversation is the step people forget, and it is free.",
        "The less obvious copies are the ones you never see. When something goes wrong in any system, content tends to end up in error logs and traces — and log pipelines usually have their own retention, their own access rules and their own backups. Nothing about this is specific to AI. It is worth saying anyway, because people picture a conversation as one object in one place.",
      ],
    },
    {
      heading: "Processed in the EU is not the same as beyond US reach",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "A service can run on servers in Frankfurt and still belong to a US company. The distinction matters more than the marketing suggests: the EDPB and the EDPS have stated jointly that the US CLOUD Act allows US authorities to require disclosure of data by US-based providers regardless of where that data is stored.",
        "So “EU data centre” answers a real question and a narrower one than it is sold as. Where processing happens shapes the transfer route, which sub-processors are involved and what a provider can commit to contractually — none of that is nothing. What it does not settle, by itself, is who can compel access. Which entity holds the contract, and under which jurisdiction it sits, is the part worth checking.",
      ],
      links: [{ label: "EDPB and EDPS — joint response on the US CLOUD Act", href: EDPB_CLOUD_ACT }],
    },
    {
      heading: "Sovereignty comes in tiers, not as a switch",
      level: "assessment",
      paragraphs: [
        "It helps to stop asking whether something is sovereign and start asking how much control a given arrangement actually gives you. Roughly, in ascending order: a consumer account, a business tier with a processing agreement, a provider whose contracting entity is in the EU, a model you run on hardware you rent, and a model on hardware you own and can unplug.",
        "Each step upward costs money, speed or capability, and buys back control. There is no tier that is right for everything, which is why the question is which material justifies which step rather than which tier is best.",
      ],
    },
    {
      heading: "What a local model is well suited to",
      level: "assessment",
      paragraphs: [
        "At open-ended work, the large hosted models are ahead today, and pretending otherwise helps nobody. Whether that gap closes is a forecast, and this page does not make one. But the comparison assumes you need what a chat interface trained you to expect: an answer within seconds.",
        "Plenty of work does not need that. A classification step in an automation chain, a nightly batch, an extraction job over documents — if it takes three minutes or thirty, or runs overnight, the quality gap narrows against a decisive advantage: the material can stay inside your own infrastructure. That is the case where local stops being a compromise and starts being the better fit.",
        "Can, not does. Running the model locally is not the same as running the workload locally, and the difference is where people get caught: an embedding call to a hosted API, a cloud vector store, telemetry, a plugin, a monitoring agent, a model pulled from a registry at startup. Locally executed only means locally processed if the whole path is local — which is a thing you check, not a thing you assume.",
        "Local is not automatically safer, though. You take on patching, access control, backups and monitoring yourself, and a badly run box under a desk is worse than a well-run hosted service. What you gain is sovereignty over the data; what you take on is the security work that someone else was doing for you.",
      ],
    },
    {
      heading: "What to do before it becomes urgent",
      level: "advice",
      paragraphs: [
        "Delete conversations that contained client material once you are done with them. It is the cheapest control on this page and it takes seconds.",
        "Keep a note of which tool you used for which client engagement. Without it, an erasure request turns into guesswork, and guesswork is not something you can put in writing.",
        "For anything you might have to delete on request, work where deletion is contractually owed to you — a business tier with a processing agreement, not a consumer account.",
        "Ask who the contracting entity is, not only where the servers are. The answer changes who can compel access.",
        "Before you promise a client that something can be deleted, check that you could actually demonstrate it. If you could not, say so before the material goes in rather than afterwards.",
      ],
    },
  ],
};

const de: Article = {
  title: "Chats und Daten löschen: Was entfernt wird und was bleibt",
  description:
    "Was beim Löschen eines Chats tatsächlich entfernt wird, welche Löschpflichten bestehen, warum EU-Hosting nicht EU-Zuständigkeit bedeutet und wo lokale Modelle passen.",
  lead: "Wer eine Unterhaltung löscht, entfernt zunächst das, was sichtbar ist. Was in Sicherungen, Protokollen oder einem bereits trainierten Modell verbleibt, ist eine andere Frage — und du solltest sie beantworten können, bevor jemand eine Löschung von dir verlangt.",
  sections: [
    {
      heading: "Löschverlangen kommen aus zwei verschiedenen Richtungen",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Verlangt ein Kunde, sein Material zu entfernen, ist das eine vertragliche Angelegenheit. Sie richtet sich nach dem, was ihr vereinbart habt, und gilt unabhängig davon, ob überhaupt eine personenbezogene Angabe im Spiel ist — ein Architekturdokument ohne einen einzigen Namen bleibt seines.",
        "Art. 17 DSGVO ist etwas anderes. Es ist das Recht einer betroffenen Person auf Löschung ihrer eigenen personenbezogenen Daten, es greift nur bei einem der dort genannten Gründe, und Art. 17 Abs. 3 nimmt Fälle ausdrücklich aus. Wer es ausübt, muss nicht dein Kunde sein: Es kann jemand sein, der im Material des Kunden bloß genannt wird — der Fall, den kaum jemand einplant.",
        "Beides zu vermischen führt in beide Richtungen zu falschen Antworten: Löschung zusagen, wo eine Aufbewahrungspflicht besteht — oder ein vertragliches Verlangen ablehnen, weil es einen DSGVO-Grund nicht erfüllt, den es nie erfüllen musste.",
        "Gemeinsam ist beiden die praktische Anforderung. Du musst wissen, welche Unterhaltungen das Material enthielten, ob das Tool sie noch aufbewahrt, und ob etwas in einen Trainingslauf gegangen ist. Wenn ja, entfernt das Löschen der Unterhaltung es nicht aus einem bereits trainierten Modell — die Anbieter sagen das selbst: Die Einstellung auszuschalten verhindert künftige Läufe, nicht die vergangenen.",
      ],
      links: [{ label: "Art. 17 DSGVO — Recht auf Löschung", href: GDPR_ART_17 }],
    },
    {
      heading: "Es liegt irgendwo — und nicht nur dort, wo du denkst",
      level: "assessment",
      paragraphs: [
        "Der Chatverlauf ist die offensichtliche Kopie: Lässt du die Unterhaltung stehen, bleibt der Inhalt beim Anbieter, solange dessen Aufbewahrungsfrist läuft. Die Unterhaltung zu löschen ist der Schritt, den man vergisst, und er kostet nichts.",
        "Die weniger offensichtlichen Kopien sind die, die du nie zu sehen bekommst. Wenn in irgendeinem System etwas schiefgeht, landen Inhalte gern in Fehlerprotokollen und Ablaufverfolgungen — und Log-Systeme haben eigene Aufbewahrungsfristen, eigene Zugriffsregeln und eigene Sicherungen. Nichts daran ist KI-spezifisch. Es gehört trotzdem gesagt, weil man sich eine Unterhaltung als ein Objekt an einem Ort vorstellt.",
      ],
    },
    {
      heading: "In der EU verarbeitet heißt nicht außerhalb US-amerikanischer Reichweite",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Ein Dienst kann auf Servern in Frankfurt laufen und trotzdem einem US-Unternehmen gehören. Der Unterschied wiegt schwerer, als das Marketing nahelegt: EDPB und EDPS haben gemeinsam festgehalten, dass der US CLOUD Act US-Behörden erlaubt, von in den USA ansässigen Anbietern die Herausgabe von Daten zu verlangen — unabhängig davon, wo diese Daten gespeichert sind.",
        "„Rechenzentrum in der EU“ beantwortet damit eine echte Frage — nur eine engere, als der Begriff verspricht. Der Verarbeitungsort prägt den Übermittlungsweg, die beteiligten Unterauftragsverarbeiter und das, was ein Anbieter vertraglich zusagen kann; nichts davon ist belanglos. Was er für sich genommen nicht klärt, ist, wer Zugriff erzwingen kann. Welche Gesellschaft der Vertragspartner ist und welchem Recht sie untersteht, ist der Teil, den man prüfen sollte.",
      ],
      links: [
        { label: "EDPB und EDPS — gemeinsame Stellungnahme zum US CLOUD Act", href: EDPB_CLOUD_ACT },
      ],
    },
    {
      heading: "Souveränität gibt es in Stufen, nicht als Schalter",
      level: "assessment",
      paragraphs: [
        "Es hilft, nicht mehr zu fragen, ob etwas souverän ist, sondern wie viel Kontrolle eine bestimmte Konstellation dir tatsächlich gibt. Grob aufsteigend: ein Verbraucherkonto, ein Geschäftstarif mit Auftragsverarbeitungsvertrag, ein Anbieter, dessen Vertragspartner in der EU sitzt, ein Modell auf gemieteter Hardware, und ein Modell auf Hardware, die dir gehört und die du ausstecken kannst.",
        "Jede Stufe nach oben kostet Geld, Geschwindigkeit oder Leistungsfähigkeit und gibt dafür Kontrolle zurück. Keine Stufe ist für alles richtig — deshalb lautet die Frage, welches Material welche Stufe rechtfertigt, und nicht, welche Stufe die beste ist.",
      ],
    },
    {
      heading: "Wofür sich ein lokales Modell eignet",
      level: "assessment",
      paragraphs: [
        "Bei offenen Aufgaben sind die großen gehosteten Modelle heute voraus, und etwas anderes zu behaupten hilft niemandem. Ob sich dieser Abstand schließt, ist eine Prognose — diese Seite stellt keine. Nur unterstellt der Vergleich, dass du brauchst, woran dich die Chat-Oberfläche gewöhnt hat: eine Antwort in Sekunden.",
        "Viel Arbeit braucht das nicht. Ein Klassifizierungsschritt in einer Automatisierungskette, ein nächtlicher Stapellauf, eine Extraktion über Dokumente — ob das drei Minuten oder dreißig dauert oder über Nacht läuft, ist gleichgültig. Dann schrumpft der Qualitätsabstand gegen einen entscheidenden Vorteil: Das Material kann in der eigenen Infrastruktur bleiben. Genau dort hört lokal auf, ein Kompromiss zu sein, und wird zur besseren Wahl.",
        "Kann, nicht tut. Das Modell lokal auszuführen ist nicht dasselbe, wie die Arbeitslast lokal zu betreiben — und genau daran scheitern die meisten: ein Embedding-Aufruf an eine gehostete API, ein Vektorspeicher in der Cloud, Telemetrie, ein Plugin, ein Überwachungsdienst, ein Modell, das beim Start aus einer Registry geladen wird. Lokal ausgeführt heißt nur dann lokal verarbeitet, wenn der ganze Datenweg lokal bleibt — und das prüft man, statt es anzunehmen.",
        "Lokal ist deshalb aber nicht automatisch sicherer. Patches, Zugriffskontrolle, Sicherungen und Überwachung übernimmst du selbst, und eine schlecht betriebene Kiste unter dem Schreibtisch ist schlechter als ein gut betriebener gehosteter Dienst. Du gewinnst Souveränität über die Daten; du übernimmst die Sicherheitsarbeit, die vorher jemand anderes gemacht hat.",
      ],
    },
    {
      heading: "Was zu tun ist, bevor es dringend wird",
      level: "advice",
      paragraphs: [
        "Lösch Unterhaltungen, die Kundenmaterial enthielten, sobald du damit fertig bist. Das ist die billigste Maßnahme auf dieser Seite und dauert Sekunden.",
        "Notier, welches Tool du für welches Kundenprojekt verwendet hast. Ohne das wird ein Löschverlangen zur Raterei, und Raterei kann man nicht schriftlich bestätigen.",
        "Für alles, was du auf Verlangen löschen können musst: dort arbeiten, wo dir Löschung vertraglich geschuldet ist — Geschäftstarif mit Auftragsverarbeitungsvertrag, nicht Verbraucherkonto.",
        "Frag, wer der Vertragspartner ist, nicht nur, wo die Server stehen. Die Antwort entscheidet, wer Zugriff erzwingen kann.",
        "Bevor du einem Kunden zusagst, dass etwas gelöscht werden kann: prüf, ob du es auch belegen könntest. Wenn nicht, sag es, bevor das Material hineingeht, und nicht danach.",
      ],
    },
  ],
};

export const getGettingItBackOut = (locale: SiteLocale): Article => (locale === "de" ? de : en);
