module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
      },
      colors: {
        "light-theme": "#ff5C5c",
        "dark-theme": "#470000",
        "regular-theme": "#ca1414",
      },
      fontSize: {
        "6.5xl": "4rem",
      },
      backgroundImage: (theme) => ({
        "cloth-preview": "url('https://i.postimg.cc/tR2rsrct/vvZQmlz.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
