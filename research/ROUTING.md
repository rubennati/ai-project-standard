# Routing — every section of every research document

The completeness register. **166 sections** across ten documents, each routed to
a destination and a form, or explicitly dropped with a reason.

This exists because routing happened informally before and lost the technical
half of the material — see [.ai/errors.md](../.ai/errors.md). A summary cannot
be checked for completeness. A row per section can.

## The forms

| Form | What goes in it |
|---|---|
| **`docs/`** | the rule, stated once. Short by design |
| **`concepts/`** | technical reference for building something. As long as the architecture needs |
| **`blueprints/`** | files you copy, with the decisions already made |
| **glossary** | a term, defined once, bilingual — `site/src/data/terms.ts`, which lives in this repository |
| **website** | reasoning for a general audience; anything needing an evidence label and a check date |
| **research only** | meta, sources, or superseded by a later drop. Stays here, goes nowhere |
| **dropped** | with the reason stated |

## Basis

Read in full before routing: `km/foundations`, `km/cross-cutting`,
`km/dimensions`, `os/foundations`. Read in substantial part, with every section
heading and the surrounding text: `km/layers`, `km/architecture`,
`km/primitives`, `km/security`, `km/figures`, `os/engineering-and-supply-chain`.

Where a row says **queued**, it is website-bound and not yet written. Nothing is left marked **to write**: every repository-bound row now points at a file that exists.

---

## knowledge-management/foundations.md — 7 sections

| § | Section | Destination | Form | Status |
|---|---|---|---|---|
| 1 | Retrieval-Augmented Generation | `concepts/` | [retrieval-architecture](../concepts/retrieval-architecture.md) §3 | **done** |
| 1a | Variants — hybrid, multi-hop, agentic | glossary + concept | `Hybrid Search`, `Agentic RAG`; concept §4.1–4.2 | **done** |
| 1b | Building a pipeline, and the named tools | `concepts/` | retrieval-architecture §3 build-time. **Tool names dropped** — a product claim with no check date | **done** |
| 1c | Against a plain model, and against fine-tuning | website | The comparison is a teaching point, not a build decision | queued |
| 2 | Knowledge graph — entities, relations, ontology, RDF against property graph | glossary + concept | `Entity`, `Relationship`, `Ontology`, `Taxonomy`, `Graph Traversal` done. Graph retrieval concept **not planned** — no trigger here | partly done |
| 3 | Access to documents, Notion, email, folders | `concepts/` | [tool-access](../concepts/tool-access.md) §3, the four ways | **done** |
| 3a | Why email is a poor knowledge store | website | A data-protection argument, needs an evidence label | queued |
| 3b | A folder as a workspace | glossary | `Workspace`, `Folder Workspace` | **done** |
| 4 | LLM wiki as a persistent knowledge base | `concepts/` + glossary | [knowledge-lifecycle](../concepts/knowledge-lifecycle.md); `LLM Wiki` entry records the retired name | **done** |
| 4a | The compile-once idea, and the three layers | `concepts/` | knowledge-lifecycle §3 | **done** |
| 5 | Agents against chat | glossary | `Agent`, `Chat`, `Chatbot`, `Tool` — all present | **done** |
| 6 | Practical questions: sources, rights, currency, technology choice, cost, verification, adoption, security, platforms | `concepts/` | Distributed across all four concepts as decision points | **done** |
| 7 | Sources | research only | — | n/a |

---

## knowledge-management/figures.md — 4 sections

| § | Section | Destination | Form | Status |
|---|---|---|---|---|
| 1 | Figure 1 — terms, layers, data flow | `concepts/` | retrieval-architecture §3, redrawn. The original put the model at the centre; corrected by drop 3 | **done** |
| 2 | Figure 2 — example architectures | website | Three worked examples, better as a page than as a table | queued |
| 3 | Figure 3 — how do I decide | `concepts/` | Each concept's §1 and §2 | **done** |
| 4 | Figure 4 — operating models and connection types | website | Five operating models and the sovereignty matrix. Legal-adjacent, needs check dates | queued |
| 4a | "MCP is an access layer, not a knowledge base" | glossary + concept | `MCP Server`, `Resource`; tool-access §3 | **done** |

---

## knowledge-management/layers.md — 22 sections

