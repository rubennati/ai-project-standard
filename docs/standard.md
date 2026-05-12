# The AI Project Standard

This document defines the standard itself: what it is, what it is not, what is mandatory, and what is optional.

This repository is both a reusable template and a reference implementation for adopting Open Source and/or Human-AI Collaboration standards.

## What the standard is

A small, opinionated set of repository conventions that make a project safe for long-term collaboration between humans and AI systems. It covers structure, governance, review controls, and operational state — not application code.

The standard is delivered as:

- a fixed file layout (governance, workspace, docs),
- a small set of mandatory documents,
- an optional set of supporting documents,
- a versioning policy for the standard itself.

## What the standard is not

- An application starter or framework.
- A prompt collection.
- A replacement for human accountability or code review.
- A guarantee of quality — it provides structure, the team provides discipline.

## Two baselines, one repository

The standard is composed of two independent baselines that can be adopted separately or together:

### Open Source baseline

The minimum set of governance, licensing, and contribution controls needed to run a credible open-source project. Targets maintainers and contributors. Covers README, LICENSE, contribution rules, security policy, code of conduct, issue and pull-request templates, CI, and the Git workflow.

### Human-AI Collaboration baseline

The minimum set of files and conventions that make a repository legible to AI tools (Claude, Codex, GitHub Copilot, Cursor, and others) and keep human oversight intact. Covers `AGENTS.md`, tool-specific pointer files, the `.ai/` operational workspace, and the practical-collaboration guide.

### Combined profile

Most projects benefit from adopting both baselines. The combined profile is the full set of files in this repository.

See [profiles.md](./profiles.md) for the exact file lists per profile, and [adoption.md](./adoption.md) for how to adopt each.

## Architectural philosophy

The standard is split across two layers, by design:

- **Operational layer (the repository):** short, dense, English files used during day-to-day work. `.ai/` is operational state; `docs/` is the strict reader; root files are governance. No marketing, no long-form essays.
- **Knowledge layer (the GitHub Pages site, from v0.2.0):** the public face. Use-case walk-throughs, deep guides, blog, SEO, branding. Pulls content from `docs/` where appropriate; adds long-form content of its own.

This separation keeps the repository scannable and the public site expressive without either bleeding into the other.

## Mandatory, optional, out of scope

### Mandatory for the Open Source baseline

`README.md`, `LICENSE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `CHANGELOG.md`, a pull-request template, at least one issue template, a CI workflow, and a documented Git workflow.

### Mandatory for the Human-AI Collaboration baseline

`AGENTS.md` as the source of truth, at least one tool-specific pointer file (e.g., `CLAUDE.md`), and a minimum `.ai/` workspace with `index.md`, `state.md`, `routing.md`, and `rules.md`.

### Optional everywhere

Roadmap, decision log, risk and error logs, domain notes, additional tool pointer files, branch-protection documentation, extended CI checks, GitHub Pages site.

### Out of scope

Code generation, application-specific guidance, language- or framework-specific conventions, secrets management beyond pointing at platform features, organizational governance beyond what a single repository needs.

## Versioning

The standard follows Semantic Versioning. See the `Versioning` section in [CONTRIBUTING.md](../CONTRIBUTING.md) for what counts as MAJOR, MINOR, and PATCH for a standards repository.

## How to read the rest of the documentation

- [profiles.md](./profiles.md) — exact file lists per profile.
- [adoption.md](./adoption.md) — how to adopt each profile in a new or existing repository.
- [ai-workspace-layer.md](./ai-workspace-layer.md) — the role and shape of `.ai/`.
- [practical-ai-collaboration.md](./practical-ai-collaboration.md) — real-world AI workflows.
- [open-source-project-standard.md](./open-source-project-standard.md) — the OSS-baseline view.
- [git-workflow.md](./git-workflow.md), [branch-protection.md](./branch-protection.md) — Git conventions and protection rules.
