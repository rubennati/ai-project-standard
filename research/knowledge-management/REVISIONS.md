# Revisions — where a later drop overturned an earlier one

The seven drops were written in sequence over one day, and the author revised
himself as he went. Several times a later drop states outright that an earlier
one was wrong or too loose.

**The drop files stay as they arrived.** Correcting them in place would destroy
the record of how the thinking moved, and that record is itself evidence: a
claim that survived three passes is worth more than one written once.

This file is where the resolution lives. For every conflict: what the earlier
drop said, what the later one said, and **which reading this project takes** —
because the repository and the website may only carry the surviving version.

## The drops, in order

| # | File | Commit | What it did |
|---|---|---|---|
| 1 | [foundations.md](./foundations.md), [figures.md](./figures.md) | `2b29ef3` | First pass — RAG, knowledge graph, LLM wiki, agents |
| 2 | [layers.md](./layers.md) | `8e6cffa` | Took the terms apart into layers; first self-correction |
| 3 | [architecture.md](./architecture.md) | `ac7e34c` | Reference architecture; three corrections |
| 4 | [primitives.md](./primitives.md) | `00516d1` | Level zero and the lexicon; the terminology correction |
| 5 | [dimensions.md](./dimensions.md) | `af2b391` | Three axes instead of one ladder |
| 6 | [cross-cutting.md](./cross-cutting.md) | `1315c92` | What decides whether it works in practice |
| 7 | [security.md](./security.md) | `d7dd616` | Security as a horizontal plane |

## Summary

| # | Question | Earlier | Later | Kind |
|---|---|---|---|---|
| R1 | Is "LLM wiki" a term? | An established category (1) | Not standardised; one form among several (2, 3, 4) | **Overturned** |
| R2 | Is the LLM the centre? | The box everything flows through (1, 2) | A component; and not even one model (3, 6) | **Overturned** |
| R3 | Does cloud mean public? | "Public AI" against private (1) | Five operating models; location is not sovereignty (2) | **Overturned** |
| R4 | US cloud and the GDPR? | Connecting company mail to a US LLM is definitely a problem (1) | Not automatic — it is an assessment (3) | **Overturned** |
| R5 | Is there a maturity ladder? | Chat → RAG → wiki → agent (1, 2) | Three independent axes; triggers, not compulsion (5, 6) | **Overturned** |
| R6 | Is AI "plugged in at the side"? | A misleading picture (1, 2) | Correct for agentic RAG, wrong for classic RAG (4) | **Split** |
| R7 | Is RAG the answer to documents? | The way to give AI your documents (1) | "I have a RAG" is as vague as "I have a database" (3, 6) | **Sharpened** |
| R8 | One knowledge base? | *The* knowledge base (1, 2) | Six kinds of state that must not be merged (5) | **Sharpened** |
| R9 | How much status does knowledge carry? | Published or not (1, 2) | Two axes, then five more attributes (5, 6) | **Sharpened** |
| R10 | Where does security sit? | One item among the cross-cutting layers (6) | A plane over the whole architecture (7) | **Sharpened** |

---

## R1 — "LLM wiki" is not a term. The thing it names is real

**Drop 1** gives it a section heading of its own, *LLM wiki: a persistent
knowledge base*, alongside RAG and knowledge graph, as though the three were
peers.

**Drop 2** hedges: the term "is not yet standardised the way RAG and knowledge
graph are", though a paper and several implementations exist.

**Drop 3** is firmer — not a technical standard, no file declares itself one; it
is an architecture and application pattern, and it needs neither a vector
database, nor MCP, nor a knowledge graph, nor a web interface.

**Drop 4** corrects the series explicitly, in its own words: the earlier drops
used it too casually. A 2026 research project does name its architecture
*LLM-Wiki*, and other work speaks of LLM-curated hierarchical knowledge bases —
but the generic term would be one of *AI knowledge base · LLM-maintained
knowledge base · agent-maintained knowledge base · LLM-curated knowledge base ·
self-evolving knowledge base · agent-native knowledge system*. "Wiki" describes
one possible form of organisation, nothing more.

**Drop 5** finishes the demotion: a single term — RAG, MCP, LLM wiki, agent — no
longer determines the architecture; it occupies one position in the model.

### What this project takes

The **artefact** is real and worth building for: a persistent, addressable
knowledge store with structure, search, and an agent that may read *and write*
it, under a lifecycle. The **name** is not available. Drop 4's own minimum
definition is what we use:

```text
persistent storage + addressable knowledge units + defined structure
+ search and read capability + an LLM/agent that can work with it
```

