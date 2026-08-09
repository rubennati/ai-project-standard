# Knowledge management with AI: RAG, knowledge graphs and the rest

> **Unverified.** Do not cite or publish from this file. See
> [STATUS.md](./STATUS.md) for what has been checked and where each block is
> meant to go.

| | |
|---|---|
| Received | 2026-08-09 |
| Author | Ruben Nati |
| Original language | German |
| This file | Translation, wording by Claude; claims and structure unchanged |
| Also received | Four diagrams — see [figures.md](./figures.md) |

## Retrieval-Augmented Generation (RAG)

RAG is a software system that combines information retrieval — from documents
or databases — with a large language model. On a query, the system first
searches external sources using semantic similarity or vector search, adds the
retrieved passages to the prompt as context, and the model then answers on the
basis of that extended context.

### Variants

- **Hybrid retrieval** — classic keyword search combined with semantic vector
  search.
- **Multi-hop RAG** — complex questions resolved in stages, the agent issuing
  several searches in sequence.
- **Agentic RAG** — the system acts partly autonomously: an agent selects data
  sources itself and orchestrates access and answer generation.

Because of the external data access, RAG systems generally give more current and
more factually faithful answers than an isolated model.

### Building a pipeline

Source texts — PDFs, Word, websites, internal databases — are split into
passages, turned into vectors and indexed in a vector database. On a query the
query embedding is formed and compared against the stored document vectors. The
most relevant fragments become context for the model. Tools such as LangChain,
or Amazon Bedrock and Kendra, provide ready-made pieces for embedding, vector
storage (Pinecone, Amazon VectorDB and others) and semantic search.

### Against a plain model, and against fine-tuning

A model without external sources works only from its static training knowledge
and can state wrong facts confidently. RAG systems reach checked data instead,
which improves factual accuracy considerably.

Compared with fine-tuning, RAG adapts to new data faster: new documents are
added to the index without retraining the model.

## Knowledge graph

A knowledge graph is a semantically structured database in graph form:
*entities* — objects, concepts, events — as nodes, and *relations* as edges
between them. Each node carries labels and attributes giving its type and
properties. Relations are typed and describe how entities connect ("author of",
"part of"). Together they form a self-describing data model, with an ontology or
business logic as a meta layer, that represents complex relationships.

Knowledge graphs integrate heterogeneous data from several sources — databases,
documents, sensors. Schemas and identities provide structure and consistency.

Technically they are stored in graph databases, either as an RDF triplestore or
as a property graph (Neo4j, AWS Neptune). RDF triples fix semantics in
subject-predicate-object form; property graphs, with key-value properties on
nodes and edges, are more flexible and faster for many applications. The
organising principle ranges from simple label hierarchies to full ontologies,
depending on the domain.

**Examples.** Public graphs include DBpedia and Wikidata, built on Wikipedia
data, and the Google Knowledge Graph, which supplies facts in search results.
Enterprises usually build domain-specific graphs — life sciences, manufacturing
plants, financial data. Query languages such as SPARQL, or proprietary APIs,
retrieve and evaluate nodes and relationships.

**With AI.** Knowledge graphs can serve as a knowledge base for a model.
Including a graph has been reported to improve RAG performance: the model can
first locate relevant nodes and then place their descriptions into the prompt, a
form of graph retrieval. Graphs also allow inference and the surfacing of hidden
connections.

Building one is expensive: data cleaning, ontology development, complex queries.
The return is semantic searchability and the ability to connect natural language
with formal logic.

## Access to documents, Notion, email and folders

A recurring question is **which data sources the AI is given**.

The common approach is to make documents available as a knowledge base for a RAG
system: relevant files are read, segmented and stored in a vector database, and
the AI searches that corpus on a query. Platforms such as Amazon Kendra ship
connectors for common storage systems (SharePoint, S3, Confluence) and index
several formats. Permission control matters throughout: only content the user is
entitled to see may be searched and returned.

**Notion against email.** Notion is often used as a collaborative knowledge base,
and AI can reach its content through APIs or plugins — Notion AI has connectors
that pull in linked services such as Slack, Google Drive, SharePoint and Gmail.
Giving an AI access to a mailbox is a different matter: email holds personal and
often transient messages, is poorly suited as a long-term knowledge store, and
carries considerable data-protection risk. Direct RAG access to email would
require complex filtering and safeguards. Email is therefore usually used
selectively — summaries, reminders — while knowledge management concentrates on
structured sources.

