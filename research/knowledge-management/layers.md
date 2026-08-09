# The layers: taking the terms apart

> **Partly verified.** Sources checked 2026-08-09 — see [STATUS.md](./STATUS.md).
> Unlike the first drop this one carries citations, and the load-bearing one was
> read at the source.

| | |
|---|---|
| Received | 2026-08-09 |
| Author | Ruben Nati |
| Original language | German |
| This file | Translation, wording by Claude; claims, diagrams and structure unchanged |

## The sentence the whole subject turns on

> **RAG, knowledge graph, LLM wiki, MCP, connector, agent, workspace, Notion,
> email and a local folder are not alternatives within one category. They
> describe different layers of an AI knowledge architecture.**

Once that is understood the field becomes much easier to survey. Most confusion
comes from comparing things that do not sit on the same level.

## 1. The architecture, as layers

```text
1. SOURCE OF TRUTH      PDFs, Notion, mail, DMS, DB
        ▼
2. ACCESS / INTEGRATION Upload, API, connector, MCP, filesystem, SQL, web
        ▼
3. PREPARATION          Parsing, OCR, chunking, metadata, ACL, entities
        ▼
4. KNOWLEDGE LAYER      Raw files · fulltext index · vector index ·
                        knowledge graph · wiki / curated knowledge
        ▼
5. RETRIEVAL            Search, semantic search, hybrid search, graph query
        ▼
6. CONTEXT              Relevant content + sources + memory + user context
        ▼
7. LLM                  Understand, synthesise, analyse, generate
        ▼
8. AGENT / ACTION       Call tools, write, change, run workflows
```

Orthogonal to it, a second axis — **where does each part run?**

```text
local machine  →  own server / on-prem  →  own cloud tenant
               →  SaaS provider  →  LLM provider
```

Placing the terms on those layers dissolves most of the argument:

| Term | Mostly lives in |
|---|---|
| RAG | preparation → retrieval → context → LLM |
| MCP | access and integration |
| Knowledge graph | knowledge representation |
| Agent | above the LLM and the tools |
| LLM wiki | a whole knowledge application, or an architecture pattern |
| Notion | a data source *and* a knowledge application |
| Folder | storage and working environment |
| Workspace | a working surface and runtime for an agent |

They can all occur in the same system at once.

## 2. "Giving the AI access to my documents" means at least six things

**A — Upload once.** Three PDFs, "compare these contracts". The file is context.
It does **not** follow that a permanent index exists, that embeddings were made,
that you built a RAG, that the file will be considered in future, or that a
knowledge base now exists. An upload is data provision.

**B — Persistent project files.** A system associates files with a project over
time. Closer to knowledge management, still not necessarily RAG: it might load
content directly into context, search it internally, or index it. Those details
are usually invisible to the user.

**C — Live connector.** The AI queries Notion through its API at question time
and receives matching pages as context. Functionally similar to RAG;
technically live retrieval over an API, with nothing copied in advance.

**D — Synchronised connector.** Content is processed and indexed *before* the
question — text, metadata, ACLs, embeddings. Very close to a classic enterprise
RAG architecture.

> **"Connector" does not say what happens technically.** A connector may only
> search, or synchronise and index, or read and write, or provide tools.

**E — Folder workspace.** An agent is given a directory and works inside it:

```text
mein-wissen/
├── raw/        artikel-1.pdf, meeting-2026-08-01.txt, studie.pdf
├── wiki/       rag.md, mcp.md, knowledge-graphs.md, index.md
└── instructions.md
```

It reads, writes and edits. Fundamentally different from an upload: the folder is
an **active working environment**.

## 3. Why coding agents work well for this, with no code involved

The decisive capability is not "can write code". It is **"can work with a
persistent file system"**, which is far more general.

```text
project/                        knowledge/
├── source/                     ├── sources/
├── documentation/              ├── concepts/
├── tests/                      ├── people/
├── configuration/              ├── projects/
└── README.md                   ├── decisions/
                                └── index.md
```

