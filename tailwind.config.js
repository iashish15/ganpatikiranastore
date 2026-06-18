/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: "#fff8ed",
          100: "#ffefd4",
          200: "#ffd9a0",
          300: "#ffbc5c",
          400: "#ff9a20",
          500: "#f97d07",
          600: "#ea5f02",
          700: "#c24406",
          800: "#9a350d",
          900: "#7c2d0e",
        },
        forest: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        cream: "#FDF6EC",
        gold: "#D4A017",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 16px 0 rgba(212,160,23,0.10)",
        fab: "0 4px 24px 0 rgba(34,197,94,0.35)",
      },
    },
  },
  plugins: [],
};
