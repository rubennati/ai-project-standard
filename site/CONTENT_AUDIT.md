# Website Content Audit

This audit measures the current public website against the product defined in
[`docs/website-product-brief.md`](../docs/website-product-brief.md). It is an
input to the information architecture, not an information-architecture
decision. No navigation, public URL or page template changes are authorised by
this document.

Audit date: 2026-08-10.

## Method

The ten reader questions in the product brief are abbreviated as `Q1` to
`Q10`. Product-spine coverage uses:

- `P` — Possibility;
- `Co` — Collaboration;
- `R` — Reach; and
- `Ct` — Control.

Each route receives one proposed disposition:

| Disposition | Meaning |
| --- | --- |
| **Keep** | The page already serves the product; improve it within its present job |
| **Reframe** | The substance is useful, but its promise or context serves the old site identity |
| **Merge** | Preserve the useful material inside another reader path rather than as a standalone destination |
| **Promote** | Repository material should become public explanation or technical depth, with the source or artifact still in the repository |
| **Repository-only** | The material helps maintain or adopt this repository but does not answer a public AI-use question |
| **Compatibility** | Preserve the published URL or redirect, but do not present it as current product content |
| **Missing** | The product needs this answer and no current page owns it |

The source inventory was checked against the generated sitemap and page
sources. The sitemap contains 365 URLs:

| Public family | English | German | Total |
| --- | ---: | ---: | ---: |
| Editorial and utility pages | 29 | 27 | 56 |
| Glossary index and term pages | 144 | 144 | 288 |
| Rendered repository documentation | 21 | 0 | 21 |
| **Total** | **194** | **171** | **365** |

The build also produces the 404 page, two legacy legal redirects, RSS feeds and
machine-readable files. Those are assessed separately because they are not
sitemap content destinations.

German pages mirror their English route unless a difference is named below.
The audit therefore lists each bilingual pair once rather than pretending that
the same editorial decision was made twice.

## Executive finding

The site has a credible core, but it currently begins in the third quarter of
its intended story.

- **Reach is strong.** Data paths, retention, training, source systems,
  confidentiality and access are already explained with unusual care.
- **Control is present but fragmented.** Law, account choice, permissions and
  repository controls exist, but they do not yet form a path from decision to
  verification.
- **Collaboration is thin.** The site has role-based entry pages and one strong
  agent-access guide, but no coherent continuum from chat to assistant,
  workspace, connector and agent.
- **Possibility is the main gap.** A reader is rarely shown what useful work AI
  can enable before being asked to consider its data and legal exposure.

The result is not a poor knowledge base. It is a good risk-and-data site beside
a repository documentation site. The next architecture must turn those assets
into one practical product without weakening their evidence discipline.

## Coverage of the ten reader questions

| Question | Current coverage | Evidence in the current site | Gap |
| --- | --- | --- | --- |
| `Q1` What can I achieve? | Weak | Knowledge sources and the blueprint-oriented use-cases page imply possible work | No outcome-led catalogue or task entry point |
| `Q2` Which collaboration fits? | Weak | Employee, decision-maker and agent-access pages; practical collaboration under `/docs` | No comparison from chat through acting agent |
| `Q3` What is it doing technically? | Strong | Start explainer, data-flow guides, blog and glossary | Explanations are not connected to a reader decision |
| `Q4` What can it reach? | Strong | Data flows, sovereignty, knowledge sources, law and agent access | Reach is organised by old sections rather than one model |
| `Q5` Benefits, limits and failures? | Partial | Many limits and risk explanations | Benefits and productive trade-offs receive much less space |
| `Q6` What is allowed? | Strong | Law, employee, decision-maker and open-source rights | Organisation policy and law are not consistently separated in journeys |
| `Q7` How do I make the boundary hold? | Partial | Secure setup, decision-maker and technical repository docs | Configuration is split between the site and `/docs` |
| `Q8` How do I check the result? | Weak | Agent-access checks and repository quality gates | No general verification method for answers, files or actions |
| `Q9` How do I reconstruct it later? | Weak | Git workflow, AI workspace and security baseline under `/docs` | Auditability is a repository topic, not a website outcome |
| `Q10` When should I not use AI? | Partial | Limits sections and several legal or access stop conditions | No explicit no-AI decision in each main journey |

