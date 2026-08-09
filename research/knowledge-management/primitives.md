# Level zero: the primitives everything else is built from

> **Partly verified.** Sources checked 2026-08-09 — see [STATUS.md](./STATUS.md).
> Ten citations; the three checkable new ones resolve, the OpenAI pages return
> 403 to automated requests as before.

| | |
|---|---|
| Received | 2026-08-09 |
| Author | Ruben Nati |
| Original language | German |
| This file | Translation, wording by Claude; claims, diagrams and structure unchanged |

The earlier drops added information. This one adds the **foundation the terms
derive from** — the level at which an unfamiliar product can be taken apart
without knowing it.

The stated goal: not learning twenty examples of integrals, but understanding
what integration does and why the method works. Then a new case can be read
directly — *that is retrieval, that is only a connector, this is persisted, here
an LLM is needed, there it is not.*

## What was missing until now

1. **The laws.** What can an LLM actually do, what can it not, and how does
   information technically get in and out?
2. **The mechanics.** Not `user → RAG → LLM`, but: who receives the HTTP
   request, who runs the search, who creates the embedding, who decides which
   five passages are relevant, what does the model actually receive?
3. **A term model.** Retrieval, context, embedding, reranker, agent, tool,
   connector, MCP defined once, cleanly.
4. **Levels of observation.** The same RAG is a website to a user, twelve
   components to a developer, several data flows and trust boundaries to
   security.
5. **Lifecycle.** How does knowledge arise, get proposed, reviewed, published,
   changed, discarded and versioned?

## 1. What an LLM actually is

Forget the products for a moment.

```text
input → LLM → output
```

It receives a sequence of tokens and computes probabilities for further tokens:
`f(context) → the next sensible continuation`. Its trained parameters — the
**model weights** — are its built-in, parametric knowledge. The original RAG
paper distinguishes exactly between that parametric knowledge and an external,
non-parametric source.

## 2. The most important law of all

A bare LLM **cannot reach your disk, Notion, Gmail, the internet or a vector
database.** There is no magic wire out. Without an environment it sees only what
it is given for that one computation.

```text
                  Internet
                     ✗
Disk ✗ ────────► [ LLM ] ◄──────── ✗ Gmail
                     ✗
                   Notion
```

To use external information, **another piece of software** must fetch it and
hand it over. Almost the entire field follows from this.

**ChatGPT is therefore much more than an LLM.** The chat box is not the LLM. The
file upload is not the LLM. Web search, memory, connectors and deep research are
not the LLM. The product **orchestrates** these things around one or more
models.

## 3. Five rules almost everything follows from

1. **An LLM can only work with what is in its current context.**
2. **External information must be placed in that context, or made reachable
   through a tool.**
3. **Persistence lives outside the LLM** — a database, wiki page, file, chat
   history or memory component stores things.
4. **Permissions must be enforced outside the LLM.** A prompt saying "please do
   not show Ruben HR files" is not access control.
5. **The LLM performs no external action itself.** It can decide
   `send_email(...)`, but some software must actually call the API.

## 4. Classic RAG: the application searches, not the model

The common mental picture is a RAG plugged into the side of an LLM. Technically
the classic case is the other way round:

```text
question → RAG backend → SEARCH → knowledge index
        → relevant content → context builder
        → question + found content → LLM → answer
```

**The LLM need not know the index exists.** The backend searches first. The
model then receives something that simply looks like text:

```text
SYSTEM: Answer using the following company documents.

SOURCE 1: Backup Policy v4, page 17
"Restore tests are to be carried out quarterly."

SOURCE 2: IT operations handbook, page 42
"The last recovery test was carried out on 14 June."

USER: How often must restore tests take place?
```

It may not know that text came out of a vector database at all.

### Who searches the RAG? The retriever

**Retrieval** means: out of a larger body of information, pick what is probably
relevant to a query.

**Does the retriever need an LLM? No.** A basic RAG searches entirely without
one: `question → embedding model → query vector → vector search → five
passages`. The LLM comes afterwards.

## 5. The pieces, defined

**Embedding** — a numeric representation of content. As a simplified model with
three meaning dimensions (IT, backup, personnel):

```text
"restore test"       [0.90, 0.95, 0.02]
"data backup"        [0.82, 0.91, 0.01]
"holiday request"    [0.03, 0.01, 0.95]
```

