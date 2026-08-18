# Project Brief

The first file to read, and the one to check work against.

## The problem

AI arrived in ordinary work through a text box. Software that reaches your
files, your clients' material and your credentials is now operated in plain
language, by people who were never handed the questions that used to come with
that kind of access.

On a codebase it looks like this: an empty directory, an agent pointed at it,
and whatever comes out. No tests, no review, no licence, no security controls,
no record of why anything was decided. Not because anyone chose that — because
there is no established practice yet to choose instead.

## What this project is

An independent, practical product for using AI in real work — from the first
prompt to an acting agent — supported by a repository that ships the artifacts
and checks behind it.

The website shows what AI makes possible, what useful collaboration looks like,
what the system can reach, which boundaries are needed, and how the result stays
reviewable. It is one product at different depths, not a knowledge base beside a
developer standard.

Blueprints remain opinionated, copyable artifacts. They prescribe how work is
done for a stated trigger and give an agent a frame it has to operate inside —
when it stops and asks, what it may not do and what must be verified.

## The division

| | |
|---|---|
| the website | the public product, organised by what a reader needs to understand, decide, implement or verify |
| `blueprints/` | the opinion, as files you copy |
| `docs/`, `concepts/`, `research/` | canonical rules, technical sources and verified input |
| root, `.ai/`, `.github/`, `site/` | the production and control system behind the product |

Repository origin never determines the website's structure. Information and
artifacts flow into one reader journey; the original remains linked where it is
useful to inspect, copy or contribute.

## Where this is going

The destination is stated once, in `docs/purpose.md`, which is the authority.
It is an outcome, not a structure: structures follow from it and can be
replaced.

## The drift test

Before starting a piece of work, hold it against the destination above. If it
does not help a reader recognise a useful possibility, choose an appropriate
collaboration, understand the system's reach, set a boundary or verify the
result — or strengthen the artifacts that make those outcomes real — it is off
course.

Two failures worth remembering, both recorded in `errors.md`: a blueprint was
built with no AI frame in it at all, in a project whose entire subject is
working with AI; and four consecutive steps produced website work while the
objective was blueprints in the repository.

The second failure was objective drift, not website work. The active objective
is now the website product, and the same test applies in the other direction.

## What holds it to a standard

The same evidence discipline the website runs on applies here. A claim in
`docs/` or in a blueprint names its source and the date it was checked. A
blueprint that says "this is how you work" has been run against a real empty
project, with the result and the date recorded — otherwise it is an assessment
presenting itself as a fact, which is the failure this project exists to correct.
