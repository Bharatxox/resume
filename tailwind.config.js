/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Abril: ["Abril Fatface", "serif"],
      },
      colors: {
        primary: "#D1D1D1",
        secondary: "#1B1B1B",
        third: "#E1E1E1",
        fourth: "#CF6E1E",
      },
    },
  },
  plugins: [],
};
