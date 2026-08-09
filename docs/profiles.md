# Profiles — superseded by blueprints

**This document no longer describes how the standard is adopted.** It is kept so
existing links resolve.

Profiles were file lists: *these paths belong in an OSS-only repository, these
in an AI-only one, these in both*. They described what a good repository
contains and left the adopter to assemble it.

Blueprints replaced them. A blueprint is cut by **goal** rather than by file
list, ships the files instead of listing them, states the decisions it has
already made and the reasons, and says what it was run against.

The two were the same idea at different stages of maturity, and keeping both
meant the repository named its central concept twice — which is how a reader
ends up unsure which one is current.

## Where to go instead

- [purpose.md](./purpose.md) — the destination everything derives from
- [standard.md](./standard.md) — what the repository holds
- [blueprints.md](./blueprints.md) — what a blueprint is, and how to add one
- [adoption.md](./adoption.md) — taking one into your project
- [`blueprints/README.md`](../blueprints/README.md) — the catalogue

## What happened to the three profiles

| Profile | Now |
|---|---|
| OSS-only | [`open-source`](../blueprints/open-source/) blueprint |
| AI-only | [`ai-assisted-development`](../blueprints/ai-assisted-development/) blueprint |
| Combined | Take both; they compose and neither depends on the other |

The naming disagreement this document carried — *OSS-only / AI-only / Combined*
here against *Open Source / Human-AI Collaboration / Combined* elsewhere — is
resolved by there being one set of names again: the blueprint ids.
