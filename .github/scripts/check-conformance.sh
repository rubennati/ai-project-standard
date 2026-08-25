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
  note "docs/purpose.md" "missing: the single statement of the destination and the product system"
else
  ok "docs/purpose.md exists"
  grep -q "docs/purpose.md" README.md \
    || note "README.md" "does not point at docs/purpose.md"
  grep -q "purpose.md" docs/index.md \
    || note "docs/index.md" "does not list docs/purpose.md"
fi

if [[ ! -f docs/website-product-brief.md ]]; then
  note "docs/website-product-brief.md" "missing: the website mission, reader outcomes and content admission test"
else
  ok "docs/website-product-brief.md exists"
  grep -q "website-product-brief.md" README.md \
    || note "README.md" "does not point at docs/website-product-brief.md"
  grep -q "website-product-brief.md" docs/index.md \
    || note "docs/index.md" "does not list docs/website-product-brief.md"
fi

echo "== The destination is stated, and nothing contradicts it =="

# purpose.md is the top of the hierarchy. If the destination sentence is gone,
# every derivation below it is unanchored.
if ! grep -q "A person uses AI in real work" docs/purpose.md 2>/dev/null; then
  note "docs/purpose.md" "the destination sentence is missing — everything else derives from it"
fi

if ! grep -q "from the first prompt to an acting agent" docs/website-product-brief.md 2>/dev/null; then
  note "docs/website-product-brief.md" "the product scope is missing — the site must span the first prompt to an acting agent"
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

  for required in README.md blueprint.yml; do
    [[ -e "$bp$required" ]] || note "$bp" "missing $required"
  done

  status="$(grep -E '^status:' "$bp/blueprint.yml" 2>/dev/null | head -1 | awk '{print $2}')"
  case "$status" in
    planned|draft|stable) ;;
    *) note "$bp/blueprint.yml" "status must be planned, draft or stable, found '${status:-none}'" ;;
  esac

  readme="${bp}README.md"
  [[ -f "$readme" ]] || continue

  grep -qi "^## What it solves" "$readme"  || note "$readme" "no '## What it solves' section"
  grep -qi "^## What you get" "$readme"    || note "$readme" "no '## What you get' section"
  grep -qi "^## When not to use" "$readme" || note "$readme" "no '## When not to use it' section"

  if [[ "$status" == "planned" ]]; then
    # A planned blueprint has decided its scope and built nothing. Both halves
    # have to be visible: no payload directory to look maintained, and the gap
    # named in the README rather than left for the reader to discover.
    [[ -e "${bp}files" ]] && note "$bp" "status is planned but a files/ directory exists — an empty payload folder looks maintained"
    grep -qi "^## Not built yet" "$readme" \
      || note "$readme" "status is planned, so the fourth question is '## Not built yet' — say what does not exist"
    grep -qi "^## Verified" "$readme" \
      && note "$readme" "status is planned but claims a '## Verified' section — there is nothing to have verified"
    grep -qE '^blocked-by:' "$bp/blueprint.yml" \
      || note "$bp/blueprint.yml" "status is planned but declares no blocked-by — list the open questions, or [] to claim none are open"
  else
    [[ -e "${bp}files" ]] || note "$bp" "missing files/ — a $status blueprint has a payload"
    grep -qi "^## Verified" "$readme" \
      || note "$readme" "no '## Verified' section — say what it was run against, or that it was not"
    if [[ "$status" == "stable" ]] && ! grep -qE '^\s+date: [0-9]{4}-[0-9]{2}-[0-9]{2}' "$bp/blueprint.yml"; then
      note "$bp/blueprint.yml" "status is stable but no verified.date is recorded"
    fi
  fi
done
shopt -u nullglob

echo "== Every concept answers its five questions and says when it was checked =="

