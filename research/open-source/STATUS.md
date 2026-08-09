# Status — open source

Two documents, received 2026-08-09, translated from German. Neither is verified.

- [foundations.md](./foundations.md) — definition, licences, structure,
  governance, project phases, checklist. Arrived with no citations at all.
  **Sourced on 2026-08-09 — see [SOURCES.md](./SOURCES.md).**
- [engineering-and-supply-chain.md](./engineering-and-supply-chain.md) —
  engineering, testing, DevSecOps, Git models, supply chain, the layer model.
  17 sources, none yet checked at the primary source.

## Known problems

Found while reading, then checked. Recorded here rather than corrected in the
files. Full evidence in [SOURCES.md](./SOURCES.md).

1. **"GPL … roughly 60% adoption"** — *refuted.* Permissive licences have been
   the majority since somewhere between 2014 and 2017; RedMonk puts them at 73%
   for 2025. Both available measurements come with limits the authors state
   themselves, so the direction holds and a precise figure does not.
2. **Copyright in employment** — *refuted for Austria and Germany.* The employer
   acquires a right of use (§ 40b UrhG) or the economic rights (§ 69b UrhG), not
   the copyright, which cannot be transferred between living persons. The claim
   is true in the United States under 17 U.S.C. § 201(b). The original also
   cited Swiss employee-invention law, which is patent law.
3. **"Closing a project down permanently is practically impossible"** — *half
   right.* Published versions stay under their licence; future versions can be
   relicensed. Terraform up to 1.5.x stayed MPL, 1.6 onwards is BUSL.
4. **"Open Source Project Template on GitHub"** — *identified* as
   `diggsweden/open-source-project-template`, which ships exactly the listed
   files. At least one other repository shares the name.
5. **"No licence means nobody may use it"** — *needs a caveat.* True for
   copyright, incomplete on GitHub: the Terms of Service grant every user the
   right to view and fork a public repository regardless of licence.
6. **Two version numbers still to verify** — OpenSSF Baseline `v2026.02.19` and
   SLSA `v1.2`, both in the second document. Load-bearing if either is cited.
7. **Every source in the second document was collected through an assistant**
   (the URLs carried `utm_source=chatgpt.com`, stripped here). Not a defect, but
   none of them has been opened at the primary source yet.

## Where the content is meant to go

Depth goes to the website; the repository keeps the short version.

| Block | Destination | State |
|---|---|---|
| Open-source definition, OSI criteria, no-licence consequence | `/open-source/what-makes-it-open-source` | **Published 2026-08-09**, with the GitHub Terms of Service caveat the material lacked. |
| Licence types, adoption figures | `/open-source/choosing-a-licence` | **Published 2026-08-09.** The 60% claim is replaced by the measurements and their stated limits. |
| Copyright in employment | `/open-source/code-written-at-work` | **Published 2026-08-09** as AT / DE / US, which is not what the material said. |
| Contributor rights, CLA/DCO | Website; the rule already exists | `docs/open-source-project-standard.md` covers DCO vs CLA more fully than the material. A short version is in the employment article's closing section. |
| Repository structure, standard files, checklist | Blueprint payload | `docs/profiles.md` has file lists; `src`/`tests` structure and the ADR directory are new. |
| `DEVELOPMENT.md` / `TESTING.md` / `ARCHITECTURE.md` split | Blueprint payload | New. Clear purpose per file. |
| Governance models, project phases | Website | Sizing table already in `docs/open-source-project-standard.md`; the phases and the terms are new. |
| Five dimensions, four questions, the three-layer model | Website — the spine | Missing entirely. The strongest part of the material. |
| Testing approaches and test strategy | Website; a short version in the blueprint | Missing. `.ai/domains/testing.md` is three lines. |
| SAST / DAST / SCA / secret scanning as distinct classes | Website; `docs/security-baseline.md` gets the short form | Partly covered — the baseline has repository controls and CI hardening, not the classes. |
| Reference CI pipeline | Website | Missing. |
| Branch is not environment | `docs/git-workflow.md` — one section | Missing, and the single most useful item in the material. |
| Git models: GitHub Flow, trunk-based, Git Flow, release branches | Website; the decision is already recorded | `.ai/decisions.md` has "no default GitFlow"; the comparison and the backporting case are new. |
| Code-quality list, coverage as a signal | Website | Missing. The coverage framing is precise and worth keeping. |
| SBOM, SLSA, attestations, Scorecard, Best Practices Badge | `docs/security-baseline.md` already lists them as later steps | Needs substance, not another list. |
| OpenSSF Baseline as an external yardstick | Website + `docs/` | New and important: an external norm with three maturity levels, rather than inventing one. |
| "Blueprint 2026" in four classes | Undecided | Collides with the three existing profiles. Maintainer decision. |

## Open decisions

1. **Seven taxonomies, one spine.** Four pillars, three profiles, four adoption
   paths, five dimensions, three layers, four questions, four blueprint classes.
   Proposal: the three layers plus AI as a cross-cutting band become the spine;
   the four pillars go.
2. **Four blueprint classes vs three profiles.** Maturity versus composition.
   One wins, or it becomes a deliberate grid.
3. **What the repository demonstrates.** The expanded tree with `src/` and
   `tests/unit|integration|contract|e2e` is a code project's structure. This
   repository has no code, so it cannot demonstrate that blueprint. Either it
   gains a real example project, or the claim gets bounded explicitly.

## Not carried forward

Recorded so the decision is visible rather than silent.

- **`res/` for static assets** — superseded convention; `assets/` is current.
- **`.mailmap`** — useful but niche. Optional in a blueprint, not in the norm.
- **The example scoring** (`Open source 5/5, Documentation 2/5, …`) — good as an
  illustration, unusable as an assessment until the criteria per axis are
  defined. Defining them is substantial work and needs a decision first.
- **"Benevolent dictator" as a term** — the concept is covered by the governance
  sizing table; the word is not. Suggested as a glossary entry, not a norm.
