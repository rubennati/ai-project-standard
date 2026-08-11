# GDPR vocabulary before the AI matrix

<!-- markdownlint-disable MD001 MD028 MD036 -->

> Complete English translation of the fourth German source note supplied by the
> maintainer on 11 August 2026. Structure, examples, tables, diagrams and source
> references are retained. Claims are recorded as received, not corrected here.
> See [SOURCES.md](SOURCES.md) for verification and qualifications.

Exactly. Before building the AI matrix, we first need a **small GDPR
vocabulary**. Otherwise we use words such as "controller", "processor",
"consent" or "legitimate interest" without making clear which completely
different questions lie behind them.

The Austrian Data Protection Authority emphasises an important starting point:
the GDPR is **technology-neutral**. Whether you use Excel, a cloud service, a
Python script or an AI system does not initially change the fundamental rules.
As soon as personal data is processed, the specific processing operation must
be classified under data-protection law. ([Austrian Data Protection
Authority][1])

# 1. The most important basic question: what is personal data?

**Personal data** is information relating to an identified or identifiable
natural person. ([Austrian Data Protection Authority][1])

Obvious examples:

- Max Mustermann
- [max@example.at](mailto:max@example.at)
- telephone number
- address
- social security number

But the following can also be personal data:

- IP address
- customer number
- employee ID
- location data
- particular combinations of information
- a circumstance from which a person can be identified

One important limitation:

**The GDPR protects natural persons.**

"ABC GmbH has revenue of EUR 2 million" is therefore not personal data merely
because it is confidential.

But:

> "Max Mustermann owns 100% of ABC GmbH and earns ..."

once again relates to a natural person.

---

# 2. What is a "data subject"?

The **data subject** is simply the person to whom the data relates.

Example:

You receive the following list from a customer:

| Name | Role |
| --- | --- |
| Anna Berger | Employee |
| Peter Huber | Customer |
| Max Müller | Supplier |

Anna, Peter and Max are each **data subjects**.

The managing director who sent you the file is not automatically "the data
subject". They can be the company's representative while the information in the
file concerns other people.

This becomes very important later when considering the statement:

> "The customer agreed."

The customer as a company and the **data subjects** are not necessarily the
same people.

---

# 3. What does "processing" mean?

"Processing" is much broader than "analysing".

Practically everything you do with personal data can constitute processing:
collecting, storing, reading, changing, sorting, transferring, deleting and so
on. The GDPR applies regardless of the technology used. ([European
Commission][2])

This means that even:

```text
Opening an email
↓
Processing
```

or:

```text
Saving a PDF
↓
Processing
```

or:

```text
Replacing a name with PERSON_17
↓
Processing
```

or:

```text
Sending a prompt to an AI
↓
Processing
```

or:

```text
Deleting a file
↓
Processing
```

is processing.

This is why **anonymisation itself initially constitutes processing of personal
data**.

---

# 4. What is a controller?

This is one of the most important concepts of all.

The **controller** essentially determines:

> **Why is the data processed and for which purpose?**

as well as the essential means of that processing.

Article 4(7) GDPR defines the controller as the entity which, alone or jointly
with others, determines the purposes and means of processing. The EDPB also
emphasises that this role is determined by the **actual activity**, not by what
someone writes into a contract.

### Example

You operate an IT consultancy.

A prospective customer writes:

> "Please prepare an offer for me."

You decide:

- that you will store their contact details;
- why you will store them;
- for how long;
- in which CRM;
- for which communication.

You are then **the controller** for this processing.

In simplified terms:

> **Controller = the party that determines what the personal data is processed
> for.**

---

# 5. How do I recognise a controller?

A useful test question is:

> **Who could say: "We want to process this personal data for purpose X"?**

Example:

A tax advisory firm wants to run payroll for its employees.

The tax advisory firm decides:

> We process employee data for personnel administration and payroll.

It is therefore the controller for this processing in principle.

Not Microsoft.

Not its IT service provider.

Not the payroll software manufacturer.

The purpose comes from the company.

---

# 6. What is a processor?

A **processor** processes personal data **for the controller**.

The EDPB names two core elements:

