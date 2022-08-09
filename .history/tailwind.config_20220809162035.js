
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or false
  theme: {
    screens: {
      'xs': '320px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        karla: ["Karla","sans-serif"],
        comfortaa:["Comfortaa","cursive"],
      },
      colors:{
        "primary":"#FFCB08",
      }
    },
    
  },
  plugins: [],
}
