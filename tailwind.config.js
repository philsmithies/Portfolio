module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Oswald", "Arial"],
      body: ['"Open Sans"', "Helvetica"],
    },
    textColor: {
      teal100: "#B2F5EA",
      teal300: "#4FD1C5",
      secondary: "#ECC94B",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
