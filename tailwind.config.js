/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#23272E",
        secondary: "#8B909A",
        tertiary: "#4B465C",
        success: "#28C76F",
        warning: "#FFC600",
        danger: "#EA5455",
        action: "#0F60FF",
      },
      backgroundColor: {
        default: "#f5f5f5",
        secondary: "#F1F2F6",
        success: "#28C76F",
        warning: "#FFC600",
        danger: "#EA5455",
        action: "#0F60FF",
      },
      borderRadius: {
        50: "50%",
      },
      screens: {
        xs: "425px",
      },
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
      },
      boxShadow: {
        "bottom-border": "0 1px 0 #E9E7FD",
        "top-border": "0 1px 0 #E9E7FD",
      },
      borderColor: {
        secondary: "#E9E7FD",
      },
    },
  },
  plugins: [],
};
