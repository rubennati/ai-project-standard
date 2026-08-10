# Website Product Brief

The website is the public product of AI Standard. This brief states what that
product must enable before navigation, page templates or visual design are
decided.

## Product statement

> **AI Standard is an independent, practical website that shows what people can
> achieve with AI, what useful human-AI collaboration looks like, what happens
> technically and legally, and how the work stays safe, responsible and
> reviewable — from the first prompt to an acting agent.**

The site is not split into a knowledge base and a project-standard area. A
reader arrives with a question, not with knowledge of which repository folder
contains the answer. The website therefore organises material by the outcome a
reader needs, never by whether the source began in `docs/`, `research/`, a
concept or a blueprint.

## The outcome for a reader

A reader should leave able to:

1. recognise where AI can and cannot help;
2. choose a form of collaboration appropriate to the consequence of the work;
3. understand what the system can see, retain and do;
4. decide which legal, organisational and technical boundaries are needed;
5. put those boundaries into practice; and
6. review the result and later explain what happened, why, on whose decision
   and what was checked.

The short form is:

> **Understand what is possible. Decide what is appropriate. Set boundaries
> that hold. Produce results that can still be checked later.**

## Who it is for

The audience is people who **use, introduce, govern or build with AI in real
work**. That includes someone using a chat service, a decision-maker choosing a
company plan, and a developer giving an agent tools and repository access.

Those are entry points into one product, not separate audiences with separate
sites. Technical depth is progressive: a reader can stop after the practical
answer, while someone implementing the system can continue into architecture,
controls and copyable artifacts.

## The product spine

Every substantial path through the site moves through four questions:

| Stage | Question | Reader outcome |
| --- | --- | --- |
| **Possibility** | What can AI help me achieve? | A concrete use, including when AI is the wrong tool |
| **Collaboration** | What should the human and the system each do? | An appropriate operating model and division of responsibility |
| **Reach** | What can the system see, retain, change or trigger? | A technical, legal and organisational understanding of the exposure |
| **Control** | How do I make the decision hold and check the result? | Configuration, review, evidence and an accountable next step |

The sequence is not a maturity ladder. A chat is not an immature agent, and a
local workflow is not automatically better than a hosted service. The right
position follows from the task, its consequences and the reach the system
needs.

## Forms of collaboration

The site covers the continuum from answering to acting:

| Form | What the system does | What becomes important |
| --- | --- | --- |
| **Chat** | Answers, explains and transforms supplied material | Input quality, confidentiality, sources and verification |
| **Assistant** | Drafts, analyses and revises work with a person | Subject-matter review and clear responsibility for the result |
| **Workspace assistant** | Works with a person inside files, code or a defined workspace | Context boundaries, diffs, tests and human review |
| **Tool-using system** | Reads from or writes to another system | Permissions, credentials, scopes, logging and revocation |
| **Agent** | Chooses and executes several steps towards a goal | Checkpoints, stop conditions, action boundaries and auditability |
| **Automated operation** | Acts repeatedly or in response to events | Monitoring, ownership, incident response and governance |

More reach can create more value. It also creates more ways for an error to
matter. The site explains both sides rather than treating capability as a sales
claim or risk as a reason to avoid the technology.

## Ten questions the website must answer

1. What can I achieve with AI here?
2. Which form of human-AI collaboration fits this task?
3. What is the system doing technically?
4. Which data, systems and people can it reach?
5. What are the benefits, limits and failure modes?
6. What am I allowed to do under the law and my organisation's rules?
7. How do I configure or build it so the intended boundary holds?
8. How do I check the output and the actions it took?
9. How can I later reconstruct what happened and why?
10. When should I deliberately not use AI?

These questions are the admission test for public content. A page belongs on
the website only when it gives a reader a concrete answer to at least one of
them and makes its relationship to the others visible.

## Experimentation and consequential work

The site does not turn one working style into a moral category. **Vibe coding**
can be appropriate for learning, exploration and disposable prototypes when
the possible harm is low and the result is honestly labelled. It is not a
complete delivery model for software that has users, sensitive data, security
requirements or a maintenance life.

The same test applies outside software. The amount of process follows from the
consequence of failure, not from whether AI was involved:

| Context | Appropriate emphasis |
| --- | --- |
| **Explore** | Speed, learning and a contained environment |
| **Prototype** | Testing an assumption, explicit limits and no silent path to production |
| **Deliver** | Ownership, review, tests, security and maintainability |
| **Operate** | Monitoring, change control, recovery and accountable decisions |

This is how the site can encourage useful experimentation without presenting a
prototype practice as a production standard.

## Relationship to the repository

The website stands on its own. A reader does not need GitHub or repository
knowledge to understand and act on an answer.

The repository is the production, evidence and artifact system behind the
product:

- it holds the website source and the rules that keep it honest;
- it holds copyable blueprints, configurations and checks;
- it holds technical sources whose public explanation belongs on the website;
- it records decisions, review and verification; and
- it gives contributors and technical readers a path to inspect the original.

Repository origin does not create a public section. A concept such as MCP can
therefore appear on the website as a definition, decision guide, security
explanation and implementation path, with a repository artifact linked where
there is something useful to copy. Maintainer setup, release mechanics and the
internal architecture of this project stay in the repository because they do
not answer a reader's AI-use question.

**One place per fact still holds.** Material may be rendered from its canonical
source or link to it; it is not independently rewritten in several places.

## Page experience

The design system should support one product at different depths. A substantial
guide should be able to provide, in this order:

1. the answer in plain language;
2. what the reader can achieve and when the approach fits;
3. how it works;
4. benefits, limits and risks;
5. what to decide or configure;
6. how to verify the result;
7. technical depth and copyable artifacts where relevant; and
8. sources, check dates and related next steps.

Not every page needs every part. The order keeps a practical reader from having
to cross an implementation guide for the answer, while leaving the depth in the
same product for the person who needs it.

## What the website is not

- **Not a repository mirror.** Folder structure and maintainer documentation do
  not become information architecture.
- **Not a prohibition catalogue.** It explains value as seriously as risk.
- **Not a vendor comparison or legal-advice service.** Existing evidence and
  legal boundaries continue to apply.
- **Not a collection of technology pages without a decision.** A definition
  alone may live in the glossary; a guide must help someone act.
- **Not a maturity ladder.** More autonomy and more infrastructure are not
  automatically progress.

## Success test

The product works when someone can arrive without knowing the repository,
follow a path from their situation to a concrete decision, go as deep as their
responsibility requires, and leave knowing both what AI can make possible and
what will keep the result trustworthy.
