# Practical AI Collaboration

This guide covers real-world workflows for solo maintainers and small teams working with AI systems such as Claude, Copilot, Codex, Cursor, and similar tools in the same repository.

## The Core Principle: GitHub Is Your Coordination Layer

You do not need a separate coordination system for most small-team AI work. GitHub's native features already handle multi-AI and human collaboration:

- Branches show what is being worked on.
- Pull requests document intent, status, and review.
- Commits record decisions at the point they are made.
- PR comments carry feedback and between-session context.

Instead of treating `.ai/state.md` as the single source of truth, keep durable coordination in GitHub. This works because GitHub is visible to humans and AI systems, versioned, reviewable, and tied directly to the code or documentation being changed.

Use `.ai/` files when they add useful operational context. Do not maintain them as a second, parallel project tracker when branch names and PRs already tell the truth.

## Scenarios and Workflows

### Scenario 1: Solo Maintainer with Occasional AI Assistance

Use this when you mostly work alone and occasionally ask an AI system to help with a bug fix, documentation improvement, or small feature.

Workflow:

1. Identify the work.
2. Create a branch such as `fix/typo-in-readme` or `docs/clarify-workflow`.
3. Use Copilot inline, Claude in chat, Codex, Cursor, or another AI tool to assist.
4. Review the changes yourself.
5. Create a PR with a clear description.
6. Merge when the change is ready.

You can usually skip:

- Detailed `.ai/` state updates for every small task.
- Complex branch protection rules beyond what protects `main`.
- Team review cycles that require people who do not exist.

Keep:

- A branch naming convention.
- PR descriptions that explain what changed and why.
- Review through PRs, even when the reviewer is future-you.

Example:

```text
Branch: docs/fix-outdated-workflow-reference
PR title: Fix outdated docs reference in git-workflow.md
PR description: Removed a reference to a non-existent routing file and linked to the actual documentation.
```

No `.ai/state.md` update is needed for a small, self-contained correction. The PR is the state.

### Scenario 2: Small Team with One AI System

Use this when two or three people collaborate and one AI tool is used as an assistant.

Workflow:

1. Person A opens an issue describing the work.
2. Person A or B creates a branch and starts work, possibly with AI assistance.
3. The AI system reads the issue, branch name, and relevant repository instructions.
4. Person B reviews the PR and adds comments or suggestions.
5. Person A addresses feedback and updates the branch.
6. The PR is merged when approved.

Where `.ai/` files help:

- `.ai/state.md` can track the current project focus.
- `.ai/decisions.md` can record architectural or governance choices.
- `.ai/routing.md` can point each task type to the right context.

Keep `.ai/` minimal:

- Update `.ai/state.md` only when the team changes major focus.
- Use `.ai/decisions.md` for decisions that will outlive the current branch.
- Do not maintain empty files such as `.ai/errors.md` or `.ai/risks.md` unless they contain real entries.

Example:

```text
Issue #12: Improve branch protection documentation
Branch: docs/branch-protection-clarity
PR description: Addresses #12. Adds minimal and strict branch protection examples and updates .ai/state.md to reflect the current objective.
```

Rule of thumb: update `.ai/state.md` when a person would need it to catch up after a day away from the project, not when everyone is working synchronously.

### Scenario 3: One Maintainer with Multiple AI Systems in Parallel Sessions

The risk is state collision. Claude might be drafting documentation while Copilot is checking links and Codex is tightening workflow language. If every session edits `.ai/state.md`, the last update can overwrite useful context from another session.

Safe workflow:

1. Use GitHub branches as the coordination point.
2. Give each AI session its own branch.
3. Have each session read the PR description, PR comments, branch name, and recent commits.
4. Keep the human maintainer as the coordinator.
5. Review and merge each PR in the order that makes sense.

Example:

```text
Session 1: Claude
Branch: feature/improve-readme-clarity
Work: Draft README improvements and open a PR with examples.

Session 2: Copilot
Branch: docs/add-malformed-links-section
Work: Check for broken internal links and open a separate PR with findings.
```

