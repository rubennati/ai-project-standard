# The axes: who, what kind of state, and how much governance

> **Partly verified, and self-referential.** Two of this drop's sources are this
> project's own website. See [STATUS.md](./STATUS.md) — a source that is us
> cannot verify us.

| | |
|---|---|
| Received | 2026-08-09 |
| Author | Ruben Nati |
| Original language | German |
| This file | Translation, wording by Claude; claims, diagrams and structure unchanged |

This drop reads `ai-project-standard` and the website and derives principles
from them, because the repository already solves a problem knowledge management
is only now discovering:

> **Not everything an AI needs for its work is knowledge. Not everything stored
> belongs shared. And not every change may immediately become truth.**

## 1. The earlier model was more one-dimensional than the real problem

It read like a ladder — chat, files, search, RAG, knowledge base, agent, MCP,
enterprise — as if everyone climbs it. They do not.

A private expert might run a local LLM, MCP, RAG, a knowledge graph and agents,
and need **no** SSO, enterprise IAM, tenant separation, DLP, central audit or
company RBAC.

A company might be at step one — ChatGPT and employees — and immediately need
contract review, data classification, user management, MFA, policies, a data
protection assessment, logging and offboarding.

**Three independent axes** are needed.

```text
A · Reach            me → me and other private people → sole trader
                     → small team → company → enterprise

B · Technical AI     chat → files/projects → search/connectors
    maturity         → knowledge base/RAG → agent/tool use
                     → automated knowledge system → enterprise platform

C · Governance       personal judgement → simple rules
    maturity         → permissions/backup → reviews/approvals
                     → audit/policies/lifecycle → formal compliance
```

## 2. The real dividing line is not private against company

```text
                    ONLY ME
                       │
        ═══════════════╪═══════════════
                       │
               OTHERS AFFECTED
```

While only you are affected, a bad folder structure, a wrong memory, an
unsynchronised knowledge base or an overwritten file are all *your* problem.

The moment a second person appears, the problem class changes: who may read,
write, delete, publish; what happens on conflict; which version applies; who
changed something; how do I get an old state back; what is personal and what is
shared.

**None of those are LLM problems.** They are multi-user, collaboration, identity
and governance problems.

## 3. Competence and system maturity are different things

```text
User competence      beginner · advanced · expert
System maturity      basic · integrated · managed · governed · enterprise
```

An expert may deliberately use a very simple system. A beginner may be the user
of a very complex enterprise one.

## 4. Six kinds of state

This is derived directly from the repository, which separates operational AI
state in `.ai/` from documentation and governance.

| Kind | What it is |
|---|---|
| **Source data** | the originals — PDF, mail, meeting, website, contract |
| **Shared knowledge** | what the group accepts as knowledge — wiki, policy, decision, playbook |
| **Operational AI state** | what the AI needs *right now* — current task, progress, open steps, last run, temporary assumptions |
| **Personal context** | what applies to one user — preferences, private notes, local scratch, personal memory |
| **Governance** | the rules themselves — agent instructions, contribution rules, quality gates |
| **Machine index** | derived and regenerable — embeddings, search index |

**These must never go into one knowledge base.** They have entirely different
lifecycles. A company policy, someone's personal preference, an agent's current
state, a temporary draft and a published document do not belong in the same
directory.

```text
SYSTEM
├── SOURCES
├── KNOWLEDGE       pending · published · archived
├── OPERATIONAL STATE
├── PERSONAL CONTEXT
├── GOVERNANCE
└── MACHINE INDEX
```

## 5. Shared and personal, with the rule that makes it work

```text
Nextcloud/AI-Knowledge/          ~/.ai-user/     (not synced)
├── 01_sources/                  ├── memory.md
├── 02_pending/                  ├── preferences.md
├── 03_published/                ├── current-state.md
├── 04_archived/                 ├── scratch/
├── rules/                       └── cache/
└── templates/
```

