# The reference architecture: from the top and from below

> **Partly verified.** Sources checked 2026-08-09 — see [STATUS.md](./STATUS.md).
> Nine of eleven resolve; the MCP specification claim was read at the source and
> holds exactly.

| | |
|---|---|
| Received | 2026-08-09 |
| Author | Ruben Nati |
| Original language | German |
| This file | Translation, wording by Claude; claims, diagrams and structure unchanged |

Two things have to be shown at once: what a **user** sees ("I open a website and
chat with our company knowledge") and what actually happens between browser,
authentication, backend, index, source data, LLM, MCP, API, permissions and
storage.

## A correction to the earlier picture

The LLM is the central language and reasoning component, **but not the centre
through which all data necessarily flows.** A good system deliberately tries
*not* to push the whole data base into the model. Search, permission checking,
storage, indexing and many actions happen outside it. Ideally the model receives
only the context the current task needs — which was already the core motive of
the original RAG approach: combining the model's parametric knowledge with
externally retrievable knowledge.

## 1. Ten technical layers

| Layer | Job | Examples |
|---|---|---|
| **0. Interface** | human interacts with the system | chat, web app, Notion, desktop app, Teams |
| **1. Orchestration / AI backend** | steers the sequence | own backend service, agent runtime |
| **2. LLM** | language, analysis, reasoning, generation | hosted or local model |
| **3. Retrieval** | find relevant information | BM25, vector search, hybrid, graph query |
| **4. Knowledge store** | keep knowledge machine-readable | vector DB, search index, knowledge graph, wiki |
| **5. Ingestion** | prepare sources | parsing, OCR, chunking, embeddings |
| **6. Integration** | attach systems technically | REST API, connector, MCP, filesystem |
| **7. Source systems** | the original data | Notion, mail, SharePoint, DMS, fileserver |
| **8. Identity and security** | who may do what | OIDC, OAuth, ACL, RBAC, policy engine |
| **9. Governance and operations** | control over the lifecycle | audit, logs, backup, retention, versions |

This matters more than "RAG versus MCP", because now every term hangs somewhere
specific.

## 2. Which terms are even comparable

| Term | What it is | Layer |
|---|---|---|
| Chat | interface | UI |
| Workspace | working environment, state, files | UI / runtime |
| LLM | model | intelligence |
| Agent | control flow with LLM and tools | orchestration |
| RAG | architecture for obtaining context | retrieval |
| Vector DB | technical store and index | knowledge store |
| Knowledge graph | structured knowledge representation | knowledge store |
| LLM wiki | knowledge application, architecture pattern | application |
| Connector | integration to one system | integration |
| MCP | standard protocol for AI integrations | integration |
| Notion | application *and* data source | source / knowledge base |
| Email | communication system, data source | source |
| Folder | file store, working area | source / workspace |
| OAuth | delegated authorisation | security |
| ACL | object-level permission | security |
| Embeddings | numeric representation | ingestion / retrieval |
| BM25 | text ranking method | retrieval |
| OCR | image to text | ingestion |

> **RAG and MCP are no more alternatives than a database and HTTPS are.** They
> occur in the same system.

## 3. Four data paths exist simultaneously

A professional system does not have *one* data flow. It has at least four, and
they run on different schedules.

**A — Ingestion.** `document → connector → parser → chunking → embeddings →
index`. Runs nightly or continuously. **The LLM need not be involved at all.**

**B — User query.** `browser → AI backend → retrieval → index → relevant chunks
→ LLM → answer`. The classic RAG path.

**C — Action.** `LLM → orchestrator → tool / MCP → Notion API → Notion`. **This
is not RAG.** It is tool use, agentic work.

**D — Permission.** `user → identity provider → groups → retrieval filter → only
documents this person may see`. This path decides what any of the others may
surface.

## 4. "I have a RAG" is as imprecise as "I have a database"

A RAG need not have a user interface at all. It can be a backend service:

```text
POST /ask   { "question": "What is our backup policy?" }
→           { "answer": "...", "sources": [...] }
```

An employee reaching it through a website sees none of the machinery — only a
question, an answer, and "Source: Backup Policy v4, page 17".

## 5. What "backend" actually means

Not "ask the LLM". Roughly:

```text
1. authenticate the user        7. build prompt and context
2. determine permissions        8. call the LLM
3. classify the request         9. verify sources
4. run retrieval               10. stream the answer
5. filter results              11. write the audit log
6. rerank results
```

Under the hood:

```text
Browser → Reverse proxy → RAG backend
                            ├── Identity service (OIDC/JWT)
                            └── Retriever
                                 ├── BM25 index
                                 ├── Vector DB
                                 └── Metadata store
                                      ▼
                                  Reranker → ACL filtering
                                      ▼
                              Context builder → LLM → response
```

## 6. And in parallel runs the ingestion factory

Invisible to the user:

```text
Notion, SharePoint, fileserver, DMS, uploads
        ▼
 connector worker → queue → parser/OCR → normalisation
        ▼
    chunking → metadata + ACL → embedding service
        ├──► vector DB
        ├──► fulltext index
        └──► metadata DB
```

**That is "building a RAG".** The employee only *uses* the result. Two entirely
different perspectives.

## 7. Four roles see four different systems

| Role | Sees |
|---|---|
| End user | chat, sources, answers |
| Developer | APIs, retriever, MCP, embeddings |
| Administrator | users, groups, connectors, logs |
| Security / data owner | ACL, data paths, retention, contracts, audit |

When someone says "we are introducing RAG", the question is **from which
perspective**. For the user it is a new website. For the developer it is twelve
services. For the data protection officer it is five new processing operations.

## 8. ACL-aware RAG is one of the most important enterprise topics

Throw a board-only document, an all-staff document and an HR document into the
same vector DB, then run `semantic_search("salary")`, and you have a problem.

Document metadata therefore needs at least:

```text
document_id · source · source_id · tenant · classification
allowed_users · allowed_groups · owner · version · updated_at
```

And the query becomes semantic search **plus** a filter on
`allowed_user = … OR allowed_group IN (…)`. Only afterwards may the content
enter the LLM context.

### Permissions do not belong in the LLM

Wrong:

```text
all documents → LLM → prompt: "Please do not show Ruben any HR data."
```

That is not access control. Right:

```text
user identity → authorisation layer → retrieval
→ only permitted documents → LLM
```

The model should **not receive** what the user may not see, rather than being
asked not to mention it.

## 9. Connector against MCP, precisely

A **connector** is a generic architectural term: it translates between two
systems and knows OAuth, the target API, message IDs, threads, pagination,
attachments, search syntax, rate limits.

**MCP sits one level above:**

```text
ChatGPT / Claude / IDE → MCP client → MCP → MCP server
                                            → Gmail connector → Gmail API
```

The MCP server publishes tools — `search_mail(query)`, `read_mail(id)`,
`create_draft(...)`, `send_mail(...)`. MCP defines the client/server interaction
and standardised primitives; reaching the target system stays the job of the
implementation behind the server.

A proprietary connector can perform exactly the same mail search directly
against the API. So why MCP? **Because it decouples the integration from the AI
client.**

```text
without MCP                        with MCP
ChatGPT ── own integration ── Gmail    ChatGPT ─┐
Claude  ── own integration ── Gmail    Claude ──┼── MCP ── Gmail service
IDE     ── own integration ── Gmail    IDE ─────┘
```

In one sentence: **connector** answers "how do I connect my system to Gmail?";
**MCP** answers "how do I offer those Gmail capabilities to AI applications
through a standardised interface?" An MCP server can contain a connector.

### MCP is not a substitute for permissions

MCP says a tool exists. Gmail still has to decide whether this user may read
their messages. Several security layers stack:

```text
user → AI platform RBAC → MCP tool permission → MCP server authorisation
     → OAuth token → provider scope → mailbox permission
```

All of them matter. MCP authorisation answers *may this client use this MCP
service*; whether Ruben may read document X in SharePoint remains SharePoint's
question.

### Is MCP on the way out?

Currently the opposite. On **28 July 2026** a new specification appeared with a
stateless protocol core, a `server/discover` call, header-based routing, cache
hints, authorisation hardening, and — notably — a **formal deprecation policy
with a twelve-month minimum window**.

That cuts both ways: MCP is still a fast-moving standard, not something frozen
like HTTP.

> MCP is becoming an important standardised AI tool interface, while REST APIs,
> OAuth and product-specific connectors continue to exist underneath it.

## 10. "Upload = connector" is worth separating

Technically yes, the file has to get from the computer to the AI somehow. But
calling everything a connector costs the word its precision. An upload is an
**ingress channel**:

```text
browser → upload endpoint → object storage → malware scan
        → parser (PDF text, DOCX, OCR) → text/structure → context or index
```

Entirely different machinery from an OAuth connector polling the Notion API on a
schedule. Worth distinguishing: **upload · connector · filesystem access · API ·
MCP · sync.**

### What the LLM sees of an uploaded PDF

Not the bytes. In between sits parsing into text, pages, tables, images and
metadata, then either the whole text into the model, or text → index → relevant
passages → model. For large documents the second is typical.

The same holds for email, which is not `mail → LLM` but a message with headers,
sender, recipients, plain and HTML bodies, attachments, thread ID, labels and
timestamp — and the application must decide which part it needs.

## 11. Read and write must always be modelled separately

A mail agent asked to "find all mails from Markus about the MCP PoC and
summarise the open points" runs: tool selection → `search_mail` → message IDs →
`read_mail` → relevant bodies → LLM → summary. Proprietary connector or MCP, the
function is the same.

Then the user says "reply to Markus". **The category changes**: read becomes
write, an external action with consequences.

```text
agent → reply_email(...) → AI backend → approval / policy → mail API → internet
```

Notion works similarly with a different data model — workspace, page, blocks,
properties, children, data source — and its connections carry explicit
capabilities for reading, updating and inserting content, which do not override
the underlying user's own rights. Reading and writing are two separate
capabilities needing two separate permissions.

## 12. The LLM wiki, defined more precisely

"LLM wiki" is **not a technical standard**. No file declares `type = llm-wiki`
and makes a model understand it. It is an architecture and application pattern.
The minimum:

```text
persistent knowledge store + structure/addressing + LLM access + read/update
```

A vector DB is **not** necessary. MCP is **not** necessary. A knowledge graph is
**not** necessary. A web interface is **not** necessary.

### How does the agent know it is a wiki?

**By convention and instruction.** For example, an `AGENTS.md` in the directory:

```text
This directory is a knowledge base.

Put new concepts under /concepts.
Every page contains: title, short definition, details,
relationships, sources, last_updated.
Do not add facts without sources.
Update existing pages rather than creating duplicates.
```

With that plus `concepts/`, `projects/`, `people/`, `sources/`, you already have
a primitive LLM wiki. The word "wiki" comes from the **semantics of the system**,
not from a particular database: the same wiki could live in Markdown and Git, in
Notion, in PostgreSQL behind a web app, or in a dedicated platform.

### Three initialisation states

1. **Empty wiki** — `wiki/instructions.md`, the agent is given ten documents and
   creates the pages.
2. **Seeded wiki** — you define `concepts / projects / people / decisions /
   systems / sources` in advance and the agent files knowledge into them.
   Considerably more controlled.
3. **Schema-based wiki** — every entity has a schema: `type, name, status, owner,
   related, sources, last_review`. Now it is moving towards a structured
   knowledge base.

### The continuum to a knowledge graph

`related: [connectors, oauth, agents]` in a page is already a relationship.
Formalise them and you have `MCP ── IS_A → protocol`, `USED_BY → agent`,
`REQUIRES → authorization`. There is no hard jump:

```text
files → wiki → structured wiki → semantic wiki → knowledge graph
```

### A real one needs more

Source provenance, versioning, conflict detection, duplicate detection, links,
tags, namespaces, authors, status, review, history, ACL, search, backup, audit.
That is where "an agent writes Markdown" becomes a knowledge management system.

### It does not have to be local

A team wiki can be entirely central: browser → wiki web app → authentication →
AI backend → wiki store and LLM → search index. No desktop app needed.

The folder model is popular with coding agents because it is trivially powerful:
a filesystem permission gives list, read, search, create, modify, rename — a
complete CRUD interface for knowledge. But it is **one implementation**, and for
ten users it raises who edits concurrently, who sees which file, version
control, conflicts, search and review — which leads to Git, a shared wiki, or a
database with a web app.

## 13. RAG against LLM wiki, cleanly

```text
RAG            question → find relevant knowledge → generate answer
LLM wiki       new information → understand → organise → store → maintain
```

One optimises **response time**, the other **knowledge accumulation**. They
combine: both can be searched by the same retriever.

## 14. Source of truth, and the data path

If Notion is canonical, then cache, search index and vector DB are **derived**.
Delete the vector index and re-index from Notion — no information lost.

Worth distinguishing permanently:

```text
source data → curated knowledge → derived index → model context → generated output
```

"The data is in Notion" is not an answer. With an AI integration these can exist
at once:

| Kind | Location |
|---|---|
| Original page | Notion |
| OAuth token | integration |
| Synchronised copy | AI platform |
| Extracted text | search system |
| Embedding | vector DB |
| Query | AI backend |
| Relevant passage | LLM context |
| Answer | chat history |
| Audit | logging system |

That is a **data path**, not a single location.

## 15. A correction on GDPR

The earlier claim — *"if my company mail is connected to an LLM in the US, I
definitely have a GDPR problem"* — **does not hold automatically.**

You definitely have a processing operation that must be assessed under data
protection law, possibly including a third-country transfer. Whether it is
permissible depends on the allocation of roles, the legal basis, processing
agreements, purpose limitation, data minimisation, technical measures and a
valid transfer mechanism. The GDPR provides mechanisms for third-country
transfers, and the EDPB describes the assessment of transfer instruments and any
supplementary measures. Adequacy decisions can also apply.

```text
US cloud ≠ automatically GDPR-infringing
"we have a processing agreement" ≠ automatically GDPR-compliant
```

It has to be assessed as its own governance layer.

**EU data residency does not answer everything either.** A provider may store or
process in Europe, and questions remain: sub-processors, support access,
metadata, backups, logs, administrators, training, retention, encryption, key
management. "EU server" is **one line** of the data sovereignty matrix.

## 16. Credentials never go to the model

```text
LLM: "I want to run search_mail"
   → orchestrator → policy check → credential store → mail API
```

Not `prompt: "here is Ruben's OAuth token: abc123"`. The model usually does not
need the credential at all; the tool runtime or connector uses it.

## 17. Control plane against data plane

**Control plane** — who may enable a connector, which tools exist, which models
may be used, which sources are released, which write actions are permitted.

**Data plane** — search a document, read a mail, fetch a Notion page, create an
embedding, call the LLM, write a result.

Enterprise systems need both.

## 18. Synchronisation, freshness and revocation

Indexing Notion or SharePoint immediately raises: when is the index current?
Manual, hourly, nightly, webhook, change feed, continuous. Harder: a page is
deleted — the index must delete too. Ruben loses access — the ACL sync must
react.

```text
10:00  Ruben loses HR permission
10:01  SharePoint correct
10:05  RAG index still has the old ACL
10:06  Ruben asks the RAG
```

**With poor ACL sync your AI system shows information the source system would
already refuse.** That is a genuine architecture problem, and it is more
security-critical than it looks.

## 19. Provenance

For every derived unit of knowledge, ideally: where does this statement come
from, which version, when read, who produced it, LLM-generated or
human-reviewed, which original source.

```text
Fact: "backup retention = 90 days"
source: backup_policy_v4.pdf   page: 17    extracted: 2026-08-08
generated_by: knowledge-agent-v2           reviewed_by: Ruben
confidence: verified
```

## 20. Lifecycle

Knowledge ages. A RAG with no version awareness finds the 2024, 2025 and 2026
policies and hands the model 30, 60 and 90 days at once. So:
`effective_from · effective_until · version · status · supersedes`.

And this is where the knowledge graph becomes interesting again, because
`Policy V4 ── supersedes → Policy V3` is a relationship.

## 21. There is no single best knowledge architecture

| Problem | Primary mechanism |
|---|---|
| Understand one file | upload |
| Read live data from SaaS | connector |
| Standardise AI tools | MCP |
| Question many documents | RAG |
| Curate knowledge durably | wiki / LLM wiki |
| Model relationships | knowledge graph |
| Carry out tasks | agent |
| Search company-wide | enterprise search |
| Query a structured business system | SQL / API |
| Keep long-term user context | memory |

## 22. Build-time against use-time

```text
Building a RAG                     Using a RAG
sources → connector → parser       open the browser
→ chunker → embedding → index      → type a question
→ ACL → retriever → API → UI       → answer with sources
```

The same split applies to an LLM wiki: choosing storage, defining structure and
write rules, configuring the agent, attaching sources, search, permissions,
versioning, backup, UI — against "what do we know about MCP?"

## 23. Five tags to classify anything new

| Tag | Question |
|---|---|
| FUNCTION | What does it do? |
| STATE | Does it store knowledge durably? |
| ACCESS | Does it read or write? |
| LOCATION | Where does it run? |
| SCOPE | Single user, team or enterprise? |

RAG: retrieval · index persistent, answers not necessarily · mostly read · any
location · single to enterprise. LLM wiki: knowledge management · persistent ·
read and write · any · single to enterprise. MCP: integration protocol · no
knowledge store · read and/or write · local or remote · single to enterprise.
Knowledge graph: knowledge representation · persistent · read and write · any ·
any.

## 24. What is still missing from the picture

The unglamorous but decisive parts:

1. Identity provider and IAM — users, groups, SSO, service accounts
2. Secrets management — OAuth tokens, API keys, certificates
3. Policy engine — when may which agent use which tool
4. Queue / event bus — asynchronous ingestion and synchronisation
5. Object storage — the original documents
6. Metadata store — versions, ACL, source IDs, status
7. Model gateway — which LLM receives which request
8. Observability — logs, traces, cost, latency
9. Evaluation — does the RAG actually answer correctly
10. Provenance — where did the information come from
11. Lifecycle management — update, delete, retention
12. Backup and restore — especially for automatically maintained knowledge
13. Human review — what may the AI publish on its own
14. Prompt-injection defence — external documents can manipulate the agent
15. Data classification and DLP — which data may reach which model

**These are not side topics.** At enterprise scale they matter at least as much
as the vector DB.

## 25. The final model

```text
┌──────────────────────────────────────────┐
│ EXPERIENCE    Chat · Workspace · Web · Desktop
├──────────────────────────────────────────┤
│ ORCHESTRATION Agent · Workflow · Context engineering
├──────────────────────────────────────────┤
│ INTELLIGENCE  LLM · Embedding model · Reranker
├──────────────────────────────────────────┤
│ RETRIEVAL     RAG · Search · SQL · Graph query
├──────────────────────────────────────────┤
│ KNOWLEDGE     Wiki · LLM-Wiki · Vector DB · Graph
├──────────────────────────────────────────┤
│ INGESTION     Parser · OCR · Chunking · Embedding
├──────────────────────────────────────────┤
│ INTEGRATION   API · Connector · MCP · Filesystem
├──────────────────────────────────────────┤
│ SOURCES       Notion · Mail · DMS · Files · SQL
├──────────────────────────────────────────┤
│ TRUST         Identity · ACL · RBAC · OAuth · Policy
├──────────────────────────────────────────┤
│ GOVERNANCE    Audit · Backup · Retention · Provenance
└──────────────────────────────────────────┘
```

## What the author proposes next

Turn this model into a **technical reference architecture with six concrete
variants**: simple chat with upload · personal folder LLM wiki · team LLM wiki ·
enterprise RAG · Notion/mail agent with MCP · fully on-prem private AI.

For each, side by side: **user view, operator and build view, the real
network/API data path, authentication, ACL, storage locations, source of truth,
personal data, write permissions, components, effort and data sovereignty.**

That turns the collection into an architecture handbook in which each variant
can be followed and compared in practice.

## Sources

As given, with tracking parameters removed.

1. [Lewis et al., Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401)
2. [Model Context Protocol — architecture overview](https://modelcontextprotocol.io/docs/learn/architecture)
3. [Google — List Gmail messages](https://developers.google.com/workspace/gmail/api/guides/list-messages)
4. [Google — Choose Gmail API scopes](https://developers.google.com/workspace/gmail/api/auth/scopes)
5. [Model Context Protocol — understanding authorization](https://modelcontextprotocol.io/docs/tutorials/security/authorization)
6. [Model Context Protocol Blog — the 2026-07-28 specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
7. [OpenAI — developer mode and MCP apps in ChatGPT](https://help.openai.com/en/articles/12584461)
8. [Notion — connection capabilities](https://developers.notion.com/reference/capabilities)
9. [EDPB — guidelines following public consultation](https://www.edpb.europa.eu/news/news/2023/edpb-publishes-three-guidelines-following-public-consultation_en)
10. [European Commission — adequacy decisions](https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en)
11. [OpenAI — introducing data residency in Europe](https://openai.com/index/introducing-data-residency-in-europe/)
