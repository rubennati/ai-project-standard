export type SiteLocale = "en" | "de";

export const defaultLocale: SiteLocale = "en";
export const locales: SiteLocale[] = ["en", "de"];

export const ui = {
  en: {
    skipToMain: "Skip to main content",
    language: "Language",
    englishShort: "EN",
    germanShort: "DE",
    home: "Home",
    docs: "Docs",
    blog: "Blog",
    about: "About",
    primaryNavigation: "Primary navigation",
    glossaryIndex: "Glossary Index",
    glossary: "Glossary",
    useCases: "Use cases",
    profiles: "Profiles",
    legalNotice: "Legal Notice",
    privacyPolicy: "Privacy Policy",
    footerProject: "Project",
    footerTrust: "Trust",
    footerLegal: "Legal",
    technicalRepository: "Technical repository",
    codeLicense: "MIT (code)",
    finePrintCode: "Code",
    finePrintSiteContent: "Site content",
    contentLicence: "CC BY 4.0",
    licensingHeading: "Licensing",
    licensingCode:
      "The repository — the code and the documentation inside it, including the pages rendered from it under /docs/ — is under the MIT licence.",
    licensingContent:
      "The texts written for this site are under Creative Commons Attribution 4.0 International. Reuse them, commercially included, as long as you credit the source.",
    contribute: "Contribute",
    reportProblem: "Report a problem with this page",
    reportVulnerability: "Report a vulnerability",
    securityTxt: "security.txt",
    english: "English",
    german: "German",
    search: "Search",
    searchPlaceholder:
      "Search term, definition, alias, related term, or observed-in source",
    includeProductLabels: "Include product/UI labels",
    whereDidISeeIt: "Where did I see it?",
    allSources: "All sources",
    showing: "Showing",
    entry: "entry",
    entries: "entries",
    productLabel: "product label",
    breadcrumbHome: "Home",
    explanation: "Plain-language explanation",
    aiContext: "AI context",
    commonConfusion: "Common confusion",
    relatedTerms: "Related terms",
    aliases: "Aliases",
    observedIn: "Observed in",
    backToGlossary: "Back to the glossary index",
    glossaryTitle: "AI Term Index",
    glossaryDescription:
      "A maintained index of AI, LLM, tooling, and product terms. Use it to find a term and open its definition page.",
    glossaryIntro:
      "This is a working index of AI- and LLM-near vocabulary. Deeper explanations live on the term pages, while broader guides and project documentation will stay separate.",
    homeTitle: "AI Standard",
    homeDescription:
      "What actually happens when you use AI at work: where your data goes, what you are allowed to put in, and what the law already requires.",
    homeHeading: "What actually happens when you use AI at work.",
    homeLead:
      "Written from a security practitioner's desk. Not the question of whether AI is dangerous, but the ones you hit in practice: where does a prompt travel once you press enter, whose jurisdiction is it in by then, what may you put in when it belongs to a client, and what does the law already require of you.",
    homeStance:
      "The answers are not always the comfortable ones. \u201cEU-hosted\u201d is not the same as \u201csafer\u201d \u2014 a small team sharing admin rights, without an ISMS or an audit trail, can expose you more than a large provider where you are one anonymous number among millions.",
    homePrimaryLink: "The standard",
    homeSecondaryLink: "Look up a term",

    whatThisSiteIsFor: "What this site is for",
    doorPaste: "Before you paste",
    doorPasteCopy:
      "Where the data goes, per tool class \u2014 chat, coding agents, MCP servers, automation platforms. The route, the servers, the jurisdiction, how long it is kept, and whether \u201cdeleted\u201d means deleted.",
    doorAllowed: "What you are allowed to do",
    doorAllowedCopy:
      "Two questions, often confused. Personal data is a matter of data protection law; source code, client material and anything under an NDA is a matter of confidentiality \u2014 no less binding for not being personal. Private use differs from company use, generated content carries a labelling duty, and much of it is already law.",
    doorSetup: "How to set it up",
    doorSetupCopy:
      "An agent with access to a repository or a server can do a great deal. What to restrict before you grant it, and the conventions that keep the work reviewable afterwards.",

    whatIsAvailableNow: "What is here today",
    nowStandard: "The standard",
    nowStandardCopy:
      "Repository conventions for working with AI, kept in the repository underneath and rendered here.",
    nowUseCases: "Use cases",
    nowUseCasesCopy:
      "Four starting points, from a new project to professionalising an existing one.",
    nowGlossary: "Glossary",
    nowGlossaryCopy: "Terms, for when you need to know what someone actually means.",
    stillWriting:
      "Still being written: the tool-by-tool data-flow guides, the legal section, and the blog. This site is growing. What is here is maintained; what is missing is named rather than faked.",

    aboutTitle: "About",
    aboutDescription: "About the AI Standard, its architecture, and its maintainer.",
    aboutIntro:
      "A starting baseline for open-source projects that use AI. Four pillars: human-AI collaboration, open-source operations, engineering operations, knowledge and documentation.",
    aboutLayerCopy:
      "The repository is the operational layer: workflows, AI state, governance, templates. This site is the knowledge layer: explanations, comparisons, tutorials, research, and blog.",
    maintainer: "Maintainer",
    license: "License",
    acknowledgements: "Acknowledgements",
    acknowledgementsCopy:
      "The standard draws on the AGENTS.md cross-vendor convention, tool instruction formats, and broader open-source governance practices.",
    legalNoticeDescription: "Legal notice and contact address for the AI Standard website.",
    legalNoticeHeading: "Who operates this site",
    operatorLabel: "Operator",
    registeredAsLabel: "Registered as",
    addressLabel: "Address",
    emailLabel: "Email",
    companyRegisterLabel: "Company register",
    vatLabel: "VAT identification number",
    moreContact: "Issues, security advisories and further contact routes are in the repository:",
    purposeLabel: "Purpose of this site:",
    privacyInline: "privacy policy",
    purposeCopy:
      "a knowledge base on AI terminology and project conventions. It sells nothing, carries no advertising, sets no cookies and runs no tracking or analytics. Delivery runs through Cloudflare and GitHub Pages, which log visitors' IP addresses for security and availability \u2014 see",
    privacyPolicyDescription: "How the AI Standard website handles personal data: no cookies, no analytics, and what the hosting providers log.",
  },
  de: {
    skipToMain: "Zum Hauptinhalt springen",
    language: "Sprache",
    home: "Startseite",
    docs: "Docs",
    blog: "Blog",
    about: "Über",
    primaryNavigation: "Hauptnavigation",
    glossaryIndex: "Glossarindex",
    glossary: "Glossar",
    useCases: "Anwendungsfälle",
    profiles: "Profile",
    legalNotice: "Impressum",
    privacyPolicy: "Datenschutz",
    footerProject: "Projekt",
    footerTrust: "Vertrauen",
    footerLegal: "Rechtliches",
    technicalRepository: "Technisches Repository",
    codeLicense: "MIT (Code)",
    finePrintCode: "Code",
    finePrintSiteContent: "Website-Inhalte",
    contentLicence: "CC BY 4.0",
    licensingHeading: "Lizenzen",
    licensingCode:
      "Das Repository — der Code und die darin enthaltene Dokumentation, einschließlich der daraus erzeugten Seiten unter /docs/ — steht unter der MIT-Lizenz.",
    licensingContent:
      "Die eigens für diese Website verfassten Texte stehen unter Creative Commons Namensnennung 4.0 International. Weiterverwendung, auch kommerziell, ist bei Nennung der Quelle erlaubt.",
    contribute: "Mitwirken",
    reportProblem: "Problem auf dieser Seite melden",
    reportVulnerability: "Sicherheitslücke melden",
    securityTxt: "security.txt",
    english: "Englisch",
    german: "Deutsch",
    englishShort: "EN",
    germanShort: "DE",
    search: "Suche",
    searchPlaceholder:
      "Begriff, Definition, Alias, verwandten Begriff oder Quelle durchsuchen",
    includeProductLabels: "Produkt- und UI-Begriffe einblenden",
    whereDidISeeIt: "Wo habe ich den Begriff gesehen?",
    allSources: "Alle Quellen",
    showing: "Zeige",
    entry: "Eintrag",
    entries: "Einträge",
    productLabel: "Produktbegriff",
    breadcrumbHome: "Startseite",
    explanation: "Einfache Erklärung",
    aiContext: "KI-Kontext",
    commonConfusion: "Häufige Verwechslungen",
    relatedTerms: "Verwandte Begriffe",
    aliases: "Alternative Bezeichnungen",
    observedIn: "Beobachtet in",
    backToGlossary: "Zurück zum Glossarindex",
    glossaryTitle: "KI-Termindex",
    glossaryDescription:
      "Ein gepflegter Index für KI-, LLM-, Tooling- und Produktbegriffe. Er hilft dabei, einen Begriff zu finden und die passende Erklärungsseite zu öffnen.",
    glossaryIntro:
      "Dies ist ein Arbeitsindex für KI- und LLM-nahe Begriffe. Tiefere Erklärungen liegen auf den einzelnen Begriffseiten. Breitere Guides und Projektdokumentation werden später getrennt ausgebaut.",
    homeTitle: "AI Standard",
    homeDescription:
      "Was beim Einsatz von KI im Arbeitsalltag wirklich passiert: wohin die Daten gehen, was hinein darf, und was das Gesetz längst verlangt.",
    homeHeading: "Was beim Einsatz von KI im Arbeitsalltag wirklich passiert.",
    homeLead:
      "Geschrieben aus der Sicht eines Security-Praktikers. Nicht die Frage, ob KI gefährlich ist, sondern die, die in der Praxis auftauchen: Wohin wandert ein Prompt, sobald du Enter drückst, in wessen Rechtsraum liegt er dann, was darfst du hineingeben, wenn es Kundendaten sind, und was verlangt das Gesetz längst von dir.",
    homeStance:
      "Die Antworten sind nicht immer die bequemen. \u201eIn der EU gehostet\u201c heißt nicht \u201esicherer\u201c \u2014 ein kleines Team, das sich Admin-Rechte teilt, ohne ISMS und ohne Nachvollziehbarkeit, kann dich stärker exponieren als ein großer Anbieter, bei dem du eine anonyme Nummer unter Millionen bist.",
    homePrimaryLink: "Zum Standard",
    homeSecondaryLink: "Begriffe nachschlagen",

    whatThisSiteIsFor: "Wofür diese Seite da ist",
    doorPaste: "Bevor du etwas hineinkopierst",
    doorPasteCopy:
      "Wohin die Daten gehen, je Werkzeugklasse \u2014 Chat, Coding-Agenten, MCP-Server, Automatisierungsplattformen. Der Weg, die Server, der Rechtsraum, die Aufbewahrung, und ob \u201egelöscht\u201c wirklich gelöscht heißt.",
    doorAllowed: "Was du darfst",
    doorAllowedCopy:
      "Zwei Fragen, die oft vermischt werden. Personenbezogene Daten sind eine Frage des Datenschutzrechts; Quellcode, Kundenmaterial und alles unter NDA eine Frage der Vertraulichkeit \u2014 nicht weniger bindend, nur weil es nicht personenbezogen ist. Privat ist nicht gleich betrieblich, generierte Inhalte sind kennzeichnungspflichtig, und einiges davon ist bereits Gesetz.",
    doorSetup: "Wie du es einrichtest",
    doorSetupCopy:
      "Ein Agent mit Zugriff auf ein Repository oder einen Server kann viel. Was du einschränken solltest, bevor du ihn lässt \u2014 und die Konventionen, die die Arbeit danach überprüfbar halten.",

    whatIsAvailableNow: "Was es heute gibt",
    nowStandard: "Der Standard",
    nowStandardCopy:
      "Repository-Konventionen für die Arbeit mit KI, gepflegt im Repository darunter und hier dargestellt.",
    nowUseCases: "Anwendungsfälle",
    nowUseCasesCopy:
      "Vier Ausgangspunkte, vom neuen Projekt bis zur Professionalisierung eines bestehenden.",
    nowGlossary: "Glossar",
    nowGlossaryCopy: "Begriffe, wenn du wissen musst, was jemand tatsächlich meint.",
    stillWriting:
      "Noch in Arbeit: die Datenfluss-Leitfäden je Werkzeug, der Rechtsteil und der Blog. Diese Seite wächst. Was da ist, wird gepflegt; was fehlt, wird benannt statt vorgetäuscht.",

    aboutTitle: "Über",
    aboutDescription: "Über den AI Standard, seine Architektur und seinen Maintainer.",
    aboutIntro:
      "Ein Ausgangsstandard für Open-Source-Projekte, die KI nutzen. Vier Säulen: Mensch-KI-Zusammenarbeit, Open-Source-Betrieb, Engineering Operations sowie Wissen und Dokumentation.",
    aboutLayerCopy:
      "Das Repository ist die operative Ebene: Workflows, AI-Status, Governance und Templates. Diese Website ist die Wissensebene: Erklärungen, Vergleiche, Tutorials, Recherche und Blog.",
    maintainer: "Maintainer",
    license: "Lizenz",
    acknowledgements: "Danksagung",
    acknowledgementsCopy:
      "Der Standard baut auf der AGENTS.md-Konvention, Werkzeug-Anweisungsformaten und breiteren Open-Source-Governance-Praktiken auf.",
    legalNoticeDescription: "Impressum und Kontaktadresse der AI-Project-Standard-Website.",
    legalNoticeHeading: "Wer diese Website betreibt",
    operatorLabel: "Betreiber",
    registeredAsLabel: "Firmenwortlaut",
    addressLabel: "Anschrift",
    emailLabel: "E-Mail",
    companyRegisterLabel: "Firmenbuch",
    vatLabel: "UID-Nummer",
    moreContact: "Issues, Security Advisories und weitere Kontaktwege finden sich im Repository:",
    purposeLabel: "Zweck dieser Website:",
    privacyInline: "Datenschutz",
    purposeCopy:
      "eine Wissensbasis zu KI-Begriffen und Projektkonventionen. Sie verkauft nichts, enthält keine Werbung, setzt keine Cookies und verwendet weder Tracking noch Analyse. Die Auslieferung läuft über Cloudflare und GitHub Pages, die IP-Adressen der Besucher zu Sicherheits- und Verfügbarkeitszwecken protokollieren \u2014 siehe",
    privacyPolicyDescription: "Wie die AI-Standard-Website mit personenbezogenen Daten umgeht: keine Cookies, keine Analyse, und was die Hosting-Anbieter protokollieren.",
  },
} as const;

export const getUi = (locale: SiteLocale) => ui[locale];
