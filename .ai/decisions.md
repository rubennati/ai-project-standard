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

## 2026-08-09 - Git records what happened, `.ai/` records what holds

Decision: Git — branches, commits, pull requests, `CHANGELOG.md` — owns the
record of what was done. `.ai/` owns why the project exists, what holds across
sessions, and what an agent may and may not do. On any conflict about a fact,
git wins. `docs/ai-workspace-layer.md` is the authority; `AGENTS.md` and
`docs/practical-ai-collaboration.md` point at it.

Reading `.ai/` before work stays mandatory and is cheap. Writing to it is
narrow: `state.md` changes when the objective, a constraint or a decision
changes, never to mirror a branch or a pull request.

Rationale: the two documents contradicted each other in production. One told
agents to read and update `.ai/state.md` on every meaningful change; the other
told them not to maintain those files as a parallel tracker. Both were shipped,
and the model this project sells was inconsistent with itself.

## 2026-08-09 - The destination is the spine, not a taxonomy

Decision: `docs/purpose.md` states one outcome — a developer brings an AI agent
into their project and can still answer, months later, what changed, why, on
whose decision, and what was checked, without having had to invent the practice.
Everything in the repository derives from it. The hierarchy is purpose →
evidence → decisions → artifacts → instance, and nothing lower may contradict
anything higher.

Three consequences follow rather than being chosen separately:

- **Four pillars are retired.** Pillars and layers are both inventories of what
  is in the box. The organising question is what someone needs to reach the
  outcome, and that is answered by blueprints cut by goal.
- **Profiles are superseded by blueprints.** They were the same idea at a lower
  stage of maturity — file lists per audience versus shipped packages per goal.
  `docs/profiles.md` becomes a tombstone so existing links resolve, and the
  OSS-only / AI-only / Combined versus Open Source / Human-AI / Combined naming
  disagreement, open since May, disappears with them.
- **Distribution is degit, not forking.** Reaching the outcome needs one
  blueprint; a fork hands over this project's history instead.

Rationale: the same three questions had been open for months and were repeatedly
put to the maintainer as a choice between structures. They are not a matter of
preference — once the destination is fixed, each has one answer that follows
from it. Asking for a route before naming a destination was the error.

`check-profiles.sh` and its CI job are removed; the conformance check covers
blueprints, and CI now rejects the retired vocabulary if it returns.

## 2026-08-09 - A concepts layer, between the rule and the payload

Decision: technical reference for building something lives in `concepts/`,
governed by `docs/concepts.md`.

Reasoning: `docs/` is the rule stated once and is short by design; `blueprints/`
is files you copy. A reference architecture is neither, so it had nowhere to go
— and technical material from research was being routed to the website instead.
That was a misreading of `purpose.md`, which says the repository is not the
place for reasoning at length: depth is not length, and the same file says the
repository answers *how do I build this*.

Each concept answers five questions, carries an owner and a review date, and is
checked in CI.

## 2026-08-10 - One public website product, supported by the repository

Decision: AI Standard is one public product for people who use, introduce,
govern or build with AI in real work. It is not split into a broad knowledge
base and a narrower project-standard or developer area. The website is
organised by reader outcome; repository origin never creates a public section.

The repository is the production, source and artifact system behind that
product. It holds canonical rules, technical sources, research, blueprints,
review history and checks. A reader does not need the repository to understand
or act on a website answer, but can follow it to inspect, copy or contribute.
Blueprints remain copyable artifacts rather than a third public surface.

The public product covers both value and control: what AI can make possible,
which form of human-AI collaboration fits, what the system can reach, which
benefits and failure modes follow, what boundaries are needed, and how results
stay reviewable. It spans the first prompt through tool use and acting agents.

Rationale: the earlier three-surface model made the implementation structure
visible to readers. `/docs`, use cases and the repository standard formed one
identity while data flows, law and secure setup formed another. Readers arrive
with a question, not with knowledge of which folder produced the answer. The
split also weighted the site towards risk and explanation while leaving the
possibilities and working models of useful AI collaboration without a clear
home.

Rejected: a separate developer area beneath the knowledge site. Technical depth
is progressive depth in the same product, not a second identity. Also rejected:
turning the website into a repository mirror. Maintainer setup, release
mechanics and internal project documentation stay in the repository unless they
answer a public AI-use question.

