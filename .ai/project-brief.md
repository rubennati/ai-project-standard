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

A starting point that has already made the decisions.

Blueprints are opinionated. They do not hand over a folder structure to fill in;
they prescribe how the work is done and give an agent a frame it has to operate
inside — when it stops and asks, what it may not do, what has to be verified
before anything reaches `main`, which controls are on from the first commit.

Each blueprint is cut by **goal**, not by file list. "An open-source project",
"an open-source project with AI", "one for someone starting with no prior
knowledge, with the tightest guardrails". Different outcomes, different
prescriptions.

## The division

| | |
|---|---|
| `blueprints/` | the opinion, as files you copy |
| `docs/` | the rule, stated once |
| the website | the reasoning — why the frame exists, what the trade-offs are, with evidence labels |
| root, `.ai/`, `.github/` | this project, living by it |

Information flows from the repository up to the website, not the other way
round.

## The drift test

Before starting a piece of work, hold it against the two paragraphs under "The
problem". If the work does not make it more likely that someone building
software with AI ends up with something reviewable, secure and honest about what
it claims — it is off course, and that is worth saying out loud rather than
continuing.

Two failures worth remembering, both recorded in `errors.md`: a blueprint was
built with no AI frame in it at all, in a project whose entire subject is
working with AI; and four consecutive steps produced website work while the
objective was blueprints in the repository.

## What holds it to a standard

The same evidence discipline the website runs on applies here. A claim in
`docs/` or in a blueprint names its source and the date it was checked. A
blueprint that says "this is how you work" has been run against a real empty
project, with the result and the date recorded — otherwise it is an assessment
presenting itself as a fact, which is the failure this project exists to correct.
