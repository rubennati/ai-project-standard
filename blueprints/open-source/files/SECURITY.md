<!-- blueprint payload: open-source — edit upstream, then delete -->
# Security Policy

## Reporting a vulnerability

**Do not open a public issue.** An issue is a disclosure, and it reaches
everyone at once — including people who will use it before there is a fix.

Use [private vulnerability reporting](https://github.com/{{OWNER}}/{{REPO}}/security/advisories/new),
or write to <{{CONTACT_EMAIL}}>.

What to expect:

| | |
|---|---|
| Acknowledgement | within 3 working days |
| First assessment | within 10 working days |
| Disclosure | coordinated with you, after a fix exists |

If you do not hear back within the acknowledgement window, assume the message
did not arrive and send it again.

Adjust those windows to what you can actually keep. A policy promising 24 hours
that is met in two weeks is worse than one promising two weeks.

## Supported versions

Until this project publishes releases, the supported version is the latest
commit on `main`. Replace this section with a table once that changes — and
say plainly which versions no longer receive fixes.

## What is out of scope

State it, so a reporter does not spend a weekend on something you will not act
on. Common exclusions: findings in dependencies without a demonstrated path
through this project, and issues that require an attacker who already has
administrative access.
