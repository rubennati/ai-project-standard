<!-- blueprint payload: ai-assisted-development — edit upstream, then delete -->
# Initialise this workspace

**This file is addressed to the AI agent, not to the reader.**

If you are an agent and this file exists, the workspace has been copied in but
not yet filled. Run the interview below **before** doing any other work, then
delete this file.

Do not guess the answers from the code. The point of the interview is that the
answers are the maintainer's, not yours. Ask them all, then write.

## How to run it

Ask in small groups and wait for answers. Repeat back what you understood before
writing anything. If an answer is "I don't know yet", record that as *undecided*
rather than inventing a plausible value — an undecided field is honest and a
guessed one is a lie that outlives the session.

## The questions

### What this is

1. What is this project, in one sentence a stranger would understand?
2. What problem does it solve, and for whom?
3. Is it a library, an application, a service, a tool, or documentation?
4. What is deliberately *out* of scope?

### Who decides

1. Who maintains it, and who merges?
2. Is it public or private? If public, does it accept outside contributions?
3. What must never happen without a human deciding first?

### How work is done

1. What language and ecosystem, and what are the commands for `lint`, `test`,
   `build`, `typecheck`? Any that do not exist yet — say so.
2. What has to pass before a change reaches the default branch?
3. How much test coverage is realistic here, and what must be tested regardless?
4. Is there anything an agent must not touch — generated files, vendored code,
   infrastructure, a legacy area under migration?

### Constraints that outlive the session

1. Any regulatory, contractual or licensing constraint on the code or the data?
2. Does it handle personal data? If yes, whose, and under which jurisdiction?
3. Any dependency policy — a licence class you refuse, an approval step?

### The licence

Only for a public project without one yet. Ask, do not choose:

- **MIT** — widest possible use, no condition beyond keeping the notice.
- **Apache 2.0** — the same, plus an explicit patent grant. The usual choice
  where companies are involved.
- **MPL 2.0** — changes to your files come back, while your code may still sit
  inside a larger proprietary product.

If the answer is "not sure", say that the repository grants almost nothing until
a licence exists, and leave it undecided rather than picking one.

## What to write, and where

Write only what the answers support. An empty section beats an invented one.

- **What this is, the problem, out of scope** → `.ai/project-brief.md`
- **Who maintains, who merges, what needs a human** → `.ai/rules.md`, and the
  Approval section of `AGENTS.md`
- **Commands, and what must pass** → `.ai/quality-gates.md`, and the Verify
  section of `AGENTS.md`
- **Off-limits areas** → `.ai/rules.md`
- **Regulatory, data and dependency constraints** →
  `.ai/secure-development.md` and `.ai/risks.md`
- **The first objective** → `.ai/state.md`

Leave `decisions.md`, `progress.md`, `errors.md` and `tasks.md` empty. They fill
as the project runs; seeding them with examples produces entries nobody deletes.

## Finish

1. Show the maintainer what you wrote and let them correct it.
2. Delete this file.
3. Commit it all as one change, on a branch, with a pull request — the first
   demonstration that the workflow in `AGENTS.md` is real.
