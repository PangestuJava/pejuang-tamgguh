module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    fontFamily: {
      poppins: ['Poppins'],
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
