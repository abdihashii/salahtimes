/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#0A963A',
          dark: '#006307',
        },
      },
      borderRadius: {
        '4xl': '32px',
      },
      boxShadow: {
        green: '0px 8px 28px -6px rgba(10, 150, 58, 0.42)',
        // green: '0px 8px 28px -6px rgba(10, 150, 58, 0.42), 0px 18px 88px -4px rgba(11, 147, 59, 0.42);'
      },
      margin: {
        '51px': '51px',
      },
      height: {
        '55px': '55px',
      },
      width: {
        '242px': '242px',
      },
    },
  },
  plugins: [],
};
