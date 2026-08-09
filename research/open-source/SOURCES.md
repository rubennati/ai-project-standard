# Sources — foundations.md

Every claim in [foundations.md](./foundations.md), checked at the source on
**2026-08-09**. Levels follow `site/src/data/evidence.ts`.

The document itself is unchanged. Where a claim did not survive, the correction
is here, not in the text.

## Verdicts

| Claim | Verdict | Level |
|---|---|---|
| Open source is defined by the licence, not by visible code | confirmed | fact |
| Ten OSD criteria, as listed | confirmed | fact |
| NC licences are not open source | confirmed | fact |
| No licence means exclusive copyright | confirmed, needs a GitHub caveat | fact |
| GPL at roughly 60% adoption | **refuted** | measured |
| MPL as limited copyleft, combinable with proprietary code | confirmed | fact |
| Recommended standard files | confirmed, broader than GitHub's own list | fact |
| Johns Hopkins OSPO minimum | confirmed | fact |
| Employer owns copyright to work created in employment | **refuted for AT and DE**, confirmed for the US | law |
| An open-source project cannot be closed again | **too absolute** | assessment |
| "Open Source Project Template" on GitHub | identified | fact |
| Directory conventions (`src/`, `tests/`, `docs/`, …) | no authority defines these | advice |
| Project phases 1–3, governance model names | not checked | assessment |

## The definition

