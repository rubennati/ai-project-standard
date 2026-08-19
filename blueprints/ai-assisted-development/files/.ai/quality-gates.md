<!-- blueprint payload: ai-assisted-development — edit upstream, then delete -->
# Quality Gates

A gate blocks. A statement of intent does not. Every line here should name
something that fails, and how to run it.

| Gate | Command | Blocks a merge |
| --- | --- | --- |
| Lint | <!-- fill --> | yes |
| Tests | <!-- fill --> | yes |
| Types | <!-- fill --> | yes |
| Build | <!-- fill --> | yes |

Where a command does not exist yet, write `none yet` rather than deleting the
row. A missing gate is a known hole; a deleted row is a forgotten one.

## Not automated

Not automated is not unverified. Where correctness turns on meaning, audience,
scope or consistency, no command settles it: the result is read against what
the work was supposed to achieve, established independently of the result being
judged — by the instruction, the confirmed plan, or a later clarification a
human gave, and never reconstructed from what came out. That fixes the outcome
and not the method. A change is read against the scope it was given as well,
including what it was asked to leave alone. A reader who did not write it
carries the stronger evidence and reports rather than quietly corrects, where
the consequence or the ambiguity earns it.

- Scope is limited to one concern
- The pull request explains why, not only what
- Documentation lands with the change it describes
