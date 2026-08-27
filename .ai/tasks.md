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
7. [x] Map the remaining page families onto the proven primitives and migrate
   them in reviewable groups. The four hubs and the primary navigation are done
   (#135–#140, PRs #142–#149). The Open Source reframing and the `/docs/**`
   publication decision shipped in slice 6 (#171).
8. [ ] Compare Inter Variable and IBM Plex Sans locally; treat any font asset or
   dependency as a separate approval and licence decision.
9. [x] Editorially reset the public homepage (PR #154). The page now says what
   AI Standard is and offers three direct reader questions instead of
   reproducing the four journeys. It is the editorial reference for the
   whole-site review.

- Legal review of the legal notice and privacy policy — both are live
- Verify the two `draft` blueprints in real projects before either can become `stable`
- Split the bilingual content modules into one file per locale — the structural cause of German that reads like translated English (slice 7 depends on this being decided, not on it being done)

## Whole-site implementation — seven slices, 2026-08-24 — all shipped, closed 2026-08-27

The review is done; these are what it converts into. One slice per branch, in
order. All seven are shipped; there is no slice 8. The decisions that
constrain them are in `decisions.md` (2026-08-24) and `state.md`; the findings
behind them are session evidence and are not restated here. "Approval" means
the change-scope rule in `AGENTS.md` applies before implementation, not merely
before merge.

Next objective, not a slice: the final overall site check across the shipped
seven-slice result — see `state.md`.

| # | Slice | Depends on | Approval | Status |
|---|---|---|---|---|
| 1 | Product identity and acute contradictions | — | yes | **done** (#158) |
| 2 | Global shell: footer and page-level onward path | 1 | yes | **done** (#161) |
| 3 | `/start` as one reader journey | 2 | no | **done** (#163) |
| 4 | `/data-flows` and Connect AI | 3 | partly | **done** (#165) |
| — | Homepage Correction Pass (between 4 and 5, not renumbered) | 4 | no | **done** (#167) |
| 5 | `/secure-setup` and verification | 4 | no | **done** (#169) |
| 6 | Law, About, Evidence, Reference and discovery | 2 | yes | **done** (#171) |
| 7 | Site-wide voice, German and quality enforcement | 3–6 | partly | **done** (#173) |

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
4. ~~**`/data-flows` and Connect AI.**~~ **Shipped in #165.**
   `/data-flows` explains reach as an intersection — what the product supports,
   what the connection offers, what the identity in the target system may do —
   and is the canonical owner of the mechanism. Both hub absolutes are gone; the
   fourth position is an identity rather than a person's account; the four
   positions are an explanation and not a published model. Connect AI answers
   *how* before governance and carries one worked example, with OAuth named as
   that example's mechanism rather than the general rule, and with no claim that
   every call is logged or that a connection runs as the human user. All five
   page-specific stage eyebrows are gone. `/start/what-it-is-doing` keeps its
   URL, loses six sections and opens on `Do you need a different tool — or a
   better setup?`; `where-knowledge-lives` received the request-size and
   three-routes material and dropped its overlapping list; `getting-it-back-out`
   is about deletion again and links to `data-sovereignty` rather than repeating
   it, so that page stays untouched; `what-you-agree-to` keeps its route at four
   unique ideas. Four child pages gained a `NextStep`. Both decisions are in
   `decisions.md` (2026-08-25). Header, footer, homepage, identity, routes,
   sitemap and redirects verified unchanged — 363 of 379 built pages
   byte-identical, and the 16 that changed are the ones this slice owns.

   *Handed to slice 5.* Removed from `connect-ai-to-tools-and-data.ts` and
   recoverable at commit `178e782`:
   `git show 178e782:site/src/data/data-flows/connect-ai-to-tools-and-data.ts`.
   Keys, EN and DE, with their destination:

   | Removed key | Destination |
   | --- | --- |
   | `controlSteps[1]` separate resources from tools, `[2]` narrow identity, `[3]` consequence behind approval | `before-you-grant-access` |
   | `controlSteps[0]` name one task and its manual baseline | `/secure-setup` hub, `Decide` — or drop |
   | `controlSteps[4]` log, stop and recover | `keeping-a-record`, and the `Take it back` step |
   | `boundaryQuestions[4]` `Recovery` / `Rückweg` | `/secure-setup`, `Take it back` |
   | `verificationChecks` — six of seven; the read-only one stayed | `checking-the-result` |
   | `securityEvidence`, `securitySource`, `sources.mcpSecurity` (OWASP) | travels with `controlSteps` |
   | `controlLabel`/`controlHeading`/`controlLead`, `verificationHeading`/`verificationLead` | rewrite on arrival; do not carry over |

   Fix on arrival: the German `controlHeading` says `Kontrollkreis`; the
   established term is `Regelkreis`. Not a handoff — `collaborationForms` and its
   labels were removed rather than moved, because `/start` owns forms of working,
   and the `Reference` glossary block went from nine terms to four with no
   heading.
~~**Homepage Correction Pass — between slice 4 and slice 5, not slice 8.**~~
   **Shipped in #167.** The PR #154 architecture is unchanged — hero, three
   direct reader questions, two hero CTAs, compact open-development close.
   What changed is editorial hierarchy and homepage-local composition; the
   shipped outcomes are in `state.md` under *Homepage Correction Pass* and are
   not restated here. Only `site/src/data/home.ts` and
   `site/src/components/HomeContent.astro` were touched: 377 of 379 built pages
   are byte-identical, header and footer byte-identical on the two that changed,
   routes and sitemap unchanged. Does not renumber slices 5–7. Closed — not
   carried forward as an active objective, and not reopened for preference or
   further polishing.

5. ~~**`/secure-setup` and verification.**~~ **Shipped in #169.** The hub
   opens on `How do you set limits that hold — and check what
   happened?` and carries four ordered reader questions plus two continuing
   concerns under `Once it is set up`; the six phase nouns are gone as a public
   spine. `Monitor` and `Take it back` were dead labels and now route to pages
   that own their parts — no new route was created. `before-you-grant-access`
   gained the first onward link it has ever had and three sections from the
   slice 4 handoff (whose rights it acts with, what an approval has to show,
   taking the access back); its enforcement rule moved from four screens down to
   the first. A rendered-review pass then cut a newly added subtitle, the
   account-switch section and a closing recap that had grown the page to 9+
   mobile screens without adding a reader-facing concept — the switches are
   `/data-flows`' facts and their universal-reader discovery is unsettled, so
   they were removed rather than relocated; see the queued finding in
   `state.md`. `checking-the-result` merged its two overlapping consequence
   ladders, had three absolutes corrected, and gained a section on work that
   repeats; `keeping-a-record` changed by two clauses and keeps its four items.
   Three decisions are in `decisions.md` (2026-08-26). Eight built pages changed
   and 371 are byte-identical; routes, sitemap, header, footer and homepage
   unchanged.
6. ~~**Law, About, Evidence, Reference and discovery.**~~ **Shipped in #171.**
   Four decisions in `decisions.md`, 2026-08-27. The 21 `/docs/**` routes
   (`/docs` + 20 children) and `/profiles` redirect one-to-one to their
   repository sources and the glob renderer is removed, so publication
   requires a deliberate page; `practical-ai-collaboration` stays a
   repository document, reversing its planned promotion. The method page
   moved to `/about/how-claims-are-checked`, owns dates, source authority and
   the correction path, and About keeps a bridge. The Law hub routes with
   the map first; the map page stopped restating trade-secret and Art. 4
   material its owners carry; `what-may-go-in` gained its first onward step;
   `data-sovereignty` links the transfer question to
   `us-cloud-and-the-gdpr`. `what-you-agree-to` narrowed to three unique
   ideas, handing the vendor-claim decoder to `where-knowledge-lives` — its
   post-slice-6 re-test is closed. Open Source lost the `No AI in this
   section` separation, is reached from Vibe Coding and About, and two
   articles gained the sibling step their closings promised. Glossary is one
   name, its index honest about linking, its count line filter feedback
   only. `/impressum` and `/datenschutz` land on the German pages; the
   licence sentences dropped their public-`/docs/` clauses; `llms.txt`
   matches the shipped architecture. URLs beyond the approved retirements,
   header, footer, homepage and canonical identity verified unchanged before
   merge.
7. ~~**Site-wide voice, German and quality.**~~ **Shipped in #173.** Only after
   ownership had stabilised.
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
   slice 3 (`decisions.md`, 2026-08-25). Slice 4 removed the five Connect AI
   eyebrows, so nothing public carries stage vocabulary any more. `Stop
   condition` / `Stoppbedingung` is not part of it and is not debt — it names a
   reader's question rather than a position in the product model.
   Implemented on `feature/slice-7-site-quality`, shipped as #173 (implementation
   commit `db9c134`, merge commit `6d81922`, 2026-08-27). Four decisions in
   `decisions.md`, 2026-08-27. Stale cross-references gone — the
   retired six-step lifecycle in a next step, four labels naming the Law page by
   its old count-led title, three `llms.txt` entries describing pre-slice pages,
   and an unverifiable "fourteen things" in metadata. Ten EN/DE parity defects
   corrected, so the German makes the same claim as the English; roughly two
   dozen German grammar defects and a further set of naturalness fixes, none of
   them broad rewrites. Two headings changed and no others: a count that
   disagreed with its own figure, and a negation the German already resolved.
   Terminology fixed by meaning with no CI rule. `/start` card six reaches
   `/secure-setup`, the last dead end. `us-cloud-and-the-gdpr` stopped
   re-teaching the decoder `data-sovereignty` owns. Six contextual glossary
   links, and German glossary pages now label an English fallback instead of
   presenting it as German. Three approved additions on existing owners —
   export and portability, the six Art. 6(1) bases, AI-written code — and no new
   route, component or concept. Both slice-4 findings are closed:
   `/start/what-it-is-doing` keeps its URL deliberately, and export has an owner.

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
- `site/INFORMATION_ARCHITECTURE.md`'s footer table still describes the two-group shape superseded by the 2026-08-27 three-group footer decision (`decisions.md`); update the table to match
- **DEFECT, release-readiness pass 2026-08-27:** `site/src/data/privacy.ts` names Cloudflare and GitHub Pages as the parties that log a visitor's IP address, but the live response chain (`via: 1.1 varnish`, `x-served-by: cache-vie*`, `x-fastly-request-id`) shows GitHub Pages' CDN runs on Fastly. `docs/website-audit.md`'s own methodology requires naming every party in the chain. Smallest fix: add one clause to the existing GitHub Pages sentence in both locales — e.g. EN "GitHub, Inc., part of Microsoft (United States), hosts the site through GitHub Pages, whose content delivery network runs on Fastly, Inc. (United States)." / DE the equivalent clause naming Fastly. This is a privacy-policy content change and was not made in the release-readiness pass because it is a reserved content/legal decision, not a mechanical fix.
