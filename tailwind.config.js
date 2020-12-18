// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["karla", "sans-serif"],
      },
      colors: {
        primary: "#D309E2",
        secondary: "#FF008C",
        white: "#FFFFFF",
        tertiary: "#3FA9F5",
      },
      fontSize: {
        "7xl": "5rem",
      },
      spacing: {
        "1px": "1px",
        "2px": "2px",
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
