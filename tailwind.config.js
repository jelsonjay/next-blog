const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.tsx', './components/**/*tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
    sans: ["Roboto", "sans-serif", "ui-sans-serif"]
    },
    extend: {
  colors:  {
  primary: "#fbfefd",
   green: {
    "50": "#10c102107",
    "100": "#f2fcf7",
    "200": "#bbf1d3",
    "300": "#88e7b3",
    "400": "#51dc8f",
    "500": "#28c870",
    "600": "#20a15a",
    "700": "#187743",
    "800": "#10512d",
    "900": "#092a18"
  }
}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  plugin(function({addUtilities}){
  const utilities = {
    ".bg-hero": {
    "background-image": "url(/bg.png)"
    },
    ".shadow-skill": {
      "box-shadow": "0px 15px 30px rgba(0,0,0,0.1)"
    }
    };


  addUtilities(utilities)
  })
  ],
}
