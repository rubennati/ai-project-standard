# GDPR and AI decision model

<!-- markdownlint-disable MD001 -->

> Complete English translation of the third German source note supplied by the
> maintainer on 11 August 2026. Structure, examples, tables, diagrams and source
> references are retained. Claims are recorded as received, not corrected here.
> See [SOURCES.md](SOURCES.md) for verification and qualifications.

Yes. The decisive point is: **"May I process personal data with AI?" and "Is
the data anonymised?" are two different legal questions.** If you look only at
anonymisation and pseudonymisation, roughly half of the GDPR analysis is
missing.

The Austrian Data Protection Authority expresses it in technology-neutral
terms: from a data-protection perspective, AI is initially just another form of
processing. Personal data is therefore **not categorically prohibited from
being used in an AI system**. As with any other processing operation, a legal
basis under Article 6 GDPR is required, Article 9 may additionally apply, and
the other GDPR requirements must be met. ([Austrian Data Protection
Authority][1])

## 1. The actual model has six axes

I would model it for your AI Standard roughly as follows:

| Axis | Core question | Why is it relevant? |
| --- | --- | --- |
| **1. Data status** | Personal, pseudonymised or anonymous? | Determines whether the GDPR applies at all |
| **2. Your role** | Controller or processor? | Determines who may make decisions |
| **3. Legal basis/purpose** | Contract, legitimate interest, consent and so on? | Determines whether the processing is permitted |
| **4. Role of the AI** | Processor, subprocessor or independent controller? | Determines contractual and information duties |
| **5. Storage/data location** | EEA, adequate third country or other third country? | Determines whether GDPR Chapter V is added |
| **6. Lifecycle** | Storage, training, deletion, withdrawal, data-subject rights? | Determines whether the workflow can be controlled in practice |

Only when these six points fit together can you say: **This particular AI
workflow is defensible under data-protection law.**

---

# 2. The first important misconception: "The customer must permit AI"

Not necessarily.

Assume a customer engages you to provide a service and, for this processing
operation, you are the **controller**.

You may process their personal data, for example, on the basis of a contract, a
legal obligation, consent or, under certain conditions, a legitimate interest.
The DSB expressly points out that Article 6 recognises several equivalent legal
bases and that legitimate interest may also be considered for AI use, always
depending on the specific case. ([Austrian Data Protection Authority][1])

The question is then not automatically:

> "Did the customer expressly agree that ChatGPT may be used?"

It is first:

> "Is the specific AI processing covered by my legal basis and stated purpose?"

If you use an ordinary cloud service as a processor, the GDPR does not, as a
general rule, require separate consent from every data subject to the use of
that service provider either. That is precisely why **processing under Article
28 GDPR** exists as a construct.

In principle, AI is no different in this respect.

---

# 3. Example: you are the controller and use AI as a tool

Take this case:

```text
Customer
  ↓
Document with personal data
  ↓
YOU
  ↓
AI API
  ↓
Summary
  ↓
YOU
  ↓
Answer to customer
```

If the AI provider processes solely for you, it can be a processor.

The system would then look roughly like this:

```text
Legal basis for your processing
          +
Purpose limitation / data minimisation
          +
Article 28 contract with AI provider
          +
appropriate technical and organisational measures
          +
Transparency
          +
third-country mechanism where applicable
          =
AI use possible in principle
```

The DSB expressly states that, when external AI systems are used, it should be
checked whether personal data reaches providers or other third parties, how it
is processed there and whether this results, for example, in unlawful
disclosure. ([Austrian Data Protection Authority][1])

**Customer consent is therefore not automatically a prerequisite.**

This is a very important statement for your AI Standard.

---

# 4. The situation is entirely different when you are your customer's processor

Now consider a different case.

A company gives you its customer data:

```text
Company A
Controller
      ↓
YOU
Processor
      ↓
AI provider
Subprocessor
```

Now **you may not simply decide on your own** to send the data to an AI system.

Article 28 requires prior specific or general written authorisation from the
controller for a further processor. The subprocessor must also be integrated
into the contractual chain accordingly. ([European Data Protection Board][2])

This gives your sentence

> "The customer allowed it."

a completely different meaning.

It is **not GDPR consent from the data subjects**.

It is the:

**instruction or authorisation of the controller to use a subprocessor.**

These two concepts must be kept separate.

---

# 5. Now to your pseudonymisation architecture

Consider your actual system:

