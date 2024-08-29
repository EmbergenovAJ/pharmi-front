const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'display': ['Oswald', 'sans-serif', ],
      'body': ['Open Sans', 'Helvetica', 'sans-serif'],
      'text': ['Manrope', 'sans-serif', ],
    },
    extend: {},
  },
  plugins: [],
});

