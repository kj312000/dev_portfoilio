import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { projects } from "../data/projects";
import SectionShapes from "../components/SectionShapes";

export default function Work() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".work-card").forEach((card) => {
        const cover = card.querySelector(".work-cover") as HTMLElement;

        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: card, start: "top 85%", once: true },
        });

        if (cover) {
          gsap.to(cover, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true },
          });
        }
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={root}
      className="relative py-32 sm:py-44 px-6 sm:px-10 border-t border-line bg-bg overflow-hidden"
    >
      <SectionShapes variant="d" />
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-12 gap-8 mb-20">
        <div className="col-span-12 md:col-span-3">
          <div className="font-mono text-eyebrow uppercase text-accent">
            [ 04 ] Selected Work
          </div>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-display font-medium text-display-lg text-ink leading-[0.96] tracking-tightest">
            Things I&apos;ve{" "}
            <span className="font-serif italic font-normal text-ink/70">shipped.</span>
          </h2>
          <p className="mt-6 text-ink-mute max-w-xl text-lg">
            AI-augmented apps first; everything else after.
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-12 gap-6 sm:gap-8">
        {projects.map((p, i) => {
          const big = i === 0;
          return (
            <article
              key={p.slug}
              data-cursor="view"
              className={`work-card group ${
                big ? "col-span-12" : "col-span-12 md:col-span-6"
              }`}
            >
              <a
                href={p.live || "#"}
                target={p.live ? "_blank" : undefined}
                rel="noreferrer"
                className="block"
              >
                <div
                  className={`work-cover relative overflow-hidden rounded-2xl border border-line ${
                    big ? "aspect-[16/8]" : "aspect-[4/3]"
                  }`}
                  style={{
                    background: `radial-gradient(circle at 25% 25%, ${p.accent}33 0%, transparent 55%), linear-gradient(135deg, #FFFFFF 0%, ${p.accent}15 100%)`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className={`font-display font-medium leading-none select-none ${
                        big ? "text-[24vw] md:text-[16vw]" : "text-[28vw] md:text-[14vw]"
                      }`}
                      style={{ color: p.accent, opacity: 0.85 }}
                    >
                      {p.index}
                    </span>
                  </div>

                  <div className="absolute top-5 left-5 flex flex-col gap-2">
                    <span
                      className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full text-white"
                      style={{ background: p.accent }}
                    >
                      {p.role}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-ink text-bg">
                      {p.year}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                    {p.stack.slice(0, big ? 7 : 4).map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-sm border border-ink/10 text-ink"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 sm:mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className={`font-display font-medium text-ink tracking-tightest leading-[1] ${
                        big ? "text-display-md" : "text-3xl sm:text-4xl"
                      }`}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-2 text-ink-mute text-base sm:text-lg max-w-xl">
                      {p.tagline}
                    </p>
                  </div>
                  <span className="shrink-0 mt-2 font-mono text-xs uppercase tracking-widest text-ink-mute group-hover:text-accent transition">
                    {p.live ? "Live ↗" : "Case ↗"}
                  </span>
                </div>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
