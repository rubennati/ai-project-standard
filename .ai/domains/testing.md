# Testing

This repository has no unit tests, and that is a finding rather than a policy.
What it has instead are gates that fail: see `../quality-gates.md`.

The question is not coverage but **would a wrong change be stopped before it
reached `main`?** Today the honest answer is: structural and factual mistakes
yes, behavioural ones no.

- A blueprint is verified by being **run** — copied into a fresh directory and
  put through its own checks, with the date and the result recorded in its
  `blueprint.yml`. That is the only test this repository currently has of the
  thing it ships, and it has caught a real defect every time it was run.
- A check that is added must first be proven to fail. `check-language.mjs` was
  verified against a planted violation; `check-conformance.sh` found two defects
  in itself on its first run.
- Deterministic. No clock, no network in a check that gates a merge — the link
  check is advisory on pull requests for exactly this reason and strict only on
  the weekly run.
- When application code lands here, this file gets the levels it currently
  cannot honestly claim.
