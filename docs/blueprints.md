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

`README.md` is short: what the blueprint is for, the command, and what the
adopter has to change afterwards. Links to the website for anything longer.

`blueprint.yml` is the machine-readable part:

```yaml
id: open-source
title: Open source baseline
status: draft          # draft | stable
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

## Adding one

1. Create `blueprints/<id>/` with the three parts above.
2. Add a row to `blueprints/README.md`.
3. Start at `status: draft`. Promote to `stable` only once the payload has been
   copied into a real project and worked.

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
