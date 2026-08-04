# Tasks

> If this file conflicts with current git state (branch, PRs, commits), trust git.

## Active

- Legal review of the legal notice and privacy policy before `feature/site-content-architecture` merges
- Decide one canonical set of profile names (`docs/standard.md` and `README.md` vs `docs/profiles.md` and the site)
- Separate the two identities: the site as the general knowledge layer, the project standard as a marked developer area beneath it
- Split the bilingual content modules into one file per locale — the structural cause of German that reads like translated English

## Backlog

- Write the next two blog posts: why removing names rarely produces anonymous data, and what "EU-hosted" actually answers
- Two remaining Start entry points: private use, and the one-person business
- Decide whether to render each glossary entry's `status` (30 draft, 36 review, 8 stable — the field exists in `site/src/data/terms.ts` but is not shown)
- Decide whether "AI Standard" needs a subtitle
- Implement the forkable-repository model described in `docs/forkable-repository.md`
- Iterate on the practical AI collaboration guide based on pilot usage
- Add optional release and incident-response checklists when needed
- Decide CI quality gate depth for documentation checks (currently deferred)
