# Current State

> If this file conflicts with current git state (branch, PRs, commits), trust git.

- **Objective, set 2026-08-24:** implement the whole-site editorial and
  structural review in seven slices, in order, without churning what already
  works. The slices, their scope and their dependencies are in `tasks.md`.
- **Now: Homepage Correction Pass.** A focused correction between slice 4 and
  slice 5, approved 2026-08-25 — not slice 8, and it does not renumber the
  seven slices. Slice 4 shipped in #165. The homepage's small architecture from
  PR #154 stays; the finding is editorial, not structural: the German H1 `KI
  sinnvoll im Arbeitsalltag einsetzen` is too abstract to say what a reader can
  achieve, the English needs the same scrutiny rather than a pass by default,
  and on a tall desktop viewport the page reads as under-filled after its
  compact trust close. Scope, boundaries and the design question are below.
  Slice 5 remains next after this pass and has not started.

The review itself is finished. What it established durably is in
`decisions.md` (2026-08-24) and in the slice list; the finding set behind it is
session evidence and is not restated here.

## Settled, and not reopened without a concrete contradiction

The four primary reader journeys, the four primary hubs, current header
membership and the current bilingual header labels — unchanged from 2026-08-20.
Reference is still not a fifth journey. The review found no contradiction strong
enough to reopen any of it.

The homepage's architecture from PR #154 — hero, three direct reader
questions, two hero CTAs into Use Cases and Ways of Working, a compact
open-development close, no duplication of the four header journeys — is
settled and is not reopened by the Homepage Correction Pass below. What is not
settled is whether its current H1, lead and density communicate enough; that is
the pass's one open question. See *Homepage Correction Pass* below for its
exact scope and boundaries.

The footer information architecture and the `NextStep` contract shipped in
slice 2 (#161) and are settled, same standing as the header and the four
journeys above — see `decisions.md`, 2026-08-24.
`site/INFORMATION_ARCHITECTURE.md` and `site/PAGE_PRIMITIVES.md` carry the
implemented shape.

`/data-flows` as the mechanism owner shipped in slice 4 and is settled to the
same standard: reach is an intersection rather than a single cause; the fourth
position is an identity, not necessarily a person's account; the four positions
are an explanation and not a published model. `Stop condition` / `Stoppbedingung`
is **not** stage vocabulary and is not carried as debt — it names a reader's
question, not a position in the product model. Slice 4 did not change the
`/start/what-it-is-doing` route and settles only that: the page now owns the
Start-specific tool-vs-setup reader job. Whether the URL itself should change is
not settled by this — see *Queued, not blocking* below.

The canonical product identity shipped in slice 1 and is settled:
`AI Standard is an independent site for using AI at work.` /
`AI Standard ist eine unabhängige Seite für den Einsatz von KI bei der Arbeit.`
`site/src/data/identity.ts` owns it; every surface that answers "what is this"
reads or restates it, and a conformance check holds the two static
restatements. No slice introduces a second product statement. Slice 2 dropped
the footer restatement — presentation only, and removing a restatement cannot
create a second statement.

`/start` as one reader journey shipped in slice 3 (#163) and is settled, same
standing as the above: prerequisite before choice; Employee and Decision Maker
as role questions, not two of the six working forms; the six forms named
`Ask a question` through `Let it run without you`, not the internal
Chat/Assistant/Agent taxonomy; `Good for` as part of the choice; Vibe Coding's
structure, including Explore and Prototype as complete outcomes and the
early-stopping block. The `ArtifactLink` title-first contract and the
blueprint-status conformance boundary (`check-conformance.sh` against
`blueprints/ai-assisted-development/blueprint.yml`) are equally settled — see
`decisions.md`, 2026-08-25. None of this reopens without a concrete
contradiction slice 4 or later work actually produces.

## Homepage Correction Pass

Approved 2026-08-25, between slice 4 and slice 5. Reconciliation only until a
fresh design session runs it; this section is that session's brief.

**Why.** The homepage architecture from PR #154 remains broadly valid. Two
concrete defects were found by rendering it, not by re-litigating the
architecture:

- **H1.** German `KI sinnvoll im Arbeitsalltag einsetzen` is too abstract for
  the whole product — `sinnvoll` names no criterion and states nothing a
  reader can achieve. It risks the same abstract evaluative language the
  whole-site review has been removing elsewhere. English `Use AI well at
  work` needs the same scrutiny, not a pass because it predates the review.
- **Density.** On a normal desktop/tall viewport the page reads as
  under-filled: hero, three direct links, a compact trust close, then a large
  empty area before the footer. It can read as unfinished rather than
  deliberately minimal.

**Not reopened — presumed correct unless direct inspection finds a defect.**
The four primary journeys, header destinations and labels, footer
architecture, the canonical identity mechanism, `/start`, `/data-flows`,
`/secure-setup`, routes and redirects. `Start with a question` /
`Direkt einsteigen`, the three direct reader questions, the two hero CTAs,
the compact open-development/trust close, and the homepage's refusal to
duplicate the four header journeys.

**Not restored.** The old four-journey homepage grid, security-desk framing,
`How to read this site`, a large Evidence Method section, repository-underneath
framing, `/docs` promotion, glossary housekeeping, count/inventory language, or
internal product taxonomy as public copy.

**What the fresh session decides.**

1. A stronger H1 in both locales.
2. A lead that says concretely what AI Standard helps a reader do.
3. Whether one compact layer of concrete work/examples belongs before
   `Direkt einsteigen` so the page demonstrates substance before it asks a
   reader to pick a question.
4. Whether `Offen entwickelt` remains the right compact closing block.
5. How the page fills a desktop viewport without adding filler.

Direction to test, not approved copy: concrete reader/work language — working
with AI, concrete tasks, choosing a way of working, what changes when tools,
data or other systems become involved. No draft wording from any prior
conversation is pre-approved.

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

Three, none answerable from repository evidence. Each blocks the specific
decision it names, not the slice that decision sits in — none of them blocks
slice 5, slice 6's other scope, or the homepage correction pass.

- **`/docs/**` retirement shape (blocks slice 6).** Publication stops being
  automatic; what happens to the 21 published URLs does not follow from that.
  Redirect each to its GitHub source, or serve them `noindex` and drop them from
  the sitemap? The answer also decides the licence sentence in the legal notice,
  which names `/docs/` and grants MIT over it in both locales.
- **`practical-ai-collaboration` promotion target (blocks the same slice).** It
  has a real public reader and is English-only at 1,985 words. Which route does
  it become, and does promotion require the German version before it ships?
- **Retiring `/data-flows/what-you-agree-to` — deferred, not settled.** Slice 4
  kept the route and cut the page to its four unique ideas: storage before
  training, training as a batched job, what "trained on our data" usually
  means, and the Art. 4(12) GDPR distinction between a transfer and a breach.
  Re-test after slice 6, which may move the Art. 4(12) material to `/law`; if it
  does, what is left may no longer earn a URL. No route change until then.

## Queued, not blocking

Two things slice 4 found while reconciling ownership. Neither answerable from
repository evidence, and neither blocks slice 5, slice 6 or anything else —
both wait for the slice 7 whole-site pass named in `tasks.md`.

- **Export and portability have no owner.** `getting-it-back-out` answers
  deletion; nothing on the site answers *how do I get my data out*. Slice 4
  deliberately did not build it or stretch the deletion page to cover it. Slice
  7 must assign an existing owner, add coverage, or record it as deliberately
  out of scope — it is a queued content gap, not a reason later work should
  stop.
- **`/start/what-it-is-doing`'s H1 no longer matches its slug.** The page now
  reads `Do you need a different tool — or a better setup?` at
  `/start/what-it-is-doing`. That mismatch is evidence for a later
  route-quality decision, not a decision itself; slice 4 kept the URL and did
  not act on it.

## Active constraints

- No application code during standard-definition phase.
- Keep `.ai/` files concise and low-overhead.
- Use the project branch prefixes (`feature/*`, `fix/*`, `docs/*`,
  `refactor/*`, `experiment/*`); do not use `codex/` branch names.
- Queued work stays queued. The current objective does not absorb it — `tasks.md`.
- For commit, push, and merge rules see the "Approval" section in `AGENTS.md`.
