# Quality Gates

A gate blocks. A statement of intent does not. Every row names something that
fails and how to run it locally.

| Gate | Command | Blocks a merge |
| --- | --- | --- |
| Markdown lint | `npx markdownlint-cli2 "**/*.md" "!site/node_modules" "!site/dist" "!site/.astro" "!.ai"` | yes |
| Self-conformance | `bash .github/scripts/check-conformance.sh` | yes |
| German language guard | `npm run check:language --prefix site` | yes |
| Site type check | `npm run check --prefix site` | yes |
| Site build | `npm run build --prefix site` | yes |
| Structural docs check | inline in `ci.yml` | yes |
| Link check | lychee, CI only | advisory on pull requests, strict weekly |

Run the first five before opening a pull request. They are what CI runs, so a
green local run is a green pull request.

## Known holes

Stated rather than hidden, because a missing gate is a finding.

- **No unit tests.** Nothing checks the behaviour of `site/src/**` or the shell
  scripts beyond the build succeeding.
- **Payload workflows are not executed.** A blueprint's own `ci.yml` is verified
  by hand when the blueprint is run, not on every commit.
- **Dependabot does not read payload workflows**, so the SHA pins inside
  `blueprints/*/files/.github/workflows/` go stale silently.

## Not automated

Not automated is not unverified. Where correctness turns on meaning, audience,
scope, relevance or consistency, no command settles it: the result is read
against what the work was supposed to achieve, established independently of
the result being judged — by the instruction, the confirmed plan, or a later
clarification a human gave, and never reconstructed from what came out. That
fixes the outcome and not the method, unless the method was the instruction. A
change is read twice, as the artifact it leaves behind and against the scope it
was given, including what it was asked to leave alone. A reader who did not
write it carries the stronger evidence and reports rather than quietly corrects,
which is worth arranging where the consequence or the ambiguity earns it and not
on every change.

- Scope is limited to one concern
- The pull request explains why, not only what
- Documentation lands with the change it describes
- Work was held against the destination in `docs/purpose.md` before it started
- A value in a reusable or reader-facing artifact belongs to its reader, not
  only to the run that produced it — in a log, a pull request or an audit, the
  same value is what belongs there
