<!-- blueprint payload: ai-collaboration — edit upstream, then delete -->
# Testing

The question is not "how much coverage" but **would a faulty change be stopped
before it reached the default branch?**

- Test behaviour, not implementation. A test that breaks on a rename tests the
  rename.
- Every bug fix arrives with the test that would have caught it.
- Deterministic. No clock, no network, no ordering assumption, unless that is
  the thing under test.
- A skipped or disabled test is a broken test with the alarm turned off. Fix it
  or delete it.
- Coverage is a signal, not a target. Chasing a percentage produces tests that
  assert nothing.
