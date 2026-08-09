<!-- blueprint payload: ai-assisted-development — edit upstream, then delete -->
# Architecture

- Boundaries before abstractions. Two things that change for different reasons
  belong apart, whatever the code looks like today.
- Record structural decisions in `../decisions.md` with what was rejected. The
  rejected option is what a future reader needs.
- Prefer the reversible option. Where a decision is hard to undo, say so and get
  it confirmed before building on it.
- Do not generalise on the second occurrence. Wait for the third; the first two
  rarely show the real axis of variation.
