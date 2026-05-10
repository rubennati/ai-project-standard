# Decisions

## 2026-05-09 - Repository name

Decision: The repository name is `AI Project Standard`.

## 2026-05-09 - Language policy

Decision: Project documentation and collaboration content are English only.

## 2026-05-09 - License

Decision: The project uses the MIT License.

## 2026-05-09 - AI workspace location

Decision: AI operational context is stored under `.ai/`.

## 2026-05-09 - Default Git workflow

Decision: Use GitHub Flow / trunk-based workflow with short-lived branches.

## 2026-05-09 - No default GitFlow

Decision: GitFlow is not the default workflow for this repository.

## 2026-05-09 - Separate AI workspace from project docs

Decision: Keep AI operational state in `.ai/` and keep human-facing documentation in `docs/` and root files.

Rationale: Separation improves maintainability, review clarity, and continuity across tools.

## 2026-05-10 - Human approval model

Decision: "Human approval" is defined as a human merging the pull request. Agents may commit and push to non-`main` branches; agents must not merge to `main`, force-push, or modify branch protection. The full rule lives in the "Approval" section of `AGENTS.md`; `CLAUDE.md` and `.github/copilot-instructions.md` point at it.

Rationale: The previous "do not commit, push, or merge without explicit human approval" rule was repeated in four files but never operationalised, leaving agents unable to tell what was actually permitted. Defining it once in `AGENTS.md` removes ambiguity and prevents drift across the AI-instruction surface.
