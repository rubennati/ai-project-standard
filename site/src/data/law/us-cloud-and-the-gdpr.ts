/**
 * Whether connecting a mailbox to a US-hosted AI tool breaks the GDPR.
 *
 * The page exists because the confident version of this claim — "US cloud, so
 * it is illegal" — is repeated constantly and is not what the regulation says.
 * The regulation provides mechanisms for transfers to third countries. Whether
 * a particular setup is lawful is an assessment, and the answer is neither
 * automatically yes nor automatically no.
 *
 * The mirror-image error gets the same treatment: an EU data centre and a
 * signed processing agreement are not compliance either.
 *
 * Legal claims checked against the primary texts on 2026-08-09, including the
 * Commission's current list of adequacy decisions.
 */
import type { Article } from "../article";
import type { SiteLocale } from "../../i18n/ui";

export const CHECKED = "2026-08-09";

const ART_28 = "https://eur-lex.europa.eu/eli/reg/2016/679/art_28/oj/eng";
const ART_44 = "https://eur-lex.europa.eu/eli/reg/2016/679/art_44/oj/eng";
const ART_45 = "https://eur-lex.europa.eu/eli/reg/2016/679/art_45/oj/eng";
const ART_46 = "https://eur-lex.europa.eu/eli/reg/2016/679/art_46/oj/eng";
const ART_49 = "https://eur-lex.europa.eu/eli/reg/2016/679/art_49/oj/eng";
const ADEQUACY =
  "https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en";
const EDPB_SUPPLEMENTARY =
  "https://www.edpb.europa.eu/our-work-tools/our-documents/recommendations/recommendations-012020-measures-supplement-transfer_en";

