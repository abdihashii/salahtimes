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
          DEFAULT: '#34C759',
          dark: '#006307',
          secondary: '#0A8337',
          blog: '#024C1E',
          extra_dark: '#000B03',
        },
        header_border_color: 'rgba(126, 126, 126, 0.3)',
        text: {
          light_grey: '#D2D2D2',
          medium_grey: '#848280',
          grey: '#646464',
          light_black: '#222',
          layout_text: '#0F0700',
          button: '#FFFAF5',
          core_values: '#717171',
          light_blue: '#74B8FE',
        },
        bg: {
          grey: '#F8F8F8',
        },
        border: {
          input_white: '#EEEDF0',
        },
      },
      borderRadius: {
        '5px': '5px',
        '20px': '20px',
        '30px': '30px',
        '4xl': '32px',
        '40px': '40px',
      },
      borderWidth: {
        '3px': '3px',
        '5px': '5px',
      },
      boxShadow: {
        green: '0px 8px 28px -6px rgba(10, 150, 58, 0.42)',
        darkGreen: '0px 8px 28px -6px #006307',
        // green: '0px 8px 28px -6px rgba(10, 150, 58, 0.42), 0px 18px 88px -4px rgba(11, 147, 59, 0.42);'
        gray: '0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)',
        bg_layer: 'inset 0 0 0 1000px rgba(0, 11, 3, 0.8)',
      },
      margin: {
        '5px': '5px',
        '10px': '10px',
        '11px': '11px',
        '13px': '13px',
        '14px': '14px',
        '18px': '18px',
        '21px': '21px',
        '22px': '22px',
        '24px': '24px',
        '25px': '25px',
        '26px': '26px',
        '27px': '27px',
        '30px': '30px',
        '38px': '38px !important',
        '39px': '39px',
        '45px': '45px',
        '50px': '50px',
        '51px': '51px',
        '52px': '52px',
        '55px': '55px',
        '56px': '56px',
        '59px': '59px',
        '63px': '63px',
        '69px': '69px',
        '71px': '71px',
        '83px': '83px',
        '86px': '86px',
        auto: 'auto !important',
      },
      height: {
        '55px': '55px',
        '60px': '60px',
        '69px': '69px',
        '151px': '151px',
        '200px': '200px',
        '244px': '244px',
        '1063px': '1063px',
        '1.5em': '1.5em',
        '2.5em': '2.5em',
      },
      width: {
        '60px': '60px',
        '242px': '242px',
        '229px': '229px',
        '933px': '933px',
        '981px': '981px',
        '1.5em': '1.5em',
        '2.5em': '2.5em',
      },
      gap: {
        '10px': '10px',
        '11px': '11px',
        '15px': '15px',
        '22px': '22px',
        1.125: '1.125rem',
      },
      fontSize: {
        '13px': '13px',
        '17px': '17.56px',
        '24px': '24px',
        '28px': '28px',
        '32px': '32px',
        '1.5em': '1.5em',
      },
      padding: {
        '10px': '10px',
        '11px': '11px',
        '12px': '12px',
        '14px': '14px',
        '17px': '17px',
        '21px': '21px',
        '22px': '22px',
        '23px': '23px',
        '25px': '25px',
        '27px': '27px',
        '30px': '30px',
        '34px': '34px',
        '50px': '50px',
        '52px': '52px',
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
        '22px': '22px',
        '26px': '26px',
        '30px': '30px',
        '39px': '39px',
        '44px': '44px',
        '45px': '45px',
      },
    },
  },
  plugins: [],
};
