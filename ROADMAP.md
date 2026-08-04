# Roadmap

## Near term

- Validate repository baseline in pilot projects
- Refine `.ai/` templates based on real usage
- Improve quality gate definitions and examples
- Implement the forkable-repository model in `docs/forkable-repository.md`: a
  public repository carries no operator-specific personal data in readable
  form, and a fork that clones, builds and deploys publishes placeholders
  rather than someone else's imprint.

- Write the next two blog posts, in this order: why removing names rarely
  produces anonymous data in the legal sense, and why "EU-hosted" answers a
  different question from the one people mean when they ask it. Both are
  corrections of a claim that is widely repeated, so both need a primary
  source and a check date rather than a confident tone.

## Mid term

- Restructure the repository so the standard is distinguishable from this
  project's own instance of it. Today the template files sit at the root and
  are simultaneously in active use, so a reader cannot tell which file is the
  convention and which is merely how this repository happens to be configured.
  Move the website into a self-contained `site/`, and give the blueprints their
  own tree — templates, standard examples, prompts and settings — as material
  that is read from rather than lived in.
- Grow that tree beyond the current repository standard: open source with AI,
  open source with AI for a team, LLM wiki, MCP servers and interfaces, and
  the settings and prompts that go with each. Add bootstrap scripts so starting
  from a blueprint is a command rather than a copy-and-adjust exercise.
- Add domain-specific extensions for different project types
- Publish versioned guidance for adoption and migration

## Long term

- Maintain a stable collaboration standard across human and AI tooling changes
