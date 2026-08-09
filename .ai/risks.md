# Risks

Reviewed 2026-08-09.

## Live

- **Claims without evidence.** `docs/` states what GitHub, the OpenSSF and others
  do, with no source and no check date, some of it unchanged since May. An
  adopter copies those claims into their own project. This is the failure the
  project exists to correct, occurring inside it.
- **A blueprint nobody has run.** A payload that says "this is how you work" and
  has never been used on a real empty project is an assessment presenting itself
  as a fact. Every blueprint stays `draft` until it has been run and the result
  recorded with a date.
- **Payload and root drifting apart.** The payload is the source and the root is
  this project's instance, so they may differ — but nothing yet distinguishes an
  intended difference from an unnoticed one.
- **Stale pins in payload workflows.** Dependabot reads only the root
  `.github/workflows`. SHA-pinned actions inside `blueprints/*/files/` go out of
  date silently, and the pinning advice is ours.
- **Competing taxonomies.** Four pillars, three profiles, four adoption paths,
  three layers, four questions. A reader meets a different cut of the same
  territory depending on which file they open.
- **Drift from the founding idea.** Recorded twice in `errors.md`. The check is
  in `project-brief.md`; it only works if it is actually run before work starts.

## Structural

- Governance drift if `state.md` and `decisions.md` are not updated
- Reduced review quality if branch and PR policies are bypassed
- Ownership ambiguity for architecture decisions

## Open, not owned

- `nanoid` advisory on `main`, severity high, transitive through the site build
