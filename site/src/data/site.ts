/**
 * Site-wide constants that are not translatable.
 *
 * These appear in more than one place — the footer, the legal notice, the
 * structured data — and drifting copies are the usual failure mode, so they
 * live here rather than being typed out per page.
 */
export const repoUrl = "https://github.com/rubennati/ai-project-standard";

/** Contact address published in the legal notice. */
export const contactEmail = "aistandard@m.rubennati.at";

/**
 * Operator details required by § 5 ECG and § 25 MedienG. Values are the same
 * in every locale; only the labels around them are translated.
 */
export const operator = {
  name: "Ruben-Paul Nati, MSc",
  company: "rnati it solutions e.U.",
  address: "Spittelauer Lände 25, 1090 Wien, Austria",
  companyRegister: "FN 510221a, Handelsgericht Wien",
  vatId: "ATU74404968",
};
