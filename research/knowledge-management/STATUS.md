# Status — knowledge management

Received 2026-08-09: four documents plus four diagrams, translated from German.
The first is unsourced; the second and third carry citations and were partly
verified. Each drop corrects the one before it.

- [foundations.md](./foundations.md) — RAG, knowledge graphs, source access, LLM
  wiki, agents against chat, practical decisions. **No individual citations.**
- [figures.md](./figures.md) — four diagrams recorded as data, because the site
  renders diagrams as markup and never as images. Carries material that appears
  nowhere in the prose.
- [primitives.md](./primitives.md) — fourth drop, 2026-08-09. **Level zero.**
  What an LLM is and cannot do, five rules almost everything follows from, the
  nine fundamental operations, the knowledge lifecycle, and a **lexicon of about
  seventy terms**. It also corrects the earlier drops' casual use of "LLM wiki".
- [architecture.md](./architecture.md) — third drop, 2026-08-09. The reference
  architecture: ten technical layers, four simultaneous data paths, ACL-aware
  RAG, control plane against data plane, freshness and revocation, provenance,
  lifecycle. Eleven citations; the MCP specification claim was read at the
  source. **It corrects a GDPR statement the author had made himself.**
- [layers.md](./layers.md) — second drop, 2026-08-09. Takes the terms apart by
  **layer**, and it is a different class of material: **it carries citations**,
  twelve of them, and the load-bearing one was read at the source. It also
  corrects the first drop.

## Known problems — first drop (`foundations.md`, `figures.md`)

Found on first reading. Recorded here, not corrected in the files. Several are
answered by the second drop; those are marked.

1. **No citations at all**, exactly as with the open-source material. The closing
   note says "technical articles and guides", "tutorials and vendor
   documentation", "sources up to 2026" — none of which can be checked. Nothing
   from here may be published before it is sourced.
2. **Named products carry claims.** LangChain, Pinecone, Amazon Kendra and
   Bedrock, Neo4j, AWS Neptune, Notion AI, Obsidian and an `llm_wiki` desktop
   application are all named as doing specific things. Each is a vendor claim and
   needs its own source and check date; several are the kind that change without
   announcement.
3. **"Including a knowledge graph improves RAG performance"** is stated as a
   finding without a study behind it. Either the paper or the claim goes.
4. **The Karpathy attribution** for the LLM-wiki idea needs the original. *Still
   open — the second drop cites a paper for the concept, not the attribution.*
5. **`llm_wiki` is not identifiable** — no author, no repository. *Superseded:
   the second drop cites arXiv 2605.25480, which is identifiable and verified.*
6. **Cost statements are unquantified.** "RAG is often cheaper than repeated
   fine-tuning" is plausible and unmeasured; without figures it is `assessment`,
   not `fact`.

## The second drop is stronger, and corrects the first

`layers.md` does three things the first drop did not.

**It states the thesis the whole subject turns on.** RAG, knowledge graph, LLM
wiki, MCP, connector, agent, workspace, Notion, email and a folder are *not
alternatives in one category* — they are different layers. Comparing them
directly is the error underneath most of the confusion.

**It corrects `figures.md`.** "Public AI" is called out as a dangerous term:
cloud does not mean public, a SaaS system can have strong governance and a
self-hosted one can be badly secured. **Hosting location alone is not data
sovereignty.** The replacement split is Consumer SaaS / Business SaaS / private
cloud / on-prem / local. The first drop's Figure 4 should not be published as it
stands.

**It carries sources.** Twelve, listed. Checked 2026-08-09:

| Source | Result |
|---|---|
| arXiv 2605.25480 — *Retrieval as Reasoning: Self-Evolving Agent-Native Retrieval via LLM-Wiki* | **Verified at the source.** Ming, Li, Wu, Que; 25 May 2026. The abstract states exactly what the material claims: compiles documents into structured wiki pages with bidirectional links, exposes search, read and link-following through tool-calling |
| Lewis et al. 2020 (arXiv 2005.11401), RAG survey (2312.10997), MCP spec 2025-06-18, Microsoft GraphRAG, Notion API, Notion Enterprise Search | resolve |
| Five OpenAI pages | **403 to automated requests.** Bot blocking, not dead links — they could not be confirmed from here and need opening in a browser |

