---
owner: Ruben Nati
reviewed: 2026-08-09
derives-from: research/knowledge-management (drops 4-7)
status: draft
---

# Knowledge lifecycle

How a statement gets into shared knowledge, how it stays true, and how it stops
being true without anyone noticing.

## 1. What you are deciding

Something has to be written down so that other people can rely on it. Not found
— **relied on**. The moment a second person acts on what you wrote, a different
set of questions applies: who may change it, which version holds, is it still
true, who decided that, and how do I get the previous state back.

None of those are AI problems. They are the reason wikis rot, and they were
unsolved long before a model could write into one.

The decision is what has to be true of a body of text before people can trust it
— and, if an agent is going to write into it, what it may do unasked.

## 2. The smallest thing that works

**One person: a folder and a habit.** Every control below is overhead you will
abandon within a month. Write things down, keep them in one place, and delete
what stops being true.

**A small team, low stakes: one owner per area and a date on every page.**
Ownership and a date catch most of what a workflow catches, at a fraction of the
cost. If the page has no owner, the process will not save it.

**Reuse the review you already have.** If the knowledge lives in Git, pull
requests already provide versioning, diff, authorship, review, rollback, history
and conflict handling. Building a review workflow when one is sitting unused
beneath you is the classic mistake here.

Build the model below when knowledge becomes business-critical, when several
people write into the same body, or when an agent writes into it at a speed
nobody can review afterwards.

## 3. The architecture

### Six kinds of state, kept apart

The single most useful structural decision, and it is free.

| Kind | Example | Lifecycle |
|---|---|---|
| **Source data** | the contract, the PDF, the mail | never edited, only superseded |
| **Shared knowledge** | the policy, the decision, the playbook | reviewed, versioned, owned |
| **Operational state** | what the agent is doing right now | overwritten constantly |
| **Personal context** | one person's preferences and scratch notes | private, not synced |
| **Governance** | the rules for all of the above | changes rarely, deliberately |
| **Machine index** | embeddings, search index, cache | regenerated, never authoritative |

They must not share a store. A company policy, someone's private note, an
agent's current task state, an unreviewed draft and a published document have
nothing in common except that they are all text.

This repository is an instance of the split: `.ai/` holds operational state,
`docs/` holds governance, `research/` is an intake queue that empties.

### Two status axes, not one

```text
WORKFLOW STATUS   candidate → pending → reviewed → published
                  → superseded → archived

EPISTEMIC STATUS  fact · measured · law · assessment
                  · recommendation · hypothesis
```

They are independent, and that is the point. **A recommendation can be fully
reviewed and published and still be a recommendation.** Track only the first
axis and opinion silently becomes fact the moment it is approved — which is the
failure mode of essentially every internal wiki.

### What a knowledge object carries

```yaml
id: knowledge-184
title: "EU hosting and data sovereignty"
workflow_status: published
claim_type: assessment
sources: [source-17, source-29]
owner: security
reviewer: ruben
classification: internal
valid_from: 2026-08-08
valid_until: null
review_after: 2027-02-08
verified_at: 2026-08-08
supersedes: knowledge-131
```

### Time is its own dimension

Knowledge is not only *what is true* but **when it was true**.

```text
2024   Server A runs Windows Server 2019
2025   Server A runs Windows Server 2022
2026   Server A has been decommissioned
```

A plain search finds all three and cannot rank them. `valid_from`,
`valid_until` and `supersedes` are what make the third one win — and they matter
most for exactly the content people trust most: policies, contracts, prices,
infrastructure and org structure.

### The write path, when an agent is involved

```text
agent proposes ──► pending ──► human reviews ──► published
                     │
                     └── rejected, with the reason kept

personal state ──► agent writes directly, no review
```

Two rules make this work rather than merely exist: the agent may **never** edit
a source, and it may **never** move something to published. Everything else is
negotiable.

## 4. The decision points

### 4.1 Where the knowledge lives

