/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,tx,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'playfair': ['Playfair Display', 'serif'],
      'bodoni': ['Bodoni Moda', 'serif'],
      'crake': ['Crake', 'serif'],
      'imbue': ['Imbue', 'serif'],
      'noto': ['Noto Serif Display', 'serif'],
      'notojp': ['Noto Serif JP', 'serif'],
    },
    extend: {
      colors: {
        'background': '#1d1d1d',
        'primary': '#EB3F3F',
        'secondary': '#FC825B',
        'tertiary': '#5B88FC',
      },
    },
  },
  plugins: [],
}