# Current State

> If this file conflicts with current git state (branch, PRs, commits), trust git.

- **Objective, set 2026-08-21:** editorially reset the public homepage so it
  explains AI Standard as a product rather than exposing the site's internal
  information architecture. The four primary journeys, the four hubs and the
  navigation are shipped and are not reopened by this work.

## Homepage direction

Working direction, not yet a decision. It has not been implemented or approved.

1. **Hero** — what AI Standard is, and what a reader gets from it. Primary entry
   likely `/use-cases`; optional secondary entry `/start`.
2. **A short practical entry** — only if it adds something the header and
   `/use-cases` do not already give. Never a repetition of the four journeys.
3. **Trust** — only where it fits the page. Sources, check dates and evidence may
   carry credibility; do not add a section whose job is explaining how to read
   the site.
4. **Project** — if included, say plainly that AI Standard is developed openly,
   and offer GitHub as source access. Not a second product, and no instruction to
   ordinary readers to browse source documents.

### What the next pass must not return to

- `Mit KI echte Arbeit erledigen …` / `Do real work with AI …`
- `Geschrieben aus der Security-Praxis` / `Written from a security desk`
- explaining that the site is organised around four questions
- mirroring the four primary navigation journeys as four homepage cards
- `Wie diese Seite zu lesen ist` / `How to read this site` as a homepage section
- `Darunter liegt ein Repository` / `There is a repository underneath this`
- security, compliance or accountability as the opening product promise
- internal product-stage vocabulary as public framing

## Open questions

- What does the hero promise a first-time reader, in one sentence, without
  naming the site's structure? Unresolved, and it decides the rest of the page.

## Active constraints

- No application code during standard-definition phase.
- Keep `.ai/` files concise and low-overhead.
- Use the project branch prefixes (`feature/*`, `fix/*`, `docs/*`,
  `refactor/*`, `experiment/*`); do not use `codex/` branch names.
- Queued work stays queued. The current objective does not absorb it — `tasks.md`.
- For commit, push, and merge rules see the "Approval" section in `AGENTS.md`.
