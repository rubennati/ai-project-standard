# Page primitives

The page-primitives system gives different page jobs one shared product
grammar. It does not make every page follow the same visual sequence.

The destination and admission test remain in `docs/purpose.md` and
`docs/website-product-brief.md`. Information architecture and visual direction
remain in `site/INFORMATION_ARCHITECTURE.md` and `site/THEME_DIRECTION.md`.
This file owns only the reusable component contract.

## Page jobs

| Job | Opens with | Must leave the reader with |
| --- | --- | --- |
| Decision path | desired outcome, fit and no-AI condition | action, verification and next depth |
| Explanation | plain-language answer and failed mental model | decision impact and related path |
| Implementation guide | intended boundary and prerequisites | checks, evidence, recovery and artifact |
| Reference | precise definition or dated rule | where it changes a decision |
| Editorial perspective | a claim, event or question worth following | conclusion, limitations and next decision |

`PageJob` in `src/data/page-primitives.ts` is the code-level vocabulary for
these jobs. A route family does not decide the job: a technical topic can need
an explanation, decision path and implementation guide at different depths.

## Shared components

| Component | Contract |
| --- | --- |
| `PageIntroduction` | Names the page job and puts a plain-language answer before context, fit and metadata. |
| `EvidenceBand` | Joins a claim level, summary, source and check date. Fact and measured instances fail at build time without all required evidence. |
| `StopCondition` | States where the approach does not fit and, when possible, gives a safer alternative. |
| `ImplementationStep` | Keeps action, expected result and verification together so an instruction cannot end at activity. |
| `ArtifactLink` | Marks material to copy as an artifact rather than presenting it as another article. |
| `RelatedNextStep` | Continues through Possibility, Collaboration, Reach, Control or Reference instead of listing generic related posts. |

## Composition rules

- Put the answer before background or implementation depth.
- Use only the components that serve the page's job; an empty ritual section is
  worse than omitting it.
- Keep a stop condition close to the recommendation it limits.
- Keep each implementation action with its expected result and check.
- Use `EvidenceBand` for a claim that controls a decision. Existing inline
  `EvidenceLabel` remains appropriate for narrower article sections.
- Link an artifact only when its boundary, status and verification are honest.
- End on one accountable next step, not a wall of loosely related links.
- The primitives inherit the Reading rail. Wide comparisons remain separate
  figures or matrices and must preserve labelled meaning on mobile.

## First proof

The first complete use is “Connect AI to tools and data”, with MCP as the
technical example. Vibe Coding is the second test. Existing page families are
not migrated until both the component system and the first complete path have
been reviewed on desktop and mobile, in English and German.
