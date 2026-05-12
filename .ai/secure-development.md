# Secure Development

Operational notes for the `.ai/` workspace. The full adopter-facing baseline (CI hardening, repository controls, OWASP LLM Top 10 references) lives in [`docs/security-baseline.md`](../docs/security-baseline.md).

- Prefer minimal permissions and least-privilege workflows.
- Review dependency changes before adoption.
- Keep security reporting guidance current in `SECURITY.md`.
- Track security-relevant risks in `risks.md`.
- Agent tools and MCP servers run with the agent's privileges — restrict them in `.codex/config.toml` or `.claude/settings.json`, never assume the default is safe.
