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

## Backlog

- Write the next two blog posts: why removing names rarely produces anonymous data, and what "EU-hosted" actually answers
- Two remaining Start entry points: private use, and the one-person business
- Decide whether to render each glossary entry's `status` (30 draft, 36 review, 8 stable — the field exists in `site/src/data/terms.ts` but is not shown)
- Decide whether "AI Standard" needs a subtitle
- Implement the forkable-repository model described in `docs/forkable-repository.md`
- Iterate on the practical AI collaboration guide based on pilot usage
- Add an incident-response checklist when needed (the release checklist now lives in `docs/release-process.md`)
- Decide which CI checks to mark required in the ruleset now that `site-build` catches real breakage
