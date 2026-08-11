# Contextual anonymity and AI processors

<!-- markdownlint-disable MD001 MD036 -->

> Complete English translation of the first German source note supplied by the
> maintainer on 11 August 2026. Structure, examples, tables, diagrams and source
> references are retained. Claims are recorded as received, not corrected here.
> See [SOURCES.md](SOURCES.md) for verification and qualifications.

Yes. Three things that simplified explanations often collapse into one
actually need to be separated. And there is a very important catch in your
specific AI scenario.

The sentence

> "Pseudonymised = always GDPR; anonymised = no GDPR"

has become **too coarse** as a blanket statement. But it does not automatically
follow that a pseudonymised prompt sent to an external AI service falls outside
the GDPR.

### 1. First: there is no separate Austrian definition

The terms come directly from the GDPR. Article 4(5) defines pseudonymisation as
processing in which attribution to a person is no longer possible without
additional information, with that additional information kept separately.
Recital 26 distinguishes genuinely anonymous information from it.
([EUR-Lex][1])

If you therefore have:

```text
Max Mustermann
max@example.at
Customer number 4711

        ↓ locally

[PERSON_001]
[EMAIL_001]
[CUSTOMER_ID_001]
```

and you keep a mapping table locally:

```text
PERSON_001 → Max Mustermann
EMAIL_001  → max@example.at
```

then, **from your perspective, this is pseudonymised in principle**. You can
restore the connection.

### 2. Your idea of different perspectives has, however, become legally relevant

This is the interesting part.

On **4 September 2025, in C-413/23 P, EDPS v SRB**, the CJEU expressly confirmed
that pseudonymised data **does not have to constitute personal data in every
case and for every person**. Pseudonymisation can prevent another recipient
from identifying the data subject, meaning that the data is not personal from
that recipient's perspective. ([CURIA][2])

The EDPB developed this idea considerably further in the very new **Guidelines
02/2026 on Anonymisation of 7 July 2026**. They expressly state that information
can be **personal for one organisation and anonymous for another**. As a rule,
anonymity should be assessed from the perspective of the relevant entity.

That is almost exactly the idea you are describing.

It is therefore possible to have this state:

| Perspective | Dataset |
| --- | --- |
| You | personal/pseudonymised |
| Your local mapping system | personal |
| Independent recipient with no means of identification | possibly anonymous |
| The public | possibly anonymous |

The EDPB even states expressly that successful anonymisation **does not
necessarily require the original data to be deleted**. A dataset can therefore
be anonymous for certain entities even though the original personal data still
exists elsewhere.

In that respect, your statement

> "Pseudonymised for me, anonymous for the recipient"

is **legally conceivable in principle**.

### 3. But now comes the decisive catch for your AI architecture

The new EDPB draft makes a further distinction based on **why the recipient
processes the data**.

If the other entity works **independently for its own purposes**, its own
perspective can be decisive.

But if it processes **for you**, meaning that it is a processor, the EDPB says
something different: the question of whether the data is personal should then
be assessed from **the controller's perspective**.

The EDPB even provides a strikingly relevant example:

An online retailer sends extracts from customer data to an external agency so
that the agency can perform an analysis **for the retailer**. Because the
retailer can identify the customers and the agency works for the retailer, the
data should be **treated as personal data for both parties**.

Alongside this, the EDPB gives the counterexample of a hospital providing data
to an **independent research institute** that determines its own purposes and
means. In that case, the question of whether the data is anonymous can indeed
be assessed exclusively from the research institute's perspective.

This distinction is central to your AI example.

### 4. Your AI case will usually be closer to the first example

Take this flow:

```text
Client document
      ↓
local de-identifier
      ↓
PERSON_1 / COMPANY_1 / ADDRESS_1
      ↓
external AI API
      ↓
summary with PERSON_1 and so on
      ↓
local remapping
      ↓
finished client-specific answer
```

From a technical perspective, you are completely right:

The AI receives neither the name nor the mapping key.

**From a data-protection perspective, however, the decisive question is not
whether the neural network knows the name.**

The relevant entity is the **AI service provider** and its role.

If you tell it:

> "Process this information for me, summarise it and return the result to me,"

this is functionally very close to processing on behalf of a controller.

Under the EDPB system currently available, the argument would then be:

**You can identify PERSON_1 → the processing is performed for you → your
perspective is applied to the processor → the data remains personal data.**

This is the point at which I would qualify your original proposition.

### 5. "Anonymous for the AI" is technically useful, but not a GDPR term

I would avoid that wording in a standard.

Better wording would be:

**"Recipient-relative anonymity"** or **"contextual anonymity"**.

The model itself is not a legally relevant person or organisation. What matters
is:

```text
Data subject
    ↓
Controller / processor
    ↓
Recipient / further processor
    ↓
technical AI system
```

Whether the model itself "knows" who PERSON_1 is constitutes only one technical
factor in the identifiability assessment.

### 6. This gives the following classification for your specific workflow

| Processing step | Classification |
| --- | --- |
| Client document reaches you | personal data |
| Local detection of name, email and so on | GDPR processing |
| Replacement with tokens | pseudonymisation/technical and organisational measure |
| Local mapping table | personal data |
| Payload sent to AI | **not automatically anonymous in the legal sense** |
| AI as your processor | under the EDPB, personal data in principle |
| AI output with tokens | still pseudonymised processing |
| Local reinsertion of real data | processing of personal data |
| Finished email to the client | processing of personal data |

