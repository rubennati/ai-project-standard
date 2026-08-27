# Current State

> If this file conflicts with current git state (branch, PRs, commits), trust git.

- **Objective, set 2026-08-24, closed 2026-08-27:** implement the whole-site
  editorial and structural review in seven slices, in order, without churning
  what already works. All seven are shipped. The slices, their scope and their
  dependencies are in `tasks.md`.
- **Now: the seven-slice roadmap is complete. The final overall site check
  shipped its ten bounded local fixes (#175), a maintainer-requested
  three-column footer (#176) and the release-readiness standard (#177), all
  merged 2026-08-27.** There is no slice 8.
- **Release Readiness: READY AFTER LOCAL FIXES.** Not READY. The closeout pass
  closed the privacy delivery-chain defect and the stale footer documentation,
  and then completed the three acceptance areas the earlier pass could not
  evidence — exhaustive concept ownership, exhaustive strong-claim review, and
  actual Lighthouse measurement. Those audits found **ten open defects**, listed
  in `tasks.md` under *Release-readiness closeout defects*. Nine are content
  corrections; one is a live infrastructure defect
  (`/.well-known/security.txt` 404s in production). None is a BLOCKER: no
  reader is pushed toward an unsafe or unlawful act by any of them, and the
  errors run conservative — they over-claim scope or over-warn, rather than
  clearing anyone to do something.
- **Two findings worth carrying, because they are about how the audits
  themselves failed.** First, the strong-claim defects were initially reported
  as German-only; they are not — the English carries the same overreach in
  every case, which means the earlier English pass under-reported and a
  single-language audit is not evidence about the other language. Second,
  `/.well-known/security.txt` was checked as a *built file* in the previous
  pass and passed; it fails as a *live URL*. `docs/release-readiness.md`
  already requires live checking, and this is what that requirement is for.
- **Ledger:** slice 1 shipped (#158) · slice 2 shipped (#161) · slice 3 shipped
  (#163) · slice 4 shipped (#165) · Homepage Correction Pass shipped (#167,
  between 4 and 5, not slice 8) · slice 5 shipped (#169) · slice 6 shipped
  (#171) · **slice 7 shipped (#173, implementation commit `db9c134`, merge
  commit `6d81922`, 2026-08-27).** No slice 8; slice 7 was the final numbered
  objective.

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

`Site-wide voice, German, terminology and quality` shipped in slice 7 (#173,
2026-08-27) and is settled to the same standard as the slices above — see
`decisions.md`, four entries of 2026-08-27. One claim per concept in both
languages, and the German says what the English says: ten EN/DE parity defects
are gone, including a frequency claim where the English says *can*, an inverted
actor in the blog, a dropped *untrusted* and a dropped *public-interest*, and a
trade-secret condition that read as past rather than continuing. German remains
independently written rather than translated line by line; no site-wide `du`/
`man` rule and no language or terminology CI were introduced.

`/start/what-it-is-doing` **keeps its URL**, deliberately and finally — this
closes the slice-4 route question. Every human-visible surface already carries
the current title, and this static host only redirects by meta-refresh, so a
rename would have second-classed the old URL for a cosmetic gain; only the
stale `llms.txt` description was wrong, and that is fixed independently of the
route. Art. 22 GDPR is recorded as deliberate non-coverage — no public content
was added, and none is planned unless a concrete reader-facing gap appears.

Terminology is fixed by meaning, not enforced mechanically: `personal account`
/ `Privatkonto`, `consumer plan` / `Privatkundentarif`, `business plan` /
`Business-Tarif`; a credential as an issued instrument is `Zugangsmittel`,
distinct from the secret material itself (`Geheimnis`, a named token, key or
password) — the slice-5 log rule depends on the distinction holding; the Data
Flows connection concept is `Anbindung`, `Verbindung` stays for the network
sense; the reader-facing statutory name is `AI Act`. Generic *tier* has no
mandatory German word, so it cannot collide with the evidence method's
`Stufen`. No CI rule enforces any of it, now or planned.

Three questions the site pointed at without answering are now answered on the
pages that already owned their neighbourhood, and the gaps are closed rather
than queued:

- **Export and portability** — `getting-it-back-out` is the canonical owner. It
  distinguishes deletion, product export as a vendor-specific capability,
  GDPR Art. 20 portability (narrower than its name suggests, and not a
  workspace-export right), and keeping durable work product under the reader's
  own control.
- **Art. 6 legal bases** — `what-may-go-in` names the six Art. 6(1) bases at
  the level needed to make its existing "name the legal basis" instruction
  actionable. Consent is not presented as a default; legitimate interests is
  not automatic.
- **AI-assisted code rights** — `code-written-at-work` answers the narrow
  software-publishing case: originality/authorship and the right to exercise
  or license economic rights are separate questions; human contribution does
  not automatically mean ownership; generated material is not declared
  copyright-free as a blanket rule; the US Copyright Office's conclusions are
  cited and labelled as US law, never generalised into EU or Austrian law.
  General rights in arbitrary AI-generated output, beyond this software
  scope, remain future scope and are not implied to be settled by this.

`/start`'s sixth way of working (`Let it run without you`) now reaches
`/secure-setup` contextually — the last dead end the whole-site review found.
No operating route was created; live incident/failure detection stays future
scope, unchanged from slice 5. Memory or personalisation as a product setting
stays unowned and is future scope — the account-switch discovery question
itself (whether a reader who never grants an agent anything can find the
existing switches) was tested and judged sufficient, so it is not carried
forward as a structural problem.

German glossary pages stop presenting English prose as German: a section that
falls back to English says so and is tagged accordingly, and `observedIn`
values are localised. Six contextual glossary links were added at points where
a journey page hands the reader a term; this was not a bulk linking campaign.
The glossary index's HTML weight was reduced locally (EN 227,723 → 198,248
bytes; DE 238,353 → 207,118 bytes) without changing routes, search, filters or
the no-JS fallback — a measured result recorded here for history, not a
byte-count target for future pages. `us-cloud-and-the-gdpr` stopped
re-teaching the "EU-hosted" decoder `data-sovereignty` owns and links to it
instead; no further architecture followed from that fix.

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

## Working constraints for the seven-slice objective — expired, closed

Not decisions; they bound the seven-slice objective and expire with it now that
slice 7 has shipped. Kept here as the historical record of what governed the
work, not as active guidance. Where a constraint became a durable outcome, it
is restated in `decisions.md` or in *Settled* above — the terminology mapping,
the `/start/what-it-is-doing` route decision, and the structural-parallelism
finding all did.

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

Genuine remaining scope after slice 7 shipped. Findings slice 7 actually closed
— export and portability, the `/start/what-it-is-doing` route decision, the six
Art. 6(1) bases, AI-assisted code rights for software, the unattended-operation
route decision, and account-switch discovery — are not carried forward; their
outcomes are in `decisions.md`, 2026-08-27, and in *Settled* above.

- **Product memory as a setting has no fact owner.** `where-knowledge-lives`
  explains the mechanism; the switch itself needs per-vendor checking with
  sources, which is content scope rather than editing. Slice 7 deliberately did
  not add it. Future scope.
- **Multi-session reviewability has no public owner.** "Several AI sessions
  touched this repository — how does the work stay reviewable?" would be a
  fresh, bilingual Open Source article if built; `practical-ai-collaboration`
  is not it — see `decisions.md`, 2026-08-27.
- **Glossary housekeeping.** Contextual discovery is answered: six terms are now
  linked where a journey page hands the reader the word. What remains is the
  entries themselves — the hedged Claude-Desktop UI labels, `Browse Plugin`
  whose definition disagrees with its own name, and the `Codex` /
  `ChatGPT Codex` pair for one shifting product. A retire-or-verify pass, not
  editing. Exposure is limited: product labels are hidden on the index unless a
  reader asks for them.
- **Rights in AI output beyond code.** `code-written-at-work` now answers the
  code, publishing and licensing case. Generated text and images in general are
  a different question with a different audience, and no page raises it. Future
  scope.
- **Dead code left deliberately in place** — the `license` prop on
  `Base.astro`/`JsonLd.astro` (no caller passes it; the CC BY 4.0 default is
  correct on every page), the unused `mdx()` integration and its dependency,
  and the `docs/**` path trigger in `pages.yml` (a docs-only push deploys an
  unchanged site). None affects public output. Remove when something touches
  those files; `ui.docs` and the dead `CHECKED` export in `what-it-is-doing`
  went in slice 7 because it was editing those files anyway.
- **A second blog post makes `/blog` hard to reach.** The index is reachable
  only from its own article's byline. Fine for one post; worth revisiting
  before a second ships.

## Active constraints

- No application code during standard-definition phase.
- Keep `.ai/` files concise and low-overhead.
- Use the project branch prefixes (`feature/*`, `fix/*`, `docs/*`,
  `refactor/*`, `experiment/*`); do not use `codex/` branch names.
- Queued work stays queued. The current objective does not absorb it — `tasks.md`.
- For commit, push, and merge rules see the "Approval" section in `AGENTS.md`.
