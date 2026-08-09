#!/usr/bin/env bash
# Self-conformance check.
#
# The repository states rules; this asserts it follows them. Every check here
# exists because the rule it enforces was already written down and then broken
# anyway — see .ai/errors.md.
#
# Usage: bash .github/scripts/check-conformance.sh
set -uo pipefail

fail=0
note() { echo "::error file=$1::$2"; fail=1; }
ok() { echo "  ok  $1"; }

echo "== Purpose is stated once and pointed at =="

if [[ ! -f docs/purpose.md ]]; then
  note "docs/purpose.md" "missing: the single statement of what the repository, the website and a blueprint are for"
else
  ok "docs/purpose.md exists"
  grep -q "docs/purpose.md" README.md \
    || note "README.md" "does not point at docs/purpose.md"
  grep -q "purpose.md" docs/index.md \
    || note "docs/index.md" "does not list docs/purpose.md"
fi

echo "== The destination is stated, and nothing contradicts it =="

# purpose.md is the top of the hierarchy. If the destination sentence is gone,
# every derivation below it is unanchored.
if ! grep -q "what changed, why, on whose decision, and what was checked" docs/purpose.md 2>/dev/null; then
  note "docs/purpose.md" "the destination sentence is missing — everything else derives from it"
fi

# Profiles and the four-pillar framing were superseded by blueprints. The rule
# is that they must not be used as current vocabulary. Records of the past are
# not current usage, so the append-only logs are exempt along with the tombstone
# that keeps old links alive: decisions.md must be able to say what it retired.
retired="$(grep -rn -E "Four pillars|four pillars|OSS-only|AI-only profile|Combined profile" \
  --include='*.md' docs .ai README.md AGENTS.md CONTRIBUTING.md blueprints 2>/dev/null \
  | grep -vE '^(docs/profiles\.md|\.ai/(tasks|errors|decisions|progress)\.md):' || true)"
if [[ -n "$retired" ]]; then
  while IFS= read -r line; do
    note "${line%%:*}" "uses the retired profile/pillar taxonomy — blueprints replaced it: $(echo "$line" | cut -d: -f3- | cut -c1-60)"
  done <<< "$retired"
fi

echo "== Every blueprint answers the four questions =="

