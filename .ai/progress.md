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

## 2026-08-26

- **Homepage Correction Pass implemented.** The heading stops asserting a
  quality with no criterion — `Use AI well at work` / `KI sinnvoll im
  Arbeitsalltag einsetzen` become `What AI can do at work — and how to work with
  it` / `Was KI bei der Arbeit kann — und wie du damit arbeitest`. `sinnvoll`
  stays in the `/use-cases` header label, where a `Wo`-clause makes it the
  question under examination rather than a promise. The lead names the three
  things the page actually routes to and drops the fourth it could not reach;
  the canonical identity sentence is still interpolated from `identity.ts`. One
  quiet line closes the hero with concrete work. The primary button says what it
  leads to instead of naming a filing category, taking `/use-cases` from three
  public names to two.
- **The desktop problem was horizontal.** Rendered measurement ruled out a
  vertical void: the document was 1436 px at 1280, 1440 and 1512 alike, and a
  1440-tall viewport stretched `main` by 4 px. The cause was width — the heading,
  lead and entry list sat at 768/672/672 inside a 960 px rail that is itself
  192 px narrower than the header and footer shell. Three deliberate
  homepage-local widths (960/672/768) and homepage-local section spacing
  (hero→entries 56 px, entries→close 96 px) replace it. No global token, shell
  rail or other hub changed.
- Measured 375×812, English then German: first reader question 566/646 →
  758/814; `main` 966/1075 → 1202/1259 px. Desktop 1440×900: document
  1436 → 1540 px, heading 768 → 960 px wide, entry list 672 → 768 px. Every
  pixel of the mobile increase comes from the approved copy — the longer lead
  (+64 px DE) and the example line (+112 px DE); grouping the line with the
  actions and tightening its leading returned 24 px.
- Invariants: 377 of 379 built pages byte-identical against `main`; header and
  footer byte-identical on both homepages; route set and sitemap identical;
  `main` holds exactly six links; outline `h1 → h2 → h2`; no horizontal overflow
  at 375, 768, 1280, 1440 or a 1440-tall viewport. `identity.ts`, `ui.ts`,
  `Base.astro` and `global.css` untouched.

## 2026-08-26 (2)

- **Homepage Correction Pass merged as #167 (`e249cf7`) and closed.** `state.md`
  and `tasks.md` record it as shipped rather than in review, and it is no
  longer carried as an active objective — durable outcomes are recorded once in
  `state.md` and not reopened for preference or further polishing. Objective
  moved to slice 5 — `/secure-setup` and verification. Reader job: how do I set
  boundaries that hold, check what the system did, and keep enough evidence to
  recover or explain the work later? Family confirmed against source: the hub
  and `before-you-grant-access`, `checking-the-result`, `keeping-a-record`. The
  slice 4 → slice 5 handoff (Connect AI's removed control-loop material,
  recoverable at commit `178e782`) is unchanged and is this slice's to
  reconcile — its keys and destinations stay in `tasks.md`, not duplicated in
  `state.md`. Slice 6's two blockers and Slice 7's queued findings, including
  the `what-you-agree-to` re-test after slice 6, are unchanged. No public site
  content, routes or `CHANGELOG.md` changed.

## 2026-08-27

