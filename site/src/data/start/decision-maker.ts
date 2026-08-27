/**
 * Entry point: you are responsible for other people's use of AI.
 *
 * Anchored on AI Act Art. 4, which obliges providers *and* deployers to
 * ensure AI literacy among their staff and anyone operating AI on their
 * behalf. It has been in force since 2 February 2025, and most organisations
 * do not know it exists.
 *
 * The heading asks "where do I start?", so the first section is now the first
 * action rather than the legal position. Opening with the duty answered a
 * different question — how bad is it — and left a reader with a compliance
 * backlog and no first move. Finding out what is already in use is what has to
 * happen before any of the rest can be decided, and it is also what makes the
 * Art. 4 duty concrete when it follows. None of the legal material changed.
 *
 * The English H1 said "I decide for others", which names an authority; the
 * German named the responsibility, which is the wider and truer audience. The
 * German was also the only locale attributing the training default to the
 * vendors who publish it, and the only one carrying the caveat that a business
 * plan is a precondition rather than a permission. Both are now in English
 * too — see `.ai/decisions.md`, 2026-08-04, on vendor documentation as a
 * source. Account tier and vendor defaults remain owned by
 * `/data-flows/training-and-retention`, which this page links to.
 *
 * Checked 2026-08-03.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-03";

const AI_ACT_ART_4 = "https://artificialintelligenceact.eu/article/4/";

export interface StartNextStep {
  label: string;
  description: string;
}

const nextStep: Record<SiteLocale, StartNextStep> = {
  en: {
    label: "How do you set limits that hold — and check what happened?",
    description:
      "What to settle first, how a boundary holds, what to check and what to keep — and how much of it a task needs.",
  },
  de: {
    label: "Wie setzt du Grenzen, die halten — und prüfst, was passiert ist?",
    description:
      "Was vorher zu klären ist, wie eine Grenze hält, was du prüfst und was du festhältst — und wie viel davon eine Aufgabe braucht.",
  },
};

export const getDecisionMakerNextStep = (locale: SiteLocale): StartNextStep =>
  nextStep[locale];

const en: Article = {
  title: "I am responsible for AI use by others — where do I start?",
  description:
    "Start by finding out what is already in use. Then the AI Act duty most organisations miss, what to decide first, and why banning tools produces shadow IT.",
  lead: "The question is usually framed as whether to allow AI. That decision was made for you some time ago, by people in your organisation who needed to get something done.",
  sections: [
    {
      heading: "Start by finding out what is already in use",
      level: "assessment",
      paragraphs: [
        "Nothing else can be decided sensibly without this. Find out which tools are actually being used, including the ones nobody expensed — and ask rather than audit. People will answer a question about what makes their work easier; they stop answering an investigation.",
        "They do not use their private accounts for work because they are careless. They do it because the tool helps, and because either nothing was provided or what was provided is worse than what they can buy themselves for twenty euros.",
        "That reframes the response. A prohibition without a provided alternative does not remove the usage; it removes your visibility of it, which is strictly worse — the same material still leaves, and now nobody tells you.",
        "The usable version is the opposite order: provide something good, say clearly what it may be used for, and only then restrict the rest. People follow a rule that leaves them a way to do their job.",
      ],
    },
    {
      heading: "The Article 4 duty already applies",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Article 4 of the AI Act obliges providers and deployers of AI systems to ensure, to their best extent, a sufficient level of AI literacy among their staff and other persons dealing with the operation and use of those systems on their behalf. Deploying means using — you do not have to build anything to be covered.",
        "It has applied since 2 February 2025. It is not a future obligation to plan for; it is one that most organisations have been quietly failing for over a year, usually without knowing the article exists.",
        "The standard is “to their best extent”, judged against technical knowledge, experience, education and training, the context of use, and the people affected. That is a reasonable-effort test, not a certification requirement — which makes it achievable, and also means doing nothing is visibly not it.",
      ],
      links: [{ label: "AI Act, Article 4 — AI literacy", href: AI_ACT_ART_4 }],
    },
    {
      heading: "Decide the data before the tool",
      level: "advice",
      paragraphs: [
        "The tool question feels urgent and is the second one. Without a view of what you hold, any answer to it is a guess.",
      ],
      list: [
        "What must never leave, under any circumstance — and is that written down anywhere a person can find it?",
        "What may leave to a provider under contract, and which contract are we relying on?",
        "What is uncontroversial, so people stop treating every use as a decision?",
        "Who answers the question when a case does not fit those three?",
      ],
    },
    {
      heading: "The account type decides the defaults",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "A business or team plan is not mainly about seats and billing. It changes the default: the major vendors state that their business plans do not train on your input, while consumer plans generally do unless someone opts out. It is also where the processing agreement lives that Art. 28 GDPR requires when a provider processes personal data for you.",
      ],
      links: [
        { label: "Are your chats used for model training?", href: "/data-flows/training-and-retention" },
        { label: "Can I enter this data into an AI tool?", href: "/law/what-may-go-in" },
      ],
    },
    {
      heading: "Why a business plan is usually the cheapest thing you can do",
      level: "assessment",
      paragraphs: [
        "Measured against what it costs, it changes more than most other measures: it flips the defaults, it makes a processing agreement available, and it removes the reason people were reaching for a private account in the first place.",
        "It is a precondition, not a permission. Whether particular data may go to an external service at all still depends on the purpose, the kind of data, the legal basis and your own internal rules.",
      ],
    },
    {
      heading: "Training is the obligation, and it is also what makes the rule work",
      level: "advice",
      paragraphs: [
        "Art. 4 requires it. Independently of that, a policy nobody understands is not a control — people cannot follow a rule whose reasoning is opaque to them, and they will improvise around it.",
        "Keep it small enough to actually happen. What is approved and why, what must never go in, what the account distinction means, whom to ask when a case is unclear, and what to do after a mistake. An hour, repeated when something changes, beats an annual module nobody finishes.",
        "Make reporting a mistake survivable. The person who tells you they pasted something is giving you the chance to act. If that costs them, the next one stays quiet.",
      ],
    },
    {
      heading: "What you cannot delegate",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "When a client or an employee asks for their data to be erased, that request lands on you as controller, not on the vendor. Answering it requires knowing which tool held what — which is a record you either keep or do not have.",
        "Same for the processing agreement: relying on a vendor's good practice is not the same as having the contract Art. 28 requires. That one is yours to hold.",
      ],
      links: [
        { label: "Keeping a record", href: "/secure-setup/keeping-a-record" },
        { label: "Deleting chats and data: what goes and what stays", href: "/data-flows/getting-it-back-out" },
      ],
    },
    {
      heading: "Ask yourself, or ask the person you are about to hire",
      level: "advice",
      paragraphs: [
        "If you cannot answer these, that is your brief — either for the next quarter or for whoever you bring in.",
      ],
      list: [
        "Have we provided something good enough that a private account is no longer tempting?",
        "Is there a written answer to what must never go in?",
        "Do we hold a processing agreement for every tool that touches personal data?",
        "Could we answer an erasure request without guessing?",
        "Has anyone in this organisation had AI training in the last year — and can we show it?",
      ],
    },
  ],
};

const de: Article = {
  title: "Ich bin für den KI-Einsatz verantwortlich — wo fange ich an?",
  description:
    "Fang damit an herauszufinden, was schon verwendet wird. Dann die Schulungspflicht aus dem AI Act, was du zuerst entscheiden solltest und warum ein Verbot die Nutzung nicht beendet.",
  lead: "Meist wird gefragt, ob man KI erlauben soll. Diese Entscheidung ist längst gefallen — getroffen von Leuten in deiner Organisation, die ihre Arbeit erledigen mussten.",
  sections: [
    {
      heading: "Verschaff dir zuerst ein Bild davon, was schon im Einsatz ist",
      level: "assessment",
      paragraphs: [
        "Alles Weitere hängt daran. Finde heraus, welche Tools tatsächlich verwendet werden — auch die, für die niemand eine Rechnung eingereicht hat. Frag danach, statt es zu kontrollieren: Auf die Frage, was einem die Arbeit erleichtert, antworten Leute. Auf eine Untersuchung antworten sie nicht mehr.",
        "Sie verwenden ihr Privatkonto nicht aus Nachlässigkeit für die Arbeit. Sie tun es, weil das Tool hilft — und weil entweder nichts bereitgestellt wurde oder das Bereitgestellte schlechter ist als das, was sie sich für zwanzig Euro selbst kaufen.",
        "Ein Verbot ohne bereitgestellte Alternative beendet die Nutzung deshalb nicht. Es beendet nur, dass du davon erfährst: Dieselben Inhalte gehen weiterhin an dieselben Dienste, nur erfährst du es nicht mehr.",
        "Die umgekehrte Reihenfolge funktioniert besser: erst ein brauchbares Produkt bereitstellen, dann klar festlegen, wofür es verwendet werden darf, und erst danach den Rest einschränken. Eine Regel, die einen gangbaren Weg offen lässt, wird eher befolgt als eine, die keinen lässt.",
      ],
    },
    {
      heading: "Die Schulungspflicht aus Artikel 4 gilt bereits",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Artikel 4 des AI Act verpflichtet Anbieter und Betreiber von KI-Systemen, nach besten Kräften für ein ausreichendes Maß an KI-Kompetenz ihres Personals und anderer Personen zu sorgen, die in ihrem Auftrag mit diesen Systemen umgehen. Betreiber heißt: verwenden. Man muss nichts bauen, um erfasst zu sein.",
        "Er gilt seit 2. Februar 2025. Das ist keine künftige Pflicht zum Einplanen, sondern eine, gegen die die meisten Organisationen seit über einem Jahr still verstoßen — meist ohne zu wissen, dass es den Artikel gibt.",
        "Der Maßstab ist „nach besten Kräften“, beurteilt an technischen Kenntnissen, Erfahrung, Ausbildung und Schulung, am Einsatzkontext und an den betroffenen Personen. Es geht also um Angemessenheit, nicht um eine Zertifizierung. Das ist erreichbar — bedeutet aber auch, dass gar nichts zu tun die Anforderung erkennbar nicht erfüllt.",
      ],
      links: [{ label: "AI Act, Artikel 4 — KI-Kompetenz", href: AI_ACT_ART_4 }],
    },
    {
      heading: "Erst die Daten klären, dann das Produkt auswählen",
      level: "advice",
      paragraphs: [
        "Die Produktfrage wirkt dringender, ist aber die zweite. Solange unklar ist, welche Daten in deiner Organisation überhaupt anfallen und wie schutzbedürftig sie sind, ist jede Antwort darauf geraten.",
      ],
      list: [
        "Was darf unter keinen Umständen hinaus — und steht das irgendwo, wo ein Mensch es findet?",
        "Was darf an einen Anbieter gehen, mit dem ein Vertrag besteht — und auf welchen Vertrag stützt sich das?",
        "Was ist unstrittig unbedenklich, damit nicht jede einzelne Nutzung zur Einzelfallentscheidung wird?",
        "Wer beantwortet die Frage, wenn ein Fall in keine der drei Kategorien passt?",
      ],
    },
    {
      heading: "Der Kontotyp entscheidet über die Voreinstellungen",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Bei einem Business-Tarif geht es nicht in erster Linie um Plätze und Abrechnung, sondern um die Voreinstellungen. Die Business-Tarife der großen Anbieter verwenden Eingaben laut deren Angaben standardmäßig nicht für das Modelltraining; bei Privatkundentarifen ist es umgekehrt, solange niemand widerspricht. Dort liegt auch der Auftragsverarbeitungsvertrag, den Art. 28 DSGVO verlangt, wenn ein Anbieter personenbezogene Daten für dich verarbeitet.",
      ],
      links: [
        {
          label: "Werden deine Eingaben für das Modelltraining verwendet?",
          href: "/de/data-flows/training-and-retention",
        },
        { label: "Welche Daten darf ich in ein KI-Tool eingeben?", href: "/de/law/what-may-go-in" },
      ],
    },
    {
      heading: "Warum ein Business-Tarif meist die günstigste Maßnahme ist",
      level: "assessment",
      paragraphs: [
        "Gemessen an dem, was er kostet, verändert er mehr als die meisten anderen Maßnahmen: Er stellt die Voreinstellungen um, macht einen Auftragsverarbeitungsvertrag verfügbar und nimmt den Grund weg, aus dem Beschäftigte auf ihr Privatkonto ausweichen.",
        "Er ist damit eine Voraussetzung, keine Erlaubnis. Ob bestimmte Daten überhaupt an einen externen Dienst gehen dürfen, hängt weiterhin von Zweck, Datenart, Rechtsgrundlage und internen Regeln ab.",
      ],
    },
    {
      heading: "Schulung ist Pflicht und macht die Regel erst wirksam",
      level: "advice",
      paragraphs: [
        "Artikel 4 verlangt sie ohnehin. Unabhängig davon gilt: Eine Richtlinie, die niemand versteht, wirkt nicht. Wer die Begründung einer Regel nicht kennt, kann sie im Zweifelsfall nicht anwenden und improvisiert daran vorbei.",
        "Halte sie klein genug, dass sie tatsächlich stattfindet: Was ist freigegeben und warum, was darf keinesfalls hinein, was ändert der Kontotyp, wen fragt man in unklaren Fällen, und was ist nach einem Fehler zu tun. Eine Stunde, bei Änderungen wiederholt, bringt mehr als ein Jahresmodul, das niemand zu Ende klickt.",
        "Sorge dafür, dass man Fehler melden kann, ohne Nachteile zu befürchten. Wer dir sagt, dass er etwas Falsches eingefügt hat, verschafft dir die Möglichkeit zu reagieren. Hat die Meldung Konsequenzen, schweigt die nächste Person.",
      ],
    },
    {
      heading: "Was sich nicht an den Anbieter delegieren lässt",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Ein Löschbegehren richtet sich an den Verantwortlichen, nicht an den Anbieter. Beantworten kannst du es nur, wenn du weißt, welche Daten in welchem Dienst verarbeitet wurden — das setzt eine Aufzeichnung voraus, die entweder geführt wird oder fehlt.",
        "Ebenso beim Auftragsverarbeitungsvertrag: Sich auf die gute Praxis eines Anbieters zu verlassen ersetzt nicht den Vertrag, den Art. 28 DSGVO verlangt. Ihn abzuschließen ist deine Aufgabe.",
      ],
      links: [
        { label: "Die Entscheidung festhalten", href: "/de/secure-setup/keeping-a-record" },
        { label: "Chats und Daten löschen: Was entfernt wird und was bleibt", href: "/de/data-flows/getting-it-back-out" },
      ],
    },
    {
      heading: "Diese Fragen solltest du beantworten können",
      level: "advice",
      paragraphs: [
        "Was hier offen bleibt, ist die Arbeitsliste für das nächste Quartal — oder das Briefing für die Person, die du dafür holst.",
      ],
      list: [
        "Haben wir etwas bereitgestellt, das gut genug ist, dass ein Privatkonto nicht mehr reizt?",
        "Gibt es eine schriftliche Antwort darauf, was keinesfalls hinein darf?",
        "Haben wir für jedes Tool, das personenbezogene Daten verarbeitet, einen Auftragsverarbeitungsvertrag?",
        "Könnten wir ein Löschverlangen beantworten, ohne zu raten?",
        "Hat in dieser Organisation im letzten Jahr jemand eine KI-Schulung gehabt — und können wir das belegen?",
      ],
    },
  ],
};

export const getDecisionMakerStart = (locale: SiteLocale): Article =>
  locale === "de" ? de : en;
