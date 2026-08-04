/**
 * What you may put into an AI tool.
 *
 * The page exists because two separate regimes get collapsed into one
 * question. Personal data is governed by the GDPR. Confidential material is
 * governed by contract and by trade secret law. Clearing one says nothing
 * about the other, and most advice on the topic only addresses the first.
 *
 * Legal claims checked against the primary texts on 2026-08-03.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-03";

const GDPR_ART_6 = "https://eur-lex.europa.eu/eli/reg/2016/679/oj";
const GDPR_ART_28 = "https://gdpr-info.eu/art-28-gdpr/";
const TRADE_SECRETS = "https://eur-lex.europa.eu/eli/dir/2016/943/oj";

const en: Article = {
  title: "What may go into an AI tool?",
  description:
    "Personal data and confidentiality are two questions with two different answers. What each requires, and a short path through them.",
  lead: "Almost every version of this question collapses two regimes into one. They have different rules, different consequences and different people who come after you when it goes wrong.",
  sections: [
    {
      heading: "Two questions, not one",
      level: "assessment",
      paragraphs: [
        "Is there personal data in it? That is a data protection question, and the GDPR answers it.",
        "Is it confidential — a client's source code, an unreleased design, something under an NDA? That is a contract and trade secret question, and the GDPR has nothing to say about it.",
        "Material can be neither, either, or both. A client's architecture document with no names in it is fully confidential and contains no personal data at all. Clearing the first question does not clear the second, and it is the second that most often ends a working relationship.",
      ],
    },
    {
      heading: "Personal data: the question is not whether, but on what basis",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "There is no general prohibition on processing personal data with an AI tool. There is a requirement to have a legal basis for it under Art. 6 GDPR, and to be able to name which one.",
        "If the vendor processes the data on your instructions, they are a processor, and Art. 28 GDPR requires a contract governing that processing and that you use only processors offering sufficient guarantees. In practice: a data processing agreement, which the business tiers of the major vendors provide and the consumer tiers generally do not.",
        "Replacing names with placeholders lowers the risk considerably and is worth doing. It does not take you out of the GDPR — data you can re-identify is pseudonymised, not anonymised, and pseudonymised data is still personal data.",
      ],
      links: [
        { label: "Art. 6 GDPR — lawfulness of processing", href: GDPR_ART_6 },
        { label: "Art. 28 GDPR — processor obligations", href: GDPR_ART_28 },
      ],
    },
    {
      heading: "Confidentiality: a different regime, with a sharper edge",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Under the EU Trade Secrets Directive, information is only a trade secret if three things hold: it is secret, it has commercial value because it is secret, and it has been subject to reasonable steps under the circumstances to keep it secret.",
        "That third condition is the one worth sitting with. Careless handling does not only risk the leak — it can cost the information its status as a trade secret altogether, and with it the protection you would otherwise rely on. Pasting a client's material into an account whose terms permit training on it is difficult to describe as a reasonable step.",
        "Alongside that sit your own contracts. An NDA does not care whether the recipient was a person or a model.",
      ],
      links: [{ label: "Directive (EU) 2016/943 — definition of a trade secret", href: TRADE_SECRETS }],
    },
    {
      heading: "Private or company use is decided by the account",
      level: "assessment",
      paragraphs: [
        "People treat this as a question about intent — I am only trying something out, this is not really work. The terms do not read intent. They read which account the request came from.",
        "Work material on a personal account is the common case, and it is where both regimes fail at once: no processing agreement for the personal data, and no reasonable steps for the confidential part.",
      ],
    },
    {
      heading: "A path through it",
      level: "advice",
      paragraphs: [
        "Ask in this order, and stop at the first no.",
      ],
      list: [
        "Is it mine to share? If it belongs to a client or an employer, that decision is not yours alone.",
        "Is there personal data in it? If yes, name the legal basis and check that a processing agreement exists for the tool you are about to use.",
        "Am I on the right account? Business tier for anything that is not mine, every time.",
        "Can I reduce what I send? Send the smallest extract the task needs and replace direct identifiers. Whether what remains is low-risk enough depends on the content — context, rarity and what the recipient already knows can identify someone with no name in sight.",
        "Would I be comfortable explaining this exact step to the client afterwards? That question catches more than the other four.",
      ],
    },
    {
      heading: "What helps less than people think",
      level: "assessment",
      paragraphs: [
        "“I removed the names.” If you kept a way to put them back, you pseudonymised. Useful, not exculpatory.",
        "“It is hosted in the EU.” That addresses where processing happens. It does not supply a legal basis, a processing agreement, or permission from the person whose material it is.",
        "“It is only a summary.” A summary of a confidential document is still derived from a confidential document, and summaries of personal data are still personal data.",
      ],
    },
    {
      heading: "Where this stops",
      level: "assessment",
      paragraphs: [
        "This is a structure for thinking, not legal advice. Sector rules — health, legal practice, finance — add duties this page does not touch, and an employment contract can be stricter than the law.",
        "If the material is a client's and the answer is not obvious, the cheapest step is asking them. It is also the one that preserves the relationship if the answer turns out to be no.",
      ],
    },
  ],
};

const de: Article = {
  title: "Was darf in ein KI-Werkzeug hinein?",
  description:
    "Personenbezogene Daten und Vertraulichkeit sind zwei Fragen mit zwei Antworten. Was jede verlangt, und ein kurzer Weg hindurch.",
  lead: "Fast jede Fassung dieser Frage wirft zwei Regelwerke zusammen. Sie haben unterschiedliche Regeln, unterschiedliche Folgen und unterschiedliche Leute, die sich melden, wenn es schiefgeht.",
  sections: [
    {
      heading: "Zwei Fragen, nicht eine",
      level: "assessment",
      paragraphs: [
        "Stecken personenbezogene Daten drin? Das ist eine Datenschutzfrage, und die DSGVO beantwortet sie.",
        "Ist es vertraulich — Quellcode eines Kunden, ein unveröffentlichtes Konzept, etwas unter NDA? Das ist eine Vertrags- und Geschäftsgeheimnisfrage, und dazu sagt die DSGVO nichts.",
        "Material kann keines von beidem sein, eines, oder beides. Ein Architekturdokument eines Kunden ohne einen einzigen Namen ist vollständig vertraulich und enthält keine personenbezogenen Daten. Die erste Frage zu klären klärt die zweite nicht — und es ist die zweite, an der häufiger eine Zusammenarbeit endet.",
      ],
    },
    {
      heading: "Personenbezogene Daten: nicht ob, sondern auf welcher Grundlage",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Es gibt kein allgemeines Verbot, personenbezogene Daten mit einem KI-Werkzeug zu verarbeiten. Es gibt die Pflicht, dafür eine Rechtsgrundlage nach Art. 6 DSGVO zu haben — und sie benennen zu können.",
        "Verarbeitet der Anbieter die Daten weisungsgebunden für dich, ist er Auftragsverarbeiter. Art. 28 DSGVO verlangt dann einen Vertrag über diese Verarbeitung und dass du nur Auftragsverarbeiter einsetzt, die hinreichende Garantien bieten. Praktisch heißt das: ein Auftragsverarbeitungsvertrag, den die Geschäftstarife der großen Anbieter bereitstellen und die Verbrauchertarife in der Regel nicht.",
        "Namen durch Platzhalter zu ersetzen senkt das Risiko erheblich und ist sinnvoll. Aus der DSGVO führt es nicht heraus — was du wieder zuordnen kannst, ist pseudonymisiert, nicht anonymisiert, und pseudonymisierte Daten bleiben personenbezogen.",
      ],
      links: [
        { label: "Art. 6 DSGVO — Rechtmäßigkeit der Verarbeitung", href: GDPR_ART_6 },
        { label: "Art. 28 DSGVO — Auftragsverarbeiter", href: GDPR_ART_28 },
      ],
    },
    {
      heading: "Vertraulichkeit: ein anderes Regelwerk, mit schärferer Kante",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Nach der EU-Geschäftsgeheimnis-Richtlinie ist eine Information nur dann ein Geschäftsgeheimnis, wenn drei Dinge zutreffen: Sie ist geheim, sie hat gerade deshalb wirtschaftlichen Wert, und sie war den Umständen nach angemessenen Geheimhaltungsmaßnahmen unterworfen.",
        "Bei dieser dritten Bedingung lohnt es sich innezuhalten. Sorgloser Umgang riskiert nicht nur den Abfluss — er kann der Information den Status als Geschäftsgeheimnis überhaupt kosten, und damit den Schutz, auf den du dich sonst berufen würdest. Kundenmaterial in ein Konto zu kopieren, dessen Bedingungen Training damit erlauben, lässt sich schwer als angemessene Maßnahme beschreiben.",
        "Daneben stehen deine eigenen Verträge. Einer Verschwiegenheitsvereinbarung ist es gleichgültig, ob der Empfänger ein Mensch war oder ein Modell.",
      ],
      links: [
        { label: "Richtlinie (EU) 2016/943 — Definition des Geschäftsgeheimnisses", href: TRADE_SECRETS },
      ],
    },
    {
      heading: "Privat oder betrieblich entscheidet das Konto",
      level: "assessment",
      paragraphs: [
        "Viele behandeln das als Frage der Absicht — ich probiere nur etwas aus, das ist nicht wirklich Arbeit. Die Nutzungsbedingungen lesen keine Absicht. Sie lesen, aus welchem Konto die Anfrage kam.",
        "Arbeitsmaterial im privaten Konto ist der häufige Fall, und dort scheitern beide Regelwerke gleichzeitig: kein Auftragsverarbeitungsvertrag für den personenbezogenen Teil, keine angemessene Maßnahme für den vertraulichen.",
      ],
    },
    {
      heading: "Ein Weg hindurch",
      level: "advice",
      paragraphs: ["Frag in dieser Reihenfolge und hör beim ersten Nein auf."],
      list: [
        "Gehört es mir zum Weitergeben? Gehört es einem Kunden oder Arbeitgeber, ist das nicht allein deine Entscheidung.",
        "Stecken personenbezogene Daten drin? Wenn ja: Rechtsgrundlage benennen und prüfen, ob für das Werkzeug ein Auftragsverarbeitungsvertrag besteht.",
        "Bin ich im richtigen Konto? Für fremdes Material ein freigegebener Geschäftstarif — jedes Mal. Das ist die Untergrenze, keine Verarbeitungserlaubnis: Ob du die Daten überhaupt offenlegen darfst, ist die Frage davor.",
        "Kann ich weniger schicken? Schick den kleinsten Auszug, den die Aufgabe braucht, und ersetz direkte Identifikatoren. Ob das Verbleibende risikoarm genug ist, hängt vom Inhalt ab — Kontext, Seltenheit und was der Empfänger ohnehin weiß, können eine Person auch ohne Namen erkennbar machen.",
        "Würde ich dem Kunden diesen Schritt hinterher in Ruhe erklären? Diese Frage fängt mehr ab als die anderen vier.",
      ],
    },
    {
      heading: "Was weniger hilft, als man denkt",
      level: "assessment",
      paragraphs: [
        "„Ich habe die Namen entfernt.“ Wenn du einen Weg behalten hast, sie wieder einzusetzen, hast du pseudonymisiert. Nützlich, aber nicht entlastend.",
        "„Das liegt in der EU.“ Das betrifft den Ort der Verarbeitung. Es liefert keine Rechtsgrundlage, keinen Auftragsverarbeitungsvertrag und keine Erlaubnis dessen, dem das Material gehört.",
        "„Es ist nur eine Zusammenfassung.“ Die Zusammenfassung eines vertraulichen Dokuments stammt weiterhin aus einem vertraulichen Dokument, und Zusammenfassungen personenbezogener Daten bleiben personenbezogen.",
      ],
    },
    {
      heading: "Wo das endet",
      level: "assessment",
      paragraphs: [
        "Das ist ein Denkgerüst, keine Rechtsberatung. Branchenregeln — Gesundheit, Anwaltschaft, Finanzwesen — bringen Pflichten mit, die diese Seite nicht berührt, und ein Arbeitsvertrag kann strenger sein als das Gesetz.",
        "Gehört das Material einem Kunden und die Antwort ist nicht offensichtlich, ist Nachfragen der billigste Schritt. Es ist auch der, der die Beziehung erhält, falls die Antwort nein lautet.",
      ],
    },
  ],
};

export const getWhatMayGoIn = (locale: SiteLocale): Article => (locale === "de" ? de : en);
