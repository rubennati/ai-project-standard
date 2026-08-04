/**
 * Privacy policy content, per locale.
 *
 * Kept out of i18n/ui.ts because it is a legal document rather than UI chrome:
 * it needs headings, lists and links, and it changes for legal reasons rather
 * than design ones.
 *
 * Every factual claim here was verified against the provider's own
 * documentation, cited inline. Two points are deliberately phrased as criteria
 * rather than assertions, because they could not be verified from an
 * authoritative source: the exact retention period, and the role each provider
 * takes (controller vs processor). Both must be confirmed before this is
 * treated as final.
 */
import type { SiteLocale } from "../i18n/ui";
import { contactEmail, operator } from "./site";

export interface PrivacySection {
  heading: string;
  paragraphs: string[];
  list?: string[];
  links?: { label: string; href: string }[];
}

const GITHUB_PAGES_DOCS =
  "https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages";
const GITHUB_PRIVACY =
  "https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement";
const CLOUDFLARE_PRIVACY = "https://www.cloudflare.com/privacypolicy/";
const CLOUDFLARE_GDPR = "https://www.cloudflare.com/trust-hub/gdpr/";
const DSB = "https://www.dsb.gv.at/";

const en: PrivacySection[] = [
  {
    heading: "Controller",
    paragraphs: [
      `${operator.name}, ${operator.company}, ${operator.address}. Company register ${operator.companyRegister}, VAT ${operator.vatId}.`,
      `Contact for anything in this policy: ${contactEmail}`,
    ],
  },
  {
    heading: "What this site does not do",
    paragraphs: [
      "This is a static site. The following are absent by construction, not by promise — you can verify each one in the page source:",
    ],
    list: [
      "No cookies are set.",
      "No localStorage, sessionStorage or other browser storage is used.",
      "No analytics, tracking pixels or fingerprinting.",
      "No third-party fonts, scripts, embeds or images. Every asset is served from this domain.",
      "No forms, no accounts, no newsletter, no profiling and no automated decision-making.",
    ],
  },
  {
    heading: "What is processed when you visit",
    paragraphs: [
      "Delivery of this site runs through two providers, and both keep server logs. That processing happens whatever the site itself does, and it is the only personal data involved.",
      "The logs contain the usual request metadata: IP address, date and time, the URL requested, HTTP status, user agent and referrer. IP addresses are personal data under Art. 4(1) GDPR.",
      "GitHub states this plainly for GitHub Pages: the visitor's IP address is logged and stored for security purposes, whether or not the visitor is signed in to GitHub.",
    ],
    links: [
      { label: "GitHub Pages documentation on data collection", href: GITHUB_PAGES_DOCS },
      { label: "Cloudflare on GDPR and log data", href: CLOUDFLARE_GDPR },
    ],
  },
  {
    heading: "Legal basis",
    paragraphs: [
      "Art. 6(1)(f) GDPR, legitimate interests. The interests pursued are keeping the site available and defending it against attack and abuse — the purposes for which the providers above keep those logs. No other purpose is pursued, and the data is not used for analysis, profiling or advertising.",
    ],
  },
  {
    heading: "Recipients and international transfers",
    paragraphs: [
      "Cloudflare, Inc. (United States) delivers the site as a reverse proxy and terminates TLS. Cloudflare states that it processes this log metadata in data centres in the United States and Europe.",
      "GitHub, Inc., part of Microsoft (United States), hosts the site through GitHub Pages.",
      "Both are United States companies, so processing may take place outside the EU. The safeguards each relies on, and the periods they retain log data for, are set out in their own privacy documentation linked below rather than restated here, so that this page cannot drift from what they actually do.",
    ],
    links: [
      { label: "GitHub Privacy Statement", href: GITHUB_PRIVACY },
      { label: "Cloudflare Privacy Policy", href: CLOUDFLARE_PRIVACY },
    ],
  },
  {
    heading: "Your rights",
    paragraphs: [
      `Where the statutory conditions are met, you have the right of access (Art. 15), rectification (Art. 16), erasure (Art. 17) and restriction of processing (Art. 18). Write to ${contactEmail}.`,
      "The right to data portability under Art. 20 GDPR applies to processing carried out by automated means and based on consent or on a contract. The processing described above rests on legitimate interests, so that right does not apply to it.",
      "Because the processing described above rests on Art. 6(1)(f), you also have the right under Art. 21(1) GDPR to object to it at any time on grounds relating to your particular situation.",
    ],
  },
  {
    heading: "Complaints",
    paragraphs: [
      "You may lodge a complaint with a supervisory authority. The competent authority for this site is the Austrian Data Protection Authority, Barichgasse 40-42, 1030 Vienna.",
    ],
    links: [{ label: "Österreichische Datenschutzbehörde", href: DSB }],
  },
];

