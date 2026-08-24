# Current State

> If this file conflicts with current git state (branch, PRs, commits), trust git.

- **Objective, set 2026-08-24:** review the whole public website editorially and
  structurally so it reads as one product, with the homepage as the editorial
  reference. The product architecture is settled — four journeys, four hubs, the
  header, the footer groups and the public routes — and is reopened only where
  the audit finds a concrete contradiction between a navigation decision and the
  reader's actual job.

## How this review starts

Read-only. The audit covers the site before any page is rewritten; it does not
open by rewriting pages in bulk.

**Surfaces:** header and footer; how the homepage relates to the rest of the
site; `/use-cases`, `/start`, `/data-flows`, `/secure-setup` and their
significant children; Law; About; Reference and the glossary; Vibe Coding;
Connect AI; the employee and decision-maker guidance; the verification and
record-keeping pages; and any other public page that materially affects a
reader journey.

**What it looks for:** public wording that exposes internal product models;
headings that are not recognisable questions, tasks or situations; artificial
copy; security and compliance language crowding out the broader product value;
duplication across header, hub and child page; content at the wrong depth;
pages that are disproportionately long or shallow; card and section density;
mobile scrolling burden; weak onward paths; header and footer links that follow
repository structure rather than reader need; and navigation labels that
disagree with what the destination delivers.

## Working constraints for this review

Not decisions. They bind this objective and expire or are reconsidered with it.

- Public copy starts from a question, task or situation a reader would actually
  recognise. An internal product model may structure the answer; it does not
  become the language of the answer.
- German: if a heading is not something a person could say, search for or
  understand at once, it is project language rather than public copy.

## Active constraints

- No application code during standard-definition phase.
- Keep `.ai/` files concise and low-overhead.
- Use the project branch prefixes (`feature/*`, `fix/*`, `docs/*`,
  `refactor/*`, `experiment/*`); do not use `codex/` branch names.
- Queued work stays queued. The current objective does not absorb it — `tasks.md`.
- For commit, push, and merge rules see the "Approval" section in `AGENTS.md`.
