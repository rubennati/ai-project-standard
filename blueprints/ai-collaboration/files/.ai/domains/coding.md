<!-- blueprint payload: ai-collaboration — edit upstream, then delete -->
# Coding

- Smallest change that solves the stated problem. Refactors are their own branch.
- Match the surrounding code — its naming, its comment density, its idiom. A
  file that suddenly changes style tells a reviewer the author changed, not that
  the code improved.
- Comment the *why*. The *what* is in the code.
- New behaviour arrives with a test that fails without it.
- Handle the error case in the same change that introduces the call. "Happy path
  first, errors later" means errors never.
- No new dependency without it being part of the task and named in the pull
  request.
