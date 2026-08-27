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

/**
 * The AI section is newer and carries its own date. Directive 2009/24/EC,
 * § 69a(3) dUrhG, § 40a öUrhG, § 31(1) dUrhG, § 24(1) öUrhG, the US Copyright
 * Office's 2025 copyrightability report were read on 2026-08-27. It stays
 * deliberately narrow: code, publishing and licensing. Where the line falls
 * between what a person shaped and what the machine determined is judged case
 * by case, so the page says that rather than inventing a threshold, and makes
 * no claim about the state of case law anywhere.
 */
export const AI_CHECKED = "2026-08-27";

const AT_40B = "https://www.jusline.at/gesetz/urhg/paragraf/40b";
const DE_69B = "https://www.gesetze-im-internet.de/urhg/__69b.html";
const US_201 = "https://www.law.cornell.edu/uscode/text/17/201";
const SOFTWARE_DIRECTIVE = "https://eur-lex.europa.eu/eli/dir/2009/24/oj";
const DE_69A = "https://www.gesetze-im-internet.de/urhg/__69a.html";
const AT_40A = "https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001848&Paragraf=40a";
const DE_31 = "https://www.gesetze-im-internet.de/urhg/__31.html";
const AT_24 = "https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001848&Paragraf=24";
const USCO_REPORT = "https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf";