Consequences: `docs/website-product-brief.md` owns the product statement, ten
reader questions and content admission test. Information architecture, page
templates and navigation follow from that brief and are decided in later
reviewed slices. Existing public URLs and navigation do not change in this
decision-only slice.

## 2026-08-10 - Stable-route-first website structure

Decision: the website uses the four product decisions as its public structure
while preserving existing hub URLs where they fit. `/use-cases` owns
Possibility, `/start` Collaboration, `/data-flows` Reach, `/secure-setup`
Control, and `/glossary` is the Reference entry. Law, editorial content and the
repository remain available as contextual depth rather than separate primary
products. MCP is the first complete prototype path; Vibe Coding is the second
test of the system.

The header reader jobs and stable hub ownership are approved. The exact labels
are verified in both languages before implementation. The first footer proposal
is rejected because its Explore group repeated the primary navigation. The
footer instead owns reference, trust, project inspection and legal disclosure.

Rationale: the existing URLs can carry the new product logic without a broad
redirect migration. Reader goals are more stable than role, technology or
content format, and the content audit shows the four decisions match both the
strong current material and the missing paths.

Rejected: a clean-slate route tree, navigation by audience, and navigation by
content format. Each would ask readers to classify themselves or the answer
before finding it, and the route rebuild would add migration risk without
improving the product model.

## 2026-08-10 - A native theme, not a third-party site architecture

Decision: AI Standard develops a small native theme on its existing Astro 7 and
Tailwind CSS 4 foundation. Complete documentation, landing-page and blog themes
may be used as visual references, but none is installed as the application
architecture. The theme defines one Shell rail, one Wide rail and one Reading
rail, a shared visual language, a contained header and a footer that does not
repeat primary navigation. Language is a permanent header action on desktop and
mobile rather than a destination hidden inside the responsive menu.

Rationale: the current site already has bilingual routing, evidence, glossary,
structured data, diagrams, privacy and accessibility behaviour that a starter
theme would replace. Documentation themes would restore the retired `/docs`
identity; landing themes would impose marketing components; blog themes cannot
carry decision tools and implementation depth. The inconsistency to fix is a
missing visual system, not a missing framework.

Rejected: installing Starlight or Compass for the whole site, replacing the
site with AstroWind, and forcing every surface into one blog theme. Also
rejected: making every page the same width. Prose, indexes and matrices need
different measures, but they use three explicit rails rather than arbitrary
page-local maximums.

## 2026-08-10 - The first complete path is a connection decision, not an MCP page

Decision: `/data-flows/connect-ai-to-tools-and-data` and its paired German URL
are the first complete website path built from the page-primitives system. The
page starts with outcomes, distinguishes a tool-using system from an agent,
shows the human → host/client → server/connector → target-system boundary, and
ends with implementation and negative checks. MCP is the technical example;
the reader's goal is a useful, bounded connection.

The existing Data & systems hub links the path. Header and footer navigation do
not change. No repository artifact is linked until the planned tool-access
blueprint has a real boundary and verification record.

Rationale: a page titled only “What is MCP?” would test a glossary article, not
the product. The complete path has to connect possibility, collaboration,
reach, control and reference without making infrastructure the destination.
Starting read-only, separating resources from tools, narrowing identity,
approving consequences and testing revocation make the decision observable.

Rejected: a technology landing page, a new top-level MCP section, an immediate
header entry and an illustrative artifact that has not been run.

## 2026-08-18 - Three boundaries behind the agent frame

Decision: the frame distinguishes three things it previously ran together.
Ordinary method and implementation judgment belongs to the agent inside an
agreed scope. Some decisions stay reserved to a human even when the
implementation would be reversible — a dependency, a service or a credential,
how authentication, personal data or deletion work, a public interface, and
anything already released. Actions whose effect escapes the branch, or that
declining the merge would not undo, stay separately controlled.

The operational rules follow in `AGENTS.md` and in the blueprint payload: an
affirmative default to proceed, the two ambiguity triggers split between method
and consequence, the roughly-one-hour trigger replaced by checkpointing, and a
reporting outlet for out-of-scope findings.

