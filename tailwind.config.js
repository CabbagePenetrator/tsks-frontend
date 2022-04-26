const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#181820',
        },
        fuchsia: {
          500: '#BB3FDD',
          700: '#8D30A4',
        },
        rose: {
          400: '#FF9F7C',
        },
        zinc: {
          500: '#9E9EA1',
          800: '#30303D',
        },
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
