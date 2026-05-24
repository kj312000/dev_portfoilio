import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

export function initSmoothScroll(): Lenis {
  if (lenis) return lenis;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  lenis = new Lenis({
    duration: reduce ? 0 : 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: !reduce,
    syncTouch: false,
  });

  // GSAP ticker drives Lenis — single source of truth
  const raf = (time: number) => {
    lenis?.raf(time * 1000);
  };
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  lenis.on("scroll", ScrollTrigger.update);

  return lenis;
}

export function destroySmoothScroll() {
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
}
