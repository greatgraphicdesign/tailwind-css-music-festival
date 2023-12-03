/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)"
          },
          "50%": {
            transform: "scaleY(1.5)"
          }
        }
      },
      animation: {
        wavey: "wavey 1s linear infinite"
      }
    }
  },
  plugins: [
    require("./plugins/animationDelay"),
    require("./plugins/buttonPlugin"),
    require("./plugins/openVariant"),
    require("./plugins/tableCaption"),
  ],
};
