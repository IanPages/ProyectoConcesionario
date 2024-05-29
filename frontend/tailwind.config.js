/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'imagen-home': "url('/assets/imagenes/32c363e910893559d658acf64584fe2c00f58fa9.jpg')",
      },
      colors:{
        violetaSuave: '#D7A4F7',
        base: '#D1CAC5',
        img: '#B4A599',
      },
      width: {
        '10/100': '10%',  // Ancho del 10%
        '20/100': '20%',  // Ancho del 20%
        '30/100': '30%',
        '40/100': '40%',
        '50/100': '50%',
        '60/100': '60%',
        '70/100': '70%',
        '80/100': '80%',
        '90/100': '90%',
        '100/100': '100%',

      },
      height: {
        '10/100': '10%',  // Ancho del 10%
        '20/100': '20%',  // Ancho del 20%
        '30/100': '30%',
        '40/100': '40%',
        '50/100': '50%',
        '60/100': '60%',
        '70/100': '70%',
        '80/100': '80%',
        '90/100': '90%',
        '100/100': '100%',
      },
    },
    container:{
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

