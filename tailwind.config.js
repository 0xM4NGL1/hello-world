/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonPink: "#ff00cc",
        neonBlue: "#00ffff",
        neonGreen: "#39ff14",
      },
      fontFamily: {
        mono: ["'Fira Code'", "monospace"],
      },
    },
  },
  plugins: [],
};