# docs/purpose.md requires a blueprint README to say what it solves, what you
# get, when not to use it, and what it has been run against. A blueprint that
# skips the last one is an assessment presenting itself as a fact.
shopt -s nullglob
for bp in blueprints/*/; do
  id="$(basename "$bp")"
  [[ "$id" == "README.md" ]] && continue

  for required in README.md blueprint.yml files; do
    [[ -e "$bp$required" ]] || note "$bp" "missing $required"
  done

  readme="${bp}README.md"
  [[ -f "$readme" ]] || continue

  grep -qi "^## What it solves" "$readme"  || note "$readme" "no '## What it solves' section"
  grep -qi "^## What you get" "$readme"    || note "$readme" "no '## What you get' section"
  grep -qi "^## When not to use" "$readme" || note "$readme" "no '## When not to use it' section"
  grep -qi "^## Verified" "$readme"        || note "$readme" "no '## Verified' section — say what it was run against, or that it was not"

  # The manifest must declare a status, and a stable blueprint must carry a
  # verification date. Draft is allowed to be unproven; stable is not.
  status="$(grep -E '^status:' "$bp/blueprint.yml" 2>/dev/null | head -1 | awk '{print $2}')"
  case "$status" in
    draft|stable) ;;
    *) note "$bp/blueprint.yml" "status must be draft or stable, found '${status:-none}'" ;;
  esac
  if [[ "$status" == "stable" ]] && ! grep -qE '^\s+date: [0-9]{4}-[0-9]{2}-[0-9]{2}' "$bp/blueprint.yml"; then
    note "$bp/blueprint.yml" "status is stable but no verified.date is recorded"
  fi
done
shopt -u nullglob

echo "== This repository lives the workspace it ships =="

# The ai-assisted-development blueprint hands adopters an .ai/ workspace. If
# this repository does not keep the same shape, it is shipping a practice it
# does not follow — which is the failure the whole project argues against.
BP=".ai"
PAYLOAD="blueprints/ai-assisted-development/files/.ai"
if [[ -d "$PAYLOAD" ]]; then
  while IFS= read -r f; do
    rel="${f#$PAYLOAD/}"
    [[ -e "$BP/$rel" ]] || note "$BP/$rel" "the ai-assisted-development blueprint ships this file; this repository does not have it"
  done < <(find "$PAYLOAD" -type f -name '*.md')

  # A file that exists but is thinner than the skeleton we hand out is worse
  # than a missing one: it looks maintained.
  while IFS= read -r f; do
    rel="${f#$PAYLOAD/}"
    ours="$BP/$rel"
    [[ -f "$ours" ]] || continue
    theirs_lines=$(grep -cvE '^\s*(<!--|$)' "$f" || echo 0)
    ours_lines=$(grep -cvE '^\s*(<!--|$)' "$ours" || echo 0)
    if (( ours_lines * 2 < theirs_lines )); then
      note "$ours" "thinner than the skeleton the blueprint ships ($ours_lines vs $theirs_lines lines) — we would not accept this from an adopter"
    fi
  done < <(find "$PAYLOAD" -type f -name '*.md')
else
  echo "  skip  $PAYLOAD not present"
fi

echo "== Claims about the outside world carry a check date =="

# The website requires a source and a check date for every factual claim. The
# same discipline applies here: an adopter copies these claims into their own
# project. A file that cites an external source states when it was last checked.
for f in docs/*.md; do
  case "$(basename "$f")" in
    index.md|purpose.md) continue ;;
  esac
  # Only files that actually cite something external.
  grep -qE 'https?://' "$f" || continue
  # Ignore files whose only external links are to this project's own site/repo.
  externals="$(grep -oE 'https?://[^)> ]+' "$f" \
    | grep -vE 'ai-standard\.rubennati\.at|github\.com/rubennati|<[A-Z]' || true)"
  [[ -z "$externals" ]] && continue

  if ! grep -qE '^(> )?[_*]?Sources checked: [0-9]{4}-[0-9]{2}-[0-9]{2}' "$f"; then
    note "$f" "cites external sources but has no 'Sources checked: YYYY-MM-DD' line"
  fi
done

echo "== Vocabulary matches the glossary =="

# The glossary is the project's researched vocabulary. Using a different
# spelling in prose is how a term quietly forks. Only the forms that are wrong
# are listed; the correct one is on the right.
TERMS="site/src/data/terms.ts"
if [[ -f "$TERMS" ]]; then
  check_variant() {
    local wrong="$1" right="$2"
    local hits
    hits="$(grep -rniE "$wrong" --include='*.md' \
      docs .ai blueprints README.md AGENTS.md CONTRIBUTING.md 2>/dev/null \
      | grep -v 'check-conformance' || true)"
    if [[ -n "$hits" ]]; then
      while IFS= read -r line; do
        note "${line%%:*}" "use '$right' as defined in the glossary — found: $(echo "$line" | cut -d: -f3- | cut -c1-60)"
      done <<< "$hits"
    fi
  }
  # Wrong forms only. The correct spelling must not appear here, or the check
  # flags the very usage it is meant to protect — which it did on first run.
  check_variant '\bvibe-coding\b|\bvibecoding\b' 'vibe coding'
  check_variant '\bAI assisted (development|coding|engineering)\b' 'AI-assisted development'
  # Every blueprints/<id> named in prose must be a directory that exists. A
  # renamed blueprint otherwise leaves dead paths in the documentation.
  for ref in $(grep -rhoE 'blueprints/[a-z0-9-]+' --include='*.md' \
        docs .ai blueprints README.md CHANGELOG.md 2>/dev/null \
        | sort -u); do
    case "$ref" in
      blueprints/README.md|blueprints/LICENSE) continue ;;
    esac
    [[ -e "$ref" ]] || note "documentation" "references $ref, which does not exist"
  done
else
  echo "  skip  $TERMS not present"
fi

echo
if [[ $fail -eq 0 ]]; then
  echo "Conformance: the repository follows its own rules."
else
  echo "Conformance: failures above. Each one is a rule this repository states and does not keep." >&2
fi
exit $fail