## The third drop is the architecture, and it corrects two things

**The LLM is not the centre.** The earlier picture implied everything flows
through the model. A good system deliberately does the opposite: search,
permission checks, storage, indexing and most actions happen outside it, and the
model receives only the context the current task needs.

**The GDPR claim is corrected — the author's own.** "If my company mail is
connected to an LLM in the US, I definitely have a GDPR problem" does not hold
automatically. There is definitely a processing operation to be assessed,
possibly including a third-country transfer; whether it is permissible depends on
roles, legal basis, processing agreements, purpose limitation, data
minimisation, technical measures and a valid transfer mechanism.

```text
US cloud ≠ automatically infringing
"we have a processing agreement" ≠ automatically compliant
```

This one matters beyond the research: **the site's Law section already covers
GDPR**, and a claim of that shape would have been wrong there. It is exactly the
`law` versus `assessment` boundary the evidence model draws — restating a norm is
one act, concluding that a specific setup infringes is another.

Sources checked 2026-08-09: nine of eleven resolve. The MCP 2026-07-28
specification was read at the source and holds precisely — stateless protocol
core, `server/discover`, header-based routing, cache hints, RFC 9207 issuer
validation, and a **formal deprecation policy with a twelve-month minimum
window**. Two OpenAI pages returned 403 to automated requests, as before.

## The fourth drop is the foundation, and it changes what the rest is for

The first three added information. This one supplies the level the terms derive
from — and its own framing is the giveaway: not learning twenty examples of
integrals, but understanding what integration does.

**The law everything rests on.** A bare LLM cannot reach a disk, Notion, Gmail,
the internet or a vector database. There is no wire out. Another piece of
software must fetch and hand over. From that follow the five rules, including
the two this repository already enforces elsewhere: persistence lives outside
the model, and **permissions must be enforced outside it**.

**The correction to itself.** "LLM wiki" is called out as not standardised — a
term from one 2026 paper, not a category. The generic name is *LLM-maintained
knowledge base* or *agent-native knowledge system*; "wiki" describes one possible
organisation. This retires a word the second and third drops used casually.

**The missing layer: knowledge lifecycle.** `candidate → pending → review →
approved → published → superseded → archived`, with states in front matter.
Nothing in the earlier drops covered how knowledge is proposed, checked and
retired — only how it is found.

**And a rule for shared knowledge**: personal state must never write directly
into canonical knowledge. It goes through proposal and review, or every agent
writes its user's private view into the shared truth.

Sources checked 2026-08-09: the three new checkable ones resolve, including
arXiv 2606.14275 (WikiKV). The OpenAI pages return 403 to automated requests, as
in every drop.

## Where it goes

The split falls almost exactly where the blueprint contract predicts: the
buildable parts are repository, the deciding and understanding parts are
website.

| Block | Destination | Note |
|---|---|---|
| RAG pipeline: chunking, embeddings, index, retrieval, reranking | **Blueprint candidate** `rag-system` | This is the buildable part — structure, configuration, gates. Needs sourcing first |
| LLM-wiki three-layer architecture (raw sources / wiki / schema) | **Blueprint candidate** | Small and concrete. Possibly a variant of the same blueprint rather than its own |
| ACL-aware retrieval, permissions in the ingestion layer | **Blueprint** + `docs/security-baseline.md` | The one control in this material that belongs in a security baseline |
| RAG variants: naive, hybrid, multi-hop, agentic | Website | Explains a choice; nothing to copy |
| Knowledge graph: entities, relations, RDF against property graph | Website | Only a blueprint once someone actually builds one |
| Decision matrix (chat / workspace / agent / RAG / wiki / graph) | **Website** | Figure 3. The strongest single artifact in the drop |
| Four misconceptions | **Website** | "MCP is an access layer, not a knowledge base" corrects an error in circulation |
| Five clarifications | **Website** | Same |
| Operating models and data sovereignty (local / own cloud / SaaS / public) | **Website** | Belongs beside the existing *Data flows* section, which already covers where input goes |
| Notion against email against folder | **Website** | Connects to *Setting up safely* |
| Agents against chat | Website | Partly covered by the existing glossary entries |
| Cost, currency, maintenance, verification | Website | Decision support, not artifacts |

