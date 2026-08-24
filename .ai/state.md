# Current State

> If this file conflicts with current git state (branch, PRs, commits), trust git.

- **Objective, set 2026-08-24:** review the whole public website editorially and
  structurally so it reads as one product, with the homepage as the editorial
  reference.

**Settled, and not reopened without a concrete contradiction between the
implementation and the reader's job:** the four primary reader journeys, the
four primary hubs, current header membership, the current bilingual header
labels, and Reference not being a fifth primary journey.

**Not settled:** the footer. Its grouping, membership and placement are part of
this review, and the audit may recommend moving, removing or regrouping links
where a placement serves no distinct reader job. Open at least: whether Evidence
Method sits in the right group, whether a human-facing security contact link
earns its place or is redundant, and whether Law, Blog, About, Reference,
project and trust, and legal disclosure are grouped the way a reader would
expect. None of that is decided here.

**Public URLs** may be audited — a route or ownership problem is a finding worth
reporting — but they are not changed here. Any navigation, information
architecture or URL change needs the human approval its change-scope rule
requires before it is implemented.

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