The relationship with `concepts/agent-action-control.md` is settled as layers
rather than maturity levels. The frame governs delegated judgment and repository
work; the concept governs action consequence and the design of the controls that
enforce it. Neither is a smaller version of the other, and the concept's Open
note recording this as unsettled is removed.

Rationale: the frame said when to stop and what may never happen and never said
what the agent is trusted to decide, so latitude existed only as the gap between
prohibitions, and an unlisted situation read as a reason to ask. The error
history is the evidence for keeping the reservations — navigation changed
without asking, and four steps of objective drift, both with fully reversible
git state — which is why reversibility alone cannot decide what needs a human.
It is also the evidence for the affirmative half: every recorded correction was
behavioural rather than another mechanism, and this adds none. The reservations
were already enumerated, the action boundary is already enforced by branch
protection and by which tools an agent may call, and what was missing was the
default.

Rejected: a third permission list, because an enumerated set of allowed
decisions is always incomplete and reads as "ask when unlisted", which is the
behaviour being corrected. Also rejected: reversibility as the single organising
rule, because a public interface, a dependency and an architectural change are
reserved decisions while still entirely undoable in a branch.

## 2026-08-18 - Nothing rises merely by being true

Decision: `docs/purpose.md` states the direction of its hierarchy as well as its
order. An observation from an instance, a test, a session or working context
stays where it was made until it establishes something reusable above it, and
what the evidence establishes decides that rather than where it originated.
`.ai/quality-gates.md` records the check under *Not automated*.

Rationale: the hierarchy governed conflict between two things already placed and
said nothing about how something gets placed, so truth was left doing the work —
and truth is the weakest test an artifact has to pass. A value can be true,
correct for the run that produced it, pass every mechanical check, and belong to
no reader of the file it landed in. The evidence level drew this line for public
claims only.

Rejected: a promotion stage, register or checklist between the levels. Every
correction this project has recorded was behavioural rather than another
mechanism.

## 2026-08-19 - Not automated is not unverified

Decision: `.ai/quality-gates.md` says how the properties under *Not automated*
are decided. Where correctness turns on meaning, audience, scope, relevance or
consistency, the result is read against what the work was supposed to achieve,
established independently of the result being judged — by the instruction, the
confirmed plan or a later human clarification, never reconstructed from what
came out. That fixes the outcome and not the method. A change is read twice —
as the artifact it leaves behind, and against the scope it was given, including
what it was asked to leave alone — and a reader who did not write it carries the
stronger
evidence where the consequence or the ambiguity earns it. The loop in
`AGENTS.md` and in the `ai-assisted-development` payload points there instead
of restating it.

Rationale: the section named properties no machine gates and then said nothing
about how they are settled, so "run the checks and show the output" read as the
whole of verification. The evidence is narrow and stays narrow: in an acceptance
experiment on a separate project (Secure Docker, not in this repository), a
separate outcome-oriented evaluation stage found material defects that had
survived detailed implementation instructions. That establishes that a semantic
stage catches what mechanical checking does not. It does not compare stating an
outcome against instructing an implementation — that comparison was never run —
and nothing here claims it.

Rejected: acceptance as a level of the hierarchy, because evaluation is how work
is judged and not another source of truth above or between purpose, evidence,
decisions, artifacts and instance. Also rejected: the criteria vocabulary from
that experiment, an acceptance section per task, a checklist of the regression
and deferred-scope cases, and independent review as a requirement. Every
correction this project has recorded was behavioural rather than another
mechanism, and a second agent on every task is a ceremony, not evidence.

## 2026-08-20 - Four primary journeys, and Reference is not one

Decision: the primary header carries exactly four destinations, one per reader
journey — `/use-cases`, `/start`, `/data-flows`, `/secure-setup`. Labels:
Where AI fits / Wo KI sinnvoll ist, Ways of working / Arbeitsweisen,
Access & actions / Zugriff & Aktionen, Secure & verify / Absichern & prüfen.
Law, Blog and About leave the header for the footer, which already holds them.

This supersedes the header half of "Stable-route-first website structure"
(2026-08-10), which named `/glossary` a fifth destination as the Reference
entry. The route ownership decided that day is unchanged; only the count is.