const en: Article = {
  title: "Does a US-hosted AI tool break the GDPR?",
  subtitle: "What a third-country transfer requires, and why an EU data centre does not settle it either.",
  description:
    "\"It runs in the US, so it is illegal\" is not what the regulation says — and \"it runs in the EU\" is not compliance. What has to be assessed, and against which articles.",
  lead: "The confident version of this goes: our mail is connected to an American AI service, therefore we have a GDPR problem. It is repeated often enough to feel settled. The regulation does not say that. It sets out how transfers outside the EU may happen, and whether yours is lawful is a question with an answer — just not one you can read off the vendor's postal address.",
  sections: [
    {
      heading: "What is true is narrower than the claim",
      level: "assessment",
      paragraphs: [
        "Connect a mailbox to an AI service hosted outside the EU and you certainly have a processing operation that has to be assessed, and probably a transfer to a third country. That much is real, and it is not nothing.",
        "What does not follow is that it is unlawful. The regulation devotes an entire chapter to how such transfers are made, which would be an odd thing to write if the answer were always no.",
        "Both errors cost the same. Treating it as automatically forbidden means the assessment never happens, because there is nothing to assess. Treating it as automatically fine means the assessment never happens either.",
      ],
    },
    {
      heading: "Transfers outside the EU are provided for, not prohibited",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Chapter V of the GDPR governs transfers of personal data to third countries. Art. 44 states the general principle: such a transfer may take place only if the conditions in that chapter are met, so that the level of protection guaranteed by the regulation is not undermined.",
        "Three routes follow. Art. 45 allows a transfer where the Commission has decided the destination offers an adequate level of protection. Art. 46 allows one where the exporter has provided appropriate safeguards — standard contractual clauses and binding corporate rules being the familiar instruments — with enforceable rights and effective remedies available to the data subject. Art. 49 provides derogations for specific situations, which are narrow and not a general-purpose fallback.",
        "None of this is a loophole. It is the mechanism the regulation itself sets out, and using it correctly is the lawful path rather than an exception to one.",
      ],
      links: [
        { label: "Art. 44 GDPR — general principle for transfers", href: ART_44 },
        { label: "Art. 45 GDPR — transfers on the basis of an adequacy decision", href: ART_45 },
        { label: "Art. 46 GDPR — transfers subject to appropriate safeguards", href: ART_46 },
        { label: "Art. 49 GDPR — derogations for specific situations", href: ART_49 },
      ],
    },
    {
      heading: "Adequacy is granted to organisations here, not to a country",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "This is the detail that most summaries lose, and it changes the answer.",
        "The Commission's current list of adequacy decisions covers the United States only for commercial organisations participating in the EU-US Data Privacy Framework. Not the United States as a destination. A US provider that participates is in a different position from one that does not, and the difference is checkable — participation is a matter of public record, not a claim in a sales deck.",
        "Other destinations on the list are recognised as countries, with their own caveats. Adequacy decisions are also periodically reviewed by the Commission, so a decision that holds today is not a permanent fact about the world; it is a fact with a date on it, which is why this page carries one.",
      ],
      links: [{ label: "European Commission — adequacy decisions", href: ADEQUACY }],
    },
    {
      heading: "A processing agreement is not compliance either",
      level: "assessment",
      paragraphs: [
        "The mirror-image error is just as common and gets far less attention. A signed data processing agreement is required where a vendor processes on your instructions — Art. 28 GDPR — and it is not a certificate.",
        "Art. 28 also requires that you use only processors providing sufficient guarantees to implement appropriate technical and organisational measures. \"We have a DPA\" answers the paperwork half of that sentence and says nothing about the guarantees half.",
        "The same applies to standard contractual clauses. They are an instrument under Art. 46, and the EDPB's recommendations on supplementary measures exist precisely because signing them can leave a gap that has to be assessed and, where needed, closed by additional technical or organisational measures.",
      ],
      links: [
        { label: "Art. 28 GDPR — processor obligations", href: ART_28 },
        {
          label: "EDPB — recommendations on measures supplementing transfer tools",
          href: EDPB_SUPPLEMENTARY,
        },
      ],
    },
    {
      heading: "\"EU-hosted\" answers one question out of many",
      level: "assessment",
      paragraphs: [
        "An EU data centre is worth having and it is one line of a longer answer. A provider can store and process in Europe while several other things remain open.",
        "Each of these can move data, expose it, or extend how long it exists — and none of them is visible in the phrase \"hosted in the EU\":",
      ],
      list: [
        "Sub-processors, and where each of them sits",
        "Support and administrative access, including from outside the EU",
        "Backups and disaster-recovery copies, and their locations",
        "Logs, telemetry and metadata, which are frequently held separately from content",
        "Whether content is used for training, and under which tier of the contract",
        "Retention periods, and what deletion actually removes",
        "Encryption, and who holds the keys",
      ],
    },
    {
      heading: "What an assessment covers",
      level: "advice",
      paragraphs: [
        "The useful question is not where the servers are. It is a short list, and working through it is faster than arguing about the conclusion.",
      ],
      list: [
        "Roles: who is controller and who is processor, for this processing",
        "Legal basis under Art. 6, named rather than assumed",
        "Whether a transfer to a third country occurs at all, and by which route under Chapter V",
        "Purpose limitation and data minimisation — is everything being sent actually needed",
        "Technical and organisational measures, including what the vendor can see",
        "Retention, deletion, and what happens to derived copies such as indexes and logs",
        "Whether special-category data is involved, which raises the bar considerably",
      ],
    },
    {
      heading: "Limits of this page",
      level: "assessment",
      paragraphs: [
        "This is a framework for asking the right question, not legal advice, and it does not decide your case. Sector rules — health, law, finance — carry duties this page does not touch, and a supervisory authority in your member state may take a firmer position than the general text.",
        "It is also a correction rather than a clearance. Nothing here says a US-hosted tool is fine. It says the answer comes from an assessment you can carry out, and that both confident versions — \"illegal\" and \"we have a DPA, so it is fine\" — skip it.",
      ],
    },
  ],
};