# A concept is technical reference, and technical reference rots silently. The
# owner and the date are what make that visible, so they are not optional.
shopt -s nullglob
for c in concepts/*.md; do
  [[ "$(basename "$c")" == "README.md" ]] && continue

  grep -qE '^owner: .+'  "$c" || note "$c" "no owner — a technical document nobody owns is a document nobody re-reads"
  grep -qE '^reviewed: [0-9]{4}-[0-9]{2}-[0-9]{2}' "$c" \
    || note "$c" "no 'reviewed: YYYY-MM-DD' — out of date and dated is honest, out of date and undated is not"
  grep -qE '^derives-from: .+' "$c" || note "$c" "no derives-from — say what this was built out of"
  status="$(grep -E '^status:' "$c" | head -1 | awk '{print $2}')"
  case "$status" in
    draft|reviewed) ;;
    *) note "$c" "status must be draft or reviewed, found '${status:-none}'" ;;
  esac

  # docs/concepts.md fixes the five questions. Headings are numbered, so match
  # on the substance rather than on the exact wording.
  grep -qiE '^## 1\. What you are deciding'      "$c" || note "$c" "missing '## 1. What you are deciding'"
  grep -qiE '^## 2\. The smallest thing'         "$c" || note "$c" "missing '## 2. The smallest thing that works' — it comes before the architecture on purpose"
  grep -qiE '^## 3\. The architecture'           "$c" || note "$c" "missing '## 3. The architecture'"
  grep -qiE '^## 4\. The decision points'        "$c" || note "$c" "missing '## 4. The decision points' — the part that cannot be looked up elsewhere"
  grep -qiE '^## 5\. How it fails'               "$c" || note "$c" "missing '## 5. How it fails' — a concept with only a happy path is a brochure"

  id="$(basename "$c" .md)"
  grep -q "($id.md)\|(\./$id\.md)" concepts/README.md \
    || note "concepts/README.md" "concepts/$id.md exists but is not listed here"
done
shopt -u nullglob

# The research routing register (research/ROUTING.md) was a one-time working
# document for a single sweep, not a permanent fixture. It is no longer enforced
# here: keeping 166 rows in lockstep with the research on every build is the kind
# of self-referential upkeep the register was never worth. It stands as a dated
# snapshot; see the note at its top.

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
  # Exempt, for the same reason docs/profiles.md is exempt from the retired
  # taxonomy check above: a redirect has to name the term it redirects from, or
  # the person searching for the old word never lands on the new one.
  VOCAB_TOMBSTONES='blueprints/agent-maintained-knowledge-base/README\.md'

  check_variant() {
    local wrong="$1" right="$2"
    local hits
    hits="$(grep -rniE "$wrong" --include='*.md' \
      docs .ai blueprints README.md AGENTS.md CONTRIBUTING.md ROADMAP.md 2>/dev/null \
      | grep -v 'check-conformance' \
      | grep -vE "^($VOCAB_TOMBSTONES):" || true)"
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
  # Retired by research/knowledge-management/REVISIONS.md R1: the artefact is
  # real, the name is not standardised. research/ is exempt — the drops are kept
  # exactly as they arrived, and the register that retires the term has to name
  # it to do so.
  check_variant '\bllm[ -]wikis?\b' 'AI knowledge base'
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

  # And the other direction, which is the one that actually went wrong: a
  # blueprint was added and the two lists that advertise it were not updated.
  # Checking only that named paths exist catches a rename and misses an
  # addition entirely.
  for bp in blueprints/*/; do
    id="$(basename "$bp")"
    [[ -d "$bp" ]] || continue
    # The root README links blueprints/<id>; blueprints/README.md links ./<id>/
    # from inside the directory. Accept either form in either file.
    for list in README.md blueprints/README.md; do
      grep -qE "(blueprints/|\./)$id/" "$list" 2>/dev/null \
        || note "$list" "blueprints/$id exists but is not listed here — a blueprint nobody can find is a blueprint that does not exist"
    done
  done
else
  echo "  skip  $TERMS not present"
fi

echo "== The machine identity surfaces agree with the canonical identity =="

