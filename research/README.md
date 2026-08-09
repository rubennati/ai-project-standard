# Research

A queue, not a library. Material sits here while it is being verified and worked
into shape, and leaves when it is done.

## Where things end up

Depth belongs on the website. That is what it is for: cross-references,
diagrams, comparisons, the reasoning behind a recommendation. The repository
stays lean — a short norm in `docs/`, blueprints that are copied rather than
read.

| Kind of material | Destination |
|---|---|
| Explanation, background, comparison, reasoning | the website |
| The rule itself, stated once | `docs/` |
| Files someone copies into their own project | a blueprint |
| Not yet verified | here, until it is |

## Why this directory exists at all

Everything published on the website carries an evidence level and a check date.
Material that has not been through that yet cannot go there — and it should not
be lost either, or held hostage in a long-lived branch.

So it waits here. Briefly.

## The contract

- **Nothing here is published.** The site does not render this directory.
- **Nothing here is normative.** No file outside `research/` cites it.
- **Everything here is English**, like the rest of the repository. Material that
  arrived in another language is translated on the way in and says so.
- **The material stays as received.** Errors found while verifying are recorded
  in the area's `STATUS.md`, not corrected in place — a source you have quietly
  fixed can no longer be checked against what it said.
- **It empties.** A file whose content has been published is deleted; git keeps
  the history. An area that has sat untouched for a release cycle is a signal
  that it was never going anywhere.

## How something leaves

A claim may be published once it has:

1. a primary source — see the ranking in `site/src/data/evidence.ts`;
2. a check date;
3. an evidence level (`fact`, `measured`, `law`, `assessment`, `advice`).

`STATUS.md` in each area records what has been checked, what moved where, and
what is still open.

## Layout

```text
research/
  <area>/
    STATUS.md      what is verified, what moved, what is open
    *.md           the material
```
