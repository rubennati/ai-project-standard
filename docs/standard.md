# The AI Project Standard

A starting baseline for open-source projects that use AI. Four pillars — human-AI collaboration, open-source operations, engineering operations, knowledge and documentation. Three adoption profiles — Open Source, Human-AI Collaboration, Combined.

This document is the inventory: pillars, profiles, adoption paths, mandatory files, optional add-ons, and the versioning policy. Deeper reasoning, architecture rationale, comparisons, and use-case walk-throughs live on the [knowledge layer](https://ai-standard.rubennati.at).

## Four pillars

Each pillar is delivered as files, conventions, and workflows in the repository, with long-form explanations on the knowledge layer.

1. **Human-AI collaboration** — `AGENTS.md` as the source of truth, multi-tool pointer files (Claude Code, OpenAI Codex, GitHub Copilot, Cursor), the `.ai/` operational workspace, the practical-collaboration guide.
2. **Open-source operations** — `README`, `LICENSE`, `CONTRIBUTING`, `CODE_OF_CONDUCT`, `SECURITY`, `SUPPORT`, issue and PR templates, `CODEOWNERS`, `FUNDING`, `CITATION`.
3. **Engineering operations** — CI workflows (lint, link check, profile completeness), versioning policy, Git workflow, branch protection, dependency automation, security baseline, OpenSSF Scorecard.
4. **Knowledge and documentation** — the in-repo `docs/` strict reader and the Astro-powered public knowledge layer (long-form, SEO, blog, research).

## Three adoption profiles

The four pillars are exposed in three adoption profiles that share one repository and one version stream:

- **Open Source profile** — pillars 2, 3, 4 without AI files.
- **Human-AI Collaboration profile** — pillar 1 plus operational state; drops into an existing repository without redoing OSS scaffolding.
- **Combined profile** — all four pillars; the working reference in this repository.

See [profiles.md](./profiles.md) for the exact file lists and [adoption.md](./adoption.md) for adoption steps.

## Four adoption paths

The common starting points the standard is designed for — a 2×2 grid of *new vs. existing project* × *with vs. without AI*:

1. **New project, with AI from day one** — Combined profile, full template.
2. **AI into an existing repository (brownfield)** — Human-AI Collaboration profile alongside whatever the repository already has. The most common case in practice.
3. **New open-source project, no AI** — Open Source profile only.
4. **Professionalising an existing open-source project** — pull in Open Source profile pieces (governance, security, CI) where they are missing.

Walk-throughs for each path live on the [knowledge layer](https://ai-standard.rubennati.at/use-cases).

## Two-layer architecture

The standard is split across two layers by design:

- **Operational layer (this repository)** — short, dense files used during day-to-day work. `.ai/` is operational state, not documentation. `docs/` is the strict reader. Root files are governance. No marketing, no long-form essays.
- **Knowledge layer (the GitHub Pages site)** — the public face. Use-case walk-throughs, deep guides, blog, comparisons, research, SEO. Pulls content from `docs/` where appropriate; adds long-form content of its own.

The repository itself serves as the working reference — every file, workflow, and convention runs in this repository, not just on paper.

## Mandatory files

### Open Source profile

`README.md`, `LICENSE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `CHANGELOG.md`, a pull-request template, at least one issue template, a CI workflow, a documented Git workflow.

### Human-AI Collaboration profile

`AGENTS.md` as the source of truth, at least one tool-specific pointer file (e.g. `CLAUDE.md`), and a minimum `.ai/` workspace with `index.md`, `state.md`, `routing.md`, and `rules.md`.

### Combined profile

Everything from both profiles above, in one repository.

## Optional add-ons

Roadmap, decision log, risk and error logs, domain notes, additional tool pointer files, branch-protection documentation, extended CI checks, GitHub Pages knowledge layer, `SUPPORT.md`, `CITATION.cff`, `FUNDING.yml`, `CODEOWNERS`, security baseline doc.

## Boundaries

Outside the standard's scope — adopt these separately if needed:

- Application code, language- or framework-specific conventions.
- Secrets management beyond pointing at platform features.
- Organisational governance beyond what a single repository needs.

## Versioning

The standard follows Semantic Versioning. See the `Versioning` section in [CONTRIBUTING.md](../CONTRIBUTING.md) for what counts as MAJOR, MINOR, and PATCH for a standards repository.

## How to read the rest of the documentation

- [profiles.md](./profiles.md) — exact file lists per profile.
- [adoption.md](./adoption.md) — adoption steps for each path.
- [ai-workspace-layer.md](./ai-workspace-layer.md) — the role and shape of `.ai/`.
- [practical-ai-collaboration.md](./practical-ai-collaboration.md) — real-world AI workflows.
- [ai-tools.md](./ai-tools.md) — multi-tool conventions and supported AI tools.
- [open-source-project-standard.md](./open-source-project-standard.md) — the open-source baseline view.
- [git-workflow.md](./git-workflow.md), [branch-protection.md](./branch-protection.md) — Git conventions and protection rules.
