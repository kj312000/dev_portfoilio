import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setHidden(true);
      return;
    }

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const xToDot = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });
    const xToRing = gsap.quickTo(ring, "x", { duration: 0.42, ease: "power3" });
    const yToRing = gsap.quickTo(ring, "y", { duration: 0.42, ease: "power3" });

    const onMove = (e: MouseEvent) => {
      xToDot(e.clientX);
      yToDot(e.clientY);
      xToRing(e.clientX);
      yToRing(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest("[data-cursor]");
      if (interactive) {
        const lbl = interactive.getAttribute("data-cursor");
        setLabel(lbl && lbl !== "true" ? lbl : null);
        gsap.to(ring, { scale: 2.6, backgroundColor: "var(--accent)", borderColor: "var(--accent)", duration: 0.3, ease: "power3" });
        gsap.to(dot, { scale: 0, duration: 0.2 });
      } else {
        setLabel(null);
        gsap.to(ring, { scale: 1, backgroundColor: "transparent", borderColor: "var(--ink)", duration: 0.3, ease: "power3" });
        gsap.to(dot, { scale: 1, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[200] w-10 h-10 rounded-full border"
        style={{ borderColor: "var(--ink)", background: "transparent" }}
      >
        {label && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] uppercase tracking-widest text-white whitespace-nowrap font-mono">
            {label}
          </span>
        )}
      </div>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[201] w-1.5 h-1.5 rounded-full bg-ink"
      />
    </>
  );
}
