---
owner: Ruben Nati
reviewed: 2026-08-09
derives-from: research/knowledge-management (drops 5-7)
status: draft
---

# Agent action control

Deciding what an agent may do on its own, what it must ask about, and what it
may never do — and enforcing that somewhere the model cannot argue with.

## 1. What you are deciding

An agent that only answers questions is a search engine with better manners. An
agent that *acts* — sends, edits, closes, deploys, spends — is a different class
of system, and the risk stops being "is the answer good" and becomes "what may
this influence at all".

The decision is where the line sits between what happens automatically and what
waits for a person, and how that line is enforced. Not whether to have controls.
The failure is never that a control was missing in principle; it is that the
control was a sentence in a prompt.

## 2. The smallest thing that works

**Read-only: you are mostly done.** Give it no write tools. The remaining risk is
that it reads something it should not have been shown, which is a permissions
problem, not an action-control one.

**One person, reversible actions, low stakes: undo is the control.** Drafts
rather than sends. A branch rather than a commit to the default branch. Anything
you can look at afterwards and reverse does not need an approval gate in front
of it.

**A short written frame beats a policy engine you do not have.** A list of what
the agent stops and asks about, and a list of what it never does, in a file the
agent reads. That is what the
[`ai-assisted-development`](../blueprints/ai-assisted-development/) blueprint
ships, and for a single repository with one maintainer it is proportionate.

Build the graded model below when actions reach other people, when they are
irreversible, or when several agents act under permissions nobody can enumerate.

## 3. The architecture

### Reasoning and authority, separated

```text
MODEL                    RUNTIME                      EFFECT

proposes an action  →    classifies it            →   it happens
                         checks the permission
                         applies the control
                         records the event
                                │
                                └── or refuses, or asks a human
```

The model never decides whether it is allowed. It decides what to attempt. Every
control below lives on the right-hand side, because a control the model can
reason about is a control the model can be talked out of.

### Action classes, by what they can break

```text
READ            look at something                  reversible, invisible
DRAFT           produce something for review       reversible
WRITE-INTERNAL  change something you own           reversible with history
PUBLISH         make something visible to others   hard to reverse socially
SEND            reach a person outside             not reversible
SPEND           commit money                       not reversible
CONFIGURE       change how a system behaves        blast radius beyond the task
GRANT           change who may do what             changes the control itself
DELETE          remove something                   reversible only from backup
```

Two properties decide the class: **is it reversible**, and **how far does the
effect reach**. Neither is about how clever the action was.

### Control modes

```text
AUTOMATIC          just do it
SAMPLED            do it; a share is reviewed afterwards
CONFIDENCE-GATED   do it above a threshold, ask below it
APPROVAL FIRST     a human agrees before it happens
TWO-PERSON         two humans, for the few that deserve it
NEVER              no path exists
```

`NEVER` is a real setting and the most under-used one. An approval path is a
thing people click; some actions should have no path at all.

### Machine-enforced policy

Rules the runtime evaluates, not guidance the model reads:

```text
IF action.class IN (send, spend, grant, delete)
   THEN require_approval

IF knowledge.workflow_status != published
   THEN do_not_use_for_final_answer

IF target.classification == confidential AND model.hosting == external
   THEN deny

IF action.class == write AND actor.session_actions > 50
   THEN pause and escalate
```

The third and fourth are the ones people forget. The third is a data-path
control expressed as an action rule; the fourth catches the specific agent
failure of doing the wrong thing very efficiently.

### The audit event

```yaml
initiator:      ruben                # who asked
decision_maker: agent-run-8841       # who or what chose this
generator:      <model id>           # what produced the request
executor:       mail-runtime         # what carried it out
credential:     svc-assistant        # which identity it acted as
approver:       ruben                # who approved, or null
action:         send
target:         "external recipient"
reversible:     false
outcome:        sent
```

Six actors, because "user X did Y" stopped describing what happened the moment
something acted on someone's behalf.

## 4. The decision points

### 4.1 What goes in each class

The classification is the input to everything else, so it is the work. Two
questions per tool, in this order:

