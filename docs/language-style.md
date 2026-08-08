# Language style

## The repository is English

Everything in this repository is written in English: documentation, code
comments, commit messages, `.ai/` files, research notes, issue and PR text. No
other language appears anywhere in the tree.

Write it as a native speaker would, for maintainers and developers. Technical
vocabulary is welcome and does not need explaining; convoluted sentences are
not. If a reader has to go back over a sentence, rewrite it.

Source material in another language is translated on the way in, and the
translation says so, so a later fact-check knows whose wording it is reading.

**The one exception is the website.** English is its primary language and the
source of every claim; other languages are translations of it. German exists
today and more may follow. The rules below cover how those are written.

## Two languages on the site

Two languages, one set of facts. The German pages are not translations of the
English ones — they carry the same claims, sources and check dates, and they
are written in German.

## Why this file exists

An external review found the German text had been built out of English sentence
logic: English metaphors carried over, English word order kept, "Werkzeug" used
for software, and one article addressing the reader as "Sie" while every other
page used "du". Each sentence was grammatically possible and none of them read
like something a German-speaking author would have written unprompted.

The cause was structural, not careless. Both languages sit next to each other in
the same module, which invites line-by-line mirroring. The rules below exist so
that the shared thing is the content, not the sentence.

## No reveal framing

Headings do not promise a reveal. "Was wirklich passiert", "what really
happens", "what actually goes on" — none of these belong here, in either
language.

The reason is not taste. The evidence labels exist to say *here is the primary
source, here is the check date, disagree with me*. A heading claiming to reveal
what "really" happens asserts privileged access to a hidden truth, and asks to
be believed rather than checked. It argues against the method on the same page.

There is a reliable test: delete the word and the sentence gets more concrete,
because the word was doing the work of not naming the object. "Was beim Einsatz
von KI wirklich passiert" became "Was beim Einsatz von KI im Arbeitsalltag mit
deinen Daten passiert".

In running prose the same words can carry real weight — "eine Sicherung, die du
einmal wirklich zurückgespielt hast" draws a genuine distinction. The rule
applies to titles, headings, labels and descriptions.

## Both languages

1. Every article opens with a question a reader has.
2. The lead already contains the core answer.
3. One term per concept. Provider, product, account, plan, model and tool are
   not interchangeable.
4. One labelled section states one kind of claim. A recommendation does not
   quietly contain a legal assertion.
5. A metaphor may illustrate something. It may not replace the explanation, and
   it does not get stretched across several sections.
6. Headings work without the paragraph above them.
7. Product and UI labels are reproduced exactly as they appear in the product.

## English

- At most one "not X, but Y" per section. It is effective once and mechanical
  by the fifth time.
- Idiomatic and evocative headings belong in the blog; elsewhere a heading says
  what the section answers.
- No "the thing", "the point", "the part" without a concrete referent.
- Prefer a direct explanation over a rhetorical assertion.

## German

- **Software is a "Tool", not a "Werkzeug".** The Duden lists "Tool" as the
  established German computing term for a program or software function;
  "Werkzeug" is primarily a physical object. Exceptions that are genuine German
  compounds — "Entwicklerwerkzeuge", "Diagnosewerkzeug" — stay.
- **The reader is addressed as "du"** everywhere except the privacy policy and
  the legal notice, which address a data subject and are formal by convention.
- Do not carry English word order across. Do not translate a metaphor without
  checking whether it is idiomatic in German.
- Prefer concrete verbs over abstract nominal constructions.
- Established loanwords stay: Tool, Prompt, API, Agent, Connector, Repository.
- Read it aloud. Where a German speaker stumbles, rewrite the sentence.

## Terminology

| Concept | English | German |
| --- | --- | --- |
| Application the user operates | AI tool | KI-Tool |
| Hosted online service | AI service | KI-Dienst |
| Company behind the service | provider | Anbieter |
| The language model itself | model | Modell |
| Personal account | personal account | Privatkonto |
| Consumer plan | consumer plan | Privatkundentarif |
| Business plan | business plan | Business-Tarif |
| What the user types | input | Eingabe |
| A specific instruction | prompt | Prompt |
| Use for training | model training | Modelltraining |
| Keeping data for a period | retention | Aufbewahrung |

## Writing the German version

Do not open the English file and translate it line by line.

1. Read the English article and note what it establishes: audience, question,
   core answer, sources, check date, limits.
2. Close it.
3. Write the German article from those notes.
4. Compare against the English afterwards, for factual completeness only —
   not for paragraph count, sentence order or length.

## What is checked automatically

`site/scripts/check-language.mjs` runs in CI and fails the build on "Werkzeug"
used for software and on formal address outside the legal pages. It checks
vocabulary and address, not style — whether a sentence sounds German still
needs a person reading it aloud.

```bash
npm run check:language --prefix site
```
