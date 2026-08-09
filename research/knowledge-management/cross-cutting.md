# The cross-cutting layers: what decides whether it works in practice

> **Unverified, and mostly synthesis.** This drop cites no external sources — it
> reasons over the previous five. See [STATUS.md](./STATUS.md).

| | |
|---|---|
| Received | 2026-08-09 |
| Author | Ruben Nati |
| Original language | German |
| This file | Translation, wording by Claude; claims, diagrams and structure unchanged |

Most of what follows is not a new AI technology. These are the questions that
decide whether an architecture survives contact with reality.

## 1. Quality and evaluation

Much has been said about how knowledge reaches the AI. Almost nothing about
**how you know the result is good.**

In a RAG these must be measured separately, because they are different failures:

```text
Did retrieval find the right source?
         ▼
Did the reranker prioritise it correctly?
         ▼
Did the LLM interpret the source correctly?
         ▼
Is the answer actually right?
         ▼
Is the citation correct?
```

A system can give a wrong answer while the model worked perfectly, because
retrieval delivered the wrong chunks.

```text
EVALUATION
retrieval quality · groundedness · answer correctness · citation accuracy
completeness · latency · cost · user satisfaction
```

Mandatory for enterprise RAG.

## 2. A failure model, not only a data flow

Governance has been covered; **how the system fails** has not.

```text
SOURCE      wrong, outdated
   ▼
INGESTION   parser wrong, OCR wrong, chunking poor, index stale, ACL wrong
   ▼
RETRIEVAL   wrong results
   ▼
CONTEXT     wrong assembly
   ▼
LLM         hallucination
   ▼
ACTION      agent picks the wrong tool, tool performs the wrong action,
            human approves something wrong
```

Each stage has its own failure kinds. **Not only a data flow — a failure flow.**

## 3. Trust is not binary

`fact`, `assessment`, `recommendation` are not enough on their own. Knowledge
also carries:

```text
confidence · freshness · authority · completeness · verification
```

Two sources can both contain facts:

```text
Policy v3   verified, but outdated
Policy v4   current, but draft
```

Which applies? That is no longer a retrieval question — it is knowledge
evaluation.

```yaml
status: published
authority: authoritative
valid_from: 2026-07-01
verified_at: 2026-08-01
confidence: high
```

## 4. Time as its own dimension

Missing so far, and surprisingly important. Knowledge is not only *what is
true*, but **when it was true**.

```text
2024  Server A runs Windows Server 2019
2025  Server A runs Windows Server 2022
2026  Server A has been decommissioned
```

A plain RAG may find all three. A good system understands `valid_from`,
`valid_until`, `supersedes`, `effective_date`, `observed_at`.

Especially relevant for policies, laws, infrastructure, prices, contracts,
organisational structures and security findings.

## 5. Structured against unstructured retrieval

Not all knowledge belongs in document RAG.

> "Which ten customers have open invoices over €10,000?"

should not run through embeddings:

```text
user → agent → SQL tool → database → structured result → LLM explanation
```

> "What does our dunning policy say?"

is RAG. And:

> "Which open invoices violate our dunning policy?"

combines both — SQL plus policy RAG, joined by the agent.

## 6. Multimodality

The model so far is strongly text-centred. Knowledge can be text, PDF, table,
image, diagram, audio, video, CAD, screenshot, scan.

**A PDF is not automatically text.** A network architecture drawing can carry
decisive information that plain text extraction loses. Which needs a document
parser, OCR, a vision model, table extraction and multimodal embeddings.

## 7. Event-driven against question-driven

The assumption so far is `human asks → AI responds`. Many real systems also run:

```text
new mail arrives        → classify
new policy uploaded     → update index
Notion page changed     → synchronise knowledge base
security finding raised → update risk graph
```

Which brings webhooks, queues, an event bus, schedulers and workers.

## 8. Human-in-the-loop is more differentiated than "review"

```text
Before      AI wants to use a tool → human approves
After       AI produces a draft → human reviews
Sampled     100 automatic changes → 10% reviewed
By confidence   > 0.95 automatic · < 0.95 human
```

That is control design, and for agents it matters a great deal.

## 9. Ownership

Banal and fundamental: **who is responsible for which knowledge?** Not
technically, organisationally.

```text
HR policy → HR owns          Security policy → CISO owns
IT architecture → IT owns    Contract → Legal owns
```

AI may help. It must not replace ownership. Every knowledge object can carry
`author · owner · reviewer · approver · consumer` — and in a team that matters
sooner than the vector database does.

## 10. Build against buy

Every layer can be bought as SaaS, taken as a managed service, self-hosted open
source, built, or mixed. For a RAG:

```text
buy       enterprise AI SaaS + connectors
assemble  OpenSearch + Qdrant + FastAPI + LLM API
build     your own pipeline
```

The choice drives cost, control, lock-in, operations, security, time-to-value
and adaptability.

## 11. Economics

A technically perfect solution can be economically absurd. Twenty documents and
three users do not need Kubernetes, a knowledge graph, a vector cluster, an MCP
gateway, Kafka and five agents.

Always alongside: implementation effort, running effort, licences, inference
cost, storage, support, maintenance, training — against benefit and risk.

> **What is the smallest architecture that solves the problem well enough?**

Worth making a core principle.

## 12. Lock-in and portability

Critical for knowledge. Knowledge existing only as vendor-specific AI memory is
a different risk from Markdown, Git, PDF or a standard database.

