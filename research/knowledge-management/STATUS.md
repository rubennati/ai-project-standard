# Status — knowledge management

Received 2026-08-09: one document plus four diagrams, translated from German.
Nothing verified yet.

- [foundations.md](./foundations.md) — RAG, knowledge graphs, source access, LLM
  wiki, agents against chat, practical decisions. **No individual citations.**
- [figures.md](./figures.md) — four diagrams recorded as data, because the site
  renders diagrams as markup and never as images. Carries material that appears
  nowhere in the prose.

## Known problems

Found on first reading. Recorded here, not corrected in the files.

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
4. **The Karpathy attribution** for the LLM-wiki idea needs the original.
5. **`llm_wiki` is not identifiable** — no author, no repository. Same defect as
   the unnamed "Open Source Project Template" in the earlier material.
6. **Cost statements are unquantified.** "RAG is often cheaper than repeated
   fine-tuning" is plausible and unmeasured; without figures it is `assessment`,
   not `fact`.

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

1. Source each named product claim at the vendor's own documentation, with a
   check date, and say in the text that it is the vendor describing itself.
2. Find or drop the knowledge-graph/RAG performance claim.
3. Identify or drop `llm_wiki` and the Karpathy attribution.
4. Decide whether `rag-system` is one blueprint or two — the RAG pipeline and
   the LLM wiki are different shapes with overlapping parts.
