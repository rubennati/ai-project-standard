/**
 * About: the idea, the method, and the limits.
 *
 * Deliberately weighted away from biography. What earns trust on a site that
 * makes legal and security claims is not a CV — it is a stated method the
 * reader can hold the pages against, and an honest account of where the site
 * stops. The person is one short section, not the subject.
 */
import type { SiteLocale } from "../i18n/ui";

export interface AboutSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

const en: AboutSection[] = [
  {
    heading: "Why this exists",
    paragraphs: [
      "AI arrived in ordinary work through a text box. That is the whole problem in one sentence. Software that reaches your files, your clients' material and your credentials is now operated in plain language, by people who were never handed the questions that used to come with that kind of access.",
      "The result is two camps, and neither of them is thinking. One refuses to touch any of it. The other pastes whatever is on the clipboard and finds out later. Both positions are the same avoidance, arrived at from opposite directions.",
      "This site is the middle: work out what actually happens, then decide. Not whether AI is dangerous — that question has no useful answer — but the ones you hit on a Tuesday afternoon with a deadline. Where does this go. Whose is it. What does the law want from me. What do I set before I let an agent near a folder.",
    ],
  },
  {
    heading: "The position it argues from",
    paragraphs: [
      "Privacy, security and legal compliance are treated here as defaults rather than features — the state you start from and knowingly depart from, not something added when someone asks. That is stated once, here, and then not repeated: a site that keeps announcing its principles is usually substituting them for work.",
      "It is not neutral. Neutrality between a checkable claim and a comfortable one is not fairness, it is evasion. Where the evidence points somewhere inconvenient, the page says so — that a European provider is not automatically the safer one, that a free tier is a business decision about your clients' material, that most of what is sold as trained on our data is a prompt and a search index.",
      "And it stays close to the ground. Every piece here comes from a question that actually came up in practice, not from a content plan.",
    ],
  },
  {
    heading: "How the site works",
    paragraphs: [
      "Every section of every article carries a label saying what kind of claim it is making. The labels are the method, and they are what you should hold the pages against:",
    ],
    list: [
      "Fact — checkable against a primary source, linked, with the date it was last checked.",
      "Measured — tested here, with the setup, version and date stated so you can repeat it.",
      "Law — resting on a named norm whose current text was checked. Never legal advice.",
      "Assessment — a professional judgement, with the reasoning left visible so you can disagree.",
      "Recommendation — what I would do, and which of the levels above it stands on.",
    ],
  },
  {
    heading: "Sources, dates and being wrong",
    paragraphs: [
      "Sources are primary or they are not used: the regulation rather than a summary of it, the vendor's own documentation rather than an article about it, the RFC rather than a blog post explaining the RFC. That rule has already caught an error here — an EU regulation was described as a provisional agreement because a Commission FAQ still said so, when the act had been in force for a week.",
      "Dates matter as much as sources. Vendor behaviour changes without announcement, so a factual claim without a check date is not wrong yet — it is unfalsifiable, which is worse. Every page that makes one carries one.",
      "Corrections are welcome and they are not a favour. Every page has a link that opens an issue with the page and its URL already filled in. If something here is wrong, that link is the fastest way to make it right, and the correction gets recorded rather than quietly patched.",
    ],
  },
  {
    heading: "What this site is not",
    paragraphs: [
      "It is not legal advice. Legal sections name the norm and say what it appears to require; whether it applies to your situation is a question for a lawyer, and the pages say so where it matters.",
      "It is not complete, and it does not pretend to be. Sections that are still being written say so instead of shipping filler.",
      "It is not a vendor comparison. Where vendors are named it is because a claim needed checking against them, not to rank them — and the pages say which ones were checked and which were not.",
    ],
  },
  {
    heading: "The repository underneath",
    paragraphs: [
      "This site is built from a public repository, and the repository holds a second thing: a set of conventions for working with AI on a codebase — how several tools read the same project, what an agent may and may not do, how work stays reviewable afterwards.",
      "The two are related but not the same. The repository is the narrower, technical subject; the site is the broader one. Where they overlap, the repository is the source: the site never contradicts it, and the documentation pages here are rendered straight from it rather than retyped.",
      "If you do not write software, none of it is required reading. Nothing on this site depends on it.",
    ],
  },
  {
    heading: "Who writes it",
    paragraphs: [
      "Ruben Nati, working in cybersecurity in Vienna. The subjects here are the ones that come up in that work, which is also the limit of what the site covers: this is a practitioner's view, not an institution's.",
    ],
  },
];

