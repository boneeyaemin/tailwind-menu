/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./**/*.html'],
  theme: {
    // tailwind er kono kichu k nijer moto kichu korta ai khana likta hoy
    screens: {
      'sm': '575px',
      'md': '767px',
      'lg': '991px',
      'xl': '1199px',
    },
    container: {
      center: true,
      padding: '16px'
    },
    // font
    fontFamily: {
      sans: ["'Nunito'", ...defaultTheme.fontFamily.sans],
      serif: ["'Merriweather'", ...defaultTheme.fontFamily.serif],
    },
    // tailwind er satha new kichu add korta chaila ai khana korta hoba
    extend: {
      colors: {
        'primary': "#A49393",
        'secondery': "#E9EDF1",
        'heading': "#263045",
        'accordion': "#F1EAE3",
        'paragraphy': "#3B465C",
        'hero': "#f1eae3"
      }
    },
  },
  plugins: [],
}

