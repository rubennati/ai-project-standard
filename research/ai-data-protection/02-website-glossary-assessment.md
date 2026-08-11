# Website glossary assessment

<!-- markdownlint-disable MD001 MD036 -->

> Complete English translation of the second German source note supplied by
> the maintainer on 11 August 2026. Structure, examples, tables, diagrams and
> source references are retained. Claims are recorded as received, not
> corrected here. See [SOURCES.md](SOURCES.md) for verification and
> qualifications.

Yes, **this is the right website**. I have now looked specifically at the German
pages for **Anonymisation**, **Pseudonymisation** and "Which data may I enter
into an AI tool?" I would indeed revise the current wording.

The Anonymisation page currently says, in substance, that if you retain a
mapping that lets you reverse the step, it is not anonymisation.
([AI Standard][1]) The Pseudonymisation page similarly says that the data
remains personal and that the legal basis, processing arrangement and
third-country question continue to apply when AI is used. ([AI Standard][2])

**That is understandable as a simple rule of thumb, but it is too absolute
after the 2025 CJEU judgment and, in particular, EDPB Guidelines 02/2026.**

### The decisive point really is perspective

The EDPB now expressly states that the same information can be **personal for
one organisation and anonymous for another**. The decisive question is the
"applicable perspective" from which the assessment is made and which means of
identification are reasonably available to that entity.

For example:

```text
Original:

Max Mustermann
Musterstrasse 7
Customer number 4711
Problem: ...

↓ your local tool

[PERSON_17]
[ADDRESS_4]
[CUSTOMER_23]
Problem: ...

Mapping held only by you:
PERSON_17 → Max Mustermann
...
```

For **you**, this is clearly not anonymous: you possess the mapping.

But it no longer follows automatically that:

> Because you possess the mapping, the data cannot be anonymous for anyone.

That blanket statement is no longer sound under the current case law and EDPB
system. The EDPB expressly states that anonymity can exist for certain
recipients while the data remains personal for the original controller.

Your original thought therefore identifies a real point.

---

## But a second rule applies specifically to your AI workflow

And it is decisive.

If you pay an external AI provider to **process the data for you**, it will
typically be a processor.

The EDPB expressly states that when an entity processes information **on behalf
of a controller**, the question of whether the data is personal is assessed
from **the controller's perspective**.

The EDPB gives precisely this example:

A retailer sends extracts from its customer data to an external agency for
analysis. The agency cannot itself identify the customers. Nevertheless, the
data must be treated as personal data for **both the retailer and the agency**,
because the agency processes it for the retailer and the retailer can identify
the people.

This is extremely similar to your AI example.

So:

```text
YOU
know PERSON_17 = Max Mustermann
        │
        │ Instruction:
        │ "Summarise this text"
        ▼
AI PROVIDER
does not know the mapping
        │
        ▼
Answer
        │
        ▼
YOU
put Max Mustermann back in
```

Technically, the AI provider cannot identify Max Mustermann.

**From a data-protection perspective, however, the provider is not simply
viewed in isolation** if it acts as your processor.

Under the current EDPB interpretation, the processing therefore remains within
the GDPR regime in principle.

---

## This is exactly why I would change two statements on ai-standard.rubennati.at

The current wording

> "If you retain a mapping that lets you reverse the step, you have not
> anonymised the data."

is too absolute. ([AI Standard][1])

I would change it to something like:

> **Anonymity is assessed in the relevant processing context.** Data can remain
> personal for one entity because it can identify a person and, at the same
> time, be anonymous for another entity if that entity cannot identify the
> person using means reasonably likely to be used. In processing performed on
> behalf of another entity, however, the controller's perspective may be
> decisive.

That makes the statement much more robust.

For Pseudonymisation, instead of

> "It does not take the processing outside the GDPR, however."

I would write more precisely:

> **For the entity that can restore the attribution, pseudonymisation does not,
> in principle, take the processing outside the GDPR.** The data may also
> continue to be treated as personal for a processor if it processes the data
> for a controller for whom the data subject is identifiable.

I would nevertheless **retain the current short glossary definition** — "The
data remains personal data" — but correct the longer explanation beneath it.
([AI Standard][3]) Otherwise the glossary becomes unnecessarily complicated.

---

## This actually makes your tool concept more interesting, not less useful

I would simply not promise:

**"We anonymise data before the AI, so the GDPR does not apply to the AI."**

That would be legally too aggressive for a conventional API/SaaS AI provider.

I would describe the product more like this:

> **Local pseudonymisation and data minimisation before transfer to external AI
> systems. Identifying information and re-identification keys never leave the
> controlled environment.**

That is a very strong architecture, both technically and from a data-protection
perspective.

Even if Article 28 and other provisions may still apply, the provider does not
receive:

```text
Max Mustermann
1 February 1977
Social security number ...
IBAN ...
```

but only:

```text
PERSON_7
DATE_3
IDENTIFIER_2
ACCOUNT_1
```

and, after the response, your local system performs:

```text
PERSON_7
↓
Max Mustermann
```

This massively reduces the actual potential damage, even if the legal category
remains "personal data".

---

### The small but very important special case

The EDPB also provides the counterexample: a hospital supplies processed data
to an **independent research institute** that determines its own purposes and
means and does not act on behalf of the hospital. Identifiability can then be
assessed from the research institute's own perspective.

This is where the following situation can genuinely arise:

| Entity | Status |
| --- | --- |
| You / original controller | personal |
| Your local mapping | personal |
| Independent recipient without means of identification | anonymous |
| Processor working for you | controller's perspective applies in principle |

And **this table is really the core statement missing from the current AI
Standard page**.

Also important: EDPB Guidelines 02/2026 were adopted for public consultation on
7 July 2026; the consultation runs until 30 October 2026. They are therefore not
yet the final version. ([European Data Protection Board][4]) The underlying
perspective concept, however, goes back to the CJEU judgment **C-413/23 P, EDPS
v SRB of 4 September 2025**. ([InfoCuria][5])

**I would therefore update ai-standard.rubennati.at at this point.** Not because
the existing definitions are entirely wrong, but because they still use the
classic binary model:

```text
reversible → pseudonymised → GDPR
irreversible → anonymous → no GDPR
```

The better current presentation is:

```text
                 Identifiability
                        +
              relevant perspective
                        +
               role of the entity
                        +
               processing context
                        ↓
              personal or anonymous
```

In my view, that is exactly the distinction you were looking for with your
original question.

[1]: https://ai-standard.rubennati.at/de/glossary/anonymisation "Anonymisierung — KI-Glossar"
[2]: https://ai-standard.rubennati.at/de/glossary/pseudonymisation "Pseudonymisierung — KI-Glossar"
[3]: https://ai-standard.rubennati.at/de/glossary "KI-Glossar"
[4]: https://www.edpb.europa.eu/public-consultations/guidelines-022026-on-anonymisation_en?utm_source=chatgpt.com "Guidelines 02/2026 on Anonymisation"
[5]: https://infocuria.curia.europa.eu/tabs/redirect/juris/document/document.jsf?docid=303863&doclang=EN&utm_source=chatgpt.com "SRB v EDPS - InfoCuria - European Union"

<!-- markdownlint-enable MD001 MD036 -->
