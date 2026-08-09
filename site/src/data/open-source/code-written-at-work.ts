/**
 * Who owns code written at work?
 *
 * Written because the answer that circulates — "the employer owns the
 * copyright" — is a US rule stated as a general one. In Austria and Germany
 * the employer acquires rights of use, not authorship, and the distinction
 * decides who may relicense a project later.
 *
 * Statutes read at the primary source on 2026-08-09. Restating them is `law`;
 * applying them to a particular employment is `assessment`, whoever writes it.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-09";

const AT_40B = "https://www.jusline.at/gesetz/urhg/paragraf/40b";
const DE_69B = "https://www.gesetze-im-internet.de/urhg/__69b.html";
const US_201 = "https://www.law.cornell.edu/uscode/text/17/201";

const en: Article = {
  title: "Who owns code written at work?",
  description:
    "The answer that circulates is a US rule. In Austria and Germany the employer acquires rights of use, not authorship — and that decides who may relicense a project.",
  lead: "“The employer owns it” is the version you will read most often, and it describes United States law. Austria and Germany reach a similar practical result by a different route, and the difference matters the moment someone wants to change a project's licence.",
  sections: [
    {
      heading: "Austria: an unlimited right of use, not the copyright",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Under § 40b of the Austrian Copyright Act, where an employee creates a computer program in fulfilment of their duties, the employer holds an unlimited right of use — an unbeschränktes Werknutzungsrecht — unless something else was agreed.",
        "The copyright itself does not move. Austrian law does not permit copyright to be transferred between living persons at all, and the author's right to claim authorship under § 19 is expressly untouched.",
        "The provision covers programs created while the employment exists. Code written before it started or after it ended is not caught by it.",
      ],
      links: [{ label: "§ 40b Austrian Copyright Act", href: AT_40B }],
    },
    {
      heading: "Germany: the economic rights",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "§ 69b of the German Copyright Act gives the employer exclusive entitlement to exercise all economic rights in a computer program created by an employee in the course of their duties.",
        "Again, not the copyright. German law separates authorship from the rights of exploitation, and only the second set moves.",
      ],
      links: [{ label: "§ 69b German Copyright Act", href: DE_69B }],
    },
    {
      heading: "United States: the employer is the author",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "For a work made for hire, 17 U.S.C. § 201(b) provides that “the employer or other person for whom the work was prepared is considered the author for purposes of this title”, and owns all of the rights in the copyright unless a signed agreement says otherwise.",
        "This is a genuinely different construction: not a transfer of rights from the author, but a rule about who the author is.",
      ],
      links: [{ label: "17 U.S.C. § 201(b)", href: US_201 }],
    },
    {
      heading: "Why the distinction is not academic",
      level: "assessment",
      paragraphs: [
        "Day to day the outcome looks the same: the employer can use, ship and license the software, and the developer cannot take it to the next job.",
        "It separates when a project changes licence. Relicensing needs the agreement of the rights holders, and who that is depends on which construction applies. Under a work-for-hire rule the employer decides alone. Under Austrian or German law the author is still the author, and what the employer holds is defined by the statute and by whatever the contract added to it.",
        "It also separates on attribution. The right to be named as author stays with the person who wrote the code, and no employment contract in Austria removes it.",
        "This is a sketch of a boundary, not advice on your situation. Which jurisdiction applies, what your contract says, and whether the work was within your duties are all questions a page cannot answer for you.",
      ],
    },
    {
      heading: "What to settle before you publish",
      level: "advice",
      paragraphs: [
        "If the code was written at work and you want to open-source it, get the employer's position in writing before the first public commit. Afterwards you are negotiating about something already published.",
        "If you accept outside contributions, decide early how inbound rights are handled — a Developer Certificate of Origin sign-off for most projects, a contributor licence agreement where relicensing or patents need to be enforceable in writing. Do not run both.",
        "If you are the employer, say in the contract which side of the line side projects fall on. The statutes cover work done in fulfilment of duties; everything else is argued after the fact.",
      ],
    },
  ],
};

const de: Article = {
  title: "Wem gehört Code, der im Job entsteht?",
  description:
    "Die Antwort, die kursiert, ist US-Recht. In Österreich und Deutschland bekommt der Arbeitgeber Nutzungsrechte, nicht die Urheberschaft — und davon hängt ab, wer ein Projekt umlizenzieren darf.",
  lead: "„Das gehört dem Arbeitgeber“ ist die Fassung, die man am häufigsten liest, und sie beschreibt das Recht der USA. Österreich und Deutschland kommen über einen anderen Weg zu einem ähnlichen praktischen Ergebnis, und der Unterschied zählt in dem Moment, in dem jemand die Lizenz eines Projekts ändern will.",
  sections: [
    {
      heading: "Österreich: unbeschränktes Werknutzungsrecht, nicht das Urheberrecht",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Nach § 40b UrhG steht dem Dienstgeber ein unbeschränktes Werknutzungsrecht zu, wenn ein Dienstnehmer ein Computerprogramm in Erfüllung seiner Dienstpflichten schafft und nichts anderes vereinbart wurde.",
        "Das Urheberrecht selbst wandert nicht mit. Es ist in Österreich unter Lebenden überhaupt nicht übertragbar, und der Anspruch auf Anerkennung der Urheberschaft nach § 19 bleibt ausdrücklich unberührt.",
        "Die Bestimmung erfasst Programme, die während des Dienstverhältnisses entstehen. Code von davor oder danach fällt nicht darunter.",
      ],
      links: [{ label: "§ 40b UrhG", href: AT_40B }],
    },
    {
      heading: "Deutschland: die vermögensrechtlichen Befugnisse",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "§ 69b UrhG räumt dem Arbeitgeber die ausschließliche Befugnis ein, alle vermögensrechtlichen Befugnisse an einem Computerprogramm auszuüben, das ein Arbeitnehmer in Wahrnehmung seiner Aufgaben geschaffen hat.",
        "Wieder nicht das Urheberrecht. Das deutsche Recht trennt Urheberschaft von Verwertungsrechten, und nur die zweite Gruppe geht über.",
      ],
      links: [{ label: "§ 69b UrhG", href: DE_69B }],
    },
    {
      heading: "USA: der Arbeitgeber gilt als Urheber",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Für ein work made for hire bestimmt 17 U.S.C. § 201(b), dass der Arbeitgeber als Urheber im Sinne des Gesetzes gilt und sämtliche Rechte am Urheberrecht hält, sofern nichts anderes schriftlich vereinbart ist.",
        "Das ist eine grundlegend andere Konstruktion: kein Rechteübergang vom Urheber, sondern eine Regel darüber, wer der Urheber ist.",
      ],
      links: [{ label: "17 U.S.C. § 201(b)", href: US_201 }],
    },
    {
      heading: "Warum der Unterschied nicht akademisch ist",
      level: "assessment",
      paragraphs: [
        "Im Alltag sieht das Ergebnis gleich aus: Der Arbeitgeber darf die Software nutzen, ausliefern und lizenzieren, und der Entwickler nimmt sie nicht mit zum nächsten Job.",
        "Es trennt sich, wenn ein Projekt die Lizenz wechselt. Umlizenzieren braucht die Zustimmung der Rechteinhaber, und wer das ist, hängt an der Konstruktion. Gilt work made for hire, entscheidet der Arbeitgeber allein. Nach österreichischem oder deutschem Recht bleibt der Urheber Urheber, und was der Arbeitgeber hält, bestimmen das Gesetz und das, was der Vertrag ergänzt hat.",
        "Es trennt sich auch bei der Namensnennung. Das Recht, als Urheber genannt zu werden, bleibt bei der Person, die den Code geschrieben hat, und kein österreichischer Arbeitsvertrag nimmt es ihr.",
        "Das ist die Skizze einer Grenze, keine Beratung zu deinem Fall. Welche Rechtsordnung gilt, was dein Vertrag sagt und ob die Arbeit zu deinen Dienstpflichten gehörte, kann eine Seite nicht für dich beantworten.",
      ],
    },
    {
      heading: "Was vor der Veröffentlichung geklärt sein sollte",
      level: "advice",
      paragraphs: [
        "Wenn der Code im Job entstanden ist und du ihn offenlegen willst: hol dir die Position des Arbeitgebers schriftlich, bevor der erste öffentliche Commit liegt. Danach verhandelst du über etwas bereits Veröffentlichtes.",
        "Wenn du fremde Beiträge annimmst, entscheide früh, wie die eingehenden Rechte geregelt sind — für die meisten Projekte ein Sign-off nach dem Developer Certificate of Origin, ein Contributor Licence Agreement dort, wo Umlizenzierung oder Patente schriftlich durchsetzbar sein müssen. Nicht beides parallel.",
        "Wenn du der Arbeitgeber bist: schreib in den Vertrag, auf welcher Seite der Grenze Nebenprojekte liegen. Die Gesetze erfassen Arbeit in Erfüllung der Dienstpflichten; alles andere wird hinterher ausgestritten.",
      ],
    },
  ],
};

export const getCodeWrittenAtWork = (locale: SiteLocale): Article => (locale === "de" ? de : en);
