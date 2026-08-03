import { defaultLocale, type SiteLocale } from "./ui";

export type LocalizedRouteKey =
  | "home"
  | "about"
  | "glossaryIndex"
  | "glossaryTerm"
  | "legalNotice"
  | "privacyPolicy"
  | "law"
  | "lawAiActTransparency"
  | "dataFlows"
  | "dataFlowsTraining";

export const isLocale = (value: string): value is SiteLocale => value === "en" || value === "de";

export const getLocaleFromPathname = (pathname: string): SiteLocale =>
  pathname === "/de" || pathname.startsWith("/de/") ? "de" : defaultLocale;

export const getLocalizedPath = (
  locale: SiteLocale,
  routeKey: LocalizedRouteKey,
  options?: { slug?: string },
) => {
  const prefix = locale === "de" ? "/de" : "";

  switch (routeKey) {
    case "home":
      return prefix || "/";
    case "about":
      return `${prefix}/about`;
    case "glossaryIndex":
      return `${prefix}/glossary`;
    case "glossaryTerm":
      return `${prefix}/glossary/${options?.slug ?? ""}`.replace(/\/+$/, "");
    case "legalNotice":
      return `${prefix}/legal-notice`;
    case "privacyPolicy":
      return `${prefix}/privacy-policy`;
    case "law":
      return `${prefix}/law`;
    case "lawAiActTransparency":
      return `${prefix}/law/ai-act-transparency`;
    case "dataFlows":
      return `${prefix}/data-flows`;
    case "dataFlowsTraining":
      return `${prefix}/data-flows/training-and-retention`;
  }
};

export const getAlternateLocale = (locale: SiteLocale): SiteLocale =>
  locale === "de" ? "en" : "de";
