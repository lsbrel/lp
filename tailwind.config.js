// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "blue",
      secondary: "purple",
      success: "green",
      danger: "red",
      warning: "yellow",
      opaque: "grey"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
