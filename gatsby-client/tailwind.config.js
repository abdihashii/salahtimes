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
          secondary: '#0A8337',
        },
        header_border_color: 'rgba(126, 126, 126, 0.3)',
        text: {
          grey: '#646464',
          layout_text: '#0F0700',
        },
        bg: {
          grey: '#F8F8F8',
        },
      },
      borderRadius: {
        '4xl': '32px',
        '20px': '20px',
        '40px': '40px',
      },
      borderWidth: {
        '3px': '3px',
      },
      boxShadow: {
        green: '0px 8px 28px -6px rgba(10, 150, 58, 0.42)',
        darkGreen: '0px 8px 28px -6px #006307',
        // green: '0px 8px 28px -6px rgba(10, 150, 58, 0.42), 0px 18px 88px -4px rgba(11, 147, 59, 0.42);'
        gray: '0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)',
      },
      margin: {
        '10px': '10px',
        '11px': '11px',
        '13px': '13px',
        '24px': '24px',
        '26px': '26px',
        '38px': '38px !important',
        '50px': '50px',
        '51px': '51px',
        '55px': '55px',
        '56px': '56px',
        '63px': '63px',
        '86px': '86px',
        auto: 'auto !important',
      },
      height: {
        '55px': '55px',
        '69px': '69px',
        '151px': '151px',
        '200px': '200px',
        '1063px': '1063px',
        '1.5em': '1.5em',
        '2.5em': '2.5em',
      },
      width: {
        '242px': '242px',
        '229px': '229px',
        '933px': '933px',
        '981px': '981px',
        '1.5em': '1.5em',
        '2.5em': '2.5em',
      },
      gap: {
        '11px': '11px',
        1.125: '1.125rem',
      },
      fontSize: {
        '13px': '13px',
        '17px': '17.56px',
        '24px': '24px',
        '1.5em': '1.5em',
      },
      padding: {
        '10px': '10px',
        '11px': '11px',
        '12px': '12px',
        '17px': '17px',
        '22px': '22px',
        '23px': '23px',
        '60px': '60px',
      },
      minWidth: {
        '3/12': '25%',
        '11/12': '91.666667%',
      },
      minHeight: {
        '110vh': '110vh',
      },
      letterSpacing: {
        '0.011em': '0.011em',
      },
      lineHeight: {
        '26px': '26px',
        '39px': '39px',
        '44px': '44px',
      },
    },
  },
  plugins: [],
};
