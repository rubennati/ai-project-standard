# Branch Protection Recommendations

Apply these protection rules to `main`.

## Required settings

- Require pull request before merge
- Require at least one approval
- Dismiss stale approvals when new commits are pushed
- Require status checks to pass
- Require conversation resolution before merge
- Restrict direct pushes to maintainers only
- Block force pushes and branch deletion

## Optional stricter settings

- Require linear history
- Require signed commits
- Require code owner review for protected paths

## Operational guidance

- Keep protection rules documented and reviewed periodically
- Start with minimum safe defaults and tighten as team maturity grows
