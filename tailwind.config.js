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
    },
  },
  plugins: [],
};