1. It is an entity separate from the controller.
2. It processes personal data **on behalf of** the controller.

Typical examples:

```text
Company
    ↓
Cloud hosting
```

```text
Company
    ↓
external backup company
```

```text
Company
    ↓
payroll service provider
```

```text
Company
    ↓
AI API
```

The processor may not, in principle, suddenly use the data for its own
purposes. The EDPB makes clear that if a processor begins to determine purposes
and means itself, it can become a controller for that processing operation.

---

# 7. Controller versus processor in one sentence

You can remember it like this:

> **Controller:** "I want to do X with this data."

> **Processor:** "I will do X for you."

Example:

```text
Company:
"I want to archive my invoices."

         ↓

Cloud provider:
"I will store the invoices for you."
```

Company:

**Controller**

Cloud provider:

**Processor**

The EDPB uses cloud services as a typical example: if the cloud provider
processes data solely in accordance with its customer's purposes and
instructions, and does not use it for its own purposes, it can be a processor.

---

# 8. And what is a subprocessor?

Now we come to the chain.

Assume:

```text
Company A
   ↓
engages you
   ↓
Ruben / IT service provider
   ↓
uses cloud AI
   ↓
AI provider
```

If Company A is the controller and you process personal data **for Company A**:

```text
Company A
= Controller

You
= Processor
```

If you then use an AI provider for this processing:

```text
AI provider
= Subprocessor
```

or, in German:

**Unterauftragsverarbeiter**.

The processor may not simply add another processor at will. Article 28 requires
prior specific or general written authorisation from the controller; the
processing chain must also be contractually protected accordingly.

---

# 9. This is why there are two completely different AI situations

This is central to the matrix that will follow.

## Situation A – you are the controller yourself

A customer personally engages you:

> "Please analyse my IT concept."

You decide on your own service and your processing operation.

The situation can then be:

```text
YOU
Controller
     ↓
AI provider
Processor
```

---

## Situation B – your customer is the controller

A company says:

> "Here is our employees' personal data. Process it according to our
> instructions."

The situation can then be:

```text
CUSTOMER
Controller
     ↓
YOU
Processor
     ↓
AI provider
Subprocessor
```

**The same AI system can therefore have entirely different legal roles**
depending on the specific processing operation. Roles are determined
functionally from the actual processing.

---

# 10. What does "independent controller" mean?

This is more of a practical description than a distinct special GDPR term.

It means:

> The other entity no longer processes the data **only for me**, but for a
> purpose of its own.

Example:

```text
Me:
"Summarise this document for me."

AI provider:
"Okay."
```

If the provider processes the document only to execute my request:

→ possibly a **processor**.

If the provider additionally says:

> "We also use the prompt for our own purpose, namely to improve our general
> model."

then this additional processing must be assessed separately. If the provider
determines the purpose and essential means for it, it can be the controller for
**that processing operation**. The EDPB expressly makes clear that a processor
which determines its own purposes can become the controller for that
processing.

A provider can therefore even have different roles side by side:

```text
Prompt processing for you
→ Processor

own use for purpose Y
→ possibly Controller
```

---

# 11. What are joint controllers?

Sometimes two organisations decide **jointly** on the purpose and essential
means.

They are:

**joint controllers**.

For example, two companies can jointly build a platform and jointly determine:

- which data is collected;
- why;
- from whom;
- how it is analysed.

Article 26 GDPR may then be relevant. Joint controllers must allocate their
respective responsibilities transparently. ([European Commission][3])

This differs from:

```text
Controller
↓
Processor
```

because a processor has **no joint purpose of its own**.

---

# 12. What is a legal basis?

Now we come to the second major pillar.

Merely being the controller does not mean:

> "I may do anything."

You need a legal reason to process personal data.

Article 6 GDPR recognises six basic legal bases:

1. consent;
2. contract;
3. legal obligation;
4. vital interests;
5. task carried out in the public interest/exercise of official authority;
6. legitimate interests. ([European Commission][4])

For ordinary companies, these three are often particularly relevant:

```text
Contract
Consent
Legitimate interest
```

But they mean completely different things.

---

# 13. Contract – Article 6(1)(b) GDPR

The simplest case:

