/**
 * AI Act Article 50 — transparency and labelling.
 *
 * Every claim here was checked against the European Commission's own FAQ and
 * the Article text on 2026-08-03, two days after the Article became
 * applicable. The dates are the load-bearing part of this page and they are
 * the part most likely to age, so each section carries its evidence level and,
 * where it is a fact rather than a reading, the date it was checked.
 *
 * One item is deliberately marked as provisional: the extended deadline for
 * systems already on the market comes from the AI Omnibus provisional
 * agreement of May 2026. Provisional means not finally adopted. It is stated
 * as such rather than presented as settled law.
 */
import type { SiteLocale } from "../../i18n/ui";
import type { Article } from "../article";

export const CHECKED = "2026-08-03";

const EC_FAQ =
  "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act";
const EC_GUIDELINES =
  "https://digital-strategy.ec.europa.eu/en/policies/guidelines-transparency-ai-generated-content";
const ARTICLE_50 = "https://artificialintelligenceact.eu/article/50/";

const en: Article = {
  title: "AI Act: labelling AI-generated content",
  description:
    "Article 50 of the EU AI Act has applied since 2 August 2026. What must be disclosed, who is obliged, and what the transition covers.",
  lead: "The transparency rules of the EU AI Act are no longer upcoming. They apply, and they reach far past the systems classified as high-risk.",
  sections: [
    {
      heading: "Since when",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Article 50 applies from 2 August 2026. It is not tied to the high-risk classification: it covers any AI system used in one of the four situations the Article describes, which is why it reaches ordinary products rather than only regulated ones.",
      ],
      links: [
        { label: "European Commission — FAQ on Article 50", href: EC_FAQ },
        { label: "Article 50, full text", href: ARTICLE_50 },
      ],
    },
    {
      heading: "Who is obliged, and to do what",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "The Article splits duties between the provider who puts a system on the market and the deployer who uses it. Confusing the two is the most common mistake, because they owe different things.",
        "Providers must make outputs detectable. Where a system generates synthetic audio, image, video or text, the output has to carry marks that are machine-readable — visible labelling on its own is not what the provision asks for. Systems built to interact directly with people must also make clear that the counterpart is an AI, unless that is obvious from the situation.",
        "Deployers must disclose. That covers deepfakes, AI-generated or manipulated text published to inform the public on matters of public interest where no human reviewed it, and the operation of emotion recognition or biometric categorisation systems towards the people exposed to them.",
      ],
      links: [{ label: "Commission guidelines on transparency", href: EC_GUIDELINES }],
    },
    {
      heading: "The transition period, and what it does not cover",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Systems that were on the market before 2 August 2026 have until 2 December 2026 to meet the machine-readable marking duty under Article 50(2). This comes from the AI Omnibus provisional agreement of May 2026 — provisional, so worth re-checking before relying on it.",
        "Content created before 2 August 2026 does not have to be labelled retroactively, though the Commission encourages it where that is feasible.",
      ],
      list: [
        "The extension is for the marking duty under Art. 50(2), not for the other obligations.",
        "It applies to systems already on the market, not to systems launched after the date.",
      ],
      links: [{ label: "European Commission — FAQ on Article 50", href: EC_FAQ }],
    },
    {
      heading: "Does it hit you if you publish AI-assisted text?",
      level: "assessment",
      paragraphs: [
        "The deployer duty for text is narrower than it first reads. It attaches to text published to inform the public on matters of public interest, and only where the text was not reviewed by a human who takes editorial responsibility for it. A post you drafted with a model and then went through yourself is unlikely to be caught by that wording.",
        "This is a reading, not a ruling. If you publish at scale, on political or public-interest topics, or without review, the question stops being academic and belongs in front of a lawyer.",
      ],
    },
    {
      heading: "What I would do about it",
      level: "advice",
      paragraphs: [
        "Establish which role you are in for each system you use — provider or deployer. Almost everyone reading this is a deployer, and the duties are far smaller in that role.",
        "Where you publish generated media rather than text, check whether your tool writes machine-readable provenance marks at all. Many do not, and the duty sits with the provider — but you are the one whose output is unmarked.",
        "Write down when you last checked. This area moves, the Omnibus is still provisional, and a note in the repository costs nothing next to being confidently out of date.",
      ],
    },
  ],
};

