/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "640px",
      lg: "700px",
      xl: "800px",
      "2xl": "850px",
    },
    extend: {},
  },
  plugins: [],
};
