<!-- Blueprint payload: open-source. Edit here, not in your copy. Delete this line after copying. -->
# Contributing

Thank you for contributing to {{PROJECT_NAME}}.

This file records decisions that have already been made, so you do not have to
guess at them. Where an alternative was rejected, the reason is stated.

## Workflow

Short-lived branches off `main`, one concern each, merged through a pull
request. The branch model and the reasoning behind it are in
[docs/git-workflow.md](docs/git-workflow.md).

No direct commits to `main`, including from maintainers. A repository where the
owner pushes straight to the default branch has no reviewable history, only a
log.

## Inbound rights: DCO, not a CLA

Sign off every commit:

```bash
git commit -s
```

That adds a `Signed-off-by` line certifying you have the right to contribute the
change, under the [Developer Certificate of Origin](https://developercertificate.org/).
CI rejects commits without it.

A contributor licence agreement was considered and not chosen. A CLA is
defensible when relicensing flexibility or patent grants have to be enforceable
in writing, and it costs every first-time contributor a signing step before
their first line lands. Unless you can name the reason you need one, the DCO is
the better trade.

Do not run both. Two mechanisms for the same thing means neither is understood.

## What CI enforces

A pull request does not merge until these pass:

- the expected governance files exist, and a `LICENSE` among them
- every commit is signed off
- every GitHub Action is pinned to a full commit SHA, not a tag
- no binary artifacts are committed
- Markdown lints

None of this is style policing. Each one closes a specific failure: a repository
nobody may legally use, an unclear rights chain, a mutable action reference that
changes under you without a commit, and code that cannot be reviewed because it
is not text.

## What "done" means

- The change does one thing, and the branch name says which
- Documentation lands in the same pull request as the change it describes
- The pull request explains *why*; the diff already shows *what*
- CI passes without exceptions granted

## Reporting problems

Security issues never go in a public issue. See [SECURITY.md](SECURITY.md).
