import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { magnetic } from "../lib/motion";
import { chaseOrb } from "../lib/fx";
import { ArrowDownRight, ArrowUpRight } from "../components/Icons";
import { meta, ticker } from "../data/content";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanup = ctaRef.current ? magnetic(ctaRef.current, 0.16, 90) : () => {};
    const cleanOrb =
      orbRef.current && root.current ? chaseOrb(orbRef.current, root.current) : () => {};
    const ctx = gsap.context(() => {
      gsap.from("[data-stagger]", {
        opacity: 0,
        y: 28,
        duration: 1,
        ease: "expo.out",
        stagger: 0.09,
        delay: 0.15,
      });

      // Gentle depart: hero settles back and dims as you scroll past
      gsap.to(innerRef.current, {
        y: -56,
        opacity: 0.3,
        scale: 0.985,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom 30%",
          scrub: 0.6,
        },
      });
    }, root);

    return () => {
      cleanup();
      cleanOrb();
      ctx.revert();
    };
  }, []);

  return (
    <section id="top" ref={root} className="relative pt-36 md:pt-44 pb-16 md:pb-20 overflow-hidden">
      {/* Aurora field + cursor-chasing glow */}
      <div className="aurora" aria-hidden="true">
        <i className="a1" />
        <i className="a2" />
        <i className="a3" />
      </div>
      <div ref={orbRef} className="chase-orb" aria-hidden="true" />

      <div ref={innerRef} className="relative max-w-site mx-auto px-4 sm:px-6">
        <div
          data-stagger
          className="inline-flex items-center gap-2.5 rounded-full border border-stroke bg-white/[0.03] px-4 py-2 mb-8"
        >
          <span className="dot" aria-hidden="true" />
          <span className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-text-soft">
            Open to opportunities — {meta.location}
          </span>
        </div>

        <h1 data-stagger className="font-display font-bold text-hero max-w-4xl">
          Full-stack engineer building{" "}
          <span className="grad-text shimmer">AI products</span> that hold up in
          production.
        </h1>

        <p data-stagger className="mt-7 max-w-xl text-lg md:text-xl text-text-soft leading-relaxed">
          {meta.years} years shipping for enterprise — React, Node, and Azure at
          scale. Now wiring LLMs, RAG agents, and MCP tooling into products
          people actually trust.
        </p>

        <div data-stagger className="mt-9 flex flex-wrap items-center gap-4">
          <a ref={ctaRef} href="#work" className="inline-flex btn btn-grad">
            See the work <ArrowDownRight className="arr" />
          </a>
          <a href={meta.resume} target="_blank" rel="noreferrer" className="inline-flex btn btn-ghost">
            Resume <ArrowUpRight className="arr" />
          </a>
        </div>

        <div data-stagger className="mt-14 flex flex-wrap gap-2 max-w-3xl">
          {ticker.slice(0, 12).map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
