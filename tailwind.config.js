/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006c5b",
        greenlight: "#8ffe04",
        twitter: "#1d9bf0",
        discord: "#5865f2",
      }
    },
  },
  plugins: [],
}