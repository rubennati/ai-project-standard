# Research

A queue, not a library. Material sits here while it is being verified and worked
into shape, and leaves when it is done.

## Where things end up

Where something lands depends on what it turned out to be, not on where it
started. A short norm is `docs/`; the architecture, decisions and trade-offs
for building something are `concepts/`; files someone copies are a blueprint;
a reproducible implementation, experiment or evaluation is a lab; reasoning
for a general audience, or anything needing an evidence label and a check
date, is the website.

| Kind of material | Destination |
|---|---|
| The rule itself, stated once | `docs/` |
| The architecture, decisions and trade-offs for building something | `concepts/` |
| Files someone copies into their own project | a blueprint |
| A reproducible implementation, experiment or evaluation | `labs/` |
| Explanation, background, comparison, reasoning for a general audience | the website |
| Not yet verified | here, until it is |

## Why this directory exists at all

Everything published on the website carries an evidence level and a check
date, and a concept carries an owner and a review date. Material that has not
been through that yet cannot go straight there — and it should not be lost
either, or held hostage in a long-lived branch.

So it waits here. Briefly.

## The contract

- **Nothing here is published.** The site does not render this directory.
- **Nothing here is normative.** A concept, a rule or a blueprint may point
  back at the round it derived from — for provenance, not as its source of
  truth — but nothing outside `research/` depends on this directory to be
  correct or current. The citing file already carries the settled position.
- **Everything here is English**, like the rest of the repository. Material that
  arrived in another language is translated on the way in and says so.
- **The material stays as received.** Errors found while verifying are recorded
  in the area's `STATUS.md`, not corrected in place — a source you have quietly
  fixed can no longer be checked against what it said.
- **It empties, once nothing still points at it.** A file whose content has
  fully landed is deleted; git keeps the history. Where a concept's
  `derives-from`, a blueprint's reasoning section, or another active file
  still links to a specific research file as its provenance, that file stays
  until the citation is resolved — deleting it would break a working link,
  not tidy one away. An area that has sat untouched for a release cycle with
  nothing left citing it is a signal that it was never going anywhere.

## How something leaves

Each destination has its own bar, stated where that destination is defined:
[`docs/concepts.md`](../docs/concepts.md) for a concept,
[`docs/blueprints.md`](../docs/blueprints.md) for a blueprint,
[`docs/labs.md`](../docs/labs.md) for a lab. For the website specifically, a
claim may be published once it has:

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
