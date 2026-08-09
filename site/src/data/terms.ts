export type TermKind =
  | "general-ai-term"
  | "data-protection-term"
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
          "Ein System, das Ziele verfolgt, Schritte auswählt, Tools nutzt oder Aktionen über mehrere Schritte hinweg koordiniert.",
        explanation:
          "Ein Agent ist mehr als nur eine Chat-Antwort. Er kann Arbeit in Schritte zerlegen, den nächsten Schritt auswählen und manchmal Tools oder andere Systeme nutzen, um ein Ziel zu erreichen.",
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
          "KI mit Fokus auf zielgerichtetes Handeln, Tool-Nutzung und mehrschrittige Ausführung.",
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
          "Ein Ablauf, in dem ein KI-System mehrere Schritte plant oder ausführt, statt nur eine einzelne Antwort zu geben.",
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
          "Ein Oberbegriff für Systeme, die Aufgaben ausführen, die mit Wahrnehmung, Schlussfolgern, Vorhersage oder Generierung verbunden sind.",
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
          "Der Einsatz von KI zum Schreiben, Erklären, Überarbeiten oder Prüfen von Code bei gleichbleibender menschlicher Verantwortung.",
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
          "Der Einsatz von KI für breitere Softwarearbeit wie Coding, Debugging, Analyse, Dokumentation oder Planung.",
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
          "Der Einsatz von KI für breitere Engineering-Arbeit, einschließlich Code, Systeme, Dokumentation, Arbeitsabläufe und Entscheidungen.",
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
    translations: {
      de: {
        shortDefinition:
          "Bezeichnung in der Oberfläche für das Hinzufügen einer Marktplatz-Quelle oder eines Eintrags. Das genaue Verhalten hängt von der aktuellen Produktversion ab.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Herstellerbezeichnung für erzeugte Ergebnisse wie Dokumente, Code oder interaktive Arbeitsprodukte.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Ein dialogorientiertes KI-Produkt oder ein eingerichteter Helfer, der auf Eingaben antwortet und dabei Gedächtnis oder Tools nutzen kann.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Produktbezeichnung für das Planen oder Auslösen wiederholbarer KI-Aktionen. Der genaue Umfang hängt vom Produkt ab.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Herstellerbezeichnung für ein Tool, das Webinhalte oder Online-Quellen aus der KI-Umgebung heraus abruft.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Bezeichnung in der Oberfläche für die Dialogansicht, in der Eingaben und Antworten ausgetauscht werden.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Eine dialogorientierte Oberfläche, über die man Fragen stellt und erzeugte Antworten erhält.",
      },
    },
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
          "OpenAIs chatbasiertes KI-Produkt für den Umgang mit Modellen, Tools und Produktfunktionen.",
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
    translations: {
      de: {
        shortDefinition:
          "Produktbezeichnung im Umfeld von ChatGPT für KI-gestützte Programmier- oder Coding-Agent-Abläufe. Der genaue Zuschnitt kann sich ändern.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Die Desktop-Anwendung von Anthropic mit Chat-, Programmier- und Erweiterungsfunktionen.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Bezeichnung in der Oberfläche für programmierbezogene Abläufe, Tools oder Sitzungen innerhalb eines KI-Produkts.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Ein KI-Agent für programmbezogene Aufgaben: Dateien bearbeiten, Prüfungen ausführen oder sich in einer Codebasis bewegen.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Herstellerbezeichnung für Integrationen, die ein KI-Produkt mit externen Systemen oder Datenquellen verbinden.",
      },
    },
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
          "Die Informationen, die ein Modell bei einer Antwort berücksichtigen kann, einschließlich Anweisungen, Eingaben und abgerufener Inhalte.",
        explanation:
          "Kontext ist alles, was das Modell für die aktuelle Anfrage sehen kann, zum Beispiel dein Prompt, frühere Nachrichten, hochgeladene Dateien oder abgerufene Notizen.",
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
    translations: {
      de: {
        term: "Kontextfenster",
        shortDefinition:
          "Die Menge an Text beziehungsweise tokenisierter Information, die ein Modell in einer einzelnen Interaktion verarbeiten kann.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Bezeichnung in der Oberfläche, die auf gemeinsames oder eng abgestimmtes Arbeiten mit dem KI-System hindeutet. Das genaue Verhalten kann sich ändern.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Bezeichnung in der Oberfläche für das Anlegen eines Plugins oder Plugin-Pakets in einer KI-Umgebung.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Bezeichnung in der Oberfläche für das Anlegen einer wiederverwendbaren Fähigkeit oder eines gebündelten Anweisungssatzes.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Herstellerbezeichnung für den Einstieg in Erzeugungs- und Erstellungsabläufe in Claude Desktop.",
      },
    },
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
          "Ein vorkonfigurierter ChatGPT-ähnlicher Assistent mit eigenen Anweisungen, Verhalten oder Tool-Zugriff.",
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
    translations: {
      de: {
        shortDefinition:
          "Dauerhafte nutzerseitige Anweisungen, die das Verhalten eines Assistenten über einzelne Unterhaltungen hinweg beeinflussen.",
      },
    },
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
          "Ein KI-gestützter Recherchemodus, der mehrere Schritte, Quellen und Zusammenfassungen kombiniert.",
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
    translations: {
      de: {
        shortDefinition:
          "Bezeichnung in der Oberfläche für das Weitergeben von Arbeit an ein anderes Tool, einen anderen Modus oder Ausführungsweg. Die genaue Bedeutung hängt vom Produkt ab.",
      },
    },
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
          "Eine numerische Bedeutungsdarstellung, die für Ähnlichkeitsvergleiche oder Retrieval-Workflows genutzt wird.",
        aiContext:
          "In KI-Systemen werden Embeddings oft für Retrieval, semantische Suche, Clustering und Empfehlung genutzt. Hier ist nicht irgendeine mathematische Einbettung gemeint, sondern meist eine Vektordarstellung von Bedeutung.",
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
    translations: {
      de: {
        shortDefinition:
          "Produktbezeichnung für die Suche in unternehmensinternen Quellen wie Dokumenten oder angebundenen Systemen.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Funktion, mit der Dateien angehängt werden, damit das KI-System ihren Inhalt lesen oder als Eingabe verwenden kann.",
      },
    },
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
    aliases: ["Tool Calling", "Tool Use"],
    related: ["Tool Use", "MCP", "Connectors"],
    commonConfusion: ["Plugins", "APIs"],
    translations: {
      de: {
        shortDefinition:
          "Ein Mechanismus, mit dem ein Modell strukturierte Tool-Aktionen anfordern kann, statt nur freien Text zurückzugeben.",
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
          "Eine Ausgabe, die glaubwürdig klingt, aber falsch, unbelegt oder erfunden ist.",
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
          "Ein strukturierter Graph aus Entitäten und Beziehungen, der Retrieval, Schlussfolgern oder Navigation unterstützen kann.",
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
          "Ein Large Language Model, das textähnliche Sequenzen auf Basis von Training und Kontext verarbeitet und erzeugt.",
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
    translations: {
      de: {
        shortDefinition:
          "Herstellerbezeichnung für Artefakte, die interaktiv bleiben oder sich im Lauf der Arbeit aktualisieren.",
      },
    },
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
          "Model Context Protocol, ein Protokoll zum Verbinden von Modellen oder Agenten mit Tools und Kontextquellen.",
        explanation:
          "MCP ist eine Möglichkeit, eine KI-Anwendung über ein gemeinsames Protokoll mit Tools oder Datenquellen zu verbinden, statt für jede Verbindung eine eigene Sonderlösung zu bauen.",
        aiContext:
          "In KI-Tooling-Workflows ist MCP wichtig, weil Modelle damit über Chat-Text hinaus mit strukturierten Tools, Dateien und Systemen arbeiten können.",
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
          "Gespeicherte Informationen, die ein KI-System über mehrere Interaktionen hinweg wiederverwenden kann.",
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
    translations: {
      de: {
        shortDefinition:
          "Bezeichnung in der Oberfläche für das Starten eines neuen Gesprächsstrangs.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Bezeichnung in der Oberfläche für das Starten einer neuen Unterhaltung oder Arbeitssitzung.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Herstellerbezeichnung für selbst verwaltete Plugins oder Plugin-Bündel in einem persönlichen Arbeitsbereich.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Wiederverwendbare Erweiterungen, die einer KI-Umgebung Tools, Integrationen oder gebündelte Fähigkeiten hinzufügen.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Bezeichnung in der Oberfläche für einen gebündelten Arbeitsbereich, einen Kontextbehälter oder einen dauerhaften Arbeitsraum.",
      },
    },
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
          "Ein Prompt kann eine Frage, Anweisung, ein Beispiel oder ein Kontextblock sein. Schon kleine Formulierungsunterschiede können zu deutlich anderen Ergebnissen führen.",
        aiContext:
          "In der KI- und LLM-Nutzung sind Prompts nicht nur Texteingaben, sondern ein zentrales Steuerungsmittel für Struktur, Ton und Aufgabenrahmen.",
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
          "Die Praxis, Prompts so zu gestalten, dass Qualität, Struktur oder Nützlichkeit der Ausgabe beeinflusst werden.",
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
          "RAG bedeutet, dass das Modell vor dem Antworten relevantes Material nachschlägt. Das hilft besonders dann, wenn Genauigkeit wichtig ist oder Antworten auf bestimmten Dokumenten basieren sollen.",
        aiContext:
          "In KI-Systemen wird RAG genutzt, um Antworten auf reale Inhalte wie Handbücher, Richtlinien, Repositories oder internes Wissen zu stützen.",
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
          "Ein Modell, das auf strukturiertes Schlussfolgern, Planung oder mehrschrittiges Problemlösen ausgerichtet ist.",
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
    translations: {
      de: {
        shortDefinition:
          "Bezeichnung in der Oberfläche für wiederverwendbare mehrstufige Aktionen oder wiederholbare KI-Abläufe.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Funktionsbezeichnung für das Auslösen von KI-Arbeit nach einem wiederkehrenden oder geplanten Zeitplan.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Eine wiederverwendbare, gebündelte Fähigkeit oder ein Anweisungssatz, den ein KI-Produkt bereitstellt.",
      },
    },
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
    translations: {
      de: {
        shortDefinition:
          "Bezeichnung in der Oberfläche für das Durchsehen oder Verwalten wiederverwendbarer Skills in einer KI-Umgebung.",
      },
    },
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
          "Ein höherstufiger Prompt, der Anweisungen, Ton, Grenzen oder Verhalten für ein Modell oder einen Assistenten festlegt.",
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
          "Die Fähigkeit eines Modells oder Agenten, externe Tools aufzurufen, statt sich nur auf Textgenerierung zu verlassen.",
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
    translations: {
      de: {
        shortDefinition:
          "Bezeichnung in der Oberfläche für das Hochladen eines Plugin-Pakets in eine KI-Umgebung.",
      },
    },
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
          "Eine Datenbank, die Vektoren speichert und ähnlichkeitsbasierte Suche unterstützt.",
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
          "Ein Retrieval-Verfahren, das ähnliche Inhalte über den Vergleich von Vektordarstellungen findet.",
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
          "Eine informelle Bezeichnung für Programmieren, das stark auf KI-Generierung und schnelle Iteration setzt.",
        explanation:
          "Vibe Coding meint meist, mit KI-generiertem Code schnell voranzugehen und die Lösung währenddessen zu formen, statt alles vorab stark zu planen.",
        aiContext:
          "Der Begriff gehört zur Kultur der KI-unterstützten Entwicklung, in der Code durch schnelle Prompt-, Editier- und Feedback-Schleifen mit einem KI-System entsteht.",
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
    translations: {
      de: {
        shortDefinition:
          "Funktion, die aktuelle oder externe Web-Informationen in einen KI-Ablauf holt.",
      },
    },
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
          "Anthropics KI-Assistent und Produktfamilie für Chat, Schreiben, Analyse und toolgestützte Arbeit.",
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
          "Anthropics codefokussierter Claude-Workflow für Repositories, Terminals und Entwickleraufgaben.",
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
          "Ein OpenAI-Produktname für KI-gestützte Coding-Workflows, Agenten oder Entwicklererlebnisse.",
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
          "Googles KI-Assistent und modellgestützte Produktfamilie für Chat, Workspace und Entwicklererlebnisse.",
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
          "Microsofts KI-Assistentenmarke für Chat, Produktivität und Entwicklererlebnisse.",
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
          "Ein KI-Antwortsystem mit webgestützten Ergebnissen und Quellenhinweisen.",
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
          "Ein Produkt- oder UI-Label für KI-Suchfunktionen, die über den aktuellen Chat hinaus externe, verbundene oder indexierte Informationen nutzen.",
      },
    },
  },
  {
    term: "Pseudonymisation",
    kind: "data-protection-term",
    shortDefinition:
      "Replacing identifying details so the data can no longer be attributed to a person without extra information that is kept separately. The data stays personal data.",
    explanation:
      "You swap names, addresses or numbers for placeholders and keep the mapping somewhere else, under lock. Anyone holding only the processed text cannot tell who it is about. Anyone holding the mapping can reverse it \u2014 and that reversibility is the whole point of the term. Article 4(5) GDPR requires the additional information to be kept separately and protected by technical and organisational measures.",
    aiContext:
      "This is what most \u201canonymise before you paste it into the AI\u201d workflows actually do: replace names with Person 1, send the text to an external model, then put the real names back afterwards. It lowers the risk considerably and it is worth doing. It does not take the processing out of the GDPR: pseudonymised data remains personal data, so the legal basis, the processor agreement and the third-country question all still apply.",
    observedIn: ["General AI usage", "Model documentation"],
    status: "stable",
    stability: "stable",
    aliases: ["Pseudonymization"],
    related: ["Anonymisation"],
    commonConfusion: ["Anonymisation"],
    sources: [
      {
        label: "Art. 4(5) GDPR \u2014 definition of pseudonymisation",
        href: "https://eur-lex.europa.eu/eli/reg/2016/679/oj#d1e1489-1-1",
      },
      {
        label: "Recital 26 GDPR \u2014 pseudonymised data is still personal data",
        href: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
      },
    ],
    translations: {
      de: {
        term: "Pseudonymisierung",
        shortDefinition:
          "Identifizierende Angaben werden ersetzt, sodass ohne zusätzliche, getrennt aufbewahrte Informationen kein Personenbezug mehr herstellbar ist. Es bleiben personenbezogene Daten.",
        explanation:
          "Namen, Adressen oder Nummern werden durch Platzhalter ersetzt, die Zuordnung liegt getrennt und geschützt. Wer nur den bearbeiteten Text hat, erkennt die Person nicht. Wer die Zuordnung hat, kann sie wiederherstellen \u2014 und genau diese Umkehrbarkeit macht den Begriff aus. Art. 4 Z 5 DSGVO verlangt, dass die zusätzlichen Informationen gesondert aufbewahrt und durch technische und organisatorische Ma\u00dfnahmen geschützt werden.",
        aiContext:
          "Das ist es, was die meisten Verfahren tun, die als \u201eanonymisieren, bevor es in die KI geht\u201c beschrieben werden: Namen durch Person 1 ersetzen, Text an ein externes Modell schicken, danach die echten Namen wieder einsetzen. Das senkt das Risiko erheblich und ist sinnvoll. Es nimmt die Verarbeitung aber nicht aus der DSGVO heraus: Pseudonymisierte Daten bleiben personenbezogen, Rechtsgrundlage, Auftragsverarbeitung und Drittlandfrage bleiben bestehen.",
      },
    },
  },
  {
    term: "Anonymisation",
    kind: "data-protection-term",
    shortDefinition:
      "Processing that removes the link to a person for good, so the result is no longer personal data and the GDPR no longer applies to it.",
    explanation:
      "The test is not whether the obvious identifiers are gone, but whether the person can still be singled out by anyone, by any means reasonably likely to be used \u2014 including by combining the data with something else. If you keep a mapping that lets you reverse the step, it is not anonymisation. Recital 26 GDPR puts anonymous information outside the Regulation entirely, which is exactly why the bar for claiming it is high.",
    aiContext:
      "The word gets used loosely for anything that hides names before text is sent to a model. That matters here, because the two terms have opposite legal consequences: anonymous data falls out of the GDPR, pseudonymised data does not. Describing a reversible process as anonymisation is a claim you cannot support \u2014 and on a page about data protection it is the kind of error a reader will notice.",
    observedIn: ["General AI usage", "Model documentation"],
    status: "stable",
    stability: "stable",
    aliases: ["Anonymization"],
    related: ["Pseudonymisation"],
    commonConfusion: ["Pseudonymisation", "Redaction"],
    sources: [
      {
        label: "Recital 26 GDPR \u2014 anonymous information falls outside the Regulation",
        href: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
      },
    ],
    translations: {
      de: {
        term: "Anonymisierung",
        shortDefinition:
          "Verarbeitung, die den Personenbezug dauerhaft aufhebt, sodass keine personenbezogenen Daten mehr vorliegen und die DSGVO nicht mehr greift.",
        explanation:
          "Ma\u00dfstab ist nicht, ob die offensichtlichen Kennzeichen entfernt wurden, sondern ob die Person mit allen Mitteln, deren Einsatz nach allgemeinem Ermessen wahrscheinlich ist, noch herausgegriffen werden kann \u2014 auch durch Zusammenführung mit anderen Daten. Wer eine Zuordnung behält, mit der sich der Schritt rückgängig machen lässt, anonymisiert nicht. Erwägungsgrund 26 DSGVO nimmt anonyme Informationen vollständig aus der Verordnung heraus \u2014 deshalb ist die Hürde für diese Behauptung hoch.",
        aiContext:
          "Der Begriff wird locker für alles verwendet, was Namen verbirgt, bevor Text an ein Modell geht. Das ist hier von Bedeutung, weil beide Begriffe gegensätzliche Rechtsfolgen haben: Anonyme Daten fallen aus der DSGVO, pseudonymisierte nicht. Ein umkehrbares Verfahren als Anonymisierung zu bezeichnen, ist eine Behauptung, die sich nicht halten lässt.",
      },
    },
  },
  {
    term: "Fine-tuning",
    kind: "ai-architecture-term",
    shortDefinition:
      "Continuing the training of an existing model on additional examples, so the changed behaviour sits in the model's own weights.",
    explanation:
      "A base model is trained once, at great expense, on very broad material. Fine-tuning takes that finished model and trains it further on a narrower set of examples \u2014 the result is a changed model, not a changed prompt. It is the only one of the common approaches where the new knowledge or behaviour actually ends up inside the model.",
    aiContext:
      "This is the word that makes \u201cwe trained it on our data\u201d ambiguous, and the ambiguity is usually commercial. A product sold as specialised for law or medicine is far more often a system prompt plus retrieval over a document set than a fine-tuned model. Both can be good products. They differ in cost, in where your data ends up, and in what happens when the underlying model is replaced \u2014 so it is worth asking which one you are buying.",
    observedIn: ["General AI usage", "Developer tools", "AI vendor marketing"],
    status: "review",
    stability: "medium",
    aliases: ["Finetuning", "Fine tuning"],
    related: ["RAG", "Embedding"],
    commonConfusion: ["RAG", "Prompting"],
    sources: [
      {
        label: "OpenAI \u2014 fine-tuning guide",
        href: "https://platform.openai.com/docs/guides/fine-tuning",
      },
    ],
    translations: {
      de: {
        term: "Fine-Tuning",
        shortDefinition:
          "Ein bestehendes Modell wird mit zusätzlichen Beispielen weitertrainiert, sodass das veränderte Verhalten in den Gewichten des Modells selbst liegt.",
        explanation:
          "Ein Basismodell wird einmal und sehr teuer auf breitem Material trainiert. Fine-Tuning nimmt dieses fertige Modell und trainiert es mit einer engeren Beispielmenge weiter \u2014 heraus kommt ein verändertes Modell, kein veränderter Prompt. Es ist der einzige der gängigen Ansätze, bei dem das neue Wissen tatsächlich im Modell landet.",
        aiContext:
          "Dieses Wort macht „wir haben es mit unseren Daten trainiert“ mehrdeutig, und die Mehrdeutigkeit ist meist eine geschäftliche. Ein Produkt, das als spezialisiert auf Recht oder Medizin verkauft wird, ist weit häufiger ein System-Prompt plus Abruf über eine Dokumentensammlung als ein feinabgestimmtes Modell. Beides kann gut sein. Sie unterscheiden sich in den Kosten, darin wo deine Daten landen, und darin was passiert, wenn das zugrunde liegende Modell ausgetauscht wird \u2014 also lohnt die Frage, was genau man kauft.",
      },
    },
  },
  {
    term: "Retriever",
    kind: "ai-architecture-term",
    shortDefinition:
      "The component that searches a body of content and returns the passages most likely to answer a question.",
    explanation:
      "The retriever is the part that does the looking. It is separate from the model: it takes a question, searches an index, and hands back a handful of passages. If it returns the wrong ones, the answer will be wrong even when the model works perfectly.",
    aiContext:
      "Worth knowing because it changes where you look when something goes wrong. A bad answer is often a retrieval failure rather than a model failure, and the two are fixed in completely different places.",
    observedIn: ["Knowledge systems", "Developer tools"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["Retrieval", "RAG", "Index", "Reranker"],
    commonConfusion: ["Search", "LLM"],
    translations: {
      de: {
        term: "Retriever",
        shortDefinition:
          "Die Komponente, die einen Bestand durchsucht und die Passagen zurückgibt, die eine Frage am ehesten beantworten.",
        explanation:
          "Der Retriever ist der Teil, der sucht. Er ist vom Modell getrennt: Er nimmt eine Frage, durchsucht einen Index und liefert einige Passagen zurück. Gibt er die falschen zurück, wird die Antwort falsch — auch wenn das Modell einwandfrei arbeitet.",
        aiContext:
          "Wichtig, weil es ändert, wo man bei einem Fehler sucht. Eine schlechte Antwort ist oft ein Retrieval-Fehler und kein Modellfehler, und beides wird an völlig verschiedenen Stellen behoben.",
      },
    },
  },
  {
    term: "Index",
    kind: "ai-architecture-term",
    shortDefinition:
      "A data structure built from your content so that searching it is fast.",
    explanation:
      "An index is not the content. It is a derived structure built from it, the way a book index is built from the pages. That has a practical consequence: if you lose an index you rebuild it from the source, but if you lose the source the index cannot give it back.",
    aiContext:
      "The distinction decides your backup policy. Sources, curated knowledge and human decisions are irreplaceable; indexes, embeddings and caches are reconstructable. Backing them up at the same level costs money and protects nothing.",
    observedIn: ["Knowledge systems", "Developer tools", "Vector systems"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["Retrieval", "Full-text Index", "Vector Database", "Source of Truth"],
    commonConfusion: ["Source of Truth", "Knowledge Base"],
    translations: {
      de: {
        term: "Index",
        shortDefinition:
          "Eine aus deinen Inhalten aufgebaute Datenstruktur, die das Suchen schnell macht.",
        explanation:
          "Ein Index ist nicht der Inhalt. Er ist eine daraus abgeleitete Struktur, so wie ein Buchindex aus den Seiten entsteht. Das hat eine praktische Folge: Einen verlorenen Index baut man neu auf, eine verlorene Quelle kann der Index nicht zurückgeben.",
        aiContext:
          "Diese Unterscheidung entscheidet über die Sicherungsstrategie. Quellen, kuratiertes Wissen und menschliche Entscheidungen sind unersetzlich; Indizes, Embeddings und Caches sind rekonstruierbar. Beides gleich zu sichern kostet Geld und schützt nichts.",
      },
    },
  },
  {
    term: "Full-text Index",
    kind: "ai-architecture-term",
    shortDefinition:
      "An index over the actual words in your documents, used for search by word rather than by meaning.",
    observedIn: ["Knowledge systems", "Developer tools"],
    status: "draft",
    stability: "stable",
    aliases: ["Inverted Index"],
    related: ["Index", "Keyword Search", "BM25", "Hybrid Search"],
    commonConfusion: ["Vector Database"],
    translations: {
      de: {
        term: "Volltextindex",
        shortDefinition:
          "Ein Index über die tatsächlichen Wörter in deinen Dokumenten, für die Suche nach Wort statt nach Bedeutung.",
      },
    },
  },
  {
    term: "BM25",
    kind: "ai-architecture-term",
    shortDefinition:
      "A long-established ranking method for text search that scores how well a document matches the words in a query.",
    explanation:
      "BM25 predates the current wave of AI by decades and is still one of the strongest baselines in search. It rewards documents that contain the query words often, and discounts words that appear everywhere and therefore say little.",
    aiContext:
      "Relevant because it is frequently better than vector search for exact terms — product codes, error numbers, names, anything where the precise string matters. Which is why serious systems usually run both and combine the results.",
    observedIn: ["Knowledge systems", "Developer tools"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["Keyword Search", "Full-text Index", "Hybrid Search"],
    commonConfusion: ["Semantic Search"],
    translations: {
      de: {
        term: "BM25",
        shortDefinition:
          "Ein seit Langem etabliertes Ranking-Verfahren für die Textsuche, das bewertet, wie gut ein Dokument zu den Wörtern einer Anfrage passt.",
        explanation:
          "BM25 ist Jahrzehnte älter als die aktuelle KI-Welle und noch immer eine der stärksten Vergleichsgrundlagen in der Suche. Es belohnt Dokumente, die die Suchwörter häufig enthalten, und gewichtet Wörter ab, die überall vorkommen und deshalb wenig aussagen.",
        aiContext:
          "Relevant, weil es bei exakten Begriffen oft besser ist als die Vektorsuche — Produktnummern, Fehlercodes, Namen, überall dort, wo die genaue Zeichenfolge zählt. Deshalb betreiben ernsthafte Systeme meist beides und kombinieren die Ergebnisse.",
      },
    },
  },
  {
    term: "Embedding Model",
    kind: "ai-architecture-term",
    shortDefinition:
      "The model that turns text or images into vectors so they can be compared mathematically.",
    explanation:
      "It is a different model from the one that writes your answers, and it is chosen separately. A system typically runs several models at once: one for embeddings, one for reranking, one or more for generating text.",
    aiContext:
      "Changing it is expensive. Vectors produced by one embedding model cannot be compared with those from another, so switching means re-embedding everything you have indexed.",
    observedIn: ["Vector systems", "Developer tools", "Model documentation"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["Embedding", "Vector", "Vector Database", "Semantic Search"],
    commonConfusion: ["LLM"],
    translations: {
      de: {
        term: "Embedding-Modell",
        shortDefinition:
          "Das Modell, das Text oder Bilder in Vektoren umwandelt, damit sie mathematisch vergleichbar werden.",
        explanation:
          "Es ist ein anderes Modell als das, welches deine Antworten schreibt, und wird getrennt ausgewählt. Ein System betreibt meist mehrere Modelle gleichzeitig: eines für Embeddings, eines fürs Reranking, eines oder mehrere für die Texterzeugung.",
        aiContext:
          "Ein Wechsel ist teuer. Vektoren aus einem Embedding-Modell lassen sich nicht mit denen eines anderen vergleichen — ein Wechsel bedeutet, alles Indizierte neu zu berechnen.",
      },
    },
  },
  {
    term: "Vector",
    kind: "ai-architecture-term",
    shortDefinition:
      "A sequence of numbers representing content, so that similar content ends up numerically close together.",
    observedIn: ["Vector systems", "Developer tools"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["Embedding", "Embedding Model", "Vector Search", "Vector Database"],
    commonConfusion: ["Token"],
    translations: {
      de: {
        term: "Vektor",
        shortDefinition:
          "Eine Zahlenfolge, die Inhalt repräsentiert, sodass ähnlicher Inhalt zahlenmäßig nah beieinander liegt.",
      },
    },
  },
  {
    term: "Semantic Search",
    kind: "ai-architecture-term",
    shortDefinition:
      "Search by meaning rather than by the exact words used.",
    explanation:
      "A search for \"how do I get my money back\" can find a page titled \"Refund policy\", even though the two share almost no words. That is the strength — and the weakness, because it will also happily return something that is merely about the same topic.",
    aiContext:
      "It fails in a specific way worth knowing: exact identifiers. Ask for error code 0x80070005 and semantic search may return pages about errors in general. Keyword search would find the exact one.",
    observedIn: ["Knowledge systems", "Developer tools", "Vector systems"],
    status: "draft",
    stability: "stable",
    aliases: ["Vector-based Search"],
    related: ["Vector Search", "Keyword Search", "Hybrid Search", "Embedding"],
    commonConfusion: ["Keyword Search", "Web Search"],
    translations: {
      de: {
        term: "Semantische Suche",
        shortDefinition:
          "Suche nach Bedeutung statt nach den exakt verwendeten Wörtern.",
        explanation:
          "Eine Suche nach „wie bekomme ich mein Geld zurück“ kann eine Seite mit dem Titel „Rückerstattungsrichtlinie“ finden, obwohl beide kaum ein Wort teilen. Das ist die Stärke — und die Schwäche, denn sie liefert ebenso bereitwillig etwas, das nur zum selben Thema gehört.",
        aiContext:
          "Sie versagt auf eine bestimmte Weise: bei exakten Bezeichnern. Frag nach Fehlercode 0x80070005, und die semantische Suche liefert womöglich Seiten über Fehler im Allgemeinen. Die Stichwortsuche fände den genauen Treffer.",
      },
    },
  },
  {
    term: "Keyword Search",
    kind: "ai-architecture-term",
    shortDefinition:
      "Search for the concrete words themselves, rather than for what they mean.",
    observedIn: ["Knowledge systems", "Developer tools"],
    status: "draft",
    stability: "stable",
    aliases: ["Lexical Search"],
    related: ["BM25", "Full-text Index", "Semantic Search", "Hybrid Search"],
    commonConfusion: ["Semantic Search"],
    translations: {
      de: {
        term: "Stichwortsuche",
        shortDefinition:
          "Die Suche nach den konkreten Wörtern selbst statt nach ihrer Bedeutung.",
      },
    },
  },
  {
    term: "Hybrid Search",
    kind: "ai-architecture-term",
    shortDefinition:
      "Running keyword and semantic search together and combining the results.",
    explanation:
      "Because the two fail in opposite directions. Keyword search misses paraphrases; semantic search misses exact identifiers. Running both and merging their rankings covers more than either alone.",
    aiContext:
      "This is the usual production answer, not an advanced option. A system that only does vector search is missing half the cases people actually type.",
    observedIn: ["Knowledge systems", "Developer tools", "Enterprise AI products"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["Keyword Search", "Semantic Search", "Reranker", "BM25"],
    commonConfusion: ["RAG"],
    translations: {
      de: {
        term: "Hybride Suche",
        shortDefinition:
          "Stichwortsuche und semantische Suche gemeinsam ausführen und die Ergebnisse kombinieren.",
        explanation:
          "Weil beide in entgegengesetzte Richtungen versagen. Die Stichwortsuche übersieht Umschreibungen, die semantische Suche exakte Bezeichner. Beides auszuführen und die Ranglisten zusammenzuführen deckt mehr ab als jede für sich.",
        aiContext:
          "Das ist die übliche Produktionsantwort, keine Kür. Ein System, das nur Vektorsuche betreibt, verfehlt die Hälfte dessen, was Menschen tatsächlich eintippen.",
      },
    },
  },
  {
    term: "Reranker",
    kind: "ai-architecture-term",
    shortDefinition:
      "A second scoring stage that reorders search results before they reach the model.",
    explanation:
      "The first search is fast and approximate; it casts a wide net. The reranker is slower and more careful, and it only has to look at the twenty or fifty candidates the first stage returned. Two stages beat one because each is doing what it is good at.",
    aiContext:
      "It is its own failure point. Retrieval can find the right document and the reranker can still push it below the cut-off, so evaluating a retrieval system means measuring the stages separately.",
    observedIn: ["Knowledge systems", "Developer tools", "Vector systems"],
    status: "draft",
    stability: "stable",
    aliases: ["Re-ranking Model", "Cross-encoder"],
    related: ["Retrieval", "Hybrid Search", "Retriever", "Evaluation"],
    commonConfusion: ["Embedding Model"],
    translations: {
      de: {
        term: "Reranker",
        shortDefinition:
          "Eine zweite Bewertungsstufe, die Suchergebnisse neu sortiert, bevor sie das Modell erreichen.",
        explanation:
          "Die erste Suche ist schnell und ungefähr, sie wirft ein weites Netz aus. Der Reranker ist langsamer und genauer und muss nur die zwanzig oder fünfzig Kandidaten der ersten Stufe ansehen. Zwei Stufen schlagen eine, weil jede das tut, worin sie gut ist.",
        aiContext:
          "Er ist eine eigene Fehlerquelle. Das Retrieval kann das richtige Dokument finden und der Reranker es trotzdem unter die Abschneidegrenze drücken — deshalb misst man die Stufen getrennt.",
      },
    },
  },
  {
    term: "Chunk",
    kind: "ai-architecture-term",
    shortDefinition:
      "A smaller section of a larger document, indexed and retrieved on its own.",
    observedIn: ["Knowledge systems", "Developer tools", "Vector systems"],
    status: "draft",
    stability: "stable",
    aliases: ["Passage", "Segment"],
    related: ["Chunking", "Index", "Retrieval", "Context Window"],
    commonConfusion: ["Token"],
    translations: {
      de: {
        term: "Chunk",
        shortDefinition:
          "Ein kleinerer Abschnitt eines größeren Dokuments, der eigenständig indiziert und abgerufen wird.",
      },
    },
  },
  {
    term: "Chunking",
    kind: "ai-architecture-term",
    shortDefinition:
      "Splitting documents into sections small enough to retrieve usefully.",
    explanation:
      "Splitting badly is one of the most common causes of a system that looks right and answers wrong. Cut in the wrong place and a condition ends up separated from the rule it belongs to, so the retrieved passage says the opposite of what the document says.",
    aiContext:
      "It is a design decision, not a technicality. Section boundaries, tables, headings and how much overlap to keep all change what the system can answer, and none of it is visible once the answer is written.",
    observedIn: ["Knowledge systems", "Developer tools"],
    status: "draft",
    stability: "stable",
    aliases: ["Text Splitting"],
    related: ["Chunk", "Parsing", "Ingestion", "RAG"],
    commonConfusion: ["Tokenisation"],
    translations: {
      de: {
        term: "Chunking",
        shortDefinition:
          "Dokumente in Abschnitte teilen, die klein genug sind, um sinnvoll abgerufen zu werden.",
        explanation:
          "Schlecht zu teilen ist eine der häufigsten Ursachen für ein System, das richtig aussieht und falsch antwortet. An der falschen Stelle geschnitten, landet eine Bedingung getrennt von der Regel, zu der sie gehört — die gefundene Passage sagt dann das Gegenteil des Dokuments.",
        aiContext:
          "Das ist eine Entwurfsentscheidung, keine Formalie. Abschnittsgrenzen, Tabellen, Überschriften und die Überlappung entscheiden darüber, was das System beantworten kann — und nichts davon ist in der fertigen Antwort noch sichtbar.",
      },
    },
  },
  {
    term: "Parsing",
    kind: "ai-architecture-term",
    shortDefinition:
      "Extracting and interpreting the actual content of a file, as a step before anything can be searched.",
    explanation:
      "A PDF is not automatically text. It may be a scan, a set of positioned glyphs, or a layout in which a table reads correctly to a human eye and as scrambled lines to a parser.",
    aiContext:
      "A parser that misreads a table produces a false statement that then travels through the whole system as though it were sourced. It is an integrity failure with nobody at fault, which is why parsing quality belongs in the threat model and not only in the build pipeline.",
    observedIn: ["Knowledge systems", "Developer tools"],
    status: "draft",
    stability: "stable",
    aliases: ["Document Parsing", "Extraction"],
    related: ["OCR", "Ingestion", "Chunking", "Metadata"],
    commonConfusion: ["OCR"],
    translations: {
      de: {
        term: "Parsing",
        shortDefinition:
          "Den tatsächlichen Inhalt einer Datei herauslösen und interpretieren — der Schritt, bevor überhaupt etwas durchsucht werden kann.",
        explanation:
          "Ein PDF ist nicht automatisch Text. Es kann ein Scan sein, eine Menge platzierter Zeichen oder ein Layout, in dem eine Tabelle für das menschliche Auge stimmt und für den Parser als verwürfelte Zeilen ankommt.",
        aiContext:
          "Ein Parser, der eine Tabelle falsch liest, erzeugt eine falsche Aussage, die anschließend als belegt durchs ganze System wandert. Ein Integritätsfehler ohne Schuldigen — deshalb gehört Parsing-Qualität ins Bedrohungsmodell und nicht nur in die Build-Pipeline.",
      },
    },
  },
  {
    term: "OCR",
    kind: "ai-architecture-term",
    shortDefinition:
      "Optical character recognition: turning the text in an image or scan into text a machine can read.",
    observedIn: ["Knowledge systems", "Developer tools"],
    status: "draft",
    stability: "stable",
    aliases: ["Optical Character Recognition", "Texterkennung"],
    related: ["Parsing", "Ingestion"],
    commonConfusion: ["Parsing"],
    translations: {
      de: {
        term: "OCR",
        shortDefinition:
          "Optische Zeichenerkennung: den Text in einem Bild oder Scan in maschinenlesbaren Text überführen.",
      },
    },
  },
  {
    term: "Ingestion",
    kind: "ai-architecture-term",
    shortDefinition:
      "The process of taking content into a search or knowledge system: reading it, splitting it, tagging it and indexing it.",
    explanation:
      "Everything that happens between a document existing somewhere and it being findable. Parsing, OCR where needed, chunking, metadata, permissions, embedding, indexing.",
    aiContext:
      "It is where most quiet failures start, because each step can go wrong without raising an error. A stale index, an ACL not carried across, a parser silently dropping a column — all of them produce a system that answers confidently from content that is wrong or that the asker should not have seen.",
    observedIn: ["Knowledge systems", "Developer tools", "Enterprise AI products"],
    status: "draft",
    stability: "stable",
    aliases: ["Indexing Pipeline"],
    related: ["Parsing", "Chunking", "Metadata", "Index", "Freshness"],
    commonConfusion: ["Retrieval"],
    translations: {
      de: {
        term: "Ingestion",
        shortDefinition:
          "Der Vorgang, Inhalte in ein Such- oder Wissenssystem aufzunehmen: lesen, teilen, auszeichnen, indizieren.",
        explanation:
          "Alles, was zwischen „das Dokument existiert irgendwo“ und „es ist auffindbar“ passiert. Parsing, bei Bedarf OCR, Chunking, Metadaten, Berechtigungen, Embedding, Indizierung.",
        aiContext:
          "Hier beginnen die meisten stillen Fehler, weil jeder Schritt schiefgehen kann, ohne eine Fehlermeldung zu erzeugen. Ein veralteter Index, eine nicht mitgeführte Berechtigung, ein Parser, der eine Spalte verschluckt — alle erzeugen ein System, das selbstbewusst aus Inhalten antwortet, die falsch sind oder die der Fragende nicht sehen dürfte.",
      },
    },
  },
  {
    term: "Metadata",
    kind: "ai-architecture-term",
    shortDefinition:
      "Information about a piece of content rather than in it: source, date, author, owner, classification, validity.",
    explanation:
      "For a knowledge system this is not bookkeeping. Metadata is what lets a search filter by permission, prefer the current version over last year's, and tell you where an answer came from.",
    aiContext:
      "It is also what separates a system that can say \"this is a recommendation, checked in August, owned by security\" from one that can only say \"here is some text\".",
    observedIn: ["Knowledge systems", "Enterprise AI products", "Developer tools"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["Provenance", "Source of Truth", "Freshness", "Ingestion"],
    commonConfusion: ["Content"],
    translations: {
      de: {
        term: "Metadaten",
        shortDefinition:
          "Informationen über einen Inhalt statt in ihm: Quelle, Datum, Autor, Verantwortlicher, Einstufung, Gültigkeit.",
        explanation:
          "Für ein Wissenssystem ist das keine Buchhaltung. Metadaten ermöglichen es, nach Berechtigung zu filtern, die aktuelle Fassung der vorjährigen vorzuziehen und zu sagen, woher eine Antwort stammt.",
        aiContext:
          "Sie unterscheiden auch ein System, das sagen kann „das ist eine Empfehlung, im August geprüft, verantwortet von der Sicherheit“, von einem, das nur „hier ist Text“ sagen kann.",
      },
    },
  },
  {
    term: "Agentic RAG",
    kind: "ai-architecture-term",
    shortDefinition:
      "Retrieval where the model itself decides whether, when and what to search, rather than the application searching first.",
    explanation:
      "In classic RAG the application searches, then hands the results to the model. In agentic RAG the model is given search as a tool and chooses to use it — possibly several times, refining the query as it goes.",
    aiContext:
      "The two are different architectures with different failure modes, and conflating them causes real confusion. Classic RAG always retrieves, even when it should not. Agentic RAG may decide not to retrieve at all, and then answer from memory without saying so.",
    observedIn: ["Developer tools", "Agent products", "Knowledge systems"],
    status: "draft",
    stability: "medium",
    aliases: [],
    related: ["RAG", "Agent", "Tool Use", "Retrieval"],
    commonConfusion: ["RAG"],
    translations: {
      de: {
        term: "Agentic RAG",
        shortDefinition:
          "Retrieval, bei dem das Modell selbst entscheidet, ob, wann und wonach gesucht wird, statt dass die Anwendung vorab sucht.",
        explanation:
          "Beim klassischen RAG sucht die Anwendung und reicht die Ergebnisse ans Modell. Beim Agentic RAG bekommt das Modell die Suche als Werkzeug und entscheidet sich, sie zu nutzen — womöglich mehrfach, mit nachgeschärfter Anfrage.",
        aiContext:
          "Zwei verschiedene Architekturen mit verschiedenen Fehlerbildern, und sie zu vermengen stiftet echte Verwirrung. Klassisches RAG sucht immer, auch wenn es nicht sollte. Agentic RAG kann sich gegen die Suche entscheiden und dann aus dem Gedächtnis antworten, ohne das zu sagen.",
      },
    },
  },
  {
    term: "Knowledge Base",
    kind: "ai-architecture-term",
    shortDefinition:
      "A persistent, organised body of knowledge, as opposed to a pile of source documents or a chat history.",
    explanation:
      "The distinction that matters is against the two things it is not. Source documents are the raw material; a knowledge base is what someone has decided is true and worth keeping. A chat history is what was said; a knowledge base is what was concluded.",
    aiContext:
      "For an AI system this is the difference between finding information and having knowledge. Retrieval optimises response time; a knowledge base optimises knowledge accumulation. They combine well, and they are not the same thing.",
    observedIn: ["Knowledge systems", "Enterprise AI products", "General AI usage"],
    status: "draft",
    stability: "stable",
    aliases: ["AI Knowledge Base"],
    related: ["RAG", "Source of Truth", "Provenance", "LLM-maintained Knowledge Base"],
    commonConfusion: ["RAG", "Vector Database"],
    translations: {
      de: {
        term: "Wissensbasis",
        shortDefinition:
          "Ein dauerhafter, geordneter Wissensbestand — im Unterschied zu einem Haufen Quelldokumente oder einem Chatverlauf.",
        explanation:
          "Entscheidend ist die Abgrenzung gegen zwei Dinge, die sie nicht ist. Quelldokumente sind das Rohmaterial; eine Wissensbasis ist das, was jemand als wahr und aufbewahrenswert entschieden hat. Ein Chatverlauf ist, was gesagt wurde; eine Wissensbasis ist, was geschlossen wurde.",
        aiContext:
          "Für ein KI-System ist das der Unterschied zwischen Informationen finden und Wissen haben. Retrieval optimiert die Antwortzeit, eine Wissensbasis die Wissensakkumulation. Beides ergänzt sich und ist nicht dasselbe.",
      },
    },
  },
  {
    term: "LLM-maintained Knowledge Base",
    kind: "ai-architecture-term",
    shortDefinition:
      "A knowledge base an AI model reads, structures and updates under human control, rather than only searching.",
    explanation:
      "The minimum is unglamorous: persistent storage, addressable units of knowledge, a defined structure, something that can search and read it, and a model allowed to write. No vector database is required. No knowledge graph is required. No web interface is required.",
    aiContext:
      "What actually makes it work is an operating contract the agent reads — never change original sources, new findings go to a pending area first, update rather than duplicate, every statement carries a source, published files change only after review. Without that, write access to a knowledge base is a way to produce confident nonsense at scale.",
    observedIn: ["Knowledge systems", "Agent products", "Developer communities"],
    status: "draft",
    stability: "medium",
    aliases: [
      "Agent-maintained Knowledge Base",
      "LLM-curated Knowledge Base",
      "Self-evolving Knowledge Base",
      "Agent-native Knowledge System",
    ],
    related: ["Knowledge Base", "Agent", "Provenance", "Source of Truth"],
    commonConfusion: ["RAG", "Memory"],
    translations: {
      de: {
        term: "LLM-gepflegte Wissensbasis",
        shortDefinition:
          "Eine Wissensbasis, die ein KI-Modell unter menschlicher Kontrolle liest, strukturiert und fortschreibt — nicht nur durchsucht.",
        explanation:
          "Das Minimum ist unspektakulär: dauerhafter Speicher, adressierbare Wissenseinheiten, eine definierte Struktur, etwas, das darin suchen und lesen kann, und ein Modell, das schreiben darf. Keine Vektordatenbank nötig. Kein Wissensgraph nötig. Keine Weboberfläche nötig.",
        aiContext:
          "Was es tatsächlich funktionieren lässt, ist ein Arbeitsvertrag, den der Agent liest — Originalquellen nie ändern, neue Erkenntnisse zuerst in einen Wartebereich, aktualisieren statt duplizieren, jede Aussage mit Quelle, veröffentlichte Dateien nur nach Prüfung ändern. Ohne das ist Schreibzugriff auf eine Wissensbasis ein Weg, selbstbewussten Unsinn in großem Maßstab zu erzeugen.",
      },
    },
  },
  {
    term: "LLM Wiki",
    kind: "ai-architecture-term",
    shortDefinition:
      "A current but not standardised name for an AI-maintained knowledge base. The thing is real; the term is not settled.",
    explanation:
      "A 2026 research project uses LLM-Wiki as the name of its architecture, and other work speaks of LLM-curated hierarchical knowledge bases. But \"wiki\" only describes one possible way of organising the material — the same principle works as documentation, a handbook, or a plain folder of files.",
    aiContext:
      "Worth listing precisely because you will encounter it. If someone says LLM wiki, ask what they mean: persistent storage with structure and an agent that may write, or a web application that happens to have AI in it. Those are different projects.",
    observedIn: ["Developer communities", "AI vendor marketing"],
    status: "draft",
    stability: "volatile",
    aliases: ["LLM-Wiki"],
    related: ["LLM-maintained Knowledge Base", "Knowledge Base"],
    commonConfusion: ["Knowledge Base", "RAG"],
    translations: {
      de: {
        term: "LLM-Wiki",
        shortDefinition:
          "Ein aktueller, aber nicht standardisierter Name für eine KI-gepflegte Wissensbasis. Die Sache existiert, der Begriff ist nicht gesetzt.",
        explanation:
          "Ein Forschungsprojekt von 2026 nennt seine Architektur LLM-Wiki, andere Arbeiten sprechen von LLM-kuratierten hierarchischen Wissensbasen. „Wiki“ beschreibt aber nur eine mögliche Organisationsform — dasselbe Prinzip funktioniert als Dokumentation, Handbuch oder schlichter Dateiordner.",
        aiContext:
          "Gerade deshalb aufgeführt, weil dir der Begriff begegnen wird. Sagt jemand LLM-Wiki, frag nach: dauerhafter Speicher mit Struktur und schreibberechtigtem Agenten — oder eine Webanwendung, in der zufällig KI steckt? Das sind verschiedene Projekte.",
      },
    },
  },
  {
    term: "Source of Truth",
    kind: "ai-architecture-term",
    shortDefinition:
      "The one place a piece of information is authoritative. Everything else holding the same information is a copy.",
    explanation:
      "Once you name it, a great deal follows. If a document management system is the source of truth, then the search index, the embeddings, the chat history and any AI summary are all derived — and derived data can be wrong, stale, or visible to the wrong people without the original changing at all.",
    aiContext:
      "This is the question behind \"where is my data\", which is really at least fourteen questions. An AI system creates several representations of the same confidential content, and each one needs its own answer about storage, access and deletion.",
    observedIn: ["Knowledge systems", "Enterprise AI products", "Developer communities"],
    status: "draft",
    stability: "stable",
    aliases: ["Single Source of Truth", "SSOT"],
    related: ["Index", "Provenance", "Freshness", "Metadata"],
    commonConfusion: ["Index", "Knowledge Base"],
    translations: {
      de: {
        term: "Source of Truth",
        shortDefinition:
          "Der eine Ort, an dem eine Information maßgeblich ist. Alles andere, was dieselbe Information hält, ist eine Kopie.",
        explanation:
          "Ist er benannt, folgt vieles daraus. Ist ein Dokumentenmanagement der Source of Truth, dann sind Suchindex, Embeddings, Chatverlauf und jede KI-Zusammenfassung abgeleitet — und Abgeleitetes kann falsch, veraltet oder für die falschen Personen sichtbar sein, ohne dass sich am Original etwas ändert.",
        aiContext:
          "Das ist die Frage hinter „wo sind meine Daten“, und die zerfällt in mindestens vierzehn Fragen. Ein KI-System erzeugt mehrere Repräsentationen desselben vertraulichen Inhalts, und jede braucht ihre eigene Antwort zu Speicherung, Zugriff und Löschung.",
      },
    },
  },
  {
    term: "Provenance",
    kind: "ai-architecture-term",
    shortDefinition:
      "The origin and history of a piece of information: where it came from, through what, changed by whom.",
    explanation:
      "A citation says an answer rests on document X. Provenance goes further: answer to claim to knowledge page to source document to originating system to owner to version.",
    aiContext:
      "With an agent in the chain, \"who changed this\" has as many as six answers — who asked, who decided, which model generated it, what executed it, under whose credential, and who approved. \"User X changed file Y\" stops describing what happened.",
    observedIn: ["Knowledge systems", "Enterprise AI products"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["Source of Truth", "Metadata", "Knowledge Base"],
    commonConfusion: ["Citation"],
    translations: {
      de: {
        term: "Provenienz",
        shortDefinition:
          "Herkunft und Geschichte einer Information: woher sie stammt, worüber sie kam, von wem sie geändert wurde.",
        explanation:
          "Eine Quellenangabe sagt, dass eine Antwort auf Dokument X beruht. Provenienz geht weiter: Antwort zu Aussage zu Wissensseite zu Quelldokument zu Ursprungssystem zu Verantwortlichem zu Version.",
        aiContext:
          "Mit einem Agenten in der Kette hat „wer hat das geändert“ bis zu sechs Antworten — wer gefragt hat, wer entschieden hat, welches Modell es erzeugt hat, was es ausgeführt hat, unter wessen Zugangsdaten und wer zugestimmt hat. „Nutzer X hat Datei Y geändert“ beschreibt den Vorgang nicht mehr.",
      },
    },
  },
  {
    term: "Freshness",
    kind: "ai-architecture-term",
    shortDefinition:
      "How current a derived copy is compared to its source.",
    explanation:
      "An index built last week answers from last week. If a policy was replaced on Monday and the index was last built on Friday, the system will quote the old one with complete confidence and a correct-looking citation.",
    aiContext:
      "Freshness is also a permissions problem, not only an accuracy one. If someone's access was revoked but the index still carries their old permissions, the system enforces a rule that no longer exists.",
    observedIn: ["Knowledge systems", "Enterprise AI products"],
    status: "draft",
    stability: "stable",
    aliases: ["Staleness"],
    related: ["Index", "Ingestion", "Source of Truth", "Revocation"],
    commonConfusion: ["Cache"],
    translations: {
      de: {
        term: "Aktualität",
        shortDefinition:
          "Wie aktuell eine abgeleitete Kopie gegenüber ihrer Quelle ist.",
        explanation:
          "Ein Index von letzter Woche antwortet aus letzter Woche. Wurde eine Richtlinie am Montag ersetzt und der Index zuletzt am Freitag gebaut, zitiert das System die alte — mit voller Überzeugung und einer korrekt aussehenden Quellenangabe.",
        aiContext:
          "Aktualität ist auch ein Berechtigungsproblem, nicht nur eines der Richtigkeit. Wurde jemandem der Zugriff entzogen, der Index trägt aber noch die alten Berechtigungen, setzt das System eine Regel durch, die es nicht mehr gibt.",
      },
    },
  },
  {
    term: "Authentication",
    kind: "data-protection-term",
    shortDefinition:
      "Establishing who someone is.",
    explanation:
      "Distinct from authorization, which is what they may then do. Authentication answers \"are you really Ruben\"; authorization answers \"may Ruben delete this\". Systems that blur the two tend to grant too much.",
    aiContext:
      "With agents there are three identities, not one: the human, the agent acting on their behalf, and the service account underneath. Which of them a log records changes whether the log can answer anything useful.",
    observedIn: ["Enterprise AI products", "Developer tools"],
    status: "draft",
    stability: "stable",
    aliases: ["AuthN"],
    related: ["Authorization", "OAuth", "OIDC", "Identity Provider"],
    commonConfusion: ["Authorization"],
    translations: {
      de: {
        term: "Authentifizierung",
        shortDefinition: "Feststellen, wer jemand ist.",
        explanation:
          "Zu unterscheiden von der Autorisierung, also davon, was jemand dann darf. Authentifizierung beantwortet „bist du wirklich Ruben“, Autorisierung „darf Ruben das löschen“. Systeme, die beides vermengen, gewähren tendenziell zu viel.",
        aiContext:
          "Bei Agenten gibt es drei Identitäten statt einer: den Menschen, den in seinem Auftrag handelnden Agenten und das Dienstkonto darunter. Welche davon ein Protokoll festhält, entscheidet, ob es überhaupt etwas beantworten kann.",
      },
    },
  },
  {
    term: "Authorization",
    kind: "data-protection-term",
    shortDefinition:
      "Deciding what an established identity is allowed to do.",
    explanation:
      "The rule that matters for AI is short: human permission is not agent permission. You may be allowed to delete mail; that does not mean the agent working for you needs the same right. Its permissions are a subset chosen per task, not an inheritance.",
    aiContext:
      "Read and write belong in different categories, and so do low-impact and high-impact actions. A tool list that mixes reading a ticket with closing it cannot be reviewed by anyone.",
    observedIn: ["Enterprise AI products", "Developer tools"],
    status: "draft",
    stability: "stable",
    aliases: ["AuthZ"],
    related: ["Authentication", "Scope", "ACL", "RBAC"],
    commonConfusion: ["Authentication"],
    translations: {
      de: {
        term: "Autorisierung",
        shortDefinition: "Entscheiden, was eine festgestellte Identität tun darf.",
        explanation:
          "Die für KI entscheidende Regel ist kurz: Die Berechtigung des Menschen ist nicht die des Agenten. Du darfst vielleicht Mails löschen; das heißt nicht, dass der Agent, der für dich arbeitet, dasselbe Recht braucht. Seine Rechte sind eine je Aufgabe gewählte Teilmenge, keine Vererbung.",
        aiContext:
          "Lesen und Schreiben gehören in verschiedene Kategorien, ebenso Aktionen mit geringer und mit großer Wirkung. Eine Werkzeugliste, die das Lesen eines Tickets mit dessen Schließen vermengt, kann niemand prüfen.",
      },
    },
  },
  {
    term: "OAuth",
    kind: "data-protection-term",
    shortDefinition:
      "A standard for letting one application act on your behalf in another, without handing it your password.",
    aiContext:
      "This is what is happening when an AI tool asks to connect to your mail or your drive. What you grant is a scope, and the scope is usually broader than the task in front of you.",
    observedIn: ["Enterprise AI products", "Developer tools", "General AI usage"],
    status: "draft",
    stability: "stable",
    aliases: ["OAuth 2.0"],
    related: ["Access Token", "Scope", "OIDC", "Revocation"],
    commonConfusion: ["OIDC", "Authentication"],
    translations: {
      de: {
        term: "OAuth",
        shortDefinition:
          "Ein Standard, mit dem eine Anwendung in deinem Namen in einer anderen handeln darf, ohne dein Passwort zu erhalten.",
        aiContext:
          "Genau das passiert, wenn ein KI-Werkzeug um Verbindung zu deiner Mail oder deinem Speicher bittet. Was du erteilst, ist ein Scope — und der ist meist weiter gefasst als die Aufgabe vor dir.",
      },
    },
  },
  {
    term: "Access Token",
    kind: "data-protection-term",
    shortDefinition:
      "The credential a system presents to exercise an access that was granted to it.",
    aiContext:
      "The rule worth keeping: the token never goes to the model. The model decides what should happen; the runtime holds the credential and decides whether it may. Anything a model can read, it can be talked into repeating.",
    observedIn: ["Developer tools", "Enterprise AI products"],
    status: "draft",
    stability: "stable",
    aliases: ["Bearer Token"],
    related: ["OAuth", "Scope", "Revocation", "Secrets Management"],
    commonConfusion: ["API Key"],
    translations: {
      de: {
        term: "Access Token",
        shortDefinition:
          "Der Nachweis, den ein System vorlegt, um einen gewährten Zugriff auszuüben.",
        aiContext:
          "Die Regel, die zählt: Das Token geht nie an das Modell. Das Modell entscheidet, was geschehen soll; die Laufzeitumgebung hält den Nachweis und entscheidet, ob es darf. Alles, was ein Modell lesen kann, kann man ihm auch entlocken.",
      },
    },
  },
  {
    term: "Scope",
    kind: "data-protection-term",
    shortDefinition:
      "The bounded set of permissions attached to a token: what it may reach, and what it may do there.",
    aiContext:
      "The place where least privilege is actually decided, and usually the place where it is quietly abandoned. Read-only access to one folder and full access to a mailbox are the same consent dialog to most people.",
    observedIn: ["Developer tools", "Enterprise AI products"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["OAuth", "Access Token", "Authorization", "ACL"],
    commonConfusion: ["Context Window"],
    translations: {
      de: {
        term: "Scope",
        shortDefinition:
          "Der begrenzte Satz an Rechten, der an einem Token hängt: was es erreichen und was es dort tun darf.",
        aiContext:
          "Hier wird die minimale Rechtevergabe tatsächlich entschieden — und meist stillschweigend aufgegeben. Lesezugriff auf einen Ordner und Vollzugriff auf ein Postfach sind für die meisten derselbe Zustimmungsdialog.",
      },
    },
  },
  {
    term: "OIDC",
    kind: "data-protection-term",
    shortDefinition:
      "OpenID Connect: an identity layer built on top of OAuth, so an application can learn who you are and not only what it may do.",
    observedIn: ["Enterprise AI products", "Developer tools"],
    status: "draft",
    stability: "stable",
    aliases: ["OpenID Connect"],
    related: ["OAuth", "Authentication", "Identity Provider"],
    commonConfusion: ["OAuth"],
    translations: {
      de: {
        term: "OIDC",
        shortDefinition:
          "OpenID Connect: eine Identitätsschicht auf OAuth, damit eine Anwendung erfährt, wer du bist — und nicht nur, was sie darf.",
      },
    },
  },
  {
    term: "ACL",
    kind: "data-protection-term",
    shortDefinition:
      "An access control list: per-object permissions saying who may see or change that particular thing.",
    explanation:
      "Where roles say \"editors may edit\", an ACL says \"this document is visible to these five people\". Most real document systems use both.",
    aiContext:
      "ACL-aware retrieval is one of the hardest parts of enterprise AI search, and one of the easiest to get subtly wrong. The index has to filter by the asker's permissions at query time — otherwise the system cheerfully summarises a document the person was never allowed to open.",
    observedIn: ["Enterprise AI products", "Knowledge systems"],
    status: "draft",
    stability: "stable",
    aliases: ["Access Control List"],
    related: ["RBAC", "Authorization", "Retrieval", "Freshness"],
    commonConfusion: ["RBAC"],
    translations: {
      de: {
        term: "ACL",
        shortDefinition:
          "Eine Zugriffskontrollliste: objektbezogene Rechte, die sagen, wer genau dieses Objekt sehen oder ändern darf.",
        explanation:
          "Wo Rollen sagen „Redakteure dürfen bearbeiten“, sagt eine ACL „dieses Dokument sehen diese fünf Personen“. Reale Dokumentensysteme nutzen meist beides.",
        aiContext:
          "ACL-bewusstes Retrieval ist einer der schwierigsten Teile unternehmensweiter KI-Suche und einer der am leichtesten unbemerkt falsch gemachten. Der Index muss zur Abfragezeit nach den Rechten des Fragenden filtern — sonst fasst das System bereitwillig ein Dokument zusammen, das die Person nie öffnen durfte.",
      },
    },
  },
  {
    term: "RBAC",
    kind: "data-protection-term",
    shortDefinition:
      "Role-based access control: permissions attached to roles, and people attached to roles.",
    observedIn: ["Enterprise AI products", "Developer tools"],
    status: "draft",
    stability: "stable",
    aliases: ["Role-based Access Control"],
    related: ["ACL", "Authorization", "Identity Provider"],
    commonConfusion: ["ACL"],
    translations: {
      de: {
        term: "RBAC",
        shortDefinition:
          "Rollenbasierte Zugriffskontrolle: Rechte hängen an Rollen, Personen hängen an Rollen.",
      },
    },
  },
  {
    term: "Identity Provider",
    kind: "data-protection-term",
    shortDefinition:
      "The system that holds identities and performs sign-in for everything else.",
    aiContext:
      "It is also where offboarding actually takes effect. If an AI tool holds its own copy of who works here, removing someone centrally does not remove them there — which is one of the quieter ways access outlives employment.",
    observedIn: ["Enterprise AI products"],
    status: "draft",
    stability: "stable",
    aliases: ["IdP"],
    related: ["OIDC", "Authentication", "RBAC", "Revocation"],
    commonConfusion: ["Authentication"],
    translations: {
      de: {
        term: "Identity Provider",
        shortDefinition:
          "Das System, das Identitäten hält und die Anmeldung für alles Übrige übernimmt.",
        aiContext:
          "Hier greift auch das Offboarding tatsächlich. Hält ein KI-Werkzeug eine eigene Kopie davon, wer hier arbeitet, entfernt eine zentrale Löschung die Person dort nicht — eine der leiseren Arten, wie Zugriff die Beschäftigung überdauert.",
      },
    },
  },
  {
    term: "Revocation",
    kind: "data-protection-term",
    shortDefinition:
      "Withdrawing an access that was previously granted.",
    explanation:
      "Easy to state and reliably harder than expected, because access has usually been copied. Revoking a token does not un-index the content it already pulled, and does not empty the caches it filled.",
    aiContext:
      "This is where the derived copies come back. If a search index was built with someone's permissions and those permissions are withdrawn, the index still holds what it saw. Revocation has to reach every representation, not only the original.",
    observedIn: ["Enterprise AI products", "Developer tools"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["Access Token", "Freshness", "ACL", "Identity Provider"],
    commonConfusion: ["Deletion"],
    translations: {
      de: {
        term: "Entzug",
        shortDefinition: "Einen zuvor gewährten Zugriff zurücknehmen.",
        explanation:
          "Leicht gesagt und verlässlich schwerer als gedacht, weil Zugriff meist schon kopiert wurde. Ein zurückgezogenes Token entfernt nicht die bereits indizierten Inhalte und leert nicht die gefüllten Zwischenspeicher.",
        aiContext:
          "Hier kehren die abgeleiteten Kopien zurück. Wurde ein Suchindex mit den Rechten einer Person aufgebaut und werden diese Rechte entzogen, hält der Index weiterhin, was er gesehen hat. Ein Entzug muss jede Repräsentation erreichen, nicht nur das Original.",
      },
    },
  },
  {
    term: "Prompt Injection",
    kind: "data-protection-term",
    shortDefinition:
      "Content that tries to act as an instruction to the AI system reading it.",
    explanation:
      "A model reads everything it is given as one stream. Text hidden in a document, a web page or a tool result can therefore try to give it orders — and it does not have to be aimed at you to reach you.",
    aiContext:
      "The defence is a boundary, not a filter: instructions come from the user, everything encountered through a tool is data. That is why a serious agent frame states outright that file contents, web pages and tool output are never treated as instructions.",
    observedIn: ["General AI usage", "Developer communities", "Model documentation"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["System Prompt", "Context", "Authorization", "Agent"],
    commonConfusion: ["Jailbreak", "Hallucination"],
    translations: {
      de: {
        term: "Prompt Injection",
        shortDefinition:
          "Inhalt, der versucht, für das lesende KI-System als Anweisung zu wirken.",
        explanation:
          "Ein Modell liest alles, was es bekommt, als einen Strom. In einem Dokument, einer Webseite oder einem Werkzeugergebnis versteckter Text kann ihm deshalb Befehle geben — und er muss nicht auf dich gezielt sein, um dich zu erreichen.",
        aiContext:
          "Die Abwehr ist eine Grenze, kein Filter: Anweisungen kommen von der nutzenden Person, alles über ein Werkzeug Begegnete sind Daten. Deshalb hält ein ernsthafter Agentenrahmen ausdrücklich fest, dass Dateiinhalte, Webseiten und Werkzeugausgaben nie als Anweisung gelten.",
      },
    },
  },
  {
    term: "DLP",
    kind: "data-protection-term",
    shortDefinition:
      "Data loss prevention: controls that try to stop sensitive information leaving where it belongs.",
    observedIn: ["Enterprise AI products"],
    status: "draft",
    stability: "stable",
    aliases: ["Data Loss Prevention"],
    related: ["Scope", "Authorization", "Observability"],
    commonConfusion: ["Anonymisation"],
    translations: {
      de: {
        term: "DLP",
        shortDefinition:
          "Data Loss Prevention: Kontrollen, die verhindern sollen, dass sensible Informationen ihren Bereich verlassen.",
      },
    },
  },
  {
    term: "Secrets Management",
    kind: "data-protection-term",
    shortDefinition:
      "Handling tokens, API keys, passwords and certificates so that they are neither committed, logged, nor pasted into a chat.",
    aiContext:
      "AI adds a specific route: a secret that enters a model's context has left your control, because context can be summarised, logged, cached and repeated. Keeping credentials with the runtime rather than the model is not an optimisation.",
    observedIn: ["Developer tools", "Enterprise AI products"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["Access Token", "Scope", "Context"],
    commonConfusion: ["Encryption"],
    translations: {
      de: {
        term: "Secrets Management",
        shortDefinition:
          "Der Umgang mit Tokens, API-Schlüsseln, Passwörtern und Zertifikaten, sodass sie weder eingecheckt noch protokolliert noch in einen Chat kopiert werden.",
        aiContext:
          "KI fügt einen eigenen Weg hinzu: Ein Geheimnis, das in den Kontext eines Modells gelangt, hat deinen Einflussbereich verlassen — Kontext kann zusammengefasst, protokolliert, zwischengespeichert und wiederholt werden. Zugangsdaten bei der Laufzeitumgebung statt beim Modell zu halten ist keine Optimierung.",
      },
    },
  },
  {
    term: "Entity",
    kind: "ai-architecture-term",
    shortDefinition:
      "A distinctly modelled thing in a knowledge graph: a person, a server, a company, a contract.",
    observedIn: ["Knowledge systems", "Developer tools"],
    status: "draft",
    stability: "stable",
    aliases: ["Node"],
    related: ["Knowledge Graph", "Relationship", "Ontology"],
    commonConfusion: ["Chunk"],
    translations: {
      de: {
        term: "Entität",
        shortDefinition:
          "Ein eigenständig modelliertes Ding in einem Wissensgraphen: eine Person, ein Server, ein Unternehmen, ein Vertrag.",
      },
    },
  },
  {
    term: "Relationship",
    kind: "ai-architecture-term",
    shortDefinition:
      "A modelled connection between two entities: depends on, reports to, replaces, is part of.",
    aiContext:
      "The reason to consider a graph at all. If your questions are about how things connect — what breaks if this server goes down, who signed off on which version — then relationships are the thing you are searching, and a document index cannot represent them.",
    observedIn: ["Knowledge systems", "Developer tools"],
    status: "draft",
    stability: "stable",
    aliases: ["Edge"],
    related: ["Knowledge Graph", "Entity", "Graph Traversal"],
    commonConfusion: ["Related Terms"],
    translations: {
      de: {
        term: "Beziehung",
        shortDefinition:
          "Eine modellierte Verbindung zwischen zwei Entitäten: hängt ab von, berichtet an, ersetzt, ist Teil von.",
        aiContext:
          "Der Grund, überhaupt über einen Graphen nachzudenken. Drehen sich deine Fragen darum, wie Dinge zusammenhängen — was fällt aus, wenn dieser Server ausfällt, wer hat welche Version freigegeben —, dann sind Beziehungen das Gesuchte, und ein Dokumentindex kann sie nicht abbilden.",
      },
    },
  },
  {
    term: "Graph Traversal",
    kind: "ai-architecture-term",
    shortDefinition:
      "Following relationships through a graph to answer a question that spans several steps.",
    observedIn: ["Knowledge systems", "Developer tools"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["Knowledge Graph", "Relationship", "Entity"],
    commonConfusion: ["Semantic Search"],
    translations: {
      de: {
        term: "Graphtraversierung",
        shortDefinition:
          "Beziehungen durch einen Graphen verfolgen, um eine Frage zu beantworten, die über mehrere Schritte reicht.",
      },
    },
  },
  {
    term: "Ontology",
    kind: "ai-architecture-term",
    shortDefinition:
      "A formal model of which kinds of things exist and which kinds of relationships are possible between them.",
    explanation:
      "The schema behind a knowledge graph. It decides in advance that a Server can host an Application but cannot report to one.",
    observedIn: ["Knowledge systems", "Developer communities"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["Knowledge Graph", "Taxonomy", "Entity", "Relationship"],
    commonConfusion: ["Taxonomy"],
    translations: {
      de: {
        term: "Ontologie",
        shortDefinition:
          "Ein formales Modell davon, welche Arten von Dingen existieren und welche Arten von Beziehungen zwischen ihnen möglich sind.",
        explanation:
          "Das Schema hinter einem Wissensgraphen. Es legt vorab fest, dass ein Server eine Anwendung beherbergen, aber nicht an sie berichten kann.",
      },
    },
  },
  {
    term: "Taxonomy",
    kind: "ai-architecture-term",
    shortDefinition:
      "A hierarchical classification: categories inside categories.",
    observedIn: ["Knowledge systems", "General AI usage"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["Ontology", "Metadata"],
    commonConfusion: ["Ontology"],
    translations: {
      de: {
        term: "Taxonomie",
        shortDefinition: "Eine hierarchische Klassifikation: Kategorien in Kategorien.",
      },
    },
  },
  {
    term: "Inference",
    kind: "general-ai-term",
    shortDefinition:
      "Running a trained model on an input to produce an output. The everyday act of using a model.",
    explanation:
      "Training is what produced the model, once and expensively. Inference is what happens every time you send it something, and it is what you pay for per use.",
    observedIn: ["Model documentation", "Developer tools"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["LLM", "Model Weights", "Token"],
    commonConfusion: ["Training", "Fine-tuning"],
    translations: {
      de: {
        term: "Inferenz",
        shortDefinition:
          "Ein trainiertes Modell auf eine Eingabe anwenden, um eine Ausgabe zu erzeugen. Der alltägliche Vorgang der Modellnutzung.",
        explanation:
          "Das Training hat das Modell erzeugt, einmal und teuer. Inferenz passiert bei jeder Anfrage und ist das, was pro Nutzung bezahlt wird.",
      },
    },
  },
  {
    term: "Model Weights",
    kind: "general-ai-term",
    shortDefinition:
      "The parameters a model learned during training. The model itself, as a file.",
    aiContext:
      "Whether you can obtain them decides whether a model can run on your own infrastructure at all. It is the practical line between using a service and operating a system.",
    observedIn: ["Model documentation", "Developer communities"],
    status: "draft",
    stability: "stable",
    aliases: ["Weights", "Parameters"],
    related: ["LLM", "Inference", "Fine-tuning"],
    commonConfusion: ["Training Data"],
    translations: {
      de: {
        term: "Modellgewichte",
        shortDefinition:
          "Die im Training gelernten Parameter eines Modells. Das Modell selbst, als Datei.",
        aiContext:
          "Ob man sie bekommt, entscheidet überhaupt darüber, ob ein Modell auf eigener Infrastruktur laufen kann. Das ist die praktische Grenze zwischen einen Dienst nutzen und ein System betreiben.",
      },
    },
  },
  {
    term: "Frontend",
    kind: "ai-architecture-term",
    shortDefinition:
      "The part of a system a person sees and interacts with.",
    aiContext:
      "Worth naming because in a good AI system almost nothing important happens here. Search, permission checks, storage and most actions live behind it, and the model is one component among several rather than the thing the interface talks to directly.",
    observedIn: ["Developer tools", "Developer communities"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["Backend", "API", "Orchestrator"],
    commonConfusion: ["Chat"],
    translations: {
      de: {
        term: "Frontend",
        shortDefinition: "Der Teil eines Systems, den eine Person sieht und bedient.",
        aiContext:
          "Erwähnenswert, weil in einem guten KI-System hier fast nichts Wichtiges geschieht. Suche, Rechteprüfung, Speicherung und die meisten Aktionen liegen dahinter, und das Modell ist eine Komponente unter mehreren statt das, womit die Oberfläche direkt spricht.",
      },
    },
  },
  {
    term: "Backend",
    kind: "ai-architecture-term",
    shortDefinition:
      "The server-side logic behind an interface: where retrieval, permissions, storage and orchestration actually happen.",
    observedIn: ["Developer tools", "Developer communities"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["Frontend", "API", "Orchestrator", "Retriever"],
    commonConfusion: ["LLM"],
    translations: {
      de: {
        term: "Backend",
        shortDefinition:
          "Die serverseitige Logik hinter einer Oberfläche: wo Retrieval, Rechte, Speicherung und Orchestrierung tatsächlich stattfinden.",
      },
    },
  },
  {
    term: "API",
    kind: "ai-architecture-term",
    shortDefinition:
      "A defined interface through which one piece of software calls another.",
    observedIn: ["Developer tools", "Developer communities", "General AI usage"],
    status: "draft",
    stability: "stable",
    aliases: ["Application Programming Interface"],
    related: ["Endpoint", "Connectors", "MCP", "Backend"],
    commonConfusion: ["MCP", "Connectors"],
    translations: {
      de: {
        term: "API",
        shortDefinition:
          "Eine definierte Schnittstelle, über die eine Software eine andere aufruft.",
      },
    },
  },
  {
    term: "Endpoint",
    kind: "ai-architecture-term",
    shortDefinition:
      "One concrete callable address within an API.",
    observedIn: ["Developer tools", "Developer communities"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["API", "Backend"],
    commonConfusion: ["API"],
    translations: {
      de: {
        term: "Endpoint",
        shortDefinition: "Eine konkrete aufrufbare Adresse innerhalb einer API.",
      },
    },
  },
  {
    term: "Tool",
    kind: "ai-architecture-term",
    shortDefinition:
      "An external capability an AI model can call: search something, read a file, send a message, change a record.",
    explanation:
      "The model does not perform the action. It emits a structured request, and something outside it decides whether to carry that out and with whose permissions.",
    aiContext:
      "Which is where the separation that matters lives: reasoning in the model, authority in the runtime. It is also why read tools and write tools belong in different categories — the risk is not in the thinking, it is in what the tool can do.",
    observedIn: ["Developer tools", "Agent products", "General AI usage"],
    status: "draft",
    stability: "stable",
    aliases: ["Function"],
    related: ["Tool Use", "Function Calling", "Agent", "MCP Server"],
    commonConfusion: ["Plugins", "Connectors"],
    translations: {
      de: {
        term: "Werkzeug",
        shortDefinition:
          "Eine externe Fähigkeit, die ein KI-Modell aufrufen kann: etwas suchen, eine Datei lesen, eine Nachricht senden, einen Datensatz ändern.",
        explanation:
          "Das Modell führt die Aktion nicht aus. Es gibt eine strukturierte Anfrage aus, und etwas außerhalb entscheidet, ob und mit wessen Rechten sie ausgeführt wird.",
        aiContext:
          "Genau hier liegt die entscheidende Trennung: das Denken im Modell, die Befugnis in der Laufzeitumgebung. Deshalb gehören lesende und schreibende Werkzeuge in verschiedene Kategorien — das Risiko steckt nicht im Denken, sondern darin, was das Werkzeug kann.",
      },
    },
  },
  {
    term: "Orchestrator",
    kind: "ai-architecture-term",
    shortDefinition:
      "The software that coordinates model, tools, retrieval and workflow — deciding what happens in which order.",
    aiContext:
      "The component most people never picture, and the one holding the controls. Approval gates, retry logic, which model handles which step, what the model is allowed to see: all of that lives here rather than in the model.",
    observedIn: ["Developer tools", "Agent products", "Enterprise AI products"],
    status: "draft",
    stability: "medium",
    aliases: [],
    related: ["Agent", "Workflow", "Tool", "Backend"],
    commonConfusion: ["Agent"],
    translations: {
      de: {
        term: "Orchestrator",
        shortDefinition:
          "Die Software, die Modell, Werkzeuge, Retrieval und Ablauf koordiniert — sie entscheidet, was in welcher Reihenfolge geschieht.",
        aiContext:
          "Die Komponente, die sich kaum jemand vorstellt, und die, die die Steuerung hält. Freigabepunkte, Wiederholungslogik, welches Modell welchen Schritt übernimmt, was das Modell sehen darf: All das liegt hier und nicht im Modell.",
      },
    },
  },
  {
    term: "Workflow",
    kind: "ai-work-term",
    shortDefinition:
      "A predefined sequence of processing steps.",
    explanation:
      "The contrast with an agent is the useful part. A workflow is decided in advance; an agent decides as it goes. Predictable against adaptable, and auditable against flexible.",
    aiContext:
      "Many problems people reach for an agent to solve are workflows, and are better as workflows — cheaper, testable, and they fail in ways you can predict.",
    observedIn: ["Developer tools", "General AI usage", "Enterprise AI products"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["Agentic Workflow", "Orchestrator", "Agent", "Automation"],
    commonConfusion: ["Agentic Workflow", "Automation"],
    translations: {
      de: {
        term: "Workflow",
        shortDefinition: "Eine vorab festgelegte Folge von Verarbeitungsschritten.",
        explanation:
          "Nützlich ist der Kontrast zum Agenten. Ein Workflow ist vorab entschieden, ein Agent entscheidet unterwegs. Vorhersagbar gegen anpassungsfähig, prüfbar gegen flexibel.",
        aiContext:
          "Viele Probleme, für die zum Agenten gegriffen wird, sind Workflows — und als Workflow besser: günstiger, testbar, und sie scheitern auf vorhersehbare Weise.",
      },
    },
  },
  {
    term: "MCP Server",
    kind: "ai-architecture-term",
    shortDefinition:
      "A service that offers tools, data or context to AI clients over the Model Context Protocol.",
    aiContext:
      "The point is that one server can serve several clients. Whether that is worth it depends on how many clients and tools you actually have — a gateway in front of one door is still a gateway.",
    observedIn: ["Developer tools", "Agent products", "Developer communities"],
    status: "draft",
    stability: "medium",
    aliases: [],
    related: ["MCP", "MCP Client", "Tool", "Resource"],
    commonConfusion: ["Connectors", "API"],
    translations: {
      de: {
        term: "MCP-Server",
        shortDefinition:
          "Ein Dienst, der KI-Clients über das Model Context Protocol Werkzeuge, Daten oder Kontext anbietet.",
        aiContext:
          "Der Sinn liegt darin, dass ein Server mehrere Clients bedienen kann. Ob sich das lohnt, hängt davon ab, wie viele Clients und Werkzeuge tatsächlich vorhanden sind — ein Gateway vor einer einzigen Tür bleibt ein Gateway.",
      },
    },
  },
  {
    term: "MCP Client",
    kind: "ai-architecture-term",
    shortDefinition:
      "The application side that connects to MCP servers and makes their capabilities available to a model.",
    observedIn: ["Developer tools", "Agent products"],
    status: "draft",
    stability: "medium",
    aliases: [],
    related: ["MCP", "MCP Server", "Tool"],
    commonConfusion: ["MCP Server"],
    translations: {
      de: {
        term: "MCP-Client",
        shortDefinition:
          "Die Anwendungsseite, die sich mit MCP-Servern verbindet und deren Fähigkeiten einem Modell zur Verfügung stellt.",
      },
    },
  },
  {
    term: "Resource",
    kind: "ai-architecture-term",
    shortDefinition:
      "Context or data content offered to a model over MCP, as opposed to an action it can invoke.",
    aiContext:
      "The resource-and-tool split is the read-and-write split in another form, and it is the one worth preserving: what a system may look at and what it may change are different questions with different consequences.",
    observedIn: ["Developer tools", "Developer communities"],
    status: "draft",
    stability: "medium",
    aliases: [],
    related: ["MCP", "MCP Server", "Tool", "Context"],
    commonConfusion: ["Tool"],
    translations: {
      de: {
        term: "Resource",
        shortDefinition:
          "Kontext- oder Dateninhalt, der einem Modell über MCP angeboten wird — im Unterschied zu einer Aktion, die es auslösen kann.",
        aiContext:
          "Die Trennung von Resource und Werkzeug ist die Trennung von Lesen und Schreiben in anderer Form, und sie lohnt die Mühe: Was ein System ansehen und was es ändern darf, sind verschiedene Fragen mit verschiedenen Folgen.",
      },
    },
  },
  {
    term: "Sync",
    kind: "ai-architecture-term",
    shortDefinition:
      "Keeping a derived copy in step with the source it came from.",
    aiContext:
      "Rarely instant, and the gap is where wrong answers live. Between a document changing and the index knowing, the system answers from the previous version — with a citation that looks entirely correct.",
    observedIn: ["Knowledge systems", "Enterprise AI products"],
    status: "draft",
    stability: "stable",
    aliases: ["Synchronisation"],
    related: ["Freshness", "Index", "Source of Truth", "Ingestion"],
    commonConfusion: ["Backup"],
    translations: {
      de: {
        term: "Synchronisation",
        shortDefinition:
          "Eine abgeleitete Kopie mit ihrer Quelle im Gleichstand halten.",
        aiContext:
          "Selten sofort — und in der Lücke wohnen die falschen Antworten. Zwischen der Änderung eines Dokuments und dem Wissen des Index antwortet das System aus der Vorversion, mit einer völlig korrekt aussehenden Quellenangabe.",
      },
    },
  },
  {
    term: "Cache",
    kind: "ai-architecture-term",
    shortDefinition:
      "Temporary intermediate storage that avoids repeating expensive work.",
    aiContext:
      "It is also another copy of your content, in another place, under its own retention rules. When people ask where their data is, caches are one of the answers they were not expecting.",
    observedIn: ["Developer tools", "Enterprise AI products"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["Index", "Freshness", "Source of Truth"],
    commonConfusion: ["Memory"],
    translations: {
      de: {
        term: "Cache",
        shortDefinition:
          "Temporärer Zwischenspeicher, der teure Arbeit nicht wiederholen lässt.",
        aiContext:
          "Er ist zugleich eine weitere Kopie deiner Inhalte, an einem weiteren Ort, mit eigenen Aufbewahrungsregeln. Fragt jemand, wo seine Daten sind, gehören Caches zu den unerwarteten Antworten.",
      },
    },
  },
  {
    term: "Workspace",
    kind: "ai-work-term",
    shortDefinition:
      "A working environment holding context, files, state and often tools, that persists between sessions.",
    observedIn: ["Agent products", "Developer tools", "General AI usage"],
    status: "draft",
    stability: "medium",
    aliases: [],
    related: ["Project", "Folder Workspace", "Memory", "Context"],
    commonConfusion: ["Project", "Memory"],
    translations: {
      de: {
        term: "Workspace",
        shortDefinition:
          "Eine Arbeitsumgebung mit Kontext, Dateien, Zustand und oft Werkzeugen, die zwischen Sitzungen bestehen bleibt.",
      },
    },
  },
  {
    term: "Folder Workspace",
    kind: "ai-work-term",
    shortDefinition:
      "A workspace whose persistent state is simply files in a directory.",
    explanation:
      "Unfashionable and remarkably durable. The state is readable without the tool that wrote it, diffable, versionable with Git, and portable to whatever comes next.",
    aiContext:
      "Which is the argument against keeping knowledge only as vendor-specific AI memory: knowledge in Markdown and Git carries a different risk from knowledge that exists only inside a product.",
    observedIn: ["Developer tools", "Agent products"],
    status: "draft",
    stability: "medium",
    aliases: [],
    related: ["Workspace", "Memory", "Source of Truth"],
    commonConfusion: ["Memory"],
    translations: {
      de: {
        term: "Ordner-Workspace",
        shortDefinition:
          "Ein Workspace, dessen dauerhafter Zustand schlicht aus Dateien in einem Verzeichnis besteht.",
        explanation:
          "Unmodern und bemerkenswert haltbar. Der Zustand ist ohne das schreibende Werkzeug lesbar, vergleichbar, mit Git versionierbar und auf das Nächste übertragbar.",
        aiContext:
          "Das ist das Argument dagegen, Wissen nur als herstellerspezifisches KI-Gedächtnis zu halten: Wissen in Markdown und Git trägt ein anderes Risiko als Wissen, das nur in einem Produkt existiert.",
      },
    },
  },
  {
    term: "SaaS",
    kind: "ai-architecture-term",
    shortDefinition:
      "Software operated as a service by its vendor, reached over the network.",
    aiContext:
      "Not the same as \"public\". A business SaaS with strong governance can protect data better than a badly configured self-hosted system. Hosting location alone is not data sovereignty.",
    observedIn: ["Enterprise AI products", "General AI usage"],
    status: "draft",
    stability: "stable",
    aliases: ["Software as a Service"],
    related: ["On-prem", "Local AI", "Source of Truth"],
    commonConfusion: ["Public Cloud"],
    translations: {
      de: {
        term: "SaaS",
        shortDefinition:
          "Software, die der Anbieter als Dienst betreibt und die übers Netz erreicht wird.",
        aiContext:
          "Nicht dasselbe wie „öffentlich“. Ein Business-SaaS mit guter Governance kann Daten besser schützen als ein schlecht konfiguriertes selbst betriebenes System. Der Hosting-Standort allein ist keine Datensouveränität.",
      },
    },
  },
  {
    term: "On-prem",
    kind: "ai-architecture-term",
    shortDefinition:
      "Operated on infrastructure you control, rather than as a vendor's service.",
    observedIn: ["Enterprise AI products", "Developer communities"],
    status: "draft",
    stability: "stable",
    aliases: ["On-premises", "Self-hosted"],
    related: ["SaaS", "Local AI", "Model Weights"],
    commonConfusion: ["Local AI"],
    translations: {
      de: {
        term: "On-Premises",
        shortDefinition:
          "Auf selbst kontrollierter Infrastruktur betrieben statt als Dienst eines Anbieters.",
      },
    },
  },
  {
    term: "Local AI",
    kind: "ai-architecture-term",
    shortDefinition:
      "A model that runs and stores directly on the end device, with nothing leaving it.",
    aiContext:
      "The strongest answer to the data-path question, and the one with the clearest cost: smaller models, slower answers, and a machine that has to be capable enough. Which is why real systems route by task — simple classification locally, hard analysis to a larger model.",
    observedIn: ["Developer communities", "General AI usage"],
    status: "draft",
    stability: "medium",
    aliases: ["On-device AI", "Offline AI"],
    related: ["On-prem", "SaaS", "Model Weights", "Inference"],
    commonConfusion: ["On-prem"],
    translations: {
      de: {
        term: "Lokale KI",
        shortDefinition:
          "Ein Modell, das direkt auf dem Endgerät läuft und speichert, ohne dass etwas es verlässt.",
        aiContext:
          "Die stärkste Antwort auf die Frage nach dem Datenweg — mit den klarsten Kosten: kleinere Modelle, langsamere Antworten, ein ausreichend leistungsfähiges Gerät. Deshalb leiten reale Systeme nach Aufgabe: einfache Einordnung lokal, schwierige Analyse an ein größeres Modell.",
      },
    },
  },
  {
    term: "Observability",
    kind: "ai-work-term",
    shortDefinition:
      "Being able to see what a system actually did, through logs, metrics and traces.",
    aiContext:
      "Harder for AI systems than for ordinary software, because the interesting question is not whether it ran but whether the answer was any good — and that is not visible in a success code.",
    observedIn: ["Developer tools", "Enterprise AI products"],
    status: "draft",
    stability: "stable",
    aliases: [],
    related: ["Evaluation", "Provenance", "DLP"],
    commonConfusion: ["Monitoring"],
    translations: {
      de: {
        term: "Observability",
        shortDefinition:
          "Sehen können, was ein System tatsächlich getan hat — über Logs, Metriken und Traces.",
        aiContext:
          "Bei KI-Systemen schwieriger als bei gewöhnlicher Software, weil die interessante Frage nicht ist, ob etwas lief, sondern ob die Antwort taugte — und das steht in keinem Statuscode.",
      },
    },
  },
  {
    term: "Evaluation",
    kind: "ai-work-term",
    shortDefinition:
      "Systematically testing whether an AI system's output is actually good, rather than assuming it.",
    explanation:
      "For a retrieval system the stages have to be measured separately, because they fail separately: did retrieval find the right source, did the reranker keep it, did the model read it correctly, is the answer right, is the citation right.",
    aiContext:
      "The reason to separate them is that a system can answer wrongly while the model performed perfectly — it was simply handed the wrong passages. Measuring only the final answer tells you something is broken, not what.",
    observedIn: ["Developer tools", "Enterprise AI products", "Model documentation"],
    status: "draft",
    stability: "stable",
    aliases: ["Evals"],
    related: ["Retrieval", "Reranker", "Observability", "Hallucination"],
    commonConfusion: ["Benchmark"],
    translations: {
      de: {
        term: "Evaluation",
        shortDefinition:
          "Systematisch prüfen, ob die Ausgabe eines KI-Systems tatsächlich gut ist, statt es anzunehmen.",
        explanation:
          "Bei einem Retrieval-System müssen die Stufen getrennt gemessen werden, weil sie getrennt versagen: Hat das Retrieval die richtige Quelle gefunden, hat der Reranker sie behalten, hat das Modell sie richtig gelesen, stimmt die Antwort, stimmt die Quellenangabe.",
        aiContext:
          "Der Grund für die Trennung: Ein System kann falsch antworten, während das Modell einwandfrei gearbeitet hat — es bekam schlicht die falschen Passagen. Nur die Endantwort zu messen sagt dir, dass etwas kaputt ist, nicht was.",
      },
    },
  },
];
