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
        "text-l": "18px",
      },
      colors: {
        accentPrimary: '#D3E75B',
        accentPrimaryHover: '#eeffb2cc',
        lime: '#00FF00',
        bgLight: "rgba(228, 228, 217, 0.94)",
        bgYellowLight: "rgba(217, 220, 180, 1)",
      },
      fontFamily: {
        titan: ['"Titan One"', 'serif'], 
        nico: ['"Nico Moji"', 'serif'], 
        roboto: ['"Roboto"', 'serif'],  
      },
    },
  },
  variants: {},
  plugins: [],
};


