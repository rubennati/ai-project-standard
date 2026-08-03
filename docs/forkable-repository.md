# Forkable Repository: No Personal Data in the Tree

## The principle

A public repository should carry no operator-specific personal data in readable
form. Someone who clones it, builds it and deploys it must end up publishing
placeholders — never the original author's imprint, address or contact details.

This is not about secrecy. An imprint is legally required to be public, and
anyone can read it on the live site. It is about two other things:

- **Accidents.** A fork that builds and goes online without reading every file
  puts a stranger's legal disclosure on their own site. The visitor then
  contacts the wrong person, and the fork operator is publishing a legal notice
  that is false about who runs the site.
- **Quality.** A repository meant to be reused should hand over structure, not
  someone else's identity. Personal data mixed into the source is residue.

Deliberate copying is out of scope. Nothing in a public repository can prevent
it, and the live site shows the same values anyway.

## What counts

Anything that identifies the operator rather than the project:

- imprint fields: name, company, postal address, register number, VAT number
- contact addresses and phone numbers
- account identifiers, personal API endpoints, individual URLs
- anything a data protection authority would call personal data

Not covered: the project's own name, licence, repository URL, or documentation.

## Three ways to do it

| | Data lives | Fork gets | History | Key handling |
|---|---|---|---|---|
| **A. Encrypted in the repository** | encrypted blob in-tree | blob it cannot read, plus a placeholder | full, via decrypt | private key, local and CI, plus a backup |
| **B. Injected at build** | outside the repository, in secrets | placeholders only | none for the values | none |
| **C. Separate private source** | private repository or submodule | nothing, build falls back | full, in the other repository | deploy key in CI |

**A** suits whole documents where prose and data are interleaved and you want
the text under version control.

**B** suits a handful of scalar values. It is the most literal reading of the
principle: the public repository then contains no personal data at all, not
even unreadable. It costs the version history of those values, which for one's
own address is rarely a loss.

**C** suits an operator with several sites sharing one set of legal data. It
adds a second repository and a credential to CI.

The three combine. Documents go the A route, loose values the B route, and the
decision per item is: *is this a text I want to diff, or a value I want to set?*

## Reference design for A

Two properties matter more than the tool choice.

### Decrypt beside the placeholder, never over it

The obvious pipeline decrypts onto the tracked file, which leaves plaintext in
the working tree under a name git is watching. One absent-minded `git add -A`
and the data is in the history — the exact outcome the whole design exists to
avoid, now permanent.

Instead, decrypt to a path git ignores, and let the tracked file defer to it:

```text
site/src/data/site.ts          tracked, placeholders, imports the local file if present
site/src/data/site.local.ts    gitignored, decrypted, real values
secrets/site.age               tracked, encrypted
```

The tracked file is the only one the build imports; it prefers the local values
when they exist. A fork has no `.local` file, so it builds with placeholders and
the site is valid. Nothing needs a pre-commit hook to be safe, because there is
no tracked path that plaintext can land on.

A hook is still worth adding as a second line of defence — but a design that
needs the hook to be correct is the wrong design.

### The key lives in exactly two places, and a third for recovery

- **Locally**, in a password manager rather than on disk. With 1Password the
  private key is an item, and the decrypt script reads it into a file
  descriptor so it never touches the filesystem:

  ```bash
  age -d -i <(op read "op://Private/age-signing-key/notesPlain") \
      -o site/src/data/site.local.ts secrets/site.age
  ```

- **In CI**, as a repository secret consumed by the deploy job.
- **A backup recipient**, held offline. Encrypt to two public keys, not one.
  Without it, a lost laptop means a legal notice nobody can edit again.

### CI step

```yaml
- name: Decrypt operator data
  env:
    AGE_KEY: ${{ secrets.AGE_SECRET_KEY }}
  run: |
    set -euo pipefail
    umask 077
    trap 'rm -f "$RUNNER_TEMP/age.key"' EXIT
    printf '%s' "$AGE_KEY" > "$RUNNER_TEMP/age.key"
    age -d -i "$RUNNER_TEMP/age.key" \
        -o site/src/data/site.local.ts secrets/site.age
```

Three details that are easy to get wrong:

- `trap … EXIT` removes the key even when decryption fails. A bare `rm` at the
  end does not run on failure.
- `umask 077` before writing the key, so it is not group- or world-readable.
- Install `age` from a pinned source, not an unpinned package install in the
  deploy path. A repository that publishes a security baseline requiring
  SHA-pinned actions should not fetch an unpinned binary two steps before it
  publishes.

The decrypt step belongs in the deploy workflow only. Pull-request builds from
forks have no access to the secret and must stay green without it — which they
do, because the placeholders are valid.

## Verifying it works

The property to test is behavioural, and it can be checked in CI:

1. Clone the repository fresh, without secrets.
2. Build.
3. Grep the build output for the operator's real values.

A hit fails the job. This catches the case where a value was hard-coded
somewhere the design did not anticipate, which is how this leaks in practice.