The first two lie mathematically closer. Real embeddings have far more
dimensions. The point: **meaning is transformed into a mathematically comparable
representation.**

**Chunk** — a section of a larger document, because you do not want to push a
400-page handbook into the model for every question. 400 pages become perhaps
1,200 sensibly sized segments, each stored with `chunk_id, document_id, page,
heading, text, embedding, classification, permissions, version`.

**Building the index**: `PDF → parser → text → chunker → chunks → embedding
model → text + vector → INDEX`.

**At query time** the system computes which stored vectors are mathematically
closest to the query vector:

```text
0.91  Backup Policy §4.3
0.86  Disaster Recovery §7.2
0.72  Restore Test Report
0.41  Server Handbook
```

**That is not an LLM decision.** It is a retrieval computation.

> Saying "the RAG knows where the information is" is loose. The system computes
> that certain content *appears* particularly relevant to this query.

**Keyword search / BM25** — ranks on term frequency, term rarity and document
length. Very good for `CVE-2026-1234`, `Server-A17`, `ISO 27001`, `Article 21`.

**Semantic search** — searches by meaning. "How often do we check that backups
work?" against "recoverability is to be validated quarterly by restore test":
almost no shared words, very close in meaning.

**Hybrid search** — both, merged.

**Reranking** — the first retrieval step is cheap and fast and may return fifty
results; the reranker is allowed to be slower and more accurate and cuts to five.
It can be its own model, a cross-encoder, or an LLM. So **an LLM is optionally
usable inside retrieval**, but not required.

**Context assembly** — building the actual model input: system prompt + user
question + conversation history + retrieved chunks + source metadata.

### The whole classic RAG

```text
user → browser → HTTPS → RAG backend
     → authentication → user permissions
     → query ─┬─ BM25 search
              └─ embedding → vector search
     → merge → reranker → ACL filter → top chunks
     → context builder → LLM → answer → browser
```

## 6. And now the "plugged in at the side" picture becomes right after all

Because there is a second architecture. **Agentic RAG** gives the model a tool:

```text
TOOLS AVAILABLE:
  search_company_knowledge(query)
  get_document(id)
```

The model replies not to the user but to the runtime:

```text
TOOL CALL: search_company_knowledge("restore test frequency backup policy")
```

```text
LLM → agent runtime → retriever → knowledge index
    → results → agent runtime → LLM
```

Now the model genuinely decides *I need more information*.

**Two fundamentally different RAG models:**

```text
Pipeline RAG        search first, LLM second — the application always retrieves
Agentic RAG         LLM decides whether search is needed
```

The second is more flexible and more complex.

### Which is why "we use RAG" stops being informative

Which source? Which ingestion, chunking, embedding, indexes, retrieval,
reranker, ACL, query transformation, context builder? Pipeline or agentic? Which
model, which citation logic, which evaluation? The original term describes the
*principle* of combining model knowledge with externally retrieved knowledge —
not one fixed product architecture.

## 7. Web search is the same principle with a different source

```text
LLM / orchestrator → web search → search engine → pages
                   → relevant content → LLM
```

Also retrieval → additional information → generation. The difference is
ownership of the index: for a company RAG you built it; for web search the
search engine already has one and your application only uses it.

### Search and Deep Research are not the same

**Search** is a retrieval capability. **Deep Research** is an agentic workflow:

```text
research question → plan → search → read sources → evaluate gaps
   ├─► search again
   ├─► open another source
   ├─► change query
   └─► compare evidence
                    → synthesis → report
```

> **Deep Research is not a special database. It is a research agent.**

Which means it could just as well research internal data — web, Notion, a
company RAG, SharePoint, SQL. The layers show through again: Deep Research is a
*process*, web search is a *tool*, RAG search is a *tool or retrieval system*,
Notion is a *source*, MCP is a possible *transport*.

## 8. Connector against MCP, from the bottom

Gmail exposes an API that understands `list messages`, `get message`,
`send message`, `modify message`. A **connector** is the adapter that
understands both your application and that API.

**Without MCP**, your agent has a proprietary function `gmail_search(...)` that
calls the REST API. Done. MCP is not needed for that.

**With MCP**, a standardised layer sits between:

```text
AI application → MCP client → MCP → MCP server → Gmail connector → Gmail API
```

**MCP is not "better search".** With and without it, the same Gmail query can
happen internally. What MCP changes is the interface between *AI client and
integration*, not necessarily between *integration and Gmail*.

