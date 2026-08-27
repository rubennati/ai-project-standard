/**
 * Checking the result, and the actions behind it.
 *
 * The site asks a reader to check the outcome on nearly every page — every one
 * of the six ways of working ends on a "what to check" field — and until now no
 * page said how. This is that page. It is question 8 of the product brief.
 *
 * The organising idea is that the check follows what the system did, not which
 * product produced it: an answer can still be discarded, a change can still be
 * rejected, an action has already happened and can only be reconstructed. Those
 * are three different jobs and people conflate them.
 *
 * Nothing here is a vendor or specification claim, so the page carries advice
 * and assessment levels and no check dates. Where a claim would be legal, the
 * page points at the pages that own it rather than making it.
 *
 * This page owns the consequence-to-control model, and slice 5 merged the two
 * overlapping ladders that were stating it twice in different vocabulary. They
 * are two axes, not one list said twice: how far the result went, and who is
 * carrying it. They compose, and saying so is the whole reconciliation — the
 * hub states the principle in a sentence and builds no second ladder.
 *
 * Three absolutes were corrected rather than softened into vagueness. The
 * target system is where you look at the resulting state, but it is not a
 * "witness" that necessarily recorded the call — what a system records is its
 * own design decision, which slice 4 settled. Reading is a check where you
 * understand enough to notice the errors that matter, not only where you could
 * have produced the work yourself; a test or a competent reviewer verifies
 * what your own reading cannot. And these systems *can* produce more change
 * than was asked for, which is the claim the instruction actually needs.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const REVIEWED = "2026-08-20";

interface NextStepContent {
  label: string;
  description: string;
}

const nextStep: Record<SiteLocale, NextStepContent> = {
  en: {
    label: "Keeping a record",
    description:
      "What to write down so you can still say later what happened, on whose decision, and what was checked.",
  },
  de: {
    label: "Die Entscheidung festhalten",
    description:
      "Was du notierst, damit du später noch sagen kannst, was passiert ist, auf wessen Entscheidung und was geprüft wurde.",
  },
};

export const getCheckingTheResultNextStep = (locale: SiteLocale): NextStepContent =>
  nextStep[locale];

const en: Article = {
  title: "Checking the result",
  subtitle:
    "What you check changes with what the system did: an answer you can still discard, a change you can still reject, or an action that already happened.",
  description:
    "How to check what an AI system produced and what it did — proportionate to the consequence, and different for an answer, a change and an action.",
  lead: "There is no single check that fits every AI result. What you look at depends on how far the result already travelled: text on your screen, a change waiting in your files, or something that already happened in another system. The three need different work, and the last one cannot be undone by noticing.",
  sections: [
    {
      heading: "How much checking a result deserves",
      level: "assessment",
      paragraphs: [
        "The useful question is not whether these systems are reliable in general. It is what happens if this particular result is wrong, and whether you can still take it back.",
        "Two things decide that, and they are not the same thing. The first is how far the result went: text you can throw away, a change you can still reject, or something that already happened somewhere else. The second is who is carrying it — you, or someone who now has to spend their morning undoing it.",
        "They combine, and the effort should follow them rather than the tool. The same model producing the same paragraph deserves a glance while it is still yours to discard, and a second reader once somebody else has acted on it.",
      ],
    },
    {
      heading: "An answer: check the load-bearing parts, not the prose",
      level: "advice",
      paragraphs: [
        "Fluent and wrong reads exactly like fluent and right, and the fluency is not evidence either way. What carries the answer is usually a small number of specific things: a figure, a name, a date, a clause, a claim about what some system does.",
        "Check those, and leave the prose alone. A reader who tries to verify every sentence gives up by the third paragraph and then trusts the rest, which is worse than checking four things properly.",
      ],
      list: [
        "Open the source. A citation you have not opened is a claim about a source, not a check of one — and the sentence it was supposed to support is sometimes not in it.",
        "Check what you would have had to look up anyway. If you would have searched for the number, search for the number.",
        "Watch for the confident specific: a precise figure with no source is more likely to be produced than found.",
        "Where an answer turns on subject matter you do not have, reading it more carefully will not close the gap. That needs a source you can open, or someone who knows the field.",
      ],
    },
    {
      heading: "A change: read the change, not the summary of it",
      level: "advice",
      paragraphs: [
        "When a system edits files, records or a document, the description of what it did is produced by the same system that did it. It is a useful orientation and it is not evidence.",
        "So read the change itself. The specific thing to watch for is size: these systems can produce more change than was asked for, and the extra is plausible enough to pass a glance. A request that should have touched one paragraph and touched nine is worth a second look even when all nine look fine.",
      ],
      list: [
        "Compare the size of the change against the size of what you asked for.",
        "Run whatever proves the thing still works — the test, the build, the preview, opening the document.",
        "Accept in pieces where you can. A change you accepted in four parts is one you read in four parts.",
      ],
    },
    {
      heading: "An action: look at the system it acted on",
      level: "advice",
      paragraphs: [
        "Once something has been sent, filed, created or changed in another system, the assistant's report is the account of the party that did it. It is a useful orientation, and it is not independent evidence of what happened.",
        "Look at the resulting state in the system where the action happened. Is the thing there, is it what you expected, and did anything else change? The last part matters most: a tool asked to file one invoice that filed an invoice plus a folder is a different problem from one that failed outright.",
        "Whether that system also recorded the call, and what it recorded, depends on the system.",
      ],
    },
    {
      heading: "What reading cannot settle",
      level: "assessment",
      paragraphs: [
        "Some things are not checkable by looking at the output at all, and treating them as if they were is how people end up confident about work nobody verified.",
        "You cannot check what you never saw. If a system searched two hundred documents and used three, you can check the three it names and nothing about the hundred and ninety-seven it passed over. Absence does not show up in an answer.",
        "Reading alone is a useful check only when you understand enough to notice the kinds of errors that matter. If you do not, use another form of verification: an authoritative source, someone with the relevant expertise, or a test that checks the property directly.",
        "That is not a reason to stay inside what you already know. Code you could not have written can still be checked by running it and by the tests around it. A clause you could not have drafted can still be checked against the text it cites.",
      ],
    },
    {
      heading: "When the same work runs again and again",
      level: "advice",
      paragraphs: [
        "A check you did once does not carry to the hundredth run. What replaces it is not reading every one. It is deciding in advance which parts you look at every time, which you sample on purpose, and which failures have to stop the run or surface as an exception.",
        "That decision follows the consequence, like everything else here. Where a mistake is cheap to correct, a sample taken deliberately across a week may be enough. Where each run does something consequential, a sample is not a substitute for checking the action itself before it goes out.",
        "Whatever you sample, find out what the thing does when it cannot do the job. Stopping is visible and skipping is visible. Producing something plausible and carrying on is the case nobody notices.",
      ],
    },
    {
      heading: "Check before it leaves you",
      level: "advice",
      paragraphs: [
        "A check after publication is damage control. The cheapest moment is while the result is still yours, and it stays cheap for exactly as long as nobody else has acted on it.",
      ],
      list: [
        "Before it goes to someone else: the load-bearing facts, and whether you would sign it.",
        "Before it reaches a shared place: a second person for anything you could not have checked yourself.",
        "Before it acts on another system: the boundary, not the output — what it is allowed to do is decided before it runs, not checked afterwards.",
      ],
      links: [
        {
          label: "Before you give an AI agent access",
          href: "/secure-setup/before-you-grant-access",
        },
      ],
    },
  ],
};

const de: Article = {
  title: "Das Ergebnis prüfen",
  subtitle:
    "Was du prüfst, hängt davon ab, wie weit das Ergebnis schon gekommen ist: eine Antwort, die du noch verwerfen kannst, eine Änderung, die du noch ablehnen kannst, oder eine Handlung, die schon passiert ist.",
  description:
    "Wie du prüfst, was ein KI-System geliefert und was es getan hat — im Verhältnis zu den Folgen, und unterschiedlich für Antwort, Änderung und Handlung.",
  lead: "Es gibt nicht die eine Prüfung, die auf jedes KI-Ergebnis passt. Worauf du schaust, hängt davon ab, wie weit das Ergebnis schon gelaufen ist: Text auf deinem Bildschirm, eine Änderung, die in deinen Dateien wartet, oder etwas, das in einem anderen System bereits geschehen ist. Das sind drei verschiedene Prüfungen, und bei der letzten reicht es nicht mehr, den Fehler zu bemerken.",
  sections: [
    {
      heading: "Wie gründlich ein Ergebnis geprüft gehört",
      level: "assessment",
      paragraphs: [
        "Die brauchbare Frage ist nicht, ob solche Systeme allgemein zuverlässig sind. Sie ist: Was passiert, wenn dieses eine Ergebnis falsch ist — und kannst du es dann noch zurückholen?",
        "Zwei Dinge entscheiden darüber, und es sind nicht dieselben. Erstens: wie weit das Ergebnis gekommen ist — Text, den du wegwerfen kannst, eine Änderung, die du noch ablehnen kannst, oder etwas, das anderswo schon geschehen ist. Zweitens: wer es trägt — du, oder jemand, der jetzt seinen Vormittag damit verbringt, es zurückzudrehen.",
        "Beides zusammen entscheidet, und der Aufwand sollte sich danach richten, nicht nach dem Tool. Derselbe Absatz aus demselben Modell braucht einen Blick, solange du ihn noch wegwerfen kannst, und eine zweite Person, sobald jemand anderes darauf reagiert hat.",
      ],
    },
    {
      heading: "Eine Antwort: prüfe, was sie trägt, nicht, wie sie klingt",
      level: "advice",
      paragraphs: [
        "Flüssig und falsch liest sich genauso wie flüssig und richtig, und die Flüssigkeit ist in beide Richtungen kein Beleg. Was eine Antwort trägt, sind meist wenige konkrete Dinge: eine Zahl, ein Name, ein Datum, eine Klausel, eine Aussage darüber, was irgendein System tut.",
        "Prüfe die, und lass die Formulierung in Ruhe. Wer jeden Satz nachprüfen will, gibt beim dritten Absatz auf und glaubt dann den Rest — das ist schlechter, als vier Dinge ordentlich zu prüfen.",
      ],
      list: [
        "Öffne die Quelle. Eine Quellenangabe, die du nicht geöffnet hast, ist eine Behauptung über eine Quelle und keine Prüfung — und manchmal steht der Satz, den sie belegen sollte, gar nicht darin.",
        "Prüfe das, was du ohnehin hättest nachschlagen müssen. Hättest du nach der Zahl gesucht, such nach der Zahl.",
        "Achte auf das selbstbewusste Detail: Eine genaue Zahl ohne Quelle ist eher erzeugt als gefunden.",
        "Wo eine Antwort auf Fachwissen beruht, das du nicht hast, schließt gründlicheres Lesen die Lücke nicht. Dafür braucht es eine Quelle, die du öffnen kannst, oder jemanden, der das Gebiet kennt.",
      ],
    },
    {
      heading: "Eine Änderung: lies die Änderung, nicht ihre Beschreibung",
      level: "advice",
      paragraphs: [
        "Wenn ein System Dateien, Datensätze oder ein Dokument bearbeitet, stammt die Beschreibung des Getanen von demselben System, das es getan hat. Sie hilft bei der Orientierung und ist kein Beleg.",
        "Lies also die Änderung selbst. Worauf es besonders ankommt, ist der Umfang: Diese Systeme können mehr ändern als verlangt, und das Zusätzliche wirkt plausibel genug, um einem flüchtigen Blick zu entgehen. Was einen Absatz hätte ändern sollen und neun geändert hat, verdient einen zweiten Blick, auch wenn alle neun in Ordnung aussehen.",
      ],
      list: [
        "Vergleiche den Umfang der Änderung mit dem, was du verlangt hast.",
        "Lass laufen, was belegt, dass es weiter funktioniert — den Test, den Build, die Vorschau, das Öffnen des Dokuments.",
        "Übernimm die Änderung in Teilen, wo es geht. Eine Änderung, die du in vier Teilen übernommen hast, ist eine, die du in vier Teilen gelesen hast.",
      ],
    },
    {
      heading: "Eine Handlung: sieh dir das System an, in dem sie stattfand",
      level: "advice",
      paragraphs: [
        "Sobald etwas in einem anderen System verschickt, abgelegt, angelegt oder geändert wurde, ist der Bericht des Assistenten die Darstellung der Partei, die es getan hat. Er hilft bei der Orientierung und ist kein unabhängiger Beleg dafür, was geschehen ist.",
        "Sieh dir den Zustand in dem System an, in dem die Handlung stattfand. Ist die Sache da, ist sie so, wie du sie erwartet hast, und hat sich sonst etwas geändert? Auf den letzten Teil kommt es am meisten an: Ein Tool, das eine Rechnung ablegen sollte und eine Rechnung plus einen Ordner abgelegt hat, ist ein anderes Problem als eines, das einfach gescheitert ist.",
        "Ob dieses System den Aufruf zusätzlich festgehalten hat, und was davon, hängt vom System ab.",
      ],
    },
    {
      heading: "Was sich durch Lesen nicht klären lässt",
      level: "assessment",
      paragraphs: [
        "Manches lässt sich am Ergebnis überhaupt nicht prüfen. Wer es trotzdem versucht, fühlt sich am Ende sicher bei einer Arbeit, die niemand geprüft hat.",
        "Du kannst nicht prüfen, was du nie gesehen hast. Hat ein System 200 Dokumente durchsucht und drei verwendet, kannst du die drei prüfen, die es nennt. Über die 197, an denen es vorbeigegangen ist, erfährst du nichts — Fehlendes taucht in einer Antwort nicht auf.",
        "Lesen allein ist nur dann eine sinnvolle Prüfung, wenn du genug verstehst, um die entscheidenden Fehler erkennen zu können. Wenn nicht, brauchst du eine andere Form der Prüfung: eine belastbare Quelle, jemanden mit der nötigen Fachkenntnis oder einen Test, der die betreffende Eigenschaft direkt prüft.",
        "Das ist kein Grund, bei dem zu bleiben, was du ohnehin kannst. Code, den du nicht hättest schreiben können, lässt sich trotzdem prüfen, indem man ihn laufen lässt und die Tests darum herum ansieht. Eine Klausel, die du nicht hättest formulieren können, lässt sich am zitierten Text prüfen.",
      ],
    },
    {
      heading: "Wenn dieselbe Arbeit immer wieder läuft",
      level: "advice",
      paragraphs: [
        "Eine Prüfung, die du einmal gemacht hast, trägt nicht bis zum hundertsten Durchlauf. An ihre Stelle tritt nicht, jeden einzelnen zu lesen. An ihre Stelle tritt, vorher zu entscheiden: was du jedes Mal ansiehst, was du bewusst als Stichprobe prüfst und welche Fehler den Durchlauf stoppen oder als Ausnahme sichtbar werden müssen.",
        "Diese Entscheidung richtet sich nach den Folgen, wie alles andere hier. Wo ein Fehler günstig zu korrigieren ist, kann eine bewusst gewählte Stichprobe über eine Woche genügen. Wo jeder Durchlauf etwas Folgenreiches tut, ersetzt eine Stichprobe nicht, die Handlung selbst vor der Ausführung zu prüfen.",
        "Was du auch prüfst: Finde heraus, was die Sache tut, wenn sie die Aufgabe nicht erfüllen kann. Anhalten sieht man, Überspringen sieht man. Etwas Plausibles zu liefern und weiterzulaufen, ist der Fall, den niemand bemerkt.",
      ],
    },
    {
      heading: "Prüfen, bevor du es aus der Hand gibst",
      level: "advice",
      paragraphs: [
        "Eine Prüfung nach der Veröffentlichung ist Schadensbegrenzung. Der billigste Moment ist, solange das Ergebnis noch dir gehört — und billig bleibt er genau so lange, wie noch niemand anderes darauf reagiert hat.",
      ],
      list: [
        "Bevor es zu jemand anderem geht: die tragenden Fakten, und ob du dafür geradestehen würdest.",
        "Bevor es an einen gemeinsamen Ort kommt: eine zweite Person für alles, was du selbst nicht hättest prüfen können.",
        "Bevor es in einem anderen System handelt: die Grenze, nicht das Ergebnis — was es tun darf, wird vorher entschieden und nicht hinterher geprüft.",
      ],
      links: [
        {
          label: "Bevor ein KI-Agent auf Dateien und Systeme zugreift",
          href: "/de/secure-setup/before-you-grant-access",
        },
      ],
    },
  ],
};

export const getCheckingTheResult = (locale: SiteLocale): Article =>
  locale === "de" ? de : en;
