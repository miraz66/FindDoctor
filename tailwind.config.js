/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      primaryColor: "#266EE3",
      secondaryColor: "#EEF4FF",
      primaryTextColor: "#000000",
      secondaryTextColor: "#686868",
      textWhite: "#ffffff",
    },
  },
  plugins: [],
};
