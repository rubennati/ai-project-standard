# AI Standard — Release Readiness

This is repository documentation. It is not a public website route, and
nothing in it is served to a reader.

It states what "the website is done" means, durably, so that answer does not
have to be reinvented at the end of every pass. It is used two ways: as the
target a release check is measured against, and as the report format that
check returns.

Related but distinct: [`docs/website-audit.md`](./website-audit.md) is a
reusable prompt for auditing *any* site's legal, privacy, security and
discoverability surface from the outside. This file is AI Standard's own
standard for its own product — coherence, claims, journeys, parity — with the
external audit as one input among many.

## Definition of Done

The website is Done when a reader can trust it the way its own evidence
method asks them to trust a claim: checked, dated, and correctable rather than
merely asserted. Concretely, the website is Done only when:

- product and content are coherent — no page contradicts another;
- material claims are accurate and scoped to what their evidence supports;
- reader journeys work end to end, in both languages;
- languages carry equivalent meaning, not just parallel structure;
- navigation and links work — internal, external and machine-readable;
- indexing and discovery surfaces describe the product that is actually live;
- production delivery is technically sound;
- security and privacy claims match what the live site actually does;
- accessibility has no known material barrier to a primary journey;
- known limitations are classified — future scope, deliberate non-coverage,
  or an open defect — rather than silently absent.

Done is a gate on the product as shipped, not a promise about every sentence
ever being perfect. `.ai/decisions.md`'s "nothing rises merely by being true"
applies here too: a release check reports what it verified, not what seems
likely.

## Release Acceptance Criteria

Grouped by area. Each area's detail — what is checked, how, what evidence
counts, and the pass condition — is in **Verification Checklist**, below.
Durable criteria are stated as invariants a check can fail against forever,
not as a snapshot of today's numbers: "0 broken internal links" is durable,
"354 sitemap URLs" is a report line from one run.

1. **Product & coherence** — no page states or implies something another page
   contradicts, for the concepts a reader is likely to meet on more than one
   page.
2. **Claims & facts** — every material claim is supported by its stated
   evidence level, correctly scoped, and not stale relative to its check date.
3. **Language & semantic parity** — the English and German versions of a page
   make the same claims, to the same actor, with the same qualifiers.
4. **Navigation & reachability** — every published page is reachable, every
   link resolves to what it promises, and no page is an orphan.
5. **SEO & discovery** — canonical URLs, titles, descriptions and hreflang are
   correct and internally consistent, built and live.
6. **Structured/social metadata** — JSON-LD and Open Graph/Twitter metadata
   are valid and match the visible page; missing optional metadata is not a
   defect, wrong metadata is.
7. **Accessibility** — no known critical or serious barrier blocks a primary
   journey or a primary action.
8. **Performance** — no page carries an unexplained, avoidable performance
   defect (blocking third-party resources, accidental payload bloat, material
   layout shift).
9. **Security & privacy** — the live site's actual behaviour (cookies,
   storage, network requests, headers) matches what the site claims about
   itself.
10. **Production HTTP/deployment** — the live origin serves what the build
    produced, over a sound TLS/HTTP configuration, with no accidental
    exposure.
11. **Licensing/publication boundary** — code and content licensing is
    correctly scoped and consistently stated; no publication boundary is
    accidentally crossed; no required third-party attribution is missing.
12. **Repository/CI quality** — the standard build and check gates pass.
13. **Operational/post-live checks** — see **Post-live operational checks**;
    these cannot be evidence in a pre-release report, and a release check must
    not claim them as done.

## Verification Checklist