**Consequence in this repository:** no blueprint, document or page may be called
`llm-wiki`. It is a synonym at best and a marketing word at worst.

## R2 — the model is a component, not the hub

**Drops 1 and 2** draw the LLM as the central box, with sources, index and tools
arranged around it, everything passing through.

**Drop 3** opens with the correction: the LLM is the central language and
reasoning component, **but not the centre through which all data necessarily
flows.** A good system deliberately tries *not* to push the whole data base into
the model. Search, permission checking, storage, indexing and many actions
happen outside it.

**Drop 6** removes the last of it — a real system has an embedding model, a
reranker, a vision model, a small LLM, a large one, a local one, a cloud one.
The single box was never one box.

**Drop 7** makes it a security property rather than an aesthetic one: the model
never holds the credential.

### What this project takes

Every diagram we publish must show the model as *one* component among several,
with retrieval, authorisation and storage outside it. A picture that routes
everything through the model teaches the wrong architecture and, per drop 7, the
wrong trust boundary.

## R3 — "public AI" is a dangerous term

**Drop 1**'s figure splits the world into public and private AI.

**Drop 2** corrects it under its own heading: cloud AI does not mean the data is
public. Five operating models — consumer SaaS, business SaaS, private cloud,
on-prem, local — and a SaaS system can have very good governance while a
self-hosted one is badly secured. **Hosting location alone is not data
sovereignty.**

### What this project takes

The later split. The website already argues this in its own words about
"EU-hosted"; the research now independently supports it, which makes it a
stronger claim than either source alone.

## R4 — US cloud is not automatically a GDPR problem

The sharpest reversal in the series, and the one with the most public exposure.

**Drop 1**, among the practical questions: connecting company mail to an LLM in
the US means you definitely have a GDPR problem.

**Drop 3** corrects it directly. That does not hold automatically. You have a
processing operation that must be assessed, possibly including a third-country
transfer. Whether it is permissible depends on the allocation of roles, the
legal basis, processing agreements, purpose limitation, data minimisation,
technical measures and a valid transfer mechanism — and the GDPR provides
mechanisms for third-country transfers, with adequacy decisions also possible.

```text
US cloud ≠ automatically GDPR-infringing
"we have a processing agreement" ≠ automatically GDPR-compliant
```

And symmetrically: EU data residency answers one line of the matrix. Questions
remain about sub-processors, support access, metadata, backups, logs,
administrators, training, retention, encryption and key management.

### What this project takes

Drop 3, without exception. **This is the one revision that must not leak in its
earlier form**, because the earlier form is the confident, widely repeated
version — and the website's stated method is to correct exactly that kind of
claim with a primary source and a check date. Publishing drop 1's version would
be the project failing its own test in public.

## R5 — there is no ladder to climb

**Drops 1 and 2** read as a progression: chat, then documents, then search, then
RAG, then a knowledge base, then agents, then MCP, then enterprise.

**Drop 5** rejects it in its first section: the model was more one-dimensional
than the real problem. A private expert may run a local LLM, MCP, RAG, a
knowledge graph and agents and need no SSO, no tenant separation, no central
audit. A company may be at step one and immediately need contract review, data
classification, MFA, policies and offboarding. Three independent axes — reach,
technical maturity, governance maturity — and a K0–K6 scale that explicitly
nobody must finish.

**Drop 6** gives the mechanism: **triggers instead of maturity compulsion.** An
architecture grows more complex when a concrete problem requires a new control
or capability, not because the next rung exists.

### What this project takes

Triggers. **This is the decision that determines how the blueprint set is cut** —
one blueprint per trigger, not one per technology and not one per company size.
It also rules out a "beginner / advanced / enterprise" framing anywhere on the
website.

## R6 — both pictures are right, for different architectures

Not a contradiction but a split, and worth recording because it looks like one.

**Drops 1 and 2** push back on the naive picture of documents being "plugged in
at the side" of the model.

**Drop 4** restores it: with **agentic RAG** the picture becomes right after all.
The model is given tools — `search_company_knowledge(query)`, `get_document(id)`
— and replies to the runtime rather than to the user.

### What this project takes

Both, labelled. Classic RAG: the application searches, then calls the model.
Agentic RAG: the model decides to search. They are different architectures with
different failure modes and different security properties, and conflating them
is why the naive picture is sometimes wrong and sometimes exactly right.

## R7 — "RAG" names a technique, not a system

**Drop 1** presents RAG as the way to give an AI your documents.

**Drop 3**: *"I have a RAG" is as imprecise as "I have a database".*

**Drop 6** adds the boundary — a structured question such as which ten customers
have open invoices over €10,000 should not run through embeddings at all; that
is a SQL tool. A policy question is RAG. A question that combines them needs
both, joined by an agent.

