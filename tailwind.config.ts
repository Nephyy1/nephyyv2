import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        retro: ["var(--font-press-start)"],
      },
      colors: {
        'retro-bg': '#0d0221',
        'retro-purple': '#a642f8',
        'retro-pink': '#ff00ff',
        'retro-cyan': '#00d0ff',
        'retro-text': '#f4f4f4',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        flicker: 'flicker 1.5s infinite',
      },
      dropShadow: {
        'glow-cyan': '0 0 10px rgba(0, 208, 255, 0.7)',
        'glow-pink': '0 0 12px rgba(255, 0, 255, 0.8)',
      }
    },
  },
  plugins: [],
};
export default config;
