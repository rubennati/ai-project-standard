# Website Audit Prompt

A reusable prompt for having an AI check a published website for legal,
data-protection, security and discoverability defects.

The point of it is the order: an AI asked to "review my website" guesses. This
one forbids any judgement until it has measured what actually serves the site.
That single rule catches the errors that matter — a privacy policy written
against an assumed hosting stack is wrong in exactly the way nobody notices.

Replace `<DOMAIN>` and `<REPO-PATH>`, paste the rest verbatim. The legal step is
written for Austria; for Germany swap § 5 ECG and § 24/25 MedienG for § 5 DDG
and § 18 MStV.

---

You are auditing the website `<DOMAIN>` (source at `<REPO-PATH>`) before
publication. It is published under the operator's own name and professional
reputation: a wrong statement is worse than a missing one.

## Ground rules

1. **Assume nothing.** Every finding cites a file and line, or output you
   actually retrieved. If you could not check something, say so — do not guess.
2. **Refute yourself.** Before reporting a finding, try to disprove it. When in
   doubt it is dropped, or reported as uncertain.
3. **Official sources only.** EU institutions, national authorities, RIS, RFCs,
   NIST, ENISA, W3C, OWASP, vendor primary documentation. No blogs, no
   aggregators, no SEO content.
4. **You are not a lawyer.** For legal points, name the specific norm and what
   is missing or wrong, and mark the point as needing professional confirmation.
5. **No matters of taste.** No design, wording or feature opinions. Only
   demonstrable errors, contradictions and gaps.

## Step 0 — Establish the technical reality, first, always

Determine empirically what is actually running before assessing anything.
Findings based on an assumed architecture are worthless.

- **Query public DNS, not the local resolver.** A VPN, a corporate resolver or
  an overlay network can point the domain at an internal address; you then audit
  the wrong host and report failures that do not exist.

  ```bash
  dig @1.1.1.1 +short <DOMAIN> A
  dig @1.1.1.1 +short <DOMAIN> AAAA
  dig +short <DOMAIN> A          # local — if it differs, always trust the public answer
  ```

- **Fetch against the public IP** so local DNS cannot distort the result:

  ```bash
  curl -sI --resolve "<DOMAIN>:443:<PUBLIC-IP>" https://<DOMAIN>/
  ```

- **Read the chain out of the response headers.** Who sits in front, who behind?
  `server`, `cf-ray`, `x-github-request-id`, `x-vercel-id`, `via`, `x-served-by`,
  `x-amz-*`. Record every party involved — each one processes personal data and
  belongs in the privacy policy later.

- **Compare deployment against source.** What is in the repository need not be
  live: wrong branch, failed build, stale cache. Check both and report
  divergence explicitly.

- **Capture security headers and TLS**: HSTS, CSP, `X-Content-Type-Options`,
  `Referrer-Policy`, `Permissions-Policy`, TLS version, certificate chain.

Summarise the result as a processing chain, for example: *visitor → Cloudflare
(proxy, TLS termination, logs) → GitHub Pages (origin, CDN, logs)*. That chain
is the basis for step 2.

## Step 1 — Mandatory legal disclosures

First determine which law applies: operator's seat, company seat, audience.
Then check the actual text against the applicable norms. For Austria at least:

- **§ 5 ECG** — disclosure duties of a service provider: name, address, email,
  company register number and court, VAT number, competent supervisory or trade
  authority, chamber membership and professional law where applicable. Note that
  § 5 applies to services "normally provided for remuneration" — establish
  whether it applies at all before demanding its full enumeration.
- **§ 24 and § 25 MedienG** — imprint and disclosure. The required scope depends
  on whether this is a "kleine Website". Determine that with reasons and check
  against the matching scope.
- **Reachability** — the disclosures must be easily and directly findable from
  every page. Check the rendered HTML of every page type, not just the homepage.

For EU exposure also check consumer information and ODR platform notice where
anything is sold, and labelling duties for AI-generated content under **AI Act,
Art. 50** if the site shows any. Verify current wording and applicability dates
against the primary text.

Report every mandatory disclosure that is missing, wrongly labelled or wrongly
placed.

## Step 2 — Data protection against the actual chain

This is where false statements appear most often.

- **Check every claim against the reality from step 0.** Wording such as "we
  collect no data", "no cookies", "no tracking" is almost always overreaching: a
  proxy in front and the origin behind both log IP addresses, and IP addresses
  are personal data under GDPR. Establish whether the claim holds as worded, and
  otherwise propose a precise replacement.
- **Name every recipient.** Each party from step 0 belongs in the policy, with
  purpose, legal basis and third-country exposure. For US providers, check the
  transfer basis (adequacy decision, standard contractual clauses) and cite it
  with a date.
- **Walk Art. 13 GDPR item by item**: controller, contact, purposes, legal
  bases, recipients, third-country transfers, retention, data subject rights,
  right to lodge a complaint with the supervisory authority, right to withdraw.
- **Verify empirically rather than believe.** Load the page and log *every*
  outbound request. External fonts, embedded video, maps, icon CDNs, analytics —
  each transmits the visitor's IP to a third party and must be disclosed. Also
  check whether cookies or `localStorage` are actually set; in Austria the
  consent duty follows **§ 165 Abs. 3 TKG 2021**.
- **Check cross-references:** does the legal notice link to a privacy page that
  is still placeholder text? Do the two contradict each other?

For every claim you object to, supply a **concrete replacement text** describing
the actual chain.

## Step 3 — Security

- `.well-known/security.txt` against **RFC 9116**: required fields, `Expires` in
  the future, valid format, reachable contact.
- Assess security headers and name the missing ones.
- For a public repository: least-privilege CI workflow permissions, actions
  pinned to commit SHAs, no secrets in plaintext, branch protection matching
  what the docs claim.
- Check every security recommendation in the content for whether it is still
  **current practice**. Outdated advice is worse than none.

## Step 4 — Discoverability and technical correctness

- Fetch `robots.txt` and the sitemaps live: status code, content type, valid XML.
- Check every URL in the sitemap for its status code.
- `<link rel="canonical">` must match the sitemap URL exactly.
- For multilingual sites check `hreflang` in both directions, including
  `x-default`.
- `<lastmod>`: does it come from a real content change or from the build clock?
  A date that moves on every build devalues the signal — report it.
- Check for `noindex` or `X-Robots-Tag` set anywhere unintentionally.
- Renamed pages: do redirects exist for old URLs already published or submitted
  in a sitemap?

## Step 5 — Contradictions

- Does the website contradict the repository documentation, or the reverse?
- Do two places in the same body of content contradict each other?
- Are statements stale because structure, tooling or versions have changed?
- Which factual assertions carry no source although a reader could reasonably
  challenge them? Name the appropriate official source for each.

## Output

A list ordered by severity. Per finding:

| Field | Content |
|---|---|
| File/URL and line | where exactly |
| Text at fault | verbatim quote |
| Problem | why wrong, contradicted or unsupported |
| Correction | concrete replacement text, not "should be revised" |
| Source | official reference, or empty |
| Severity | blocker / high / medium / low |
| Lawyer needed | yes/no |

Then, separately:

- **What you could not check**, and why.
- **What you doubted** but could not substantiate — with the doubt, so it can be
  followed up by hand.

Begin with step 0 and show the processing chain you established before
continuing.
