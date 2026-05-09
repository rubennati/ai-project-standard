# AI Workspace Layer

## Purpose of `.ai/`

The `.ai/` directory provides a structured workspace for AI-assisted execution, memory, and coordination.

## Why separation matters

Separating `.ai/` from normal documentation keeps operational agent state isolated from project-facing documentation and policy files.

## Key functions

- Project memory (`.ai/state.md`, `.ai/progress.md`, `.ai/decisions.md`)
- Task routing (`.ai/routing.md`)
- Quality and process loops (`.ai/loops.md`, `.ai/quality-gates.md`)
- Risk and error tracking (`.ai/risks.md`, `.ai/errors.md`)

## Long-term collaboration

Long-term human and AI collaboration requires durable state, explicit decisions, and repeatable workflows. The workspace exists to support continuity across sessions and tools.
