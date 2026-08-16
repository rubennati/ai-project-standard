# AI and personal data: source verification

Checked on 11 August 2026. This file distinguishes binding law, judgments,
final guidance, consultation drafts and project assessment. It is research,
not public legal guidance.

## Source hierarchy used here

1. Binding EU legislation.
2. Judgments of the Court of Justice of the European Union.
3. Final EDPB and supervisory-authority guidance.
4. EDPB consultation drafts, clearly marked as provisional.
5. Project assessment derived from those sources.

## Verification table

| Intake claim | Result | Evidence level and qualification |
| --- | --- | --- |
| The GDPR applies to AI processing of personal data without an AI-specific exception. | Confirmed. | **Law.** The GDPR is technology-neutral. Article 5 principles and an Article 6 basis apply; Article 9 adds a condition for special-category data. |
| Pseudonymisation is a safeguard, not a general exit from the GDPR. | Confirmed. | **Law.** Article 4(5) defines pseudonymisation; Recital 26 treats data that can be attributed using additional information as information on an identifiable person. |
| Data may be personal for one entity and anonymous for another. | Confirmed with context. | **Judgment plus provisional guidance.** C-413/23 P rejects the proposition that pseudonymised data is personal for every person in every case. The explicit entity-perspective framework is developed in draft Guidelines 02/2026. |
| C-413/23 P establishes that recipient perspective always controls. | Not confirmed. | **Correction.** The judgment says the relevant perspective depends on the processing circumstances. For the specific information obligation at issue, the controller's perspective at collection controlled. It is not a universal recipient-perspective rule. |
| A processor must use the controller's perspective when testing whether the data is personal. | Provisionally supported, not final guidance. | **Assessment based on draft guidance.** Paragraph 15 of draft Guidelines 02/2026 states this rule and gives a retailer/agency example. The CJEU judgment does not itself state the rule in this general form. |
| No Record Isolation, No Linkage and No Inference are the current anonymity tests. | Supported by a consultation draft. | **Provisional guidance.** Guidelines 02/2026 use the three criteria as an assessment framework. Failing one calls for further analysis; passing all supports anonymity. This is not an automated certification or final guidance yet. |
| The anonymisation process itself needs a lawful basis. | Supported by a consultation draft and the GDPR's scope. | **Law plus provisional guidance.** Paragraph 38 of draft Guidelines 02/2026 states that processing used to obtain anonymous information must satisfy Article 6 and, where applicable, Article 9(2). |
| Names alone are not the test for identifiability. | Confirmed. | **Law and provisional guidance.** Recital 26 uses means reasonably likely to be used. Draft Guidelines 02/2026 include direct identifiers, indirect identification, attribute combinations and third-party means. |
| Local token replacement with a retained mapping is pseudonymisation. | Usually, but the facts control. | **Assessment.** This fits Article 4(5) when attribution requires separately kept additional information. It should not be labelled anonymous merely because the external provider lacks the mapping. |
| An external AI provider is normally a processor. | Too categorical. | **Correction.** Roles are functional and operation-specific. A provider is a processor only where it processes on behalf of the controller. Own-purpose use may make it a controller for that operation. |
| A provider can have different roles for different processing stages. | Confirmed. | **Final guidance.** Guidelines 07/2020 state that control may cover one operation or stage and that a chain can contain operations with different purposes and roles. |
| A processor's use of a subprocessor requires more than the data subject's consent. | Confirmed. | **Law.** Article 28(2) requires prior specific or general written authorisation from the controller. This is different from consent as an Article 6 basis. |
| Consent is always required for AI processing of personal data. | Rejected. | **Law.** Consent is one of six Article 6 bases. The correct basis depends on the purpose and circumstances. Special-category data requires an additional Article 9 condition. |
| EU hosting proves GDPR compliance. | Rejected. | **Law and assessment.** Hosting location does not supply an Article 6 basis, settle roles or satisfy Article 28. Chapter V is an additional axis when data is transferred or accessed from a third country. |
| Anonymous information can be freely disclosed. | Rejected as a general proposition. | **Scope distinction.** Falling outside the GDPR does not remove contractual confidentiality, professional secrecy, trade-secret, security or intellectual-property duties. Those duties require their own sources and analysis. |

## Primary sources

### GDPR

[Regulation (EU) 2016/679, consolidated text](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02016R0679-20160504)

Relevant provisions:

- Article 4(1): personal data;
- Article 4(5): pseudonymisation;
- Articles 4(7) and 4(8): controller and processor;
- Article 5: processing principles;
- Article 6: lawfulness;
- Article 9: special categories;
- Article 25: data protection by design and by default;
- Article 28: processors and subprocessors;
- Article 32: security;
- Chapter V: third-country transfers;
- Recital 26: identifiability and anonymous information.

### CJEU: EDPS v SRB

[Judgment of 4 September 2025, C-413/23 P,
ECLI:EU:C:2025:645](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:62023CJ0413)

The judgment concerns Regulation (EU) 2018/1725, whose relevant personal-data
concept mirrors the GDPR. The useful points are narrower than the intake notes
initially suggest:

- Paragraphs 75-87 reject the view that pseudonymised data is personal data in
  all cases and for every person.
- Paragraph 100 says the relevant perspective depends on the circumstances of
  each processing case.
- Paragraphs 102-111 hold that, for the Article 15(1)(d) information obligation
  at issue, the controller's perspective at the time of collection was the
  relevant one.

The judgment supports a contextual approach. It should not be cited for a
general rule that the recipient's perspective always controls, nor as the sole
source for the controller-perspective rule for processors.

### EDPB Guidelines 02/2026 on Anonymisation

[Consultation page](https://www.edpb.europa.eu/public-consultations/guidelines-022026-on-anonymisation_en)
and [version 1.0
PDF](https://www.edpb.europa.eu/system/files/2026-07/edpb_guidelines_202602_anonymisation_v1_en_0.pdf)

Status on the check date: adopted on 7 July 2026 **for public consultation**.
Feedback closes on 30 October 2026. It is not final guidance.

Relevant draft sections:

- paragraphs 6-15: entity-relative assessment and relevant perspectives;
- paragraph 15 and examples 3-4: controller perspective for processors versus
  an independent recipient's own perspective;
- paragraphs 18-35: direct and indirect identifiability and means reasonably
  likely to be used;
- paragraphs 36-42: mixed datasets, legal basis for anonymisation,
  transparency and documentation;
- section 3.4: No Record Isolation, No Linkage and No Inference.

The draft is the strongest current source for the proposed website explanation,
but every public use must visibly mark it as a consultation position and carry
a new check after the consultation or final publication.

### EDPB Guidelines 01/2025 on Pseudonymisation

[Consultation page](https://www.edpb.europa.eu/public-consultations/guidelines-012025-on-pseudonymisation_en)

Status on the check date: closed for feedback, but still presented by the EDPB
as a consultation document rather than final guidance. It can inform research,
but it should not be the only source for a public statement. Article 4(5) and
Recital 26 provide the binding baseline.

### EDPB Guidelines 07/2020 on controller and processor concepts

[Final guidelines](https://www.edpb.europa.eu/documents/guideline/guidelines-072020-on-the-concepts-of-controller-and-processor-in-the-gdpr_en)
and [final
PDF](https://www.edpb.europa.eu/system/files/documents/2023-10/EDPB_guidelines_202007_controllerprocessor_final_en.pdf)

This is final guidance after public consultation. Relevant points:

- controller and processor are functional concepts based on factual influence;
- the analysis asks who determines why processing occurs and its essential
  means;
- roles attach to a processing operation or set of operations, not necessarily
  to the provider for every stage;
- "on behalf of" and documented instructions are central to processor status.

### Austrian Data Protection Authority

- [Artificial intelligence and data
  protection](https://dsb.gv.at/kuenstlichebrintelligenz/kuenstliche-intelligenz-datenschutz)
- [Processor
  duties](https://dsb.gv.at/rechte-pflichten/ihre-pflichten-als-auftragsverarbeiterin)

The AI page confirms the technology-neutral GDPR baseline, the separate
processing phases, Article 5 principles, Article 6 and Article 9 requirements,
and the need to examine external providers and transfers. The processor page
summarises Articles 28 and 32 and distinguishes controller decisions from
processing on instructions.

The authority describes its AI material as an initial classification that will
be extended. It is useful supervisory guidance, not a substitute for the
regulation, judgments or a case-specific role analysis.

## Not verified in this pass

The supplied notes mention additional issues that need their own source work
before publication:

- sector-specific professional secrecy;
- national contract and trade-secret consequences beyond the existing site
  article;
- provider-specific claims about business and consumer tiers;
- exact international-transfer mechanisms for any named AI service;
- a complete legitimate-interest assessment for a concrete AI purpose;
- automated confidence thresholds for indirect-identifier detection;
- whether a concrete transformation passes an anonymity test in practice.
