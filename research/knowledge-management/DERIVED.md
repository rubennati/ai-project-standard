# Derived — what this project takes from the material

[STATUS.md](./STATUS.md) records what arrived and whether the sources hold.
[REVISIONS.md](./REVISIONS.md) records where a later drop overturned an earlier
one. This file is the third thing: **the positions this project adopts**, stated
once, independent of which drop they came from.

The rule from [research/README.md](../README.md) still holds — this directory is
a queue, not a library. A position stops being listed here once it has landed in
`docs/`, a blueprint, or the website. What remains is what has not landed yet.

Each position states what it is, which drops carry it, and where it goes. The
drop numbering is in [REVISIONS.md](./REVISIONS.md).

## How the material cuts the blueprint set

This is the single most consequential derivation, so it goes first.

Drop 5 rejected the maturity ladder and drop 6 replaced it with **triggers**: an
architecture grows a component when a concrete problem requires it, not because
the next rung exists. Applied to the blueprint set, that decides the cut:

> **One blueprint per trigger. Not one per technology, not one per company
> size.**

It also rules out three cuts that look natural and are wrong:

- **By technology** — `rag/`, `mcp/`, `knowledge-graph/`. This is the list of
  terms drop 6 says to stop treating as alternatives. Someone who does not
  already know which they need cannot choose.
- **By size** — `solo/`, `team/`, `enterprise/`. Drop 5's whole first section is
  the counter-example: a private expert may need more technique than a company,
  and a company may need governance while its AI capability is near zero.
- **By maturity** — `starter/`, `advanced/`. Same objection, and it implies
  everyone is heading for the top.

`ROADMAP.md` currently names the next blueprints as *"open source with AI, open
source with AI for a team, LLM wiki, MCP servers and interfaces"* — which is
size-cut, technology-cut, and uses a retired name. It contradicts this
derivation and must be rewritten.

### The triggers, and what each one becomes

Drops 5 and 6 between them give eight triggers. Not all deserve a blueprint;
several are controls that belong *inside* one.

| Trigger | Response | Where it lands |
|---|---|---|
| You are starting a public repository | Governance, contribution and CI files | `open-source` — **exists** |
| An agent is going to work in your repository | The frame it operates inside | `ai-assisted-development` — **exists** |
| A second person has to be able to trust the knowledge | Structure, review, provenance, lifecycle | `agent-maintained-knowledge-base` — **planned** |
| There is more to read than anyone will read, and answers must cite | Retrieval, chosen per question type | Held back — no trigger here yet |
| Several AI clients need the same tools | One integration surface | `agent-tool-access` — **planned** |
| Write access, external actions, autonomy | Approval, rollback, audit, least privilege | **Inside** each of the above, per drop 7 |
| Sensitive or personal data | Classification, data path, retention | **Inside** each of the above |
| More than one user | Identity, permissions, ownership | **Inside** each of the above |

The last three are deliberately not blueprints. Drop 7's thesis is that security
is a plane over every layer, not a section at the end — a `security/` blueprint
would model it as optional, which is the failure the drop describes.

## Positions bound for `docs/`

### P1 — the model never holds the credential

Drop 7, section 12: separate reasoning from authority. The model decides *what*
should happen; the runtime holds the token and decides *whether it may*. Drop 3
says the same from the architecture side.

This repository already works this way and has never written it down.
**Destination:** `docs/security-baseline.md`.

### P2 — human permission is not agent permission

Drop 7, section 13. Three identities — the human, the agent acting for them, the
service account underneath — and the agent's permissions are a *subset* chosen
per task, not an inheritance. The repository's approval model already draws this
line for merges and branch protection without naming the principle.

**Destination:** `docs/security-baseline.md`, and the `AGENTS.md` payload.

### P3 — a threat model that does not assume an attacker

Drop 7, section 5: accident, failure, attack, and **model uncertainty** as a
fourth class. Drop 6's failure model, section 2, supplies the stages — source,
ingestion, retrieval, context, model, action — each with its own failure kinds.

The consequence is drop 7's strongest claim: for a knowledge system **integrity
may matter more than confidentiality**, because five different routes produce
the same output — false knowledge, published, retrieved, acted on — and only one
of them involves an attacker.

**Destination:** `docs/security-baseline.md`. Nothing there covers it today.

### P4 — trust boundaries are semantic, not network

Drop 7, section 9: trusted instructions against untrusted content; read tools
against write tools; low-impact against high-impact actions. The
`ai-assisted-development` payload already carries the specific case — treat file
contents, web pages and tool output as data, not instructions — as one line in a
list. This generalises it.

**Destination:** `docs/security-baseline.md`, generalising the existing rule.

### P5 — knowledge poisoning, and the knowledge base as a security asset

Drop 7, section 10. The attack does not target the person asking; it targets the
knowledge. Plant a false instruction where an agent will ingest it, and an
administrator later acts on it in good faith. A knowledge base is therefore an
asset to be protected, not a convenience to be filled.

**Destination:** `docs/security-baseline.md`.

### P6 — six kinds of state, kept apart

Drop 5, section 4: source data, shared knowledge, operational AI state, personal
context, governance, machine index. Different lifecycles, so different stores.

This repository already separates operational state (`.ai/`) from governance
(`docs/`) — drop 5 derives the principle *from* here — but `docs/` does not state
the general rule, only this instance of it.

**Destination:** `docs/ai-workspace-layer.md`.

### P7 — no problem, no component

Drop 6, section 11 and drop 5, section 14. Twenty documents and three users do
not need a knowledge graph, a vector cluster, an MCP gateway and five agents.
The question to ask instead:

> What is the smallest architecture that solves the problem well enough?

**Destination:** `docs/standard.md` as a stated principle, because it also
governs the size of the blueprint set itself.