```text
portable source data · portable knowledge · portable metadata
rebuildable index · vendor-specific state
```

> Keep canonical knowledge in an exportable format. AI indexes may be
> disposable.

## 13. Disaster recovery for knowledge

If an agent changes the wiki and version 18 is wrong — what then? Versioning,
rollback, backup, restore tests, point-in-time recovery.

For a RAG index, possibly none of that: lose it and rebuild from source. Which
gives an important classification:

```text
IRREPLACEABLE     sources · curated knowledge · human decisions
RECONSTRUCTABLE   embeddings · search index · cache
```

This distinction should be explicit in the model.

## 14. A security threat model

Prompt injection has been mentioned; the whole model has not.

```text
malicious document      → prompt injection
compromised connector   → data exfiltration
overprivileged agent    → unauthorised action
poisoned knowledge      → wrong decisions
leaked token            → source access
malicious MCP server    → tool abuse
```

Worth separating: data-plane threats · tool-plane threats · model threats ·
identity threats · supply-chain threats · knowledge poisoning.

## 15. Privacy and confidentiality are not the same

A source repository can contain no personal data and still be highly
confidential. A public staff directory can contain personal data and still be
public.

So at least two classifications, possibly three:

```text
privacy classification + confidentiality classification + business criticality
```

## 16. A system uses several models, not one

Diagrams show one box marked LLM. Real systems have an embedding model, a
reranker, a vision model, a small LLM, a large LLM, a local one, a cloud one.

```text
simple classification → small cheap model
complex analysis      → large model
sensitive information → local model
```

That is model routing, usually through a model gateway.

## 17. Context is a scarce resource

A model cannot sensibly "know everything" because it has access to a million
documents. For one call there is room for a limited selection.

Which is why much of a good AI system is **context engineering**: what goes in,
what stays out, in which order, how much, which sources, how much conversation
history, which tool results.

RAG is a form of context engineering. So is memory. So are tool results.

## 18. The user is part of the architecture

A system can be technically perfect and have poor UX: users not knowing when to
use search, or nobody being able to tell whether an answer came from company
knowledge or the general model.

```text
TRUST UX
show the source · show uncertainty · show knowledge scope
show the action before executing · show status
```

## 19. Retrieval scope should be visible

```text
Searched:      ✓ Security wiki  ✓ IT policies  ✓ SharePoint / IT
Not searched:  ✗ HR  ✗ Mail  ✗ Internet
```

Otherwise the user assumes the AI searched everything, when it had three
sources. **Scope transparency** — an underrated UX and governance layer.

## 20. Sources are more than citations

A citation says "this answer rests on document X". Provenance goes deeper:

```text
answer → claim → knowledge page → source document
       → original system → owner → version
```

A provenance chain.

## 21. Knowledge itself has types

Not all knowledge is the same kind of thing, and the type determines where it
should live:

| Type | Example | Fits |
|---|---|---|
| **Declarative** — what is true | "Server A has IP X" | database, structured fact |
| **Procedural** — how to do something | "this is how a restore is done" | wiki, RAG |
| **Episodic** — what happened | "on 8 August server A failed" | log, event store |
| **Normative** — what should hold | "passwords must be at least…" | wiki, policy, RAG |
| **Relational** — what depends on what | "application A depends on DB B" | graph |
| **Personal** — what applies to this person | "Ruben prefers…" | memory |

## 22. Which closes the model

```text
WHO            Who?                    IDENTITY       Who are you?
WHY            Which problem?          AUTHORIZATION  What may you do?
SOURCE         Where does it come from?STATE          What persists?
KNOWLEDGE TYPE What kind of knowledge? LIFECYCLE      How does it change?
ACCESS         How do we reach it?     PROVENANCE     How do we know?
INGESTION      How is it processed?    TIME           When does it hold?
STORE          Where does it live?     QUALITY        Is it correct?
RETRIEVAL      How do we find it?      SECURITY       How can it be abused?
CONTEXT        What does the model get?GOVERNANCE     Who controls it?
MODEL          Which intelligence?     OPERATIONS     How do we run it?
AGENT          Who coordinates steps?  ECONOMICS      Is it worth it?
ACTION         What may happen?        UX             Does the human understand it?
```

## 23. What not to add

Not more buzzwords. There are enough base components. Agentic memory, GraphRAG,
multimodal RAG, federated search, semantic layer, cognitive architecture, AI
gateway — all of these can simply be filed into this model from now on.

**That was the goal.**

## 24. What the author proposes next

Three separate artifacts:

**Part 1 — Foundation and teaching model.** From *what is an LLM* to *how
retrieval, agents and knowledge systems arise*, with a glossary and worked
mechanical examples.

**Part 2 — Reference model.** The full taxonomy — who, knowledge, data path,
retrieval, integration, trust, governance, operations — so any system can be
analysed with it.

**Part 3 — Maturity and decision model.** From private-plus-chat to an
enterprise knowledge platform, with the triggers.

And the most important remaining idea: **triggers instead of maturity
compulsion.** Nobody has to progress from chat to RAG to knowledge graph to
agent. An architecture grows more complex when a concrete problem requires a new
control or capability:

```text
more users               → identity
more documents           → search / RAG
a shared truth           → knowledge governance
write access             → review / rollback
business-critical knowledge → provenance / lifecycle
complex relationships    → knowledge graph
many AI tools            → consider MCP
sensitive data           → stronger data and model control
```

With that the model is not only complete but pragmatic.
