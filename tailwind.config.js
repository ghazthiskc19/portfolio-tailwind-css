/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // kalo valuenya media -> bakalan nyesuain sama sistem
  content: ['./index.html'], // untuk melacak perubahan file
  theme: {
    container : {
      center : true,
      padding : "16px",
    },
    extend: {
      colors :{
        primary: "#14b8a6",
        secondary : "#64748b",
        dark: "#0f172a",
      },
      screens: {
        '2xl' : "1320px",
      }
    },
  },
  plugins: [],
}

