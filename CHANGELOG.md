# Changelog

All notable changes to this project should be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added — Open source as its own area on the site

- `/open-source` and `/de/open-source`, three articles in both languages, built from the verified research. No AI in the section: it covers open source on its own terms.
- *When is a project open source?* — the OSI definition (version 1.9, 22 March 2007), why a non-commercial clause fails criterion 6, and the caveat most write-ups miss: GitHub's Terms of Service permit viewing and forking a public repository with no licence at all.
- *Which licence, and what does it commit you to?* — permissive, file-level copyleft, strong copyleft. The "GPL is the most used licence" claim is replaced by the two available measurements and the limits their own authors state.
- *Who owns code written at work?* — § 40b Austrian and § 69b German Copyright Act give the employer rights of use, not authorship; US work-for-hire makes the employer the author. The distinction decides who may relicense.
### Added — The first blueprint

- `blueprints/open-source/` — governance, contribution and CI files for a public repository, as `files/` plus a manifest and a README. No AI files, no application code, and no licence chosen for the adopter: the payload ships without a `LICENSE` and its CI fails until one exists, because that choice decides whether the project is open source at all.
- Everything under `blueprints/` is MIT-0, declared by `blueprints/LICENSE`. A template file that obliges an adopter to carry someone else's copyright notice into their own `CONTRIBUTING.md` is friction with no upside. The repository stays MIT, site texts stay CC BY 4.0.
- Each payload file opens with a line naming it as payload. In a code search or a blob view the path is invisible, which is where a template and a live file get confused.

### Added — The blueprint contract, before the first blueprint

- `docs/blueprints.md` — a blueprint is material you copy, not material you read. The shape (`README.md`, `blueprint.yml`, `files/`), how one is taken, how one is added, and the rule that a blueprint this repository does not itself run is a proposal and says so.
- `blueprints/README.md` — the catalogue, deliberately empty. The contract is written first so the first blueprint conforms to a rule instead of becoming it.

### Added — A queue for unverified material

- `research/` — where material waits while it is being verified. Not published, not normative, and it empties: a file whose content has shipped is deleted. The first area holds two documents on open-source practice, translated from German, with a `STATUS.md` recording six known problems and where each block of content is meant to go.
- The repository is English-only, stated in `docs/language-style.md` and `AGENTS.md`. The website's translated pages are the single exception: English is its primary language and the source of every claim.

## [0.3.0] - 2026-08-09

### Added — Release process and branch model written down

- `docs/release-process.md` — a versioned standard and a continuously deployed website ship from one branch. What a tag covers, the release checklist, what stays manual.
- `docs/git-workflow.md` — stacked topic branches (slice PRs target the topic branch, which reaches `main` once), and what a merge to `main` publishes.
- `.github/workflows/release.yml` — a `vX.Y.Z` tag publishes the GitHub Release from the matching changelog section; fails if that section is missing or `CITATION.cff` disagrees. `v0.2.0` shipped without one.
- `CITATION.cff` carries `version` and `date-released`. A citable repository was publishing citations with no version in them.

### Fixed — CI never built the site

