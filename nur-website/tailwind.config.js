/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', 
    purge: [ 
        './src/**/*.{js,ts,jsx,tsx}', 
        './components/**/*.{js,ts,jsx,tsx}', 
    ], 
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accentPrimary: '#D3E75B',
        accentPrimaryHover: '#eeffb2cc',
        

      },
      typography: {
        heading: 'font-titan-one',
      }
    },
  },
  variants: {},
  plugins: [],
}