Rationale: the same document defined the product as four reader decisions and
then added a fifth destination that is not one of them. Looking a term up is a
way of reading, not a decision someone arrives with, so Reference fails the test
that removed Law and Blog from the header. It stays reachable contextually and
from the footer. The header also omitted `/use-cases` entirely, so the journey
the product opens with had no global link.

Rejected: one-word labels throughout. Three of the four journeys are two-part
questions — reach and action, securing and verification, where AI fits and where
it does not — and a single word drops the half that a previous pass had added.
The navigation names the journey; the hub heading asks the full question.

## 2026-08-20 - Verification and record become public routes

Decision: `/secure-setup/checking-the-result` and
`/secure-setup/keeping-a-record` are added as public routes in both locales,
and `/secure-setup` becomes the six-step control lifecycle rather than a list of
settings articles.

Rationale: the lifecycle had two steps with a destination and four without, and
a hub whose stages point nowhere is not a product. The two gaps were the largest
in the whole site — questions 8 and 9 of the product brief, both rated weak in
the content audit, and neither owned by any page. Every one of the six ways of
working on `/start` ends on a "what to check" field that had no depth behind it.

Rejected: one page covering both. Checking a result and being able to explain a
decision later are separated by months and asked by different people, and the
merged page would have led with the urgent half. Also rejected: filling Monitor
to make the six symmetrical. Nothing on the site continues it yet, and the hub
states which steps a task actually needs so the list does not read as six
obligations for every draft.

## 2026-08-24 - The footer does not repeat the header

Decision: the footer holds supporting destinations, trust, legal and a very
small number of project utilities. It does not carry `/use-cases`, `/start`,
`/data-flows` or `/secure-setup` in any language. It becomes substantially
smaller than it is today: Glossary; Law, without pretending Law is lookup;
About, with a German label that is not a bare preposition; Blog if it earns a
global place; the evidence method as trust content rather than a glossary
concept; one problem-reporting path; one vulnerability-reporting path; at most
one repository link, as a secondary utility; the legal notice and the privacy
policy. The human `security.txt` link goes and the file keeps being served.

Rationale: the whole-site review found readers stranded at the end of long
pages and a footer that is 1.1 mobile screens tall on every page, of which five
links leave for GitHub and two resolve to the same URL. Those are two problems.
Answering the first by duplicating the header would put every primary
destination on three surfaces of one screen — the failure already recorded in
`errors.md` for the rejected homepage — and would make the second worse. The end
of a page is answered by a contextual next step; the footer is answered by
cutting it back.

Rejected: journey links in the footer. Also rejected as requirements rather than
options: a sticky header and a breadcrumb row. Either may turn out to be the
right mechanism for the onward path; neither is adopted because a review named
it.

## 2026-08-24 - Publication under /docs is explicit, not automatic

Decision: `/docs/**` is not a public product family. A Markdown file under
`docs/` does not become a public page by existing; publication requires an
explicit decision per document. Maintainer, project, release and process
documentation belongs to the repository and is read there.

`docs/practical-ai-collaboration.md` is the exception in substance rather than
in mechanism: it has a real public reader, so it is preserved and later promoted
deliberately as a public product page, not left as maintainer documentation that
happens to be reachable.

Rationale: `site/src/content.config.ts` globs `**/*.md` from `../docs` with no
allowlist, so 21 pages are indexed and sitemapped — including this project's own
purpose, product brief, house style, release process and branch protection — and
every future maintainer document self-publishes. `docs/purpose.md` states the
rule the glob breaks, and is itself one of the published pages:
"Not a second public product. Maintainer documentation, project state and
release mechanics stay here." All 60 internal links inside those page bodies
resolve against the web path and 404.

Retiring the routes is a separate act needing its own approval, and it reaches
the legal notice, which names `/docs/` and grants MIT over it in both locales.

Rejected: deleting the source material because its current public route is
wrong.

## 2026-08-24 - Open source is where building with AI continues

Decision: `/open-source/**` is not a primary journey and does not become a
header or footer section. It is reframed as the continuation of creating,
publishing and maintaining software — including software built with AI — and is
reached from the development content, the Vibe Coding page first. The
`No AI in this section` / `Ohne KI in diesem Bereich` separation is removed, and
the three articles get onward paths.

