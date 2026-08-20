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
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const REVIEWED = "2026-08-20";

const en: Article = {
  title: "Checking the result",
  subtitle:
    "What you check changes with what the system did: an answer you can still discard, a change you can still reject, or an action that already happened.",
  description:
    "How to check what an AI system produced and what it did — proportionate to the consequence, and different for an answer, a change and an action.",
  lead: "There is no single check that fits every AI result. What you look at depends on how far the result already travelled: text on your screen, a change waiting in your files, or something that already happened in another system. The three need different work, and the last one cannot be undone by noticing.",
  sections: [
    {
      heading: "How much checking depends on who relies on it",
      level: "assessment",
      paragraphs: [
        "The useful question is not whether these systems are reliable in general. It is what happens if this particular result is wrong, and whether you can still take it back.",
        "Three states cover most work. You can still undo it yourself, and a mistake costs you an afternoon. Someone else has to undo it, and a mistake costs them their morning. Or it cannot be undone — the mail is sent, the record is changed, the invoice is filed.",
        "Effort should follow that line rather than the tool. The same model producing the same paragraph deserves a glance in the first state and a second reader in the third.",
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
        "If you could not have written it yourself, you cannot check it by reading it. That needs a source or a person who knows the subject.",
      ],
    },
    {
      heading: "A change: read the change, not the summary of it",
      level: "advice",
      paragraphs: [
        "When a system edits files, records or a document, the description of what it did is produced by the same system that did it. It is a useful orientation and it is not evidence.",
        "So read the change itself. The specific thing to watch for is size: these systems produce more change than was asked for, and the extra is plausible enough to pass a glance. A request that should have touched one paragraph and touched nine is worth a second look even when all nine look fine.",
      ],
      list: [
        "Compare the size of the change against the size of what you asked for.",
        "Run whatever proves the thing still works — the test, the build, the preview, opening the document.",
        "Accept in pieces where you can. A change you accepted in four parts is one you read in four parts.",
      ],
    },
    {
      heading: "An action: ask the system it acted on",
      level: "advice",
      paragraphs: [
        "Once something has been sent, filed, created or changed in another system, the assistant's report is the account of the party that did it. The system it acted on is the witness.",
        "Check there. Does its own record show what you expected — and only that? The second half matters more: a tool that was asked to file one invoice and filed one invoice plus a folder is a different problem from one that failed outright, and only the target system shows it.",
      ],
      links: [
        {
          label: "Before you give an AI agent access",
          href: "/secure-setup/before-you-grant-access",
        },
      ],
    },
    {
      heading: "What reading cannot settle",
      level: "assessment",
      paragraphs: [
        "Some things are not checkable by looking at the output at all, and treating them as if they were is how people end up confident about work nobody verified.",
        "You cannot check what you never saw. If a system searched two hundred documents and used three, you can check the three it names and nothing about the hundred and ninety-seven it passed over. Absence does not show up in an answer.",
        "You also cannot check subject matter you do not have. Reading carefully is not a substitute for knowing the field, and a second person who does know it is a check where a longer read is not.",
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
        "Before it reaches a shared place: a second person for anything you could not have written yourself.",
        "Before it acts on another system: the boundary, not the output — what it is allowed to do is decided before it runs, not checked afterwards.",
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
      heading: "Wie viel du prüfst, richtet sich danach, wer sich darauf verlässt",
      level: "assessment",
      paragraphs: [
        "Die brauchbare Frage ist nicht, ob solche Systeme allgemein zuverlässig sind. Sie ist: Was passiert, wenn dieses eine Ergebnis falsch ist — und kannst du es dann noch zurückholen?",
        "Drei Fälle decken die meiste Arbeit ab. Du kannst es selbst rückgängig machen, und ein Fehler kostet dich einen Nachmittag. Jemand anderes muss es rückgängig machen, und ein Fehler kostet ihn seinen Vormittag. Oder es geht nicht mehr zurück: Die Mail ist raus, der Datensatz ist geändert, die Rechnung ist abgelegt.",
        "Der Aufwand sollte sich nach diesen Fällen richten, nicht nach dem Tool. Derselbe Absatz aus demselben Modell braucht im ersten Fall einen Blick und im dritten eine zweite Person.",
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
        "Was du nicht selbst hättest schreiben können, kannst du auch nicht durch Lesen prüfen. Dafür braucht es eine Quelle oder jemanden, der das Thema kennt.",
      ],
    },
    {
      heading: "Eine Änderung: lies die Änderung, nicht ihre Beschreibung",
      level: "advice",
      paragraphs: [
        "Wenn ein System Dateien, Datensätze oder ein Dokument bearbeitet, stammt die Beschreibung des Getanen von demselben System, das es getan hat. Sie hilft bei der Orientierung und ist kein Beleg.",
        "Lies also die Änderung selbst. Worauf es besonders ankommt, ist der Umfang: Diese Systeme ändern mehr als verlangt, und das Zusätzliche wirkt plausibel genug, um einem flüchtigen Blick zu entgehen. Was einen Absatz hätte ändern sollen und neun geändert hat, verdient einen zweiten Blick, auch wenn alle neun in Ordnung aussehen.",
      ],
      list: [
        "Vergleiche den Umfang der Änderung mit dem, was du verlangt hast.",
        "Lass laufen, was belegt, dass es weiter funktioniert — den Test, den Build, die Vorschau, das Öffnen des Dokuments.",
        "Übernimm die Änderung in Teilen, wo es geht. Eine Änderung, die du in vier Teilen übernommen hast, ist eine, die du in vier Teilen gelesen hast.",
      ],
    },
    {
      heading: "Eine Handlung: frag das System, in dem sie stattfand",
      level: "advice",
      paragraphs: [
        "Sobald etwas in einem anderen System verschickt, abgelegt, angelegt oder geändert wurde, ist der Bericht des Assistenten die Darstellung der Partei, die es getan hat. Zeuge ist das System, in dem es passiert ist.",
        "Dort prüfst du. Zeigt dessen eigene Aufzeichnung das, was du erwartet hast — und nur das? Die zweite Hälfte wiegt schwerer: Ein Tool, das eine Rechnung ablegen sollte und eine Rechnung plus einen Ordner abgelegt hat, ist ein anderes Problem als eines, das einfach gescheitert ist, und nur das Zielsystem zeigt das.",
      ],
      links: [
        {
          label: "Bevor ein KI-Agent auf Dateien und Systeme zugreift",
          href: "/de/secure-setup/before-you-grant-access",
        },
      ],
    },
    {
      heading: "Was sich durch Lesen nicht klären lässt",
      level: "assessment",
      paragraphs: [
        "Manches lässt sich am Ergebnis überhaupt nicht prüfen. Wer es trotzdem versucht, fühlt sich am Ende sicher bei einer Arbeit, die niemand geprüft hat.",
        "Du kannst nicht prüfen, was du nie gesehen hast. Hat ein System 200 Dokumente durchsucht und drei verwendet, kannst du die drei prüfen, die es nennt. Über die 197, an denen es vorbeigegangen ist, erfährst du nichts — Fehlendes taucht in einer Antwort nicht auf.",
        "Und du kannst kein Fachwissen prüfen, das du nicht hast. Sorgfältig lesen ersetzt nicht, das Gebiet zu kennen — eine zweite Person, die es kennt, ist eine Prüfung, ein längeres Lesen nicht.",
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
        "Bevor es an einen gemeinsamen Ort kommt: eine zweite Person für alles, was du nicht selbst hättest schreiben können.",
        "Bevor es in einem anderen System handelt: die Grenze, nicht das Ergebnis — was es tun darf, wird vorher entschieden und nicht hinterher geprüft.",
      ],
    },
  ],
};

export const getCheckingTheResult = (locale: SiteLocale): Article =>
  locale === "de" ? de : en;
