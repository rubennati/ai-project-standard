# Tasks

> If this file conflicts with current git state (branch, PRs, commits), trust git.

## Active

### Website product implementation

The destination and admission test live in `docs/purpose.md` and
`docs/website-product-brief.md`; the approved structure and visual direction
live in `site/INFORMATION_ARCHITECTURE.md` and `site/THEME_DIRECTION.md`. This
list records execution order rather than restating those decisions.

1. [x] Establish the unified website product, content audit, stable-route-first
   information architecture and native theme shell.
2. [x] Define the page-primitives system and the five page jobs: decision path,
   explanation, implementation guide, reference and editorial perspective.
   Shared primitives cover answer, fit, operation, benefits and risks, action,
   verification, technical depth, evidence and the next step.
3. [x] Build “Connect AI to tools and data” as the complete prototype path,
   using MCP as the technical example rather than the reader's goal.
4. [x] Use Vibe Coding as the second template test across Explore, Prototype,
   Deliver and Operate.
5. [x] Make Blog visibly editorial and Law visibly reference-led; replace their
   weak landing-page copy and remove public roadmap filler such as “Planned” or
   “More is coming”.
6. [x] Verify the complete system on desktop and mobile, in English and German,
   including accessibility, evidence treatment and zero horizontal overflow.
   Structural and technical verification is complete across the built public
   site: responsive layout, headings, links and anchors, language and hreflang,
   accessibility basics, evidence treatment and rendering. This does not mean
   every public sentence has received editorial review.
