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
        base: "#CDFCCC",
        secondary: "#BCA7EA",
        "secondary-light": "#EFE8FF",
        "secondary-dark": "#6E5CA4",
        light: "#FEFDFE",
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
