// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px)
      'md': '768px',
      // => @media (min-width: 768px)
      'lg': '1024px',
      // => @media (min-width: 1024px)
      'xl': '1280px',
      // => @media (min-width: 1280px)
      '2xl': '1536px',
      // => @media (min-width: 1536px)
    },
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