```text
Original document

Max Mustermann
Customer number 4711
Musterstrasse 10

        ↓ locally

PERSON_001
CUSTOMER_017
ADDRESS_004

        ↓

external AI

        ↓

Answer with
PERSON_001 and so on

        ↓ locally

Remapping

        ↓

Max Mustermann ...
```

Technically, this is excellent data minimisation.

Legally, however, it will normally be:

> **Pseudonymisation within personal-data processing.**

Why?

Because you possess the mapping and the AI processes for you.

The EDPB addresses precisely this situation: when another entity processes data
**on behalf of** the controller, identifiability is assessed from the
controller's perspective. The EDPB gives the example of a retailer providing
processed customer data to an agency for analysis. Although the agency may not
itself be able to identify the customers, the information is personal data for
both the retailer and the agency.

This means that:

```text
PERSON_001
```

is technically very well shielded from the AI.

But legally the workflow remains:

```text
personal-data processing
        +
pseudonymisation as a safeguard
```

and not:

```text
anonymous data
→ GDPR switched off
```

---

# 6. And yet this tool makes a great deal of sense

This is the point that is often lost.

There is an enormous difference between:

### Variant A

```text
Max Mustermann
Social security number
IBAN
Address
Diagnosis
...
        ↓
OpenAI / Anthropic / another provider
```

and

### Variant B

```text
PERSON_001
IDENTIFIER_002
ACCOUNT_003
LOCATION_004
...
        ↓
AI provider
```

Although **both can fall within the GDPR**, the risk is entirely different.

Pseudonymisation helps with:

- data minimisation;
- privacy by design;
- damage limitation;
- security;
- confidentiality;
- third-country risk;
- misconfiguration;
- data leaks.

The GDPR and the EDPB expressly treat pseudonymisation as a safeguard for this
reason. ([European Data Protection Board][3])

For your planned tool, that is probably the more important statement than "we
make the GDPR go away".

---

# 7. What, by contrast, would constitute genuine anonymisation?

Assume that you have 1,000 customer cases and produce:

```text
32% of requests concern backups
27% concern email security
18% concern password management
...
```

and the underlying individuals can no longer be identified from these results
by means reasonably likely to be used.

That information can genuinely be anonymous.

The current EDPB draft uses, in particular:

**No Record Isolation + No Linkage + No Inference.**

If these criteria are met, information can safely be considered anonymous.
([European Data Protection Board][4])

For that anonymous dataset, the general rule is then:

> **The GDPR no longer applies to the subsequent processing of the anonymous
> dataset.**

The EDPB states this expressly.

---

# 8. But creating anonymous data is itself GDPR processing

This is one of the most important nuances.

Assume:

```text
personal data
        ↓
anonymisation
        ↓
anonymous data
```

The part on the right can be outside the GDPR.

But the part on the left, including **anonymisation itself**, still falls
within the GDPR.

The EDPB expressly states that processing used to produce anonymous information
needs a legal basis under Article 6 and, for special categories, may
additionally require an exception under Article 9(2). Where anonymisation is
part of the same processing operation and pursues the same purpose, the same
legal basis may apply in principle.

That produces this model:

```text
PERSONAL DATA
      GDPR
        │
        │ Anonymisation
        │ also GDPR
        ▼
────────────────────────── boundary
        ▼
ANONYMOUS INFORMATION
      no GDPR
```

In my view, this would be a very good diagram for your AI Standard.

---

# 9. May I simply disclose completely anonymous data afterwards?

**Under the GDPR, in principle, much more freely, yes.**

If the information is genuinely anonymous, the information itself is not
subject to the GDPR.

But it does not follow that:

> "Legally, I may do anything with it."

The following can still exist:

```text
NDA
trade secret
contractual confidentiality
professional secrecy
copyright
database rights
know-how protection
other statutory duties of confidentiality
```

Example:

> "Company X plans to acquire Company Y for EUR 40 million in October."

The statement may contain no personal data at all.

Nevertheless, it would obviously be problematic to enter it into an arbitrary
public AI service if it is subject to an NDA.

**GDPR protection and information confidentiality are two different
dimensions.**

---

# 10. This is exactly why "anonymise and then reinsert" is a special case

This is the actual answer to your original idea.

If you deliberately do the following:

```text
Max Mustermann
      ↓
PERSON_1
      ↓
AI
      ↓
PERSON_1 should do X
      ↓
Mapping
      ↓
Max Mustermann should do X
```