The agent sees both, under different rules:

```text
PERSONAL STATE  ──► may write directly
SHARED KNOWLEDGE ──► proposal only → pending → review → published
```

## 6. A pull request for knowledge

The repository already uses branches and pull requests as a coordination and
review mechanism, with a human controlling the merge. Transferred to knowledge:

```text
published knowledge → proposed change → draft → review → approve
                    → published knowledge v2
```

Which makes **Git plus Markdown** an interesting knowledge base — not because
Git is AI, but because it already solves versioning, diff, authorship, branches,
review, rollback, history and conflict handling.

An agent creates `knowledge/update-mcp-2026`, edits `mcp.md`, opens a pull
request. A human reviews. Merge. **Professional knowledge governance without
building a wiki web app.**

| | Good for | Weak at |
|---|---|---|
| **Nextcloud** | PDF, DOCX, Excel, images, general files; easy for everyone | diff and review of structured knowledge |
| **Git** | Markdown, versioning, agents, diff, review, audit | non-technical users |

A hybrid: sources in Nextcloud → knowledge agent → Git knowledge repository →
search and RAG → LLM.

## 7. A maturity scale that is not a ladder to climb

```text
K0  Model only          LLM chat, no own knowledge
K1  Contextual AI       uploads, projects, memory, web search
K2  Connected AI        connectors — Notion, mail, drive
K3  Knowledge AI        search/RAG, knowledge base, source management
K4  Agentic knowledge   agent, tool use, MCP/APIs, write actions
K5  Governed platform   identity, ACL, audit, review, lifecycle, DLP
K6  Knowledge fabric    several domains, federated permissions, policy engine
```

**Not everyone must reach K6.** A family wiki may stay at K2 permanently. A
small consultancy at K3 or K4. A company with very sensitive data may need most
of K5's governance while its AI capability is still low.

## 8. Control triggers — need-driven, not size-driven

Properties trigger requirements, not technology:

| Trigger | What becomes relevant |
|---|---|
| More than one user | identity, permissions, ownership |
| Shared knowledge | source of truth, versioning, backup, review |
| Personal or sensitive data | classification, privacy, access control, retention, audit |
| Write access | approval, rollback, audit, least privilege |
| External actions | risk rises sharply — sending mail, closing tickets, changing servers |
| The AI decides autonomously | policy, monitoring, human-in-the-loop, evaluation |
| Knowledge becomes business-critical | provenance, review, owner, validity, lifecycle |

More useful than "a big company needs more security".

## 9. Two status axes, not one

This comes from the website's evidence model, and it is the strongest single
idea in this drop.

A knowledge base should not only know *what* is written, but **what kind of
statement it is**.

```text
Workflow status      candidate · pending · reviewed · published
                     · superseded · archived

Epistemic status     fact · measured · law · assessment
                     · recommendation · hypothesis
```

They are different things. **A recommendation can be fully reviewed and
published and still remain a recommendation.** Without the second axis, opinion
silently becomes fact.

A knowledge object then carries:

```yaml
id: knowledge-184
title: "EU hosting and data sovereignty"
workflow_status: published
claim_type: assessment
sources: [source-17, source-29]
verified_at: 2026-08-08
owner: security
reviewer: ruben
classification: internal
valid_from: 2026-08-08
review_after: 2027-02-08
```

That is where a Markdown wiki becomes knowledge engineering.

## 10. Six dimensions for analysing any AI system

```text
1 WHO          one person · family · team · organisation · enterprise
2 CAPABILITY   chat · search · retrieve · reason · write · act · autonomous
3 KNOWLEDGE    temporary context · personal memory · shared · authoritative · external
4 DATA PATH    device · SaaS · connector · index · LLM · external API
5 TRUST        read · write · publish · send · delete · execute
6 GOVERNANCE   identity · ACL · review · audit · backup · retention · provenance · policy
```