# manifest.webmanifest and llms.txt are served as static files and cannot
# import site/src/data/identity.ts, so they restate its English sentence by
# hand. This checks that restatement, and only on these two files — it is not
# a site-wide vocabulary ban. Historical, internal or contextual prose
# elsewhere (docs/, .ai/, the repository's own name) is untouched.
IDENTITY_TS="site/src/data/identity.ts"
MANIFEST="site/public/manifest.webmanifest"
LLMS_TXT="site/public/llms.txt"
if [[ -f "$IDENTITY_TS" ]]; then
  # The first `identity:` in the module is the English one.
  canonical="$(grep -m1 -oE 'identity: "[^"]+"' "$IDENTITY_TS" | sed 's/^identity: "//; s/"$//')"
  if [[ -z "$canonical" ]]; then
    note "$IDENTITY_TS" "no English identity sentence found — the machine surfaces have nothing to agree with"
  else
    ok "canonical identity: $canonical"

    if [[ -f "$MANIFEST" ]]; then
      grep -q '"name": "AI Standard"' "$MANIFEST" \
        || note "$MANIFEST" "manifest name is not AI Standard — see .ai/decisions.md, 2026-08-24"
      grep -qF "$canonical" "$MANIFEST" \
        || note "$MANIFEST" "description does not match the identity sentence in $IDENTITY_TS"
    fi

    if [[ -f "$LLMS_TXT" ]]; then
      grep -qF "$canonical" "$LLMS_TXT" \
        || note "$LLMS_TXT" "does not restate the identity sentence from $IDENTITY_TS"
    fi
  fi

  # The public page states what a blueprint's status means for a reader — a
  # `draft` blueprint has a complete payload and has never been run against a
  # real project. The site stores the status key and maps it to that sentence;
  # it deliberately does not read blueprint.yml, so the website stays buildable
  # on its own and repository layout stays out of the public product. That
  # leaves one copy of a fact that has an owner, so this is the boundary that
  # keeps the two honest: promoting a blueprint to `stable` now fails the build
  # until the site agrees.
  VIBE_CODING_TS="site/src/data/start/vibe-coding.ts"
  AIAD_MANIFEST="blueprints/ai-assisted-development/blueprint.yml"
  if [[ -f "$VIBE_CODING_TS" && -f "$AIAD_MANIFEST" ]]; then
    canonical_status="$(grep -E '^status:' "$AIAD_MANIFEST" | head -1 | awk '{print $2}')"
    # One entry per locale; both must name the canonical status.
    rendered_statuses="$(grep -oE 'artifactStatus: "[a-z]+"' "$VIBE_CODING_TS" | sed 's/^artifactStatus: "//; s/"$//')"
    if [[ -z "$rendered_statuses" ]]; then
      note "$VIBE_CODING_TS" "no artifactStatus found — the blueprint status has nothing to agree with"
    else
      status_agrees=1
      while read -r rendered; do
        if [[ "$rendered" != "$canonical_status" ]]; then
          note "$VIBE_CODING_TS" "artifactStatus is '$rendered' but $AIAD_MANIFEST says '$canonical_status'"
          status_agrees=0
        fi
      done <<< "$rendered_statuses"
      [[ "$status_agrees" == "1" ]] && ok "blueprint status agrees with the site: $canonical_status"
    fi
  fi

  # Framings and claims the product retired on 2026-08-24, checked only on
  # these two files. Each returned at least once after being removed.
  for stale in "AI Project Standard" "repository standard" "security practitioner" "Austria first" "Österreich zuerst"; do
    for f in "$MANIFEST" "$LLMS_TXT"; do
      [[ -f "$f" ]] || continue
      if grep -qF "$stale" "$f"; then
        note "$f" "retired identity framing '$stale' — see .ai/decisions.md, 2026-08-24"
      fi
    done
  done
else
  echo "  skip  $IDENTITY_TS not present"
fi

echo
if [[ $fail -eq 0 ]]; then
  echo "Conformance: the repository follows its own rules."
else
  echo "Conformance: failures above. Each one is a rule this repository states and does not keep." >&2
fi
exit $fail
