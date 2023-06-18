/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    colors: {
      'skilled-color1': '#666CA3',
      'skilled-color2': '#13183F',
      'skilled-color3': '#83869A',
      'skilled-color4': '#F74780',
      'skilled-color5': '#ffa7c3',
      'skilled-color6': '#ffffff',
     
    },
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif'],
    },
    extend: {
      spacing: {
        '28': '3.25rem',
        '40': '3.75rem',
        '51': '51px',
        '70': '70px',
      }
    },
  },
  plugins: [],
}

