/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dropShadow: {
          lg: "-14px 14px 3px rgba(0,0,0, 0.25)",
        },
        white: "#FFFFFF",
        black: "#000000",
        blue: {
          main: "#2028EB",
          darker: "#151876",
          secondary: "#373EED",
          pure: "#0000FF",
        },
        gray: {
          light: "#F2F2F2",
          dark: "rgba(0, 0, 0, 0.5)",
          main: "rgba(0, 0, 0, 0.25)",
          dark2: "rgba(66, 66, 74, 0.2)",
        },
        red: {
          main: "#EA1919",
          secondary: "#AD1313",
          dark: "#680000",
        },
        yellow: "#FFC700",
        orange: "#FF7A00",
        green: {
          main: "#3CAE14",
          dark: "#1D6916",
        },
        cyan: {
          main: "#20EBD3",
          secondary: "#6BF8E7",
          dark: "#00AA96",
        },
      },
    },
  },
  plugins: [],
};