the purpose of the complete processing operation remains:

> to process a particular natural person or that person's specific case.

You deliberately maintain the connection.

**This is precisely the ideal use case for pseudonymisation.**

Not for genuine anonymisation.

You should therefore probably not position your tool as:

> "Anonymisation before AI"

but as:

> **local de-identification and pseudonymisation before external AI processing,
> with controlled re-identification after processing.**

That describes what the system actually does.

---

# 11. Now to "The customer says yes"

Three different kinds of "yes" must be distinguished.

| Who says "yes"? | Legal meaning |
| --- | --- |
| Data subject | potentially **consent under Article 6(1)(a)** |
| Corporate customer as controller | potentially **instruction/authorisation for a subprocessor** |
| Customer agrees to a contract clause | contractual provision; not automatically GDPR consent |

This is extremely important.

A managing director can say, for example:

> "Yes, Ruben may use AI."

That does **not automatically provide GDPR consent on behalf of all employees,
customers and patients**.

But if the company is the controller, the managing director may authorise you,
as its processor, to use a particular subprocessor. ([European Data Protection
Board][2])

Completely different legal effect.

---

# 12. What if a data subject says: "I no longer want this"?

Everything then depends on **why you are processing in the first place**.

If the processing is based on consent, that consent can be withdrawn at any
time. Withdrawal does **not make the processing before withdrawal retroactively
unlawful**, but it generally prevents further processing based on that consent.
([EUR-Lex][5])

If your processing is instead based, for example, on a legitimate interest,
this is not a "withdrawal of consent". The right to object under Article 21 may
then be relevant, and it must be assessed whether compelling overriding grounds
exist. ([EUR-Lex][6])

Article 17 also provides a right to erasure under certain conditions, but again
not an absolute right to make every piece of information disappear immediately
in every situation. ([EUR-Lex][6])

This is why the question

> "Can I later remove the data from the AI again?"

is exceptionally important when selecting a provider.

---

# 13. Training makes the situation substantially more difficult

There is a massive difference between:

```text
Prompt
↓
AI processes it
↓
Output
↓
Prompt is deleted after a defined period
↓
no training
```

and:

```text
Prompt
↓
Storage
↓
Use for model improvement
↓
Training
↓
potential long-term influence on the model
```

Under the first model, the provider can be structured relatively cleanly as a
service provider/processor.

If a provider additionally uses your data **for its own purposes**, such as
training its own model, its role and this additional processing need to be
assessed separately. The DSB specifically requires an assessment, when external
AI systems are used, of whether data is transferred to the provider or further
third parties and how it is used there. ([Austrian Data Protection Authority][1])

For a professional AI standard, I would therefore be much more inclined to
require the following by default:

```text
no training with client data
defined retention
deletion mechanism
DPA
subprocessor list
controlled data location
logging
pseudonymisation where useful
```

---

# 14. Germany, the United States and China are another separate layer

This initially has **nothing to do with the legal basis under Article 6**.

In theory, you can have entirely lawful processing under Article 6 and still
make an unlawful third-country transfer.

### Germany

Germany is within the EEA legal area. The special third-country requirements of
Chapter V do not apply merely because the server is located in Germany.
([European Commission][7])

### United States

For US companies participating in the **EU-US Data Privacy Framework**, an
adequacy decision currently exists. Transfers to those companies can, in
principle, rely on Article 45. The Commission expressly lists the United States
only with respect to participating commercial organisations. ([European
Commission][8])

If a US provider is not covered, Standard Contractual Clauses under Article 46,
for example, may be considered. ([European Commission][9])

### China

China is not currently on the European Commission's adequacy list. Personal
data therefore generally requires another mechanism, such as appropriate
safeguards under Article 46. ([European Commission][8])

---

# 15. Again, "The customer agrees" does not automatically solve everything

This is another common misconception.

You must distinguish:

```text
Layer 1
May I process the personal data?
Articles 6 / 9

                AND

Layer 2
May I transfer it to this third country?
Articles 44 onward
```

Article 49 does contain the possibility of **explicit consent to a
third-country transfer** if the data subject has first been informed about the
possible risks. ([EUR-Lex][5])

Article 49 is designed as an exception, however; normal transfer instruments
should generally be used for regular, recurring business transfers.
([European Data Protection Board][10])

So:

> "The customer once said China is okay."

