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
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-03";

const OPENAI_IMPROVE =
  "https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance";
const OPENAI_ENTERPRISE = "https://openai.com/enterprise-privacy/";
const OPENAI_API_DATA = "https://developers.openai.com/api/docs/guides/your-data";
const CLAUDE_TRAINING =
  "https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training";
const CLAUDE_SETTINGS =
  "https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings";
const CLAUDE_CODE_DATA = "https://code.claude.com/docs/en/data-usage";

const en: Article = {
  title: "Does the tool train on what you type?",
  description:
    "Whether your input trains a model is decided by your plan tier, not the vendor. What is true today, which setting to check, and what it changes.",
  lead: "Most people ask the question about the vendor. The vendor is rarely the answer. Both of the vendors below draw the same line, and they draw it between plan tiers.",
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
        "Business use — ChatGPT Team, Enterprise, Edu and the API — is not trained on by default. That is the stated default, not something you have to configure.",
        "API inputs and outputs may be retained up to 30 days for abuse monitoring, then removed unless the law requires otherwise. Zero data retention is available for eligible endpoints with a qualifying use case, on request.",
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
        "Commercial products — API, Team, Enterprise — state it plainly: inputs and outputs are not used to train models by default. The exception is feedback you actively give, such as a thumbs up or down. That feedback is de-linked from user and customer IDs and kept up to five years, and an organisation owner can switch the feedback feature off entirely.",
      ],
      links: [
        { label: "Anthropic — is my data used for model training", href: CLAUDE_TRAINING },
        { label: "Anthropic — changing your model improvement settings", href: CLAUDE_SETTINGS },
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
        "At Anthropic the two are coupled: allow training on a consumer plan and retention extends to five years. Decline, and the existing 30-day retention continues. People weigh the training question and miss that they are also answering a retention question.",
      ],
      links: [{ label: "Anthropic — is my data used for model training", href: CLAUDE_TRAINING }],
    },
    {
      heading: "What to actually do",
      level: "advice",
      paragraphs: [
        "Open the settings of every AI tool you use and find the training switch. It takes two minutes per tool and it is the single highest-value thing on this page.",
        "Check which account your coding tool runs under, not which tool it is. If it is your personal account, consumer terms apply to your client's code.",
        "For anything belonging to a client, work on a business plan or the API — the default is on your side there, rather than something you had to remember to turn off.",
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
  title: "Trainiert das Werkzeug mit dem, was du eingibst?",
  description:
    "Ob deine Eingabe ein Modell trainiert, entscheidet der Tarif, nicht der Anbieter. Was heute gilt und welche Einstellung du prüfen solltest.",
  lead: "Die meisten stellen die Frage dem Anbieter. Der Anbieter ist selten die Antwort. Beide unten geprüften Anbieter ziehen dieselbe Grenze — und zwar zwischen den Tarifstufen.",
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
        "Geschäftliche Nutzung — ChatGPT Team, Enterprise, Edu und die API — wird standardmäßig nicht zum Training verwendet. Das ist die angegebene Voreinstellung, nichts, was du erst einrichten musst.",
        "API-Ein- und Ausgaben können bis zu 30 Tage zur Missbrauchserkennung aufbewahrt und danach entfernt werden, sofern das Gesetz nichts anderes verlangt. Für geeignete Endpunkte und passende Anwendungsfälle ist auf Anfrage eine Aufbewahrung von null Tagen möglich.",
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
        "Kommerzielle Produkte — API, Team, Enterprise — sagen es klar: Ein- und Ausgaben werden standardmäßig nicht zum Training verwendet. Ausnahme ist Feedback, das du aktiv gibst, etwa Daumen hoch oder runter. Dieses Feedback wird von Nutzer- und Kunden-IDs entkoppelt, bis zu fünf Jahre aufbewahrt, und die Funktion lässt sich als Organisation vollständig abschalten.",
      ],
      links: [
        { label: "Anthropic — werden meine Daten zum Training verwendet", href: CLAUDE_TRAINING },
        { label: "Anthropic — Einstellungen zur Modellverbesserung ändern", href: CLAUDE_SETTINGS },
      ],
    },
    {
      heading: "Die Falle: Entwicklerwerkzeug auf einem Verbraucherkonto",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Claude Code aus einem Free-, Pro- oder Max-Konto fällt unter die Verbraucher-Trainingseinstellung — Coding-Sitzungen eingeschlossen. Dass es ein Entwicklerwerkzeug ist, stellt es nicht auf kommerzielle Bedingungen; das Konto tut es.",
        "Das ist der erste Punkt, den du prüfen solltest, wenn du mit KI programmierst. Die Denkweise „ich benutze ein professionelles Werkzeug, also gelten professionelle Regeln“ ist genau verkehrt herum — und es ist die Annahme, mit der am ehesten Kundenquellcode dort landet, wo er nicht hinsollte.",
      ],
      links: [{ label: "Claude Code — Datennutzung", href: CLAUDE_CODE_DATA }],
    },
    {
      heading: "Training zu erlauben ändert auch die Aufbewahrungsdauer",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Bei Anthropic hängt beides zusammen: Wer im Verbrauchertarif Training erlaubt, dessen Daten werden fünf Jahre aufbewahrt. Wer ablehnt, bleibt bei den bestehenden 30 Tagen. Viele wägen die Trainingsfrage ab und übersehen, dass sie damit zugleich eine Aufbewahrungsfrage beantworten.",
      ],
      links: [{ label: "Anthropic — werden meine Daten zum Training verwendet", href: CLAUDE_TRAINING }],
    },
    {
      heading: "Was konkret zu tun ist",
      level: "advice",
      paragraphs: [
        "Öffne bei jedem KI-Werkzeug, das du nutzt, die Einstellungen und such den Trainingsschalter. Das dauert zwei Minuten pro Werkzeug und ist der wirksamste Punkt auf dieser Seite.",
        "Prüfe, unter welchem Konto dein Coding-Werkzeug läuft, nicht welches Werkzeug es ist. Ist es dein privates Konto, gelten Verbraucherbedingungen für den Code deines Kunden.",
        "Für alles, was einem Kunden gehört: Geschäftstarif oder API. Dort steht die Voreinstellung auf deiner Seite, statt etwas zu sein, das du hättest ausschalten müssen.",
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