| Area | What is checked | How | Evidence | Pass condition |
|---|---|---|---|---|
| Product & coherence | Concept ownership across pages (permission, deletion, revocation, approval, legal basis, and similar concepts that recur) | Read the rendered pages that touch a shared concept; compare statements, not just wording | Quoted statements from each page, with route | No two pages make contradictory statements about the same concept |
| Claims & facts | Every material claim, absolute or hedged | Classify each: supported-and-precise / supported-but-too-broad / unsupported / stale / absolute-but-justified / absolute-and-needs-qualification | The claim's own evidence level and source | 0 unsupported, 0 materially false, 0 unjustified absolutes, 0 stale claims presented as current |
| Evidence-to-claim | Whether a cited source actually supports the exact claim next to it | Re-read the source against the sentence, not just check the URL responds | Source excerpt matched to claim | Every fact/law/measured claim is supported by its cited source at the stated scope |
| EN/DE parity | Same reader question, actor, modality, frequency, legal qualifier, security boundary, source and check date | Read both language versions of a page side by side for meaning, not word count | Paired quotes where they diverge | No known material semantic drift |
| Reader journeys | Each primary journey, walked from the rendered navigation | Follow the path a reader would take; record entry, route sequence, decisions, ending | Route sequence and outcome per journey | Every primary journey reaches an honest ending with no broken promise |
| Internal links | Every internal href reachable from the built site | Crawl `<main>` links, header, footer, evidence links, glossary links | Crawl result | 0 broken, 0 redirect loops, 0 wrong-language targets, no orphan page with no inbound link |
| External links | Every external href, especially evidence sources | Fetch and classify: dead / redirected-but-valid / transient / auth-protected / live-and-correct | Fetch result per link | 0 genuinely dead links; source links are also checked for relevance, not just status |
| SEO — on-page | Title, meta description, H1, canonical, hreflang, index/noindex per canonical URL | Read the built HTML | Per-route table | Unique meaningful title and description; exactly one H1 aligned with title and lead; canonical and hreflang correct and reciprocal; no accidental noindex |
| SEO — sitemap | Sitemap XML, generated and live | Fetch and parse; cross-check each URL's actual status | Fetch result | Well-formed; only canonical indexable URLs; no redirects, no 404s, no noindex pages, no duplicates |
| SEO — robots | `robots.txt`, live | Fetch live | Fetch result | Correct status/MIME; intended pages crawlable; no accidental blanket disallow; sitemap reference correct; no contradiction with page-level meta robots |
| Redirects & canonicalisation | HTTP→HTTPS, trailing slash, retired routes, redirect stubs | Fetch live, follow chains | Fetch result | Expected behaviour, no unnecessary chains, canonical target correct, retired pages non-indexable |
| 404 behaviour | Unknown routes in both locales | Fetch live | Status and rendered page | Real not-found status where the platform allows it; the visible 404 page is useful; no soft-404 |
| Structured data | JSON-LD on representative routes | Validate; compare against the visible page | Validator output or manual check | Valid JSON, appropriate schema type, no invented claims (ratings, FAQ schema without matching visible content) |
| Social metadata | Open Graph/Twitter on representative routes | Read the built HTML; resolve any image URL | Per-route table | Present fields are correct and consistent; missing optional fields are a quality note, not a defect, unless the site already promises them |
| Accessibility | Headings, landmarks, skip link, link/control names, form labels, keyboard access and focus, `lang`, contrast, zoom | Automated check plus manual walk of a primary journey | Tool output plus manual notes | No known critical/serious barrier on a primary journey or action |
| Responsive/rendering | Representative pages at mobile, tablet and wide desktop, both locales | Render and inspect for overflow, clipping, overlap | Measurements or rendered inspection | No horizontal overflow; no clipped or overlapping content; footer and figures hold at every width tested |
| Performance | Representative pages, built and live | Lighthouse or equivalent where available | Recorded metrics | No unexplained poor LCP, no material CLS, no accidental large payload or blocking third-party resource |
| Production HTTP | Live headers: status, TLS, content-type, compression, caching, HSTS/CSP/etc. | Fetch live against the correct public edge IP | Header dump | No mixed content, no broken TLS, no dangerous framing exposure, baseline headers present where risk is real |
| Security & dependencies | Dependency vulnerabilities, lockfile, secrets, exposed internals | Run the repository's own scan/audit tooling | Tool output | No known high/critical production dependency vulnerability; no committed secret; no unintended exposure of repository internals |
| Privacy live verification | The site's own no-cookies/no-tracking claim against actual live behaviour | Inspect `Set-Cookie`, storage, network requests in a clean session | Session inspection notes | Live behaviour matches the claim; any mismatch is a material defect, not a quality note |
| Licensing/attribution | Code licence, content licence, required third-party NOTICE | Read footer, About/legal text, README and repository licence files together | Cross-read | Consistent scope everywhere it is stated; any legally required attribution is present in the correct licence/NOTICE location |
| Machine surfaces | `llms.txt`, sitemap, robots, manifest, RSS, `security.txt`, canonical/hreflang, JSON-LD | Fetch and read together | Cross-read | All describe the same product a human sees; none references retired routes or superseded terminology |
| Repository/CI | Standard build and check gates | Run locally, matching CI | Command output | Astro check, language check, conformance check, markdown lint, structural docs check and the production build all pass |

## Severity model

Exactly these four:

- **BLOCKER** — makes the release verdict NOT READY on its own: a material
  false or unsupported claim, a broken primary journey, a live
  privacy/behaviour contradiction, a critical accessibility barrier on a
  primary path, or a production/security exposure.
- **DEFECT** — a real, in-scope problem that does not on its own block
  release but must be closed before the Definition of Done is met — the
  READY AFTER LOCAL FIXES condition.
- **NON-BLOCKING QUALITY** — a genuine improvement opportunity that is not a
  defect against any stated criterion above; recorded, not required.
- **FUTURE SCOPE** — a deliberately uncovered question, recorded as such
  rather than implied to be settled.

Never downgrade a real BLOCKER or DEFECT to reach READY. A severity is
assigned by what the finding actually is, not by which verdict is convenient.

## Release verdict

Exactly these three:

- **READY** — Definition of Done is met; no BLOCKER, no DEFECT.
- **READY AFTER LOCAL FIXES** — the product and architecture are sound; a
  bounded, named list of DEFECTs must close first.
- **NOT READY** — at least one BLOCKER; state it precisely.

READY requires all of: no BLOCKER; no DEFECT; 0 known broken internal links;
no known material contradiction; no unsupported material factual, legal or
security claim; no unjustified material absolute; no material EN/DE drift; no
critical accessibility failure; no production/privacy contradiction; a
coherent sitemap/canonical/robots/indexability picture; normal repository/CI
gates green. NON-BLOCKING QUALITY and FUTURE SCOPE items may remain open and
recorded.

## Known limitations

A release check must list what it deliberately did not cover and why —
tooling not available in the environment (a WCAG-certified audit, live Search
Console access, field Core Web Vitals), or a scope boundary the maintainer
set. An unlisted limitation reads as complete coverage; a listed one is
honest about what the verdict actually rests on.

## Post-live operational checks

These require real traffic or real time and cannot be pre-release evidence.
A release check must not claim them as done; it may only note that they are
now possible:

- submit and verify the sitemap in Google Search Console (and optionally Bing
  Webmaster Tools);
- inspect a sample of actually indexed URLs and monitor canonical selection;
- monitor crawl and index errors over time;
- monitor real Core Web Vitals field data once it exists;
- re-check vendor and legal source claims periodically — the evidence method
  already carries check dates for this; a release check is not a substitute
  for that ongoing schedule.
