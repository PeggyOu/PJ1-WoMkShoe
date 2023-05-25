/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: { 
       'bebas-neue': ['"Bebas Neue"', 'sans-serif'], 'plus-jakarta-sans': ['"Plus Jakarta Sans"', 'sans-serif'],
    },
  },
},
  plugins: [],
};

