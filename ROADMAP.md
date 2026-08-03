# Roadmap

## Near term

- Validate repository baseline in pilot projects
- Refine `.ai/` templates based on real usage
- Improve quality gate definitions and examples
- Keep operator-specific legal data out of a forked working tree, so nobody
  republishes someone else's imprint by accident. Two candidate approaches, to
  be decided: encrypt whole legal documents with `age` and decrypt them in the
  deploy job, or ship placeholder values in `site/src/data/site.ts` and inject
  the real ones from repository secrets at build time. The second fits this
  repository's shape — the operator data is six scalars, not a document — and
  needs no key handling; the first is the better fit once whole pages contain
  operator-specific prose. Either way the live site stays publicly readable:
  an imprint is legally required to be public, so this is fork hygiene, not
  secrecy.

## Mid term

- Add domain-specific extensions for different project types
- Publish versioned guidance for adoption and migration

## Long term

- Maintain a stable collaboration standard across human and AI tooling changes
