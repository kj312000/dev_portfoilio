export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "Angular", "TypeScript", "RxJS", "Redux", "Tailwind", "Three.js / R3F", "GSAP"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "NestJS", "REST", "GraphQL", "WebSockets", "Microservices", "OAuth2 / JWT"],
  },
  {
    label: "AI / LLM",
    items: ["OpenAI", "Claude API", "LangChain", "LangGraph", "RAG", "Vector DBs", "Embeddings", "MCP Servers", "Tool Calling"],
  },
  {
    label: "Cloud / DevOps",
    items: ["Microsoft Azure", "AKS", "Kubernetes", "Docker", "GitHub Actions", "Azure DevOps", "Nginx"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Pinecone", "Chroma"],
  },
];

export const marqueeSkills = [
  "TypeScript", "React", "Next.js", "Angular", "Node.js", "NestJS", "LangChain",
  "LangGraph", "MCP", "OpenAI", "RAG", "Vector DBs", "Azure", "Kubernetes",
  "Docker", "MongoDB", "PostgreSQL", "Redis", "Three.js", "GSAP", "Tailwind",
];