But this **does not** mean your tool has little value. Quite the opposite.

### 7. Your tool would still be very valuable from a data-protection perspective

You substantially reduce **which information is actually disclosed**.

Instead of:

```text
Dr Anna Example
Musterstrasse 12
1010 Vienna
anna@example.at
Social security number ...
```

the AI provider receives:

```text
[PERSON_17]
[ADDRESS_4]
[EMAIL_17]
[IDENTIFIER_2]
```

This is a very strong technical and organisational safeguard.
Pseudonymisation is treated by the GDPR and the EDPB precisely as an instrument
for data protection by design, security and risk reduction.
([European Data Protection Board][3])

You may therefore not achieve:

**"The GDPR no longer applies to the AI step at all."**

But you do achieve:

**"The processor receives as little directly identifying information as
possible and does not possess the re-identification knowledge."**

That is a substantial difference.

### 8. Replacing names alone is not enough, however

This is particularly important for LLMs.

Turning

> "Max Mustermann, managing director of ABC GmbH, lives in ..."

simply into

> "PERSON_1, managing director of ABC GmbH with 13 employees in Klosterneuburg,
> was involved on 3 May ..."

may achieve practically nothing if the combination of the remaining attributes
identifies the person.

The EDPB therefore requires a substantially broader assessment for
anonymisation and currently names three tests in particular:

**No Record Isolation, No Linkage and No Inference.** If all three are met, the
dataset can safely be regarded as anonymous; if one is not met, further
investigation is required.

It also expressly points out that combinations of apparently harmless
properties can identify a person.

Your planned tool would therefore need to recognise categories such as:

```text
Direct identifiers
Name
Email
Telephone
Address
Customer number
IBAN
Employee number

Quasi-identifiers
Company
Position
Location
Age
Specific dates
Project names
Department names
Special events

Contextual identifiers
Unique circumstances
Family relationships
Rare functions
Combinations of multiple attributes
```

It would then need to decide according to the situation:

```text
Replace
Generalise
Remove
Retain
```

That is substantially more than classic named-entity redaction.

### 9. Another important distinction: data protection versus confidentiality

Even if you process a dataset so that it is genuinely **anonymous within the
meaning of the GDPR** for a recipient, that does not automatically mean:

> "I may send it to any AI provider I want."

Professional secrecy, NDAs, trade secrets, contractual confidentiality rules
or information-security requirements can still apply.

**"Not personal data" only means that this specific GDPR property is absent.**

It does not mean that the information is free to use.

### 10. I would therefore explain the terms differently in an AI standard

I would not write:

**Anonymisation:** Data can no longer be traced back. GDPR does not apply.

**Pseudonymisation:** Data can be traced back using a key. GDPR applies.

That is genuinely too short under the current legal position.

I would use something closer to:

**Pseudonymisation** is processing in which the direct attribution to a person
is removed and the additional information required for attribution is kept
separately. For an entity that possesses that additional information or other
realistically usable means of identification, the data remains personal.

**Anonymity** is assessed contextually. The same information can be personal
for one entity and anonymous for another if, from the relevant perspective, the
natural person cannot be identified by means reasonably likely to be used. In
processing performed on behalf of another entity, however, the controller's
perspective may remain decisive.

This reflects the position after **CJEU C-413/23 P** and EDPB Guidelines 02/2026
much better. The EDPB guidelines are, however, currently still **version 1.0
for public consultation**, which runs until 30 October 2026; the underlying
CJEU principle of contextual identifiability comes from a final judgment.
([European Data Protection Board][4])

### The decisive answer to your original question

Your reasoning is therefore **half exactly right and half in need of
correction**:

> **Yes:** A dataset can be pseudonymised/personal for you and anonymous for
> another recipient.

But:

> **No:** It does not automatically follow that an external AI provider
> processing on your behalf does not process personal data.

If the AI provider is a **processor for your processing operation**, the current
EDPB interpretation strongly suggests that **your identifiability perspective
also applies to it**. Your pseudonymisation is then an excellent data-protection
measure, but not a "GDPR off switch".

It is precisely this distinction — **identifiability × perspective × recipient
role × processing purpose** — that I would use as the actual model in an AI
standard.

I was not able to inspect the content of the **ai-standard.de** domain you
mentioned; when retrieved, the domain currently redirected to a domain-sales
page. If you give me the specific page or correct link, I can compare the
definitions there precisely against this new CJEU/EDPB system.

[1]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A32016R0679&utm_source=chatgpt.com "L_2016119EN.01000101.xml - EUR-Lex - European Union"
[2]: https://curia.europa.eu/jcms/upload/docs/application/pdf/2025-09/cp250107en.pdf "The Court of Justice clarifies the scope of the concept of personal data in the context of a transfer of pseudonymised data to third parties"
[3]: https://www.edpb.europa.eu/news/edpb-adopts-pseudonymisation-guidelines-and-paves-the-way-to-improve-cooperation-with_en?utm_source=chatgpt.com "EDPB adopts pseudonymisation guidelines and paves the way to improve cooperation"
[4]: https://www.edpb.europa.eu/public-consultations/guidelines-022026-on-anonymisation_en?utm_source=chatgpt.com "Guidelines 02/2026 on Anonymisation"

<!-- markdownlint-enable MD001 MD036 -->
