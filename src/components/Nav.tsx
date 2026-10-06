import { useEffect, useRef, useState } from "react";
import { magnetic, getLenis } from "../lib/motion";
import { meta } from "../data/content";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const cleanup = ctaRef.current ? magnetic(ctaRef.current, 0.18, 80) : () => {};
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      cleanup();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href) as HTMLElement | null;
    if (!target) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(target, { offset: -90 });
    else target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-[100] px-4 sm:px-6 pt-4">
      <nav
        className={`max-w-site mx-auto flex items-center justify-between rounded-2xl px-5 sm:px-6 h-14 transition-all duration-500 ${
          scrolled ? "glass" : "border border-transparent"
        }`}
        style={scrolled ? undefined : { background: "transparent" }}
      >
        <a
          href="#top"
          onClick={(e) => go(e, "#top")}
          className="font-display font-bold text-lg tracking-tight"
        >
          KJ<span className="grad-text">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className="u-draw text-sm text-text-soft hover:text-text transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          ref={ctaRef}
          href={`mailto:${meta.email}`}
          className="inline-flex btn btn-grad !py-2 !px-4 text-sm"
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}
