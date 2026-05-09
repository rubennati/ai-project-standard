# AI Workspace Layer

## Purpose

The `.ai/` directory is the operational workspace for AI-assisted execution.

## Separation model

Project-facing standards stay in root files and `docs/`. Operational agent context stays in `.ai/`.

## Core functions

- Current state and continuity (`state.md`, `progress.md`)
- Task routing and execution guidance (`routing.md`, `tasks.md`, `loops.md`)
- Decision and governance memory (`decisions.md`, `rules.md`, `quality-gates.md`)
- Risk and recovery tracking (`risks.md`, `errors.md`, `secure-development.md`)

## Practical outcome

This separation improves handoff quality, reduces context loss, and keeps AI-assisted work reviewable.
