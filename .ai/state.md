# Current State

> If this file conflicts with current git state (branch, PRs, commits), trust git.

- **Objective, set 2026-08-24:** implement the whole-site editorial and
  structural review in seven slices, in order, without churning what already
  works. The slices, their scope and their dependencies are in `tasks.md`.
- **Now: slice 6 — Law, About, Evidence, Reference and discovery — shipped in
  #171 (2026-08-27).** It is not carried forward as an active objective; see
  *Settled* below for its durable outcome. Slice 7 — site-wide voice, German,
  terminology and quality — is next and has not started.
- **Ledger:** slice 1 shipped (#158) · slice 2 shipped (#161) · slice 3 shipped
  (#163) · slice 4 shipped (#165) · Homepage Correction Pass shipped (#167,
  between 4 and 5, not slice 8) · slice 5 shipped (#169) · slice 6 shipped
  (#171) · slice 7 next, not started. No slice 8; slice 7 is the final
  numbered objective, followed by a final overall site check.

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
settled. The Homepage Correction Pass (shipped in #167) settled the rest: the
H1, the lead, the primary CTA label, the example line, the German entry
heading and the homepage-local width hierarchy. See *Homepage Correction Pass*
below for the shipped outcome. None of it reopens without a concrete
contradiction; Slice 7 may still catch an actual language or quality defect,
but the homepage is not reopened for preference or further polishing.

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

`/secure-setup` as four ordered questions plus two continuing concerns shipped
in slice 5 (#169) and is settled to the same standard — see `decisions.md`,
2026-08-26. The old public six-stage lifecycle — `Decide / Configure / Verify /
Record / Monitor / Take it back` — is retired in both languages and no
replacement taxonomy was introduced. The four ordered questions are permission,
enforceable boundary, checking the result and keeping a record; monitoring and
taking access back are continuing concerns rather than a fifth and sixth step,
and their former dead ends on the hub now have honest destinations.
`before-you-grant-access` is the canonical owner of enforceable boundaries: a
boundary is *enforced outside the model*, which names several possible layers —
the connection, exposed operations, a narrow identity or credential,
target-system permissions, a required approval — and not the target system
alone, so the 2026-08-25 intersection decision is not replaced by a new
monopoly. Approval is meaningful only when the concrete action is visible
before it runs; a bare `continue?` is not enough, and `human in the loop` was
not introduced as a phrase. Revocation does not imply deletion of copies
already made elsewhere; that stays conditional, not universal. Consequence
determines how much checking a task needs, stated once on `checking-the-result`
rather than twice in different vocabulary, and reading alone is a useful check
only where the reader understands enough to notice the errors that matter.
`keeping-a-record` still owns the record/log/transcript distinction and the
four things worth recording are still four; a log may identify the account,
service identity or credential identifier used, but must not hold the secret
itself. No operating route was created.

`Law, About, Evidence, Reference and discovery` shipped in slice 6 (#171,
2026-08-27) and is settled to the same standard — see `decisions.md`, four
entries of 2026-08-27. Publication is a deliberate page, never a filesystem
glob: `/docs/**` (21 routes: `/docs` + 20 children) and `/profiles` redirect
one-to-one to their exact repository sources, the glob renderer is removed,
and no source Markdown was deleted. `practical-ai-collaboration` stays a
repository document; its planned public promotion (2026-08-24) is superseded.
The method page lives at `/about/how-claims-are-checked` — reader job: how
AI Standard checks claims, ranks sources, uses check dates and handles
corrections — and owns evidence levels, source ranking, what a check date
does and does not do, source-authority limits and the correction path; old
glossary URLs redirect there. About owns why the project exists, the
position it argues from, what it is not, repository/project context, who
writes it and licence framing, with only a bridge to the method page. The
Law hub routes rather than acting as a compliance dashboard
(`Which rules apply when you use AI at work?` /
`Welche Regeln gelten, wenn du KI bei der Arbeit einsetzt?`); canonical
ownership is `what-may-go-in` (entry, Art. 6/28, confidentiality/trade
secrets), `four-separate-questions` (orientation across the four questions),
`us-cloud-and-the-gdpr` (third-country transfer) and `ai-act-transparency`
(provider/deployer transparency duties); Art. 4's substantive literacy
explanation stays on `/start/decision-maker` and is not re-duplicated in Law.
`what-you-agree-to` closed its post-slice-6 re-test as keep-but-narrow: it
owns storage-before-training and the Art. 4(12) loss-of-control distinction,
deliberately not moved to Law, while the vendor-claim decoder moved to
`where-knowledge-lives`. Open Source is not a fifth journey; its reader job
is publishing/maintaining software already built, reached contextually from
the Vibe Coding page (primary) and About (secondary), never from header or
footer; all three child articles remain, and the `No AI in this section`
framing is retired — no claim that AI Standard itself was built without AI
ever existed on the site. Glossary owns terms a reader meets and needs
explained; Evidence Method is no longer filed under it; no Reference area
exists or is planned. `/impressum` and `/datenschutz` redirect to their
German pages. `llms.txt` matches the shipped architecture; canonical identity
is unchanged.

## Homepage Correction Pass — shipped in #167, closed

Approved and implemented 2026-08-25–26, between slice 4 and slice 5. Not
slice 8, and it did not renumber the seven slices. Merged to `main` as `e249cf7`.
Not carried forward as an active objective: this section is a durable record,
not an open brief. It is not reopened for preference or further polishing —
only a concrete contradiction, or an actual language/quality defect Slice 7
finds, could touch it again.

**Why it existed.** The PR #154 homepage architecture — hero, three direct
reader questions, two hero CTAs, a compact open-development close — remained
valid. Rendered review found two real defects rather than an architectural one:
the German H1 `KI sinnvoll im Arbeitsalltag einsetzen` named no criterion a
reader could act on and risked the same abstract evaluative language the
whole-site review was removing elsewhere; and the desktop composition read as
under-filled, which measurement traced to width, not to missing content — the
heading, lead and entry list sat at nearly the same narrow measure inside a
rail already 192px narrower than the header and footer shell.

**Shipped outcome — the three-block page stays exactly that.**

1. Hero — H1, lead, two CTAs, one compact example line.
2. Direct reader questions.
3. Open-development / source-transparency close.

- **H1** leads with capability, not a quality claim: `What AI can do at work —
  and how to work with it` / `Was KI bei der Arbeit kann — und wie du damit
  arbeitest`. `well` and `sinnvoll` are gone from the homepage's top-level
  promise; `sinnvoll` stays in the `/use-cases` header label, where a
  `Wo`-clause makes it the question under examination rather than a promise —
  header copy was not reopened.
- **Lead** keeps the canonical identity sentence as sentence one, still
  interpolated from `identity.ts` — no second definition was introduced — then
  names concrete tasks, choosing a way of working, and what changes when data,
  tools or other systems become involved. It promises only what the page routes
  to; `/secure-setup` is no longer promised by a page that cannot reach it.
- **Primary CTA** — `What AI can help with` / `Wobei KI helfen kann` — names the
  reader job rather than the route slug. Secondary CTA is unchanged, Ways of
  Working.
- **One compact example line** sits in the hero: illustrative, never a list, no
  heading, no links, no cards. `/use-cases` still owns the real set.
- **Direct-entry questions and destinations are unchanged** — same three
  questions, same order, same links. The German heading became
  `Mit einer Frage starten`, naming what follows; `Direkt einsteigen` only named
  a mode.
- **`Offen entwickelt`** stays the closing colophon, same position, same size,
  same single GitHub action.
- **Homepage-local width hierarchy** — wider H1, lead kept at reading width,
  wider direct-entry list — fixed the desktop composition without any global
  layout, shell-rail or other-hub change.

Header, footer, the four primary journeys, canonical identity, routes,
redirects and the sitemap were not reopened. Verified: 377 of 379 built pages
byte-identical against `main`; header and footer byte-identical on the two
that changed; route set and sitemap unchanged; homepage `<main>` holds exactly
six links in both locales; no horizontal overflow at 375, 768, 1280, 1440 or a
1440-tall viewport.

## Slice 4 → slice 5 handoff — reconciled, closed

Connect AI's removed control-loop material (recoverable at commit `178e782`;
the original key-by-key table is under slice 4 in `tasks.md`) was reconciled
into `/secure-setup` in slice 5 (#169). Disposition: the manual-baseline item
was discarded as out of family — whether a task is worth a connection is Use
Cases' and Connect AI's question, not a control; the resource/tool-separation
and narrow-identity material merged into `before-you-grant-access`'s
enforcement and identity sections; the approval material landed as a
substantial new section there; the log/stop/recovery material split, with only
the non-duplicative pieces surviving — see the log/credential rule in
*Settled* above — and the stop/recover half became that page's taking-access-
back section. The old control-loop and verification headings were not carried,
and the recovered verification steps sit beside the claims they prove rather
than in a checklist. Because no control loop was rebuilt, `Kontrollkreis` never
shipped and `Regelkreis` was never needed. The OWASP MCP Security Cheat Sheet
was deliberately not carried; see `decisions.md`, 2026-08-26. Not active
work — nothing in this handoff remains open.

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

Nothing. The three former blockers resolved on 2026-08-27: the `/docs/**`
shape and the `practical-ai-collaboration` reversal were approved and
implemented, and the `what-you-agree-to` re-test closed as keep-but-narrow —
the Art. 4(12) material stayed, so the route still earns its URL. All three
are in `decisions.md`, 2026-08-27.

## Queued, not blocking

Findings surfaced while reconciling ownership across slices 4 and 5. None are
answerable from repository evidence and none block anything currently in
progress; each waits for the slice it names, or for the slice 7 whole-site
pass named in `tasks.md` where none is named.

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
- **No owner for operating something that runs unattended.** Two hubs now point
  at the same absence by deliberate decision: `/start`'s sixth way of working
  has no path onward, and `/secure-setup` states that detecting a failure while
  it is happening is not covered here. Everything a reader can act on —
  standing access, repeating output quality, product defaults — already has an
  owner, so slice 5 built no route. Whether the remainder becomes one is a
  content-scope decision for slice 7 or later, and it needs the change-scope
  approval `AGENTS.md` requires.
- **The three account switches have no home for a reader who never grants an
  agent anything.** Slice 5's first pass compressed them onto
  `before-you-grant-access`, linked to the `/data-flows` pages that keep the
  facts current; a rendered-review pass then removed the section entirely,
  because it had grown that page to 9+ mobile screens on a concept the page
  does not own. The facts stayed exactly where they were before slice 5 —
  `training-and-retention` and `getting-it-back-out` — and nothing moved.
  Where a reader who only opens a chat window should meet them is still
  unsettled. Slice 7.
- **Product memory as a setting has no fact owner.** `training-and-retention`
  owns training and retention and `getting-it-back-out` owns deletion, so both
  are linked; memory across conversations is named without a link because no
  page currently keeps that fact current.
- **Three legal concepts have no public owner** — rights in AI output,
  automated decision-making (Art. 22 GDPR), and consent versus the other
  Art. 6 legal bases (`what-may-go-in` says "name the legal basis" without
  naming them). Slice 7 or later assigns an owner, adds coverage, or records
  each as deliberately out of scope.
- **Multi-session reviewability has no public owner.** "Several AI sessions
  touched this repository — how does the work stay reviewable?" would be a
  fresh, bilingual Open Source article if built; `practical-ai-collaboration`
  is not it — see `decisions.md`, 2026-08-27.
- **Glossary contextual coverage.** Five of 143 term pages have an editorial
  inbound link. The discovery rule — link a term when understanding it is
  necessary at that point — is stated; applying it page by page is ordinary
  editing, slice 7 or later. The platform/UI decoder entries and the six
  AppSec terms are untouched housekeeping candidates.
- **Dead code left deliberately in place after the `/docs` retirement** — the
  `license` prop on `Base.astro`/`JsonLd.astro` (every public page is now
  CC BY 4.0), the unused `mdx()` integration, `ui.docs`, and the `docs/**`
  path trigger in `pages.yml` (deploys still run, output unchanged). Internal
  cleanup, not reader-facing; remove when something touches those files.

## Active constraints

- No application code during standard-definition phase.
- Keep `.ai/` files concise and low-overhead.
- Use the project branch prefixes (`feature/*`, `fix/*`, `docs/*`,
  `refactor/*`, `experiment/*`); do not use `codex/` branch names.
- Queued work stays queued. The current objective does not absorb it — `tasks.md`.
- For commit, push, and merge rules see the "Approval" section in `AGENTS.md`.
