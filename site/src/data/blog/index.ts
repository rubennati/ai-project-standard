/**
 * The blog register.
 *
 * Posts are dated by hand rather than derived from git, because a post's
 * publication date is an editorial fact and a commit date is not: fixing a
 * typo two weeks later must not make a post look new. Sitemap freshness is a
 * separate concern and stays with the git-derived lastmod.
 */
import type { SiteLocale } from "../../i18n/ui";
import type { LocalizedRouteKey } from "../../i18n/routes";
import { getLocalizedPath } from "../../i18n/routes";
import {
  getBeforeYouPressEnter,
  PUBLISHED as beforeYouPressEnterPublished,
} from "./before-you-press-enter";

export interface BlogPostSummary {
  routeKey: LocalizedRouteKey;
  published: string;
  title: string;
  description: string;
  href: string;
}

export const getBlogPosts = (locale: SiteLocale): BlogPostSummary[] =>
  [
    {
      routeKey: "blogBeforeYouPressEnter" as const,
      published: beforeYouPressEnterPublished,
      article: getBeforeYouPressEnter(locale),
    },
  ]
    .sort((a, b) => b.published.localeCompare(a.published))
    .map(({ routeKey, published, article }) => ({
      routeKey,
      published,
      title: article.title,
      description: article.description,
      href: getLocalizedPath(locale, routeKey),
    }));

/** Posts that are planned but not written. Named rather than faked. */
export const getPlannedPosts = (locale: SiteLocale): string[] =>
  locale === "de"
    ? [
        "„Anonymisiert“ heißt selten anonym — warum Namen zu entfernen die Rechtslage meist nicht ändert.",
        "„EU-gehostet“ beantwortet eine andere Frage als die, die du gestellt hast.",
      ]
    : [
        "“Anonymised” rarely means anonymous — why removing names usually does not change the legal position.",
        "“EU-hosted” answers a different question from the one you asked.",
      ];
