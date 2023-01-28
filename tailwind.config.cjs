/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('/src/assets/images/pattern-bg.png')",
      },
    },
    screens: {
      xs: { min: "339px" },

      ...defaultTheme.screens,
    },
    colors: {
      Very: "hsl(0, 0%, 17%)",
      Dark: " hsl(0, 0%, 59%)",
      White: "rgb(255, 255, 255)",
      Black: "rgb(0,0,0)",
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
};