### An architecture card, filled in

**Personal research wiki** — one person · search, read, write · personal
knowledge base · source of truth Markdown · cloud LLM · local folder access ·
Git persistence · self-review · personal state local only · no shared state ·
low risk · RAG optional · MCP optional.

**Three-person consultancy** — three people · search, RAG, generated proposals ·
policies, projects, know-how · source of truth Notion/Git/Nextcloud · business
cloud AI · individual accounts · connector or API · **review mandatory before
publish** · personal state private · shared knowledge central · backup mandatory
· audit recommended · limited write access.

**Enterprise** — 5,000 users · search, RAG, agents · multiple sources ·
distributed source of truth · central IdP · ACL-aware authorisation · many
connectors · MCP possibly as integration layer · multiple approved models ·
central audit and DLP · policy-driven retention · approval-controlled write
actions · mandatory observability · continuous evaluation.

## 11. Tool maturity against user maturity

An employee can be a complete beginner — opens the company chat, asks a question
— while behind it run OIDC, enterprise search, hybrid RAG, a vector DB,
reranking, ACL filtering, DLP, a model gateway, audit and SIEM.

> **Enterprise maturity usually means the complexity is abstracted away from the
> user.** That is a sign of a good platform, not a missing one.

## 12. Six principles taken from this project

Four from the repository:

1. **Operational state is not knowledge.** The `.ai/` model separates the AI's
   running work state from documentation.
2. **Shared rules are not personal overrides.** `AGENTS.md` is central; local AI
   configuration may stay local and uncommitted.
3. **Collaboration needs its own layer.** Branches and pull requests are a
   coordination layer, not merely file storage.
4. **Governance must grow proportionally.** Profiles and adoption paths rather
   than maximum structure for every case. The practical guide says outright that
   `.ai/state.md` need not be constantly maintained and that empty process files
   deliver no value.

Two from the website:

1. **Data path first.** Not "which product", but what leaves the device, where
   it is processed and stored, and for how long.
2. **Epistemic governance.** Statements are separated by kind and evidence —
   fact, measured, law, assessment, recommendation — and checkable ones carry a
   check date.

The second is the one to adopt for any serious knowledge base.

## 13. Which gives the fuller model

```text
WHO                  personal → shared → team → enterprise
EXPERIENCE           chat → workspace → knowledge UI
AI CAPABILITY        LLM → retrieval → agent → actions
KNOWLEDGE            sources → pending → published → archived
STATE                shared / personal / operational
RETRIEVAL            BM25 → vector → hybrid → graph
INTEGRATION          upload → connector → API → MCP
TRUST                identity → ACL → approval → policy
DATA PATH            device → service → index → LLM → target
KNOWLEDGE GOVERNANCE provenance → review → version → lifecycle
EPISTEMIC STATUS     fact / measured / assessment / …
OPERATIONS           backup → logs → monitoring → recovery
```

> A single term — RAG, MCP, LLM wiki, agent — no longer determines the
> architecture. It occupies **one position in this model**. A real use case only
> emerges from the combination of who uses it, what knowledge, which data path,
> which capabilities, what persists, which integrations, which permissions and
> which governance.

## 14. The rule against overengineering

```text
No problem → no additional component.
```

Not: AI, therefore vector DB, therefore knowledge graph, therefore MCP,
therefore Kafka, therefore Kubernetes — because it is technically possible.

```text
individual documents        → upload, do not build a RAG
50 recurring documents      → consider search/RAG
durable knowledge           → knowledge base
several users               → identity, rights, review
external systems            → connectors/API
many agent tools            → MCP becomes interesting
the AI should change things → agent, approval, audit
complex relationships       → consider a knowledge graph
```

## Sources

Two, and both are this project's own surfaces:

1. [AI Standard](https://ai-standard.rubennati.at/)
2. [AI Standard — data flows](https://ai-standard.rubennati.at/data-flows)
