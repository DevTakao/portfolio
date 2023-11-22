/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#2e2e2e",
        light: "#fafafa",
        yellow: "#F0BD0F",
      },
    },
    fontFamily: {
      sans: ["Saira Condensed", "sans-serif"],
      serif: ["Zilla Slab", "serif"],
    },
  },
  plugins: [],
};
