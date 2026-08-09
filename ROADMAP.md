# Roadmap

What is planned, and what has been decided but not built. Completed work is not
listed here — it is in [CHANGELOG.md](./CHANGELOG.md).

## How the blueprint set is cut

Decided, and it governs everything below.

> **One blueprint per trigger. Not one per technology, not one per company
> size.**

An architecture grows a component when a concrete problem requires it, not
because a next rung exists. The reasoning and the full trigger table are in
[research/knowledge-management/DERIVED.md](./research/knowledge-management/DERIVED.md).

This replaces the earlier plan, which named the next blueprints by technology
and by team size. That cut asked the adopter to already know the answer.

## Near term

- **Two blueprints beyond the current pair**, in this order:
  - **A knowledge base an agent may maintain.** Trigger: a second person has to
    be able to trust what is written. The payload is an operating contract, a
    two-axis status model on every knowledge object, and the review path. Not
    to be named after a wiki — see
    [REVISIONS.md](./research/knowledge-management/REVISIONS.md) R1.
  - **A tool surface several AI clients can share.** Trigger: more than one
    client needs the same tools. Open question first: at what point this beats
    a direct integration, which no source in the material answers.
- **Fold the security positions into what already ships.** P1 to P5 in
  [DERIVED.md](./research/knowledge-management/DERIVED.md) — the model never
  holds the credential, human permission is not agent permission, a threat model
  that does not assume an attacker, semantic trust boundaries, knowledge
  poisoning. They belong in `docs/security-baseline.md` and in the
  `ai-assisted-development` payload, not in a blueprint of their own.
- **Empty the research queue onto the website.** Roughly seventy glossary terms
  and the positions listed under *bound for the website* in
  [DERIVED.md](./research/knowledge-management/DERIVED.md).
- **Two corrections, as articles.** Why removing names rarely produces anonymous
  data in the legal sense, and why "EU-hosted" answers a different question from
  the one people mean. Both correct a widely repeated claim, so both need a
  primary source and a check date rather than a confident tone. The research
  independently reached the same two conclusions, which is why they come first.
- **Implement the forkable-repository model** in `docs/forkable-repository.md`:
  a public repository carries no operator-specific personal data in readable
  form, and a fork that clones, builds and deploys publishes placeholders rather
  than someone else's imprint.
- **Promote a blueprint to `stable`.** Both are `draft` because neither has
  started a real project. That is the only thing that changes it.

## Mid term

- **A bootstrap script per blueprint**, so taking one is a command rather than a
  copy-and-adjust exercise. Worth building once a blueprint has been used a few
  times, not before.
- **Retrieval, if a trigger appears.** There is more to read than anyone will
  read, and answers must cite. Held back deliberately: this repository has no
  corpus that needs it, and a blueprint nobody has run is a suggestion.
- **Versioned adoption and migration guidance**, once there is a second version
  worth migrating between.

## Long term

- Maintain a stable collaboration standard across human and AI tooling changes.

## Not planned

- **A security blueprint.** Security is a plane over every layer, not a section
  at the end; a separate blueprint would model it as optional.
- **A blueprint named after a technology** — `rag`, `mcp`, `knowledge-graph`.
  See the cut above.
- **A numbered maturity scale.** Useful for analysis, but publishing one invites
  the ladder-climbing the triggers exist to replace.
