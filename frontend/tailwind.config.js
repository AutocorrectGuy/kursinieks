/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        'permanent-marker': ['Permanent Marker', 'cursive'],
        'comic-neue': ['Comic Neue', 'cursive'],
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
