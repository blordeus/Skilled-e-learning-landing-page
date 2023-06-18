/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './*{ht'
             './index.html',
          ],
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
    fontSize: {
      'heading-s': '24px',
      'heading-m': '32px',
      'heading-l': '40px',
      'heading-xl': '56px',
      'body-s': '16px',
      'body-m': '18px',
    },
    extend: {
      lineHeight: {
        '28': '28px',
        '40': '40px',
        '51': '51px',
        '70': '70px',
      }
    },
  },
  plugins: [],
}

