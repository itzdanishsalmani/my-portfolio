import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          navy: "#0B1354",
          olive: "#38371B",
          yellow: "#FBE676",
          "yellow-heading": "#E5BF3B",
          "yellow-light": "#FFF3A1",
          cream: "#FEF9E1",
          "cream-dark": "#F5EFCB",
          "cream-card": "#FCF6D9",
          "cream-border": "#E3DAB5",
        },
      },
      boxShadow: {
        retro: "2px 2px 0px #0B1354",
        "retro-lg": "4px 4px 0px #0B1354",
        "retro-hover": "3px 3px 0px #0B1354",
        "retro-olive": "2px 2px 0px #38371B",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