A person engages you to do something and you need to use certain data to
perform the contract.

Example:

> Max Mustermann engages you to perform a security analysis.

You need to know:

- who your customer is;
- how to contact them;
- which systems are affected;
- where to send the result.

Certain processing operations can then be necessary to perform the contract.

But:

**"It is in the contract" is not enough.**

The EDPB requires the processing to be **objectively necessary to perform the
contract**. Something that is merely convenient or useful does not become
processing under Article 6(1)(b) for that reason alone. ([European Data
Protection Board][5])

This will become interesting for AI.

Because:

> "I need the data to provide the consultancy service."

may be correct.

But it does not automatically follow that:

> "I therefore necessarily need this exact external AI service."

Those are two different questions.

---

# 14. Consent – Article 6(1)(a)

Consent does not simply mean:

> "The customer said okay at some point."

GDPR consent must, in particular, be:

- freely given;
- specific;
- informed;
- unambiguous.

It must also be capable of being withdrawn; withdrawal must generally be as
easy as giving consent. Withdrawal does not make previously lawful processing
retroactively unlawful. ([European Data Protection Board][6])

Example:

> "I consent to my data being processed for purpose X."

can constitute consent if the other conditions are met.

But:

> "I accept the general terms and conditions."

is not automatically GDPR consent for every processing operation somehow
mentioned in those terms.

---

# 15. "My customer allows me to use AI" is therefore not always consent

This is very important.

Assume:

```text
ABC GmbH
        ↓
provides you with employee data
        ↓
"You may use AI for this."
```

There are at least two layers.

### Layer 1 – relationship between ABC GmbH and its employees

ABC GmbH must have a legal basis for processing their data.

### Layer 2 – relationship between ABC GmbH and you

If you are a processor, the statement

> "You may use provider X"

can constitute **authorisation of a subprocessor**.

It is not consent from the employees.

It is:

> a data-protection decision by the controller within the processing
> relationship.

These two things must not be confused. Authorisation of further processors is
governed, in particular, by Article 28 GDPR.

---

# 16. Legitimate interest – Article 6(1)(f)

This is not a free pass along the lines of:

> "I think the processing is useful."

The EDPB essentially uses a three-step test:

**1. Is there a legitimate interest?**

**2. Is the specific processing necessary for it?**

**3. Are the interests, rights and freedoms of the data subject not
overridden?** ([European Data Protection Board][7])

Example:

A company may have a legitimate interest in appropriate IT and network
security. The European Commission expressly names information and network
security as a possible example; the specific case must nevertheless always be
assessed. ([European Commission][4])

In simplified form, it can be presented like this:

```text
My interest
      │
      ▼
Is it legitimate?
      │
      ▼
Do I need this data for it?
      │
      ▼
Can I achieve it in a more privacy-friendly way?
      │
      ▼
How serious is the impact on the person?
      │
      ▼
Balancing
```

This is precisely where your pseudonymisation can later become very
interesting.

Because:

> "I send the complete dataset"

and

> "I locally remove almost all identifiers and send only the necessary minimum"

are obviously not the same processing operation in terms of risk.

---

# 17. Legal obligation

Sometimes you must process data because the law requires it.

A simple European Commission example:

An employer must process certain employee and income information for social
security purposes. ([European Commission][4])

The legal basis is then not:

> "The employee agreed."

but:

> "The law requires me to do it."

For that reason, a data subject cannot stop every legally required processing
operation by simply withdrawing consent.

---

# 18. What are special categories of personal data?

Article 9 GDPR contains categories of data that receive special protection.

They include data concerning:

- health;
- genetic characteristics;
- certain biometric data;
- religion or philosophical beliefs;
- political opinions;
- trade-union membership;
- sex life or sexual orientation.

For this data, an ordinary Article 6 legal basis is not automatically enough;
an additional condition or exception under Article 9(2) must be met. ([European
Commission][4])

Example:

```text
Max Mustermann has diabetes.
```

is substantially more critical than:

```text
Max Mustermann orders three laptops.
```

The later AI matrix must therefore also have a separate axis:

**ordinary personal data versus special categories.**

---

# 19. What does pseudonymisation mean?

