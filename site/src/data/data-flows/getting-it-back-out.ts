/**
 * Deletion, and what can honestly be promised about it.
 *
 * Sending data into an AI tool takes a second. Getting it out again, and being
 * able to show that it is gone, is a different problem — and it is the one
 * people discover only when a client withdraws consent.
 *
 * Slice 4 removed the jurisdiction, sovereignty-ladder and local-model sections.
 * `/data-flows/data-sovereignty` already owned all three under its own names,
 * and duplicating them here made 48% of a deletion page about something else.
 * They were not moved: the canonical page already carries them, so what is left
 * here is a contextual link rather than a second copy.
 *
 * Legal claims checked against the primary texts on 2026-08-03.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-03";

const GDPR_ART_17 = "https://gdpr-info.eu/art-17-gdpr/";

export interface DataFlowsNextStep {
  label: string;
  description: string;
}

const nextStep: Record<SiteLocale, DataFlowsNextStep> = {
  en: {
    label: "Being able to say later what happened",
    description:
      "What to write down while the work is fresh, so an erasure request months later is not guesswork.",
  },
  de: {
    label: "Später noch sagen können, was passiert ist",
    description:
      "Was du festhältst, solange die Arbeit frisch ist — damit ein Löschverlangen Monate später keine Raterei wird.",
  },
};

export const getGettingItBackOutNextStep = (
  locale: SiteLocale,
): DataFlowsNextStep => nextStep[locale];

const en: Article = {
  title: "Deleting chats and data: what goes and what stays",
  description:
    "What deleting a chat removes, which deletion duties exist and where they come from, and what you can honestly promise before material goes in.",
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
        "Which copies exist at all, where they sit and who can be compelled to hand them over depends on the arrangement you are working under. That is a separate question with a page of its own, and it is worth settling before you promise anything.",
      ],
      links: [{ label: "Where your data is, and who can reach it", href: "/data-flows/data-sovereignty" }],
    },
    {
      heading: "What to do before it becomes urgent",
      level: "advice",
      paragraphs: [
        "Delete conversations that contained client material once you are done with them. It is the cheapest control on this page and it takes seconds.",
        "Keep a note of which tool you used for which client engagement. Without it, an erasure request turns into guesswork, and guesswork is not something you can put in writing.",
        "For anything you might have to delete on request, work where deletion is contractually owed to you — a business tier with a processing agreement, not a consumer account.",
        "Ask who the contracting entity is, not only where the servers are. It changes who can compel access, and therefore what you are able to promise.",
        "Before you promise a client that something can be deleted, check that you could actually demonstrate it. If you could not, say so before the material goes in rather than afterwards.",
      ],
      links: [{ label: "Where your data is, and who can reach it", href: "/data-flows/data-sovereignty" }],
    },
  ],
};

const de: Article = {
  title: "Chats und Daten löschen: Was entfernt wird und was bleibt",
  description:
    "Was beim Löschen eines Chats entfernt wird, welche Löschpflichten es gibt und woher sie kommen, und was du ehrlich zusagen kannst, bevor Material hineingeht.",
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
        "Welche Kopien es überhaupt gibt, wo sie liegen und wer zu ihrer Herausgabe gezwungen werden kann, hängt davon ab, unter welcher Konstellation du arbeitest. Das ist eine eigene Frage mit einer eigenen Seite — und sie gehört geklärt, bevor du etwas zusagst.",
      ],
      links: [{ label: "Wo deine Daten liegen und wer herankommt", href: "/de/data-flows/data-sovereignty" }],
    },
    {
      heading: "Was zu tun ist, bevor es dringend wird",
      level: "advice",
      paragraphs: [
        "Lösch Unterhaltungen, die Kundenmaterial enthielten, sobald du damit fertig bist. Das ist die billigste Maßnahme auf dieser Seite und dauert Sekunden.",
        "Notier, welches Tool du für welches Kundenprojekt verwendet hast. Ohne das wird ein Löschverlangen zur Raterei, und Raterei kann man nicht schriftlich bestätigen.",
        "Für alles, was du auf Verlangen löschen können musst: dort arbeiten, wo dir Löschung vertraglich geschuldet ist — Geschäftstarif mit Auftragsverarbeitungsvertrag, nicht Verbraucherkonto.",
        "Frag, wer der Vertragspartner ist, nicht nur, wo die Server stehen. Das entscheidet, wer Zugriff erzwingen kann — und damit, was du überhaupt zusagen kannst.",
        "Bevor du einem Kunden zusagst, dass etwas gelöscht werden kann: prüf, ob du es auch belegen könntest. Wenn nicht, sag es, bevor das Material hineingeht, und nicht danach.",
      ],
      links: [{ label: "Wo deine Daten liegen und wer herankommt", href: "/de/data-flows/data-sovereignty" }],
    },
  ],
};

export const getGettingItBackOut = (locale: SiteLocale): Article => (locale === "de" ? de : en);
