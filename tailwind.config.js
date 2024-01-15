/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#2e2e2e",
        lightsoft: "#efefef",
        light: "#fafafa",
        yellow: "#4dc1ff",
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
