import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: "rgb(12, 20, 33)",
        secondary: "rgb(51,53,70)",
      },
    },
  },
  plugins: [],
} satisfies Config;
