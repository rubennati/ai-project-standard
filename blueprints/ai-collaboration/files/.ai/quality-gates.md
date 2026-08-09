<!-- blueprint payload: ai-collaboration — edit upstream, then delete -->
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

- Scope is limited to one concern
- The pull request explains why, not only what
- Documentation lands with the change it describes
