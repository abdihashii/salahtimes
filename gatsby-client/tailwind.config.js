/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        lg: '1210px',
        xl: '1980px',
      },
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
          nav_grey: '#130102',
        },
        bg: {
          grey: '#F8F8F8',
          light_blue: '#007EFF',
          dark_grey: '#23291F',
        },
        border: {
          input_white: '#EEEDF0',
          dropdown_grey: '#E5E1DE',
        },
      },
      borderRadius: {
        '4px': '4px',
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
        '2px': '2px',
        '3px': '3px',
        '5px': '5px',
        '6px': '6px',
        '7px': '7px',
        '10px': '10px',
        '11px': '11px',
        '13px': '13px',
        '14px': '14px',
        '15px': '15px',
        '17px': '17px',
        '18px': '18px',
        '19px': '19px',
        '21px': '21px',
        '22px': '22px',
        '24px': '24px',
        '25px': '25px',
        '26px': '26px',
        '27px': '27px',
        '30px': '30px',
        '36px': '36px',
        '38px': '38px !important',
        '39px': '39px',
        '45px': '45px',
        '50px': '50px',
        '51px': '51px',
        '52px': '52px',
        '55px': '55px',
        '56px': '56px',
        '59px': '59px',
        '60px': '60px',
        '63px': '63px',
        '69px': '69px',
        '71px': '71px',
        '83px': '83px',
        '86px': '86px',
        '100px': '100px',
        '106px': '106px',
        '183px': '183px',
        auto: 'auto !important',
      },
      height: {
        '18px': '18px',
        '1.5em': '1.5em', // 24px
        '2.5em': '2.5em', // 40px
        '55px': '55px',
        '60px': '60px',
        '69px': '69px',
        '6.25rem': '6.25rem', // 100px
        '151px': '151px',
        '200px': '200px',
        '244px': '244px',
        '1063px': '1063px',
      },
      width: {
        '18px': '18px',
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
        '21px': '21px',
        '22px': '22px',
        '30px': '30px',
        '71px': '71px',
        1.125: '1.125rem',
      },
      fontSize: {
        '13px': '13px',
        '14px': '14px',
        '17px': '17.56px',
        '19px': '19.41px',
        '24px': '24px',
        '28px': '28px',
        '32px': '32px',
        '40px': '40px',
        '45px': '45px',
        '1.5em': '1.5em',
      },
      padding: {
        '10px': '10px',
        '11px': '11px',
        '12px': '12px',
        '14px': '14px',
        '17px': '17px',
        '19px': '19px',
        '20px': '20px',
        '21px': '21px',
        '22px': '22px',
        '23px': '23px',
        '25px': '25px',
        '27px': '27px',
        '30px': '30px',
        '34px': '34px',
        '38px': '38px',
        '49px': '49px',
        '50px': '50px',
        '52px': '52px',
        '60px': '60px',
        '77px': '77px',
        '90px': '90px',
        '100px': '100px',
      },
      minWidth: {
        '2/10': '20%',
        '3/12': '25%',
        '11/12': '91.666667%',
      },
      maxWidth: {
        '370px': '370px',
      },
      minHeight: {
        '110vh': '110vh',
      },
      letterSpacing: {
        '0.011em': '0.011em',
      },
      lineHeight: {
        '22px': '22px',
        '23px': '23px',
        '26px': '26px',
        '29px': '29px',
        '30px': '30px',
        '39px': '39px',
        '44px': '44px',
        '45px': '45px',
        '55px': '55px',
        '57px': '57px',
      },
      spacing: {
        '10px': '10px',
        '25px': '25px',
        '5.5rem': '5.5rem', // 88px
        '122px': '122px',
      },
    },
  },
  plugins: [],
};