**A folder as a workspace.** Some agents use a local folder as their working
area; the rest of the machine stays closed to them. Inside that folder the agent
reads, edits and creates files as a user with write access would. The folder is
not a code repository but a plain file environment. The agent can still structure
documents, turn notes into reports or fill tables without writing code, because
the platform supplies skills for formats such as Word, PDF and spreadsheets.

## LLM wiki: a persistent knowledge base

An alternative to RAG. The model builds a structured knowledge archive from the
sources once, rather than searching afresh on every query.

The idea, attributed to Andrej Karpathy: instead of answering each question by
re-reading all documents, the content is *compiled once* — the way source code
is compiled into an executable. An agent reads new documents, summarises them,
creates and updates Markdown wiki pages for the concepts it finds, and keeps
those pages current. The result is a permanent knowledge base that queries reach
very quickly.

The typical architecture has three layers:

1. **Raw sources** — the original documents, unchanged
2. **Wiki** — linked Markdown pages the model generates and maintains
3. **Schema** — a configuration file governing how new input and queries are
   handled

The wiki structure can be used further in tools such as Obsidian. One example
project is a desktop application, `llm_wiki`, that turns documents in a folder
into such a Markdown wiki automatically.

**Against RAG.** RAG searches document fragments at query time; the LLM wiki
insists on processing knowledge once and keeping it quickly retrievable. The
wiki approach needs a local build process, usually a desktop or CLI tool,
because generating and maintaining the pages requires file access — a chatbot
without it cannot build one. The advantage is response speed and a consistent,
linked structure. The cost is setup effort and the need to re-run the process
when sources change.

## Agents against chat

Modern platforms distinguish simple chatbots from agents.

A classic chatbot handles text dialogue only. It has no access to local files or
external systems, and suits research questions, drafting and idea generation
with no specific data attached.

An agent or working mode uses additional capabilities. One example operates in a
folder released to it and holds skills for office documents and PDFs, so it can
create, restructure and edit files without the user writing code. Unlike a
developer tool driven from a terminal, the user gets a chat surface and steers
complex tasks in natural language.

In short:

- **Chat** — question and answer, no file access.
- **Agent** — carries out multi-step tasks independently and can read and write
  files: tidying a folder, summarising content.

The agent architecture uses the same model as the chat and adds automation and
tool use. It is particularly useful for document- and file-heavy knowledge work.

## Practical questions, risks and decisions

**Which data sources?** Decide which internal sources to include — SharePoint,
Notion, Confluence, file servers, email — and how they are formatted. Structured
knowledge can be handled differently from unstructured documents, and different
sources need their own pre-processing.

**Access rights and data protection.** AI tools should reach only data for which
permissions are clear. With cloud services, encryption and access control
matter. Where the AI is hosted externally, the question of data sovereignty
arises. For sensitive data an on-premises installation may be advisable.

**Currency and maintenance.** How does new knowledge get in? RAG needs new
documents indexed regularly; an LLM wiki needs recompiling when sources change.
Outdated information has to be recognised and replaced. Workflows that trigger
indexing or wiki updates on new documents are usually necessary.

**Choosing the technology.** RAG is flexible and quick to deploy, and suits
general questions needing current knowledge. An LLM wiki gives a durable
collection. A formal knowledge graph pays off with highly complex ontologies or
where inference-based querying is central. Fine-tuning suits narrow, well-bounded
domains.

**Cost against effort.** RAG has running costs — embedding API calls, vector
database service — but is often cheaper than repeated fine-tuning. An LLM wiki
needs development effort for the agent setup. Knowledge graphs usually demand
high initial investment in ontology work.

**Answer quality and verification.** Generated answers have to be checked against
the sources. A RAG system should be able to cite where information came from; an
LLM wiki allows individual entries to be reviewed. Human fact-checking remains
necessary to avoid confident errors.

**Fitting it into daily work.** A chatbot needs little training; an agent
environment needs more. The question "chat or agent" depends on whether you want
to ask things or delegate document work.

**Security risks.** Every new interface is a possible way in — plugins reaching
Gmail or Slack can expose sensitive data. Restrict access to the minimum area
needed and log what is accessed.

**Differences between platforms.** Some systems support only predefined sources;
others work with local folders. Check whether the chosen approach covers the
data sources you need and brings the interfaces required.

## Sources

The original stated: definitions and fundamentals from technical articles and
guides on RAG and knowledge graphs; architectural detail from tutorials and
vendor documentation; sources up to 2026. **No individual citations were
included.** See [STATUS.md](./STATUS.md).
