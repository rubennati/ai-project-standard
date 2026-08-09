/**
 * Which licence, and what does it commit you to?
 *
 * Three categories, and the one measurement worth citing. The adoption figures
 * are here because the widely repeated "the GPL is the most used licence" has
 * been false for about a decade, and because both available measurements come
 * with limits their own authors state — which is the interesting part.
 *
 * Checked against the primary sources on 2026-08-09.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-09";

const MPL_FAQ = "https://www.mozilla.org/en-US/MPL/2.0/FAQ/";
const REDMONK = "https://redmonk.com/sogrady/2026/03/25/open-source-licensing-2026/";
const OSI_TOP = "https://opensource.org/blog/top-open-source-licenses-in-2025";
const OSI_LICENSES = "https://opensource.org/licenses";

const en: Article = {
  title: "Which licence, and what does it commit you to?",
  description:
    "Permissive, file-level copyleft, strong copyleft — what each obliges, and what the licence-adoption numbers do and do not support.",
  lead: "Open-source licences differ in one main respect: whether someone who modifies your code has to publish their changes under the same terms. Everything else follows from that.",
  sections: [
    {
      heading: "Three categories, one question",
      level: "assessment",
      paragraphs: [
        "Permissive licences — MIT, BSD, Apache 2.0 — require only that the copyright and licence notice survive. Modified versions may ship under different terms, proprietary ones included.",
        "Strong copyleft — the GNU GPL — requires modified versions to be distributed under the same licence. The obligation travels with the code.",
        "Between them sits file-level copyleft, and it is the category most often described wrongly.",
        "These names are working vocabulary, not an official taxonomy. The OSI approves licences; it does not sort them into tiers.",
      ],
    },
    {
      heading: "File-level copyleft is narrower than it sounds",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "The Mozilla Public License is the common example. Its copyleft binds per file: modify an MPL-licensed file and your modification stays under the MPL.",
        "Mozilla's own FAQ states that “new files containing no MPL-licensed code are not Modifications, and therefore do not need to be distributed under the terms of the MPL”, which allows MPL code to be “statically linked to and distributed as part of a larger proprietary piece of software”.",
        "So the middle category is real: share back what you changed, keep what you wrote.",
      ],
      links: [{ label: "Mozilla Public License 2.0 FAQ", href: MPL_FAQ }],
    },
    {
      heading: "Permissive licences have been the majority for about a decade",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "The claim that the GPL is the most widely used open-source licence circulates constantly and has been false for years. RedMonk's 2026 analysis puts permissive licences at 82% in 2022 and 73% in 2025, and dates the crossover from a copyleft majority to a permissive one to somewhere between 2014 and 2017.",
        "The Open Source Initiative's own 2025 ranking has MIT first by a wide margin, then Apache 2.0 and the BSD licences, with GPL-2.0 fifth.",
      ],
      figure: {
        kind: "reach",
        caption: "What each measurement can and cannot tell you",
        rows: [
          {
            target: "RedMonk 2026",
            state: "Repository and package data, 2011–2025",
            reached: "partial",
            note: "The author states that 80% or more of repositories carry no licence at all and are not counted, and that recent samples are small. Good for the trend, not for a precise figure.",
          },
          {
            target: "OSI ranking 2025",
            state: "Pageviews on opensource.org",
            reached: "partial",
            note: "Measures interest in a licence text, not its use in shipped software. The post says so itself, and excludes bot traffic that runs orders of magnitude higher.",
          },
          {
            target: "A single authoritative number",
            state: "Does not exist",
            reached: "no",
            note: "No census covers all repositories, all package ecosystems and all private code. Anyone quoting one figure to the percentage point is quoting one sample.",
          },
        ],
      },
      links: [
        { label: "RedMonk — The State of Open Source Licensing in 2026", href: REDMONK },
        { label: "OSI — Top open source licences in 2025", href: OSI_TOP },
      ],
    },
    {
      heading: "Choosing one",
      level: "advice",
      paragraphs: [
        "Want the widest possible use, including by companies who will not open their own code? Permissive. MIT if you want it short, Apache 2.0 if you want an explicit patent grant.",
        "Want improvements to come back? Copyleft. MPL if the code will be embedded in larger products, GPL if you want the whole derived work to stay open.",
        "Whichever you pick, take the full text from the OSI list rather than writing your own. A licence you drafted is a licence nobody's legal department has ever read.",
        "This rests on the categories above, which are checkable. Which of them fits your project is a judgement about your goals, and nobody else can make it for you.",
      ],
      links: [{ label: "OSI-approved licences", href: OSI_LICENSES }],
    },
    {
      heading: "The grant does not come back",
      level: "assessment",
      paragraphs: [
        "One property of this choice is easy to miss until it matters: rights already granted cannot simply be withdrawn. Everyone who received a copy under a licence keeps what that licence gave them.",
        "You can stop maintaining a project, licence future versions differently, or take the repository down. None of that reaches the copies already out there, and anyone holding one may keep using and redistributing it on the original terms.",
        "So a licence is not a setting you revise later. It is closer to a publication: reversible for what comes next, permanent for what has already gone out.",
      ],
    },
  ],
};

const de: Article = {
  title: "Welche Lizenz — und worauf legt sie dich fest?",
  description:
    "Permissiv, dateiweises Copyleft, strenges Copyleft: was jede Kategorie verlangt, und was die Verbreitungszahlen hergeben und was nicht.",
  lead: "Open-Source-Lizenzen unterscheiden sich vor allem in einem Punkt: ob jemand, der deinen Code ändert, seine Änderungen unter denselben Bedingungen veröffentlichen muss. Alles Weitere folgt daraus.",
  sections: [
    {
      heading: "Drei Kategorien, eine Frage",
      level: "assessment",
      paragraphs: [
        "Permissive Lizenzen — MIT, BSD, Apache 2.0 — verlangen nur, dass Urheber- und Lizenzhinweis erhalten bleiben. Veränderte Fassungen dürfen unter anderen Bedingungen weitergegeben werden, auch unter proprietären.",
        "Strenges Copyleft — die GNU GPL — verlangt, dass veränderte Fassungen unter derselben Lizenz weitergegeben werden. Die Pflicht wandert mit dem Code.",
        "Dazwischen liegt das dateiweise Copyleft, und diese Kategorie wird am häufigsten falsch beschrieben.",
        "Die Bezeichnungen sind Arbeitsvokabular, keine amtliche Einteilung. Die OSI erkennt Lizenzen an; sie sortiert sie nicht in Stufen.",
      ],
    },
    {
      heading: "Dateiweises Copyleft reicht weniger weit als der Name nahelegt",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Das übliche Beispiel ist die Mozilla Public License. Ihr Copyleft bindet pro Datei: Wer eine MPL-lizenzierte Datei ändert, gibt seine Änderung unter der MPL weiter.",
        "Die FAQ von Mozilla hält fest, dass neue Dateien ohne MPL-lizenzierten Code keine Modifikationen sind und deshalb nicht unter der MPL weitergegeben werden müssen — MPL-Code darf also statisch gebunden und als Teil einer größeren proprietären Software ausgeliefert werden.",
        "Die mittlere Kategorie ist damit real: zurückgeben, was du geändert hast, behalten, was du selbst geschrieben hast.",
      ],
      links: [{ label: "FAQ zur Mozilla Public License 2.0", href: MPL_FAQ }],
    },
    {
      heading: "Permissive Lizenzen sind seit rund einem Jahrzehnt in der Mehrheit",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Die Behauptung, die GPL sei die meistverwendete Open-Source-Lizenz, kursiert unablässig und stimmt seit Jahren nicht mehr. Die RedMonk-Auswertung von 2026 nennt 82 % permissive Lizenzen für 2022 und 73 % für 2025 und datiert den Umschwung von einer Copyleft-Mehrheit zu einer permissiven auf einen Zeitpunkt zwischen 2014 und 2017.",
        "Das Ranking der Open Source Initiative für 2025 führt MIT mit deutlichem Abstand an, dann Apache 2.0 und die BSD-Lizenzen, GPL-2.0 auf Platz fünf.",
      ],
      figure: {
        kind: "reach",
        caption: "Was die einzelnen Messungen hergeben — und was nicht",
        rows: [
          {
            target: "RedMonk 2026",
            state: "Repository- und Paketdaten, 2011–2025",
            reached: "partial",
            note: "Der Autor hält selbst fest, dass 80 % und mehr aller Repositories gar keine Lizenz tragen und nicht mitgezählt werden und dass die jüngeren Stichproben klein sind. Gut für den Trend, nicht für eine genaue Zahl.",
          },
          {
            target: "OSI-Ranking 2025",
            state: "Seitenaufrufe auf opensource.org",
            reached: "partial",
            note: "Misst das Interesse an einem Lizenztext, nicht dessen Einsatz in ausgelieferter Software. Der Beitrag sagt das selbst und rechnet Bot-Zugriffe heraus, die um Größenordnungen höher liegen.",
          },
          {
            target: "Eine einzige belastbare Zahl",
            state: "Gibt es nicht",
            reached: "no",
            note: "Keine Erhebung deckt alle Repositories, alle Paket-Ökosysteme und allen nicht öffentlichen Code ab. Wer eine Zahl auf den Prozentpunkt genau nennt, zitiert eine Stichprobe.",
          },
        ],
      },
      links: [
        { label: "RedMonk — The State of Open Source Licensing in 2026", href: REDMONK },
        { label: "OSI — Top Open Source Licenses in 2025", href: OSI_TOP },
      ],
    },
    {
      heading: "Eine auswählen",
      level: "advice",
      paragraphs: [
        "Möglichst breite Nutzung erwünscht, auch durch Unternehmen, die ihren eigenen Code nicht öffnen? Permissiv. MIT, wenn es kurz sein soll, Apache 2.0, wenn eine ausdrückliche Patentlizenz dabei sein soll.",
        "Verbesserungen sollen zurückkommen? Copyleft. MPL, wenn der Code in größere Produkte eingebettet wird, GPL, wenn das gesamte abgeleitete Werk offen bleiben soll.",
        "Egal welche: nimm den vollständigen Text aus der OSI-Liste, statt selbst zu formulieren. Eine selbstgeschriebene Lizenz ist eine, die noch keine Rechtsabteilung je gelesen hat.",
        "Das stützt sich auf die Kategorien oben, die überprüfbar sind. Welche davon zu deinem Projekt passt, ist eine Abwägung deiner Ziele — die kann dir niemand abnehmen.",
      ],
      links: [{ label: "Von der OSI anerkannte Lizenzen", href: OSI_LICENSES }],
    },
    {
      heading: "Die Einräumung kommt nicht zurück",
      level: "assessment",
      paragraphs: [
        "Eine Eigenschaft dieser Entscheidung wird leicht übersehen, bis sie zählt: Einmal eingeräumte Rechte lassen sich nicht einfach zurücknehmen. Wer eine Kopie unter einer Lizenz erhalten hat, behält, was diese Lizenz ihm gab.",
        "Du kannst die Pflege einstellen, künftige Versionen anders lizenzieren oder das Repository offline nehmen. Nichts davon erreicht die Kopien, die bereits draußen sind — wer eine hält, darf sie zu den ursprünglichen Bedingungen weiter nutzen und weitergeben.",
        "Eine Lizenz ist deshalb keine Einstellung, die man später revidiert. Sie ist eher eine Veröffentlichung: umkehrbar für das Kommende, endgültig für das, was schon hinausgegangen ist.",
      ],
    },
  ],
};

export const getChoosingALicence = (locale: SiteLocale): Article => (locale === "de" ? de : en);
