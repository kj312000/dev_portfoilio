export type Project = {
  index: string;
  title: string;
  tagline: string;
  role: string;
  year: string;
  stack: string[];
  bullets: string[];
  live?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "AI Knowledge Assistant",
    tagline: "RAG + LangGraph agent with MCP tools and cited sources",
    role: "Full Stack · AI Engineer",
    year: "2026",
    stack: ["Next.js", "TypeScript", "LangChain", "LangGraph", "Pinecone", "OpenAI", "MCP"],
    bullets: [
      "Retrieval-Augmented Generation over a private corpus with inline citations on every answer.",
      "LangGraph state machine choreographs plan → retrieve → draft → self-check before replying.",
      "MCP server exposes search, ticket lookup, and calendar as standardized tools.",
      "Token-streamed UI via React Server Components and Server-Sent Events.",
    ],
  },
  {
    index: "02",
    title: "Supply Chain Analytics",
    tagline: "Real-time logistics, shipment, and warehouse dashboards",
    role: "Full Stack Lead",
    year: "2024",
    stack: ["Angular", "NestJS", "Node.js", "MySQL", "MongoDB"],
    bullets: [
      "Enterprise analytics dashboards with sub-second KPI refresh.",
      "Unified multiple upstream APIs into a single reporting surface.",
      "Reusable chart primitives shared across reporting modules.",
    ],
  },
  {
    index: "03",
    title: "Agritech Platform",
    tagline: "Multi-role MERN SaaS for farm ops, crops, and logistics",
    role: "Full Stack Developer",
    year: "2022",
    stack: ["React", "Node.js", "MongoDB", "Azure"],
    bullets: [
      "Multi-tenant role-based access for ops, growers, and back-office.",
      "Shipped to Azure with CI/CD and zero-downtime rollouts.",
      "Analytics for crop and logistics KPIs.",
    ],
    live: "https://suspicious-williams-b18ad3.netlify.app/",
  },
  {
    index: "04",
    title: "NFT Gallery on Solana",
    tagline: "Wallet-auth showcase with real-time metadata rendering",
    role: "Web3 Developer",
    year: "2023",
    stack: ["React", "Solana Web3.js", "Node.js"],
    bullets: [
      "Phantom wallet authentication and Solana RPC integration.",
      "Dynamic NFT rendering with metadata caching.",
      "Modular components engineered for marketplace expansion.",
    ],
    live: "https://nft-gallery-56j3.onrender.com/",
  },
  {
    index: "05",
    title: "Solana Fun",
    tagline: "Interactive Solana dApp — TipJar, leaderboard, wallets",
    role: "Web3 Developer",
    year: "2023",
    stack: ["React", "Solana Web3.js", "Anchor"],
    bullets: [
      "On-chain TipJar program with leaderboard view.",
      "Wallet integration and transaction confirmations.",
    ],
    live: "https://solanafun.netlify.app/",
  },
  {
    index: "06",
    title: "Aesthetic Bakester",
    tagline: "Responsive cake shop site with interactive menu",
    role: "Front-End Developer",
    year: "2022",
    stack: ["React", "Tailwind", "Firebase"],
    bullets: [
      "Brand-led UI with CSS3 animations and embedded social widgets.",
      "Online ordering form wired to Firebase.",
    ],
    live: "https://aesthetic-bakesters.netlify.app",
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Software Developer",
    company: "Tech Mahindra",
    location: "Mumbai, IN",
    period: "Nov 2022 — Present",
    current: true,
    bullets: [
      "Designed and shipped enterprise web platforms on a MEAN stack, owning architecture across frontend, API, and data layers.",
      "Operated production workloads on Azure Kubernetes Service — containerization, rolling deploys, autoscaling, incident response.",
      "Prototyped LLM-assisted internal tools (document Q&A, knowledge search) using OpenAI APIs, LangChain, and RAG over internal docs.",
      "Built cross-platform Flutter apps on Node.js backends; integrated Power BI for executive analytics.",
    ],
    stack: ["Angular", "Node.js", "NestJS", "MongoDB", "Azure", "AKS", "LangChain"],
  },
  {
    role: "Client Engineer",
    company: "PPLwork",
    location: "Remote",
    period: "Feb 2022 — Sep 2022",
    bullets: [
      "Built high-performance MERN applications for client-facing products with reliable APIs and responsive UX.",
      "Led code reviews and drove improvements around module structure, error handling, and testability.",
      "Increased team velocity via pair programming and shared component libraries.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    role: "Full Stack Developer",
    company: "Wingrow Agritech",
    location: "Pune, IN",
    period: "Oct 2021 — Feb 2022",
    bullets: [
      "Developed an agricultural SaaS platform on React + Node.js supporting multi-role user management.",
      "Deployed infrastructure on Microsoft Azure with automated CI/CD.",
      "Built analytics dashboards for crop and logistics KPIs.",
    ],
    stack: ["React", "Node.js", "MongoDB", "Azure"],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { label: "Frontend", items: ["React", "Next.js", "Angular", "TypeScript", "RxJS", "Redux", "Tailwind", "Three.js / R3F", "GSAP"] },
  { label: "Backend", items: ["Node.js", "Express", "NestJS", "REST", "GraphQL", "WebSockets", "Microservices", "OAuth2 / JWT"] },
  { label: "AI / LLM", items: ["OpenAI", "Claude API", "LangChain", "LangGraph", "RAG", "Vector DBs", "Embeddings", "MCP Servers", "Tool Calling"] },
  { label: "Cloud / DevOps", items: ["Microsoft Azure", "AKS", "Kubernetes", "Docker", "GitHub Actions", "Azure DevOps", "Nginx"] },
  { label: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Pinecone", "Chroma"] },
];

export const principles = [
  {
    title: "Production mindset",
    body: "I ship code that lives in real systems — observable, testable, and boring in the best way.",
  },
  {
    title: "Full-stack instinct",
    body: "Comfortable across React, Angular, Node, NestJS, MongoDB, and Azure. I'd rather understand the whole pipe than babysit one layer.",
  },
  {
    title: "AI as a tool, not a buzzword",
    body: "I wire LLMs into apps where they actually move outcomes — RAG over real docs, LangGraph agents that finish a job, MCP servers that expose internal tools cleanly.",
  },
  {
    title: "Bias for craft",
    body: "Type that breathes, motion that feels inevitable, APIs that read like sentences. Details are the work.",
  },
];

export const meta = {
  name: "Kaustubh Jadhav",
  email: "kaustubhjadhav36@gmail.com",
  phone: "+91 8850 295 744",
  phoneHref: "tel:+918850295744",
  location: "Pune, India",
  timezone: "GMT+5:30",
  github: "https://github.com/kj312000",
  linkedin: "https://www.linkedin.com/in/kaustubh-jadhav-07a430175/",
  resume: "/resume.pdf",
  years: "4.5+",
};

export const ticker = [
  "TypeScript", "React", "Next.js", "Angular", "Node.js", "NestJS", "LangChain",
  "LangGraph", "MCP", "RAG", "Azure", "Kubernetes", "Docker", "MongoDB",
  "PostgreSQL", "Redis", "GSAP", "Tailwind",
];
