# Changelog

All notable changes to this project should be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `docs/standard.md` — canonical document describing the standard itself (what it is, mandatory vs optional, two-baseline philosophy, layered architecture).
- `docs/profiles.md` — three adoption profiles (OSS-only, AI-only, Combined) with explicit, machine-readable file lists. No wildcards; consumed by the future Profile-Completeness CI check.
- `docs/adoption.md` — adoption steps per profile and an Updating-from-previous-version workflow for downstream adopters.
- `CONTRIBUTING.md` — new "Versioning" section defining MAJOR/MINOR/PATCH for the standard.
- `README.md` — positioning sentence and Profiles section linking to the new docs.
- `docs/index.md` — restructured into grouped sections (the standard, OSS baseline, Human-AI Collaboration baseline).

## [0.1.0] - 2026-05-12

First public release of the repository standard. Intended as a starting point for pilot usage; expect iteration based on real-world feedback.

### Added

- `.ai/` workspace with operational state, routing, tasks, decisions, risks, errors, quality gates, secure-development notes, and domain guides.
- Root governance documents: `README.md`, `AGENTS.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `ROADMAP.md`, MIT `LICENSE`.
- Documentation set in `docs/`: open-source project standard, getting started, git workflow, branch protection, `.ai/` workspace layer, practical AI collaboration.
- Baseline `.gitignore` (including Claude Code local settings) and GitHub configuration.
- Branch protection on `main` via a Repository Ruleset (PR required, conversation resolution required, force pushes and branch deletion blocked).