const de: Article = {
  title: "Verstößt ein KI-Dienst mit US-Hosting gegen die DSGVO?",
  subtitle: "Was eine Drittlandübermittlung verlangt — und warum ein Rechenzentrum in der EU die Frage ebenso wenig beantwortet.",
  description:
    "„Läuft in den USA, also verboten“ steht so nicht in der Verordnung — und „läuft in der EU“ ist keine Rechtskonformität. Was geprüft werden muss und an welchen Artikeln.",
  lead: "Die selbstbewusste Fassung geht so: Unsere Mail hängt an einem amerikanischen KI-Dienst, also haben wir ein DSGVO-Problem. Sie wird oft genug wiederholt, um wie geklärt zu wirken. In der Verordnung steht das nicht. Sie regelt, wie Übermittlungen aus der EU heraus stattfinden dürfen — und ob deine zulässig ist, hat eine Antwort. Nur lässt sie sich nicht an der Postanschrift des Anbieters ablesen.",
  sections: [
    {
      heading: "Wahr ist weniger, als behauptet wird",
      level: "assessment",
      paragraphs: [
        "Hängt ein Postfach an einem KI-Dienst außerhalb der EU, liegt sicher eine Verarbeitung vor, die geprüft werden muss, und wahrscheinlich eine Übermittlung in ein Drittland. Das ist real und keine Kleinigkeit.",
        "Daraus folgt aber nicht, dass es unzulässig ist. Die Verordnung widmet solchen Übermittlungen ein ganzes Kapitel — eine merkwürdige Mühe, wenn die Antwort immer nein wäre.",
        "Beide Irrtümer kosten dasselbe. Wer es für automatisch verboten hält, prüft nie, weil es nichts zu prüfen gäbe. Wer es für automatisch unbedenklich hält, prüft ebenso wenig.",
      ],
    },
    {
      heading: "Übermittlungen aus der EU sind vorgesehen, nicht verboten",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Kapitel V der DSGVO regelt die Übermittlung personenbezogener Daten an Drittländer. Art. 44 nennt den Grundsatz: Eine solche Übermittlung ist nur zulässig, wenn die Bedingungen dieses Kapitels eingehalten werden, damit das durch die Verordnung gewährleistete Schutzniveau nicht untergraben wird.",
        "Daraus folgen drei Wege. Art. 45 erlaubt die Übermittlung, wenn die Kommission für das Ziel ein angemessenes Schutzniveau festgestellt hat. Art. 46 erlaubt sie, wenn geeignete Garantien vorliegen — Standardvertragsklauseln und verbindliche interne Datenschutzvorschriften sind die bekannten Instrumente —, verbunden mit durchsetzbaren Rechten und wirksamen Rechtsbehelfen für die betroffene Person. Art. 49 sieht Ausnahmen für bestimmte Fälle vor, die eng gefasst sind und keinen allgemeinen Auffangtatbestand darstellen.",
        "Nichts davon ist eine Lücke. Es ist der Mechanismus, den die Verordnung selbst vorsieht — ihn korrekt zu nutzen ist der zulässige Weg und keine Ausnahme davon.",
      ],
      links: [
        { label: "Art. 44 DSGVO — allgemeine Grundsätze der Übermittlung", href: ART_44 },
        { label: "Art. 45 DSGVO — Übermittlung auf Grundlage eines Angemessenheitsbeschlusses", href: ART_45 },
        { label: "Art. 46 DSGVO — Übermittlung vorbehaltlich geeigneter Garantien", href: ART_46 },
        { label: "Art. 49 DSGVO — Ausnahmen für bestimmte Fälle", href: ART_49 },
      ],
    },
    {
      heading: "Angemessenheit gilt hier Organisationen, nicht einem Land",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Das ist die Feinheit, die in den meisten Zusammenfassungen verlorengeht — und sie ändert die Antwort.",
        "Die aktuelle Liste der Angemessenheitsbeschlüsse der Kommission erfasst die Vereinigten Staaten ausschließlich für kommerzielle Organisationen, die am EU-US Data Privacy Framework teilnehmen. Nicht die USA als Ziel. Ein US-Anbieter, der teilnimmt, steht anders da als einer, der es nicht tut — und der Unterschied ist überprüfbar, denn die Teilnahme ist öffentlich einsehbar und keine Behauptung aus einer Verkaufsunterlage.",
        "Andere Ziele auf der Liste sind als Länder anerkannt, jeweils mit eigenen Einschränkungen. Angemessenheitsbeschlüsse werden von der Kommission zudem regelmäßig überprüft. Was heute gilt, ist also keine dauerhafte Tatsache, sondern eine mit Datum — deshalb trägt diese Seite eines.",
      ],
      links: [{ label: "Europäische Kommission — Angemessenheitsbeschlüsse", href: ADEQUACY }],
    },
    {
      heading: "Ein Auftragsverarbeitungsvertrag ist ebenso wenig Rechtskonformität",
      level: "assessment",
      paragraphs: [
        "Der spiegelbildliche Irrtum ist ebenso verbreitet und bekommt weit weniger Aufmerksamkeit. Ein unterschriebener Auftragsverarbeitungsvertrag ist erforderlich, wenn ein Anbieter weisungsgebunden verarbeitet — Art. 28 DSGVO —, und er ist kein Zertifikat.",
        "Art. 28 verlangt außerdem, nur Auftragsverarbeiter einzusetzen, die hinreichende Garantien für geeignete technische und organisatorische Maßnahmen bieten. „Wir haben einen AVV“ beantwortet die Papierhälfte dieses Satzes und sagt zur Garantienhälfte nichts.",
        "Für Standardvertragsklauseln gilt dasselbe. Sie sind ein Instrument nach Art. 46, und die Empfehlungen des EDSA zu ergänzenden Maßnahmen existieren gerade deshalb, weil ihre Unterzeichnung eine Lücke lassen kann, die geprüft und nötigenfalls durch zusätzliche technische oder organisatorische Maßnahmen geschlossen werden muss.",
      ],
      links: [
        { label: "Art. 28 DSGVO — Auftragsverarbeiter", href: ART_28 },
        {
          label: "EDSA — Empfehlungen zu ergänzenden Maßnahmen bei Übermittlungsinstrumenten",
          href: EDPB_SUPPLEMENTARY,
        },
      ],
    },
    {
      heading: "„EU-Hosting“ beantwortet eine Frage von vielen",
      level: "assessment",
      paragraphs: [
        "Ein Rechenzentrum in der EU ist etwas wert und es ist eine Zeile einer längeren Antwort. Ein Anbieter kann in Europa speichern und verarbeiten, während mehreres offen bleibt.",
        "Jeder dieser Punkte kann Daten bewegen, offenlegen oder ihre Lebensdauer verlängern — und keiner davon ist in der Formulierung „in der EU gehostet“ sichtbar:",
      ],
      list: [
        "Unterauftragsverarbeiter und deren jeweiliger Sitz",
        "Support- und Administrationszugriffe, auch von außerhalb der EU",
        "Sicherungen und Notfallkopien samt ihren Speicherorten",
        "Protokolle, Telemetrie und Metadaten, die häufig getrennt vom Inhalt liegen",
        "Ob Inhalte zum Training genutzt werden, und unter welcher Vertragsstufe",
        "Aufbewahrungsfristen und was eine Löschung tatsächlich entfernt",
        "Verschlüsselung und wer die Schlüssel hält",
      ],
    },
    {
      heading: "Was eine Prüfung umfasst",
      level: "advice",
      paragraphs: [
        "Die nützliche Frage ist nicht, wo die Server stehen. Es ist eine kurze Liste, und sie durchzugehen geht schneller, als über das Ergebnis zu streiten.",
      ],
      list: [
        "Rollen: wer ist für diese Verarbeitung Verantwortlicher, wer Auftragsverarbeiter",
        "Rechtsgrundlage nach Art. 6, benannt statt unterstellt",
        "Ob überhaupt eine Drittlandübermittlung vorliegt und über welchen Weg nach Kapitel V",
        "Zweckbindung und Datenminimierung — wird wirklich nur Nötiges übertragen",
        "Technische und organisatorische Maßnahmen, einschließlich dessen, was der Anbieter sehen kann",
        "Aufbewahrung, Löschung und was mit abgeleiteten Kopien wie Indizes und Protokollen geschieht",
        "Ob besondere Kategorien personenbezogener Daten betroffen sind, was die Anforderungen deutlich erhöht",
      ],
    },
    {
      heading: "Grenzen dieser Seite",
      level: "assessment",
      paragraphs: [
        "Das ist ein Gerüst für die richtige Frage, keine Rechtsberatung, und es entscheidet deinen Fall nicht. Branchenregeln — Gesundheit, Anwaltschaft, Finanzwesen — bringen Pflichten mit, die diese Seite nicht berührt, und eine Aufsichtsbehörde in deinem Mitgliedstaat kann strenger auslegen als der allgemeine Text.",
        "Und es ist eine Korrektur, keine Unbedenklichkeitsbescheinigung. Nirgends steht hier, ein US-gehostetes Tool sei unproblematisch. Es steht hier, dass die Antwort aus einer Prüfung kommt, die du durchführen kannst — und dass beide selbstbewussten Fassungen, „verboten“ und „wir haben einen AVV, also passt es“, diese Prüfung überspringen.",
      ],
    },
  ],
};

export const getUsCloudAndTheGdpr = (locale: SiteLocale): Article => (locale === "de" ? de : en);
