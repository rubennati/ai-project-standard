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
    "Developer tools": "Entwicklerwerkzeuge",
    "AI vendor/product language": "Produkt- und Anbieterbegriffe",
  },
};

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

  return {
    term: translation?.term ?? entry.term,
    shortDefinition: translation?.shortDefinition ?? entry.shortDefinition,
    explanation: translation?.explanation ?? entry.explanation,
    aiContext: translation?.aiContext ?? entry.aiContext,
  };
};

export const getTermBySlug = (entries: TermEntry[], slug: string) =>
  entries.find((entry) => getTermSlug(entry) === slug);
