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
        '20px': '20px',
      },
      boxShadow: {
        green: '0px 8px 28px -6px rgba(10, 150, 58, 0.42)',
        // green: '0px 8px 28px -6px rgba(10, 150, 58, 0.42), 0px 18px 88px -4px rgba(11, 147, 59, 0.42);'
        gray: '0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)',
      },
      margin: {
        '51px': '51px',
        '56px': '56px',
        '38px': '38px',
      },
      height: {
        '55px': '55px',
        '151px': '151px',
        '1063px': '1063px',
      },
      width: {
        '242px': '242px',
        '229px': '229px',
        '981px': '981px',
      },
      gap: {
        1.125: '1.125rem',
      },
      fontSize: {
        '24px': '24px',
      },
      padding: {
        '12px': '12px',
        '49px': '49px',
      },
    },
  },
  plugins: [],
};
