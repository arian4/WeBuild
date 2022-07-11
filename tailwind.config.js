/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors : {
      transparent: 'transparent',
      current: 'currentColor',
      yellow : '#f5bf23',
      black : '#111',
      white : '#fff',
      gray : '#666',
      light_bg : '#eee'
    },
    extend: {
      
      fontFamily : {
        'body' : ['"Poppins"' , '"sans-serif"']
      }
    },
  },
  plugins: [],
}
