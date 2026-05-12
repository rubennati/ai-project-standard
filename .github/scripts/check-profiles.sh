#!/usr/bin/env bash
# Profile completeness check.
#
# Parses the three fenced `text` code blocks in docs/profiles.md and verifies
# every path listed inside them exists in the repository.
#
# Deterministic by design: no wildcards, no glob expansion, line-by-line
# `test -e`. If a path is listed but missing on disk, the script fails.
#
# Usage: bash .github/scripts/check-profiles.sh
set -euo pipefail

PROFILES_FILE="docs/profiles.md"

if [[ ! -f "$PROFILES_FILE" ]]; then
  echo "::error::$PROFILES_FILE not found" >&2
  exit 1
fi

# Extract content of every ```text ... ``` block in the file via an awk state
# machine, then iterate line by line. Avoids mapfile (bash 4+) so the script
# runs on macOS's bundled bash 3.2 as well.
missing=0
total=0

while IFS= read -r path; do
  [[ -z "$path" ]] && continue
  total=$((total + 1))
  if [[ ! -e "$path" ]]; then
    echo "::error file=$PROFILES_FILE::Profile lists missing path: $path"
    missing=$((missing + 1))
  fi
done < <(
  awk '
    /^```text[[:space:]]*$/ { in_block = 1; next }
    /^```[[:space:]]*$/     { in_block = 0; next }
    in_block && NF > 0      { print $0 }
  ' "$PROFILES_FILE"
)

if [[ $total -eq 0 ]]; then
  echo "::error::No paths found in fenced \`text\` blocks of $PROFILES_FILE" >&2
  exit 1
fi

echo "Checked $total path(s) from $PROFILES_FILE."

if [[ $missing -gt 0 ]]; then
  echo "::error::$missing path(s) listed in $PROFILES_FILE do not exist." >&2
  exit 1
fi

echo "All profile paths exist."