Now we return to our original subject.

With **pseudonymisation**, the direct connection to the person is reduced, but
not permanently eliminated.

The EDPB describes pseudonymisation as a safeguard that reduces attributability
without completely severing the connection to the person. ([European Data
Protection Board][8])

Example:

```text
Max Mustermann
max@example.at
Customer number 4711

↓ Pseudonymisation

PERSON_001
EMAIL_001
CUSTOMER_001
```

Separately:

```text
PERSON_001 = Max Mustermann
EMAIL_001  = max@example.at
```

This lets you reverse the step.

That is pseudonymisation.

**The processing remains within the GDPR system in principle.**

---

# 20. What does anonymisation mean?

With genuine anonymisation, attribution to a person is removed to the point
where the information can no longer be attributed to a natural person.

Genuinely anonymised information is no longer personal data and therefore
falls, in principle, outside the scope of European data-protection law.
([European Data Protection Board][8])

Example:

From:

```text
1,000 specific customer cases
```

comes:

```text
42% of cases concern backups
31% concern email security
17% concern access control
10% other
```

If no person can be identified from it, this can be anonymous.

This is completely different from:

```text
Max Mustermann
↓
PERSON_001
```

with a mapping table next to it.

---

# 21. Why "anonymous" and "pseudonymous" are not only technical terms

A developer could say:

> "I removed the name, so it is anonymised."

That is not sufficient under the GDPR.

Example:

```text
[NAME REMOVED]

Managing director
48 years old
only company in this sector
in a small municipality
accident on 3 May 2026
```

It may be completely obvious who is meant.

Removing the name then achieves little in terms of actual identifiability.

Therefore:

> **Removing a name ≠ automatic anonymisation.**

---

# 22. What does data minimisation mean?

One of the GDPR principles states:

> Process only personal data that is adequate, relevant and necessary for the
> relevant purpose.

The European Commission expressly lists data minimisation as a fundamental
GDPR principle. ([European Commission][9])

For AI, this means, for example:

Worse:

```text
entire personnel file
↓
AI

Question:
"Summarise the last paragraph."
```

Better:

```text
only the relevant paragraph
↓
AI
```

Even better, where possible:

```text
relevant paragraph
+
pseudonymisation
↓
AI
```

This is an important reason why your planned tool would be useful even if the
data legally remains personal.

---

# 23. What does purpose limitation mean?

You generally collect data for a particular purpose.

Example:

> "I need this data to perform the security analysis."

This does not automatically mean:

> "I may now also use the data to train my own general AI model."

The GDPR requires, among other things, purpose limitation; further processing
for other purposes must be assessed separately. The European GDPR principles
expressly include lawfulness/transparency, purpose limitation, data
minimisation, storage limitation, and integrity and confidentiality. ([European
Commission][9])

This is particularly relevant if an AI provider says:

> "We also use your inputs for product improvement."

That may create an additional purpose.

---

# 24. What is an AVV or DPA?

**AVV** = Auftragsverarbeitungsvertrag, the German term for a processing
agreement.

In English:

**DPA = Data Processing Agreement.**

When a controller has a processor work with personal data, the relationship
must generally be governed under Article 28.

The Austrian Data Protection Authority expressly identifies the agreement
under Article 28(3) as a central reference point for processor duties. Among
other things, the processor generally processes only on the controller's
documented instructions. ([Austrian Data Protection Authority][10])

A DPA typically covers matters such as:

```text
What is processed?
Why?
Which data?
Which groups of people?
Which security measures?
Which deletion rules?
Which subprocessors?
How are data-subject rights supported?
What happens in the event of a personal-data breach?
```

---

# 25. What are technical and organisational measures?

They are safeguards.

Technical examples include:

- encryption;
- access control;
- MFA;
- network segmentation;
- logging;
- pseudonymisation.

Organisational examples include:

- authorisation concepts;
- deletion processes;
- employee training;
- approval processes;
- policies.

Your planned local pseudonymisation system would therefore be, among other
things, a **technical data-protection measure**.

---

# 26. What does privacy by design mean?

In German, approximately:

**Datenschutz durch Technikgestaltung.**

The idea is:

