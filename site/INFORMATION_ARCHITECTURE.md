# Website Information Architecture Proposal

This proposal turns the product brief and content audit into one reader-facing
structure. It is a decision document, not an implementation. Header, footer,
public URLs and route taxonomy remain unchanged until a human approves the
concrete changes listed at the end.

Proposal date: 2026-08-10.

Status: the stable-route-first product structure and primary reader jobs were
approved on 2026-08-10. The original footer proposal was rejected because it
repeated primary navigation. The revised footer below follows
[`THEME_DIRECTION.md`](./THEME_DIRECTION.md).

## Recommendation in one sentence

Organise AI Standard around the four decisions a reader has to make — what to
use AI for, how to collaborate with it, what it can reach, and how to control
and verify the work — while keeping reference material and repository artifacts
inside the same product journey rather than as separate identities.

## Why this structure

The content audit found that the current site has strong material about Reach,
partial material about Control, and weak coverage of Possibility and
Collaboration. The current header reflects the content that happened to be
written first: Data, Setup, Law, Blog and About. It does not describe the
decision a reader is trying to make.

The product spine supplies a stable organising rule:

| Reader decision | Product stage | Existing hub that can own it |
| --- | --- | --- |
| What could AI help me accomplish? | Possibility | `/use-cases` |
| How should the human and system work together? | Collaboration | `/start` |
| What can the system see, retain, change or trigger? | Reach | `/data-flows` |
| How do I make the boundary hold and check the result? | Control | `/secure-setup` |

This is a stable-route-first architecture. The hub URLs already exist, so the
site can adopt a coherent public structure without inventing four replacement
routes. Labels and content promises change; published article URLs stay in
place unless a later migration has a concrete benefit.

## Primary navigation

The wordmark remains the Home link. The proposed header has five destinations:

| Product job | English label | German label | Destination |
| --- | --- | --- | --- |
| Possibility | **Use AI** | **KI einsetzen** | `/use-cases` and `/de/use-cases` |
| Collaboration | **Choose how** | **Arbeitsweise wählen** | `/start` and `/de/start` |
| Reach | **Data & systems** | **Daten & Systeme** | `/data-flows` and `/de/data-flows` |
| Control | **Control & verify** | **Absichern & prüfen** | `/secure-setup` and `/de/secure-setup` |
| Reference | **Reference** | **Nachschlagen** | `/glossary` and `/de/glossary` |

“Choose how” is preferable to “Collaborate” in the header because it states the
reader's action and avoids sounding like a team-collaboration feature. The hub
itself can use the more explicit heading “Choose how to work with AI”.

The abstract words Possibility, Collaboration, Reach and Control remain the
content model. They do not need to become navigation jargon.

### What leaves the header

- **Law** becomes authoritative reference and contextual depth inside a
  decision. A reader should not need to classify a question as legal before
  finding the relevant answer.
- **Blog** becomes a footer destination and a source of featured editorial
  content on the homepage. Format is not a primary reader goal.
- **About** remains a trust destination in the footer. The wordmark and homepage
  already orient a first-time reader.

This reduces the header from six subject and format labels to five reader jobs.
The language control is a permanent header action on desktop and mobile; it is
not hidden inside the mobile navigation disclosure.

## Reader journeys

Top-level navigation provides durable orientation. Journeys provide the actual
path through the material. A journey can enter at any stage and still expose
the other three.

| Reader arrives with | First destination | The path must answer |
| --- | --- | --- |
| “I have a task and want to know whether AI helps” | Use AI | useful outcome → appropriate collaboration → required reach → checks and no-AI option |
| “I am about to paste something into a chat” | Choose how or Data & systems | account and task → data path → permission → source and output verification |
| “I want AI to work in files or code” | Choose how | workspace boundary → diffs and tests → secrets and permissions → human ownership |
| “I want to connect mail, knowledge or another service” | Data & systems | retrieval or action → connector/MCP reach → scopes and credentials → logging and revocation |
| “I want an agent to act” | Control & verify | goal → action boundary → checkpoints → rollback, monitoring and reconstruction |
| “I decide for a team or organisation” | Choose how | use policy → approved operating models → data and law → literacy, exceptions and incident ownership |
| “I want to publish something built with AI” | Use AI | prototype or deliverable → rights and licence → review and maintenance → honest labelling |

Role, technology and company size are filters or entry cues, not top-level
sections. A person can be an employee, developer and decision-maker in the same
week; the information architecture should not make them choose one identity.

## Proposed sitemap

The tree shows product ownership, not a demand to move every current file.
Existing article paths appear under the job they serve even when their URL keeps
its old prefix.