- **Slice 5 merged as #169 (`948a376`, merge `8fad569`) and closed.** `state.md`
  and `tasks.md` record it as shipped rather than in review, and it is no
  longer carried as an active objective — durable outcomes are recorded once in
  `state.md` and not reopened for preference or further polishing. The old
  public six-stage lifecycle (`Decide / Configure / Verify / Record / Monitor /
  Take it back`) is retired and no replacement taxonomy was introduced; four
  ordered questions remain — permission, enforceable boundary, checking the
  result, keeping a record — with monitoring and taking access back as
  continuing concerns rather than a fifth and sixth step, and both former dead
  ends now have honest destinations. `before-you-grant-access` is the canonical
  owner of enforceable boundaries, stated as living outside the model across
  several possible layers rather than as a target-system monopoly. The slice 4
  → slice 5 handoff is reconciled and closed — disposition only is kept in
  `state.md`, not the original prose. Objective moved to slice 6 — Law, About,
  Evidence, Reference and discovery — which remains blocked on two open
  decisions (`/docs/**` retirement shape, `practical-ai-collaboration`
  promotion target) unchanged from before slice 5. Slice 7's queued findings,
  including the `what-you-agree-to` re-test after slice 6, are unchanged plus
  two additions slice 5 surfaced: a possible future operating route (two hubs
  now point at the same absence) and the account switches' universal-reader
  discovery home. No public site content, routes or `CHANGELOG.md` changed by
  this reconciliation.

## 2026-08-27