Why this works:

- There is no shared `.ai/state.md` collision.
- PR comments provide session continuity.
- GitHub history is permanent and reviewable.
- The human maintainer controls merge order.

Document in each PR:

- What the AI system was asked to do.
- What files it touched.
- Any assumptions it made about project structure.
- Any remaining questions or risks.

### Scenario 4: One Maintainer with an Interrupted AI Session

Use this when work starts in one AI system, gets interrupted, and needs to be resumed later by another system or by a human.

Workflow:

1. Before the session ends, or immediately after interruption, create a PR from the current branch.
2. Mark the PR as draft if the work is incomplete.
3. Write a PR description that explains what was attempted, what succeeded, what failed, and what remains.
4. Resume later by reading the PR description, commits, branch state, and review comments.

Example draft PR description:

```markdown
## Draft: Refactor documentation structure

### What was done
- Moved docs/getting-started.md content to docs/onboarding.md.
- Updated cross-references in docs/index.md.
- Found a broken reference in .ai/routing.md.

### What still needs work
- Add the missing domain files or remove stale routing references.
- Check all links in the new structure.
- Update README.md to reference the new docs layout.

### Ready for
- Another AI session or maintainer to continue from branch `docs/refactor-structure`.
```

This is stronger than relying on `.ai/state.md` alone because the PR is attached to the actual branch, visible in review, and naturally updated as the work changes.

### Scenario 5: Mixed Human and AI Contributions in One PR

Use this when a human starts a change, asks AI for help, then refines the result before opening or updating a PR.

Workflow:

1. Start work locally on a branch.
2. Ask an AI system for help with a specific part.
3. Review and refine the AI-generated changes.
4. Push the branch with clear commits.
5. Open a PR with a complete description of the work.

Example PR note:

```text
Implemented feature X with AI assistance.

Changes:
- Initial implementation: maintainer
- Edge case refinement: Claude, reviewed by maintainer
- Testing and final cleanup: maintainer

Reviewer note:
AI-assisted changes are in commits abc1234..def5678. Please review those carefully.
```

GitHub shows the full commit history, so reviewers can inspect exactly what changed.

## When to Use `.ai/` Files

Use `.ai/state.md` when:

- A team of three or more people works asynchronously.
- Work is being handed off for several days.
- The repository needs a current operational snapshot beyond any single PR.
- The project phase or objective changes.

Skip `.ai/state.md` updates when:

- The work is a small, self-contained PR.
- You are working solo and the branch plus PR description are clear.
- The update would duplicate what is already obvious from GitHub.

Use `.ai/decisions.md` when:

- You make an architectural or governance choice that affects future work.
- You reject a meaningful alternative and want future contributors to know why.
- The decision is broader than a single PR.

Skip `.ai/decisions.md` when:

- The change is obvious from the commit message or PR discussion.
- You are only restating an existing documented workflow.
- The note would become stale immediately after merge.

Avoid maintaining empty operational files. `.ai/errors.md`, `.ai/risks.md`, and `.ai/tasks.md` are useful only when they contain real, current entries.

## Draft PRs vs Normal PRs

Use a draft PR for:

- Work in progress.
- Incomplete AI sessions.
- Exploratory changes.
- Branches waiting for direction or feedback.

Use a normal PR for:

- Complete, self-contained changes.
- Work ready for review and merge.
- Changes where the maintainer can explain and defend the diff.

Draft PRs are especially useful when one AI system resumes another system's work. The draft state prevents accidental merge signals while preserving all context in GitHub.

## Practical Rules for Small Teams

### Rule 1: Branch Names Are Documentation

Good branch names:

- `fix/broken-link-in-ai-routing`
- `docs/add-ai-collaboration-guide`
- `feature/improve-readme-clarity`

Weak branch names:

- `fix/docs`
- `update-stuff`
- `misc`

### Rule 2: PR Descriptions Beat State Files for Session Context

