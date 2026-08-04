/**
 * Training and retention, per plan tier.
 *
 * All vendor claims were checked against the vendors' own privacy and help
 * pages on 2026-08-03. This is the fastest-rotting content on the site: plan
 * names change, defaults change, and they change without announcement. The
 * check date is part of the claim, not decoration.
 *
 * Two vendors are covered properly rather than five vaguely. Where something
 * was not verified, the page says so instead of generalising.
 *
 * Everything here is the vendor describing its own terms. That makes it the
 * authoritative source for what the vendor has committed to and no evidence at
 * all about what its systems do, so the text says "the vendor states" rather
 * than asserting the behaviour outright.
 *
 * Two corrections from 2026-08-04, both from reading the sources again rather
 * than the summaries of them: the 30-day API figure covers abuse monitoring
 * logs and not application state, which is kept until deleted; and Anthropic's
 * retention has trust-and-safety carve-outs of two and seven years that the
 * training switch does not reach. ChatGPT Team was renamed Business in
 * August 2025.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-04";

const OPENAI_IMPROVE =
  "https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance";
const OPENAI_ENTERPRISE = "https://openai.com/enterprise-privacy/";
const OPENAI_API_DATA = "https://developers.openai.com/api/docs/guides/your-data";
const CLAUDE_TRAINING =
  "https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training";
const CLAUDE_SETTINGS =
  "https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings";
const CLAUDE_CODE_DATA = "https://code.claude.com/docs/en/data-usage";
const CLAUDE_RETENTION =
  "https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-personal-data";

const en: Article = {
  title: "Are your chats used for model training?",
  description:
    "Whether your input is used for model training depends on the product, the account type and the settings. The published defaults of the providers checked, with the date they were checked.",
  lead: "Whether your input is used for model training depends far more on the account and plan you are signed into than on which provider you chose. Both providers checked below draw the line in the same place.",
  sections: [
    {
      heading: "The rule worth remembering",
      level: "assessment",
      paragraphs: [
        "Consumer plans train on your conversations unless you say otherwise. Business plans and the API do not, by default. That pattern holds across both vendors checked here, which makes it a more useful rule of thumb than any vendor comparison.",
        "It also means the interesting question is not “is this vendor safe” but “which account am I logged into right now”. Those are very different questions, and only one of them has an answer you can act on.",
      ],
    },
    {
      heading: "OpenAI: what applies where",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Consumer plans — Free, Plus, Pro — may use your conversations to train models unless you opt out. The switch is Settings → Data Controls → “Improve the model for everyone”. Turning it off applies to new conversations.",
        "Business use — ChatGPT Business (called Team until August 2025), Enterprise, Edu and the API — is not trained on by default. That is OpenAI's stated default rather than something you configure, and like everything in this section it is the vendor describing its own terms, not an independent audit of its systems.",
        "The 30-day figure people quote is narrower than it sounds. It covers abuse monitoring logs, which OpenAI states are generated for all API usage and kept up to 30 days unless the law requires longer. It is not a deletion clock for everything the API touches.",
        "Application state is separate and is kept until you delete it: stored responses, uploaded files, vector stores and conversation objects. OpenAI states that objects not deleted via the API or dashboard are retained indefinitely, and that deleted ones go 30 days after you delete them. Zero data retention is available on request for eligible endpoints — and assistants, threads and vector stores are not among them, because storing is what they are for.",
      ],
      links: [
        { label: "OpenAI — how your data is used to improve model performance", href: OPENAI_IMPROVE },
        { label: "OpenAI — enterprise privacy", href: OPENAI_ENTERPRISE },
        { label: "OpenAI — data controls in the platform", href: OPENAI_API_DATA },
      ],
    },
    {
      heading: "Anthropic: what applies where",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Consumer plans — Free, Pro, Max — put the choice to you, and the choice has teeth. With the model training setting on, new chats and coding sessions are used for future training. Turning it off stops future runs from using them, but it cannot undo training that has already happened.",
        "Commercial products — API, Claude for Work, Enterprise — state it plainly: inputs and outputs are not used to train models by default. The exception is feedback you actively give, such as a thumbs up or down. That feedback is de-linked from user and customer IDs and kept up to five years, and an organisation owner can switch the feedback feature off entirely.",
        "Retention has carve-outs that the training switch does not reach. Anthropic states that where a chat or session is flagged by its automated trust and safety systems, inputs and outputs may be kept up to two years and the resulting classification scores up to seven — and that it may retain material longer where the law requires it or to resolve a dispute. Those apply regardless of the setting you chose.",
      ],
      links: [
        { label: "Anthropic — is my data used for model training", href: CLAUDE_TRAINING },
        { label: "Anthropic — changing your model improvement settings", href: CLAUDE_SETTINGS },
        { label: "Anthropic — how long personal data is stored", href: CLAUDE_RETENTION },
      ],
    },
    {
      heading: "The trap: a developer tool on a consumer account",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Claude Code used from a Free, Pro or Max account falls under the consumer training setting — coding sessions included. The tool being a developer tool does not put it on commercial terms; the account does.",
        "This is the one to check first if you write code with AI. The mental model “I am using a professional tool, so professional rules apply” is the wrong way round, and it is the assumption most likely to put a client's source code somewhere you did not intend.",
      ],
      links: [{ label: "Claude Code — data usage", href: CLAUDE_CODE_DATA }],
    },
    {
      heading: "Allowing training also changes how long it is kept",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "At Anthropic the two are coupled: allow training on a consumer plan and material may be kept in de-identified form in the training pipelines for up to five years. Decline, and deleted conversations leave your history at once and back-end storage within 30 days. People weigh the training question and miss that they are also answering a retention question.",
        "Neither number is a ceiling. The trust and safety and legal carve-outs above sit on top of both, so “I switched training off” answers how the material may be used, not how long every copy of it can exist.",
      ],
      links: [
        { label: "Anthropic — is my data used for model training", href: CLAUDE_TRAINING },
        { label: "Anthropic — how long personal data is stored", href: CLAUDE_RETENTION },
      ],
    },
    {
      heading: "What to actually do",
      level: "advice",
      paragraphs: [
        "Open the settings of every AI tool you use and find the training switch. It takes two minutes per tool and it is the single highest-value thing on this page.",
        "Check which account your coding tool runs under, not which tool it is. If it is your personal account, consumer terms apply to your client's code.",
        "For anything belonging to a client, a business plan or the API is the floor: the training default is on your side there, rather than something you had to remember to turn off. By itself it supplies neither the client's permission, nor a legal basis, nor a processing agreement — those are separate questions and they belong to the law section.",
        "Write down the date you checked. This page carries one for the same reason: defaults here change without an announcement, and a setting you verified last year tells you nothing about today.",
      ],
    },
    {
      heading: "What this page does not cover",
      level: "assessment",
      paragraphs: [
        "Two vendors, checked properly. Gemini, Microsoft Copilot and the European providers are not covered here yet, and the pattern above should not be assumed to hold for them without looking.",
        "This page is about training and retention only. Where the servers stand, which transfer mechanism applies and what you are permitted to send in the first place are separate questions, and the answer to this one does not settle any of them.",
      ],
    },
  ],
};

const de: Article = {
  title: "Werden deine Eingaben für das Modelltraining verwendet?",
  description:
    "Ob deine Eingaben für das Modelltraining verwendet werden, hängt von Produkt, Kontotyp und Einstellungen ab. Die veröffentlichten Voreinstellungen der geprüften Anbieter, mit Prüfdatum.",
  lead: "Ob deine Eingaben für das Modelltraining verwendet werden, hängt weit mehr vom Konto und Tarif ab als davon, für welchen Anbieter du dich entschieden hast. Beide unten geprüften Anbieter ziehen die Grenze an derselben Stelle.",
  sections: [
    {
      heading: "Die Regel, die man sich merken sollte",
      level: "assessment",
      paragraphs: [
        "Verbrauchertarife trainieren mit deinen Unterhaltungen, solange du nichts anderes sagst. Geschäftstarife und die API tun es standardmäßig nicht. Dieses Muster gilt bei beiden hier geprüften Anbietern — damit ist es eine brauchbarere Faustregel als jeder Anbietervergleich.",
        "Und es heißt: Die interessante Frage ist nicht „ist dieser Anbieter sicher“, sondern „in welchem Konto bin ich gerade angemeldet“. Das sind sehr verschiedene Fragen, und nur eine davon hat eine Antwort, mit der du etwas anfangen kannst.",
      ],
    },
    {
      heading: "OpenAI: was wo gilt",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Verbrauchertarife — Free, Plus, Pro — dürfen deine Unterhaltungen zum Training verwenden, solange du nicht widersprichst. Der Schalter liegt unter Einstellungen → Datenkontrollen → „Improve the model for everyone“. Ausschalten wirkt für neue Unterhaltungen.",
        "Geschäftliche Nutzung — ChatGPT Business (bis August 2025 Team), Enterprise, Edu und die API — wird standardmäßig nicht zum Training verwendet. Das ist die von OpenAI angegebene Voreinstellung, nichts, was du erst einrichten musst — und wie alles in diesem Abschnitt die Auskunft des Anbieters über sich selbst, keine unabhängige Prüfung seiner Systeme.",
        "Die viel zitierten 30 Tage sind enger, als sie klingen. Sie betreffen die Protokolle zur Missbrauchserkennung, die laut OpenAI für jede API-Nutzung anfallen und bis zu 30 Tage aufbewahrt werden, sofern das Gesetz nichts Längeres verlangt. Eine Löschfrist für alles, was durch die API läuft, ist das nicht.",
        "Der Anwendungszustand ist etwas anderes und bleibt, bis du ihn löschst: gespeicherte Antworten, hochgeladene Dateien, Vektorspeicher und Konversationsobjekte. OpenAI gibt an, dass Objekte, die nicht über API oder Dashboard gelöscht werden, unbegrenzt aufbewahrt werden — gelöschte hingegen 30 Tage nach der Löschung verschwinden. Eine Aufbewahrung von null Tagen ist auf Anfrage für geeignete Endpunkte möglich; Assistants, Threads und Vektorspeicher gehören nicht dazu, weil Speichern gerade ihr Zweck ist.",
      ],
      links: [
        { label: "OpenAI — wie deine Daten zur Modellverbesserung genutzt werden", href: OPENAI_IMPROVE },
        { label: "OpenAI — Enterprise Privacy", href: OPENAI_ENTERPRISE },
        { label: "OpenAI — Datenkontrollen in der Plattform", href: OPENAI_API_DATA },
      ],
    },
    {
      heading: "Anthropic: was wo gilt",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Verbrauchertarife — Free, Pro, Max — überlassen dir die Wahl, und die Wahl hat Gewicht. Ist die Trainingseinstellung aktiv, werden neue Chats und Coding-Sitzungen für künftiges Training verwendet. Ausschalten verhindert die Nutzung in künftigen Trainingsläufen, kann aber bereits erfolgtes Training nicht rückgängig machen.",
        "Kommerzielle Produkte — API, Claude for Work, Enterprise — sagen es klar: Ein- und Ausgaben werden standardmäßig nicht zum Training verwendet. Ausnahme ist Feedback, das du aktiv gibst, etwa Daumen hoch oder runter. Dieses Feedback wird von Nutzer- und Kunden-IDs entkoppelt, bis zu fünf Jahre aufbewahrt, und die Funktion lässt sich als Organisation vollständig abschalten.",
        "Bei der Aufbewahrung gibt es Ausnahmen, die der Trainingsschalter nicht erreicht. Anthropic gibt an: Wird ein Chat oder eine Sitzung von den automatischen Trust-and-Safety-Systemen markiert, können Ein- und Ausgaben bis zu zwei Jahre und die daraus entstandenen Klassifizierungswerte bis zu sieben Jahre aufbewahrt werden — und länger, wo das Gesetz es verlangt oder ein Rechtsstreit zu klären ist. Das gilt unabhängig von der gewählten Einstellung.",
      ],
      links: [
        { label: "Anthropic — werden meine Daten zum Training verwendet", href: CLAUDE_TRAINING },
        { label: "Anthropic — Einstellungen zur Modellverbesserung ändern", href: CLAUDE_SETTINGS },
        { label: "Anthropic — wie lange personenbezogene Daten gespeichert werden", href: CLAUDE_RETENTION },
      ],
    },
    {
      heading: "Die Falle: Entwicklerwerkzeug auf einem Verbraucherkonto",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Claude Code aus einem Free-, Pro- oder Max-Konto fällt unter die Verbraucher-Trainingseinstellung — Coding-Sitzungen eingeschlossen. Dass es ein Entwicklerwerkzeug ist, stellt es nicht auf kommerzielle Bedingungen; das Konto tut es.",
        "Das ist der erste Punkt, den du prüfen solltest, wenn du mit KI programmierst. Die Denkweise „ich benutze ein professionelles Tool, also gelten professionelle Regeln“ ist genau verkehrt herum — und es ist die Annahme, mit der am ehesten Kundenquellcode dort landet, wo er nicht hinsollte.",
      ],
      links: [{ label: "Claude Code — Datennutzung", href: CLAUDE_CODE_DATA }],
    },
    {
      heading: "Training zu erlauben ändert auch die Aufbewahrungsdauer",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Bei Anthropic hängt beides zusammen: Wer im Verbrauchertarif Training erlaubt, dessen Material kann in de-identifizierter Form bis zu fünf Jahre in den Trainings-Pipelines bleiben. Wer ablehnt, bei dem verschwinden gelöschte Unterhaltungen sofort aus dem Verlauf und binnen 30 Tagen aus den Backend-Speichern. Viele wägen die Trainingsfrage ab und übersehen, dass sie damit zugleich eine Aufbewahrungsfrage beantworten.",
        "Keine der beiden Zahlen ist eine Obergrenze. Die Trust-and-Safety- und die rechtlichen Ausnahmen oben liegen über beiden. „Ich habe Training abgeschaltet“ beantwortet also, wie das Material verwendet werden darf — nicht, wie lange jede Kopie davon existieren kann.",
      ],
      links: [
        { label: "Anthropic — werden meine Daten zum Training verwendet", href: CLAUDE_TRAINING },
        { label: "Anthropic — wie lange personenbezogene Daten gespeichert werden", href: CLAUDE_RETENTION },
      ],
    },
    {
      heading: "Was konkret zu tun ist",
      level: "advice",
      paragraphs: [
        "Öffne bei jedem KI-Tool, das du nutzt, die Einstellungen und such den Trainingsschalter. Das dauert zwei Minuten pro Tool und ist der wirksamste Punkt auf dieser Seite.",
        "Prüfe, unter welchem Konto dein Coding-Tool läuft, nicht welches Tool es ist. Ist es dein privates Konto, gelten Verbraucherbedingungen für den Code deines Kunden.",
        "Für alles, was einem Kunden gehört, sind Geschäftstarif oder API die Grundlage: Dort steht die Trainings-Voreinstellung auf deiner Seite, statt etwas zu sein, das du hättest ausschalten müssen. Sie liefern für sich genommen aber weder die Erlaubnis des Kunden noch eine Rechtsgrundlage oder einen Auftragsverarbeitungsvertrag \u2014 das sind eigene Fragen, und sie sind Gegenstand des Rechtsteils.",
        "Notier dir das Datum der Prüfung. Diese Seite trägt aus demselben Grund eines: Die Voreinstellungen ändern sich ohne Ankündigung, und eine Einstellung, die du letztes Jahr geprüft hast, sagt nichts über heute.",
      ],
    },
    {
      heading: "Was diese Seite nicht abdeckt",
      level: "assessment",
      paragraphs: [
        "Zwei Anbieter, dafür ordentlich geprüft. Gemini, Microsoft Copilot und die europäischen Anbieter sind hier noch nicht erfasst, und man sollte nicht annehmen, dass das obige Muster für sie gilt, ohne nachzusehen.",
        "Es geht hier ausschließlich um Training und Aufbewahrung. Wo die Server stehen, welche Übermittlungsgrundlage greift und was du überhaupt hineingeben darfst, sind eigene Fragen — die Antwort hier entscheidet keine davon.",
      ],
    },
  ],
};

export const getTrainingAndRetention = (locale: SiteLocale): Article =>
  locale === "de" ? de : en;
