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
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        sky: '#5c94fc',
        ground: '#e69039',
        brick: '#c27334',
        pipe: '#00a800',
        pipe_highlight: '#64dd17',
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', 'box-shadow': '0 0 10px #fce462, 0 0 20px #fce462' },
          '50%': { transform: 'scale(1.05)', 'box-shadow': '0 0 20px #fce462, 0 0 40px #fce462' },
        },
        characterIdle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      animation: {
        bob: 'bob 2s ease-in-out infinite',
        pulse: 'pulse 1.5s ease-in-out infinite',
        characterIdle: 'characterIdle 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
export default config;
