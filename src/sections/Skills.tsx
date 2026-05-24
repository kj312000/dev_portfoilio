import SectionShapes from "../components/SectionShapes";
import { skillGroups } from "../data/skills";

const DOT_COLORS = ["var(--shape-1)", "var(--shape-2)", "var(--shape-3)", "var(--shape-4)", "var(--accent)"];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 sm:py-44 px-6 sm:px-10 border-t border-line overflow-hidden bg-bg">
      <SectionShapes variant="b" />
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-12 gap-8 mb-20">
        <div className="col-span-12 md:col-span-3">
          <div className="font-mono text-eyebrow uppercase text-accent">
            [ 02 ] Stack
          </div>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-display font-medium text-display-lg text-ink leading-[0.96] tracking-tightest">
            Tools I{" "}
            <span className="font-serif italic font-normal text-ink/70">reach for.</span>
          </h2>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-start-4 md:col-span-9 space-y-10">
          {skillGroups.map((group, gi) => (
            <div key={group.label} className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-12 sm:col-span-3 flex items-center gap-3 pt-2">
                <span
                  className="w-3 h-3 rounded-full inline-block"
                  style={{ background: DOT_COLORS[gi % DOT_COLORS.length] }}
                />
                <div className="font-mono text-xs uppercase tracking-widest text-ink">
                  {group.label}
                </div>
              </div>
              <div className="col-span-12 sm:col-span-9 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    data-cursor
                    className="inline-flex items-center px-4 py-2 rounded-full border border-ink/15 text-ink text-sm bg-bg-elev hover:border-ink hover:bg-ink hover:text-bg transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
