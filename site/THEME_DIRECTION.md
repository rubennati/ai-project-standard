# Website Theme Direction

This document defines the visual direction for the shared site shell. It
follows the approved product architecture; the dependency-free foundation was
implemented on 2026-08-10. Page primitives, the final font decision and the
content migration remain separate slices.

Review date: 2026-08-10.

## Recommendation

Do **not** install a complete third-party Astro theme. Build a small, native
theme layer on the existing Astro 7 and Tailwind CSS 4 site.

The site already has the difficult parts a starter theme would replace:
bilingual routes, evidence labels, dated claims, structured data, a glossary,
custom diagrams, privacy-friendly static output and strong accessibility. A
full theme would bring its own content model and navigation assumptions, then
force the product back into either a documentation portal, a marketing landing
page or a blog.

Use existing themes as references for component quality and rhythm, not as the
application architecture.

## What was inspected

The built site was inspected at a 1280-pixel desktop viewport and a 390-pixel
mobile viewport on the homepage, an editorial article, a rendered repository
document and the glossary index.

### Measured width system

| Surface | Current desktop width | Current rule |
| --- | ---: | --- |
| Header outer container | 1024px | `max-w-5xl` with 24px side padding |
| Main outer container | 1024px | `max-w-5xl` with 24px side padding |
| Footer outer container | 1024px | `max-w-5xl` with 24px side padding |
| Usable full-width content | 976px | outer container minus padding |
| Homepage reading blocks | 768px | repeated `max-w-3xl` classes |
| Editorial articles | 672px | repeated `max-w-2xl` classes |
| Rendered `/docs` prose | 976px | no reading-width constraint |
| Mobile content at 390px | 342px | 24px side padding |

Header, main and footer are technically the same outer width. The perceived
misalignment is still real because their contents use unrelated internal
widths and densities:

- the header spreads the wordmark and a long navigation row across the shell;
- the homepage alternates between 768px text and 976px card grids;
- articles stop at 672px but remain aligned to the shell's left edge;
- rendered repository documents use the full 976px for prose; and
- the footer distributes three columns across 976px, then repeats licensing in
  both a link group and the fine-print row.

The problem is not that every page needs one width. Long-form prose, a search
index and a comparison matrix should not be the same width. The problem is that
the site has widths, not a width **system**.

### Other visual findings

- `Inter` is named in CSS but no font file or font package is loaded. The
  rendered type therefore depends on the visitor's system fallback.
- Page spacing is assembled locally from `mt-10`, `mt-12`, `mt-14`, `mt-16`
  and `mt-20`. Individual pages look acceptable, but their vertical rhythm is
  not shared.
- Almost every container uses the same thin grey border and white background.
  Cards, evidence, search controls and diagrams therefore have similar visual
  weight even when their importance differs.
- The article width is readable. The `/docs` prose width is not: 976px produces
  lines far longer than the rest of the editorial site.
- At 390px the homepage hero is about 690px high before the next section. Both
  long introductory paragraphs and both actions compete in the first screen.
- Mobile has no horizontal overflow and the disclosure navigation remains
  usable. The technical responsive foundation should be preserved.
- Light/dark colours, focus treatment, semantic HTML, underlined inline links
  and evidence labels are strong foundations, not redesign targets.

## Why the available theme types do not fit

### Starlight and documentation themes