Include in every PR:

- What changed and why.
- Any assumptions made.
- Any unresolved questions.
- Whether AI assisted the work and what it contributed.

### Rule 3: Use PR Comments for Between-Session Context

Example:

```text
Human: The link in routing.md still points to a file that does not exist.
AI session: Fixed in the latest commit and updated the docs index.
```

PR comments are durable, visible, and tied to the work under review.

### Rule 4: Commit to `main` Only Through Merged PRs

- Always use a PR, even when working solo.
- Keep `main` stable and reviewable.
- Treat direct commits to `main` as an exception that requires explicit human approval and a strong reason.

### Rule 5: Merge Sooner Rather Than Later

- Do not let PRs stay open for weeks.
- Prefer small, merged PRs over large, stalled ones.
- For small teams, daily or every-few-days merge cadence is usually healthier than long-running branches.

## Coexistence of Multiple AI Systems

The same repository can use Claude, Copilot, Codex, Cursor, and other tools without collision when they share GitHub as the coordination layer.

AI systems usually cannot read each other's chat context:

- Claude does not see Copilot's previous session.
- Copilot does not see Claude's memory from yesterday.
- Codex does not automatically inherit another tool's private reasoning.

That is acceptable. Each system should start fresh from shared repository context:

1. `README.md` for project scope.
2. `CONTRIBUTING.md` for contribution rules.
3. `AGENTS.md` for AI-specific instructions.
4. The current branch name for the task boundary.
5. The PR description for work status.
6. Recent commits for what actually changed.
7. Open issues and PR comments for requested follow-up.

No collision occurs when:

- Each AI system works on its own branch.
- PRs are merged in sequence.
- The human maintainer chooses merge order.
- `.ai/state.md` is used as helpful context, not as a bottleneck.

Example:

```text
Claude branch: feature/improve-readme
Copilot branch: docs/fix-broken-links
Maintainer action: Review both PRs and merge them in order.
```

After merge, the next session reads the updated `main` branch and starts from the current repository state.

## Avoiding Context Loss

The biggest risk in multi-session AI work is losing context. Prevent it by leaving context where the next contributor will naturally look.

Before ending a session:

1. Commit the work, even if the branch is incomplete.
2. Create a PR, using draft status when appropriate.
3. Document what was done and what remains in the PR description.
4. Add PR comments for gotchas, patterns, or review questions.

When resuming:

1. Read the PR description.
2. Read recent commits.
3. Inspect the branch diff.
4. Check review comments and unresolved conversations.

Do not rely on:

- `.ai/state.md` as the only continuity mechanism.
- AI chat history that may be lost or unavailable.
- Code comments for session notes.

GitHub PR comments are the session bridge.

## Real Expectations: When This Gets Hard

This works smoothly for:

- Solo maintainers with occasional AI assistance.
- Two- or three-person teams using one primary AI system.
- Clear, bounded tasks such as bug fixes, documentation updates, and focused refactors.
- Synchronous or loosely asynchronous work.

This gets complicated with:

- Five or more people and multiple AI systems active at once.
- Long, interdependent work such as repository-wide refactors.
- Coordination that requires AI systems to sequence work across several branches.
- Teams with high turnover and heavy onboarding needs.

In those cases, add more structure: stronger `.ai/` workspace discipline, formal decision logs, ownership boundaries, stricter branch protection, and clearer review requirements. Do not start there unless the project needs it.

## Summary

For solo maintainers and small teams:

1. Use GitHub branches and PRs as the coordination layer.
2. Write clear PR descriptions because they are the session bridge.
3. Use `.ai/` files only when team size, task complexity, or handoff needs justify them.
4. Treat draft PRs as incomplete work.
5. Commit early enough to create checkpoints.
6. Keep AI systems on separate branches.
7. Trust the merge process to provide review, ordering, and accountability.

Practical mantra: if a workflow works for humans passing changes through GitHub, it can work for mixed human and AI teams too.
