# Setup Interview — this project's answers

The questions live in the blueprint that ships them:
[`blueprints/ai-assisted-development/files/INIT.md`](../blueprints/ai-assisted-development/files/INIT.md).
Keeping a second copy here would be two versions of one thing.

This file holds **this project's answers**, so the repository shows what a
filled-in workspace looks like rather than describing one.

Answered 2026-08-09.

## What this is

A repository standard for developers bringing an AI agent into their work,
delivered as blueprints. The destination is in `docs/purpose.md`. Out of scope:
application code, framework conventions, secrets management beyond pointing at
platform features, and everything the website covers.

## Who decides

Ruben Nati maintains and merges. Agents may commit and push to non-`main`
branches; they must not merge, force-push, or change protection. Navigation,
information architecture, public URLs and the project's vocabulary need a human
decision first — `AGENTS.md` → Change scope.

## How work is done

Short-lived branches off `main`, one concern each, merged through a pull
request. Commands and what blocks a merge: `quality-gates.md`. There are no unit
tests; the gates are structural and factual.

## Off limits

- `site/dist/`, `site/.astro/`, `site/node_modules/` — build output
- `blueprints/*/files/**` may only be edited here, never as a copy
- `CHANGELOG.md`, `decisions.md`, `progress.md`, `errors.md` are append-only

## Constraints that outlive the session

- English only, everywhere except the website's translated pages
- Repository and `docs/` MIT, `blueprints/` MIT-0, website texts CC BY 4.0
- Claims about the outside world carry a primary source and a check date
- The website is broader than the repository, and that is correct
