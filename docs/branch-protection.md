# Branch Protection Recommendations

Apply these protection rules to `main`. Start with the minimum and add more as the team grows.

## Minimum (solo maintainer or small team)

- Require a pull request before merge
- Require conversation resolution before merge
- Block force pushes
- Block branch deletion
- Restrict direct pushes to maintainers

These can be enforced by one person and do not depend on a second reviewer or on CI.

## Scaling up (multiple contributors)

Add as the team grows or as supporting tooling lands:

- Require at least one approval
- Dismiss stale approvals when new commits are pushed
- Require status checks to pass (only once CI runs meaningful checks)
- Require linear history
- Require signed commits
- Require code owner review for protected paths (needs a `CODEOWNERS` file)

## Operational guidance

- Document any rules you turn on so contributors know what to expect.
- Revisit settings when team size, CI, or release cadence changes.
