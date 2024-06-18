/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      mainblue: "#23A6F0",
      papayas: {
        textblack: "#252B42",
        textgray: "#737373",
        textwhite: "#FFFFFF",
      },
    },
    fontFamily: {
      sans: ["Montserrat"],
      serif: ["Montserrat"],
      mono: ["Montserrat"],
    },
  },
  plugins: [],
};