> **A connector is a role. MCP is a protocol.** Compare a web server against
> HTTP — not an exact parallel, but a useful one.

**Do you always need it? No.** A nightly bulk sync of 100,000 SharePoint
documents through an ETL pipeline into a RAG index has no need for MCP; a direct
API integration may be the better choice. MCP is interesting for `agent → tool`
— dynamic capabilities during a task.

**And it is not dead.** The specification was substantially developed on 28 July
2026: stateless protocol core, hardened authorisation, a formal extensions
model. That is active development, not retreat. It does not mean MCP will
replace everything — REST, OAuth, database protocols, event systems and
product-specific APIs continue underneath.

**MCP does not replace permissions.** For one `search_mail()` these may all
apply at once:

```text
user → AI platform login → AI platform permission → MCP authorisation
     → MCP tool permission → OAuth credential → mail system → mailbox permission
```

## 9. The access-control vocabulary

**ACL** — object-level: who may access *this* object.

```text
document-173.pdf
  read:  user:ruben, group:security
  write: group:security-admin
```

**RBAC** — role-based: `Ruben → Security Analyst`, and the role carries the
rights.

**Authentication** asks *who are you*; **authorisation** asks *what may you do*.
They must be kept apart.

## 10. Is an upload a connector?

At the highest level of abstraction, yes — it connects data to the application.
But using the word that way loses the distinctions that matter. Better:

```text
DATA ACCESS
├── Upload            one-off ingress: file → HTTP → storage → parser
├── Filesystem access
├── API
├── Connector         a lasting relationship: OAuth → Notion, queryable later
├── Sync connector    continuous replication into an index
├── MCP tool          live call during a task
├── Database connection
└── Web search
```

## 11. "LLM wiki" — the term is not standardised

This is a correction of the earlier drops, which used it too casually.

A 2026 research project names its architecture **LLM-Wiki** and describes it as
an agent-native retrieval system that compiles documents into structured wiki
pages with bidirectional links, reachable through search, read and
link-following. Other current work speaks of **LLM-curated hierarchical
knowledge bases** and self-evolving knowledge structures.

The generic term would rather be one of: *AI knowledge base ·
LLM-maintained knowledge base · agent-maintained knowledge base · LLM-curated
knowledge base · self-evolving knowledge base · agent-native knowledge system.*

**"Wiki" describes one possible form of organisation**, nothing more. The same
principle could be called LLM documentation, `research/`, `company-knowledge/`
or `handbook/`. The word is not the technical secret.

### What actually makes it an AI knowledge base

```text
persistent storage + addressable knowledge units + defined structure
+ search and read capability + an LLM/agent that can work with it
```

And for a self-maintaining one, additionally: **write/change** and a
**knowledge lifecycle**.

### How does the agent know what to do?

Not because the folder has wiki magic. Through an operating contract:

```text
knowledge/
├── INSTRUCTIONS.md
├── concepts/  projects/  decisions/  sources/  pending/
```

```text
This directory is the central knowledge base.

1. Never change original sources.
2. New findings go to /pending first.
3. Update existing articles rather than duplicating.
4. Every statement carries a source.
5. Mark unconfirmed information as "candidate".
6. Published files may only change after review.
```

## 12. The knowledge lifecycle — the layer that was missing entirely

A serious knowledge base must not work as `LLM notices something → immediately
truth`. Rather:

```text
raw information → CANDIDATE → PENDING → human / policy review
                                   ├── reject
                                   ▼
                              APPROVED → PUBLISHED → SUPERSEDED → ARCHIVED
```

Which means pages need **states**, not just content:

```yaml
title: Model Context Protocol
status: pending
version: 3
created: 2026-08-08
updated: 2026-08-08
sources: [source-147]
reviewer: unset
confidence: medium
```

After review: `status: published`, `reviewer: ruben`, `confidence: verified`.

## 13. Shared against personal knowledge

A small-team pattern worth separating cleanly at the technical level rather than
by convention:

```text
SYNCED                          LOCAL ONLY
/Knowledge-Shared/              ~/.knowledge-local/
├── sources/                    ├── user-context.md
├── pending/                    ├── scratch/
├── published/                  ├── drafts/
├── archived/                   ├── cache/
├── templates/                  ├── private-memory/
└── KNOWLEDGE_RULES.md          └── local-state/
```

The agent reaches both. Two kinds of knowledge:

