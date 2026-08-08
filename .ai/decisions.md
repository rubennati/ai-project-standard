# Decisions

## 2026-05-09 - Repository name

Decision: The repository name is `AI Project Standard`.

## 2026-05-09 - Language policy

Decision: Project documentation and collaboration content are English only.

## 2026-05-09 - License

Decision: The project uses the MIT License.

## 2026-05-09 - AI workspace location

Decision: AI operational context is stored under `.ai/`.

## 2026-05-09 - Default Git workflow

Decision: Use GitHub Flow / trunk-based workflow with short-lived branches.

## 2026-05-09 - No default GitFlow

Decision: GitFlow is not the default workflow for this repository.

## 2026-05-09 - Separate AI workspace from project docs

Decision: Keep AI operational state in `.ai/` and keep human-facing documentation in `docs/` and root files.

Rationale: Separation improves maintainability, review clarity, and continuity across tools.

## 2026-05-10 - Human approval model

Decision: "Human approval" is defined as a human merging the pull request. Agents may commit and push to non-`main` branches; agents must not merge to `main`, force-push, or modify branch protection. The full rule lives in the "Approval" section of `AGENTS.md`; `CLAUDE.md` and `.github/copilot-instructions.md` point at it.

Rationale: The previous "do not commit, push, or merge without explicit human approval" rule was repeated in four files but never operationalised, leaving agents unable to tell what was actually permitted. Defining it once in `AGENTS.md` removes ambiguity and prevents drift across the AI-instruction surface.

## 2026-06-07 - Site localization foundation

Decision: The Astro site uses English as the canonical locale with parallel German routes under `/de/`. Localization is implemented with Astro i18n configuration, centralized UI strings, explicit localized route files for the current public pages, and term-level fallback from German to English where translations are missing.

Rationale: This keeps the first multilingual foundation small, reviewable, and SEO-safe while avoiding a one-off glossary-only translation layer. It also leaves room to scale into broader site localization later without changing the public English route structure.

## 2026-08-03 - Site content licence

Decision: Texts written for the website are licensed CC BY 4.0. The repository,
including everything under `docs/`, stays MIT. CC BY-NC was rejected: the site
renders `docs/*.md` directly, and those files are already MIT, which
irrevocably permits commercial use — an NC clause would have contradicted the
repository on the same text. NC is also undefined at the edges, and a standard
depends on being adopted, companies included.

## 2026-08-03 - Site brand name

Decision: The website is branded "AI Standard" everywhere, metadata included.
The repository keeps the name `ai-project-standard`. A visible brand that
disagrees with `og:site_name` would hand search engines the other name.

## 2026-08-04 - Vendor documentation is a source, not a verification

Decision: The `fact` evidence level covers "the vendor states X" and never "X is
technically the case". Where a source is a vendor describing itself, the text
says so.

Rationale: A vendor is authoritative for what it has published about itself and
silent on everything beyond that — its documentation states terms, it does not
audit its systems. Without the distinction, a FACT badge over "not used for
training by default" claims independent verification the site never performed.

## 2026-08-04 - Restating a norm and applying it are different acts

Decision: The `law` level covers restating a named norm or official guidance,
with jurisdiction and check date. The moment a sentence reaches a conclusion
about someone's circumstances it is `assessment`, whoever wrote it.

Rationale: This boundary is where the site's worst error came from — a client
withdrawing consent was presented as an Art. 17 GDPR erasure right, which
silently assumed the material was personal data, the client was the data
subject, a listed ground applied and no Art. 17(3) exception did. Restating a
norm needs care; applying it needs competence the site does not claim.

## 2026-08-04 - Source ranking

Decision: Sources are ranked, not merely required to be primary: consolidated
legal text or Official Journal, then official guidance from the Commission or a
supervisory authority, then a vendor's published terms and documentation, then
technical primary documentation, then anything written about them.

Rationale: "Use primary sources" was already the rule and still let an EU
regulation be described as a provisional agreement, because a Commission FAQ
was treated as primary. It is primary for what the Commission says and outranked
by the Official Journal for what the law is.

