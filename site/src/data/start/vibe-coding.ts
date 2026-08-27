/**
 * How far vibe coding takes you.
 *
 * The second page built from the page-primitives system, chosen because it
 * tests a different editorial problem from the first. "Connect AI to tools and
 * data" moves through the product spine in sequence; this page's primary axis
 * is the four contexts in `docs/website-product-brief.md` — Explore,
 * Prototype, Deliver, Operate — and the spine dimensions apply inside each of
 * them instead.
 *
 * Nothing here is a vendor or specification claim, so the page carries a
 * recommendation band rather than fact evidence. The stages are this project's
 * model, not a standard, and the band says so.
 *
 * The page said in its opening that stopping at Explore or Prototype is a
 * complete outcome, and then every block after the stage grid served only the
 * reader moving up: three transitions, a stop condition, an artifact that is
 * the Deliver frame, and an onward step about granting an agent access. A
 * quarter of the page, all of it tightening, and no structure anywhere saying
 * what finishing looks like for the two stages the lead had committed to.
 * "Stopping here is a result" is that structure. It is not a new claim — it is
 * the Explore and Prototype "good enough when" values, given a block of their
 * own — and the transitions are now conditional rather than the next thing
 * that happens.
 *
 * The section eyebrows are gone. `Possibility` and `Collaboration` were the
 * product brief's spine stages rendered as public labels, and `Stage` tagged
 * each capability card with a position on a ladder before the reader had read
 * the ladder. Explore, Prototype, Deliver and Operate stay: they are the
 * page's actual subject and ordinary words, not internal vocabulary. Nothing
 * replaced the eyebrows, because a different taxonomy would be the same
 * mistake.
 */
import type { SiteLocale } from "../../i18n/ui";
import type { ArtifactStatus } from "../page-primitives";

export const REVIEWED = "2026-08-18";

interface Opportunity {
  title: string;
  outcome: string;
}

interface Stage {
  name: string;
  work: string;
  ai: string;
  human: string;
  check: string;
}

interface Transition {
  title: string;
  question: string;
  reason: string;
}

export interface VibeCodingContent {
  title: string;
  description: string;
  answer: string;
  lead: string;
  fit: string;
  reviewedLabel: string;

  possibilityHeading: string;
  possibilityLead: string;
  opportunities: Opportunity[];
  outcomeLabel: string;

  stagesHeading: string;
  stagesLead: string;
  stages: Stage[];
  workLabel: string;
  aiLabel: string;
  humanLabel: string;
  checkLabel: string;
  stagesEvidence: string;

  stoppingHeading: string;
  stoppingParagraphs: string[];

  transitionsHeading: string;
  transitionsLead: string;
  transitions: Transition[];
  /**
   * One sentence closing the transitions: Deliver can mean publishing the
   * code itself, and the licence and ownership questions that raises are
   * owned by `/open-source` — the primary inbound path to that family.
   * See `.ai/decisions.md`, 2026-08-24 and 2026-08-27.
   */
  publishing: { text: string; label: string };

  unsafeDescription: string;
  unsafeAlternative: string;

  artifactTitle: string;
  artifactDescription: string;
  /** The blueprint's canonical status key, not a word to render. */
  artifactStatus: ArtifactStatus;

  nextTitle: string;
  nextDescription: string;
  nextSecondaryTitle: string;
}

export const artifactHref =
  "https://github.com/rubennati/ai-project-standard/tree/main/blueprints/ai-assisted-development";

