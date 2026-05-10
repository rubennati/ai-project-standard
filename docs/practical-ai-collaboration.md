# Practical AI Collaboration

This page describes how AI tools fit into a normal GitHub workflow. It assumes you already use AI for code or documentation and want a working model that scales beyond a few sessions.

## Core mental model

Treat AI tools as contributors, not owners. They produce changes; humans review and merge. The repository's existing rules — branch naming, PR review, scope limits — apply to AI work the same way they apply to human work.

## How AI fits into GitHub Flow

- AI works on a short-lived branch, just like a human contributor.
- Output appears as a pull request, not as a direct commit to `main`.
- Reviewers evaluate the diff, not the prompt or the model.
- The PR is the unit of work, the unit of review, and the unit of accountability.

For branch naming and lifecycle, see `docs/git-workflow.md`.

## Why short-lived branches and reviewable PRs matter

- Smaller, scoped diffs are easier to read and easier to revert.
- Long-lived AI branches accumulate unrelated changes and get harder to review with each commit.
- A short branch keeps the diff inside what one human can hold in their head.

## Why direct commits to `main` are discouraged

- AI output can be plausible and wrong; the PR is the only honest correctness check.
- `main` needs to stay deployable and trustworthy. Bypassing review erodes that.
- Once unreviewed AI changes land on `main`, the only recovery is more PRs.

See `docs/branch-protection.md` for the protection rules that enforce this in practice.

## Draft PR vs normal PR

- Open a draft PR for work in progress, exploration, or AI output that has not been self-checked.
- Promote to "ready for review" once the diff is the size you want and you would defend it yourself.
- Drafts make direction visible without claiming completion.

## Small, iterative PRs

- One concern per PR. Resist bundling "while I was in there" cleanups.
- Smaller diffs get reviewed faster and merged sooner.
- If a PR grows during work, split it before requesting review.

## Human approval and merge responsibility

- Merge is a human action. The merging human owns the change after merge.
- Reviewing means understanding the diff, not glancing at it.
- Approve only what you would have written, or what you could defend in a postmortem.

## AI-generated changes are proposals, not truth

- Treat AI suggestions like work from a competent colleague who is occasionally confidently wrong.
- Verify claims that are easy to check: file existence, function signatures, test results, command output.
- The diff is the contract. Prompts, reasoning, and explanations are context, not evidence.

## Multiple AI systems coexisting

Different tools (Claude, Copilot, Codex, others) make different stylistic choices. To prevent conflict:

- Apply the same repo rules to all of them: branch naming, PR review, scope limits, no direct `main` commits.
- Use shared instruction files (`AGENTS.md`, the `.ai/` workspace) as the lingua franca, so each tool reads the same context.
- One agent per task per branch. Avoid multiple AI systems pushing to the same branch simultaneously — the resulting diff becomes nobody's work.
- If two tools disagree, the human makes the call.

## AI as contributor, not owner

- AI does not decide what gets merged.
- AI does not define project direction or scope.
- AI does not close PRs, dismiss reviews, or modify branch protection.
- AI follows repo policy; it does not write it.

## Reviewability and traceability over autonomy

- A PR a maintainer can read in five minutes is more valuable than an autonomous system whose output they cannot audit.
- Clean commits, scoped PRs, and a working `.ai/` decision log outlast any specific AI tool.
- Autonomy is not a substitute for human accountability — it shifts the failure mode, it does not remove it.

## Keeping operational context lightweight

- A small, current `.ai/` workspace beats a large, stale one.
- Update only what is load-bearing for the next session.
- If a file goes stale, fix it or delete it. Do not keep it as decoration.
- Treat git as the source of truth when state files disagree with reality.

## Solo maintainer vs small team

**Solo maintainer:**

- PR required, even on your own work. The PR is the friction that catches AI errors.
- Self-review the diff before merge as if a colleague wrote it.
- Skip rules that require people who do not exist (mandatory second reviewer, code-owner sign-off).

**Small team:**

- Add a reviewer requirement once there are at least two active maintainers.
- Designate review responsibility per area to avoid bottlenecks.
- Keep policies the team will actually follow. Aspirational rules that get bypassed train people to ignore policy in general.

## Common failure patterns

- **Large AI dumps**: a single PR with hundreds of changed lines that no one reviews properly. Split before requesting review.
- **Stale `.ai/` state**: status files no one has updated for weeks. The fix is honest staleness contracts, smaller files, or deletion — not more files.
- **Over-engineered governance**: rules and checks the team will not follow. Match policy to actual capacity.
- **Direct commits to `main`**: bypass the only review checkpoint. The fix is branch protection, not "remembering to use PRs".
- **Treating AI output as authoritative**: skipping review because "the AI ran the tests". Read the diff.
- **Fix-up commits right after merge**: signal that the original PR was merged before it was ready. The fix is slowing down the review pass, not adding more PRs.
