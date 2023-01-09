/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [],
  theme: {
    extend: {
      colors:{
        bluegrad:{
          100: '#00d2ff',
          200: '#3a47d5'
        }
      },

      backgroundImage: {
        'hero-bg': "url('/background.jpg')",
        'footer-bg': "url('/background2.jpg')",
      },

    },
  },
  plugins: [],
}
