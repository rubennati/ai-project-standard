import type { TermEntry, TermKind } from "./terms";
import type { SiteLocale } from "../i18n/ui";

export const productKinds = new Set<TermKind>([
  "platform-ui-term",
  "product-feature-term",
  "product-tool-name",
]);

export const sourceChoices = [
  "General",
  "ChatGPT",
  "Claude",
  "Perplexity",
  "Gemini",
  "Microsoft Copilot",
  "Developer tools",
  "AI vendor/product language",
] as const;

export type SourceChoice = (typeof sourceChoices)[number];

export const sourceGroups: Record<SourceChoice, string[]> = {
  General: ["General AI usage", "Model documentation", "Knowledge systems", "Developer communities"],
  ChatGPT: ["ChatGPT", "ChatGPT Codex", "Codex"],
  Claude: ["Claude", "Claude Desktop", "Claude Code"],
  Perplexity: ["Perplexity"],
  Gemini: ["Gemini"],
  "Microsoft Copilot": ["Microsoft Copilot"],
  "Developer tools": ["Developer tools", "Vector systems", "Code assistants"],
  "AI vendor/product language": [
    "AI vendor marketing",
    "AI products",
    "Agent products",
    "Enterprise AI products",
  ],
};

export const sourceChoiceLabels: Record<SiteLocale, Record<SourceChoice, string>> = {
  en: {
    General: "General",
    ChatGPT: "ChatGPT",
    Claude: "Claude",
    Perplexity: "Perplexity",
    Gemini: "Gemini",
    "Microsoft Copilot": "Microsoft Copilot",
    "Developer tools": "Developer tools",
    "AI vendor/product language": "AI vendor/product language",
  },
  de: {
    General: "Allgemein",
    ChatGPT: "ChatGPT",
    Claude: "Claude",
    Perplexity: "Perplexity",
    Gemini: "Gemini",
    "Microsoft Copilot": "Microsoft Copilot",
    "Developer tools": "Entwicklertools",
    "AI vendor/product language": "Produkt- und Anbieterbegriffe",
  },
};

/**
 * The raw `observedIn` values are English by definition — they name where a
 * term was seen. Product names stay as they are; the descriptive ones are
 * translated, so a German page stops printing English values under a German
 * heading.
 */
export const observedInLabels: Record<SiteLocale, Record<string, string>> = {
  en: {},
  de: {
    "AI products": "KI-Produkte",
    "AI vendor marketing": "Marketing von KI-Anbietern",
    "Agent products": "Agent-Produkte",
    "Developer communities": "Entwickler-Communities",
    "Developer tools": "Entwicklertools",
    "Enterprise AI products": "KI-Produkte für Unternehmen",
    "General AI usage": "Allgemeiner KI-Sprachgebrauch",
    "Knowledge systems": "Wissenssysteme",
    "Model documentation": "Modell-Dokumentation",
    "Vector systems": "Vektor-Systeme",
  },
};

export const getObservedInLabel = (value: string, lang: SiteLocale) =>
  observedInLabels[lang][value] ?? value;

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const getTermSlug = (entry: Pick<TermEntry, "term" | "slug">) => entry.slug ?? slugify(entry.term);

export const getGlossaryPath = (lang: SiteLocale) =>
  lang === "de" ? "de/glossary" : "glossary";

export const getTermPath = (entry: Pick<TermEntry, "term" | "slug">, lang: SiteLocale) =>
  `${getGlossaryPath(lang)}/${getTermSlug(entry)}`;

export const getSourceBuckets = (entry: TermEntry) => {
  const buckets = new Set<SourceChoice>();

  for (const source of entry.observedIn) {
    for (const [bucket, values] of Object.entries(sourceGroups) as [SourceChoice, string[]][]) {
      if (values.includes(source)) buckets.add(bucket);
    }
  }

  return [...buckets];
};

export const isProductLabel = (entry: TermEntry) => productKinds.has(entry.kind);

export const getLocalizedTermContent = (entry: TermEntry, lang: SiteLocale) => {
  const translation = lang === "de" ? entry.translations?.de : undefined;

  // Falling back to English is fine; doing it silently is not. A page that
  // serves English prose while declaring `inLanguage: "de"` misdescribes
  // itself to search engines and to anyone relying on the language attribute,
  // so callers get told which language they actually received.
  const definitionLanguage: SiteLocale = translation?.shortDefinition ? lang : "en";

  // The same applies field by field: an entry can have a translated definition
  // and untranslated prose beneath it, which then renders as German under a
  // German heading. Each prose field says whether it fell back, so the page can
  // mark it and tag it with the language it is actually in.
  const fellBack = (translated: string | undefined, original: string | undefined) =>
    lang !== "en" && !translated && Boolean(original);

  return {
    term: translation?.term ?? entry.term,
    shortDefinition: translation?.shortDefinition ?? entry.shortDefinition,
    analogy: translation?.analogy ?? entry.analogy,
    explanation: translation?.explanation ?? entry.explanation,
    // The figure is language-neutral often enough to fall back, but a
    // translated one wins when there is one.
    figure: translation?.figure ?? entry.figure,
    example: translation?.example ?? entry.example,
    aiContext: translation?.aiContext ?? entry.aiContext,
    englishFallback: {
      analogy: fellBack(translation?.analogy, entry.analogy),
      explanation: fellBack(translation?.explanation, entry.explanation),
      example: fellBack(translation?.example, entry.example),
      aiContext: fellBack(translation?.aiContext, entry.aiContext),
    },
    definitionLanguage,
    isTranslated: definitionLanguage === lang,
  };
};

export const getTermBySlug = (entries: TermEntry[], slug: string) =>
  entries.find((entry) => getTermSlug(entry) === slug);
