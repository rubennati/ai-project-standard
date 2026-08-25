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

## 2026-08-10

- Product architecture settled ahead of implementation: `docs/website-product-brief.md`, a route-by-route `site/CONTENT_AUDIT.md`, the stable-route-first `site/INFORMATION_ARCHITECTURE.md`, and `site/THEME_DIRECTION.md` rejecting a third-party theme in favour of a native shell with Shell, Wide and Reading rails.
- Page primitives added: five page jobs and six bilingual components, with fact and measured evidence failing the build without a source and a check date.

## 2026-08-19 – 2026-08-21

Task 7, the migration of the public site onto the approved product structure.
All six child issues of #134 closed; #134 itself stays open (see below).

- **Possibility** (PR #142). `/use-cases` replaced its blueprint catalogue with six outcomes; `/de/use-cases` and the `useCases` route contract added.
- **Collaboration** (PR #144). `/start` became a choice between six ways of working — chat, assistant, workspace assistant, tool-using system, agent, automated operation — as an equal-weight card block rather than a ladder. The eight identical undated assessment labels on `/start/what-it-is-doing` became one page-level statement.
- **Navigation** (PR #146). The header carries exactly four reader journeys. Law, Blog and About moved to the footer, which already held them; Reference was rejected as a fifth destination. `/use-cases` had had no global link at all.
- **Reach** (PR #147). `/data-flows` became what a system can read, keep, change and set off, with the four system layers as explanatory depth. The six articles kept their URLs, sources and check dates.
- **Control** (PR #148). `/secure-setup` became the six-step lifecycle, and two new routes closed the site's largest content gaps: `/secure-setup/checking-the-result` and `/secure-setup/keeping-a-record` — questions 8 and 9 of the product brief, previously owned by no page.
- **Homepage** (PR #149). Rebuilt around the four journeys. See the outcome below.
- **Glossary** (PR #150). The index stopped saying that guides and project documentation "will stay separate" — the two-layer identity `docs/purpose.md` retired.

**Outcome carried forward:** the homepage shipped by #149 was structurally valid
and editorially rejected — it explained the site's own information architecture
instead of the reader benefit. Reset on 24 August, below.

## 2026-08-24

- **The homepage says what AI Standard is** (PR #154). The page names AI
  Standard as an independent site for using AI at work, says what a reader gets
  from it, and offers the two entries into the product. The four-question card
  grid is gone: three direct reader questions replace it and lead to an answer
  rather than to another category — `Darf ich KI im Job verwenden?`,
  `Wie weit trägt Vibe Coding?`, `Wie verbinde ich KI mit Tools und Daten?`
- Security-desk framing, the stance paragraph, the section teaching how to read
  the site, the repository framing with its `/docs` link and the glossary aside
  are removed. Open development and source-and-check-date transparency survive
  as one compact closing block. No public URL changed.
- The homepage becomes the editorial reference for the rest of the site: public
  copy starts from a task or question a reader recognises, and the internal
  product model structures the answer without becoming its language.

- **The whole public site was reviewed against that reference.** Every public
  page family in both locales, read-only, with the built site and rendered
  measurements at 375px and 1280px as evidence. Header membership and labels
  held under the test and were not reopened. Six decisions came out of it
  (`decisions.md`, 2026-08-24) and the work it implies is seven slices in
  `tasks.md`.

  What the review established, beyond the individual pages: the site states its
  own identity on six surfaces and two of them still carry framings the homepage
  reset removed; `/docs/**` publishes maintainer documentation automatically
  because the content collection globs the whole folder, and every internal link
  inside those pages resolves to a 404; three public families have no inbound
  link from any navigation; the same facts are maintained in three to five
  places; and the internal product spine is rendered as reader-facing labels on
  four routes. Negation carries 16% of all headings, against a house rule of one
  per section.

  The finding set stays session evidence. `site/CONTENT_AUDIT.md` is the
  project's existing non-public home for a long-form route-by-route audit — the
  content collection reads only `../docs`, so nothing under `site/` is
  published — but writing there was outside this planning task's scope.

- **The site says the same thing about itself everywhere** (PR #158, slice 1 of
  seven). `site/src/data/identity.ts` owns one product sentence per locale —
  "AI Standard is an independent site for using AI at work." / "AI Standard ist
  eine unabhängige Seite für den Einsatz von KI bei der Arbeit." The homepage,
  the fallback page description and the footer tagline read it; the manifest and
  `llms.txt`, which are static files and cannot import it, restate it under a
  conformance check scoped to those two files.
- The manifest stopped calling the site `AI Project Standard` and a repository
  standard. `llms.txt` lost the security-practitioner framing and the stale
  route inventory, and gained the two homepage entry questions it had been
  missing.
- The `Austria first, then the EU` scope claim is withdrawn: no article
  substantiates it, and Law metadata now carries neutral EU-law scope wording in
  both locales. Nothing Austrian that is actually sourced was removed.
- `/secure-setup` step 6, `Take it back` / `Zurücknehmen`, had linked to the page
  about building a connection — the opposite action. It now has no destination,
  because no page answers the revocation reader job on its own terms and
  inventing a link would be worse than a gap. Slice 5 owns filling it.
- Homepage visible copy, header, footer structure, the route set and the sitemap
  were unchanged; verified against a `main` baseline build.

## 2026-08-25

- **Global shell: slice 2 of seven shipped** (PR #161). The footer is cut to
  two supporting groups — `Terms & law` / `Begriffe & Recht` and
  `About AI Standard` / `Über AI Standard` — over an unheaded reporting row and
  the existing legal bar; the four header journeys stay out of it. Blog left
  persistent global navigation and its one article is now reached from About.
  `RelatedNextStep` became `NextStep`, a contextual onward-step primitive with
  no product-stage API; the shared `Next step / Control` and
  `Decision path` / `Entscheidungsweg` public strings are gone. Header,
  homepage, routes, sitemap and `security.txt` verified unchanged before merge.
- **`/start` as one reader journey: slice 3 of seven shipped** (PR #163). The
  hub resolves the two prerequisite role questions before asking anyone to
  choose, and
  `Three questions this page does not answer` is gone rather than renamed. The
  six ways of working are named for the situation a reader recognises — `Ask a
  question` through `Let it run without you` — instead of the product brief's
  Chat/Assistant/Agent table, and each card now says what it is good for. The
  reach and verification fields left the cards for `/data-flows` and
  `/secure-setup`, which own them. Employee turns from permission settled to
  what AI can help with; Decision Maker starts with finding out what is already
  in use and only then states the Art. 4 duty, and English gained the vendor
  attribution and the precondition-not-permission caveat the German already
  carried. Vibe Coding gained a block where Explore and Prototype finish, lost
  its `Möglichkeit` / `Zusammenarbeit` eyebrows and its per-card stage tag, and
  now forks its onward step. Four pages gained a `NextStep`.
  `/start/what-it-is-doing` keeps its mechanism prose untouched and hands
  ownership to `/data-flows` with a bridge, a next step and a comment naming
  the five sections slice 4 absorbs.
- The artifact block leads with the artifact — `decisions.md`, 2026-08-25.
  `COPYABLE ARTIFACT` and the `DRAFT` pill no longer render; the status reaches
  a reader as `not yet used on a real project`, from a semantic key that
  `check-conformance.sh` holds against `blueprint.yml`. The check was proved in
  both directions on a planted mismatch.
- Header, footer, homepage `main`, `llms.txt`, the manifest, `security.txt`,
  the 379-file route set and the sitemap verified byte-identical against a
  `main` baseline build. Eleven rendered pages changed: the ten slice-3 routes
  and `/de/use-cases`, for one link label.

## 2026-08-25 (2)

- **Slice 3 closed out, slice 4 opened.** `state.md` and `tasks.md` moved the
  objective to slice 4 — `/data-flows` and Connect AI — and record `/start` as
  one reader journey as settled, same standing as the header, the four
  journeys and the slice 1–2 outcomes. `tasks.md` item 4 now carries the
  concrete slice 4 scope: correct the Data Flows hub's overstatement that
  reach depends on the account and connection "not on which product you
  chose"; reconcile `/start/what-it-is-doing` sections 0–4 into `/data-flows`
  by concept rather than by copy, preserving the strongest prose; cut
  `connect-ai-to-tools-and-data`'s density and give it a concrete worked
  example; remove its still-live page-specific eyebrows
  (`Possibility`/`Collaboration`/`Reach`/`Control`/`Reference`); reconcile
  training, consent, deletion and sovereignty to single owners, using
  `training-and-retention` as the quality reference. The `what-you-agree-to`
  retirement question in `state.md` blocks only that route decision, not the
  rest of slice 4. Issue #145's remaining scope is now Connect AI only.
  No public site content, routes or `CHANGELOG.md` changed.

## 2026-08-25 (3)

- **Slice 4 implemented: `/data-flows` owns the mechanism, Connect AI answers
  how.** The hub's two absolutes are gone — that reach depends on the account
  and connection "not on which product you chose", and that an access claim is
  "usually a statement about the fourth box". What replaces them is scoped:
  where a product reaches into another system, what is possible is the overlap
  of what the product supports, what the connection offers and what the identity
  in the target system may do. The fourth position is an identity rather than a
  person's account. The figure now precedes the routing cards, and the cards
  became the reader's four questions instead of a third naming of a model.
- Connect AI answers its own title: what provides a connection, how it gets an
  identity, which operations it offers, what a use of one amounts to — then one
  complete worked example, then the boundary. OAuth is the example's mechanism
  and is said to be; nothing claims every call is logged or that a connection
  runs as the human user. Its control loop, recovery question, verification
  checklist and OWASP evidence were removed for slice 5, with keys, destinations
  and the recovery commit in `tasks.md`. All five stage eyebrows gone; no public
  page carries stage vocabulary now. `Stop condition` stays and is recorded as
  not being that kind of defect.
- `/start/what-it-is-doing` keeps its URL and becomes `Do you need a different
  tool — or a better setup?` at 2.6 mobile screens, down from 7.1.
  `where-knowledge-lives` received the request-size and three-routes material
  and dropped its own overlapping list; `getting-it-back-out` is about deletion
  again and links to `data-sovereignty` rather than repeating it, so that page
  is untouched; `what-you-agree-to` keeps its route at four unique ideas and
  loses the duplicate Anthropic fact, which `training-and-retention` owns under
  a later check date. Four child pages gained a `NextStep`.
- Measured at 375×812, English then German. Connect AI 15.4/16.6 → 12.6/13.6
  screens, with boundary and control down from 47% of the page to 18%.
  `what-it-is-doing` 7.1/7.7 → 2.6/2.9. `getting-it-back-out` 6.3/6.9 →
  4.0/4.3. `what-you-agree-to` 5.2/6.0 → 4.1/4.8. The hub 4.0/4.3 → 4.8/5.0 and
  `where-knowledge-lives` 5.8/6.0 → 7.9/8.3, both because they absorbed material
  that used to live elsewhere; the family is shorter overall.
- Header, footer, homepage, identity, the 379-file route set, the sitemap and
  the redirects verified unchanged: 363 of 379 built pages byte-identical
  against a `main` baseline, and the 16 that changed are the twelve Data Flows
  pages, `what-it-is-doing` and `/use-cases` in both locales.

## 2026-08-25 (4)

- **Slice 4 merged (#165, `f491fcc`); Homepage Correction Pass opened between
  slice 4 and slice 5.** `state.md` and `tasks.md` record slice 4 as shipped
  rather than in review, with the same durable outcomes as the prior entry.
  The next objective is the Homepage Correction Pass — not slice 8, does not
  renumber slices 5–7 — approved to fix two concrete rendered defects on the
  PR #154 homepage rather than reopen its architecture: the German H1 `KI
  sinnvoll im Arbeitsalltag einsetzen` names no criterion a reader can act on,
  and the page under-fills a tall desktop viewport after its compact trust
  close. Full scope and boundaries are in `state.md`.
- **Issue #145 checked against the merged build and confirmed resolved on its
  actual scope.** Its four rendered strings — `Possibility`/`Möglichkeit`,
  `Collaboration`/`Zusammenarbeit` on `VibeCodingPage` and Connect AI,
  `Reach`/`Reichweite` and `Control`/`Kontrolle` on Connect AI — render
  nowhere in the built site. `PageIntroduction`'s `Decision path` eyebrow and
  `RelatedNextStep`'s `Next step / Collaboration` label, the issue's other two
  items, were already removed in slice 2 (`decisions.md`, 2026-08-24). Not
  broadened: `Stop condition` was never part of the issue's scope and is not
  treated as if it were. The issue was closed 2026-08-25 09:22 UTC, before
  this reconciliation; nothing further needed on GitHub.
