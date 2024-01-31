/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#2e2e2e",
        darksoft: "#ddd",
        lightsoft: "#efefef",
        light: "#fafafa",
        blue: "#4dc1ff",
        darkaccent: "#051832",
      },
    },
    fontFamily: {
      sans: ["Saira Condensed", "sans-serif"],
      serif: ["Zilla Slab", "serif"],
    },
  },
  plugins: [],
};
