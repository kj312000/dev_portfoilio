import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { spotlight, tilt } from "../lib/fx";
import { ArrowDown, ArrowUpRight } from "../components/Icons";
import { projects, experience, skillGroups, principles, meta } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

const toolCount = skillGroups.reduce((n, g) => n + g.items.length, 0);

const stats: [string, string][] = [
  [meta.years, "Years in production"],
  ["3", "Companies"],
  ["6", "Featured builds"],
  [`${toolCount}+`, "Tools in rotation"],
];

function Label({ children, id }: { children: string; id?: string }) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;
    const t = gsap.from(lineRef.current, {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.3,
      ease: "expo.out",
      scrollTrigger: { trigger: lineRef.current, start: "top 92%", once: true },
    });
    return () => {
      t.scrollTrigger?.kill();
      t.kill();
    };
  }, []);

  return (
    <div id={id} className="flex items-center gap-4 mb-7 mt-20 md:mt-28 scroll-mt-28">
      <span className="font-mono text-label uppercase grad-text font-medium">{children}</span>
      <div ref={lineRef} className="grad-line flex-1" />
    </div>
  );
}

function StatNum({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const num = parseFloat(value);
    if (Number.isNaN(num)) return;
    const suffix = value.replace(String(num), "");
    const decimals = num % 1 !== 0 ? 1 : 0;
    const obj = { v: 0 };

    const t = gsap.to(obj, {
      v: num,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 92%", once: true },
      onUpdate: () => {
        el.textContent = obj.v.toFixed(decimals) + suffix;
      },
    });
    return () => {
      t.scrollTrigger?.kill();
      t.kill();
    };
  }, [value]);

  return <span ref={ref}>{value}</span>;
}

