# Engineering and software supply chain

> **Unverified.** Do not cite or publish from this file. See
> [STATUS.md](./STATUS.md) for what has been checked and what is known to be
> wrong.

| | |
|---|---|
| Received | 2026-08-09 |
| Author | Ruben Nati |
| Original language | German |
| This file | Translation, wording by Claude; claims and structure unchanged |

This is the second half of the open-source material. It does not belong to the
definition of open source, but it does belong to a complete view of a modern
open-source project. The distinction it turns on:

> **Open source answers: what rights do others have to this software?**
> **Software engineering answers: how professionally, traceably, securely and
> maintainably is it developed?**

A repository can be fully open source under an MIT licence and have no tests, no
CI, no coding guidelines and no security process. Conversely, a proprietary
product can have TDD, 95% coverage, an immaculate CI/CD pipeline and SLSA
provenance, and still not be open source.

## 1. Several axes, not one maturity level

A rigorous view assesses an open-source project along at least five independent
dimensions:

| Dimension | Core question | Examples |
|---|---|---|
| Open source / legal model | What may others do? | Licence, copyright, CLA/DCO, trademark |
| Project and community | How can others take part? | Issues, PRs, CONTRIBUTING, governance |
| Software engineering | How is quality produced? | Coding guidelines, reviews, TDD, tests, architecture |
| DevSecOps and supply chain | How is quality and security checked automatically? | CI, SAST, SCA, secrets, SBOM, signing |
| Release and operations | How does software reach the user in a controlled way? | Versioning, releases, environments, CD, provenance |

This says considerably more than "open source, level 1 to 5".

The OpenSSF is moving in the same direction. The Open Source Project Security
Baseline v2026.02.19 defines three maturity levels and covers not only security
but branch protection, change history, releases, secrets, licensing, build
processes and quality requirements.

## 2. TDD belongs in, but in the right place

TDD, BDD and the rest are not open-source models but development and testing
approaches:

| Approach | Idea | Particularly useful for |
|---|---|---|
| TDD — test-driven development | Test → implementation → refactoring | Libraries, business logic, APIs |
| BDD — behaviour-driven development | Describe behaviour from the user's or domain's view | Applications, domain requirements |
| ATDD — acceptance-test-driven development | Acceptance criteria before implementation | Product development |
| Test-after / conventional testing | Implementation, then tests | Also entirely legitimate |
| Property-based testing | Test properties and invariants rather than single examples | Parsers, algorithms, libraries |
| Contract testing | Check interfaces between components | APIs, microservices |
| Fuzz testing | Generate unexpected inputs automatically | Security, parsers, protocols |
| Mutation testing | Change code artificially and check the tests notice | Assessing test quality |

**TDD is not a precondition for a high-quality project.** What a professional
project should be able to document is: *how do we make sure a change is
correct?* TDD can be one method. Automated tests, reviews and reproducible
quality gates matter more than whether the developer wrote the test five minutes
before or five minutes after the code.

## 3. A test strategy matters more than "tests exist"

A modern project can have several levels:

```text
Static verification
    ↓
Unit tests
    ↓
Component / integration tests
    ↓
Contract tests
    ↓
End-to-end tests
    ↓
Security tests
    ↓
Release verification
```

Not every project needs all of it. A small Python library might need:

```text
lint
type-check
unit tests
integration tests
package-build test
```

A web application might need:

```text
lint
type-check
unit tests
API integration tests
database integration tests
frontend tests
E2E tests
SAST
SCA
container scan
staging deployment
DAST
smoke test
production
```

NIST states explicitly that security practices have to be integrated into the
respective SDLC models; the Secure Software Development Framework (SSDF) exists
for exactly that. OWASP places SAST, DAST, IAST, SCA, IaC scanning, container
and infrastructure scanning, secret detection and further checks within a modern
DevSecOps pipeline.

## 4. A better CI model

A reference pipeline for a serious open-source project:

```text
Developer
    │
    ├── local formatting / linting
    ├── local tests
    └── pre-commit checks
           │
           ▼
      Feature branch
           │
           ▼
       Pull request
           │
           ├── Formatting
           ├── Linting
           ├── Type checking
           ├── Build
           ├── Unit tests
           ├── Integration tests
           ├── SAST
           ├── Secret scan
           ├── Dependency / SCA scan
           ├── Licence check
           ├── IaC / container scan
           └── Code review
                   │
                   ▼
                 MAIN
                   │
           ┌───────┴─────────┐
           │                 │
        Snapshot          Release tag
        / nightly          v1.4.0
                             │
                             ├── clean build
                             ├── complete tests
                             ├── SBOM
                             ├── provenance
                             ├── signing / attestation
                             ├── changelog
                             └── publish
                                   │
                        Package registry / container
                                   │
                         Staging / production
```

GitHub supports exactly this through required status checks, reviews, rulesets
and branch protection: a merge can be made conditional on tests, builds and code
scanning having passed. Dependency Review can additionally stop a pull request
from introducing a known-vulnerable dependency in the first place.

