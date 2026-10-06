# Kaustubh Jadhav — Portfolio

Award-grade dark editorial portfolio. Vite + React + TypeScript + GSAP + Lenis + React Three Fiber.

## Quick start

```bash
npm install
npm run dev      # local dev
npm run build    # production build
npm run preview  # preview production build
```

## Stack

- **Framework**: Vite + React 18 + TypeScript
- **Styling**: Tailwind CSS with CSS-variable design tokens
- **Motion**: GSAP + ScrollTrigger + Lenis (synced via GSAP ticker)
- **3D / Shaders**: React Three Fiber + Three.js (hero shader backdrop)
- **Fonts**: Bricolage Grotesque (display) · Inter Tight (body) · JetBrains Mono (mono)

## Editing content

All copy lives in `src/data/`:

| File | What |
|------|------|
| `src/data/projects.ts` | Project list shown in Selected Work |
| `src/data/experience.ts` | Timeline entries |
| `src/data/skills.ts` | Categorized skill list + marquee items |

To add a project: append an entry to `projects` in `src/data/projects.ts`. No other file changes needed.

## Design tokens

CSS variables in `src/index.css`:

```
--bg, --bg-elev, --bg-card
--ink, --ink-mute, --ink-dim
--line
--accent, --accent-soft
```

Tailwind colors map to these (`text-accent`, `bg-bg`, `border-line`, etc.). Change the brand color by editing `--accent`.

## Sections

1. Preloader — counter + curtain wipe (once per session)
2. Hero — full-viewport, R3F shader backdrop, GSAP char-by-char headline
3. About — pinned line reveal
4. Skills — auto-scrolling marquee + categorized list
5. Experience — vertical timeline with scroll-drawn line
6. Selected Work — case-study cards with parallax cover
7. Contact — copy-email interaction, footer

## Resume

PDF lives at `public/resume.pdf`. Linked from nav and contact.

## Accessibility

- Respects `prefers-reduced-motion`
- Semantic HTML, focus-visible states
- Cursor disabled on touch
- Color contrast meets WCAG AA on accent + ink combinations

## Deploy

Netlify config already in `netlify.toml`. Push to deploy.
