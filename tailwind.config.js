/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "var(--ink)",
          mute: "var(--ink-mute)",
          dim: "var(--ink-dim)",
        },
        bg: {
          DEFAULT: "var(--bg)",
          elev: "var(--bg-elev)",
          card: "var(--bg-card)",
        },
        line: "var(--line)",
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
        },
        shape: {
          1: "var(--shape-1)",
          2: "var(--shape-2)",
          3: "var(--shape-3)",
          4: "var(--shape-4)",
        },
      },
      fontFamily: {
        display: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 11vw, 11rem)', { lineHeight: '0.92', letterSpacing: '-0.045em' }],
        'display-lg': ['clamp(2.75rem, 7vw, 6.5rem)', { lineHeight: '0.96', letterSpacing: '-0.04em' }],
        'display-md': ['clamp(2rem, 4.5vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.035em' }],
        'eyebrow': ['0.7rem', { lineHeight: '1', letterSpacing: '0.22em' }],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
    },
  },
  plugins: [],
};
