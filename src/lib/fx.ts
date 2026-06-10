import { gsap } from "gsap";

const fine = () => window.matchMedia("(pointer: fine)").matches;

/**
 * Cursor spotlight over `.glass` cards.
 * IntersectionObserver maintains the on-screen set; each pointer frame
 * touches only those (~6-8 rects instead of all 25).
 */
export function spotlight(container: HTMLElement): () => void {
  if (!fine()) return () => {};

  const visible = new Set<HTMLElement>();
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        const el = e.target as HTMLElement;
        if (e.isIntersecting) visible.add(el);
        else visible.delete(el);
      });
    },
    { rootMargin: "120px" }
  );
  container.querySelectorAll<HTMLElement>(".glass").forEach((c) => io.observe(c));

  let raf = 0;
  const onMove = (e: MouseEvent) => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      visible.forEach((card) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    });
  };

  window.addEventListener("mousemove", onMove, { passive: true });
  return () => {
    window.removeEventListener("mousemove", onMove);
    cancelAnimationFrame(raf);
    io.disconnect();
  };
}

/** 3D tilt + glare for one card. Subtle: max ~5deg. */
export function tilt(el: HTMLElement, max = 5): () => void {
  if (!fine()) return () => {};

  el.style.transformStyle = "preserve-3d";
  el.style.perspective = "900px";

  const rx = gsap.quickTo(el, "rotationX", { duration: 0.6, ease: "power3" });
  const ry = gsap.quickTo(el, "rotationY", { duration: 0.6, ease: "power3" });

  const onMove = (e: MouseEvent) => {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry(px * max * 2);
    rx(-py * max * 2);
    el.style.setProperty("--gx", `${(px + 0.5) * 100}%`);
    el.style.setProperty("--gy", `${(py + 0.5) * 100}%`);
  };
  const onLeave = () => {
    rx(0);
    ry(0);
  };

  el.addEventListener("mousemove", onMove, { passive: true });
  el.addEventListener("mouseleave", onLeave);
  return () => {
    el.removeEventListener("mousemove", onMove);
    el.removeEventListener("mouseleave", onLeave);
    gsap.set(el, { rotationX: 0, rotationY: 0 });
  };
}

/** Spring-following glow orb (hero). */
export function chaseOrb(el: HTMLElement, bounds: HTMLElement): () => void {
  if (!fine()) {
    el.style.display = "none";
    return () => {};
  }

  gsap.set(el, { xPercent: -50, yPercent: -50, opacity: 0 });
  const xTo = gsap.quickTo(el, "x", { duration: 1.1, ease: "power3" });
  const yTo = gsap.quickTo(el, "y", { duration: 1.1, ease: "power3" });

  let shown = false;
  const onMove = (e: MouseEvent) => {
    const r = bounds.getBoundingClientRect();
    const inside = e.clientY > r.top - 100 && e.clientY < r.bottom + 100;
    if (inside !== shown) {
      shown = inside;
      gsap.to(el, { opacity: inside ? 1 : 0, duration: 0.6 });
    }
    xTo(e.clientX - r.left);
    yTo(e.clientY - r.top);
  };

  window.addEventListener("mousemove", onMove, { passive: true });
  return () => window.removeEventListener("mousemove", onMove);
}