### What this project takes

RAG is one retrieval strategy among several — keyword, vector, hybrid, graph,
structured query — chosen per question type. Anything that says "add RAG" as a
solution has skipped the question.

## R8 — six kinds of state, not one store

**Drops 1 and 2** speak of *the* knowledge base.

**Drop 5** splits it: source data, shared knowledge, operational AI state,
personal context, governance, machine index. They have entirely different
lifecycles and **must never go into one store.**

### What this project takes

The split — and note that the repository arrived at the same separation
independently, which is why `.ai/` (operational state) is not `docs/`
(governance and shared knowledge). Drop 5 explicitly derives the principle *from*
this repository, so this is not confirmation; it is the same idea returning.

## R9 — status is at least two axes

**Drop 5** separates workflow status (candidate, pending, reviewed, published,
superseded, archived) from epistemic status (fact, measured, law, assessment,
recommendation, hypothesis), with the point that **a recommendation can be fully
reviewed and published and still remain a recommendation.**

**Drop 6** refines the second axis into attributes — confidence, freshness,
authority, completeness, verification — and adds the case that breaks a single
axis: policy v3 verified but outdated, policy v4 current but draft.

### What this project takes

Both axes, plus validity time. The website's existing evidence model is the
epistemic axis already built; what it lacks is the workflow axis and
`valid_from` / `valid_until`.

## R10 — security is a plane, not a section

**Drop 6** lists a threat model as item 14 of 24: malicious document, compromised
connector, overprivileged agent, poisoned knowledge, leaked token, malicious MCP
server.

**Drop 7** replaces the framing. Security is a second architecture laid over the
functional one, and the threat model has to include cases with no attacker at
all — accident, failure, and model uncertainty. Its central claim is that for a
knowledge system **integrity may matter more than confidentiality**, because
human error, hallucination, a stale source, a misread table and an attacker all
produce the same output: false knowledge, published, retrieved and acted on.

### What this project takes

Drop 7's framing. A security section at the end of a document models security as
optional; the drop's own thesis is that it is a property of every layer.

## Terminology, checked across all seven drops

| Term | Status after seven drops | Note |
|---|---|---|
| **RAG** | Stable, used consistently | Sharpened by R7: a technique, not a system |
| **Agentic RAG** | Introduced drop 4, consistent | Must be distinguished from classic RAG (R6) |
| **Knowledge graph** | Stable | Never overstated; drop 2 warns against building one without relational questions |
| **GraphRAG** | Drops 2 and 5 only | Filed as a combination, not a new category |
| **MCP** | Stable — an integration protocol | Drop 1's figure already says "MCP is an access layer, not a knowledge base"; nothing later contradicts it |
| **Connector** | Stable, separated from MCP in drops 3 and 4 | Drop 4 also answers "is an upload a connector?" |
| **LLM wiki** | **Retired as a name** (R1) | The artefact keeps its definition, loses its label |
| **AI knowledge base** | The generic term | Six candidate names listed in drop 4; none is standard |
| **Source of truth / derived** | Stable | Drops 2 and 3 agree; the index is always derived |
| **ACL-aware retrieval** | Stable | Named in drop 1's figure, developed in drop 3 |
| **Provenance** | Widens across drops | Citation (1) → chain (6) → six actors and a causality chain (7) |
| **Data sovereignty** | Revised once (R3) | A matrix, not a location |
| **Knowledge lifecycle** | Introduced drop 4 as "missing entirely" | Nothing earlier had it |
| **Context engineering** | Drop 6 only | Named late; the idea is present from drop 1 |
| **Human-in-the-loop** | Widens | Review (5) → four control modes (6) → a security control (7) |

No term is used with two incompatible meanings across the drops. The only
retired one is *LLM wiki*, and the only silently widened ones are *provenance*
and *human-in-the-loop*, both of which grow rather than change direction.

## Open, and not settled by any drop

Recorded so they are not mistaken for decided.

1. **Is a retrieval blueprint one thing or two?** Classic RAG and agentic RAG
   differ enough (R6) that one payload may not serve both.
2. **When is MCP worth it?** Drop 2 treats it as the integration answer for many
   tools; drop 6's economics section warns against exactly that reflex. The
   trigger — "many AI tools" — has no number attached.
3. **Which generic name** replaces "LLM wiki". Drop 4 lists six candidates and
   endorses none.
4. **Where the boundary sits** between a knowledge base an agent maintains and a
   documentation repository a human maintains with an agent's help. This
   repository is arguably the second, which makes it a case study rather than a
   neutral observer.
