"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({  
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(203, 213, 225, 0.3)",
        },
      },
    },
  },
});

export default theme;
