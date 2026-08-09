# Blueprints

A blueprint is material you copy into your own project. Not something you read
— something you take.

That is the whole distinction the repository is organised around:

| | |
|---|---|
| `blueprints/` | files you copy out |
| `docs/` | the rule, stated once |
| the website | the explanation, the background, the reasoning |

A blueprint stays lean on purpose. Everything that explains *why* belongs on the
website, linked from the blueprint's README, so the copied files carry no essay
into someone else's repository.

## Shape

```text
blueprints/<id>/
  README.md        what you get, how to take it, what to edit after
  blueprint.yml    the manifest
  files/           the payload — copied verbatim
```

## The three statuses

A blueprint carries a status, and the status says what has been done, not how
good it is.

| Status | Decisions | Payload | Run against a real project |
|---|---|---|---|
| `planned` | made and written down | none yet | no |
| `draft` | made | complete | no |
| `stable` | made | complete | yes |

**`planned` exists because the scope is the harder half.** What problem this
solves, what it deliberately does not cover, and when you should not use it are
answerable before a single file is written — and answering them in the open is
what stops the payload from drifting into whatever was easy to build.

It is not a placeholder. A `planned` blueprint that cannot say what it refuses
to do has not been thought about, and should not have a directory.

Three rules keep it honest:

1. **No `files/` directory.** An empty payload folder looks maintained. A
   missing one cannot be mistaken for anything.
2. **The fourth question changes.** `draft` and `stable` answer *Verified*;
   `planned` answers ***Not built yet*** — plainly, in the README, saying what
   does not exist and what would have to be true to build it.
3. **`blocked-by` is mandatory in the manifest.** Every open question that
   stands between the scope and the payload, listed. `blocked-by: []` is a
   claim that nothing is open, and then the only thing missing is the work.

A `planned` blueprint that sits unchanged for a long time is evidence the
trigger was imagined. Remove it rather than let it decorate the list.

`README.md` is short: what the blueprint is for, the command, and what the
adopter has to change afterwards. Links to the website for anything longer.

`blueprint.yml` is the machine-readable part:

```yaml
id: open-source
title: Open source baseline
status: draft          # planned | draft | stable
applies-to: new-repo   # new-repo | existing-repo
placeholders:
  - OWNER
  - REPO
  - PROJECT_NAME
```

`files/` holds the payload and nothing else. Every path inside it lands in the
adopter's repository at the same relative position.

## Taking one

```bash
npx degit rubennati/ai-project-standard/blueprints/open-source/files my-project
```

The blueprint's README states which placeholders to replace. A bootstrap script
that does the replacing is worth adding once a blueprint has been used a few
times, not before.

## Cut by trigger

The set is cut by **what happened to the adopter**, not by what the answer is
built from.

> One blueprint per trigger. Not one per technology, not one per company size.

Three cuts look natural and are wrong. **By technology** — `rag/`, `mcp/` —
because someone who does not already know which they need cannot choose, which
defeats the point. **By size** — `solo/`, `team/`, `enterprise/` — because a
single expert may need more technique than a company, and a company may need
governance while its AI capability is near zero. **By maturity** —
`starter/`, `advanced/` — same objection, plus it implies everyone is heading
for the top.

The reasoning is in
[research/knowledge-management/DERIVED.md](../research/knowledge-management/DERIVED.md),
which derives it from the material rather than from taste.

## Adding one

1. Name the trigger. If you cannot state the situation the adopter is in
   without naming a technology, there is no blueprint here yet.
2. Create `blueprints/<id>/` — `README.md` and `blueprint.yml`, plus `files/`
   once there is a payload.
3. Add a row to `blueprints/README.md`.
4. Start at `planned` if the scope is settled and nothing is built, `draft` once
   the payload is complete. Promote to `stable` only after the payload has been
   copied into a real project and worked.

The name follows the trigger too. `open-source` and `ai-assisted-development`
name situations; neither names a tool.

## What this repository demonstrates

This repository is an instance of some of its own blueprints, not all of them.
Where it is, the payload and the live file say the same thing and drift is a
defect. Where it is not — a blueprint for a project with application code, for
instance, in a repository that has none — the blueprint is a proposal, and says
so in its README.

Do not let the claim generalise. A blueprint nobody has run is a suggestion.

## Licence

Everything under `blueprints/` is MIT-0 — MIT without the attribution
requirement — declared by `blueprints/LICENSE`. A file obliging an adopter to
carry someone else's copyright notice into their own `CONTRIBUTING.md` is
friction with no upside.

The rest of the repository stays MIT, and the texts written for the website are
CC BY 4.0.

## Removal

A blueprint is removed when it no longer matches what the project would
recommend today. A collection that only ever grows stops being a
recommendation and becomes an archive.
