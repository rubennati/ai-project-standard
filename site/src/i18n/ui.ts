export type SiteLocale = "en" | "de";

export const defaultLocale: SiteLocale = "en";
export const locales: SiteLocale[] = ["en", "de"];

export const ui = {
  en: {
    skipToMain: "Skip to main content",
    language: "Language",
    englishShort: "EN",
    germanShort: "DE",
    brandTagline: "AI knowledge base",
    home: "Home",
    docs: "Docs",
    about: "About",
    primaryNavigation: "Primary navigation",
    glossaryIndex: "Glossary Index",
    legalNotice: "Legal Notice",
    privacyPolicy: "Privacy Policy",
    sourceOnGitHub: "Source on GitHub",
    english: "English",
    german: "German",
    search: "Search",
    searchPlaceholder:
      "Search term, definition, alias, related term, or observed-in source",
    includeProductLabels: "Include product/UI labels",
    whereDidISeeIt: "Where did I see it?",
    allSources: "All sources",
    noResults: "No results.",
    showing: "Showing",
    entry: "entry",
    entries: "entries",
    productLabel: "product label",
    breadcrumbHome: "Home",
    breadcrumbGlossary: "Glossary Index",
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
    homeTitle: "AI Project Standard",
    homeDescription: "An evolving knowledge base for AI terminology, concepts, and relationships.",
    homeHeading: "An evolving knowledge base for AI terminology and concepts.",
    homeLead:
      "AI terms and product names change quickly. Different tools often use the same words in different ways, or mean slightly different things.",
    aboutKnowledgeBase: "About this knowledge base",
    glossarySecondaryLink: "Browse the term index",
    collectTerms: "Collect terms",
    collectTermsCopy:
      "This project collects important AI terms, product concepts, and their relationships in a simple, understandable form.",
    clarifyDifferences: "Clarify meaning",
    clarifyDifferencesCopy:
      "Terms like agent, memory, RAG, or workflow are often used differently. The site makes those differences easier to see over time.",
    understandingBeforeImplementation: "Understand before implementation",
    understandingBeforeImplementationCopy:
      "Before deeper architecture or implementation topics are added, the focus stays on a clear shared understanding of the basics.",
    knowledgeBaseInProgress: "Knowledge base in progress",
    knowledgeBaseInProgressCopy:
      "This site is not finished. It is growing into a knowledge base for professional AI use in technical projects.",
    whatThisSiteIsFor: "What this site is for",
    whatIsAvailableNow: "What is available now",
    whatIsAvailableNowCopy:
      "The site is still growing. Today, it offers a maintained entry point into AI terminology while keeping technical repository documentation separate.",
    glossaryNow: "Term index",
    glossaryNowCopy:
      "Use the glossary index to find AI, LLM, tooling, and product terms quickly.",
    termPagesNow: "Term pages",
    termPagesNowCopy:
      "Open an individual term page when you want a plain-language explanation, AI context, and related terms.",
    docsNow: "Technical reference",
    docsNowCopy:
      "Repository-specific reference material remains under Docs so the knowledge layer stays focused and readable.",
    aboutTitle: "About",
    aboutDescription: "About the AI Project Standard, its architecture, and its maintainer.",
    aboutIntro:
      "A starting baseline for open-source projects that use AI. Four pillars: human-AI collaboration, open-source operations, software engineering, knowledge and documentation.",
    aboutLayerCopy:
      "The repository is the operational layer: workflows, AI state, governance, templates. This site is the knowledge layer: explanations, comparisons, tutorials, research, and blog.",
    maintainer: "Maintainer",
    maintainerCopy:
      "Created and maintained by Ruben Nati. Contributions are welcome through the contribution guide.",
    license: "License",
    licenseCopy: "Released under the MIT License.",
    acknowledgements: "Acknowledgements",
    acknowledgementsCopy:
      "The standard draws on the AGENTS.md cross-vendor convention, tool instruction formats, and broader open-source governance practices.",
    legalNoticeDescription: "Placeholder legal notice page for the AI Project Standard website.",
    legalNoticeCopy: "This is a placeholder legal notice page for the AI Project Standard website.",
    legalNoticeNote:
      "It will later cover the legal notice requirements relevant to this site.",
    privacyPolicyDescription: "Placeholder privacy policy page for the AI Project Standard website.",
    privacyPolicyCopy:
      "This is a placeholder privacy policy page for the AI Project Standard website.",
    privacyPolicyNote:
      "It will later cover privacy, data protection, and GDPR-related information relevant to this site.",
  },
  de: {
    skipToMain: "Zum Hauptinhalt springen",
    language: "Sprache",
    brandTagline: "KI-Wissensbasis",
    home: "Startseite",
    docs: "Docs",
    about: "Über",
    primaryNavigation: "Hauptnavigation",
    glossaryIndex: "Glossarindex",
    legalNotice: "Rechtliche Hinweise",
    privacyPolicy: "Datenschutz",
    sourceOnGitHub: "Quelle auf GitHub",
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
    noResults: "Keine Treffer.",
    showing: "Zeige",
    entry: "Eintrag",
    entries: "Einträge",
    productLabel: "Produktbegriff",
    breadcrumbHome: "Startseite",
    breadcrumbGlossary: "Glossarindex",
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
    homeTitle: "AI Project Standard",
    homeDescription: "Eine wachsende Wissensbasis für KI-Begriffe, Konzepte und Zusammenhänge.",
    homeHeading: "Eine wachsende Wissensbasis für KI-Begriffe und Konzepte.",
    homeLead:
      "KI-Begriffe und Produktnamen ändern sich schnell. Verschiedene Werkzeuge verwenden oft dieselben Wörter unterschiedlich oder mit leicht anderer Bedeutung.",
    aboutKnowledgeBase: "Über diese Wissensbasis",
    glossarySecondaryLink: "Begriffsindex öffnen",
    collectTerms: "Begriffe sammeln",
    collectTermsCopy:
      "Dieses Projekt sammelt wichtige KI-Begriffe, Produktkonzepte und ihre Beziehungen in einer einfachen und verständlichen Form.",
    clarifyDifferences: "Bedeutungen klären",
    clarifyDifferencesCopy:
      "Begriffe wie Agent, Memory, RAG oder Workflow werden oft unterschiedlich verwendet. Die Website macht diese Unterschiede mit der Zeit leichter sichtbar.",
    understandingBeforeImplementation: "Verstehen vor Umsetzung",
    understandingBeforeImplementationCopy:
      "Bevor tiefere Architektur- oder Umsetzungsthemen hinzukommen, liegt der Fokus auf einem klaren gemeinsamen Verständnis der Grundlagen.",
    knowledgeBaseInProgress: "Wissensbasis im Aufbau",
    knowledgeBaseInProgressCopy:
      "Diese Website ist noch nicht fertig. Sie wächst zu einer Wissensbasis für den professionellen Einsatz von KI in technischen Projekten.",
    whatThisSiteIsFor: "Wofür diese Website da ist",
    whatIsAvailableNow: "Was heute schon verfügbar ist",
    whatIsAvailableNowCopy:
      "Die Website wächst noch. Aktuell bietet sie einen gepflegten Einstieg in KI-Begriffe und hält die technische Repository-Dokumentation bewusst getrennt.",
    glossaryNow: "Begriffsindex",
    glossaryNowCopy:
      "Über den Glossarindex lassen sich KI-, LLM-, Tooling- und Produktbegriffe schnell finden.",
    termPagesNow: "Begriffsseiten",
    termPagesNowCopy:
      "Die einzelnen Begriffsseiten erklären einen Begriff in einfacher Sprache, im KI-Kontext und mit verwandten Begriffen.",
    docsNow: "Technische Referenz",
    docsNowCopy:
      "Repository-spezifische Referenzinhalte bleiben unter Docs, damit die Wissensebene klar und lesbar bleibt.",
    aboutTitle: "Über",
    aboutDescription: "Über den AI Project Standard, seine Architektur und seinen Maintainer.",
    aboutIntro:
      "Ein Ausgangsstandard für Open-Source-Projekte, die KI nutzen. Vier Säulen: Mensch-KI-Zusammenarbeit, Open-Source-Betrieb, Software Engineering sowie Wissen und Dokumentation.",
    aboutLayerCopy:
      "Das Repository ist die operative Ebene: Workflows, AI-Status, Governance und Templates. Diese Website ist die Wissensebene: Erklärungen, Vergleiche, Tutorials, Recherche und Blog.",
    maintainer: "Maintainer",
    maintainerCopy:
      "Erstellt und gepflegt von Ruben Nati. Beiträge sind über den Contribution Guide willkommen.",
    license: "Lizenz",
    licenseCopy: "Veröffentlicht unter der MIT-Lizenz.",
    acknowledgements: "Danksagung",
    acknowledgementsCopy:
      "Der Standard baut auf der AGENTS.md-Konvention, Werkzeug-Anweisungsformaten und breiteren Open-Source-Governance-Praktiken auf.",
    legalNoticeDescription: "Platzhalterseite für rechtliche Hinweise der AI Project Standard Website.",
    legalNoticeCopy:
      "Dies ist eine Platzhalterseite für rechtliche Hinweise der AI Project Standard Website.",
    legalNoticeNote:
      "Sie wird später die für diese Website relevanten rechtlichen Hinweise abdecken.",
    privacyPolicyDescription: "Platzhalterseite für die Datenschutzerklärung der AI Project Standard Website.",
    privacyPolicyCopy:
      "Dies ist eine Platzhalterseite für die Datenschutzerklärung der AI Project Standard Website.",
    privacyPolicyNote:
      "Sie wird später für diese Website relevante Datenschutz- und DSGVO-Informationen abdecken.",
  },
} as const;

export const getUi = (locale: SiteLocale) => ui[locale];
