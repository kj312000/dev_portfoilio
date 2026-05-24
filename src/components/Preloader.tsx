import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);
  const curtain = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("kj-preloaded");
    if (seen) {
      setShown(false);
      onDone();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("kj-preloaded", "1");
        setShown(false);
        onDone();
      },
    });

    const obj = { val: 0 };
    tl.to(obj, {
      val: 100,
      duration: 1.4,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counter.current) counter.current.textContent = String(Math.floor(obj.val)).padStart(3, "0");
      },
    })
      .to(counter.current, { opacity: 0, duration: 0.25 }, "+=0.1")
      .to(curtain.current, { yPercent: -100, duration: 1.1, ease: "expo.inOut" }, "<")
      .to(root.current, { display: "none", duration: 0 });
  }, [onDone]);

  if (!shown) return null;

  return (
    <div ref={root} className="fixed inset-0 z-[300] pointer-events-none">
      <div
        ref={curtain}
        className="absolute inset-0 flex items-end justify-end p-8 sm:p-12"
        style={{ background: "var(--bg)" }}
      >
        <div className="flex items-baseline gap-4 text-ink">
          <span className="font-mono text-xs tracking-widest uppercase opacity-60">Loading</span>
          <span
            ref={counter}
            className="font-display text-7xl sm:text-9xl font-medium leading-none tabular-nums tracking-tightest"
          >
            000
          </span>
          <span className="font-mono text-xs text-accent">%</span>
        </div>
      </div>
    </div>
  );
}
