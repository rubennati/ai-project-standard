/**
 * Evidence levels.
 *
 * Every substantive claim on this site sits on one of five levels, and each
 * level carries its own condition for being publishable. The label is not
 * decoration: it tells a reader what kind of thing they are reading, and it
 * tells the author what they owe before writing it.
 *
 * - `fact`       a primary source is linked, and the check date is stated
 * - `measured`   tested here; setup, version, date and result are documented
 * - `law`        a named norm is restated; applying it to a case is assessment
 * - `assessment` a professional judgement, with the reasoning left visible
 * - `advice`     a recommendation, saying which level it rests on
 *
 * Two boundaries are easy to blur and are therefore written into the levels
 * themselves rather than left to the author's care on the day.
 *
 * A vendor is the authoritative source for what it has published about itself,
 * and nothing more: its documentation is a statement of terms, not an
 * independent audit of its systems. So `fact` covers "the vendor states X" and
 * never "X is technically the case", and the text says which of the two it is.
 *
 * Restating a norm and applying it to a situation are different acts requiring
 * different competence. `law` covers the first. The moment a sentence reaches a
 * conclusion about someone's circumstances it is `assessment`, whoever wrote it.
 *
 * Dates carry a narrower job than the earlier wording here claimed. A statement
 * without one is not automatically unfalsifiable — "the GDPR contains a right
 * to erasure" is checkable whenever you read it. What a date does is fix which
 * state of a changeable world a claim was checked against, which is why `fact`
 * and `measured` require one and the durable parts of `law` do not.
 */
import type { SiteLocale } from "../i18n/ui";

export type EvidenceLevel = "fact" | "measured" | "law" | "assessment" | "advice";

interface LevelCopy {
  label: string;
  /** Shown on hover and to screen readers: what the reader may expect. */
  meaning: string;
}

const copy: Record<SiteLocale, Record<EvidenceLevel, LevelCopy>> = {
  en: {
    fact: {
      label: "Fact",
      meaning:
        "A narrow, checkable statement from a linked primary source, with the date it was last checked. Where the source is a vendor describing itself, the text says so.",
    },
    measured: {
      label: "Measured",
      meaning:
        "Tested here. Setup, version and date are stated so you can repeat it. The result holds for that setup, not automatically for others.",
    },
    law: {
      label: "Law",
      meaning:
        "Restates a named norm or official guidance, with the jurisdiction and when it was checked. Applying it to a specific case is labelled as assessment. Not legal advice.",
    },
    assessment: {
      label: "Assessment",
      meaning:
        "A professional judgement, forecast or observation from practice. The reasoning and its limits are stated so you can disagree with it.",
    },
    advice: {
      label: "Recommendation",
      meaning:
        "Deliberately conservative: what I would do in the situation described, and which of the levels above it rests on. Not a claim that other choices are impermissible.",
    },
  },
  de: {
    fact: {
      label: "Fakt",
      meaning:
        "Eng begrenzte, prüfbare Aussage aus einer verlinkten Primärquelle, mit dem Datum der letzten Prüfung. Wo die Quelle ein Anbieter über sich selbst ist, steht das dabei.",
    },
    measured: {
      label: "Gemessen",
      meaning:
        "Hier getestet. Aufbau, Version und Datum sind angegeben, damit du es wiederholen kannst. Das Ergebnis gilt für diesen Aufbau, nicht automatisch für andere.",
    },
    law: {
      label: "Rechtslage",
      meaning:
        "Gibt eine benannte Norm oder offizielle Leitlinie wieder, mit Rechtsraum und Prüfdatum. Die Anwendung auf einen konkreten Fall ist als Einschätzung gekennzeichnet. Keine Rechtsberatung.",
    },
    assessment: {
      label: "Einschätzung",
      meaning:
        "Eine fachliche Beurteilung, Prognose oder Praxisbeobachtung. Begründung und Grenzen stehen dabei, damit du widersprechen kannst.",
    },
    advice: {
      label: "Empfehlung",
      meaning:
        "Bewusst konservativ: was ich in der beschriebenen Lage tun würde, und auf welcher der Ebenen darüber es steht. Keine Aussage, dass andere Lösungen unzulässig wären.",
    },
  },
};

export const getEvidenceCopy = (locale: SiteLocale, level: EvidenceLevel): LevelCopy =>
  copy[locale][level];
