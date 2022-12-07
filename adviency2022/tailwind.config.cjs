/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'christmas': ['Mountains of Christmas'],
    },
    extend: {
      backgroundImage:{
        'bg-mobile': "url('/src/assets/fnmobile.jpg')",
        'bg-desktop': "url('/src/assets/fondoNavideñoListo.jpg')"
      }
    },
  },
  plugins: [],
}
