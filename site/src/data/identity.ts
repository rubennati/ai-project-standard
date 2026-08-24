/**
 * What AI Standard is, in one sentence per locale.
 *
 * The homepage established it; every other surface that answers "what is this"
 * restates it — the footer tagline, the fallback page description, the web app
 * manifest and `llms.txt`. They had drifted into five different answers, two of
 * which described the repository standard behind the site rather than the site,
 * and one of which led with a security-practitioner framing the homepage
 * deliberately dropped.
 *
 * `identity` is the short sentence. It does not change unless the homepage lead
 * changes with it, because the lead opens with it word for word. `summary` is
 * the same product at meta-description length: surfaces whose technical purpose
 * differs may say more or less, but not something else.
 *
 * `public/manifest.webmanifest` and `public/llms.txt` are served as static
 * files and cannot import this module, so they restate the English strings.
 * `.github/scripts/check-conformance.sh` fails the build if they stop matching.
 */
import type { SiteLocale } from "../i18n/ui";

/**
 * The product. Deliberately not the repository's name, which is
 * `AI Project Standard` and describes a different thing.
 */
export const productName = "AI Standard";

interface Identity {
  /** What AI Standard is, in one sentence. */
  identity: string;
  /** The same product, at the length a search result or link preview shows. */
  summary: string;
}

const copy: Record<SiteLocale, Identity> = {
  en: {
    identity: "AI Standard is an independent site for using AI at work.",
    summary:
      "Independent guidance for using AI at work, with practical examples, clear explanations, and sources you can inspect.",
  },
  de: {
    identity:
      "AI Standard ist eine unabhängige Seite für den Einsatz von KI bei der Arbeit.",
    summary:
      "Unabhängige Orientierung für den Einsatz von KI bei der Arbeit – mit konkreten Aufgaben, verständlichen Erklärungen und nachvollziehbaren Quellen.",
  },
};

export const getIdentity = (locale: SiteLocale): Identity => copy[locale];
