/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#4E4E4E",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0.7 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.1s ease-in-out",
      },
    },
  },
  plugins: [],
};
