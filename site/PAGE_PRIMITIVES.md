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

The job is structural and is not rendered. It reached the page as an eyebrow
until 2026-08-24 — "Decision path" / "Entscheidungsweg" — which told a reader how
this project files its own material rather than anything they could act on, and
in German named an organisational approval chain. It survives as the
`data-page-job` attribute.

## Shared components

| Component | Contract |
| --- | --- |
| `PageIntroduction` | Names the page job and puts a plain-language answer before context, fit and metadata. |
| `EvidenceBand` | Joins a claim level, summary, source and check date. Fact and measured instances fail at build time without all required evidence. |
| `StopCondition` | Marks a case where proceeding would cross a consequential boundary, and gives the safer route instead. |
| `ImplementationStep` | Keeps action, expected result and verification together so an instruction cannot end at activity. |
| `ArtifactLink` | Marks material to copy as an artifact rather than presenting it as another article. |
| `NextStep` | Offers the one action the reader is most likely to want next, chosen for that page. Not a related-content collection, not a rendering of global navigation, and it carries no product-stage label. |

## Composition rules

- Put the answer before background or implementation depth.
- Use only the components that serve the page's job; an empty ritual section is
  worse than omitting it.
- Keep a stop condition close to the recommendation it limits. Reserve it for a
  boundary with a material consequence; fit, trade-offs and simpler alternatives
  belong in ordinary page content.
- Keep each implementation action with its expected result and check.
- Use `EvidenceBand` for a claim that controls a decision. Existing inline
  `EvidenceLabel` remains appropriate for narrower article sections.
- Link an artifact only when its boundary, status and verification are honest.
- End on one accountable next step, not a wall of loosely related links.
- `NextStep` is optional. A page that carries a reader somewhere should say
  where it goes next; a page that closes a question may end. Nothing enforces
  it, because the destinations are an editorial judgement per page.
- The primitives inherit the Reading rail. Wide comparisons remain separate
  figures or matrices and must preserve labelled meaning on mobile.

## The `NextStep` contract

```text
NextStep {
  locale
  context?    one sentence, only where the destination's label alone would read
              as a change of subject
  primary     { label, description?, href }   exactly one, always
  secondary?  { label, href }                 only where the reader job forks
}
```

- The label promises the reader job the destination answers. It does not have to
  reproduce the destination's H1 — see `.ai/decisions.md`, 2026-08-24.
- `Next step` / `Nächster Schritt` is visible furniture, a `<p>` rather than a
  heading, so it stays out of the document outline. The region takes its
  accessible name from that element, so a screen reader hears it once.
- The secondary destination carries no description, which keeps it subordinate
  and stops it growing into a related list.
- Internal-only. External material is an artifact (`ArtifactLink`) or a source
  (`EvidenceBand`), and a link that leaves the site ends the journey rather than
  continuing it.
- Returning to the parent hub is one kind of destination, not a second slot. A
  persistent back affordance would be a breadcrumb, which the site does not use.

## First proof

The first complete use is “Connect AI to tools and data”, with MCP as the
technical example. Vibe Coding is the second test. Existing page families are
not migrated until both the component system and the first complete path have
been reviewed on desktop and mobile, in English and German.