[Starlight](https://starlight.astro.build/) is an official Astro documentation
framework with navigation, search, internationalisation, content schemas and a
documentation page frame. [Compass](https://astro.build/themes/details/compass/)
similarly targets product documentation, help centres and internal knowledge
bases with sidebars and category-driven navigation.

Those are good solutions to the wrong product. Adopting either would make the
site look and behave like the `/docs` identity that the product decision just
retired. Their page frame is useful inspiration for readable technical depth,
breadcrumbs, tables of contents and callouts, but not for the global shell.

### AstroWind and landing-page themes

[AstroWind](https://github.com/arthelokyo/astrowind) provides polished landing,
feature, CTA and blog widgets. Its default information model is a marketing
site assembled from promotional sections. AI Standard needs decision paths,
evidence, reference and implementation depth rather than product marketing,
pricing or conversion components.

The component rhythm is useful reference. Importing the full starter would
replace working SEO, routing, content and privacy decisions with a larger
generic system.

### Blog themes

Minimal blog themes solve typography and chronology well, but make articles the
product. AI Standard also needs outcome maps, collaboration comparisons,
interactive reference, matrices, technical guides and linked artifacts.

### Conclusion

The external-theme options each optimise one surface and would force the other
surfaces to imitate it. The correct unit to adopt is not a theme repository; it
is a consistent visual language implemented in the current repository.

Sources checked: 2026-08-10 —
[Astro theme directory](https://astro.build/themes/),
[Starlight documentation](https://starlight.astro.build/),
[Starlight repository](https://github.com/withastro/starlight),
[Compass theme entry](https://astro.build/themes/details/compass/),
[AstroWind repository](https://github.com/arthelokyo/astrowind).

## Visual character

The site should feel like an **independent field guide for consequential AI
work**:

- editorial rather than corporate;
- technical without looking like API documentation;
- calm and precise rather than futuristic;
- practical rather than academic; and
- visibly evidence-led without turning every page into a compliance form.

Avoid stock AI imagery, glowing gradients, decorative circuit patterns, glass
cards, dashboard chrome and chatbot-shaped interfaces. They communicate a
category stereotype rather than this product's point of view.

The visual identity comes from typography, alignment, evidence components,
decision diagrams and a disciplined use of cobalt — not from an illustration
layer added to otherwise generic cards.

## Theme foundation

### One shell, three intentional content rails

Define the widths once as theme tokens rather than repeating Tailwind maximums
on individual pages:

| Rail | Proposed maximum | Use |
| --- | ---: | --- |
| **Shell** | 72rem / 1152px | Header, footer, homepage composition and large matrices |
| **Wide** | 60rem / 960px | Indexes, card groups, glossary controls, diagrams and tables |
| **Reading** | 44rem / 704px | Editorial prose, legal explanations and implementation steps |

All rails are centred inside the same shell and use one responsive gutter:

```css
--layout-shell: 72rem;
--layout-wide: 60rem;
--layout-reading: 44rem;
--layout-gutter: clamp(1.25rem, 4vw, 2rem);
```

Every page declares one default rail. A component may break out from Reading to
Wide for a matrix, diagram, code sample or decision table. It does not choose an
arbitrary maximum width.

This produces visual consistency without making prose too wide or a glossary
unnecessarily narrow.

### Typography

Use a real, self-hosted variable sans family rather than naming a font that is
not delivered. The first prototype should compare:

1. **Inter Variable** — continuity with the current intention, neutral and
   highly readable; and
2. **IBM Plex Sans** — a more recognisable editorial-technical voice.

Choose one after rendering the same homepage and article in both languages.
Keep the system monospace stack initially; code is supporting material, not the
brand.

The hierarchy should use fewer sizes with stronger spacing rules:

| Role | Intent |
| --- | --- |
| Display | Homepage proposition only; short enough to survive mobile |
| Page title | All hubs, guides and references |
| Section title | Major decision or explanation step |
| Body lead | One concise statement of fit and outcome |
| Body | Reading text with a stable line height and measure |
| Meta | Evidence, dates, ownership and source context |

### Colour and surfaces

Keep cobalt as the recognisable action and link colour. Add a small neutral
surface scale so hierarchy does not depend on borders alone:

- warm white canvas;
- white or near-white raised surface;
- quiet blue-grey information surface;
- dark ink and secondary ink;
- cobalt action and focus colour; and
- one restrained warning surface for consequential stop conditions.

Do not assign a decorative colour to each product stage yet. Possibility,
Collaboration, Reach and Control are a content model; turning them into four
brand colours before the prototype would hard-code a taxonomy into the theme.

Dark mode keeps semantic parity. State continues to be carried by text and
shape, never colour alone.

### Rhythm

Define a small section rhythm rather than page-local margins:

- compact: related controls or metadata;
- content: paragraph, list and evidence spacing;
- section: one major thought to the next; and
- chapter: a new phase of the reader journey.

This makes a hub, guide and reference page feel related even when their
structures differ.

## Header direction

The approved five reader jobs replace the current six subject/format links.
The theme should make the header feel contained rather than stretched:

- Shell rail shared exactly with footer and page composition;
- wordmark at the shell start;
- primary navigation grouped as one region, not spaced as isolated text across
  every remaining pixel;
- language switch separated by a visual divider and accessible label;
- active state shown with weight plus a short underline or bottom rule; and
- one fixed header height with no wrapping at supported desktop breakpoints.

On mobile, the menu panel should span the available content width beneath the
header rather than float as a narrow 14rem card. It should show primary links
and only the most useful secondary destinations. Language is not part of that
disclosure: it remains visible beside the Menu control at every viewport.

### Language control

The current `EN / DE` presentation looks like passive text and disappears with
the closed mobile menu. Replace it with one shared, compact segmented control:

- render it in the header on desktop and mobile, before the menu control on
  mobile so the menu remains the rightmost header action;
- use two equal `EN` and `DE` segments without a slash separator;
- expose the region as `nav` with an accessible `Language` label;
- mark the current locale with `aria-current="page"`, weight, a lightly tinted
  shape and a short rule so the state does not depend on colour alone or
  compete with primary actions;
- give the abbreviated segments the full accessible names `English` and
  `Deutsch`;
- link directly to the exact alternate route when that translation exists;
- keep an unavailable locale visible but disabled, with an accessible message
  such as `German version not available`, instead of silently linking to a
  homepage; and
- reuse the same control at the end of the footer for readers who finish a long
  page.

The component is a site-wide language control, not a glossary feature. Rename
`GlossaryLanguageSwitch` to `LanguageSwitch` when the shell is implemented.

The header and footer can both use the Shell rail while looking different. The
header is navigation; the footer is closure and trust.

## Footer direction

The information-architecture proposal originally repeated the primary
destinations under “Explore”. That adds no new job and recreates the duplication
the current footer already has. Remove that group.

The redesigned footer has a brand statement plus three secondary groups:

```text
AI Standard
Practical guidance for responsible AI work,
from the first prompt to an acting agent.

Reference                 Project & trust              Legal
Glossary                  About                        Legal notice
Law                       Technical repository         Privacy policy
Articles                  Contribute                   Security contact
Evidence method           Report a problem
                           Report a vulnerability

© AI Standard · Code MIT · Site content CC BY 4.0 · EN / DE
```

Rules for the footer:

- do not repeat Use AI, Choose how, Data & systems or Control & verify;
- remove Docs, Profiles and the blueprint taxonomy;
- show each licence once, in the fine-print row;
- keep reporting and security routes because trust is a distinct footer job;
- keep the repository as inspection and contribution, not as another content
  area;
- keep language available at the end of a long page; and
- align the brand block and link groups to the same Shell grid as the header.

On mobile the brand statement appears first, the three groups follow as simple
stacked sections, and the legal line wraps without separator characters being
read as content.

## Shared visual components

The theme should standardise appearance without turning all content into one
template:

| Component | Visual job |
| --- | --- |
| Page introduction | Stable title, lead, metadata and first decision |
| Outcome card | Possibility, example, limit and next action |
| Collaboration comparison | Human role, system role, reach and verification |
| Decision matrix | Exact mappings that need more width than prose |
| Evidence band | Claim level, date and source without interrupting every paragraph |
| Stop condition | A clear “do not use this when” boundary |
| Implementation step | Action, expected result and verification |
| Artifact link | Distinguish something to copy from something to read |
| Related next step | Continue through the product spine without generic “related posts” |

Existing Journey, Reach and Evidence components should be evolved into this
system rather than replaced by decorative cards.

## Responsive behaviour

- At mobile widths the Reading, Wide and Shell rails collapse to the same
  guttered column.
- Homepage display text must not consume the first screen together with two
  introductory paragraphs. Keep one lead and move the stance into the next
  section.
- Primary actions stack only when their labels require it; both remain visible
  without implying equal priority.
- Matrices become labelled row cards or horizontal scroll regions depending on
  whether comparison across columns must remain visible.
- Footer groups stack; they do not become accordions unless testing shows the
  page ending is unmanageably long.
- The language control stays in the first mobile header row; opening the menu
  must never be required to discover or change the locale.
- The mobile menu uses a 44px icon control at the right edge. Its three-line
  symbol becomes a close symbol while the disclosure is open; the accessible
  name remains present as text for assistive technology.
- Reduced motion, focus visibility and zero horizontal page overflow remain
  non-negotiable.

## Implementation sequence after approval

Status: the theme tokens and shell in step 2 are implemented. The current
system font stack remains in place until the local font proof in step 1 makes a
choice; no font asset or dependency has been added.

1. **Theme proof, not a migration.** Render the approved homepage opening, one
   editorial article, one wide matrix and the footer with both font candidates
   in a local-only comparison. Choose the type and final rail sizes.
2. **Theme tokens and shell.** Add semantic colour, type, width and rhythm
   tokens; implement the shared header and footer once.
3. **Page primitives.** Add the shared introduction, evidence band, stop
   condition, implementation step and related-next-step components.
4. **MCP prototype path.** Apply the theme and page jobs to “Connect AI to tools
   and data”. Validate desktop, mobile, English and German.
5. **Migration plan.** Only after the prototype works, map existing page types
   onto the new primitives and migrate in reviewable groups.

No external theme dependency is needed. A font package or self-hosted font
files are a separate dependency and licence decision made after the local type
comparison.

## Approval recorded

Approval of this direction recorded on 2026-08-10 means:

1. no complete Astro theme is installed;
2. the visual character is an editorial field guide, not a docs portal or SaaS
   landing page;
3. Shell, Wide and Reading become the only layout rails;
4. the footer stops repeating primary navigation and uses the proposed
   Reference, Project & trust, and Legal jobs;
5. the language control remains visible in the desktop and mobile header;
6. the first visual proof compares Inter Variable and IBM Plex Sans; and
7. implementation begins with a local theme proof before any site-wide
   migration.

It does not yet approve font assets, a dependency change or the final visual
values. Those follow from the rendered proof.
