# Branch Protection Recommendations

Apply these protection rules to `main`. Start with the minimum and add more as the team grows.

## Minimum (solo maintainer or small team)

- Require a pull request before merge
- Require conversation resolution before merge
- Block force pushes
- Block branch deletion
- Restrict direct pushes to maintainers
- **Leave the bypass list empty** — in a ruleset, clear "Bypass list"; in a classic branch protection rule, tick "Do not allow bypassing the above settings"

The last one is not optional decoration. Repository admins and org owners bypass every rule above it by default, so without it the other five are advisory rather than enforced — and on a solo project the one account that would bypass them is the one doing the work.

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