- `ci.yml` gained `site-build`: `npm ci`, `astro check`, `astro build` on every pull request, no deploy. A broken build used to be green on the PR and fail only in the deploy after the merge — how the Astro 7 breakage reached `main` (undone in PR #75).
- `rel="author"` on a `<span>` in both blog posts. `rel` is only valid on `link`, `a`, `area` and `form`, and it was the one thing failing `astro check`, now a gate. The author is already in the Article JSON-LD.

### Added — The blog, with an author, dates and a feed

- First post at `/blog/before-you-press-enter` (English and German). It opens with a measurement made for it rather than a claim taken from documentation: eleven characters typed into a search field, Enter never pressed, and the network log showing `GET /ac/?q=wetter+wien` → 200. Setup, request and date are stated so anyone can repeat it in about a minute.
- Blog index per locale with a visible byline, the publication date and the review date; RSS 2.0 at `/blog/rss.xml` and `/de/blog/rss.xml` with autodiscovery in the head.
- `datePublished` is now editorial and set by hand; `dateModified` keeps coming from the git lookup that feeds the sitemap, so the two can never disagree.
- Figures are described as data (`ArticleFigure`) and rendered as markup rather than images, so they stay real text for search and assistive technology, reflow at any width, and never carry state by colour alone.
- `docs/language-style.md` — the writing rules for both languages, with the terminology table.
- `site/scripts/check-language.mjs` — CI gate on "Werkzeug" used for software, formal address outside the legal pages, and reveal framing in headings.

### Fixed — Vendor claims re-read at the source

- The 30-day OpenAI retention figure covers abuse-monitoring logs, not everything the API touches. Application state — stored responses, files, vector stores, conversation objects — is kept until deleted, and objects never deleted are retained indefinitely.
- Anthropic retention has carve-outs the training switch does not reach: flagged inputs and outputs up to two years, classification scores up to seven, plus legal and dispute retention.
- ChatGPT Team was renamed ChatGPT Business in August 2025.
- Art. 20 GDPR was listed flatly among the rights in this site's own privacy policy while the processing described rests on Art. 6(1)(f). Portability requires consent or contract, so it does not apply.
- An NDA does not have a model as its recipient; the disclosure runs to the company operating the service.
- An account does not decide whether use is private or commercial — it decides which contract applies.

### Changed — Claims bounded, method tightened

- "A pseudonymised extract is usually enough", "a local model will not match the hosted ones", "the material never leaves your control" and the specialist-tool market claim were all stated more absolutely than the evidence carries.
- Evidence levels: `fact` now separates a vendor describing its own terms from an independent verification; `law` covers restating a norm only, and applying it to a case is `assessment`. The source ranking is written down rather than implied.
- Self-diminishing and reveal framing removed from headings and positioning copy.

### Changed — German rewritten in German

- "Werkzeug" replaced by "Tool" for software throughout (Duden lists it as the established computing term); the genuine compounds stay.
- One article moved off "Sie"; the site now addresses the reader as "du" everywhere except the legal pages.
- Pages renamed after the question they answer — "Wieder herausbekommen" became "Chats und Daten löschen: Was entfernt wird und was bleibt", "Trainiert das Tool mit dem, was du eingibst?" became "Werden deine Eingaben für das Modelltraining verwendet?", and so on, with every link label updated.
- All 74 glossary terms now carry German, and the localisation helper reports the language it actually returned instead of declaring `de` over English prose.

### Changed — Positioning refinements (stacked on the refresh)

Self-critical follow-up to the positioning refresh — four honest corrections.

- **Hero subtitle** rewritten from a three-number taxonomy ("Four pillars, three profiles, five adoption paths. Clone the template, browse the playbook.") to a value-first phrasing: "Curated conventions across four pillars. Clone the whole template, adopt by profile, or pick the pieces that fit." The numbers still appear, but in the sections below where they get explained.
- **Pillar 3 renamed** from "Software engineering" to "Engineering operations" everywhere (`README.md`, `docs/standard.md`, `site/src/pages/index.astro`, JSON-LD). Parallel to "Open-source operations" (Pillar 2), and honest: we ship operations (CI, dependency, supply-chain, security workflows), not engineering depth.
- **Adoption paths collapsed** from five to four. Path 1 ("Greenfield AI-native") and Path 5 ("AI and open source from scratch") were near-duplicates; merged into a single "New project, with AI from day one". The remaining four form a clean 2×2 grid of *new vs. existing* × *with vs. without AI*.
- **"Reference implementation" → "working reference"** everywhere it referred to this repository (`docs/standard.md`, `docs/profiles.md` future-state, `site/src/pages/index.astro`, `site/src/pages/profiles.astro`). The phrase was technically aspirational (a reference implementation is a living app), where "working reference" describes what we actually are: a repository where the conventions and workflows run.

No structural changes, no file moves. Stylistic and honest.

### Changed — Positioning refresh: four pillars, five adoption paths

Removes all "what this is not" / justification wording and reframes the standard descriptively. Adopters now see what they get, not why we're allowed to call it a standard.

- `README.md` — main block rewritten. New "four pillars, three profiles, five adoption paths" framing. Old "Why this exists", "What this is / What this is not", duplicate philosophy paragraphs removed. Repository-structure section condensed; `.ai/` framed as operational state rather than documentation.
- `docs/standard.md` — restructured around the new framing. New sections: Four pillars, Three adoption profiles, Five adoption paths, Two-layer architecture (with explicit "the repository serves as the reference implementation"). Old "What the standard is / is not" sections deleted; "Out of scope" renamed to "Boundaries" and kept as a neutral inventory item.
- `site/src/pages/index.astro` — full home-page rewrite. Hero: "A starting baseline for open-source projects that use AI." Four-pillar grid, three-profile grid, five-path list, two-layer architecture statement.
- `site/src/pages/about.astro` — descriptive rewrite without justification framing.

No file moves, no API or path changes. The new framing is additive and stylistic; profile lists in `docs/profiles.md` are untouched.

### Changed — Pin GitHub Actions to commit SHAs

- `.github/workflows/*.yml` — every third-party and `actions/*` reference is now pinned to a full commit SHA with a `# vN` trailing comment for readability. Tag-based references (`@v4`) are mutable and have been compromised in the past; SHA pinning closes that vector. Dependabot's `github-actions` ecosystem (added separately) will keep these SHAs current. Closes the OpenSSF Scorecard "Pinned-Dependencies" gap (1/10 → expected ~8/10 on the next scan).

### Added — Dependabot version updates

- `.github/dependabot.yml` — weekly version updates for the `/site` npm ecosystem and the repo-wide `github-actions` ecosystem. Minor and patch bumps are grouped into one PR per ecosystem per week; majors stay un-grouped so each can be reviewed deliberately. Pairs with the already-on Dependabot *security* updates. Closes the Scorecard "Dependency-Update-Tool" gap.

### Added — README badges

- `README.md` — new live website-status badge (`shields.io/website`) linking to <https://ai-standard.rubennati.at>. Sits alongside the existing License / CI / Pages / OpenSSF Scorecard badges.

### Fixed — Footer contrast (Lighthouse a11y 91 → ~100)

- `site/src/layouts/Base.astro` — footer no longer applies blanket `opacity-70` to the container. The "MIT licensed" label uses an explicit zinc-700 (light) / zinc-300 (dark) so it stays clearly readable, and the "Source on GitHub" link renders at the full cobalt accent. Resolves the Lighthouse accessibility warning on the home page.

### Security — Astro CVE-2026-41067

- `site/package.json` — upgraded `astro` from `^5.5.0` to `^6.1.6` to patch [CVE-2026-41067](https://github.com/advisories/GHSA-j687-52p2-xcff) (Moderate, CVSS 6.1) — XSS via incomplete `</script>` tag sanitisation in `define:vars`. Installed runtime version: 6.3.1.

### Changed — Astro 6 toolchain alignment

- `site/package.json` — `@astrojs/mdx` bumped to `^5.0.0` to match Astro 6's peer requirement; `tailwindcss` and the Tailwind plugin pinned to `^4.3.0`.
- `site/postcss.config.mjs` (new) — Tailwind v4 now wires through `@tailwindcss/postcss`. Astro 6 ships Rolldown as its bundler and `@tailwindcss/vite` does not yet fully support it; the PostCSS plugin is the stable path.
- `site/astro.config.mjs` — `@tailwindcss/vite` import and `vite.plugins` block removed; Tailwind is picked up via PostCSS automatically.
- `.github/workflows/pages.yml` — `actions/setup-node` pinned to Node 22 (Astro 6 requires `>=22.12`).
- `site/README.md` — local-dev note updated for Node 22 + PostCSS Tailwind setup.

### Added — OSS standard expansion

- `SUPPORT.md` — explicit issues-vs-Discussions guidance with response-time expectations. Stops the issue tracker from becoming a support forum.
- `docs/open-source-project-standard.md` — substantially expanded. Now covers DCO vs CLA (inbound rights), governance sized to project scale, issues vs Discussions, release engineering, health metrics, trust signals, and an explicit list of practices this standard does NOT mandate (anti-cargo-cult section).
- `README.md` — short Contributing-section addition pointing at Discussions vs Issues + SUPPORT.md.
- `docs/index.md`, `docs/profiles.md` — link the new SUPPORT.md, add it to the OSS and Combined profile lists.

### Added — Security baseline

- `docs/security-baseline.md` — new minimum security-posture document covering repository-level controls (private vulnerability reporting, secret scanning, Dependabot, code scanning, branch protection), CI/CD hardening (minimum permissions, SHA pinning, OIDC), AI-specific controls (sandboxing, tool allow-listing, personal vs. team settings), and a pointer to the OWASP Top 10 for LLM Applications.
- `.github/workflows/ci.yml` — top-level `permissions: contents: read` added; jobs can broaden as needed.
- `docs/ai-tools.md` — new "Model Context Protocol (MCP)" section explaining where MCP configuration lives, the personal-vs-team-settings split, and the third-party-code mindset for MCP servers.
- `.ai/secure-development.md` — short pointer to the new public baseline, plus an explicit note about MCP/tool privilege model.
- `docs/index.md`, `docs/profiles.md` — surface `docs/security-baseline.md` in the doc index, OSS profile, AI profile, and Combined profile (CI profile-completeness check updated accordingly).

### Added — Tool extension conventions

- `docs/ai-tools.md` — new "Optional tool extensions" section documenting agreed paths for team-versioned settings (`.claude/settings.json`, `.codex/config.toml`), personal gitignored overrides (`CLAUDE.local.md`, `.claude/settings.local.json`, `AGENTS.override.md`), path-specific GitHub Copilot instructions (`.github/instructions/**/*.instructions.md` with `applyTo:` frontmatter), and the cross-tool skills directory convention (`.claude/skills/`, `.agents/skills/`, `.github/skills/`).
- No empty stub files committed by design — adopters wire extensions in when they need them.

### Added — AGENTS.md workflow upgrade

- `AGENTS.md` — new "Workflow" section codifying the Understand → Plan → Implement → Verify → Review loop. Plan-first becomes the explicit norm for non-trivial work.
- `AGENTS.md` — new "Standard quality commands" section recommending the `lint`/`test`/`build`/`typecheck` convention for adopters. Verifiable goals are the main quality lever for agents.
- `AGENTS.md` — new "Overrides and local files" section documenting `AGENTS.override.md`, path-specific Copilot instructions (`.github/instructions/`), and the team vs. personal Claude settings split.

### Added — Reputation files

- `CITATION.cff` — academic-citation metadata. GitHub renders a "Cite this repository" button automatically when this file is present.
- `.github/FUNDING.yml` — Sponsor-button stub. All options are commented out by default; uncomment what you want to expose.
- `.github/CODEOWNERS` — catch-all owner so PR reviews are auto-requested. Path-specific rules can be added as the team grows.

### Added — OpenSSF Scorecard

- `.github/workflows/scorecard.yml` — runs the OpenSSF Scorecard analysis weekly (Mondays 06:30 UTC), on push to `main`, on branch-protection rule changes, and on demand. Publishes results to the OpenSSF API and uploads SARIF to GitHub's code-scanning tab.
- `README.md` — replaced static placeholder badges with live ones: License (MIT), CI status, Pages deploy status, and OpenSSF Scorecard score.

### Added — Site SEO bundle

- `site/src/components/JsonLd.astro` — emits Organization, WebSite, and SoftwareSourceCode schemas on every page; accepts an `extra` prop for page-specific schemas (BreadcrumbList, Article, etc.).
- `site/src/components/SEO.astro` — now supports an optional `image` prop for `og:image` / `twitter:image`. Twitter card downgrades to `summary` when no image is provided so missing files don't break previews.
- `site/public/manifest.webmanifest` and `site/public/icon.svg` — PWA-style web manifest and SVG favicon (cobalt "AI" mark).
- `site/src/pages/404.astro` — branded Not Found page with Home and Docs entry points.
- `site/src/layouts/Base.astro` — emits `theme-color` (light + dark), favicon link, manifest link, and a Google Search Console verification meta tag placeholder.

### Added — PR 5 (docs reader + minimal SEO)

- `site/src/content.config.ts` — Astro 5 content collection that reads `../docs/**/*.md` directly. Single source of truth: no copies, no sync — every doc change re-renders on the next build.
- `site/src/pages/docs/[...slug].astro` and `site/src/pages/docs/index.astro` — dynamic routes for every doc plus an index/listing page with logical ordering.
- `site/src/components/SEO.astro` — minimal SEO component (title, description, canonical, OpenGraph, Twitter card). No JSON-LD in v0.2.0.
- `site/src/utils/docs.ts` — title/description/ordering helpers that work without requiring frontmatter on existing docs (parse H1, fall back to humanised slug).
- Navigation: "Docs" entry in the site header.
- In-site links from the Use-cases and Profiles pages now point at the local docs reader instead of github.com.

### Added

- `docs/standard.md` — canonical document describing the standard itself (what it is, mandatory vs optional, two-baseline philosophy, layered architecture).
- `docs/profiles.md` — three adoption profiles (OSS-only, AI-only, Combined) with explicit, machine-readable file lists. No wildcards; consumed by the future Profile-Completeness CI check.
- `docs/adoption.md` — adoption steps per profile and an Updating-from-previous-version workflow for downstream adopters.
- `CONTRIBUTING.md` — new "Versioning" section defining MAJOR/MINOR/PATCH for the standard.
- `README.md` — positioning sentence and Profiles section linking to the new docs.
- `docs/index.md` — restructured into grouped sections (the standard, OSS baseline, Human-AI Collaboration baseline) and links the new AI Tools doc.
- `docs/ai-tools.md` — multi-AI conventions document covering Claude Code, Codex/Codex CLI, GitHub Copilot, Cursor, and ChatGPT (out-of-scope) with a clear single-source-of-truth model and instructions for adding new tools.
- `.cursor/rules/00-project.mdc` — Cursor rule (modern MDC format, `alwaysApply: true`) pointing to `AGENTS.md`.
- `AGENTS.md` — new "Tool-specific pointer files" section listing the pointer files and an anti-duplication rule (pointers stay short and defer to `AGENTS.md`).
- `CLAUDE.md`, `.github/copilot-instructions.md` — restated as thin pointer files; rule duplication removed.
- `site/` — minimal Astro skeleton for the GitHub Pages knowledge layer (Astro 5, Tailwind v4). Includes a base layout and five static pages (Home, Use cases, Profiles, About, Blog stub). No content collection, no RSS, no JSON-LD — those land in later PRs by design.
- `site/public/robots.txt` and Astro sitemap integration configured.
- `.gitignore` — exclude `site/node_modules/`, `site/dist/`, `site/.astro/`.
- `.github/workflows/ci.yml` — three new jobs gating PRs to `main`: `markdown-lint`, `link-check`, and `profile-completeness`. A weekly cron (Mondays 06:00 UTC) runs the link check in strict mode.
- `.github/scripts/check-profiles.sh` — POSIX-portable bash script that parses the fenced `text` blocks in `docs/profiles.md` and verifies every listed path exists. No wildcards, no glob expansion — deterministic by design.
- `.markdownlint-cli2.jsonc` — relaxed markdownlint config tuned for a documentation-and-standards repository.
- `.lycheeignore` — exclusions for localhost previews and `mailto:` links.

### Changed

- Minor markdown formatting fixes in `README.md`, `SECURITY.md`, `AGENTS.md`, `docs/getting-started.md`, and the issue templates to satisfy the new lint rules. No content changes.
- `README.md` — new "Website" section documenting the Pages URL and the one-time maintainer setup step.

### Added — PR 6 (Pages deploy + custom domain)

- `.github/workflows/pages.yml` — builds `site/` with Node 20 LTS and Astro 5, uploads the artifact, and deploys via `actions/deploy-pages@v4`. Triggered by pushes to `main` that touch `site/`, `docs/`, or the workflow itself, plus `workflow_dispatch`. Concurrency group `pages` with `cancel-in-progress: false`.
- `site/public/CNAME` — pins the custom domain `ai-standard.rubennati.at` so each Actions-based deploy preserves it (GitHub Pages settings alone don't survive workflow deploys).
- `site/astro.config.mjs` — `site` updated to the custom domain; `base` removed (custom domain serves from root).
- `site/public/robots.txt` — sitemap URL updated to the custom domain.

## [0.2.0] - 2026-05-12

Reconstructed from the commits the `v0.2.0` tag contains. The tag was released
without a section here; this closes that gap rather than rewriting history.

### Added

- Documentation set: `docs/standard.md`, `docs/profiles.md`, `docs/adoption.md`.
- Multi-AI baseline: cross-vendor `AGENTS.md` convention with tool-specific pointer files.
- Minimal Astro site under `site/`, deployed to GitHub Pages and pinned to the custom domain `ai-standard.rubennati.at`.
- Docs reader on the site, reading `docs/**/*.md` directly, plus minimal SEO and navigation.
- Reputation files: `CITATION.cff`, `FUNDING.yml`, `CODEOWNERS`.

### Changed

- CI hardened with markdown lint, link check, and a profile completeness check.
- Accent colour deepened for stronger contrast in light and dark mode, fixing invisible button text.

## [0.1.0] - 2026-05-12

First public release of the repository standard. Intended as a starting point for pilot usage; expect iteration based on real-world feedback.

### Added

- `.ai/` workspace with operational state, routing, tasks, decisions, risks, errors, quality gates, secure-development notes, and domain guides.
- Root governance documents: `README.md`, `AGENTS.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `ROADMAP.md`, MIT `LICENSE`.
- Documentation set in `docs/`: open-source project standard, getting started, git workflow, branch protection, `.ai/` workspace layer, practical AI collaboration.
- Baseline `.gitignore` (including Claude Code local settings) and GitHub configuration.
- Branch protection on `main` via a Repository Ruleset (PR required, conversation resolution required, force pushes and branch deletion blocked).