## Editorial routes

### Entry, orientation and trust

| Route | Coverage | Disposition | Reason and next job |
| --- | --- | --- | --- |
| `/` and `/de/` | `R`, `Ct`; `Q3`, `Q4`, `Q6` | **Reframe** | The current data-risk proposition is narrower than the product. Lead with useful AI work and the four-part spine, while preserving evidence and data as differentiators. |
| `/about` and `/de/about` | Method and trust | **Reframe** | Replace the old “knowledge layer beside operational layer” identity with mission, independence, evidence method, authorship and the repository as source and artifact system. |
| `/start` and `/de/start` | `Co`, `Ct`; `Q2`, `Q6` | **Reframe** | Keep orientation, but do not make organisational role the only way in. The copy promises four entries and currently renders three. |
| `/start/what-it-is-doing` | `R`; `Q3`, `Q5` | **Keep** | A strong plain-language foundation. Use it as technical depth reachable from every collaboration form. |
| `/start/employee` | `Co`, `Ct`; `Q2`, `Q6`, `Q10` | **Keep** | It answers a real situation. Add the positive job the employee wants to accomplish and connect policy, data and verification. |
| `/start/decision-maker` | `Co`, `R`, `Ct`; `Q2`, `Q4`, `Q6`, `Q7`, `Q9` | **Keep** | It is close to the future decision-guide pattern. Make outcomes, operating model and verification explicit. |
| `/use-cases` | `P`, `Ct`; partial `Q1`, `Q7`, `Q10` | **Reframe** | The URL promises uses but the page is a blueprint catalogue. Reuse the URL for concrete AI outcomes; keep blueprint status and copy instructions in the repository or in technical depth. English only today. |
| `/profiles` | None for a current reader | **Compatibility** | Keep the published URL alive as a tombstone or future redirect, remove it from current discovery, and do not treat it as content. English only today. |
| `/legal-notice` and `/de/legal-notice` | Trust infrastructure | **Keep** | Mandatory operator and licensing information is outside the admission test but necessary to trust the product. Recheck the stale purpose description after the product copy changes. |
| `/privacy-policy` and `/de/privacy-policy` | Trust infrastructure | **Keep** | Necessary disclosure. Keep it coupled to the measured delivery chain rather than the marketing proposition. |

### Data flows and system reach

| Route | Coverage | Disposition | Reason and next job |
| --- | --- | --- | --- |
| `/data-flows` | `R`; `Q3`, `Q4` | **Reframe** | The collection is a major asset. Present it as the Reach part of every journey rather than a separate risk library. |
| `/data-flows/training-and-retention` | `R`, `Ct`; `Q3`, `Q4`, `Q5`, `Q6` | **Keep** | Strong decision material. Add a clearer account-selection action and verification step. |
| `/data-flows/what-you-agree-to` | `R`; `Q3`, `Q4`, `Q5`, `Q10` | **Keep** | Useful consequence explanation. Make the choice and reversal path more prominent. |
| `/data-flows/getting-it-back-out` | `R`, `Ct`; `Q3`, `Q4`, `Q5`, `Q7` | **Keep** | Valuable lifecycle content. Connect deletion limits to exit planning before adoption. |
| `/data-flows/data-sovereignty` | `R`, `Ct`; `Q3`, `Q4`, `Q5`, `Q6`, `Q10` | **Keep** | The matrix is an excellent Reach decision tool and a model for future comparison components. |
| `/data-flows/where-knowledge-lives` | `P`, `R`; `Q1`, `Q3`, `Q4`, `Q5`, `Q7` | **Keep** | One of the few pages that joins possibility and reach. Extend it into the connector, retrieval and MCP journey. |

### Law and organisational permission

