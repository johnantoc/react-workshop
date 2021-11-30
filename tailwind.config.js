module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "header-height": "92px",
        "header-bottom": "36px",
        "horizontal-space": "30px",
        "vertical-space": "90px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