Rationale: the section is eight well-written pages with no inbound link from
anywhere outside itself, and its own copy holds two incompatible claims — that
it excludes the site's subject, and that it is the ground the rest of the site
stands on. Nothing stands on it because nothing reaches it. A reader who has
just been told how far vibe coding takes them is the reader who then has to pick
a licence and find out who owns what they wrote at work.

Rejected: a fifth journey, a header entry, and a footer section of its own —
each would answer a discovery problem by enlarging the taxonomy. Also rejected:
rewriting the three articles for consistency with the rest of the site. They are
among the strongest prose the site has in either language.

## 2026-08-24 - Austria first is withdrawn as a scope claim

Decision: `Austria first, then the EU` is removed from every public and machine
surface where it acts as a product or legal scope claim. It is not restored
until an Austrian layer exists to substantiate it.

Rationale: the claim is made in `lawDescription` in both locales and repeated in
`llms.txt`. No Austrian norm, authority, court or statute appears anywhere in
the four law articles; every source is EU-level or CJEU, and one article
addresses a reader explicitly not placed in Austria. The claim is also never
rendered in `<main>`, so it works on search results and machine readers and not
on the reader who is deciding whether to invest in a 1,300-word article. Under
the hierarchy in `docs/purpose.md`, evidence outranks the artifact that states
it.

Rejected: writing Austrian legal content in order to keep the sentence. The
sentence is not the goal, and a scope promise met by producing content to fit it
is the same failure the evidence method exists to prevent. Noted for whoever
builds the layer: the site's only Austrian legal substance today — § 40b
Urheberrechtsgesetz — is in `/open-source/code-written-at-work`.

## 2026-08-24 - Data flows owns the mechanism explanation

Decision: `/data-flows` is the canonical public owner of what technically
happens and what a system can reach — model, product, connector, target system.
`/start` owns forms of human-AI collaboration and does not carry a second
version of the mechanism.

`/start/what-it-is-doing` keeps its URL. Ownership decides which page maintains
the explanation, not immediately where it is served from; a route change waits
for evidence that the URL itself costs a reader something.

Rationale: the explanation exists twice — as the `/data-flows` hub's own
structural centrepiece and, at length, on a `/start` child — with different
nouns for the same four layers, so a reader who has seen both cannot tell
whether they are one model or two. Which of the two is a way of working is not a
close question: "there is no wire out of the model" is a fact about reach, and
reach is what `/data-flows` is for.

Rejected: moving the route in the same change. Public URLs are hard to reverse,
and the conceptual answer does not by itself establish that the current URL is
hurting anyone.

## 2026-08-24 - A link promises a reader job, not a heading

Decision: a link's text must promise the reader job its destination actually
answers. It does not have to reproduce the destination's H1 word for word.
Exact reuse is good where it is natural; a question turned into a declarative
title is equally good where the expectation survives the turn — `Wie verbinde
ich KI mit Tools und Daten?` opening `KI mit Tools und Daten verbinden` is
correct as it stands.

Rationale: the review found one destination carrying up to four public names,
and several link labels that promise something the destination does not deliver.
The defect in those cases is a changed promise, not changed wording, and a
verbatim rule would fix the wording while leaving the promise wrong — and would
break correct pairs to do it. The rule that catches the real failures is
semantic: `What you may put in` opening `Can I enter this data into an AI tool?`
is fine; a card about writing a customer email whose only onward step is a legal
admissibility page is not, whatever it is labelled.

Rejected: label equals H1, verbatim, site-wide.

## 2026-08-24 - The footer is two questions, and Blog is not one of them

Decision: the footer holds two groups and two rows of furniture.
`Terms & law` / `Begriffe & Recht` (Glossary, Law) and
`About AI Standard` / `Über AI Standard` (About, How claims are checked, The
project on GitHub); beneath them an unheaded utility row with the two reporting
paths; beneath that the legal bar — copyright, legal notice, privacy, both
licences, language. The wordmark opens it and the identity sentence does not.
Blog, Contribute, the human `security.txt` link and the second name for the
repository are gone. The four header journeys stay out, in both languages.

This implements "The footer does not repeat the header" (same date) and
supersedes the footer proposal in `site/INFORMATION_ARCHITECTURE.md`.

