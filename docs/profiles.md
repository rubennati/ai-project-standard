# Profiles

Three adoption profiles share one repository and one version stream. Pick the profile that matches your context.

- **OSS-only** — for an open-source project without AI tooling baked in.
- **AI-only** — for an existing repository that is adopting Human-AI Collaboration.
- **Combined** — for a new project that wants both baselines.

The lists below are the canonical, machine-readable source of truth. The Profile-Completeness CI check parses the fenced `text` blocks and asserts every path exists. No wildcards, no glob expansion — paths are listed explicitly.

See [standard.md](./standard.md) for the conceptual definition and [adoption.md](./adoption.md) for adoption steps.

## Overview

| Path | OSS | AI | Notes |
|---|:-:|:-:|---|
| `README.md` | ✓ | ✓ | Project entry point. |
| `LICENSE` | ✓ | – | MIT in this reference; choose what fits your project. |
| `CONTRIBUTING.md` | ✓ | – | Includes the Versioning policy. |
| `CODE_OF_CONDUCT.md` | ✓ | – | |
| `SECURITY.md` | ✓ | – | |
| `ROADMAP.md` | ✓ | – | |
| `CHANGELOG.md` | ✓ | – | Keep a Changelog format. |
| `.github/ISSUE_TEMPLATE/bug_report.md` | ✓ | – | |
| `.github/ISSUE_TEMPLATE/feature_request.md` | ✓ | – | |
| `.github/pull_request_template.md` | ✓ | – | |
| `.github/workflows/ci.yml` | ✓ | – | Structural and lint checks. |
| `docs/open-source-project-standard.md` | ✓ | – | |
| `docs/git-workflow.md` | ✓ | – | |
| `docs/branch-protection.md` | ✓ | – | |
| `docs/getting-started.md` | ✓ | – | |
| `docs/index.md` | ✓ | ✓ | Doc index. |
| `docs/standard.md` | ✓ | ✓ | The standard itself. |
| `docs/profiles.md` | ✓ | ✓ | This file. |
| `docs/adoption.md` | ✓ | ✓ | Adoption guide. |
| `docs/security-baseline.md` | ✓ | ✓ | Minimum security posture (added in v0.2.0). |
| `AGENTS.md` | – | ✓ | Source of truth for AI tools. |
| `CLAUDE.md` | – | ✓ | Pointer to AGENTS.md. |
| `.github/copilot-instructions.md` | – | ✓ | Pointer to AGENTS.md. |
| `.cursor/rules/00-project.mdc` | – | ✓ | Pointer to AGENTS.md (added in v0.2.0). |
| `.ai/**` | – | ✓ | Operational workspace (see AI-only list below). |
| `docs/ai-workspace-layer.md` | – | ✓ | |
| `docs/practical-ai-collaboration.md` | – | ✓ | |
| `docs/ai-tools.md` | – | ✓ | Multi-AI conventions (added in v0.2.0). |

## OSS-only profile

```text
README.md
LICENSE
CONTRIBUTING.md
CODE_OF_CONDUCT.md
SECURITY.md
ROADMAP.md
CHANGELOG.md
.github/ISSUE_TEMPLATE/bug_report.md
.github/ISSUE_TEMPLATE/feature_request.md
.github/pull_request_template.md
.github/workflows/ci.yml
docs/open-source-project-standard.md
docs/git-workflow.md
docs/branch-protection.md
docs/getting-started.md
docs/index.md
docs/standard.md
docs/profiles.md
docs/adoption.md
docs/security-baseline.md
```

## AI-only profile

```text
README.md
AGENTS.md
CLAUDE.md
.github/copilot-instructions.md
.cursor/rules/00-project.mdc
.ai/index.md
.ai/project-brief.md
.ai/state.md
.ai/routing.md
.ai/rules.md
.ai/tasks.md
.ai/progress.md
.ai/decisions.md
.ai/quality-gates.md
.ai/secure-development.md
.ai/risks.md
.ai/errors.md
.ai/loops.md
.ai/setup-interview.md
.ai/domains/architecture.md
.ai/domains/coding.md
.ai/domains/documentation.md
.ai/domains/release.md
.ai/domains/testing.md
docs/index.md
docs/standard.md
docs/profiles.md
docs/adoption.md
docs/security-baseline.md
docs/ai-workspace-layer.md
docs/practical-ai-collaboration.md
docs/ai-tools.md
```

## Combined profile

The combined profile is the union of OSS-only and AI-only.

```text
README.md
LICENSE
CONTRIBUTING.md
CODE_OF_CONDUCT.md
SECURITY.md
ROADMAP.md
CHANGELOG.md
AGENTS.md
CLAUDE.md
.github/ISSUE_TEMPLATE/bug_report.md
.github/ISSUE_TEMPLATE/feature_request.md
.github/pull_request_template.md
.github/workflows/ci.yml
.github/copilot-instructions.md
.cursor/rules/00-project.mdc
.ai/index.md
.ai/project-brief.md
.ai/state.md
.ai/routing.md
.ai/rules.md
.ai/tasks.md
.ai/progress.md
.ai/decisions.md
.ai/quality-gates.md
.ai/secure-development.md
.ai/risks.md
.ai/errors.md
.ai/loops.md
.ai/setup-interview.md
.ai/domains/architecture.md
.ai/domains/coding.md
.ai/domains/documentation.md
.ai/domains/release.md
.ai/domains/testing.md
docs/open-source-project-standard.md
docs/git-workflow.md
docs/branch-protection.md
docs/getting-started.md
docs/index.md
docs/standard.md
docs/profiles.md
docs/adoption.md
docs/security-baseline.md
docs/ai-workspace-layer.md
docs/practical-ai-collaboration.md
docs/ai-tools.md
```

## Files added during v0.2.0

Some paths above (`docs/standard.md`, `docs/profiles.md`, `docs/adoption.md`, `docs/ai-tools.md`, `.cursor/rules/00-project.mdc`) are introduced during the v0.2.0 release. The Profile-Completeness check is enabled only after every listed path exists on `main`.