const de: AboutSection[] = [
  {
    heading: "Warum es diese Seite gibt",
    paragraphs: [
      "KI ist über ein Textfeld in den Arbeitsalltag gekommen. Darin steckt das ganze Problem. Software, die an deine Dateien, das Material deiner Kunden und deine Zugangsdaten reicht, wird jetzt in normaler Sprache bedient — von Menschen, denen nie jemand die Fragen mitgegeben hat, die früher zu solchem Zugriff dazugehörten.",
      "Das Ergebnis sind zwei Lager, und in keinem wird nachgedacht. Das eine fasst nichts davon an. Das andere kopiert hinein, was gerade in der Zwischenablage liegt, und merkt es später. Beide Haltungen sind dieselbe Vermeidung, nur von entgegengesetzten Seiten erreicht.",
      "Diese Seite ist die Mitte: erst herausfinden, was tatsächlich passiert, dann entscheiden. Nicht ob KI gefährlich ist — diese Frage hat keine brauchbare Antwort — sondern die, die an einem Dienstagnachmittag mit Termindruck auftauchen. Wohin geht das. Wem gehört es. Was verlangt das Gesetz von mir. Was stelle ich ein, bevor ich einen Agenten an einen Ordner lasse.",
    ],
  },
  {
    heading: "Die Position, aus der heraus argumentiert wird",
    paragraphs: [
      "Datenschutz, Sicherheit und Rechtskonformität gelten hier als Voreinstellung, nicht als Merkmal — der Zustand, in dem man beginnt und von dem man bewusst abweicht, nicht etwas, das ergänzt wird, wenn jemand danach fragt. Das steht einmal hier und wird dann nicht wiederholt: Eine Seite, die ihre Prinzipien dauernd verkündet, ersetzt damit meist die Arbeit.",
      "Sie ist nicht neutral. Neutralität zwischen einer belegbaren und einer bequemen Aussage ist keine Fairness, sondern Ausweichen. Wo die Belege in eine unangenehme Richtung zeigen, steht das da — dass ein europäischer Anbieter nicht automatisch der sicherere ist, dass ein Gratis-Tarif eine geschäftliche Entscheidung über Kundenmaterial ist, dass das meiste, was als „mit unseren Daten trainiert“ verkauft wird, ein Prompt und ein Suchindex ist.",
      "Und sie bleibt am Boden. Jeder Beitrag hier stammt aus einer Frage, die tatsächlich aufgekommen ist, nicht aus einem Redaktionsplan.",
    ],
  },
  {
    heading: "Wie die Seite arbeitet",
    paragraphs: [
      "Jeder Abschnitt jedes Beitrags trägt eine Kennzeichnung, welche Art von Aussage er macht. Diese Kennzeichnungen sind die Methode — und das, woran du die Seiten messen solltest:",
    ],
    list: [
      "Fakt — gegen eine Primärquelle prüfbar, verlinkt, mit dem Datum der letzten Prüfung.",
      "Gemessen — hier getestet, mit Aufbau, Version und Datum, damit du es wiederholen kannst.",
      "Recht — gestützt auf eine benannte Norm, deren aktueller Wortlaut geprüft wurde. Nie Rechtsberatung.",
      "Einschätzung — eine fachliche Beurteilung, deren Begründung offenliegt, damit du widersprechen kannst.",
      "Empfehlung — was ich tun würde, und auf welcher der Ebenen darüber es steht.",
    ],
  },
  {
    heading: "Quellen, Daten und Irrtümer",
    paragraphs: [
      "Quellen sind primär oder werden nicht verwendet: die Verordnung statt einer Zusammenfassung, die Herstellerdokumentation statt eines Artikels darüber, der RFC statt eines Blogbeitrags über den RFC. Diese Regel hat hier bereits einen Fehler gefangen — eine EU-Verordnung wurde als vorläufige Einigung beschrieben, weil eine Kommissions-FAQ das noch so sagte, während der Rechtsakt seit einer Woche in Kraft war.",
      "Daten wiegen so schwer wie Quellen. Anbieter ändern ihr Verhalten ohne Ankündigung. Eine Tatsachenaussage ohne Prüfdatum ist deshalb nicht falsch — sie ist unüberprüfbar, und das ist schlechter. Jede Seite, die eine macht, trägt eines.",
      "Korrekturen sind willkommen und kein Gefallen. Auf jeder Seite gibt es einen Link, der ein Issue mit Seite und URL bereits ausgefüllt öffnet. Wenn hier etwas falsch ist, ist das der schnellste Weg, es richtigzustellen — und die Korrektur wird festgehalten statt still nachgebessert.",
    ],
  },
  {
    heading: "Was diese Seite nicht ist",
    paragraphs: [
      "Sie ist keine Rechtsberatung. Rechtsabschnitte benennen die Norm und sagen, was sie zu verlangen scheint; ob sie auf deine Lage zutrifft, ist eine Frage für einen Anwalt — und wo es darauf ankommt, steht das dabei.",
      "Sie ist nicht vollständig und tut auch nicht so. Bereiche, die noch entstehen, sagen das, statt Füllmaterial auszuliefern.",
      "Sie ist kein Anbietervergleich. Wo Anbieter genannt werden, weil eine Aussage an ihnen zu prüfen war, steht dabei, welche geprüft wurden und welche nicht.",
    ],
  },
  {
    heading: "Das Repository darunter",
    paragraphs: [
      "Diese Seite wird aus einem öffentlichen Repository gebaut, und dieses Repository enthält noch etwas Zweites: Konventionen für die Arbeit mit KI an einer Codebasis — wie mehrere Werkzeuge dasselbe Projekt lesen, was ein Agent darf und was nicht, wie die Arbeit danach überprüfbar bleibt.",
      "Beides hängt zusammen, ist aber nicht dasselbe. Das Repository ist der engere, technische Gegenstand; die Seite der breitere. Wo sie sich überschneiden, ist das Repository die Quelle: Die Seite widerspricht ihm nie, und die Dokumentationsseiten hier werden direkt daraus erzeugt statt abgetippt.",
      "Wer keine Software schreibt, muss davon nichts lesen. Nichts auf dieser Seite setzt es voraus.",
    ],
  },
  {
    heading: "Wer schreibt",
    paragraphs: [
      "Ruben Nati, tätig in der Cybersicherheit in Wien. Die Themen hier sind die, die in dieser Arbeit auftauchen — und das ist zugleich die Grenze dessen, was die Seite abdeckt: die Sicht eines Praktikers, nicht die einer Institution.",
    ],
  },
];

export const getAbout = (locale: SiteLocale): AboutSection[] => (locale === "de" ? de : en);