const en: VibeCodingContent = {
  title: "How far vibe coding takes you",
  description:
    "When leaning on AI generation is enough, what changes once other people depend on the result, and how to tell whether it is good enough for the stage it is in.",
  answer:
    "Vibe coding is a legitimate way to build, and the structure it needs follows from the consequence of the result rather than from how the code was written. Explore and prototype freely. Add ownership, review and tests before other people depend on it, and monitoring and a restore you have actually run once it works without you watching.",
  lead: "Vibe coding means leaning on AI generation and shaping the result as you go, with less planned in advance. It reaches something that runs far faster than reading first does, and for learning a domain or testing an idea that is exactly the right trade. The four stages below are not skill levels and not a ladder. Stopping at Explore or Prototype is a complete outcome in its own right. What moves a piece of work along is who depends on it, what it holds, and what happens when it is wrong.",
  fit: "You are learning something, testing an assumption, or building something other people will end up depending on.",
  reviewedLabel: "Reviewed",

  possibilityHeading: "What working this way gets you",
  possibilityLead:
    "The gain sits at the front of the work: you find out whether an idea holds while it is still cheap to drop. Four kinds of work benefit most.",
  opportunities: [
    {
      title: "Learn an unfamiliar domain",
      outcome:
        "Get a working example in a language, framework or API you have never used, then read it back to understand the shape of the thing.",
    },
    {
      title: "Test an assumption cheaply",
      outcome:
        "Put the risky part in front of a real input this week, instead of designing around a guess for a month.",
    },
    {
      title: "Do the work nobody wants",
      outcome:
        "Produce the migration, the fixture data, the one-off report or the glue that nobody will read twice.",
    },
    {
      title: "Get started on an empty repository",
      outcome:
        "Stand up a skeleton that builds, runs and deploys, then slow down deliberately at the parts that carry consequence.",
    },
  ],
  outcomeLabel: "What it enables",

  stagesHeading: "What changes when other people depend on it",
  stagesLead:
    "The same person, the same tools and the same amount of AI can sit at any of these. What changes is who is affected when the result is wrong, and with it what you own and what counts as good enough.",
  stages: [
    {
      name: "Explore",
      work: "You are finding out how something behaves. The output is understanding; the code is a by-product you expect to discard.",
      ai: "Generates whole attempts, explains what it produced, and rewrites on a sentence of feedback.",
      human: "The question being asked, and the judgement that the answer is plausible enough to act on.",
      check: "You can say what you learned without rerunning the code, and nothing outside your own machine changed.",
    },
    {
      name: "Prototype",
      work: "You are testing one assumption against something real: an input, a user, a dataset, a rate limit.",
      ai: "Produces the version that makes the test possible, including the parts you would not have bothered to write.",
      human: "What is being tested, what result would falsify it, and the decision to keep or drop what comes back.",
      check: "The assumption is answered either way, and the limits are written where the next person looks — including that this is a prototype.",
    },
    {
      name: "Deliver",
      work: "Other people depend on the result. It has a maintenance life, and someone who did not write it will change it.",
      ai: "Drafts, refactors and explains inside a reviewed change, and writes the test that fails without the fix.",
      human: "Ownership of the result: the review, the decisions and their reasons, and the parts that may not be guessed — authentication, personal data, money, deletion.",
      check: "A second person can review the change and say why it is the way it is, and a wrong change is stopped before it reaches the default branch.",
    },
    {
      name: "Operate",
      work: "It runs without you watching, and it fails while you are asleep.",
      ai: "Helps to diagnose, reproduce and draft the fix at the speed an incident needs.",
      human: "Being answerable when it breaks: who is called, what it is restored from, and what may change while it is live.",
      check: "You have restored from the backup and stopped a release in a rehearsal, not in a plan.",
    },
  ],
  workLabel: "The work",
  aiLabel: "What the AI does",
  humanLabel: "What stays yours",
  checkLabel: "Good enough when",
  stagesEvidence:
    "The stages and their checks are a recommendation drawn from this project's own practice, not a standard. They rest on one assessment: assurance should match the consequence of failure. A team carrying regulatory duties, safety impact or a larger blast radius will draw the lines earlier than this.",

  stoppingHeading: "Stopping here is a result",
  stoppingParagraphs: [
    "Most of what gets built this way is meant to end at Explore or Prototype, and finishing there is not stopping short. An exploration is done when you can say what you learned without rerunning the code, and nothing outside your own machine changed. A prototype is done when the assumption is answered either way, and the limits are written where the next person looks — including that this is a prototype.",
    "Neither of those owes anyone tests, a review or a restore rehearsal. The rest of this page is for the case where the work does not stop there.",
  ],

  transitionsHeading: "What to make explicit if it moves on",
  transitionsLead:
    "Nothing forces a stage change, and plenty of work never has one. When it does happen it happens quietly, which is why each boundary is worth naming in advance rather than recognising afterwards.",
  transitions: [
    {
      title: "Explore to Prototype",
      question: "What exactly is being tested, and which result would make you drop it?",
      reason:
        "Without a falsifying answer, an exploration becomes a demo that keeps getting extended.",
    },
    {
      title: "Prototype to Deliver",
      question: "Who depends on this now, and what does it hold that they cannot lose?",
      reason:
        "This one can happen without anyone deciding it: a prototype acquires users, the label stays behind, and the obligations change anyway.",
    },
    {
      title: "Deliver to Operate",
      question: "When it breaks at three in the morning, who is called and what do they restore from?",
      reason:
        "Running unattended is a commitment about availability and recovery, not a deployment step.",
    },
  ],
  publishing: {
    text: "One form of Deliver is publishing the code itself. That raises questions of their own — what a licence permits, what it obliges you to, and who holds the rights to code written in a job.",
    label: "Open source: what publishing commits you to",
  },

  unsafeDescription:
    "Real users, personal data or another team's work now depend on something that is still being maintained as a prototype. The stage changed without anything being promoted, and the assurance around the code did not change with it.",
  unsafeAlternative:
    "Stop adding features. Write down what it holds and who depends on it, then bring it to the stage it is actually in: tests on the paths that would hurt, a review a second person can perform, and a restore you have run rather than planned.",

  artifactTitle: "AI-assisted development",
  artifactDescription:
    "The frame an agent works inside once a repository has to stay reviewable: what it decides itself, when it stops and asks, what it may never do, and what must be verified before anything reaches the default branch.",
  artifactStatus: "draft",

  nextTitle: "Checking the result",
  nextDescription:
    "How to tell whether what came back is right — an answer, a change, or an action that has already happened.",
  nextSecondaryTitle: "Before you give an AI agent access",
};