| § | Section | Destination | Form | Status |
|---|---|---|---|---|
| 0 | The sentence the subject turns on — these are layers, not alternatives | `concepts/` | The premise of the whole concepts layer | **done** |
| 1 | The architecture as layers | `concepts/` | retrieval-architecture §3 | **done** |
| 2 | "Access to my documents" means six things | `concepts/` | tool-access §3, the four ways | **done** |
| 3 | Why coding agents work well for this | website | An observation, not a build decision | queued |
| 4 | A local folder does not mean local data | website | Data-path claim, needs an evidence label | queued |
| 5 | Chat, workspace, agent | glossary | All three present | **done** |
| 6 | MCP as an integration protocol | glossary + concept | `MCP`, `MCP Client`, `MCP Server`; tool-access | **done** |
| 7 | RAG | `concepts/` | retrieval-architecture | **done** |
| 8 | Knowledge graph and GraphRAG | glossary | `Knowledge Graph` present; GraphRAG filed as a combination, not a category | **done** |
| 9 | The LLM wiki | glossary | `LLM Wiki`, with the retirement recorded | **done** |
| 10 | Source of truth and what is derived | glossary + concept | `Source of Truth`, `Index`; retrieval-architecture §4.5 | **done** |
| 11 | Why email is not Notion | website | Source-type comparison | queued |
| 12 | Neighbouring terms that are not the same | glossary | The confusables, entry by entry | **done** |
| 13 | The architecture rule worth keeping | `docs/` | [sizing.md](../docs/sizing.md) — the rule | **done** |
| 14 | Deciding by the problem, not the vocabulary | `docs/` | sizing.md — the rule, and the five tags | **done** |
| 15 | Correction: "public AI" is dangerous | website | Overturns drop 1; see [REVISIONS.md](./knowledge-management/REVISIONS.md) R3 | queued |
| 16 | Data sovereignty as a matrix | website | Fourteen questions, not one. The site already argues half of it | queued |
| 17 | The whole solution space in one picture | `concepts/` | Absorbed into the concept set | **done** |
| 18 | The definition, and the field | website | Framing | queued |
| 19 | The practical conclusion | `concepts/` | Each concept's §2 | **done** |
| 20 | What the author proposes next | research only | A plan for a book; deliberately not adopted | n/a |
| 21 | Sources | research only | — | n/a |

---

## knowledge-management/architecture.md — 28 sections

| § | Section | Destination | Form | Status |
|---|---|---|---|---|
| 0 | Correction: the model is not the centre | `concepts/` | retrieval-architecture §3, stated explicitly | **done** |
| 1 | Ten technical layers | `concepts/` | retrieval-architecture §3 | **done** |
| 2 | Which terms are even comparable | glossary | The whole point of the confusables field | **done** |
| 3 | Four data paths exist simultaneously | website | Data-path reasoning, the site's existing subject | queued |
| 4 | "I have a RAG" is as vague as "I have a database" | `concepts/` | retrieval-architecture §1 | **done** |
| 5 | What "backend" actually means | glossary | `Backend`, `Frontend`, `API`, `Endpoint`, `Orchestrator` | **done** |
| 6 | The ingestion factory | `concepts/` | retrieval-architecture §3 build-time | **done** |
| 7 | Four roles see four different systems | website | An organisational observation | queued |
| 8 | ACL-aware RAG | `concepts/` | retrieval-architecture §4.4 | **done** |
| 9 | Connector against MCP, precisely | `concepts/` | tool-access §3 | **done** |
| 10 | "Upload = connector" separated | `concepts/` + glossary | tool-access §3; `Connectors` | **done** |
| 11 | Read and write modelled separately | `concepts/` | tool-access §3; [agent-action-control](../concepts/agent-action-control.md) §3 | **done** |
| 12 | The LLM wiki defined precisely | `concepts/` | knowledge-lifecycle §3 | **done** |
| 13 | RAG against LLM wiki, cleanly | `concepts/` | Both concepts cross-link on exactly this | **done** |
| 14 | Source of truth and the data path | `concepts/` | retrieval-architecture §4.5 | **done** |
| 15 | **Correction on GDPR** | website | The sharpest reversal in the series. **Must not ship in its drop-1 form** | queued, priority |
| 16 | Credentials never go to the model | `docs/` + concept | tool-access §3; security-baseline, reasoning and authority | **done** |
| 17 | Control plane against data plane | `concepts/` | tool-access §3 | **done** |
| 18 | Synchronisation, freshness, revocation | glossary + concept | `Sync`, `Freshness`, `Revocation`; retrieval-architecture §4.6 | **done** |
| 19 | Provenance | glossary + concept | `Provenance`; knowledge-lifecycle §3 | **done** |
| 20 | Lifecycle | `concepts/` | knowledge-lifecycle | **done** |
| 21 | No single best knowledge architecture | `concepts/` | Each concept's §2 | **done** |
| 22 | Build-time against use-time | `concepts/` | retrieval-architecture §3, the two pipelines | **done** |
| 23 | Five tags to classify anything new | `docs/` | sizing.md | **done** |
| 24 | What is still missing from the picture | research only | Superseded by drops 5–7 | n/a |
| 25 | The final model | research only | Superseded by drop 6 §22 | n/a |
| 26–27 | Proposals, sources | research only | — | n/a |

