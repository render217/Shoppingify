/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        clrOrangePeel: '#F9A109',
        clrYellowishOrange: '#FFF0DE',
        clrRosyFinch: '#80485B',
        clrGranite: '#828282',
        clrShowDrift: '#F8F8F8',
        clrCottonSeed: '#BDBDBD',
        clrGravel: '#454545',
        clrValentineRed: '#EB5757',
        clrSliverSand: '#C1C1C4',
        clrDarkGrey: '#34333A',
        clrMalibu: '#56CCF2',
      },
      fontFamily: {
        Quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