const de: Article = {
  title: "AI Act: Kennzeichnung KI-generierter Inhalte",
  description:
    "Artikel 50 des EU AI Act gilt seit 2. August 2026. Was offengelegt werden muss, wen es trifft, und was die Übergangsfrist abdeckt.",
  lead: "Die Transparenzregeln des EU AI Act stehen nicht mehr bevor. Sie gelten — und sie reichen weit über die als hochriskant eingestuften Systeme hinaus.",
  sections: [
    {
      heading: "Seit wann",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Artikel 50 gilt seit 2. August 2026. Er hängt nicht an der Hochrisiko-Einstufung: Er erfasst jedes KI-System, das in einer der vier dort beschriebenen Situationen eingesetzt wird. Deshalb trifft er gewöhnliche Produkte und nicht nur regulierte.",
      ],
      links: [
        { label: "Europäische Kommission — FAQ zu Artikel 50", href: EC_FAQ },
        { label: "Artikel 50, Volltext", href: ARTICLE_50 },
      ],
    },
    {
      heading: "Wen es trifft, und wozu",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Der Artikel teilt die Pflichten zwischen dem Anbieter, der ein System auf den Markt bringt, und dem Betreiber, der es einsetzt. Die beiden zu verwechseln ist der häufigste Fehler, denn sie schulden Unterschiedliches.",
        "Anbieter müssen Ausgaben erkennbar machen. Erzeugt ein System synthetische Audio-, Bild-, Video- oder Textinhalte, muss die Ausgabe Kennzeichnungen tragen, die maschinenlesbar sind — eine bloß sichtbare Beschriftung ist nicht das, was die Bestimmung verlangt. Systeme, die für den direkten Umgang mit Menschen gebaut sind, müssen zudem deutlich machen, dass das Gegenüber eine KI ist, sofern das nicht ohnehin offensichtlich ist.",
        "Betreiber müssen offenlegen. Das betrifft Deepfakes, KI-generierte oder veränderte Texte, die zur Information der Öffentlichkeit über Angelegenheiten von öffentlichem Interesse veröffentlicht werden und die kein Mensch geprüft hat, sowie den Einsatz von Emotionserkennung oder biometrischer Kategorisierung gegenüber den betroffenen Personen.",
      ],
      links: [{ label: "Leitlinien der Kommission zur Transparenz", href: EC_GUIDELINES }],
    },
    {
      heading: "Die Übergangsfrist — und was sie nicht abdeckt",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Systeme, die vor dem 2. August 2026 auf dem Markt waren, haben bis 2. Dezember 2026 Zeit, die Pflicht zur maschinenlesbaren Kennzeichnung nach Art. 50 Abs. 2 zu erfüllen. Das stammt aus der vorläufigen Einigung zum AI Omnibus vom Mai 2026 — vorläufig, also vor dem Verlassen darauf noch einmal zu prüfen.",
        "Inhalte, die vor dem 2. August 2026 erstellt wurden, müssen nicht rückwirkend gekennzeichnet werden. Die Kommission empfiehlt es aber, wo es machbar ist.",
      ],
      list: [
        "Die Verlängerung gilt der Kennzeichnungspflicht nach Art. 50 Abs. 2, nicht den übrigen Pflichten.",
        "Sie gilt für bereits auf dem Markt befindliche Systeme, nicht für nach dem Stichtag eingeführte.",
      ],
      links: [{ label: "Europäische Kommission — FAQ zu Artikel 50", href: EC_FAQ }],
    },
    {
      heading: "Trifft es dich, wenn du KI-unterstützte Texte veröffentlichst?",
      level: "assessment",
      paragraphs: [
        "Die Betreiberpflicht für Texte ist enger, als sie zunächst klingt. Sie knüpft an Texte an, die zur Information der Öffentlichkeit über Angelegenheiten von öffentlichem Interesse veröffentlicht werden, und greift nur, wenn kein Mensch den Text geprüft und die redaktionelle Verantwortung übernommen hat. Ein Beitrag, den du mit einem Modell entworfen und danach selbst durchgegangen bist, dürfte von diesem Wortlaut nicht erfasst sein.",
        "Das ist eine Lesart, kein Urteil. Wer in großem Umfang veröffentlicht, zu politischen Themen oder ohne Prüfung, für den ist die Frage nicht mehr akademisch und gehört zu einem Anwalt.",
      ],
    },
    {
      heading: "Was ich dazu tun würde",
      level: "advice",
      paragraphs: [
        "Kläre für jedes eingesetzte System, in welcher Rolle du bist — Anbieter oder Betreiber. Fast alle, die das hier lesen, sind Betreiber, und in dieser Rolle sind die Pflichten deutlich kleiner.",
        "Wo du generierte Medien statt Text veröffentlichst: Prüfe, ob dein Werkzeug überhaupt maschinenlesbare Herkunftskennzeichen schreibt. Viele tun es nicht, und die Pflicht liegt beim Anbieter — unmarkiert ist aber deine Ausgabe.",
        "Halte fest, wann du zuletzt geprüft hast. Das Feld bewegt sich, der Omnibus ist noch vorläufig, und eine Notiz im Repository kostet nichts gegen den Zustand, selbstbewusst veraltet zu sein.",
      ],
    },
  ],
};

export const getAiActTransparency = (locale: SiteLocale): Article =>
  locale === "de" ? de : en;
