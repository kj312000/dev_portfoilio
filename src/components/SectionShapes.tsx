import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Variant = "a" | "b" | "c" | "d";

type ShapeSpec = {
  kind: "circle" | "pill" | "hex" | "ring" | "square";
  color: string;
  size: number;
  top: string;
  left?: string;
  right?: string;
  rot: number;
  label?: string;
};

const PRESETS: Record<Variant, ShapeSpec[]> = {
  a: [
    { kind: "ring",   color: "var(--accent)",  size: 110, top: "10%", left: "-2%",  rot: 0  },
    { kind: "circle", color: "var(--shape-2)", size: 64,  top: "70%", right: "4%",  rot: 0  },
    { kind: "pill",   color: "var(--ink)",     size: 150, top: "85%", left: "6%",   rot: -10, label: "craft" },
  ],
  b: [
    { kind: "hex",    color: "var(--accent)",  size: 80,  top: "12%", right: "-2%", rot: 18 },
    { kind: "square", color: "var(--shape-3)", size: 56,  top: "60%", left: "-1%",  rot: -12 },
    { kind: "circle", color: "var(--shape-2)", size: 90,  top: "82%", right: "10%", rot: 0  },
  ],
  c: [
    { kind: "pill",   color: "var(--accent)",  size: 160, top: "8%",  right: "-4%", rot: 14, label: "ship" },
    { kind: "ring",   color: "var(--ink)",     size: 90,  top: "55%", left: "-2%",  rot: 0  },
    { kind: "hex",    color: "var(--shape-2)", size: 60,  top: "88%", right: "6%",  rot: -22 },
  ],
  d: [
    { kind: "circle", color: "var(--accent)",  size: 70,  top: "14%", left: "3%",   rot: 0  },
    { kind: "ring",   color: "var(--shape-3)", size: 130, top: "75%", right: "-3%", rot: 0  },
    { kind: "square", color: "var(--ink)",     size: 44,  top: "40%", right: "8%",  rot: 18 },
  ],
};

function ShapeEl({ s, i }: { s: ShapeSpec; i: number }) {
  const style: React.CSSProperties = {
    position: "absolute",
    top: s.top,
    left: s.left,
    right: s.right,
    width: s.size,
    height: s.kind === "pill" ? s.size * 0.42 : s.size,
    transform: `rotate(${s.rot}deg)`,
    color: s.color,
    willChange: "transform",
  };

  if (s.kind === "circle") {
    return (
      <div className="section-shape" data-i={i} style={style}>
        <div className="w-full h-full rounded-full" style={{ background: s.color }} />
      </div>
    );
  }
  if (s.kind === "pill") {
    return (
      <div className="section-shape" data-i={i} style={style}>
        <div
          className="w-full h-full rounded-full flex items-center justify-center px-4"
          style={{ background: s.color }}
        >
          {s.label && (
            <span className="font-mono text-[11px] uppercase tracking-widest text-white whitespace-nowrap">
              ↳ {s.label}
            </span>
          )}
        </div>
      </div>
    );
  }
  if (s.kind === "ring") {
    return (
      <div className="section-shape" data-i={i} style={style}>
        <div className="w-full h-full rounded-full" style={{ border: `6px solid ${s.color}` }} />
      </div>
    );
  }
  if (s.kind === "square") {
    return (
      <div className="section-shape" data-i={i} style={style}>
        <div className="w-full h-full" style={{ background: s.color }} />
      </div>
    );
  }
  return (
    <div className="section-shape" data-i={i} style={style}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon points="50,5 95,28 95,72 50,95 5,72 5,28" fill={s.color} />
      </svg>
    </div>
  );
}

export default function SectionShapes({ variant = "a" }: { variant?: Variant }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".section-shape");
      items.forEach((el, i) => {
        const dir = i % 2 === 0 ? 1 : -1;
        gsap.from(el, {
          opacity: 0,
          y: 40 * dir,
          scale: 0.6,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 95%", once: true },
        });
        gsap.to(el, {
          y: 60 * dir,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, [variant]);

  const shapes = PRESETS[variant];
  return (
    <div ref={root} aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      {shapes.map((s, i) => <ShapeEl key={i} s={s} i={i} />)}
    </div>
  );
}
