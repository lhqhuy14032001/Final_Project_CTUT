module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#5fcf86",
        black: "#000",
        "gray-text": "#c6c6c6",
        "text-dark": "#2632A",
      },
      fontFamily: {
        primary: "'Manrope', sans-serif ",
      },
      fontSize: {
        "fz-16": "16px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
