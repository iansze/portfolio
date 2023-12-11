/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        tada: {
          "0%, 100%": { transform: "scale(1)" },
          "10%, 20%": { transform: "scale(0.9) rotate(-3deg)" },
          "30%, 50%, 70%, 90%": { transform: "scale(1.5) rotate(3deg)" },
          "40%, 60%, 80%": { transform: "scale(1.5) rotate(-3deg)" },
        },
      },
      animation: {
        tada: "tada 1s infinite",
      },
      height: {
        screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
      },
      backgroundImage: {
        "gradient-pj1":
          "linear-gradient(90deg, rgba(0,48,255,0.40388768898488125) 53%, rgba(2,0,36,1) 90%)",
      },
      fontFamily: {
        robotoSlab: ["Roboto Slab", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },

  plugins: [],
};