const de: PrivacySection[] = [
  {
    heading: "Verantwortlicher",
    paragraphs: [
      `${operator.name}, ${operator.company}, ${operator.address}. Firmenbuch ${operator.companyRegister}, UID ${operator.vatId}.`,
      `Kontakt zu allen Punkten dieser Erklärung: ${contactEmail}`,
    ],
  },
  {
    heading: "Was diese Website nicht tut",
    paragraphs: [
      "Dies ist eine statische Website. Das Folgende fehlt bauartbedingt, nicht aufgrund eines Versprechens — jeder Punkt lässt sich im Seitenquelltext nachprüfen:",
    ],
    list: [
      "Es werden keine Cookies gesetzt.",
      "Es werden weder localStorage noch sessionStorage oder anderer Browser-Speicher verwendet.",
      "Keine Analyse, keine Zählpixel, kein Fingerprinting.",
      "Keine Schriften, Skripte, Einbettungen oder Bilder von Dritten. Alle Ressourcen kommen von dieser Domain.",
      "Keine Formulare, keine Benutzerkonten, kein Newsletter, kein Profiling und keine automatisierte Entscheidungsfindung.",
    ],
  },
  {
    heading: "Was beim Aufruf verarbeitet wird",
    paragraphs: [
      "Die Auslieferung dieser Website läuft über zwei Anbieter, und beide führen Server-Protokolle. Diese Verarbeitung findet unabhängig davon statt, was die Website selbst tut, und sie betrifft die einzigen personenbezogenen Daten, um die es hier geht.",
      "Die Protokolle enthalten die üblichen Anfrage-Metadaten: IP-Adresse, Datum und Uhrzeit, aufgerufene URL, HTTP-Status, User-Agent und Referrer. IP-Adressen sind nach Art. 4 Z 1 DSGVO personenbezogene Daten.",
      "GitHub hält das für GitHub Pages ausdrücklich fest: Die IP-Adresse der Besucherinnen und Besucher wird zu Sicherheitszwecken protokolliert und gespeichert, unabhängig davon, ob sie bei GitHub angemeldet sind.",
    ],
    links: [
      { label: "GitHub-Pages-Dokumentation zur Datenerhebung", href: GITHUB_PAGES_DOCS },
      { label: "Cloudflare zu DSGVO und Protokolldaten", href: CLOUDFLARE_GDPR },
    ],
  },
  {
    heading: "Rechtsgrundlage",
    paragraphs: [
      "Art. 6 Abs. 1 lit. f DSGVO, berechtigte Interessen. Verfolgt wird das Interesse, die Website verfügbar zu halten und gegen Angriffe und Missbrauch zu verteidigen — also genau die Zwecke, zu denen die genannten Anbieter diese Protokolle führen. Ein anderer Zweck wird nicht verfolgt; es findet keine Auswertung, kein Profiling und keine Werbung statt.",
    ],
  },
  {
    heading: "Empfänger und Drittlandübermittlung",
    paragraphs: [
      "Cloudflare, Inc. (USA) liefert die Website als Reverse Proxy aus und terminiert TLS. Cloudflare gibt an, diese Protokoll-Metadaten in Rechenzentren in den USA und in Europa zu verarbeiten.",
      "GitHub, Inc., Teil von Microsoft (USA), hostet die Website über GitHub Pages.",
      "Beide sind US-Unternehmen, eine Verarbeitung außerhalb der EU ist daher möglich. Die jeweils herangezogenen Garantien und die Speicherdauer der Protokolldaten ergeben sich aus den unten verlinkten Datenschutzdokumenten der Anbieter und werden hier bewusst nicht wiederholt, damit diese Seite nicht von der tatsächlichen Praxis abweichen kann.",
    ],
    links: [
      { label: "GitHub Privacy Statement", href: GITHUB_PRIVACY },
      { label: "Cloudflare Privacy Policy", href: CLOUDFLARE_PRIVACY },
    ],
  },
  {
    heading: "Ihre Rechte",
    paragraphs: [
      `Soweit die gesetzlichen Voraussetzungen vorliegen, stehen Ihnen das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17) und Einschränkung der Verarbeitung (Art. 18) zu. Wenden Sie sich an ${contactEmail}.`,
      "Das Recht auf Datenübertragbarkeit nach Art. 20 DSGVO gilt für automatisiert durchgeführte Verarbeitungen, die auf einer Einwilligung oder auf einem Vertrag beruhen. Die oben beschriebene Verarbeitung stützt sich auf berechtigte Interessen — für sie gilt dieses Recht daher nicht.",
      "Da sich die beschriebene Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO stützt, steht Ihnen nach Art. 21 Abs. 1 DSGVO außerdem das Recht zu, ihr jederzeit aus Gründen zu widersprechen, die sich aus Ihrer besonderen Situation ergeben.",
    ],
  },
  {
    heading: "Beschwerde",
    paragraphs: [
      "Sie können sich bei einer Aufsichtsbehörde beschweren. Zuständig ist für diese Website die Österreichische Datenschutzbehörde, Barichgasse 40-42, 1030 Wien.",
    ],
    links: [{ label: "Österreichische Datenschutzbehörde", href: DSB }],
  },
];

export const getPrivacySections = (locale: SiteLocale): PrivacySection[] =>
  locale === "de" ? de : en;