## 5. SAST, DAST and SCA are different things

- **SAST** examines source code or static artifacts. It can run on every pull
  request.
- **SCA** analyses dependencies and their known vulnerabilities and licences.
  GitHub provides the dependency graph, Dependency Review and Dependabot;
  Dependabot can open update PRs automatically for known vulnerabilities.
- **Secret scanning** looks for API keys, tokens and credentials. It is
  available for public GitHub repositories, and push protection can catch
  secrets before the commit or push.
- **DAST** needs a running application. It therefore does not sit at the same
  logical level as linting or unit tests, but rather:

```text
Deploy temporary environment
        ↓
DAST
        ↓
Integration / E2E
        ↓
destroy environment
```

or against a permanent staging environment. Depending on the project, fuzzing,
IaC scanning, container scanning and infrastructure scanning join them. OWASP
lists these as distinct classes of check within a DevSecOps pipeline.

## 6. Branch is not the same as environment

This gets conflated frequently. You *can* build:

```text
develop
testing
staging
production
```

but you do not have to, and for many modern projects it is not advisable.
GitHub treats `development`, `staging` and `production` as **deployment
environments**, not as necessary Git branches. An environment can have its own
secrets, permitted branches, approval gates and deployment protection rules.

## 7. The main Git models

### GitHub Flow

```text
main
 ├── feature/login
 ├── fix/parser
 └── docs/api
```

Branch → PR → CI → review → merge → delete the branch. GitHub describes it as a
lightweight branch-based workflow. For a great many modern open-source projects
this would be the default.

### Trunk-based development

```text
main
 ├── very-short-feature-a
 ├── very-short-feature-b
 └── very-short-fix
```

Branches exist only very briefly. DORA characterises trunk-based development
through very few active branches and very short-lived changes, and links the
practice to continuous delivery and higher software delivery performance. It is
of particular interest for modern SaaS and web development.

### Git Flow

```text
main
 │
 ├── hotfix/*
 │
develop
 ├── feature/*
 ├── release/*
 └── ...
```

Long extremely popular. The original author, Vincent Driessen, now notes that
Git Flow was designed in 2010 for different circumstances and that for
continuously delivered web applications a simpler approach such as GitHub Flow
is often more appropriate. That does not make Git Flow wrong; it suits cases
where several releases are maintained in parallel, release cycles are long,
software is shipped rather than continuously deployed, or several versions are
supported.

## 8. Release branches are something else again

A large open-source project might have:

```text
main
release/3.0
release/2.8
release/2.7
```

Security fixes can then be backported:

```text
fix CVE in main
       ↓
backport
       ↓
release/3.0
       ↓
release/2.8
```

This can make good sense for frameworks, libraries, operating-system components
or enterprise products. The Git book describes both long-running stability
branches and short-lived topic branches as valid workflows.

## 9. A simpler default for the blueprint

For a new modern project, do not start with `develop` / `test` / `staging` /
`production`. Start with:

```text
                    ┌── feature/*
                    │
                    ├── fix/*
                    │
                    └── docs/*
                         │
                         ▼
                       PR
                         │
                 CI + review + security
                         │
                         ▼
                       main
                         │
              ┌──────────┴──────────┐
              │                     │
         Preview/nightly        Git tag
                                v1.2.0
                                   │
                                   ▼
                               Release
```

And for a deployable web application:

```text
PR
 ↓
Ephemeral preview
 ↓
main
 ↓
Development
 ↓
Staging
 ↓
Production
```

Development, staging and production are **environments, not branches**.

## 10. Code quality needs its own chapter

```text
Coding style
Formatting
Linting
Type safety
Code review
Architecture rules
Test strategy
Code coverage
Complexity monitoring
Dependency policy
API compatibility
Backward compatibility
Versioning policy
Deprecation policy
Release policy
Security policy
```

There is no universally meaningful figure such as "80% coverage means a good
project". Coverage is a signal. The better question is whether critical
behaviours are reliably tested — and better still: *would a faulty change be
reliably prevented from reaching `main` or a release?* That leads directly to
quality gates.

## 11. Which changes the repository blueprint

```text
project/
│
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   ├── security.yml
│   │   ├── release.yml
│   │   └── docs.yml
│   │
│   ├── ISSUE_TEMPLATE/
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── CODEOWNERS
│   └── dependabot.yml
│
├── src/
│
├── tests/
│   ├── unit/
│   ├── integration/
│   ├── contract/
│   └── e2e/
│
├── docs/
│   ├── architecture/
│   ├── development/
│   ├── security/
│   └── adr/
│
├── examples/
├── scripts/
├── tools/
│
├── .editorconfig
├── .gitignore
├── .gitattributes
│
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── GOVERNANCE.md
├── SUPPORT.md
├── CHANGELOG.md
├── ROADMAP.md
│
├── DEVELOPMENT.md
├── TESTING.md
├── ARCHITECTURE.md
│
├── CITATION.cff
├── AUTHORS
│
└── <ecosystem build/package files>
```

