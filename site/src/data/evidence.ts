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
 * - `law`        the norm is named and its current text checked; not legal advice
 * - `assessment` a professional judgement, with the reasoning left visible
 * - `advice`     a recommendation, saying which level it rests on
 *
 * Vendor facts about AI tools rot quickly, which is why `fact` and `measured`
 * require a date. A claim without one is not wrong yet — it is unfalsifiable,
 * which is worse.
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
      meaning: "Checkable against a primary source, linked, with the date it was last checked.",
    },
    measured: {
      label: "Measured",
      meaning: "Tested here. Setup, version and date are stated so you can repeat it.",
    },
    law: {
      label: "Law",
      meaning: "Based on a named norm whose current text was checked. Not legal advice.",
    },
    assessment: {
      label: "Assessment",
      meaning: "A professional judgement. The reasoning is stated so you can disagree with it.",
    },
    advice: {
      label: "Recommendation",
      meaning: "What I would do, and which of the levels above it rests on.",
    },
  },
  de: {
    fact: {
      label: "Fakt",
      meaning: "Gegen eine Primärquelle prüfbar, verlinkt, mit dem Datum der letzten Prüfung.",
    },
    measured: {
      label: "Gemessen",
      meaning: "Hier getestet. Aufbau, Version und Datum sind angegeben, damit du es wiederholen kannst.",
    },
    law: {
      label: "Recht",
      meaning: "Stützt sich auf eine benannte Norm, deren aktueller Wortlaut geprüft wurde. Keine Rechtsberatung.",
    },
    assessment: {
      label: "Einschätzung",
      meaning: "Eine fachliche Beurteilung. Die Begründung steht dabei, damit du widersprechen kannst.",
    },
    advice: {
      label: "Empfehlung",
      meaning: "Was ich tun würde, und auf welcher der Ebenen darüber es steht.",
    },
  },
};

export const getEvidenceCopy = (locale: SiteLocale, level: EvidenceLevel): LevelCopy =>
  copy[locale][level];
