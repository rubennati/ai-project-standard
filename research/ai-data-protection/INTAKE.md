# AI and personal data: source notes

> Research intake only. This file is not normative project guidance and is not
> legal advice.

## Origin

This is a structured English translation of four German conversation notes
supplied by the maintainer on 11 August 2026. Repeated passages have been
consolidated, but the claims and proposed model are recorded as received. They
have not been silently corrected here. Verification, qualifications and
contradictions belong in [SOURCES.md](SOURCES.md) and [STATUS.md](STATUS.md).

## The question behind the notes

The practical question is not simply:

> May personal data be processed with AI?

It is:

> Under which role, for which purpose, on which legal basis, with which
> safeguards, by which provider, in which location and for how long may a
> particular AI processing operation take place?

The notes reject two common shortcuts:

- "Personal data may never be entered into AI."
- "Remove the names and the GDPR no longer applies."

Instead, they propose a decision model in which data status, actor roles,
purpose, legal basis, safeguards, recipients, transfers and lifecycle are
examined separately.

## 1. Data status is contextual

The source notes distinguish three states:

### Personal data

Information relates to an identified or identifiable natural person. Direct
identifiers are only the most obvious case. A person may also be identifiable
through combinations of attributes, context or information held elsewhere.

### Pseudonymised data

Identifiers are replaced or separated, while additional information can still
restore the connection. The mapping is retained and protected separately.
Pseudonymisation is a safeguard and a risk-reduction measure, not a general
exit from data-protection law.

### Anonymous information

The person is no longer identifiable by means reasonably likely to be used in
the relevant context. The notes argue that this cannot be decided by looking
only at the transformed text. The relevant actors, their relationships, their
additional information and their realistic capabilities also matter.

The same information may therefore be personal data for one entity and
anonymous for an independent recipient. The notes add an important caveat: if
the recipient acts on behalf of a controller, the controller's perspective may
also determine how the data must be treated by the processor.

## 2. Removing names is not enough

The proposed pre-processing step considers more than direct identifiers.

| Category | Examples | Possible treatment |
| --- | --- | --- |
| Direct identifiers | name, email address, customer number | replace or remove |
| Contact and location data | telephone number, street, precise location | remove or generalise |
| Indirect identifiers | exact age, job title, rare diagnosis, exact date | generalise, group or suppress |
| Contextual identifiers | unusual event, distinctive project, rare attribute combination | rewrite, aggregate or remove |
| Required task content | facts needed for the requested result | retain only when necessary |

The notes use three tests for an anonymity assessment:

- no record isolation;
- no linkage;
- no inference.

They also stress that these tests are not a simple automated certification.
Context, state of the art, available auxiliary information and the passage of
time can change the result.

## 3. Proposed local-first processing pattern

The technical pattern described in the notes is:

```text
original client material
  -> local detection of direct and indirect identifiers
  -> local replacement, generalisation or removal
  -> mapping retained locally under separate controls
  -> minimised prompt sent to an approved AI provider
  -> pseudonymised response returned
  -> controlled local re-identification where the task requires it
```

The intended product claim is not "the data is anonymised and the GDPR no
longer applies." A more defensible description is:

> Personal data is locally minimised and pseudonymised before approved external
> AI processing. Re-identification happens only in the controlled local
> environment.

The expected value is reduced disclosure and reduced impact if the external
system is compromised. The notes do not treat this architecture as sufficient
by itself: purpose, legal basis, processor terms, transfers, retention and
confidentiality still need to be checked.

## 4. Actor roles are functional

The notes distinguish:

- **Data subject:** the natural person to whom the data relates.
- **Controller:** determines the purposes and essential means of a processing
  operation.
- **Processor:** processes personal data on behalf of a controller and under
  its instructions.
- **Subprocessor:** is engaged by a processor to perform part of the processing.
- **Independent controller:** determines its own purposes and essential means.
- **Joint controllers:** jointly determine purposes and means for a processing
  operation.

The label in a vendor contract is not decisive on its own. The actual processing
operation is. One provider may act as a processor for prompt execution and as a
controller for a separate provider purpose, such as product improvement or
training. The roles can therefore differ by operation and stage.

In a client-service chain, the notes describe this possible arrangement:

```text
client as controller
  -> service provider as processor
    -> AI provider as subprocessor
```

This is only one possible arrangement. If the service provider chooses an
independent purpose, or if the AI provider uses the data for its own purpose,
the role analysis changes.

## 5. Permission is not one thing

The source notes separate three meanings that are often collapsed into the
word "permission":

### Consent of the data subject

Consent is one possible legal basis for processing personal data. It is not the
only legal basis and should not be assumed to be the default answer.

### Authorisation by the controller

When a processor wants to engage a subprocessor, the controller's prior
specific or general written authorisation may be required. This is not consent
from the data subject.

### Contractual permission

A contract or NDA may permit or prohibit the use of an external service. That
contractual permission is not automatically a legal basis under data-protection
law.

The notes therefore reject the sentence "the customer consented" unless the
speaker can identify which of these three meanings is intended.

## 6. Lawful basis and purpose

The proposed model asks first what the processing operation is for. It then
checks which Article 6 GDPR basis, if any, applies. The notes identify the usual
Article 6 categories:

- consent;
- performance of a contract;
- compliance with a legal obligation;
- protection of vital interests;
- performance of a task in the public interest or exercise of official
  authority;
