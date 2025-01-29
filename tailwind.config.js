/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/**/*.{html,js}"],
  theme: {
    extend: {
      colors :{
        "natural" :  "#417F56"
      },
      backgroundColor:{
        "natural" :  "#417F56"
      },
      fontFamily : {
        "Dana" : "Dana",
        "DanaMedium" : "Dana Medium",
        "DanaDemibold" : "Dana Demibold",
      },
      container  : {
        center : true,
        padding : {
        DEFAULT : "1rem",
        }
    }
      
    },
  },
  plugins: [],
}

