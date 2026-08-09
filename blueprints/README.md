# Blueprints

Material to copy into your own project. See
[docs/blueprints.md](../docs/blueprints.md) for what a blueprint is, the shape
it has, and how to add one.

The set is cut by **trigger** — the situation you are in — not by the technology
that answers it. One blueprint per trigger, not one per technology and not one
per company size.

| Trigger | Blueprint | Status |
|---|---|---|
| You are starting a public repository | [open-source](./open-source/) — governance, contribution and CI files. No AI, no licence chosen for you. | draft |
| An agent is going to work in your repository | [ai-assisted-development](./ai-assisted-development/) — the frame it operates inside: when it stops and asks, what it may never do, what must be verified, plus an initialisation interview. | draft |
| A second person has to be able to trust what is written down | [agent-maintained-knowledge-base](./agent-maintained-knowledge-base/) — an operating contract, two status axes per object, review as a pull request. | **planned** |
| More than one AI client needs the same tools | [agent-tool-access](./agent-tool-access/) — one tool surface, with the credential held outside the model. | **planned** |

The first two compose: `open-source` starts a public repository,
`ai-assisted-development` overlays the agent frame on top. Neither depends on the
other.

**`planned` means the scope is decided and nothing is built.** No payload, no
`files/` directory, and a *Not built yet* section in the README saying what is
missing and which open questions block it. The status exists because scoping is
the harder half and doing it in the open stops a payload from drifting into
whatever was easy to write. See
[docs/blueprints.md](../docs/blueprints.md#the-three-statuses).

Three triggers deliberately have no blueprint of their own — write access,
sensitive data, and more than one user. Those are controls that belong *inside*
each blueprint above. A separate security blueprint would model security as
optional, which is the failure it exists to prevent.

## Licence

Everything under `blueprints/` is [MIT-0](./LICENSE) — MIT without the
attribution requirement. Copy a payload file into your project and you carry no
notice about this one with it.

The rest of the repository stays MIT, and the texts written for the website are
CC BY 4.0.
