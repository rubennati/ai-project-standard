# Release

Two streams from one branch: the standard is tagged, the website ships on merge.
The process is `docs/release-process.md`; this file is the operational summary.

- **Semantic versioning against the adopter-facing surface** — what someone
  copied. Reorganising this repository's own instance is a PATCH; renaming a
  blueprint path is not.
- The changelog is written as the change lands, never reconstructed at release
  time. `v0.2.0` shipped without a section and had to be rebuilt from commits.
- Tag `vX.Y.Z` from `main` with the checks green. `release.yml` builds the
  GitHub Release from the matching changelog section and refuses if that section
  or the `CITATION.cff` version is missing.
- **Pushing the tag is a human action.** Agents do not tag — `AGENTS.md` →
  Approval.
- A blueprint is promoted from `draft` to `stable` only once it has carried a
  real project, and the manifest records the date. Conformance rejects a
  `stable` blueprint with no verification date.
