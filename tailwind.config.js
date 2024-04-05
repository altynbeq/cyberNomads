/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        keyframes: {
          bounce : {
            '0%, 100%': '{ transform: translateY(-50%);  animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }' ,
            '50%':  '{ transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }'
          }
        },
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};