const de: VibeCodingContent = {
  title: "Wie weit Vibe Coding trägt",
  description:
    "Wann es reicht, sich beim Bauen auf KI-Generierung zu stützen, was sich ändert, sobald andere davon abhängen, und woran du merkst, dass das Ergebnis für seine Phase gut genug ist.",
  answer:
    "Vibe Coding ist eine legitime Art zu bauen. Wie viel Struktur nötig ist, ergibt sich aus den Folgen des Ergebnisses und nicht daraus, wie der Code entstanden ist. Erkunde und bau Prototypen, so viel du willst. Verantwortung, Review und Tests kommen dazu, bevor andere sich darauf verlassen — Monitoring und ein tatsächlich geprobter Restore, sobald es ohne dich läuft.",
  lead: "Vibe Coding heißt, stark auf KI-Generierung zu setzen und das Ergebnis unterwegs zu formen, statt vorher viel zu planen. Damit steht schneller etwas Laufendes da, als wenn du dich erst einliest, und um ein Thema zu lernen oder eine Idee zu prüfen, ist das genau der richtige Tausch. Die vier Phasen unten sind keine Könnensstufen und keine Leiter. Bei Erkunden oder Prototyp aufzuhören ist ein vollwertiges Ergebnis. Weiter rückt eine Arbeit erst, wenn andere von ihr abhängen, wenn sie etwas enthält, das nicht verloren gehen darf, oder wenn ein Fehler teuer wird.",
  fit: "Du lernst etwas, prüfst eine Annahme oder baust etwas, auf das sich später andere verlassen werden.",
  reviewedLabel: "Geprüft",

  possibilityHeading: "Was dir diese Arbeitsweise bringt",
  possibilityLead:
    "Der Gewinn liegt am Anfang der Arbeit: Du merkst früh, ob eine Idee trägt, solange das Verwerfen noch billig ist. Vier Arten von Arbeit profitieren besonders.",
  opportunities: [
    {
      title: "Ein fremdes Thema lernen",
      outcome:
        "Ein laufendes Beispiel in einer Sprache, einem Framework oder einer API, die du noch nie benutzt hast — und danach liest du es zurück, um die Struktur zu verstehen.",
    },
    {
      title: "Eine Annahme billig prüfen",
      outcome:
        "Den riskanten Teil noch diese Woche gegen eine echte Eingabe stellen, statt einen Monat lang um eine Vermutung herum zu entwerfen.",
    },
    {
      title: "Die ungeliebte Arbeit erledigen",
      outcome:
        "Die Migration, die Testdaten, den einmaligen Report oder den Glue-Code schreiben, den niemand ein zweites Mal liest.",
    },
    {
      title: "Den Anfang hinter dich bringen",
      outcome:
        "Ein Gerüst hinstellen, das baut, läuft und deployt — und danach bewusst langsamer werden, wo es Folgen hat.",
    },
  ],
  outcomeLabel: "Was möglich wird",

  stagesHeading: "Was sich ändert, sobald andere davon abhängen",
  stagesLead:
    "Dieselbe Person, dieselben Tools und gleich viel KI können in jeder dieser Phasen stecken. Was sich ändert, ist die Frage, wen ein falsches Ergebnis trifft — und damit, wofür du geradestehst und was gut genug heißt.",
  stages: [
    {
      name: "Erkunden",
      work: "Du findest heraus, wie sich etwas verhält. Das Ergebnis ist Verständnis; der Code fällt dabei ab und darf weg.",
      ai: "Erzeugt ganze Versuche, erklärt das Erzeugte und schreibt es nach einem Satz Rückmeldung neu.",
      human: "Die Frage, die du stellst, und das Urteil, ob die Antwort plausibel genug ist, um damit weiterzuarbeiten.",
      check: "Du kannst sagen, was du gelernt hast, ohne den Code noch einmal laufen zu lassen — und außerhalb deines Rechners hat sich nichts verändert.",
    },
    {
      name: "Prototyp",
      work: "Du prüfst eine Annahme gegen etwas Echtes: eine Eingabe, eine Nutzerin, einen Datenbestand, ein Limit.",
      ai: "Baut die Fassung, die den Test überhaupt möglich macht — auch die Teile, die du dir sonst gespart hättest.",
      human: "Was geprüft wird, welches Ergebnis die Annahme widerlegen würde, und die Entscheidung, das Ergebnis zu behalten oder zu verwerfen.",
      check: "Die Annahme ist beantwortet, so oder so, und die Grenzen stehen dort, wo die nächste Person nachsieht — einschließlich des Hinweises, dass es ein Prototyp ist.",
    },
    {
      name: "Ausliefern",
      work: "Andere verlassen sich auf das Ergebnis. Es wird über Jahre gepflegt, und irgendwann ändert es jemand, der es nicht geschrieben hat.",
      ai: "Entwirft, räumt auf und erklärt innerhalb einer geprüften Änderung — und schreibt den Test, der ohne die Korrektur fehlschlägt.",
      human: "Die Verantwortung für das Ergebnis: Review, die Entscheidungen samt Begründung und die Stellen, die nicht geraten werden dürfen — Anmeldung, personenbezogene Daten, Geld, Löschung.",
      check: "Eine zweite Person kann die Änderung prüfen und sagen, warum sie so aussieht — und eine falsche Änderung wird gestoppt, bevor sie den Hauptzweig erreicht.",
    },
    {
      name: "Betreiben",
      work: "Es läuft, ohne dass jemand zusieht, und es fällt aus, während du schläfst.",
      ai: "Hilft beim Eingrenzen, Nachstellen und Entwerfen der Korrektur, so schnell wie ein Störfall es verlangt.",
      human: "Geradestehen, wenn es ausfällt: wer gerufen wird, woraus wiederhergestellt wird und was im laufenden Betrieb geändert werden darf.",
      check: "Du hast aus dem Backup wiederhergestellt und ein Release gestoppt — in einer Probe, nicht in einem Plan.",
    },
  ],
  workLabel: "Die Arbeit",
  aiLabel: "Was die KI tut",
  humanLabel: "Was bei dir bleibt",
  checkLabel: "Gut genug, wenn",
  stagesEvidence:
    "Die Phasen und ihre Prüfungen sind eine Empfehlung aus der Praxis dieses Projekts, kein Standard. Dahinter steht eine Einschätzung: Die Absicherung sollte zu den Folgen eines Fehlers passen. Wer regulatorische Pflichten, Sicherheitsfolgen oder eine größere Reichweite hat, zieht die Linien früher.",

  stoppingHeading: "Hier aufzuhören ist ein Ergebnis",
  stoppingParagraphs: [
    "Das meiste, was so entsteht, soll beim Erkunden oder beim Prototyp enden — und dort fertig zu sein heißt nicht, zu früh aufzuhören. Eine Erkundung ist fertig, wenn du sagen kannst, was du gelernt hast, ohne den Code noch einmal laufen zu lassen, und sich außerhalb deines Rechners nichts verändert hat. Ein Prototyp ist fertig, wenn die Annahme beantwortet ist, so oder so, und die Grenzen dort stehen, wo die nächste Person nachsieht — einschließlich des Hinweises, dass es ein Prototyp ist.",
    "Weder das eine noch das andere schuldet irgendwem Tests, ein Review oder einen geprobten Restore. Der Rest dieser Seite gilt dem Fall, dass die Arbeit dort eben nicht endet.",
  ],

  transitionsHeading: "Was ausdrücklich werden muss, wenn es weitergeht",
  transitionsLead:
    "Niemand erzwingt einen Phasenwechsel, und viele Arbeiten haben nie einen. Wenn er passiert, passiert er leise — deshalb lohnt es sich, jede Grenze vorher zu benennen statt sie hinterher zu bemerken.",
  transitions: [
    {
      title: "Von Erkunden zu Prototyp",
      question: "Was genau wird geprüft, und welches Ergebnis würde dich die Idee verwerfen lassen?",
      reason:
        "Ohne widerlegbare Antwort wird aus einer Erkundung eine Demo, die immer weiter ausgebaut wird.",
    },
    {
      title: "Von Prototyp zu Ausliefern",
      question: "Wer hängt inzwischen daran, und was enthält es, das diese Leute nicht verlieren dürfen?",
      reason:
        "Dieser Übergang kann passieren, ohne dass ihn jemand entscheidet: Ein Prototyp bekommt Nutzerinnen und Nutzer, die Bezeichnung bleibt zurück, und die Pflichten ändern sich trotzdem.",
    },
    {
      title: "Von Ausliefern zu Betreiben",
      question: "Wenn es um drei Uhr nachts ausfällt: Wer wird gerufen, und woraus wird wiederhergestellt?",
      reason:
        "Unbeaufsichtigt zu laufen ist eine Zusage über Verfügbarkeit und Wiederherstellung, kein Deployment-Schritt.",
    },
  ],
  publishing: {
    text: "Eine Form von Ausliefern ist, den Code selbst zu veröffentlichen. Das wirft eigene Fragen auf — was eine Lizenz erlaubt, wozu sie dich verpflichtet und wem Code gehört, der im Job entstanden ist.",
    label: "Open Source: worauf dich Veröffentlichen festlegt",
  },

  unsafeDescription:
    "Echte Nutzerinnen und Nutzer, personenbezogene Daten oder die Arbeit eines anderen Teams hängen inzwischen an etwas, das weiter wie ein Prototyp gepflegt wird. Die Phase hat sich geändert, ohne dass etwas befördert wurde, und die Absicherung ist nicht mitgewachsen.",
  unsafeAlternative:
    "Baue keine Funktionen mehr dazu. Halte fest, was darin steckt und wer davon abhängt, und bring es dann in die Phase, in der es tatsächlich ist: Tests an den Stellen, die wehtun, ein Review, das eine zweite Person leisten kann, und ein Restore, den du durchgespielt und nicht nur geplant hast.",

  artifactTitle: "AI-assisted development",
  artifactDescription:
    "Der Rahmen, in dem ein Agent arbeitet, sobald ein Repository prüfbar bleiben muss: was er selbst entscheidet, wann er innehält und fragt, was er nie tun darf und was geprüft sein muss, bevor etwas den Hauptzweig erreicht.",
  artifactStatus: "draft",

  nextTitle: "Das Ergebnis prüfen",
  nextDescription:
    "Woran du erkennst, ob stimmt, was zurückkommt — eine Antwort, eine Änderung oder eine Handlung, die schon passiert ist.",
  nextSecondaryTitle: "Bevor ein KI-Agent auf Dateien und Systeme zugreift",
};

export const getVibeCoding = (locale: SiteLocale): VibeCodingContent =>
  locale === "de" ? de : en;