Conceptually near-identical for the agent: list, read, search, create, edit,
rename, compare, parse, index. That is why coding agents repurpose surprisingly
well as **knowledge agents**.

## 4. A local folder does not mean the data stays on your machine

Two independent questions:

```text
Where does the file live?     ≠     Where does the LLM run?
```

A file can stay on your Mac while the relevant content is sent to a cloud model
for inference. That is **not** a local LLM. A genuinely local system runs files,
parser, index, embedding model, LLM and agent on the machine — only then does
the content never leave it.

## 5. Chat, workspace, agent

**Chat** — `question → LLM → answer`. Excellent for "explain RAG to me". Poor
for "analyse my whole knowledge base, reconcile it with my last ten meetings,
update the documentation and produce an action list".

**Workspace** — adds a working context: files, project context, instructions,
previous results, working files. The difference is not a smarter model:

> The model is given an environment in which work can happen across several
> steps and artifacts.

```text
Chat  → "answer something for me"
Work  → "get something done for me"
```

**Agent** — not a better LLM. A loop:

```text
        goal
         ▼
     LLM / reasoning
         ▼
  decides the next action
         ▼
  tools: search() read_file() write_file()
         notion_search() send_email() sql_query()
         ▼
      result ──► back to the LLM
```

The core is `Think → Act → Observe → Think → Act …`, not `prompt → answer`.

## 6. MCP: an integration protocol

**MCP is not a knowledge base, not a RAG, not an agent.** It is a standard for
how an AI discovers and uses capabilities. Its primitives:

```text
Resources   context and data
Tools       executable functions
Prompts     structured interaction templates offered by the server
```

**RAG does not need MCP.** A classic pipeline — user → backend → vector DB →
retriever → LLM — works without it. MCP becomes interesting when several clients
should use the same tools:

```text
ChatGPT ──┐
Codex ────┼──► MCP server ──► knowledge system
Claude ───┤
IDE agent ┘
```

A **connector** is the general term for an integration — REST, GraphQL, SDK,
SQL, filesystem, OAuth, function calling, webhook, browser automation, plugin,
or MCP. MCP is one standardised way of doing it, not a synonym.

## 7. RAG

Retrieval-Augmented Generation. The original paper (Lewis et al., 2020)
combined a generative model with an external, non-parametric knowledge source
from which relevant passages are retrieved.

**Two entirely different phases.**

```text
INDEXING              QUERY
document              question
   ▼                     ▼
parser                embedding
   ▼                     ▼
text                  vector search
   ▼                     ▼
chunking              top 5 chunks
   ▼                     ▼
embeddings            reranker
   ▼                     ▼
vector index          top 2 → prompt → LLM
```

**Not every RAG needs embeddings.** This is a common error. All of these are
retrieval-augmented generation:

```text
BM25 fulltext → documents → LLM
SQL query     → rows      → LLM
web search    → pages     → LLM
graph query   → subgraph  → LLM
```

> The core idea is that **external information is fetched at runtime and made
> available to generation.** A vector database is a very common implementation,
> not the definition.

**RAG is not one thing.** The literature distinguishes naive, advanced and
modular approaches. The span runs from `PDF → chunk → vector DB → top-5 → LLM`
to query rewriting, classification, hybrid results, reranking, ACL and metadata
filtering, context building and citation verification.

**Production RAG is much harder than demo RAG.** The demo is four boxes. The
enterprise version adds connectors, incremental ingestion, OCR, document
normalisation, ACL mapping, parallel BM25 and vector indexes, reranking, ACL
filtering, context assembly, citations — plus freshness, versioning, deletion,
permission changes, monitoring, evaluation and security. *That* is why
enterprise RAG gets expensive.

## 8. Knowledge graph, and GraphRAG