| Route | Coverage | Disposition | Reason and next job |
| --- | --- | --- | --- |
| `/law` | `Ct`; `Q6` | **Reframe** | Keep law as authoritative depth, but surface it inside decisions instead of making readers choose “Law” before they know their question. |
| `/law/what-may-go-in` | `R`, `Ct`; `Q4`, `Q6`, `Q10` | **Keep** | A strong pre-input decision page. Connect it to account, task consequence and safer alternatives. |
| `/law/four-separate-questions` | `Ct`; `Q5`, `Q6`, `Q10` | **Keep** | This distinction should become a reusable decision component across the site, with the article as its full explanation. |
| `/law/us-cloud-and-the-gdpr` | `R`, `Ct`; `Q4`, `Q5`, `Q6`, `Q10` | **Keep** | Strong corrective content. Keep its boundaries and assessment checklist visible. |
| `/law/ai-act-transparency` | `Ct`; `Q6`, `Q7` | **Keep** | Keep as dated legal depth and connect it to publishing and communication use cases. |

### Setup, access and operation

| Route | Coverage | Disposition | Reason and next job |
| --- | --- | --- | --- |
| `/secure-setup` | `Ct`; `Q7` | **Reframe** | Broaden from a small settings collection into the Control destination for configuration, verification, evidence and recovery. |
| `/secure-setup/before-you-grant-access` | `Co`, `R`, `Ct`; `Q2`, `Q3`, `Q4`, `Q5`, `Q7`, `Q8`, `Q9`, `Q10` | **Keep** | The closest existing page to the complete product. Use its topic as one reference for the future decision-guide template. |

### Open source and publishing code

The section says explicitly that it contains “no AI”. As written, the section
fails the public content admission test even though the underlying material is
sound. The answer is not deletion; it is to place these decisions in the
consequence of AI-assisted software work.

| Route | Coverage when reframed | Disposition | Reason and next job |
| --- | --- | --- | --- |
| `/open-source` | `P`, `Ct`; `Q1`, `Q6`, `Q10` | **Merge** | Do not preserve Open Source as an unrelated top-level subject. Make it a path for publishing, sharing and maintaining AI-assisted code. Preserve current URLs until an approved migration exists. |
| `/open-source/what-makes-it-open-source` | `Ct`; `Q6`, `Q10` | **Reframe** | Use when a prototype or AI-assisted project is published. The licence still decides whether the result is open source. |
| `/open-source/choosing-a-licence` | `Ct`; `Q6`, `Q7`, `Q10` | **Reframe** | Keep the licence decision, but connect it to generated code, third-party material and the point at which experimentation becomes distribution. |
| `/open-source/code-written-at-work` | `Co`, `Ct`; `Q2`, `Q6` | **Reframe** | Extend the ownership question to code produced with AI at work without implying that AI resolves or receives authorship. |

### Editorial stream

| Route | Coverage | Disposition | Reason and next job |
| --- | --- | --- | --- |
| `/blog` and `/de/blog` | Depends on article | **Reframe** | Keep an editorial stream only if it offers perspective, investigation or change over time. Evergreen decision guides should not be hidden by publication format. |
| `/blog/before-you-press-enter` | `R`, `Ct`; `Q3`, `Q4`, `Q5`, `Q7`, `Q10` | **Keep** | Retain as a narrative overview. Give it explicit next decisions so it complements rather than duplicates the data-flow articles. |

## Glossary family

The glossary contributes 288 of the 365 sitemap URLs. It contains 143 bilingual
terms plus one index in each language. All 143 have a German short definition.

| Kind | Entries | Primary product contribution |
| --- | ---: | --- |
| AI architecture | 57 | `R`: how systems, retrieval, tools and agents work |
| AI work | 18 | `P`, `Co`, `Ct`: forms of work, evaluation and operating practice |
| Data protection | 16 | `R`, `Ct`: data reach, identity and legal vocabulary |
| General AI | 10 | Foundation for `Q3` and `Q5` |
| Platform UI | 14 | Volatile lookup support, not a reader journey |
| Product feature | 18 | Product-specific lookup support |
| Product or tool name | 10 | Product-specific lookup support |

The default index excludes the 42 product and interface labels and shows 101
terms. Editorial status is 138 `review` and five `stable`; the five stable
entries are Chatbot, Context, Prompt, Pseudonymisation and Anonymisation.

**Disposition: Keep and connect.** A definition is allowed to stand alone in
the glossary, but it should not become a disconnected mini-site. Term pages
should link to the decision or implementation path in which the concept
matters. Guides should explain terms in context and link back only when a reader
needs the reference depth. The index intro must stop saying that guides and
project documentation “stay separate”, and editorial status should be visible
or enforced as a publication threshold.