would not be a robust transfer strategy for a professional AI system.

---

# 16. This produces a fairly useful AI matrix

| Situation | GDPR during the AI step? | What is typically required? |
| --- | --- | --- |
| Personal data → own local AI | Yes | Articles 6/9, principles, technical and organisational measures |
| Personal data → EU AI processor | Yes | Articles 6/9 + Article 28 + transparency/measures |
| Pseudonymised data → EU AI processor | **Yes** | the same, but with substantially lower risk |
| Pseudonymised data → AI subprocessor | **Yes** | additionally, authorisation from the controller |
| Genuinely anonymous data → AI | **in principle no** for subsequent processing | the anonymisation itself still had to be lawful |
| Personal data → US DPF provider | Yes | GDPR + Article 28 and so on; Article 45 may cover the transfer |
| Personal data → other US/third-country provider | Yes | Article 46 or another Chapter V mechanism in addition |
| Provider additionally uses data for its own training | further assessment generally required | provider role, purpose, legal basis, transparency |
| Article 9 data | Yes, with stricter conditions | Article 6 **and** Article 9(2) exception |

The DSB expressly confirms that, for special categories, an exception under
Article 9(2) is required in addition to Article 6. ([Austrian Data Protection
Authority][1])

---

# 17. I would therefore choose precisely this architecture for your planned workflow

```text
Client document
       │
       ▼
local processing
       │
       ├── detection of direct identifiers
       ├── detection of indirect identifiers
       ├── pseudonymisation
       └── mapping remains local
       │
       ▼
minimised prompt
       │
       ▼
approved enterprise/API AI service
       │
       ├── no training
       ├── defined retention
       ├── DPA
       ├── defined subprocessors
       └── clarified third-country transfer
       │
       ▼
pseudonymised answer
       │
       ▼
local remapping
       │
       ▼
client result
```

**In my view, this is the right way to think about your project.**

Not:

> "We anonymise so the GDPR goes away."

But:

> **"We first check whether the AI processing is permitted at all, and then use
> local pseudonymisation to reduce the personal information that actually
> reaches the external AI provider."**

Genuine **anonymisation** is then a second mode for use cases where no link back
to a specific person is required at all.

The most important sentence for your AI Standard may therefore be:

> **Pseudonymisation is not a substitute for a legal basis, but a safeguard
> within processing that is permitted in principle. Anonymisation, by contrast,
> can mean that subsequent processing is no longer subject to the GDPR; the
> anonymisation itself remains processing of personal data and must itself be
> lawful.**

This represents the issue much more precisely than the usual contrast of
"anonymous = permitted, pseudonymous = GDPR".

[1]: https://dsb.gv.at/kuenstlichebrintelligenz/kuenstliche-intelligenz-datenschutz "Künstliche Intelligenz & Datenschutz"
[2]: https://www.edpb.europa.eu/sme/learn-the-basics/data-controller-or-data-processor_en?utm_source=chatgpt.com "Data controller or data processor | Data protection guide for SMEs"
[3]: https://www.edpb.europa.eu/system/files/2025-01/edpb_guidelines_202501_pseudonymisation_en.pdf?utm_source=chatgpt.com "Guidelines 01/2025 on Pseudonymisation"
[4]: https://www.edpb.europa.eu/news/edpb-sheds-light-on-anonymisation-and-web-scraping-for-generative-ai-and-adopts-final-version_en "EDPB sheds light on anonymisation and web scraping for generative AI and adopts final version of guidelines on blockchain"
[5]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A02016R0679-20160504&utm_source=chatgpt.com "Consolidated TEXT: 32016R0679 — EN — 04.05.2016"
[6]: https://eur-lex.europa.eu/legal-content/DE-EN/TXT/?uri=CELEX%3A32016R0679&utm_source=chatgpt.com "Regulation - 2016/679 - EN - GDPR - EUR-Lex - European Union"
[7]: https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/rules-international-data-transfers_en "Rules on international data transfers - European Commission"
[8]: https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en "Data protection adequacy for non-EU countries"
[9]: https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en "Standard Contractual Clauses (SCC) - European Commission"
[10]: https://www.edpb.europa.eu/sites/default/files/consultation/edpb_recommendations_202001_supplementarymeasurestransferstools_en.pdf?utm_source=chatgpt.com "Recommendations 01/2020 on measures that supplement transfer tools"

<!-- markdownlint-enable MD001 -->
