/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        brand: {
          main: '#276749', // the main brand color
          secondary: '#672745', // dark purple
        },
        'soft-gray': '#F7FAFC', // a very light, less intensive gray color
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
