import type { CollectionEntry } from "astro:content";

type DocEntry = CollectionEntry<"docs">;

const FIRST_H1 = /^#\s+(.+)$/m;
const FIRST_PARAGRAPH = /^(?!#|>|-|\*|\d+\.|`|---|\s*$)(.+)$/m;

export function docTitle(entry: DocEntry): string {
  if (entry.data.title) return entry.data.title;
  const heading = entry.body?.match(FIRST_H1)?.[1];
  if (heading) return heading;
  return humanizeSlug(entry.id);
}

export function docDescription(entry: DocEntry): string {
  if (entry.data.description) return entry.data.description;
  // Strip the H1 before looking for the first paragraph.
  const body = entry.body?.replace(FIRST_H1, "") ?? "";
  const paragraph = body.match(FIRST_PARAGRAPH)?.[1];
  if (paragraph) return paragraph.slice(0, 200);
  return "AI Project Standard documentation.";
}

function humanizeSlug(slug: string): string {
  return slug
    .split("/")
    .pop()!
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// Logical ordering for the docs index page; entries not listed fall through
// in alphabetical order at the end.
const ORDER = [
  "standard",
  "profiles",
  "adoption",
  "getting-started",
  "ai-workspace-layer",
  "ai-tools",
  "practical-ai-collaboration",
  "open-source-project-standard",
  "git-workflow",
  "branch-protection",
];

export function sortDocs(entries: DocEntry[]): DocEntry[] {
  return [...entries].sort((a, b) => {
    const ai = ORDER.indexOf(a.id);
    const bi = ORDER.indexOf(b.id);
    if (ai === -1 && bi === -1) return a.id.localeCompare(b.id);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });
}