The glossary already holds the vocabulary needed for the proposed prototype:
MCP, MCP Client, MCP Server, Connectors, Tool Use, Agent, Coding Agent, Vibe
Coding, Evaluation, Observability, Provenance and Prompt Injection. Each is
currently `review`, so the prototype should also provide the second reading
needed to stabilise the terms it relies on.

## Rendered repository documentation

`/docs` creates the second public identity the product brief retires. The
problem is not that repository material appears on the site; it is that every
Markdown file becomes a peer public destination because it lives in one source
folder. Public depth should be selected by the reader question it answers.
Maintainer, release and product-strategy files should remain inspectable in the
repository without being presented as website content.

| Current route | Disposition | Public value to preserve, if any |
| --- | --- | --- |
| `/docs` | **Compatibility** | Retire the public documentation hub after an approved migration; preserve the URL or redirect. |
| `/docs/adoption` | **Repository-only** | Instructions for copying and updating repository blueprints. |
| `/docs/ai-tools` | **Promote** | Split public explanations of tool context, MCP and extensions from maintainer instructions for supporting tools in this repository. |
| `/docs/ai-workspace-layer` | **Promote** | Turn the durable/current/log distinction into technical depth for traceable AI-assisted work; keep file conventions in the artifact. |
| `/docs/blueprints` | **Repository-only** | The artifact contract and catalogue belong beside the files being copied. Link to a blueprint only from a relevant implementation path. |
| `/docs/branch-protection` | **Promote** | Use as technical depth for reviewable AI-assisted development, with configuration detail remaining canonical in the repository. |
| `/docs/concepts` | **Repository-only** | This is an internal artifact-type contract, not a reader answer. Individual concepts may feed public guides. |
| `/docs/forkable-repository` | **Promote** | A useful implementation pattern for keeping operator data out of a reusable public repository. |
| `/docs/getting-started` | **Repository-only** | It starts adoption of this repository, not use of AI. |
| `/docs/git-workflow` | **Promote** | Reframe the review, branch and handoff material as a collaboration and auditability pattern. |
| `/docs/language-style` | **Repository-only** | Editorial production guidance for this project. |
| `/docs/open-source-project-standard` | **Merge** | Preserve governance and trust signals inside the AI-assisted publishing path and its repository artifact. |
| `/docs/practical-ai-collaboration` | **Promote** | This is core `Co` material for `Q2`, `Q8` and `Q9`; remove stale draft narrative and GitHub-only assumptions. |
| `/docs/profiles` | **Compatibility** | Preserve the historical tombstone or redirect only. |
| `/docs/purpose` | **Repository-only** | Product and repository governance; the public site needs a reader-facing About page, not the internal hierarchy. |
| `/docs/release-process` | **Repository-only** | How this repository publishes releases and the site. |
| `/docs/security-baseline` | **Promote** | Core `R` and `Ct` depth for permissions, supply chain, knowledge, action and audit controls. |
| `/docs/sizing` | **Promote** | A strong decision framework for choosing reach and controls according to consequence rather than fashion. |
| `/docs/standard` | **Repository-only** | The repository contract stays in the repository; selected operating principles belong in relevant public paths. |
| `/docs/website-audit` | **Reframe** | It can become a concrete “audit a website with AI” use case if it shows the human role, evidence rules, limitations and verification. |
| `/docs/website-product-brief` | **Repository-only** | Internal product direction, not an AI-use answer. |

The repository files remain public on GitHub in every disposition. “Repository-
only” means they stop being presented as part of the website product, not that
they become private.

## Utility and machine routes

| Route or file | Disposition | Note |
| --- | --- | --- |
| `/404.html` | **Keep** | Replace the future “Browse the docs” recovery action with current product entry points when the IA changes. |
| `/impressum` → `/legal-notice` | **Compatibility** | Preserve the published redirect. |
| `/datenschutz` → `/privacy-policy` | **Compatibility** | Preserve the published redirect. |
| `/blog/rss.xml`, `/de/blog/rss.xml` | **Keep** | Preserve if the editorial stream remains. |
| `robots.txt`, sitemap files, `llms.txt`, web manifest | **Keep** | Machine infrastructure; update only when the approved route model changes. |

