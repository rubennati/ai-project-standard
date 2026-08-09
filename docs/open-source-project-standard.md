# Open Source Project Standard

The rules behind the [`open-source`](../blueprints/open-source/) blueprint — the
judgements a set of files cannot carry, and the ones that change as a project
grows.

**The files themselves are not listed here.** The blueprint ships them, and
listing them a second time would give the repository two answers to the same
question. What you get, and why, is in its
[README](../blueprints/open-source/README.md).

This document holds what the blueprint deliberately leaves out: what to do as
the project changes size, what to measure, what to adopt later, and what not to
adopt at all.

## Contributor rights: DCO or CLA

The blueprint picks the **DCO** and enforces it in CI. The reasoning, so you can
overrule it:

- **DCO** — contributors add `Signed-off-by` with `git commit -s`, certifying
  they have the right to contribute the change. No bot, no signed agreement to
  track, and no step before a first-time contributor's first line lands.
- **CLA** — an explicit individual and corporate grant flow, usually via a bot.
  Defensible when patent licensing, relicensing flexibility or corporate policy
  need to be enforceable in writing. It costs every new contributor a signing
  step.

Pick one. Running both means neither is understood.

Do not conflate DCO sign-off with cryptographic commit signing: sign-off is a
*rights certification*, signing is an *authenticity control*. A serious project
may use both, for different reasons.

## Governance, sized to the project

The blueprint ships no `GOVERNANCE.md`, because copying a steering committee
into a two-person project produces a document describing something that does not
exist. Add structure when contributor volume forces it:

| Scale | Model | What to write down |
|---|---|---|
| Solo maintainer | One person decides | `CODEOWNERS` catch-all, inbound-rights policy in `CONTRIBUTING.md`. No `GOVERNANCE.md` yet |
| 2–5 maintainers | Committee with a role split | Add `GOVERNANCE.md`: who merges, who triages, who releases, and the escalation path |
| 5+ maintainers, several areas | Committee plus area owners | Path-scoped `CODEOWNERS`, reviewers per area, optionally a release-manager rotation |
| Foundation scale | SIGs, TSC, councils | Charters per group, ownership maps, an explicit RFC process |

The anti-pattern is copying SIG or TSC structure from a very large project into
a small one. Premature governance is a cost with no return, and it is hard to
walk back.

## Health metrics

Track responsiveness and operating discipline, not stars or downloads. These are
what signal a healthy project to someone deciding whether to depend on it:

- Time to first response, on issues and on pull requests
- Time to close, counted separately for the two
- Pull-request throughput against incoming issue rate
- CI failure rate, and how long a run takes
- Security MTTR — advisory to fix
- Dependency freshness

Review at a fixed cadence rather than when something feels wrong. No tooling is
required: GitHub's own Pulse and Insights plus the OpenSSF Scorecard cover it.

## Trust signals worth adopting later

Roughly in order of effort against reward:

1. **OpenSSF Scorecard** — automatic, publishes a badge. Wired up in this
   repository.
2. **GitHub security features** — secret scanning, Dependabot alerts, optionally
   code scanning. Settings rather than files; the blueprint's
   `docs/repository-settings.md` lists them in the order that costs least.
3. **OpenSSF Best Practices Badge** — application-based. Aim for "Passing".
4. **Signed commits** on protected branches — an authenticity control,
   orthogonal to the DCO.
5. **SBOM and artifact attestations** — only meaningful once you publish
   binaries or containers.

## What this standard does not mandate

Common recommendations elsewhere, deliberately not required, because they get
copied before they are useful:

- `MAINTAINERS.md` separate from `CODEOWNERS` — ownership is already encoded
- `GOVERNANCE.md` at solo-maintainer scale
- `TRADEMARKS.md` without a recognisable brand
- A `RELEASE.md` runbook below roughly one release a month — the changelog and
  the versioning policy carry it
- SBOM, SLSA and attestations for a project with no build artifacts
- Merge queues below roughly five pull requests a day

Adopt each when it earns its place, not before.

## Related

- [`open-source` blueprint](../blueprints/open-source/) — the files themselves
- [security-baseline.md](./security-baseline.md) — the minimum security posture
- [branch-protection.md](./branch-protection.md) — protection rules for `main`
- [release-process.md](./release-process.md) — how this project releases
