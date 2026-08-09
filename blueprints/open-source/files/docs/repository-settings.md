<!-- blueprint payload: open-source — edit upstream, then delete -->
# Repository settings

The CI in this repository assumes these are on. They are settings, not files, so
nothing in the tree can enforce them — this page is the checklist, in the order
that costs least to do.

Work through it once. Most of it never needs touching again.

## Before the first public commit

- [ ] **Choose a licence** and put its full text in `LICENSE`. Until you do,
      nobody may legally use the code, and CI fails.
- [ ] **Default branch is `main`**, and nothing else exists yet.

## Security — Settings → Code security

Each of these is one switch and closes a class of incident.

- [ ] **Private vulnerability reporting.** Without it, the only way to reach you
      about a flaw is a public issue, which is a disclosure.
- [ ] **Secret scanning**, and **push protection** with it. Push protection
      rejects a commit containing a detected credential before it reaches the
      remote. A secret that only ever existed locally does not need rotating.
- [ ] **Dependabot alerts** and **security updates**. Group the updates so the
      pull requests stay reviewable.

## Branch protection — Settings → Rules

Apply to `main`:

- [ ] Require a pull request before merging
- [ ] Require conversation resolution before merging
- [ ] Block force pushes
- [ ] Block deletion
- [ ] Require status checks to pass, once CI runs checks worth requiring
- [ ] **Leave the bypass list empty**

The last one is not decoration. Administrators bypass every rule above it by
default, and on a solo project the account that would bypass them is the one
doing the work. Without it, the other five are advice.

## Collaboration — Settings → General

- [ ] **Enable Discussions.** Questions belong there, not in the issue tracker.
      Without the split, the tracker becomes a support forum within weeks.
- [ ] **Automatically delete head branches** after merge.
- [ ] **Disable merge commits or rebase** — pick one merge strategy and keep it,
      so the history has one shape.

## When you publish releases

- [ ] Tag `vX.Y.Z`, create a GitHub Release, and take the notes from
      `CHANGELOG.md` rather than writing them twice.
- [ ] Consider signed tags once anyone other than you consumes the artifacts.

## What is deliberately not here

Foundation-shaped governance — a `GOVERNANCE.md`, a steering committee, a
release runbook — is left out until contributor volume forces it. Copying that
structure into a two-person project produces a document describing something
that does not exist.