```text
Organisation knowledge   "what do WE know?"       shared
Personal context         "what applies to ME?"    local
```

The same question then assembles different context for different people —
shared knowledge plus Ruben's local context, or shared knowledge plus Alice's.

**And a rule that prevents the obvious failure:** personal state must never
overwrite canonical knowledge directly. It goes `personal → proposal → /pending
→ review → /published`. Otherwise every agent continuously writes its user's
private view into the shared truth.

### Where the folder model stops working

For three or four technical people, Nextcloud plus Markdown plus an agent plus
review rules is genuinely attractive: plain files, backup, sync, offline
capability, low lock-in, free choice of AI client. Local agents can be pointed at
a chosen folder or repository with configurable working directories and
read/edit tools — the mechanism is in no way limited to program code.

At thirty people it tips: concurrent changes, conflicts, ACL, review assignment,
search, audit, versioning, ownership, notifications, approvals, comments, web and
mobile access, SSO. Then it becomes a wiki web app over a knowledge database with
versioning, ACL, an AI backend and RAG. **Not a different concept — a scaled
implementation of the same one.**

## 14. The fundamental operations

At the core only a few things happen:

```text
STORE · READ · SEARCH · TRANSFORM · SELECT · REASON · GENERATE · WRITE · EXECUTE
```

Almost every term reduces to a combination:

| | |
|---|---|
| **RAG** | search + select + reason + generate |
| **LLM-maintained knowledge base** | read + reason + transform + write + store |
| **Knowledge graph** | store structured relationships + search/traverse them |
| **Agent** | reason + select tool + execute + observe + repeat |
| **Deep Research** | plan + search + read + evaluate + search again + synthesise |
| **Connector** | connect system A to system B |
| **MCP** | standardise how AI systems discover and call capabilities |

Suddenly sixty terms are not sixty independent things.

## 15. The relationship map

```text
LLM
├── can exist without RAG
├── can exist without an agent
└── needs context for every computation

RAG
├── uses retrieval
├── may use vector search, BM25 or a knowledge graph
└── delivers context to an LLM

Agent
├── uses an LLM
├── can use RAG, web search or MCP tools
└── can write and act

MCP
├── is NOT a RAG
├── is NOT a knowledge store
├── is NOT an agent
└── makes tools reachable for an agent

Knowledge base
├── can be a wiki, Markdown, Notion
├── can contain a graph
└── can be searched by a RAG
```

## 16. The order of questions that produces an architecture

Never start with "is this RAG or MCP?". Start here:

```text
 1. What is the source of truth?
 2. What should the user do?
 3. Which information do they need?
 4. How is that information found?
 5. When does the LLM come in?
 6. Which tools does it need?
 7. Which data must be persistent?
 8. What may be read?
 9. What may be changed?
10. Who decides that?
11. Where does each component run?
12. Which data crosses which trust boundary?
```

Then the architecture almost falls out by itself.

## 17. The lexicon

Level zero of the whole model. Roughly seventy terms, defined once.

