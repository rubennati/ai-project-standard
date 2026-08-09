# AI Workspace Layer

`.ai/` is the operational workspace for AI-assisted work in this repository.

## The division

Git already records what happened, in a form both humans and tools can read.
`.ai/` exists for what git cannot express.

| | Owns |
|---|---|
| **Git** — branches, commits, pull requests, `CHANGELOG.md` | What was done, by whom, when, and in what order |
| **`.ai/`** | Why the project exists, what holds across sessions, what an agent may and may not do, and where to look for each kind of task |

**On any conflict about a fact — which branch exists, what was merged, what a
pull request says — git wins.** A `.ai/` file that disagrees is out of date, not
authoritative. Every state file in this repository carries that line at the top.

The failure this prevents is a second project tracker: `tasks.md` restating open
issues, `progress.md` restating the changelog, `state.md` restating the branch
you are on. Two records of the same thing drift, and then nobody knows which to
believe.

## The files

**Durable** — true until a decision changes them. Read them; write to them
rarely and deliberately.

- `project-brief.md` — the problem the project exists for, and the test for
  whether current work still serves it. Read this first.
- `rules.md`, `quality-gates.md`, `secure-development.md` — what must hold.
- `decisions.md` — architectural decisions with the reasoning, dated. Append
  only; a decision that turns out wrong gets a new entry, not an edit.
- `routing.md` — which files to read for which kind of task, so a session loads
  the minimum context rather than everything.
- `domains/` — guidance per kind of work.
- `setup-interview.md` — the questions to answer when this workspace is adopted
  into a new project.

**Current** — describes now, and only now.

- `state.md` — the objective, the constraints, and the facts that are true today.
  Update it when the objective, a constraint or a decision changes. Do **not**
  update it to mirror a branch, a pull request or a commit.
- `tasks.md` — what is queued and not yet started. Anything already being worked
  on is a branch, and the branch is the record.

**Logs** — appended when there is something to append, and otherwise left alone.

- `progress.md` — milestone-level entries only. Not a changelog; `CHANGELOG.md`
  is the changelog.
- `errors.md` — substantive process failures and what was changed in response.
- `risks.md` — what is actually at risk, reviewed periodically.

An empty log file stays empty. Do not keep placeholder entries alive to make a
directory look complete.

## When to write

Ask whether a person returning after a day away would need it, and whether git
already says it. If git says it, do not repeat it.

A small self-contained change needs no `.ai/` update at all — the branch name
and the pull-request description are the state. See
[Practical AI Collaboration](./practical-ai-collaboration.md) for the workflows
this plays out in.

## Why it is separate from `docs/`

`docs/` is written for a reader. `.ai/` is written for whoever — or whatever —
picks the work up next. Mixing them means process notes end up in adopter-facing
documentation, and adopter-facing prose ends up being loaded into every agent's
context for no reason.