A graph represents knowledge as `entity ── relation ── entity` rather than as
text. The difference is fundamental:

> Text says: here is information.
> Graph says: these things exist and stand in these relationships.

Graphs earn their keep on **relationship and impact questions**:

```text
Firewall X ← protects ← Network Y ← contains ← Server A ← hosts ← Application Z
```

"Which applications are affected if firewall X fails?" — with plain vector RAG
that information may be spread over ten documents; the graph traverses it.

A knowledge graph does not require AI: `Neo4j → Cypher → result`. But an LLM
helps build one, via entity extraction — and that is where **GraphRAG** comes
from. Microsoft describes it as a structured, hierarchical RAG method that
extracts entities, relationships and claims from raw text, detects communities
and generates summaries, with local, global and DRIFT search at query time.

So usually not "knowledge graph **or** RAG" but **knowledge graph inside a RAG
system**.

## 9. The LLM wiki

The term is **not yet standardised the way RAG and knowledge graph are**, but
there is now a paper and several implementations. The mental model:

```text
RAW SOURCES  →  LLM / agent  →  COMPILED KNOWLEDGE
papers                          concepts/  rag.md, mcp.md, graphrag.md
emails                          projects/
notes                           people/
PDFs                            decisions/
websites                        index.md
```

> The decisive difference: **the result of processing is stored persistently.**

Classic RAG redoes much of the knowledge work on every question. A wiki compiles
once and accumulates: five sources on MCP become `wiki/mcp.md`; a sixth source
updates that page.

| | RAG | LLM wiki |
|---|---|---|
| Primary goal | find relevant information | organise knowledge durably |
| Processing | mostly query-time | mostly ingest and maintenance time |
| Storage | chunks and index | knowledge pages |
| Output | an answer | an answer *and* persistent knowledge |
| Structure | often flat | pages, links, hierarchy |
| Maintenance | index synchronisation | semantic knowledge curation |
| Sources | raw sources | raw sources plus derived pages |

They combine well: a RAG index for "what exactly does contract X, §17 say" and a
wiki for "what do we know overall about our backup strategy".

**A small wiki can be technically far simpler than a RAG.** A folder of Markdown
plus an agent with `list_files`, `read_file`, `grep`, `write_file` — no vector
DB, no embeddings, no framework. For a few hundred well-structured pages that
can be surprisingly capable.

**But it is not automatically simpler.** Eventually you need rules: what is a
page, when is it updated, which source is authoritative, how are contradictions
handled, who may change facts, how is uncertainty marked, how is it versioned,
how is old information deleted, where did a statement come from. That is
knowledge governance, and it is why a good wiki also becomes complex.

A sensible structure separates strictly:

```text
knowledge/
├── raw/        unchanged sources
├── wiki/       derived knowledge
├── index/      machine indexes
├── metadata/   provenance and status
└── logs/       changes
```

And never confuses the original source with the AI's summary of it.

## 10. Source of truth, and what is derived

If Notion is the source of truth, then the search index, the embeddings, the
chat history and any LLM wiki are all **derived**. This matters for the question
people actually mean when they ask where their data is — which is at least
fourteen questions, not one.

**"The data is in Notion"** is not a serious answer once an AI integration is in
place. More precisely: *the canonical primary data is in Notion; derived and
temporary data may additionally arise in other systems.*

| Data type | Possible location |
|---|---|
| Primary data | Notion |
| Copy / sync | AI provider |
| Search index | AI provider or own server |
| Embeddings | vector DB |
| Prompt and LLM context | model provider |
| Chat history | AI platform |
| Logs | platform or connector |
| Generated results | Notion, folder, chat |
| OAuth tokens | connector or AI platform |

## 11. Why email is not Notion

Technically both can be attached by API. Semantically they are unlike.

Notion is a page with title, content, properties, relations, owner, last edited.
Email is a message with sender, recipient, timestamp, subject, body, attachments
and a thread — and it is primarily an **event stream**:

```text
09:01 customer asks   09:37 reply   11:15 correction
14:00 third party     17:20 decision taken
```

The knowledge is "we chose option B", embedded in a thread. Email is therefore a
poor **canonical** knowledge base. The better architecture makes it a *source*:

```text
email → agent → recognises decision / task / project information
                        ▼
                  knowledge base  →  Notion, wiki
```

**Agents are riskier on email.** Reading is comparatively harmless; replying,
forwarding, deleting and sending have external consequences. Modern platforms
therefore separate reading from important external actions and require
confirmation for the latter.

```text
knowledge retrieval → comparatively low risk
external action     → potentially high impact
```

## 12. Neighbouring terms that are not the same thing

**Enterprise search** — finding relevant information across many company
sources. Not necessarily RAG; put an LLM on top and it functionally becomes a
RAG-like assistant.

**Vector search** finds similar content. **Semantic search** searches by
meaning. **RAG** uses retrieval results *for generation*. You can have semantic
search with no generation, and RAG with plain keyword search.

**Hybrid search** is often the pragmatic winner. Semantic is good at meaning;
fulltext is very good at `A.5.23`, `CVE-2026-1234`, a customer number, a server
name, an IP address.

```text
query → BM25 ┐
            ├─ merge → reranker
      → vector ┘
```

**Memory** is not a knowledge base. Memory answers *what should this agent
remember about the user, the project or earlier work*; a knowledge base answers
*what do we know about the world or our company*.

```text
MEMORY     Ruben prefers technical answers.
KNOWLEDGE  MCP supports resources and tools.
```

**Fine-tuning** is not a knowledge base either. It changes model weights and
suits behaviour, style and task patterns. For "which version of our security
policy applies today" it is usually the wrong method — a knowledge base can be
updated without retraining.

## 13. The architecture rule worth keeping

Three levels, and the lower ones must be **regenerable**:

```text
Authoritative sources     PDF + Notion + DMS
        ▼
Derived knowledge         curated wiki
        ▼
Search indexes            BM25 + vector + graph
```

Never say `vector DB = knowledge base`. If the vector DB breaks:
`source of truth → re-index → back again`.

## 14. Deciding by the problem, not by the vocabulary

What not to do: build GraphRAG plus MCP plus agent plus vector DB plus knowledge
graph plus LLM wiki plus multi-agent because the terms exist. That produces
architecture, not benefit.

| Case | Answer |
|---|---|
| "I want to question 50 PDFs" | Simple RAG. Probably nothing more |
| "I want to build my personal knowledge over years" | Raw sources → LLM-maintained wiki → folder workspace |
| "300 staff need to search policies" | DMS/SharePoint → ACL-aware enterprise RAG → chat |
| "We want to analyse relationships and dependencies" | RAG **and** knowledge graph |
| "The AI should find information and then change systems" | RAG/search → agent → tools, MCP, APIs |

And let it grow in stages:

```text
1  files + agent
2  files + wiki + agent
3  files + wiki + fulltext search + agent
4  files + wiki + hybrid RAG + agent
5  files + wiki + RAG + knowledge graph + agent   ← only if truly needed
```

For a personal or small professional knowledge base, start deliberately simple:
Git, Markdown, a desktop agent. No vector DB, no graph, no complex RAG — because
first you want to find out **which knowledge structure works at all**.

## 15. A correction to the earlier figure: "public AI" is a dangerous term

Cloud AI does not mean "my data is public". A better split:

```text
Consumer AI SaaS · Business/Enterprise AI SaaS · Private cloud AI
· On-prem AI · Local/offline AI
```

A SaaS system can have very good governance, and a self-hosted system can be
badly secured. **Hosting location alone is not data sovereignty.**

## 16. Data sovereignty as a matrix

The real analysis, fourteen dimensions:

| Dimension | Question |
|---|---|
| Source of truth | Where is the original? |
| Storage | Where are copies? |
| Processing | Where is content processed? |
| Index | Where are embeddings and the search index? |
| Identity | Who may access? |
| Permissions | Are source ACLs carried over? |
| Retention | How long does data stay? |
| Training | Is data used for model training? |
| Logging | What is logged? |
| Write access | What may the AI change? |
| Export | Can I get everything back out? |
| Delete | Can I delete data completely? |
| Portability | Can I change provider? |
| Provenance | Do I know where knowledge came from? |

## 17. The whole solution space in one picture

```text
                         SOURCES
        Notion        Mail        Files        SQL
                         ▼
              CONNECTOR / API / MCP
                         ▼
                     INGESTION
                 parser / OCR / ACL
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
    RAW STORE      SEARCH INDEX      KNOWLEDGE
                   BM25 / vector       GRAPH
        │                └───────┬────────┘
        ▼                        ▼
    LLM-WIKI                 RETRIEVAL
        └────────────┬───────────┘
                     ▼
                  CONTEXT
                     ▼
                    LLM
                     ▼
                   AGENT
        ┌────────────┼──────────────┐
        ▼            ▼              ▼
     Notion        Files          Mail
     WRITE         WRITE          SEND
```

Above all of it: governance, security, identity, ACL, provenance, versioning,
evaluation, audit.

## 18. The definition, and the field

> **AI-supported knowledge management covers the capture, structuring,
> indexing, retrieval, synthesis, curation and use of knowledge with the help of
> language models and agentic systems.**

Underneath: knowledge capture · document intelligence · enterprise search · RAG
· semantic search · knowledge bases · LLM wikis · knowledge graphs · memory ·
agents · knowledge governance.

## 19. The practical conclusion

Hold three systems strictly apart:

- **Raw sources** — unchangeable, authoritative information
- **Knowledge layer** — the structured, curated representation of what you know
  from them: Notion, a Markdown wiki, a knowledge graph
- **Retrieval layer** — only the machinery that finds things again: BM25,
  embeddings, vector DB, graph search

```text
Sources → Knowledge → Retrieval → LLM → Agent → update Knowledge
```

**That loop is where a chatbot becomes an actual AI knowledge system.**

## What the author proposes next

Not collecting more terms, but **fully constructing five to seven concrete
reference architectures** — from a simple personal Markdown LLM wiki through
Notion-plus-AI and classic enterprise RAG to a fully local on-prem system with
MCP, RAG, knowledge graph and agent. For each: components, data flow, data
sovereignty, effort, hardware and software, security model, advantages, limits,
and when the extra effort actually pays.

## Sources

As given, with tracking parameters removed.

1. [OpenAI — Apps in ChatGPT](https://help.openai.com/en/articles/11487775)
2. [OpenAI — Introducing the Codex app](https://openai.com/index/introducing-the-codex-app/)
3. [OpenAI — ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275)
4. [Model Context Protocol — server specification, 2025-06-18](https://modelcontextprotocol.io/specification/2025-06-18/server/index)
5. [Lewis et al., Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (2020)](https://arxiv.org/abs/2005.11401)
6. [Gao et al., Retrieval-Augmented Generation for Large Language Models: A Survey](https://arxiv.org/abs/2312.10997)
7. [Microsoft — GraphRAG overview](https://microsoft.github.io/graphrag/index/overview/)
8. [Ming et al., Retrieval as Reasoning: Self-Evolving Agent-Native Retrieval via LLM-Wiki](https://arxiv.org/abs/2605.25480)
9. [OpenAI — Notion app with sync](https://help.openai.com/en/articles/12532955)
10. [Notion — Create a page (API reference)](https://developers.notion.com/reference/post-page)
11. [Notion — Enterprise Search](https://www.notion.com/help/enterprise-search)
12. [OpenAI — Enterprise privacy](https://openai.com/enterprise-privacy/)
