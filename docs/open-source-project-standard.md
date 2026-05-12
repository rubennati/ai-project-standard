# Open Source Project Standard

The minimum **professional baseline** this standard expects from any public repository. Smaller than the foundation-style governance you see in large multi-vendor projects, larger than "we have a README and called it a day".

The goal is a repository that behaves like a reliable public institution: clear decision rights, explicit contribution rules, predictable releases, automated quality gates, documented security reporting, and visible maintainer responsiveness.

## Baseline components

Required for every adopter:

- **`README.md`** — purpose, audience, install/use pointers, links to all the policy files below.
- **`LICENSE`** — full text of an [OSI-approved license](https://opensource.org/licenses). A public repo without a license is not open source.
- **`CONTRIBUTING.md`** — branch/PR process, expectations, the inbound-rights policy (see below).
- **`CODE_OF_CONDUCT.md`** — community standards with a named reporting channel.
- **`SECURITY.md`** — private vulnerability reporting + supported versions. Public issues for security are not acceptable.
- **`CHANGELOG.md`** — [Keep a Changelog](https://keepachangelog.com/) format, grouped by version.
- **`SUPPORT.md`** — where to ask, where to file. Without it, the issue tracker becomes a support forum.
- **`.github/ISSUE_TEMPLATE/`** + **`pull_request_template.md`** — structured intake.
- **`.github/workflows/ci.yml`** — at minimum a PR-gating workflow that validates structure and lints.
- **Branch protection** on `main` per [branch-protection.md](./branch-protection.md).
- **`CODEOWNERS`** — review routing, even with a single maintainer (catch-all).

## Contributor rights: DCO vs CLA

Inbound-rights policy must be **singular** and easy to explain. Pick one:

- **DCO (Developer Certificate of Origin)** — contributors sign off each commit with `git commit -s`, certifying they have the right to contribute the change. Minimal friction, no central CLA bot, no signed agreement to track. Default recommendation for most projects.
- **CLA (Contributor License Agreement)** — explicit individual and corporate grant flow via a CLA bot. Defensible when patent licensing, relicensing flexibility, or corporate-policy compatibility need to be enforceable in writing. Adds friction; only choose it if you can defend the cost.

Do not run both. Do not conflate DCO sign-off with cryptographic commit signing — sign-off is a *rights certification*; signing is an *authenticity control*. A serious project may use both, but they solve different problems.

## Issues vs Discussions

- **Issues** are actionable work items: bugs, feature requests, documentation gaps. They have a clear definition of done.
- **Discussions** are conversation: questions, ideas, announcements, show-and-tell. They have no defined end state.

Default to Discussions enabled from day one. Without that separation, the issue tracker becomes a support forum within weeks. The [`SUPPORT.md`](../SUPPORT.md) file at the repo root makes the split explicit for contributors.

## Governance, sized to the project

Skip foundation-style governance unless contributor volume justifies it. Use the smallest model that works, then grow:

| Scale | Model | What to document |
|---|---|---|
| Solo maintainer | One person decides everything | `CODEOWNERS` (catch-all), inbound-rights policy in `CONTRIBUTING.md`. No `GOVERNANCE.md` needed yet. |
| 2–5 maintainers | Maintainer committee with role split | Add `GOVERNANCE.md`: who merges, who triages, who releases, escalation path. |
| 5+ maintainers, multiple areas | Committee + area owners | Path-scoped `CODEOWNERS`, dedicated reviewers per area, optional release-manager rotation. |
| Foundation-scale | SIGs / TSC / councils | Charters per group, ownership maps, explicit RFC process. Only adopt when contributor volume forces it. |

Anti-pattern: copying SIG/TSC structure from Kubernetes/Rust into a 2-maintainer project. The recherche behind this standard repeatedly warns against premature governance.

## Release engineering

- Use **Semantic Versioning**. The Versioning section in [`CONTRIBUTING.md`](../CONTRIBUTING.md) defines what counts as MAJOR/MINOR/PATCH for *this* standard; adopters should write their own equivalent for their project's surface.
- Tag releases as `vX.Y.Z`. Create a GitHub Release per tag with notes generated from PR history or hand-written.
- A `RELEASE.md` runbook becomes worthwhile once you release more than once a month or have multiple maintainers. Until then, the `CHANGELOG.md` + Versioning policy carry the load.
- `release/x.y` branches only for projects with parallel maintained lines (LTS). Single-track projects: don't create them.

## Health metrics

Track responsiveness and operating discipline, not stars or downloads. These are the metrics that signal a healthy project to potential adopters:

- **Time to first response** on issues and PRs.
- **Time to close** (separately for PRs and issues).
- **PR throughput** vs incoming issue rate.
- **CI failure rate** and workflow duration.
- **Security MTTR** — time from advisory to fix.
- **Dependency freshness** — Dependabot dashboard.

Review monthly at a fixed cadence. No tooling is mandated; GitHub's built-in graphs (Pulse, Insights → Contributors, Traffic) plus the OpenSSF Scorecard cover the basics for free.

## Trust signals worth adopting

In rough order of effort vs reward:

1. **OpenSSF Scorecard** (already wired up in this repo) — automatic score, published badge.
2. **GitHub Security features**: secret scanning, Dependabot alerts, optional code scanning. Mostly settings, not files.
3. **OpenSSF Best Practices Badge** — application-based; aim for "Passing" early.
4. **Signed commits** on protected branches — authenticity control orthogonal to DCO.
5. **SBOM + artifact attestations** — only meaningful once you publish binaries or containers.

## AI collaboration readiness

A repository should expose explicit rules, state, routing, and quality criteria so AI-generated work remains reviewable and controllable by humans. See the [Human-AI Collaboration baseline](./ai-workspace-layer.md) and [`AGENTS.md`](../AGENTS.md) for what that looks like in practice.

## What this standard does NOT mandate

These are common recommendations elsewhere, deliberately **not** required here, because they tend to be cargo-culted before they're useful:

- `MAINTAINERS.md` separate from CODEOWNERS (CODEOWNERS already encodes ownership).
- `GOVERNANCE.md` at solo-maintainer scale (premature).
- `TRADEMARKS.md` without a recognisable brand (no concern to address).
- `RELEASE.md` runbook for projects with <1 release/month (CHANGELOG carries the load).
- SBOM/SLSA/attestations for projects without build artifacts.
- Merge queues for projects with <5 PRs/day (overkill).

Adopt them when they earn their place, not before.
