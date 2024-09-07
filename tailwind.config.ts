import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // fontSize: {
    //   sm: '0.65rem',
    //   base: '0.8rem',
    //   md: '0.88rem',
    //   xl: '1rem',
    //   '2xl': '1.25rem',
    //   '3xl': '1.5625rem',
    //   '4xl': '2.441rem',
    //   '5xl': '3.052rem',
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkNavy: "#0a192f",
        darkWhite: "#e2e8f0",
        lightWhite: "#94a3b8"
      }
    }
  },
  plugins: [],
};
export default config;