- Slice 6 shipped (#171): Law, About, Evidence, Reference and discovery.
  Designed in a read-only pass over Law, About, Evidence, `/docs/**`,
  `/profiles`, Open Source and discovery, then implemented after four
  change-scope approvals: `/docs/**` (21 routes) and `/profiles` retired to
  one-to-one repository redirects with the glob renderer removed,
  `practical-ai-collaboration` kept repository-only (2026-08-24 promotion
  decision superseded), the method page moved to
  `/about/how-claims-are-checked` with the About duplication dissolved, the
  Law hub reframed around the reader's routing question, Open Source
  reconnected from Vibe Coding, `what-you-agree-to` narrowed and its
  post-slice-6 re-test closed. Four decisions appended. Sitemap 376 → 354
  (24 removed: 21 docs + profiles + 2 old evidence-method URLs; 2 added: the
  new About routes); no unrelated URL removed. Header, footer, homepage,
  canonical identity and the strong Law/Open Source article substance
  verified unchanged. Slice 7 — site-wide voice, German, terminology and
  quality — is next and has not started.

## 2026-08-27 (2)

- **Slice 7 implemented — site-wide voice, German, terminology and quality.**
  Designed in a read-only audit over every non-glossary public route in both
  locales plus the glossary and the machine surfaces, then implemented against
  the human decisions that closed the audit's open questions. Not shipped:
  the branch is `feature/slice-7-site-quality`, awaiting review.
- **What was wrong and is now right.** Cross-references had rotted: a next step
  offered "the six steps" of a lifecycle retired in slice 5, four labels called
  the Law orientation page by the count-led title slice 6 replaced, `llms.txt`
  still described `/start`, `/start/what-it-is-doing` and `getting-it-back-out`
  as they read before slices 3 and 4, and a meta description promised fourteen
  things over a ten-row figure. Ten places where the German said something the
  English did not — a frequency against "can", an inverted actor in the blog, a
  dropped *untrusted*, a dropped *public-interest*, a trade-secret condition in
  the past tense — now carry the same claim in both languages. Roughly two dozen
  German grammar defects were corrected and a wider set of English-shaped
  sentences rewritten as German, without touching the prose the review found
  strong.
- **Decisions taken, in `decisions.md`.** `/start/what-it-is-doing` keeps its
  URL deliberately, closing the slice-4 route question — every human-visible
  surface already carries the current title, and this static host only redirects
  by meta-refresh. Art. 22 GDPR is recorded as deliberate non-coverage.
  Terminology is fixed by meaning, with no CI rule now or planned, because every
  defect found was a judgement about which sense a word carried. Three unowned
  questions were answered on the pages that already owned their neighbourhood —
  export and portability on `getting-it-back-out`, the six Art. 6(1) bases on
  `what-may-go-in`, AI-written code on `code-written-at-work` — each sourced at
  the primary text and dated 2026-08-27. Memory as a product setting stays
  unowned and is future scope.
- **Verified.** Route set and sitemap byte-identical to `main` at 380 routes and
  354 URLs; no new public route, no redirect change. 2,830 in-main internal
  links crawled, none broken; the last dead end is gone, since `/start`'s sixth
  way of working now reaches `/secure-setup`. All 305 evidence badges still
  resolve to the method page and none to the retired URL. `astro check`,
  `check:language` and `check-conformance.sh` pass. No horizontal overflow at
  375 or 1280 in either locale. Glossary search, filters, the no-JS index and
  the live count were exercised in the browser after the index shed 13% of its
  bytes; German fallback notices appear only where German actually falls back.

## 2026-08-27 (3)

- **Slice 7 shipped as #173** (implementation commit `db9c1345155083fdd22b7648104ea65724d95eb6`,
  merge commit `6d81922`). `state.md` and `tasks.md` record it as shipped rather
  than in review. This closes the seven-slice roadmap opened 2026-08-24: slice 1
  (#158) through slice 7 (#173), with the Homepage Correction Pass (#167)
  between slices 4 and 5. There is no slice 8. Next objective: the final
  overall site check, not started, not another numbered slice.
- **A legal-precision review pass preceded merge**, requested after the first
  implementation was reviewed. It corrected the three newly added legally
  substantive sections without reopening any other slice-7 work: the
  AI-assisted-code section no longer asserts a universal absence of case law
  and keeps EU originality/authorship distinct from who may exercise economic
  rights, with US Copyright Office conclusions labelled as US law throughout;
  the export section separates vendor-specific product facts (`fact`, dated)
  from GDPR Art. 20's actual scope (`law`, dated) instead of one mixed
  paragraph, and no longer implies a general workspace-export right; the
  Art. 6 employee-consent sentence was tightened to the EDPB's own framing.
  Route set, sitemap, evidence links and EN/DE parity were reverified
  unchanged after the correction.
- **Final verification before merge:** routes 380, sitemap 354, both unchanged
  from `main`; 2,832 in-main internal links crawled, zero broken; all ten
  EN/DE semantic-parity findings rechecked individually and passing; evidence
  badges still resolve only to `/about/how-claims-are-checked`; no horizontal
  overflow at 375×812 or 1280×800 in either locale on the pages touched by the
  precision pass; `astro check`, the language check, `check-conformance.sh`
  and `markdownlint-cli2` all clean locally, and all six GitHub Actions checks
  passed on the PR (German language check, Link check, Markdown lint,
  Self-conformance, Site build, Structural docs check).
- **Genuine remaining scope**, unchanged from the slice-7 close-out: memory or
  personalisation as a product setting (no dated fact owner); a possible
  multi-session-reviewability Open Source article; glossary UI-label
  housekeeping; rights in AI-generated output beyond the software/publishing
  case; the second-blog-post discoverability question; and internal cleanup of
  the dead `license` prop, the unused `mdx()` integration and the `docs/**`
  Pages workflow trigger. None of these block the final overall site check.

## 2026-08-27 (4)

- **Final overall site check shipped, then a release-readiness gate.** The
  read-only final check (prior session) returned READY AFTER LOCAL FIXES with
  ten bounded defects; all ten were fixed and merged as #175. In the same
  window the maintainer requested a third footer column (Legal/Rechtliches,
  moving Impressum/Datenschutz and the two report links up from the closing
  bar), shipped as #176. Both merged 2026-08-27.
- **Release-readiness gate.** Created `docs/release-readiness.md` — the
  repository's durable Definition of Done, acceptance criteria, verification
  checklist, severity model and verdict vocabulary for judging the website
  release-ready; not a public route. Amended the 2026-08-24 footer decision in
  `decisions.md` to record the three-group shape without reopening what a
  header journey is. Removed the public Acknowledgements/Danksagung section
  from About in both locales after confirming it carried no legal attribution
  — repository-history copy about `AGENTS.md` conventions, not MIT, CC BY 4.0
  or a NOTICE requirement.
- **A real defect surfaced and was fixed in the same pass**: the footer
  spacing fix from the prior session (commit `bc94d4a`, grouping the licence
  line with the language switch) was pushed to `feat/footer-legal-column`
  *four minutes after* #176 had already been merged, so it never reached
  `main` — the live site carried the reported orphaned-licence-line bug this
  whole time despite being reported as fixed. Cherry-picked onto this pass's
  branch and verified live. Also corrected the desktop footer's visual
  balance per a maintainer follow-up request: the brand no longer reads as a
  fourth peer column — a two-zone grid (`site-footer__grid` | new
  `site-footer__sections` wrapper) gives the three navigation groups equal
  275px tracks at the wide breakpoint, verified by DOM measurement on the
  homepage, About (EN/DE), Law and a secure-setup page at 375/768/1280px.
- **Verdict: READY AFTER LOCAL FIXES.** One bounded DEFECT recorded in
  `tasks.md`: the privacy policy's processor list omits Fastly, GitHub Pages'
  own CDN, visible in the live response chain. Not fixed in this pass —
  privacy-policy wording is a reserved content/legal decision. Everything
  else found was NON-BLOCKING QUALITY or already-recorded FUTURE SCOPE; 0
  broken internal links across 380 routes verified fresh, 0 genuinely dead
  external sources across 89 unique links (several curl false negatives
  traced to an unescaped-entity bug in the crawler, GitHub rate-limiting, and
  Cloudflare bot-blocking on non-browser clients — all confirmed live via
  real browser rendering), live privacy claims (no cookies, no tracking
  scripts) verified against the actual production response.

## 2026-08-27 (5)

- **Release-readiness closeout.** Closed the privacy delivery-chain defect:
  the policy no longer presents delivery as two infrastructure parties. It now
  says delivery runs through Cloudflare in front of GitHub Pages and that
  GitHub uses service providers beneath it, citing GitHub's own subprocessor
  documentation for Fastly. Verified at that source rather than inferred from
  response headers — deliberately no Fastly retention period, no Fastly logging
  claim, no controller/processor classification, and GitHub's IP-logging
  statement was not transferred to Fastly. The legal notice summary follows,
  pointing at the privacy policy for the chain rather than repeating it.
- **A stale internal note was retired rather than satisfied.** `privacy.ts`
  carried a comment saying the retention period and the controller/processor
  role "must be confirmed before this is treated as final". The page
  deliberately asserts neither — both would be its own characterisation of
  someone else's practice, drifting the moment it changes — so the comment now
  records those as settled boundaries and warns against "resolving" them by
  writing in a period or a role.
- **`site/INFORMATION_ARCHITECTURE.md` stopped contradicting the shipped site.**
  Its footer table described the two-group shape superseded on 2026-08-27 and
  still pointed at the retired `/glossary/evidence-method` URL. Now three
  groups, the current method URL, the closing bar, and the two-zone desktop
  grid. The architectural principle is unchanged: the header owns the four
  primary journeys and the footer does not duplicate them.
- **The three unevidenced acceptance areas were completed.** Concept ownership
  across 39 concepts: 38 compatible, 1 real contradiction (business plan vs the
  Art. 28 processing agreement). Strong-claim review across both languages.
  Lighthouse 12.8.2 on six routes, mobile and desktop, local and live.
- **Performance has real evidence now.** Mobile, local production build:
  homepage 100 (LCP 907 ms, CLS 0, TBT 0), `/start` 100 (1024 ms), `/law` 100
  (1022 ms), Connect AI 100 (1145 ms), Vibe Coding 97 (1615 ms), Glossary 98
  (1307 ms, TBT 154 ms). Live homepage 100 (LCP 1289 ms, CLS 0, TBT 15 ms,
  14.5 KB, 5 requests, all first-party). CLS is 0 on every route measured. The
  glossary's mobile TBT is Style & Layout over 143 entries, not script
  evaluation (59 ms) — explained, not a defect; on desktop it is 100 with TBT 0.
  The site ships zero JavaScript bundles and one 40 KB stylesheet.
- **Privacy verified against the shipped corpus, not one page.** The only
  mentions of `localStorage`/`sessionStorage` anywhere in the built site are the
  privacy policy's own statements that they are not used; zero occurrences of
  `document.cookie`, `indexedDB`, `sendBeacon`, `XMLHttpRequest`, `fetch(`,
  `gtag` or `dataLayer`; zero external `src=` subresources across 380 routes.
  Live: no `Set-Cookie` on any route sampled, and Lighthouse recorded five
  first-party requests and no third party.
- **Verdict: READY AFTER LOCAL FIXES, not READY.** Ten defects are open in
  `tasks.md`. Nine are content; one is live — `/.well-known/security.txt`
  returns 404 in production although the file is in source, builds correctly,
  and the deploy is current. That one also falsifies two repository statements
  claiming the endpoint is still served for scanners. The previous pass checked
  it as a built file and passed it; checking it as a live URL is what caught it.

## 2026-08-27 (6)

- **Nine of the ten release-readiness defects closed.** Bounded content pass,
  no architecture, no new route, no new component. The processing-agreement
  contradiction is resolved to one proposition across all three pages that
  touch it — a plan makes an Art. 28 agreement *available*, and concluding it
  stays the reader's job. Market-wide vendor claims are gone: every remaining
  vendor statement names the vendors actually checked. The copy-control
  absolute, the credential absolute and the training-history absolute are all
  bounded to what is knowable.
- **Two of the defects were worse than reported, in the English.** They had
  been filed as German-only. Defects 2, 3 and 6 carried the identical overreach
  in English, and defect 5 was independently wrong in English: the page said an
  "organisation owner" could "switch the feedback feature off entirely", while
  Anthropic's commercial article says a *Primary Owner or Owner* of a *Team or
  Enterprise* plan can disable members' ability to *submit* feedback. That
  claim had also been cited to the consumer article, which states in its first
  line that it covers Free/Pro/Max only; the commercial source is now linked in
  both locales.
- **The no-licence copyright claim got real law.** It was a universal negative
  at `fact` level sourced to choosealicense.com. It is now `law`, dated
  2026-08-27, citing Art. 4(1) of Directive 2009/24/EC for the restricted acts
  and saying plainly that the reservation is expressly subject to Arts. 5 and 6
  — a lawful acquirer may run the program for its intended purpose, make a
  back-up and study how it works. The page had previously implied no exceptions
  exist.
- **security.txt: the obvious fix would have been the wrong one.** The 404 was
  not Jekyll, and `.nojekyll` would itself have been deleted by the same rule
  that was deleting the file. Three pieces of evidence: the GitHub Pages origin
  returns 404 independently of Cloudflare; the actually-deployed artifact,
  downloaded and inspected, contains zero dot-prefixed entries while `_astro/`
  is present; and the pinned `upload-pages-artifact` action tars with
  `--exclude=.[^/]*` unless `include-hidden-files` is `true`, which it defaults
  to. One input on the upload step fixes it. Replicating the tar locally
  without that exclude adds exactly two entries — the directory and the file —
  with `_astro/` intact and nothing from `.git`/`.github`.
- **Verified.** 380 routes, 354 sitemap URLs, 26 redirects — all unchanged. 0
  broken internal links across 14,374 attributes. Zero recurrence of all
  sixteen corrected formulations in the built HTML. EN/DE parity confirmed on
  all eight changed pages. 32 page/width combinations at 375 and 1280 in both
  locales: no overflow, exactly one H1 each. All gates green. The privacy
  delivery-chain disclosure from the previous pass is intact.
- **Verdict: READY AFTER LOCAL FIXES — security.txt awaiting live
  verification.** Not READY, and deliberately not written as complete: the last
  defect is only provable against a live deploy.