| | Good at | Weak at |
|---|---|---|
| **A file-and-Git repository** | versioning, diff, review, rollback, agents, audit | non-technical contributors, binary sources |
| **A wiki or workspace product** | everyone can contribute, rich media, search | reviewing a change, proving what it looked like in March |
| **A document management system** | the originals, retention, permissions | being knowledge rather than storage |

The honest recommendation is a hybrid: sources where people already put them,
curated knowledge where it can be reviewed. The cost is that they must be kept
in step, and that cost is real.

### 4.2 What the agent may do unasked

```text
read anything it is allowed to see        yes
write to pending/                          yes
propose a change to a published page       yes, as a proposal
edit a published page directly             no
change an original source                  never
move anything to published                 no
delete anything                            no
```

The middle rows are where projects differ. The first and last are not.

### 4.3 How many fields to actually keep

Seven metadata fields on every object is the sort of thing that is filled in
carefully for a month and copied blindly thereafter. Start with four —
**owner, claim type, verified date, review date** — and add only what something
downstream actually reads. A field nothing consumes is a field nothing corrects.

### 4.4 What triggers a review

Time-based review alone produces a queue nobody works. Better in combination:

```text
review_after date reached
the source document changed
a decision superseded it
someone flagged it as wrong
it was cited in an answer that turned out to be wrong
```

The last one is the most valuable and the most often missing.

### 4.5 Who owns what

Not a technical question. HR policy is owned by HR; the security policy by
whoever runs security; the architecture by whoever runs it. AI may help write it
and must not hold ownership, because ownership is what makes someone answer when
it turns out to be wrong.

### 4.6 What is irreplaceable

```text
IRREPLACEABLE     sources · curated knowledge · human decisions · review history
RECONSTRUCTABLE   embeddings · search index · rendered output · cache
```

Version, back up and restore-test the first row. Rebuild the second. Treating
them the same costs money and protects the wrong things.

## 5. How it fails

| Failure | Why it is hard to see |
|---|---|
| **Opinion becomes fact** | A recommendation is reviewed and published, and the "published" badge reads as truth |
| **Stale published** | The page is correct, well-sourced, reviewed, and describes last year |
| **Duplicate instead of update** | Both versions are findable, both look current, and they disagree |
| **Owner left** | Nothing breaks. The page simply stops being maintained, and nobody is notified |
| **Agent writes at scale** | Fifty plausible pages arrive faster than anyone can review, and reviewing becomes rubber-stamping |
| **Poisoned knowledge** | Something false is ingested, published and acted on. The attack was on the knowledge, not on the reader |
| **Review that checks the wrong thing** | Grammar and formatting are checked; sources and claim type are not |

**Integrity matters more than confidentiality here.** Human error, a
hallucination, a stale source, a misread table and an attacker produce the same
output — a false statement, published, retrieved, acted on. Four of those five
involve nobody hostile, which is why access control alone does not protect a
knowledge base.

### The control that costs least

Every statement carries a source, and anything unconfirmed is marked as a
candidate. It is cheap, it is checkable by a machine, and it converts the most
common failure — confident text with nothing behind it — into something visible.

## Related

- The blueprint this concept underlies:
  [`agent-maintained-knowledge-base`](../blueprints/agent-maintained-knowledge-base/)
  — planned
- Finding knowledge rather than governing it:
  [retrieval-architecture](./retrieval-architecture.md)
- What the agent is allowed to do at all:
  [agent-action-control](./agent-action-control.md)
- Research:
  [primitives.md](../research/knowledge-management/primitives.md),
  [dimensions.md](../research/knowledge-management/dimensions.md),
  [cross-cutting.md](../research/knowledge-management/cross-cutting.md),
  [security.md](../research/knowledge-management/security.md)

## Open

- **The generic name for the artefact.** "LLM wiki" is retired here — see
  [REVISIONS.md](../research/knowledge-management/REVISIONS.md) R1 — and the six
  candidate replacements are all in use and none is standard.
- **Whether this repository counts as a first run.** It is maintained with an
  agent under written rules, which is close enough to be misleading: it was not
  built from this model.
