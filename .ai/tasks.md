# Tasks

> If this file conflicts with current git state (branch, PRs, commits), trust git.

## Active

- Implement and verify the approved dependency-free theme foundation before changing content routes
- Define the page-primitives system, then prototype the MCP path
- Legal review of the legal notice and privacy policy — both are live
- Verify the two `draft` blueprints in real projects before either can become `stable`
- Split the bilingual content modules into one file per locale — the structural cause of German that reads like translated English

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
