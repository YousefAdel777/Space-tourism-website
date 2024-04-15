/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,jsx}", "./**/*.{html,js,jsx}"],
  theme: {
    screens: {
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "2xl": "1400px",
    },
    fontFamily: {
      "Barlow": ["Barlow Condensed", "sans-serif"],
      "Bellefair": ["Bellefair", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