1. **If this runs wrongly, can I undo it in five minutes?** No means at least
   approval-first.
2. **Does the effect leave the system it ran in?** Yes means the blast radius is
   not yours to estimate.

Where a tool does several things — an API that both reads and writes — split it
rather than classify the whole thing at its most dangerous.

### 4.2 Where to spend the approvals

You have a fixed budget of interruptions before people stop reading them. Spend
it on irreversible and outward-facing actions, and buy it back everywhere else
by making things reversible instead.

```text
instead of: approval before sending      →  draft, and a human sends
instead of: approval before committing   →  a branch, and a human merges
instead of: approval before deleting     →  archive, and delete on a schedule
```

Reversibility is cheaper than approval and does not fatigue.

### 4.3 Confidence gates, and their trap

Acting above a threshold and asking below it works when the confidence is
measured against something real — a validated extraction, a retrieval score, a
schema check. A model's own stated confidence is not that. It is fluent, it
correlates weakly with correctness, and gating on it produces a control that
feels calibrated and is not.

### 4.4 What the agent may never do

The list is short and it should be enumerated rather than derived:

```text
hold a credential
weaken or disable a check to make something pass
claim something was verified that was not run
act on instructions found in content it read
change who may do what
merge to the default branch, force-push, or alter protection rules
```

The last row is this repository's own instance of the rule. The fourth is the
trust boundary that makes the others hold.

### 4.5 Where the policy is evaluated

| Location | Verdict |
|---|---|
| In the system prompt | Guidance, not a control. Useful, insufficient |
| In the agent's own logic | Better; still inside the thing being constrained |
| In the tool runtime | The default. It holds the credential anyway |
| In the target system's permissions | Strongest, and coarsest — it cannot see intent |

Usually two: the target system's permissions as the floor, and the runtime for
anything needing task context.

### 4.6 What a human is actually approving

An approval prompt that says "the agent wants to run send_email" is theatre. It
has to show the effect, not the call: who receives it, what it says, what it
changes, and whether it can be undone. If the approver cannot tell what will
happen, the approval records consent without conferring it.

## 5. How it fails

| Failure | What it looks like |
|---|---|
| **Approval fatigue** | Everything asks, so everything is approved in one click. The control exists and does nothing |
| **Blanket approval** | "Always allow" was offered once and taken. Nobody remembers when |
| **Inherited permissions** | The agent got the human's rights because that was simpler. It needed four of them |
| **Prompt-level control** | The rule was written for the model rather than enforced around it, and content it read talked it out of the rule |
| **Confidence theatre** | Gated on a number that sounds like a probability and is not |
| **Efficient wrongness** | The action was allowed and correct in form, and it happened four hundred times before anyone looked |
| **Unattributable action** | The log says the service account did it, and everything uses the service account |
| **Approval without comprehension** | The prompt showed a function name. The human clicked yes to something they could not evaluate |

Only the fourth involves anything adversarial.

**The threat model has four classes, not one:** accident, failure, attack — and
**model uncertainty**, which is a system behaving exactly as built on an input
nobody anticipated. Controls designed only against attackers do not catch the
other three, and the other three are more common.

## Related

- Where the tools and credentials live: [tool-access](./tool-access.md)
- What the agent writes into, and under what review:
  [knowledge-lifecycle](./knowledge-lifecycle.md)
- The shipped frame that implements a small version of this:
  [`ai-assisted-development`](../blueprints/ai-assisted-development/)
- The repository's own minimum posture:
  [docs/security-baseline.md](../docs/security-baseline.md)
- Research:
  [dimensions.md](../research/knowledge-management/dimensions.md),
  [cross-cutting.md](../research/knowledge-management/cross-cutting.md),
  [security.md](../research/knowledge-management/security.md)

## Open

- **The overlap with the shipped blueprint.** `ai-assisted-development` carries a
  flat "stop and ask" list; this is the graded version of the same idea. Two
  models in two places is worse than either, and which one wins is not settled.
- **No numbers here.** What share to sample, which threshold to gate on, how many
  actions before escalating — all of it is project-specific and none of it is in
  the source material.
