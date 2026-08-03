/**
 * What allowing training actually means.
 *
 * The reframe this page is built on: the visible question is training, the
 * operative one is storage. Consent to training is, first and before
 * anything else, consent to keeping the material.
 *
 * The processing-path section is deliberately kept at assessment level. What
 * any networked system does with a request is well understood; what a
 * specific vendor's pipeline does internally is not something this site can
 * verify, so it is not claimed as fact.
 *
 * Checked 2026-08-03.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-03";

const GDPR_ART_4 = "https://gdpr-info.eu/art-4-gdpr/";
const CLAUDE_TRAINING =
  "https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training";

const en: Article = {
  title: "What you agree to when you allow training",
  description:
    "The visible question is training. The operative one is storage — and the two are the same switch. What that consent actually covers, and what it does not.",
  lead: "Almost everyone asks whether a tool trains on their input. Far fewer ask what has to be true before it could.",
  sections: [
    {
      heading: "Before it can train, it has to keep",
      level: "assessment",
      paragraphs: [
        "Nothing can be used for a training run that was not stored first. So the question “may I train on your data” carries a prior question that is rarely stated: may I keep it, copy it somewhere else, and put it through a pipeline.",
        "That is the operative permission. Training is what it is for; storage is what actually happens to your material, and it happens immediately rather than eventually.",
      ],
    },
    {
      heading: "The vendors couple the two, which confirms it",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "This is not only a way of looking at it. At Anthropic, allowing training on a consumer plan extends retention from 30 days to five years. The training switch is a retention switch, stated as such by the vendor.",
        "So someone weighing whether they mind contributing to a model is, in the same click, deciding how long their conversations are kept. Those are different questions with different answers, and the interface offers one control for both.",
      ],
      links: [{ label: "Anthropic — is my data used for model training", href: CLAUDE_TRAINING }],
    },
    {
      heading: "What the path looks like",
      level: "assessment",
      paragraphs: [
        "Your text does not travel from your keyboard into a model. It travels over a network to a service, through whatever sits in front of that service, into memory on a machine that produces a response, and back. Along the way it may pass caches, queues and load balancers, and if something fails it may be written to an error log — which has its own retention and its own access rules.",
        "None of this is specific to AI. It is what happens to any request in any distributed system, and it is worth spelling out precisely because the chat window makes it look like a conversation with one thing in one place.",
        "What a given vendor does inside that path is not something this site can verify, so it is not claimed here. The point is structural: there are more copies, in more places, for longer, than the interface suggests.",
      ],
    },
    {
      heading: "It is not a data breach. It is a loss of control",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "It is tempting to call pasting something into a chat a leak. It is not, and the distinction is worth keeping, because a personal data breach has a definition: under Art. 4(12) GDPR it is a breach of security leading to accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to personal data.",
        "A deliberate transfer to a provider under a contract is none of those things. What it is, is a point after which you no longer decide where copies sit, how long they stay, or who sees them if something goes wrong. That is a loss of control, and it is the accurate word for it.",
        "The distinction is not pedantry. Calling an ordinary transfer a breach makes it harder to be taken seriously about an actual one.",
      ],
      links: [{ label: "Art. 4(12) GDPR — definition of a personal data breach", href: GDPR_ART_4 }],
    },
    {
      heading: "Training is batched, not live",
      level: "assessment",
      paragraphs: [
        "A sentence you type does not become part of a model as you type it. Training runs are prepared and executed as discrete, expensive jobs, and material is selected, processed and filtered before any of it is eligible.",
        "This matters in both directions. It means your input is not instantly memorised and repeatable by strangers — a fear that circulates and is not how these systems work. It also means that once material has gone into a completed run, deleting the conversation afterwards does not remove it from the model that was trained.",
      ],
    },
    {
      heading: "“Trained on our data” usually is not training",
      level: "assessment",
      paragraphs: [
        "A tool sold as specialised for law, medicine or a particular industry is more often a system prompt plus retrieval over a document collection than a model that was fine-tuned. Both can be perfectly good products, and the marketing rarely distinguishes them.",
        "It is worth asking which one you are buying, because the answers differ in the ways that matter to you: what it cost to build, where your material ends up, and what happens when the underlying model is replaced. The words to ask with are fine-tuning and retrieval — and asking is usually enough to find out.",
      ],
    },
    {
      heading: "What to take from it",
      level: "advice",
      paragraphs: [
        "Read the training setting as a retention setting, because at least one vendor makes it exactly that.",
        "Assume more copies exist than the interface shows, and let that decide what you send rather than what you hope.",
        "Do not describe an ordinary transfer as a breach. Describe it as the point where control ends, which is both accurate and harder to argue with.",
        "When a vendor says trained on our data, ask whether they mean fine-tuning or retrieval. The answer changes the assessment.",
      ],
    },
  ],
};

const de: Article = {
  title: "Wozu du zustimmst, wenn du Training erlaubst",
  description:
    "Die sichtbare Frage ist das Training. Die eigentliche ist die Speicherung — und beides ist derselbe Schalter. Was diese Zustimmung wirklich umfasst, und was nicht.",
  lead: "Fast alle fragen, ob ein Werkzeug mit ihrer Eingabe trainiert. Deutlich weniger fragen, was zutreffen muss, damit es das überhaupt könnte.",
  sections: [
    {
      heading: "Bevor trainiert werden kann, muss gespeichert werden",
      level: "assessment",
      paragraphs: [
        "Nichts kann in einen Trainingslauf gehen, das nicht vorher gespeichert wurde. Die Frage „darf ich mit deinen Daten trainieren“ trägt also eine vorgelagerte Frage in sich, die selten ausgesprochen wird: darf ich sie behalten, anderswohin kopieren und durch eine Verarbeitungskette schicken.",
        "Das ist die eigentliche Erlaubnis. Training ist der Zweck; die Speicherung ist das, was mit deinem Material tatsächlich geschieht — und zwar sofort, nicht irgendwann.",
      ],
    },
    {
      heading: "Die Anbieter koppeln beides, was es bestätigt",
      level: "fact",
      checked: CHECKED,
      paragraphs: [
        "Das ist nicht bloß eine Betrachtungsweise. Bei Anthropic verlängert sich die Aufbewahrung im Verbrauchertarif von 30 Tagen auf fünf Jahre, sobald man Training erlaubt. Der Trainingsschalter ist ein Aufbewahrungsschalter — so vom Anbieter beschrieben.",
        "Wer also abwägt, ob ihn ein Beitrag zum Modell stört, entscheidet mit demselben Klick, wie lange seine Unterhaltungen aufbewahrt werden. Zwei verschiedene Fragen mit verschiedenen Antworten, und die Oberfläche bietet eine Bedienung für beide.",
      ],
      links: [
        { label: "Anthropic — werden meine Daten zum Training verwendet", href: CLAUDE_TRAINING },
      ],
    },
    {
      heading: "Wie der Weg aussieht",
      level: "assessment",
      paragraphs: [
        "Dein Text wandert nicht von der Tastatur in ein Modell. Er wandert über ein Netz zu einem Dienst, durch alles, was diesem Dienst vorgelagert ist, in den Arbeitsspeicher einer Maschine, die eine Antwort erzeugt, und wieder zurück. Unterwegs kann er Caches, Warteschlangen und Lastverteiler passieren, und wenn etwas fehlschlägt, kann er in einem Fehlerprotokoll landen — mit eigener Aufbewahrungsfrist und eigenen Zugriffsregeln.",
        "Nichts daran ist KI-spezifisch. So ergeht es jeder Anfrage in jedem verteilten System. Es gehört gerade deshalb ausgesprochen, weil das Chatfenster es wie ein Gespräch mit einem Ding an einem Ort aussehen lässt.",
        "Was ein bestimmter Anbieter innerhalb dieses Wegs tut, kann diese Seite nicht überprüfen und behauptet es deshalb nicht. Der Punkt ist struktureller Natur: Es gibt mehr Kopien, an mehr Orten, für länger, als die Oberfläche nahelegt.",
      ],
    },
    {
      heading: "Es ist kein Datenleck. Es ist ein Kontrollverlust",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Es liegt nahe, das Einfügen in einen Chat ein Leck zu nennen. Ist es nicht — und die Unterscheidung lohnt sich, denn eine Verletzung des Schutzes personenbezogener Daten ist definiert: nach Art. 4 Z 12 DSGVO eine Verletzung der Sicherheit, die zur unbeabsichtigten oder unrechtmäßigen Vernichtung, zum Verlust, zur Veränderung oder zur unbefugten Offenlegung von oder zum unbefugten Zugang zu personenbezogenen Daten führt.",
        "Eine bewusste, vertraglich gedeckte Übermittlung an einen Anbieter ist nichts davon. Was sie ist: der Punkt, ab dem du nicht mehr bestimmst, wo Kopien liegen, wie lange sie bleiben und wer sie im Fehlerfall sieht. Das ist ein Kontrollverlust, und das ist das zutreffende Wort dafür.",
        "Das ist keine Wortklauberei. Wer eine gewöhnliche Übermittlung ein Leck nennt, wird bei einem echten schwerer ernst genommen.",
      ],
      links: [
        { label: "Art. 4 Z 12 DSGVO — Definition der Verletzung des Schutzes personenbezogener Daten", href: GDPR_ART_4 },
      ],
    },
    {
      heading: "Training läuft gebündelt, nicht live",
      level: "assessment",
      paragraphs: [
        "Ein Satz, den du tippst, wird nicht beim Tippen Teil eines Modells. Trainingsläufe werden als abgegrenzte, teure Vorgänge vorbereitet und ausgeführt, und Material wird ausgewählt, aufbereitet und gefiltert, bevor irgendetwas davon überhaupt infrage kommt.",
        "Das wirkt in beide Richtungen. Deine Eingabe wird nicht sofort auswendig gelernt und von Fremden abrufbar — eine Befürchtung, die kursiert und so nicht funktioniert. Es heißt aber auch: Ist Material einmal in einem abgeschlossenen Lauf gewesen, entfernt das nachträgliche Löschen der Unterhaltung es nicht aus dem trainierten Modell.",
      ],
    },
    {
      heading: "„Mit unseren Daten trainiert“ ist meist kein Training",
      level: "assessment",
      paragraphs: [
        "Ein Werkzeug, das als spezialisiert auf Recht, Medizin oder eine Branche verkauft wird, ist häufiger ein System-Prompt plus Abruf über eine Dokumentensammlung als ein feinabgestimmtes Modell. Beides kann ein gutes Produkt sein, und das Marketing unterscheidet es selten.",
        "Die Frage lohnt sich trotzdem, denn die Antworten unterscheiden sich genau in dem, was dich betrifft: was der Aufbau gekostet hat, wo dein Material landet, und was geschieht, wenn das zugrunde liegende Modell ausgetauscht wird. Die Wörter, mit denen man fragt, sind Fine-Tuning und Retrieval — und Fragen genügt meist, um es zu erfahren.",
      ],
    },
    {
      heading: "Was daraus folgt",
      level: "advice",
      paragraphs: [
        "Lies die Trainingseinstellung als Aufbewahrungseinstellung — mindestens ein Anbieter macht sie ausdrücklich dazu.",
        "Geh davon aus, dass es mehr Kopien gibt, als die Oberfläche zeigt, und lass das entscheiden, was du sendest, statt zu hoffen.",
        "Nenn eine gewöhnliche Übermittlung kein Leck. Nenn sie den Punkt, an dem die Kontrolle endet — das ist zutreffend und schwerer zu bestreiten.",
        "Wenn ein Anbieter sagt, es sei mit ihren Daten trainiert: frag, ob Fine-Tuning oder Retrieval gemeint ist. Die Antwort ändert die Beurteilung.",
      ],
    },
  ],
};

export const getWhatYouAgreeTo = (locale: SiteLocale): Article => (locale === "de" ? de : en);
