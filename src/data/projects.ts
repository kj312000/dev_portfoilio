export type Project = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  role: string;
  year: string;
  stack: string[];
  bullets: string[];
  live?: string;
  github?: string;
  accent?: string;
};

export const projects: Project[] = [
  {
    slug: "ai-knowledge-assistant",
    index: "01",
    title: "AI Knowledge Assistant",
    tagline: "RAG + LangGraph agent with MCP tools and cited sources",
    role: "Full Stack · AI Engineer",
    year: "2026",
    stack: ["Next.js", "TypeScript", "LangChain", "LangGraph", "Pinecone", "OpenAI", "MCP"],
    bullets: [
      "Retrieval-Augmented Generation over private corpus with inline citations.",
      "LangGraph state machine choreographs plan → retrieve → draft → self-check.",
      "MCP server exposes search, ticket lookup, and calendar as standardized tools.",
      "Token-streamed UI via React Server Components and Server-Sent Events.",
    ],
    accent: "#C8FF00",
  },
  {
    slug: "supply-chain-analytics",
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
    accent: "#7BD1FF",
  },
  {
    slug: "agritech-platform",
    index: "03",
    title: "Agritech Management Platform",
    tagline: "Multi-role MERN SaaS for farm ops, crops, and logistics",
    role: "Full Stack Developer",
    year: "2022",
    stack: ["React", "Node.js", "MongoDB", "Azure"],
    bullets: [
      "Multi-tenant role-based access for ops, growers, and back-office.",
      "Shipped to Azure with CI/CD and zero-downtime rollouts.",
      "Built analytics for crop and logistics KPIs.",
    ],
    live: "https://suspicious-williams-b18ad3.netlify.app/",
    accent: "#A6FFB1",
  },
  {
    slug: "nft-gallery-solana",
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
    accent: "#E5B4FF",
  },
  {
    slug: "solana-fun",
    index: "05",
    title: "Solana Fun",
    tagline: "Interactive Solana dApp — TipJar, Leaderboard, wallets",
    role: "Web3 Developer",
    year: "2023",
    stack: ["React", "Solana Web3.js", "Anchor"],
    bullets: [
      "On-chain TipJar program with leaderboard view.",
      "Wallet integration and transaction confirmations.",
    ],
    live: "https://solanafun.netlify.app/",
    accent: "#FFD27A",
  },
  {
    slug: "aesthetic-bakester",
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
    accent: "#FF9AC1",
  },
];
