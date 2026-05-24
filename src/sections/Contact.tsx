import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SectionShapes from "../components/SectionShapes";

const EMAIL = "kaustubhjadhav36@gmail.com";

export default function Contact() {
  const root = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y: 60,
        duration: 1.1,
        ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section
      id="contact"
      ref={root}
      className="relative py-32 sm:py-44 px-6 sm:px-10 border-t border-line bg-bg overflow-hidden"
    >
      <SectionShapes variant="a" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="font-mono text-eyebrow uppercase text-accent mb-12">
          [ 05 ] Contact
        </div>

        <h2
          ref={headlineRef}
          className="font-display font-medium text-display-xl leading-[0.92] tracking-tightest text-ink"
        >
          Let&apos;s build{" "}
          <span className="font-serif italic font-normal text-ink/65">
            something good.
          </span>
        </h2>

        <div className="mt-16 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <button
              onClick={copyEmail}
              data-cursor={copied ? "copied" : "copy"}
              className="group inline-flex items-center gap-4 font-display text-2xl sm:text-4xl text-ink hover:text-accent transition-colors tracking-tightest"
            >
              <span className="border-b border-ink/30 group-hover:border-accent pb-1">
                {EMAIL}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-ink-mute group-hover:text-accent">
                {copied ? "✓ Copied" : "↳ Copy"}
              </span>
            </button>

            <div className="mt-12 flex flex-wrap gap-3">
              <a href="https://github.com/kj312000" target="_blank" rel="noreferrer" data-cursor="open" className="btn-pill">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/kaustubh-jadhav-07a430175/" target="_blank" rel="noreferrer" data-cursor="open" className="btn-pill">
                LinkedIn ↗
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" data-cursor="open" className="btn-pill solid">
                Résumé ↗
              </a>
              <a href="tel:+918850295744" data-cursor="call" className="btn-pill">
                +91 8850 295 744
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 md:pt-2">
            <div className="font-mono text-xs uppercase tracking-widest text-ink-mute space-y-3">
              <div className="flex justify-between border-b border-line pb-2">
                <span>Status</span>
                <span className="text-accent">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 animate-pulse" />
                  Open to opportunities
                </span>
              </div>
              <div className="flex justify-between border-b border-line pb-2">
                <span>Based</span>
                <span className="text-ink">Pune, India · GMT+5:30</span>
              </div>
              <div className="flex justify-between border-b border-line pb-2">
                <span>Focus</span>
                <span className="text-ink">Full Stack · AI Engineering</span>
              </div>
              <div className="flex justify-between border-b border-line pb-2">
                <span>Response</span>
                <span className="text-ink">~ 24h</span>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-32 pt-8 border-t border-line flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-ink-dim">
          <span>© {new Date().getFullYear()} Kaustubh Jadhav. Built with React + GSAP + Lenis.</span>
          <a href="#hero" data-cursor="up" className="hover:text-accent transition">
            ↑ Back to top
          </a>
        </footer>
      </div>
    </section>
  );
}
