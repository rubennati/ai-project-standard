/**
 * Shared shape for the site's explanatory articles.
 *
 * Every section carries an evidence level, and facts carry the date they were
 * last checked against the source. Vendor behaviour changes without notice, so
 * a page that states when it was verified is honest and one that does not is
 * merely confident.
 */
import type { EvidenceLevel } from "./evidence";

export interface ArticleSection {
  heading: string;
  level: EvidenceLevel;
  checked?: string;
  paragraphs: string[];
  list?: string[];
  links?: { label: string; href: string }[];
}

export interface Article {
  title: string;
  description: string;
  lead: string;
  sections: ArticleSection[];
}
