/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Rubik", "sans-serif"],
      },
      colors: {
        primary1: "#000",
        primary2: "#222",
        secondary: "#FFDF9A",
      },
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
