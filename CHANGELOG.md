# Changelog

All notable changes to this project should be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

## [0.1.0] - 2026-05-12

First public release of the repository standard. Intended as a starting point for pilot usage; expect iteration based on real-world feedback.

### Added

- `.ai/` workspace with operational state, routing, tasks, decisions, risks, errors, quality gates, secure-development notes, and domain guides.
- Root governance documents: `README.md`, `AGENTS.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `ROADMAP.md`, MIT `LICENSE`.
- Documentation set in `docs/`: open-source project standard, getting started, git workflow, branch protection, `.ai/` workspace layer, practical AI collaboration.
- Baseline `.gitignore` (including Claude Code local settings) and GitHub configuration.
- Branch protection on `main` via a Repository Ruleset (PR required, conversation resolution required, force pushes and branch deletion blocked).
