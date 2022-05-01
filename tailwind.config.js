const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          700: '#21212D',
          900: '#181820',
        },
        fuchsia: {
          500: '#BB3FDD',
          700: '#8D30A4',
        },
        red: {
          500: '#AC4D4F',
        },
        rose: {
          400: '#FF9F7C',
        },
        zinc: {
          500: '#9E9EA1',
          600: '#343342',
          700: '#30303D',
          800: '#272732',
          900: '#21212B',
        },
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
