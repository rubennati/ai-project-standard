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

## What changes when a system holds knowledge and acts

The method transfers from ordinary information security. The assets are new.

**Integrity outranks confidentiality here.** A wrong statement, published,
retrieved and acted on is a security failure whether it arrived through human
error, a hallucination, a stale source, a parser misreading a table, or an
attacker. Four of those five involve nobody hostile, which is why access control
alone does not protect a body of knowledge. The GDPR's own security article
names accidental alteration alongside unlawful alteration.

**Model the threat in four classes, not one:**

```text
ACCIDENT           someone did the wrong thing correctly
FAILURE            a component worked as built and the build was wrong
ATTACK             someone intended it
MODEL UNCERTAINTY  the system behaved as designed on an input nobody anticipated
```

Controls designed only against the third do not catch the other three, and the
other three are more common.

**Knowledge is an asset to be protected, not a convenience to be filled.** Plant
a false instruction where an agent will ingest it and an administrator acts on
it later in good faith. The attack lands on the knowledge, not on the reader.

**The trust boundary is semantic, not network.** Instructions come from the
user. Everything arriving through a file, a web page or a tool result is data,
however it is phrased. This generalises the rule the `ai-assisted-development`
blueprint already ships.

**Reasoning and authority are separated.** The model decides what should happen;
the runtime holds the credential and decides whether it may. A credential that
enters a model's context has left your control — context is summarised, logged,
cached and repeated.

**Human permission is not agent permission.** Three identities exist: the
person, the agent acting for them, and the service account underneath. The
agent's rights are a subset chosen per task, not an inheritance.

**Back up by replaceability, not by storage cost.**

```text
IRREPLACEABLE     sources · curated knowledge · human decisions · review history
RECONSTRUCTABLE   embeddings · search index · rendered output · cache
```

Restore-test the first row. Rebuild the second.

**Revocation is not deletion.** Withdrawing access to a source does not remove
what an index, a cache or a chat history already holds. A permissions model has
to say how a withdrawal reaches every derived copy.

> The more a system moves from an information tool to a persistent knowledge
> base and finally to an acting agent, the more the risk shifts from *is the
> answer good* to *what may this system influence at all*.

Depth, and how to build against each of these:
[concepts/agent-action-control.md](../concepts/agent-action-control.md),
[concepts/tool-access.md](../concepts/tool-access.md),
[concepts/knowledge-lifecycle.md](../concepts/knowledge-lifecycle.md).

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