Do not build a system first and stick data protection onto it afterwards.

Instead:

```text
Architecture
↓
from the beginning
↓
take data protection into account
```

The EDPB expressly treats data protection by design and by default as a duty of
the controller under Article 25 GDPR. ([European Data Protection Board][11])

Your architecture:

```text
Document
↓
local de-identifier
↓
minimum necessary data
↓
external AI
↓
local remapping
```

is exactly the kind of architectural decision that can be assessed from this
perspective.

---

# 27. What is a recipient and what is a third party?

These are also often confused.

A **recipient** is generally an entity to which personal data is disclosed.

A recipient can simultaneously be, for example:

- a processor;
- an independent controller.

The EDPB expressly points out that "recipient" and "third party" are relative
concepts, and that a recipient can simultaneously be a controller or processor
from another perspective.

The statement

> "I disclose the data to a third party."

is therefore not yet a sufficient legal description.

You must ask:

> **In which role does this third party receive the data?**

---

# 28. What does "AI as a tool" mean?

We can now explain this term properly.

"AI as a tool" is not a distinct GDPR legal status.

In practice, it means:

> I use an AI service merely to perform processing **for my purpose**.

Example:

```text
Me:
"Summarise this support email."

AI:
performs only this task for me.
```

This resembles:

```text
Me
↓
cloud word processing
```

or:

```text
Me
↓
external OCR
```

or:

```text
Me
↓
translation service
```

If the external service processes personal data solely in accordance with your
purposes and instructions, much points towards a processor role; the actual
arrangement always remains decisive.

---

# 29. The difference between four AI arrangements

This finally gives us a tangible picture.

### Case 1 – local AI

```text
YOU
│
├── Client data
│
└── AI runs on your server
```

There is no additional external AI processor merely because local AI is used.

Your personal-data processing naturally remains.

---

### Case 2 – external AI as a tool

```text
YOU
Controller

↓ personal data

AI provider
Processor
```

The provider processes exclusively for your purpose.

The Article 28 layer is then typically required.

---

### Case 3 – you work for another controller

```text
CUSTOMER
Controller

↓ Instruction

YOU
Processor

↓ AI

AI PROVIDER
Subprocessor
```

You now need, in particular, the corresponding authorisation and arrangement
for the further processor.

---

### Case 4 – AI provider pursues its own purpose

```text
YOU
↓
Prompt
↓
AI provider

├── answers your prompt
│   → processing for you
│
└── uses data for its own purpose
    → to be assessed separately
```

The provider can be the controller for its own purpose.

**This is substantially more critical and a different legal construction.**

---

# 30. A very important rule: role and legal basis are two different things

They are often confused.

### Role

answers:

> **Who decides?**

That is:

```text
Controller?
Processor?
Subprocessor?
```

### Legal basis

answers:

> **Why may this processing take place at all?**

For example:

```text
Contract?
Consent?
Legitimate interest?
Legal obligation?
```

These are two different axes.

Example:

```text
You are the controller

AND

your legal basis is contract.
```

or:

```text
You are the controller

AND

your legal basis is legitimate interest.
```

"Controller" is **not permission to process**.

It describes your role.

---

# 31. And pseudonymisation is a third axis again

This is why the picture is gradually becoming clearer.

```text
WHO?
↓
Controller / processor

WHY MAY I?
↓
Legal basis

WHICH DATA?
↓
personal / special category

HOW DO I PROTECT IT?
↓
Pseudonymisation / encryption / technical and organisational measures

WHERE TO?
↓
internal / processor / third country

WHAT DOES THE RECIPIENT DO?
↓
my purpose / own purpose
```

**Only together do these produce the legal situation.**

---

# 32. We can now read your original AI example correctly for the first time

Take this case:

> A customer engages you. You receive personal information, need to turn it
> into an email or analysis and want to use AI for this.

You should not ask:

> "Anonymous or pseudonymous?"

but, in order:

| Question | Example |
| --- | --- |
| **Who is affected?** | Customer, their employees, their customers? |
| **Who is the controller?** | You or your client? |
| **What is the purpose?** | Specific consultancy service |
| **Which legal basis?** | For example contract / legitimate interest / another basis |
| **Which data is required?** | Only what is necessary for the task |
| **Does it include Article 9 data?** | For example health data? |
| **Can it be minimised?** | Yes |
| **Can it be pseudonymised?** | For example locally |
| **Who receives the data?** | AI provider |
| **What is its role?** | Processor / subprocessor / independent controller |
| **What does it use the data for?** | Only the prompt or training as well? |
| **Where does it process?** | EEA / third country |
| **How long does it store the data?** | Retention |
| **Can the data be deleted?** | Check technically and contractually |

Only **at the very end** can you make a statement such as:

> "This AI use case is permitted under these conditions."

---

## I would therefore present the basic model for the AI Standard like this

```text
                 PERSONAL DATA
                       │
                       ▼
          1. Who is the controller?
                       │
                       ▼
            2. What is the purpose?
                       │
                       ▼
             3. Which legal basis?
                       │
                       ▼
              4. Which data is needed?
                       │
             ┌─────────┴─────────┐
             │                   │
             ▼                   ▼
      Pseudonymisation       Anonymisation
      GDPR remains           possible GDPR end
      in principle           for later processing
             │
             ▼
          5. External entity?
             │
    ┌────────┼───────────┐
    ▼        ▼           ▼
Processor  Subprocessor  Controller
    │        │           │
    └────────┼───────────┘
             ▼
       6. Data location /
          third country?
             │
             ▼
       7. Storage,
       training, deletion,
       data-subject rights
```

We now essentially have the **vocabulary** needed for the next matrix.

Perhaps the most important distinction from the previous understanding is:

> **"personal / pseudonymous / anonymous" describes the data or its
> attributability. "controller / processor" describes roles. "contract /
> consent / legitimate interest" describes the legal basis. "DPA / technical
> and organisational measures / data minimisation" describes parts of the
> organisational and technical implementation.**

These layers must not be mixed. This is precisely what makes the original case
— **pseudonymise locally → AI → answer → reassemble locally** — much easier and
more precise to assess afterwards.

[1]: https://dsb.gv.at/kuenstlichebrintelligenz/kuenstliche-intelligenz-datenschutz "Künstliche Intelligenz & Datenschutz"
[2]: https://commission.europa.eu/law/law-topic/data-protection/data-protection-explained_en?utm_source=chatgpt.com "Data protection explained - European Commission"
[3]: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/public-administrations_en?utm_source=chatgpt.com "Public administrations and data protection - European Commission"
[4]: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/legal-grounds-processing-data_en "Legal grounds for processing data - European Commission"
[5]: https://www.edpb.europa.eu/system/files/documents/files/file1/edpb_guidelines-art_6-1-b-adopted_after_public_consultation_en.pdf?utm_source=chatgpt.com "Guidelines 2/2019 on the processing of personal data under Article 6(1)(b) GDPR"
[6]: https://www.edpb.europa.eu/system/files/2024-04/edpb_opinion_202408_consentorpay_en.pdf?utm_source=chatgpt.com "Opinion 08/2024 on Valid Consent in the Context of Consent or Pay Models"
[7]: https://www.edpb.europa.eu/system/files/2024-10/edpb_guidelines_202401_legitimateinterest_en.pdf?utm_source=chatgpt.com "Guidelines 1/2024 on processing of personal data based on Article 6(1)(f) GDPR"
[8]: https://www.edpb.europa.eu/topics/ai-and-technology/anonymisation-pseudonymisation_en "Anonymisation / pseudonymisation | European Data Protection Board"
[9]: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en?utm_source=chatgpt.com "Principles of personal data processing under the GDPR"
[10]: https://dsb.gv.at/rechte-pflichten/ihre-pflichten-als-auftragsverarbeiterin "Ihre Pflichten als Auftragsverarbeiter:in"
[11]: https://www.edpb.europa.eu/system/files/documents/files/file1/edpb_guidelines_201904_dataprotection_by_design_and_by_default_v2.0_en.pdf?utm_source=chatgpt.com "Guidelines 4/2019 on Article 25 Data Protection by Design and by Default"

<!-- markdownlint-enable MD001 MD028 MD036 -->