- legitimate interests, subject to the required balancing.

Where special-category data is involved, the notes require an additional
Article 9 condition. They treat purpose limitation, data minimisation and
storage limitation as separate requirements, not as substitutes for a lawful
basis.

Anonymisation itself begins with personal data and is therefore described as a
processing operation that also needs a lawful basis. Only a successfully
anonymous result falls outside the GDPR for the entity and context in which the
anonymity test is met.

## 7. Data protection and confidentiality are separate

The notes retain the website's existing distinction:

- Data-protection law asks whether information is personal data and how it may
  be processed.
- Confidentiality asks whether the material may be disclosed or used under
  contract, professional secrecy, trade-secret rules or internal policy.

Information may be neither, either or both. Removing the personal-data element
does not make confidential client material free to share. Conversely, material
can be personal data even when it is not confidential.

## 8. Provider and transfer questions

The proposed decision does not stop after identifying a lawful basis. It also
asks:

- Is the provider acting only on documented instructions?
- Does the provider use inputs or outputs for its own purposes?
- Is an Article 28 agreement in place where required?
- Are subprocessors known and authorised?
- Where is the data processed and accessed?
- Does a Chapter V GDPR transfer mechanism apply?
- What retention, deletion and training settings apply?
- Can data-subject rights and incident duties be fulfilled across the chain?

"Hosted in the EU" answers only part of this set. It does not create a lawful
basis, settle the actor roles, grant contractual permission or prove that no
third-country access occurs.

## 9. Six-axis decision matrix

The notes propose a compact matrix with six independent axes.

| Axis | Core question | Typical evidence |
| --- | --- | --- |
| 1. Data | What kind of information is involved and is anyone identifiable? | data inventory, identifier analysis, anonymity assessment |
| 2. Role | Who determines each purpose and essential means? | processing map, instructions, factual vendor use |
| 3. Purpose and basis | Why is this operation necessary and what permits it? | purpose statement, Article 6 basis, Article 9 condition where relevant |
| 4. Provider | What does the AI provider do with input and output? | DPA, terms, training and retention settings, subprocessor list |
| 5. Location | Where can the data be processed or accessed? | hosting and support locations, transfer mechanism, supplementary measures |
| 6. Lifecycle | What happens after the result is returned? | retention, deletion, logging, rights handling, incident process |

The output should not be a context-free green or red answer. It should state:

- the assumptions used;
- the unresolved questions;
- the required controls and evidence;
- the actor responsible for each decision;
- the date on which provider terms and legal sources were checked.

## 10. Example cases from the notes

| Case | Initial classification | Questions that remain |
| --- | --- | --- |
| Internal assistant with employee data | personal data | purpose, Article 6 basis, transparency, access, retention |
| AI API for client material after local token replacement | usually pseudonymised in the proposed workflow | controller/processor chain, authorisation, DPA, transfer, confidentiality |
| Independent recipient receives data it cannot realistically re-identify | potentially anonymous for that recipient | independence, additional information, likely means, contractual and technical safeguards |
| Provider trains on prompts for its own purposes | separate provider purpose | provider role, compatibility, transparency, lawful basis, opt-out effectiveness |
| Local model with no external transmission | no external recipient | lawful basis, access, security, retention, model-output risk |

These are starting classifications, not legal conclusions.

## 11. Proposed website direction in the source notes

The notes suggest that the website should teach an ordered decision rather than
publish a static list of data that is "allowed" or "forbidden":

1. Identify the material and its owner.
2. Determine whether it contains personal data, confidential material or both.
3. Map the actors and their role for the specific processing operation.
4. State the purpose and lawful basis.
5. Minimise and pseudonymise locally where this helps.
6. Check provider purposes, contract, subprocessors and settings.
7. Check transfers, access locations and supplementary measures.
8. Define retention, deletion, rights handling and incident response.
9. Record the decision, evidence, owner and review date.

The notes also propose two visual explanations:

- a boundary diagram showing that the anonymisation process remains processing
  of personal data while a successfully anonymous result may fall outside the
  GDPR;
- a perspective diagram showing why the same information can have a different
  status for independent entities, with a processor/controller caveat.

## Source links included in the supplied notes

The following links were included or directly referenced. Their authority and
status are assessed separately in [SOURCES.md](SOURCES.md).

- [GDPR, consolidated text](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02016R0679-20160504)
- [CJEU, C-413/23 P, EDPS v SRB](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:62023CJ0413)
- [EDPB Guidelines 02/2026 on Anonymisation](https://www.edpb.europa.eu/public-consultations/guidelines-022026-on-anonymisation_en)
- [EDPB Guidelines 01/2025 on Pseudonymisation](https://www.edpb.europa.eu/public-consultations/guidelines-012025-on-pseudonymisation_en)
- [EDPB Guidelines 07/2020 on controller and processor concepts](https://www.edpb.europa.eu/documents/guideline/guidelines-072020-on-the-concepts-of-controller-and-processor-in-the-gdpr_en)
- [Austrian Data Protection Authority: AI and data protection](https://dsb.gv.at/kuenstlichebrintelligenz/kuenstliche-intelligenz-datenschutz)
- [Austrian Data Protection Authority: processor duties](https://dsb.gv.at/rechte-pflichten/ihre-pflichten-als-auftragsverarbeiterin)
