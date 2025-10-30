/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c800ff",
        accent: "#39ff14",
        dark: "#000000",
        cardboard: "#232323"
      }
    },
  },
  plugins: [],
};

