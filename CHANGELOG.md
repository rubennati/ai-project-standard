# Changelog

All notable changes to this project should be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2026-05-12

First public release of the repository standard. Intended as a starting point for pilot usage; expect iteration based on real-world feedback.

### Added

- `.ai/` workspace with operational state, routing, tasks, decisions, risks, errors, quality gates, secure-development notes, and domain guides.
- Root governance documents: `README.md`, `AGENTS.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `ROADMAP.md`, MIT `LICENSE`.
- Documentation set in `docs/`: open-source project standard, getting started, git workflow, branch protection, `.ai/` workspace layer, practical AI collaboration.
- Baseline `.gitignore` (including Claude Code local settings) and GitHub configuration.
- Branch protection on `main` via a Repository Ruleset (PR required, conversation resolution required, force pushes and branch deletion blocked).
