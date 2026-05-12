# Changelog

All notable changes to this project should be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added — PR 5 (docs reader + minimal SEO)

- `site/src/content.config.ts` — Astro 5 content collection that reads `../docs/**/*.md` directly. Single source of truth: no copies, no sync — every doc change re-renders on the next build.
- `site/src/pages/docs/[...slug].astro` and `site/src/pages/docs/index.astro` — dynamic routes for every doc plus an index/listing page with logical ordering.
- `site/src/components/SEO.astro` — minimal SEO component (title, description, canonical, OpenGraph, Twitter card). No JSON-LD in v0.2.0.
- `site/src/utils/docs.ts` — title/description/ordering helpers that work without requiring frontmatter on existing docs (parse H1, fall back to humanised slug).
- Navigation: "Docs" entry in the site header.
- In-site links from the Use-cases and Profiles pages now point at the local docs reader instead of github.com.

### Added

- `docs/standard.md` — canonical document describing the standard itself (what it is, mandatory vs optional, two-baseline philosophy, layered architecture).
- `docs/profiles.md` — three adoption profiles (OSS-only, AI-only, Combined) with explicit, machine-readable file lists. No wildcards; consumed by the future Profile-Completeness CI check.
- `docs/adoption.md` — adoption steps per profile and an Updating-from-previous-version workflow for downstream adopters.
- `CONTRIBUTING.md` — new "Versioning" section defining MAJOR/MINOR/PATCH for the standard.
- `README.md` — positioning sentence and Profiles section linking to the new docs.
- `docs/index.md` — restructured into grouped sections (the standard, OSS baseline, Human-AI Collaboration baseline) and links the new AI Tools doc.
- `docs/ai-tools.md` — multi-AI conventions document covering Claude Code, Codex/Codex CLI, GitHub Copilot, Cursor, and ChatGPT (out-of-scope) with a clear single-source-of-truth model and instructions for adding new tools.
- `.cursor/rules/00-project.mdc` — Cursor rule (modern MDC format, `alwaysApply: true`) pointing to `AGENTS.md`.
- `AGENTS.md` — new "Tool-specific pointer files" section listing the pointer files and an anti-duplication rule (pointers stay short and defer to `AGENTS.md`).
- `CLAUDE.md`, `.github/copilot-instructions.md` — restated as thin pointer files; rule duplication removed.
- `site/` — minimal Astro skeleton for the GitHub Pages knowledge layer (Astro 5, Tailwind v4). Includes a base layout and five static pages (Home, Use cases, Profiles, About, Blog stub). No content collection, no RSS, no JSON-LD — those land in later PRs by design.
- `site/public/robots.txt` and Astro sitemap integration configured.
- `.gitignore` — exclude `site/node_modules/`, `site/dist/`, `site/.astro/`.

## [0.1.0] - 2026-05-12

First public release of the repository standard. Intended as a starting point for pilot usage; expect iteration based on real-world feedback.

### Added

- `.ai/` workspace with operational state, routing, tasks, decisions, risks, errors, quality gates, secure-development notes, and domain guides.
- Root governance documents: `README.md`, `AGENTS.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `ROADMAP.md`, MIT `LICENSE`.
- Documentation set in `docs/`: open-source project standard, getting started, git workflow, branch protection, `.ai/` workspace layer, practical AI collaboration.
- Baseline `.gitignore` (including Claude Code local settings) and GitHub configuration.
- Branch protection on `main` via a Repository Ruleset (PR required, conversation resolution required, force pushes and branch deletion blocked).