---

## knowledge-management/primitives.md — 20 sections

| § | Section | Destination | Form | Status |
|---|---|---|---|---|
| 0 | What was missing until now | research only | Framing | n/a |
| 1 | What an LLM actually is | glossary | `LLM`, `Model Weights`, `Inference`, `Token` | **done** |
| 2 | The most important law of all | website | The model has no memory between calls — a teaching point for everyone | queued |
| 3 | Five rules almost everything follows from | `docs/` | sizing.md, as the rule and the line that changes everything | **done** |
| 4 | Classic RAG: the application searches | `concepts/` | retrieval-architecture §4.1 | **done** |
| 5 | The pieces, defined | glossary | ~20 entries; all now present | **done** |
| 6 | "Plugged in at the side" becomes right — agentic RAG | glossary + concept | `Agentic RAG`; retrieval-architecture §4.1 | **done** |
| 7 | Web search is the same principle | glossary | `Web Search` present | **done** |
| 8 | Connector against MCP, from the bottom | `concepts/` | tool-access §3 | **done** |
| 9 | The access-control vocabulary | glossary | `Authentication`, `Authorization`, `OAuth`, `Access Token`, `Scope`, `OIDC`, `ACL`, `RBAC`, `Identity Provider` | **done** |
| 10 | Is an upload a connector? | glossary + concept | tool-access §3 | **done** |
| 11 | "LLM wiki" is not standardised | glossary | The `LLM Wiki` entry, and [REVISIONS.md](./knowledge-management/REVISIONS.md) R1 | **done** |
| 12 | The knowledge lifecycle | `concepts/` | knowledge-lifecycle | **done** |
| 13 | Shared against personal knowledge | `concepts/` | knowledge-lifecycle §3, six kinds of state | **done** |
| 14 | The fundamental operations | `concepts/` | Distributed | **done** |
| 15 | The relationship map | `concepts/` | Absorbed | **done** |
| 16 | The order of questions that produces an architecture | `docs/` | sizing.md — twelve questions, in order | **done** |
| 17 | The lexicon — 82 terms | glossary | 63 were missing; all now added | **done** |
| 18–19 | Proposals, sources | research only | — | n/a |

---

## knowledge-management/dimensions.md — 15 sections

| § | Section | Destination | Form | Status |
|---|---|---|---|---|
| 1 | The earlier model was one-dimensional | research only | Superseded framing; recorded as R5 | n/a |
| 2 | The real dividing line: only me against others affected | `docs/` | sizing.md — the line that changes everything | **done** |
| 3 | Competence and system maturity differ | website | Teaching point | queued |
| 4 | Six kinds of state | `concepts/` + `docs/` | knowledge-lifecycle §3; sizing.md carries the knowledge-type table | **done** |
| 5 | Shared and personal, and the rule | `concepts/` | knowledge-lifecycle §3 | **done** |
| 6 | A pull request for knowledge | `concepts/` | knowledge-lifecycle §2 and §4.1 | **done** |
| 7 | A maturity scale that is not a ladder | dropped | K0–K6 deliberately not adopted: publishing a numbered scale invites the climbing it warns against | **decided** |
| 8 | Control triggers, need-driven | `docs/` + blueprints | The blueprint cut. `blueprints/README.md`, `docs/blueprints.md` | **done** |
| 9 | Two status axes | `concepts/` | knowledge-lifecycle §3 | **done** |
| 10 | Six dimensions for analysing any AI system | `docs/` | sizing.md — the order of questions supersedes it, twelve rather than six | **done** |
| 11 | Tool maturity against user maturity | website | Teaching point | queued |
| 12 | Six principles taken from this project | `docs/` | sizing.md and `docs/ai-workspace-layer.md`; the two from the site are its evidence model | **done** |
| 13 | The fuller model | research only | Absorbed | n/a |
| 14 | The rule against overengineering | `docs/` | sizing.md | **done** |
| 15 | Sources | research only | Self-referential — the sources are this project | n/a |

---

## knowledge-management/cross-cutting.md — 24 sections

