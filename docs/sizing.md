# Sizing

How much system a problem actually needs. The rule, and the four tools for
applying it.

## The rule

> **No problem, no component.**

Not: AI, therefore a vector database, therefore a knowledge graph, therefore an
integration gateway, therefore a queue — because it is technically possible.

The question to ask instead:

> **What is the smallest architecture that solves this problem well enough?**

A technically perfect solution can be economically absurd. Twenty documents and
three people do not need any of the above, and the honest first answer to most
retrieval problems is "upload the files".

This is why the blueprint set is cut by trigger rather than by technology, why
every concept answers *the smallest thing that works* before it describes an
architecture, and why a collection that only grows stops being a recommendation.

## The line that changes everything

```text
                    ONLY ME
                       │
        ═══════════════╪═══════════════
                       │
               OTHERS ARE AFFECTED
```

While you are the only person affected, a bad structure, a wrong note or an
overwritten file is your own problem, and every control is overhead you will
abandon.

The moment a second person relies on it, the class of problem changes: who may
read, write, delete and publish; what happens on a conflict; which version
applies; who changed something; how a previous state is recovered.

**None of those are AI problems.** They are multi-user, identity and governance
problems, and they arrive at the same point regardless of what the system is
built from.

## Triggers, not stages

An architecture grows a component when a concrete problem requires one — not
because a next rung exists. There is no ladder, and nobody has to reach the top.

| Trigger | What becomes relevant |
|---|---|
| More than one user | identity, permissions, ownership |
| Shared knowledge | source of truth, versioning, backup, review |
| Personal or sensitive data | classification, data path, retention, audit |
| Write access | approval, rollback, audit, least privilege |
| External actions | risk rises sharply — sending, closing, changing, spending |
| The system decides autonomously | policy, monitoring, human review, evaluation |
| Knowledge becomes business-critical | provenance, owner, validity, lifecycle |
| More to read than anyone will read | retrieval, chosen per question type |
| Several clients need the same tools | one surface, and the credential outside the model |

More useful than "a large company needs more security" — because an individual
expert may need more technique than a company, and a company may need governance
while its AI use is close to zero.

## The order of questions that produces an architecture

Answer in this order. Answering out of order produces a technology choice
looking for a problem.

```text
1  WHO           who is affected, and who is responsible
2  WHY           which problem, concretely
3  KNOWLEDGE     what kind — declarative, procedural, episodic,
                 normative, relational, personal
4  SOURCE        where does it come from, and who owns it there
5  ACCESS        how is it reached, and by whom
6  STORE         where does the authoritative copy live
7  RETRIEVAL     how is it found, per question type
8  CONTEXT       what does the model actually receive
9  ACTION        what may happen as a result
10 TRUST         identity, permission, approval, audit
11 LIFECYCLE     how does it change, and how does it stop being true
12 OPERATIONS    who runs it, and how is it known to be working
```

Most architecture arguments are two people at different numbers.

## Knowledge has types, and the type decides where it belongs

| Type | Example | Belongs in |
|---|---|---|
| **Declarative** — what is true | "Server A has IP X" | a structured store, not a document |
| **Procedural** — how something is done | "this is how a restore runs" | documentation, retrievable |
| **Episodic** — what happened | "on 8 August, server A failed" | a log or event store |
| **Normative** — what should hold | "passwords must be at least…" | a reviewed, owned policy |
| **Relational** — what depends on what | "application A depends on database B" | a graph, if the questions are relational |
| **Personal** — what applies to one person | "Ruben prefers…" | personal state, never shared knowledge |

Putting all six in one store is the most common structural mistake in knowledge
work, and it is free to avoid at the start and expensive later.

## Five tags to classify anything new

When a new term or product arrives, place it rather than argue about it:

```text
LAYER        which part of the architecture — storage, retrieval,
             integration, model, orchestration, interface, control
DIRECTION    read · write · both
SCOPE        one person · a team · an organisation
DEPENDENCY   what must already exist for this to make sense
REPLACES     what it is an alternative to, if anything
```

If a thing cannot be tagged, it is usually a marketing category rather than a
component.

## Applying it here

- The blueprint set is cut by trigger, and three triggers deliberately get no
  blueprint of their own — see [blueprints.md](./blueprints.md).
- Every concept answers the smallest thing that works before the architecture —
  see [concepts.md](./concepts.md).
- A blueprint or concept that no longer describes what this project would
  recommend today is removed rather than kept.

Depth, per problem: [concepts/](../concepts/README.md). The reasoning for a
general audience: the website.
