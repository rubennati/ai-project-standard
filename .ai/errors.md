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
