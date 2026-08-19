/**
 * Shared shape for the site's explanatory articles.
 *
 * Every section carries an evidence level, and facts carry the date they were
 * last checked against the source. Vendor behaviour changes without notice, so
 * a page that states when it was verified is honest and one that does not is
 * merely confident.
 */
import type { EvidenceLevel } from "./evidence";

/**
 * Diagrams are described as data, not drawn as images, so they stay real text
 * for search and assistive technology and reflow at any width.
 */
export type ArticleFigure =
  | {
      kind: "journey";
      caption: string;
      stops: { label: string; detail: string }[];
      markIndex?: number;
      markLabel?: string;
    }
  | {
      kind: "reach";
      caption: string;
      rows: { target: string; state: string; reached: "yes" | "partial" | "no"; note: string }[];
    };

export interface ArticleSection {
  heading: string;
  /** Omitted for narrative sections that make no checkable claim of their own. */
  level?: EvidenceLevel;
  checked?: string;
  paragraphs: string[];
  list?: string[];
  figure?: ArticleFigure;
  links?: { label: string; href: string }[];
}

export interface Article {
  title: string;
  /** Optional standfirst. Blog titles may be evocative; this says plainly what
   *  the piece is about, for a reader scanning and for search results. */
  subtitle?: string;
  description: string;
  lead: string;
  sections: ArticleSection[];
}