Rationale: a reader arrives at the bottom of a page with two questions —
something is in the way (a word, a rule), or who is behind this. Two groups
answer both; the previous three named a lookup promise that also held dated
editorial, and an abstraction no reader scans for. `Nachschlagen` was
simultaneously a footer heading and a section eyebrow inside `main` on Connect
AI. Reporting is an action rather than a destination, so it carries no heading
and no landmark. Legal notice and privacy join the copyright and the licences
because that is one subject, at the size the licences already use.

Blog is removed because one post per locale is not a destination a reader
returns to and the label names a format rather than a reader job — the same
test that removed it from the header on 2026-08-20. Its article had no inbound
link anywhere except that footer row, so About now carries a `NextStep` to it.
`/blog`, its URL and its feed are unchanged.

Measured at 375x812: 898 px (1.11 screens) to 603 px (0.74), 17 links to 14,
five github.com links to four, three footer navigation landmarks to two.
Desktop 1280: 385 px to 375 px, with no empty grid column.

Rejected: journey links in the footer; a `Legal` group of its own; keeping a
link because it was already there; holding a global row open for two unwritten
posts.

## 2026-08-24 - A next step is contextual, not a stage in a model

Decision: `NextStep` (formerly `RelatedNextStep`) offers the one action a reader
is most likely to want after a specific page. Its contract is a locale, an
optional context sentence, exactly one primary destination — label, optional
description, href — and at most one secondary destination of label and href.
No product stage, no page job, no ownership field, no related-content list.
Internal destinations only, and optional per page with nothing enforcing it.
`ProductStage` and `productStages` are deleted; `PageIntroduction` stops
rendering the page job, which survives as `data-page-job`.

Rationale: the component was sound — a navigation region, one accented
destination, an arrow with a reduced-motion guard — and the leak was one prop,
one import and one span. Rewriting it would have discarded working markup and,
in the shape that retires the old component only when later slices migrate its
users, would have left `Next step / Control` on public pages through three more
slices. Reuse's real cost is a name that outlives its concept, so the rename
was part of the decision rather than a separate tidy: "Related" is the word the
job excludes.

External destinations are out because an onward step promises that the site
continues the reader's journey, and artifacts and sources already have
components. A parent link is a kind of destination, not a second slot; giving
it one would put two links on every page by default.

Rejected: a parallel component; an `<h2>` for the label, which puts furniture in
the document outline; a build rule requiring every page to carry one, which
would be a check written before the content it checks.

## 2026-08-25 - The artifact block leads with the artifact, and its status says what it means

Decision: `ArtifactLink` renders the linked title first, then the description,
then one muted metadata line. The repository's artifact classification is not
public: `Copyable artifact` became `Copy this`, and `Zum Übernehmen` stayed as
it was. A blueprint's status reaches the reader as what it means — `draft`
renders as `not yet used on a real project` /
`noch nicht in einem echten Projekt eingesetzt` — never as the bare word, and
never as a bordered badge.

The site stores the status as a semantic key and maps it to that sentence per
locale. It does not read `blueprint.yml`. `check-conformance.sh` asserts the key
still matches the manifest, so promoting a blueprint fails the build until the
public sentence follows.

Rationale: at 375 px a reader met `COPYABLE ARTIFACT` and a `DRAFT` pill before
the thing being offered, and neither was something they could act on.
"Copyable" is a property, not an instruction; "artifact" is how this repository
files its own material. `DRAFT` was worse than useless — it is accurate, and it
means the payload is complete and has never been run against a real project,
which is a reliability claim. The English word says "unfinished text", and the
page gave a reader no way to find out otherwise. Saying what it means costs one
line and removes the guess.

The status had a canonical owner in `blueprint.yml` and a hand-typed copy per
locale on the site, with nothing holding them together — one place per fact,
broken, and due to break visibly the moment either blueprint is promoted. A
build-time read would have fixed it by making the public site depend on
repository payload, which `docs/purpose.md` refuses: repository origin does not
determine the website. CI is where the two can be held to agreement without the
website acquiring the dependency.

Rejected: removing the affordance entirely — the block's job is to mark
material to copy rather than another article to read, and the title alone does
not say that. Also rejected: keeping `DRAFT` and explaining it elsewhere, which
adds a lookup to a badge that could simply say the thing.
