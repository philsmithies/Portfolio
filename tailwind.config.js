module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Oswald", "Arial"],
      body: ['"Open Sans"', "Helvetica"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
