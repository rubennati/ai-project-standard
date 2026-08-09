---
owner: Ruben Nati
reviewed: 2026-08-09
derives-from: research/knowledge-management (seven rounds, 2026-08-09)
status: draft
---

# Retrieval architecture

How to build a system that answers questions from your own content, and where
the decisions actually are.

## 1. What you are deciding

You have more material than anyone will read, and people keep asking questions
whose answers are already written down somewhere. You want a system that finds
the right passage and answers from it, with a citation.

The decision is **not** "should we do RAG". That is roughly as specific as "we
should use a database". Retrieval is one strategy among several, and the real
decisions are which strategy per question type, how content gets in, who is
allowed to see what, and how you will know when it is wrong.

## 2. The smallest thing that works

Do this before anything below.

**Twenty documents and three people: upload them.** Every serious AI product
takes file attachments. No index, no pipeline, no vector database. If it works,
you are finished, and you have spent nothing.

**Fifty to a few hundred documents, one team: use the search you already have.**
SharePoint, Confluence, Notion and Google Workspace all have search, and several
have an AI layer on top of it. Buying nothing beats operating something.

**Structured questions do not belong here at all.** "Which ten customers have
invoices over €10,000 outstanding" is a database query. Sending it through
embeddings produces approximately-right answers to a question that has an exact
one.

Build the architecture below when you have a genuine reason: the content lives
in several systems, permissions differ per document, answers must cite, or the
questions combine structured and unstructured sources. Not before.

> A technically perfect solution can be economically absurd. Twenty documents
> and three users do not need a knowledge graph, a vector cluster, an
> integration gateway and five agents.

## 3. The architecture

Two pipelines, running on different clocks. Most descriptions show only the
second one, which is why most implementations get the first one wrong.

### Build time — the ingestion pipeline

Runs on a schedule or on change events. Nobody is waiting for it.

```text
source system
     │
     ▼
  FETCH        connector, API, webhook, or a folder watch
     │
     ▼
  PARSE        PDF, DOCX, HTML, spreadsheet, image
     │         a PDF is not automatically text
     ▼
  OCR          only where the source is a scan or an image
     │
     ▼
  CHUNK        split into retrievable sections
     │         cut in the wrong place and a condition
     │         is separated from the rule it belongs to
     ▼
  ENRICH       metadata: source, date, author, owner,
     │         classification, validity, permissions
     ▼
  EMBED        vectors, via the embedding model
     │
     ▼
  INDEX        full-text index and vector index
```

### Query time — the answer pipeline

Runs while somebody watches a spinner. Every millisecond is visible.

```text
question
    │
    ▼
 ROUTE          which store answers this kind of question?
    │           structured → SQL · policy → retrieval · both → agent
    ▼
 RETRIEVE       keyword and vector, in parallel
    │
    ▼
 FILTER BY ACL  the asker's permissions, at query time
    │
    ▼
 RERANK         a slower, more careful second pass over ~50 candidates
    │
    ▼
 ASSEMBLE       build the context: which passages, in what order,
    │           how much conversation history, how much room is left
    ▼
 GENERATE       the model writes the answer from what it was handed
    │
    ▼
 CITE           back to the source, with a version and a date
```

**The model sits at the end and it is not the centre.** Search, permission
checks, storage and indexing all happen outside it. A diagram that routes
everything through the model teaches the wrong architecture and, as soon as
tools are involved, the wrong trust boundary.

### A system runs several models, not one

```text
embedding model    turns content into vectors
reranker           reorders retrieval results
vision model       reads diagrams and scans
small model        classification, routing, extraction
large model        the actual answer
```

Route by task. Simple classification does not need the expensive model, and
sensitive content may not be allowed to reach the hosted one at all.

## 4. The decision points

This is the part that cannot be looked up elsewhere.

### 4.1 Classic retrieval or agentic retrieval

| | Classic | Agentic |
|---|---|---|
| Who decides to search | the application, always | the model, per question |
| Latency | predictable | variable, possibly several rounds |
| Failure mode | retrieves when it should not | decides not to retrieve, then answers from memory without saying so |
| Debuggable | yes, one path | harder, the path differs each time |

Start classic. Move to agentic when questions genuinely need several retrieval
rounds to answer, not because it sounds more capable.

### 4.2 Which retrieval, per question type

Do not pick one. Route.

```text
"error code 0x80070005"          → keyword. Exact strings have no meaning
                                   for a vector to be similar to.
"how do I get my money back"     → vector. No shared words with
                                   "Refund policy".
"what does the dunning policy    → hybrid. Both, merged and reranked.
 say about late payment"
"which invoices are overdue"     → SQL. Not this system at all.
"which overdue invoices breach   → both, joined by an agent.
 the dunning policy"
"what depends on this server"    → graph, if you have one. A document
                                   index cannot represent relationships.
```

### 4.3 Chunking

