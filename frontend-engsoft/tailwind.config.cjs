/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        'lg': '-14px 14px 3px rgba(0,0,0, 0.25)',
      }
    },
    colors: {
      blue: {
        main: "#2028EB",
        darker: "#151876",
        secondary: "#373EED",
        pure: "#0000FF",
      },
      cyan:{
        main:"#20EBD3",
        darker:"#00AA96",
        light:"#6BF8E7"
      },
      green: {
        dark: "#1D6916",
        light:"#3CAE14"
      },
      red: {
        main: "#EA1919",
        secondary: "#AD1313",
        darker: "#680000",
      },
      yellow: {
        main: "#FFC700",
        darker: "#FF7A00",
      },
      white: "#FFFFFF",
      black: "#000000",
      gray: {
        light: "#F2F2F2",
        dark: "rgba(0, 0, 0, 0.5)",
        main: "rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: [],
};
