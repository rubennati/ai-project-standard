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
    dataFlows: "Your data",
    dataFlowsTitle: "Data flows",
    dataFlowsDescription:
      "Where your input actually goes: which plans train on it, how long it is kept, and what to check before you paste anything.",
    dataFlowsIntro:
      "What leaves your machine when you use an AI tool, and what happens to it there. Each section is labelled with what kind of claim it is and when it was last checked \u2014 vendor defaults change without notice.",
    dataFlowsMore:
      "More is being written: what a coding agent reads from your repository, what an MCP server actually gets to see, and where the servers stand.",
    start: "Start here",
    startTitle: "Where to start",
    startDescription:
      "Four ways in, sorted by what you are actually allowed to decide — not by how much you already know.",
    startIntro:
      "What applies to you depends less on how experienced you are than on what you are in a position to decide, and whose material is at stake when you get it wrong.",
    startMore:
      "Two more are being written: using AI privately, and running a one-person business or small company where you decide everything and carry all of it.",
    secureSetup: "Settings & access",
    secureSetupTitle: "Setting it up safely",
    secureSetupDescription:
      "What to change on day one, what to check before an agent gets access, and where a technical boundary belongs instead of a sentence in a prompt.",
    secureSetupIntro:
      "None of this is new security thinking. What changed is that these tools are driven in plain language, so the decisions are now made by people who were never asked to think about them.",
    secureSetupMore:
      "More is being written: what a coding agent actually reads, and building an MCP server as a control point rather than a convenience.",
    law: "Law",
    about: "About",
    lawTitle: "Law",
    lawDescription:
      "What the law requires when you use AI at work \u2014 Austria first, then the EU. Each claim names its norm and the date it was checked.",
    lawIntro:
      "Rules that are already in force, not ones that are coming. Every section carries a label saying what kind of claim it is \u2014 a legal requirement, a reading of one, or what I would do about it \u2014 with the date it was last checked against the source.",
    lawMore:
      "More is being written: what you may put into a tool when it belongs to a client, and where the line runs between private and company use.",
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
    homePrimaryLink: "Does it train on what I type?",
    homeSecondaryLink: "What may I put in?",
    doorMore: "Read the section",
    homeArticles: "Everything written so far",
    homeArticlesLead:
      "Each one labelled with what kind of claim it makes, and when it was last checked against the source.",
    howToRead: "How to read this site",
    howToReadLead:
      "Every section of every article says what kind of claim it is making, and factual claims carry the date they were last checked against the source. Vendor behaviour changes without notice — a claim without a date is not wrong yet, it is unfalsifiable.",
    repoHeading: "There is a repository underneath this",
    repoCopy:
      "The conventions this site describes are kept in a public repository, and the site is built directly from it. That matters if you write software \u2014 you can read the source, copy it, or adopt it. If it means nothing to you, ignore it: nothing on this site requires it.",
    repoContains:
      "Inside it: the AGENTS.md convention for working with several AI tools on one codebase, a security baseline with CI hardening, branch protection rules, adoption profiles, and the operational `.ai/` workspace. The repository runs on its own conventions rather than only describing them.",
    repoLink: "Read the documentation here",
    repoLinkExternal: "The repository on GitHub",
    glossaryAside:
      "Terms are explained as they come up. If you need to look one up on its own, the glossary is in the footer of every page.",

    whatThisSiteIsFor: "What this site is for",
    doorPaste: "Before you paste",
    doorPasteCopy:
      "Where the data goes, per tool class \u2014 chat, coding agents, MCP servers, automation platforms. The route, the servers, the jurisdiction, how long it is kept, and whether \u201cdeleted\u201d means deleted.",
    doorAllowed: "What you are allowed to do",
    doorAllowedCopy:
      "Two questions, often confused. Personal data is a matter of data protection law; source code, client material and anything under an NDA is a matter of confidentiality \u2014 no less binding for not being personal. Private use differs from company use, some generated content already has to be labelled, and the duty is narrower than it first sounds.",
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

    blogTitle: "Blog",
    blogDescription:
      "Posts about what actually happens when you use an AI tool \u2014 measured where it can be measured, and named as an assessment where it cannot.",
    blogIntro:
      "Longer pieces that follow one question all the way through. Same rules as the rest of the site: primary sources, stated check dates, and a label on every claim.",
    blogPlanned: "Planned",
    blogPlannedIntro: "Written next, in this order:",
    blogPublished: "Published",
    blogBackToIndex: "All posts",
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
    dataFlows: "Deine Daten",
    dataFlowsTitle: "Datenflüsse",
    dataFlowsDescription:
      "Wohin deine Eingabe tatsächlich geht: welche Tarife damit trainieren, wie lange sie aufbewahrt wird, und was du prüfen solltest, bevor du etwas hineinkopierst.",
    dataFlowsIntro:
      "Was deinen Rechner verlässt, wenn du ein KI-Werkzeug nutzt, und was dort damit geschieht. Jeder Abschnitt ist gekennzeichnet, welche Art von Aussage er ist und wann er zuletzt geprüft wurde \u2014 Voreinstellungen der Anbieter ändern sich ohne Ankündigung.",
    dataFlowsMore:
      "Weiteres entsteht: was ein Coding-Agent aus deinem Repository liest, was ein MCP-Server tatsächlich zu sehen bekommt, und wo die Server stehen.",
    start: "Einstieg",
    startTitle: "Wo anfangen",
    startDescription:
      "Vier Einstiege, sortiert danach, was du tatsächlich entscheiden darfst — nicht danach, wie viel du schon weißt.",
    startIntro:
      "Was für dich gilt, hängt weniger davon ab, wie erfahren du bist, als davon, was du entscheiden darfst — und wessen Material auf dem Spiel steht, wenn es schiefgeht.",
    startMore:
      "Zwei weitere entstehen: KI privat nutzen, und ein Einzelunternehmen oder eine kleine Firma führen, wo du alles entscheidest und alles trägst.",
    secureSetup: "Einstellungen & Zugriff",
    secureSetupTitle: "Sicher einrichten",
    secureSetupDescription:
      "Was du am ersten Tag umstellst, was du prüfst, bevor ein Agent Zugriff bekommt, und wo eine technische Grenze hingehört statt eines Satzes im Prompt.",
    secureSetupIntro:
      "Nichts davon ist neues Sicherheitsdenken. Neu ist, dass diese Werkzeuge in normaler Sprache bedient werden — die Entscheidungen treffen jetzt Leute, die nie danach gefragt wurden.",
    secureSetupMore:
      "Weiteres entsteht: was ein Coding-Agent tatsächlich liest, und einen MCP-Server als Kontrollpunkt zu bauen statt als Bequemlichkeit.",
    law: "Recht",
    about: "Über",
    lawTitle: "Recht",
    lawDescription:
      "Was das Gesetz beim Einsatz von KI im Arbeitsalltag verlangt \u2014 Österreich zuerst, dann die EU. Jede Aussage nennt ihre Norm und das Datum der Prüfung.",
    lawIntro:
      "Regeln, die bereits gelten, nicht solche, die kommen. Jeder Abschnitt trägt eine Kennzeichnung, welche Art von Aussage er ist \u2014 gesetzliche Pflicht, deren Auslegung, oder was ich dazu tun würde \u2014 samt Datum der letzten Prüfung an der Quelle.",
    lawMore:
      "Weiteres entsteht: was in ein Werkzeug hineindarf, wenn es Kundenmaterial ist, und wo die Grenze zwischen privater und betrieblicher Nutzung verläuft.",
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
    homePrimaryLink: "Trainiert es mit dem, was ich eingebe?",
    homeSecondaryLink: "Was darf ich hineingeben?",
    doorMore: "Zum Bereich",
    homeArticles: "Alles bisher Geschriebene",
    homeArticlesLead:
      "Jeder gekennzeichnet, welche Art von Aussage er macht und wann er zuletzt an der Quelle geprüft wurde.",
    howToRead: "Wie diese Seite zu lesen ist",
    howToReadLead:
      "Jeder Abschnitt jedes Beitrags sagt, welche Art von Aussage er macht, und Tatsachenaussagen tragen das Datum ihrer letzten Prüfung an der Quelle. Anbieter ändern ihr Verhalten ohne Ankündigung — eine Aussage ohne Datum ist nicht falsch, sie ist unüberprüfbar.",
    repoHeading: "Darunter liegt ein Repository",
    repoCopy:
      "Die Konventionen, die diese Seite beschreibt, liegen in einem öffentlichen Repository, und die Seite wird direkt daraus gebaut. Das ist wichtig, wenn du Software schreibst \u2014 du kannst den Quelltext lesen, kopieren oder übernehmen. Sagt dir das nichts, ignorier es: Nichts auf dieser Seite setzt es voraus.",
    repoContains:
      "Darin: die AGENTS.md-Konvention für die Arbeit mit mehreren KI-Werkzeugen an einer Codebasis, eine Security-Baseline samt CI-Härtung, Branch-Protection-Regeln, Adoptionsprofile und der operative `.ai/`-Arbeitsbereich. Das Repository läuft nach seinen eigenen Konventionen, statt sie nur zu beschreiben.",
    repoLink: "Dokumentation hier lesen",
    repoLinkExternal: "Das Repository auf GitHub",
    glossaryAside:
      "Begriffe werden dort erklärt, wo sie vorkommen. Wenn du einen einzeln nachschlagen willst: Das Glossar steht im Footer jeder Seite.",

    whatThisSiteIsFor: "Wofür diese Seite da ist",
    doorPaste: "Bevor du etwas hineinkopierst",
    doorPasteCopy:
      "Wohin die Daten gehen, je Werkzeugklasse \u2014 Chat, Coding-Agenten, MCP-Server, Automatisierungsplattformen. Der Weg, die Server, der Rechtsraum, die Aufbewahrung, und ob \u201egelöscht\u201c wirklich gelöscht heißt.",
    doorAllowed: "Was du darfst",
    doorAllowedCopy:
      "Zwei Fragen, die oft vermischt werden. Personenbezogene Daten sind eine Frage des Datenschutzrechts; Quellcode, Kundenmaterial und alles unter NDA eine Frage der Vertraulichkeit \u2014 nicht weniger bindend, nur weil es nicht personenbezogen ist. Privat ist nicht gleich betrieblich, manche generierten Inhalte müssen gekennzeichnet werden, und die Pflicht ist enger, als sie zunächst klingt.",
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

    blogTitle: "Blog",
    blogDescription:
      "Beitr\u00e4ge dar\u00fcber, was tats\u00e4chlich passiert, wenn man ein KI-Werkzeug benutzt \u2014 gemessen, wo es messbar ist, und als Einsch\u00e4tzung benannt, wo nicht.",
    blogIntro:
      "L\u00e4ngere St\u00fccke, die einer Frage bis zum Ende folgen. Es gelten dieselben Regeln wie \u00fcberall hier: Prim\u00e4rquellen, angegebene Pr\u00fcfdaten und eine Kennzeichnung an jeder Aussage.",
    blogPlanned: "Geplant",
    blogPlannedIntro: "Als N\u00e4chstes geschrieben, in dieser Reihenfolge:",
    blogPublished: "Ver\u00f6ffentlicht",
    blogBackToIndex: "Alle Beitr\u00e4ge",
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
