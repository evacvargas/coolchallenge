/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
        hover: "#f2cac2"
      }
  },
  plugins: [],
}
