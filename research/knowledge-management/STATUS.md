# Status — knowledge management

Received 2026-08-09: two documents plus four diagrams, translated from German.
The first is unsourced; the second carries citations and was partly verified.

- [foundations.md](./foundations.md) — RAG, knowledge graphs, source access, LLM
  wiki, agents against chat, practical decisions. **No individual citations.**
- [figures.md](./figures.md) — four diagrams recorded as data, because the site
  renders diagrams as markup and never as images. Carries material that appears
  nowhere in the prose.
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

## Glossary

Present already: RAG, Knowledge Graph, Embedding, Vector Database, Vector
Search, Retrieval, Connectors, MCP, Memory, Enterprise Search, Search.

Missing, and named repeatedly in this material: **chunking, hybrid search,
reranking, ACL-aware retrieval, multi-hop RAG, agentic RAG, LLM wiki, full-text
index / BM25, ontology, property graph, RDF triplestore, entity extraction,
context assembly**.

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

Fully constructing **five to seven reference architectures** — personal Markdown
LLM wiki, Notion plus AI, classic enterprise RAG, fully local on-prem with MCP,
RAG, graph and agent — each with components, data flow, data sovereignty,
effort, hardware and software, security model, advantages, limits, and when the
extra effort pays.

That is the point where this research stops being website material and starts
being blueprints. Each reference architecture is a candidate.
