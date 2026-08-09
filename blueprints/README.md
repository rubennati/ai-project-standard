# Blueprints

Material to copy into your own project. See
[docs/blueprints.md](../docs/blueprints.md) for what a blueprint is, the shape
it has, and how to add one.

| Blueprint | What you get | Status |
|---|---|---|
| [open-source](./open-source/) | Governance, contribution and CI files for a public repository. No AI, no licence chosen for you. | draft |
| [ai-collaboration](./ai-collaboration/) | The frame an agent operates inside — when it stops and asks, what it may never do, what must be verified — plus an initialisation interview. Drops onto a repository you already have. | draft |

The two compose: `open-source` starts a public repository, `ai-collaboration`
overlays the agent frame on top. Neither depends on the other.

## Licence

Everything under `blueprints/` is [MIT-0](./LICENSE) — MIT without the
attribution requirement. Copy a payload file into your project and you carry no
notice about this one with it.

The rest of the repository stays MIT, and the texts written for the website are
CC BY 4.0.
