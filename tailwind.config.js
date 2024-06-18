/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      mainSpace: {
        blue: "#4a4e69",
        grey: "#9a8c98",
        beige: "#c9ada7",
      },

      textPapayas: {
        black: "#22223b",
        gray: "#f2e9e4",
        white: "#FFFFFA",
      },
    },
    fontFamily: {
      sans: ["Libre Baskerville"],
      serif: ["Libre Baskerville"],
      mono: ["Libre Baskerville"],
    },
  },
  plugins: [],
};