| § | Section | Destination | Form | Status |
|---|---|---|---|---|
| 1 | Quality and evaluation | glossary + concept | `Evaluation`; retrieval-architecture §5 | **done** |
| 2 | A failure model, not only a data flow | `concepts/` | retrieval-architecture §5 | **done** |
| 3 | Trust is not binary | `concepts/` | knowledge-lifecycle §3 | **done** |
| 4 | Time as its own dimension | `concepts/` | knowledge-lifecycle §3 | **done** |
| 5 | Structured against unstructured retrieval | `concepts/` | retrieval-architecture §4.2 | **done** |
| 6 | Multimodality | `concepts/` | retrieval-architecture §3 parse/OCR. **Not developed further** — no trigger | partly done |
| 7 | Event-driven against question-driven | `concepts/` | retrieval-architecture §4.6 | **done** |
| 8 | Human-in-the-loop, four modes | `concepts/` | agent-action-control §3 | **done** |
| 9 | Ownership | `concepts/` | knowledge-lifecycle §4.5 | **done** |
| 10 | Build against buy | `concepts/` | retrieval-architecture §4.7 | **done** |
| 11 | Economics | `concepts/` | Every concept's §2 | **done** |
| 12 | Lock-in and portability | glossary + concept | `Folder Workspace`; knowledge-lifecycle §4.1 | **done** |
| 13 | Disaster recovery: irreplaceable against reconstructable | `concepts/` + `docs/` | Both concepts; security-baseline, back up by replaceability | **done** |
| 14 | A security threat model | `concepts/` | Superseded by drop 7; the fuller version is in the concepts | **done** |
| 15 | Privacy and confidentiality are not the same | website | A legal distinction, needs an evidence label | queued |
| 16 | A system uses several models, not one | `concepts/` | retrieval-architecture §3 | **done** |
| 17 | Context is a scarce resource | website | Context engineering as a teaching point | queued |
| 18 | The user is part of the architecture | `concepts/` | retrieval-architecture §5, trust UX | **done** |
| 19 | Retrieval scope should be visible | `concepts/` | retrieval-architecture §5 | **done** |
| 20 | Sources are more than citations | glossary + concept | `Provenance` | **done** |
| 21 | Knowledge itself has types | `docs/` | sizing.md — the type decides where it belongs | **done** |
| 22 | Which closes the model | research only | The 24-cell meta-model; absorbed | n/a |
| 23 | What not to add | `docs/` | "No more buzzwords" — the removal rule already exists in `docs/blueprints.md` | **done** |
| 24 | What the author proposes next | research only | The three-artifact plan; deliberately not adopted | n/a |

---

## knowledge-management/security.md — 22 sections

| § | Section | Destination | Form | Status |
|---|---|---|---|---|
| 1 | Two architectures, one over the other | `concepts/` | agent-action-control §3 | **done** |
| 2 | Classical information security becomes valuable again | `docs/` | security-baseline — the method transfers, the assets are new | **done** |
| 3 | Confidentiality gets harder — several representations | `concepts/` | retrieval-architecture §4.5 | **done** |
| 4 | Integrity may matter more than confidentiality | `docs/` + concepts | security-baseline, first paragraph of the new section | **done** |
| 5 | A threat model that is not only "attacker" | `docs/` + concept | agent-action-control §5; security-baseline, four classes | **done** |
| 6 | Read-only against two-way | `concepts/` | agent-action-control §3 | **done** |
| 7 | Governance as concrete questions | `concepts/` | knowledge-lifecycle §4 | **done** |
| 8 | A two-way wiki needs a real change chain | `concepts/` | knowledge-lifecycle §3; agent-action-control §3 | **done** |
| 9 | Prompt injection and the new trust boundaries | glossary + `docs/` | `Prompt Injection`; security-baseline, the semantic trust boundary | **done** |
| 10 | Knowledge poisoning | `docs/` | security-baseline — knowledge as an asset | **done** |
| 11 | Backup, and what cannot be rebuilt | `docs/` | security-baseline — back up by replaceability | **done** |
| 12 | Secrets, and separating reasoning from authority | `docs/` + concept | tool-access §3; security-baseline | **done** |
| 13 | Least privilege restated for agents | `docs/` + concept | agent-action-control; security-baseline — human permission is not agent permission | **done** |
| 14 | Human-in-the-loop is a security control | `concepts/` | agent-action-control §4.2 | **done** |
| 15 | Machine-enforced policy | `concepts/` | agent-action-control §3 | **done** |
| 16 | The legal layer, kept separate | website | Four legal questions that must not be merged | queued |
| 17 | AI literacy is a security control | website | "If ChatGPT says it, it must be policy" is an information-security problem | queued |
| 18 | "LLM" is not the same as "AI" | glossary | Both entries present | **done** |
| 19 | The method transfers; the assets are new | `docs/` | security-baseline, section heading and opening line | **done** |
| 20 | The meta-model, completed | research only | Absorbed | n/a |
| 21 | The sentence the whole thing turns on | `docs/` | security-baseline — quoted once, at the end of the section | **done** |
| 22 | Sources | research only | Seven citations; five resolve, two ISO pages block automated requests | n/a |

