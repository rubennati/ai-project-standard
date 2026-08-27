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

## 2026-08-25 - What a connected system can do is an intersection

Decision: `/data-flows` explains reach as something assembled, and states the
scope it holds for. Where a product reaches into another system, what is
possible is the overlap of what the product supports, what the connection
offers, and what the identity in the target system is permitted to do. The
model computes and signs in nowhere; it stays in the figure because leaving it
out is what lets people believe a model has a wire to their disk.

The fourth position is an identity, not an account: a connection may run under a
signed-in person's delegated access, under an application's own identity, or
under another credential the target system accepts.

One owner per concept follows from it. The hub owns the anatomy of reach;
`connect-ai-to-tools-and-data` owns the procedure; `where-knowledge-lives` owns
the routes by which material reaches a model; `training-and-retention` owns
training, retention and account-tier facts; `getting-it-back-out` owns deletion;
`data-sovereignty` owns where copies sit and who can compel access; `/start`
owns forms of working; `/secure-setup` owns checking, recovery, revocation and
records.

Rationale: the hub said reach depends on the account and the connection "not on
which product you chose", and captioned its own figure "'it has access to X' is
usually a statement about the fourth box". Two absolutes, contradicting each
other and the figure between them, which says the product decides what is handed
over. `/start/employee` makes the true version of the first claim — applicable
*terms* depend on the account — and terms are not capability. An intersection is
the smallest correct statement and creates no new monopoly.

Rejected: "capability is what survives all four" as the replacement. It is false
outside the connected case, because a product has capability with no connector
and no target system at all, and a rule that is wrong in the common case is not
an improvement on one that is wrong in the rare case. Also rejected: publishing
the four positions as a named model. It explains one situation; no other page
refers back to it, and none should.

## 2026-08-25 - Connect AI answers how, and the control loop is Secure Setup's

Decision: `connect-ai-to-tools-and-data` answers its own title first — what
provides a connection, how it gets an identity the target system accepts, which
operations it offers, and what a use of one amounts to — and carries one
complete worked example. It keeps only the boundary a reader decides while
connecting: read against act, identity, approval for consequential calls,
read-only first, and the stop condition. The control loop, the recovery
question, the verification checklist and the OWASP evidence that belongs with
them are `/secure-setup`'s and were removed here rather than left in place;
`tasks.md` carries the keys and the commit they are recoverable from. `/start`
owns forms of working, so the tool-using-system versus agent comparison is gone
rather than moved.

Three things are stated without an absolute, because none of them holds
generally: a connection may authenticate with OAuth or with a key or service
identity, it may or may not run as a person, and what a target system records
about a call is that system's design decision. The worked example uses OAuth and
says on the page that this is how that connection works rather than how all of
them do.

The five page-specific stage labels are gone — `Possibility`, `Collaboration`,
`Reach`, `Control`, `Reference` and their German counterparts. `Stop condition`
/ `Stoppbedingung` stays, and is not recorded as stage vocabulary: it names a
reader's question — when should I not continue with this setup? — rather than a
position in this project's product model, which is what made `Decision path` a
defect.

Rationale: the entry point is a *how* question and the page answered *should I,
and under what boundary*, with roughly half its height on boundary, control and
verification and no worked example. Governance was not wrong, it was in front of
the answer. `/secure-setup/before-you-grant-access` already covers narrow
identity, key hygiene, prompt injection and what to do, so the control material
was redundant with a live page rather than orphaned — which is why slice 4 cut
it, where slice 3 preserved comparable material that had nowhere to land.

Rejected: keeping a second connection figure here. An anatomy and a procedure
are different objects, but publishing both put two four-box models with
different nouns one link apart, which is the duplication the ownership decision
exists to remove.

## 2026-08-26 - Four questions are ordered, and two concerns are not steps

Decision: `/secure-setup` keeps all six of its concepts and stops publishing
them as a six-step lifecycle. Four are genuinely ordered and stay numbered —
what is permitted, how a boundary holds, what to check, what to keep. Watching
something that runs unattended, and getting an access back, are continuing
concerns and sit in a second, unnumbered block. `Decide / Configure / Verify /
Record / Monitor / Take it back` is not a public taxonomy in either language.