```text
Home
├── Use AI                         /use-cases
│   ├── Write, transform and communicate
│   ├── Research, analyse and decide
│   ├── Work with organisational knowledge
│   ├── Build, prototype and maintain software
│   ├── Connect tools and automate work
│   └── Decide not to use AI
├── Choose how                     /start
│   ├── Chat
│   ├── Assistant
│   ├── Workspace assistant
│   ├── Tool-using system
│   ├── Agent
│   ├── Repeated automation
│   ├── Employee entry
│   └── Decision-maker entry
├── Data & systems                 /data-flows
│   ├── What the product and model each do
│   ├── Training and retention
│   ├── Deletion and exit
│   ├── Knowledge sources
│   ├── Connectors and MCP
│   ├── Permissions and credentials
│   └── Hosting, operators and sovereignty
├── Control & verify               /secure-setup
│   ├── Decide what is permitted
│   ├── Configure the boundary
│   ├── Verify answers and outputs
│   ├── Review actions and changes
│   ├── Preserve evidence and reconstruct decisions
│   ├── Monitor, revoke and recover
│   └── Introduce AI in an organisation
└── Reference                      /glossary
    ├── Glossary
    ├── Law
    ├── Evidence method and source policy
    └── Dated provider and platform behaviour

Footer
├── Articles                       /blog
├── About                          /about
├── Technical repository          GitHub
├── Contribute and report a problem
└── Legal, privacy, licensing and security contact
```

The first four hubs are not content silos. A substantial decision guide should
cover the full product spine on one page, then link to deeper explanations,
reference and copyable artifacts. The tree states which hub helps a reader find
the page, not which questions the page is allowed to answer.

## Homepage job

The homepage should make the whole proposition understandable without asking a
reader to know the taxonomy.

### 1. Mission and first action

Lead with the product statement in reader language: useful AI work, appropriate
collaboration, known reach and reviewable outcomes. The primary action opens the
outcome map; the secondary action helps the reader choose a form of
collaboration.

Suggested action labels:

- **Find where AI can help** → `/use-cases`
- **Choose how to work with AI** → `/start`

### 2. What do you want to achieve?

Show a small outcome map rather than the current three risk-oriented doors.
Each outcome card includes one example, one important limit and a path to the
full decision.

Initial groups:

- write, transform and communicate;
- research, analyse and decide;
- use organisational knowledge;
- build and maintain software; and
- connect tools and automate work.

The list includes “AI is the wrong tool” as a normal result, not a warning
banner at the end.

### 3. How much should the system do?

Show the collaboration continuum from Chat to Repeated automation. The visual
must not imply that more autonomy is maturity or progress. Each form states
what the human still owns and what new reach appears.

### 4. Reach changes the decision

Use one concise model for what the system can:

- see;
- retain;
- change; and
- trigger.

This section routes into the existing data-flow and access material. It keeps
the site's current strength visible without letting risk define the opening
promise.

### 5. Make the result trustworthy

Introduce configuration, verification, evidence, recovery and ownership as one
control loop. Link current strong pages such as “Before you give an AI agent
access” and “Four questions that are not the same question”.

### 6. How this site earns trust

Keep the evidence legend, check dates, author and correction/reporting path.
The repository becomes a compact proof and artifact link, not a second call to
browse documentation.

## Hub jobs

### Use AI — Possibility

`/use-cases` changes from a blueprint catalogue into an outcome map. Each entry
answers:

1. what result someone is trying to produce;
2. when AI adds value;
3. when it does not;
4. which form of collaboration fits;
5. what reach is required; and
6. how the result is checked.

Blueprints can appear only as an implementation artifact at the end of a
relevant path. Their status is useful metadata there, not the organising rule
for use cases.

### Choose how — Collaboration

`/start` becomes the decision point between Chat, Assistant, Workspace
assistant, Tool-using system, Agent and Repeated automation. Existing employee,
decision-maker and technical-explainer pages remain useful entry points beneath
it.

The hub compares forms by consequence and reach, not by sophistication:

| Form | Human role | System reach | Typical verification |
| --- | --- | --- | --- |
| Chat | asks, supplies context, judges answer | submitted content | sources and subject review |
| Assistant | directs and revises a deliverable | task context and supplied material | review against the intended result |
| Workspace assistant | owns change and acceptance | selected files, code and commands | diff, tests and human approval |
| Tool-using system | authorises a bounded operation | scoped external systems | permission, log and result check |
| Agent | sets goal, checkpoints and stop conditions | several tools and steps | action review, rollback and reconstruction |
| Repeated automation | owns policy and operation | persistent event and action surface | monitoring, sampling and incident response |

### Data & systems — Reach

`/data-flows` broadens from input movement to the full reach model: see, retain,
change and trigger. Existing pages already cover see and retain well. MCP,
connectors, action permissions and revocation fill change and trigger.

The hub should distinguish four layers that are currently easy to confuse:

1. the model;
2. the product or AI client;
3. the connector, MCP server or other integration; and
4. the target system and its permissions.

### Control & verify — Control

`/secure-setup` broadens from initial settings into the lifecycle that makes a
decision hold:

```text
Decide → Configure → Verify → Record → Monitor → Revoke or recover
```

Law and organisational policy enter at Decide. Permissions and settings enter
at Configure. Source review, tests and approvals enter at Verify. Logs,
provenance and decision records enter at Record. Repeated operations add
Monitor. Every external action needs a Revoke or recover path.

### Reference

