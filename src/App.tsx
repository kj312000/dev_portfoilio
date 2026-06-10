import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initSmoothScroll } from "./lib/motion";
import Nav from "./components/Nav";
import Cursor from "./components/Cursor";
import Hero from "./sections/Hero";
import Bento from "./sections/Bento";
import { meta } from "./data/content";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const progressRef = useRef<HTMLDivElement>(null);
  const orbARef = useRef<HTMLDivElement>(null);
  const orbBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initSmoothScroll();

    const triggers: ScrollTrigger[] = [];

    // Top progress hairline
    if (progressRef.current) {
      const t = gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.4,
        },
      });
      if (t.scrollTrigger) triggers.push(t.scrollTrigger);
    }

    // Ambient orbs parallax at different depths
    const parallax = (el: HTMLElement | null, y: number) => {
      if (!el) return;
      const t = gsap.to(el, {
        y,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });
      if (t.scrollTrigger) triggers.push(t.scrollTrigger);
    };
    parallax(orbARef.current, 340);
    parallax(orbBRef.current, -260);

    // Aurora hue drifts as you travel the page
    const aurora = document.querySelector<HTMLElement>(".aurora");
    if (aurora) {
      const hue = { v: 0 };
      const t = gsap.to(hue, {
        v: 45,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
        onUpdate: () => {
          aurora.style.filter = `blur(70px) saturate(1.25) hue-rotate(${hue.v}deg)`;
        },
      });
      if (t.scrollTrigger) triggers.push(t.scrollTrigger);
    }

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Scroll progress */}
      <div
        ref={progressRef}
        aria-hidden="true"
        className="fixed top-0 inset-x-0 h-[2px] z-[150] origin-left"
        style={{
          transform: "scaleX(0)",
          background: "linear-gradient(90deg, var(--indigo), var(--cyan))",
        }}
      />

      {/* Ambient background */}
      <div className="bg-orbs" aria-hidden="true">
        <div ref={orbARef} className="orb orb-a" />
        <div ref={orbBRef} className="orb orb-b" />
      </div>
      <div className="bg-dots" aria-hidden="true" />

      <Cursor />
      <Nav />

      <main className="relative z-10">
        <Hero />
        <Bento />
      </main>

      <footer className="relative z-10 border-t border-stroke">
        <div className="max-w-site mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between gap-2 font-mono text-[0.66rem] tracking-[0.14em] uppercase text-text-faint">
          <span>© {new Date().getFullYear()} {meta.name}</span>
          <span>React · GSAP · Lenis</span>
        </div>
      </footer>
    </div>
  );
}