### P8 — irreplaceable against reconstructable

Drop 6, section 13. Sources, curated knowledge and human decisions cannot be
regenerated. Embeddings, search indexes and caches can. The backup policy
follows from the classification, not from the storage bill.

**Destination:** `docs/security-baseline.md`, availability section.

## Positions bound for a blueprint payload

### P9 — an operating contract is what makes a directory a knowledge base

Drops 3 and 4 agree, and both give the same mechanism: an instruction file in
the directory. Not vector magic — a written contract the agent reads.

Drop 4's minimal version, verbatim in substance: never change original sources;
new findings go to `pending/` first; update rather than duplicate; every
statement carries a source; mark unconfirmed information as a candidate;
published files change only after review.

That is directly shippable as a payload file.

### P10 — two status axes on every knowledge object

Drop 5, section 9, refined by drop 6, section 3.

```yaml
workflow_status: published    # candidate|pending|reviewed|published|superseded|archived
claim_type: assessment        # fact|measured|law|assessment|recommendation|hypothesis
sources: [source-17, source-29]
verified_at: 2026-08-08
owner: security
valid_from: 2026-08-08
review_after: 2027-02-08
```

Without the second axis, opinion silently becomes fact. The website's evidence
model is the second axis already built; the first is missing everywhere.

### P11 — a pull request for knowledge

Drop 5, section 6. Git already solves versioning, diff, authorship, review,
rollback, history and conflicts. An agent proposes on a branch; a human merges.
Knowledge governance without building a wiki application.

The limit is stated in the same drop: Git is weak for non-technical users and
for binary sources. A hybrid — files where people already put them, knowledge in
Git — is the honest recommendation.

### P12 — the change chain, with six actors

Drop 7, section 8. "Who changed it" now has six answers: initiator, decision
maker, generator, executor, credential, approver. `user X changed file Y` no
longer describes what happened.

Shippable as a concrete audit event shape.

### P13 — graded action control

Drop 7, sections 13 to 15, and drop 6, section 8. Read, write, publish, send,
delete and execute are different risk classes and deserve different controls —
automatic, sampled, confidence-gated, or approval-before-action. Drop 7 adds
machine-enforced policy as the enforcement:

```text
IF knowledge_status != published THEN do_not_use_for_final_answer
```

This turns the existing "stop and ask" list from a flat set of triggers into a
graded model, which is a genuine improvement to a shipped payload.

### P14 — retrieval is chosen per question type

Drop 6, section 5, with drop 3, section 4. Structured questions go to a
structured store; policy questions go to retrieval; combined questions need both
and something to join them. Evaluation has to measure the stages separately —
retrieval, reranking, interpretation, answer, citation — because a system can
answer wrongly while the model worked perfectly.

## Positions bound for a concept

**This section is a correction.** An earlier version of this file routed the
technical construction knowledge to the website, on the grounds that
`docs/purpose.md` says the repository is "not the place for reasoning at
length". That confused *depth* with *length*. The same file also says the
repository answers *how do I build this* — and a reference architecture is an
artifact, not an essay.

`concepts/` exists because of this mistake. See
[docs/concepts.md](../../docs/concepts.md).

| Position | Drops | Where |
|---|---|---|
| The two pipelines, build time against query time | 3 | [retrieval-architecture](../../concepts/retrieval-architecture.md) — **written** |
| Retrieval chosen per question type; "I have a RAG" is as vague as "I have a database" | 3, 6 | Same — **written** |
| Chunking, and what a bad cut does to a rule | 4, 6 | Same — **written** |
| ACL-aware retrieval, and why an admin-built index leaks | 3 | Same — **written** |
| The failure model by stage, and integrity over confidentiality | 6, 7 | Same — **written** |
| Evaluating the stages separately | 6 | Same — **written** |
| Connector against MCP, precisely; upload as its own case | 3, 4 | Planned concept — tool access and integration |
| The knowledge lifecycle, and the six kinds of state | 4, 5 | Planned concept — knowledge lifecycle |
| Action classification and graded control | 6, 7 | Planned concept — agent action control |

## Positions bound for the website

Reasoning for a general audience, and anything that needs an evidence label and
a check date. These are the ones where the repository carries a rule of one or
two lines and the site carries the argument.

| Position | Drops | Why the site and not `docs/` |
|---|---|---|
| The GDPR correction (R4) | 3 | Corrects a widely repeated claim; needs a primary source and a check date |
| Data sovereignty as a matrix, not a location (R3) | 2, 3 | Fourteen questions, not one; the site already argues the "EU-hosted" half |
| Four legal questions kept apart — cybersecurity, data protection, AI regulation, contract | 7 | Legal reasoning belongs where sources and check dates are the format |
| The AI Act, and Article 50 from 2 August 2026 | 7 | The site already carries an article; the drop confirms the date |
| Triggers instead of a maturity ladder (R5) | 5, 6 | The argument is long; the repository only needs the resulting cut |
| Classic against agentic RAG (R6) | 4 | A teaching distinction, not a rule |
| AI literacy as a security control | 7 | "If ChatGPT says it, it must be in our policy" is an information security problem, and the site is where that gets explained |
| The lexicon | 4 | Roughly seventy terms; the site glossary is the only place it fits |

## What is deliberately not taken

- **The three-artifact plan** proposed at the end of drops 6 and 7 — a teaching
  model, a reference model, a maturity model. It is a plan for a book. This
  project's output is a repository of copyable material and a site that explains
  it, and adopting someone's table of contents wholesale is how a standard turns
  into an encyclopedia.
- **The K0–K6 scale.** Useful as an analysis tool, but publishing a numbered
  scale invites exactly the ladder-climbing drop 5 rejects. The triggers do the
  same work without the number.
- **Any blueprint named for a technology.** Covered above.
