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
  title: "Getting it back out",
  description:
    "Deleting is harder than sending. What the right to erasure obliges you to do, why EU processing is not the same as EU jurisdiction, and where a local model genuinely fits.",
  lead: "The hard question is not what you may send. It is what happens when someone asks you to take it back — and whether you can show that you did.",
  sections: [
    {
      heading: "Consent can be withdrawn. Can you act on it?",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "A client agrees that their material may go into a tool. Six months later they change their mind and ask for it to be deleted. Under Art. 17 GDPR that request is theirs to make, and answering it is your obligation, not the vendor's.",
        "This is the moment the arrangement is tested. You have to know which conversations contained the material, whether the tool retains them, whether anything was used for training, and what you can actually demonstrate afterwards. Most people have not thought about any of it before the question arrives.",
        "Where content has already gone into a training run, deletion of the conversation does not remove it from a model that has been trained. Vendors say as much: turning the setting off stops future runs from using your data, it does not undo training that has happened.",
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
        "So “EU data centre” answers a question about latency and about where processing happens. It does not by itself answer the question of who can compel access. Which entity holds the contract, and under which jurisdiction it sits, is the part worth checking.",
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
      heading: "Where a local model genuinely fits",
      level: "assessment",
      paragraphs: [
        "A local model will not match the large hosted ones, and pretending otherwise helps nobody. But the comparison assumes you need what a chat interface trained you to expect: an answer within seconds.",
        "Plenty of work does not need that. A classification step in an automation chain, a nightly batch, an extraction job over documents — if it takes three minutes or thirty, or runs overnight, the quality gap narrows against a decisive advantage: the material never leaves your control. That is the case where local stops being a compromise and starts being the better fit.",
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
  title: "Wieder herausbekommen",
  description:
    "Löschen ist schwerer als hineingeben. Was das Recht auf Löschung von dir verlangt, warum Verarbeitung in der EU nicht dasselbe ist wie EU-Zuständigkeit, und wo ein lokales Modell wirklich passt.",
  lead: "Die schwierige Frage ist nicht, was du hineingeben darfst. Sie lautet, was passiert, wenn jemand es zurückverlangt — und ob du zeigen kannst, dass du es getan hast.",
  sections: [
    {
      heading: "Eine Einwilligung ist widerrufbar. Kannst du darauf reagieren?",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Ein Kunde stimmt zu, dass sein Material in ein Werkzeug darf. Ein halbes Jahr später überlegt er es sich anders und verlangt Löschung. Nach Art. 17 DSGVO steht ihm dieses Verlangen zu — und es zu beantworten ist deine Pflicht, nicht die des Anbieters.",
        "In diesem Moment zeigt sich, ob die Sache trägt. Du musst wissen, welche Unterhaltungen das Material enthielten, ob das Werkzeug sie aufbewahrt, ob etwas ins Training gegangen ist, und was du hinterher tatsächlich belegen kannst. Die meisten haben über nichts davon nachgedacht, bevor die Frage kommt.",
        "Ist Inhalt bereits in einen Trainingslauf eingeflossen, entfernt das Löschen der Unterhaltung ihn nicht aus einem fertig trainierten Modell. Die Anbieter sagen das selbst: Die Einstellung auszuschalten verhindert die Nutzung in künftigen Läufen, es macht erfolgtes Training nicht rückgängig.",
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
        "„Rechenzentrum in der EU“ beantwortet damit eine Frage zur Latenz und zum Ort der Verarbeitung. Es beantwortet für sich genommen nicht die Frage, wer Zugriff erzwingen kann. Welche Gesellschaft der Vertragspartner ist und welchem Recht sie untersteht, ist der Teil, den man prüfen sollte.",
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
      heading: "Wo ein lokales Modell wirklich passt",
      level: "assessment",
      paragraphs: [
        "Ein lokales Modell wird die großen gehosteten nicht einholen, und etwas anderes zu behaupten hilft niemandem. Nur unterstellt der Vergleich, dass du brauchst, woran dich die Chat-Oberfläche gewöhnt hat: eine Antwort in Sekunden.",
        "Viel Arbeit braucht das nicht. Ein Klassifizierungsschritt in einer Automatisierungskette, ein nächtlicher Stapellauf, eine Extraktion über Dokumente — ob das drei Minuten oder dreißig dauert oder über Nacht läuft, ist gleichgültig. Dann schrumpft der Qualitätsabstand gegen einen entscheidenden Vorteil: Das Material verlässt deinen Bereich nie. Genau dort hört lokal auf, ein Kompromiss zu sein, und wird zur besseren Wahl.",
        "Lokal ist deshalb aber nicht automatisch sicherer. Patches, Zugriffskontrolle, Sicherungen und Überwachung übernimmst du selbst, und eine schlecht betriebene Kiste unter dem Schreibtisch ist schlechter als ein gut betriebener gehosteter Dienst. Du gewinnst Souveränität über die Daten; du übernimmst die Sicherheitsarbeit, die vorher jemand anderes gemacht hat.",
      ],
    },
    {
      heading: "Was zu tun ist, bevor es dringend wird",
      level: "advice",
      paragraphs: [
        "Lösch Unterhaltungen, die Kundenmaterial enthielten, sobald du damit fertig bist. Das ist die billigste Maßnahme auf dieser Seite und dauert Sekunden.",
        "Notier, welches Werkzeug du für welches Kundenprojekt verwendet hast. Ohne das wird ein Löschverlangen zur Raterei, und Raterei kann man nicht schriftlich bestätigen.",
        "Für alles, was du auf Verlangen löschen können musst: dort arbeiten, wo dir Löschung vertraglich geschuldet ist — Geschäftstarif mit Auftragsverarbeitungsvertrag, nicht Verbraucherkonto.",
        "Frag, wer der Vertragspartner ist, nicht nur, wo die Server stehen. Die Antwort entscheidet, wer Zugriff erzwingen kann.",
        "Bevor du einem Kunden zusagst, dass etwas gelöscht werden kann: prüf, ob du es auch belegen könntest. Wenn nicht, sag es, bevor das Material hineingeht, und nicht danach.",
      ],
    },
  ],
};

export const getGettingItBackOut = (locale: SiteLocale): Article => (locale === "de" ? de : en);
