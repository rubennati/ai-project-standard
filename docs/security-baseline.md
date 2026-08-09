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

The `GITHUB_TOKEN` default is inherited down the chain repository → organization → enterprise, so it is not knowable from the workflow file alone. Enterprises, organizations not owned by an enterprise, and personal-account repositories created after 2 February 2023 default to a read-only token; entities created before that date keep the permissive read/write default, and a repository created today inside an older organization still inherits it. Do not rely on any default: declare the minimum your workflow needs at the top of the file, and override per-job where higher access is required. Declaring a `permissions` block at all sets every scope you do not list to `none`, which is what makes the top-level declaration effective.

Sources: [GitHub changelog, 2 February 2023](https://github.blog/changelog/2023-02-02-github-actions-updating-the-default-github_token-permissions-to-read-only/) and the [`permissions` workflow syntax reference](https://docs.github.com/actions/reference/workflows-and-actions/workflow-syntax#permissions).

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

### Pin every action to a full SHA

Tag-based references (`@v4`) are mutable, and compromised action releases have happened. Pin every action — third-party *and* official `actions/*` — to the immutable commit SHA, with a trailing version comment so the version stays readable:

```yaml
- uses: lycheeverse/lychee-action@e7477775783ea5526144ba13e8db5eec57747ce8 # v2
```

This standard SHA-pins every action in `.github/workflows/*.yml`, official ones included. Dependabot's `github-actions` ecosystem opens grouped PRs that bump both the SHA and its version comment, so pinning does not mean going stale. It also satisfies the OpenSSF Scorecard [Pinned-Dependencies](https://github.com/ossf/scorecard/blob/main/docs/checks.md#pinned-dependencies) check.

Note that Dependabot only parses workflow files, never markdown. The pin in the example above is therefore maintained by hand and can drift from the one CI actually runs.

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

*Sources checked: 2026-08-09 — every cited source resolved, and the default
`GITHUB_TOKEN` permission claim re-read at the GitHub changelog it cites.*
