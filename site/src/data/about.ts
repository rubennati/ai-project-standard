/**
 * About: what the project is and who stands behind it.
 *
 * Deliberately weighted away from biography. What earns trust on a site that
 * makes legal and security claims is not a CV — it is a stated method the
 * reader can hold the pages against, and an honest account of where the site
 * stops. The person is one short section, not the subject.
 *
 * The method itself — levels, source ranking, check dates, corrections — is
 * owned by `/about/how-claims-are-checked` since 2026-08-27. This page keeps
 * a short bridge to it instead of a hand-typed second copy, which had already
 * drifted from the generated one. See `.ai/decisions.md`, 2026-08-27.
 */
import type { SiteLocale } from "../i18n/ui";

export interface AboutSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
  links?: { label: string; href: string }[];
}

const en: AboutSection[] = [
  {
    heading: "Why this exists",
    paragraphs: [
      "AI arrived in ordinary work through a text box. That is the whole problem in one sentence. Software that reaches your files, your clients' material and your credentials is now operated in plain language, by people who were never handed the questions that used to come with that kind of access.",
      "The result is two camps, and neither of them is thinking. One refuses to touch any of it. The other pastes whatever is on the clipboard and finds out later. Both positions are the same avoidance, arrived at from opposite directions.",
      "This site is the middle: establish where the data goes and what the rules are, then decide. Not whether AI is dangerous — that question has no useful answer — but the ones you hit on a Tuesday afternoon with a deadline. Where does this go. Whose is it. What does the law want from me. What do I set before I let an agent near a folder.",
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
    heading: "How claims are checked",
    paragraphs: [
      "Every section of every article carries a label saying what kind of claim it is making, and each label has conditions a claim must meet before it ships under it. The labels are the method, and they are what you should hold the pages against.",
      "The levels themselves, how sources are ranked, what a check date does and does not do, and what happens when a claim here is wrong have their own page.",
    ],
    links: [{ label: "How claims are checked", href: "/about/how-claims-are-checked" }],
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
      "The two are related but not the same. The repository is the narrower, technical subject; the site is the broader one. Where they overlap, the repository is the source: the site never contradicts it, and where a page here rests on something the repository holds, it links the original rather than retyping it.",
      "If you do not write software, none of it is required reading. Nothing on this site depends on it. If you do, and what you build is meant to be published or maintained, the open source articles carry that continuation.",
    ],
    links: [{ label: "Open source: what publishing code commits you to", href: "/open-source" }],
  },
  {
    heading: "Who writes it",
    paragraphs: [
      "Ruben Nati, working in cybersecurity in Vienna. The subjects here are the ones that come up in that work — which is why they are the questions people actually hit, rather than the ones that are comfortable to write about.",
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
    heading: "Wie Aussagen geprüft werden",
    paragraphs: [
      "Jeder Abschnitt jedes Beitrags trägt eine Kennzeichnung, welche Art von Aussage er macht — und jede Kennzeichnung hat Bedingungen, die eine Aussage erfüllen muss, bevor sie darunter erscheint. Diese Kennzeichnungen sind die Methode, und an ihnen solltest du die Seiten messen.",
      "Die Stufen selbst, die Gewichtung der Quellen, was ein Prüfdatum leistet und was nicht, und was geschieht, wenn eine Aussage hier falsch ist, stehen auf einer eigenen Seite.",
    ],
    links: [{ label: "Wie Aussagen geprüft werden", href: "/de/about/how-claims-are-checked" }],
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
      "Diese Seite wird aus einem öffentlichen Repository gebaut, und dieses Repository enthält noch etwas Zweites: Konventionen für die Arbeit mit KI an einer Codebasis — wie mehrere Tools dasselbe Projekt lesen, was ein Agent darf und was nicht, wie die Arbeit danach überprüfbar bleibt.",
      "Beides hängt zusammen, ist aber nicht dasselbe. Das Repository ist der engere, technische Gegenstand; die Seite der breitere. Wo sie sich überschneiden, ist das Repository die Quelle: Die Seite widerspricht ihm nie, und wo eine Seite hier auf etwas beruht, das im Repository liegt, verlinkt sie das Original, statt es abzutippen.",
      "Wer keine Software schreibt, muss davon nichts lesen. Nichts auf dieser Seite setzt es voraus. Wer Software schreibt, die veröffentlicht oder weiter betreut werden soll, findet diese Fortsetzung in den Open-Source-Beiträgen.",
    ],
    links: [{ label: "Open Source: worauf dich Veröffentlichen festlegt", href: "/de/open-source" }],
  },
  {
    heading: "Wer schreibt",
    paragraphs: [
      "Ruben Nati, tätig in der Cybersicherheit in Wien. Die Themen hier sind die, die in dieser Arbeit auftauchen — deshalb sind es die Fragen, auf die man tatsächlich stößt, und nicht die, über die sich bequem schreiben lässt.",
    ],
  },
];

export const getAbout = (locale: SiteLocale): AboutSection[] => (locale === "de" ? de : en);
