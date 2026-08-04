/**
 * RSS 2.0 feed for the blog.
 *
 * Hand-written rather than pulled from a package: the feed is thirty lines and
 * a dependency would be thirty lines plus a supply chain. One feed per locale,
 * because a reader who subscribed in German should not be sent English.
 *
 * `pubDate` is the editorial publication date, so an item never moves in a
 * reader's list because a typo was fixed. Feed-level `lastBuildDate` is
 * deliberately the newest post rather than the build time — a feed that
 * changes on every deploy trains aggregators to ignore it.
 */
import type { APIRoute } from "astro";
import { getBlogPosts } from "../../data/blog";
import { getUi, type SiteLocale } from "../../i18n/ui";

const escapeXml = (value: string) =>
  value.replace(
    /[<>&'"]/g,
    (character) =>
      ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[character]!,
  );

/** RFC 822, which is what RSS 2.0 requires — not ISO 8601. */
const toRfc822 = (isoDate: string) => new Date(`${isoDate}T00:00:00Z`).toUTCString();

export const feedForLocale = (locale: SiteLocale, site: URL | undefined): Response => {
  const origin = site?.toString() ?? "https://ai-standard.rubennati.at/";
  const ui = getUi(locale);
  const posts = getBlogPosts(locale);
  const self = new URL(locale === "de" ? "/de/blog/rss.xml" : "/blog/rss.xml", origin).toString();
  const index = new URL(locale === "de" ? "/de/blog" : "/blog", origin).toString();

  const items = posts
    .map((post) => {
      const url = new URL(post.href, origin).toString();
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${toRfc822(post.published)}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`;
    })
    .join("\n");

  const newest = posts[0]?.published;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${ui.blogTitle} — AI Standard`)}</title>
    <link>${escapeXml(index)}</link>
    <atom:link href="${escapeXml(self)}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(ui.blogDescription)}</description>
    <language>${locale}</language>${newest ? `\n    <lastBuildDate>${toRfc822(newest)}</lastBuildDate>` : ""}
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};

export const GET: APIRoute = ({ site }) => feedForLocale("en", site);
