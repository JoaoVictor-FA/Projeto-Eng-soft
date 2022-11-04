/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          main: "#2028EB",
          darker: "#151876",
          secondary: "#373EED",
          pure: "#0000FF",
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
  },
  plugins: [],
};
