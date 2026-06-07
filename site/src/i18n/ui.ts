export type SiteLocale = "en" | "de";

export const defaultLocale: SiteLocale = "en";
export const locales: SiteLocale[] = ["en", "de"];

export const ui = {
  en: {
    skipToMain: "Skip to main content",
    language: "Language",
    home: "Home",
    docs: "Docs",
    about: "About",
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
    collectTerms: "Collect terms",
    collectTermsCopy:
      "This project collects important AI terms, product concepts, and their relationships in a simple, understandable form.",
    clarifyDifferences: "Clarify differences",
    clarifyDifferencesCopy:
      "Terms like agent, memory, RAG, or workflow are often used differently. The site makes those differences easier to see over time.",
    understandingBeforeImplementation: "Understanding before implementation",
    understandingBeforeImplementationCopy:
      "Before deeper architecture or implementation topics are added, the focus stays on a clear shared understanding of the basics.",
    knowledgeBaseInProgress: "Knowledge base in progress",
    knowledgeBaseInProgressCopy:
      "This site is not finished. It is growing into a knowledge base for professional AI use in technical projects.",
    firstOrientationLayer: "A first orientation layer",
    firstOrientationLayerCopy:
      "As a first step, the site provides a simple, maintained overview of central AI terms. Over time, deeper explanations, comparisons, and practical guides can grow from that foundation.",
    docsAndGlossaryCopy:
      "The project's technical reference remains available under Docs, and the supporting term index remains available under Glossary Index.",
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
    home: "Startseite",
    docs: "Docs",
    about: "Ueber",
    glossaryIndex: "Glossarindex",
    legalNotice: "Rechtliche Hinweise",
    privacyPolicy: "Datenschutz",
    sourceOnGitHub: "Quelle auf GitHub",
    english: "Englisch",
    german: "Deutsch",
    search: "Suche",
    searchPlaceholder:
      "Begriff, Definition, Alias, verwandten Begriff oder Quelle durchsuchen",
    includeProductLabels: "Produkt- und UI-Begriffe einblenden",
    whereDidISeeIt: "Wo habe ich den Begriff gesehen?",
    allSources: "Alle Quellen",
    noResults: "Keine Treffer.",
    showing: "Zeige",
    entry: "Eintrag",
    entries: "Eintraege",
    productLabel: "Produktbegriff",
    breadcrumbHome: "Startseite",
    breadcrumbGlossary: "Glossarindex",
    explanation: "Einfache Erklaerung",
    aiContext: "KI-Kontext",
    commonConfusion: "Haeufige Verwechslungen",
    relatedTerms: "Verwandte Begriffe",
    aliases: "Alternative Bezeichnungen",
    observedIn: "Beobachtet in",
    backToGlossary: "Zurueck zum Glossarindex",
    glossaryTitle: "KI-Termindex",
    glossaryDescription:
      "Ein gepflegter Index fuer KI-, LLM-, Tooling- und Produktbegriffe. Er hilft dabei, einen Begriff zu finden und die passende Erklaerungsseite zu oeffnen.",
    glossaryIntro:
      "Dies ist ein Arbeitsindex fuer KI- und LLM-nahe Begriffe. Tiefere Erklaerungen liegen auf den einzelnen Begriffseiten. Breitere Guides und Projektdokumentation werden spaeter getrennt ausgebaut.",
    homeTitle: "AI Project Standard",
    homeDescription: "Eine wachsende Wissensbasis fuer KI-Begriffe, Konzepte und Zusammenhaenge.",
    homeHeading: "Eine wachsende Wissensbasis fuer KI-Begriffe und Konzepte.",
    homeLead:
      "KI-Begriffe und Produktnamen aendern sich schnell. Verschiedene Werkzeuge verwenden oft dieselben Woerter unterschiedlich oder mit leicht anderer Bedeutung.",
    aboutKnowledgeBase: "Ueber diese Wissensbasis",
    collectTerms: "Begriffe sammeln",
    collectTermsCopy:
      "Dieses Projekt sammelt wichtige KI-Begriffe, Produktkonzepte und ihre Beziehungen in einer einfachen und verstaendlichen Form.",
    clarifyDifferences: "Unterschiede klaeren",
    clarifyDifferencesCopy:
      "Begriffe wie Agent, Memory, RAG oder Workflow werden oft unterschiedlich verwendet. Die Website macht diese Unterschiede mit der Zeit leichter sichtbar.",
    understandingBeforeImplementation: "Verstehen vor Umsetzung",
    understandingBeforeImplementationCopy:
      "Bevor tiefere Architektur- oder Umsetzungsthemen hinzukommen, liegt der Fokus auf einem klaren gemeinsamen Verstaendnis der Grundlagen.",
    knowledgeBaseInProgress: "Wissensbasis im Aufbau",
    knowledgeBaseInProgressCopy:
      "Diese Website ist noch nicht fertig. Sie waechst zu einer Wissensbasis fuer den professionellen Einsatz von KI in technischen Projekten.",
    firstOrientationLayer: "Eine erste Orientierungsebene",
    firstOrientationLayerCopy:
      "Als erster Schritt bietet die Website einen einfachen, gepflegten Ueberblick ueber zentrale KI-Begriffe. Spaeter koennen daraus tiefere Erklaerungen, Vergleiche und praktische Leitfaeden wachsen.",
    docsAndGlossaryCopy:
      "Die technische Referenz des Projekts bleibt unter Docs verfuegbar, und der unterstuetzende Begriffsindex bleibt unter Glossarindex erreichbar.",
    aboutTitle: "Ueber",
    aboutDescription: "Ueber den AI Project Standard, seine Architektur und seinen Maintainer.",
    aboutIntro:
      "Ein Ausgangsstandard fuer Open-Source-Projekte, die KI nutzen. Vier Saeulen: Mensch-KI-Zusammenarbeit, Open-Source-Betrieb, Software Engineering sowie Wissen und Dokumentation.",
    aboutLayerCopy:
      "Das Repository ist die operative Ebene: Workflows, AI-Status, Governance und Templates. Diese Website ist die Wissensebene: Erklaerungen, Vergleiche, Tutorials, Recherche und Blog.",
    maintainer: "Maintainer",
    maintainerCopy:
      "Erstellt und gepflegt von Ruben Nati. Beitraege sind ueber den Contribution Guide willkommen.",
    license: "Lizenz",
    licenseCopy: "Veroeffentlicht unter der MIT-Lizenz.",
    acknowledgements: "Danksagung",
    acknowledgementsCopy:
      "Der Standard baut auf der AGENTS.md-Konvention, Werkzeug-Anweisungsformaten und breiteren Open-Source-Governance-Praktiken auf.",
    legalNoticeDescription: "Platzhalterseite fuer rechtliche Hinweise der AI Project Standard Website.",
    legalNoticeCopy:
      "Dies ist eine Platzhalterseite fuer rechtliche Hinweise der AI Project Standard Website.",
    legalNoticeNote:
      "Sie wird spaeter die fuer diese Website relevanten rechtlichen Hinweise abdecken.",
    privacyPolicyDescription: "Platzhalterseite fuer die Datenschutzerklaerung der AI Project Standard Website.",
    privacyPolicyCopy:
      "Dies ist eine Platzhalterseite fuer die Datenschutzerklaerung der AI Project Standard Website.",
    privacyPolicyNote:
      "Sie wird spaeter fuer diese Website relevante Datenschutz- und DSGVO-Informationen abdecken.",
  },
} as const;

export const getUi = (locale: SiteLocale) => ui[locale];
