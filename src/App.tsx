import { useEffect, useState } from "react";
import { initSmoothScroll } from "./lib/smoothScroll";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Work from "./sections/Work";
import Contact from "./sections/Contact";

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ready) return;
    initSmoothScroll();
  }, [ready]);

  return (
    <div className="relative min-h-screen bg-bg text-ink">
      <Preloader onDone={() => setReady(true)} />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Contact />
      </main>
    </div>
  );
}
