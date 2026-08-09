# Architecture

The structure is stated in `docs/purpose.md` and derives from the destination.
Anything that reorganises it is an architectural change, not a tidy-up.

- **Boundaries before abstractions.** `blueprints/` is copied, `docs/` is read,
  `site/` is published, root is this instance. A file that does not obviously
  belong to one of them is a sign the boundary is wrong, not that a fifth is
  needed.
- **Record structural decisions in `../decisions.md`** with what was rejected.
  The rejected option is what a future reader needs.
- **One place per fact.** If something is true in two files, one is a copy that
  will drift. Point at the original.
- **Nothing lower may contradict something higher** in the hierarchy: purpose →
  evidence → decisions → artifacts → instance.
- Prefer the reversible option, and say so when one is not. Public URLs,
  navigation and vocabulary are hard to reverse — `AGENTS.md` → Change scope
  requires asking first.
- Do not generalise on the second occurrence. Wait for the third; the first two
  rarely show the real axis of variation.
