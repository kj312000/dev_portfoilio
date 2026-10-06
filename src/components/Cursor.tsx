import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Spark = { x: number; y: number; vx: number; vy: number; life: number; max: number; r: number; hue: number };

/**
 * Three-layer cursor: instant gradient dot + lagging hairline ring
 * + canvas spark trail that sheds while the pointer moves.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const canvas = canvasRef.current;
    if (!dot || !ring || !canvas) return;
    if (window.matchMedia("(pointer: coarse)").matches) {
      dot.style.display = "none";
      ring.style.display = "none";
      canvas.style.display = "none";
      return;
    }

    // --- Spark trail ---
    const ctx2d = canvas.getContext("2d")!;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(innerWidth * dpr);
      canvas.height = Math.floor(innerHeight * dpr);
      ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const sparks: Spark[] = [];
    let lastX = 0, lastY = 0, trailRaf = 0, looping = false;

    const loop = () => {
      ctx2d.clearRect(0, 0, innerWidth, innerHeight);
      if (sparks.length === 0) {
        // idle: park the loop until the next shed
        looping = false;
        return;
      }
      ctx2d.globalCompositeOperation = "lighter";
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.life++;
        s.x += s.vx;
        s.y += s.vy;
        const t = s.life / s.max;
        if (t >= 1) {
          sparks.splice(i, 1);
          continue;
        }
        const alpha = (1 - t) * 0.55;
        ctx2d.beginPath();
        ctx2d.fillStyle = `hsla(${s.hue}, 90%, 68%, ${alpha})`;
        ctx2d.arc(s.x, s.y, s.r * (1 - t * 0.6), 0, Math.PI * 2);
        ctx2d.fill();
      }
      trailRaf = requestAnimationFrame(loop);
    };

    const shed = (x: number, y: number) => {
      const speed = Math.hypot(x - lastX, y - lastY);
      lastX = x; lastY = y;
      const n = Math.min(3, Math.floor(speed / 9) + (speed > 2 ? 1 : 0));
      for (let i = 0; i < n; i++) {
        if (sparks.length >= 60) sparks.shift();
        sparks.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7 + 0.25,
          life: 0,
          max: 34 + Math.random() * 22,
          r: 1.2 + Math.random() * 2,
          hue: 235 + Math.random() * 55, // indigo→cyan band
        });
      }
      if (!looping && sparks.length > 0) {
        looping = true;
        trailRaf = requestAnimationFrame(loop);
      }
    };

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const dx = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power2" });
    const dy = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power2" });
    const rx = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3" });
    const ry = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3" });

    let shown = false;
    const onMove = (e: MouseEvent) => {
      if (!shown) {
        shown = true;
        lastX = e.clientX;
        lastY = e.clientY;
        gsap.to([dot, ring], { opacity: 1, duration: 0.35 });
      }
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
      shed(e.clientX, e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest("a, button, [data-hover]");
      if (t) {
        gsap.to(ring, {
          width: 52,
          height: 52,
          borderColor: "rgba(109, 106, 246, 0.65)",
          backgroundColor: "rgba(109, 106, 246, 0.07)",
          duration: 0.4,
          ease: "power3.out",
        });
        gsap.to(dot, { scale: 0.45, duration: 0.3, ease: "power3.out" });
      } else {
        gsap.to(ring, {
          width: 30,
          height: 30,
          borderColor: "rgba(232, 236, 244, 0.28)",
          backgroundColor: "rgba(255, 255, 255, 0)",
          duration: 0.4,
          ease: "power3.out",
        });
        gsap.to(dot, { scale: 1, duration: 0.3, ease: "power3.out" });
      }
    };

    const onDown = () => gsap.to(ring, { scale: 0.82, duration: 0.18, ease: "power2.out" });
    const onUp = () => gsap.to(ring, { scale: 1, duration: 0.35, ease: "back.out(2.2)" });
    const onLeaveDoc = () => {
      shown = false;
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeaveDoc);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeaveDoc);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(trailRaf);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 z-[199] pointer-events-none"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[200] w-[30px] h-[30px] rounded-full pointer-events-none border"
        style={{ borderColor: "rgba(232, 236, 244, 0.28)" }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[201] w-1.5 h-1.5 rounded-full pointer-events-none"
        style={{
          background: "linear-gradient(94deg, var(--indigo), var(--cyan))",
          boxShadow: "0 0 10px rgba(109, 106, 246, 0.55)",
        }}
      />
    </>
  );
}
