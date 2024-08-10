/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat"],
      },
    },
    colors: {
      mainSpace: {
        blue: "#4a4e69",
        grey: "#9a8c98",
        beige: "#c9ada7",
      },

      clue: {
        pink: "#D81E5B",
        persianred: "#BB342F",
        moonstone: "#5AB1BB",
        yellow: "#FBFF12",
        green: "#68C365",
      },

      textPapayas: {
        black: "#22223b",
        gray: "#f2e9e4",
        white: "#FFFFFA",
      },
    },
  },
  plugins: [],
};
