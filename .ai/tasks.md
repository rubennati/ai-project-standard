# Tasks

> If this file conflicts with current git state (branch, PRs, commits), trust git.

## Active

- Legal review of the legal notice and privacy policy — both are live
- Decide one spine: four pillars vs three layers plus AI as a cross-cutting band (`research/open-source/STATUS.md`)
- Verify the open-source research and publish it as a new site area — six known problems listed in its `STATUS.md`
- Add "branch is not environment" to `docs/git-workflow.md` — the most useful single item from the research
- Decide one canonical set of profile names (`docs/standard.md` and `README.md` vs `docs/profiles.md` and the site)
- Separate the two identities: the site as the general knowledge layer, the project standard as a marked developer area beneath it
- Split the bilingual content modules into one file per locale — the structural cause of German that reads like translated English

## Site structure — noted, not started

Observations from 2026-08-09. Recorded so they are not lost. None of these is
to be acted on before the structure is decided as a whole.

- The site has no stated principle for its top level, so every new area is an
  ad-hoc decision. Needs one considered pass and a roadmap, not a rebuild.
- `/docs` reads as a second website inside the website — AI Project Standard,
  Profiles, Getting Started sit there with their own logic and no bridge from
  the rest of the site.
- `Profiles` has its own footer entry *and* exists under `/docs`. The footer
  groups need the same pass: what belongs in Project, and why.
- The glossary is thin. Each term needs more than a short definition — more
  explanation, examples, visual presentation — and "common confusion" belongs
  further down the page, not near the top.
## Coherence audit — 2026-08-09

Read the whole repository against its own rules. Twelve findings, ordered by how
badly they mislead. Nothing here is fixed yet.

1. ~~`README.md` still advertises "Available as a GitHub template from v0.2.0".~~ **Resolved in #88** — the template forward-promise and the "full template" lede phrase are gone. A positive degit/adoption story still waits on the distribution decision.
2. ~~`docs/practical-ai-collaboration.md` contradicts `AGENTS.md`.~~ **Resolved 2026-08-09** — `docs/ai-workspace-layer.md` now holds the division and both point at it. It says not to treat `.ai/state.md` as the source of truth and not to maintain those files as a parallel tracker; `AGENTS.md` requires reading `.ai/state.md` before every task and updating it after every meaningful change. One of the two is wrong and both are shipped.
3. `docs/profiles.md` lists this project's own meta-documentation — `standard.md`, `profiles.md`, `adoption.md` — as files an adopter's repository should contain, and `check-profiles.sh` enforces it. That is the norm/instance confusion in its purest form.
4. Profile names disagree: `README.md` and `docs/standard.md` say Open Source / Human-AI Collaboration / Combined; `docs/profiles.md` and the site say OSS-only / AI-only / Combined. Open since May.
5. `AGENTS.md` says projects should expose `lint`, `test`, `build` and `typecheck` at the root. This repository exposes none of them at the root — they exist only inside `site/package.json`. We do not follow our own rule.
6. `.ai/quality-gates.md` is five prose statements and gates nothing, while `docs/standard.md` promises "automated quality gates".
7. No claim in `docs/` carries a source or a check date. `security-baseline.md` and `open-source-project-standard.md` state what GitHub, the OpenSSF and others do, unsourced, some of it since May.
8. ~~`docs/standard.md` claims every file, workflow and convention runs here "not just on paper".~~ **Resolved in #88** — bounded to the blueprints the repository has adopted; the rest are proposals.
9. ~~`.ai/setup-interview.md` exists and nothing references it.~~ **Partly resolved 2026-08-09** — `index.md` lists it; it is still five thin questions and needs to become the initialisation interview. Five thin questions, and it is the seed of the initialisation interview the blueprints need.
10. `.ai/domains/*.md` are three to five lines each and carry no actionable guidance. `coding.md` states this repository has no application code, which stops being true as blueprint payloads accumulate.
11. `.ai/risks.md` lists three generic risks and has never been updated.
12. `docs/index.md` groups documents under "Open Source baseline" and "Human-AI Collaboration baseline" — the profile taxonomy again, a third naming of the same split.

## Backlog

- Payload workflow SHAs drift: Dependabot only reads the root `.github/workflows`, so the pinned actions inside `blueprints/*/files/.github/workflows/` go stale silently. Add a check that they equal the root's pins.

- Write the next two blog posts: why removing names rarely produces anonymous data, and what "EU-hosted" actually answers
- Two remaining Start entry points: private use, and the one-person business
- Decide whether to render each glossary entry's `status` (30 draft, 36 review, 8 stable — the field exists in `site/src/data/terms.ts` but is not shown)
- Decide whether "AI Standard" needs a subtitle
- Implement the forkable-repository model described in `docs/forkable-repository.md`
- Iterate on the practical AI collaboration guide based on pilot usage
- Add an incident-response checklist when needed (the release checklist now lives in `docs/release-process.md`)
- Decide which CI checks to mark required in the ruleset now that `site-build` catches real breakage
