# Status — open source

Two documents, received 2026-08-09, translated from German. Neither is verified.

- [foundations.md](./foundations.md) — definition, licences, structure,
  governance, project phases, checklist. **No citations at all.**
- [engineering-and-supply-chain.md](./engineering-and-supply-chain.md) —
  engineering, testing, DevSecOps, Git models, supply chain, the layer model.
  17 sources, none yet checked at the primary source.

## Known problems

Found while reading. Recorded here rather than corrected in the files.

1. **"GPL … roughly 60% adoption"** — not defensible. Permissive licences have
   dominated for years and MIT is the most common licence on GitHub. Needs a
   source and a check date, or it goes.
2. **Copyright in employment** — the original cited Swiss employee-invention
   law. Employee inventions are patent law, not copyright, and Switzerland is
   the wrong jurisdiction for this project. For software written in employment:
   § 40b Austrian Copyright Act, § 69b German Copyright Act. Removed from the
   translation only in the sense that no jurisdiction is now named; the claim
   itself is unchanged and still unverified.
3. **"Closing a project down permanently is practically impossible"** — true for
   already-published versions, not going forward. Relicensing future versions
   happens (Terraform, Redis). Needs the qualifier or it is wrong.
4. **Two version numbers to verify** — OpenSSF Baseline `v2026.02.19` and SLSA
   `v1.2`. Both are load-bearing if either is cited.
5. **"Open Source Project Template on GitHub"** — no link, not identifiable.
   Either identify it or drop the reference.
6. **Every source in the second document was collected through an assistant**
   (the URLs carried `utm_source=chatgpt.com`, stripped here). Not a defect, but
   none of them has been opened at the primary source yet.

## Where the content is meant to go

Depth goes to the website; the repository keeps the short version.

| Block | Destination | State |
|---|---|---|
| Open-source definition, OSI criteria, licence types, no-licence consequence | Website — a new open-source area | Missing everywhere. Needs sources first. |
| Copyright, contributor rights, CLA/DCO | Website; the rule already exists | `docs/open-source-project-standard.md` covers DCO vs CLA more fully than the material. |
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
