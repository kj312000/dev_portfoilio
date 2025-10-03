import { useState } from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    id: 1,
    role: "Senior Software Developer",
    company: "Tech Mahindra — Mumbai, IN",
    period: "Nov 2022 — Present",
    bullets: [
      "Led the development of a complex web application using the MEAN stack, improving user engagement by 30%.",
      "Deployed and managed applications on Azure, utilizing Kubernetes for container orchestration and ensuring high availability.",
      "Collaborated with front-end and back-end teams to integrate RESTful APIs and third-party services.",
      "Optimized containerized applications with Kubernetes, enhancing scalability and performance."
    ],
    tag: "Full-time",
    color: "bg-indigo-600",
  },
  {
    id: 2,
    role: "Client Engineer",
    company: "PPLwork — Remote",
    period: "Feb 2022 — Sep 2022",
    bullets: [
      "Developed and maintained client-specific applications using the MERN stack, resulting in a 25% increase in customer satisfaction.",
      "Conducted code reviews and provided technical guidance to junior developers.",
      "Worked closely with clients to gather requirements and deliver customized solutions on time."
    ],
    tag: "Full-time",
    color: "bg-rose-500",
  },
  {
    id: 3,
    role: "Full Stack Developer",
    company: "Wingrow Agritech — Pune, IN",
    period: "Oct 2021 — Feb 2022",
    bullets: [
      "Designed and developed an end-to-end agricultural management system using the MERN stack, streamlining farm operations.",
      "Deployed applications on Azure, ensuring secure and scalable cloud infrastructure.",
      "Implemented best practices for code quality and performance optimization.",
      "Collaborated with the product team to identify and prioritize features based on user feedback."
    ],
    tag: "Internship",
    color: "bg-emerald-600",
  },
];


export default function WorkExperience() {
  const [tab, setTab] = useState("professional");

  const tabs = [
    { id: "professional", label: "Professional" },
    { id: "internships", label: "Internships" },
    { id: "all", label: "All" },
  ];

  const filtered =
    tab === "all"
      ? experienceData
      : experienceData.filter((e) => {
          if (tab === "professional") return e.tag !== "Internship";
          if (tab === "internships") return e.tag === "Internship";
          return true;
        });

  return (
<div className="min-h-screen pt-24 pb-24 sm:pt-28 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-gray-900 via-indigo-950 to-black text-white">
  <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-3xl sm:text-4xl font-semibold mb-2"
        >
          Professional Work Experience
        </motion.h1>
        <p className="text-sm text-gray-300 mb-6">
          Timeline of roles, responsibilities and notable achievements. Click a card for details.
        </p>

        {/* Tabs */}
        <div className="flex items-center gap-3 mb-8">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium focus:outline-none transition-shadow duration-150 
                ${tab === t.id ? "bg-white text-gray-900 shadow-lg" : "bg-white/6 hover:bg-white/10 text-gray-200"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* center line for md+ screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
            {filtered.map((exp, idx) => (
              <TimelineCard key={exp.id} exp={exp} side={idx % 2 === 0 ? "left" : "right"} />
            ))}
          </div>

          {/* Mobile vertical list overlay (keeps spacing neat) */}
          <div className="md:hidden mt-6" />
        </div>
      </div>
    </div>
  );
}

function TimelineCard({ exp, side }:any) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className={`relative md:my-6 ${side === "left" ? "md:mr-auto md:pl-8" : "md:ml-auto md:pr-8"}`}
    >
      {/* Dot and connector for md */}
      <div className={`hidden md:flex items-center ${side === "left" ? "justify-end pr-6" : "justify-start pl-6"}`}>
        <div className="flex items-center space-x-3">
          {side === "left" && (
            <div className="text-right mr-3 text-sm text-gray-300 hidden md:block">{exp.period}</div>
          )}
          <div className="w-4 h-4 rounded-full bg-white/90 ring-4 ring-white/10" />
          {side === "right" && (
            <div className="text-left ml-3 text-sm text-gray-300 hidden md:block">{exp.period}</div>
          )}
        </div>
      </div>

      <div
        onClick={() => setOpen((s) => !s)}
        className={`cursor-pointer group block rounded-2xl p-5 shadow-2xl backdrop-blur-sm border border-white/6 hover:scale-[1.01] transform transition-all duration-200"
          }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className={`${exp.color} inline-flex items-center justify-center rounded-md px-2 py-1 text-xs font-semibold`}>{exp.tag}</span>
              <h3 className="text-lg font-semibold">{exp.role}</h3>
            </div>
            <p className="text-sm text-gray-300 mt-1">{exp.company}</p>
          </div>
          <div className="text-sm text-gray-400 hidden sm:block">{exp.period}</div>
        </div>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: open ? "auto" : 0 }}
          transition={{ duration: 0.28 }}
          className="overflow-hidden mt-4"
        >
          <ul className="list-disc pl-5 space-y-2 text-gray-200 text-sm">
            {exp.bullets.map((b:any, i:any) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}