`/glossary` remains the reference entry because it already has the largest and
most mature index. The hub should expose links to Law, the evidence method and
dated platform behaviour without turning them into another primary navigation
layer.

Reference pages answer a question in depth. They do not own the reader journey.
Every reference page should show at least one place where the fact changes a
decision.

## Current-route placement

No route in this table moves during the proposal stage.

| Current family | Future product role | Route treatment after approval |
| --- | --- | --- |
| `/start/**` | Collaboration foundations and situational entry | Keep URLs; broaden the hub and add collaboration-form guides |
| `/data-flows/**` | Reach explanations and current behaviour | Keep URLs; broaden the hub promise |
| `/law/**` | Authoritative Control reference | Keep URLs; remove Law from primary navigation and link it in context |
| `/secure-setup/**` | Configuration, verification and operation | Keep URLs; broaden the hub promise |
| `/open-source/**` | Publishing and maintaining AI-assisted software | Keep article URLs while reframing; stop treating the collection as an unrelated top-level area |
| `/blog/**` | Editorial perspective and investigation | Keep URLs; move the index to the footer |
| `/glossary/**` | Shared reference vocabulary | Keep URLs and bilingual parity |
| `/about` | Mission, method, independence and authorship | Keep URL; replace the retired two-layer identity |
| `/use-cases` | Possibility and outcome-led journeys | Keep URL; replace blueprint catalogue; add German equivalent |
| `/profiles` | Historical compatibility | Keep tombstone or redirect; remove from discovery and sitemap when appropriate |
| `/docs/**` | Compatibility only, then selected promotion or repository source | Preserve links; map each route before redirecting or removing it from discovery |

## Repository and technical depth

The repository is visible in three precise places:

1. **Source** — a factual or technical page links to the canonical source file
   when inspection is useful.
2. **Artifact** — an implementation guide links to a blueprint, configuration
   or check someone can copy.
3. **Contribution** — About and the footer link to GitHub, contribution
   guidance, issue reporting and security reporting.

It is not a primary content section. There is no public “Docs” identity, and a
reader never has to leave the site merely to understand the answer.

Technical depth stays on the same public page when it explains the decision.
Repository-only mechanics stay in GitHub. A collapsible section is not a
substitute for information architecture; depth should use headings and clear
progression so it remains linkable, printable and accessible.

## Footer proposal

The footer supports reference, trust and project inspection without repeating
the primary navigation or the retired taxonomy. The header owns the four main
reader journeys.

| Group | Links |
| --- | --- |
| **Reference** | Glossary, Law, Articles, Evidence method |
| **Project & trust** | About, Technical repository, Contribute, Report a problem, Report a vulnerability |
| **Legal** | Legal notice, Privacy policy, Security contact |

Remove Docs, Profiles and the duplicated primary destinations. Do not add
Blueprints as a public section; a relevant guide links the relevant artifact.
Show the code and content licences once in the footer's fine-print row.

## The first complete prototype path

Use **Connect AI to tools and data** as the first path, with MCP as the main
technical example. It exercises the full architecture without making MCP the
reader's goal.

| Product stage | Prototype content |
| --- | --- |
| Possibility | What connecting mail, knowledge, code or a business system enables, and when manual context is simpler |
| Collaboration | Tool-using system versus agent; what the human still decides |
| Reach | Client → MCP server or connector → target system; read and write scopes, data paths and credentials |
| Control | Least privilege, approval, logging, revocation, output/action checks, stop and recovery conditions |
| Reference | MCP, MCP Client, MCP Server, Connectors, Tool Use, OAuth, Scope, Revocation and Prompt Injection |
| Artifact | An optional repository blueprint or example MCP control point, only after its boundary and verification are real |

The primary page should be outcome-led, not titled merely “What is MCP?”. The
glossary owns the definition. The guide owns the decision.

Vibe Coding should be the second prototype because it tests a different
editorial problem: encouraging exploration while drawing an honest boundary
between Explore, Prototype, Deliver and Operate.

## Page-template consequences

The IA requires one design system and several page jobs. The next design step
should define templates only after this structure is approved.

| Page job | Required opening | Required ending |
| --- | --- | --- |
| Decision path | desired outcome, fit and no-AI condition | action, verification and next depth |
| Explanation | plain-language answer and failed mental model | decision impact and related path |
| Implementation guide | intended boundary and prerequisites | checks, evidence, recovery and artifact |
| Reference | precise definition or dated rule | where it changes a decision |
| Editorial perspective | claim, event or question worth following | conclusion, limitations and next decision |

They share typography, evidence labels, source treatment, diagrams, navigation
and related-path components. They do not force every piece into the same visual
sequence.

## Decisions requiring human approval

Implementation must not begin until a human approves:

1. the final both-language labels after they are rendered at the desktop
   breakpoint;
2. the content replacement for `/use-cases`, including the new
   `/de/use-cases` route;
3. the migration map for `/docs/**` compatibility routes; and
4. the concrete Open Source reframing before any existing page changes.

Approval of this proposal authorises the page-template specification and one
prototype path. It does not authorise a full content migration or deletion of
published routes; those remain separate, reviewable implementation work.
