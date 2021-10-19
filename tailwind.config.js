const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
      purple:"#7000F6",
      grey:"#F1F5FB",
      teal:"#E7ECF0",
      indigo:"#7C8087",
      transparent:"#F7F8FA",
      },

      spacing: {
        '24':"22rem",
        '16':"20rem",
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

// footer color as teal, card color as grey indigo as text-color