Now `DEVELOPMENT.md` and `TESTING.md` have a clear function:

- `CONTRIBUTING.md` — how do I contribute?
- `DEVELOPMENT.md` — how do I develop this project locally?
- `TESTING.md` — which tests exist and when must they run?
- `ARCHITECTURE.md` — how does the system work?

Considerably cleaner than putting everything into one enormous README.

## 12. Above it sits the software supply chain layer

**SBOM.** GitHub can export an SPDX-compatible software bill of materials from
its dependency graph.

**Build provenance.** You want to know not only "here is `project-1.3.0.tar.gz`"
but "this binary artifact was produced from commit X by workflow Y on build
system Z". SLSA provenance addresses exactly that; the current specification is
version 1.2 and defines graded build security levels.

**Artifact attestation.** GitHub now supports artifact attestations, which make
the origin and build process of a release cryptographically verifiable,
including SBOM attestations.

## 13. OpenSSF Scorecard belongs in the research

The OpenSSF Scorecard assesses the security practices of an open-source
repository automatically. Its checks include:

```text
Branch protection
Code review
CI tests
Dependency management
Pinned dependencies
Signed releases
Dangerous workflows
Binary artifacts
Security policy
Fuzzing
```

That gives an objectifiable component for a later assessment matrix. There is
also the OpenSSF Best Practices Badge, with graded criteria up to silver and
gold.

## 14. Which changes the research question itself

Not:

> What is an open-source project and how do you build one?

But:

> Which legal, organisational, technical and security-related properties
> characterise a modern, professionally operated open-source software project?

And underneath it, four entirely different questions:

```text
1. OPENNESS
   May I use, modify and distribute the code?
2. COLLABORATION
   Can I and may I contribute to the project?
3. ENGINEERING
   How is it ensured that changes are correct?
4. TRUST
   How can I verify that source, build and release are trustworthy?
```

## 15. Which changes the maturity model

Not "level 1 open source, level 2 good open source, level 3 very good open
source" — that is one-dimensional. A project might be:

```text
Open source:          5/5
Documentation:        2/5
Engineering:          4/5
Security:             5/5
Community:            1/5
Governance:           1/5
Supply chain:         4/5
```

And that can be entirely legitimate. A single developer could build an
excellently tested MIT-licensed library, want no external governance, and still
run a very high-quality open-source project. A Kubernetes-scale community
project would have completely different requirements.

## The essential addition

Think of the whole area as three layers on top of one another:

```text
┌────────────────────────────────────────────┐
│ OPEN SOURCE PROJECT                        │
│ Licence · Copyright · Community · Governance│
├────────────────────────────────────────────┤
│ SOFTWARE ENGINEERING                       │
│ Architecture · Coding · Review · Testing   │
├────────────────────────────────────────────┤
│ SOFTWARE DELIVERY & SUPPLY CHAIN           │
│ CI/CD · Security · SBOM · Signing · SLSA   │
└────────────────────────────────────────────┘
```

Neither of the lower two layers makes anything open source. But they decide
whether a public GitHub repository with an MIT licence becomes a trustworthy,
professional and durable open-source project.

For the goal of defining templates, blueprints and project classes, this
extension allows something practical: an "Open Source Project Blueprint 2026"
that defines, for *minimal*, *professional*, *security-ready* and
*community/foundation-ready*, not only files and directories but also the Git
workflow, branch rules, CI pipeline, test strategy, security gates, release
process and supply-chain security.

## Sources

As given in the original, with tracking parameters removed.

1. [OpenSSF Open Source Project Security Baseline](https://baseline.openssf.org/versions/2026-02-19)
2. [NIST SP 800-218, Secure Software Development Framework (SSDF) 1.1](https://csrc.nist.gov/pubs/sp/800/218/final)
3. [OWASP Developer Guide — DevSecOps](https://devguide.owasp.org/en/09-operations/01-devsecops/)
4. [GitHub Docs — About protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
5. [GitHub Docs — Dependency review](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review)
6. [GitHub Docs — Dependabot security updates](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates)
7. [GitHub Docs — Enabling secret scanning](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/detect-secret-leaks/enable-secret-scanning)
8. [GitHub Docs — Deployments and environments](https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments)
9. [GitHub Docs — GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow)
10. [DORA — Trunk-based development](https://dora.dev/capabilities/trunk-based-development/)
11. [Vincent Driessen — A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)
12. [Git Book — Branching workflows](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows)
13. [GitHub REST API — SBOM endpoints](https://docs.github.com/en/rest/dependency-graph/sboms)
14. [SLSA — Build provenance](https://slsa.dev/spec/v1.2/build-provenance)
15. [GitHub Docs — Artifact attestations](https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations)
16. [OpenSSF Scorecard](https://github.com/ossf/scorecard)
17. [OpenSSF Best Practices Badge](https://openssf.org/projects/best-practices-badge/)
