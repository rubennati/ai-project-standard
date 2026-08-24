# Current State

> If this file conflicts with current git state (branch, PRs, commits), trust git.

- **Objective, set 2026-08-24:** implement the whole-site editorial and
  structural review in seven slices, in order, without churning what already
  works. The slices, their scope and their dependencies are in `tasks.md`.
- **Now: slice 2 — global shell.** Slice 1 shipped in #158. Slice 2 is
  implemented on `feature/slice-2-global-shell` and awaiting human review: the
  footer cut to two groups over a reporting row and a legal bar, and
  `RelatedNextStep` evolved into a contextual `NextStep`. Both are in
  `decisions.md` (2026-08-24). Slice 3 is next once slice 2 merges.

The review itself is finished. What it established durably is in
`decisions.md` (2026-08-24) and in the slice list; the finding set behind it is
session evidence and is not restated here.

## Settled, and not reopened without a concrete contradiction

The four primary reader journeys, the four primary hubs, current header
membership and the current bilingual header labels — unchanged from 2026-08-20.
Reference is still not a fifth journey. The review found no contradiction strong
enough to reopen any of it.

The homepage (PR #154) is the editorial reference and is not changed by this
objective unless a slice needs a concrete integration fix.

The footer information architecture and the `NextStep` contract shipped in
slice 2 and are in `decisions.md`. `site/INFORMATION_ARCHITECTURE.md` and
`site/PAGE_PRIMITIVES.md` carry the implemented shape.

The canonical product identity shipped in slice 1 and is settled:
`AI Standard is an independent site for using AI at work.` /
`AI Standard ist eine unabhängige Seite für den Einsatz von KI bei der Arbeit.`
`site/src/data/identity.ts` owns it; every surface that answers "what is this"
reads or restates it, and a conformance check holds the two static
restatements. No slice introduces a second product statement. Slice 2 dropped
the footer restatement — presentation only, and removing a restatement cannot
create a second statement.

## Working constraints for this objective

Not decisions. They bind this objective and expire or are reconsidered with it.

- Public copy starts from a question, task or situation a reader would actually
  recognise. An internal product model may structure the answer; it does not
  become the language of the answer.
- German: if a heading is not something a person could say, search for or
  understand at once, it is project language rather than public copy.
- **A stranded reader and a crowded footer are two jobs, not one.** The end of a
  page is solved by a contextual onward step; the footer is solved by cutting it
  back to supporting destinations. Neither is solved with the other's content.
- Sticky navigation and breadcrumbs are implementation options for the onward
  path, not requirements. Neither is adopted because the review mentioned it.
- `/start/employee` and `/start/decision-maker` keep their URLs. They are
  prerequisite role questions inside the Start journey, not two of the six ways
  of working, and `/start` resolves the prerequisite before asking a reader to
  choose. A route migration needs evidence that the URL itself costs a reader
  something.
- `/start/what-it-is-doing` keeps its URL for now. `/data-flows` owns the
  mechanism explanation; the route follows the ownership only on later evidence.
- German terminology is classified by meaning before any term is enforced.
  Account, customer type and pricing tier are three concepts and do not collapse
  into one. No CI rule until the mapping exists and has been approved.
- Structural parallelism between the English and German pages is evidence of a
  quality problem. It is not evidence about how those pages were written, and is
  not recorded as if it were.
- Pages the review found strong are not rewritten for surface uniformity.
  `tasks.md` names them.
- No route retirement, redirect or taxonomy change is implemented without the
  human approval `AGENTS.md` → Change scope requires.

## Open, and blocking

Slice 2 is not blocked. These three block slices 4 and 6 only, and are not
answerable from repository evidence.

- **`/docs/**` retirement shape (blocks slice 6).** Publication stops being
  automatic; what happens to the 21 published URLs does not follow from that.
  Redirect each to its GitHub source, or serve them `noindex` and drop them from
  the sitemap? The answer also decides the licence sentence in the legal notice,
  which names `/docs/` and grants MIT over it in both locales.
- **`practical-ai-collaboration` promotion target (blocks the same slice).** It
  has a real public reader and is English-only at 1,985 words. Which route does
  it become, and does promotion require the German version before it ships?
- **Retiring `/data-flows/what-you-agree-to` (blocks part of slice 4).** Folding
  it into `training-and-retention` removes a published URL in both locales. Fold
  and redirect, or keep the route and cut it to its one distinct idea?

## Active constraints

- No application code during standard-definition phase.
- Keep `.ai/` files concise and low-overhead.
- Use the project branch prefixes (`feature/*`, `fix/*`, `docs/*`,
  `refactor/*`, `experiment/*`); do not use `codex/` branch names.
- Queued work stays queued. The current objective does not absorb it — `tasks.md`.
- For commit, push, and merge rules see the "Approval" section in `AGENTS.md`.
