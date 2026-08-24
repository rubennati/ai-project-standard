# AI Standard — Whole-site editorial and structural audit

## Report metadata

| | |
| --- | --- |
| Audit date | 2026-08-24 |
| Product | AI Standard — the public website at `ai-standard.rubennati.at` |
| Repository | `rubennati/ai-project-standard` |
| Audited site state | `021fb42` (merge of PR #154, the homepage editorial reset) |
| Audit working branch | `docs/footer-not-settled` at `b3c563a`, which differs from `021fb42` only under `.ai/` — `site/` and `docs/` were byte-identical |
| Scope | Every meaningful public page family, both locales, plus global surfaces and machine surfaces |
| Locales | English and German |
| Rendered widths | 375 × 812 (mobile) and 1280 × 800 (desktop) |
| Routes verified | 376 sitemap URLs; 379 built HTML files; 143 glossary terms per locale |
| Status | **Baseline, before the whole-site implementation.** Findings describe the site as it stood on 2026-08-24 and are not rewritten to match later work. |

This report is the second site audit in the repository. It does not supersede
[`CONTENT_AUDIT.md`](./CONTENT_AUDIT.md) (2026-08-10), which measured route
coverage against the ten reader questions in the product brief and proposed a
disposition per route. That audit asked *what does each route contribute*. This
one asks *how does the site read to someone using it*.

Sections marked **Human decision after review** record what was approved after
the audit was delivered. Where an audit recommendation was refined or rejected,
both layers are preserved deliberately, so a later reader can see what was
found as well as what was decided.

---

## Executive summary

### What already worked

- **The homepage reset held.** It says what AI Standard is, offers two ways in
  and three direct reader questions, and does not describe the site's own
  taxonomy. It became the editorial reference for everything else.
- **The header held under test.** All four labels were checked against their
  destination H1s, against each other and for self-duplication on arrival, in
  both languages. No contradiction strong enough to reopen membership was found.
- **Individual pages were often strong.** `training-and-retention`,
  `checking-the-result`, `what-may-go-in`, the three open-source articles, the
  blog post and About's body prose were all found to be good writing that a
  consistency pass should not disturb.
- **The evidence system worked as designed.** Labels are generated from one
  source, `fact` and `measured` claims fail the build without a source and a
  check date, and the vendor-as-source discipline is applied consistently.
- **German address discipline held.** `du` outside the two legal pages, no
  `Werkzeug` for software, no reveal framing in any heading — the CI language
  guard was doing its job.

### Where the dominant problems were

- **The site could not say what it was.** Six public and machine surfaces gave
  five different answers, two of which still described the repository standard
  behind the site or a security-practitioner persona the homepage had dropped.
- **The internal product model surfaced as reader-facing language** on four
  routes as section eyebrows, and more broadly as the organising spine of two
  hubs.
- **Negation was the default heading grammar** — 72 of 454 headings across
  22 of 35 English routes — against a house rule of one per section.
- **Readers could not leave a page.** No sticky header, no breadcrumbs on any
  content route, and only four of 35 pages carried any closing-step furniture.
- **Three public families had no inbound navigation at all**: `/open-source/**`,
  `/profiles` and `/docs/**`.
- **The same facts were maintained in three to five places**, several of them
  dated claims that will drift apart silently.

### Overall character

This was primarily a **copy problem**, with one **structural cause** (the page
shell offers no way onward) and one **ownership problem** (facts without a
single owner). It was not primarily a navigation-architecture problem: the
header and the four-journey structure survived the audit intact.

---

## Methodology

What was actually done, in order:

1. **Canonical product context loaded** — `docs/purpose.md`,
   `docs/website-product-brief.md`, `docs/language-style.md`, `.ai/state.md`,
   `.ai/routing.md` and the relevant entries in `.ai/decisions.md`.
2. **Source sweep** — every content module under `site/src/data/`, the layout,
   the shared components, the label table in `site/src/i18n/ui.ts` and the
   route contract in `site/src/i18n/routes.ts`.
3. **Built-HTML sweep** — all 379 built pages, used to establish what a reader
   actually receives: rendered headings, eyebrow elements, card field labels,
   repeated furniture and meta descriptions.
4. **Route and sitemap inventory** — 376 sitemap URLs and 379 built HTML files
   enumerated and cross-checked.
5. **Rendered measurement** — 45 pages measured at 375 × 812 and 10 at
   1280 × 800 against the project dev server. Heights are of the `main`
   element; "screens" is that height divided by the viewport height.
6. **Link-graph and ownership review** — inbound and outbound internal links
   resolved across all built pages, to find orphans, dead ends and facts
   maintained in more than one place.
7. **Language review** — both locales read independently, against the rules in
   `docs/language-style.md`.
8. **Fan-out and adversarial verification** — the page families and the two
   cross-cutting dimensions were audited in parallel by separate passes, and a
   final critic pass attempted to refute the load-bearing claims. Claims that
   could not be reproduced from the markup were corrected or dropped before
   this report; two are noted inline below.

### What was not done

- No user research, analytics or search-console data was consulted. Every
  reader-job statement in this report is an editorial judgement from the page
  and its entry points, not an observed behaviour.
- Individual glossary term pages were sampled, not audited one by one. The
  corpus was analysed structurally — link graph, field usage, byte weight,
  untranslated values — across all 143 terms per locale.
- Legal completeness of the legal notice was not assessed. One open question is
  recorded and routed to counsel rather than answered.

---

## Product identity

### Audit finding

The site stated its own identity on six surfaces, with five distinct answers:

| Surface | What it said |
| --- | --- |
| Homepage lead | "AI Standard is an independent site for using AI at work." |
| Footer tagline (every page) | "Practical guidance for responsible AI work, from the first prompt to an acting agent." |
| `manifest.webmanifest` | Name `AI Project Standard`; "A repository standard for long-term human and AI collaboration." |
| `llms.txt` | "A security practitioner's view on using AI at work… Austria first, then the EU." |
| Legal notice purpose sentence | "a knowledge base on AI terminology and project conventions" |
| Homepage `WebSite` structured data | The homepage meta description — a seventh string, though consistent in meaning |

Two of these were exactly the framings the homepage reset had removed: the
repository standard, and the security persona as the product promise. The
product *name* was not stable either — `AI Standard` against
`AI Project Standard`.

The layout also carried a stale fallback description
("A repository standard for long-term human and AI collaboration."). No page
fell back to it at the time of the audit, so it was latent rather than visible.

Two further strings in `site/src/i18n/ui.ts` — `aboutIntro` and
`aboutLayerCopy` — defined the *retired* product ("A starting baseline for
open-source projects that use AI"; "The repository is the operational layer…
This site is the knowledge layer…"). Both were unreferenced by any page and
absent from the build: a contradiction held in reserve rather than a live one.

**Audit priority: P0.**

### Human decision after review

Slice 1 became the approved remedy, and shipped in PR #158 after this baseline
was taken. One canonical identity sentence per locale now lives in
`site/src/data/identity.ts`; the homepage, the fallback description and the
footer tagline read it, and the two static machine files restate it under a
conformance check scoped to those files alone.

---

## Global navigation

### Header

#### Audit finding

**The current membership and labels hold.** Verified against four tests:

| Label (EN / DE) | Destination H1 (EN) | Verdict |
| --- | --- | --- |
| Where AI fits / Wo KI sinnvoll ist | What are you trying to get done? | Label and H1 name different subjects |
| Ways of working / Arbeitsweisen | How do you want to work with AI? | Agrees |
| Access & actions / Zugriff & Aktionen | What can it access, and what can it do? | Agrees with the H1, not with the shelf |
| Secure & verify / Absichern & prüfen | How do you secure this, and how do you check the result? | Agrees |

No header label appeared verbatim in its destination's `main` element, so there
was no arrival-duplication problem. Both label sets read naturally in their own
language.

Two concrete observations, neither of which justified reopening membership:

- **`Access & actions` excludes the largest part of its own shelf.** Three of
  six children — 3,008 English words, the biggest block on the shelf — are
  about retention, consent and deletion, which is neither access nor action.
  Recorded as a shelf-composition problem for the Reach slice, not a header
  defect.
- **German `Aktionen` is the weak word.** It appears zero times on
  `/de/data-flows`; the concept is carried there by `Handlung`, `auslösen` and
  `Vorgänge`. In everyday German `Aktion` reads as a sales promotion.

**Audit priority: P2 for both, against a settled decision.**

### Footer

#### Audit finding

| Finding | Evidence |
| --- | --- |
| Excessive project utilities | Five `github.com` links on every page; six on the homepage. Four of the five links in one group leave the site. |
| Duplicated vulnerability target | "Report a vulnerability" and "Security contact" resolved to the same URL. `security.txt` line 1 is `Contact: …/security/advisories/new`, byte-identical to the footer link one group above. |
| Group labels contradicted by members | "Reference" / "Nachschlagen" is a verb that promises lookup; Blog is dated editorial and Evidence method explains the site's own honesty. "Project & trust" / "Projekt & Vertrauen" names an abstraction no reader scans for, and mixes one reading destination with four off-site actions. |
| Mobile size | 898 px on every English page — 1.11 mobile screens, and taller than the entire homepage main content (966 px). German 920 px. Desktop 385 px, which is proportionate. |
| Weak end-of-page usefulness | With no sticky header and no breadcrumbs, the footer was the entire navigation available at the end of a long article, and routed only to reference, utilities and legal. |

German label defects: `Über` is a bare preposition where the destination is
titled `Über das Projekt`; `Nachweismethode` is comprehensible but not
something anyone searches; `Projekt & Vertrauen` is not a phrase a German
reader forms.

The audit also observed that the footer contained none of the four primary
journeys, and framed that alongside the end-of-page problem.

**Audit priority: P1.**

#### Human decision after review

The audit's framing of those two observations as one problem was **rejected**.

> **The footer must NOT repeat the four header journeys.**
> `Where AI fits` / `Wo KI sinnvoll ist`, `Ways of working` / `Arbeitsweisen`,
> `Access & actions` / `Zugriff & Aktionen` and
> `Secure & verify` / `Absichern & prüfen` do not go into the footer in any
> language.

The reasoning recorded in `.ai/decisions.md` (2026-08-24): a stranded reader
and a crowded footer are two problems, and answering the first with the second
makes the second worse. Duplicating the header would put every primary
destination on three surfaces of one screen — the failure already recorded in
`.ai/errors.md` for the rejected homepage.

The approved direction is instead:

- **Footer** — supporting global navigation, substantially smaller: Glossary;
  Law, without pretending Law is lookup; About with a natural German label;
  Blog only if it earns global placement; the evidence method as trust content;
  one problem-reporting path; one vulnerability-reporting path; at most one
  repository link as a secondary utility; legal notice and privacy. The human
  `security.txt` link goes; the endpoint keeps being served.
- **Page-level onward path** — a separate, contextual mechanism, visually
  secondary to the article, carrying no product-stage label.

Also **rejected as requirements**: a sticky header and a breadcrumb row. Either
may turn out to be the right mechanism; neither is adopted because an audit
mentioned it.

---

## Homepage

The homepage editorial reset (PR #154) had already succeeded before this audit
began, and the audit confirmed it rather than reopening it.

Its qualities are the reference for the rest of the site: it says plainly what
AI Standard is, starts from recognisable work rather than internal
architecture, uses ordinary reader questions as its direct entries, does not
explain the site's own taxonomy, does not use a security or compliance persona
as the product promise, and keeps trust information compact.

Three observations were recorded without reopening the page:

- The lead makes a three-part promise ("where AI is useful, how to work with
  it, and what to pay attention to") and the page routes to two of the three;
  `/secure-setup` is not reachable from the homepage.
- `/use-cases` is named three different ways within two clicks — header label,
  hero button, destination H1 — and the phrase "use cases" appears nowhere in
  the destination's own copy.
- The "Developed in the open" block promises the evidence method in its second
  sentence and links only to GitHub.

Its `home.ts` header comment claims the three direct entries link to pages
"titled … word for word". That is true of one of three: `/start/employee`.
The other two are question-to-declarative conversions, which are good — the
documentation was wrong, not the links.

**Human decision after review:** the homepage remains the editorial reference
and is not changed by the implementation unless a slice needs a concrete
integration fix.

---

## Four primary hubs

### `/use-cases` — Possibility

- **Reader job:** "I have a piece of work in front of me — can AI help with it,
  and where do I read about it?"
- **What works:** the H1 in both languages is the editorial principle in
  practice. All twelve card examples are concrete and specific — among the best
  writing on the site. Card six ("Decide not to use AI" / "Dich gegen KI
  entscheiden") exists at ordinary weight without moralising. No internal
  vocabulary leaks anywhere on the page.
- **Main defects:** five names for one destination sharing no content word; in
  German the header label, hero button and H1 share nothing at all. Limitation
  copy outweighs capability copy — English examples 96 words against limits
  103; German 87 against 94 — on the hub that carries the product's opening
  promise. Every "Where it stops" is terminal: six risks raised, none resolved,
  and no card reaches `/secure-setup`. Card one, the broadest audience, raises
  truthfulness and links to a data-permission legal page.
- **Depth and mobile:** 2,597 px mobile (3.2 screens), 1,283 px desktop.
  Best intro-to-content ratio of the four hubs — 437 px of furniture, 0.54
  screens. Six structurally identical three-part cards are the whole page below
  the fold; the twelve repeated field labels carry no information after the
  first card.
- **Duplication and ownership:** no header or footer duplication. Form
  duplication with `/start` — both six cards, both counting "six" in their meta
  description.
- **Onward path:** three of five link labels are the destination H1 verbatim,
  which is the right convention; two are not, and those two serve the widest
  audience. Zero links to `/secure-setup`, zero back to `/start` although
  `/start` bridges into this page.
- **Audit priority: P1.**
- **Approved direction:** slice 3 and slice 7 territory for the copy;
  the naming question is resolved by the semantic link-label rule below.

### `/start` — Collaboration

- **Reader job:** "Which way of working with AI fits this task?"
- **What works:** the six distinctions are real and carefully drawn. No card is
  numbered or ranked, and what the human owns is stated first in all six. The
  three invariants are the page's actual thesis. The bridge to `/use-cases`
  correctly sends a reader who is on the wrong page somewhere useful.
- **Main defects:** the six card names are the "Forms of collaboration" table in
  `docs/website-product-brief.md`, verbatim and in order — Chat, Assistant,
  Workspace assistant, Tool-using system, Agent, Automated operation. That is
  the internal model as the page's entire organising spine. All eighteen card
  fields are ownership, exposure and verification; nothing says what a way of
  working is *good for*. Four stacked introductory paragraphs precede the first
  card, one of them arguing against a ladder reading the reader has not yet
  formed. Three of the hub's four children — including two of the homepage's
  three direct entries — sit under the heading "Three questions this page does
  not answer" / "Drei Fragen, die diese Seite nicht beantwortet".
- **Depth and mobile:** 4,603 px mobile (5.7 screens), 2,323 px desktop. 795 px
  of intro furniture, 0.98 screens, before the first card; German 823 px. The
  page is 66 rendered text blocks averaging ten words, eighteen of which are
  one of three strings repeated verbatim.
- **Duplication and ownership:** the "elsewhere" list does not duplicate global
  navigation — none of those three children is in the header. Only the framing
  is wrong.
- **Onward path:** five of six card links leave `/start` entirely. The hub
  functions as a dispatcher into other hubs' children.
- **Audit priority: P1.**
- **Approved direction:** slice 3. Keep the six distinctions, rename the cards
  to situations a reader recognises, resolve the prerequisite role questions
  before asking the reader to choose, and remove the negative heading.

### `/data-flows` — Reach

- **Reader job:** "I am about to connect an AI tool to my mail, files or
  systems — what will it be able to see, keep and do?"
- **What works:** **"Reach" / "Reichweite" appears nowhere in the rendered hub,
  in either locale.** This is the discipline the internal-vocabulary issue asks
  for, already achieved, and it is the proof that the child pages can drop
  their eyebrows too. All six children are linked; nothing is orphaned. The
  link labels are the best copy on the page and are already reader-shaped.
- **Main defects:** the hub's first move is to teach its own four-way model —
  the intro names it, the H2 repeats it, and the four card titles are the same
  four axes a third time. The four cards own 2 / 3 / 1 / 0 children; card four's
  only link leaves for `/secure-setup`. The note paragraph and the card tails
  state the same three clauses twice. The boundary figure is a compressed
  preview of the child it then links to. Nothing on the hub says what any of
  this is *for*.
- **Depth and mobile:** 3,283 px mobile (4.0 screens), 1,682 px desktop.
  837 px of intro furniture, 1.03 screens. Roughly 200 of 435 words go to the
  model and the diagram, 130 to routing, for a shelf of about 6,600 words.
- **Duplication and ownership:** the four-layer access model is drawn here and
  again on `connect-ai-to-tools-and-data` with different nouns for the same
  boxes.
- **Onward path:** coverage is complete but distribution is misleading; the card
  most readers arrive for offers one link while the retention card offers three.
- **Audit priority: P1.**
- **Approved direction:** slice 4.

### `/secure-setup` — Control

- **Reader job:** "I am about to let AI touch work other people depend on —
  what has to be in place before, and what do I do after?"
- **What works:** the sequence is honest, and a numbered list is the right shape
  here in a way it is not on `/start`. The security content is proportionate:
  OWASP cited rather than a taxonomy invented.
- **Main defects:** step six, `Take it back` / `Zurücknehmen`, linked to
  "Connect AI to tools and data" — the opposite verb, on a 15-screen page about
  building a connection. The H1 opens on `this` / `das` with no antecedent, and
  names two of the six steps on a page whose thesis is that the other four are
  the neglected ones. The six stage names are the project's control lifecycle,
  published verbatim from the module's own header comment. Step five, Monitor,
  is a named duty with no destination, no example and no alternative.
- **Depth and mobile:** 2,182 px mobile (2.7 screens), 1,525 px desktop.
  **906 px of intro furniture, 1.12 screens — the worst on the site.** Roughly
  130 of 358 words argue about how many of the six apply.
- **Duplication and ownership:** the three account switches on
  `before-you-grant-access` compress three thousand-word `/data-flows` pages
  into three sentences and link to none of them.
- **Onward path:** at audit time five of six steps had a destination; one of
  those five was the contradiction above.
- **Audit priority: P0 for the step-six link; P1 for the rest.**
- **Approved direction:** the step-six link was corrected in slice 1; the rest
  is slice 5.

---

## High-impact child pages

Ranked by how much the reader loses.

### 1. `/start/employee` — "Can I use AI at work?" / "Darf ich KI im Job verwenden?"

The site's most-promoted entry, reached from a homepage whose H1 is *Use AI well
at work*. All seven sections are permission, restriction or incident handling;
four of seven carry the `Recommendation` badge. Capability language in the whole
page is two spans. Both content links go to risk pages; there is no link to
`/use-cases`, to `/start`, or to anything showing AI doing work. **P0.**

The H1 promise chain is exact in both languages and must not be touched — it is
the best entry-to-page match on the site.

### 2. `/data-flows/connect-ai-to-tools-and-data` — "Connect AI to tools and data"

15.4 mobile screens English, 16.7 German — as long as the entire 143-term
glossary index. The entry is a *how* question; the page answers *should I, and
under what boundary*. No named product, no setup action, no worked example.
Capability copy is roughly 85 words against 783 of boundary, stop-condition,
control and verification. 25 field labels across 8 distinct vocabularies, about
44 bordered blocks in one mobile column, and five internal-vocabulary eyebrows.
16 links, no parent, no breadcrumb, no sibling. The page says content becomes
model input and never says where it lands. **P1.**

### 3. `/start/what-it-is-doing` — "What an AI tool is doing when you use it"

Mis-parented and fused. Sections one to five are mechanism, and sections one and
three are the clearest explanation of it anywhere on the site. Section six is a
tooling recommendation, seven answers the decision-maker's question, eight is
glossary front matter. Its first two sections retell the `/data-flows` hub's own
opening explanation. Two links, both into the glossary; no return, no siblings.
Referred to by three different names in each language. **P1.**

### 4. `/start/decision-maker` — "I decide for others — where do I start?"

One inbound link on the entire site, from a list headed "Three questions this
page does not answer". It holds the site's only coverage of an in-force legal
duty (AI Act Article 4), which `/law` does not mention and does not link to.
"Where do I start?" is answered with a compliance backlog: no first step, no
example, nothing to do this week. The English section on business tiers is
missing a legal caveat the German carries, and asserts under a `Fact` badge what
the German correctly attributes. **P1.**

The German H1 and headings are systematically better than the English here; the
German is the model, not the follower.

### 5. `/start/vibe-coding` — "How far vibe coding takes you"

9.0 mobile screens English, 9.8 German. The lead explicitly commits to the
reader who stops at Explore or Prototype, then every subsequent block serves
only the reader moving up; the closing 28% of the page is four consecutive
tightening blocks against a 15% capability section. All three exits point toward
constraint. `Fits when` scopes the page to a low-consequence reader while 450 of
1,099 words describe Deliver and Operate. **P1.**

The stage grid's content is genuinely balanced — "What the AI does" stays
positive at every stage. It is the page's shape that reverses it.

### 6. `/law/what-may-go-in` — "Can I enter this data into an AI tool?"

The best-connected page in the Law section — five inbound routes — and **zero
outbound**. Its closing checklist duplicates `/start/employee`'s, three items of
five, in different words, and `/start/employee` is the one sibling that does not
link to it. The German checklist carries a qualification the English lacks and
is the better guidance. **P1.**

### 7. `/data-flows/what-you-agree-to` — "What changes when you allow model training"

551 of 859 words belong to other pages. Its one original idea — the training
switch is a retention switch — is already stated as a dated `Fact` on
`training-and-retention`, which also carries the same vendor five-year claim
from the same source under a different check date. **P1.**

### 8. `/data-flows/getting-it-back-out` — "Deleting chats and data: what goes and what stays"

48% of it is not about deletion: 515 of 1,078 words on jurisdiction, sovereignty
tiers and local-model suitability, including the longest section on the page. It
publishes a five-position sovereignty ladder that `data-sovereignty` publishes
under a different name two clicks away. **P1.**

### 9. `/secure-setup/before-you-grant-access` — "Before you give an AI agent access"

The family's front door — six inbound routes — and a dead end: zero internal
onward links, with eight of its ten in-body links being the same evidence badge.
Its first section holds the three account switches that apply to everyone who
opens a chat window, described on the page itself as the highest return on the
least effort, buried inside a page framed for agent operators. It is also the
only page in its family with no subtitle, and its "What to do" section is
section eight of eight. **P1.**

### 10. `/law/four-separate-questions` — "Four questions that are not the same question"

An inventory-count H1 naming the site's own analytic frame. What a reader
searches is the situation its own lead describes: *our security team signed off
— is that the same as being allowed?* Its subtitle is already closer to a usable
H1 than the H1 is. It restates the Trade Secrets three-condition test and its
worked example from `what-may-go-in`, and the Article 4 duty from
`/start/decision-maker`, both under `Law` badges with separately maintained
dates. **P1.**

### 11. `/secure-setup/keeping-a-record` — "Keeping a record" / "Die Entscheidung festhalten"

The H1 names the artefact; the subtitle names the reader's problem and
outperforms it. Nobody searches "keeping a record" for this — they search for
how to explain a decision later. The German is the better of the two and still
describes the act. **P2.**

The four items themselves are a working practice rather than a compliance
artefact, and should not be touched.

---

## Supporting areas

### Law

A reference shelf that has been given a section. `what-may-go-in` and
`four-separate-questions` are load-bearing inside the primary journeys;
`us-cloud-and-the-gdpr` and `ai-act-transparency` have zero inbound links from
outside `/law`. The hub is 167 words: an H1 that is the site's filing category
and an intro that is one rhetorical negation plus meta-commentary about the
site's own editorial rules.

**The Austria claim.** `lawDescription` promised "Austria first, then the EU" in
both locales, and `llms.txt` repeated it. A case-insensitive search for
`austria|österreich|DSG|ArbVG|Betriebsrat|OGH|Datenschutzbehörde` across all
four law data modules returned nothing; every source is EU-level or CJEU, and
one article addresses a reader explicitly not placed in Austria. The claim was
also never rendered in `main`, so it worked on search results and machine
readers and not on the reader deciding whether to invest in a 1,294-word
article. **P0.**

The site's only Austrian legal substance — § 40b Urheberrechtsgesetz, with a
primary-source link — is in `/open-source/code-written-at-work`, in the section
that declares itself AI-free and has no inbound links.

### About

The strongest non-homepage prose on the site, in the wrong frame. `Why this
exists`, `What this site is not` and `Sources, dates and being wrong` earn trust
in a way no claim of rigour could. But the H1 is a category noun; the German H1
says `Über das Projekt` over seven headings that are all about the *site*; the
meta description advertises the page's architecture; and the closing
acknowledgement credits "the standard" with no antecedent. It restates the
entire evidence method and source ranking — hand-typed, already drifting from
the generated version — and links to neither. Three links in `main`, all
external: the worst onward path in the audit. **P1.**

### Reference and Glossary

Five English names for one index: footer `Glossary` → H1 `AI Term Index` →
breadcrumb `Glossary Index` → `Back to the glossary index` → a body link calling
it something else again. German is internally consistent but not aligned to
English.

143 terms; **nine receive an editorial inbound link**, all from one article. The
other 134 are reachable only from the index or a search engine, while the index
intro claims terms are explained where they come up. 42 entries (29%) are vendor
UI labels hidden by client-side JavaScript only — the server ships all 143 and
the literal string "Showing 143 entries." 35 term pages are under 60 words and
carry more furniture than prose; the best, `chunking` at 356 words, is genuinely
excellent. **P1/P2.**

### Evidence Method

The site's trust page, filed as a glossary leaf. **244 in-body links across 42
content pages arrive here; zero leave.** It is 251 words carrying the site's
entire honesty claim, and says nothing about what happens when a claim goes
stale or what a reader does on finding an error — About has that paragraph and
does not link here.

Its lead states a claim the project has corrected in three other places: "a
claim without a date is not wrong yet, it is unfalsifiable" / "eine Aussage ohne
Datum ist nicht falsch, sie ist unüberprüfbar", against the narrower and correct
formulation in `evidence.ts` and About. `llms.txt` states a fifth variant. **P1.**

### Blog

Correct but trivial: a 65-word genre description for one post, earning a global
footer link. The post itself is the healthiest long page on the site — three
well-placed internal onward links, more editorial routing than any hub, both of
the site's only two `Measured` claims, and the best lead on the site. Four of
its nine sections retell what two `/data-flows` articles already own. **P2.**

### `/docs/**`

A compatibility surface that became a product. `site/src/content.config.ts`
globs `**/*.md` from `../docs` with no allowlist, so every maintainer document
self-publishes. 21 pages were indexed and sitemapped, including the project's
own purpose, product brief, house style, release process and branch protection.
`docs/purpose.md` — itself published — states the rule the glob breaks: *"Not a
second public product."*

**Verified: 60 of 60 internal body links across the family are broken**, because
repository-relative links resolve against the web path. All 21 meta descriptions
are truncated mid-clause because the description helper takes the first *line*
of hard-wrapped Markdown. The legal notice grants an MIT licence over `/docs/`
by name, in both locales, so any decision here touches a statutory page. **P0.**

One page has a genuine public reader: `/docs/practical-ai-collaboration/`, 1,985
words.

### `/open-source/**`

Three genuinely excellent articles, in both languages, that nobody can reach.
Not an ownership bug but a deferred decision published as settled:
`site/INFORMATION_ARCHITECTURE.md` already recorded that none of `/profiles`,
`/docs/**` and `/open-source/**` has a global link. Meanwhile the shipped copy
holds two incompatible claims — that the section excludes the site's subject
("No AI in this section." / "Ohne KI in diesem Bereich.") and that it is the
ground the rest of the site stands on. Their only in-body internal link is the
evidence badge, and `what-makes-it-open-source` ends "Which one to pick is the
next question, and it is a real one" — pointing at nothing. **P1.**

### `/profiles`

A tombstone whose call to action is stale: the primary button is labelled "The
triggers, and what each one takes" and opens `/use-cases`, which contains no
occurrence of "trigger" or "blueprint". Its secondary button hands a public
reader into `/docs/blueprints`. English-only, sitemapped, and the only page on
the site linking into `/docs/**`. **P1.**

### Legal, privacy and legacy redirects

Formal `Sie` correctly applied in German and correctly absent elsewhere. The
privacy policy's construction is the right register. Two gaps: neither legal
page carries a review date, on the one family where a check date is a legal
expectation rather than an editorial nicety; and `privacy.ts`'s own header
comment records two items that "must be confirmed before this is treated as
final."

`/impressum` and `/datenschutz` — two German-language legacy URLs — redirect to
the **English** pages, although `/de/legal-notice` and `/de/privacy-policy`
exist. **P1.**

### Machine surfaces

`llms.txt` opened with the security-practitioner persona and the Austria claim,
described `/use-cases` as "Four starting points for adopting that standard"
(six sections, and not about a standard), filed it under Reference next to "The
underlying repository standard", and **omitted two of the three homepage direct
entries** plus `/data-flows`, `/secure-setup`, `/blog`, the Law hub and four
articles. `manifest.webmanifest` carried the wrong product name and a repository
description. `security.txt` itself was well-formed and correct. **P0.**

---

## Cross-site language findings

### Competing product identity

Six surfaces, five answers — recorded in full under **Product identity** above.

### Internal product-model vocabulary as public labels

Swept exhaustively across all 379 pages. Confined to four routes — two page
families in two locales:

| Element | Strings rendered |
| --- | --- |
| Page-job eyebrow | `Decision path` / `Entscheidungsweg` |
| Section eyebrow | `Possibility`, `Collaboration` on both pages; `Reach`, `Control`, `Reference` on Connect AI. German: `Möglichkeit`, `Zusammenarbeit`, `Reichweite`, `Kontrolle`, `Nachschlagen` |
| Next-step label | `Next step / Control` / `Nächster Schritt / Kontrolle` |
| Artifact header | `Copyable artifact` / `Zum Übernehmen` |

Two corrections to the pre-existing tracking issue: it does not name
`Reference` / `Nachschlagen`, and it records the next-step stage as
"Collaboration" where the rendered string is **Control**.

On Connect AI, `Nachschlagen` is simultaneously a section eyebrow and the footer
group heading, one scroll apart. In German the damage is worse than in English:
`Entscheidungsweg` means an organisational approval chain and `Reichweite` means
broadcast reach.

The same failure appears at page-spine level: `/start`'s six card names are the
product brief's table verbatim, and `/secure-setup`'s six stage names are its
module's own control-lifecycle comment.

### Negation-heavy headings

**72 of 454 English and German headings (16%), across 22 of 35 English routes.**
Examples: "Mail is an event stream, not a knowledge base"; "Five operating
models, not two"; "Shadow IT is a procurement result, not a discipline problem";
"Choose an operation, not a sophistication level"; "The product is not the
model". `/secure-setup/checking-the-result` carries it in three consecutive H2s.
The style guide caps this at one per section.

### Inventory and count language

14 English and 13 German headings turn on a number: "Six ways of working", "Six
steps, in the order they happen", "Four things worth separating", "Four
questions that are not the same question", "Three questions this page does not
answer", "Five operating models, not two". Meta descriptions carry it into
search results, and one is arithmetically wrong — `data-sovereignty` promises
"the fourteen things a hosting location does not tell you" on a page with eight
axes and a ten-row figure.

### Multiple names for one reader job

17 destinations carried two or more public names. `/start/what-it-is-doing` had
three per language, and the German pair `wenn` against `während` is a change of
meaning rather than a variant. `/law/what-may-go-in` had four in German.

The working counter-example: `/law`, `/open-source` and `/blog` make every hub
H2 the child's exact H1 — 8 English and 8 German exact matches. The four journey
hubs do this nowhere.

### Site meta-commentary

31 English and 23 German occurrences of "this page / this site / this section".
As headings: "Limits of this page" four times in each language plus a fifth
worded differently; "What this page does not cover"; "Three questions this page
does not answer" — on pages that already carry an evidence badge saying the same
thing.

### German terminology inconsistencies

The terminology table in `docs/language-style.md` was the minority usage:

| Concept | Table prescribes | Actual usage |
| --- | --- | --- |
| Consumer plan | `Privatkundentarif` (1 page) | `Verbrauchertarif` (8), `Verbraucherkonto` (4) |
| Business plan | `Business-Tarif` (3 pages) | `Geschäftstarif` (7) |
| Personal account | `Privatkonto` (2 pages) | `privates Konto` (3) |
| Model training | `Modelltraining` (13) | bare `Training` (24) |

`Assistenz` — a human role in German — was used for software 9 times against
`Assistent` 17. The AI Act had three German names, with `KI-erzeugt` against
`KI-generiert` for one thing on one pair of pages. `Stufe` carried four
unrelated meanings site-wide. `/law/us-cloud-and-the-gdpr` is titled about an
*AI tool* in English and a *KI-Dienst* in German — different concepts under the
table.

### Unnatural German identified by the audit

- `Erkunde und prototype frei.` — `prototype` is not a German verb, and this is
  the first sentence of body copy on that page.
- `Am leeren Repository vorbeikommen` — literal from "get past"; German
  `vorbeikommen` means *to drop by*.
- `Kontrollkreis` — the established German term for a control loop is
  `Regelkreis`.
- `Die Form davon` — rendered as an H2 on 12 glossary pages.
- `Prüfstand` for a check date — a test rig — in the definition of the
  `Rechtslage` label, on the trust page.
- `Wartungszeit` for a maintenance *life* — in German operations vocabulary it
  is a maintenance *window*.
- Five headings switch to impersonal `man` directly above a `du` lead.
- All 143 German glossary term pages render `Beobachtet in` over untranslated
  English values across 31 distinct strings.

### Structural parallelism between the locales

**Observed:** all 34 English and German page pairs match exactly on H2, H3,
list-item and internal-link counts, with a near-constant −7% word delta and
byte-identical external source sets.

**Recorded conclusion, as approved:**

> German remains an independently written language target; structural
> similarity is a quality signal, not proof of historical authoring process.

The audit did **not** establish, and this report does not assert, that the
German pages were translated line by line. The observation is that the current
structural parallelism is what the authoring rule in `docs/language-style.md`
exists to prevent, and that the factual parity between the locales is the part
worth preserving.

---

## Mobile and page-density findings

All figures below are rendered measurements against the dev server at
375 × 812 and 1280 × 800. Heights are of the `main` element.

### Global furniture

| Element | Mobile | Desktop |
| --- | ---: | ---: |
| Footer, English | 898 px (1.11 screens) | 385 px (0.48 screens) |
| Footer, German | 920 px (1.13 screens) | — |
| Header | 69 px | — |

The mobile footer is taller than the entire homepage main content (966 px), and
is identical on all 379 pages.

### The two genuine outliers

| Route | Mobile | Screens | Desktop screens |
| --- | ---: | ---: | ---: |
| `/glossary` | 12,799 px | 15.8 | 12.0 |
| `/data-flows/connect-ai-to-tools-and-data` | 12,501 px (DE 13,540) | 15.4 (DE 16.7) | 10.0 |

`/glossary` is **228 KB of HTML for 2,616 visible words**; 136 KB (60%) is
`data-search` attributes duplicating each term's body text for client-side
filtering. It is roughly eight times the byte weight of any other page. Connect
AI is about 44 bordered blocks in one mobile column, 25 field labels across 8
vocabularies, and 24 headings.

### Second tier

Defensible for what they do, recorded for completeness: `/start/vibe-coding` 9.0
screens (DE 9.8), `/blog/before-you-press-enter` 8.9, `/data-flows/data-sovereignty`
8.5, `/law/us-cloud-and-the-gdpr` 8.2, `/start/what-it-is-doing` 6.8, `/about`
6.7 (DE 7.4). German runs 6–10% longer than English throughout.

### Scroll before value, on the hubs

| Hub | Intro furniture | Screens |
| --- | ---: | ---: |
| `/use-cases` | 437 px | 0.54 |
| `/start` | 795 px (DE 823) | 0.98 (DE 1.01) |
| `/data-flows` | 837 px | 1.03 |
| `/secure-setup` | 906 px | 1.12 |

Three of four hubs make a mobile reader scroll a full screen of prose before the
first piece of content. `/use-cases` is the counter-example and shows the
achievable target.

### Repeated card-field density

Only four content routes use the field-label card grammar at all; the other 31
English content pages render none.

| Route | Field labels | Distinct strings |
| --- | ---: | --- |
| `/use-cases` | 12 | 2, each repeated 6× |
| `/start` | 18 | 3, each repeated 6× |
| `/start/vibe-coding` | 25 | 7 |
| `/data-flows/connect-ai-to-tools-and-data` | 25 | 8 |

`/data-flows/data-sovereignty` is the densest list page at 38 list items in
1,198 words.

### Structural observations, not measured

The following were derived from markup and CSS breakpoints rather than from a
rendered viewport, and are recorded as inferences: the single-column collapse
points for each card grid, and the resulting block sequence counts on pages
other than those listed in the tables above.

---

## Duplication and content ownership

| Fact or block | Found in | Proposed canonical owner | Later approved decision |
| --- | --- | --- | --- |
| What AI Standard is | homepage, footer tagline, manifest, `llms.txt`, legal notice, structured data | one owner, consumed by the rest | **Approved.** Shipped in slice 1 as `site/src/data/identity.ts`. |
| The five evidence levels | `evidence.ts` (generated) and About (hand-typed, already drifting) | `evidence.ts`; About links | Slice 6. |
| The source ranking | `evidence-method.ts` and About as prose | the evidence-method page | Slice 6. |
| What a check date does | evidence-method lead (overstated), About (correct), `evidence.ts` comment (correct), `llms.txt` (fourth variant) | the method page, using About's narrower wording | Slice 6. |
| Account tier and vendor defaults | `/start/employee`, `/start/decision-maker`, `/law/what-may-go-in`, `training-and-retention`, `data-sovereignty` | `training-and-retention` | Slice 4. |
| Vendor training-retention coupling | `training-and-retention` (Fact, one date) and `what-you-agree-to` (Fact, another date), same source URL | `training-and-retention` | Slice 4. |
| The five-position sovereignty ladder | `getting-it-back-out` and `data-sovereignty`, under different names | `data-sovereignty` | Slice 4. |
| "EU-hosted answers one axis" and CLOUD Act | `data-sovereignty`, `getting-it-back-out`, `/law/us-cloud-and-the-gdpr`, the blog post | `data-sovereignty` for the decision; the law page for the Chapter V inventory | Slices 4 and 6. |
| AI Act Article 4 duty | `/law/four-separate-questions` and `/start/decision-maker`, both badged, separately dated | one owner | Slice 6. |
| Trade Secrets three-condition test | `/law/what-may-go-in` and `/law/four-separate-questions` | `what-may-go-in` | Slice 6. |
| Pre-paste self-check | `/start/employee` and `/law/what-may-go-in`, three of five items matching | `/start/employee` for the moment; the law page for the *why* | Slices 3 and 6. |
| The four-layer connection model | `/data-flows` hub and its Connect AI child, different nouns | the hub | **Approved.** `/data-flows` owns the mechanism explanation. |
| Prompt injection | `before-you-grant-access`, Connect AI, the glossary | glossary defines; secure-setup rules | Slices 4 and 5. |
| The three account switches | `before-you-grant-access` compresses three `/data-flows` pages and links to none | facts in `/data-flows`; the prompt to act in `/secure-setup` | Slices 4 and 5. |
| "Limits of this page" | five sibling pages, four identical headings and one variant | layout furniture, one label per locale | Slice 7. |
| Vulnerability report URL | footer twice, byte-identical | one human link; the endpoint stays served | Slice 2. |
| Mechanism explanation | `/data-flows` hub and `/start/what-it-is-doing` | — | **Approved.** `/data-flows` is canonical; the route does not move yet. |

---

## Do-not-touch findings

The implementation should not create churn simply because an audit exists. The
following were found strong, and a slice that touches them should change only
what its own goal requires.

- **The homepage** — its three-block shape, its three direct entries, and its
  refusal to describe the site's own taxonomy.
- **The header** — membership and both label sets, verified rather than assumed.
- **`/data-flows/training-and-retention`** — the strongest article on the site.
  A real question as its H1, four dated `Fact` sections against three
  judgements, every vendor claim sourced, and the vendor-as-source discipline
  stated explicitly. It needs links, not edits.
- **`/law/what-may-go-in` and its H1 in both languages** — five pages link to it
  *because* the title survives being quoted as a link label.
- **`/secure-setup/checking-the-result`** — concrete instructions rather than a
  framework — and the four items in **`keeping-a-record`**.
- **`/data-flows`'s complete suppression of "Reach" / "Reichweite"** — the proof
  that the eyebrows can go.
- **About's body prose.** The error-correction anecdote earns more trust than
  any claim of rigour. Fix the frame; leave the writing.
- **The three `/open-source` articles**, in both languages, while their
  placement is decided.
- **`/blog/before-you-press-enter`** — the best onward path and the best lead on
  the site; the German corridor figure is exactly what the style guide licenses
  for the blog.
- **The evidence system** — generated from one source, enforced at build time,
  with the accessibility reasoning already written into the label component.
- **The best glossary entries** — `chunking`, `prompt-injection`,
  `source-of-truth`, `retriever` — and `Stell es dir so vor`, which is better
  German than its English original.
- **`/use-cases` card six** and all twelve concrete card examples.
- **German address discipline**, the `Werkzeug` rule, and the absence of reveal
  framing in headings.
- **`security.txt` itself**, the redirect-stub mechanics, and the language
  switch behaviour on genuinely English-only pages.

---

## Human decisions after the audit

Approved after the audit was delivered. Where these refine or reject an audit
recommendation, the original finding is preserved above. The durable ones are
recorded in `.ai/decisions.md` under 2026-08-24.

| Decision | Substance |
| --- | --- |
| **Header remains settled** | Four journeys, four hubs, current membership and bilingual labels. Reference is not a fifth journey. The audit found no contradiction strong enough to reopen any of it. |
| **The footer does not repeat the header journeys** | Supersedes the audit's framing of the footer and the end-of-page problem as one issue. The footer is supporting global navigation; end-of-page navigation is a separate contextual page-level job. Sticky navigation and breadcrumbs are options, not requirements. |
| **`/docs/**` is not automatically a public product family** | A Markdown file under `docs/` does not become a public page by existing. Publication requires an explicit decision per document. |
| **`practical-ai-collaboration` is preserved for deliberate promotion** | It has a real public reader. It is not deleted because its current route is wrong, and it is promoted as a proper public page rather than left as accidental maintainer documentation. |
| **Open Source is a continuation, not a journey** | Reframed as where creating, publishing and maintaining software — including software built with AI — continues. Reached from development content. Not a fifth journey, not a header or footer section. The `No AI in this section` separation is removed. |
| **`Austria first, then the EU` is withdrawn** | Removed from every public and machine surface where it acts as a scope claim, and not restored until an Austrian layer substantiates it. Writing Austrian content to justify the sentence was rejected. |
| **German terminology preserves semantics, not frequency** | Account, customer type and pricing tier are three concepts and do not collapse into one. The mapping is produced by meaning first; no CI rule until it exists and is approved. |
| **German remains independently authored** | The rule in `docs/language-style.md` is not weakened. Structural parallelism is a quality signal, not evidence about the authoring process, and is not recorded as such. |
| **Employee and decision-maker URLs stay for now** | They are prerequisite role questions inside the Start journey, not two of the six collaboration forms. A route migration needs evidence that the URL itself costs a reader something. |
| **The mechanism explanation belongs to `/data-flows`** | `/data-flows` is the canonical owner of model, product, connector and target system. `/start/what-it-is-doing` keeps its URL; ownership decides maintenance, not immediately routing. |
| **A link promises a reader job, not a heading** | A link's text must promise what its destination answers. It need not reproduce the destination H1 verbatim. Question-to-declarative conversions are correct where the expectation survives. The audit's proposed verbatim rule was rejected. |
| **The homepage remains the editorial reference** | Not changed by the implementation unless a slice needs a concrete integration fix. |

---

## Final seven-slice implementation plan

The approved plan, which reorders and reshapes the audit's original proposal.
The audit had sliced by cross-cutting concern — naming, ownership, voice — which
would have touched every page family two or three times. The approved plan
slices by reader journey after two global slices.

### Slice 1 — Product identity and acute contradictions

- **Objective:** make every surface agree on what AI Standard is, and clear the
  defects that are wrong rather than merely weak.
- **Surfaces:** the identity module; the layout's fallback description; the
  footer tagline; the manifest; `llms.txt`; the homepage structured data; the
  legal notice purpose sentence; the Law metadata description; the
  `/secure-setup` step-six destination.
- **Exclusions:** footer structure; page bodies; the homepage itself.
- **Dependencies:** none.
- **Approval boundary:** required — touches every page and a statutory one.
- **Status: implemented after this baseline**, in PR #158. The baseline findings
  above are not altered to reflect it.

### Slice 2 — Global shell: footer and page-level onward paths

- **Objective:** fix global navigation support without duplicating the header,
  and give substantial pages a way to end.
- **Surfaces:** the layout's footer sections and label table; one shared
  onward-step component; the page-primitives module and the components that
  render its labels.
- **Major scope:** cut the footer to supporting destinations, one problem-report
  path, one vulnerability path, at most one repository link; remove the human
  `security.txt` duplicate while the endpoint keeps being served; establish one
  reusable contextual onward step carrying no product-stage label.
- **Exclusions:** the four header journeys do not go into the footer. Sticky
  navigation and breadcrumbs are not requirements. Populating each page's actual
  next step belongs to slices 3 to 6. Exact footer grouping and wording are not
  yet approved.
- **Dependencies:** slice 1.
- **Approval boundary:** required — navigation, and it is on every page.

### Slice 3 — `/start` as one reader journey

- **Objective:** make Start one journey — resolve the prerequisite, then help
  the reader choose.
- **Surfaces:** the `/start` hub; the employee and decision-maker pages; Vibe
  Coding; the mechanism page only far enough to hand its ownership to
  `/data-flows`.
- **Major scope:** remove internal collaboration-model language from the hub;
  reduce the intro burden; place the prerequisite role questions where a reader
  meets them first; name the six ways as recognisable situations and say what
  each is good for; remove the negative heading; make the employee page resolve
  into onward action; stop Vibe Coding abandoning the early-stopping reader.
- **Exclusions:** URL changes; the `/data-flows` rewrite; the site-wide voice
  pass.
- **Dependencies:** slice 2.
- **Approval boundary:** not required — content inside existing patterns.

### Slice 4 — `/data-flows` and Connect AI

- **Objective:** one ownership problem, solved once.
- **Surfaces:** the `/data-flows` hub and all six children, both locales, plus
  the Connect AI page component.
- **Major scope:** stop teaching the four-axis model as the hub's public
  language; make Connect AI answer *how*; cut its density; add a concrete
  end-to-end example; hand its control-loop and verification material to slice
  5; make `/data-flows` canonical for the mechanism; reconcile training,
  consent, deletion and sovereignty to single owners; retire the stage eyebrows
  on the two proof pages.
- **Exclusions:** the German voice pass beyond copy that must change because
  ownership moved. `training-and-retention` stays substantially intact.
- **Dependencies:** slice 2; partly blocked (see below).
- **Approval boundary:** partly — the content and link work does not need it;
  retiring a published route does.

### Slice 5 — `/secure-setup` and verification

- **Objective:** a hub with a reader-recognisable object, and a family that
  absorbs what Connect AI hands over.
- **Surfaces:** the hub and its three children, both locales.
- **Major scope:** name the object in the H1 and cover the arc rather than two
  of six steps; keep the sequence but stop exposing the phase nouns as the
  public spine; give Monitor and Take it back real coverage; let
  `before-you-grant-access` serve the broader job it already holds; add onward
  paths.
- **Exclusions:** rewriting `checking-the-result`'s instructions or the four
  items in `keeping-a-record`.
- **Dependencies:** slice 4.
- **Approval boundary:** not required.

### Slice 6 — Law, About, Evidence, Reference and discovery

- **Objective:** settle where things are owned and what is public at all.
- **Surfaces:** the Law hub and its four children; About; the glossary index and
  the evidence-method page; the content-collection glob and the docs helpers;
  `/docs/**`; `/profiles`; `/open-source/**`; the German legacy redirects; the
  legal notice's licence sentence.
- **Major scope:** give the Law hub a reader job; single owners for the
  duplicated legal facts; About stops restating the evidence method; the
  evidence method becomes trust content with the corrected lead; glossary naming
  and discovery; publication under `docs/` becomes explicit;
  `practical-ai-collaboration` preserved for promotion; `/profiles` corrected;
  `/open-source/**` reconnected with the AI-free separation removed; the German
  legacy URLs pointed at their German counterparts.
- **Exclusions:** rewriting the three open-source articles, About's body prose,
  or `/law/what-may-go-in`'s H1.
- **Dependencies:** slice 2; blocked (see below).
- **Approval boundary:** required — route retirement, redirects, taxonomy and a
  statutory page.

### Slice 7 — Site-wide voice, German and quality enforcement

- **Objective:** the pass that only makes sense once ownership has stopped
  moving.
- **Surfaces:** all public content modules, both locales; the language style
  document; the language CI guard; the glossary index weight and the
  evidence-badge link repetition.
- **Major scope:** the negation-heavy heading pass; count and inventory
  language; meta copy about the site itself; capability and limitation balance;
  the named German defects; `du` and `man` consistency; an independent
  naturalness read in both languages. A terminology mapping by meaning comes
  first; only then a CI rule.
- **Exclusions:** rewriting anything already strong for surface uniformity;
  adding a CI rule before the mapping is approved.
- **Dependencies:** slices 3 to 6.
- **Approval boundary:** partly — the content work no; the language-rule change
  yes, since it becomes a gate everyone must pass.

---

## Remaining blockers

Verified against the workspace at the time of writing. Each blocks a slice and
none is answerable from repository evidence plus the approved decisions.

| Blocker | Blocks | Question |
| --- | --- | --- |
| `/docs/**` retirement shape | Slice 6 | Publication stops being automatic; what happens to the 21 already-published URLs does not follow from that. Redirect each to its repository source, or serve them `noindex` and drop them from the sitemap? The answer also decides the licence sentence in the legal notice, which names `/docs/` in both locales. |
| `practical-ai-collaboration` promotion target | Slice 6 | It has a real public reader and is English-only at 1,985 words. Which public route does it become, and must the German version exist before it ships? |
| `/data-flows/what-you-agree-to` retirement or reduction | Slice 4 | Folding it into `training-and-retention` removes a published URL in both locales. Fold and redirect, or keep the route and cut it back to its one distinct idea? |

Slice 2 is not blocked. Questions resolved by the decisions above — the footer,
`/docs/**` as a product family, Open Source, the Austria claim, German
authoring, the role-page URLs, mechanism ownership and the link-label rule — are
deliberately not listed here.

---

## Provenance

The finding set behind this report was produced on 2026-08-24 in a single
read-only audit session, verified against the repository and the built site, and
converted into the approved plan recorded in `.ai/tasks.md` and
`.ai/decisions.md`. This document is the durable record of what was found; the
workspace files remain the record of what is being done about it.
