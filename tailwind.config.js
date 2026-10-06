/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "var(--bg)", soft: "var(--bg-soft)" },
        text: { DEFAULT: "var(--text)", soft: "var(--text-soft)", faint: "var(--text-faint)" },
        stroke: { DEFAULT: "var(--stroke)", strong: "var(--stroke-strong)" },
        indigo: "var(--indigo)",
        cyan: "var(--cyan)",
      },
      fontFamily: {
        sans: ['"Figtree Variable"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        display: ['"Outfit Variable"', '"Figtree Variable"', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(2.7rem, 6.6vw, 5.6rem)', { lineHeight: '1.04', letterSpacing: '-0.03em' }],
        'h2': ['clamp(1.9rem, 3.6vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'label': ['0.7rem', { lineHeight: '1.4', letterSpacing: '0.16em' }],
      },
      maxWidth: {
        site: '76rem',
      },
    },
  },
  plugins: [],
};