## What the second drop adds to the routing

| Block | Destination | Note |
|---|---|---|
| The layer model, and "these are not alternatives" | **Website — the spine of the whole area** | The single strongest idea in either drop |
| Six meanings of "give the AI access to my documents" | **Website** | Corrects a phrase people use daily without knowing which of six things they mean |
| *Where the file lives ≠ where the model runs* | **Website**, beside the existing *Data flows* | A local folder does not make it a local LLM |
| Data sovereignty as fourteen dimensions | **Website** | Supersedes the coarser treatment in the first drop |
| Three-level rule: sources → derived knowledge → indexes, lower levels regenerable | **`docs/` — an architecture rule** | Short, general, and it is a rule rather than an explanation |
| Staged growth, five stages | **Blueprint README** | Exactly the "when *not* to use it" the contract demands |
| Decide by case, A–E | Website | Decision support |
| MCP placement, connector ≠ MCP | Website + glossary | Corrects a widespread error |
| RAG without embeddings (BM25, SQL, graph, web) | Website + glossary | Corrects a widespread error |
| Production RAG against demo RAG | **Blueprint scope** | Tells us what a `rag-system` blueprint must *not* pretend to cover |
| Knowledge governance questions for a wiki | **Blueprint** `llm-wiki` | Nine questions that become the blueprint's `INIT.md` |
| Memory ≠ knowledge base, fine-tuning ≠ knowledge base | Glossary | Both terms already exist and need this boundary |

## What the third drop adds to the routing

| Block | Destination | Note |
|---|---|---|
| **Permissions do not belong in the LLM** — authorise before retrieval, never by prompt | **`docs/security-baseline.md`, and any RAG blueprint** | The single most important architecture rule in the whole drop |
| ACL-aware retrieval, and the metadata a document needs | **Blueprint** | Concrete: ten fields, and the filter that uses them |
| Freshness and revocation — the index still holding an ACL the source has revoked | **`docs/security-baseline.md`** | Security-critical and almost never discussed |
| Credentials never reach the model; the tool runtime holds them | **`docs/security-baseline.md`** | Fits the existing AI-specific controls section |
| Control plane against data plane | `docs/` — architecture rule | Short, general, reusable |
| The fifteen missing components (IAM, secrets, policy engine, observability, evaluation, DLP, prompt-injection defence …) | **Blueprint scope, and website** | Tells a `rag-system` blueprint what it must not pretend to cover |
| Ten layers, and the comparability table | **Website — the spine** | Supersedes the eight-stage model in `figures.md` |
| Four data paths, running on different schedules | Website | Explains why "we introduced RAG" means four different projects |
| Four roles see four systems | Website | Directly useful for the site's decision-maker entry point |
| **The GDPR correction** | **Website — Law section** | Corrects a claim of the shape the site could have made |
| EU data residency answers one line of the matrix | Website — Law / Data flows | Extends the existing "EU-hosted answers a different question" post already on the roadmap |
| Build-time against use-time | Website | The clearest framing of why the same word means two projects |
| Five tags to classify any new term | **Glossary method** | A way to file future terms consistently |
| `AGENTS.md` as the convention that makes a folder a wiki | **Blueprint `llm-wiki`** | It uses the file this repository already ships. The `ai-assisted-development` blueprint is the substrate |
| Three initialisation states: empty, seeded, schema-based | **Blueprint `INIT.md`** | Direct input for the initialisation interview |
| Files → wiki → structured → semantic → graph is a continuum | Website | Removes the false either/or |

## What the fourth drop adds to the routing

