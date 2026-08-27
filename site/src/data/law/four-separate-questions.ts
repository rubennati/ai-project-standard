/**
 * The orientation page for Law: "are we allowed to?" splits into separate
 * legal questions, and merging them is expensive in both directions.
 *
 * Being secure is not being lawful; being lawful under data protection law is
 * not being permitted under a contract; and none of them answers whether an AI
 * use case is regulated as such.
 *
 * This page maps the questions and hands each to its owner rather than
 * answering them itself. The substantive trade-secret explanation lives on
 * `what-may-go-in`; the substantive AI literacy duty (Art. 4) lives on
 * `/start/decision-maker`, which answers the reader it lands on. See
 * `.ai/decisions.md`, 2026-08-27.
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
  title: "Which legal question are you asking?",
  subtitle: "Secure, lawful, permitted and regulated test different things, and passing one says nothing about the others.",
  description:
    "Data protection, AI regulation, confidentiality and security get merged into a single \"are we allowed to\". They have different answers, different sources and different consequences.",
  lead: "Moving customer material to an AI provider can be technically sound and still not permitted. It can be permitted under a contract and still fail data protection law. And clearing data protection law says nothing about whether the system is secure. Each of these tests is passed or failed on its own.",
  sections: [
    {
      heading: "The questions, and what triggers each",
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
        "Whether material is confidential is governed by contract, non-disclosure obligations and trade secret law — and none of them asks whether a person can be identified. Clearing the data protection question says nothing here, and material with no personal data in it can still be fully protected.",
        "AI use touches trade secret protection directly: under the EU Trade Secrets Directive, information keeps that status only while it has been subject to reasonable steps to keep it secret, so careless handling can cost the protection itself. What that means in practice, next to the personal data question, is worked through on its own page.",
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
        "One duty is worth knowing because it lands on organisations that merely use AI: Art. 4 obliges providers and deployers of AI systems to ensure a sufficient level of AI literacy among their staff, and it has applied since 2 February 2025.",
      ],
      links: [
        { label: "Regulation (EU) 2024/1689 — the AI Act", href: AI_ACT },
        { label: "The AI literacy duty, and where to start with it", href: "/start/decision-maker" },
        { label: "AI Act: labelling AI-generated content", href: "/law/ai-act-transparency" },
      ],
    },
    {
      heading: "Limits of this page",
      level: "assessment",
      paragraphs: [
        "A map of which question you are in, not an answer to any of them, and not legal advice. Each of these questions has its own body of rules, and sector duties can be stricter than the general text.",
        "What it is meant to prevent is the specific failure of answering one question well and reporting it as though all four were settled.",
      ],
    },
  ],
};

const de: Article = {
  title: "Welche rechtliche Frage stellst du gerade?",
  subtitle: "Sicher, rechtmäßig, erlaubt, reguliert — das sind vier verschiedene Prüfungen, und eine zu bestehen sagt nichts über die anderen.",
  description:
    "Datenschutz, KI-Regulierung, Vertraulichkeit und Sicherheit verschmelzen zu einem einzigen „dürfen wir das“. Die Antworten, die Quellen und die Folgen sind jeweils andere.",
  lead: "Kundenmaterial zu einem KI-Anbieter zu geben kann technisch sauber und trotzdem nicht erlaubt sein. Es kann vertraglich erlaubt sein und am Datenschutzrecht scheitern. Und den Datenschutz zu klären sagt nichts darüber, ob das System sicher ist. Jede dieser Prüfungen wird für sich bestanden oder nicht.",
  sections: [
    {
      heading: "Die Fragen, und was jede auslöst",
      level: "assessment",
      paragraphs: [
        "Sie überschneiden sich ständig — deshalb werden sie vermengt. Überschneidung ist aber nicht Identität.",
      ],
      list: [
        "Sind personenbezogene Daten enthalten? — Datenschutzrecht gilt und verlangt Rechtsgrundlage, Rollenverteilung und geeignete Maßnahmen",
        "Ist das ein KI-Anwendungsfall als solcher? — KI-Regulierung und Branchenregeln gelten, unabhängig davon, ob personenbezogene Daten im Spiel sind",
        "Ist das Material vertraulich? — Vertrag, Verschwiegenheitspflichten und Geschäftsgeheimnisrecht gelten, und keinem davon ist wichtig, ob es personenbezogen ist",
        "Ist die Information berufsrechtlich geschützt? — Verschwiegenheitspflichten im Gesundheitswesen, in der Anwaltschaft, im Finanzwesen und in der Verwaltung kommen obendrauf",
      ],
    },
    {
      heading: "Sicher und rechtmäßig fallen in beide Richtungen auseinander",
      level: "assessment",
      paragraphs: [
        "Ein System kann gut gebaut, verschlüsselt und zugriffsgeschützt sein, während die Verarbeitung, die es ausführt, keine Rechtsgrundlage hat. Daran ändert die Technik nichts.",
        "Und eine rechtmäßige Anordnung kann schlecht abgesichert sein. Das Datenschutzrecht verlangt ein dem Risiko angemessenes Schutzniveau — das ist eine Untergrenze, keine Bauanleitung. Eine Rechtspflicht zu erfüllen heißt nicht, schwer angreifbar zu sein.",
        "Das praktische Versagen ist ein Vorhaben, das nur die Frage beantwortet, die seinen Verantwortlichen liegt, und die übrigen für erledigt hält.",
      ],
      links: [{ label: "Art. 32 DSGVO — Sicherheit der Verarbeitung", href: GDPR_ART_32 }],
    },
    {
      heading: "Vertraulichkeit ist keine Datenschutzfrage",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Ob Material vertraulich ist, regeln Vertrag, Verschwiegenheitspflichten und Geschäftsgeheimnisrecht — und keines davon fragt, ob eine Person identifizierbar ist. Die Datenschutzfrage zu klären sagt hier nichts, und Material ganz ohne personenbezogene Daten kann voll geschützt sein.",
        "Die KI-Nutzung berührt den Geheimnisschutz unmittelbar: Nach der EU-Geschäftsgeheimnis-Richtlinie behält eine Information diesen Status nur, solange sie angemessenen Geheimhaltungsmaßnahmen unterworfen ist — sorgloser Umgang kann also den Schutz selbst kosten. Was das praktisch heißt, neben der Frage nach personenbezogenen Daten, steht auf einer eigenen Seite.",
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
        "Eine Pflicht ist besonders wissenswert, weil sie Organisationen trifft, die KI bloß einsetzen: Art. 4 verpflichtet Anbieter und Betreiber von KI-Systemen, für ein ausreichendes Maß an KI-Kompetenz ihres Personals zu sorgen — und er gilt seit dem 2. Februar 2025.",
      ],
      links: [
        { label: "Verordnung (EU) 2024/1689 — die KI-Verordnung", href: AI_ACT },
        { label: "Die Pflicht zur KI-Kompetenz — und wo du damit anfängst", href: "/de/start/decision-maker" },
        { label: "AI Act: Kennzeichnung KI-generierter Inhalte", href: "/de/law/ai-act-transparency" },
      ],
    },
    {
      heading: "Grenzen dieser Seite",
      level: "assessment",
      paragraphs: [
        "Eine Landkarte dafür, in welcher Frage du steckst — keine Antwort auf eine davon, und keine Rechtsberatung. Jede dieser Fragen hat ihr eigenes Regelwerk, und Branchenpflichten können strenger sein als der allgemeine Text.",
        "Verhindern soll sie das eine bestimmte Versagen: eine Frage gut zu beantworten und das so zu berichten, als wären alle vier geklärt.",
      ],
    },
  ],
};

export const getFourSeparateQuestions = (locale: SiteLocale): Article => (locale === "de" ? de : en);
