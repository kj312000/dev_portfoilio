import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionShapes from "../components/SectionShapes";

const values = [
  {
    title: "Production mindset.",
    body: "I ship code that lives in real systems — observable, testable, and boring in the best way.",
  },
  {
    title: "Full-stack instinct.",
    body: "Comfortable across React, Angular, Node, NestJS, MongoDB, and Azure. I'd rather understand the whole pipe than babysit one layer.",
  },
  {
    title: "AI as a tool, not a buzzword.",
    body: "I wire LLMs into apps where they actually move outcomes — RAG over real docs, LangGraph agents that finish a job, MCP servers that expose internal tools cleanly.",
  },
  {
    title: "Bias for craft.",
    body: "Type that breathes, motion that feels inevitable, APIs that read like sentences. Details are the work.",
  },
];

export default function About() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".value-row").forEach((row) => {
        gsap.from(row, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: { trigger: row, start: "top 85%", once: true },
        });
      });

      const headline = root.current?.querySelector(".about-headline");
      if (headline) {
        gsap.from(headline, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: headline, start: "top 80%", once: true },
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={root}
      className="relative py-32 sm:py-44 px-6 sm:px-10 border-t border-line bg-bg overflow-hidden"
    >
      <SectionShapes variant="a" />
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-3">
          <div className="font-mono text-eyebrow uppercase text-accent">
            [ 01 ] Why hire me
          </div>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="about-headline font-display font-medium text-display-lg text-ink leading-[0.96] tracking-tightest mb-20">
            I&apos;m not here to ship features.{" "}
            <span className="font-serif italic font-normal text-ink/70">
              I&apos;m here to ship outcomes.
            </span>
          </h2>

          <div className="space-y-10">
            {values.map((v, i) => (
              <div
                key={i}
                className="value-row grid grid-cols-12 gap-4 border-t border-line pt-8"
              >
                <div className="col-span-12 sm:col-span-1 font-mono text-xs text-accent">
                  ✓ 0{i + 1}
                </div>
                <div className="col-span-12 sm:col-span-4 font-display text-2xl sm:text-3xl font-medium text-ink tracking-tightest">
                  {v.title}
                </div>
                <div className="col-span-12 sm:col-span-7 text-ink-mute text-lg leading-relaxed">
                  {v.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
