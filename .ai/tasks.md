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
| 3 | `/start` as one reader journey | 2 | no | **next** |
| 4 | `/data-flows` and Connect AI | 2 | partly | blocked |
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
3. **`/start` as one reader journey.** Not a rewrite of `/start` in place: a
   reader moves from a prerequisite role question, to choosing a useful way of
   working with AI, into concrete work — without first understanding the
   project's collaboration model. The hub, the employee and decision-maker
   pages and Vibe Coding, inspected together; the mechanism page only far
   enough to hand its ownership to `/data-flows`. URLs unchanged unless a
   separately approved decision changes them.
   *Hub.* Prerequisite role questions resolve before the choice of working
   form; the six ways become situations a reader recognises, named for what
   they're useful for rather than the internal product model; the page spends
   less space on ownership/access/checking before saying what each form does;
   the mobile intro shortens; `Three questions this page does not answer` /
   its German equivalent does not survive as how the page handles its own
   limits; the page helps a reader choose rather than teaches the taxonomy.
   *Employee.* Keeps its H1 — `Can I use AI at work?` / `Darf ich KI im Job
   verwenden?` — and its strength at resolving permission. Makes the turn from
   permission settled to what a reader can actually do and how to work with
   AI; does not become a second compliance page.
   *Decision maker.* Reframed as "I am responsible for AI use by others —
   where do I start?", not one of the six ways of working. Keeps its legal
   facts but gives a usable starting point, not only a compliance backlog.
   *Vibe Coding.* High priority. Keeps its real usefulness and the balanced
   `What the AI does` material. Fixes the shape where it promises an
   Explore/Prototype reader and then increasingly serves only a
   production/control reader — capability and usefulness must not disappear
   under the later risk material. Its page-specific stage eyebrows
   (`Möglichkeit` / `Zusammenarbeit`) are this slice's to remove; the page
   should not expose the internal stage model merely because it is
   internally structured by it.
   *`ArtifactLink` on Vibe Coding — explicit, not deferred to slice 7.* At
   375 px the `COPYABLE ARTIFACT` / `Zum Übernehmen` header and the `DRAFT`
   badge visually outrank the linked title itself. Not a product-stage leak,
   not covered by #145 — the general problem of internal artifact/status
   furniture consuming reader attention. Slice 2 deliberately left
   `ArtifactLink` untouched. Decide from the reader's job, not a pre-decided
   outcome: whether the artifact-type label renders at all; whether `DRAFT`
   carries real reader value and if so how prominently; whether the linked
   title becomes the primary visual object.
4. **`/data-flows` and Connect AI.** One ownership problem. Stop teaching the
   four-axis model as the hub's public language; make `connect-ai-to-tools-and-data`
   answer *how*, cut its density, add a concrete end-to-end example, and move its
   control-loop and verification material to slice 5. `/data-flows` becomes
   canonical for the model → product → connector → target explanation. Reconcile
   training, consent, deletion and sovereignty to single owners. Keep
   `training-and-retention` substantially intact.
   *Blocked:* retiring `what-you-agree-to` removes a published URL — `state.md`.
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
   partly done: slice 2 removed the shared-primitive half — `Next step /
   Control`, `Decision path` / `Entscheidungsweg`, and the `ProductStage` copy
   table behind them. What remains is page copy: the section eyebrows on Vibe
   Coding (slice 3) and Connect AI (slice 4), including
   `Reference` / `Nachschlagen`, which the issue text omits. Its text also
   records one string wrongly — the rendered label was `Next step / Control`,
   not `Collaboration`. `Copyable artifact` / `Zum Übernehmen` is not a stage
   leak and is queued in slice 3 above.

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
