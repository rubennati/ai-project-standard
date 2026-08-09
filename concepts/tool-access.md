---
owner: Ruben Nati
reviewed: 2026-08-09
derives-from: research/knowledge-management (drops 1-4, 7)
status: draft
---

# Tool access

How an AI system reaches the things it acts on, and where the authority to act
actually sits.

## 1. What you are deciding

Your assistant needs to reach something — a mailbox, a ticket system, a drive, a
database. Then a second assistant needs the same thing. Then a third.

Each integration was reasonable on its own. Together they are four copies of the
same connection, four places a credential lives, four sets of permissions that
have drifted apart, and nobody who can answer *what can this thing actually do
if it goes wrong*.

The decision is **not** "should we use MCP". It is where the authority lives,
whether reading and writing are separated, and whether one shared surface is
worth operating.

## 2. The smallest thing that works

**One client and two tools: wire them directly.** A shared surface in front of
one consumer is a gateway in front of a single door. Do keep the credential out
of the model even here — that part costs nothing and is the control that
matters most.

**Read-only and non-sensitive: stop worrying about most of this.** Nearly all
the machinery below exists to control writes. Without writes there is far less
to control, and the remaining risk is that the model reads something it should
not have been shown.

**Everything your AI product already connects to: use that.** A vendor connector
you did not build is one you do not operate, do not patch and do not have to
audit. The trade is that you accept its permission model as it is.

Build a shared surface when several clients genuinely need the same tools, or
when you cannot answer what an agent may do without opening four different
consoles.

## 3. The architecture

### The four ways content and capability reach a model

They are commonly conflated, and they have different security properties.

```text
UPLOAD       you hand over a file, once, for this conversation
             scope: this session · lifetime: this session (usually)

CONNECTOR    a vendor-built integration to a named system
             scope: whatever the vendor's consent screen granted

API          your own code calls a service, and calls the model separately
             scope: whatever you wrote · you own every decision

TOOL SURFACE a service that offers capabilities to any client that connects
             scope: declared per tool · one place to change it
```

An upload is not a connector. A connector is not an integration you control. A
protocol for offering tools is an access layer, not a knowledge base — it moves
capability around and stores nothing.

### Where the authority sits

This is the whole point of the concept.

```text
MODEL                 RUNTIME                    TARGET SYSTEM

decides what      →   holds the credential   →   the mailbox
should happen         checks the permission      the ticket
                      classifies the action      the record
                      may ask a human
                      writes the audit event

reasoning             authority
```

The model emits a structured request. It never holds the token, never sees it,
and cannot be talked into repeating what it was never given. Everything a model
can read, it can be persuaded to disclose — so the defence is not to trust it
less, it is to hand it less.

### Read and write are different categories

```text
READ                          WRITE
list tickets                  close a ticket
search documents              edit a document
fetch a record                send a message
                              change a permission
                              delete anything
```

They belong in separate declarations, ideally separate credentials, and
certainly separate approval rules. A tool list that mixes reading a ticket with
closing it cannot be reviewed by a human, which means it will not be.

### Three identities

```text
the human            Ruben, who is allowed to do a great deal
the agent            acting for Ruben, allowed to do this task
the service account  what the runtime actually authenticates as
```

The agent's permissions are a **subset chosen per task**, not an inheritance.
You may be allowed to delete mail; the agent working on your calendar does not
need that, and giving it that right because you have it is how a small mistake
becomes an unrecoverable one.

## 4. The decision points

### 4.1 Direct integration or a shared surface

The honest answer is that nobody has a threshold. The research argues both
sides: a shared integration layer is the obvious answer once there are many
tools, and adding infrastructure because it is technically possible is the most
common way a workable system becomes an unmaintainable one.

What to count instead of "many":

- **How often permissions change.** Frequent change is the strongest argument
  for one place to change them.
- **How many people are affected by a mistake.** One person's assistant is not
  the same risk as a surface fifty people's agents reach.
- **Whether you can currently answer "what may this agent do".** If answering
  requires opening several consoles, that is the real trigger.

Not the number of clients times the number of tools.

### 4.2 Where the credential lives

| Option | Verdict |
|---|---|
| In the model's context or system prompt | **Never.** Context is summarised, logged, cached and repeated |
| In the client application | Workable for one client; multiplies with each new one |
| In the tool runtime | The default. One place to rotate, revoke and audit |
| In a secrets manager the runtime reads | The same, with rotation solved |

### 4.3 Which scope to request

Consent screens grant broadly and reviewers click through. Decide the scope from
the task, not from what the provider offers:

```text
task: summarise this week's support mail
grant: read, one folder, no send, no delete
not:   full mailbox access because it was one checkbox
```

Where the provider only offers coarse scopes, that is a finding to record, not a
reason to widen the task.

### 4.4 Graded control, not one approval prompt

An approval on every action trains people to approve everything. Grade it:

```text
automatic          read operations, reversible, low blast radius
sampled            high volume, individually low impact — review 10%
confidence-gated   act above a threshold, ask below it
approval first     sending, publishing, deleting, spending, permissions
never              whatever you would not delegate to a new hire on day one
```

The last row matters. Some actions should not have an approval path at all,
because an approval path is a thing people click.

### 4.5 What the audit event has to contain

With an agent in the chain, "user X changed Y" no longer describes what
happened. Six actors:

```yaml
initiator:      who asked
decision_maker: who or what chose this action
generator:      which model produced the request
executor:       which runtime carried it out
credential:     which identity it acted as
approver:       who approved, if anyone
```

Plus the target, the parameters, the outcome, and whether it was reversible.

### 4.6 Trusting the surface itself

A tool surface is code you now depend on, and if it is somebody else's code it
is a supply chain question. Pin it, know who publishes it, and treat a
third-party surface that offers write tools as it deserves — something with
standing access to your systems.

## 5. How it fails

| Failure | What it looks like |
|---|---|
| **Overprivileged agent** | The task needed read; the grant gave write. Nothing goes wrong until something does |
| **Credential in context** | A token reaches the model, is summarised into a log, and outlives every rotation you performed |
| **Injection through tool output** | A fetched page contains text shaped like an instruction. The model has no way to tell it apart from yours |
| **Approval fatigue** | Everything asks, so everything is approved. The control still exists on paper |
| **Stale permission** | Access was revoked centrally; the surface holds its own copy and keeps working |
| **Unattributable change** | Something changed, the log says the service account did it, and the service account is used by everything |
| **A dependency with write access** | A third-party surface is compromised upstream and inherits every grant you gave it |

The first, second, fifth and sixth involve no attacker at all.

**The boundary that prevents most of it:** instructions come from the user;
everything arriving through a tool is data. That has to be enforced in the frame
the agent runs under, not hoped for.

## Related

- The blueprint this concept underlies:
  [`agent-tool-access`](../blueprints/agent-tool-access/) — planned, and blocked
  on the threshold question in 4.1
- The frame that enforces the instruction boundary:
  [`ai-assisted-development`](../blueprints/ai-assisted-development/)
- Research:
  [layers.md](../research/knowledge-management/layers.md),
  [architecture.md](../research/knowledge-management/architecture.md),
  [primitives.md](../research/knowledge-management/primitives.md),
  [security.md](../research/knowledge-management/security.md)

## Open

- **The threshold in 4.1.** Unanswered by the material, and answering it from
  taste would be worse than leaving it open.
- **No protocol or product named as a recommendation.** That is a claim with a
  shelf life and it needs a check date.
