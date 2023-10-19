/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        closemodal: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        openmodal: {
          "0%": { opacity: "100%" },
          "100%": { opacity: "0%" },
        },
      },
      animation: {
        close: "closemodal 600ms easy-in-out",
        open: "openmodal 600ms easi-in-out",
      },
      boxShadow: {
        light: "0 0  10px #a5f3fc",
      },
    },
  },
  plugins: [],
};
