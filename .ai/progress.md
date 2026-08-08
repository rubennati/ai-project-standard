# Progress Log

> If this file conflicts with current git state (branch, PRs, commits), trust git.


Use this file for milestone-level updates only.

## 2026-05-09

- Repository baseline created (`docs/`, `.github/`, root governance files, `.ai/` workspace)
- Workflow and branch protection guidance added
- Public draft polish applied (README structure, MIT license, security contact placeholder)

## 2026-05-10

- Pre-release governance refinements: defined "human approval" in `AGENTS.md`, filled SECURITY contact via GitHub Security Advisories, added baseline `.gitignore`, split branch-protection guidance into minimum vs scaling-up, added `.ai/` staleness contract (PR #3).
- Added `docs/practical-ai-collaboration.md` covering solo-maintainer and small-team AI workflows; linked from `docs/index.md` (PR #4).

## 2026-05-12

- Verified branch protection on `main` is active via Repository Ruleset (PR required, conversation resolution required, force pushes and deletion blocked); removed the corresponding task.
- Prepared `v0.1.0` release: filled CHANGELOG with first-release entry, moved the practical-AI-guide refinement task to backlog (pending pilot-usage feedback), and updated state to reflect release phase.

## 2026-06-07

- Site localization foundation: Astro i18n config, centralized UI strings, parallel `/de/` routes, layout-level language switching, and multilingual SEO alternates.

## 2026-08-03

Infrastructure, and the point where the site became something other than
repository documentation.

- Sitemap `<lastmod>` derived from the commit date of each page's source file rather than the build clock. A shallow clone omits the date instead of faking one (PR #76).
- Build moved to Astro 7 with Tailwind through its Vite plugin; the PostCSS route breaks under Vite 8. Dependency vulnerabilities cleared to zero (PR #75).
- Brand settled as "AI Standard" including metadata. Licence split settled: repository and `docs/` MIT, site texts CC BY 4.0.
- The site stopped documenting the repository and became a knowledge layer on secure and lawful AI use, carried by four sections — Start, Data flows, Law, Setting up safely.
- Evidence levels introduced (fact, measured, law, assessment, advice), each with a condition it has to meet before publication and a check date on factual claims.
- Lighthouse 100 across performance, accessibility, best practices, SEO and agentic browsing, on six page types in both locales.

## 2026-08-04

Three external reviews in one day. Everything acted on was verified at the
primary source first; where a review was wrong, nothing moved.

- **The blog exists** (PR #79). First post, `/blog/before-you-press-enter`, opens with a measurement made for it: eleven characters typed into a search field, Enter never pressed, and the network log showing the phrase had already gone. Diagrams are built from markup rather than images, so they stay real text and reflow at any width. About rewritten around the method rather than biography.
- **The blog earns the word** (PR #80): visible byline, editorial `datePublished` kept separate from the git-derived `dateModified`, and an RSS feed per locale.
- **Factual corrections** (PR #80), each re-read at the source: the 30-day OpenAI figure covers abuse-monitoring logs and not application state, which is kept until deleted; Anthropic retention has trust-and-safety carve-outs of two and seven years that the training switch does not reach; ChatGPT Team is now ChatGPT Business; and Art. 20 GDPR was listed flatly in our own privacy policy while the processing described rests on Art. 6(1)(f).
- **Overstated claims bounded** (PR #80): pseudonymised extracts, the local-model forecast, "the material never leaves your control", the specialist-tool market claim, and blanket credential rotation.
- **Evidence method tightened** (PR #80): `fact` now separates a vendor describing its own terms from independent verification; `law` covers restating a norm only, and applying it to a case is `assessment`. The source ranking is written down rather than implied.
- **German rewritten in German** (PR #80). A review found it had been built out of English sentence logic. "Werkzeug" replaced by "Tool" (62 occurrences), one article moved off "Sie", pages renamed after the question they answer, and three claims corrected that were wrong rather than merely awkward — the NDA recipient, what an account decides, and how much an employee decides.
- **Reveal framing removed** (PR #81). "Was wirklich passiert" argues against the method printed next to it.
- **Guard added**: `site/scripts/check-language.mjs` fails CI on "Werkzeug" for software, formal address outside the legal pages, and reveal framing in headings. Verified to fail on a planted violation. Rules in `docs/language-style.md`.
- Glossary completed: all 74 terms carry German, and the fallback reports the language it actually returned instead of declaring `de` over English prose.

## 2026-08-09

Release and branch model, after five merges of an unfinished branch had each
published an intermediate state.

- **Two clocks, one branch** (PR #82): the standard is tagged, the site ships on merge. `docs/release-process.md` states what a tag covers; `docs/git-workflow.md` gains stacked topic branches and what a merge to `main` publishes. No long-lived site branch — `docs/` *is* website content, so splitting it would separate the `/docs/` pages from the files they render.
- **CI built the site nowhere** (PR #82). A broken build was green on the PR and failed afterwards in the deploy, which is how the Astro 7 breakage reached `main`. `site-build` now runs `astro check` and `astro build` on every pull request without deploying. Its two pre-existing `astro check` errors were fixed: `rel` is not valid on a `<span>`.
- **`v0.3.0` released.** `[Unreleased]` had been accumulating since 12 May. `release.yml` builds the GitHub Release from the changelog section and refuses if the section or the matching `CITATION.cff` version is missing — `v0.2.0` shipped without either.
- Merged branches deleted, and `state.md` cut back to current facts; the running commentary it had accumulated belongs here.
