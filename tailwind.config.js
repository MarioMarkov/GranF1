/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'purple': '#6246ea'
          },
      },
      keyframes:{
        'open-menu':{
          '0%': {transform: 'scaleY(O)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'}
        },
      },
      animation:{
        'open-menu': 'open-menu 0.5s ease-in-out forwards'
      }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
