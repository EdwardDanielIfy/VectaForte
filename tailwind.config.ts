import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#f7f6f3",            // Primary text (near-white)
        paper: "#07080d",          // Deep carbon background
        slate: "#c5d1e0",          // Secondary text (brighter silver-blue, was #94a3b8)
        brass: "#d4a853",          // Gold accent (slightly brighter)
        steel: "#11121d",          // Card elevation background
        "steel-light": "#1b1c2a", // Hovered card background
        "ink-soft": "#0a0b14",     // Alternate section background
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
