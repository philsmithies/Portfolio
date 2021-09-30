module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Oswald", "Arial"],
        body: ['"Open Sans"', "Helvetica"],
      },
      textColor: {
        teal100: "#B2F5EA",
        teal300: "#4FD1C5",
        teal600: "#2C7A7B",
        secondary: "#ECC94B",
      },
      backgroundColor: {
        teal100: "#B2F5EA",
        teal300: "#4FD1C5",
        teal600: "#2C7A7B",
        secondary: "#ECC94B",
        backgroundColor: "#1a202c",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
