/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or false
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla"],
        comfortaa:["Comfortaa"],
      },
      colors:{
        "primary":"#000",
        "secondary":""
      }
    },
    
  },
  plugins: [],
}
