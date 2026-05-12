# AI Tools

This standard officially supports the AI tools below. The rule is the same for all of them: `AGENTS.md` is the source of truth. Tool-specific files are short pointers — they exist because the tool only reads its own file, not because they carry different rules.

| Tool | File | Status | Role |
|---|---|---|---|
| Claude Code | `CLAUDE.md` | Required | Points to `AGENTS.md` and `.ai/` |
| OpenAI Codex / Codex CLI | `AGENTS.md` | Required | Primary source of truth |
| GitHub Copilot | `.github/copilot-instructions.md` | Required | Points to `AGENTS.md` |
| Cursor | `.cursor/rules/00-project.mdc` | Required | Points to `AGENTS.md`, `alwaysApply: true` |
| ChatGPT (web) | — | Out of scope | No in-repo mechanism (see below) |
| Generic / future tools | `AGENTS.md` | Default | Cross-vendor convention |

## How each tool reads the repository

### Claude Code

Reads `CLAUDE.md` at the project root on every session. From there it picks up the pointer to `AGENTS.md` and the `.ai/` workspace. Keep `CLAUDE.md` minimal — anything that applies to multiple tools belongs in `AGENTS.md`.

### OpenAI Codex / Codex CLI

Reads `AGENTS.md` directly. This is the emerging cross-vendor convention and the reason this repository uses `AGENTS.md` as the source of truth.

### GitHub Copilot

Reads `.github/copilot-instructions.md` automatically in supported IDEs (VS Code, JetBrains). Keep the file short and defer to `AGENTS.md` for any rule that is not Copilot-specific.

### Cursor

Reads `.cursor/rules/*.mdc` files. The standard ships a single rule, `.cursor/rules/00-project.mdc`, with `alwaysApply: true`, that points to `AGENTS.md`. The legacy single-file `.cursorrules` format is not included; add it manually if you need to support an older Cursor version.

### ChatGPT (web)

ChatGPT's web interface does not read any in-repo file. Project memory and custom instructions live in the user's account, not in the repository. If you use ChatGPT for this project, paste the relevant pointer (e.g., a link to `AGENTS.md`) into the conversation or into your ChatGPT custom instructions. Nothing in the repository configures it.

## Anti-duplication rule

Tool-specific files MUST stay short (target: ≤20 lines) and MUST defer to `AGENTS.md` for any rule that is not specific to the tool. If you find yourself copying a rule into a pointer file, move it to `AGENTS.md` instead. This rule is also stated in `AGENTS.md`.

## Model Context Protocol (MCP)

The [Model Context Protocol](https://modelcontextprotocol.io/) is the emerging standard for connecting LLMs and agents to external tools, data sources, and APIs. Claude Code, Codex CLI, Gemini CLI, and a growing number of clients speak MCP natively.

This standard does not bundle MCP servers, but the conventions are:

- **Per-project MCP configuration** lives in the tool-specific settings file (`.codex/config.toml` for Codex, `.claude/settings.json` for Claude Code).
- **Personal MCP servers** belong in your gitignored `*.local.*` files, never the team-versioned ones.
- **Treat MCP servers as third-party code** — they read your repo and run with your agent's privileges. See [`docs/security-baseline.md`](./security-baseline.md) → AI-specific controls.

If an MCP server is critical to a workflow, document the setup steps in `AGENTS.md` so every contributor (and every agent session) reaches the same toolchain.

## How to add support for a new tool

1. Read what file the tool expects and where.
2. Add a thin pointer file at that path. Defer to `AGENTS.md`.
3. Add the tool to the table at the top of this file.
4. Add the path to the AI-only and Combined profile lists in `docs/profiles.md`.
5. Open a PR; the change is MINOR per the Versioning policy in `CONTRIBUTING.md`.
