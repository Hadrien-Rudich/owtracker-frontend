/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      mainColor: "#347FD3",
      secondaryColor: "#C8C8CF",
      thirdColor: "#F06414",
      fourthColor: "#880ED4",
      inactiveColor: "#C4D9F2",
      activeColor: "#FFFFFF",
      activeGrayColor: "#ADB7C6",
      mainText: "#000000",
      secondaryText: "#EDF3FA",
      inactiveText: "#3A4148",
      activeWin: "#48BB78",
      activeDraw: "#ECC94B",
      activeLoss: "#F56565",
    },

    extend: {
      button: {
        base: "w-16 h-6 hover:scale-110 shadow-md",
        cancel: "text-mainText bg-secondaryColor",
        validate: "text-secondaryText bg-thirdColor",
      },
    },
  },
  plugins: [],
};
