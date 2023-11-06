/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"SUIT"', '"sans-serif"'],
    },
    extend: {
      lineHeight: {
        hero: '70px',
        heading1: '57px',
        heading2: '42px',
        heading3: '36px',
        body1: '24px',
        body2: '21px',
        caption: '18px',
        caption2: '15px',
      },
      fontSize: {
        hero: '50px',
        heading1: '38px',
        heading2: '28px',
        heading3: '24px',
        body1: '16px',
        body2: '14px',
        caption: '12px',
        caption2: '10px',
      },
      colors: {
        primary: {
          10: 'rgba(246, 244, 255, 1)',
          20: 'rgba(236, 233, 255, 1)',
          30: 'rgba(220, 213, 254, 1)',
          40: 'rgba(170, 152, 249, 1)',
          50: 'rgba(132, 106, 244, 1)',
          60: 'rgba(115, 86, 239, 1)',
          70: 'rgba(86, 55, 222, 1)',
        },
        gray: {
          0: 'rgba(255, 255, 255, 1)',
          10: 'rgba(243, 244, 246, 1)',
          20: 'rgba(221, 222, 227, 1)',
          30: 'rgba(209, 211, 219, 1)',
          50: 'rgba(165, 166, 171, 1)',
          60: 'rgba(120, 121, 125, 1)',
          70: 'rgba(85, 85, 85, 1)',
          90: 'rgba(58, 58, 58, 1)',
          100: 'rgba(0, 0, 0, 1)',
        },
        red: {
          10: 'rgba(255, 234, 234, 1)',
          30: 'rgba(255, 85, 95, 1)',
          50: 'rgba(255, 26, 39, 1)',
        },
        blue: {
          10: 'rgba(225, 237, 255, 1)',
          50: 'rgba(48, 124, 238, 1)',
        },
        green: {
          10: 'rgba(226, 255, 250, 1)',
          50: 'rgba(54, 240, 207, 1)',
          80: 'rgba(36, 197, 158, 1)',
        },
        alert: 'rgba(58, 58, 58, 0.85)',
        background: 'rgba(249, 249, 249, 1)',
        overay: {
          70: 'rgba(0, 0, 0, 0.7)',
          90: 'rgba(0, 0, 0, 0.9)',
        },
        gradient: {
          50: 'linear-gradient(100deg, rgba(115, 86, 239, 1), rgba(115, 86, 239, 1))',
          10: 'linear-gradient(100deg, rgba(115, 86, 239, 1), rgba(115, 86, 239, 1))',
        },
      },
    },
  },
  plugins: [],
};