Both former dead ends now route to pages that already own the parts, and no new
route was created. Monitoring decomposes into standing access that outlived its
reason (`before-you-grant-access`), output quality when work repeats
(`checking-the-result`), product defaults as context, and incident detection,
which the site states it does not cover. Getting out decomposes into stopping
future access (`before-you-grant-access`), reconstructing what happened
(`keeping-a-record`), and reversing an action, which belongs to the target
system and is promised nowhere.

The grammar is the one `/data-flows` shipped on 2026-08-25: reader questions as
block names, each destination carrying the child's own title. Where one page
answers two sub-jobs, the sub-job is named beside the link rather than by giving
the page a second name.

Rationale: the hub claimed an order that two of its entries did not have, and
its own step six said the way back is worth having tried *before you need it* —
which places it at the moment of granting, not sixth in a sequence. Two of six
entries rendered with no link, and the page then spent 130 of 358 words arguing
that not all six applied: structure that lied, followed by prose apologising for
it. Naming what is ordered and what is continuing removes both.

Rejected: keeping six numbered steps and only fixing the destinations, which
preserves the false ordinal claim. Also rejected: dropping the numbers from all
six, which discards a true thing — you settle what is permitted before you build
a boundary, and check a result before you can record what was checked. Also
rejected: an operating or monitoring route. Two hubs now point at the same
absence — `/start`'s sixth way of working and this one — which is evidence for a
later content-scope decision and not a reason to invent a destination.

## 2026-08-26 - A boundary is enforced outside the model

Decision: `before-you-grant-access` owns the distinction between an instruction
and a boundary, and states it without a target-system monopoly. If the only
thing stopping an action is text the model read, it is guidance. A boundary
refuses the same operation whether or not the model chose to comply, and it can
sit in the connection that decides which operations exist, in a credential
scoped narrowly, in an allow-list, in the permissions the target system applies
to the identity it sees, or in an approval required before the call goes out.
The conceptual claim is only that it is enforced outside the model.

The page also gains the three concepts Connect AI handed over — whose rights it
acts with, what an approval has to show before it runs, and taking an access
back — and each recovered verification sits next to the claim it proves rather
than in a checklist block. Approval is stated without absolutes: a bare
"continue?" is not enough, and a summary in the assistant's own words alone is
not enough, because the concrete action may or may not already be on screen.
Revocation is stated conditionally: an index, cache or export made while the
access existed *may* still hold the material afterwards.

Rationale: the page's central idea was section seven of eight, four screens down
on mobile, with the actions that follow from it in section eight. The 2026-08-25
intersection decision established that reach is assembled from several layers;
an enforcement rule naming only the target system would have replaced that with
a new monopoly one slice later.

Rejected: carrying the OWASP MCP Security Cheat Sheet across with the recovered
material. Its public job — least privilege per tool, scoped credentials, visible
approval, logging — is already covered by the Agentic Skills evidence this page
carries, and nothing that landed is a new external factual claim. A second
source band would have been evidence furniture over advice.

## 2026-08-26 - Consequence is one axis and reliance is another

Decision: `checking-the-result` owns the consequence-to-control model and states
it once. How far a result went — text you can throw away, a change you can still
reject, something that already happened — and who is carrying it are two axes
that combine, not one ladder said twice. The hub states the principle in a
sentence and builds no second ladder.

Reading is a useful check only where you understand enough to notice the errors
that matter; otherwise the check is an authoritative source, someone with the
relevant expertise, or a test that examines the property directly. Code you
could not have written can still be checked by running it.

Rationale: the page carried both axes already — one in the lead, one in the
first heading — in different vocabulary, 500 px apart, without saying they
compose. The old competence rule tied verification to whether the reader could
have produced the work, which implied AI is only useful inside existing
expertise and ruled out the two checks that actually close that gap.

Rejected: moving the model to the hub. The page that turns a principle into
something to do is where the principle belongs, and the hub would have inherited
a framework in place of a route.

## 2026-08-27 - A repository document is not a web page