## Overlap that needs ownership

The migration should assign one job to each piece instead of rewriting the same
fact in several formats.

| Overlap | Proposed ownership |
| --- | --- |
| Homepage, “Before you press Enter” and data-flow articles | Homepage frames the decision; the post tells the full journey; data-flow pages own specific facts and current provider behaviour. |
| Start role pages and practical AI collaboration | Start pages own situational entry; the collaboration guide owns the continuum and operating models. |
| Use cases, blueprints and repository Getting Started | Use cases own outcomes; the relevant path links a copyable blueprint; repository docs own copying and maintenance. |
| Secure setup and security baseline | Public setup guides own decisions and minimum actions; the repository baseline owns copyable controls and detailed configuration. |
| Open-source articles and open-source blueprint | Public pages own understanding and decisions around publishing; the blueprint owns files to copy. |
| About, Purpose and Website Product Brief | About explains mission and method to readers; Purpose and Product Brief govern the project in the repository. |

## Missing content required by the product

These are content gaps, not proposed top-level navigation labels.

| Missing answer | Questions | Minimum useful first path |
| --- | --- | --- |
| What AI is useful for, by task and consequence | `Q1`, `Q5`, `Q10` | A practical outcome map with examples, limits and a deliberate no-AI option |
| Chat as a collaboration form | `Q1`–`Q6`, `Q8`, `Q10` | From a first prompt through confidentiality, source checking and human ownership |
| The collaboration continuum | `Q2`, `Q4`, `Q5`, `Q7`–`Q10` | Compare chat, assistant, workspace, tool use, agent and repeated automation without presenting a maturity ladder |
| Output verification | `Q5`, `Q8`, `Q10` | A method scaled to consequence: source check, subject review, tests, diff, approval and sampling |
| Action history and reconstruction | `Q8`, `Q9` | What to record for a chat, document, code change, tool call and automated operation |
| MCP and connectors as a decision | `Q1`–`Q10` | What they enable, what crosses the boundary, scopes, credentials, logs, revocation and when direct integration is simpler |
| Agent operation | `Q1`–`Q10` | Goals, action boundaries, checkpoints, stop conditions, rollback, monitoring and accountable ownership |
| Vibe coding in context | `Q1`, `Q2`, `Q5`, `Q7`–`Q10` | Explore → Prototype → Deliver → Operate, with a clear boundary against silent production use |
| Organisational introduction | `Q1`, `Q2`, `Q4`, `Q6`–`Q10` | Policy, approved accounts, literacy, procurement, exceptions, review and incident ownership |

## Implications for information architecture and templates

The inventory does not support one generic article template. It supports one
design system with a small number of page jobs:

1. **Decision path** — starts with a situation or desired result and moves
   through Possibility, Collaboration, Reach and Control.
2. **Explanation** — answers how something works, where the boundary is and
   which common mental model fails.
3. **Implementation guide** — turns a decision into configuration, checks,
   evidence, recovery and a linked artifact.
4. **Reference** — glossary, dated law, measured provider behaviour and source
   material that a path can call on without repeating it.
5. **Editorial perspective** — a dated investigation or argument whose value is
   the complete narrative, not merely the facts it contains.

All five should share typography, navigation, evidence components, related
next steps and progressive depth. They should not share an identical content
order when their reader jobs differ.

## Recommended next decision

Draft the information architecture around reader journeys, then test every
current route against it. The draft must explicitly decide:

1. which journeys deserve top-level entry;
2. where reference material sits without becoming a separate product;
3. how public technical depth links to canonical repository artifacts;
4. how `/docs`, `/use-cases`, `/profiles` and `/open-source` migrate without
   breaking published URLs;
5. which content becomes the first complete prototype path; and
6. which navigation, footer and route changes require human approval before
   implementation.

MCP is the stronger architecture test because it crosses every reader question
and already has glossary and repository material. Vibe Coding is the stronger
editorial test because it forces the site to balance possibility, speed,
responsibility and the no-AI boundary. A robust template system should be able
to express both without making them look like the same page.
