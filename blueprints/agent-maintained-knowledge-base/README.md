# Agent-maintained knowledge base

**Status: planned.** Nothing is built. The scope below is decided; see
[*Not built yet*](#not-built-yet) for what that means and what is missing.

## What it solves

A second person now has to be able to trust what is written down.

While you were the only reader, a wrong note, a stale file or an overwritten
paragraph was your own problem. The moment someone else acts on it, the
questions change entirely: who may write, which version applies, who changed
this, is it still true, and was it ever checked. None of those are AI problems.
They are the reason wikis rot.

Adding an agent makes it sharper in both directions. The agent can maintain the
knowledge — read a source, update the right page, mark what it could not
confirm — which is the first thing that has ever made continuous curation
affordable. It can also fill the base with confident, unsourced, wrong text
faster than anyone can review it.

So the problem is not storage. It is: **what has to be true of a directory
before an agent may write into it and a colleague may rely on the result.**

## What you get

An operating contract, a status model, and a review path — for a directory of
files you already have, not a new application.

- **The contract the agent reads.** Drop 4 of the research is explicit that
  nothing about a folder makes it a knowledge base; an instruction file does.
  Never change original sources. New findings go to `pending/` first. Update
  rather than duplicate. Every statement carries a source. Mark unconfirmed
  information as a candidate. Published files change only after review.
- **Two status axes on every knowledge object**, because one is not enough:

  ```yaml
  workflow_status: published   # candidate|pending|reviewed|published|superseded|archived
  claim_type: assessment       # fact|measured|law|assessment|recommendation|hypothesis
  sources: [...]
  verified_at: 2026-08-08
  owner: security
  valid_from: 2026-08-08
  review_after: 2027-02-08
  ```

  **A recommendation can be fully reviewed and published and still be a
  recommendation.** Without the second axis, opinion quietly becomes fact — and
  that is the failure mode of every knowledge base that only tracks whether a
  page is finished.
- **A change chain that names six actors**, not one. Initiator, decision maker,
  generator, executor, credential, approver. `user X changed file Y` stopped
  describing what happened the moment an agent was involved.
- **The review path as a pull request.** Git already solves versioning, diff,
  authorship, branches, review, rollback, history and conflicts. The agent
  proposes on a branch; a human merges. Knowledge governance without building a
  wiki.

## When not to use it

- **You are the only person who reads it.** Then a folder and a habit are
  enough, and every control here is overhead you will abandon in a month. Come
  back when a second person has to rely on it.
- **Your knowledge is mostly binary** — PDFs, spreadsheets, scans, drawings.
  Git reviews text. Put the sources where people already put them and keep only
  the curated knowledge here.
- **Nobody will review.** The whole model rests on a human merging. Without
  that, this is a slower way to publish unreviewed text, and the status fields
  become decoration that makes it look checked.
- **You wanted retrieval.** Answering questions across many documents is a
  different trigger with a different answer. This one is about knowledge being
  correct, not about finding it.
- **You are looking for an "LLM wiki".** Same idea, but that name is not
  standardised and this project does not use it — see
  [REVISIONS.md](../../research/knowledge-management/REVISIONS.md) R1. "Wiki"
  describes one possible form of organisation, nothing more.

## Not built yet

There is no `files/` directory and no payload. Nothing here has been run.

What exists is the scope: the problem, the four components above, and the
boundaries in *When not to use it*. What does not exist is every file that would
have to be written, and — more importantly — any evidence that an agent actually
holds to the contract over weeks rather than for the first three edits.

**Blocking questions**, also in `blueprint.yml`:

1. **Where the base sits relative to the sources.** A hybrid — sources where
   people already keep them, curated knowledge in Git — is the honest
   recommendation, and it is also two systems to keep in step.
2. **What the agent may do without asking.** Writing to `pending/` is plainly
   safe. Editing a published page is plainly not. Everything between those is
   undecided.
3. **Whether the status fields survive contact with a real week.** Seven fields
   on every object is the kind of thing that is filled in carefully for a month
   and then copied blindly.
4. **Whether this repository counts as a first run.** It is a documentation
   repository maintained with an agent under written rules, which is close — and
   close enough to be misleading, because it was not built from this contract.

What would have to be true to build it: at least questions 1 and 2 answered, and
one real base outside this repository to run it against.

## Where the reasoning is

The research this is derived from, in this repository:

- [primitives.md](../../research/knowledge-management/primitives.md) — the
  operating contract, and why "wiki" is the wrong name
- [dimensions.md](../../research/knowledge-management/dimensions.md) — the two
  status axes, and the pull request for knowledge
- [security.md](../../research/knowledge-management/security.md) — the change
  chain, and why integrity outranks confidentiality here
- [DERIVED.md](../../research/knowledge-management/DERIVED.md) — positions P9 to
  P12, which are what this blueprint is made of

## Licence

Once there is a payload it will be MIT-0, like everything under `blueprints/`.
See [`../LICENSE`](../LICENSE).
