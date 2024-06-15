import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "light-1": "#ffffff",
        "light-2": "rgb(145, 142, 160)",
        "dark-1": "#000000",
        "dark-2": "#74767a",
        "dark-3": "#a5a8ad",
        "dark-4": "#e6e9f0",
        "blue-1": "#1d3bcc",
        "blue-2": "#081857",
      },
      backgroundImage: {
        "btn-linear-gradient":
          "linear-gradient(180deg, hsla(0, 0%, 100%, 0.1), hsla(0, 0%, 100%, 0))",
        "gradient-1": "linear-gradient(90deg, #7800ff 0%, #7800ff 100%)",
        "gradient-2": "linear-gradient(90deg, #004bff 0%, #1d3bcc 100%)",
        "gradient-3": "linear-gradient(90deg, #eb2343 0%, #eb2343 100%)",
        "gradient-4": "linear-gradient(90deg, #ffcc00 0%, #ffcc00 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        custom:
          "inset 0px -6px 15px rgba(156, 178, 255, 0.25), inset 0px 6px 15px rgba(229, 156, 255, 0.25)",
        "custom-hover":
          "inset 0 -6px 17px rgba(156, 178, 255, 0.3), inset 0 6px 17px rgba(229, 156, 255, 0.3)",
      },
      borderColor: {
        custom: "rgba(229, 156, 255, 0.534)",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
        },
      },
      animation: {
        bounce: "bounce 0.6s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
