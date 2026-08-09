---
owner: Ruben Nati
reviewed: 2026-08-09
derives-from: research/open-source (engineering-and-supply-chain.md, foundations.md)
status: draft
---

# Delivery pipeline

What runs between someone writing code and a user receiving it, and how to size
that to a project rather than to a diagram.

## 1. What you are deciding

You have a repository and you want to be able to say something honest about its
quality: that changes are checked, that a merge means something, that what
shipped is what was reviewed.

The decision is **which checks**, **where each one runs**, and **which of them
may block a merge**. Not "should we have CI". A pipeline that is too heavy gets
routed around; one that is too light makes a green tick meaningless. Both fail
the same way — the check stops carrying information.

## 2. The smallest thing that works

**A solo project, no users yet: format, lint, build.** Three checks, running on
every pull request, blocking the merge. That is already more than most
repositories have, and each one catches a class of mistake nobody wants to find
by reading.

**Add a test job the moment there is one test.** Not because coverage is a
number worth reporting, but because a test suite nobody runs is worse than none:
it looks like assurance.

**Turn on what the host gives you free.** Secret scanning with push protection,
dependency alerts, and automated dependency update pull requests. These cost
configuration rather than engineering, and they cover the failures that most
commonly reach public repositories.

Build the pipeline below when other people depend on releases, when a
vulnerability in your dependencies is somebody else's problem, or when "it
works" has to be demonstrable rather than asserted.

## 3. The architecture

### Five independent dimensions, not one maturity level

A project is not at "level 3". It is somewhere on each of these, and the
positions differ:

| Dimension | The question |
|---|---|
| Legal | What may others do with it? Licence, inbound rights, trademark |
| Community | How can others take part? Issues, pull requests, contribution rules, governance |
| Engineering | How is quality produced? Reviews, tests, guidelines, architecture |
| DevSecOps and supply chain | How is it checked automatically? CI, static analysis, dependency scanning, secrets, SBOM, signing |
| Release and operations | How does it reach a user in a controlled way? Versioning, releases, environments, provenance |

A project can be strong on legal and community and have nothing on supply chain.
Reporting one number hides exactly that.

### Where each check runs

Position matters more than presence. The same check in the wrong place either
blocks nothing or blocks everything.

```text
DEVELOPER MACHINE          fast, advisory, no gate
  format · lint · unit tests · pre-commit hooks

PULL REQUEST               the gate — this is what "reviewed" means
  format · lint · type check · build
  unit tests · integration tests
  static analysis · secret scan
  dependency and licence check
  human review

DEFAULT BRANCH             after merge, still cheap
  nightly or snapshot builds
  scheduled dependency scans

RELEASE TAG                slow, thorough, once
  clean build from a clean checkout
  full test suite
  SBOM · provenance · signing
  changelog · publish

DEPLOYED ENVIRONMENT       needs something running
  dynamic analysis · end-to-end tests · smoke tests
```

### The test levels, and which a project actually needs

```text
static verification → unit → component/integration
  → contract → end-to-end → security → release verification
```

Nobody needs all of them. A small library:

```text
lint · type check · unit tests · integration tests · package-build test
```

A web application with a database and a frontend:

```text
lint · type check · unit · API integration · database integration
  · frontend · end-to-end · static analysis · dependency scan
  · container scan · staging deploy · dynamic analysis · smoke test
```

The difference is not maturity. It is surface area.

### The scanning families are different things

Frequently collapsed into "security scanning", and they answer different
questions:

| | Looks at | Needs | Runs on |
|---|---|---|---|
| **Static analysis** | your source | nothing running | every pull request |
| **Dependency scanning** | what you depend on, and its licences | a lockfile | every pull request, and on a schedule |
| **Secret scanning** | credentials in code or history | nothing | every push, ideally blocking |
| **Dynamic analysis** | a running application | a deployed environment | after deploy, not beside linting |

Dynamic analysis does not belong next to unit tests in a diagram, because it
cannot run there:

```text
deploy a temporary environment
        ↓
   dynamic analysis
        ↓
   end-to-end tests
        ↓
   destroy the environment
```

### Branch is not environment

Two separate things, routinely conflated. A branch is where code lives; an
environment is where it runs. Mapping one branch per environment produces
long-lived branches that diverge, which is a merge problem invented to solve a
deployment problem.

Deploy from tags or from the default branch with a promotion step. Keep branches
short-lived.

## 4. The decision points

### 4.1 Which checks may block a merge