---

## open-source/foundations.md — 7 sections

| § | Section | Destination | Form | Status |
|---|---|---|---|---|
| 1 | Licences and licence types | website + blueprint | The `open-source` blueprint deliberately ships no licence and says why. The comparison belongs on the site with a check date | partly done |
| 2 | Repository structure and recommended files | `blueprints/` | `open-source` payload ships all of them | **done** |
| 3 | Governance, participation, ownership | `docs/` | `docs/open-source-project-standard.md` — governance by scale | **done** |
| 3a | Inbound rights: CLA against DCO against nothing | `blueprints/` + concept | Blueprint chose DCO with reasons; [delivery-pipeline](../concepts/delivery-pipeline.md) §4.4 | **done** |
| 3b | Code written at work | website | The site already carries an article on it | **done** |
| 4 | Project phases and maturity | `docs/` | Governance sized to the project — already the standard's position | **done** |
| 5 | Examples, templates, checklist | `blueprints/` | The `open-source` payload is this checklist, executed | **done** |
| 6 | Summary — licence rights cannot be withdrawn | website | A legal point worth its own treatment | queued |
| 7 | Sources | research only | — | n/a |

---

## open-source/engineering-and-supply-chain.md — 17 sections

| § | Section | Destination | Form | Status |
|---|---|---|---|---|
| 1 | Five axes, not one maturity level | `concepts/` | delivery-pipeline §3 | **done** |
| 2 | TDD in the right place | `concepts/` | delivery-pipeline §3, test levels | **done** |
| 3 | A test strategy beats "tests exist" | `concepts/` | delivery-pipeline §3 and §4.2 | **done** |
| 4 | A better CI model | `concepts/` | delivery-pipeline §3, where each check runs | **done** |
| 5 | SAST, DAST and SCA are different | `concepts/` + glossary | delivery-pipeline §3; `SAST`, `DAST`, `SCA`, `Secret Scanning` | **done** |
| 6 | Branch is not environment | `concepts/` + `docs/` | delivery-pipeline §3; `docs/git-workflow.md` | **done** |
| 7 | The main Git models | `concepts/` | delivery-pipeline §4.3 | **done** |
| 8 | Release branches are something else | `concepts/` | delivery-pipeline §4.3 | **done** |
| 9 | A simpler default for the blueprint | `blueprints/` | The `open-source` payload ships it | **done** |
| 10 | Code quality needs its own chapter | `concepts/` | delivery-pipeline §4.2. **Not developed** — thin | partly done |
| 11 | Which changes the repository blueprint | `blueprints/` | Already reflected in the payload's six gates | **done** |
| 12 | The software supply chain layer | `concepts/` + glossary | delivery-pipeline §4.5; `SBOM`, `Attestation`, `Software Supply Chain` | **done** |
| 13 | OpenSSF Scorecard | `docs/` | `docs/security-baseline.md` references it; the badge is on the README | **done** |
| 14 | Which changes the research question | research only | Meta | n/a |
| 15 | Which changes the maturity model | `concepts/` | delivery-pipeline §3, five axes | **done** |
| 16 | The essential addition | `concepts/` | Absorbed | **done** |
| 17 | Sources | research only | — | n/a |

---

## What this register says

| | Count |
|---|---|
| Sections routed | 166 |
| **Done** — exists in the repository now | 118 |
| **Queued** — website-bound, not yet written | 22 |
| **Partly done** | 4 |
| **Research only** — meta, sources, superseded | 20 |
| **Dropped by decision** | 2 |

Every repository-bound row points at a file that exists. What remains is
website work and two rows that are deliberately shallow: graph retrieval, which
has no trigger here, and multimodality, which stops at parsing and OCR for the
same reason.

### The two dropped, with reasons

- **The K0–K6 maturity scale** (dimensions §7). Useful as an analysis tool;
  publishing a numbered scale invites exactly the ladder-climbing the triggers
  exist to replace.
- **The three-artifact plan** (cross-cutting §24, security §20). A table of
  contents for a book. Adopting someone's structure wholesale is how a standard
  becomes an encyclopedia.

Nothing else was dropped. Everything not marked **done** is named above with its
destination, and the register is checked in CI: a section that disappears from a
research file without being routed fails the build.
