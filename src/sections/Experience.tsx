import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { experience } from "../data/experience";
import SectionShapes from "../components/SectionShapes";

export default function Experience() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".exp-row").forEach((row) => {
        gsap.from(row, {
          opacity: 0,
          y: 50,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: { trigger: row, start: "top 85%", once: true },
        });
      });

      const line = root.current?.querySelector(".exp-line") as HTMLElement;
      if (line) {
        gsap.from(line, {
          scaleY: 0,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={root}
      className="relative py-32 sm:py-44 px-6 sm:px-10 border-t border-line bg-bg overflow-hidden"
    >
      <SectionShapes variant="c" />
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-12 gap-8 mb-20">
        <div className="col-span-12 md:col-span-3">
          <div className="font-mono text-eyebrow uppercase text-accent">
            [ 03 ] Experience
          </div>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-display font-medium text-display-lg text-ink leading-[0.96] tracking-tightest">
            Where I&apos;ve{" "}
            <span className="font-serif italic font-normal text-ink/70">built things.</span>
          </h2>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="exp-line absolute left-[1.05rem] sm:left-[1.4rem] top-0 bottom-0 w-px bg-ink/15" />
        <div className="space-y-14 sm:space-y-20">
          {experience.map((e, i) => (
            <div key={i} className="exp-row grid grid-cols-12 gap-6 sm:gap-8 relative">
              <div className="col-span-12 sm:col-span-3 pl-10 sm:pl-0">
                <div className="absolute left-[0.7rem] sm:left-[1.05rem] top-2 w-4 h-4 rounded-full bg-accent ring-4 ring-bg" />
                <div className="font-mono text-xs uppercase tracking-widest text-ink pl-0 sm:pl-12">
                  {e.period}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute pl-0 sm:pl-12 mt-1">
                  {e.location}
                </div>
              </div>
              <div className="col-span-12 sm:col-span-9 pl-10 sm:pl-0">
                <h3 className="font-display text-3xl sm:text-5xl font-medium text-ink leading-none tracking-tightest">
                  {e.role}
                </h3>
                <div className="mt-2 text-ink-mute text-base sm:text-lg">
                  <span className="text-accent">↳</span> {e.company}
                </div>
                <ul className="mt-6 space-y-3 text-ink-mute text-base max-w-2xl leading-relaxed">
                  {e.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3">
                      <span className="font-mono text-xs text-ink-dim mt-1.5 shrink-0">
                        0{bi + 1}
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {e.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] uppercase tracking-widest text-ink-mute border border-ink/15 bg-bg-elev px-2.5 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
