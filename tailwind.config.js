/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: '#188cd8',
        grayColor: '#202327',
        graycolor2:'#6e767e'
      }
    },
  },
  plugins: [],
}

