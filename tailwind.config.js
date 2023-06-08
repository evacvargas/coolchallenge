/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': {'max': '639px'},
      ...defaultTheme.screens,
    },
      extend: {
        fontFamily: {
          'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
        },
      },
      colors: {
        primary: "#CE452A",
        secondary: "#109460",
        background: "#e8e6e6",
        gray: "#1E232C",
        hover: "#f7e3df",
        white: "#FFFFFF"
      }
  },
  plugins: [],
}
