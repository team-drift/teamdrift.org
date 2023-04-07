/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-gray': '#EFEFEF',
        'dark-gray': '#404040',
        'blue': '#1A5DAD',
      },
      screens: {
        xs: '500px'
      },
    },
  },
  plugins: [],
}

