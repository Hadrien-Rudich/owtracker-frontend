/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      mainColor: '#C4D9F2',
      secondaryColor: '#C8C8CF',
      thirdColor: '#F06414',
      fourthColor: '#8A2BE2',
      fifthColor: '#E6DACF',
      sixthColor: '#2F67A9',
      inactiveColor: '#347FD3',
      activeColor: '#FFFFFF',
      activeGrayColor: '#ADB7C6',
      mainText: '#000000',
      secondaryText: '#FFFFFF',
      // secondaryText: "#EDF3FA",
      inactiveText: '#3A4148',
      activeWin: '#6BBF59',
      activeDraw: ' #F5B041',
      activeLoss: '#D9534F',
      warning: '#D32F2F',
    },
    screens: {
      xs: '520px',
      xxs: '430px',
      ...defaultTheme.screens,
    },
  },
};
