// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#02143F",
        "primary-light": "#2F59D0",
        secondary: "#D7060B",
        "secondary-light": "#D02F59",
        success: "#59D02F",
        kgray: "#E3E3E3",
        kwhite: "#FBFDFD",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
