# Adoption

How to take this into your project.

## Take a blueprint, do not fork

```bash
npx degit rubennati/ai-project-standard/blueprints/<id>/files <target>
```

Without `npx`:

```bash
git clone --depth 1 --filter=blob:none --sparse \
  https://github.com/rubennati/ai-project-standard
cd ai-project-standard
git sparse-checkout set blueprints/<id>/files
```

Forking is the wrong shape. It hands over this project's changelog, its `.ai/`
state full of decisions about *this* repository, its whole website and its
research directory — and buries the dozen files you actually wanted somewhere
inside. A blueprint is the subset that belongs in your project and nothing else.

## Which one

| You are | Take |
|---|---|
| Starting a public repository | [`open-source`](../blueprints/open-source/) |
| Bringing an agent into a repository you already have | [`ai-assisted-development`](../blueprints/ai-assisted-development/) |
| Doing both | `open-source` first, then overlay `ai-assisted-development` |

They compose and neither depends on the other. Each README states what it
solves, what you get, when *not* to use it, and what it was run against.

## After copying

Each blueprint's README lists its own steps. Two apply to both:

1. **Delete the first line of every copied file** — the comment marking it as
   blueprint payload.
2. **Replace the placeholders** the blueprint names.

For `ai-assisted-development`, point your agent at `INIT.md` and say
"initialise". It runs the interview and writes the answers into `.ai/` itself.

## Staying current

Blueprints change. To see what moved since you copied:

```bash
git remote add upstream https://github.com/rubennati/ai-project-standard.git
git fetch upstream --tags
git diff <the-tag-you-took>..upstream/main -- blueprints/<id>/files
```

Take what applies and skip the rest. There is no update command, and there
should not be: your copy is yours, and the moment it diverges deliberately, an
automatic merge would be wrong.

Breaking changes for adopters are called out under
`### Breaking changes for adopters` in [`CHANGELOG.md`](../CHANGELOG.md).

## Licence

Everything under `blueprints/` is MIT-0 — copy it without carrying an
attribution notice into your repository. The rest of the repository is MIT, and
the texts written for the website are CC BY 4.0.