Decision: `/docs/**` is retired from the public site and its rendering
machinery is removed — the `docs` content collection, the two page templates
and the sorting helper. The durable publication rule: a document in the
repository is not automatically a web page; public content requires a
deliberate page under `site/src/pages/` with its own reader job, and one that
answers the product brief's admission test. The absence of an automatic
renderer is the prevention mechanism — no allowlist to maintain, nothing for a
new file to fall into.

Each of the 21 published URLs redirects one-to-one to the exact document it
rendered, on GitHub; `/docs` itself redirects to the `docs/` directory. No
source Markdown is deleted. `/profiles` — English-only, orphaned, with both of
its actions pointing at wrong or retiring destinations — redirects to the
blueprints directory that replaced profiles; the adopter-facing tombstone
`docs/profiles.md` stays. The licence sentences in the legal notice, About and
the README drop their public-`/docs/` clauses; no licence changes.

Rationale: publication was a filesystem glob, so 21 maintainer documents were
indexed and sitemapped, all 60 of their in-body internal links resolved
against the web path and 404ed, and every meta description was a truncated
first line. Not one page passed the admission test as reader content, and
`docs/purpose.md` — itself published — states the rule the glob broke. The
2026-08-24 decision made publication explicit; this one settles the shape.

Rejected: noindex-but-reachable (no compatibility need survived inspection,
and it would preserve 60 broken links indefinitely); redirecting everything to
one generic page; deleting source material because its route was wrong.

## 2026-08-27 - practical-ai-collaboration stays a repository document

Decision: `docs/practical-ai-collaboration.md` is not promoted to a public
page. It retires with the rest of `/docs/**` and remains maintained as
contributor documentation. This supersedes the promotion half of the
2026-08-24 publication decision, which called it "preserved and later promoted
deliberately"; preservation holds, promotion does not.

Rationale: first-principles inspection found its substance is repository
practice — `.ai/` file discipline, branch naming, draft-PR etiquette, merge
order — narrated in a vocabulary that is not the site's. Publishing it would
put a second, git-shaped collaboration model beside `/start`'s six ways of
working and restate `keeping-a-record`'s question for one medium, at 17.8
mobile screens, in English only.

The reader question it brushes against is real and unowned: several AI
sessions touched one repository — how does the work stay reviewable? If that
is ever built, it is a fresh, bilingual Open Source article, not this
document. Recorded as a queued gap, not built.

Rejected: promoting it to `/start`, About or a standalone route; rewriting it
into site voice now (nothing needs it yet).

## 2026-08-27 - The evidence method is trust content, owned by About

