export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Software Developer",
    company: "Tech Mahindra",
    location: "Mumbai, IN",
    period: "Nov 2022 — Present",
    bullets: [
      "Designed and shipped enterprise-grade web platforms on a MEAN stack, owning architecture across frontend, API, and data layers.",
      "Operated production workloads on Azure Kubernetes Service (AKS) — containerization, rolling deploys, autoscaling, incident response.",
      "Prototyped LLM-assisted internal tools (document Q&A, knowledge search) using OpenAI APIs, LangChain, and a RAG pipeline over internal docs.",
      "Built and released cross-platform Flutter apps integrated with existing Node.js backends; integrated Power BI for executive analytics.",
    ],
    stack: ["Angular", "Node.js", "NestJS", "MongoDB", "MySQL", "Azure", "AKS", "Flutter", "LangChain"],
  },
  {
    role: "Client Engineer",
    company: "PPLwork",
    location: "Remote",
    period: "Feb 2022 — Sep 2022",
    bullets: [
      "Built high-performance MERN stack applications for client-facing products with reliable APIs and responsive UX.",
      "Led code reviews and drove engineering improvements around module structure, error handling, and testability.",
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
