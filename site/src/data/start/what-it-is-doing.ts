/**
 * Whether the problem is the tool or the setup around it.
 *
 * The page used to carry both the mechanism explanation and this question. In
 * slice 4 the mechanism moved to its canonical owner: `/data-flows` takes the
 * model-product-connection-target explanation and the two paragraphs that say
 * what it is for, and `/data-flows/where-knowledge-lives` takes the three
 * routes by which a tool comes to know about your material, together with the
 * figure that compares them (`.ai/decisions.md`, 2026-08-24).
 *
 * What is left is a Start question, and it was always the strongest thing on
 * the page: a tool problem and a setup problem look alike and are fixed
 * differently, and how much setup you need is not a reward for skill. Both
 * sections are kept as they were written.
 *
 * `What this field is called` did not survive the move. It was glossary front
 * matter, and its one claim — that these are layers of one architecture rather
 * than alternatives — is made better by the figure on `/data-flows`.
 *
 * The URL does not move. Ownership decides which page maintains an
 * explanation, not where it is served from; the mismatch between this slug and
 * the page's new title is evidence for a later route decision, not for this
 * slice.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export interface StartNextStep {
  label: string;
  description: string;
}

const nextStep: Record<SiteLocale, StartNextStep> = {
  en: {
    label: "What can it access, and what can it do?",
    description:
      "Where an AI tool's access to another system comes from, and where reading, storage, changes and actions are each answered.",
  },
  de: {
    label: "Worauf kann es zugreifen, und was kann es tun?",
    description:
      "Woher der Zugriff eines KI-Tools auf ein anderes System kommt und wo Lesen, Speichern, Ändern und Auslösen jeweils beantwortet werden.",
  },
};

export const getWhatItIsDoingNextStep = (locale: SiteLocale): StartNextStep =>
  nextStep[locale];

/**
 * Both remaining sections make the same kind of claim, so the assessment
 * belongs to the page rather than to any section. It stays local: a shared
 * page-level evidence model would have to carry level, source and check date
 * like `EvidenceBand` does, and a bare string on `Article` would not.
 */
interface WhatItIsDoing extends Article {
  assessmentSummary: string;
}

export const CHECKED = "2026-08-09";

const en: WhatItIsDoing = {
  title: "Do you need a different tool — or a better setup?",
  subtitle:
    "How well you use a tool and how much system sits behind it are separate questions.",
  description:
    "Why tools built for programmers often suit document work, why the amount of process you need is not a reward for skill, and the one thing that changes the answer: whether anyone else relies on the result.",
  assessmentSummary:
    "This page is this project's judgement about how tools and setups fit real work, not a claim about any particular product's behaviour. That is why no section carries a check date.",
  lead: "When this is not working well, the cause is usually one of two things, and they are easy to confuse: the tool itself, or the setup around it. Which one it is decides what to change — and how much setup you need does not follow from how skilled you are.",
  sections: [
    {
      heading: "Why tools built for programmers work well on documents",
      paragraphs: [
        "A surprising number of people doing non-technical knowledge work end up using a coding assistant, and it is not perversity.",
        "The decisive capability is not writing code. It is working with a persistent set of files: list, read, search, create, edit, rename, compare. A folder of notes, sources and decisions is structurally the same problem as a folder of source code, and a tool that handles one handles the other.",
        "What you lose is the guard rails of a purpose-built product. What you gain is that your material stays in ordinary files you can read without the tool.",
      ],
    },
    {
      heading: "Knowing the tool and running a good system are different skills",
      paragraphs: [
        "Two things get conflated when people ask whether they are \"ready\" for this.",
        "How well you use the tool is one axis: an expert can deliberately choose something very simple, and a beginner can be the daily user of something very complex. How much system sits behind it is another: identity, permissions, review, retention, audit.",
        "They move independently, and the second is not a reward for the first. A large organisation may have heavy governance around a basic chat tool; one careful individual may run something far more capable with none of it, correctly, because nobody else is affected.",
        "The line that changes the answer is not skill and not size. It is whether anyone other than you relies on the result.",
      ],
    },
  ],
};

const de: WhatItIsDoing = {
  title: "Brauchst du ein anderes Tool – oder ein besseres Setup?",
  subtitle:
    "Wie gut du ein Tool beherrschst und wie viel System dahintersteht, sind zwei getrennte Fragen.",
  description:
    "Warum Tools für Programmierende oft gut zu Dokumentenarbeit passen, warum die nötige Absicherung keine Belohnung für Können ist, und was die Antwort ändert: ob sich außer dir jemand auf das Ergebnis verlässt.",
  assessmentSummary:
    "Diese Seite ist die Einschätzung dieses Projekts dazu, wie Tools und Aufbauten zu echter Arbeit passen — keine Aussage über das Verhalten eines bestimmten Produkts. Deshalb trägt kein Abschnitt ein Prüfdatum.",
  lead: "Wenn es nicht gut läuft, liegt es meist an einem von zwei Dingen, und die werden leicht verwechselt: am Tool selbst oder am Aufbau darum herum. Was davon es ist, entscheidet, was du änderst — und wie viel Aufbau du brauchst, folgt nicht daraus, wie geübt du bist.",
  sections: [
    {
      heading: "Warum Tools für Programmierende gut mit Dokumenten umgehen",
      paragraphs: [
        "Erstaunlich viele Menschen mit nicht-technischer Wissensarbeit landen bei einem Coding-Assistenten, und das ist keine Marotte.",
        "Die entscheidende Fähigkeit ist nicht, Code zu schreiben. Sie ist, mit einem dauerhaften Satz von Dateien umzugehen: auflisten, lesen, suchen, anlegen, bearbeiten, umbenennen, vergleichen. Ein Ordner mit Notizen, Quellen und Entscheidungen ist strukturell dasselbe Problem wie ein Ordner mit Quellcode — und wer das eine kann, kann das andere.",
        "Was du verlierst, sind die Leitplanken eines dafür gebauten Produkts. Was du gewinnst, ist, dass dein Material in gewöhnlichen Dateien bleibt, die du auch ohne das Tool lesen kannst.",
      ],
    },
    {
      heading: "Das Tool beherrschen und ein gutes System betreiben sind zwei Fähigkeiten",
      paragraphs: [
        "Zwei Dinge werden vermengt, wenn jemand fragt, ob er dafür „bereit“ sei.",
        "Wie gut du das Tool nutzt, ist die eine Achse: Ein Fachmensch kann bewusst etwas sehr Einfaches wählen, und ein Anfänger kann täglich etwas sehr Komplexes bedienen. Wie viel System dahintersteht, ist die andere: Identität, Rechte, Prüfung, Aufbewahrung, Protokollierung.",
        "Sie bewegen sich unabhängig, und die zweite ist keine Belohnung für die erste. Eine große Organisation kann schwere Governance um ein einfaches Chat-Tool legen; eine sorgfältige Einzelperson kann etwas weit Mächtigeres ohne all das betreiben — zu Recht, weil niemand sonst betroffen ist.",
        "Die Linie, die die Antwort ändert, ist weder Können noch Größe. Sie ist, ob sich außer dir jemand auf das Ergebnis verlässt.",
      ],
    },
  ],
};

export const getWhatItIsDoing = (locale: SiteLocale): WhatItIsDoing =>
  locale === "de" ? de : en;
