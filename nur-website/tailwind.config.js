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
      borderWidth: {
        "4": "4px",
        "text-l": "18px"
      },
      colors: {
        accentPrimary: '#D3E75B',
        accentPrimaryHover: '#eeffb2cc',
        lime: '#00FF00', 
        whiteOpacHover: "rgba(228, 228, 217, 0.94)",
        whiteOpac: "rgba(255, 255, 255, 0.47)"

        

      },
      typography: {
        heading: 'font-titan-one',

      }
    },
  },
  variants: {},
  plugins: [],
}