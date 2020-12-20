module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#ead6d1",
          200: "#d5aca3",
          300: "#c18374",
          400: "#ac5946",
          500: "#973018",
          600: "#792613",
          700: "#5b1d0e",
          800: "#3c130a",
          900: "#1e0a05",
        },
      },
    },
  },
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  variants: {
    extend: {},
  },
  plugins: [],
};
