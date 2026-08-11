# AI and personal data: status

## Current state — 11 August 2026

Four German conversation notes have been translated and consolidated into
[INTAKE.md](INTAKE.md). The principal legal propositions have been checked
against the GDPR, CJEU C-413/23 P, final EDPB role guidance, two EDPB
consultation documents and Austrian Data Protection Authority material. The
results and qualifications are in [SOURCES.md](SOURCES.md).

Nothing in this directory is public guidance or a normative project rule. No
website copy has been changed as part of this intake.

## What survived verification

- A useful AI decision cannot collapse data status, confidentiality, role,
  purpose, lawful basis, provider behaviour, transfers and lifecycle into one
  "allowed or forbidden" question.
- Pseudonymisation is valuable risk reduction but does not generally remove the
  processing from the GDPR.
- Anonymity is contextual. The relevant entity and realistic means of
  identification matter.
- Removing direct identifiers is not enough; attribute combinations, context
  and auxiliary information matter too.
- Roles are functional and operation-specific. An AI provider cannot be called
  a processor merely because the contract uses that word.
- Consent of a data subject, controller authorisation of a subprocessor and
  contractual permission are three different things.
- The anonymisation operation itself processes personal data. A successfully
  anonymous result and the operation producing it must not be described as if
  they had the same legal status.

## Qualifications that must remain visible

### The CJEU judgment is narrower than the intake notes

C-413/23 P supports a contextual perspective and rejects the idea that
pseudonymised data is personal data for every person in every case. Its holding
about which perspective controlled was tied to a specific information
obligation at collection. It does not create a universal recipient-perspective
rule.

### The processor-perspective rule is currently draft guidance

The general statement that a processor uses its controller's perspective comes
from paragraph 15 of EDPB Guidelines 02/2026. The document was adopted for
public consultation and is not final. Public copy must say that.

### The three anonymity criteria are not a product certification

No Record Isolation, No Linkage and No Inference form the EDPB draft framework.
They require a contextual technical assessment. A detection tool cannot claim
that replacing a configured set of fields proves anonymity.

## Website fit

This research should strengthen the existing legal reader journey rather than
create a second knowledge structure.

### 1. Correct the glossary qualification

The current short definitions of **Pseudonymisation** and **Anonymisation** can
remain compact. Their explanations need a more precise perspective model:

- avoid "by anyone" as an absolute test;
- explain means reasonably likely to be used for the relevant entity and
  processing context;
- retain the clear warning that a reversible local mapping normally means the
  workflow should be treated as pseudonymisation;
- label the EDPB 02/2026 position as consultation guidance, not settled law.

This is a public legal-content change and should be a separate, paired English
and German pull request with a fresh check date.

### 2. Evolve the existing "Can I enter this data?" article

The page at `/law/what-may-go-in/` already separates data protection from
confidentiality. That is the right home. A future revision should turn its
short checklist into an ordered decision:

1. Who owns the material and may it be disclosed?
2. Is anyone identifiable in the relevant context?
3. Who is controller, processor or subprocessor for this operation?
4. What is the purpose and Article 6 basis, and does Article 9 apply?
5. What can be removed, generalised or pseudonymised locally?
6. What does the provider do with inputs and outputs?
7. What contract, subprocessor and transfer conditions apply?
8. How are retention, deletion, rights and incidents handled?
9. What decision, evidence, owner and review date are recorded?

The answer should be conditions and evidence, not a universal green/red verdict.
This revision belongs in its own content pull request after the glossary
qualification has been agreed.

### 3. Add one explanatory figure inside the existing journey

A compact figure would materially improve understanding:

```text
personal source data
  -> anonymisation processing (GDPR still applies)
  -> tested anonymous result (outside GDPR only where the test is met)
```

A second layer can show perspective:

```text
controller can identify
  + processor acts on its behalf -> treat as personal for the processor

independent recipient cannot identify
  + no realistic route to additional information -> may be anonymous for it
```

The second branch must cite and label EDPB Guidelines 02/2026 as a consultation
position. The figure should live in the existing article unless a new public
route is separately approved.

### 4. Treat the local-first architecture as a control, not a legal conclusion

The proposed local detection, replacement and controlled re-identification
flow fits the site's practical mission. It should be described as data
minimisation and pseudonymisation that reduces external disclosure. It must not
promise automatic anonymisation or automatic GDPR compliance.

If implemented as a repository blueprint later, its evidence should record:

- which identifiers and contexts were tested;
- what mapping remains and who can access it;
- what data leaves the local boundary;
- the provider's factual purposes and retention;
- what re-identification tests were run;
- who accepted the residual risk and when it will be reviewed.

## Information architecture decision

Do not add a new top-level "GDPR vocabulary" or "AI matrix" section. The small
vocabulary belongs in the existing glossary, while the decision sequence and
figures belong in the existing law journey. This keeps the website a single
coherent product and avoids recreating a documentation-versus-knowledge-base
split.

Adding a new public route, renaming the current law section or changing the
header/footer remains a separate information-architecture decision requiring
human approval.

## Follow-up queue

1. Prepare a focused glossary correction for Anonymisation and
   Pseudonymisation in English and German.
2. Obtain legal/content review of the perspective distinction and evidence
   labels.
3. Revise `/law/what-may-go-in/` around the ordered decision and remove vendor
   tier generalisations that are not provider-by-provider evidence.
4. Design the boundary-and-perspective figure within the current article
   template.
5. Recheck EDPB Guidelines 02/2026 after the consultation closes on
   30 October 2026 and again when a final version is published.
6. Keep provider-specific terms, locations and transfer mechanisms in dated
   provider research rather than in timeless glossary definitions.
