import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Shape = {
  kind: "circle" | "pill" | "hex" | "square" | "ring";
  color: string;
  size: number;
  x: number;
  y: number;
  rot: number;
  speed: number;
  label?: string;
};

const SHAPES: Shape[] = [
  { kind: "circle", color: "var(--shape-2)", size: 140, x: 8,  y: 12, rot: 0, speed: 0.6, label: "scroll" },
  { kind: "pill",   color: "var(--shape-1)", size: 220, x: 78, y: 18, rot: -12, speed: 0.45, label: "click" },
  { kind: "hex",    color: "var(--shape-4)", size: 110, x: 70, y: 65, rot: 18, speed: 0.7 },
  { kind: "ring",   color: "var(--shape-1)", size: 180, x: 12, y: 72, rot: 0, speed: 0.55 },
  { kind: "square", color: "var(--shape-3)", size: 90,  x: 88, y: 78, rot: -22, speed: 0.5 },
  { kind: "circle", color: "var(--shape-4)", size: 60,  x: 45, y: 8,  rot: 0, speed: 0.35 },
  { kind: "pill",   color: "var(--shape-2)", size: 130, x: 50, y: 85, rot: 14, speed: 0.6 },
];

function renderShape(s: Shape, i: number) {
  const style: React.CSSProperties = {
    position: "absolute",
    left: `${s.x}%`,
    top: `${s.y}%`,
    width: s.size,
    height: s.kind === "pill" ? s.size * 0.42 : s.size,
    transform: `rotate(${s.rot}deg)`,
    color: s.color,
    willChange: "transform",
  };

  if (s.kind === "circle") {
    return (
      <div key={i} className="shape-item" style={style}>
        <div
          className="w-full h-full rounded-full flex items-center justify-center"
          style={{ background: s.color }}
        >
          {s.label && (
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/90">
              {s.label}
            </span>
          )}
        </div>
      </div>
    );
  }
  if (s.kind === "pill") {
    return (
      <div key={i} className="shape-item" style={style}>
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
      <div key={i} className="shape-item" style={style}>
        <div
          className="w-full h-full rounded-full"
          style={{ border: `8px solid ${s.color}`, background: "transparent" }}
        />
      </div>
    );
  }
  if (s.kind === "square") {
    return (
      <div key={i} className="shape-item" style={style}>
        <div className="w-full h-full" style={{ background: s.color }} />
      </div>
    );
  }
  // hex
  return (
    <div key={i} className="shape-item" style={style}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon points="50,5 95,28 95,72 50,95 5,72 5,28" fill={s.color} />
      </svg>
    </div>
  );
}

export default function FloatingShapes() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".shape-item");
      items.forEach((el, i) => {
        const dir = i % 2 === 0 ? 1 : -1;
        gsap.to(el, {
          y: 30 * dir,
          x: 18 * dir,
          rotation: "+=" + (12 * dir),
          duration: 4 + i * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Mouse parallax
      const onMove = (e: MouseEvent) => {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const dx = (e.clientX - cx) / cx;
        const dy = (e.clientY - cy) / cy;
        items.forEach((el, i) => {
          const depth = (i % 3 + 1) * 8;
          gsap.to(el, {
            xPercent: dx * depth,
            yPercent: dy * depth,
            duration: 0.9,
            ease: "power3.out",
          });
        });
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      aria-hidden
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {SHAPES.map((s, i) => renderShape(s, i))}
    </div>
  );
}
