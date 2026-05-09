# AI Workspace Layer

## Purpose

`.ai/` is the operational workspace for AI-assisted execution in this repository.

## Why separation matters

Keeping `.ai/` separate from `docs/` and root governance files prevents process state from being mixed with project-facing documentation.

## Core responsibilities

- Store current state and progress (`state.md`, `progress.md`)
- Route tasks to relevant context (`routing.md`)
- Record decisions and constraints (`decisions.md`, `rules.md`)
- Maintain quality and risk controls (`quality-gates.md`, `risks.md`, `errors.md`)

## Long-term value

This structure supports continuity, handoff, and reviewability across humans and AI tools.