Decision: the method page moves from `/glossary/evidence-method` to
`/about/how-claims-are-checked` in both locales, keeping the `evidenceMethod`
route key so the footer and all evidence badges follow through the route
helper; the old URLs redirect. Its H1 is the footer's own promise — `How
claims are checked` / `Wie Aussagen geprüft werden`. It now owns the whole
method: the five levels, source ranking, what a check date does and does not
do, the limits of a source's authority, and the correction path. About keeps a
two-sentence bridge; its hand-typed copy of the method — which had already
drifted from the generated one — is gone. The retired lead claim ("a claim
without a date is unfalsifiable") is replaced with the corrected doctrine that
`evidence.ts` has carried since slice 1.

No Reference area is created: after this move, nothing on the site is durable
inspect-rather-than-read material except the glossary itself, and a surface
for one item would be taxonomy for a word. The glossary is called `Glossary` /
`Glossar` on every surface — one name instead of five — and its index stops
claiming terms are linked wherever they occur.

Rationale: a methodology explaining how the site works is not a term a reader
meets in prose; the footer already filed the page under About, and the
information architecture reserved the move. 244 in-body links arrive through
one route-helper case, so the URL was the only thing disagreeing with the
ownership.

Rejected: leaving the URL and changing only the framing; a `/reference`
surface; linking the method from the glossary index.

## 2026-08-27 - One owner per legal concept

Decision: `four-separate-questions` is the Law hub's orientation page and
stops answering questions its siblings own. The substantive trade-secret
explanation belongs to `what-may-go-in` (the map keeps a bridge); the
substantive AI Act Art. 4 explanation belongs to `/start/decision-maker`,
which answers the reader the duty lands on (the map keeps one sentence and a
link); the three governance sections that were not legal content are removed.
Its H1 drops the count and the negation for the reader's own words. The hub
opens on the routing question `Which rules apply when you use AI at work?`,
orders the map first, and carries no disclaimer.

The slice-4 re-test of `what-you-agree-to` resolves as keep-but-narrow: the
Art. 4(12) breach-versus-loss-of-control distinction stays there — it corrects
what a reader calls the transfer, which is that page's job, not Law's — and
the vendor-claim decoder moved to `where-knowledge-lives`, which owns the
three routes it distinguishes. `data-sovereignty` links
`us-cloud-and-the-gdpr` where Chapter V comes up, giving that page its first
inbound link from outside Law.

Rationale: the trade-secret three-condition test and the architecture-document
example appeared near-verbatim on two pages; Art. 4 had two substantive
explanations and the better one was already on Decision Maker, anchored there
by design. A reader routed by the hub should meet each explanation once.

Rejected: moving Art. 4(12) to Law (a definitional correction inside a
mechanism explanation, not a permission question); merging the two law pages;
retiring `what-you-agree-to` (three unique ideas remain and its H1 now
matches its body).

## 2026-08-27 - `/start/what-it-is-doing` keeps its URL, deliberately

Decision: the route stays. The queued route-quality question from slice 4 is
closed, not deferred again. It is revisited only if the page is substantially
rewritten.

Rationale: every human-visible surface already carries the current title — both
inbound links (one per locale, from `/use-cases`), the SERP title and the H1 —
and the page's next step sends a mechanism-seeking reader to `/data-flows`. A
URL-only arrival is corrected in one glance and one click, so the slug differs
from the H1 without misleading anyone; many good URLs do not repeat their H1.
Against that, this is a static host: Astro's redirects emit meta-refresh stubs
with `noindex`, so renaming permanently second-classes the old URL for a
cosmetic gain. The one thing that genuinely misled was `llms.txt`, which still
described the pre-slice-4 mechanism page at this URL. That was a stale machine
description, fixed independently of the route.

Rejected: rename with redirect; retirement; deferring the decision a third time.

## 2026-08-27 - Art. 22 GDPR is deliberate non-coverage

Decision: automated decision-making under Art. 22 GDPR is not covered, and the
absence is recorded rather than treated as a gap. If it is ever covered, it is
one paragraph on `/law/four-separate-questions`, never a route.

Rationale: the site's journeys are assistive — drafting, retrieval, connections,
agents that stop to ask — and a reader only meets Art. 22 by building solely
automated decisions with legal or similarly significant effect, which the
product does not help anyone do. No current sentence misleads by the omission:
the Law map states it is a map rather than an answer to any of its questions.
Writing it would mean researching a regime the site's readers are not in.

Rejected: a paragraph on the Law map now; a route; leaving it unrecorded so it
resurfaces as an open question in the final check.

## 2026-08-27 - Terminology is fixed by meaning, and stays out of CI

Decision: three reader concepts have one word each, in both languages —
personal account / `Privatkonto`, consumer plan / `Privatkundentarif`, business
plan / `Business-Tarif`. `Verbrauchertarif`, `Verbraucherkonto`,
`Geschäftstarif`, `privates Konto` and `business tier` do not survive where they
mean exactly those. Generic *tier* gets no mandatory German word: the sentence's
own meaning decides (`Tarif`, `Tarifvariante`, or the product's own wording),
and `Stufe` is left to the evidence method, which already owns it. A credential
as an issued instrument is a `Zugangsmittel`; the secret itself is a `Geheimnis`
or a named token, key or password, and the two are not interchangeable — the
log rule from slice 5 depends on that distinction. The Data Flows connector
concept is a `connection` / `Anbindung`; `Verbindung` stays for the network
sense. The reader-facing name is `AI Act`, with `Verordnung (EU) 2024/1689`
where a citation calls for it.

No CI rule enforces any of it, and none is planned. Every class of defect the
slice 7 audit found was a judgement about meaning — which sense a word carries
in a sentence — and a checker that cannot read the sentence would either pass
the real defects or fail correct prose. The same reasoning already rules out a
`du`/`man` lint: `man` is correct where a statement is genuinely general.

Rejected: a terminology linter; a dash-glyph rule; a heading-style rule; making
`Stufe` the canonical German for tier, which would have collided with the five
evidence levels.

## 2026-08-27 - Three unowned questions get sections, one setting stays unowned

Decision: three questions the site pointed at without answering are answered on
the pages that already own their neighbourhood, and none of them becomes a
route. `getting-it-back-out` gains export and portability — its slug promised it
and only deletion delivered. `what-may-go-in` names the six Art. 6(1) bases,
because the page instructed readers to name the legal basis without ever naming
them. `code-written-at-work` gains "What if the AI wrote it?", bounded to code,
publishing and licensing.

The fourth stays unowned on purpose: memory or personalisation as a product
setting has no dated fact owner, and it does not get one here. `where-knowledge-lives`
explains the mechanism, and the switch itself needs per-vendor checking with
sources — which is content scope, not an editorial fix. Recorded as future
scope. The three account switches are not duplicated anywhere; their discovery
from `/start/employee` and the Data Flows hub was tested and found sufficient.

Rationale: each of the three had a page whose own copy raised the question, so
the smallest honest fix was a section on that page rather than a new URL. The AI
code question shipped because the chain is code-specific and current: Art. 1(3)
of Directive 2009/24/EC sets originality as the author's own intellectual
creation and Art. 2(1) frames the author as a natural person save where a
Member State allows a legal person as rightholder, § 69a(3) in Germany and
§ 40a in Austria carry it, and § 31(1) and § 24(1) make a licence something an
author grants over a work. The US Copyright Office's 2025 report is cited as the
United States' own position and labelled as such, never as authority for EU or
Austrian law. Where the line falls between what a person shaped and what the
machine determined is judged case by case, and the page says that rather than
inventing a threshold; it makes no claim about the state of case law.

Rejected: an export route; a general AI-output-rights route; an Art. 6 tutorial;
naming vendor export switches beyond what each vendor documents for its own
product; generalising those switches into a rule about workplace plans;
adding memory facts without checking them; citing a US judgment for a
proposition it did not decide.

## 2026-08-27 - The footer is three groups, and Legal is the third

Decision: this amends "The footer is two questions, and Blog is not one of
them" (2026-08-24), by the maintainer's explicit request rather than a review
finding. The footer now holds three groups — `Terms & law` / `Begriffe &
Recht` (Glossary, Law), `About AI Standard` / `Über AI Standard` (About, How
claims are checked, The project on GitHub), and `Legal` / `Rechtliches`
(Legal Notice, Privacy Policy, Report a problem, Report a vulnerability). The
unheaded reporting row and the legal-notice/privacy links that used to sit in
the closing bar move into the named third group; the closing bar keeps only
copyright, the two licences and the language switch, the licences and switch
grouped as one right-aligned cluster rather than centred alone between the
other two. The desktop grid treats the footer as two zones — a brand track
and a navigation zone holding the three groups at equal track width — rather
than four peer columns of uneven auto width, corrected in the same pass.

The principle the 2026-08-24 decision argued for is not reversed: the footer
still does not carry `/use-cases`, `/start`, `/data-flows` or `/secure-setup`
in any language, and a stranded reader is still answered by the page's own
`NextStep`, not by the footer absorbing more of it. What changed is only the
internal grouping of legal and reporting content — it now reads under its own
name instead of an unheaded row plus the closing bar, which is a legibility
change, not a reopening of what a header journey is or where one belongs.

Rejected: reverting to two groups; making Legal a fourth header destination;
duplicating the four header journeys into the footer to fill the third
column; keeping the closing bar's original three-way `space-between`, which
this same pass found left the licence line reading as an unintended gap
rather than a deliberate grouping.

`site/INFORMATION_ARCHITECTURE.md`'s footer table still describes the
two-group shape; updating it is recorded as a queued documentation fix, not
done in this pass — see `tasks.md`.
