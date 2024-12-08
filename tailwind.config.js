/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "bg-primary": "#0D0D0D",
      "purple-dozewell-accent": "#391E8A",
      "purple-dozewell-light": "#7774A7",
      "purple-dozewell": "#7774A7",
      "purple-dark-dozewell": "#302D40",
      "blue-card-bg": "#6B8DB1",
      "light-blue-bg": "#628FC7",
      "dark-blue": "#1E4979",
      "dark-blue-deep": "#07305F",
      "gray-light-dozewell": "#D9D9D9",
      "gray-dark-dozewell": "#424242",
      "dozwell-green": "rgba(43, 217, 168, 1)",
      white: "#ffffff",
      black: "#000000",
    },

    fontFamily: {
      primary: ["Satoshi", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "dozewell-gradient": "linear-gradient(to bottom, #7774A7, #302D40)",
        "hero-pattern": "url('/src/assets/100vh-Bg.png')",
      },
      animation: {
        shake: "shake 1s infinite",
        "pulse-color": "pulse-color 2s infinite",
        breathing: "breathing 3s ease-in-out infinite",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(5px)" },
          "75%": { transform: "translateY(-5px)" },
        },
        "pulse-color": {
          "0%, 100%": { backgroundColor: "#d1d5db" },
          "50%": { backgroundColor: "#7774A7" },
        },
        breathing: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