The load-bearing decision. A blocking check must be **fast, deterministic and
about this change**.

```text
BLOCK          lint · type check · build · unit tests
               secret scan · dependency review of new dependencies

REPORT         coverage · performance · complexity metrics

SCHEDULE       full dependency scan · licence audit · slow security scans
```

A flaky blocking check is worse than no check: it teaches people to re-run until
green, which is the same reflex as ignoring it.

### 4.2 How much testing is proportionate

Not a coverage target. Ask instead what breaking silently would cost:

```text
a documentation site        lint and build. That is proportionate
a library others depend on  unit and integration; breaking changes are theirs
a service handling money    all of it, and then some
an internal tool for three  whatever the three of them will maintain
```

A test suite that is not maintained decays into a suite that is skipped, and a
skipped suite is a false claim in the repository.

### 4.3 Git model

| Model | Fits |
|---|---|
| **Short-lived branches into a protected default** | Almost everyone. Small changes, reviewed, merged quickly |
| **Release branches** | Software with supported older versions receiving fixes |
| **Environment branches** | Almost nobody. Usually a deployment problem in disguise |

Pick the first unless you can state why not. If you stack branches, merge them
bottom-up and write the order down — a pull request merged out of order strands
the work above it, which has happened in this repository twice.

### 4.4 Inbound rights

Whether contributors sign off on what they contribute, and how.

```text
DCO         a sign-off line per commit. Low friction, machine-checkable
CLA         a signed agreement. Higher friction, real deterrent to drive-by fixes
nothing     the licence carries it. Common, and vague when it matters
```

The `open-source` blueprint chooses DCO, and states why: it is checkable in CI
and does not ask a stranger fixing a typo to sign a contract.

### 4.5 Release verification

What separates a tag from a release:

```text
built from a clean checkout, not from a developer's machine
the full test suite, not the pull request subset
an SBOM, so downstream can answer what is inside
provenance and signing, so it can be verified as yours
a changelog section that already existed before the tag
```

If the release job constructs the changelog from commits at tag time, the
changelog describes commits rather than changes.

### 4.6 What the host settings must do

No file in a repository can turn these on:

```text
protect the default branch
require the status checks that matter
require a review
require conversations resolved
disallow force-push to the default branch
enable secret scanning with push protection
enable dependency alerts and automated updates
```

CI that assumes these are on, in a repository where they are not, is a pipeline
that can be bypassed by pushing directly.

## 5. How it fails

| Failure | What it looks like |
|---|---|
| **Green means nothing** | The checks that block are the ones that never fail; the ones that matter only report |
| **Flaky gate** | Re-run until green becomes the workflow, and a real failure gets re-run too |
| **Pipeline routed around** | Direct pushes to the default branch, because the branch was never protected |
| **Dependency scan that nobody actions** | Alerts accumulate, and the count becomes background noise |
| **Coverage as the target** | Tests are written to touch lines rather than to check behaviour |
| **Dynamic analysis in the wrong place** | Configured to run where nothing is deployed, so it passes trivially |
| **A release nobody can verify** | Published without an SBOM, provenance or signature, so downstream must trust rather than check |
| **Secrets already in history** | Push protection was enabled after the leak; rotation was never done |

The first is the most common and the hardest to notice, because everything looks
fine. A green tick that cannot fail is a claim with nothing behind it — the same
defect as a document asserting something it never checked.

## Related

- The blueprint this concept underlies:
  [`open-source`](../blueprints/open-source/) — ships six of these gates as a
  working workflow
- The rules behind it:
  [docs/open-source-project-standard.md](../docs/open-source-project-standard.md),
  [docs/git-workflow.md](../docs/git-workflow.md),
  [docs/branch-protection.md](../docs/branch-protection.md),
  [docs/release-process.md](../docs/release-process.md)
- The minimum security posture, including the frameworks referenced here:
  [docs/security-baseline.md](../docs/security-baseline.md)
- Research:
  [engineering-and-supply-chain.md](../research/open-source/engineering-and-supply-chain.md),
  [foundations.md](../research/open-source/foundations.md),
  [SOURCES.md](../research/open-source/SOURCES.md)

## Open

- **No tool named as a recommendation.** Scanner and framework choices are claims
  with a shelf life; where the repository names one it does so in
  `docs/security-baseline.md`, with a check date.
- **The threshold in 4.2.** "Proportionate" is stated as a question rather than a
  number, because the source material gives no number either.
