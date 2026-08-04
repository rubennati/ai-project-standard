/**
 * German language guard for the site's content modules.
 *
 * A review found the German text had been built out of English sentence logic:
 * "Werkzeug" for software, one article on "Sie" while the rest used "du",
 * headings translated word-for-word into constructions nobody writes. Those
 * are cheap to reintroduce and expensive to spot by reading, so the three
 * mechanical ones are checked here.
 *
 * This catches vocabulary and address, not style. It cannot tell whether a
 * sentence sounds German — that still needs a person reading it aloud.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Resolved from this file rather than the working directory, so the check runs
// the same from the repo root, from site/, and from a CI step. Safe here in a
// way it would not be inside the Astro build: this script is never bundled.
const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT_ROOTS = [path.join(siteRoot, "src/data"), path.join(siteRoot, "src/i18n")];

/** Software is a "Tool" in German (Duden lists it as the EDV term). A
 *  "Werkzeug" is a hammer. The exceptions are real German compounds. */
const WERKZEUG_ALLOWED = /Entwicklerwerkzeuge?|Diagnosewerkzeug/;

/** Formal address. The site uses "du" everywhere except the privacy policy and
 *  legal notice, which address a data subject and are formal by convention. */
const FORMAL = /\b(Sie haben|Sie können|Sie müssen|Sie sollten|Ihnen|Ihre[nmrs]?\b)/;
const FORMAL_ALLOWED = new Set([path.join("src", "data", "privacy.ts"), path.join("src", "data", "legal.ts")]);

/**
 * Reveal framing — "what really happens", "was wirklich passiert".
 *
 * Flagged only in titles, headings and descriptions, where it is a promise to
 * the reader. It contradicts the method: the evidence labels exist to say
 * "here is the source, check it and disagree", and a headline claiming
 * privileged access to a hidden truth asks to be believed instead. In body
 * prose the same words can carry real weight ("a backup you have actually
 * restored once"), so those are left alone.
 */
const REVEAL_FIELDS = /^\s*(title|subtitle|heading|description|label|homeHeading|homeDescription):/;
const REVEAL = /\b(wirklich|tatsächlich|actually|really|genuinely)\b/i;

const walk = (dir) =>
  readdirSync(dir).flatMap((entry) => {
    const full = path.join(dir, entry);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });

const files = CONTENT_ROOTS.flatMap(walk).filter((f) => f.endsWith(".ts"));
const problems = [];

for (const file of files) {
  const rel = path.relative(siteRoot, file);
  const lines = readFileSync(file, "utf8").split("\n");

  lines.forEach((line, index) => {
    const at = `${rel}:${index + 1}`;

    for (const match of line.matchAll(/[A-Za-zÄÖÜäöüß-]*[Ww]erkzeug[a-zäöüß]*/g)) {
      if (!WERKZEUG_ALLOWED.test(match[0])) {
        problems.push(`${at}  "${match[0]}" — use "Tool" for software (Duden: EDV term).`);
      }
    }

    // "Sie tun es" (they) and "Sie haben unterschiedliche Regeln" (plural
    // subject) are fine; only flag files that are not meant to be formal.
    if (!FORMAL_ALLOWED.has(rel) && FORMAL.test(line) && !/^\s*\*/.test(line)) {
      const hit = line.match(FORMAL)[0];
      problems.push(`${at}  "${hit}" — the site addresses the reader as "du".`);
    }

    if (REVEAL_FIELDS.test(line) && REVEAL.test(line)) {
      const hit = line.match(REVEAL)[0];
      problems.push(
        `${at}  "${hit}" in a heading promises a reveal. Name the subject instead.`,
      );
    }
  });
}

if (problems.length > 0) {
  console.error(`Language check failed (${problems.length}):\n`);
  for (const problem of problems) console.error(`  ${problem}`);
  console.error("\nSee docs/language-style.md for the rules.");
  process.exit(1);
}

console.log(`Language check passed across ${files.length} content files.`);
