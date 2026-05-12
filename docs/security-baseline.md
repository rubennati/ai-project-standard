# Security Baseline

The minimum security posture this standard recommends. Layers on top of [SECURITY.md](../SECURITY.md) which covers vulnerability *reporting*; this document covers vulnerability *prevention*.

## Repository-level controls

These are GitHub features. Turn them on once; they run forever.

- **Private vulnerability reporting** — enables coordinated disclosure via Security Advisories. Settings → Code security.
- **Secret scanning + push protection** — blocks pushes containing detected secrets. Settings → Code security.
- **Dependabot alerts** — vulnerability notifications for dependencies. Settings → Code security.
- **Dependabot security updates** — auto-PRs that patch reported vulnerabilities. Pair with **grouped security updates** to keep PR volume low.
- **Code scanning** (CodeQL or equivalent) — static analysis on every PR. Optional but recommended once you have application code.
- **Branch protection** on `main` — see [branch-protection.md](./branch-protection.md). PR required, conversation resolution required, force pushes and deletion blocked.

## CI / CD hardening

These belong in every workflow file. They cost nothing and shrink the blast radius of a compromised action or PR.

### Minimum permissions

GitHub workflows inherit broad `GITHUB_TOKEN` permissions by default. Always declare the minimum your workflow needs at the top of the file, and override per-job where higher access is required.

```yaml
permissions:
  contents: read

jobs:
  release:
    permissions:
      contents: write
      id-token: write   # for OIDC, if used
    # ...
```

### Pin third-party actions to a full SHA

Tag-based references (`@v4`) are mutable. Compromised action releases have happened. For untrusted third-party actions, pin to the immutable commit SHA:

```yaml
- uses: lycheeverse/lychee-action@a3046df3bc09bce6b8e8bbc7d3b29b1efa9b2b25 # v2
```

Official `actions/*` actions are also pinnable; this standard ships them at version tags for readability and relies on Dependabot to update them. Adopters with stricter supply-chain requirements should pin all actions to SHAs.

### Prefer OIDC over long-lived secrets

When deploying to cloud providers, use OIDC trust relationships instead of storing static credentials. AWS, GCP, Azure, and HashiCorp Vault all support GitHub Actions OIDC. The `id-token: write` permission above is the prerequisite.

### Restrict workflow re-use

If a workflow is in `.github/workflows/`, anyone with push access to a PR branch can modify it. For sensitive workflows (release, deploy), use the **environments** feature with Required Reviewers, and gate execution on protected branches only.

## AI-specific controls

Coding agents read files, run commands, and reach external tools (MCP servers). Their privileges must be smaller than the human who runs them.

- **Approval model** — agents must not merge to `main`, force-push, or modify branch protection. See `AGENTS.md` → Approval.
- **Sandboxing** — Codex CLI and Claude Code support per-tool sandboxes; configure them rather than relying on the default. `.codex/config.toml` and `.claude/settings.json` are the right places.
- **Tool allow-listing** — restrict which shell commands and MCP servers an agent can call. Open-by-default is wrong.
- **Personal vs. team settings** — `*.local.json` and `CLAUDE.local.md` are gitignored on purpose. Never commit credentials or production tokens into team settings.

## Reference: OWASP Top 10 for LLM Applications

For projects that actually call LLMs at runtime (RAG, agents, chatbots), the [OWASP Top 10 for LLMs](https://genai.owasp.org/llm-top-10/) covers the AI-specific risks that this baseline cannot anticipate generically: prompt injection, sensitive-information disclosure, insecure tool use, excessive agency, supply-chain attacks on models, and others. Map each item to a concrete control in your codebase before shipping.

## Reference: Other baselines worth adopting later

These are not minimum standards — they are next steps once the basics are in place.

- **OpenSSF Scorecard** — already wired up in this repository ([scorecard.yml](../.github/workflows/scorecard.yml)). Track the score over time.
- **OpenSSF Best Practices Badge** — application-based; aim for "Passing" early.
- **SLSA** — supply-chain provenance levels for serious release pipelines.
- **NIST SSDF** — secure software development framework; useful as a checklist for compliance-driven projects.
