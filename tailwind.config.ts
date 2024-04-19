import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { violet, blackA, green, mauve } from "@radix-ui/colors";

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
        secondaryDark: "rgb(34 37 49)",
        ...mauve,
        ...violet,
        ...green,
        ...blackA,
        primaryBlue: "rgb(56 97 251)",
        primaryDark: "rgb(23 25 36)",
      },
      keyframes: {
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