## 2026-08-04 - German is written, not translated

Decision: German pages carry the same claims, sources and check dates as the
English ones and are written in German. Software is a "Tool" (Duden: the
established computing term), never a "Werkzeug". The reader is addressed as
"du" everywhere except the privacy policy and legal notice.

Rationale: A review found the German built out of English sentence logic —
grammatically possible, but not what a German-speaking author would have
written. The cause is structural: both languages sit in the same module, which
invites line-by-line mirroring. `docs/language-style.md` holds the rules and
`site/scripts/check-language.mjs` enforces the mechanical part in CI. Splitting
the modules per locale is the outstanding structural fix.

## 2026-08-04 - No reveal framing in headings

Decision: "wirklich", "tatsächlich", "actually", "really" and "genuinely" do not
appear in titles, headings, labels or descriptions. In running prose they are
allowed where they draw a real distinction.

Rationale: A heading promising what "really" happens claims privileged access to
a hidden truth and asks to be believed rather than checked — which argues
against the evidence labels printed next to it. There is a reliable test:
deleting the word makes the sentence more concrete, because the word was doing
the work of not naming the object.

## 2026-08-04 - Diagrams are markup, not images

Decision: Figures are described as data (`ArticleFigure`) and rendered as
markup. No diagram is shipped as an image, and no state is carried by colour
alone.

Rationale: Markup stays real text for search and assistive technology, reflows
at any width, inherits the page's colours in both themes, and needs no asset
pipeline. WCAG 1.4.1 rules out colour-only encoding regardless.

## 2026-08-04 - Editorial publication dates

Decision: A blog post's `datePublished` is set by hand in its module.
`dateModified` continues to come from the git lookup that feeds the sitemap.

Rationale: Publication is an editorial fact and a commit date is not — fixing a
typo two weeks later must not make a post look new. Keeping `dateModified` on
git means the sitemap and the structured data can never disagree.

## 2026-08-09 - Two release streams from one branch

Decision: A SemVer tag versions the standard only; the website has no version
and goes live on merge to `main`. Site content is recorded in `CHANGELOG.md`
but does not justify a release. Process in `docs/release-process.md`.

Rationale: `docs/**/*.md` is both part of the standard and rendered as web
pages, so the surfaces cannot be split across branches without duplicating the
file. Separate the clocks, not the files.

## 2026-08-09 - No long-lived website branch

Decision: No `site` or `gh-pages` branch. The Pages deploy source stays the
Actions build artifact.

Rationale: `docs/` is website content, so a site branch would separate the
`/docs/` pages from the files they render. The deploy is already gated on `main`
plus a path filter, so a branch adds no gating — and one that is never merged is
a second repository.

## 2026-08-09 - Stacked topic branches for work that publishes unfinished

Decision: Work too large for one pull request but incoherent until finished uses
one topic branch; slice pull requests target that branch, which merges to `main`
once.

Rationale: `feature/site-content-architecture` was merged into `main` five times
mid-repositioning, publishing every intermediate state. Changing the base branch
keeps the review granularity and drops to one publication.

## 2026-08-09 - CI builds the site, CI never deploys it

Decision: `ci.yml` runs `astro check` and `astro build` on every pull request and
discards the output; deployment stays in `pages.yml`, gated on `main`.

Rationale: Nothing verified the build before the merge, so a broken build was
green on the pull request and failed afterwards in the deploy — how the Astro 7
breakage reached `main`. Build and deploy are separate questions.

## 2026-08-09 - English everywhere, translations only on the site

Decision: The repository is English-only — documentation, comments, commits,
`.ai/`, research notes. The website is the single exception: English is its
primary language and the source of every claim, and other languages are
translations of it. Material arriving in another language is translated on the
way in and marked as a translation. Refines the 2026-05-09 language policy,
which predated the site and said nothing about translations.

Rationale: One language in the tree keeps every file reviewable by every
contributor and every tool. The site has a different audience and a reach
argument for translation; the repository has neither.
