/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "base-dark": "#3dac78",
        base: "#74c69d",
        "base-light": "#95d5b2",
        secondary: "#b7e4c7",
        "secondary-light": "#d8f3dc",
      },
      fontFamily: {
        heading: ["Bebas Neue", "cursive"],
        body: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": `url("/svg/heropattern.svg")`,
      },
      backgroundPosition: {
        "hero-right": "top right 90rem",
      },
      backgroundSize: {
        105: "105% 105%",
      },
    },
  },
  plugins: [],
};
