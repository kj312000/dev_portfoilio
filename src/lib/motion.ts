import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

export function initSmoothScroll(): Lenis {
  if (lenis) return lenis;

  lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    syncTouch: false,
  });

  const raf = (time: number) => lenis?.raf(time * 1000);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);
  lenis.on("scroll", ScrollTrigger.update);

  return lenis;
}

export function getLenis(): Lenis | null {
  return lenis;
}

/** Magnetic pull toward cursor within radius. Touch devices: no-op. */
export function magnetic(el: HTMLElement, strength = 0.25, radius = 120): () => void {
  if (window.matchMedia("(pointer: coarse)").matches) return () => {};

  const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3" });
  const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3" });

  const onMove = (e: MouseEvent) => {
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    if (Math.hypot(dx, dy) < radius) {
      xTo(dx * strength);
      yTo(dy * strength);
    } else {
      xTo(0);
      yTo(0);
    }
  };
  window.addEventListener("mousemove", onMove, { passive: true });
  return () => {
    window.removeEventListener("mousemove", onMove);
    gsap.set(el, { x: 0, y: 0 });
  };
}
