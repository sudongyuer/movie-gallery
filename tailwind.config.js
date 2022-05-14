module.exports = {
  mode:'jit',
  content: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
      keyframes:{
        "transform-in":{
          "from":{
            transform:"translateX(-1200px)"
          },
          "to":{
            transform: "translateX(0)"
          }
        },
        "fade-in":{
          "from":{
            opacity:0
          },
          "to":{
            opacity:1
          }
        }
      },
      animation:{
        "transform-in": "transform-in 1.5s ease-in-out",
        "fade-in": "fade-in 1.5s ease-in-out"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