const en: Article = {
  title: "Who owns code written at work?",
  description:
    "The answer that circulates is a US rule. In Austria and Germany the employer acquires rights of use, not authorship — and that, plus what an AI wrote, decides who may relicense a project.",
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
      heading: "What if the AI wrote it?",
      level: "law",
      checked: AI_CHECKED,
      paragraphs: [
        "A licence grants what the licensor holds and nothing beyond it — § 31(1) in Germany and § 24(1) in Austria both describe it as something an author grants over a work. So the question before you publish is not whether the code runs. It is which parts of it you hold rights in.",
        "For a computer program the test is the same whether or not a tool helped write it. EU law protects it where it is original in the sense that it is the author's own intellectual creation — Art. 1(3) of the Software Directive, carried into § 69a(3) in Germany and § 40a in Austria — and Art. 2(1) frames the author as the natural person or persons who created it, save where a Member State's own law allows a legal person to be designated as rightholder. Where the result reflects your own creative choices, those human-authored parts may satisfy that originality test. Who may exercise the economic rights is a separate question, including the employment rules discussed on this page.",
        "What does not follow is that every generated line is yours to license because it appeared in your project. Where you cannot identify sufficient human authorship in a generated part, do not assume that part meets the copyright test or that you hold an exclusive right to license it. The United States has spelled this out for its own law: the Copyright Office holds that protection does not extend to purely AI-generated material, or to material over whose expressive elements a human had insufficient control, and that on current technology prompting alone does not supply that control.",
        "AI-assisted code can contain both kinds of contribution, and the boundary has to be assessed case by case rather than by a share of the lines. For publishing, the practical consequence is simpler: assume you can license only the parts for which human authorship and your right to license them are reasonably clear. Do not assume the rest.",
      ],
      links: [
        { label: "Directive 2009/24/EC — legal protection of computer programs", href: SOFTWARE_DIRECTIVE },
        { label: "§ 69a UrhG (Germany) — protection of computer programs", href: DE_69A },
        { label: "§ 40a UrhG (Austria) — computer programs", href: AT_40A },
        { label: "§ 31 UrhG (Germany) — granting rights of use", href: DE_31 },
        { label: "§ 24 UrhG (Austria) — licence and exclusive right of use", href: AT_24 },
        { label: "US Copyright Office — Copyright and Artificial Intelligence, Part 2", href: USCO_REPORT },
      ],
    },
    {
      heading: "Why the distinction is not academic",
      level: "assessment",
      paragraphs: [
        "Day to day the outcome looks the same: the employer can use, ship and license the software, and the developer cannot take it to the next job.",
        "It separates when a project changes licence. Relicensing needs the agreement of the rights holders, and who that is depends on which construction applies. Under a work-for-hire rule the employer decides alone. Under Austrian or German law the author is still the author, and what the employer holds is defined by the statute and by whatever the contract added to it.",
        "It also separates on attribution. The right to be named as author stays with the person who wrote the code, and no employment contract in Austria removes it.",
        "The same reasoning runs through the AI question above. Where no rights subsist in part of a file, a licence simply grants nothing over that part — it does not become void, and the code does not become unpublishable. Source files have always mixed protected and unprotected material. What does not change is everything else: third-party code that came along in the output, the project's own copyleft terms, and the vendor's terms of use are separate questions. And an employer cannot hold rights that never arose — § 40b in Austria and § 69b in Germany allocate the rights in a program, they do not create them.",
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
    "Die Antwort, die kursiert, ist US-Recht. In Österreich und Deutschland bekommt der Arbeitgeber Nutzungsrechte, nicht die Urheberschaft — davon und von dem, was eine KI geschrieben hat, hängt ab, wer ein Projekt umlizenzieren darf.",
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
      heading: "Und wenn die KI es geschrieben hat?",
      level: "law",
      checked: AI_CHECKED,
      paragraphs: [
        "Eine Lizenz räumt ein, was der Lizenzgeber hat, und nichts darüber hinaus — § 31 Abs. 1 in Deutschland und § 24 Abs. 1 in Österreich beschreiben sie beide als etwas, das der Urheber an einem Werk erteilt. Vor der Veröffentlichung steht deshalb nicht die Frage, ob der Code läuft, sondern an welchen Teilen davon du Rechte hältst.",
        "Für ein Computerprogramm gilt derselbe Maßstab, ob beim Schreiben ein Tool geholfen hat oder nicht. Das EU-Recht schützt es, wenn es insofern originell ist, als es das Ergebnis der eigenen geistigen Schöpfung seines Urhebers ist — Art. 1 Abs. 3 der Software-Richtlinie, umgesetzt in § 69a Abs. 3 in Deutschland und § 40a in Österreich. Als Urheber benennt Art. 2 Abs. 1 die natürliche Person oder die natürlichen Personen, die das Programm geschaffen haben, außer wo das Recht eines Mitgliedstaats erlaubt, eine juristische Person als Rechtsinhaberin zu bestimmen. Wo sich im Ergebnis deine eigenen gestalterischen Entscheidungen niederschlagen, können diese von dir geschaffenen Teile den Originalitätstest erfüllen. Wer die Verwertungsrechte ausüben darf, ist eine eigene Frage; dazu gehören auch die Regeln für Software, die im Arbeitsverhältnis entsteht.",
        "Daraus folgt nicht, dass dir jede generierte Zeile zur Lizenzierung gehört, nur weil sie in deinem Projekt gelandet ist. Wo sich bei einem generierten Teil keine ausreichende menschliche Urheberschaft feststellen lässt, solltest du nicht voraussetzen, dass dieser Teil urheberrechtlich geschützt ist oder dass du daran ein ausschließliches Recht zur Lizenzierung hältst. Die USA haben das für ihr eigenes Recht ausbuchstabiert: Das Copyright Office hält fest, dass sich der Schutz weder auf rein KI-generiertes Material erstreckt noch auf Material, bei dem ein Mensch die gestalterischen Elemente nicht hinreichend kontrolliert hat, und dass Prompten allein diese Kontrolle nach heutigem Stand der Technik nicht herstellt.",
        "In KI-gestütztem Code können beide Arten von Beitrag stecken, und die Grenze muss im Einzelfall beurteilt werden, nicht nach einem Anteil an Zeilen. Fürs Veröffentlichen ist die praktische Konsequenz einfacher: Geh nur dort davon aus, dass du etwas lizenzieren kannst, wo menschliche Urheberschaft und deine Berechtigung zur Lizenzierung nachvollziehbar sind. Beim Rest solltest du das nicht einfach annehmen.",
      ],
      links: [
        { label: "Richtlinie 2009/24/EG — Rechtsschutz von Computerprogrammen", href: SOFTWARE_DIRECTIVE },
        { label: "§ 69a UrhG (Deutschland) — Schutz von Computerprogrammen", href: DE_69A },
        { label: "§ 40a UrhG (Österreich) — Computerprogramme", href: AT_40A },
        { label: "§ 31 UrhG (Deutschland) — Einräumung von Nutzungsrechten", href: DE_31 },
        { label: "§ 24 UrhG (Österreich) — Werknutzungsbewilligung und Werknutzungsrecht", href: AT_24 },
        { label: "US Copyright Office — Copyright and Artificial Intelligence, Teil 2", href: USCO_REPORT },
      ],
    },
    {
      heading: "Warum der Unterschied nicht akademisch ist",
      level: "assessment",
      paragraphs: [
        "Im Alltag sieht das Ergebnis gleich aus: Der Arbeitgeber darf die Software nutzen, ausliefern und lizenzieren, und der Entwickler nimmt sie nicht mit zum nächsten Job.",
        "Auseinander läuft es erst, wenn ein Projekt die Lizenz wechselt. Umlizenzieren braucht die Zustimmung der Rechteinhaber, und wer das ist, hängt an der Konstruktion. Gilt work made for hire, entscheidet der Arbeitgeber allein. Nach österreichischem oder deutschem Recht bleibt der Urheber Urheber, und was der Arbeitgeber hält, bestimmen das Gesetz und das, was der Vertrag ergänzt hat.",
        "Auch bei der Namensnennung trennen sich die Wege. Das Recht, als Urheber genannt zu werden, bleibt bei der Person, die den Code geschrieben hat, und kein österreichischer Arbeitsvertrag nimmt es ihr.",
        "Dieselbe Überlegung trägt auch die KI-Frage von oben. Wo an einem Teil einer Datei keine Rechte bestehen, räumt eine Lizenz an diesem Teil eben nichts ein — unwirksam wird sie dadurch nicht, und unveröffentlichbar wird der Code auch nicht. In Quelldateien lagen schützbare und nicht schützbare Bestandteile schon immer nebeneinander. Was sich dadurch nicht erledigt, ist alles andere: fremder Code, der im Output mitgekommen ist, die Copyleft-Bedingungen des eigenen Projekts und die Nutzungsbedingungen des Anbieters bleiben eigene Fragen. Und ein Arbeitgeber kann keine Rechte halten, die nie entstanden sind — § 40b in Österreich und § 69b in Deutschland verteilen die Rechte an einem Programm, sie schaffen sie nicht.",
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
