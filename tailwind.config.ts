import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      backgroundColor: {
        purple: "#542c6c",
        ocre: "#cda860",
        pink: "#c7298e"
      },
      fontFamily: {
        alegreya: ["Alegreya", "serif"],
        "kaushan-script": ["Kaushan Script", "cursive"],
        lato: ["Lato", "sans-serif"],
        "libre-baskerville": ["Libre Baskerville", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        philosopher: ["Philosopher", "sans-serif"],
        "playfair-display": ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
        jacarta: ["Plus Jakarta Sans", "sans-serif"]
      },
      textColor: {
        purple: "#542c6c",
        ocre: "#cda860",
        pink: "#c7298e",
        pink2: "#cc4eae",
        ultraPink: "#f53687"
      }
    }
  },
  plugins: []
};
export default config;