| Block | Destination | Note |
|---|---|---|
| **The lexicon, ~70 terms** | **Glossary** | Directly answers the gap: the glossary has 80 terms and none of this vocabulary. This is the largest single contribution across all four drops |
| **Five rules** | **`docs/` — architecture rules** | Two are already enforced here; writing all five down makes the set complete rather than incidental |
| **Nine fundamental operations** | **Website — the method** | `store · read · search · transform · select · reason · generate · write · execute`. Reduces sixty terms to combinations. The strongest teaching device in the whole body of material |
| **Knowledge lifecycle** with states | **Blueprint `llm-wiki`** | `candidate → pending → published → superseded → archived` becomes the blueprint's directory layout and front matter |
| **Operating contract** (`INSTRUCTIONS.md` rules) | **Blueprint payload** | Six rules, directly shippable |
| Shared against personal knowledge, and the no-direct-write rule | **Blueprint** | Concrete two-tree layout |
| The twelve-question order that produces an architecture | **Website**, and a blueprint `INIT.md` | Replaces "is this RAG or MCP" with a usable sequence |
| Pipeline RAG against agentic RAG | Website + glossary | Two fundamentally different shapes under one word |
| Deep Research is a workflow, not a database | Website + glossary | Corrects a widespread error |
| "LLM wiki is not standardised" | **Naming decision** | Affects what a blueprint would be called — see below |
| Where the folder model stops working (3–4 people against 30) | **Blueprint "when not to use it"** | Exactly what the contract requires |

## A naming decision this forces

The fourth drop retires "LLM wiki" as a category name. If a blueprint is built
from this material it should not be called `llm-wiki`. The candidates it offers:
`llm-maintained-knowledge-base`, `agent-maintained-knowledge-base`,
`agent-native-knowledge-system`.

Same rule as `ai-assisted-development`: name it after the established practice,
not after one paper's coinage — and here the material says explicitly that the
coinage is not established.

## Glossary

Present already: RAG, Knowledge Graph, Embedding, Vector Database, Vector
Search, Retrieval, Connectors, MCP, Memory, Enterprise Search, Search.

Missing, and named repeatedly across the three drops: **chunking, hybrid search,
reranking, ACL-aware retrieval, multi-hop RAG, agentic RAG, LLM wiki, full-text
index / BM25, ontology, property graph, RDF triplestore, entity extraction,
context assembly** — and from the third drop: **source of truth, provenance,
control plane / data plane, freshness, revocation, model gateway, policy engine,
prompt injection, ingress channel**.

Twenty-two terms from the first three drops. **The fourth supplies about
seventy, already defined**, which is more than the site's entire current
glossary of 80 and covers exactly the gap.

Two methods for filing them come with it: the third drop's five tags —
function, state, access, location, scope — and the fourth drop's nine
fundamental operations, which classify by what a thing actually *does*.

This is the first drop that would grow the glossary substantially, which is what
the material was expected to do.

## Before anything leaves

1. Open the five OpenAI pages in a browser and record what they actually say.
   They carry the product-specific claims — what Work can reach, what the Notion
   app syncs, which actions need confirmation — and those change without notice.
2. Source each named product claim at the vendor's own documentation, with a
   check date, and say in the text that it is the vendor describing itself.
3. Find or drop the knowledge-graph/RAG performance claim.
4. Find or drop the Karpathy attribution.
5. **Do not publish Figure 4 as it stands** — the second drop refutes its "public
   AI" framing.
6. Decide whether `rag-system` is one blueprint or two. The second drop makes
   the case for two: a RAG pipeline and an LLM wiki are different shapes, and it
   argues explicitly for starting with the wiki when the corpus is small and the
   RAG when it is large.

## What the author proposes next

Sharpened in the third drop to **six named variants**: simple chat with upload ·
personal folder LLM wiki · team LLM wiki · enterprise RAG · Notion/mail agent
with MCP · fully on-prem private AI. For each, side by side: user view, operator
and build view, the real network and API data path, authentication, ACL, storage
locations, source of truth, personal data, write permissions, components, effort
and data sovereignty.

Originally stated as **five to seven reference architectures** — personal Markdown
LLM wiki, Notion plus AI, classic enterprise RAG, fully local on-prem with MCP,
RAG, graph and agent — each with components, data flow, data sovereignty,
effort, hardware and software, security model, advantages, limits, and when the
extra effort pays.

That is the point where this research stops being website material and starts
being blueprints. Each reference architecture is a candidate.
