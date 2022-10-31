/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
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
        '40px': '40px',
      },
      boxShadow: {
        green: '0px 8px 28px -6px rgba(10, 150, 58, 0.42)',
        // green: '0px 8px 28px -6px rgba(10, 150, 58, 0.42), 0px 18px 88px -4px rgba(11, 147, 59, 0.42);'
        gray: '0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)',
      },
      margin: {
        '24px': '24px',
        '38px': '38px !important',
        '51px': '51px',
        '56px': '56px',
        '86px': '86px',
        auto: 'auto !important',
      },
      height: {
        '55px': '55px',
        '69px': '69px',
        '151px': '151px',
        '200px': '200px',
        '1063px': '1063px',
        '2.5em': '2.5em',
      },
      width: {
        '242px': '242px',
        '229px': '229px',
        '933px': '933px',
        '981px': '981px',
      },
      gap: {
        1.125: '1.125rem',
      },
      fontSize: {
        '24px': '24px',
      },
      padding: {
        '11px': '11px',
        '12px': '12px',
        '17px': '17px',
        '60px': '60px',
      },
    },
  },
  plugins: [],
};
