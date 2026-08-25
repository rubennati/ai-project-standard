/**
 * What allowing training means.
 *
 * The reframe this page is built on: the visible question is training, the
 * operative one is storage. Consent to training is, first and before
 * anything else, consent to keeping the material.
 *
 * Slice 4 cut it back to that job. The Anthropic training-and-retention
 * coupling left, because `training-and-retention` states the same claim from
 * the same source under a later check date, and two dated badges for one fact
 * is worse than one. The request-corridor section left too:
 * `/blog/before-you-press-enter` owns that corridor and
 * `getting-it-back-out` owns the copies that deletion has to reach.
 *
 * The route is kept for now and re-tested after slice 6, which may move the
 * Art. 4(12) material and change the answer — see `.ai/state.md`.
 *
 * Checked 2026-08-03.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-03";

const GDPR_ART_4 = "https://gdpr-info.eu/art-4-gdpr/";

export interface DataFlowsNextStep {
  label: string;
  description: string;
}

const nextStep: Record<SiteLocale, DataFlowsNextStep> = {
  en: {
    label: "Are your chats used for model training?",
    description:
      "The published defaults per provider and per plan, with the date they were checked.",
  },
  de: {
    label: "Werden deine Eingaben für das Modelltraining verwendet?",
    description:
      "Die veröffentlichten Voreinstellungen je Anbieter und Tarif — mit dem Datum, an dem sie geprüft wurden.",
  },
};

export const getWhatYouAgreeToNextStep = (
  locale: SiteLocale,
): DataFlowsNextStep => nextStep[locale];

const en: Article = {
  title: "What changes when you allow model training",
  description:
    "What you agree to when you allow model training: storage first, a batched process rather than a live one, and a word that often describes something else.",
  lead: "Allowing model training can also change how long your conversations are stored. It is worth knowing what the setting actually governs before you decide either way.",
  sections: [
    {
      heading: "Training requires storage first",
      level: "assessment",
      paragraphs: [
        "Nothing can be used for a training run that was not stored first. So the question “may I train on your data” carries a prior question that is rarely stated: may I keep it, copy it somewhere else, and put it through a pipeline.",
        "That is the operative permission. Training is the stated purpose; storage is the immediate consequence, and it takes effect at once rather than eventually.",
        "Whether a particular vendor couples the two — and what the retention becomes if it does — is a dated question, answered on the training and retention page rather than here.",
      ],
      links: [{ label: "Are your chats used for model training?", href: "/data-flows/training-and-retention" }],
    },
    {
      heading: "Not a data breach, but a loss of control over the copy",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "It is tempting to call pasting something into a chat a leak. It is not, and the distinction is worth keeping, because a personal data breach has a definition: under Art. 4(12) GDPR it is a breach of security leading to accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to personal data.",
        "A deliberate transfer to a provider under a contract is none of those things. What it is, is a point after which you no longer decide where copies sit, how long they stay, or who sees them if something goes wrong. That is a loss of control, and it is the accurate word for it.",
        "The distinction is not pedantry. Calling an ordinary transfer a breach makes it harder to be taken seriously about an actual one.",
      ],
      links: [{ label: "Art. 4(12) GDPR — definition of a personal data breach", href: GDPR_ART_4 }],
    },
    {
      heading: "Training is batched, not live",
      level: "assessment",
      paragraphs: [
        "A sentence you type does not become part of a model as you type it. Training runs are prepared and executed as discrete, expensive jobs, and material is selected, processed and filtered before any of it is eligible.",
        "This matters in both directions. It means your input is not instantly memorised and repeatable by strangers — a fear that circulates and is not how these systems work. It also means that once material has gone into a completed run, deleting the conversation afterwards does not remove it from the model that was trained.",
      ],
    },
    {
      heading: "“Trained on our data” usually is not training",
      level: "assessment",
      paragraphs: [
        "“Specialised for law” or “for medicine” describes the product, not how it was built. Behind that word can sit a fine-tuned model, retrieval over a curated document collection, rule-based checks on top of a general model, a system prompt — or several of those at once. All of them can make a perfectly good product, and the marketing rarely distinguishes them.",
        "It is worth asking which one you are buying, because the answers differ in the ways that matter to you: what it cost to build, where your material ends up, and what happens when the underlying model is replaced. The words to ask with are fine-tuning and retrieval — and asking is usually enough to find out.",
      ],
    },
    {
      heading: "What to take from it",
      level: "advice",
      paragraphs: [
        "Read the training setting as a retention setting, then look up what yours is set to before you decide either way.",
        "Do not describe an ordinary transfer as a breach. Describe it as the point where control ends, which is both accurate and harder to argue with.",
        "When a vendor says trained on our data, ask whether they mean fine-tuning or retrieval. The answer changes the assessment.",
      ],
      links: [{ label: "Deleting chats and data: what goes and what stays", href: "/data-flows/getting-it-back-out" }],
    },
  ],
};

const de: Article = {
  title: "Was sich ändert, wenn du Modelltraining erlaubst",
  description:
    "Was du erlaubst, wenn du Modelltraining zulässt: zuerst Speicherung, dann ein gebündelter statt eines laufenden Vorgangs — und ein Wort, das oft etwas anderes meint.",
  lead: "Modelltraining zu erlauben kann zugleich verändern, wie lange deine Unterhaltungen gespeichert bleiben. Bevor du dich in die eine oder andere Richtung entscheidest, lohnt es sich zu wissen, was die Einstellung tatsächlich regelt.",
  sections: [
    {
      heading: "Modelltraining setzt Speicherung voraus",
      level: "assessment",
      paragraphs: [
        "Nichts kann in einen Trainingslauf gehen, das nicht vorher gespeichert wurde. Die Frage „darf ich mit deinen Daten trainieren“ trägt also eine vorgelagerte Frage in sich, die selten ausgesprochen wird: darf ich sie behalten, anderswohin kopieren und durch eine Verarbeitungskette schicken.",
        "Das ist die eigentliche Erlaubnis. Training ist der Zweck; die Speicherung ist das, was mit deinem Material tatsächlich geschieht — und zwar sofort, nicht irgendwann.",
        "Ob ein bestimmter Anbieter beides koppelt und wie lange dann aufbewahrt wird, ist eine datierte Frage — beantwortet auf der Seite zu Training und Aufbewahrung, nicht hier.",
      ],
      links: [{ label: "Werden deine Eingaben für das Modelltraining verwendet?", href: "/de/data-flows/training-and-retention" }],
    },
    {
      heading: "Kein Datenleck, aber ein Verlust der Kontrolle über die Kopie",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Es liegt nahe, das Einfügen in einen Chat ein Leck zu nennen. Ist es nicht — und die Unterscheidung lohnt sich, denn eine Verletzung des Schutzes personenbezogener Daten ist definiert: nach Art. 4 Z 12 DSGVO eine Verletzung der Sicherheit, die zur unbeabsichtigten oder unrechtmäßigen Vernichtung, zum Verlust, zur Veränderung oder zur unbefugten Offenlegung von oder zum unbefugten Zugang zu personenbezogenen Daten führt.",
        "Eine bewusste, vertraglich gedeckte Übermittlung an einen Anbieter ist nichts davon. Was sie ist: der Punkt, ab dem du nicht mehr bestimmst, wo Kopien liegen, wie lange sie bleiben und wer sie im Fehlerfall sieht. Das ist ein Kontrollverlust, und das ist das zutreffende Wort dafür.",
        "Das ist keine Wortklauberei. Wer eine gewöhnliche Übermittlung ein Leck nennt, wird bei einem echten schwerer ernst genommen.",
      ],
      links: [
        { label: "Art. 4 Z 12 DSGVO — Definition der Verletzung des Schutzes personenbezogener Daten", href: GDPR_ART_4 },
      ],
    },
    {
      heading: "Training läuft gebündelt, nicht live",
      level: "assessment",
      paragraphs: [
        "Ein Satz, den du tippst, wird nicht beim Tippen Teil eines Modells. Trainingsläufe werden als abgegrenzte, teure Vorgänge vorbereitet und ausgeführt, und Material wird ausgewählt, aufbereitet und gefiltert, bevor irgendetwas davon überhaupt infrage kommt.",
        "Das wirkt in beide Richtungen. Deine Eingabe wird nicht sofort auswendig gelernt und von Fremden abrufbar — eine Befürchtung, die kursiert und so nicht funktioniert. Es heißt aber auch: Ist Material einmal in einem abgeschlossenen Lauf gewesen, entfernt das nachträgliche Löschen der Unterhaltung es nicht aus dem trainierten Modell.",
      ],
    },
    {
      heading: "„Mit unseren Daten trainiert“ ist meist kein Training",
      level: "assessment",
      paragraphs: [
        "„Spezialisiert auf Recht“ oder „auf Medizin“ beschreibt das Produkt, nicht seinen Aufbau. Dahinter kann ein feinabgestimmtes Modell stecken, ein Abruf über eine kuratierte Dokumentensammlung, regelbasierte Prüfungen über einem allgemeinen Modell, ein System-Prompt — oder mehreres davon zugleich. Alles davon kann ein gutes Produkt ergeben, und das Marketing unterscheidet es selten.",
        "Die Frage lohnt sich trotzdem, denn die Antworten unterscheiden sich genau in dem, was dich betrifft: was der Aufbau gekostet hat, wo dein Material landet, und was geschieht, wenn das zugrunde liegende Modell ausgetauscht wird. Die Wörter, mit denen man fragt, sind Fine-Tuning und Retrieval — und Fragen genügt meist, um es zu erfahren.",
      ],
    },
    {
      heading: "Was du daraus ableiten kannst",
      level: "advice",
      paragraphs: [
        "Lies die Trainingseinstellung als Aufbewahrungseinstellung — und schlag nach, wie sie bei deinem Anbieter aussieht, bevor du dich entscheidest.",
        "Nenn eine gewöhnliche Übermittlung kein Leck. Nenn sie den Punkt, an dem die Kontrolle endet — das ist zutreffend und schwerer zu bestreiten.",
        "Wenn ein Anbieter sagt, es sei mit ihren Daten trainiert: frag, ob Fine-Tuning oder Retrieval gemeint ist. Die Antwort ändert die Beurteilung.",
      ],
      links: [{ label: "Chats und Daten löschen: Was entfernt wird und was bleibt", href: "/de/data-flows/getting-it-back-out" }],
    },
  ],
};

export const getWhatYouAgreeTo = (locale: SiteLocale): Article => (locale === "de" ? de : en);
