/**
 * Four legal questions that get merged into one, and why merging them is
 * expensive in both directions.
 *
 * Being secure is not being lawful; being lawful under data protection law is
 * not being permitted under a contract; and none of them answers whether an AI
 * use case is regulated as such.
 *
 * The AI literacy section belongs here rather than in a security page because
 * the failure it describes — treating a model's output as authority — is a
 * failure to know which of these four questions you are in.
 *
 * Legal claims checked against the primary texts on 2026-08-09.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-09";

const AI_ACT = "https://eur-lex.europa.eu/eli/reg/2024/1689/oj";
const GDPR_ART_32 = "https://eur-lex.europa.eu/eli/reg/2016/679/art_32/oj/eng";
const TRADE_SECRETS = "https://eur-lex.europa.eu/eli/dir/2016/943/oj";

const en: Article = {
  title: "Four questions that are not the same question",
  subtitle: "Secure, lawful, permitted and regulated are four separate tests, and passing one says nothing about the others.",
  description:
    "Data protection, AI regulation, confidentiality and security get merged into a single \"are we allowed to\". They have different answers, different sources and different consequences.",
  lead: "Moving customer material to an AI provider can be technically sound and still not permitted. It can be permitted under a contract and still fail data protection law. And clearing data protection law says nothing about whether the system is secure. These are four tests, and each is passed or failed on its own.",
  sections: [
    {
      heading: "The four, and what triggers each",
      level: "assessment",
      paragraphs: [
        "They overlap constantly, which is why they get merged. Overlapping is not the same as being one thing.",
      ],
      list: [
        "Is there personal data in it? — data protection law applies, and asks for a legal basis, a role allocation and appropriate measures",
        "Is this an AI use case as such? — AI regulation and sector rules apply, independently of whether any personal data is involved",
        "Is the material confidential? — contract, non-disclosure obligations and trade secret law apply, and none of them care whether it is personal",
        "Is the information professionally regulated? — secrecy duties in health, law, finance and public administration apply on top of everything above",
      ],
    },
    {
      heading: "Secure and lawful come apart in both directions",
      level: "assessment",
      paragraphs: [
        "A system can be well built, encrypted and access-controlled while the processing it performs has no legal basis. Nothing about the engineering fixes that.",
        "And a lawful arrangement can be badly secured. Data protection law asks for security appropriate to the risk, which is a floor and not a design. Meeting a legal requirement is not the same as being difficult to attack.",
        "The practical failure is a project that answers whichever question its owner is comfortable with and treats the others as covered.",
      ],
      links: [{ label: "Art. 32 GDPR — security of processing", href: GDPR_ART_32 }],
    },
    {
      heading: "Confidentiality is not a data protection question",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Under the EU Trade Secrets Directive, information qualifies as a trade secret only if three conditions hold together: it is secret, it has commercial value because it is secret, and it has been subject to reasonable steps under the circumstances to keep it secret.",
        "The third condition is the one that AI use touches directly. Careless handling risks more than a leak — it can cost the information its status, and with it the protection you would otherwise rely on.",
        "This runs entirely beside data protection. A client's architecture document with no names in it is fully confidential and contains no personal data at all.",
      ],
      links: [
        { label: "Directive (EU) 2016/943 — trade secrets", href: TRADE_SECRETS },
        { label: "The longer version: can I enter this data into an AI tool?", href: "/law/what-may-go-in" },
      ],
    },
    {
      heading: "AI regulation asks its own question",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "The EU AI Act applies to AI systems as such, on a staged timetable. It is not a data protection instrument and does not replace one: where personal data is processed, both apply, and clearing either says nothing about the other.",
        "One duty is worth knowing because it lands on ordinary organisations rather than on model developers. Art. 4 requires that providers and deployers of AI systems take measures to ensure, to their best extent, a sufficient level of AI literacy among their staff and others operating the systems on their behalf, taking into account their knowledge, the context of use, and the people the systems are used on. It sits in Chapter I, which has applied since 2 February 2025.",
      ],
      links: [
        { label: "Regulation (EU) 2024/1689 — the AI Act", href: AI_ACT },
        { label: "AI Act: labelling AI-generated content", href: "/law/ai-act-transparency" },
      ],
    },
    {
      heading: "Not knowing which question you are in is itself a risk",
      level: "assessment",
      paragraphs: [
        "\"If the assistant says it, it must be our policy\" is not a knowledge gap. It is a control failure, and it is the most common one.",
        "Three distinctions do most of the work, and none of them is technical:",
      ],
      list: [
        "What the model knows is not what your organisation knows — one is general, the other is yours, and only the second binds anyone",
        "A web result is not an authoritative source — it is something that was findable, which is a different property from being right",
        "A draft is not published knowledge — approval is what makes a statement something others may act on, and a fluent answer has not been approved by anyone",
      ],
    },
    {
      heading: "The questions worth asking out loud",
      level: "advice",
      paragraphs: [
        "Whether or not any of this is formally required of you, these are the ones that prevent the expensive mistakes. They are also short enough to actually be asked.",
      ],
      list: [
        "Which data may go into which tool, and who decided that",
        "Which tools are approved here, and which are merely in use",
        "Is this answer sourced, and which source did it use",
        "May I publish this, and does it need review first",
        "May the assistant carry out this action, or only propose it",
        "Is this output decision support, or is someone treating it as the decision",
      ],
    },
    {
      heading: "It runs the other way too",
      level: "assessment",
      paragraphs: [
        "The same tools are genuinely useful on the defensive side — reading logs, triaging incidents, working through a policy, correlating assets, drafting documentation. Refusing them wholesale is its own cost.",
        "With the same caveat that applies everywhere on this page: assistance is not a correct decision. Whatever comes out still belongs to whoever acts on it.",
      ],
    },
    {
      heading: "Limits of this page",
      level: "assessment",
      paragraphs: [
        "A map of which question you are in, not an answer to any of them, and not legal advice. Each of the four has its own body of rules, and sector duties can be stricter than the general text.",
        "What it is meant to prevent is the specific failure of answering one question well and reporting it as though all four were settled.",
      ],
    },
  ],
};

const de: Article = {
  title: "Vier Fragen, die nicht dieselbe Frage sind",
  subtitle: "Sicher, rechtmäßig, erlaubt und reguliert sind vier getrennte Prüfungen — eine zu bestehen sagt nichts über die anderen.",
  description:
    "Datenschutz, KI-Regulierung, Vertraulichkeit und Sicherheit verschmelzen zu einem einzigen „dürfen wir das“. Die Antworten, die Quellen und die Folgen sind jeweils andere.",
  lead: "Kundenmaterial zu einem KI-Anbieter zu geben kann technisch sauber und trotzdem nicht erlaubt sein. Es kann vertraglich erlaubt sein und am Datenschutzrecht scheitern. Und den Datenschutz zu klären sagt nichts darüber, ob das System sicher ist. Das sind vier Prüfungen, und jede wird für sich bestanden oder nicht.",
  sections: [
    {
      heading: "Die vier, und was jede auslöst",
      level: "assessment",
      paragraphs: [
        "Sie überschneiden sich ständig — deshalb werden sie vermengt. Überschneidung ist aber nicht Identität.",
      ],
      list: [
        "Sind personenbezogene Daten enthalten? — Datenschutzrecht gilt und verlangt Rechtsgrundlage, Rollenverteilung und geeignete Maßnahmen",
        "Ist das ein KI-Anwendungsfall als solcher? — KI-Regulierung und Branchenregeln gelten, unabhängig davon, ob personenbezogene Daten im Spiel sind",
        "Ist das Material vertraulich? — Vertrag, Verschwiegenheitspflichten und Geschäftsgeheimnisrecht gelten, und keinem davon ist wichtig, ob es personenbezogen ist",
        "Ist die Information berufsrechtlich geschützt? — Verschwiegenheitspflichten in Gesundheit, Anwaltschaft, Finanzwesen und Verwaltung kommen obendrauf",
      ],
    },
    {
      heading: "Sicher und rechtmäßig fallen in beide Richtungen auseinander",
      level: "assessment",
      paragraphs: [
        "Ein System kann gut gebaut, verschlüsselt und zugriffsgeschützt sein, während die Verarbeitung, die es ausführt, keine Rechtsgrundlage hat. Daran ändert die Technik nichts.",
        "Und eine rechtmäßige Anordnung kann schlecht abgesichert sein. Das Datenschutzrecht verlangt ein dem Risiko angemessenes Schutzniveau — das ist eine Untergrenze, kein Entwurf. Eine Rechtspflicht zu erfüllen heißt nicht, schwer angreifbar zu sein.",
        "Das praktische Versagen ist ein Vorhaben, das die Frage beantwortet, mit der seine Leitung sich wohlfühlt, und die übrigen für erledigt hält.",
      ],
      links: [{ label: "Art. 32 DSGVO — Sicherheit der Verarbeitung", href: GDPR_ART_32 }],
    },
    {
      heading: "Vertraulichkeit ist keine Datenschutzfrage",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Nach der EU-Geschäftsgeheimnis-Richtlinie ist eine Information nur dann ein Geschäftsgeheimnis, wenn drei Bedingungen zusammen erfüllt sind: Sie ist geheim, sie hat gerade deshalb wirtschaftlichen Wert, und sie war den Umständen nach angemessenen Geheimhaltungsmaßnahmen unterworfen.",
        "Die dritte Bedingung berührt die KI-Nutzung unmittelbar. Sorgloser Umgang riskiert mehr als ein Leck — er kann der Information ihren Status kosten und damit den Schutz, auf den man sich sonst berufen würde.",
        "Das läuft vollständig neben dem Datenschutz. Ein Architekturdokument eines Kunden ohne jeden Namen ist voll vertraulich und enthält überhaupt keine personenbezogenen Daten.",
      ],
      links: [
        { label: "Richtlinie (EU) 2016/943 — Geschäftsgeheimnisse", href: TRADE_SECRETS },
        { label: "Die längere Fassung: Darf ich diese Daten in ein KI-Tool geben?", href: "/de/law/what-may-go-in" },
      ],
    },
    {
      heading: "Die KI-Regulierung stellt ihre eigene Frage",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Die KI-Verordnung gilt für KI-Systeme als solche, mit gestaffeltem Zeitplan. Sie ist kein Datenschutzinstrument und ersetzt keines: Werden personenbezogene Daten verarbeitet, gilt beides — und eines zu klären sagt nichts über das andere.",
        "Eine Pflicht ist besonders wissenswert, weil sie gewöhnliche Organisationen trifft und nicht Modellentwickler. Art. 4 verlangt, dass Anbieter und Betreiber von KI-Systemen Maßnahmen ergreifen, um nach besten Kräften ein ausreichendes Maß an KI-Kompetenz ihres Personals und anderer Personen sicherzustellen, die die Systeme in ihrem Auftrag bedienen — unter Berücksichtigung von Kenntnissen, Einsatzkontext und den Personen, bei denen die Systeme eingesetzt werden. Er steht in Kapitel I, das seit dem 2. Februar 2025 gilt.",
      ],
      links: [
        { label: "Verordnung (EU) 2024/1689 — die KI-Verordnung", href: AI_ACT },
        { label: "KI-Verordnung: Kennzeichnung KI-erzeugter Inhalte", href: "/de/law/ai-act-transparency" },
      ],
    },
    {
      heading: "Nicht zu wissen, in welcher Frage man steckt, ist selbst ein Risiko",
      level: "assessment",
      paragraphs: [
        "„Wenn die Assistenz das sagt, steht es sicher in unserer Richtlinie“ ist keine Wissenslücke. Das ist ein Kontrollversagen, und zwar das häufigste.",
        "Drei Unterscheidungen leisten den größten Teil der Arbeit, und keine davon ist technisch:",
      ],
      list: [
        "Was das Modell weiß, ist nicht, was deine Organisation weiß — das eine ist allgemein, das andere ist eures, und nur das zweite bindet irgendjemanden",
        "Ein Websuchtreffer ist keine maßgebliche Quelle — er war auffindbar, und das ist eine andere Eigenschaft als richtig zu sein",
        "Ein Entwurf ist kein veröffentlichtes Wissen — erst die Freigabe macht eine Aussage zu etwas, worauf andere handeln dürfen, und eine flüssige Antwort hat niemand freigegeben",
      ],
    },
    {
      heading: "Die Fragen, die man laut stellt",
      level: "advice",
      paragraphs: [
        "Ob dir das formal auferlegt ist oder nicht — diese Fragen verhindern die teuren Fehler. Und sie sind kurz genug, um tatsächlich gestellt zu werden.",
      ],
      list: [
        "Welche Daten dürfen in welches Tool, und wer hat das entschieden",
        "Welche Tools sind hier freigegeben, und welche werden bloß benutzt",
        "Ist diese Antwort belegt, und welche Quelle wurde genutzt",
        "Darf ich das veröffentlichen, und braucht es vorher eine Prüfung",
        "Darf die Assistenz diese Aktion ausführen oder nur vorschlagen",
        "Ist diese Ausgabe Entscheidungshilfe — oder behandelt sie jemand als die Entscheidung",
      ],
    },
    {
      heading: "Es geht auch andersherum",
      level: "assessment",
      paragraphs: [
        "Dieselben Tools sind auf der Abwehrseite wirklich nützlich — Protokolle lesen, Vorfälle einordnen, eine Richtlinie durcharbeiten, Systeme in Beziehung setzen, Dokumentation entwerfen. Sie pauschal abzulehnen hat ebenfalls seinen Preis.",
        "Mit demselben Vorbehalt, der überall auf dieser Seite gilt: Unterstützung ist keine richtige Entscheidung. Was herauskommt, gehört weiterhin dem, der danach handelt.",
      ],
    },
    {
      heading: "Grenzen dieser Seite",
      level: "assessment",
      paragraphs: [
        "Eine Landkarte, in welcher Frage man steckt — keine Antwort auf eine davon, und keine Rechtsberatung. Jede der vier hat ihr eigenes Regelwerk, und Branchenpflichten können strenger sein als der allgemeine Text.",
        "Verhindern soll sie das eine bestimmte Versagen: eine Frage gut zu beantworten und das so zu berichten, als wären alle vier geklärt.",
      ],
    },
  ],
};

export const getFourSeparateQuestions = (locale: SiteLocale): Article => (locale === "de" ? de : en);
