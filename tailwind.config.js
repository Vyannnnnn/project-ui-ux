/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        secondary: "#03F701",
      },
      backgroundImage: {
        custom: "url('../assets/bg-custom.png')",
        primary: "url('../assets/bg.png')",
      },
    },
  },
  plugins: [],
};