export default function Bento() {
  const root = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const cleanSpot = root.current ? spotlight(root.current) : () => {};
    const cleanTilt = featuredRef.current ? tilt(featuredRef.current, 4) : () => {};

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el, i) => {
        // Entrance
        gsap.from(el, {
          opacity: 0,
          y: 44,
          scale: 0.97,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
        // Continuous weave: alternate cards drift at different rates while passing
        gsap.fromTo(
          el,
          { yPercent: i % 2 === 0 ? 3.5 : -2.5 },
          {
            yPercent: i % 2 === 0 ? -3.5 : 2.5,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });

      // Velocity skew: grid leans with fast scrolls, springs back at rest
      const skewTo = gsap.quickTo(root.current, "skewY", {
        duration: 0.5,
        ease: "power3",
      });
      const st = ScrollTrigger.create({
        onUpdate: (self) => {
          const v = gsap.utils.clamp(-1.4, 1.4, self.getVelocity() / -900);
          skewTo(v);
        },
      });
      const resetSkew = () => skewTo(0);
      ScrollTrigger.addEventListener("scrollEnd", resetSkew);
      return () => {
        st.kill();
        ScrollTrigger.removeEventListener("scrollEnd", resetSkew);
      };
    }, root);
    return () => {
      cleanSpot();
      cleanTilt();
      ctx.revert();
    };
  }, []);

  return (
    <div ref={root} className="spot max-w-site mx-auto px-4 sm:px-6 pb-24">
      {/* ----- STATS ----- */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(([num, label]) => (
          <div key={label} data-reveal className="glass lift p-6">
            <div className="font-display font-bold text-4xl md:text-[2.6rem] grad-text">
              <StatNum value={num} />
            </div>
            <div className="mt-2 text-sm text-text-soft">{label}</div>
          </div>
        ))}
      </div>

      {/* ----- WORK ----- */}
      <Label id="work">01 — Selected Work</Label>
      <div className="grid grid-cols-12 gap-4">
        {/* Featured */}
        <a
          ref={featuredRef}
          href={projects[0].live ?? `mailto:${meta.email}`}
          {...(projects[0].live ? { target: "_blank", rel: "noreferrer" } : {})}
          data-reveal
          className="glass lift tilt-glare col-span-12 lg:col-span-7 p-7 md:p-9 flex flex-col"
        >
          <span className="glare" aria-hidden="true" />
          <div className="flex items-center justify-between mb-5">
            <span className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-cyan">
              Featured — {projects[0].year}
            </span>
            <span className="font-mono text-xs text-text-faint">{projects[0].index}</span>
          </div>
          <h3 className="font-display font-bold text-3xl md:text-4xl mb-3">
            {projects[0].title}
          </h3>
          <p className="text-text-soft text-lg mb-6">{projects[0].tagline}</p>
          <ul className="space-y-2.5 mb-8">
            {projects[0].bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-[0.95rem] text-text-soft leading-relaxed">
                <span className="grad-text font-mono text-xs mt-1 shrink-0">0{i + 1}</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-5 border-t border-stroke flex flex-wrap gap-2">
            {projects[0].stack.map((s) => (
              <span key={s} className="chip !text-xs !py-1.5">{s}</span>
            ))}
          </div>
        </a>

        {/* Side stack */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
          {projects.slice(1, 3).map((p) => (
            <a
              key={p.index}
              href={p.live ?? `mailto:${meta.email}`}
              {...(p.live ? { target: "_blank", rel: "noreferrer" } : {})}
              data-reveal
              className="glass lift p-7 flex flex-col flex-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-text-faint">
                  {p.role} — {p.year}
                </span>
                <span className="font-mono text-xs text-text-faint">{p.index}</span>
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">{p.title}</h3>
              <p className="text-text-soft mb-5">{p.tagline}</p>
              <div className="mt-auto text-xs text-text-faint">{p.stack.join(" · ")}</div>
            </a>
          ))}
        </div>

        {/* Remaining three */}
        {projects.slice(3).map((p) => (
          <a
            key={p.index}
            href={p.live ?? `mailto:${meta.email}`}
            {...(p.live ? { target: "_blank", rel: "noreferrer" } : {})}
            data-reveal
            className="glass lift col-span-12 md:col-span-6 lg:col-span-4 p-7 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-text-faint">
                {p.year}
              </span>
              <span className="font-mono text-xs text-text-faint">{p.index}</span>
            </div>
            <h3 className="font-display font-bold text-xl mb-2">{p.title}</h3>
            <p className="text-text-soft text-sm mb-5">{p.tagline}</p>
            <div className="mt-auto flex items-center justify-between gap-3">
              <span className="text-xs text-text-faint">{p.stack.slice(0, 3).join(" · ")}</span>
              {p.live && (
                <span className="text-cyan text-sm shrink-0 inline-flex items-center gap-1">
                  Live <ArrowUpRight size={13} />
                </span>
              )}
            </div>
          </a>
        ))}
      </div>

      {/* ----- ABOUT / PRINCIPLES ----- */}
      <Label id="about">02 — How I work</Label>
      <div className="grid grid-cols-12 gap-4">
        <div data-reveal className="glass col-span-12 lg:col-span-5 p-7 md:p-9">
          <h3 className="font-display font-bold text-h2 mb-5">
            Not features.{" "}
            <span className="grad-text">Outcomes.</span>
          </h3>
          <p className="text-text-soft leading-relaxed">
            I&apos;d rather understand the whole pipe than babysit one layer.
            Frontend, API, data, deploy — owned end to end, instrumented, and
            boring in the best way.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {principles.map((v, i) => (
            <div key={i} data-reveal className="glass lift p-6">
              <span className="font-mono text-xs grad-text">0{i + 1}</span>
              <h4 className="font-display font-semibold text-lg mt-3 mb-2">{v.title}</h4>
              <p className="text-sm text-text-soft leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ----- SKILLS ----- */}
      <Label>03 — Stack</Label>
      <div className="grid grid-cols-12 gap-4">
        {skillGroups.map((g) => (
          <div key={g.label} data-reveal className="glass lift col-span-12 md:col-span-6 lg:col-span-4 p-6">
            <h4 className="font-display font-semibold text-base mb-4">{g.label}</h4>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="chip !text-xs !py-1.5">{s}</span>
              ))}
            </div>
          </div>
        ))}
        <div data-reveal className="glass col-span-12 lg:col-span-4 p-6 flex items-center justify-center text-center">
          <p className="text-text-soft text-sm leading-relaxed">
            <span className="grad-text font-display font-bold text-2xl block mb-2">{toolCount}+ tools</span>
            picked per problem, never per hype cycle.
          </p>
        </div>
      </div>

      {/* ----- EXPERIENCE ----- */}
      <Label id="experience">04 — Experience</Label>
      <div className="grid grid-cols-12 gap-4">
        {experience.map((e, i) => (
          <div key={i} data-reveal className="glass lift col-span-12 lg:col-span-4 p-7 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <span className={`w-2 h-2 rounded-full ${e.current ? "bg-cyan" : "bg-text-faint"}`} aria-hidden="true" />
              <span className="font-mono text-[0.66rem] tracking-[0.14em] uppercase text-text-faint tabular-nums">
                {e.period}
              </span>
              {e.current && (
                <span className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-cyan border border-cyan/30 rounded-full px-2 py-0.5">
                  Now
                </span>
              )}
            </div>
            <h3 className="font-display font-bold text-xl">{e.role}</h3>
            <div className="mt-1 text-sm text-text-soft">
              <span className="grad-text">@</span> {e.company} — {e.location}
            </div>
            <ul className="mt-5 space-y-2.5 flex-1">
              {e.bullets.slice(0, 3).map((b, bi) => (
                <li key={bi} className="flex gap-3 text-sm text-text-soft leading-relaxed">
                  <span className="w-1 h-1 rounded-full bg-indigo mt-2 shrink-0" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 pt-4 border-t border-stroke text-xs text-text-faint">
              {e.stack.join(" · ")}
            </p>
          </div>
        ))}
      </div>

      {/* ----- CONTACT ----- */}
      <Label id="contact">05 — Contact</Label>
      <ContactCard />
    </div>
  );
}

function ContactCard() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      data-reveal
      className="glass conic-border relative overflow-hidden p-8 md:p-14 text-center"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 90% at 50% 110%, rgba(109,106,246,0.22), transparent 70%)",
        }}
      />
      <div className="relative">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-stroke bg-white/[0.03] px-4 py-2 mb-7">
          <span className="dot" aria-hidden="true" />
          <span className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-text-soft">
            Response within ~24 hours
          </span>
        </div>
        <h2 className="font-display font-bold text-h2 max-w-2xl mx-auto">
          Let&apos;s build something that{" "}
          <span className="grad-text">holds up.</span>
        </h2>
        <p className="mt-5 text-text-soft max-w-md mx-auto">
          Full-time roles and select freelance builds — {meta.location}, remote-friendly.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a href={`mailto:${meta.email}`} className="inline-flex btn btn-grad">
            {meta.email}
          </a>
          <a href={meta.resume} target="_blank" rel="noreferrer" className="inline-flex btn btn-ghost">
            Resume <ArrowDown className="arr" />
          </a>
        </div>
        <div className="mt-8 flex justify-center gap-8 text-sm">
          <a href={meta.github} target="_blank" rel="noreferrer" className="u-draw inline-flex items-center gap-1.5 text-text-soft hover:text-text transition-colors">
            GitHub <ArrowUpRight size={13} />
          </a>
          <a href={meta.linkedin} target="_blank" rel="noreferrer" className="u-draw inline-flex items-center gap-1.5 text-text-soft hover:text-text transition-colors">
            LinkedIn <ArrowUpRight size={13} />
          </a>
          <a href={meta.phoneHref} className="u-draw text-text-soft hover:text-text transition-colors">
            {meta.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
