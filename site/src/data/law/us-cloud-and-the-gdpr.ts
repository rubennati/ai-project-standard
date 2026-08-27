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
const DPF_DECISION = "https://eur-lex.europa.eu/eli/dec_impl/2023/1795/oj";
const T_553_23 = "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A62023TJ0553";
const C_703_25_P = "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A62025CN0703";
const SCHREMS_I = "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A62014CJ0362";
const SCHREMS_II = "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A62018CJ0311";

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
        "Three routes follow. Art. 45 allows a transfer where the Commission has decided the destination offers an adequate level of protection. Art. 46 allows one where the exporter has provided appropriate safeguards — standard contractual clauses and binding corporate rules being the familiar instruments — with enforceable rights and effective remedies available to the data subject. Art. 49 provides derogations for specific situations, and states them as a residual route: in the absence of an adequacy decision or appropriate safeguards, a transfer may take place only on one of an enumerated set of conditions — explicit informed consent, necessity for a contract with the data subject, important reasons of public interest, legal claims, vital interests, or a public register.",
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
      heading: "What the US adequacy decision covers",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Art. 45(1) allows the Commission to find adequacy for a third country, for a territory, or for one or more specified sectors within it. The decision for the United States — Commission Implementing Decision (EU) 2023/1795 — is scoped to commercial organisations that certify under the EU-US Data Privacy Framework, and the Commission's own list of adequacy decisions records it that way.",
        "So the relevant question about a US vendor is not \"is the US adequate\". It is whether that organisation is certified, which is a matter of public record rather than a claim in a sales deck.",
      ],
      links: [
        { label: "European Commission — adequacy decisions", href: ADEQUACY },
        { label: "Implementing Decision (EU) 2023/1795 — EU-US Data Privacy Framework", href: DPF_DECISION },
      ],
    },
    {
      heading: "That decision is under appeal, and its two predecessors were declared invalid",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "The adequacy decision was challenged directly. On 3 September 2025 the General Court dismissed the action in Case T-553/23, Latombe v Commission. An appeal against that judgment was brought on 31 October 2025 and is pending before the Court of Justice as Case C-703/25 P, seeking to set aside the judgment and annul the decision.",
        "The decision therefore stands and applies today. It is also the third arrangement of its kind, and the Court of Justice declared both predecessors invalid — Safe Harbour in 2015 (C-362/14) and the Privacy Shield in 2020 (C-311/18, where the operative part states that Implementing Decision (EU) 2016/1250 is invalid). Neither judgment limited its effects in time.",
        "That history is the reason to treat certification as a current fact rather than a settled one, and to know which alternative route under Art. 46 you would fall back on. Building a data path that has no answer if the decision goes is a decision in itself, made by default.",
      ],
      links: [
        { label: "Case T-553/23 — General Court judgment of 3 September 2025", href: T_553_23 },
        { label: "Case C-703/25 P — appeal brought 31 October 2025", href: C_703_25_P },
        { label: "Case C-362/14 (Schrems) — Safe Harbour declared invalid, 2015", href: SCHREMS_I },
        { label: "Case C-311/18 (Schrems II) — Privacy Shield declared invalid, 2020", href: SCHREMS_II },
      ],
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
        "An EU data centre is worth having and it is one line of a longer answer. It settles where content sits. It does not settle whether a transfer occurs, which is the question this page is about.",
        "A provider established outside the EU can store and process on European infrastructure, and that arrangement still has to be assessed under Chapter V. What decides it is who the provider is and who can be required to hand something over — not where the racks stand.",
        "The rest of what the phrase leaves open — sub-processors, administrative access, backups, logs, training use, retention and who holds the keys — is a question about the arrangement rather than about the transfer, and it is worked through on its own page.",
      ],
      links: [
        { label: "Where your data is, and who can reach it", href: "/data-flows/data-sovereignty" },
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
    "„Läuft in den USA, also verboten“ steht so nicht in der Verordnung — und „läuft in der EU“ macht die Verarbeitung nicht rechtskonform. Was geprüft werden muss und an welchen Artikeln.",
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
        "Daraus folgen drei Wege. Art. 45 erlaubt die Übermittlung, wenn die Kommission für das Ziel ein angemessenes Schutzniveau festgestellt hat. Art. 46 erlaubt sie, wenn geeignete Garantien vorliegen — Standardvertragsklauseln und verbindliche interne Datenschutzvorschriften sind die bekannten Instrumente —, verbunden mit durchsetzbaren Rechten und wirksamen Rechtsbehelfen für die betroffene Person. Art. 49 sieht Ausnahmen für bestimmte Fälle vor und formuliert sie als nachrangigen Weg: Fehlen ein Angemessenheitsbeschluss und geeignete Garantien, ist eine Übermittlung nur unter einer der aufgezählten Bedingungen zulässig — ausdrückliche informierte Einwilligung, Erforderlichkeit für einen Vertrag mit der betroffenen Person, wichtige Gründe des öffentlichen Interesses, Rechtsansprüche, lebenswichtige Interessen oder ein öffentliches Register.",
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
      heading: "Was der US-Angemessenheitsbeschluss erfasst",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Art. 45 Abs. 1 erlaubt der Kommission, Angemessenheit für ein Drittland, ein Gebiet oder einen oder mehrere Sektoren darin festzustellen. Der Beschluss für die Vereinigten Staaten — Durchführungsbeschluss (EU) 2023/1795 — ist auf kommerzielle Organisationen zugeschnitten, die sich unter dem EU-US Data Privacy Framework zertifizieren, und so führt ihn auch die Liste der Kommission.",
        "Die maßgebliche Frage zu einem US-Anbieter lautet deshalb nicht „sind die USA angemessen“. Sie lautet, ob diese Organisation zertifiziert ist — und das ist öffentlich einsehbar, keine Behauptung aus einer Verkaufsunterlage.",
      ],
      links: [
        { label: "Europäische Kommission — Angemessenheitsbeschlüsse", href: ADEQUACY },
        { label: "Durchführungsbeschluss (EU) 2023/1795 — EU-US Data Privacy Framework", href: DPF_DECISION },
      ],
    },
    {
      heading: "Gegen diesen Beschluss läuft ein Rechtsmittel, und beide Vorgänger wurden für ungültig erklärt",
      level: "law",
      checked: CHECKED,
      paragraphs: [
        "Der Angemessenheitsbeschluss wurde unmittelbar angegriffen. Am 3. September 2025 wies das Gericht die Klage in der Rechtssache T-553/23, Latombe/Kommission, ab. Gegen dieses Urteil wurde am 31. Oktober 2025 ein Rechtsmittel eingelegt, das beim Gerichtshof als Rechtssache C-703/25 P anhängig ist und darauf zielt, das Urteil aufzuheben und den Beschluss für nichtig zu erklären.",
        "Der Beschluss gilt also und ist heute anwendbar. Er ist zugleich die dritte Regelung dieser Art, und der Gerichtshof hat beide Vorgänger für ungültig erklärt — Safe Harbour 2015 (C-362/14) und den Privacy Shield 2020 (C-311/18, dessen Tenor feststellt, dass der Durchführungsbeschluss (EU) 2016/1250 ungültig ist). Keines der beiden Urteile hat seine Wirkungen zeitlich begrenzt.",
        "Diese Vorgeschichte ist der Grund, die Zertifizierung als gegenwärtige und nicht als endgültige Tatsache zu behandeln — und zu wissen, auf welchen Weg nach Art. 46 du ausweichen würdest. Einen Datenweg zu bauen, für den es keine Antwort gibt, falls der Beschluss fällt, ist selbst eine Entscheidung, nur eine unbewusste.",
      ],
      links: [
        { label: "Rechtssache T-553/23 — Urteil des Gerichts vom 3. September 2025", href: T_553_23 },
        { label: "Rechtssache C-703/25 P — Rechtsmittel vom 31. Oktober 2025", href: C_703_25_P },
        { label: "Rechtssache C-362/14 (Schrems) — Safe Harbour für ungültig erklärt, 2015", href: SCHREMS_I },
        { label: "Rechtssache C-311/18 (Schrems II) — Privacy Shield für ungültig erklärt, 2020", href: SCHREMS_II },
      ],
    },
    {
      heading: "Ein Auftragsverarbeitungsvertrag macht ebenso wenig rechtskonform",
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
        "Ein Rechenzentrum in der EU ist etwas wert und es ist eine Zeile einer längeren Antwort. Es klärt, wo Inhalte liegen. Es klärt nicht, ob eine Übermittlung stattfindet — und darum geht es auf dieser Seite.",
        "Ein Anbieter mit Sitz außerhalb der EU kann auf europäischer Infrastruktur speichern und verarbeiten, und diese Konstellation ist trotzdem nach Kapitel V zu prüfen. Entscheidend ist, wer der Anbieter ist und wer zur Herausgabe gezwungen werden kann — nicht, wo die Server stehen.",
        "Was die Formulierung sonst offenlässt — Unterauftragsverarbeiter, Administrationszugriffe, Sicherungen, Protokolle, Trainingsnutzung, Aufbewahrung und wer die Schlüssel hält — betrifft die Konstellation und nicht die Übermittlung. Das steht auf einer eigenen Seite.",
      ],
      links: [
        { label: "Wo deine Daten liegen und wer herankommt", href: "/de/data-flows/data-sovereignty" },
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
