module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        "secondary": "#DEF5FF",
        "primary": "#93CBFF",
        "gradient": "#A5D8F0",
        "button": "#2697FF"
      }
    },
    fontFamily: {
      poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "0,75px"
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
