/**
 * Entry point: you decide for other people.
 *
 * Anchored on AI Act Art. 4, which obliges providers *and* deployers to
 * ensure AI literacy among their staff and anyone operating AI on their
 * behalf. It has been in force since 2 February 2025, and most organisations
 * do not know it exists.
 *
 * Checked 2026-08-03.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-03";

const AI_ACT_ART_4 = "https://artificialintelligenceact.eu/article/4/";

const en: Article = {
  title: "I decide for others — where do I start?",
  description:
    "You already have an obligation under the AI Act that most organisations have not noticed. What to decide first, why banning tools produces shadow IT, and what cannot be delegated.",
  lead: "The question is usually framed as whether to allow AI. That decision was made for you some time ago, by people in your organisation who needed to get something done.",
  sections: [
    {
      heading: "You already have a duty, and it is older than you think",
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
      heading: "Shadow IT is a procurement result, not a discipline problem",
      level: "assessment",
      paragraphs: [
        "People do not use their private accounts for work because they are careless. They do it because the tool helps, and because either nothing was provided or what was provided is worse than what they can buy themselves for twenty euros.",
        "That reframes the response. A prohibition without a provided alternative does not remove the usage; it removes your visibility of it, which is strictly worse — the same material still leaves, and now nobody tells you.",
        "The usable version is the opposite order: provide something good, say clearly what it may be used for, and only then restrict the rest. People follow a rule that leaves them a way to do their job.",
      ],
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
      heading: "Then the tool, and the tier is the point",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "A business or team plan is not mainly about seats and billing. It changes the default: business tiers of the major vendors do not train on your input, while consumer plans generally do unless someone opts out. It is also where the processing agreement lives that Art. 28 GDPR requires when a provider processes personal data for you.",
        "Buying it is the cheapest control available to you, and it removes the reason people were using something else.",
      ],
      links: [
        { label: "Does the tool train on what you type?", href: "/data-flows/training-and-retention" },
        { label: "What may go into an AI tool?", href: "/law/what-may-go-in" },
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
      links: [{ label: "Getting it back out", href: "/data-flows/getting-it-back-out" }],
    },
    {
      heading: "Ask yourself, or ask the person you are about to hire",
      level: "advice",
      paragraphs: [
        "If you cannot answer these, that is your brief — either for the next quarter or for whoever you bring in.",
      ],
      list: [
        "Do I know which AI tools are actually in use here, including the ones nobody expensed?",
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
  title: "Ich entscheide für andere — wo fange ich an?",
  description:
    "Sie haben bereits eine Pflicht aus dem AI Act, die den meisten Organisationen entgangen ist. Was zuerst zu entscheiden ist, warum Verbote Schatten-IT erzeugen, und was sich nicht delegieren lässt.",
  lead: "Die Frage wird meist so gestellt, ob man KI erlauben soll. Diese Entscheidung ist längst gefallen — getroffen von Leuten in Ihrer Organisation, die etwas erledigen mussten.",
  sections: [
    {
      heading: "Sie haben bereits eine Pflicht, und sie ist älter als gedacht",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Artikel 4 des AI Act verpflichtet Anbieter und Betreiber von KI-Systemen, nach besten Kräften für ein ausreichendes Maß an KI-Kompetenz ihres Personals und anderer Personen zu sorgen, die in ihrem Auftrag mit diesen Systemen umgehen. Betreiber heißt: verwenden. Man muss nichts bauen, um erfasst zu sein.",
        "Er gilt seit 2. Februar 2025. Das ist keine künftige Pflicht zum Einplanen, sondern eine, gegen die die meisten Organisationen seit über einem Jahr still verstoßen — meist ohne zu wissen, dass es den Artikel gibt.",
        "Der Maßstab ist „nach besten Kräften“, beurteilt an technischen Kenntnissen, Erfahrung, Ausbildung und Schulung, am Einsatzkontext und an den betroffenen Personen. Das ist ein Angemessenheitsmaßstab, keine Zertifizierungspflicht — also erreichbar, und zugleich heißt es, dass nichts zu tun sichtbar nicht genügt.",
      ],
      links: [{ label: "AI Act, Artikel 4 — KI-Kompetenz", href: AI_ACT_ART_4 }],
    },
    {
      heading: "Schatten-IT ist ein Beschaffungsergebnis, kein Disziplinproblem",
      level: "assessment",
      paragraphs: [
        "Leute verwenden ihr privates Konto für Arbeit nicht aus Nachlässigkeit. Sie tun es, weil das Werkzeug hilft — und weil entweder nichts bereitgestellt wurde oder das Bereitgestellte schlechter ist als das, was sie sich für zwanzig Euro selbst kaufen.",
        "Das dreht die Antwort um. Ein Verbot ohne bereitgestellte Alternative beendet die Nutzung nicht; es beendet Ihre Sicht darauf, und das ist eindeutig schlechter — dasselbe Material geht weiterhin hinaus, nur sagt es Ihnen jetzt niemand mehr.",
        "Die brauchbare Fassung ist die umgekehrte Reihenfolge: etwas Gutes bereitstellen, klar sagen, wofür es verwendet werden darf, und erst dann den Rest einschränken. Eine Regel, die einem noch einen Weg lässt, die Arbeit zu erledigen, wird befolgt.",
      ],
    },
    {
      heading: "Entscheiden Sie die Daten vor dem Werkzeug",
      level: "advice",
      paragraphs: [
        "Die Werkzeugfrage wirkt dringend und ist die zweite. Ohne ein Bild davon, was Sie überhaupt haben, ist jede Antwort darauf geraten.",
      ],
      list: [
        "Was darf unter keinen Umständen hinaus — und steht das irgendwo, wo ein Mensch es findet?",
        "Was darf zu einem Anbieter unter Vertrag, und auf welchen Vertrag stützen wir uns dabei?",
        "Was ist unstrittig, damit nicht jede Nutzung als Entscheidung behandelt wird?",
        "Wer beantwortet die Frage, wenn ein Fall in keine der drei Kategorien passt?",
      ],
    },
    {
      heading: "Dann das Werkzeug — und die Tarifstufe ist der Punkt",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Ein Geschäfts- oder Teamtarif geht nicht in erster Linie um Plätze und Abrechnung. Er ändert die Voreinstellung: Geschäftstarife der großen Anbieter trainieren nicht mit Ihren Eingaben, Verbrauchertarife in der Regel schon, solange niemand widerspricht. Dort liegt auch der Auftragsverarbeitungsvertrag, den Art. 28 DSGVO verlangt, wenn ein Anbieter personenbezogene Daten für Sie verarbeitet.",
        "Ihn zu kaufen ist die billigste Maßnahme, die Ihnen zur Verfügung steht — und sie nimmt den Grund weg, aus dem Leute etwas anderes verwendet haben.",
      ],
      links: [
        {
          label: "Trainiert das Werkzeug mit dem, was du eingibst?",
          href: "/de/data-flows/training-and-retention",
        },
        { label: "Was darf in ein KI-Werkzeug hinein?", href: "/de/law/what-may-go-in" },
      ],
    },
    {
      heading: "Schulung ist die Pflicht — und das, was die Regel wirken lässt",
      level: "advice",
      paragraphs: [
        "Art. 4 verlangt sie. Unabhängig davon gilt: Eine Richtlinie, die niemand versteht, ist keine Maßnahme — Menschen können keiner Regel folgen, deren Begründung ihnen verschlossen bleibt, und sie improvisieren daran vorbei.",
        "Halten Sie es klein genug, dass es tatsächlich stattfindet. Was freigegeben ist und warum, was keinesfalls hinein darf, was der Unterschied beim Konto bedeutet, wen man bei unklaren Fällen fragt, und was nach einem Fehler zu tun ist. Eine Stunde, wiederholt bei Änderungen, schlägt ein Jahresmodul, das niemand zu Ende klickt.",
        "Machen Sie das Melden eines Fehlers überlebbar. Wer Ihnen sagt, dass er etwas eingefügt hat, gibt Ihnen die Möglichkeit zu handeln. Kostet ihn das etwas, schweigt der Nächste.",
      ],
    },
    {
      heading: "Was sich nicht delegieren lässt",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Verlangt ein Kunde oder eine Mitarbeiterin Löschung, landet dieses Verlangen bei Ihnen als Verantwortlichem, nicht beim Anbieter. Es zu beantworten setzt voraus, dass Sie wissen, welches Werkzeug was enthielt — eine Aufzeichnung, die Sie entweder führen oder nicht haben.",
        "Ebenso beim Auftragsverarbeitungsvertrag: sich auf die gute Praxis eines Anbieters zu verlassen ist nicht dasselbe wie den Vertrag zu haben, den Art. 28 verlangt. Der gehört Ihnen.",
      ],
      links: [{ label: "Wieder herausbekommen", href: "/de/data-flows/getting-it-back-out" }],
    },
    {
      heading: "Fragen Sie sich das — oder die Person, die Sie holen wollen",
      level: "advice",
      paragraphs: [
        "Was Sie hier nicht beantworten können, ist Ihr Auftrag — für das nächste Quartal oder für den, den Sie dazuholen.",
      ],
      list: [
        "Weiß ich, welche KI-Werkzeuge hier tatsächlich im Einsatz sind, auch die ohne Beleg?",
        "Haben wir etwas bereitgestellt, das gut genug ist, dass ein privates Konto nicht mehr reizt?",
        "Gibt es eine schriftliche Antwort darauf, was keinesfalls hinein darf?",
        "Haben wir für jedes Werkzeug mit Personenbezug einen Auftragsverarbeitungsvertrag?",
        "Könnten wir ein Löschverlangen beantworten, ohne zu raten?",
        "Hat in dieser Organisation im letzten Jahr jemand eine KI-Schulung gehabt — und können wir das belegen?",
      ],
    },
  ],
};

export const getDecisionMakerStart = (locale: SiteLocale): Article =>
  locale === "de" ? de : en;
