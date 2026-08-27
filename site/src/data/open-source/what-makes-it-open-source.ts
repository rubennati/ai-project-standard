/**
 * When is a project open source?
 *
 * The page exists because "the code is on GitHub" is treated as the answer,
 * and it is not the question. Openness is a property of the licence, and the
 * most common repository on GitHub carries none.
 *
 * The GitHub caveat is the part missing from most write-ups: platform terms
 * grant viewing and forking regardless of licence, which is why the absolute
 * "nobody may do anything without a licence" is wrong in the one place most
 * readers are standing.
 *
 * Checked against the primary sources on 2026-08-09.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-09";

const OSD = "https://opensource.org/osd";
const NO_PERMISSION = "https://choosealicense.com/no-permission/";
const GITHUB_TOS = "https://docs.github.com/en/site-policy/github-terms/github-terms-of-service";

const en: Article = {
  title: "When is a project open source?",
  description:
    "Public code is not open source. The licence decides, and a repository without one grants almost nothing — with one exception that applies on GitHub itself.",
  lead: "Open source is a property of the licence, not of the code being visible. A public repository with no licence file is not open source, and the difference has consequences for anyone who wants to use it.",
  sections: [
    {
      heading: "The definition is a document, and it has ten points",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "The Open Source Initiative publishes the Open Source Definition. It is currently at version 1.9, last modified on 22 March 2007 — worth knowing when you cite it, because the text is close to twenty years old and has not moved while the industry around it has.",
        "A licence has to meet all ten criteria. Failing one is enough to fall outside the definition.",
      ],
      list: [
        "Free redistribution",
        "Source code",
        "Derived works",
        "Integrity of the author's source code",
        "No discrimination against persons or groups",
        "No discrimination against fields of endeavour",
        "Distribution of licence",
        "Licence must not be specific to a product",
        "Licence must not restrict other software",
        "Licence must be technology-neutral",
      ],
      links: [{ label: "The Open Source Definition, version 1.9", href: OSD }],
    },
    {
      heading: "A non-commercial clause fails the definition",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Criterion 6 is the one that decides this. The definition states that a licence “must not restrict anyone from making use of the program in a specific field of endeavor”, and gives the example that it “may not restrict the program from being used in a business”.",
        "So a licence forbidding commercial use is not an open-source licence. The common term for that material is source-available: you can read it, and the terms are something else. Note that source-available is industry usage, not a term the OSI defines.",
      ],
      links: [{ label: "Criterion 6, no discrimination against fields of endeavour", href: OSD }],
    },
    {
      heading: "No licence means no permission",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Copyright is the default, not the exception. A creative work — code included — is under exclusive copyright from the moment it exists, and publishing it changes nothing about that.",
        "Without a licence, nobody else may copy, distribute or modify the work. Making a repository public is not a grant of rights; it is a decision about who can see it.",
      ],
      links: [{ label: "choosealicense.com — no permission granted", href: NO_PERMISSION }],
    },
    {
      heading: "On GitHub, two things are permitted anyway",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "The absolute version of the previous section is wrong in the place most people are standing. GitHub's Terms of Service, section D.5, have you grant every other user a licence to “use, display, perform and reproduce (by forking) Your Content through the Service” when you make a repository public.",
        "Viewing and forking on the platform are therefore permitted with no licence file at all. Everything beyond the platform — running it, shipping it, building on it — is not.",
        "Which makes the practical position for an unlicensed public repository narrow rather than empty: readable and forkable where it lives, unusable everywhere else.",
      ],
      links: [{ label: "GitHub Terms of Service, section D.5", href: GITHUB_TOS }],
    },
    {
      heading: "What this costs you if you skip it",
      level: "assessment",
      paragraphs: [
        "A repository without a licence is not a permissive default. It is the most restrictive setting available, chosen by accident. Anyone who wants to use your work has to either contact you or accept legal risk, and most will do neither.",
        "The fix takes a minute: pick an OSI-approved licence, put its full text in a file called LICENSE in the repository root. Which one to pick is the next question, and it is a real one.",
      ],
      links: [{ label: "OSI-approved licences", href: "https://opensource.org/licenses" }],
    },
  ],
};

const de: Article = {
  title: "Wann ist ein Projekt Open Source?",
  description:
    "Öffentlicher Code ist nicht Open Source. Entscheidend ist die Lizenz — und ein Repository ohne sie räumt fast nichts ein. Mit einer Ausnahme, die auf GitHub selbst gilt.",
  lead: "Open Source hängt an der Lizenz, nicht daran, dass man den Code sehen kann. Ein öffentliches Repository ohne Lizenzdatei ist nicht Open Source, und der Unterschied hat Folgen für jeden, der damit arbeiten will.",
  sections: [
    {
      heading: "Die Definition ist ein Dokument mit zehn Punkten",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Die Open Source Initiative veröffentlicht die Open Source Definition. Sie steht bei Version 1.9, zuletzt geändert am 22. März 2007. Das ist beim Zitieren erwähnenswert: Der Text ist knapp zwanzig Jahre alt und hat sich nicht bewegt, während die Branche um ihn herum das sehr wohl getan hat.",
        "Eine Lizenz muss alle zehn Kriterien erfüllen. Eines zu verfehlen genügt, um aus der Definition zu fallen.",
      ],
      list: [
        "Freie Weitergabe",
        "Quellcode",
        "Abgeleitete Werke",
        "Unversehrtheit des Quellcodes des Autors",
        "Keine Diskriminierung von Personen oder Gruppen",
        "Keine Diskriminierung von Einsatzbereichen",
        "Weitergabe der Lizenz",
        "Die Lizenz darf nicht auf ein Produkt bezogen sein",
        "Die Lizenz darf andere Software nicht einschränken",
        "Die Lizenz muss technologieneutral sein",
      ],
      links: [{ label: "Open Source Definition, Version 1.9", href: OSD }],
    },
    {
      heading: "Eine NC-Klausel fällt aus der Definition",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Kriterium 6 entscheidet das. Die Definition verlangt, dass eine Lizenz niemanden daran hindern darf, das Programm in einem bestimmten Einsatzbereich zu nutzen, und nennt als Beispiel ausdrücklich den Einsatz in einem Unternehmen.",
        "Eine Lizenz, die kommerzielle Nutzung untersagt, ist damit keine Open-Source-Lizenz. Der übliche Begriff für solches Material ist source-available: lesbar, aber die Bedingungen sind andere. Der Begriff stammt aus der Branche, nicht von der OSI.",
      ],
      links: [{ label: "Kriterium 6, keine Diskriminierung von Einsatzbereichen", href: OSD }],
    },
    {
      heading: "Keine Lizenz heißt keine Erlaubnis",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Das Urheberrecht ist der Normalfall, nicht die Ausnahme. Ein Werk — Code eingeschlossen — steht ab dem Moment seiner Entstehung unter dem ausschließlichen Recht des Urhebers, und Veröffentlichen ändert daran nichts.",
        "Ohne Lizenz darf niemand sonst das Werk kopieren, weitergeben oder verändern. Ein Repository öffentlich zu stellen ist keine Rechteeinräumung, sondern eine Entscheidung darüber, wer es sehen kann.",
      ],
      links: [{ label: "choosealicense.com — keine Rechte eingeräumt", href: NO_PERMISSION }],
    },
    {
      heading: "Auf GitHub sind zwei Dinge trotzdem erlaubt",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "In der absoluten Fassung stimmt der vorige Abschnitt ausgerechnet dort nicht, wo die meisten stehen. Machst du ein Repository öffentlich, räumst du nach Abschnitt D.5 der GitHub-Nutzungsbedingungen jedem anderen Nutzer eine nicht ausschließliche, weltweite Lizenz ein, deinen Inhalt über den Dienst zu nutzen, darzustellen, wiederzugeben und durch Forken zu vervielfältigen.",
        "Ansehen und Forken auf der Plattform sind also auch ganz ohne Lizenzdatei zulässig. Alles darüber hinaus — ausführen, ausliefern, darauf aufbauen — nicht.",
        "Die praktische Lage eines unlizenzierten öffentlichen Repositorys ist damit eng statt leer: lesbar und forkbar dort, wo es liegt, unbrauchbar überall sonst.",
      ],
      links: [{ label: "GitHub Terms of Service, Abschnitt D.5", href: GITHUB_TOS }],
    },
    {
      heading: "Was es kostet, das zu übergehen",
      level: "assessment",
      paragraphs: [
        "Ein Repository ohne Lizenz ist keine großzügige Voreinstellung. Es ist die restriktivste verfügbare, versehentlich gewählt. Wer damit arbeiten will, muss entweder nachfragen oder ein rechtliches Risiko tragen, und die meisten tun weder das eine noch das andere.",
        "Das Gegenmittel dauert eine Minute: eine OSI-anerkannte Lizenz wählen und ihren vollständigen Text als Datei LICENSE ins Wurzelverzeichnis legen. Welche das sein soll, ist die nächste Frage — und eine echte.",
      ],
      links: [{ label: "Von der OSI anerkannte Lizenzen", href: "https://opensource.org/licenses" }],
    },
  ],
};

export const getWhatMakesItOpenSource = (locale: SiteLocale): Article =>
  locale === "de" ? de : en;

/**
 * The page's closing sentence promises this exact question — "Which one to
 * pick is the next question, and it is a real one" — and used to point at
 * nothing. Now it points at the sibling that answers it.
 */
export interface OpenSourceNextStep {
  context?: string;
  label: string;
  description: string;
}

const nextStep: Record<SiteLocale, OpenSourceNextStep> = {
  en: {
    label: "Which licence, and what does it commit you to?",
    description:
      "Permissive, file-level copyleft, strong copyleft — what each obliges you to.",
  },
  de: {
    label: "Welche Lizenz — und worauf legt sie dich fest?",
    description:
      "Permissiv, dateiweises Copyleft, strenges Copyleft — was jede Kategorie verlangt.",
  },
};

export const getWhatMakesItOpenSourceNextStep = (locale: SiteLocale): OpenSourceNextStep =>
  nextStep[locale];
