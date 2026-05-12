# Adoption

How to adopt this standard in a new or existing repository. Three paths, one per profile.

See [profiles.md](./profiles.md) for the exact file lists and [standard.md](./standard.md) for the conceptual definition.

## Adopt OSS-only profile

Use this when you want a credible open-source baseline without AI-specific files.

1. **Start from the template.** Click "Use this template" on the repository's GitHub page (available from v0.2.0).
2. **Remove AI-specific paths.** Delete `AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md`, `.cursor/`, `.ai/`, `docs/ai-workspace-layer.md`, `docs/practical-ai-collaboration.md`, `docs/ai-tools.md`.
3. **Adjust the README.** Remove the AI-workspace and AI-collaboration sections.
4. **Replace project metadata.** Update name, description, license holder, security contact, roadmap, and changelog.
5. **Configure CI.** Keep `.github/workflows/ci.yml`; the structural checks still apply.
6. **Apply branch protection.** Follow `docs/branch-protection.md`.

## Adopt AI-only profile

Use this when you already have an open-source or internal repository and want to introduce structured Human-AI Collaboration without re-doing the OSS scaffolding.

1. **Copy the AI files into your existing repository.** Copy `AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md`, `.cursor/rules/00-project.mdc`, the full `.ai/` directory, and the AI docs (`docs/ai-workspace-layer.md`, `docs/practical-ai-collaboration.md`, `docs/ai-tools.md`).
2. **Localize `AGENTS.md`.** Adjust the approval rules, branch-naming conventions, and any references to match your existing workflow.
3. **Seed `.ai/`.** Replace placeholder content in `.ai/project-brief.md`, `.ai/state.md`, and `.ai/decisions.md` with your project's actual context.
4. **Add a short pointer in your existing `README.md`.** Mention `AGENTS.md` and `.ai/` so contributors and AI tools discover them.
5. **Optional: pull in `docs/standard.md`, `docs/profiles.md`, and `docs/adoption.md`** if you want to expose the standard's structure to your team.

## Adopt combined profile

Use this when you are starting a new project and want both baselines from day one.

1. **Use the GitHub template.** Click "Use this template" to create your repository from this one.
2. **Replace project metadata.** Name, description, license holder, security contact, roadmap.
3. **Seed `.ai/`.** Update `project-brief.md`, `state.md`, and `decisions.md` with your project's reality.
4. **Apply branch protection** per `docs/branch-protection.md`.
5. **Decide on AI tools.** Keep the pointer files for the tools you use; delete the others (or keep them as future-ready stubs — they are small).
6. **Iterate.** Open issues and PRs as normal; the standard is a starting point, not a constraint.

## Updating from a previous version

The standard follows Semantic Versioning (see `CONTRIBUTING.md` → Versioning).

| From | To | Action |
|---|---|---|
| `v0.1.0` | `v0.2.0` | Pull in new files: `docs/standard.md`, `docs/profiles.md`, `docs/adoption.md`, `docs/ai-tools.md`, `.cursor/rules/00-project.mdc`. Update `README.md` and `AGENTS.md` per upstream diff. No path renames. |

Recommended workflow for adopters tracking the standard:

1. Add this repository as a remote: `git remote add upstream https://github.com/rubennati/ai-project-standard.git`.
2. Fetch a release tag: `git fetch upstream --tags`.
3. Diff the desired version against your current adoption: `git diff <your-base>..upstream/v0.2.0 -- AGENTS.md docs/ .ai/`.
4. Cherry-pick or copy the changes that apply to your project. Skip the rest.

Breaking changes for adopters are always called out in the corresponding `CHANGELOG.md` entry under `### Breaking changes for adopters`.
