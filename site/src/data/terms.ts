export type TermKind =
  | "general-ai-term"
  | "ai-architecture-term"
  | "ai-work-term"
  | "platform-ui-term"
  | "product-feature-term"
  | "product-tool-name";

export type TermStatus = "draft" | "review" | "stable";
export type TermStability = "stable" | "medium" | "vendor-specific" | "volatile";

export interface TermTranslation {
  term?: string;
  shortDefinition?: string;
  explanation?: string;
  aiContext?: string;
}

export interface TermSourceReference {
  label: string;
  href?: string;
  needsVerification?: boolean;
}

export interface TermSeoMetadata {
  title?: string;
  description?: string;
}

export interface TermEntry {
  term: string;
  slug?: string;
  kind: TermKind;
  shortDefinition: string;
  explanation?: string;
  aiContext?: string;
  observedIn: string[];
  status: TermStatus;
  stability: TermStability;
  aliases: string[];
  related: string[];
  commonConfusion?: string[];
  sources?: TermSourceReference[];
  seo?: TermSeoMetadata;
  schemaType?: "DefinedTerm";
  translations?: {
    de?: TermTranslation;
  };
}

export const terms: TermEntry[] = [
  {
    term: "Agent",
    kind: "ai-architecture-term",
    shortDefinition:
      "A system that pursues goals by choosing steps, using tools, or coordinating actions over time.",
    explanation:
      "An agent is more than a chat reply. It can break work into steps, decide what to do next, and sometimes use tools or other systems to move toward a goal. In practice, that might mean it searches, writes, edits, or coordinates actions for you.",
    aiContext:
      "In AI products, the word usually means a system that can act with some autonomy instead of only answering one prompt at a time. The AI-specific meaning is about goal-directed action, tool use, and multi-step work.",
    observedIn: ["General AI usage", "AI vendor marketing", "Agent products"],
    status: "draft",
    stability: "medium",
    aliases: [],
    related: ["Agentic AI", "Agentic Workflow", "Tool Use", "Coding Agent"],
    commonConfusion: ["Assistant", "Chatbot"],
    translations: {
      de: {
        term: "Agent",
        shortDefinition:
          "Ein System, das Ziele verfolgt, Schritte auswaehlt, Werkzeuge nutzt oder Aktionen ueber mehrere Schritte hinweg koordiniert.",
        explanation:
          "Ein Agent ist mehr als nur eine Chat-Antwort. Er kann Arbeit in Schritte zerlegen, den naechsten Schritt auswaehlen und manchmal Werkzeuge oder andere Systeme nutzen, um ein Ziel zu erreichen.",
        aiContext:
          "In KI-Produkten meint das Wort meist ein System, das mit etwas Autonomie handeln kann, statt nur auf einen einzelnen Prompt zu antworten.",
      },
    },
  },
  {
    term: "Agentic AI",
    kind: "ai-architecture-term",
    shortDefinition:
      "AI behavior or system design that emphasizes goal-directed action, tool use, and multi-step execution.",
    observedIn: ["General AI usage", "AI vendor marketing"],
    status: "draft",
    stability: "medium",
    aliases: [],
    related: ["Agent", "Agentic Workflow", "Tool Use"],
    commonConfusion: ["Automation", "Chatbot"],
    translations: {
      de: {
        term: "Agentic AI",
        shortDefinition:
          "KI mit Fokus auf zielgerichtetes Handeln, Werkzeugnutzung und mehrschrittige Ausfuehrung.",
      },
    },
  },
  {
    term: "Agentic Workflow",
    kind: "ai-work-term",
    shortDefinition:
      "A workflow in which an AI system plans or executes multiple steps instead of returning only one direct answer.",
    observedIn: ["General AI usage", "AI vendor marketing", "Agent products"],
    status: "draft",
    stability: "medium",
    aliases: [],
    related: ["Agent", "Agentic AI", "Coding Agent"],
    commonConfusion: ["Workflow automation"],
    translations: {
      de: {
        term: "Agentic Workflow",
        shortDefinition:
          "Ein Ablauf, in dem ein KI-System mehrere Schritte plant oder ausfuehrt, statt nur eine einzelne Antwort zu geben.",
      },
    },
  },
  {
    term: "AI",
    kind: "general-ai-term",
    shortDefinition:
      "An umbrella term for systems that perform tasks associated with perception, reasoning, prediction, or generation.",
    observedIn: ["General AI usage"],
    status: "review",
    stability: "stable",
    aliases: ["Artificial Intelligence", "KI"],
    related: ["Generative AI", "LLM", "Reasoning Model"],
    commonConfusion: ["Generative AI", "Machine Learning"],
    translations: {
      de: {
        term: "KI",
        shortDefinition:
          "Ein Oberbegriff fuer Systeme, die Aufgaben ausfuehren, die mit Wahrnehmung, Schlussfolgern, Vorhersage oder Generierung verbunden sind.",
      },
    },
  },
  {
    term: "AI-assisted Coding",
    kind: "ai-work-term",
    shortDefinition:
      "Using AI systems to help write, edit, explain, or review code while a human remains responsible for the result.",
    observedIn: ["General AI usage", "Developer tools"],
    status: "review",
    stability: "medium",
    aliases: [],
    related: ["Coding Agent", "AI-assisted Development", "AI-assisted Engineering"],
    commonConfusion: ["Vibe Coding"],
    translations: {
      de: {
        shortDefinition:
          "Der Einsatz von KI zum Schreiben, Erklaeren, Ueberarbeiten oder Pruefen von Code bei gleichbleibender menschlicher Verantwortung.",
      },
    },
  },
  {
    term: "AI-assisted Development",
    kind: "ai-work-term",
    shortDefinition:
      "Using AI across software delivery work such as coding, debugging, analysis, documentation, or planning.",
    observedIn: ["General AI usage", "Developer tools"],
    status: "review",
    stability: "medium",
    aliases: [],
    related: ["AI-assisted Coding", "AI-assisted Engineering", "Coding Agent"],
    commonConfusion: ["AI-assisted Coding"],
    translations: {
      de: {
        shortDefinition:
          "Der Einsatz von KI fuer breitere Softwarearbeit wie Coding, Debugging, Analyse, Dokumentation oder Planung.",
      },
    },
  },
  {
    term: "AI-assisted Engineering",
    kind: "ai-work-term",
    shortDefinition:
      "Applying AI to broader engineering work, including code, systems, documentation, workflows, and decisions.",
    observedIn: ["General AI usage", "Developer tools"],
    status: "review",
    stability: "medium",
    aliases: [],
    related: ["AI-assisted Development", "AI-assisted Coding", "Coding Agent"],
    commonConfusion: ["AI-assisted Development"],
    translations: {
      de: {
        shortDefinition:
          "Der Einsatz von KI fuer breitere Engineering-Arbeit, einschliesslich Code, Systeme, Dokumentation, Arbeitsablaeufe und Entscheidungen.",
      },
    },
  },
  {
    term: "Add Marketplace",
    kind: "platform-ui-term",
    shortDefinition:
      "A vendor UI label for adding a marketplace source or listing. Exact behavior depends on the current product version.",
    observedIn: ["Claude Desktop"],
    status: "draft",
    stability: "volatile",
    aliases: [],
    related: ["Personal Plugins", "Create Plugin", "Upload Plugin"],
    commonConfusion: ["Connectors", "Plugins"],
  },
  {
    term: "Artifacts",
    kind: "product-feature-term",
    shortDefinition:
      "A vendor feature label for generated outputs such as documents, code, or interactive work products.",
    observedIn: ["Claude Desktop"],
    status: "draft",
    stability: "vendor-specific",
    aliases: ["Artifact"],
    related: ["Live Artifacts", "Create with Claude", "Code"],
    commonConfusion: ["Files", "Projects"],
  },
  {
    term: "Assistant",
    kind: "product-feature-term",
    shortDefinition:
      "A conversational AI product or configured helper that responds to prompts and may use memory or tools.",
    observedIn: ["General AI usage", "ChatGPT", "Claude Desktop"],
    status: "review",
    stability: "medium",
    aliases: [],
    related: ["Chatbot", "Custom GPT", "Agent"],
    commonConfusion: ["Agent", "Chatbot"],
  },
  {
    term: "Automation",
    kind: "product-feature-term",
    shortDefinition:
      "A product feature label for scheduling or triggering repeatable AI actions. The exact scope depends on the product.",
    observedIn: ["ChatGPT Codex", "AI products"],
    status: "draft",
    stability: "vendor-specific",
    aliases: [],
    related: ["Schedules", "Routines", "Agentic Workflow"],
    commonConfusion: ["Agentic AI", "Workflow"],
  },
  {
    term: "Browse Plugin",
    kind: "product-tool-name",
    shortDefinition:
      "A vendor tool label for browsing web content or online sources from within an AI environment.",
    observedIn: ["Claude Desktop"],
    status: "draft",
    stability: "vendor-specific",
    aliases: [],
    related: ["Web Search", "Connectors", "Personal Plugins"],
    commonConfusion: ["Search", "Connector"],
  },
  {
    term: "Chat",
    kind: "platform-ui-term",
    shortDefinition:
      "A UI label for the conversational view where prompts and responses are exchanged.",
    observedIn: ["Claude Desktop"],
    status: "review",
    stability: "vendor-specific",
    aliases: [],
    related: ["New Session", "Assistant", "Chatbot"],
    commonConfusion: ["Project", "Code"],
  },
  {
    term: "Chatbot",
    kind: "product-feature-term",
    shortDefinition:
      "A conversational interface that lets a user ask questions and receive generated responses.",
    observedIn: ["General AI usage", "AI products"],
    status: "stable",
    stability: "stable",
    aliases: [],
    related: ["Assistant", "Prompt", "Chat"],
    commonConfusion: ["Agent", "Assistant"],
  },
  {
    term: "ChatGPT",
    kind: "product-tool-name",
    shortDefinition:
      "OpenAI's chat-based AI product for interacting with models, tools, and product features.",
    observedIn: ["ChatGPT"],
    status: "review",
    stability: "vendor-specific",
    aliases: [],
    related: ["ChatGPT Codex", "Custom GPT", "Search"],
    commonConfusion: ["OpenAI API"],
    sources: [
      {
        label: "OpenAI ChatGPT",
        href: "https://openai.com/chatgpt/overview/",
      },
    ],
    translations: {
      de: {
        shortDefinition:
          "OpenAIs chatbasiertes KI-Produkt fuer den Umgang mit Modellen, Werkzeugen und Produktfunktionen.",
      },
    },
  },
  {
    term: "ChatGPT Codex",
    kind: "product-tool-name",
    shortDefinition:
      "A ChatGPT-related product label for AI coding or agent-style coding workflows. The exact packaging may evolve.",
    observedIn: ["ChatGPT Codex"],
    status: "draft",
    stability: "volatile",
    aliases: ["Codex"],
    related: ["Coding Agent", "AI-assisted Coding", "ChatGPT"],
    commonConfusion: ["OpenAI API models", "ChatGPT"],
  },
  {
    term: "Claude Desktop",
    kind: "product-tool-name",
    shortDefinition:
      "Anthropic's desktop AI application with chat, coding, and extension-oriented features.",
    observedIn: ["Claude Desktop"],
    status: "review",
    stability: "vendor-specific",
    aliases: [],
    related: ["Claude", "Claude Code", "Code", "CoWork", "Skills", "Connectors"],
    commonConfusion: ["Claude API"],
    sources: [
      {
        label: "Anthropic Claude",
        href: "https://www.anthropic.com/claude",
      },
    ],
  },
  {
    term: "Code",
    kind: "platform-ui-term",
    shortDefinition:
      "A vendor UI label for coding-oriented workflows, tools, or sessions inside an AI product.",
    observedIn: ["Claude Desktop"],
    status: "draft",
    stability: "vendor-specific",
    aliases: [],
    related: ["Coding Agent", "Chat", "Project"],
    commonConfusion: ["AI-assisted Coding", "ChatGPT Codex"],
  },
  {
    term: "Coding Agent",
    kind: "ai-work-term",
    shortDefinition:
      "An AI agent focused on code-related tasks such as editing files, running checks, or navigating a codebase.",
    observedIn: ["Developer tools", "ChatGPT Codex", "Claude Desktop"],
    status: "review",
    stability: "medium",
    aliases: [],
    related: ["Agent", "AI-assisted Coding", "Tool Use"],
    commonConfusion: ["Autocomplete", "Chatbot"],
  },
  {
    term: "Connectors",
    kind: "product-feature-term",
    shortDefinition:
      "A vendor label for integrations that connect an AI product to external systems or data sources.",
    observedIn: ["Claude Desktop", "AI products"],
    status: "draft",
    stability: "vendor-specific",
    aliases: ["Connector"],
    related: ["MCP", "Tool Use", "Enterprise Search"],
    commonConfusion: ["Plugins", "Function Calling"],
  },
  {
    term: "Context",
    kind: "general-ai-term",
    shortDefinition:
      "The information a model can consider when producing an answer, including instructions, inputs, and retrieved material.",
    explanation:
      "Context is everything the model can 'see' for the current request, such as your prompt, earlier messages, uploaded files, or retrieved notes. If important information is not in context, the model usually cannot use it.",
    aiContext:
      "In AI and LLM workflows, context is central because models do not automatically know your private files, current task, or project rules. Good results often depend on putting the right information into context at the right time.",
    observedIn: ["General AI usage"],
    status: "stable",
    stability: "stable",
    aliases: [],
    related: ["Prompt", "Context Window", "Retrieval"],
    commonConfusion: ["Memory"],
    translations: {
      de: {
        term: "Kontext",
        shortDefinition:
          "Die Informationen, die ein Modell bei einer Antwort beruecksichtigen kann, einschliesslich Anweisungen, Eingaben und abgerufener Inhalte.",
        explanation:
          "Kontext ist alles, was das Modell fuer die aktuelle Anfrage sehen kann, zum Beispiel dein Prompt, fruehere Nachrichten, hochgeladene Dateien oder abgerufene Notizen.",
        aiContext:
          "In KI- und LLM-Workflows ist Kontext zentral, weil Modelle deine privaten Dateien, aktuelle Aufgabe oder Projektregeln nicht automatisch kennen.",
      },
    },
  },
  {
    term: "Context Window",
    kind: "ai-architecture-term",
    shortDefinition:
      "The amount of text or tokenized information a model can handle in a single interaction.",
    observedIn: ["General AI usage", "Model documentation"],
    status: "review",
    stability: "stable",
    aliases: [],
    related: ["Context", "Token", "LLM"],
    commonConfusion: ["Memory"],
  },
  {
    term: "CoWork",
    kind: "platform-ui-term",
    shortDefinition:
      "A vendor UI label that suggests collaborative or paired work with the AI system. Exact behavior may change.",
    observedIn: ["Claude Desktop"],
    status: "draft",
    stability: "volatile",
    aliases: [],
    related: ["Chat", "Code", "Claude Desktop"],
    commonConfusion: ["Shared editing", "Agentic Workflow"],
  },
  {
    term: "Create Plugin",
    kind: "platform-ui-term",
    shortDefinition:
      "A product UI label for creating a plugin or plugin package inside an AI environment.",
    observedIn: ["Claude Desktop", "ChatGPT Codex"],
    status: "draft",
    stability: "vendor-specific",
    aliases: [],
    related: ["Plugins", "Personal Plugins", "Upload Plugin"],
    commonConfusion: ["Create Skill", "Connectors"],
  },
  {
    term: "Create Skill",
    kind: "platform-ui-term",
    shortDefinition:
      "A product UI label for defining a reusable skill or packaged instruction set.",
    observedIn: ["ChatGPT Codex"],
    status: "draft",
    stability: "volatile",
    aliases: [],
    related: ["Skill", "Create Plugin", "Plugins"],
    commonConfusion: ["Custom Instructions", "System Prompt"],
  },
  {
    term: "Create with Claude",
    kind: "platform-ui-term",
    shortDefinition:
      "A vendor UI label for starting generation or creation workflows in Claude Desktop.",
    observedIn: ["Claude Desktop"],
    status: "draft",
    stability: "volatile",
    aliases: [],
    related: ["Artifacts", "Live Artifacts", "Claude Desktop"],
    commonConfusion: ["Chat", "Project"],
  },
  {
    term: "Custom GPT",
    kind: "product-feature-term",
    shortDefinition:
      "A preconfigured ChatGPT-style assistant with custom behavior, instructions, or tool access.",
    observedIn: ["ChatGPT", "AI products"],
    status: "review",
    stability: "vendor-specific",
    aliases: [],
    related: ["Assistant", "Custom Instructions", "System Prompt"],
    commonConfusion: ["Agent"],
    translations: {
      de: {
        shortDefinition:
          "Ein vorkonfigurierter ChatGPT-aehnlicher Assistent mit eigenen Anweisungen, Verhalten oder Werkzeugzugriff.",
      },
    },
  },
  {
    term: "Custom Instructions",
    kind: "product-feature-term",
    shortDefinition:
      "Persistent user-level instructions that influence how an assistant behaves across interactions.",
    observedIn: ["ChatGPT", "AI products"],
    status: "review",
    stability: "vendor-specific",
    aliases: [],
    related: ["System Prompt", "Custom GPT", "Prompt"],
    commonConfusion: ["System Prompt"],
  },
  {
    term: "Deep Research",
    kind: "product-feature-term",
    shortDefinition:
      "A product feature label for more extensive research-style workflows that combine multiple search or reasoning steps.",
    observedIn: ["ChatGPT", "Perplexity", "AI products"],
    status: "draft",
    stability: "vendor-specific",
    aliases: [],
    related: ["Web Search", "Search", "Retrieval"],
    commonConfusion: ["RAG", "Search"],
    translations: {
      de: {
        term: "Deep Research",
        shortDefinition:
          "Ein KI-gestuetzter Recherchemodus, der mehrere Schritte, Quellen und Zusammenfassungen kombiniert.",
      },
    },
  },
  {
    term: "Dispatch",
    kind: "platform-ui-term",
    shortDefinition:
      "A vendor UI label for sending work to another tool, mode, or execution flow. Exact meaning depends on the product.",
    observedIn: ["Claude Desktop"],
    status: "draft",
    stability: "volatile",
    aliases: [],
    related: ["Code", "Routines", "Schedules"],
    commonConfusion: ["Automation", "Agentic Workflow"],
  },
  {
    term: "Embedding",
    kind: "ai-architecture-term",
    shortDefinition:
      "A numeric representation of meaning used to compare similarity or support retrieval workflows.",
    aiContext:
      "In AI systems, embeddings are commonly used for retrieval, semantic search, clustering, and recommendation. Here the term is not just a generic mathematical idea; it usually refers to vector representations used to find related meaning.",
    observedIn: ["General AI usage", "Model documentation", "Vector systems"],
    status: "review",
    stability: "stable",
    aliases: ["Embeddings"],
    related: ["Vector Search", "Vector Database", "RAG"],
    commonConfusion: ["Tokenization"],
    translations: {
      de: {
        term: "Embedding",
        shortDefinition:
          "Eine numerische Bedeutungsdarstellung, die fuer Aehnlichkeitsvergleiche oder Retrieval-Workflows genutzt wird.",
        aiContext:
          "In KI-Systemen werden Embeddings oft fuer Retrieval, semantische Suche, Clustering und Empfehlung genutzt. Hier ist nicht irgendeine mathematische Einbettung gemeint, sondern meist eine Vektordarstellung von Bedeutung.",
      },
    },
  },
  {
    term: "Enterprise Search",
    kind: "product-feature-term",
    shortDefinition:
      "A product feature label for searching internal enterprise sources such as documents or connected systems.",
    observedIn: ["Claude Desktop", "Enterprise AI products"],
    status: "draft",
    stability: "vendor-specific",
    aliases: [],
    related: ["Connectors", "Retrieval", "Search"],
    commonConfusion: ["Web Search", "RAG"],
  },
  {
    term: "File Upload",
    kind: "product-feature-term",
    shortDefinition:
      "A feature that lets users attach files so the AI system can inspect or use their contents as input.",
    observedIn: ["ChatGPT", "Claude Desktop", "AI products"],
    status: "review",
    stability: "medium",
    aliases: [],
    related: ["Context", "Retrieval", "Artifacts"],
    commonConfusion: ["Connectors", "Knowledge Base"],
  },
  {
    term: "Foundation Model",
    kind: "general-ai-term",
    shortDefinition:
      "A broadly trained base model that can support many downstream tasks or product experiences.",
    observedIn: ["General AI usage", "Model documentation"],
    status: "review",
    stability: "stable",
    aliases: [],
    related: ["LLM", "Reasoning Model", "Generative AI"],
    commonConfusion: ["LLM"],
    translations: {
      de: {
        shortDefinition:
          "Ein breit trainiertes Basismodell, das viele nachgelagerte Aufgaben oder Produkterlebnisse tragen kann.",
      },
    },
  },
  {
    term: "Function Calling",
    kind: "ai-architecture-term",
    shortDefinition:
      "A mechanism that lets a model request structured tool actions instead of only returning plain text.",
    observedIn: ["Model documentation", "Developer tools"],
    status: "review",
    stability: "medium",
    aliases: [],
    related: ["Tool Use", "MCP", "Connectors"],
    commonConfusion: ["Plugins", "APIs"],
    translations: {
      de: {
        shortDefinition:
          "Ein Mechanismus, mit dem ein Modell strukturierte Werkzeugaktionen anfordern kann, statt nur freien Text zurueckzugeben.",
      },
    },
  },
  {
    term: "Generative AI",
    kind: "general-ai-term",
    shortDefinition:
      "AI that generates new content such as text, images, audio, video, or code.",
    observedIn: ["General AI usage"],
    status: "stable",
    stability: "stable",
    aliases: ["GenAI"],
    related: ["AI", "LLM", "Foundation Model"],
    commonConfusion: ["AI"],
    translations: {
      de: {
        shortDefinition:
          "KI, die neue Inhalte wie Text, Bilder, Audio, Video oder Code erzeugt.",
      },
    },
  },
  {
    term: "Hallucination",
    kind: "general-ai-term",
    shortDefinition:
      "An output that sounds plausible but is false, unsupported, or invented by the model.",
    observedIn: ["General AI usage", "Model documentation"],
    status: "stable",
    stability: "stable",
    aliases: [],
    related: ["Context", "Retrieval", "RAG"],
    commonConfusion: ["Guess", "Speculation"],
    translations: {
      de: {
        shortDefinition:
          "Eine Ausgabe, die glaubwuerdig klingt, aber falsch, unbelegt oder erfunden ist.",
      },
    },
  },
  {
    term: "Knowledge Graph",
    kind: "ai-architecture-term",
    shortDefinition:
      "A structured graph of entities and relationships that can support retrieval, reasoning, or navigation.",
    observedIn: ["General AI usage", "Knowledge systems"],
    status: "review",
    stability: "stable",
    aliases: [],
    related: ["RAG", "Vector Database", "Retrieval"],
    commonConfusion: ["Vector Database"],
    translations: {
      de: {
        shortDefinition:
          "Ein strukturierter Graph aus Entitaeten und Beziehungen, der Retrieval, Schlussfolgern oder Navigation unterstuetzen kann.",
      },
    },
  },
  {
    term: "LLM",
    kind: "general-ai-term",
    shortDefinition:
      "A large language model that processes and generates text-like sequences based on training and context.",
    observedIn: ["General AI usage", "Model documentation", "AI products"],
    status: "stable",
    stability: "stable",
    aliases: ["Large Language Model"],
    related: ["Foundation Model", "Reasoning Model", "Token"],
    commonConfusion: ["Chatbot"],
    translations: {
      de: {
        shortDefinition:
          "Ein Large Language Model, das textaehnliche Sequenzen auf Basis von Training und Kontext verarbeitet und erzeugt.",
      },
    },
  },
  {
    term: "Live Artifacts",
    kind: "product-feature-term",
    shortDefinition:
      "A vendor label for artifacts that stay interactive or update as work continues.",
    observedIn: ["Claude Desktop"],
    status: "draft",
    stability: "volatile",
    aliases: [],
    related: ["Artifacts", "Create with Claude", "Project"],
    commonConfusion: ["Saved files", "Chat responses"],
  },
  {
    term: "MCP",
    kind: "ai-architecture-term",
    shortDefinition:
      "Model Context Protocol, a protocol for connecting models or agents to tools and context sources.",
    explanation:
      "MCP is a way to connect an AI app to tools or data sources through a shared protocol instead of one-off custom wiring. That makes it easier for products to expose files, services, or actions to a model in a consistent way.",
    aiContext:
      "In AI-tooling workflows, MCP matters because it helps models reach beyond chat text and work with structured tools, files, and systems. It is part of the infrastructure layer around practical agent and assistant use.",
    observedIn: ["Developer tools", "Agent products"],
    status: "review",
    stability: "medium",
    aliases: ["Model Context Protocol"],
    related: ["Tool Use", "Function Calling", "Connectors"],
    commonConfusion: ["Plugins", "APIs"],
    sources: [
      {
        label: "Model Context Protocol",
        href: "https://modelcontextprotocol.io/",
      },
      {
        label: "AI tools doc",
        href: "https://github.com/rubennati/ai-project-standard/blob/main/docs/ai-tools.md",
      },
    ],
    translations: {
      de: {
        shortDefinition:
          "Model Context Protocol, ein Protokoll zum Verbinden von Modellen oder Agenten mit Werkzeugen und Kontextquellen.",
        explanation:
          "MCP ist eine Moeglichkeit, eine KI-Anwendung ueber ein gemeinsames Protokoll mit Werkzeugen oder Datenquellen zu verbinden, statt fuer jede Verbindung eine eigene Sonderloesung zu bauen.",
        aiContext:
          "In KI-Tooling-Workflows ist MCP wichtig, weil Modelle damit ueber Chat-Text hinaus mit strukturierten Werkzeugen, Dateien und Systemen arbeiten koennen.",
      },
    },
  },
  {
    term: "Memory",
    kind: "product-feature-term",
    shortDefinition:
      "Stored information that an AI system can reuse across interactions or over time.",
    observedIn: ["General AI usage", "ChatGPT", "AI products"],
    status: "review",
    stability: "medium",
    aliases: [],
    related: ["Context", "Custom Instructions", "Project"],
    commonConfusion: ["Context Window"],
    translations: {
      de: {
        term: "Memory",
        shortDefinition:
          "Gespeicherte Informationen, die ein KI-System ueber mehrere Interaktionen hinweg wiederverwenden kann.",
      },
    },
  },
  {
    term: "New Chat",
    kind: "platform-ui-term",
    shortDefinition:
      "A product UI label for starting a fresh conversational thread.",
    observedIn: ["ChatGPT"],
    status: "review",
    stability: "vendor-specific",
    aliases: [],
    related: ["Chat", "New Session", "Assistant"],
    commonConfusion: ["Resetting memory", "Deleting history"],
  },
  {
    term: "New Session",
    kind: "platform-ui-term",
    shortDefinition:
      "A vendor UI label for starting a new conversation or work session.",
    observedIn: ["Claude Desktop"],
    status: "review",
    stability: "vendor-specific",
    aliases: [],
    related: ["Chat", "New Chat", "Project"],
    commonConfusion: ["Dispatch", "Resetting state"],
  },
  {
    term: "Personal Plugins",
    kind: "product-feature-term",
    shortDefinition:
      "A vendor label for user-managed plugins or plugin bundles in a personal workspace.",
    observedIn: ["Claude Desktop"],
    status: "draft",
    stability: "vendor-specific",
    aliases: [],
    related: ["Plugins", "Create Plugin", "Upload Plugin"],
    commonConfusion: ["Connectors", "Skills"],
  },
  {
    term: "Plugins",
    kind: "product-feature-term",
    shortDefinition:
      "Reusable extensions that add tools, integrations, or packaged capabilities to an AI environment.",
    observedIn: ["ChatGPT Codex", "Claude Desktop", "AI products"],
    status: "draft",
    stability: "vendor-specific",
    aliases: ["Plugin"],
    related: ["Personal Plugins", "Connectors", "Skill"],
    commonConfusion: ["Function Calling", "Connectors"],
  },
  {
    term: "Project",
    kind: "platform-ui-term",
    shortDefinition:
      "A vendor UI label for a grouped workspace, context container, or long-lived working area.",
    observedIn: ["Claude Desktop", "AI products"],
    status: "draft",
    stability: "vendor-specific",
    aliases: [],
    related: ["Memory", "Artifacts", "New Session"],
    commonConfusion: ["Chat", "Folder"],
  },
  {
    term: "Prompt",
    kind: "general-ai-term",
    shortDefinition:
      "The input instruction, question, or material used to guide a model's response.",
    explanation:
      "A prompt can be a question, instruction, example, or block of context. Small changes in wording can produce very different results, which is why prompts often need careful drafting.",
    aiContext:
      "In AI and LLM use, prompts are not just text inputs. They are one of the main control mechanisms for steering output quality, structure, tone, and task framing.",
    observedIn: ["General AI usage", "AI products"],
    status: "stable",
    stability: "stable",
    aliases: [],
    related: ["Prompting", "System Prompt", "Context"],
    commonConfusion: ["System Prompt", "Custom Instructions"],
    translations: {
      de: {
        term: "Prompt",
        shortDefinition:
          "Die Eingabeanweisung, Frage oder das Material, das die Antwort eines Modells steuert.",
        explanation:
          "Ein Prompt kann eine Frage, Anweisung, ein Beispiel oder ein Kontextblock sein. Schon kleine Formulierungsunterschiede koennen zu deutlich anderen Ergebnissen fuehren.",
        aiContext:
          "In der KI- und LLM-Nutzung sind Prompts nicht nur Texteingaben, sondern ein zentrales Steuerungsmittel fuer Struktur, Ton und Aufgabenrahmen.",
      },
    },
  },
  {
    term: "Prompting",
    kind: "ai-work-term",
    shortDefinition:
      "The practice of shaping prompts to influence the quality, structure, or usefulness of outputs.",
    observedIn: ["General AI usage", "AI products"],
    status: "review",
    stability: "stable",
    aliases: [],
    related: ["Prompt", "System Prompt", "Custom Instructions"],
    commonConfusion: ["Prompt engineering"],
    translations: {
      de: {
        term: "Prompting",
        shortDefinition:
          "Die Praxis, Prompts so zu gestalten, dass Qualitaet, Struktur oder Nützlichkeit der Ausgabe beeinflusst werden.",
      },
    },
  },
  {
    term: "RAG",
    kind: "ai-architecture-term",
    shortDefinition:
      "Retrieval-augmented generation, an approach that brings retrieved information into the model's context before answering.",
    explanation:
      "RAG means the model looks up relevant material before it answers. This helps when accuracy matters or when the answer should be based on documents, product data, or other specific sources instead of only model memory.",
    aiContext:
      "In AI systems, RAG is used to ground answers in real content such as manuals, policies, repositories, or internal knowledge. It is especially important when people need traceable answers rather than generic model guesses.",
    observedIn: ["General AI usage", "Developer tools", "AI products"],
    status: "review",
    stability: "medium",
    aliases: ["Retrieval-Augmented Generation"],
    related: ["Retrieval", "Embedding", "Vector Search"],
    commonConfusion: ["Web Search", "Fine-tuning"],
    translations: {
      de: {
        term: "RAG",
        shortDefinition:
          "Retrieval-Augmented Generation, ein Ansatz, bei dem gefundene Informationen vor der Antwort in den Modellkontext eingebracht werden.",
        explanation:
          "RAG bedeutet, dass das Modell vor dem Antworten relevantes Material nachschlaegt. Das hilft besonders dann, wenn Genauigkeit wichtig ist oder Antworten auf bestimmten Dokumenten basieren sollen.",
        aiContext:
          "In KI-Systemen wird RAG genutzt, um Antworten auf reale Inhalte wie Handbuecher, Richtlinien, Repositories oder internes Wissen zu stuetzen.",
      },
    },
  },
  {
    term: "Reasoning Model",
    kind: "general-ai-term",
    shortDefinition:
      "A model positioned or optimized for structured reasoning, planning, or multi-step problem solving.",
    observedIn: ["Model documentation", "AI vendor marketing"],
    status: "draft",
    stability: "medium",
    aliases: [],
    related: ["LLM", "Foundation Model", "Agent"],
    commonConfusion: ["Agent"],
    translations: {
      de: {
        shortDefinition:
          "Ein Modell, das auf strukturiertes Schlussfolgern, Planung oder mehrschrittiges Problemlosen ausgerichtet ist.",
      },
    },
  },
  {
    term: "Retrieval",
    kind: "ai-architecture-term",
    shortDefinition:
      "The act of finding relevant information and bringing it into a workflow or model context.",
    observedIn: ["General AI usage", "Knowledge systems", "AI products"],
    status: "review",
    stability: "stable",
    aliases: [],
    related: ["RAG", "Vector Search", "Web Search"],
    commonConfusion: ["Search"],
    translations: {
      de: {
        shortDefinition:
          "Das Finden relevanter Informationen und das Einbringen dieser Informationen in einen Workflow oder Modellkontext.",
      },
    },
  },
  {
    term: "Routines",
    kind: "platform-ui-term",
    shortDefinition:
      "A vendor UI label for reusable multi-step actions or repeatable AI workflows.",
    observedIn: ["Claude Desktop"],
    status: "draft",
    stability: "volatile",
    aliases: [],
    related: ["Schedules", "Dispatch", "Automation"],
    commonConfusion: ["Agentic Workflow", "Macros"],
  },
  {
    term: "Schedules",
    kind: "product-feature-term",
    shortDefinition:
      "A feature label for triggering AI work on a recurring or planned schedule.",
    observedIn: ["Claude Desktop", "AI products"],
    status: "draft",
    stability: "vendor-specific",
    aliases: [],
    related: ["Automation", "Routines", "Dispatch"],
    commonConfusion: ["Reminders", "Background jobs"],
  },
  {
    term: "Skill",
    kind: "product-feature-term",
    shortDefinition:
      "A reusable packaged capability or instruction set exposed by an AI product.",
    observedIn: ["ChatGPT Codex", "AI products"],
    status: "draft",
    stability: "vendor-specific",
    aliases: ["Skills"],
    related: ["Create Skill", "Plugins", "Custom Instructions"],
    commonConfusion: ["Plugin", "System Prompt"],
  },
  {
    term: "Skills",
    kind: "platform-ui-term",
    shortDefinition:
      "A vendor UI label for browsing or managing reusable skills inside an AI environment.",
    observedIn: ["Claude Desktop"],
    status: "draft",
    stability: "vendor-specific",
    aliases: [],
    related: ["Skill", "Plugins", "Connectors"],
    commonConfusion: ["Personal Plugins", "Custom Instructions"],
  },
  {
    term: "System Prompt",
    kind: "ai-architecture-term",
    shortDefinition:
      "High-priority instructions that shape model behavior before ordinary user prompts are applied.",
    observedIn: ["General AI usage", "Developer tools", "AI products"],
    status: "review",
    stability: "medium",
    aliases: [],
    related: ["Prompt", "Custom Instructions", "Custom GPT"],
    commonConfusion: ["Custom Instructions"],
    translations: {
      de: {
        shortDefinition:
          "Ein hoeherstufiger Prompt, der Anweisungen, Ton, Grenzen oder Verhalten fuer ein Modell oder einen Assistenten festlegt.",
      },
    },
  },
  {
    term: "Token",
    kind: "ai-architecture-term",
    shortDefinition:
      "A unit used by language models when processing input or generating output.",
    observedIn: ["Model documentation", "Developer tools"],
    status: "review",
    stability: "stable",
    aliases: [],
    related: ["LLM", "Context Window", "Prompt"],
    commonConfusion: ["Word", "Character"],
    translations: {
      de: {
        shortDefinition:
          "Eine Text-, Zahlen- oder Symbol-Einheit, die ein Modell beim Verarbeiten von Eingaben und Erzeugen von Ausgaben nutzt.",
      },
    },
  },
  {
    term: "Tool Use",
    kind: "ai-architecture-term",
    shortDefinition:
      "The ability of a model or agent to call external tools instead of relying only on text generation.",
    observedIn: ["Developer tools", "Agent products", "AI products"],
    status: "review",
    stability: "medium",
    aliases: [],
    related: ["Function Calling", "MCP", "Connectors"],
    commonConfusion: ["Plugins"],
    translations: {
      de: {
        shortDefinition:
          "Die Faehigkeit eines Modells oder Agenten, externe Werkzeuge aufzurufen, statt sich nur auf Textgenerierung zu verlassen.",
      },
    },
  },
  {
    term: "Upload Plugin",
    kind: "platform-ui-term",
    shortDefinition:
      "A product UI label for uploading a plugin package into an AI environment.",
    observedIn: ["Claude Desktop"],
    status: "draft",
    stability: "volatile",
    aliases: [],
    related: ["Create Plugin", "Personal Plugins", "Add Marketplace"],
    commonConfusion: ["Connectors", "Skills"],
  },
  {
    term: "Vector Database",
    kind: "ai-architecture-term",
    shortDefinition:
      "A database designed to store vectors and support similarity-based retrieval.",
    observedIn: ["General AI usage", "Knowledge systems", "Developer tools"],
    status: "review",
    stability: "stable",
    aliases: [],
    related: ["Embedding", "Vector Search", "RAG"],
    commonConfusion: ["Knowledge Graph"],
    translations: {
      de: {
        shortDefinition:
          "Eine Datenbank, die Vektoren speichert und aehnlichkeitsbasierte Suche unterstuetzt.",
      },
    },
  },
  {
    term: "Vector Search",
    kind: "ai-architecture-term",
    shortDefinition:
      "A retrieval method that finds similar items by comparing vector representations.",
    observedIn: ["General AI usage", "Knowledge systems", "Developer tools"],
    status: "review",
    stability: "stable",
    aliases: [],
    related: ["Embedding", "Vector Database", "RAG"],
    commonConfusion: ["Keyword search"],
    translations: {
      de: {
        shortDefinition:
          "Ein Retrieval-Verfahren, das aehnliche Inhalte ueber den Vergleich von Vektordarstellungen findet.",
      },
    },
  },
  {
    term: "Vibe Coding",
    kind: "ai-work-term",
    shortDefinition:
      "An informal label for coding by heavily leaning on AI generation and iteration, often with lighter upfront structure.",
    explanation:
      "Vibe coding usually means moving quickly with AI-generated code and shaping it as you go instead of planning everything in detail first. It can be useful for prototypes, but it still needs careful review because speed can hide mistakes.",
    aiContext:
      "The term belongs to AI-assisted development culture, where code is produced through rapid prompting, editing, and feedback loops with an AI system. The important distinction is that the workflow depends heavily on AI generation rather than only manual coding.",
    observedIn: ["General AI usage", "Developer communities", "AI vendor marketing"],
    status: "draft",
    stability: "volatile",
    aliases: [],
    related: ["AI-assisted Coding", "Coding Agent"],
    commonConfusion: ["AI-assisted Engineering"],
    translations: {
      de: {
        term: "Vibe Coding",
        shortDefinition:
          "Eine informelle Bezeichnung fuer Programmieren, das stark auf KI-Generierung und schnelle Iteration setzt.",
        explanation:
          "Vibe Coding meint meist, mit KI-generiertem Code schnell voranzugehen und die Loesung waehrenddessen zu formen, statt alles vorab stark zu planen.",
        aiContext:
          "Der Begriff gehoert zur Kultur der KI-unterstuetzten Entwicklung, in der Code durch schnelle Prompt-, Editier- und Feedback-Schleifen mit einem KI-System entsteht.",
      },
    },
  },
  {
    term: "Web Search",
    kind: "product-feature-term",
    shortDefinition:
      "A feature that brings current or external web information into an AI workflow.",
    observedIn: ["ChatGPT", "Claude Desktop", "AI products"],
    status: "review",
    stability: "medium",
    aliases: [],
    related: ["Search", "Deep Research", "Retrieval"],
    commonConfusion: ["RAG", "Enterprise Search"],
  },
  {
    term: "Claude",
    kind: "product-tool-name",
    shortDefinition:
      "Anthropic's AI assistant and product family for chat, writing, analysis, and tool-assisted work.",
    explanation:
      "Claude can refer to the assistant experience itself or to Anthropic's broader product family. In practice, people often use the name both for the model-backed assistant and for the surrounding app experience.",
    aiContext:
      "In AI-tooling discussions, Claude matters as a widely used assistant product and as the parent context for features such as Claude Desktop and Claude Code.",
    observedIn: ["Claude"],
    status: "review",
    stability: "vendor-specific",
    aliases: [],
    related: ["Claude Desktop", "Claude Code", "Assistant"],
    commonConfusion: ["Claude API"],
    sources: [
      {
        label: "Anthropic Claude",
        href: "https://www.anthropic.com/claude",
      },
    ],
    translations: {
      de: {
        term: "Claude",
        shortDefinition:
          "Anthropics KI-Assistent und Produktfamilie fuer Chat, Schreiben, Analyse und werkzeuggestuetzte Arbeit.",
      },
    },
  },
  {
    term: "Claude Code",
    kind: "product-tool-name",
    shortDefinition:
      "Anthropic's coding-focused Claude workflow for working in repositories, terminals, and developer tasks.",
    explanation:
      "Claude Code refers to Claude in a coding-oriented workflow, especially when it is used to inspect repositories, propose edits, or help with development tasks from a more agent-like environment.",
    aiContext:
      "This matters in AI-assisted engineering because it names a product/workflow where the assistant is used inside real coding loops rather than only general chat.",
    observedIn: ["Claude Code", "Developer tools"],
    status: "review",
    stability: "vendor-specific",
    aliases: [],
    related: ["Claude", "Claude Desktop", "Coding Agent"],
    commonConfusion: ["Claude API", "Chatbot"],
    sources: [
      {
        label: "Anthropic Claude Code documentation",
        needsVerification: true,
      },
    ],
    translations: {
      de: {
        shortDefinition:
          "Anthropics codefokussierter Claude-Workflow fuer Repositories, Terminals und Entwickleraufgaben.",
      },
    },
  },
  {
    term: "Codex",
    kind: "product-tool-name",
    shortDefinition:
      "An OpenAI product label for coding-oriented AI workflows, agents, or developer experiences.",
    explanation:
      "Codex is used as a product name around OpenAI's coding workflows rather than as a universal technical term. Depending on the surface, it can refer to an agent-like coding environment or a coding-focused capability inside a broader product.",
    aiContext:
      "In AI-assisted development, Codex matters because it names an AI coding workflow built around repository navigation, edits, and developer tasks rather than only general-purpose chat.",
    observedIn: ["Codex", "ChatGPT Codex", "Developer tools"],
    status: "draft",
    stability: "volatile",
    aliases: [],
    related: ["ChatGPT Codex", "Coding Agent", "AI-assisted Coding"],
    commonConfusion: ["OpenAI API models", "ChatGPT"],
    sources: [
      {
        label: "OpenAI Codex",
        href: "https://openai.com/codex/",
      },
    ],
    translations: {
      de: {
        shortDefinition:
          "Ein OpenAI-Produktname fuer KI-gestuetzte Coding-Workflows, Agenten oder Entwicklererlebnisse.",
      },
    },
  },
  {
    term: "Gemini",
    kind: "product-tool-name",
    shortDefinition:
      "Google's AI assistant and model-backed product family across chat, workspace, and developer experiences.",
    explanation:
      "Gemini can refer to Google's assistant experience, the model family behind it, or the brand used across several AI features. People often use the same word for both the product and the underlying models.",
    aiContext:
      "In AI-platform vocabulary, Gemini matters because it is a major vendor term that appears across chat, search-adjacent features, and work-product integrations.",
    observedIn: ["Gemini"],
    status: "review",
    stability: "vendor-specific",
    aliases: [],
    related: ["Assistant", "Chatbot"],
    commonConfusion: ["Google AI Studio", "Model names"],
    sources: [
      {
        label: "Google Gemini",
        href: "https://gemini.google.com/",
      },
    ],
    translations: {
      de: {
        shortDefinition:
          "Googles KI-Assistent und modellgestuetzte Produktfamilie fuer Chat, Workspace und Entwicklererlebnisse.",
      },
    },
  },
  {
    term: "Microsoft Copilot",
    kind: "product-tool-name",
    shortDefinition:
      "Microsoft's AI assistant brand across chat, productivity, and developer experiences.",
    explanation:
      "Copilot is used by Microsoft as a product family name for assistants that help with tasks in Microsoft products and services. The same name appears across different interfaces and workflows.",
    aiContext:
      "This term matters because many people encounter AI through Microsoft products first, so Copilot becomes both a product label and a shorthand for AI assistance in work software.",
    observedIn: ["Microsoft Copilot"],
    status: "review",
    stability: "vendor-specific",
    aliases: ["Copilot"],
    related: ["Assistant", "AI-assisted Development", "Chatbot"],
    commonConfusion: ["GitHub Copilot", "Chatbot"],
    sources: [
      {
        label: "Microsoft Copilot",
        href: "https://www.microsoft.com/en-us/microsoft-copilot",
      },
    ],
    translations: {
      de: {
        shortDefinition:
          "Microsofts KI-Assistentenmarke fuer Chat, Produktivitaet und Entwicklererlebnisse.",
      },
    },
  },
  {
    term: "Perplexity",
    kind: "product-tool-name",
    shortDefinition:
      "An AI answer engine product focused on question answering with web-grounded results and cited sources.",
    explanation:
      "Perplexity is used as a product name for an AI experience that combines answer generation with web retrieval. People usually meet it as a search-like assistant rather than as a general model label.",
    aiContext:
      "In AI vocabulary, Perplexity matters because it sits close to search, retrieval, citation, and research workflows, which helps distinguish it from plain chat assistants.",
    observedIn: ["Perplexity"],
    status: "review",
    stability: "vendor-specific",
    aliases: [],
    related: ["Web Search", "Deep Research", "Retrieval"],
    commonConfusion: ["Search engines", "RAG"],
    sources: [
      {
        label: "Perplexity",
        href: "https://www.perplexity.ai/",
      },
    ],
    translations: {
      de: {
        term: "Perplexity",
        shortDefinition:
          "Ein KI-Antwortsystem mit webgestuetzten Ergebnissen und Quellenhinweisen.",
      },
    },
  },
  {
    term: "Search",
    kind: "product-feature-term",
    shortDefinition:
      "An AI-tool product label for search features that look beyond the current chat and use external, connected, or indexed information.",
    explanation:
      "In AI products, Search often means more than a generic search box. It usually signals that the system can bring in web results, indexed files, or connected sources instead of replying only from the current conversation. The exact behavior depends on the product surface.",
    aiContext:
      "The AI-specific meaning matters because product labels such as Search, Web Search, and Deep Research often overlap but do not mean the same retrieval behavior. This is a product/tooling term, not a standalone general search concept.",
    observedIn: ["ChatGPT", "Perplexity", "AI products"],
    status: "draft",
    stability: "medium",
    aliases: [],
    related: ["Web Search", "Deep Research", "Retrieval"],
    commonConfusion: ["RAG", "Enterprise Search"],
    translations: {
      de: {
        shortDefinition:
          "Ein Produkt- oder UI-Label fuer KI-Suchfunktionen, die ueber den aktuellen Chat hinaus externe, verbundene oder indexierte Informationen nutzen.",
      },
    },
  },
];