7. [ ] Map the remaining page families onto the proven primitives and migrate
   them in reviewable groups. The four hubs and the primary navigation are done
   (#135–#140, PRs #142–#149). What is left — the Open Source reframing and the
   `/docs/**` publication decision — is carried by slice 6 below, which also
   holds their approval requirement.
8. [ ] Compare Inter Variable and IBM Plex Sans locally; treat any font asset or
   dependency as a separate approval and licence decision.
9. [x] Editorially reset the public homepage (PR #154). The page now says what
   AI Standard is and offers three direct reader questions instead of
   reproducing the four journeys. It is the editorial reference for the
   whole-site review.

- Legal review of the legal notice and privacy policy — both are live
- Verify the two `draft` blueprints in real projects before either can become `stable`
- Split the bilingual content modules into one file per locale — the structural cause of German that reads like translated English (slice 7 depends on this being decided, not on it being done)

## Whole-site implementation — seven slices, 2026-08-24

The review is done; these are what it converts into. One slice per branch, in
order. The decisions that constrain them are in `decisions.md` (2026-08-24) and
`state.md`; the findings behind them are session evidence and are not restated
here. "Approval" means the change-scope rule in `AGENTS.md` applies before
implementation, not merely before merge.

| # | Slice | Depends on | Approval | Status |
|---|---|---|---|---|
| 1 | Product identity and acute contradictions | — | yes | **done** (#158) |
| 2 | Global shell: footer and page-level onward path | 1 | yes | **done** (#161) |
| 3 | `/start` as one reader journey | 2 | no | **done** (#163) |
| 4 | `/data-flows` and Connect AI | 3 | partly | **next** |
| 5 | `/secure-setup` and verification | 4 | no | not started |
| 6 | Law, About, Evidence, Reference and discovery | 2 | yes | blocked |
| 7 | Site-wide voice, German and quality enforcement | 3–6 | partly | not started |

1. ~~**Product identity and acute contradictions.**~~ **Shipped in #158.**
   `site/src/data/identity.ts` owns one product sentence per locale; the
   homepage, the fallback metadata, the footer tagline, the manifest and
   `llms.txt` all answer "what is this" from it. The `Austria first, then the
   EU` scope claim is withdrawn and Law metadata carries neutral EU-law scope.
   `/secure-setup` step 6 no longer points at the Connect page; it has no
   destination, because no page answers the revocation reader job on its own
   terms — slice 5 owns building that. A conformance check scoped to
   `manifest.webmanifest` and `llms.txt` keeps the two static restatements
   honest. Homepage copy, header, footer structure, routes and sitemap
   unchanged.
2. ~~**Global shell.**~~ **Shipped in #161.** The footer is two groups —
   `Terms & law` / `Begriffe & Recht` and `About AI Standard` / `Über AI
   Standard` — over an unheaded reporting row and a legal bar; Blog,
   Contribute, the human `security.txt` link, the second name for the
   repository and the identity tagline are gone, and the four header journeys
   stayed out. `RelatedNextStep` became `NextStep` with a contextual contract
   and no product stage; `PageIntroduction` stopped rendering the page job.
   About gained the one `NextStep` instance, so the blog article keeps an
   inbound path. Both decisions are in `decisions.md` (2026-08-24). Header,
   homepage, routes, sitemap and `security.txt` verified unchanged before
   merge. Slices 3–6 still populate each family's actual destinations.
3. ~~**`/start` as one reader journey.**~~ **Shipped in #163.** `/start` moves
   from a prerequisite role question to a useful way of working to concrete
   work. Employee and Decision Maker resolve before the choice, not as two of
   the six working forms; the six are named for situations a reader recognises
   — `Ask a question` through `Let it run without you` — not the internal
   Chat/Assistant/Agent taxonomy, and each carries `Good for`. The generic
   access and verification fields left the cards for `/data-flows` and
   `/secure-setup`, which own them; `Three questions this page does not
   answer` is gone. Employee turns from permission settled to what AI can help
   with; Decision Maker opens with finding out what is already in use, then
   the Art. 4 duty. Vibe Coding treats Explore and Prototype as complete
   outcomes, lost its `Möglichkeit` / `Zusammenarbeit` eyebrows and per-card
   stage tag, and `ArtifactLink` leads with the artifact — `COPYABLE ARTIFACT`
   and the `DRAFT` pill no longer render; blueprint status reaches the reader
   as what it means, held to the canonical manifest by a CI assertion. Both
   decisions are in `decisions.md` (2026-08-25). URLs, header, footer,
   homepage and sitemap verified unchanged before merge.
   *Handed to slice 4, not yet done.* `/start/what-it-is-doing` keeps its
   mechanism prose — sections 0–4 and the reach figure — untouched, stops
   being promoted from `/start`, and points at `/data-flows` with a bridge and
   a `NextStep`. The five sections are named in that module's comment as the
   slice 4 payload.
4. **`/data-flows` and Connect AI.** One ownership problem, finished in two
   parts: the hub's own teaching, and what slice 3 handed over.
   *Data Flows hub.* Stop teaching the four-layer model as the page's public
   language — it should explain the mechanism, not become a second taxonomy a
   reader has to learn. The useful distinction (model → product → connector →
   target system) stays; it becomes canonical here for
   `what-it-is-doing`'s reconciled material. Fix the current overstatement that
   what a system can reach depends on the account and the connection "not on
   which product you chose" (`reach-model.ts`) — product capabilities do
   matter, and the layered distinction has to hold without erasing that.
   *Mechanism reconciliation from `/start/what-it-is-doing`.* Sections 0–4 and
   the reach figure are the payload, marked in that file's own comment. Choose
   one canonical home per concept rather than copying whole sections onto
   `/data-flows` beside what it already says — the hub's own opening and the
   handed-over prose cover some of the same ground with different nouns, which
   is exactly the duplication ownership is meant to remove. Preserve the
   strongest explanations; do not rewrite prose that already earns its place.
   After the move, `/start/what-it-is-doing` keeps only the Start-owned
   working-shape material (sections 5–6) and an honest bridge. URL unchanged
   unless a separately approved route decision requires it.
   *`connect-ai-to-tools-and-data` — high priority.* 15.4 mobile screens
   English, 16.7 German. Answers boundary and governance better than the
   reader's actual *how do I connect this?* question; no concrete end-to-end
   worked example. Cut the density and add one. Its page-specific stage
   eyebrows are still live and are this slice's to remove: `Possibility` /
   `Möglichkeit`, `Collaboration` / `Zusammenarbeit`, `Reach` / `Reichweite`,
   `Control` / `Kontrolle`, `Reference` / `Nachschlagen` — the last of which
   issue #145's own text omits. The shared `NextStep`/`ProductStage` leak is
   already fixed (slice 2); what remains here is page-specific public copy,
   and issue #145 is not fully resolved until it is. Move the control-loop and
   verification material this page currently carries to slice 5.
   *Single owners.* Reconcile training, consent, deletion and sovereignty
   across `training-and-retention`, `where-knowledge-lives`,
   `what-you-agree-to`, `getting-it-back-out` and `data-sovereignty` to one
   owner each — the mapping is in the audit's duplication table.
   `/data-flows/training-and-retention` was found strong by the audit; use it
   as the quality reference and do not rewrite it for consistency.
   *Not blocked as a whole.* The open question in `state.md` is retiring
   `what-you-agree-to`, which removes a published URL; it blocks that route
   decision only. The mechanism ownership, the Connect AI rewrite, the
   Data Flows hub correction and the single-owner reconciliation do not depend
   on it and are not solved by it.
5. **`/secure-setup` and verification.** A reader-recognisable object and
   opening; the sequence stays, the phase nouns stop being the public spine
   where they read as project vocabulary; `Monitor` and `Take it back` get real
   coverage; absorb what slice 4 hands over; `before-you-grant-access` serves the
   broader job it already holds. `checking-the-result` and `keeping-a-record`
   keep their content.
6. **Law, About, Evidence, Reference and discovery.** Law hub reader job;
   `what-may-go-in` ownership; `four-separate-questions` framing and its
   duplicated legal facts; one owner for AI Act Art. 4; About versus Evidence
   Method ownership, with Evidence Method treated as trust content; glossary
   naming and discovery; `/docs/**` publication becomes explicit;
   `practical-ai-collaboration` preserved and later promoted; `/profiles`;
   `/open-source/**` reconnected from development content with the
   `No AI in this section` separation removed; `/impressum` and `/datenschutz`
   redirected to their German counterparts; the legal-notice licence sentence
   follows whatever `/docs/**` becomes.
   *Blocked:* two open questions in `state.md`.
7. **Site-wide voice, German and quality.** Only after ownership has stabilised.
   Negation-heavy headings, count language, meta copy, capability/limitation
   balance, the German defects the review named, `du`/`man` consistency, and a
   terminology mapping by meaning before any CI rule is added. Issue #145 is
   not fully resolved: slice 2 removed the shared-primitive half — `Next step /
   Control`, `Decision path` / `Entscheidungsweg`, and the `ProductStage` copy
   table behind them — and slice 3 removed Vibe Coding's page-specific
   `Möglichkeit` / `Zusammenarbeit` eyebrows. What remains is Connect AI's
   page-specific eyebrows (slice 4) — `Possibility`, `Collaboration`, `Reach`,
   `Control`, `Reference`, including `Reference` / `Nachschlagen`, which the
   issue text omits. Its text also records one string wrongly — the rendered
   label was `Next step / Control`, not `Collaboration`. `Copyable artifact` /
   `Zum Übernehmen` was never a stage leak and was resolved separately in
   slice 3 (`decisions.md`, 2026-08-25).

**Not rewritten for uniformity** — the review found these strong, and a slice
that touches them changes only what its own goal requires: the homepage;
`/data-flows/training-and-retention`; `/secure-setup/checking-the-result` and
the four items in `keeping-a-record`; `/law/what-may-go-in` and its H1 in both
languages; the three `/open-source` articles; `/blog/before-you-press-enter`;
About's body prose; the evidence-label system and its build-time enforcement;
`/use-cases` card six and its twelve concrete examples.

## Coherence audit — 2026-08-09

Read the whole repository against its own rules. Twelve findings, ordered by how
badly they mislead. Nothing here is fixed yet.

1. ~~`README.md` still advertises "Available as a GitHub template from v0.2.0".~~ **Resolved in #88** — the template forward-promise and the "full template" lede phrase are gone. A positive degit/adoption story still waits on the distribution decision.
2. ~~`docs/practical-ai-collaboration.md` contradicts `AGENTS.md`.~~ **Resolved 2026-08-09** — `docs/ai-workspace-layer.md` now holds the division and both point at it. It says not to treat `.ai/state.md` as the source of truth and not to maintain those files as a parallel tracker; `AGENTS.md` requires reading `.ai/state.md` before every task and updating it after every meaningful change. One of the two is wrong and both are shipped.
3. ~~`docs/profiles.md` lists this project's own meta-documentation~~ **Resolved 2026-08-09** — profiles superseded by blueprints, `check-profiles.sh` removed. Originally: — `standard.md`, `profiles.md`, `adoption.md` — as files an adopter's repository should contain, and `check-profiles.sh` enforces it. That is the norm/instance confusion in its purest form.
4. ~~Profile names disagree.~~ **Resolved 2026-08-09** — one set of names again, the blueprint ids. Originally: `README.md` and `docs/standard.md` say Open Source / Human-AI Collaboration / Combined; `docs/profiles.md` and the site say OSS-only / AI-only / Combined. Open since May.
5. `AGENTS.md` says projects should expose `lint`, `test`, `build` and `typecheck` at the root. This repository exposes none of them at the root — they exist only inside `site/package.json`. We do not follow our own rule.
6. ~~`.ai/quality-gates.md` gates nothing.~~ **Resolved 2026-08-09** — a table of seven gates with the command for each, every one run to confirm it works, plus the three known holes stated rather than hidden.
7. ~~No claim in `docs/` carries a source or a check date.~~ **Resolved 2026-08-09** — `Sources checked:` lines added and enforced by `check-conformance.sh`. Originally: `security-baseline.md` and `open-source-project-standard.md` state what GitHub, the OpenSSF and others do, unsourced, some of it since May.
8. ~~`docs/standard.md` claims every file, workflow and convention runs here "not just on paper".~~ **Resolved in #88** — bounded to the blueprints the repository has adopted; the rest are proposals.
9. ~~`.ai/setup-interview.md` is five thin questions.~~ **Resolved 2026-08-09** — the questions live once, in the blueprint's `INIT.md`; this file now holds this project's answers, so the repository shows a filled-in workspace instead of describing one. Earlier note: — `index.md` lists it; it is still five thin questions and needs to become the initialisation interview. Five thin questions, and it is the seed of the initialisation interview the blueprints need.
10. ~~`.ai/domains/*.md` are three to five lines and `coding.md` denies this repository has code.~~ **Resolved 2026-08-09** — rewritten to the level the blueprint ships, and `coding.md` now names the 90 TypeScript and Astro files it had been denying.
11. `.ai/risks.md` lists three generic risks and has never been updated.
12. ~~Third naming of the taxonomy in `docs/index.md`.~~ **Resolved 2026-08-09** — sections renamed to what they hold. Originally partly addressed — `docs/index.md` now opens with Purpose. The grouping still names the profile taxonomy: it groups documents under "Open Source baseline" and "Human-AI Collaboration baseline" — the profile taxonomy again, a third naming of the same split.

## Rule layer — resolved 2026-08-09

- `docs/getting-started.md` addressed contributors to *this* repository instead
  of someone taking the standard. Rewritten around the destination, the two
  blueprints, and a fourth step that matters more than the first three: open a
  pull request that deliberately breaks a rule and confirm CI refuses it.
  A blueprint whose gates do not fire is decoration.
- `docs/open-source-project-standard.md` listed the same files the blueprint now
  ships. It keeps only what a set of files cannot carry — governance by scale,
  health metrics, trust signals in order of effort, and what not to adopt — and
  points at the blueprint for the artifacts.

## Backlog

- Payload workflow SHAs drift: Dependabot only reads the root `.github/workflows`, so the pinned actions inside `blueprints/*/files/.github/workflows/` go stale silently. Add a check that they equal the root's pins.

- Write the next two blog posts: why removing names rarely produces anonymous data, and what "EU-hosted" actually answers
- Two remaining Start entry points: private use, and the one-person business
- Decide whether to render each glossary entry's `status` (138 review, 5 stable — the field exists in `site/src/data/terms.ts` but is not shown)
- Decide whether "AI Standard" needs a subtitle
- Implement the forkable-repository model described in `docs/forkable-repository.md`
- Iterate on the practical AI collaboration guide based on pilot usage
- Add an incident-response checklist when needed (the release checklist now lives in `docs/release-process.md`)
- Decide which CI checks to mark required in the ruleset now that `site-build` catches real breakage