The [Open Source Definition](https://opensource.org/osd) is at **version 1.9,
last modified 22 March 2007**. Its ten criteria are: Free Redistribution, Source
Code, Derived Works, Integrity of The Author's Source Code, No Discrimination
Against Persons or Groups, No Discrimination Against Fields of Endeavor,
Distribution of License, License Must Not Be Specific to a Product, License Must
Not Restrict Other Software, License Must Be Technology-Neutral.

Criterion 6 is what rules out non-commercial clauses: "The license must not
restrict anyone from making use of the program in a specific field of endeavor.
For example, it may not restrict the program from being used in a business."

Note the wording: the OSD is a definition published by an organisation, not a
legal norm. "Not open source" means "does not meet the OSD", which is the
industry's working definition and OSI's own position. "Source-available" is
common usage, not an OSI term.

## No licence

[choosealicense.com/no-permission](https://choosealicense.com/no-permission/):
"When you make a creative work (which includes code), the work is under
exclusive copyright by default. Unless you include a license that specifies
otherwise, nobody else can copy, distribute, or modify your work."

**The caveat the document is missing.** On GitHub specifically this is not the
whole picture. The [GitHub Terms of
Service](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service),
section D.5, has you grant every other user "a nonexclusive, worldwide license
to use, display, perform and reproduce (by forking) Your Content through the
Service" when you make a repository public. Viewing and forking on GitHub are
therefore permitted without a licence file; everything beyond the platform is
not.

## Licence adoption

The 60% figure does not hold. The direction is the opposite one.

[RedMonk, *The State of Open Source Licensing in 2026*](https://redmonk.com/sogrady/2026/03/25/open-source-licensing-2026/)
puts permissive licences at **82% in 2022 and 73% in 2025**, with copyleft
making up the remainder, and dates the crossover from a copyleft majority to a
permissive one to some point **between 2014 and 2017**. Sources: Black Duck data
through 2017, GitHub Archive 2011–2025, and deps.dev.

Two limits the author states himself: 80% or more of repositories carry no
licence at all and are not counted, and the recent GitHub Archive data has small
sample sizes. So the trend is well supported; a precise percentage for any one
year is not.

[OSI's 2025 ranking](https://opensource.org/blog/top-open-source-licenses-in-2025)
(17 December 2025) puts MIT first at 1.53M, Apache 2.0 second at 344k, BSD
3-Clause third, GPL-2.0 fifth at 76k and GPL-3.0 sixth at 55k. This measures
**pageviews on the OSI website**, not deployment, and the post says so — treat
it as interest, not usage.

**Correct statement:** permissive licences have been the majority for around a
decade; MIT and Apache 2.0 lead; the GPL family remains significant and is
concentrated in system-level software. The Linux kernel under GPL-2.0 was not
re-checked this pass.

## Licence categories

"Strong copyleft, limited copyleft, permissive" is descriptive vocabulary, not
an official taxonomy. The middle category is real, though: the
[MPL 2.0 FAQ](https://www.mozilla.org/en-US/MPL/2.0/FAQ/) describes file-level
copyleft — "new files containing no MPL-licensed code are not Modifications, and
therefore do not need to be distributed under the terms of the MPL" — which
allows MPL code to be "statically linked to and distributed as part of a larger
proprietary piece of software".

## Recommended files

[GitHub's community
profile](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories)
checks for: README, CODE_OF_CONDUCT, LICENSE, CONTRIBUTING, a security policy,
and issue templates in `.github/ISSUE_TEMPLATE`.

The document's list is **wider than GitHub's**: `CHANGELOG.md`, `SUPPORT.md`,
`CODEOWNERS` and `AUTHORS` are not part of the community profile. They are
defensible recommendations, but they are not GitHub's.

The [Johns Hopkins
OSPO](https://ospo.library.jhu.edu/learn-grow/public-code-repository-best-practices/)
minimum for research software is: licence, README, contributing file, version,
and identifiers (DOIs, SWHIDs and/or citations). The document paraphrased this
accurately.

## Copyright in employment

The document's claim — that the employer can automatically be the copyright
owner — is **true in the United States and false in Austria and Germany**, which
is the jurisdiction that matters here. The original cited Swiss employee
*invention* law, which is patent law and the wrong body of law entirely.

- **Austria, [§ 40b UrhG](https://www.jusline.at/gesetz/urhg/paragraf/40b):**
  where an employee creates a computer program in fulfilment of their duties,
  the employer holds an *unbeschränktes Werknutzungsrecht* — an unlimited right
  of use. Copyright itself cannot be transferred between living persons, and the
  author's right to claim authorship under § 19 is untouched.
- **Germany, [§ 69b UrhG](https://www.gesetze-im-internet.de/urhg/__69b.html):**
  the employer is "ausschließlich … zur Ausübung aller vermögensrechtlichen
  Befugnisse an dem Computerprogramm berechtigt" — exclusively entitled to
  exercise the economic rights. Again not the copyright itself.
- **United States, [17 U.S.C. § 201(b)](https://www.law.cornell.edu/uscode/text/17/201):**
  for a work made for hire "the employer or other person for whom the work was
  prepared is considered the author" and owns all rights in the copyright,
  unless agreed otherwise in writing.

The practical effect is similar; the legal construction is not, and a document
that says "the employer owns the copyright" in a European context is wrong.

## Irrevocability

Half right. Rights already granted cannot be withdrawn, so **published versions
stay under the licence they shipped with**. Future versions are a different
question: a rights holder — or all contributors together — can relicense going
forward.

The Terraform case is the clean example: everything up to and including 1.5.x
remains under the MPL, and 1.6 onwards is BUSL. So "closing an open-source
project down permanently is practically impossible" is right about the past and
wrong about the future, and needs that qualifier.

## The template

The reference is to
[diggsweden/open-source-project-template](https://github.com/diggsweden/open-source-project-template),
from Digg, the Swedish Agency for Digital Government. It ships exactly the files
the document lists — README, LICENSE (CC0-1.0), CHANGELOG (Keep a Changelog
1.1.0), CONTRIBUTING, CODE_OF_CONDUCT (Contributor Covenant 2.1), SECURITY,
GOVERNANCE, CODEOWNERS — plus issue and PR templates, workflow examples,
`publiccode.yml` and `REUSE.toml`.

At least one other repository carries the same name (`cfpb/open-source-project-template`),
so the original reference was ambiguous. The file list matches Digg's.

## Not checked this pass

- The Linux kernel's licence.
- The governance model names — do-ocracy, benevolent dictator, steering
  committee — against a primary source.
- The three project phases. Presented as a model, with no source given and none
  obvious. Usable as `assessment`, not as `fact`.
- Directory conventions. No authority defines them; they vary by ecosystem.
  `advice` at best, and `res/` is superseded by `assets/`.
