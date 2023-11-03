import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: {
          DEFAULT: colors.white,
          dark: colors.gray[900],
        },
        "secondary-background": {
          DEFAULT: colors.gray[100],
          dark: colors.gray[800],
        },
        primary: {
          DEFAULT: colors.blue[500],
          dark: colors.blue[400],
        },
        "primary-foreground": {
          DEFAULT: colors.white,
          dark: colors.gray[900],
        },
      },
    },
  },
  plugins: [],
};
export default config;
