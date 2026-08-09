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

- Scope is limited to one concern
- The pull request explains why, not only what
- Documentation lands with the change it describes
- Work was held against the destination in `docs/purpose.md` before it started
