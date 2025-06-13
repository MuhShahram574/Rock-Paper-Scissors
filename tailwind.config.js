/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
      backgroundImage: {
        "main-gradient":
          "linear-gradient(to top left, #753682 0%, #bf2e34 100%)",
      },
    },
  },
  plugins: [],
};
