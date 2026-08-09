<!-- blueprint payload: ai-assisted-development — edit upstream, then delete -->
# Release

- Semantic versioning against the surface *users* depend on, not the internals.
- The changelog is written as the change lands, not reconstructed at release.
- Tag from the default branch only, with the checks green.
- Release notes come from the changelog. Writing them twice guarantees they
  disagree.
- A release that cannot be reproduced from the tag is not a release.
