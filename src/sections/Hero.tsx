import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import FloatingShapes from "../components/FloatingShapes";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const line1 = useRef<HTMLSpanElement>(null);
  const line2 = useRef<HTMLSpanElement>(null);
  const tagline = useRef<HTMLParagraphElement>(null);
  const meta = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!line1.current || !line2.current) return;

    const splitToChars = (el: HTMLElement) => {
      const text = el.textContent || "";
      el.innerHTML = "";
      const words = text.split(" ");
      words.forEach((word, wi) => {
        const wrap = document.createElement("span");
        wrap.style.display = "inline-block";
        wrap.style.overflow = "hidden";
        wrap.style.verticalAlign = "top";
        word.split("").forEach((c) => {
          const ch = document.createElement("span");
          ch.className = "char";
          ch.textContent = c;
          ch.style.display = "inline-block";
          ch.style.transform = "translateY(110%)";
          wrap.appendChild(ch);
        });
        el.appendChild(wrap);
        if (wi < words.length - 1) el.appendChild(document.createTextNode(" "));
      });
      return Array.from(el.querySelectorAll(".char")) as HTMLElement[];
    };

    const chars1 = splitToChars(line1.current);
    const chars2 = splitToChars(line2.current);

    const tl = gsap.timeline({ delay: 0.15 });
    tl.to(chars1, { y: 0, duration: 0.9, ease: "expo.out", stagger: 0.02 })
      .to(chars2, { y: 0, duration: 0.9, ease: "expo.out", stagger: 0.02 }, "-=0.75")
      .from(tagline.current, { opacity: 0, y: 24, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .from(meta.current, { opacity: 0, y: 12, duration: 0.6, ease: "power3.out" }, "-=0.4");
  }, []);

  return (
    <section
      id="hero"
      ref={root}
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center px-6 sm:px-10 pt-32 pb-24"
    >
      <FloatingShapes />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="font-mono text-eyebrow uppercase text-ink-mute mb-8">
          <span className="text-accent">●</span> Available for opportunities · Pune, IN
        </div>

        <h1 className="font-display font-medium text-display-xl text-ink tracking-tightest">
          <span ref={line1} className="block">Kaustubh Jadhav,</span>
          <span ref={line2} className="block">
            <span className="font-serif italic font-normal text-ink/90">a full stack</span>
            <span> &amp; AI engineer.</span>
          </span>
        </h1>

        <p
          ref={tagline}
          className="mt-10 sm:mt-14 max-w-2xl text-xl sm:text-2xl text-ink-mute leading-snug"
        >
          4.5+ years shipping production web apps. Now bringing LLMs, RAG agents,
          and MCP tooling into the full-stack — built with{" "}
          <span className="text-ink">React, Node, LangChain &amp; LangGraph</span>.
        </p>

        <div ref={meta} className="mt-12 flex flex-wrap items-center gap-3">
          <a href="#work" className="btn-pill solid" data-cursor="see">See selected work →</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-pill" data-cursor="open">
            Download résumé ↓
          </a>
          <a href="#contact" className="btn-pill" data-cursor="email">
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute z-10 flex flex-col items-center gap-2">
        <span>Scroll</span>
        <span className="w-px h-8 bg-ink-mute" />
      </div>
    </section>
  );
}
