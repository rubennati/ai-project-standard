/**
 * What an AI tool is doing when you use it.
 *
 * The page exists because almost every practical question — can it see my
 * files, why did it forget, why is the answer confident and wrong — has the
 * same root: a model computes on what it is handed, and everything else is
 * software around it deciding what to hand over.
 *
 * No vendor behaviour is claimed here. It is the shape of the thing, which is
 * why nothing on this page carries a check date except where a norm is named.
 *
 * That statement used to be repeated as an identical undated assessment label
 * on all eight sections. A label that never varies stops telling a reader
 * anything and teaches them to skip the ones that do carry weight, so the page
 * now says it once, at the top, with the same scope it always had.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-09";

const en: Article = {
  title: "What an AI tool is doing when you use it",
  subtitle: "One idea explains most of the surprises: the model only sees what something else hands it.",
  description:
    "Why a model cannot reach your files on its own, why it forgets, why more documents do not mean better answers, and why the product is not the model.",
  evidence:
    "Everything on this page is this project's explanation of how these systems are built, not a claim about any particular product's behaviour. It describes the general shape, which is why no section carries a check date.",
  lead: "Most confusion about these tools dissolves at one point. A language model computes on the text it is given, and nothing else. Everything that looks like reaching, remembering or knowing is other software deciding what to put in front of it.",
  sections: [
    {
      heading: "There is no wire out of the model",
      paragraphs: [
        "A model on its own cannot open your disk, read your mail, browse the web or query a database. It has no connection to any of them. Given some text, it produces some text.",
        "So when a tool appears to read your document, another piece of software fetched that document and placed its contents into the text the model received. When it appears to search the web, something ran a search and pasted the results in. The capability is real; it just does not live where people assume.",
        "Almost the whole field follows from this. Retrieval, connectors, memory, agents — all of them are answers to the same question: what should we hand over this time?",
      ],
    },
    {
      heading: "The product is not the model",
      paragraphs: [
        "The chat box is not the model. Neither is file upload, web search, memory, or the connector to your drive. Those are features of a product that orchestrates one or more models along with search, storage and tools.",
        "This matters when comparing things. \"Which model is better\" and \"which product is better\" are different questions, and for most practical work the second one is decided by the orchestration rather than by the model.",
      ],
    },
    {
      heading: "Why it forgets",
      paragraphs: [
        "Each request is computed from scratch. What feels like memory is the application resending earlier parts of the conversation, or storing notes and reinserting them later.",
        "That is also why a long conversation starts to drift: there is a limit to how much can be sent, so something has to be dropped, summarised or reordered. Nothing is broken when this happens. It is the mechanism working at its edge.",
      ],
    },
    {
      heading: "More documents do not mean better answers",
      paragraphs: [
        "Room in a single request is limited, and it is smaller than any real document collection. A system with a million documents does not put a million documents in front of the model. It selects a handful.",
        "So the interesting engineering is selection: what goes in, what stays out, in what order, how much conversation history, which tool results. Retrieval is one way of doing that selection. So is memory. So is deciding which parts of a file to include.",
        "The practical consequence for you: a precise question usually beats a large upload, because it makes the selection easier for the system rather than harder.",
      ],
    },
    {
      heading: "Three ways a tool can know about your material",
      paragraphs: [
        "They are often discussed as though they were rivals. They are answers to different problems.",
      ],
      list: [
        "Put it in the request — upload a file or paste text. Immediate, exact, limited by how much fits, and gone when the conversation ends unless the product keeps it",
        "Look it up when needed — the system searches your material and includes the relevant parts. Handles collections far larger than one request, and can cite where an answer came from. This is what \"RAG\" names",
        "Train it in — adjust a model on your material. Changes how the model writes and behaves rather than what it can cite, is expensive to repeat, and a new document means doing it again",
      ],
      figure: {
        kind: "reach",
        caption: "Which approach answers which problem",
        rows: [
          { target: "One document, right now", state: "put it in the request", reached: "yes", note: "Nothing to build; the limit is how much fits" },
          { target: "A collection that keeps growing", state: "look it up when needed", reached: "yes", note: "New material is added to an index rather than to a model" },
          { target: "Answers that cite a source", state: "look it up when needed", reached: "yes", note: "Only this route knows which passage an answer rested on" },
          { target: "A particular tone or format", state: "train it in", reached: "partial", note: "Changes behaviour, not knowledge. Often a well-written instruction does the same job" },
          { target: "Facts that change weekly", state: "train it in", reached: "no", note: "Retraining for each change is the expensive way to do lookup" },
        ],
      },
    },
    {
      heading: "Why tools built for programmers work well on documents",
      paragraphs: [
        "A surprising number of people doing non-technical knowledge work end up using a coding assistant, and it is not perversity.",
        "The decisive capability is not writing code. It is working with a persistent set of files: list, read, search, create, edit, rename, compare. A folder of notes, sources and decisions is structurally the same problem as a folder of source code, and a tool that handles one handles the other.",
        "What you lose is the guard rails of a purpose-built product. What you gain is that your material stays in ordinary files you can read without the tool.",
      ],
    },
    {
      heading: "Knowing the tool and running a good system are different skills",
      paragraphs: [
        "Two things get conflated when people ask whether they are \"ready\" for this.",
        "How well you use the tool is one axis: an expert can deliberately choose something very simple, and a beginner can be the daily user of something very complex. How much system sits behind it is another: identity, permissions, review, retention, audit.",
        "They move independently, and the second is not a reward for the first. A large organisation may have heavy governance around a basic chat tool; one careful individual may run something far more capable with none of it, correctly, because nobody else is affected.",
        "The line that changes the answer is not skill and not size. It is whether anyone other than you relies on the result.",
      ],
    },
    {
      heading: "What this field is called",
      paragraphs: [
        "If you want to read further, the umbrella term is AI-supported knowledge management: capturing, structuring, indexing, retrieving, synthesising, curating and using knowledge with the help of language models and agentic systems.",
        "Underneath it sit the terms you will meet in product pages — document intelligence, enterprise search, retrieval, semantic search, knowledge bases, knowledge graphs, memory, agents, knowledge governance. They are layers of one architecture rather than alternatives to each other, which is the single most useful thing to know before comparing any two of them.",
      ],
      links: [{ label: "Glossary — the terms, defined once", href: "/glossary" }],
    },
  ],
};

const de: Article = {
  title: "Was ein KI-Tool tut, während du es benutzt",
  subtitle: "Ein Gedanke erklärt die meisten Überraschungen: Das Modell sieht nur, was ihm etwas anderes hinlegt.",
  description:
    "Warum ein Modell allein nicht an deine Dateien kommt, warum es vergisst, warum mehr Dokumente nicht bessere Antworten bedeuten und warum das Produkt nicht das Modell ist.",
  evidence:
    "Alles auf dieser Seite ist die Erklärung dieses Projekts, wie solche Systeme gebaut sind — keine Aussage über das Verhalten eines bestimmten Produkts. Es geht um die allgemeine Form, deshalb trägt kein Abschnitt ein Prüfdatum.",
  lead: "Die meiste Verwirrung über diese Tools löst sich an einer Stelle auf. Ein Sprachmodell rechnet auf dem Text, den es bekommt, und auf sonst nichts. Alles, was nach Zugreifen, Erinnern oder Wissen aussieht, ist andere Software, die entscheidet, was ihm vorgelegt wird.",
  sections: [
    {
      heading: "Aus dem Modell führt keine Leitung heraus",
      paragraphs: [
        "Ein Modell für sich kann weder deine Festplatte öffnen noch deine Mail lesen, im Web surfen oder eine Datenbank abfragen. Es hat zu keinem davon eine Verbindung. Es bekommt Text und erzeugt Text.",
        "Wenn ein Tool also dein Dokument zu lesen scheint, hat eine andere Software dieses Dokument geholt und seinen Inhalt in den Text gelegt, den das Modell erhielt. Wenn es zu suchen scheint, hat etwas eine Suche ausgeführt und die Ergebnisse eingefügt. Die Fähigkeit ist echt — sie sitzt nur nicht dort, wo man sie vermutet.",
        "Fast das ganze Feld folgt daraus. Retrieval, Connectors, Memory, Agenten — alle sind Antworten auf dieselbe Frage: Was legen wir diesmal vor?",
      ],
    },
    {
      heading: "Das Produkt ist nicht das Modell",
      paragraphs: [
        "Das Chatfenster ist nicht das Modell. Der Dateiupload ebenso wenig, und auch nicht Websuche, Memory oder die Anbindung an deinen Speicher. Das sind Funktionen eines Produkts, das ein oder mehrere Modelle zusammen mit Suche, Speicher und Tools orchestriert.",
        "Das zählt beim Vergleichen. „Welches Modell ist besser“ und „welches Produkt ist besser“ sind verschiedene Fragen — und für die meiste praktische Arbeit entscheidet die zweite sich an der Orchestrierung, nicht am Modell.",
      ],
    },
    {
      heading: "Warum es vergisst",
      paragraphs: [
        "Jede Anfrage wird von vorn gerechnet. Was sich wie Erinnerung anfühlt, ist die Anwendung, die frühere Teile des Gesprächs erneut mitschickt oder Notizen speichert und später wieder einfügt.",
        "Deshalb driftet ein langes Gespräch irgendwann: Es passt nur eine begrenzte Menge hinein, also muss etwas wegfallen, zusammengefasst oder umsortiert werden. Dabei ist nichts kaputt. Der Mechanismus arbeitet an seiner Grenze.",
      ],
    },
    {
      heading: "Mehr Dokumente heißt nicht bessere Antworten",
      paragraphs: [
        "Der Platz in einer einzelnen Anfrage ist begrenzt, und er ist kleiner als jede reale Dokumentensammlung. Ein System mit einer Million Dokumente legt dem Modell nicht eine Million Dokumente vor. Es wählt eine Handvoll aus.",
        "Die interessante Ingenieursarbeit ist deshalb die Auswahl: Was kommt hinein, was bleibt draußen, in welcher Reihenfolge, wie viel Gesprächsverlauf, welche Tool-Ergebnisse. Retrieval ist eine Art, diese Auswahl zu treffen. Memory auch. Und die Entscheidung, welche Teile einer Datei mitgehen, ebenso.",
        "Die praktische Folge für dich: Eine präzise Frage schlägt meist einen großen Upload, weil sie die Auswahl erleichtert statt sie zu erschweren.",
      ],
    },
    {
      heading: "Drei Wege, wie ein Tool von deinem Material erfährt",
      paragraphs: [
        "Sie werden oft als Rivalen behandelt. Sie sind Antworten auf verschiedene Probleme.",
      ],
      list: [
        "In die Anfrage legen — eine Datei hochladen oder Text einfügen. Sofort, exakt, begrenzt durch das, was hineinpasst, und mit dem Gespräch vorbei, sofern das Produkt es nicht aufbewahrt",
        "Bei Bedarf nachschlagen — das System durchsucht dein Material und nimmt die passenden Teile auf. Trägt Sammlungen weit über eine Anfrage hinaus und kann belegen, woher eine Antwort stammt. Das meint „RAG“",
        "Eintrainieren — ein Modell auf deinem Material anpassen. Ändert, wie das Modell schreibt und sich verhält, nicht was es belegen kann; ist teuer zu wiederholen, und ein neues Dokument heißt: noch einmal",
      ],
      figure: {
        kind: "reach",
        caption: "Welcher Weg welches Problem löst",
        rows: [
          { target: "Ein Dokument, jetzt sofort", state: "in die Anfrage legen", reached: "yes", note: "Nichts zu bauen; die Grenze ist, was hineinpasst" },
          { target: "Eine wachsende Sammlung", state: "bei Bedarf nachschlagen", reached: "yes", note: "Neues Material kommt in einen Index, nicht in ein Modell" },
          { target: "Antworten mit Quellenangabe", state: "bei Bedarf nachschlagen", reached: "yes", note: "Nur dieser Weg weiß, auf welcher Passage eine Antwort ruhte" },
          { target: "Ein bestimmter Ton oder ein Format", state: "eintrainieren", reached: "partial", note: "Ändert Verhalten, nicht Wissen. Oft leistet eine gute Anweisung dasselbe" },
          { target: "Fakten, die sich wöchentlich ändern", state: "eintrainieren", reached: "no", note: "Für jede Änderung neu trainieren ist die teure Art nachzuschlagen" },
        ],
      },
    },
    {
      heading: "Warum Tools für Programmierende gut mit Dokumenten umgehen",
      paragraphs: [
        "Erstaunlich viele Menschen mit nicht-technischer Wissensarbeit landen bei einem Coding-Assistenten, und das ist keine Marotte.",
        "Die entscheidende Fähigkeit ist nicht, Code zu schreiben. Sie ist, mit einem dauerhaften Satz von Dateien umzugehen: auflisten, lesen, suchen, anlegen, bearbeiten, umbenennen, vergleichen. Ein Ordner mit Notizen, Quellen und Entscheidungen ist strukturell dasselbe Problem wie ein Ordner mit Quellcode — und wer das eine kann, kann das andere.",
        "Was du verlierst, sind die Leitplanken eines dafür gebauten Produkts. Was du gewinnst, ist, dass dein Material in gewöhnlichen Dateien bleibt, die du auch ohne das Tool lesen kannst.",
      ],
    },
    {
      heading: "Das Tool beherrschen und ein gutes System betreiben sind zwei Fähigkeiten",
      paragraphs: [
        "Zwei Dinge werden vermengt, wenn jemand fragt, ob er dafür „bereit“ sei.",
        "Wie gut du das Tool nutzt, ist die eine Achse: Ein Fachmensch kann bewusst etwas sehr Einfaches wählen, und ein Anfänger kann täglich etwas sehr Komplexes bedienen. Wie viel System dahintersteht, ist die andere: Identität, Rechte, Prüfung, Aufbewahrung, Protokollierung.",
        "Sie bewegen sich unabhängig, und die zweite ist keine Belohnung für die erste. Eine große Organisation kann schwere Governance um ein einfaches Chat-Tool legen; eine sorgfältige Einzelperson kann etwas weit Mächtigeres ohne all das betreiben — zu Recht, weil niemand sonst betroffen ist.",
        "Die Linie, die die Antwort ändert, ist weder Können noch Größe. Sie ist, ob sich außer dir jemand auf das Ergebnis verlässt.",
      ],
    },
    {
      heading: "Wie dieses Feld heißt",
      paragraphs: [
        "Zum Weiterlesen: Der Oberbegriff ist KI-gestütztes Wissensmanagement — Wissen erfassen, strukturieren, indizieren, wiederfinden, zusammenführen, kuratieren und nutzen, mithilfe von Sprachmodellen und agentischen Systemen.",
        "Darunter liegen die Begriffe, die dir auf Produktseiten begegnen: Dokumentenverarbeitung, Unternehmenssuche, Retrieval, semantische Suche, Wissensbasen, Wissensgraphen, Memory, Agenten, Wissens-Governance. Sie sind Schichten einer Architektur und keine Alternativen zueinander — das ist das Nützlichste, was man weiß, bevor man zwei davon vergleicht.",
      ],
      links: [{ label: "Glossar — die Begriffe, einmal definiert", href: "/de/glossary" }],
    },
  ],
};

export const getWhatItIsDoing = (locale: SiteLocale): Article => (locale === "de" ? de : en);
