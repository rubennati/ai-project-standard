# Agent tool access

**Status: planned.** Nothing is built, and this one has an unanswered question
at its centre — see [*Not built yet*](#not-built-yet).

## What it solves

You have more than one AI client, and they all need the same handful of tools.

Each integration was reasonable on its own. Together they are four copies of the
same connection, four places a token lives, four sets of permissions that have
drifted apart, and no single place to answer *what may this agent actually do
here*. Adding a fifth client means writing it all again; revoking someone's
access means remembering all four.

The problem is not that integration is hard. It is that **permissions are
scattered across the integrations**, so nobody can state the blast radius.

## What you get

One place where tools live, with the authority to use them held outside the
model.

- **A tool surface, defined once**, that any client can reach. The protocol is
  an implementation choice — MCP is the obvious candidate, and MCP is an access
  layer, not a knowledge base, which is where most of the confusion about it
  starts.
- **Reasoning separated from authority.** The model decides *what* should
  happen; the runtime holds the credential and decides *whether it may*. The
  model never sees the token. This is not a hardening step added later — it is
  the reason the surface exists at all.
- **Read and write modelled separately**, because they are different risk
  classes. Reading a ticket and closing it do not belong behind one permission,
  and a tool list that mixes them cannot be reviewed.
- **Graded controls per action**, rather than one approval prompt for
  everything: automatic, sampled, confidence-gated, or approval-before-action,
  chosen by what the action can break.
- **An audit event that names six actors** — initiator, decision maker,
  generator, executor, credential, approver — because with an agent in the
  chain, `user X did Y` no longer says what happened.

## When not to use it

- **You have one client and two tools.** Then this is a gateway in front of a
  door. Wire it directly, and keep the credential out of the model anyway — that
  part is free.
- **The tools are read-only and the data is not sensitive.** Most of the value
  here is control over writes. Without writes there is much less to control.
- **You are hoping it will give the agent knowledge.** It will not. This moves
  *access* to one place; what the agent knows is a different trigger with a
  different answer.
- **You cannot yet say which actions are high-impact.** That list is the input
  to every control here. Without it you will end up approving everything, which
  people switch off within a week, or approving nothing, which is worse.

## Not built yet

There is no `files/` directory and no payload.

And unlike the other planned blueprint, the core question here is genuinely
open: **at what point one tool surface beats direct integration.** The research
argues both sides and settles neither — drop 2 treats a shared integration layer
as the answer once there are many tools, while drop 6 warns against exactly that
reflex, because a technically perfect solution can be economically absurd. The
trigger everyone repeats is "many AI tools", and nobody attaches a number.

Shipping a payload before that is answered would be this project doing the thing
it tells other people not to do: adding a component because it is possible.

**Blocking questions**, also in `blueprint.yml`:

1. **The threshold.** Clients times tools, or something else entirely — how
   often the permissions change, how many people are affected by a mistake.
2. **Whether the payload can be language-agnostic.** Every blueprint here is so
   far. A tool surface is running code, and this repository has none, which
   makes it the first one that cannot be pure Markdown and configuration.
3. **How this composes with `ai-assisted-development`.** That blueprint already
   has "stop and ask" triggers. Graded action control is the same idea with a
   risk score attached, and two overlapping models in two payloads would be
   worse than either.

What would have to be true to build it: question 1 answered with something
defensible, and question 3 resolved in favour of one model, not two.

## Why it is not called `mcp-server`

Because the adopter with this problem does not have "no MCP server". They have
four integrations and no idea who can do what. Naming a blueprint after its
likely implementation asks the reader to already know the answer, which is the
cut this project rejects — see
[docs/blueprints.md](../../docs/blueprints.md#cut-by-trigger).

MCP may well be what the payload uses. It is not what the problem is.

## Where the reasoning is

- [layers.md](../../research/knowledge-management/layers.md) — MCP as an
  integration protocol, and what it is not
- [architecture.md](../../research/knowledge-management/architecture.md) —
  connector against MCP, read and write modelled separately, credentials never
  reaching the model
- [security.md](../../research/knowledge-management/security.md) — separating
  reasoning from authority, graded action control, the audit chain
- [DERIVED.md](../../research/knowledge-management/DERIVED.md) — positions P1,
  P2, P12 and P13

## Licence

Once there is a payload it will be MIT-0, like everything under `blueprints/`.
See [`../LICENSE`](../LICENSE).
