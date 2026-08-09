# Errors and Recovery Notes

Record only substantive process errors and corrective actions.

If there are no active errors, keep this file unchanged.

## 2026-08-09 — Navigation changed without asking

**What happened.** A new site section was added to the primary navigation as
part of building it, and shortly after the header was rebuilt as a mobile
disclosure. Neither was asked about. The header appears on every page, so both
changed the whole site while the task was one section.

**Why it was wrong.** Navigation is information architecture. Its shape was an
open question at the time — the site's top level had no stated principle, and
adding a seventh item settled it by accident rather than by decision. The
disclosure rewrite followed a reported defect, which authorises a diagnosis, not
a redesign.

**Corrective action.** `AGENTS.md` gained a "Change scope" section listing what
requires a human decision first — navigation, information architecture, public
URLs, the taxonomy, anything on every page — and stating that the website has a
working state which changes should be additive to. `.ai/rules.md` points at it.

**The second, larger drift.** Four consecutive steps produced website work while
the stated objective was to bring material into the repository as blueprints.
Each step followed from an explicit request, and the sequence still ended far
from the goal. Check the objective against the work at the start of each step,
not only the last instruction.

## 2026-08-09 — Named a blueprint from invention, not from the glossary

**What happened.** The second blueprint was named `ai-collaboration`, which
names nothing in a repository that is entirely about AI and collaboration. When
challenged, the next proposals — `agent-guardrails`, `reviewable-ai-development`
— were invented too. The project's own glossary held 80 researched terms,
including `AI-assisted Development`, whose definition matches the blueprint's
five domains word for word.

**Why it was wrong.** The same mechanism as the two failures above: generating
from context instead of reading what the repository already settled. In all
three cases the answer was already written down — in `about.ts`, in the previous
message, in `terms.ts`.

**Corrective action.** `docs/purpose.md` now states the three surfaces and their
division, and every other file defers to it. `.github/scripts/check-conformance.sh`
runs in CI and enforces what discipline did not: the purpose file is pointed at,
every blueprint answers the four questions, external claims carry a check date,
and blueprint paths named in prose exist. `AGENTS.md` now says to check the
glossary before inventing a name.

**The pattern, stated once.** Three failures, one cause: writing the rule is not
keeping it. Every rule this repository states about itself now needs a check that
fails, or it will be broken again — which is precisely the argument the
blueprints make to adopters.

