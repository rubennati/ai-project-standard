import { defaultLocale, type SiteLocale } from "./ui";

export type LocalizedRouteKey =
  | "home"
  | "about"
  | "blogIndex"
  | "blogBeforeYouPressEnter"
  | "glossaryIndex"
  | "glossaryTerm"
  | "legalNotice"
  | "privacyPolicy"
  | "law"
  | "lawAiActTransparency"
  | "lawWhatMayGoIn"
  | "lawUsCloudAndTheGdpr"
  | "dataFlows"
  | "dataFlowsTraining"
  | "dataFlowsDeletion"
  | "dataFlowsConsent"
  | "dataFlowsSovereignty"
  | "dataFlowsKnowledgeSources"
  | "dataFlowsConnectAiTools"
  | "startWhatItIsDoing"
  | "startVibeCoding"
  | "lawFourQuestions"
  | "secureSetup"
  | "secureSetupAccess"
  | "start"
  | "startEmployee"
  | "startDecisionMaker"
  | "openSource"
  | "openSourceWhatMakesIt"
  | "openSourceLicence"
  | "openSourceCodeAtWork";

export const isLocale = (value: string): value is SiteLocale =>
  value === "en" || value === "de";

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
    case "blogIndex":
      return `${prefix}/blog`;
    case "blogBeforeYouPressEnter":
      return `${prefix}/blog/before-you-press-enter`;
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
    case "lawWhatMayGoIn":
      return `${prefix}/law/what-may-go-in`;
    case "lawUsCloudAndTheGdpr":
      return `${prefix}/law/us-cloud-and-the-gdpr`;
    case "dataFlows":
      return `${prefix}/data-flows`;
    case "dataFlowsTraining":
      return `${prefix}/data-flows/training-and-retention`;
    case "dataFlowsConsent":
      return `${prefix}/data-flows/what-you-agree-to`;
    case "dataFlowsSovereignty":
      return `${prefix}/data-flows/data-sovereignty`;
    case "dataFlowsKnowledgeSources":
      return `${prefix}/data-flows/where-knowledge-lives`;
    case "dataFlowsConnectAiTools":
      return `${prefix}/data-flows/connect-ai-to-tools-and-data`;
    case "startWhatItIsDoing":
      return `${prefix}/start/what-it-is-doing`;
    case "startVibeCoding":
      return `${prefix}/start/vibe-coding`;
    case "lawFourQuestions":
      return `${prefix}/law/four-separate-questions`;
    case "dataFlowsDeletion":
      return `${prefix}/data-flows/getting-it-back-out`;
    case "secureSetup":
      return `${prefix}/secure-setup`;
    case "secureSetupAccess":
      return `${prefix}/secure-setup/before-you-grant-access`;
    case "start":
      return `${prefix}/start`;
    case "startEmployee":
      return `${prefix}/start/employee`;
    case "startDecisionMaker":
      return `${prefix}/start/decision-maker`;
    case "openSource":
      return `${prefix}/open-source`;
    case "openSourceWhatMakesIt":
      return `${prefix}/open-source/what-makes-it-open-source`;
    case "openSourceLicence":
      return `${prefix}/open-source/choosing-a-licence`;
    case "openSourceCodeAtWork":
      return `${prefix}/open-source/code-written-at-work`;
  }
};

export const getAlternateLocale = (locale: SiteLocale): SiteLocale =>
  locale === "de" ? "en" : "de";
