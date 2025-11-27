/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
    xs: { max: "350px" },
    sm: { max: "640px" },
    md: { max: "768px" },
    lg: { max: "991px" },
    xl: { max: "1024px" },
    xxl: { max: "1280px" },
  },

  },
  plugins: [],
};
