/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      mainColor: "#347FD3",
      secondaryColor: "#C8C8CF",
      thirdColor: "#F06414",
      fourthColor: "#8A2BE2",
      fifthColor: "#E6DACF",
      sixthColor: "#2F67A9",
      inactiveColor: "#C4D9F2",
      activeColor: "#FFFFFF",
      activeGrayColor: "#ADB7C6",
      mainText: "#000000",
      secondaryText: "#EDF3FA",
      inactiveText: "#3A4148",
      // activeWin: "#48BB78",
      // activeDraw: "#ECC94B",
      // activeLoss: "#F56565",
      activeWin: "#6BBF59",
      activeDraw: " #F5B041",
      activeLoss: "#D9534F",
    }
  },

  extend: {
    
  },

};
