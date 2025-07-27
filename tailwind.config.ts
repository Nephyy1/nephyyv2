/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'retro-bg': '#2d2d2d',
        'retro-text': '#e0e0e0',
        'retro-primary': '#ff7a18',
        'retro-secondary': '#af5200',
        'retro-accent': '#00a8a8',
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'vt323': ['"VT323"', 'monospace'],
      },
      boxShadow: {
        'retro': '8px 8px 0px #af5200',
        'retro-hover': '10px 10px 0px #ff7a18',
      },
    },
  },
  plugins: [],
}
