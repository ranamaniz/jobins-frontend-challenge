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
      backgroundColor: { default: "#f5f5f5" },
      borderRadius: {
        50: "50%",
      },
    },
  },
  plugins: [],
};