| Term | What it means |
|---|---|
| LLM | model for processing and generating language or multimodal content |
| Model weights | the parameters learned during training |
| Inference | running the trained model on an input |
| Token | the processing unit of a language model; roughly parts of words |
| Prompt | the input and instructions for the model |
| Context | all information available during one model call |
| Context window | the maximum context a model can consider at once |
| System prompt | the application's overriding instructions to the model |
| Frontend | the user interface |
| Backend | server-side application logic |
| API | a defined programming interface between systems |
| Endpoint | a concrete callable API address or function |
| Tool / function | an external capability an agent can call |
| Tool calling | the model emitting a structured call to a tool |
| Agent | model plus tools plus control flow, able to run several steps |
| Orchestrator | software coordinating model, tools, retrieval and workflow |
| Workflow | a predefined sequence of processing steps |
| Retrieval | fetching relevant information out of a larger body |
| Retriever | the component that performs it |
| Index | a data structure enabling fast search |
| Full-text index | an index for text search |
| BM25 | an established ranking method for text search |
| Embedding | a numeric representation of meaning or content |
| Embedding model | the model producing those vectors |
| Vector | a number sequence allowing mathematical comparison |
| Vector database | a system for storing and searching such vectors |
| Vector search | finding mathematically similar vectors |
| Semantic search | search by meaning rather than by word |
| Keyword search | search by concrete words |
| Hybrid search | combining several methods, usually keyword and vector |
| Reranker | a second scoring stage that reorders retrieval results |
| Chunk | a smaller section of a larger document |
| Chunking | splitting documents into those sections |
| Parsing | technical extraction and interpretation of a file |
| OCR | turning image or scan content into text |
| Ingestion | the process of taking data into a knowledge or search system |
| Metadata | information about content: source, date, author, classification |
| RAG | external information retrieved and used as context for a model answer |
| Agentic RAG | RAG where an agent decides dynamically when and how to retrieve |
| Knowledge base | a persistent body of knowledge |
| LLM-maintained knowledge base | one an LLM reads, structures and develops under control |
| LLM wiki | a current but not universal term for a wiki-like agentic knowledge architecture |
| Knowledge graph | knowledge as entities and their relationships |
| Entity | a distinctly modelled thing: a person, server, company |
| Relationship | a modelled connection between entities |
| Graph traversal | following relationships through the graph |
| Ontology | a formal model of which kinds of things and relationships exist |
| Taxonomy | hierarchical classification |
| Connector | an adapter or integration between systems |
| MCP | a standardised protocol through which AI clients use servers' resources and tools |
| MCP client | the application part that uses MCP servers |
| MCP server | a service offering capabilities over MCP |
| Resource | context or data content offered over MCP |
| Authentication | establishing identity |
| Authorization | deciding what that identity may do |
| OAuth | a standard for delegated access |
| Access token | the credential exercising a granted access |
| Scope | the bounded permission range of a token |
| OIDC | OpenID Connect; an identity layer on OAuth |
| ACL | an object-level access list |
| RBAC | role-based access control |
| Identity provider (IdP) | the system for identities and sign-in |
| Source of truth | the authoritative, canonical source of an item of information |
| Provenance | the origin and history of an item of information |
| Sync | synchronisation between systems |
| Freshness | how current a derived body of data is |
| Revocation | withdrawal of a previously granted access |
| Cache | temporary intermediate storage |
| Memory | persistent or temporary state about a user or task — not general knowledge |
| Deep Research | a multi-step agentic research process |
| Web search | retrieval of relevant public web content |
| Workspace | a working environment of context, files, state and possibly tools |
| Folder workspace | a workspace whose persistent state lives in the filesystem |
| SaaS | software operated as a service by the vendor |
| On-prem | operated in your own infrastructure |
| Local / on-device | run and stored directly on the end device |
| Observability | technical visibility through logs, metrics and traces |
| Evaluation | systematic quality testing of an AI system |
| Hallucination | plausible-looking but insufficiently grounded or wrong model output |
| Prompt injection | manipulative content attempting to influence the system's instructions |
| DLP | data loss prevention; controls against unauthorised data egress |
| Secrets management | secure handling of tokens, API keys, passwords and certificates |

## What the author proposes next

Stop building along product names and buzzwords, and instead walk **each
mechanism from the first byte to the answer or write action** — RAG, AI knowledge
base, knowledge graph, search and Deep Research, connector and MCP, and agent —
including concrete data structures and example requests.

And take the Nextcloud case as the teaching example, implementing the same
function four ways:

```text
A. Files + Nextcloud
B. Git + Markdown + pull requests
C. Notion + agent
D. own web app + database + RAG
```

Not to learn four solutions, but to see that all four **implement the same
fundamental operations differently**.

## Sources

As given, with tracking parameters removed.

1. [Lewis et al., Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401)
2. [OpenAI Academy — Search and Deep Research](https://openai.com/academy/search-and-deep-research/)
3. [OpenAI — Introducing deep research](https://openai.com/index/introducing-deep-research/)
4. [Model Context Protocol — server specification, 2025-06-18](https://modelcontextprotocol.io/specification/2025-06-18/server/index)
5. [Model Context Protocol Blog — the 2026-07-28 specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
6. [Model Context Protocol — authorization](https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization)
7. [Ming et al., Retrieval as Reasoning: Self-Evolving Agent-Native Retrieval via LLM-Wiki](https://arxiv.org/abs/2605.25480)
8. [WikiKV: Schema-Evolving Path-Indexed Storage for Hierarchical Knowledge Navigation](https://arxiv.org/abs/2606.14275)
9. [OpenAI — get started with Codex](https://openai.com/codex/get-started/)
10. [Anthropic — set up Claude Code](https://docs.anthropic.com/en/docs/claude-code/getting-started)
