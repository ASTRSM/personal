/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,tx,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'inter': ['var(--font-inter)', 'sans-serif'],
      'playfair': ['var(--font-playfair-display)', 'serif'],
      'bodoni': ['var(--font-bodoni-moda)', 'serif'],
      'crake': ['Crake', 'serif'],
      'imbue': ['var(--font-imbue)', 'serif'],
      'noto': ['var(--font-noto-serif-display)', 'serif'],
      'notojp': ['var(--font-notojp)', 'serif'],
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