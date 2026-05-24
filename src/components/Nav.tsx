import { useEffect, useState } from "react";

export default function Nav() {
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const opts: Intl.DateTimeFormatOptions = {
        hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata",
      };
      setTime(d.toLocaleTimeString("en-GB", opts) + " IST");
    };
    update();
    const id = setInterval(update, 30000);

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      clearInterval(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 py-5 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-bg/75 border-b border-line" : "bg-transparent"
      }`}
    >
      <a href="#hero" className="font-display font-medium text-base text-ink tracking-tight" data-cursor="home">
        Kaustubh<span className="text-accent">.</span>
      </a>
      <div className="hidden sm:flex items-center gap-7 font-mono text-[11px] tracking-widest uppercase text-ink">
        <a href="#work" data-cursor="view" className="hover:text-accent transition-colors">Work</a>
        <a href="#about" data-cursor="view" className="hover:text-accent transition-colors">About</a>
        <a href="#experience" data-cursor="view" className="hover:text-accent transition-colors">Experience</a>
        <a href="#contact" data-cursor="view" className="hover:text-accent transition-colors">Contact</a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          data-cursor="open"
          className="btn-pill solid"
        >
          Résumé ↗
        </a>
      </div>
      <span className="hidden md:block font-mono text-[10px] tracking-widest text-ink-mute uppercase">
        Pune · {time}
      </span>
    </nav>
  );
}
