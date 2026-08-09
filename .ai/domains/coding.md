# Coding

This repository has code: an Astro site under `site/` (TypeScript and `.astro`),
shell checks under `.github/scripts/`, and Node scripts under `site/scripts/`.
The payload files under `blueprints/*/files/` are code someone else will run.

- Smallest change that solves the stated problem. Refactors are their own branch.
- Match the surrounding file — its naming, comment density and idiom. A file
  that suddenly changes style tells a reviewer the author changed, not that the
  code improved.
- Comment the *why*. The *what* is in the code. Every non-obvious constraint in
  this repository already carries one; keep that.
- Handle the failure case in the change that introduces the call.
- No new dependency without it being part of the task and named in the pull
  request. `site/package.json` is deliberately small.
- Shell scripts run on macOS bash 3.2 as well as CI. No `mapfile`, no `readarray`,
  and `sed -i` differs between GNU and BSD — avoid in-place edits in checked-in
  scripts.
- Payload files are edited **here**, never in a copy. They open with a banner
  saying so, because in a code search the path is invisible.