The decision with the worst ratio of attention received to damage caused.

- **Split on structure, not on character count** wherever the format allows it.
  Headings, sections and list items are boundaries the author already chose.
- **Keep overlap** so a sentence spanning a boundary appears in both halves.
- **Keep tables whole.** A table split across chunks becomes two tables that are
  both wrong.
- **Carry the heading path into every chunk.** A passage that says "this does not
  apply to journeys under 300 km" is useless without knowing which rule "this"
  refers to.

### 4.4 Permissions

The decision that is hardest to retrofit, so make it now.

Two viable models:

**Filter at query time** — the index stores each chunk's permissions, and every
search is filtered by the asker's identity before results are returned. Correct,
and it requires that permissions travel through ingestion intact and stay fresh.

**Index per boundary** — a separate index per team or classification, and the
asker only ever reaches theirs. Simpler and coarser; it fails once documents
need to be shared across boundaries.

What does not work: indexing with an administrator's permissions and hoping the
prompt keeps the model discreet. The retrieval already happened.

**Revocation is not deletion.** Removing someone's access to a source does not
remove what the index already holds. A permissions model has to say how a
withdrawal reaches every derived copy, including caches and any chat history.

### 4.5 Where the truth lives, and what is derived

Name the source of truth explicitly, then classify everything else:

```text
IRREPLACEABLE      sources · curated knowledge · human decisions
RECONSTRUCTABLE    embeddings · search index · cache
```

The backup policy follows from this line and not from the storage bill.
Reconstructable things get rebuilt, not restored.

### 4.6 Freshness

Decide the acceptable gap between a source changing and the index knowing, then
build to it. Event-driven where the source can emit changes; scheduled where it
cannot; and a visible "indexed as of" so a stale answer can be recognised as one.

A system that answers from last Friday's index with a citation to a document
updated on Monday is not detectably wrong from the outside.

### 4.7 Build, assemble or buy

```text
buy        an AI product with connectors to what you already use
assemble   a search engine + a vector store + a small service + a model API
build      your own pipeline end to end
```

Most teams should be one row higher than they think. Assembling is where the
operational cost hides: someone owns the index, the reindexing, the model
upgrades, the permissions drift and the evaluation.

## 5. How it fails

Six of these seven have no attacker in them.

| Stage | What goes wrong | Why it is invisible |
|---|---|---|
| **Source** | the document was already wrong or superseded | the citation looks perfect |
| **Parse** | a table is read as scrambled lines; a scan yields nothing | no error is raised, the chunk is simply nonsense |
| **Chunk** | a condition is separated from its rule | each half is individually true |
| **Permissions** | the index carries stale or elevated access | the answer arrives, correctly formatted |
| **Retrieval** | the right passage is not in the top results | the model answers from what it did get |
| **Freshness** | the index predates the change | the source name shown is current |
| **Injection** | content in a document acts as an instruction | the text may be invisible to a human reader |

**Integrity matters more than confidentiality here.** Human error, a
hallucination, a stale source, a misread table and an attacker all produce the
same output: a false statement, published, retrieved and acted on. Only one of
those five involves anyone hostile.

### Evaluate the stages separately

A system can answer wrongly while the model performed perfectly, because it was
handed the wrong passages. Measuring only the final answer tells you something
broke, not what.

```text
Did retrieval find the right source?
Did the reranker keep it?
Did the model read it correctly?
Is the answer right?
Is the citation right?
```

Build a small set of real questions with known-correct answers before you build
the pipeline. Thirty is enough to catch a regression, and you cannot write them
honestly once you have seen what the system produces.

### Make the scope visible

```text
Searched:      ✓ IT policies   ✓ Security wiki   ✓ SharePoint / IT
Not searched:  ✗ HR            ✗ Mail            ✗ Internet
```

Without this the asker assumes everything was searched. It is the cheapest
correctness control in the whole system, and it is a user-interface change.

## Related

- Terminology, for anyone who needs it first:
  [the glossary](https://ai-standard.rubennati.at/glossary)
- The research this derives from:
  [architecture.md](../research/knowledge-management/architecture.md),
  [primitives.md](../research/knowledge-management/primitives.md),
  [cross-cutting.md](../research/knowledge-management/cross-cutting.md),
  [security.md](../research/knowledge-management/security.md)
- What survived revision:
  [REVISIONS.md](../research/knowledge-management/REVISIONS.md)
- When knowledge needs governing rather than finding:
  [`agent-maintained-knowledge-base`](../blueprints/agent-maintained-knowledge-base/)

## Open

- **No tool recommendations here yet.** Naming a vector store or a parser is a
  claim with a shelf life, and this file has no check date on any product claim.
  If that lands, it lands with sources and a date.
- **Whether a second concept is needed for graph retrieval.** The trigger —
  questions about relationships rather than about documents — is real, but no
  round of the research settles when a graph is worth its maintenance.
