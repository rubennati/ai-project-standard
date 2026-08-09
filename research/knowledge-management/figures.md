# Figures received with the knowledge-management material

> **Unverified.** Four diagrams arrived as images. This file records their
> content so it survives, because diagrams on the website are described as data
> and rendered as markup — never shipped as images. See
> `site/src/data/article.ts` (`ArticleFigure`).

Received 2026-08-09, German originals, content translated here.

Much of this appears nowhere in [foundations.md](./foundations.md) — the
clarifications, the misconceptions and the comparison matrices are only in the
diagrams, and they are the most directly useful part of the drop.

## Figure 1 — Terms, layers and data flow

A mental model in eight stages, left to right:

1. **Data sources** — documents, PDFs, office files, wiki/Notion, email, folders
   and file systems, databases/SQL, web/SharePoint/Drive
2. **Access and connectors** — upload, API, sync connector, enterprise search
   connector, MCP/tool connector, file-system access, OCR/parser
3. **Preparation / ingestion** — parsing, OCR, chunking, metadata, ACLs and
   permissions, embeddings, entity extraction
4. **Storage / knowledge layer** — full-text index (BM25), vector index/vector
   DB, knowledge graph, raw file storage; the LLM-wiki or knowledge base sits
   across them
5. **Retrieval and query** — keyword search, semantic search, hybrid search,
   metadata filter, **ACL-aware retrieval**, reranking, graph traversal
6. **Context and memory** — context assembly, citations/sources, short-term
   memory, long-term memory, history, prompt engineering
7. **LLM and reasoning** — chat, summarisation, Q&A, extraction, analysis,
   generation
8. **Agents and actions** — planning, tool use, writing into Notion, reading
   email, creating files, running workflows, human-in-the-loop

### Five clarifications, stated as the point of the figure

- Not every system with files is automatically RAG.
- RAG is not one thing — there are naive, hybrid, graph-based and agentic
  variants.
- An LLM wiki *can* use RAG but does not have to.
- **MCP is an access layer, not a knowledge base.**
- Data sovereignty depends on storage location, processing and permissions.

## Figure 2 — Example architectures

Four shapes, each with effort, data sovereignty and typical use:

| Architecture | Effort | Data sovereignty | Typical |
|---|---|---|---|
| Quick document chat | low | depends on the vendor | ad-hoc analysis |
| Document RAG / knowledge assistant | medium to high | depends on hosting | knowledge search in a team |
| LLM wiki / team knowledge base | medium | depends on the platform | team knowledge, playbooks, internal documentation |
| Agentic workspace (Notion, email, folder) | medium to high | strongly dependent on connectors and runtime | research, assistance, operational workflows |

### Notion against email against folder

- **Notion** — structured pages and databases, stable objects, good API and
  clear data models, good for maintaining knowledge, reads and writes with
  context.
- **Email** — time-ordered, person-bound, threaded; attachments are sensitive and
  unstructured; actions are riskier (replies, forwards); **less suitable as a
  primary knowledge base**.
- **Folder / file system** — direct files of every kind, high flexibility and
  compatibility, local or server-based, good for working material and generated
  artifacts.

### What is often overlooked

- It is not the model that decides — data access, permissions, currency and
  governance do.
- A folder as a workspace is useful beyond code: Markdown, PDFs, notes, office
  files, research.
- Public AI can be enough for much, **but not for durable knowledge
  architectures**.
- Write access increases usefulness and risk together.

## Figure 3 — How do I decide?

A matrix over six options — plain chat, workspace, agent, RAG, LLM wiki,
knowledge graph — against ten rows: short definition, needs its own data
binding, can work with documents, can build persistent knowledge, can perform
actions, typical effort, strengths, limits, suited for, not sufficient for.

### The decision path, as drawn

```text
only single questions?            → Chat
work with files / project context? → Workspace
answers grounded in many documents? → RAG
a durable, navigable knowledge base? → LLM wiki
relationships, rules, entities?    → Knowledge graph
should the system act and use tools? → Agent
```

### Four misconceptions, named explicitly

- **"RAG = LLM wiki" — wrong.** RAG is a technique for generating answers with
  sources. An LLM wiki is an application that can combine RAG, search, structure
  and editing.
- **"An agent is just a better chat" — only partly.** Agents plan, use tools and
  act. They are more complex, more failure-prone, and need clear goals and
  guardrails.
- **"A knowledge graph replaces RAG" — not generally.** A graph structures
  knowledge; RAG delivers precise answers over documents. They often complement
  each other.
- **"More autonomy is always better" — wrong.** More autonomy raises risk and
  cost. Governance, control, monitoring and data quality decide.

## Figure 4 — Operating models, data sovereignty and connection types

Four operating models across eight rows (data sources, index, model,
connectors, actions/write access, data sovereignty, effort, typical use, risks):

| | Data sovereignty | Effort | Typical use |
|---|---|---|---|
| **A. Local / on-device** | very high | medium to high | sensitive data, offline, full control |
| **B. Own cloud / on-prem** | high | high | company knowledge, governance, compliance |
| **C. Vendor cloud / SaaS** | medium | low to medium | fast productivity, teams, standard processes |
| **D. Public AI** | low to very low | very low | quick questions, prototyping, single tasks |

### Which kind of connection is this?

Upload/attachment (one-off, often temporary) · connector read-only · connector
read/write · indexing/RAG · live tool/MCP · folder workspace.

### Where the data actually sits

- **Notion read and written back** — primary data in Notion; additional data may
  end up in the model's history, the index or logs.
- **Email access** — time-ordered, person-related, often sensitive; threads,
  attachments and actions are more complex.
- **Local folder workspace** — high control, usually a desktop or local server
  function.

### Effort against control

A quadrant: public AI lowest control and lowest effort; vendor cloud medium and
medium; local highest control at higher effort; own cloud high control at high
effort.

### MCP and connectors — which role

Connectors join data sources or tools. MCP matters for tool access and
standardised integration. **Simple RAG does not need MCP.** MCP becomes
interesting for actions, agents and modular tool landscapes.
