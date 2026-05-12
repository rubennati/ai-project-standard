# Contributing

Thank you for contributing to AI Project Standard.

## Scope

This repository defines project structure and collaboration standards. Contributions should improve documentation, workflow clarity, and maintainability.

## Workflow

1. Create a short-lived branch from `main`.
2. Keep pull requests focused and easy to review.
3. Link related issues where applicable.
4. Request review before merge.

## Expectations

- No direct commits to `main`
- Prefer incremental changes
- Keep language clear and internationally understandable
- Update relevant `.ai/` workspace files when process or decision context changes

## Pull request checklist

- Problem and scope are clearly described
- Documentation is updated where needed
- Changes follow branch naming and workflow rules
- Human review requested

## Versioning

This repository is itself a versioned standard. Releases follow Semantic Versioning, applied to the standard's adopter-facing surface — not to internal file structure.

- **MAJOR** — renaming or removing a required file or profile path; changing the meaning of a profile; redefining `AGENTS.md` core rules (approval model, branch policy). Adopters need a migration step.
- **MINOR** — adding new files, profiles, optional documents, new CI checks that don't fail existing adopters, new AI tool support. Adopters can pull in changes selectively.
- **PATCH** — wording fixes, typo corrections, internal restructuring of existing files that doesn't change adopter-facing paths.

Every MAJOR release lists adopter-impacting changes under a `### Breaking changes for adopters` subsection in `CHANGELOG.md`.

See [docs/adoption.md](docs/adoption.md) for the recommended update workflow for downstream adopters.
